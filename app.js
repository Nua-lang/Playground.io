(window.webpackJsonp = window.webpackJsonp || []).push([
    ["f496"], {
        "1TCz": function(e, t, n) {
            "use strict";
            n.r(t);
            var r = {};
            n.r(r), n.d(r, "initialize", function() {
                return $
            }), n.d(r, "ga", function() {
                return ee
            }), n.d(r, "set", function() {
                return te
            }), n.d(r, "send", function() {
                return ne
            }), n.d(r, "pageview", function() {
                return re
            }), n.d(r, "modalview", function() {
                return oe
            }), n.d(r, "timing", function() {
                return ae
            }), n.d(r, "event", function() {
                return ie
            }), n.d(r, "exception", function() {
                return ue
            }), n.d(r, "plugin", function() {
                return ce
            }), n.d(r, "outboundLink", function() {
                return le
            }), n.d(r, "testModeAPI", function() {
                return se
            }), n.d(r, "default", function() {
                return fe
            });
            var o = n("0iUn"),
                a = n("sLSF"),
                i = n("MI3g"),
                u = n("a7VT"),
                c = n("Tit0"),
                l = n("q1tI"),
                s = n.n(l),
                f = n("8Bbg"),
                d = n.n(f),
                p = n("bWLx"),
                g = n("viY9"),
                b = Object(g.a)({
                    typography: {
                        useNextVariants: !0
                    },
                    palette: {
                        common: {
                            black: "#000",
                            white: "#fff"
                        },
                        background: {
                            paper: "#fff",
                            default: "#fff"
                        },
                        primary: {
                            light: "#7382f3",
                            main: "#5063f0",
                            dark: "#3845a8",
                            contrastText: "#fff"
                        },
                        secondary: {
                            light: "rgba(239, 97, 145, 1)",
                            main: "rgba(233, 30, 99, 1)",
                            dark: "rgba(163, 21, 69, 1)",
                            contrastText: "#fff"
                        },
                        error: {
                            light: "#e57373",
                            main: "#f44336",
                            dark: "#d32f2f",
                            contrastText: "#fff"
                        },
                        text: {
                            primary: "rgba(0, 0, 0, 0.87)",
                            secondary: "rgba(0, 0, 0, 0.54)",
                            disabled: "rgba(0, 0, 0, 0.38)",
                            hint: "rgba(0, 0, 0, 0.38)"
                        }
                    },
                    overrides: {
                        MuiContainer: {
                            root: {
                                paddingLeft: 0,
                                paddingRight: 0
                            }
                        }
                    }
                }),
                y = n("5CWz"),
                m = n("17x9"),
                v = n.n(m);

            function h(e) {
                console.warn("[react-ga]", e)
            }

            function O(e) {
                return (O = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function w(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function j(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                }
                return o
            }

            function k(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function S(e) {
                return (S = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function T(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function E(e, t) {
                return (E = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function x(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var P = "_blank",
                C = 1,
                _ = function(e) {
                    function t() {
                        var e, n, r, o;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t);
                        for (var a = arguments.length, i = new Array(a), u = 0; u < a; u++) i[u] = arguments[u];
                        return r = this, o = (e = S(t)).call.apply(e, [this].concat(i)), n = !o || "object" !== O(o) && "function" != typeof o ? T(r) : o, x(T(n), "handleClick", function(e) {
                            var r = n.props,
                                o = r.target,
                                a = r.eventLabel,
                                i = r.to,
                                u = r.onClick,
                                c = r.trackerNames,
                                l = {
                                    label: a
                                },
                                s = o !== P,
                                f = !(e.ctrlKey || e.shiftKey || e.metaKey || e.button === C);
                            s && f ? (e.preventDefault(), t.trackLink(l, function() {
                                window.location.href = i
                            }, c)) : t.trackLink(l, function() {}, c), u && u(e)
                        }), n
                    }
                    var n, r, o;
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && E(e, t)
                    }(t, l["Component"]), n = t, (r = [{
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.to,
                                n = function(e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {};
                                        t % 2 ? w(n, !0).forEach(function(t) {
                                            x(e, t, n[t])
                                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : w(n).forEach(function(t) {
                                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                        })
                                    }
                                    return e
                                }({}, j(e, ["to"]), {
                                    href: t,
                                    onClick: this.handleClick
                                });
                            return this.props.target === P && (n.rel = "noopener noreferrer"), delete n.eventLabel, delete n.trackerNames, s.a.createElement("a", n)
                        }
                    }]) && k(n.prototype, r), o && k(n, o), t
                }();

            function I(e) {
                return e.replace(/^\s+|\s+$/g, "")
            }
            x(_, "trackLink", function() {
                h("ga tracking not enabled")
            }), x(_, "propTypes", {
                eventLabel: v.a.string.isRequired,
                target: v.a.string,
                to: v.a.string,
                onClick: v.a.func,
                trackerNames: v.a.arrayOf(v.a.string)
            }), x(_, "defaultProps", {
                target: null,
                to: null,
                onClick: null,
                trackerNames: null
            });
            var N = /^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;
            var A = "REDACTED (Potential Email Address)";

            function D(e, t) {
                return function(e) {
                    return "string" == typeof e && -1 !== e.indexOf("@")
                }(e) ? (h("This arg looks like an email address, redacting."), A) : t ? I(e).replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g, function(e, t, n) {
                    return t > 0 && t + e.length !== n.length && e.search(N) > -1 && ":" !== n.charAt(t - 2) && ("-" !== n.charAt(t + e.length) || "-" === n.charAt(t - 1)) && n.charAt(t - 1).search(/[^\s-]/) < 0 ? e.toLowerCase() : e.substr(1).search(/[A-Z]|\../) > -1 ? e : e.charAt(0).toUpperCase() + e.substr(1)
                }) : e
            }
            var L = function(e) {
                var t, n, r, o, a, i, u, c = "https://www.google-analytics.com/analytics.js";
                e && e.gaAddress ? c = e.gaAddress : e && e.debug && (c = "https://www.google-analytics.com/analytics_debug.js"), t = window, n = document, r = "script", o = c, a = "ga", t.GoogleAnalyticsObject = a, t.ga = t.ga || function() {
                    (t.ga.q = t.ga.q || []).push(arguments)
                }, t.ga.l = 1 * new Date, i = n.createElement(r), u = n.getElementsByTagName(r)[0], i.async = 1, i.src = o, u.parentNode.insertBefore(i, u)
            };

            function q(e) {
                console.info("[react-ga]", e)
            }
            var R = [],
                M = {
                    calls: R,
                    ga: function() {
                        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        R.push([].concat(t))
                    },
                    resetCalls: function() {
                        R.length = 0
                    }
                };

            function U(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                }
                return o
            }

            function z(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function B(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function X(e) {
                return (X = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function V(e) {
                return function(e) {
                    if (Array.isArray(e)) {
                        for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                        return n
                    }
                }(e) || function(e) {
                    if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance")
                }()
            }
            var W = "undefined" == typeof window || "undefined" == typeof document,
                J = !1,
                H = !0,
                G = !1,
                F = !0,
                K = function() {
                    var e;
                    return G ? M.ga.apply(M, arguments) : !W && (window.ga ? (e = window).ga.apply(e, arguments) : h("ReactGA.initialize must be called first or GoogleAnalytics should be loaded manually"))
                };

            function Z(e) {
                return D(e, H)
            }

            function Y(e) {
                for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                var o = n[0];
                if ("function" == typeof K) {
                    if ("string" != typeof o) return void h("ga command must be a string");
                    !F && Array.isArray(e) || K.apply(void 0, n), Array.isArray(e) && e.forEach(function(e) {
                        K.apply(void 0, V(["".concat(e, ".").concat(o)].concat(n.slice(1))))
                    })
                }
            }

            function Q(e, t) {
                e ? t && (t.debug && !0 === t.debug && (J = !0), !1 === t.titleCase && (H = !1), t.useExistingGa) || (t && t.gaOptions ? K("create", e, t.gaOptions) : K("create", e, "auto")) : h("gaTrackingID is required in initialize()")
            }

            function $(e, t) {
                if (t && !0 === t.testMode) G = !0;
                else {
                    if (W) return !1;
                    t && !0 === t.standardImplementation || L(t)
                }
                return F = !t || "boolean" != typeof t.alwaysSendToDefaultTracker || t.alwaysSendToDefaultTracker, Array.isArray(e) ? e.forEach(function(e) {
                    "object" === X(e) ? Q(e.trackingId, e) : h("All configs must be an object")
                }) : Q(e, t), !0
            }

            function ee() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return t.length > 0 && (K.apply(void 0, t), J && (q("called ga('arguments');"), q("with arguments: ".concat(JSON.stringify(t))))), window.ga
            }

            function te(e, t) {
                e ? "object" === X(e) ? (0 === Object.keys(e).length && h("empty `fieldsObject` given to .set()"), Y(t, "set", e), J && (q("called ga('set', fieldsObject);"), q("with fieldsObject: ".concat(JSON.stringify(e))))) : h("Expected `fieldsObject` arg to be an Object") : h("`fieldsObject` is required in .set()")
            }

            function ne(e, t) {
                Y(t, "send", e), J && (q("called ga('send', fieldObject);"), q("with fieldObject: ".concat(JSON.stringify(e))), q("with trackers: ".concat(JSON.stringify(t))))
            }

            function re(e, t, n) {
                if (e) {
                    var r = I(e);
                    if ("" !== r) {
                        var o = {};
                        if (n && (o.title = n), Y(t, "send", function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {};
                                    t % 2 ? z(n, !0).forEach(function(t) {
                                        B(e, t, n[t])
                                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : z(n).forEach(function(t) {
                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                    })
                                }
                                return e
                            }({
                                hitType: "pageview",
                                page: r
                            }, o)), J) {
                            q("called ga('send', 'pageview', path);");
                            var a = "";
                            n && (a = " and title: ".concat(n)), q("with path: ".concat(r).concat(a))
                        }
                    } else h("path cannot be an empty string in .pageview()")
                } else h("path is required in .pageview()")
            }

            function oe(e, t) {
                if (e) {
                    var n, r = "/" === (n = I(e)).substring(0, 1) ? n.substring(1) : n;
                    if ("" !== r) {
                        var o = "/modal/".concat(r);
                        Y(t, "send", "pageview", o), J && (q("called ga('send', 'pageview', path);"), q("with path: ".concat(o)))
                    } else h("modalName cannot be an empty string or a single / in .modalview()")
                } else h("modalName is required in .modalview(modalName)")
            }

            function ae() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.category,
                    n = e.variable,
                    r = e.value,
                    o = e.label,
                    a = arguments.length > 1 ? arguments[1] : void 0;
                if (t && n && r && "number" == typeof r) {
                    var i = {
                        hitType: "timing",
                        timingCategory: Z(t),
                        timingVar: Z(n),
                        timingValue: r
                    };
                    o && (i.timingLabel = Z(o)), ne(i, a)
                } else h("args.category, args.variable AND args.value are required in timing() AND args.value has to be a number")
            }

            function ie() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.category,
                    n = e.action,
                    r = e.label,
                    o = e.value,
                    a = e.nonInteraction,
                    i = e.transport,
                    u = U(e, ["category", "action", "label", "value", "nonInteraction", "transport"]),
                    c = arguments.length > 1 ? arguments[1] : void 0;
                if (t && n) {
                    var l = {
                        hitType: "event",
                        eventCategory: Z(t),
                        eventAction: Z(n)
                    };
                    r && (l.eventLabel = Z(r)), void 0 !== o && ("number" != typeof o ? h("Expected `args.value` arg to be a Number.") : l.eventValue = o), void 0 !== a && ("boolean" != typeof a ? h("`args.nonInteraction` must be a boolean.") : l.nonInteraction = a), void 0 !== i && ("string" != typeof i ? h("`args.transport` must be a string.") : (-1 === ["beacon", "xhr", "image"].indexOf(i) && h("`args.transport` must be either one of these values: `beacon`, `xhr` or `image`"), l.transport = i)), Object.keys(u).filter(function(e) {
                        return "dimension" === e.substr(0, "dimension".length)
                    }).forEach(function(e) {
                        l[e] = u[e]
                    }), Object.keys(u).filter(function(e) {
                        return "metric" === e.substr(0, "metric".length)
                    }).forEach(function(e) {
                        l[e] = u[e]
                    }), ne(l, c)
                } else h("args.category AND args.action are required in event()")
            }

            function ue(e, t) {
                var n = e.description,
                    r = e.fatal,
                    o = {
                        hitType: "exception"
                    };
                n && (o.exDescription = Z(n)), void 0 !== r && ("boolean" != typeof r ? h("`args.fatal` must be a boolean.") : o.exFatal = r), ne(o, t)
            }
            var ce = {
                require: function(e, t, n) {
                    if (e) {
                        var r = I(e);
                        if ("" !== r) {
                            var o = n ? "".concat(n, ".require") : "require";
                            if (t) {
                                if ("object" !== X(t)) return void h("Expected `options` arg to be an Object");
                                0 === Object.keys(t).length && h("Empty `options` given to .require()"), ee(o, r, t), J && q("called ga('require', '".concat(r, "', ").concat(JSON.stringify(t)))
                            } else ee(o, r), J && q("called ga('require', '".concat(r, "');"))
                        } else h("`name` cannot be an empty string in .require()")
                    } else h("`name` is required in .require()")
                },
                execute: function(e, t) {
                    var n, r;
                    if (1 == (arguments.length <= 2 ? 0 : arguments.length - 2) ? n = arguments.length <= 2 ? void 0 : arguments[2] : (r = arguments.length <= 2 ? void 0 : arguments[2], n = arguments.length <= 3 ? void 0 : arguments[3]), "string" != typeof e) h("Expected `pluginName` arg to be a String.");
                    else if ("string" != typeof t) h("Expected `action` arg to be a String.");
                    else {
                        var o = "".concat(e, ":").concat(t);
                        n = n || null, r && n ? (ee(o, r, n), J && (q("called ga('".concat(o, "');")), q('actionType: "'.concat(r, '" with payload: ').concat(JSON.stringify(n))))) : n ? (ee(o, n), J && (q("called ga('".concat(o, "');")), q("with payload: ".concat(JSON.stringify(n))))) : (ee(o), J && q("called ga('".concat(o, "');")))
                    }
                }
            };

            function le(e, t, n) {
                if ("function" == typeof t)
                    if (e && e.label) {
                        var r = {
                                hitType: "event",
                                eventCategory: "Outbound",
                                eventAction: "Click",
                                eventLabel: Z(e.label)
                            },
                            o = !1,
                            a = setTimeout(function() {
                                o = !0, t()
                            }, 250);
                        r.hitCallback = function() {
                            clearTimeout(a), o || t()
                        }, ne(r, n)
                    } else h("args.label is required in outboundLink()");
                else h("hitCallback function is required")
            }
            var se = M,
                fe = {
                    initialize: $,
                    ga: ee,
                    set: te,
                    send: ne,
                    pageview: re,
                    modalview: oe,
                    timing: ae,
                    event: ie,
                    exception: ue,
                    plugin: ce,
                    outboundLink: le,
                    testModeAPI: M
                };

            function de(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function pe(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            _.origTrackLink = _.trackLink, _.trackLink = le;
            var ge = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? de(n, !0).forEach(function(t) {
                            pe(e, t, n[t])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : de(n).forEach(function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        })
                    }
                    return e
                }({}, r, {
                    OutboundLink: _
                }),
                be = n("OcYQ").config,
                ye = function() {
                    ge.set({
                        page: window.location.pathname
                    }), ge.pageview(window.location.pathname)
                },
                me = n("udWi"),
                ve = n("Mj6V"),
                he = n.n(ve),
                Oe = n("kOwS"),
                we = n("ln6h"),
                je = n.n(we),
                ke = n("zrwo"),
                Se = n("O40h"),
                Te = n("ANjH"),
                Ee = n("5HXA"),
                xe = n("u0k+"),
                Pe = "undefined" == typeof window,
                Ce = {
                    version: "v2",
                    userLoggedIn: !1,
                    _id: null,
                    userId: null,
                    name: null,
                    email: null,
                    token: null,
                    picture: null,
                    thumbnail: null,
                    loginTime: new Date,
                    language: "en",
                    isServer: Pe
                },
                _e = {
                    codeId: null,
                    language: null,
                    code: "loading...",
                    user: null,
                    updated: null,
                    created: null,
                    result: "Run the program to see result.",
                    title: "loading...",
                    description: "",
                    tags: "",
                    tagsList: [],
                    codeByTags: [],
                    selectedTag: null
                },
                Ie = Object(Te.combineReducers)({
                    user: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ce,
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        switch (t.type) {
                            case xe.l:
                                return Object(ke.default)({}, e, {
                                    userLoggedIn: !0
                                }, t.payload, {
                                    loginTime: new Date
                                });
                            case xe.m:
                                return Object(ke.default)({}, e, {
                                    userLoggedIn: !1,
                                    _id: null,
                                    userId: null,
                                    name: null,
                                    email: null,
                                    token: null,
                                    picture: null,
                                    thumbnail: null
                                });
                            case xe.k:
                                return Object(ke.default)({}, e, {
                                    userLanguage: t.payload
                                });
                            default:
                                return e
                        }
                    },
                    code: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _e,
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        switch (t.type) {
                            case xe.d:
                                return Object(ke.default)({}, e, {
                                    codeId: t.payload.languageObj.isOwnCode ? t.payload.languageObj._id : null,
                                    language: t.payload.languageCode,
                                    code: t.payload.languageObj.code,
                                    user: t.payload.languageObj.user,
                                    updated: t.payload.languageObj.updated,
                                    created: t.payload.languageObj.created,
                                    title: t.payload.languageObj.title,
                                    description: t.payload.languageObj.description,
                                    tags: t.payload.languageObj.tags && t.payload.languageObj.tags.length > 0 ? t.payload.languageObj.tags.join(", ") : ""
                                });
                            case xe.a:
                                return Object(ke.default)({}, e, {
                                    code: t.payload
                                });
                            case xe.e:
                                return Object(ke.default)({}, e, {
                                    result: t.payload
                                });
                            case xe.c:
                                return Object(ke.default)({}, e, {
                                    codeId: t.payload
                                });
                            case xe.g:
                                return Object(ke.default)({}, e, {
                                    title: t.payload
                                });
                            case xe.b:
                                return Object(ke.default)({}, e, {
                                    description: t.payload
                                });
                            case xe.f:
                                return Object(ke.default)({}, e, {
                                    tags: t.payload
                                });
                            case xe.i:
                                return Object(ke.default)({}, e, {
                                    tagsList: t.payload
                                });
                            case xe.h:
                                return Object(ke.default)({}, e, {
                                    codeByTags: t.payload
                                });
                            case xe.j:
                                return Object(ke.default)({}, e, {
                                    selectedTag: t.payload
                                });
                            default:
                                return e
                        }
                    }
                });

            function Ne(e) {
                return function(t) {
                    var n = t.dispatch,
                        r = t.getState;
                    return function(t) {
                        return function(o) {
                            return "function" == typeof o ? o(n, r, e) : t(o)
                        }
                    }
                }
            }
            var Ae = Ne();
            Ae.withExtraArgument = Ne;
            var De = Ae;

            function Le() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                "undefined" != typeof window && (localStorage.getItem("reduxState") && (void 0 === JSON.parse(localStorage.getItem("reduxState")).user ? (console.log("removing old deprecated state"), localStorage.removeItem("reduxState")) : (e = localStorage.getItem("reduxState") ? JSON.parse(localStorage.getItem("reduxState")) : {}) && e.user && (e.user && "v2" === e.user.version || (localStorage.removeItem("reduxState"), e = {}))));
                return Object(Te.createStore)(Ie, e, Object(Ee.composeWithDevTools)(Object(Te.applyMiddleware)(De)))
            }
            var qe = "undefined" == typeof window,
                Re = "__NEXT_REDUX_STORE__";

            function Me(e) {
                return qe ? Le(e) : (window[Re] || (window[Re] = Le(e)), window[Re])
            }
            var Ue = n("/MKj");
            n("00et");
            me.Router.events.on("routeChangeStart", function(e) {
                he.a.start()
            }), me.Router.events.on("routeChangeComplete", function() {
                return he.a.done()
            }), me.Router.events.on("routeChangeError", function() {
                return he.a.done()
            });
            var ze, Be = function(e) {
                function t() {
                    return Object(o.default)(this, t), Object(i.default)(this, Object(u.default)(t).apply(this, arguments))
                }
                return Object(c.default)(t, e), Object(a.default)(t, [{
                    key: "componentDidMount",
                    value: function() {
                        var e = document.querySelector("#jss-server-side");
                        e && e.parentNode.removeChild(e), ge.initialize(be.gaCode), ye(), me.Router.router.events.on("routeChangeComplete", ye)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.Component,
                            n = e.pageProps,
                            r = e.reduxStore;
                        return s.a.createElement(f.Container, null, s.a.createElement(p.a, {
                            theme: b
                        }, s.a.createElement(y.a, null), s.a.createElement(Ue.a, {
                            store: r
                        }, s.a.createElement(t, n))))
                    }
                }]), t
            }(d.a);
            t.default = (ze = Be, function(e) {
                function t(e) {
                    var n;
                    return Object(o.default)(this, t), (n = Object(i.default)(this, Object(u.default)(t).call(this, e))).reduxStore = Me(e.initialReduxState), n
                }
                return Object(c.default)(t, e), Object(a.default)(t, null, [{
                    key: "getInitialProps",
                    value: (n = Object(Se.default)(je.a.mark(function e(t) {
                        var n, r;
                        return je.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (n = Me(), t.ctx.reduxStore = n, r = {}, "function" != typeof ze.getInitialProps) {
                                        e.next = 7;
                                        break
                                    }
                                    return e.next = 6, ze.getInitialProps(t);
                                case 6:
                                    r = e.sent;
                                case 7:
                                    return e.abrupt("return", Object(ke.default)({}, r, {
                                        initialReduxState: n.getState()
                                    }));
                                case 8:
                                case "end":
                                    return e.stop()
                            }
                        }, e)
                    })), function(e) {
                        return n.apply(this, arguments)
                    })
                }]), Object(a.default)(t, [{
                    key: "render",
                    value: function() {
                        return s.a.createElement(ze, Object(Oe.a)({}, this.props, {
                            reduxStore: this.reduxStore
                        }))
                    }
                }]), t;
                var n
            }(s.a.Component))
        },
        "5CWz": function(e, t, n) {
            "use strict";
            var r = n("i0m8"),
                o = n("q1tI"),
                a = n.n(o),
                i = (n("17x9"), n("RD7I")),
                u = n("cNwE");
            var c = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return Object(i.a)(e, Object(r.a)({
                    defaultTheme: u.a
                }, t))
            }(function(e) {
                return {
                    "@global": {
                        html: {
                            WebkitFontSmoothing: "antialiased",
                            MozOsxFontSmoothing: "grayscale",
                            boxSizing: "border-box"
                        },
                        "*, *::before, *::after": {
                            boxSizing: "inherit"
                        },
                        "strong, b": {
                            fontWeight: "bolder"
                        },
                        body: Object(r.a)({
                            margin: 0,
                            color: e.palette.text.primary
                        }, e.typography.body2, {
                            backgroundColor: e.palette.background.default,
                            "@media print": {
                                backgroundColor: e.palette.common.white
                            },
                            "&::backdrop": {
                                backgroundColor: e.palette.background.default
                            }
                        })
                    }
                }
            }, {
                name: "MuiCssBaseline"
            });
            t.a = function(e) {
                var t = e.children,
                    n = void 0 === t ? null : t;
                return c(), a.a.createElement(a.a.Fragment, null, n)
            }
        },
        "5HXA": function(e, t, n) {
            "use strict";
            var r = n("ANjH").compose;
            t.__esModule = !0, t.composeWithDevTools = "undefined" != typeof window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
                if (0 !== arguments.length) return "object" == typeof arguments[0] ? r : r.apply(null, arguments)
            }, t.devToolsEnhancer = "undefined" != typeof window && window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__ : function() {
                return function(e) {
                    return e
                }
            }
        },
        "8Bbg": function(e, t, n) {
            e.exports = n("B5Ud")
        },
        "8oxB": function(e, t) {
            var n, r, o = e.exports = {};

            function a() {
                throw new Error("setTimeout has not been defined")
            }

            function i() {
                throw new Error("clearTimeout has not been defined")
            }

            function u(e) {
                if (n === setTimeout) return setTimeout(e, 0);
                if ((n === a || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
                try {
                    return n(e, 0)
                } catch (t) {
                    try {
                        return n.call(null, e, 0)
                    } catch (t) {
                        return n.call(this, e, 0)
                    }
                }
            }! function() {
                try {
                    n = "function" == typeof setTimeout ? setTimeout : a
                } catch (e) {
                    n = a
                }
                try {
                    r = "function" == typeof clearTimeout ? clearTimeout : i
                } catch (e) {
                    r = i
                }
            }();
            var c, l = [],
                s = !1,
                f = -1;

            function d() {
                s && c && (s = !1, c.length ? l = c.concat(l) : f = -1, l.length && p())
            }

            function p() {
                if (!s) {
                    var e = u(d);
                    s = !0;
                    for (var t = l.length; t;) {
                        for (c = l, l = []; ++f < t;) c && c[f].run();
                        f = -1, t = l.length
                    }
                    c = null, s = !1,
                        function(e) {
                            if (r === clearTimeout) return clearTimeout(e);
                            if ((r === i || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
                            try {
                                r(e)
                            } catch (t) {
                                try {
                                    return r.call(null, e)
                                } catch (t) {
                                    return r.call(this, e)
                                }
                            }
                        }(e)
                }
            }

            function g(e, t) {
                this.fun = e, this.array = t
            }

            function b() {}
            o.nextTick = function(e) {
                var t = new Array(arguments.length - 1);
                if (arguments.length > 1)
                    for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                l.push(new g(e, t)), 1 !== l.length || s || u(p)
            }, g.prototype.run = function() {
                this.fun.apply(null, this.array)
            }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = b, o.addListener = b, o.once = b, o.off = b, o.removeListener = b, o.removeAllListeners = b, o.emit = b, o.prependListener = b, o.prependOnceListener = b, o.listeners = function(e) {
                return []
            }, o.binding = function(e) {
                throw new Error("process.binding is not supported")
            }, o.cwd = function() {
                return "/"
            }, o.chdir = function(e) {
                throw new Error("process.chdir is not supported")
            }, o.umask = function() {
                return 0
            }
        },
        B5Ud: function(e, t, n) {
            "use strict";
            var r = n("KI45"),
                o = r(n("eVuF")),
                a = r(n("UXZV")),
                i = r(n("/HRN")),
                u = r(n("WaGi")),
                c = r(n("ZDA2")),
                l = r(n("/+P4")),
                s = r(n("N9n2")),
                f = function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                },
                d = function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var p = f(n("q1tI")),
                g = d(n("lgD3")),
                b = n("Bu4q"),
                y = n("nOHt"),
                m = function(e) {
                    function t() {
                        return (0, i.default)(this, t), (0, c.default)(this, (0, l.default)(t).apply(this, arguments))
                    }
                    return (0, s.default)(t, e), (0, u.default)(t, [{
                        key: "getChildContext",
                        value: function() {
                            return {
                                router: y.makePublicRouterInstance(this.props.router)
                            }
                        }
                    }, {
                        key: "componentDidCatch",
                        value: function(e) {
                            throw e
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.router,
                                n = e.Component,
                                r = e.pageProps,
                                o = O(t);
                            return p.default.createElement(v, null, p.default.createElement(n, (0, a.default)({}, r, {
                                url: o
                            })))
                        }
                    }], [{
                        key: "getInitialProps",
                        value: function(e) {
                            var t = e.Component,
                                n = (e.router, e.ctx);
                            try {
                                return o.default.resolve(b.loadGetInitialProps(t, n)).then(function(e) {
                                    return {
                                        pageProps: e
                                    }
                                })
                            } catch (r) {
                                return o.default.reject(r)
                            }
                        }
                    }]), t
                }(p.Component);
            m.childContextTypes = {
                router: g.default.object
            }, t.default = m;
            var v = function(e) {
                function t() {
                    return (0, i.default)(this, t), (0, c.default)(this, (0, l.default)(t).apply(this, arguments))
                }
                return (0, s.default)(t, e), (0, u.default)(t, [{
                    key: "componentDidMount",
                    value: function() {
                        this.scrollToHash()
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function() {
                        this.scrollToHash()
                    }
                }, {
                    key: "scrollToHash",
                    value: function() {
                        var e = window.location.hash;
                        if (e = !!e && e.substring(1)) {
                            var t = document.getElementById(e);
                            t && setTimeout(function() {
                                return t.scrollIntoView()
                            }, 0)
                        }
                    }
                }, {
                    key: "render",
                    value: function() {
                        return this.props.children
                    }
                }]), t
            }(p.Component);
            t.Container = v;
            var h = b.execOnce(function() {
                0
            });

            function O(e) {
                var t = e.pathname,
                    n = e.asPath,
                    r = e.query;
                return {get query() {
                        return h(), r
                    },
                    get pathname() {
                        return h(), t
                    },
                    get asPath() {
                        return h(), n
                    },
                    back: function() {
                        h(), e.back()
                    },
                    push: function(t, n) {
                        return h(), e.push(t, n)
                    },
                    pushTo: function(t, n) {
                        h();
                        var r = n ? t : null,
                            o = n || t;
                        return e.push(r, o)
                    },
                    replace: function(t, n) {
                        return h(), e.replace(t, n)
                    },
                    replaceTo: function(t, n) {
                        h();
                        var r = n ? t : null,
                            o = n || t;
                        return e.replace(r, o)
                    }
                }
            }
            t.createUrl = O
        },
        GcxT: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function() {
                var e = n("1TCz");
                return {
                    page: e.default || e
                }
            }])
        },
        Mj6V: function(e, t, n) {
            var r, o;
            void 0 === (o = "function" == typeof(r = function() {
                var e, t, n = {
                        version: "0.2.0"
                    },
                    r = n.settings = {
                        minimum: .08,
                        easing: "ease",
                        positionUsing: "",
                        speed: 200,
                        trickle: !0,
                        trickleRate: .02,
                        trickleSpeed: 800,
                        showSpinner: !0,
                        barSelector: '[role="bar"]',
                        spinnerSelector: '[role="spinner"]',
                        parent: "body",
                        template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
                    };

                function o(e, t, n) {
                    return e < t ? t : e > n ? n : e
                }

                function a(e) {
                    return 100 * (-1 + e)
                }
                n.configure = function(e) {
                    var t, n;
                    for (t in e) void 0 !== (n = e[t]) && e.hasOwnProperty(t) && (r[t] = n);
                    return this
                }, n.status = null, n.set = function(e) {
                    var t = n.isStarted();
                    e = o(e, r.minimum, 1), n.status = 1 === e ? null : e;
                    var c = n.render(!t),
                        l = c.querySelector(r.barSelector),
                        s = r.speed,
                        f = r.easing;
                    return c.offsetWidth, i(function(t) {
                        "" === r.positionUsing && (r.positionUsing = n.getPositioningCSS()), u(l, function(e, t, n) {
                            var o;
                            return (o = "translate3d" === r.positionUsing ? {
                                transform: "translate3d(" + a(e) + "%,0,0)"
                            } : "translate" === r.positionUsing ? {
                                transform: "translate(" + a(e) + "%,0)"
                            } : {
                                "margin-left": a(e) + "%"
                            }).transition = "all " + t + "ms " + n, o
                        }(e, s, f)), 1 === e ? (u(c, {
                            transition: "none",
                            opacity: 1
                        }), c.offsetWidth, setTimeout(function() {
                            u(c, {
                                transition: "all " + s + "ms linear",
                                opacity: 0
                            }), setTimeout(function() {
                                n.remove(), t()
                            }, s)
                        }, s)) : setTimeout(t, s)
                    }), this
                }, n.isStarted = function() {
                    return "number" == typeof n.status
                }, n.start = function() {
                    n.status || n.set(0);
                    var e = function() {
                        setTimeout(function() {
                            n.status && (n.trickle(), e())
                        }, r.trickleSpeed)
                    };
                    return r.trickle && e(), this
                }, n.done = function(e) {
                    return e || n.status ? n.inc(.3 + .5 * Math.random()).set(1) : this
                }, n.inc = function(e) {
                    var t = n.status;
                    return t ? ("number" != typeof e && (e = (1 - t) * o(Math.random() * t, .1, .95)), t = o(t + e, 0, .994), n.set(t)) : n.start()
                }, n.trickle = function() {
                    return n.inc(Math.random() * r.trickleRate)
                }, e = 0, t = 0, n.promise = function(r) {
                    return r && "resolved" !== r.state() ? (0 === t && n.start(), e++, t++, r.always(function() {
                        0 == --t ? (e = 0, n.done()) : n.set((e - t) / e)
                    }), this) : this
                }, n.render = function(e) {
                    if (n.isRendered()) return document.getElementById("nprogress");
                    l(document.documentElement, "nprogress-busy");
                    var t = document.createElement("div");
                    t.id = "nprogress", t.innerHTML = r.template;
                    var o, i = t.querySelector(r.barSelector),
                        c = e ? "-100" : a(n.status || 0),
                        s = document.querySelector(r.parent);
                    return u(i, {
                        transition: "all 0 linear",
                        transform: "translate3d(" + c + "%,0,0)"
                    }), r.showSpinner || (o = t.querySelector(r.spinnerSelector)) && d(o), s != document.body && l(s, "nprogress-custom-parent"), s.appendChild(t), t
                }, n.remove = function() {
                    s(document.documentElement, "nprogress-busy"), s(document.querySelector(r.parent), "nprogress-custom-parent");
                    var e = document.getElementById("nprogress");
                    e && d(e)
                }, n.isRendered = function() {
                    return !!document.getElementById("nprogress")
                }, n.getPositioningCSS = function() {
                    var e = document.body.style,
                        t = "WebkitTransform" in e ? "Webkit" : "MozTransform" in e ? "Moz" : "msTransform" in e ? "ms" : "OTransform" in e ? "O" : "";
                    return t + "Perspective" in e ? "translate3d" : t + "Transform" in e ? "translate" : "margin"
                };
                var i = function() {
                        var e = [];

                        function t() {
                            var n = e.shift();
                            n && n(t)
                        }
                        return function(n) {
                            e.push(n), 1 == e.length && t()
                        }
                    }(),
                    u = function() {
                        var e = ["Webkit", "O", "Moz", "ms"],
                            t = {};

                        function n(n) {
                            return n = n.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(e, t) {
                                return t.toUpperCase()
                            }), t[n] || (t[n] = function(t) {
                                var n = document.body.style;
                                if (t in n) return t;
                                for (var r, o = e.length, a = t.charAt(0).toUpperCase() + t.slice(1); o--;)
                                    if ((r = e[o] + a) in n) return r;
                                return t
                            }(n))
                        }

                        function r(e, t, r) {
                            t = n(t), e.style[t] = r
                        }
                        return function(e, t) {
                            var n, o, a = arguments;
                            if (2 == a.length)
                                for (n in t) void 0 !== (o = t[n]) && t.hasOwnProperty(n) && r(e, n, o);
                            else r(e, a[1], a[2])
                        }
                    }();

                function c(e, t) {
                    var n = "string" == typeof e ? e : f(e);
                    return n.indexOf(" " + t + " ") >= 0
                }

                function l(e, t) {
                    var n = f(e),
                        r = n + t;
                    c(n, t) || (e.className = r.substring(1))
                }

                function s(e, t) {
                    var n, r = f(e);
                    c(e, t) && (n = r.replace(" " + t + " ", " "), e.className = n.substring(1, n.length - 1))
                }

                function f(e) {
                    return (" " + (e.className || "") + " ").replace(/\s+/gi, " ")
                }

                function d(e) {
                    e && e.parentNode && e.parentNode.removeChild(e)
                }
                return n
            }) ? r.call(t, n, t, e) : r) || (e.exports = o)
        },
        OcYQ: function(e, t, n) {
            "use strict";
            (function(t) {
                var r = n("KI45")(n("zrwo")),
                    o = t.env.PORT || 5006,
                    a = {
                        default: {
                            appName: "onecompiler.com",
                            serverPort: o,
                            gaCode: "UA-26769409-3",
                            databaseUrl: t.env.MONGODB_URI || "mongodb://localhost/".concat("oc??"),
                            jsonOptions: {
                                headers: {
                                    "Content-Type": "application/json"
                                }
                            }
                        },
                        development: {
                            appUrl: "http://localhost:".concat(o, "/")
                        },
                        production: {
                            appUrl: "https://onecompiler.com/"
                        }
                    };
                e.exports = {
                    config: (0, r.default)({}, a.default, a.production),
                    completeConfig: a
                }
            }).call(this, n("8oxB"))
        }
    },
    [
        ["GcxT", "5d41", "9da1", "ad9d"]
    ]
]);
