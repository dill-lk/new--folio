(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [185], {
        4349: function(e, t, a) {
            Promise.resolve().then(a.bind(a, 9197)), Promise.resolve().then(a.bind(a, 4055)), Promise.resolve().then(a.t.bind(a, 8311, 23)), Promise.resolve().then(a.t.bind(a, 8784, 23)), Promise.resolve().then(a.t.bind(a, 4341, 23)), Promise.resolve().then(a.t.bind(a, 2778, 23)), Promise.resolve().then(a.bind(a, 8017)), Promise.resolve().then(a.bind(a, 2158)), Promise.resolve().then(a.bind(a, 8647)), Promise.resolve().then(a.bind(a, 3228)), Promise.resolve().then(a.bind(a, 1170)), Promise.resolve().then(a.bind(a, 5583))
        },
        8017: function(e, t, a) {
            "use strict";
            a.d(t, {
                default: function() {
                    return c
                }
            });
            var r = a(7437),
                s = a(2265),
                o = a(6498),
                n = a(5143),
                i = a(6224),
                l = a(3897);
            let d = ["/assets/project_images/36daysoftype/thumb.webp", "/assets/project_images/36daysoftype/banner.webp", "/assets/project_images/amca/thumb.webp", "/assets/project_images/amca/banner.webp", "/assets/project_images/aughtsspective/thumb.webp", "/assets/project_images/aughtsspective/banner.webp", "/assets/project_images/dailyui/thumb.webp", "/assets/project_images/dailyui/banner.webp", "/assets/project_images/daydream/thumb.webp", "/assets/project_images/daydream/banner.webp", "/assets/project_images/daydream_web/thumb.webp", "/assets/project_images/daydream_web/banner.webp", "/assets/project_images/ikon_web/thumb.webp", "/assets/project_images/ikon_web/banner.webp", "/assets/project_images/loben/thumb.webp", "/assets/project_images/orith/thumb.webp", "/assets/project_images/orith/banner.webp", "/assets/project_images/pneuma/thumb.webp", "/assets/project_images/pneuma/banner.webp", "/assets/project_images/posterfolio/thumb.webp", "/assets/project_images/posterfolio/banner.webp", "/assets/project_images/wayer/thumb.webp", "/assets/project_images/wayer/banner.webp", "/handshake_overlay.webp", "/assets/contact_bg.webp"];

            function c() {
                let e = (0, n.o)(e => e.loaded),
                    t = (0, n.o)(e => e.setLoaded),
                    [a, c] = (0, s.useState)(0),
                    p = (0, s.useRef)(0),
                    [u, m] = (0, s.useState)(!1),
                    [x, h] = (0, s.useState)(!1),
                    b = function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
                        return new Promise(a => {
                            let r = 0,
                                s = e.length;
                            if (0 === s) {
                                c(t), p.current = t, a();
                                return
                            }
                            e.forEach(e => {
                                let o = new Image;
                                o.onload = o.onerror = () => {
                                    let e = ++r / s * t;
                                    c(e), p.current = e, r >= s && a()
                                }, o.src = e
                            })
                        })
                    };
                return (0, s.useEffect)(() => {
                    i.L.preload("/keychain.glb");
                    let e = () => h(!0);
                    return "complete" === document.readyState || "interactive" === document.readyState ? h(!0) : window.addEventListener("DOMContentLoaded", e), () => window.removeEventListener("DOMContentLoaded", e)
                }, []), (0, s.useEffect)(() => {
                    (async () => {
                        try {
                            await b(d, 100), setTimeout(() => t(!0), 100)
                        } catch (e) {
                            console.error("Asset preload error:", e), setTimeout(() => t(!0), 100)
                        }
                    })()
                }, []), (0, s.useEffect)(() => {
                    e && x && m(!0)
                }, [e, x]), (0, l.V)(() => {
                    u && o.ZP.to('[data-gsap="loader-logo-full"]', {
                        scale: 1.2,
                        filter: "blur(10px)",
                        opacity: 0,
                        duration: .5,
                        onComplete: () => {
                            o.ZP.to('[data-gsap="loader"]', {
                                opacity: 0,
                                duration: .5
                            })
                        }
                    })
                }, [u]), (0, s.useEffect)(() => {
                    o.ZP.to('[data-gsap="loader-bg"]', {
                        opacity: 0,
                        duration: .25
                    })
                }, []), (0, r.jsxs)("div", {
                    "data-gsap": "loader",
                    className: "pointer-events-none fixed top-0 right-0 w-screen h-[100dvh] z-[9999] flex items-center justify-center",
                    children: [(0, r.jsx)("img", {
                        src: "./icons/loader.svg",
                        className: "fixed top-[40px] lg:top-[50px]  right-[10px] sm:right-[20px] lg:right-[50px] loader ",
                        alt: "Loader"
                    }), (0, r.jsx)("div", {
                        "data-gsap": "loader-bg",
                        className: "w-screen h-screen bg-black z-[9999] fixed top-0 right-0"
                    })]
                })
            }
        },
        2158: function(e, t, a) {
            "use strict";
            a.d(t, {
                default: function() {
                    return o
                }
            });
            var r = a(2265),
                s = a(5143);

            function o() {
                let e = (0, s.o)(e => e.setIsMobile);
                return (0, r.useEffect)(() => {
                    e((() => {
                        let e = navigator.userAgent.toLowerCase(),
                            t = /iphone|ipod|android|mobile/.test(e),
                            a = /ipad/.test(e) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1;
                        return t || a
                    })())
                }, []), null
            }
        },
        8647: function(e, t, a) {
            "use strict";
            var r = a(7437),
                s = a(8543),
                o = a(2265),
                n = a(6498),
                i = a(2707),
                l = a(5143);
            n.ZP.registerPlugin(i.Z), t.default = function(e) {
                let {
                    children: t
                } = e;
                n.ZP.registerEase("customEase", i.Z.create("out", ".9,.6,.2,1")), n.ZP.registerEase("customEaseIn", i.Z.create("in", ".8,0,.1,.4")), n.ZP.registerEase("customEaseBounce", i.Z.create("bounce", ".8,0,.1,.4")), n.ZP.registerEase("genyo", i.Z.create("genyo", ".2,.6,.015,1"));
                let a = (0, l.o)(e => e.loaded);
                return n.ZP.config({
                    nullTargetWarn: !1
                }), (0, o.useEffect)(() => {
                    let e = e => {
                        let t = e.target,
                            a = "INPUT" === t.tagName || "TEXTAREA" === t.tagName || t.isContentEditable;
                        "Space" !== e.code || a || e.preventDefault()
                    };
                    return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
                }, []), (0, r.jsx)(s.pi, {
                    root: !0,
                    options: {
                        lerp: .1,
                        duration: 1
                    },
                    children: a && (0, r.jsx)("main", {
                        className: "w-full h-full",
                        children: t
                    }, a ? 1 : 0)
                })
            }
        },
        3228: function(e, t, a) {
            "use strict";
            a.d(t, {
                default: function() {
                    return o
                }
            });
            var r = a(2265);
            let s = ["\uD83D\uDC40", "There's more to see here"];

            function o() {
                let e = (0, r.useRef)(""),
                    t = (0, r.useRef)(null);
                return (0, r.useEffect)(() => {
                    if ("undefined" == typeof document) return;
                    e.current = document.title;
                    let a = () => {
                        setTimeout(() => {
                            if (document.hidden) {
                                e.current = document.title;
                                let a = 0;
                                document.title = s[0], t.current = setInterval(() => {
                                    a = (a + 1) % s.length, document.title = s[a]
                                }, 3e3)
                            } else t.current && (clearInterval(t.current), t.current = null), document.title = e.current
                        }, 100)
                    };
                    return document.addEventListener("visibilitychange", a), () => {
                        document.removeEventListener("visibilitychange", a), t.current && clearInterval(t.current)
                    }
                }, []), null
            }
        },
        5143: function(e, t, a) {
            "use strict";
            a.d(t, {
                o: function() {
                    return r
                }
            });
            let r = (0, a(3011).U)(e => ({
                isMobile: null,
                setIsMobile: t => e({
                    isMobile: t
                }),
                openContact: !1,
                setOpenContact: t => e({
                    openContact: t
                }),
                shouldShuffle: !1,
                setShouldShuffle: t => e({
                    shouldShuffle: t
                }),
                loaded: !1,
                setLoaded: t => e({
                    loaded: t
                })
            }))
        },
        2169: function(e, t, a) {
            "use strict";
            a.d(t, {
                Z: function() {
                    return s
                }
            });
            var r = a(7437);

            function s(e) {
                let {
                    onClick: t,
                    disabled: a,
                    text: s,
                    type: o = "button"
                } = e;
                return (0, r.jsx)("button", {
                    onClick: t,
                    disabled: a,
                    type: o,
                    className: "group p-[0px] bg-gradient-to-b from-[#ECEEED] via-[#616362] to-[#92B2AD] rounded-full overflow-hidden hover:py-[5px] hover:px-[5px] transition-all duration-300 w-fit disabled:opacity-50 disabled:cursor-not-allowed",
                    children: (0, r.jsxs)("div", {
                        className: "relative flex items-center justify-center px-[50px] py-[25px] rounded-full transition-all duration-300 group-hover:py-[20px] group-hover:px-[45px] overflow-hidden",
                        children: [(0, r.jsxs)("div", {
                            className: "absolute inset-0 rounded-full pointer-events-none",
                            children: [(0, r.jsx)("div", {
                                className: "absolute inset-0 bg-gradient-to-b from-[#CFD3D2] to-[#636E6D] opacity-100 group-hover:opacity-0 transition-opacity duration-300"
                            }), (0, r.jsx)("div", {
                                className: "absolute inset-0 bg-gradient-to-b from-[#636E6D] to-[#CFD3D2] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            })]
                        }), (0, r.jsx)("div", {
                            className: "absolute inset-0 rounded-full pointer-events-none group-hover:shadow-[inset_0_-5px_8px_rgba(0,0,0,0.4)] transition-shadow duration-300"
                        }), (0, r.jsxs)("p", {
                            className: "relative text-lg translate-y-[0.5px] text-[#3A3A3A] font-ppsemibold overflow-hidden z-10 leading-[130%] group-hover:scale-[0.98] transition-all duration-300",
                            children: [(0, r.jsx)("span", {
                                className: "absolute inset-0 z-0 text-black/10 blur-[1px]",
                                children: s
                            }), (0, r.jsx)("span", {
                                className: "relative z-10",
                                children: s
                            })]
                        })]
                    })
                })
            }
        },
        1170: function(e, t, a) {
            "use strict";
            a.d(t, {
                default: function() {
                    return l
                }
            });
            var r = a(7437),
                s = a(4055),
                o = a(5143),
                n = a(3897),
                i = a(6498);

            function l() {
                let e = (0, o.o)(e => e.loaded),
                    t = (0, o.o)(e => e.setOpenContact);
                return (0, n.V)(() => {
                    e && i.ZP.to("[data-gsap='contact-nav']", {
                        opacity: 1,
                        pointerEvents: "all",
                        duration: .5,
                        ease: "linear",
                        delay: 2
                    })
                }, [e]), (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(s.r, {
                        href: "/",
                        children: (0, r.jsx)("img", {
                            alt: "logo",
                            src: "./icons/logo.svg",
                            className: "fixed top-[40px] left-[10px] sm:left-[20px] lg:left-[50px] lg:top-[50px] w-[35px] z-[500] mix-blend-screen",
                            style: {
                                viewTransitionName: "nav"
                            }
                        })
                    }), (0, r.jsxs)("button", {
                        onClick: () => t(!0),
                        "data-gsap": "contact-nav",
                        style: {
                            viewTransitionName: "navContact"
                        },
                        className: "opacity-0 pointer-events-none fixed top-[30px] lg:top-[40px] right-[10px] sm:right-[20px] lg:right-[50px] inline-block px-6 py-2 hover:px-4 transition-[padding] duration-150 text-white group z-[90]",
                        children: [(0, r.jsx)("div", {
                            className: "absolute top-0 left-0 w-4 h-4 border-t-[2px] border-l-[2px] border-[#FBFBFB80] rounded-tl-[10px]"
                        }), (0, r.jsx)("div", {
                            className: "absolute top-0 right-0 w-4 h-4 border-t-[2px] border-r-[2px] border-[#FBFBFB80] rounded-tr-[10px]"
                        }), (0, r.jsx)("div", {
                            className: "absolute bottom-0 left-0 w-4 h-4 border-b-[2px] border-l-[2px] border-[#FBFBFB80] rounded-bl-[10px]"
                        }), (0, r.jsx)("div", {
                            className: "absolute bottom-0 right-0 w-4 h-4 border-b-[2px] border-r-[2px] border-[#FBFBFB80] rounded-br-[10px]"
                        }), (0, r.jsx)("span", {
                            className: "text-sm font-ppsemibold",
                            children: "Contact"
                        })]
                    })]
                })
            }
        },
        5583: function(e, t, a) {
            "use strict";
            a.d(t, {
                default: function() {
                    return h
                }
            });
            var r = a(7437),
                s = a(3897),
                o = a(6498),
                n = a(2265);
            let i = [{
                name: "Freelance Client",
                image: null,
                text: "He’s easy to work with and very attentive to<br>all the requests I had."
            }, {
                name: "AMCA",
                image: "/assets/clients/amca.png",
                text: "Thanks so much Loris and team for your excellent work. We'll absolutely be working with you again. So impressed by your work, speed, and understanding of what we're looking for. Couldn't be happier."
            }, {
                name: "Leading Telecom Provider",
                image: null,
                text: "Thank you for your professionalism, it was a pleasure working with you. You immediately indicated what I was looking for, and you executed it perfectly..."
            }, {
                name: "ParkBee",
                image: "/assets/clients/parkbee.png",
                text: "Thanks so much! It was great working with you on this project. They look great, I believe it’s a wrap :)"
            }];

            function l() {
                let e = (0, n.useRef)(null),
                    t = (0, n.useRef)(0),
                    [a, l] = (0, n.useState)(i[0].name),
                    [d, c] = (0, n.useState)(i[0].image),
                    [p, u] = (0, n.useState)(i[0].text);
                return (0, s.V)(() => {
                    let a = e.current;
                    a && o.ZP.timeline({
                        repeat: -1
                    }).fromTo(a, {
                        opacity: 0
                    }, {
                        opacity: 1,
                        duration: .8,
                        ease: "power1.out"
                    }).to(a, {
                        duration: 5
                    }).to(a, {
                        opacity: 0,
                        duration: .8,
                        ease: "power1.in",
                        onComplete: () => {
                            t.current = (t.current + 1) % i.length, l(i[t.current].name), c(i[t.current].image), u(i[t.current].text)
                        }
                    })
                }, []), (0, r.jsxs)("div", {
                    "data-gsap": "contact-feedback",
                    ref: e,
                    className: "flex flex-col gap-[10px] w-[500px] text-center opacity-0 mx-auto xl:translate-x-[-50px] 2xl:translate-x-0 mt-[50px] min-h-[120px] scale-[0.75] sm:scale-100",
                    children: [null === d && (0, r.jsx)("p", {
                        className: "text-h4 font-intranet text-brightgray leading-[100%]",
                        children: a
                    }), null !== d && (0, r.jsx)("img", {
                        src: d,
                        alt: a,
                        className: "h-[30px] object-contain mb-[16px]"
                    }), (0, r.jsx)("p", {
                        className: "text-md font-ppregular text-white leading-[130%]",
                        dangerouslySetInnerHTML: {
                            __html: '<span style="color: #888888; margin-right: 2px;">"</span>'.concat(p, '<span style="color: #888888; margin-left: 2px;">"</span>')
                        }
                    })]
                })
            }
            var d = a(2169),
                c = a(5143),
                p = a(8543);

            function u(e) {
                let {
                    onClose: t
                } = e;
                (0, c.o)(e => e.isMobile);
                let [a, i] = (0, n.useState)({
                    name: "",
                    email: "",
                    message: ""
                }), l = (0, p.LZ)(), [u, m] = (0, n.useState)("idle"), [x, h] = (0, n.useState)(""), [b, g] = (0, n.useState)("430px"), f = () => {
                    {
                        let e = window.innerHeight,
                            t = window.innerWidth,
                            a = "430px";
                        t >= 768 && (e >= 1250 ? a = "70%" : e < 1250 && e >= 1150 ? a = "67%" : e < 1150 && e >= 1050 ? a = "63%" : e < 1050 && e >= 950 ? a = "61%" : e < 950 && e >= 750 ? a = "69%" : e < 750 && (a = "55%")), g(a)
                    }
                }, w = e => {
                    i(t => ({ ...t,
                        [e.target.name]: e.target.value
                    }))
                }, v = "" !== a.name.trim() && "" !== a.email.trim() && "" !== a.message.trim(), y = async e => {
                    if (e && e.preventDefault(), "loading" !== u) {
                        m("loading"), h("");
                        try {
                            let e = await fetch("/api/send", {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json"
                                    },
                                    body: JSON.stringify(a)
                                }),
                                t = await e.json();
                            e.ok ? (m("success"), null == l || l.scrollTo(0), o.ZP.to('[data-gsap="contact-feedback-wrapper"]', {
                                opacity: 0,
                                duration: .15,
                                ease: "linear"
                            }), o.ZP.to("[data-gsap='contact-form-wrapper']", {
                                opacity: 0,
                                duration: .15,
                                ease: "linear",
                                onComplete: () => {
                                    o.ZP.to("[data-gsap='contact-handshake']", {
                                        opacity: 1,
                                        duration: .15,
                                        pointerEvents: "auto",
                                        ease: "linear"
                                    })
                                }
                            }), i({
                                name: "",
                                email: "",
                                message: ""
                            })) : (console.error("Submission error:", t), m("error"), 429 === e.status ? (h(t.error || "Daily message limit reached. Please send a message tomorrow, or contact me directly through my email."), alert("Daily message limit reached. Please send a message tomorrow, or contact me directly through my email.")) : (h("Something went wrong. Please try again later."), alert("Something went wrong. Please try again later.")))
                        } catch (e) {
                            console.error("Network error:", e), m("error"), h("Network error. Please try again.")
                        }
                    }
                };
                return (0, s.V)(() => {
                    o.ZP.set("[data-gsap='contact-personicon']", {
                        scale: 0
                    }), o.ZP.to("[data-gsap='contact-personicon']", {
                        scale: 1,
                        duration: .75,
                        ease: "back.out(2.5)",
                        stagger: .2
                    }), o.ZP.from("[data-gsap='contact-title']", {
                        y: 80,
                        duration: 1.2,
                        ease: "out"
                    }), o.ZP.from("[data-gsap='contact-subtitle']", {
                        opacity: 0,
                        duration: .3,
                        delay: .5,
                        ease: "linear"
                    }), o.ZP.from("[data-gsap='contact-form']", {
                        opacity: 0,
                        duration: .4,
                        delay: .5,
                        ease: "power4.out"
                    }), o.ZP.from("[data-gsap='contact-form-wrapper']", {
                        y: "100%",
                        duration: 1.2,
                        delay: 0,
                        ease: "genyo"
                    })
                }, []), (0, n.useEffect)(() => {
                    f();
                    let e = () => f();
                    return window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
                }, []), (0, r.jsx)("div", {
                    "data-gsap": "contact-form-wrapper",
                    onClick: e => e.stopPropagation(),
                    className: "w-[calc(100vw-20px)] mx-auto mt-[20px] xl:mt-0 md:w-[720px] h-[900px] md:h-[100vh] p-[1px] bg-gradient-to-b from-[#666666] via-[#000000] to-[#4D4D4D] rounded-[30px]",
                    children: (0, r.jsxs)("div", {
                        className: "relative w-full h-full flex flex-col items-center bg-[#101010] rounded-[30px] z-10 pt-[35px] overflow-hidden",
                        children: [(0, r.jsx)("div", {
                            className: "absolute left-1/2 -translate-x-1/2 top-[-75px] w-[300px] h-[150px] bg-brightgray blur-[100px] z-0"
                        }), (0, r.jsx)("button", {
                            onClick: t,
                            className: "absolute top-[20px] right-[20px] w-[50px] h-[50px] rounded-full bg-white/[0.1] backdrop-blur-[10px] border border-[#494949] z-10 flex items-center justify-center hover:brightness-200 transition-[filter] duration-300 cursor-pointer",
                            children: (0, r.jsx)("img", {
                                src: "./icons/close.svg",
                                alt: "close icon"
                            })
                        }), (0, r.jsxs)("div", {
                            className: "flex flex-col items-center z-10 mb-[25px] pointer-events-none",
                            children: [(0, r.jsxs)("div", {
                                className: "flex items-center mb-[15px]",
                                children: [(0, r.jsx)("div", {
                                    "data-gsap": "contact-personicon",
                                    className: "w-[65px] h-[65px] rounded-full p-[2.5px] flex items-center justify-center bg-gradient-to-b from-white to-midgray ",
                                    children: (0, r.jsx)("img", {
                                        alt: "Portrait of Loris",
                                        src: "/assets/loris.webp",
                                        className: "w-full h-full object-cover rounded-full"
                                    })
                                }), (0, r.jsx)("div", {
                                    "data-gsap": "contact-personicon",
                                    className: "w-[65px] h-[65px] rounded-full p-[2.5px] flex items-center justify-center bg-gradient-to-b from-white to-midgray -ml-5",
                                    children: (0, r.jsx)("img", {
                                        alt: "Icon representing a future client",
                                        src: "/assets/client_icon.webp",
                                        className: "w-full h-full object-cover rounded-full"
                                    })
                                })]
                            }), (0, r.jsx)("div", {
                                className: "w-full h-full overflow-hidden",
                                children: (0, r.jsx)("p", {
                                    "data-gsap": "contact-title",
                                    className: "text-white font-intranet text-h4 sm:text-h3 mb-[10px] leading-[130%] text-center",
                                    children: "LET'S WORK TOGETHER"
                                })
                            }), (0, r.jsx)("p", {
                                "data-gsap": "contact-subtitle",
                                className: "text-white/50 font-ppregular text-sm w-[70%] text-center sm:w-full",
                                children: "Tell me a bit about your project, timeline, and rough budget below..."
                            })]
                        }), (0, r.jsxs)("form", {
                            "data-gsap": "contact-form",
                            onSubmit: y,
                            className: "w-[calc(100%-10px)] sm:w-[calc(100%-40px)] z-10 flex flex-col items-center flex-1",
                            children: [(0, r.jsxs)("div", {
                                style: {
                                    height: b
                                },
                                className: "w-full bg-[#060606] border border-[#232323] rounded-[27px] p-[15px] flex flex-col mb-[20px]",
                                children: [(0, r.jsxs)("div", {
                                    className: "flex gap-[8px] mb-[8px] flex-col md:flex-row",
                                    children: [(0, r.jsx)("input", {
                                        name: "name",
                                        value: a.name,
                                        onChange: w,
                                        placeholder: "Name",
                                        className: "w-full h-[50px] bg-[#1010107a] border border-[#50505080] rounded-[15px] px-[20px] text-white font-ppsemibold outline-none focus:border-white/30 transition-colors placeholder:text-brightgray shadow-[inset_0_-2px_31px_#CDCDCD15]",
                                        required: !0
                                    }), (0, r.jsx)("input", {
                                        name: "email",
                                        type: "email",
                                        value: a.email,
                                        onChange: w,
                                        placeholder: "Email",
                                        className: "w-full h-[50px] bg-[#1010107a] border border-[#50505080] rounded-[15px] px-[20px] text-white font-ppsemibold outline-none focus:border-white/30 transition-colors placeholder:text-brightgray shadow-[inset_0_-2px_31px_#CDCDCD15]",
                                        required: !0
                                    })]
                                }), (0, r.jsx)("textarea", {
                                    name: "message",
                                    value: a.message,
                                    onChange: w,
                                    placeholder: "Your Message",
                                    className: "w-full flex-1 resize-none overflow-y-auto bg-[#1010107a] border border-[#50505080] rounded-[15px] p-[20px] text-white font-ppsemibold outline-none focus:border-white/30 transition-colors placeholder:text-brightgray shadow-[inset_0_-2px_31px_#CDCDCD15]",
                                    required: !0
                                })]
                            }), (0, r.jsxs)("div", {
                                className: "flex flex-col items-center gap-[30px] md:[@media(max-height:950px)]:flex-row justify-center",
                                children: [(0, r.jsx)(d.Z, {
                                    disabled: !v || "loading" === u,
                                    type: "submit",
                                    text: "loading" === u ? "Sending..." : "Send"
                                }), (0, r.jsx)("p", {
                                    className: "text-white/50 font-ppregular text-sm text-center [@media(max-height:750px)]:mx-[15px]",
                                    children: "OR"
                                }), (0, r.jsx)("div", {
                                    className: "min-w-[340px] flex items-center justify-center",
                                    children: (0, r.jsxs)("a", {
                                        href: "mailto:studio@lorisbukvic.graphics",
                                        className: "relative inline-block px-6 py-4 hover:px-8 transition-all duration-150 text-white group -mt-4 [@media(max-height:950px)]:mt-0",
                                        children: [(0, r.jsx)("div", {
                                            className: "absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#FBFBFB80] rounded-tl-[14px]"
                                        }), (0, r.jsx)("div", {
                                            className: "absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#FBFBFB80] rounded-tr-[14px]"
                                        }), (0, r.jsx)("div", {
                                            className: "absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#FBFBFB80] rounded-bl-[14px]"
                                        }), (0, r.jsx)("div", {
                                            className: "absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#FBFBFB80] rounded-br-[14px]"
                                        }), (0, r.jsx)("span", {
                                            className: "text-sm font-ppregular",
                                            children: "Send email to studio@lorisbukvic.graphics"
                                        })]
                                    })
                                })]
                            })]
                        })]
                    })
                })
            }
            var m = a(4317);

            function x(e) {
                let {
                    onClick: t
                } = e;
                return (0, n.useEffect)(() => {
                    o.ZP.set("[data-gsap='contact-handsake']", {
                        opacity: 0,
                        pointerEvents: "none"
                    });
                    let e = setTimeout(() => {
                        window.dispatchEvent(new Event("resize"))
                    }, 100);
                    return () => clearTimeout(e)
                }, []), (0, r.jsxs)("div", {
                    "data-gsap": "contact-handshake",
                    className: "opacity-0 pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center",
                    children: [(0, r.jsxs)("div", {
                        className: "sm:w-[500px] sm:h-[500px] relative sm:[@media(max-height:1000px)]:w-[450px] sm:[@media(max-height:1000px)]:h-[450px] sm:[@media(max-height:750px)]:w-[400px] sm:[@media(max-height:750px)]:h-[400px] h-[250px] w-[250px]",
                        children: [(0, r.jsx)("div", {
                            className: "w-[180%] h-[188%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-1",
                            children: (0, r.jsx)(m.Z, {
                                jsonFilePath: "/handshake.json",
                                dpi: 1
                            })
                        }), "1", (0, r.jsx)("img", {
                            src: "/handshake_overlay.webp",
                            alt: "handshake overlay",
                            className: "w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blend-lighten scale-[1.06] opacity-75"
                        })]
                    }), (0, r.jsxs)("div", {
                        className: "flex flex-col items-center justify-center mt-[60px] sm:[@media(max-height:750px)]:-mt-[40px] sm:[@media(max-height:500px)]:translate-y-[-100px] z-10",
                        children: [(0, r.jsx)("p", {
                            className: "text-brightgray text-h4 font-intranet mb-[8px]",
                            children: "THANK YOU"
                        }), (0, r.jsx)("p", {
                            className: "text-white text-sm font-ppregular mb-[50px] sm:mb-[100px] sm:[@media(max-height:750px)]:mb-[50px] text-center",
                            children: "Thank you for your message. I’ll be in touch shortly."
                        }), (0, r.jsxs)("button", {
                            onClick: t,
                            className: "relative inline-block px-8 py-3 hover:px-12 transition-all duration-150 text-white group -mt-4 [@media(max-height:750px)]:mt-0",
                            children: [(0, r.jsx)("div", {
                                className: "absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#FBFBFB80] rounded-tl-[14px]"
                            }), (0, r.jsx)("div", {
                                className: "absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#FBFBFB80] rounded-tr-[14px]"
                            }), (0, r.jsx)("div", {
                                className: "absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#FBFBFB80] rounded-bl-[14px]"
                            }), (0, r.jsx)("div", {
                                className: "absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#FBFBFB80] rounded-br-[14px]"
                            }), (0, r.jsx)("span", {
                                className: "text-sm font-ppregular",
                                children: "close"
                            })]
                        })]
                    })]
                })
            }

            function h() {
                let e = (0, c.o)(e => e.openContact),
                    t = (0, c.o)(e => e.setOpenContact);
                (0, s.V)(() => {
                    e && o.ZP.from("[data-gsap='contact-wrapper']", {
                        opacity: 0,
                        duration: .15,
                        ease: "linear"
                    })
                }, [e]), (0, n.useEffect)(() => (e ? document.body.style.overflow = "hidden" : document.body.style.overflow = "", () => {
                    document.body.style.overflow = ""
                }), [e]);
                let a = (0, n.useCallback)(() => {
                    o.ZP.to("[data-gsap='contact-form-wrapper']", {
                        y: "100%",
                        duration: .3,
                        ease: "power2.inOut",
                        overwrite: !0
                    }), o.ZP.to("[data-gsap='contact-wrapper']", {
                        opacity: 0,
                        duration: .3,
                        delay: .15,
                        ease: "linear",
                        overwrite: !0,
                        onComplete: () => t(!1)
                    })
                }, [t]);
                return ((0, n.useEffect)(() => {
                    if (!e) return;
                    let t = e => {
                        "Escape" === e.key && a()
                    };
                    return window.addEventListener("keydown", t), () => window.removeEventListener("keydown", t)
                }, [e, a]), e) ? (0, r.jsx)("div", {
                    onClick: a,
                    "data-gsap": "contact-wrapper",
                    className: "fixed top-0 left-0 w-screen h-[100dvh] bg-[#000000ef] z-[300] overflow-hidden",
                    children: (0, r.jsxs)(p.pi, {
                        options: {
                            duration: 1,
                            lerp: .1
                        },
                        className: "w-full h-full overflow-y-auto md:overflow-hidden md:overflow-y-hidden",
                        children: [(0, r.jsxs)("div", {
                            className: "grid xl:grid-cols-2 items-center min-h-full justify-center py-[20px] md:py-0 md:h-[100dvh] overflow-y-hidden overflow-x-hidden",
                            children: [(0, r.jsx)("div", {
                                "data-gsap": "contact-feedback-wrapper",
                                children: (0, r.jsx)(l, {})
                            }), (0, r.jsx)("div", {
                                onClick: e => e.stopPropagation(),
                                className: "w-full h-full xl:translate-x-[-100px] 2xl:translate-x-0 md:translate-y-[-60px] xl:translate-y-[60px] md:scale-[0.85] xl:scale-[1]",
                                children: (0, r.jsx)(u, {
                                    onClose: a
                                })
                            })]
                        }), (0, r.jsx)(x, {
                            onClick: a
                        })]
                    })
                }) : null
            }
        },
        2778: function() {}
    },
    function(e) {
        e.O(0, [181, 870, 922, 779, 671, 144, 971, 117, 744], function() {
            return e(e.s = 4349)
        }), _N_E = e.O()
    }
]);