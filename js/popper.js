/**
 * @popperjs/core v2.9.1 - MIT License
 */

"use strict";
! function(e, t) { "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = "undefined" != typeof globalThis ? globalThis : e || self).Popper = {}) }(this, (function(e) {
    function t(e) { return { width: (e = e.getBoundingClientRect()).width, height: e.height, top: e.top, right: e.right, bottom: e.bottom, left: e.left, x: e.left, y: e.top } }

    function n(e) { return null == e ? window : "[object Window]" !== e.toString() ? (e = e.ownerDocument) && e.defaultView || window : e }

    function o(e) { return { scrollLeft: (e = n(e)).pageXOffset, scrollTop: e.pageYOffset } }

    function r(e) { return e instanceof n(e).Element || e instanceof Element }

    function i(e) { return e instanceof n(e).HTMLElement || e instanceof HTMLElement }

    function a(e) { return "undefined" != typeof ShadowRoot && (e instanceof n(e).ShadowRoot || e instanceof ShadowRoot) }

    function s(e) { return e ? (e.nodeName || "").toLowerCase() : null }

    function f(e) { return ((r(e) ? e.ownerDocument : e.document) || window.document).documentElement }

    function p(e) { return t(f(e)).left + o(e).scrollLeft }

    function c(e) { return n(e).getComputedStyle(e) }

    function l(e) { return e = c(e), /auto|scroll|overlay|hidden/.test(e.overflow + e.overflowY + e.overflowX) }

    function u(e, r, a) {
        void 0 === a && (a = !1);
        var c = f(r);
        e = t(e);
        var u = i(r),
            d = { scrollLeft: 0, scrollTop: 0 },
            m = { x: 0, y: 0 };
        return (u || !u && !a) && (("body" !== s(r) || l(c)) && (d = r !== n(r) && i(r) ? { scrollLeft: r.scrollLeft, scrollTop: r.scrollTop } : o(r)), i(r) ? ((m = t(r)).x += r.clientLeft, m.y += r.clientTop) : c && (m.x = p(c))), { x: e.left + d.scrollLeft - m.x, y: e.top + d.scrollTop - m.y, width: e.width, height: e.height }
    }

    function d(e) {
        var n = t(e),
            o = e.offsetWidth,
            r = e.offsetHeight;
        return 1 >= Math.abs(n.width - o) && (o = n.width), 1 >= Math.abs(n.height - r) && (r = n.height), { x: e.offsetLeft, y: e.offsetTop, width: o, height: r }
    }

    function m(e) { return "html" === s(e) ? e : e.assignedSlot || e.parentNode || (a(e) ? e.host : null) || f(e) }

    function h(e) { return 0 <= ["html", "body", "#document"].indexOf(s(e)) ? e.ownerDocument.body : i(e) && l(e) ? e : h(m(e)) }

    function v(e, t) {
        var o;
        void 0 === t && (t = []);
        var r = h(e);
        return e = r === (null == (o = e.ownerDocument) ? void 0 : o.body), o = n(r), r = e ? [o].concat(o.visualViewport || [], l(r) ? r : []) : r, t = t.concat(r), e ? t : t.concat(v(m(r)))
    }

    function g(e) { return i(e) && "fixed" !== c(e).position ? e.offsetParent : null }

    function y(e) {
        for (var t = n(e), o = g(e); o && 0 <= ["table", "td", "th"].indexOf(s(o)) && "static" === c(o).position;) o = g(o);
        if (o && ("html" === s(o) || "body" === s(o) && "static" === c(o).position)) return t;
        if (!o) e: {
            for (o = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox"), e = m(e); i(e) && 0 > ["html", "body"].indexOf(s(e));) {
                var r = c(e);
                if ("none" !== r.transform || "none" !== r.perspective || "paint" === r.contain || -1 !== ["transform", "perspective"].indexOf(r.willChange) || o && "filter" === r.willChange || o && r.filter && "none" !== r.filter) { o = e; break e }
                e = e.parentNode
            }
            o = null
        }
        return o || t
    }

    function b(e) {
        function t(e) { o.add(e.name), [].concat(e.requires || [], e.requiresIfExists || []).forEach((function(e) { o.has(e) || (e = n.get(e)) && t(e) })), r.push(e) }
        var n = new Map,
            o = new Set,
            r = [];
        return e.forEach((function(e) { n.set(e.name, e) })), e.forEach((function(e) { o.has(e.name) || t(e) })), r
    }

    function w(e) { var t; return function() { return t || (t = new Promise((function(n) { Promise.resolve().then((function() { t = void 0, n(e()) })) }))), t } }

    function x(e) { return e.split("-")[0] }

    function O(e, t) {
        var n = t.getRootNode && t.getRootNode();
        if (e.contains(t)) return !0;
        if (n && a(n))
            do {
                if (t && e.isSameNode(t)) return !0;
                t = t.parentNode || t.host
            } while (t);
        return !1
    }

    function j(e) { return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height }) }

    function E(e, r) {
        if ("viewport" === r) {
            r = n(e);
            var a = f(e);
            r = r.visualViewport;
            var s = a.clientWidth;
            a = a.clientHeight;
            var l = 0,
                u = 0;
            r && (s = r.width, a = r.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (l = r.offsetLeft, u = r.offsetTop)), e = j(e = { width: s, height: a, x: l + p(e), y: u })
        } else i(r) ? ((e = t(r)).top += r.clientTop, e.left += r.clientLeft, e.bottom = e.top + r.clientHeight, e.right = e.left + r.clientWidth, e.width = r.clientWidth, e.height = r.clientHeight, e.x = e.left, e.y = e.top) : (u = f(e), e = f(u), s = o(u), r = null == (a = u.ownerDocument) ? void 0 : a.body, a = _(e.scrollWidth, e.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), l = _(e.scrollHeight, e.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), u = -s.scrollLeft + p(u), s = -s.scrollTop, "rtl" === c(r || e).direction && (u += _(e.clientWidth, r ? r.clientWidth : 0) - a), e = j({ width: a, height: l, x: u, y: s }));
        return e
    }

    function D(e, t, n) {
        return t = "clippingParents" === t ? function(e) {
            var t = v(m(e)),
                n = 0 <= ["absolute", "fixed"].indexOf(c(e).position) && i(e) ? y(e) : e;
            return r(n) ? t.filter((function(e) { return r(e) && O(e, n) && "body" !== s(e) })) : []
        }(e) : [].concat(t), (n = (n = [].concat(t, [n])).reduce((function(t, n) { return n = E(e, n), t.top = _(n.top, t.top), t.right = U(n.right, t.right), t.bottom = U(n.bottom, t.bottom), t.left = _(n.left, t.left), t }), E(e, n[0]))).width = n.right - n.left, n.height = n.bottom - n.top, n.x = n.left, n.y = n.top, n
    }

    function L(e) { return 0 <= ["top", "bottom"].indexOf(e) ? "x" : "y" }

    function P(e) {
        var t = e.reference,
            n = e.element,
            o = (e = e.placement) ? x(e) : null;
        e = e ? e.split("-")[1] : null;
        var r = t.x + t.width / 2 - n.width / 2,
            i = t.y + t.height / 2 - n.height / 2;
        switch (o) {
            case "top":
                r = { x: r, y: t.y - n.height };
                break;
            case "bottom":
                r = { x: r, y: t.y + t.height };
                break;
            case "right":
                r = { x: t.x + t.width, y: i };
                break;
            case "left":
                r = { x: t.x - n.width, y: i };
                break;
            default:
                r = { x: t.x, y: t.y }
        }
        if (null != (o = o ? L(o) : null)) switch (i = "y" === o ? "height" : "width", e) {
            case "start":
                r[o] -= t[i] / 2 - n[i] / 2;
                break;
            case "end":
                r[o] += t[i] / 2 - n[i] / 2
        }
        return r
    }

    function M(e) { return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, e) }

    function k(e, t) { return t.reduce((function(t, n) { return t[n] = e, t }), {}) }

    function W(e, n) {
        void 0 === n && (n = {});
        var o = n;
        n = void 0 === (n = o.placement) ? e.placement : n;
        var i = o.boundary,
            a = void 0 === i ? "clippingParents" : i,
            s = void 0 === (i = o.rootBoundary) ? "viewport" : i;
        i = void 0 === (i = o.elementContext) ? "popper" : i;
        var p = o.altBoundary,
            c = void 0 !== p && p;
        o = M("number" != typeof(o = void 0 === (o = o.padding) ? 0 : o) ? o : k(o, C));
        var l = e.elements.reference;
        p = e.rects.popper, a = D(r(c = e.elements[c ? "popper" === i ? "reference" : "popper" : i]) ? c : c.contextElement || f(e.elements.popper), a, s), c = P({ reference: s = t(l), element: p, strategy: "absolute", placement: n }), p = j(Object.assign({}, p, c)), s = "popper" === i ? p : s;
        var u = { top: a.top - s.top + o.top, bottom: s.bottom - a.bottom + o.bottom, left: a.left - s.left + o.left, right: s.right - a.right + o.right };
        if (e = e.modifiersData.offset, "popper" === i && e) {
            var d = e[n];
            Object.keys(u).forEach((function(e) {
                var t = 0 <= ["right", "bottom"].indexOf(e) ? 1 : -1,
                    n = 0 <= ["top", "bottom"].indexOf(e) ? "y" : "x";
                u[e] += d[n] * t
            }))
        }
        return u
    }

    function A() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return !t.some((function(e) { return !(e && "function" == typeof e.getBoundingClientRect) })) }

    function B(e) {
        void 0 === e && (e = {});
        var t = e.defaultModifiers,
            n = void 0 === t ? [] : t,
            o = void 0 === (e = e.defaultOptions) ? F : e;
        return function(e, t, i) {
            function a() { f.forEach((function(e) { return e() })), f = [] }
            void 0 === i && (i = o);
            var s = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, F, o), modifiersData: {}, elements: { reference: e, popper: t }, attributes: {}, styles: {} },
                f = [],
                p = !1,
                c = {
                    state: s,
                    setOptions: function(i) {
                        return a(), s.options = Object.assign({}, o, s.options, i), s.scrollParents = { reference: r(e) ? v(e) : e.contextElement ? v(e.contextElement) : [], popper: v(t) }, i = function(e) { var t = b(e); return I.reduce((function(e, n) { return e.concat(t.filter((function(e) { return e.phase === n }))) }), []) }(function(e) { var t = e.reduce((function(e, t) { var n = e[t.name]; return e[t.name] = n ? Object.assign({}, n, t, { options: Object.assign({}, n.options, t.options), data: Object.assign({}, n.data, t.data) }) : t, e }), {}); return Object.keys(t).map((function(e) { return t[e] })) }([].concat(n, s.options.modifiers))), s.orderedModifiers = i.filter((function(e) { return e.enabled })), s.orderedModifiers.forEach((function(e) {
                            var t = e.name,
                                n = e.options;
                            n = void 0 === n ? {} : n, "function" == typeof(e = e.effect) && (t = e({ state: s, name: t, instance: c, options: n }), f.push(t || function() {}))
                        })), c.update()
                    },
                    forceUpdate: function() {
                        if (!p) {
                            var e = s.elements,
                                t = e.reference;
                            if (A(t, e = e.popper))
                                for (s.rects = { reference: u(t, y(e), "fixed" === s.options.strategy), popper: d(e) }, s.reset = !1, s.placement = s.options.placement, s.orderedModifiers.forEach((function(e) { return s.modifiersData[e.name] = Object.assign({}, e.data) })), t = 0; t < s.orderedModifiers.length; t++)
                                    if (!0 === s.reset) s.reset = !1, t = -1;
                                    else {
                                        var n = s.orderedModifiers[t];
                                        e = n.fn;
                                        var o = n.options;
                                        o = void 0 === o ? {} : o, n = n.name, "function" == typeof e && (s = e({ state: s, options: o, name: n, instance: c }) || s)
                                    }
                        }
                    },
                    update: w((function() { return new Promise((function(e) { c.forceUpdate(), e(s) })) })),
                    destroy: function() { a(), p = !0 }
                };
            return A(e, t) ? (c.setOptions(i).then((function(e) {!p && i.onFirstUpdate && i.onFirstUpdate(e) })), c) : c
        }
    }

    function T(e) {
        var t, o = e.popper,
            r = e.popperRect,
            i = e.placement,
            a = e.offsets,
            s = e.position,
            p = e.gpuAcceleration,
            l = e.adaptive;
        if (!0 === (e = e.roundOffsets)) {
            e = a.y;
            var u = window.devicePixelRatio || 1;
            e = { x: z(z(a.x * u) / u) || 0, y: z(z(e * u) / u) || 0 }
        } else e = "function" == typeof e ? e(a) : a;
        e = void 0 === (e = (u = e).x) ? 0 : e, u = void 0 === (u = u.y) ? 0 : u;
        var d = a.hasOwnProperty("x");
        a = a.hasOwnProperty("y");
        var m, h = "left",
            v = "top",
            g = window;
        if (l) {
            var b = y(o),
                w = "clientHeight",
                x = "clientWidth";
            b === n(o) && ("static" !== c(b = f(o)).position && (w = "scrollHeight", x = "scrollWidth")), "top" === i && (v = "bottom", u -= b[w] - r.height, u *= p ? 1 : -1), "left" === i && (h = "right", e -= b[x] - r.width, e *= p ? 1 : -1)
        }
        return o = Object.assign({ position: s }, l && J), p ? Object.assign({}, o, ((m = {})[v] = a ? "0" : "", m[h] = d ? "0" : "", m.transform = 2 > (g.devicePixelRatio || 1) ? "translate(" + e + "px, " + u + "px)" : "translate3d(" + e + "px, " + u + "px, 0)", m)) : Object.assign({}, o, ((t = {})[v] = a ? u + "px" : "", t[h] = d ? e + "px" : "", t.transform = "", t))
    }

    function H(e) { return e.replace(/left|right|bottom|top/g, (function(e) { return $[e] })) }

    function R(e) { return e.replace(/start|end/g, (function(e) { return ee[e] })) }

    function S(e, t, n) { return void 0 === n && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x } }

    function q(e) { return ["top", "right", "bottom", "left"].some((function(t) { return 0 <= e[t] })) }
    var C = ["top", "bottom", "right", "left"],
        N = C.reduce((function(e, t) { return e.concat([t + "-start", t + "-end"]) }), []),
        V = [].concat(C, ["auto"]).reduce((function(e, t) { return e.concat([t, t + "-start", t + "-end"]) }), []),
        I = "beforeRead read afterRead beforeMain main afterMain beforeWrite write afterWrite".split(" "),
        _ = Math.max,
        U = Math.min,
        z = Math.round,
        F = { placement: "bottom", modifiers: [], strategy: "absolute" },
        X = { passive: !0 },
        Y = {
            name: "eventListeners",
            enabled: !0,
            phase: "write",
            fn: function() {},
            effect: function(e) {
                var t = e.state,
                    o = e.instance,
                    r = (e = e.options).scroll,
                    i = void 0 === r || r,
                    a = void 0 === (e = e.resize) || e,
                    s = n(t.elements.popper),
                    f = [].concat(t.scrollParents.reference, t.scrollParents.popper);
                return i && f.forEach((function(e) { e.addEventListener("scroll", o.update, X) })), a && s.addEventListener("resize", o.update, X),
                    function() { i && f.forEach((function(e) { e.removeEventListener("scroll", o.update, X) })), a && s.removeEventListener("resize", o.update, X) }
            },
            data: {}
        },
        G = {
            name: "popperOffsets",
            enabled: !0,
            phase: "read",
            fn: function(e) {
                var t = e.state;
                t.modifiersData[e.name] = P({ reference: t.rects.reference, element: t.rects.popper, strategy: "absolute", placement: t.placement })
            },
            data: {}
        },
        J = { top: "auto", right: "auto", bottom: "auto", left: "auto" },
        K = {
            name: "computeStyles",
            enabled: !0,
            phase: "beforeWrite",
            fn: function(e) {
                var t = e.state,
                    n = e.options;
                e = void 0 === (e = n.gpuAcceleration) || e;
                var o = n.adaptive;
                o = void 0 === o || o, n = void 0 === (n = n.roundOffsets) || n, e = { placement: x(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: e }, null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign({}, t.styles.popper, T(Object.assign({}, e, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: o, roundOffsets: n })))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, T(Object.assign({}, e, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: n })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement })
            },
            data: {}
        },
        Q = {
            name: "applyStyles",
            enabled: !0,
            phase: "write",
            fn: function(e) {
                var t = e.state;
                Object.keys(t.elements).forEach((function(e) {
                    var n = t.styles[e] || {},
                        o = t.attributes[e] || {},
                        r = t.elements[e];
                    i(r) && s(r) && (Object.assign(r.style, n), Object.keys(o).forEach((function(e) { var t = o[e];!1 === t ? r.removeAttribute(e) : r.setAttribute(e, !0 === t ? "" : t) })))
                }))
            },
            effect: function(e) {
                var t = e.state,
                    n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
                return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
                    function() {
                        Object.keys(t.elements).forEach((function(e) {
                            var o = t.elements[e],
                                r = t.attributes[e] || {};
                            e = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce((function(e, t) { return e[t] = "", e }), {}), i(o) && s(o) && (Object.assign(o.style, e), Object.keys(r).forEach((function(e) { o.removeAttribute(e) })))
                        }))
                    }
            },
            requires: ["computeStyles"]
        },
        Z = {
            name: "offset",
            enabled: !0,
            phase: "main",
            requires: ["popperOffsets"],
            fn: function(e) {
                var t = e.state,
                    n = e.name,
                    o = void 0 === (e = e.options.offset) ? [0, 0] : e,
                    r = (e = V.reduce((function(e, n) {
                        var r = t.rects,
                            i = x(n),
                            a = 0 <= ["left", "top"].indexOf(i) ? -1 : 1,
                            s = "function" == typeof o ? o(Object.assign({}, r, { placement: n })) : o;
                        return r = (r = s[0]) || 0, s = ((s = s[1]) || 0) * a, i = 0 <= ["left", "right"].indexOf(i) ? { x: s, y: r } : { x: r, y: s }, e[n] = i, e
                    }), {}))[t.placement],
                    i = r.x;
                r = r.y, null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += i, t.modifiersData.popperOffsets.y += r), t.modifiersData[n] = e
            }
        },
        $ = { left: "right", right: "left", bottom: "top", top: "bottom" },
        ee = { start: "end", end: "start" },
        te = {
            name: "flip",
            enabled: !0,
            phase: "main",
            fn: function(e) {
                var t = e.state,
                    n = e.options;
                if (e = e.name, !t.modifiersData[e]._skip) {
                    var o = n.mainAxis;
                    o = void 0 === o || o;
                    var r = n.altAxis;
                    r = void 0 === r || r;
                    var i = n.fallbackPlacements,
                        a = n.padding,
                        s = n.boundary,
                        f = n.rootBoundary,
                        p = n.altBoundary,
                        c = n.flipVariations,
                        l = void 0 === c || c,
                        u = n.allowedAutoPlacements;
                    c = x(n = t.options.placement), i = i || (c !== n && l ? function(e) { if ("auto" === x(e)) return []; var t = H(e); return [R(e), t, R(t)] }(n) : [H(n)]);
                    var d = [n].concat(i).reduce((function(e, n) {
                        return e.concat("auto" === x(n) ? function(e, t) {
                            void 0 === t && (t = {});
                            var n = t.boundary,
                                o = t.rootBoundary,
                                r = t.padding,
                                i = t.flipVariations,
                                a = t.allowedAutoPlacements,
                                s = void 0 === a ? V : a,
                                f = t.placement.split("-")[1];
                            0 === (i = (t = f ? i ? N : N.filter((function(e) { return e.split("-")[1] === f })) : C).filter((function(e) { return 0 <= s.indexOf(e) }))).length && (i = t);
                            var p = i.reduce((function(t, i) { return t[i] = W(e, { placement: i, boundary: n, rootBoundary: o, padding: r })[x(i)], t }), {});
                            return Object.keys(p).sort((function(e, t) { return p[e] - p[t] }))
                        }(t, { placement: n, boundary: s, rootBoundary: f, padding: a, flipVariations: l, allowedAutoPlacements: u }) : n)
                    }), []);
                    n = t.rects.reference, i = t.rects.popper;
                    var m = new Map;
                    c = !0;
                    for (var h = d[0], v = 0; v < d.length; v++) {
                        var g = d[v],
                            y = x(g),
                            b = "start" === g.split("-")[1],
                            w = 0 <= ["top", "bottom"].indexOf(y),
                            O = w ? "width" : "height",
                            j = W(t, { placement: g, boundary: s, rootBoundary: f, altBoundary: p, padding: a });
                        if (b = w ? b ? "right" : "left" : b ? "bottom" : "top", n[O] > i[O] && (b = H(b)), O = H(b), w = [], o && w.push(0 >= j[y]), r && w.push(0 >= j[b], 0 >= j[O]), w.every((function(e) { return e }))) { h = g, c = !1; break }
                        m.set(g, w)
                    }
                    if (c)
                        for (o = function(e) { var t = d.find((function(t) { if (t = m.get(t)) return t.slice(0, e).every((function(e) { return e })) })); if (t) return h = t, "break" }, r = l ? 3 : 1; 0 < r && "break" !== o(r); r--);
                    t.placement !== h && (t.modifiersData[e]._skip = !0, t.placement = h, t.reset = !0)
                }
            },
            requiresIfExists: ["offset"],
            data: { _skip: !1 }
        },
        ne = {
            name: "preventOverflow",
            enabled: !0,
            phase: "main",
            fn: function(e) {
                var t = e.state,
                    n = e.options;
                e = e.name;
                var o = n.mainAxis,
                    r = void 0 === o || o,
                    i = void 0 !== (o = n.altAxis) && o;
                o = void 0 === (o = n.tether) || o;
                var a = n.tetherOffset,
                    s = void 0 === a ? 0 : a,
                    f = W(t, { boundary: n.boundary, rootBoundary: n.rootBoundary, padding: n.padding, altBoundary: n.altBoundary });
                n = x(t.placement);
                var p = t.placement.split("-")[1],
                    c = !p,
                    l = L(n);
                n = "x" === l ? "y" : "x", a = t.modifiersData.popperOffsets;
                var u = t.rects.reference,
                    m = t.rects.popper,
                    h = "function" == typeof s ? s(Object.assign({}, t.rects, { placement: t.placement })) : s;
                if (s = { x: 0, y: 0 }, a) {
                    if (r || i) {
                        var v = "y" === l ? "top" : "left",
                            g = "y" === l ? "bottom" : "right",
                            b = "y" === l ? "height" : "width",
                            w = a[l],
                            O = a[l] + f[v],
                            j = a[l] - f[g],
                            E = o ? -m[b] / 2 : 0,
                            D = "start" === p ? u[b] : m[b];
                        p = "start" === p ? -m[b] : -u[b], m = t.elements.arrow, m = o && m ? d(m) : { width: 0, height: 0 };
                        var P = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : { top: 0, right: 0, bottom: 0, left: 0 };
                        v = P[v], g = P[g], m = _(0, U(u[b], m[b])), D = c ? u[b] / 2 - E - m - v - h : D - m - v - h, u = c ? -u[b] / 2 + E + m + g + h : p + m + g + h, c = t.elements.arrow && y(t.elements.arrow), h = t.modifiersData.offset ? t.modifiersData.offset[t.placement][l] : 0, c = a[l] + D - h - (c ? "y" === l ? c.clientTop || 0 : c.clientLeft || 0 : 0), u = a[l] + u - h, r && (r = o ? U(O, c) : O, j = o ? _(j, u) : j, r = _(r, U(w, j)), a[l] = r, s[l] = r - w), i && (r = (i = a[n]) + f["x" === l ? "top" : "left"], f = i - f["x" === l ? "bottom" : "right"], r = o ? U(r, c) : r, o = o ? _(f, u) : f, o = _(r, U(i, o)), a[n] = o, s[n] = o - i)
                    }
                    t.modifiersData[e] = s
                }
            },
            requiresIfExists: ["offset"]
        },
        oe = {
            name: "arrow",
            enabled: !0,
            phase: "main",
            fn: function(e) {
                var t, n = e.state,
                    o = e.name,
                    r = e.options,
                    i = n.elements.arrow,
                    a = n.modifiersData.popperOffsets,
                    s = x(n.placement);
                if (e = L(s), s = 0 <= ["left", "right"].indexOf(s) ? "height" : "width", i && a) {
                    r = M("number" != typeof(r = "function" == typeof(r = r.padding) ? r(Object.assign({}, n.rects, { placement: n.placement })) : r) ? r : k(r, C));
                    var f = d(i),
                        p = "y" === e ? "top" : "left",
                        c = "y" === e ? "bottom" : "right",
                        l = n.rects.reference[s] + n.rects.reference[e] - a[e] - n.rects.popper[s];
                    a = a[e] - n.rects.reference[e], a = (i = (i = y(i)) ? "y" === e ? i.clientHeight || 0 : i.clientWidth || 0 : 0) / 2 - f[s] / 2 + (l / 2 - a / 2), s = _(r[p], U(a, i - f[s] - r[c])), n.modifiersData[o] = ((t = {})[e] = s, t.centerOffset = s - a, t)
                }
            },
            effect: function(e) {
                var t = e.state;
                if (null != (e = void 0 === (e = e.options.element) ? "[data-popper-arrow]" : e)) {
                    if ("string" == typeof e && !(e = t.elements.popper.querySelector(e))) return;
                    O(t.elements.popper, e) && (t.elements.arrow = e)
                }
            },
            requires: ["popperOffsets"],
            requiresIfExists: ["preventOverflow"]
        },
        re = {
            name: "hide",
            enabled: !0,
            phase: "main",
            requiresIfExists: ["preventOverflow"],
            fn: function(e) {
                var t = e.state;
                e = e.name;
                var n = t.rects.reference,
                    o = t.rects.popper,
                    r = t.modifiersData.preventOverflow,
                    i = W(t, { elementContext: "reference" }),
                    a = W(t, { altBoundary: !0 });
                n = S(i, n), o = S(a, o, r), r = q(n), a = q(o), t.modifiersData[e] = { referenceClippingOffsets: n, popperEscapeOffsets: o, isReferenceHidden: r, hasPopperEscaped: a }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": r, "data-popper-escaped": a })
            }
        },
        ie = B({ defaultModifiers: [Y, G, K, Q] }),
        ae = [Y, G, K, Q, Z, te, ne, oe, re],
        se = B({ defaultModifiers: ae });
    e.applyStyles = Q, e.arrow = oe, e.computeStyles = K, e.createPopper = se, e.createPopperLite = ie, e.defaultModifiers = ae, e.detectOverflow = W, e.eventListeners = Y, e.flip = te, e.hide = re, e.offset = Z, e.popperGenerator = B, e.popperOffsets = G, e.preventOverflow = ne, Object.defineProperty(e, "__esModule", { value: !0 })
}));