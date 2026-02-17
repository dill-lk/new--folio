(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [931], {
        8350: function(e, t, n) {
            Promise.resolve().then(n.bind(n, 4295))
        },
        4295: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var r = n(7437),
                a = n(6498),
                i = n(2265),
                s = n(3644),
                o = n(3897),
                l = n(2743);
            a.ZP.registerPlugin(s.C, l.i);
            let c = [{
                    icon: "./icons/awwwards.svg",
                    text: "Site of The Day  |  DAYDREAM PLAYER",
                    from: "Awwwards",
                    image: "/assets/project_images/awards/daydream.webp",
                    link: "https://www.awwwards.com/sites/daydream-player/"
                }, {
                    icon: "./icons/muzli.svg",
                    text: "Featured on Muzli Picks  |  DAYDREAM PLAYER",
                    from: "Muzli",
                    image: "/assets/project_images/awards/muzlihonor.webp",
                    link: "https://muz.li/picked/daydream/"
                }, {
                    icon: "./icons/product_design.svg",
                    text: "Featured in Product Design",
                    from: "Behance",
                    image: "/assets/project_images/awards/pd.webp",
                    link: "https://www.behance.net/gallery/191232761/LUMI-DST-02/"
                }, {
                    icon: "./icons/3d_art.svg",
                    text: "Featured in 3D Art",
                    from: "Behance",
                    image: "/assets/project_images/awards/3d.webp",
                    link: "https://www.behance.net/gallery/191502531/36-DAYS-OF-TYPE-2024/"
                }, {
                    icon: "./icons/ps_category.svg",
                    text: "Featured in Photoshop Category",
                    from: "Behance",
                    image: "/assets/project_images/awards/3d.webp",
                    link: "https://www.behance.net/gallery/191502531/36-DAYS-OF-TYPE-2024/"
                }],
                d = e => {
                    let {
                        icon: t,
                        text: n,
                        from: a,
                        link: i,
                        onMouseEnter: s
                    } = e;
                    return (0, r.jsxs)("div", {
                        className: "hidden sm:flex items-center w-full opacity-50 hover:opacity-100 duration-150 transition-opacity cursor-pointer",
                        onClick: () => window.open(i, "_blank", "noopener noreferrer"),
                        onMouseEnter: s,
                        children: [(0, r.jsx)("div", {
                            className: "min-w-[70px] h-full",
                            children: (0, r.jsx)("img", {
                                "data-gsap": "award-icon",
                                src: t,
                                className: "h-full opacity-0",
                                alt: "".concat(a, " logo")
                            })
                        }), (0, r.jsx)("p", {
                            "data-gsap": "award-text",
                            className: "text-md text-brightgray font-ppsemibold opacity-0",
                            children: n
                        }), (0, r.jsx)("p", {
                            "data-gsap": "award-from",
                            className: "text-md text-brightgray font-ppsemibold ml-auto uppercase opacity-0",
                            children: a
                        })]
                    })
                },
                u = e => {
                    let {
                        icon: t,
                        text: n,
                        from: a,
                        link: i
                    } = e;
                    return (0, r.jsxs)("div", {
                        className: "active:opacity-50 opacity-100 hover:opacity-50 duration-150 transition-opacity cursor-pointer flex sm:hidden items-start w-full",
                        onClick: () => window.open(i, "_blank", "noopener noreferrer"),
                        children: [(0, r.jsx)("div", {
                            className: "min-w-[55px] h-full",
                            children: (0, r.jsx)("img", {
                                "data-gsap": "award-icon-mobile",
                                src: t,
                                className: "h-full translate-y-[5px] opacity-0",
                                alt: "".concat(a, " logo")
                            })
                        }), (0, r.jsxs)("div", {
                            className: "flex flex-col",
                            children: [(0, r.jsx)("p", {
                                "data-gsap": "award-from-mobile",
                                className: "text-md text-brightgray font-ppsemibold uppercase opacity-0",
                                children: a
                            }), (0, r.jsx)("p", {
                                "data-gsap": "award-text-mobile",
                                className: "text-md text-brightgray font-ppsemibold opacity-0",
                                children: n
                            })]
                        })]
                    })
                },
                p = e => {
                    let {
                        src: t,
                        zIndex: n,
                        onEnterComplete: s
                    } = e, l = (0, i.useRef)(null);
                    return (0, o.V)(() => {
                        a.ZP.timeline().fromTo(l.current, {
                            scale: 0,
                            yPercent: -50
                        }, {
                            scale: 1,
                            yPercent: -50,
                            duration: .75,
                            ease: "power4.inOut",
                            onComplete: s
                        })
                    }, []), (0, r.jsx)("img", {
                        ref: l,
                        src: t,
                        className: "absolute top-1/2 left-0 w-full h-auto rounded-[13px] shadow-lg will-change-transform",
                        style: {
                            zIndex: n
                        },
                        alt: "award image"
                    })
                };

            function m() {
                let [e, t] = (0, i.useState)([]), n = (0, i.useRef)(0), l = (0, i.useRef)(null), m = (0, i.useRef)(null), x = (0, i.useRef)(), h = (0, i.useRef)(), f = (0, i.useRef)(), w = (0, i.useRef)(null), g = (0, i.useRef)(null);
                (0, i.useEffect)(() => {
                    0 === e.length && (l.current = null)
                }, [e]), (0, o.V)(() => {
                    if (m.current) {
                        x.current = a.ZP.quickTo(m.current, "x", {
                            duration: .8,
                            ease: "power3.out"
                        }), h.current = a.ZP.quickTo(m.current, "y", {
                            duration: .8,
                            ease: "power3.out"
                        }), f.current = a.ZP.quickTo(m.current, "rotationX", {
                            duration: .8,
                            ease: "power3.out"
                        });
                        let e = a.ZP.matchMedia();
                        e.add("(min-width: 1280px)", () => {
                            a.ZP.set(m.current, {
                                scale: 1,
                                xPercent: -50,
                                yPercent: -50
                            }), x.current && h.current && (x.current(.12 * window.innerWidth), h.current(0))
                        }), e.add("(max-width: 1279px)", () => {
                            a.ZP.set(m.current, {
                                scale: .75,
                                xPercent: -50,
                                yPercent: -50
                            }), x.current && h.current && (x.current(0), h.current(0))
                        })
                    }
                }, []);
                let y = e => {
                        if (l.current === e) return;
                        l.current = e;
                        let r = c[e].image;
                        r && t(e => {
                            let t = [...e, {
                                id: n.current++,
                                src: r
                            }];
                            return t.length > 20 ? t.slice(t.length - 20) : t
                        })
                    },
                    v = e => {
                        t(t => t.filter(t => t.id >= e))
                    };
                return (0, o.V)(() => {
                    let e = a.ZP.context(() => {
                        document.fonts.ready.then(() => {
                            let e = new s.C("[data-gsap='award-text']", {
                                    type: "lines",
                                    linesClass: "line",
                                    mask: "lines"
                                }),
                                t = new s.C("[data-gsap='award-from']", {
                                    type: "lines",
                                    linesClass: "line",
                                    mask: "lines"
                                }),
                                n = new s.C("[data-gsap='award-text-mobile']", {
                                    type: "lines",
                                    linesClass: "line",
                                    mask: "lines"
                                }),
                                r = new s.C("[data-gsap='award-from-mobile']", {
                                    type: "lines",
                                    linesClass: "line",
                                    mask: "lines"
                                }),
                                i = e => {
                                    e.forEach(e => {
                                        var t;
                                        let n = document.createElement("div");
                                        n.style.overflow = "hidden", null === (t = e.parentNode) || void 0 === t || t.insertBefore(n, e), n.appendChild(e)
                                    })
                                };
                            i(e.lines), i(t.lines), i(n.lines), i(r.lines);
                            let o = a.ZP.timeline({
                                scrollTrigger: {
                                    trigger: w.current,
                                    start: "top+=200 80%",
                                    once: !0
                                }
                            });
                            o.fromTo("[data-gsap='award-icon']", {
                                opacity: 0,
                                scale: .5
                            }, {
                                opacity: 1,
                                scale: 1,
                                stagger: .2,
                                duration: 1.2,
                                ease: "back.out(2)"
                            }, 0), o.fromTo("[data-gsap='award-icon-mobile']", {
                                opacity: 0,
                                scale: .5
                            }, {
                                opacity: 1,
                                scale: 1,
                                stagger: .2,
                                duration: 1.2,
                                ease: "back.out(2)"
                            }, 0), o.fromTo("[data-gsap='award-text'] .line", {
                                yPercent: 100,
                                opacity: 0
                            }, {
                                yPercent: 0,
                                opacity: 1,
                                stagger: .1,
                                duration: 1.2,
                                ease: "out"
                            }, 0), o.fromTo("[data-gsap='award-from'] .line", {
                                yPercent: 100,
                                opacity: 0
                            }, {
                                yPercent: 0,
                                opacity: 1,
                                stagger: .1,
                                duration: 1.2,
                                ease: "out"
                            }, 0), o.fromTo("[data-gsap='award-text-mobile'] .line", {
                                yPercent: 100,
                                opacity: 0
                            }, {
                                yPercent: 0,
                                opacity: 1,
                                stagger: .1,
                                duration: 1.2,
                                ease: "out"
                            }, 0), o.fromTo("[data-gsap='award-from-mobile'] .line", {
                                yPercent: 100,
                                opacity: 0
                            }, {
                                yPercent: 0,
                                opacity: 1,
                                stagger: .1,
                                duration: 1.2,
                                ease: "out"
                            }, 0), a.ZP.set("[data-gsap='award-text'], [data-gsap='award-from'], [data-gsap='award-text-mobile'], [data-gsap='award-from-mobile']", {
                                opacity: 1
                            })
                        })
                    });
                    return () => {
                        e.revert()
                    }
                }, {
                    scope: w
                }), (0, r.jsxs)("section", {
                    ref: w,
                    className: "px-[10px] sm:px-[20px] pt-[90px] lg:px-[50px]  xl:py-[170px]",
                    children: [(0, r.jsxs)("p", {
                        className: "text-md sm:text-h3 text-midgray font-intranet opacity-80 mb-[50px] leading-[130%]",
                        children: ["awards and", (0, r.jsx)("br", {}), "recognitions"]
                    }), (0, r.jsxs)("div", {
                        className: "relative flex flex-col gap-[20px]",
                        style: {
                            perspective: "1000px"
                        },
                        onMouseMove: e => {
                            if (!h.current || !f.current || !x.current) return;
                            let t = e.currentTarget.getBoundingClientRect(),
                                n = t.height / 2,
                                r = e.clientX - t.left,
                                a = e.clientY - t.top,
                                i = a - n,
                                s = i / n;
                            window.innerWidth >= 1280 ? (x.current(.12 * window.innerWidth), h.current(i)) : (x.current(r), h.current(a)), f.current(-(4 * s))
                        },
                        onMouseLeave: () => {
                            m.current && (a.ZP.to(m.current.children, {
                                opacity: 0,
                                scale: 0,
                                duration: .3,
                                delay: 1,
                                overwrite: "auto"
                            }), g.current = a.ZP.delayedCall(1.3, () => {
                                t([]), l.current = null
                            }))
                        },
                        onMouseEnter: () => {
                            g.current && (g.current.kill(), g.current = null), m.current && (a.ZP.killTweensOf(m.current.children), a.ZP.to(m.current.children, {
                                opacity: 1,
                                scale: 1,
                                duration: .3,
                                overwrite: "auto"
                            }))
                        },
                        children: [c.map((e, t) => (0, r.jsx)(d, {
                            onMouseEnter: () => y(t),
                            icon: e.icon,
                            text: e.text,
                            from: e.from,
                            link: e.link
                        }, t)), c.map((e, t) => (0, r.jsx)(u, {
                            icon: e.icon,
                            text: e.text,
                            from: e.from,
                            link: e.link
                        }, "mobile-".concat(t))), (0, r.jsx)("div", {
                            ref: m,
                            className: "absolute top-0 left-0 xl:top-1/2 xl:left-1/2 w-[40vw] max-w-[700px] rounded-[13px] pointer-events-none z-0",
                            style: {
                                transformStyle: "preserve-3d"
                            },
                            children: e.map((e, t) => (0, r.jsx)(p, {
                                src: e.src,
                                zIndex: e.id,
                                onEnterComplete: () => v(e.id)
                            }, e.id))
                        })]
                    })]
                })
            }
            var x = n(2169),
                h = n(5143);

            function f() {
                let e = (0, i.useRef)(null),
                    t = (0, h.o)(e => e.setOpenContact),
                    [n, s] = (0, i.useState)(0);
                return (0, i.useEffect)(() => {
                    s(window.innerWidth);
                    let e = () => s(window.innerWidth);
                    return window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
                }, []), (0, o.V)(() => {
                    n >= 768 ? (a.ZP.set(e.current, {
                        height: "0vh",
                        opacity: 1
                    }), l.i.create({
                        trigger: "section[data-gsap='contact']",
                        start: "top 90%",
                        end: "bottom 90%",
                        scrub: !0,
                        animation: a.ZP.fromTo(e.current, {
                            height: "0vh"
                        }, {
                            height: "70vh",
                            ease: "none"
                        }),
                        onEnter: () => {
                            a.ZP.set(e.current, {
                                opacity: 1
                            })
                        },
                        onLeaveBack: () => {
                            a.ZP.set(e.current, {
                                height: "0vh",
                                opacity: 0
                            })
                        }
                    })) : (l.i.getAll().forEach(e => {
                        "section[data-gsap='contact']" === e.vars.trigger && e.kill()
                    }), a.ZP.set(e.current, {
                        height: "70vh",
                        opacity: 1,
                        clearProps: "all"
                    }))
                }, [n]), (0, r.jsx)("section", {
                    "data-gsap": "contact",
                    className: "relative w-full min-h-[70vh] px-[10px] sm:px-[25px] flex items-start justify-center md:overflow-hidden",
                    children: (0, r.jsxs)("div", {
                        ref: e,
                        className: "relative w-full h-[70vh] p-[2px] bg-gradient-to-b from-[#0C0E0F] to-[#4D4D4D] rounded-[25px] opacity-100 md:overflow-hidden mb-[75px] md:mb-[0]",
                        children: [(0, r.jsxs)("div", {
                            className: "absolute inset-[2px] rounded-[24px] overflow-hidden z-0",
                            children: [(0, r.jsx)("img", {
                                alt: "contact background image",
                                src: "/assets/contact_bg.webp",
                                className: "w-full min-h-[70vh] max-h-[70vh] h-[89vh] object-cover object-[80%] md:object-[70%] xl:object-[85%]"
                            }), (0, r.jsx)("div", {
                                className: "absolute bottom-0 w-full h-[400px] bg-gradient-to-b from-transparent to-black/90 z-10"
                            })]
                        }), (0, r.jsxs)("div", {
                            className: " absolute md:inset-y-0 md:left-[5vw] xl:left-[13vw] z-20 md:min-h-[70vh] md:max-h-[70vh] md:h-[70vh] bottom-[-40px] left-1/2 -translate-x-1/2 md:translate-x-0 flex flex-col items-center justify-center w-full md:w-fit ",
                            children: [(0, r.jsxs)("div", {
                                className: "flex items-center mb-[15px]",
                                children: [(0, r.jsx)("div", {
                                    className: "w-[65px] h-[65px] rounded-full p-[2.5px] flex items-center justify-center bg-gradient-to-b from-white to-midgray ",
                                    children: (0, r.jsx)("img", {
                                        alt: "Portrait of Loris",
                                        src: "/assets/loris.webp",
                                        className: "w-full h-full object-cover rounded-full"
                                    })
                                }), (0, r.jsx)("div", {
                                    className: "w-[65px] h-[65px] rounded-full p-[2.5px] flex items-center justify-center bg-gradient-to-b from-white to-midgray -ml-5",
                                    children: (0, r.jsx)("img", {
                                        alt: "Icon representing a future client",
                                        src: "/assets/client_icon.webp",
                                        className: "w-full h-full object-cover rounded-full"
                                    })
                                })]
                            }), (0, r.jsx)("p", {
                                className: "text-white font-intranet text-h4 lg:text-h3 mb-[25px] ",
                                children: "LET'S WORK TOGETHER"
                            }), (0, r.jsx)(x.Z, {
                                onClick: () => t(!0),
                                text: "Contact"
                            })]
                        })]
                    })
                })
            }
            a.ZP.registerPlugin(l.i), a.ZP.registerPlugin(l.i, s.Z);
            let w = [{
                    title: "education",
                    content: (0, r.jsxs)("p", {
                        className: "text-md text-brightgray",
                        children: ["• BA in Graphic Design", (0, r.jsx)("br", {}), " — Eszterh\xe1zy K\xe1roly University,", (0, r.jsx)("br", {}), "Hungary [2022–2025]"]
                    })
                }, {
                    title: "stack",
                    content: (0, r.jsx)("p", {
                        className: "text-md text-brightgray lg:w-[300px] xl:w-[450px]",
                        children: "Photoshop / Illustrator / InDesign / After Effects / Blender / Glyphs / Figma / Rive / Webflow / Framer"
                    })
                }, {
                    title: "experience",
                    content: (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("p", {
                            className: "text-md text-brightgray lg:w-[300px] xl:w-[446px]",
                            children: "• Associate Creative Director – WORLDS [2024–]"
                        }), (0, r.jsx)("p", {
                            className: "text-md text-brightgray lg:w-[300px] xl:w-[446px] opacity-50 ml-5",
                            children: "Visual Identity, Lead Graphic Designer, UI Designer, Concept Art Direction"
                        }), (0, r.jsx)("p", {
                            className: "text-md text-brightgray lg:w-[300px] xl:w-[446px]",
                            children: "• Freelancing [2023–]"
                        }), (0, r.jsx)("p", {
                            className: "text-md text-brightgray lg:w-[300px] xl:w-[446px] opacity-50 ml-5",
                            children: "Various websites, branding and 3D rendering projects"
                        })]
                    })
                }, {
                    title: "I can help you with",
                    content: (0, r.jsx)("p", {
                        className: "text-md text-brightgray lg:w-[300px] xl:w-[437px]",
                        children: "End-to-end Web Design and Implementation, UI/UX design, Brand Identity, Graphic Design, 3D Product Renderings, and more"
                    })
                }, {
                    title: "selected clients",
                    content: (0, r.jsxs)("div", {
                        className: "flex sm:items-center lg:w-[300px] flex-col sm:flex-row xl:w-full flex-wrap gap-[20px] md:gap-[32px]",
                        children: [(0, r.jsx)("div", {
                            className: "overflow-hidden",
                            children: (0, r.jsx)("img", {
                                alt: "stc logo",
                                src: "/assets/clients/stc.png",
                                className: "experience-client-logo w-[65px] mt-[10px] md:mt-0"
                            })
                        }), (0, r.jsx)("div", {
                            className: "overflow-hidden",
                            children: (0, r.jsx)("img", {
                                alt: "parkbee logo",
                                src: "/assets/clients/parkbee.png",
                                className: "experience-client-logo w-[145px]"
                            })
                        }), (0, r.jsx)("div", {
                            className: "overflow-hidden",
                            children: (0, r.jsx)("img", {
                                alt: "amca logo",
                                src: "/assets/clients/amca.png",
                                className: "experience-client-logo w-[142px]"
                            })
                        })]
                    })
                }],
                g = () => {
                    let e = (0, i.useRef)([]);
                    return (0, o.V)(() => {
                        document.fonts.ready.then(() => {
                            e.current.forEach((e, t) => {
                                let n = new s.Z("[data-gsap='experience-title-".concat(t, "-medium']"), {
                                        type: "lines",
                                        linesClass: "line"
                                    }),
                                    r = new s.Z("[data-gsap='experience-content-".concat(t, "-medium']"), {
                                        type: "lines",
                                        linesClass: "line"
                                    }),
                                    i = e => {
                                        e.forEach(e => {
                                            var t;
                                            let n = document.createElement("div");
                                            n.style.overflow = "hidden", null === (t = e.parentNode) || void 0 === t || t.insertBefore(n, e), n.appendChild(e)
                                        })
                                    };
                                i(n.lines), i(r.lines), a.ZP.set("[data-gsap='experience-title-".concat(t, "-medium'] .line,\n         [data-gsap='experience-content-").concat(t, "-medium'] .line"), {
                                    yPercent: 130
                                }), a.ZP.set(e.querySelectorAll(".experience-client-logo"), {
                                    yPercent: 130
                                }), setTimeout(() => {
                                    requestAnimationFrame(() => {
                                        l.i.create({
                                            trigger: e,
                                            start: "top 80%",
                                            onEnter: () => {
                                                a.ZP.to(n.lines, {
                                                    yPercent: 0,
                                                    duration: 1.2,
                                                    stagger: .1,
                                                    ease: "out"
                                                }), a.ZP.to(r.lines, {
                                                    yPercent: 0,
                                                    duration: 1.2,
                                                    stagger: .1,
                                                    ease: "out"
                                                }), a.ZP.to(e.querySelectorAll(".experience-client-logo"), {
                                                    yPercent: 0,
                                                    duration: 1.2,
                                                    stagger: window.innerWidth < 640 ? .1 : 0,
                                                    delay: .3,
                                                    ease: "out"
                                                })
                                            }
                                        })
                                    })
                                }, 1)
                            })
                        })
                    }), (0, r.jsx)("section", {
                        className: "lg:hidden relative w-full px-[10px] sm:px-[20px] py-[90px] md:py-[150px] flex flex-col gap-[45px] md:gap-[90px]",
                        children: w.map((t, n) => (0, r.jsxs)("div", {
                            ref: t => t && (e.current[n] = t),
                            className: "flex flex-col md:flex-row justify-between md:gap-[50px]",
                            children: [(0, r.jsx)("div", {
                                className: "md:w-[50%]",
                                children: (0, r.jsx)("p", {
                                    "data-gsap": "experience-title-".concat(n, "-medium"),
                                    className: "font-intranet text-md sm:text-h3 text-midgray md:text-brightgray mb-[8px]",
                                    children: t.title
                                })
                            }), (0, r.jsx)("div", {
                                "data-gsap": "experience-content-".concat(n, "-medium"),
                                className: "md:w-[50%] font-ppsemibold",
                                children: t.content
                            })]
                        }, n))
                    })
                },
                y = () => {
                    let e = (0, i.useRef)([]);
                    return (0, o.V)(() => {
                        setTimeout(() => {
                            requestAnimationFrame(() => {
                                e.current.forEach(e => {
                                    l.i.create({
                                        trigger: e,
                                        start: "top-=100 50%",
                                        end: "bottom+=100 50%",
                                        onUpdate: t => {
                                            let n = t.progress;
                                            a.ZP.set(e, {
                                                opacity: .5 + .5 * Math.sin(Math.PI * n),
                                                gap: 220 + 100 * Math.sin(Math.PI * n)
                                            })
                                        }
                                    })
                                })
                            })
                        }, 1)
                    }, []), (0, o.V)(() => {
                        document.fonts.ready.then(() => {
                            e.current.forEach((e, t) => {
                                let n = new s.Z("[data-gsap='experience-title-".concat(t, "']"), {
                                        type: "lines",
                                        linesClass: "line"
                                    }),
                                    r = new s.Z("[data-gsap='experience-content-".concat(t, "']"), {
                                        type: "lines",
                                        linesClass: "line"
                                    }),
                                    i = e => {
                                        e.forEach(e => {
                                            var t;
                                            let n = document.createElement("div");
                                            n.style.overflow = "hidden", null === (t = e.parentNode) || void 0 === t || t.insertBefore(n, e), n.appendChild(e)
                                        })
                                    };
                                i(n.lines), i(r.lines), a.ZP.set("[data-gsap='experience-title-".concat(t, "'] .line,\n         [data-gsap='experience-content-").concat(t, "'] .line"), {
                                    yPercent: 130
                                }), a.ZP.set(e.querySelectorAll(".experience-client-logo"), {
                                    yPercent: 130
                                }), l.i.create({
                                    trigger: e,
                                    start: "top-=300 50%",
                                    onEnter: () => {
                                        a.ZP.to(n.lines, {
                                            yPercent: 0,
                                            duration: 1.2,
                                            stagger: .1,
                                            ease: "out"
                                        }), a.ZP.to(r.lines, {
                                            yPercent: 0,
                                            duration: 1.2,
                                            stagger: .1,
                                            ease: "out"
                                        }), a.ZP.to(e.querySelectorAll(".experience-client-logo"), {
                                            yPercent: 0,
                                            duration: .6,
                                            stagger: 0,
                                            delay: .3,
                                            ease: "out"
                                        })
                                    }
                                })
                            })
                        })
                    }), (0, r.jsx)("section", {
                        className: "hidden lg:block relative w-full py-[170px]",
                        children: (0, r.jsxs)("div", {
                            className: "relative mx-auto max-w-[1200px]",
                            children: [(0, r.jsx)("div", {
                                className: "absolute left-1/2 -translate-x-1/2 top-[33px] h-full pointer-events-none",
                                children: (0, r.jsx)("div", {
                                    className: "sticky top-[50vh] -translate-y-1/2 flex justify-center",
                                    children: (0, r.jsx)("img", {
                                        alt: "icon for experience section",
                                        src: "./icons/experience_icon.png",
                                        className: "w-[92px]"
                                    })
                                })
                            }), (0, r.jsx)("div", {
                                className: "flex flex-col gap-[60px]",
                                children: w.map((t, n) => (0, r.jsxs)("div", {
                                    ref: t => t && (e.current[n] = t),
                                    className: "flex gap-[220px] items-center opacity-50",
                                    children: [(0, r.jsx)("p", {
                                        "data-gsap": "experience-title-".concat(n),
                                        className: "font-intranet sm:text-h3 text-brightgray w-[500px] text-right",
                                        children: t.title
                                    }), (0, r.jsx)("div", {
                                        "data-gsap": "experience-content-".concat(n),
                                        className: "w-[500px] font-ppsemibold",
                                        children: t.content
                                    })]
                                }, n))
                            })]
                        })
                    })
                };

            function v() {
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(g, {}), (0, r.jsx)(y, {})]
                })
            }
            var b = n(4055),
                j = n(4204),
                P = n(7933);

            function N(e) {
                let {
                    className: t
                } = e, n = (0, h.o)(e => e.setOpenContact), {
                    rive: a,
                    setCanvasRef: s,
                    setContainerRef: o
                } = (0, P.useRive)({
                    src: "/instafooter.riv",
                    artboard: "Artboard",
                    stateMachines: "State Machine 1",
                    autoplay: !0,
                    layout: new P.Layout({
                        fit: P.Fit.Cover,
                        alignment: P.Alignment.Center
                    })
                }), l = (0, P.useViewModel)(a, {
                    name: "FooterViewModel"
                });
                return (0, P.useViewModelInstance)(l, {
                    rive: a
                }), (0, i.useEffect)(() => {
                    if (a) {
                        let e = e => {
                                let t = window.open(e, "_blank");
                                (!t || t.closed || void 0 === t.closed) && (window.location.href = e)
                            },
                            t = t => {
                                "backClicked" === t.data.name && e("https://www.instagram.com/jpegloris_/"), "behanceClicked" === t.data.name && e("https://www.behance.net/bukvitylorisz/"), "messageClicked" === t.data.name && n(!0)
                            };
                        return a.on(P.EventType.RiveEvent, t), () => {
                            a.off(P.EventType.RiveEvent, t)
                        }
                    }
                }, [a]), (0, r.jsx)("div", {
                    className: t,
                    ref: o,
                    children: (0, r.jsx)("canvas", {
                        ref: s
                    })
                })
            }

            function k() {
                let [e, t] = (0, i.useState)("");
                return (0, i.useEffect)(() => {
                    let e = () => {
                        let e = new Date;
                        t(new Intl.DateTimeFormat("en-GB", {
                            timeZone: "Europe/Budapest",
                            hour: "2-digit",
                            minute: "2-digit",
                            hour12: !1
                        }).format(e))
                    };
                    e();
                    let n = setInterval(e, 1e3);
                    return () => clearInterval(n)
                }, []), (0, r.jsxs)("section", {
                    className: "p-[50px] flex items-center lg:justify-between lg:items-end flex-col lg:flex-row gap-[40px] lg:gap-[0px]",
                    children: [(0, r.jsxs)("div", {
                        className: "flex lg:items-end flex-col lg:flex-row w-fit gap-[70px] lg:gap-[0px]",
                        children: [(0, r.jsxs)("div", {
                            className: "flex flex-col gap-[26px] items-center justify-center",
                            children: [(0, r.jsx)(b.r, {
                                href: "/works",
                                children: (0, r.jsx)(j.Z, {})
                            }), (0, r.jsx)("p", {
                                className: "font-intranet text-md text-midgray leading-[100%]",
                                children: "WORKS"
                            })]
                        }), (0, r.jsx)(N, {
                            className: "w-[350px] translate-y-[-10px]"
                        })]
                    }), (0, r.jsxs)("div", {
                        className: "flex flex-col gap-[2px] text-center w-fit lg:text-left",
                        children: [(0, r.jsxs)("p", {
                            className: "text-sm leading-[100%] translate-y-[2.5px] font-intranet text-midgray min-h-[14px]",
                            children: [e, " [HU]"]
                        }), (0, r.jsxs)("div", {
                            className: "flex gap-[5px] items-center",
                            children: [(0, r.jsx)("div", {
                                className: "w-[10px] h-[10px] p-[4px] rounded-full bg-gradient-to-b from-[#0FFF2F] to-[#84FF6F] shadow-[0_0_10px_0.2px_#0FFF2F]",
                                children: (0, r.jsx)("div", {
                                    className: "w-full h-full rounded-full bg-gradient-to-b from-[#6CFF6C] to-[#23FF1F]"
                                })
                            }), (0, r.jsx)("p", {
                                className: "text-sm leading-[100%] translate-y-[2.5px] font-intranet text-midgray",
                                children: "WAITING FOR YOUR MESSAGE"
                            })]
                        })]
                    })]
                })
            }
            var C = n(4317),
                E = n(2079),
                R = n(1448),
                M = n(5087),
                S = n(2046),
                V = n(6207),
                Z = n(5960);

            function B(e) {
                let {
                    modelPath: t
                } = e, n = (0, h.o)(e => e.isMobile), a = (0, i.useRef)(n);
                (0, i.useEffect)(() => {
                    a.current = n
                }, [n]);
                let s = (0, i.useRef)(null),
                    o = (0, i.useRef)(null),
                    [l, c] = (0, i.useState)(!1),
                    d = (0, i.useRef)(null),
                    u = (0, i.useRef)(null),
                    p = (0, i.useRef)(null),
                    m = (0, i.useRef)(null),
                    x = (0, i.useRef)(new E.SUY),
                    f = (0, i.useRef)(null),
                    w = (0, i.useRef)(null),
                    g = (0, i.useRef)([]),
                    y = (0, i.useRef)([]),
                    v = (0, i.useRef)(null),
                    b = (0, i.useRef)(null),
                    j = (0, i.useRef)(null),
                    P = (0, i.useRef)(null),
                    N = (0, i.useRef)(new E.FM8),
                    k = (0, i.useRef)(new E.iMs),
                    C = (0, i.useRef)(new E.JOQ(new E.Pa4(1, 0, 0), 0)),
                    B = (0, i.useRef)(new E.Pa4),
                    T = (0, i.useRef)(!1),
                    A = (0, i.useRef)(!1),
                    z = (0, i.useRef)({
                        uProgress: {
                            value: 1
                        },
                        uTime: {
                            value: 0
                        },
                        uColorA: {
                            value: new E.Ilk(0, 110 / 255, 1)
                        },
                        uColorB: {
                            value: new E.Ilk(0, 110 / 255, 1)
                        },
                        uGlowParams: {
                            value: new E.Pa4(5, 12.3, .05)
                        },
                        uDirection: {
                            value: -1
                        }
                    }),
                    D = (0, i.useRef)(1 / .15),
                    F = (0, i.useRef)(1 / .15),
                    _ = (0, i.useRef)(null),
                    W = (0, i.useRef)(null),
                    I = new E.Pa4(0, 11, 0),
                    L = 1 / 60;
                (0, i.useEffect)(() => {
                    if (!s.current) return;
                    let e = new E.xsS;
                    d.current = e;
                    let r = s.current.clientWidth,
                        i = s.current.clientHeight,
                        l = new E.cPb(35, r / i, .1, 1e3);
                    l.position.set(22, 0, 0), l.lookAt(0, 3, 0), u.current = l;
                    let h = new R.CP7({
                        alpha: !0,
                        antialias: !0
                    });
                    h.setSize(r, i), h.setPixelRatio(n ? 1 : Math.min(window.devicePixelRatio, 1)), h.shadowMap.enabled = !n, h.shadowMap.type = E.ntZ, h.toneMapping = E.LY2, h.toneMappingExposure = 2, s.current.appendChild(h.domElement), p.current = h, o.current = h.domElement;
                    let M = new E.Mig(16777215, 3);
                    e.add(M);
                    let S = new E.PMe(16777215, 1e4);
                    S.position.set(10, 20, 10), S.angle = Math.PI / 6, S.penumbra = .5, S.castShadow = !0, S.shadow.mapSize.width = 2048, S.shadow.mapSize.height = 2048, S.shadow.bias = -.0001, e.add(S);
                    let V = new E.PMe(14544639, 4e3);
                    V.position.set(-10, 10, -5), V.lookAt(0, -5, 0), e.add(V);
                    let q = new E.cek(33527, 600);
                    q.position.set(5, -10, 5), e.add(q), M.intensity = n ? 1 : 3, S.intensity = n ? 3e3 : 1e4, V.intensity = n ? 1e3 : 4e3, q.intensity = n ? 200 : 600;
                    let O = new E.Wid({
                        color: 11184810,
                        metalness: 1,
                        roughness: .2,
                        envMapIntensity: .8
                    });
                    O.onBeforeCompile = e => {
                        e.uniforms.uProgress = z.current.uProgress, e.uniforms.uTime = z.current.uTime, e.uniforms.uColorA = z.current.uColorA, e.uniforms.uColorB = z.current.uColorB, e.uniforms.uGlowParams = z.current.uGlowParams, e.uniforms.uDirection = z.current.uDirection, e.vertexShader = "\n        varying vec3 vWorldPosition;\n        ".concat(e.vertexShader, "\n      ").replace("#include <worldpos_vertex>", "#include <worldpos_vertex>\nvWorldPosition = (modelMatrix * vec4(transformed, 1.0)).xyz;"), e.fragmentShader = "\n        uniform float uProgress;\n        uniform float uTime;\n        uniform vec3 uColorA;\n        uniform vec3 uColorB;\n        uniform vec3 uGlowParams;\n        uniform float uDirection;\n        varying vec3 vWorldPosition;\n        float hash(float n) { return fract(sin(n) * 43758.5453123); }\n        ".concat(e.fragmentShader, "\n      ").replace("#include <dithering_fragment>", "\n        #include <dithering_fragment>\n        \n        // Only apply scan effect if progress is not complete\n        if (uProgress < 0.99) {\n            float glowThickness = uGlowParams.x;\n            float glowIntensity = uGlowParams.y;\n            float glitchStr = uGlowParams.z;\n            float scanBase = (uDirection < 0.0) ? 15.0 - (uProgress * 30.0) : -15.0 + (uProgress * 30.0);\n            float n1 = sin(vWorldPosition.x * 2.5 + uTime * 1.5) * cos(vWorldPosition.z * 2.5 + uTime * 1.2);\n            float n2 = sin(vWorldPosition.x * 12.0 - uTime * 4.0) * 0.08;\n            float glitch = hash(floor(vWorldPosition.y * 8.0) + uTime) * glitchStr * step(0.92, hash(uTime * 0.5));\n            float limit = scanBase + n1 * 0.45 + n2 + glitch;\n            bool isVisible = (uDirection < 0.0) ? (vWorldPosition.y > limit) : (vWorldPosition.y < limit);\n            if (!isVisible) discard;\n            float dist = abs(vWorldPosition.y - limit);\n            if (dist < glowThickness) {\n                float edge = 1.0 - (dist / glowThickness);\n                float flicker = 0.85 + 0.15 * sin(uTime * 25.0);\n                float pulse = pow(edge, 3.5) * flicker;\n                float gradMix = sin(vWorldPosition.y * 1.5 + uTime) * 0.5 + 0.5;\n                vec3 finalGlow = mix(uColorA, uColorB, gradMix);\n                gl_FragColor.rgb += finalGlow * pulse * glowIntensity;\n                if (hash(vWorldPosition.x * 15.0 + vWorldPosition.y * 15.0 + uTime) > 0.985) gl_FragColor.rgb += vec3(1.0) * pulse * 12.0;\n            }\n        }\n        ")
                    }, _.current = O;
                    let G = new Z.World;
                    G.gravity.set(0, -9.82, 0), G.broadphase = new Z.SAPBroadphase(G), G.solver.iterations = 50, G.solver.tolerance = .1, m.current = G;
                    let Y = new Z.Material("chainMaterial");
                    G.addContactMaterial(new Z.ContactMaterial(Y, Y, {
                        friction: .2,
                        restitution: 0
                    })), j.current = null;
                    let H = new Z.Body({
                        mass: 0,
                        type: Z.Body.KINEMATIC,
                        position: new Z.Vec3(0, 0, 0)
                    });
                    H.collisionFilterGroup = 0, G.addBody(H), t || function() {
                        let e = m.current,
                            t = d.current;
                        w.current && e.removeBody(w.current), g.current.forEach(t => e.removeBody(t)), y.current.forEach(e => t.remove(e)), v.current && e.removeBody(v.current), b.current && t.remove(b.current), g.current = [], y.current = [];
                        let r = new Z.Body({
                            mass: 0,
                            position: new Z.Vec3(I.x, I.y, I.z)
                        });
                        e.addBody(r), w.current = r;
                        let a = new E.XvJ(.25, .06, n ? 4 : 16, n ? 12 : 50);
                        a.scale(1, 1.2, 1);
                        let i = new Z.Box(new Z.Vec3(.03, .3, .03)),
                            s = new Z.Box(new Z.Vec3(.25, .03, .03)),
                            o = r,
                            l = I.y;
                        for (let n = 0; n < 9; n++) {
                            let c = n % 2 != 0;
                            l -= .51;
                            let d = new Z.Body({
                                    mass: .15,
                                    position: new Z.Vec3(I.x, l, I.z),
                                    linearDamping: .3,
                                    angularDamping: .3
                                }),
                                u = new Z.Quaternion;
                            c || u.setFromAxisAngle(new Z.Vec3(0, 1, 0), Math.PI / 2), d.quaternion.copy(u), d.addShape(i, new Z.Vec3(-.25, 0, 0)), d.addShape(i, new Z.Vec3(.25, 0, 0)), d.addShape(s, new Z.Vec3(0, .3, 0)), d.addShape(s, new Z.Vec3(0, -.3, 0)), e.addBody(d), g.current.push(d);
                            let p = new E.Kj0(a, _.current);
                            p.castShadow = !0, t.add(p), y.current.push(p), 0 === n ? e.addConstraint(new Z.HingeConstraint(r, d, {
                                pivotA: new Z.Vec3(0, 0, 0),
                                axisA: new Z.Vec3(0, 1, 0),
                                pivotB: new Z.Vec3(0, .255, 0),
                                axisB: new Z.Vec3(0, 1, 0),
                                maxForce: 1e9
                            })) : e.addConstraint(new Z.PointToPointConstraint(o, new Z.Vec3(0, -.255, 0), d, new Z.Vec3(0, .255, 0), 1e9)), o = d
                        }
                        W.current ? function(e, t, n) {
                            let r = m.current,
                                a = d.current,
                                {
                                    object: i,
                                    size: s,
                                    center: o
                                } = n,
                                l = new Z.Body({
                                    mass: 2,
                                    linearDamping: .3,
                                    angularDamping: .3
                                });
                            l.addShape(new Z.Box(new Z.Vec3(.5 * s.x, .35 * s.y, .5 * s.z)), new Z.Vec3(0, -(.15 * s.y), 0));
                            let c = .48 * s.y;
                            l.position.set(I.x, t - .255 - c, I.z), r.addBody(l), v.current = l;
                            let u = new E.ZAu,
                                p = i.clone();
                            p.traverse(e => {
                                e.isMesh && (e.material = _.current, e.castShadow = !0)
                            });
                            let x = new E.ZAu;
                            x.add(p), p.position.sub(o), x.rotation.y = Math.PI / 2, u.add(x), a.add(u), b.current = u, r.addConstraint(new Z.PointToPointConstraint(e, new Z.Vec3(0, -.255, 0), l, new Z.Vec3(0, c, 0), 1e9))
                        }(o, l, W.current) : function(e, t) {
                            let r = m.current,
                                a = d.current,
                                i = new Z.Body({
                                    mass: 2,
                                    linearDamping: .3,
                                    angularDamping: .3
                                });
                            i.position.set(I.x, t - 4.3, I.z), i.addShape(new Z.Box(new Z.Vec3(4, 4, .2))), r.addBody(i), v.current = i;
                            let s = new E.Kj0(new E.XvJ(4, .08, n ? 1 : 16, n ? 5 : 100), _.current);
                            a.add(s), b.current = s, r.addConstraint(new Z.PointToPointConstraint(e, new Z.Vec3(0, -.255, 0), i, new Z.Vec3(0, 4, 0), 1e9))
                        }(o, l)
                    }();
                    let U = () => {
                        f.current = requestAnimationFrame(U);
                        let t = x.current.getDelta();
                        if (D.current < F.current) {
                            D.current += t;
                            let e = Math.min(1, D.current / F.current);
                            z.current.uProgress.value = 1 === e ? 1 : 1 - Math.pow(2, -7 * e)
                        }
                        z.current.uTime.value += t, T.current && H.position.set(0, B.current.y, B.current.z), P.current && P.current.applyForce();
                        let n = a.current ? 2.5 : 0;
                        if (G.step(L, t * n), y.current.forEach((e, t) => {
                                let n = g.current[t];
                                e.position.copy(n.position), e.quaternion.copy(n.quaternion)
                            }), b.current && v.current) {
                            b.current.position.copy(v.current.position), b.current.quaternion.copy(v.current.quaternion);
                            let e = new Z.Vec3;
                            v.current.quaternion.toEuler(e);
                            let t = e.y % (2 * Math.PI);
                            t > Math.PI && (t -= 2 * Math.PI), t < -Math.PI && (t += 2 * Math.PI), v.current.torque.y += -2 * t - .5 * v.current.angularVelocity.y
                        }
                        h.render(e, l)
                    };
                    U(), c(!0);
                    let X = () => {
                            if (!u.current || !p.current || !s.current) return;
                            let e = s.current.clientWidth,
                                t = s.current.clientHeight;
                            u.current.aspect = e / t, u.current.updateProjectionMatrix(), p.current.setSize(e, t)
                        },
                        K = e => {
                            if (A.current && !a.current && (T.current = !0, N.current.x = e.clientX / window.innerWidth * 2 - 1, N.current.y = -(e.clientY / window.innerHeight * 2) + 1, k.current.setFromCamera(N.current, u.current), k.current.ray.intersectPlane(C.current, B.current), !j.current && m.current)) {
                                H.position.set(0, B.current.y, B.current.z);
                                let e = new Z.Body({
                                    mass: 1,
                                    position: new Z.Vec3(0, B.current.y, B.current.z),
                                    linearDamping: .5,
                                    angularDamping: .5
                                });
                                e.addShape(new Z.Sphere(.5)), m.current.addBody(e), j.current = e;
                                let t = new Z.Spring(H, e, {
                                    localAnchorA: new Z.Vec3(0, 0, 0),
                                    localAnchorB: new Z.Vec3(0, 0, 0),
                                    restLength: .5,
                                    stiffness: 15,
                                    damping: .5
                                });
                                P.current = t
                            }
                        },
                        Q = e => {
                            if (!A.current || !a.current) return;
                            let t = e.clientX / window.innerWidth * 2 - 1,
                                n = -(e.clientY / window.innerHeight * 2) + 1;
                            if (N.current.set(t, n), k.current.setFromCamera(N.current, u.current), b.current && v.current) {
                                let e = k.current.intersectObject(b.current, !0);
                                if (e.length > 0) {
                                    let t = e[0].point,
                                        n = k.current.ray.direction,
                                        r = new Z.Vec3(15 * n.x, 15 * n.y, 15 * n.z);
                                    v.current.wakeUp(), v.current.applyImpulse(r, new Z.Vec3(t.x, t.y, t.z))
                                }
                            }
                        };
                    return window.addEventListener("resize", X), h.domElement.addEventListener("mousemove", K), h.domElement.addEventListener("pointerdown", Q), () => {
                        var e;
                        f.current && cancelAnimationFrame(f.current), window.removeEventListener("resize", X), (null === (e = p.current) || void 0 === e ? void 0 : e.domElement) && (p.current.domElement.removeEventListener("mousemove", K), p.current.domElement.removeEventListener("pointerdown", Q)), _.current && _.current.dispose(), d.current && (d.current.traverse(e => {
                            e.isMesh && (e.geometry && e.geometry.dispose(), e.material && (Array.isArray(e.material) ? e.material.forEach(e => e.dispose()) : e.material.dispose()))
                        }), d.current.clear()), p.current && (p.current.dispose(), p.current.forceContextLoss()), s.current && p.current && s.current.contains(p.current.domElement) && s.current.removeChild(p.current.domElement), d.current = null, p.current = null, u.current = null, _.current = null
                    }
                }, []), (0, i.useEffect)(() => {
                    t && (q(t, t), setTimeout(() => {
                        A.current = !0
                    }, 1500))
                }, [t]);
                let q = (e, t) => {
                    var n;
                    let r = t ? null === (n = t.split(".").pop()) || void 0 === n ? void 0 : n.toLowerCase() : "obj",
                        a = "glb" === r || "gltf" === r ? new S.E : new M.L;
                    if (a instanceof S.E) {
                        let e = new V._;
                        e.setDecoderPath("https://www.gstatic.com/draco/versioned/decoders/1.5.6/"), a.setDRACOLoader(e)
                    }
                    a.load(e, t => {
                        let n = t.scene || t,
                            r = !1;
                        if (n.traverse(e => {
                                e.isMesh && (r = !0)
                            }), !r) return;
                        let a = new E.ZzF().setFromObject(n),
                            i = new E.Pa4;
                        if (a.getSize(i), isNaN(i.x) || 1e-4 > i.lengthSq()) return;
                        let s = 8 / i.y;
                        n.scale.set(s, s, s), a.setFromObject(n);
                        let o = new E.Pa4;
                        if (a.getCenter(o), a.getSize(i), W.current = {
                                object: n,
                                size: i,
                                center: o
                            }, D.current = 0, z.current.uProgress.value = 0, m.current && d.current) {
                            let e = m.current,
                                t = d.current;
                            w.current && e.removeBody(w.current), g.current.forEach(t => e.removeBody(t)), y.current.forEach(e => t.remove(e)), v.current && e.removeBody(v.current), b.current && t.remove(b.current), g.current = [], y.current = [];
                            let n = new Z.Body({
                                mass: 0,
                                position: new Z.Vec3(I.x, I.y, I.z)
                            });
                            e.addBody(n), w.current = n;
                            let r = new E.XvJ(.25, .06, 8, 24);
                            r.scale(1, 1.2, 1);
                            let a = new Z.Box(new Z.Vec3(.03, .3, .03)),
                                i = new Z.Box(new Z.Vec3(.25, .03, .03)),
                                s = n,
                                o = I.y;
                            for (let l = 0; l < 9; l++) {
                                let c = l % 2 != 0;
                                o -= .51;
                                let d = new Z.Body({
                                    mass: .15,
                                    position: new Z.Vec3(I.x - 0, o, I.z - 0),
                                    linearDamping: .3,
                                    angularDamping: .3
                                });
                                d.velocity.set(-5, 0, -5);
                                let u = new Z.Quaternion;
                                c || u.setFromAxisAngle(new Z.Vec3(0, 1, 0), Math.PI / 2), d.quaternion.copy(u), d.addShape(a, new Z.Vec3(-.25, 0, 0)), d.addShape(a, new Z.Vec3(.25, 0, 0)), d.addShape(i, new Z.Vec3(0, .3, 0)), d.addShape(i, new Z.Vec3(0, -.3, 0)), e.addBody(d), g.current.push(d);
                                let p = new E.Kj0(r, _.current);
                                p.castShadow = !0, t.add(p), y.current.push(p), 0 === l ? e.addConstraint(new Z.HingeConstraint(n, d, {
                                    pivotA: new Z.Vec3(0, 0, 0),
                                    axisA: new Z.Vec3(0, 1, 0),
                                    pivotB: new Z.Vec3(0, .255, 0),
                                    axisB: new Z.Vec3(0, 1, 0),
                                    maxForce: 1e9
                                })) : e.addConstraint(new Z.PointToPointConstraint(s, new Z.Vec3(0, -.255, 0), d, new Z.Vec3(0, .255, 0), 1e9)), s = d
                            }! function(e, t, n) {
                                let r = m.current,
                                    a = d.current,
                                    {
                                        object: i,
                                        size: s,
                                        center: o
                                    } = n,
                                    l = new Z.Body({
                                        mass: 2,
                                        linearDamping: .3,
                                        angularDamping: .3
                                    });
                                l.addShape(new Z.Box(new Z.Vec3(.5 * s.x, .35 * s.y, .5 * s.z)), new Z.Vec3(0, -(.15 * s.y), 0));
                                let c = .48 * s.y;
                                l.position.set(I.x, t - .255 - c, I.z), r.addBody(l), v.current = l;
                                let u = new E.ZAu,
                                    p = i.clone();
                                p.traverse(e => {
                                    e.isMesh && (e.material = _.current, e.castShadow = !0)
                                });
                                let x = new E.ZAu;
                                x.add(p), p.position.sub(o), x.rotation.y = Math.PI / 2, u.add(x), a.add(u), b.current = u, r.addConstraint(new Z.PointToPointConstraint(e, new Z.Vec3(0, -.255, 0), l, new Z.Vec3(0, c, 0), 1e9))
                            }(s, o, W.current), v.current && v.current.velocity.set(-5, 0, -5)
                        }
                        URL.revokeObjectURL(e)
                    })
                };
                return (0, r.jsx)("div", {
                    style: {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        margin: 0,
                        overflow: "hidden",
                        backgroundColor: "transparent",
                        fontFamily: "'Inter', -apple-system, sans-serif",
                        height: "100%",
                        width: "100%"
                    },
                    children: (0, r.jsx)("div", {
                        ref: s,
                        style: {
                            overflow: "hidden",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100%",
                            width: "100%"
                        }
                    })
                })
            }

            function T() {
                let e = (0, i.useRef)(null),
                    [t, n] = (0, i.useState)(!1),
                    c = (0, i.useRef)(null),
                    d = (0, i.useRef)(null),
                    u = (0, i.useRef)(null),
                    [p, m] = (0, i.useState)(null),
                    x = (0, i.useRef)(""),
                    h = (0, i.useRef)(""),
                    f = (0, i.useRef)(window.innerWidth),
                    w = e => e >= 1280 ? "xl" : e >= 768 ? "md" : e >= 640 ? "sm" : "base",
                    g = e => e < 500 ? "xs" : e < 900 ? "sm" : e > 1250 ? "lg" : "base",
                    y = () => {
                        {
                            let e = window.innerWidth,
                                t = window.innerHeight,
                                n = 1056,
                                r = 594;
                            e >= 1280 ? (n = 2208, r = 1242) : e >= 768 ? (n = 1920, r = 1080) : e >= 640 && (n = 1344, r = 756);
                            let a = 1;
                            t < 500 && (a = .5), t >= 500 && t < 900 && (a = .8), t >= 900 && t < 1400 && (a = 1), t >= 1250 && t < 1500 && (a = 1.3), t >= 1500 && t < 1700 && (a = 1.5), t >= 1700 && t < 1900 && (a = 1.7), t >= 1900 && (a = 1.9);
                            let i = Math.round(n *= a),
                                s = Math.round(r *= a);
                            m(e => e && e.w === i && e.h === s ? e : {
                                w: i,
                                h: s
                            })
                        }
                    },
                    v = () => {
                        if (c.current && d.current) return document.fonts.ready.then(() => {
                            u.current && u.current.revert();
                            let e = new s.C(c.current, {
                                type: "lines"
                            });
                            u.current = e, e.lines.forEach(e => {
                                let t = document.createElement("div");
                                t.style.overflow = "hidden", e.parentNode && (e.parentNode.insertBefore(t, e), t.appendChild(e))
                            }), a.ZP.fromTo(e.lines, {
                                yPercent: 100
                            }, {
                                yPercent: 0,
                                ease: "power4.out",
                                stagger: .09,
                                duration: 1.2,
                                onStart: () => {
                                    a.ZP.set(c.current, {
                                        opacity: 1
                                    })
                                }
                            }), a.ZP.fromTo(d.current, {
                                duration: 1,
                                opacity: 0,
                                y: 20
                            }, {
                                opacity: 1,
                                y: 0,
                                ease: "power3.out"
                            })
                        }), () => {
                            u.current && u.current.revert()
                        }
                    };
                (0, i.useEffect)(() => {
                    x.current = w(window.innerWidth), h.current = g(window.innerHeight), y(), setTimeout(() => {
                        v()
                    }, 2500), setTimeout(() => {
                        n(!0)
                    }, 2e3);
                    let e = () => {
                        y(), window.innerWidth !== f.current && (f.current = window.innerWidth, setTimeout(() => {
                            v()
                        }, 100));
                        let e = w(window.innerWidth);
                        if (e !== x.current) {
                            x.current = e, window.location.reload();
                            return
                        }
                        let t = g(window.innerHeight);
                        t !== h.current && (h.current = t, window.location.reload())
                    };
                    return window.addEventListener("resize", e), () => {
                        window.removeEventListener("resize", e)
                    }
                }, []);
                let b = (0, i.useRef)(null),
                    j = (0, i.useRef)(null);
                (0, o.V)(() => {
                    setTimeout(() => {
                        requestAnimationFrame(() => {
                            let t = a.ZP.matchMedia();
                            t.add("(min-width: 640px)", () => {
                                l.i.create({
                                    trigger: b.current,
                                    start: "top top",
                                    end: "bottom top",
                                    scrub: !0,
                                    animation: a.ZP.fromTo(e.current, {
                                        y: "-55%"
                                    }, {
                                        y: "-60%"
                                    })
                                })
                            }), t.add("(min-width: 1280px)", () => {
                                l.i.create({
                                    trigger: b.current,
                                    start: "top top",
                                    end: "bottom top",
                                    scrub: !0,
                                    animation: a.ZP.fromTo(j.current, {
                                        y: "0px"
                                    }, {
                                        y: "-3%"
                                    })
                                })
                            }), t.add("(max-width: 1279px)", () => {
                                a.ZP.set(j.current, {
                                    y: "-100px"
                                })
                            }), t.add("(max-width: 639px)", () => {
                                a.ZP.set(e.current, {
                                    y: "-67%"
                                })
                            })
                        })
                    }, 100)
                }, []);
                let P = window.innerWidth > 1280 ? .5 : window.innerWidth > 640 ? .75 : 1,
                    N = (0, i.useMemo)(() => (0, r.jsx)(C.Z, {
                        jsonFilePath: "/herogenyo.json",
                        width: "100%",
                        height: "100%",
                        dpi: P
                    }), [P]);
                return (0, r.jsxs)("div", {
                    ref: b,
                    className: "w-screen h-[100dvh] relative overflow-hidden",
                    children: [(0, r.jsx)("div", {
                        className: "absolute w-full h-[100vh] bottom-0 left-0 bg-gradient-to-b from-transparent to-black z-[1]"
                    }), (0, r.jsx)("div", {
                        ref: e,
                        style: p ? {
                            width: p.w,
                            height: p.h
                        } : {},
                        className: "absolute top-1/2 left-1/2 origin-center overflow-hidden -translate-x-1/2  -translate-y-[67%]  sm:translate-y-[-55%] ",
                        children: N
                    }), (0, r.jsxs)("div", {
                        className: "!z-[5] absolute bottom-3 md:bottom-10 lg:bottom-20 left-[10px] md:left-[20px] lg:left-[50px] flex flex-col gap-[20px] w-[calc(100%-20px)] lg:w-[500px] 2xl:w-[633px] ",
                        children: [(0, r.jsx)("p", {
                            ref: d,
                            className: "opacity-0 text-sm sm:text-lg text-midgray font-ppsemibold",
                            children: "Lorisbukvic.graphics"
                        }), (0, r.jsx)("p", {
                            ref: c,
                            className: "opacity-0 [@media(max-width:380px)]:text-[20px] text-h3 md:text-h2 2xl:text-h1 font-intranet text-brightgray leading-[1.3]",
                            children: "Loris Bukvic is a cook turned multimedia designer focusing on web experiences, and stuff that looks good."
                        })]
                    }), (0, r.jsx)("div", {
                        ref: j,
                        className: "z-[10] relative w-full h-full translate-y-[-100px] xl:translate-y-[0px] overflow-hidden",
                        children: t && (0, r.jsx)(B, {
                            modelPath: "/keychain.glb"
                        })
                    })]
                })
            }
            a.ZP.registerPlugin(s.C);
            var A = n(6865),
                z = n(8543);
            a.ZP.registerPlugin(A.Qj);
            let D = ["aughtsspective/thumb.webp", "daydream/thumb.webp", "daydream_web/thumb.webp", "pneuma/thumb.webp", "amca/thumb.webp", "ikon_web/thumb.webp", "loben/thumb.webp", "orith/thumb.webp", "posterfolio/thumb.webp", "36daysoftype/thumb.webp", "dailyui/thumb.webp", "wayer/thumb.webp"];

            function F() {
                let e = (0, i.useRef)(null),
                    t = (0, z.LZ)(),
                    [n, s] = (0, i.useState)(!1);
                return (0, o.V)(() => {
                    t && (t.stop(), document.body.style.userSelect = "none", a.ZP.from("[data-gsap='works-marquee-image']", {
                        y: 100,
                        duration: 1.5,
                        stagger: .03,
                        delay: 2,
                        ease: "back.out(1.5)",
                        onComplete: () => {
                            t.start(), document.body.style.userSelect = ""
                        }
                    }))
                }, [t]), (0, o.V)(() => {
                    let t;
                    let n = 284 * D.length,
                        r = 0,
                        i = 0,
                        s = () => {
                            i *= .92, (r -= 1 + i) <= -n && (r += n), r > 0 && (r -= n), a.ZP.set(e.current, {
                                x: r
                            })
                        },
                        o = !1;
                    t = window.setTimeout(() => {
                        a.ZP.ticker.add(s), o = !0
                    }, 2e3);
                    let l = A.Qj.create({
                        target: window,
                        type: "wheel,touch",
                        onChange: e => {
                            o && (i += .008 * Math.abs(e.deltaY))
                        }
                    });
                    return () => {
                        clearTimeout(t), o && a.ZP.ticker.remove(s), l.kill()
                    }
                }, {
                    scope: e
                }), (0, r.jsx)("div", {
                    className: "relative h-full w-full mt-[50px] lg:-mt-[50px] z-[50] overflow-hidden group",
                    children: (0, r.jsxs)(b.r, {
                        href: "/works",
                        className: "block w-full h-full",
                        onMouseEnter: () => s(!0),
                        onMouseLeave: () => s(!1),
                        children: [(0, r.jsxs)("div", {
                            className: "flex lg:hidden justify-between mb-[40px] md:mb-[50px] px-[10px] sm:px-[20px]",
                            children: [(0, r.jsx)("p", {
                                className: "text-md md:text-h3 text-midgray font-intranet",
                                children: "WORKS"
                            }), (0, r.jsx)("div", {
                                className: "text-md md:text-lg text-brightgray font-ppsemibold hover:opacity-50 duration-150 transition-opacity",
                                children: "Go to Works"
                            })]
                        }), (0, r.jsxs)("div", {
                            className: "relative h-full w-full md:pt-[20px]",
                            style: {
                                WebkitMaskImage: "linear-gradient(to right, transparent, black 10%,black 90%, transparent)",
                                maskImage: "linear-gradient(to right, transparent, black 10%,black 90%, transparent)"
                            },
                            children: [(0, r.jsx)("div", {
                                className: "lg:block hidden absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[500px] h-full blur-[15px] scale-125 transition-opacity duration-300",
                                style: {
                                    background: "linear-gradient(to right, transparent 0%, #000000a9 20%, #000000e1 40%, #000000e1 60%, #000000a9 80%, transparent 100%)",
                                    opacity: n ? .8 : 1
                                }
                            }), (0, r.jsx)("div", {
                                className: "lg:block hidden absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10",
                                children: (0, r.jsxs)("div", {
                                    className: "translate-y-[15px] flex flex-col gap-[16px] items-center justify-center w-screen",
                                    children: [(0, r.jsx)(j.Z, {
                                        isExternalHover: n
                                    }), (0, r.jsx)("p", {
                                        className: "font-intranet text-md transition-colors duration-300 ".concat(n ? "text-brightgray" : "text-midgray"),
                                        children: "WORKS"
                                    })]
                                })
                            }), (0, r.jsxs)("div", {
                                ref: e,
                                "data-gsap": "works-marquee",
                                className: "relative w-full h-full flex gap-[4px] will-change-transform",
                                children: [D.map((e, t) => (0, r.jsx)("div", {
                                    "data-gsap": "works-marquee-image",
                                    className: "max-w-[280px] min-w-[280px] min-h-full transition-opacity duration-300 group-hover:opacity-60",
                                    children: (0, r.jsx)("img", {
                                        alt: "project image",
                                        src: "/assets/project_images/".concat(e),
                                        className: "w-full h-full object-cover"
                                    })
                                }, "set1-".concat(t))), D.map((e, t) => (0, r.jsx)("div", {
                                    "data-gsap": "works-marquee-image",
                                    className: "max-w-[280px] min-w-[280px] min-h-full transition-opacity duration-300 group-hover:opacity-60",
                                    children: (0, r.jsx)("img", {
                                        alt: "project image",
                                        src: "/assets/project_images/".concat(e),
                                        className: "w-full h-full object-cover"
                                    })
                                }, "set2-".concat(t))), D.map((e, t) => (0, r.jsx)("div", {
                                    className: "max-w-[280px] min-w-[280px] min-h-full transition-opacity duration-300 group-hover:opacity-60",
                                    children: (0, r.jsx)("img", {
                                        alt: "project image",
                                        src: "/assets/project_images/".concat(e),
                                        className: "w-full h-full object-cover"
                                    })
                                }, "set3-".concat(t)))]
                            })]
                        })]
                    })
                })
            }

            function _() {
                let [e, t] = (0, i.useState)(0);
                return (0, i.useEffect)(() => {
                    setTimeout(() => {
                        t(e + 1)
                    }, 1500)
                }, []), (0, r.jsxs)("main", {
                    className: "w-full h-full",
                    children: [(0, r.jsx)(T, {}), (0, r.jsx)(F, {}), (0, r.jsxs)("div", {
                        className: "w-full h-full",
                        children: [(0, r.jsx)(m, {}), (0, r.jsx)(v, {}), (0, r.jsx)(f, {}), (0, r.jsx)(k, {})]
                    }, e)]
                })
            }
        },
        5143: function(e, t, n) {
            "use strict";
            n.d(t, {
                o: function() {
                    return r
                }
            });
            let r = (0, n(3011).U)(e => ({
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
        2169: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return a
                }
            });
            var r = n(7437);

            function a(e) {
                let {
                    onClick: t,
                    disabled: n,
                    text: a,
                    type: i = "button"
                } = e;
                return (0, r.jsx)("button", {
                    onClick: t,
                    disabled: n,
                    type: i,
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
                                children: a
                            }), (0, r.jsx)("span", {
                                className: "relative z-10",
                                children: a
                            })]
                        })]
                    })
                })
            }
        },
        4204: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return s
                }
            });
            var r = n(7437),
                a = n(2265);
            let i = ["aughtsspective/thumb.webp", "daydream/thumb.webp", "daydream_web/thumb.webp", "pneuma/thumb.webp", "amca/thumb.webp", "ikon_web/thumb.webp", "loben/thumb.webp", "orith/thumb.webp", "posterfolio/thumb.webp", "36daysoftype/thumb.webp", "dailyui/thumb.webp", "wayer/thumb.webp"];

            function s(e) {
                let {
                    isExternalHover: t
                } = e, n = (0, a.useMemo)(() => [...i].sort(() => Math.random() - .5).slice(0, 2), []);
                return (0, r.jsxs)("div", {
                    "data-gsap": "folder-button",
                    className: "group relative w-[120px] h-[90px] [perspective:500px] overflow-visible cursor-pointer",
                    children: [(0, r.jsx)("img", {
                        alt: "backplate of folder",
                        src: "/assets/folder/folder_back.png",
                        className: "w-[120px] h-[90px] object-contain group-hover:translate-y-[2px] transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ".concat(t ? "![transform:translateY(2px)]" : "")
                    }), (0, r.jsx)("img", {
                        alt: "thumbnail of a project",
                        src: "/assets/project_images/".concat(n[0]),
                        className: "absolute top-[-50px] left-[40px] w-full h-full scale-[0.5] rotate-[-70deg] object-cover origin-bottom transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] border border-midgray rounded-[10px] group-hover:top-[-55px] ".concat(t ? "![top:-55px]" : "")
                    }), (0, r.jsx)("img", {
                        alt: "thumbnail of a project",
                        src: "/assets/project_images/".concat(n[1]),
                        className: "absolute top-[-50px] left-[-40px] w-full h-full scale-[0.55] rotate-[70deg] object-cover origin-bottom transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] border border-midgray rounded-[10px] group-hover:top-[-65px] ".concat(t ? "![top:-65px]" : "")
                    }), (0, r.jsx)("img", {
                        alt: "frontplate of folder",
                        src: "/assets/folder/folder_front.png",
                        className: "absolute top-2 left-1/2 -translate-x-1/2 min-w-[125px] min-h-full object-contain origin-bottom transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:[transform:translateX(-50%)_rotateX(-30deg)] ".concat(t ? "![transform:translateX(-50%)_rotateX(-30deg)]" : "")
                    })]
                })
            }
        }
    },
    function(e) {
        e.O(0, [870, 922, 689, 620, 47, 779, 887, 850, 971, 117, 744], function() {
            return e(e.s = 8350)
        }), _N_E = e.O()
    }
]);