(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [144], {
        6224: function(e, t, n) {
            "use strict";
            let r, a, i, l;
            n.d(t, {
                L: function() {
                    return e3
                }
            });
            var o, s, u = n(2265),
                c = n(2079);
            let f = new WeakMap;
            class d extends c.aNw {
                constructor(e) {
                    super(e), this.decoderPath = "", this.decoderConfig = {}, this.decoderBinary = null, this.decoderPending = null, this.workerLimit = 4, this.workerPool = [], this.workerNextTaskID = 1, this.workerSourceURL = "", this.defaultAttributeIDs = {
                        position: "POSITION",
                        normal: "NORMAL",
                        color: "COLOR",
                        uv: "TEX_COORD"
                    }, this.defaultAttributeTypes = {
                        position: "Float32Array",
                        normal: "Float32Array",
                        color: "Float32Array",
                        uv: "Float32Array"
                    }
                }
                setDecoderPath(e) {
                    return this.decoderPath = e, this
                }
                setDecoderConfig(e) {
                    return this.decoderConfig = e, this
                }
                setWorkerLimit(e) {
                    return this.workerLimit = e, this
                }
                load(e, t, n, r) {
                    let a = new c.hH6(this.manager);
                    a.setPath(this.path), a.setResponseType("arraybuffer"), a.setRequestHeader(this.requestHeader), a.setWithCredentials(this.withCredentials), a.load(e, e => {
                        let n = {
                            attributeIDs: this.defaultAttributeIDs,
                            attributeTypes: this.defaultAttributeTypes,
                            useUniqueIDs: !1
                        };
                        this.decodeGeometry(e, n).then(t).catch(r)
                    }, n, r)
                }
                decodeDracoFile(e, t, n, r) {
                    let a = {
                        attributeIDs: n || this.defaultAttributeIDs,
                        attributeTypes: r || this.defaultAttributeTypes,
                        useUniqueIDs: !!n
                    };
                    this.decodeGeometry(e, a).then(t)
                }
                decodeGeometry(e, t) {
                    let n;
                    for (let e in t.attributeTypes) {
                        let n = t.attributeTypes[e];
                        void 0 !== n.BYTES_PER_ELEMENT && (t.attributeTypes[e] = n.name)
                    }
                    let r = JSON.stringify(t);
                    if (f.has(e)) {
                        let t = f.get(e);
                        if (t.key === r) return t.promise;
                        if (0 === e.byteLength) throw Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")
                    }
                    let a = this.workerNextTaskID++,
                        i = e.byteLength,
                        l = this._getWorker(a, i).then(r => (n = r, new Promise((r, i) => {
                            n._callbacks[a] = {
                                resolve: r,
                                reject: i
                            }, n.postMessage({
                                type: "decode",
                                id: a,
                                taskConfig: t,
                                buffer: e
                            }, [e])
                        }))).then(e => this._createGeometry(e.geometry));
                    return l.catch(() => !0).then(() => {
                        n && a && this._releaseTask(n, a)
                    }), f.set(e, {
                        key: r,
                        promise: l
                    }), l
                }
                _createGeometry(e) {
                    let t = new c.u9r;
                    e.index && t.setIndex(new c.TlE(e.index.array, 1));
                    for (let n = 0; n < e.attributes.length; n++) {
                        let r = e.attributes[n],
                            a = r.name,
                            i = r.array,
                            l = r.itemSize;
                        t.setAttribute(a, new c.TlE(i, l))
                    }
                    return t
                }
                _loadLibrary(e, t) {
                    let n = new c.hH6(this.manager);
                    return n.setPath(this.decoderPath), n.setResponseType(t), n.setWithCredentials(this.withCredentials), new Promise((t, r) => {
                        n.load(e, t, void 0, r)
                    })
                }
                preload() {
                    return this._initDecoder(), this
                }
                _initDecoder() {
                    if (this.decoderPending) return this.decoderPending;
                    let e = "object" != typeof WebAssembly || "js" === this.decoderConfig.type,
                        t = [];
                    return e ? t.push(this._loadLibrary("draco_decoder.js", "text")) : (t.push(this._loadLibrary("draco_wasm_wrapper.js", "text")), t.push(this._loadLibrary("draco_decoder.wasm", "arraybuffer"))), this.decoderPending = Promise.all(t).then(t => {
                        let n = t[0];
                        e || (this.decoderConfig.wasmBinary = t[1]);
                        let r = A.toString(),
                            a = ["/* draco decoder */", n, "", "/* worker */", r.substring(r.indexOf("{") + 1, r.lastIndexOf("}"))].join("\n");
                        this.workerSourceURL = URL.createObjectURL(new Blob([a]))
                    }), this.decoderPending
                }
                _getWorker(e, t) {
                    return this._initDecoder().then(() => {
                        if (this.workerPool.length < this.workerLimit) {
                            let e = new Worker(this.workerSourceURL);
                            e._callbacks = {}, e._taskCosts = {}, e._taskLoad = 0, e.postMessage({
                                type: "init",
                                decoderConfig: this.decoderConfig
                            }), e.onmessage = function(t) {
                                let n = t.data;
                                switch (n.type) {
                                    case "decode":
                                        e._callbacks[n.id].resolve(n);
                                        break;
                                    case "error":
                                        e._callbacks[n.id].reject(n);
                                        break;
                                    default:
                                        console.error('THREE.DRACOLoader: Unexpected message, "' + n.type + '"')
                                }
                            }, this.workerPool.push(e)
                        } else this.workerPool.sort(function(e, t) {
                            return e._taskLoad > t._taskLoad ? -1 : 1
                        });
                        let n = this.workerPool[this.workerPool.length - 1];
                        return n._taskCosts[e] = t, n._taskLoad += t, n
                    })
                }
                _releaseTask(e, t) {
                    e._taskLoad -= e._taskCosts[t], delete e._callbacks[t], delete e._taskCosts[t]
                }
                debug() {
                    console.log("Task load: ", this.workerPool.map(e => e._taskLoad))
                }
                dispose() {
                    for (let e = 0; e < this.workerPool.length; ++e) this.workerPool[e].terminate();
                    return this.workerPool.length = 0, this
                }
            }

            function A() {
                let e, t;
                onmessage = function(n) {
                    let r = n.data;
                    switch (r.type) {
                        case "init":
                            e = r.decoderConfig, t = new Promise(function(t) {
                                e.onModuleLoaded = function(e) {
                                    t({
                                        draco: e
                                    })
                                }, DracoDecoderModule(e)
                            });
                            break;
                        case "decode":
                            let a = r.buffer,
                                i = r.taskConfig;
                            t.then(e => {
                                let t = e.draco,
                                    n = new t.Decoder,
                                    l = new t.DecoderBuffer;
                                l.Init(new Int8Array(a), a.byteLength);
                                try {
                                    let e = function(e, t, n, r) {
                                            let a, i;
                                            let l = r.attributeIDs,
                                                o = r.attributeTypes,
                                                s = t.GetEncodedGeometryType(n);
                                            if (s === e.TRIANGULAR_MESH) a = new e.Mesh, i = t.DecodeBufferToMesh(n, a);
                                            else if (s === e.POINT_CLOUD) a = new e.PointCloud, i = t.DecodeBufferToPointCloud(n, a);
                                            else throw Error("THREE.DRACOLoader: Unexpected geometry type.");
                                            if (!i.ok() || 0 === a.ptr) throw Error("THREE.DRACOLoader: Decoding failed: " + i.error_msg());
                                            let u = {
                                                index: null,
                                                attributes: []
                                            };
                                            for (let n in l) {
                                                let i, s;
                                                let c = self[o[n]];
                                                if (r.useUniqueIDs) s = l[n], i = t.GetAttributeByUniqueId(a, s);
                                                else {
                                                    if (-1 === (s = t.GetAttributeId(a, e[l[n]]))) continue;
                                                    i = t.GetAttribute(a, s)
                                                }
                                                u.attributes.push(function(e, t, n, r, a, i) {
                                                    let l = i.num_components(),
                                                        o = n.num_points() * l,
                                                        s = o * a.BYTES_PER_ELEMENT,
                                                        u = function(e, t) {
                                                            switch (t) {
                                                                case Float32Array:
                                                                    return e.DT_FLOAT32;
                                                                case Int8Array:
                                                                    return e.DT_INT8;
                                                                case Int16Array:
                                                                    return e.DT_INT16;
                                                                case Int32Array:
                                                                    return e.DT_INT32;
                                                                case Uint8Array:
                                                                    return e.DT_UINT8;
                                                                case Uint16Array:
                                                                    return e.DT_UINT16;
                                                                case Uint32Array:
                                                                    return e.DT_UINT32
                                                            }
                                                        }(e, a),
                                                        c = e._malloc(s);
                                                    t.GetAttributeDataArrayForAllPoints(n, i, u, s, c);
                                                    let f = new a(e.HEAPF32.buffer, c, o).slice();
                                                    return e._free(c), {
                                                        name: r,
                                                        array: f,
                                                        itemSize: l
                                                    }
                                                }(e, t, a, n, c, i))
                                            }
                                            return s === e.TRIANGULAR_MESH && (u.index = function(e, t, n) {
                                                let r = 3 * n.num_faces(),
                                                    a = 4 * r,
                                                    i = e._malloc(a);
                                                t.GetTrianglesUInt32Array(n, a, i);
                                                let l = new Uint32Array(e.HEAPF32.buffer, i, r).slice();
                                                return e._free(i), {
                                                    array: l,
                                                    itemSize: 1
                                                }
                                            }(e, t, a)), e.destroy(a), u
                                        }(t, n, l, i),
                                        a = e.attributes.map(e => e.array.buffer);
                                    e.index && a.push(e.index.array.buffer), self.postMessage({
                                        type: "decode",
                                        id: r.id,
                                        geometry: e
                                    }, a)
                                } catch (e) {
                                    console.error(e), self.postMessage({
                                        type: "error",
                                        id: r.id,
                                        error: e.message
                                    })
                                } finally {
                                    t.destroy(l), t.destroy(n)
                                }
                            })
                    }
                }
            }
            let h = () => {
                let e;
                if (r) return r;
                let t = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 3, 2, 0, 0, 5, 3, 1, 0, 1, 12, 1, 0, 10, 22, 2, 12, 0, 65, 0, 65, 0, 65, 0, 252, 10, 0, 0, 11, 7, 0, 65, 0, 253, 15, 26, 11]),
                    n = new Uint8Array([32, 0, 65, 253, 3, 1, 2, 34, 4, 106, 6, 5, 11, 8, 7, 20, 13, 33, 12, 16, 128, 9, 116, 64, 19, 113, 127, 15, 10, 21, 22, 14, 255, 66, 24, 54, 136, 107, 18, 23, 192, 26, 114, 118, 132, 17, 77, 101, 130, 144, 27, 87, 131, 44, 45, 74, 156, 154, 70, 167]);
                if ("object" != typeof WebAssembly) return {
                    supported: !1
                };
                let a = "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";
                WebAssembly.validate(t) && (a = "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");
                let i = WebAssembly.instantiate(function(e) {
                    let t = new Uint8Array(e.length);
                    for (let n = 0; n < e.length; ++n) {
                        let r = e.charCodeAt(n);
                        t[n] = r > 96 ? r - 71 : r > 64 ? r - 65 : r > 47 ? r + 4 : r > 46 ? 63 : 62
                    }
                    let r = 0;
                    for (let a = 0; a < e.length; ++a) t[r++] = t[a] < 60 ? n[t[a]] : (t[a] - 60) * 64 + t[++a];
                    return t.buffer.slice(0, r)
                }(a), {}).then(t => {
                    (e = t.instance).exports.__wasm_call_ctors()
                });

                function l(t, n, r, a, i, l) {
                    let o = e.exports.sbrk,
                        s = r + 3 & -4,
                        u = o(s * a),
                        c = o(i.length),
                        f = new Uint8Array(e.exports.memory.buffer);
                    f.set(i, c);
                    let d = t(u, r, a, c, i.length);
                    if (0 === d && l && l(u, s, a), n.set(f.subarray(u, u + r * a)), o(u - o(0)), 0 !== d) throw Error(`Malformed buffer data: ${d}`)
                }
                let o = {
                        0: "",
                        1: "meshopt_decodeFilterOct",
                        2: "meshopt_decodeFilterQuat",
                        3: "meshopt_decodeFilterExp",
                        NONE: "",
                        OCTAHEDRAL: "meshopt_decodeFilterOct",
                        QUATERNION: "meshopt_decodeFilterQuat",
                        EXPONENTIAL: "meshopt_decodeFilterExp"
                    },
                    s = {
                        0: "meshopt_decodeVertexBuffer",
                        1: "meshopt_decodeIndexBuffer",
                        2: "meshopt_decodeIndexSequence",
                        ATTRIBUTES: "meshopt_decodeVertexBuffer",
                        TRIANGLES: "meshopt_decodeIndexBuffer",
                        INDICES: "meshopt_decodeIndexSequence"
                    };
                return r = {
                    ready: i,
                    supported: !0,
                    decodeVertexBuffer(t, n, r, a, i) {
                        l(e.exports.meshopt_decodeVertexBuffer, t, n, r, a, e.exports[o[i]])
                    },
                    decodeIndexBuffer(t, n, r, a) {
                        l(e.exports.meshopt_decodeIndexBuffer, t, n, r, a)
                    },
                    decodeIndexSequence(t, n, r, a) {
                        l(e.exports.meshopt_decodeIndexSequence, t, n, r, a)
                    },
                    decodeGltfBuffer(t, n, r, a, i, u) {
                        l(e.exports[s[i]], t, n, r, a, e.exports[o[u]])
                    }
                }
            };

            function p(e, t) {
                if (t === c.WwZ) return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."), e;
                if (t !== c.z$h && t !== c.UlW) return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:", t), e; {
                    let n = e.getIndex();
                    if (null === n) {
                        let t = [],
                            r = e.getAttribute("position");
                        if (void 0 === r) return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), e;
                        for (let e = 0; e < r.count; e++) t.push(e);
                        e.setIndex(t), n = e.getIndex()
                    }
                    let r = n.count - 2,
                        a = [];
                    if (n) {
                        if (t === c.z$h)
                            for (let e = 1; e <= r; e++) a.push(n.getX(0)), a.push(n.getX(e)), a.push(n.getX(e + 1));
                        else
                            for (let e = 0; e < r; e++) e % 2 == 0 ? (a.push(n.getX(e)), a.push(n.getX(e + 1)), a.push(n.getX(e + 2))) : (a.push(n.getX(e + 2)), a.push(n.getX(e + 1)), a.push(n.getX(e)))
                    }
                    a.length / 3 !== r && console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
                    let i = e.clone();
                    return i.setIndex(a), i.clearGroups(), i
                }
            }
            let B = parseInt(c.UZH.replace(/\D+/g, ""));

            function m(e) {
                if ("undefined" != typeof TextDecoder) return new TextDecoder().decode(e);
                let t = "";
                for (let n = 0, r = e.length; n < r; n++) t += String.fromCharCode(e[n]);
                try {
                    return decodeURIComponent(escape(t))
                } catch (e) {
                    return t
                }
            }
            let g = "srgb",
                C = "srgb-linear";
            class b extends c.aNw {
                constructor(e) {
                    super(e), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(e) {
                        return new M(e)
                    }), this.register(function(e) {
                        return new R(e)
                    }), this.register(function(e) {
                        return new P(e)
                    }), this.register(function(e) {
                        return new k(e)
                    }), this.register(function(e) {
                        return new J(e)
                    }), this.register(function(e) {
                        return new G(e)
                    }), this.register(function(e) {
                        return new D(e)
                    }), this.register(function(e) {
                        return new T(e)
                    }), this.register(function(e) {
                        return new x(e)
                    }), this.register(function(e) {
                        return new I(e)
                    }), this.register(function(e) {
                        return new H(e)
                    }), this.register(function(e) {
                        return new S(e)
                    }), this.register(function(e) {
                        return new _(e)
                    }), this.register(function(e) {
                        return new w(e)
                    }), this.register(function(e) {
                        return new E(e)
                    }), this.register(function(e) {
                        return new L(e)
                    }), this.register(function(e) {
                        return new N(e)
                    })
                }
                load(e, t, n, r) {
                    let a;
                    let i = this;
                    if ("" !== this.resourcePath) a = this.resourcePath;
                    else if ("" !== this.path) {
                        let t = c.Zp0.extractUrlBase(e);
                        a = c.Zp0.resolveURL(t, this.path)
                    } else a = c.Zp0.extractUrlBase(e);
                    this.manager.itemStart(e);
                    let l = function(t) {
                            r ? r(t) : console.error(t), i.manager.itemError(e), i.manager.itemEnd(e)
                        },
                        o = new c.hH6(this.manager);
                    o.setPath(this.path), o.setResponseType("arraybuffer"), o.setRequestHeader(this.requestHeader), o.setWithCredentials(this.withCredentials), o.load(e, function(n) {
                        try {
                            i.parse(n, a, function(n) {
                                t(n), i.manager.itemEnd(e)
                            }, l)
                        } catch (e) {
                            l(e)
                        }
                    }, n, l)
                }
                setDRACOLoader(e) {
                    return this.dracoLoader = e, this
                }
                setDDSLoader() {
                    throw Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')
                }
                setKTX2Loader(e) {
                    return this.ktx2Loader = e, this
                }
                setMeshoptDecoder(e) {
                    return this.meshoptDecoder = e, this
                }
                register(e) {
                    return -1 === this.pluginCallbacks.indexOf(e) && this.pluginCallbacks.push(e), this
                }
                unregister(e) {
                    return -1 !== this.pluginCallbacks.indexOf(e) && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1), this
                }
                parse(e, t, n, r) {
                    let a;
                    let i = {},
                        l = {};
                    if ("string" == typeof e) a = JSON.parse(e);
                    else if (e instanceof ArrayBuffer) {
                        if (m(new Uint8Array(e.slice(0, 4))) === U) {
                            try {
                                i[y.KHR_BINARY_GLTF] = new K(e)
                            } catch (e) {
                                r && r(e);
                                return
                            }
                            a = JSON.parse(i[y.KHR_BINARY_GLTF].content)
                        } else a = JSON.parse(m(new Uint8Array(e)))
                    } else a = e;
                    if (void 0 === a.asset || a.asset.version[0] < 2) {
                        r && r(Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
                        return
                    }
                    let o = new ec(a, {
                        path: t || this.resourcePath || "",
                        crossOrigin: this.crossOrigin,
                        requestHeader: this.requestHeader,
                        manager: this.manager,
                        ktx2Loader: this.ktx2Loader,
                        meshoptDecoder: this.meshoptDecoder
                    });
                    o.fileLoader.setRequestHeader(this.requestHeader);
                    for (let e = 0; e < this.pluginCallbacks.length; e++) {
                        let t = this.pluginCallbacks[e](o);
                        t.name || console.error("THREE.GLTFLoader: Invalid plugin found: missing name"), l[t.name] = t, i[t.name] = !0
                    }
                    if (a.extensionsUsed)
                        for (let e = 0; e < a.extensionsUsed.length; ++e) {
                            let t = a.extensionsUsed[e],
                                n = a.extensionsRequired || [];
                            switch (t) {
                                case y.KHR_MATERIALS_UNLIT:
                                    i[t] = new F;
                                    break;
                                case y.KHR_DRACO_MESH_COMPRESSION:
                                    i[t] = new Q(a, this.dracoLoader);
                                    break;
                                case y.KHR_TEXTURE_TRANSFORM:
                                    i[t] = new j;
                                    break;
                                case y.KHR_MESH_QUANTIZATION:
                                    i[t] = new X;
                                    break;
                                default:
                                    n.indexOf(t) >= 0 && void 0 === l[t] && console.warn('THREE.GLTFLoader: Unknown extension "' + t + '".')
                            }
                        }
                    o.setExtensions(i), o.setPlugins(l), o.parse(n, r)
                }
                parseAsync(e, t) {
                    let n = this;
                    return new Promise(function(r, a) {
                        n.parse(e, t, r, a)
                    })
                }
            }

            function v() {
                let e = {};
                return {
                    get: function(t) {
                        return e[t]
                    },
                    add: function(t, n) {
                        e[t] = n
                    },
                    remove: function(t) {
                        delete e[t]
                    },
                    removeAll: function() {
                        e = {}
                    }
                }
            }
            let y = {
                KHR_BINARY_GLTF: "KHR_binary_glTF",
                KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
                KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
                KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
                KHR_MATERIALS_DISPERSION: "KHR_materials_dispersion",
                KHR_MATERIALS_IOR: "KHR_materials_ior",
                KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
                KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
                KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
                KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
                KHR_MATERIALS_ANISOTROPY: "KHR_materials_anisotropy",
                KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
                KHR_MATERIALS_VOLUME: "KHR_materials_volume",
                KHR_TEXTURE_BASISU: "KHR_texture_basisu",
                KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
                KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
                KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
                EXT_MATERIALS_BUMP: "EXT_materials_bump",
                EXT_TEXTURE_WEBP: "EXT_texture_webp",
                EXT_TEXTURE_AVIF: "EXT_texture_avif",
                EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression",
                EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing"
            };
            class E {
                constructor(e) {
                    this.parser = e, this.name = y.KHR_LIGHTS_PUNCTUAL, this.cache = {
                        refs: {},
                        uses: {}
                    }
                }
                _markDefs() {
                    let e = this.parser,
                        t = this.parser.json.nodes || [];
                    for (let n = 0, r = t.length; n < r; n++) {
                        let r = t[n];
                        r.extensions && r.extensions[this.name] && void 0 !== r.extensions[this.name].light && e._addNodeRef(this.cache, r.extensions[this.name].light)
                    }
                }
                _loadLight(e) {
                    let t;
                    let n = this.parser,
                        r = "light:" + e,
                        a = n.cache.get(r);
                    if (a) return a;
                    let i = n.json,
                        l = ((i.extensions && i.extensions[this.name] || {}).lights || [])[e],
                        o = new c.Ilk(16777215);
                    void 0 !== l.color && o.setRGB(l.color[0], l.color[1], l.color[2], C);
                    let s = void 0 !== l.range ? l.range : 0;
                    switch (l.type) {
                        case "directional":
                            (t = new c.Ox3(o)).target.position.set(0, 0, -1), t.add(t.target);
                            break;
                        case "point":
                            (t = new c.cek(o)).distance = s;
                            break;
                        case "spot":
                            (t = new c.PMe(o)).distance = s, l.spot = l.spot || {}, l.spot.innerConeAngle = void 0 !== l.spot.innerConeAngle ? l.spot.innerConeAngle : 0, l.spot.outerConeAngle = void 0 !== l.spot.outerConeAngle ? l.spot.outerConeAngle : Math.PI / 4, t.angle = l.spot.outerConeAngle, t.penumbra = 1 - l.spot.innerConeAngle / l.spot.outerConeAngle, t.target.position.set(0, 0, -1), t.add(t.target);
                            break;
                        default:
                            throw Error("THREE.GLTFLoader: Unexpected light type: " + l.type)
                    }
                    return t.position.set(0, 0, 0), t.decay = 2, el(t, l), void 0 !== l.intensity && (t.intensity = l.intensity), t.name = n.createUniqueName(l.name || "light_" + e), a = Promise.resolve(t), n.cache.add(r, a), a
                }
                getDependency(e, t) {
                    if ("light" === e) return this._loadLight(t)
                }
                createNodeAttachment(e) {
                    let t = this,
                        n = this.parser,
                        r = n.json.nodes[e],
                        a = (r.extensions && r.extensions[this.name] || {}).light;
                    return void 0 === a ? null : this._loadLight(a).then(function(e) {
                        return n._getNodeRef(t.cache, a, e)
                    })
                }
            }
            class F {
                constructor() {
                    this.name = y.KHR_MATERIALS_UNLIT
                }
                getMaterialType() {
                    return c.vBJ
                }
                extendParams(e, t, n) {
                    let r = [];
                    e.color = new c.Ilk(1, 1, 1), e.opacity = 1;
                    let a = t.pbrMetallicRoughness;
                    if (a) {
                        if (Array.isArray(a.baseColorFactor)) {
                            let t = a.baseColorFactor;
                            e.color.setRGB(t[0], t[1], t[2], C), e.opacity = t[3]
                        }
                        void 0 !== a.baseColorTexture && r.push(n.assignTexture(e, "map", a.baseColorTexture, g))
                    }
                    return Promise.all(r)
                }
            }
            class I {
                constructor(e) {
                    this.parser = e, this.name = y.KHR_MATERIALS_EMISSIVE_STRENGTH
                }
                extendMaterialParams(e, t) {
                    let n = this.parser.json.materials[e];
                    if (!n.extensions || !n.extensions[this.name]) return Promise.resolve();
                    let r = n.extensions[this.name].emissiveStrength;
                    return void 0 !== r && (t.emissiveIntensity = r), Promise.resolve()
                }
            }
            class M {
                constructor(e) {
                    this.parser = e, this.name = y.KHR_MATERIALS_CLEARCOAT
                }
                getMaterialType(e) {
                    let t = this.parser.json.materials[e];
                    return t.extensions && t.extensions[this.name] ? c.EJi : null
                }
                extendMaterialParams(e, t) {
                    let n = this.parser,
                        r = n.json.materials[e];
                    if (!r.extensions || !r.extensions[this.name]) return Promise.resolve();
                    let a = [],
                        i = r.extensions[this.name];
                    if (void 0 !== i.clearcoatFactor && (t.clearcoat = i.clearcoatFactor), void 0 !== i.clearcoatTexture && a.push(n.assignTexture(t, "clearcoatMap", i.clearcoatTexture)), void 0 !== i.clearcoatRoughnessFactor && (t.clearcoatRoughness = i.clearcoatRoughnessFactor), void 0 !== i.clearcoatRoughnessTexture && a.push(n.assignTexture(t, "clearcoatRoughnessMap", i.clearcoatRoughnessTexture)), void 0 !== i.clearcoatNormalTexture && (a.push(n.assignTexture(t, "clearcoatNormalMap", i.clearcoatNormalTexture)), void 0 !== i.clearcoatNormalTexture.scale)) {
                        let e = i.clearcoatNormalTexture.scale;
                        t.clearcoatNormalScale = new c.FM8(e, e)
                    }
                    return Promise.all(a)
                }
            }
            class R {
                constructor(e) {
                    this.parser = e, this.name = y.KHR_MATERIALS_DISPERSION
                }
                getMaterialType(e) {
                    let t = this.parser.json.materials[e];
                    return t.extensions && t.extensions[this.name] ? c.EJi : null
                }
                extendMaterialParams(e, t) {
                    let n = this.parser.json.materials[e];
                    if (!n.extensions || !n.extensions[this.name]) return Promise.resolve();
                    let r = n.extensions[this.name];
                    return t.dispersion = void 0 !== r.dispersion ? r.dispersion : 0, Promise.resolve()
                }
            }
            class S {
                constructor(e) {
                    this.parser = e, this.name = y.KHR_MATERIALS_IRIDESCENCE
                }
                getMaterialType(e) {
                    let t = this.parser.json.materials[e];
                    return t.extensions && t.extensions[this.name] ? c.EJi : null
                }
                extendMaterialParams(e, t) {
                    let n = this.parser,
                        r = n.json.materials[e];
                    if (!r.extensions || !r.extensions[this.name]) return Promise.resolve();
                    let a = [],
                        i = r.extensions[this.name];
                    return void 0 !== i.iridescenceFactor && (t.iridescence = i.iridescenceFactor), void 0 !== i.iridescenceTexture && a.push(n.assignTexture(t, "iridescenceMap", i.iridescenceTexture)), void 0 !== i.iridescenceIor && (t.iridescenceIOR = i.iridescenceIor), void 0 === t.iridescenceThicknessRange && (t.iridescenceThicknessRange = [100, 400]), void 0 !== i.iridescenceThicknessMinimum && (t.iridescenceThicknessRange[0] = i.iridescenceThicknessMinimum), void 0 !== i.iridescenceThicknessMaximum && (t.iridescenceThicknessRange[1] = i.iridescenceThicknessMaximum), void 0 !== i.iridescenceThicknessTexture && a.push(n.assignTexture(t, "iridescenceThicknessMap", i.iridescenceThicknessTexture)), Promise.all(a)
                }
            }
            class G {
                constructor(e) {
                    this.parser = e, this.name = y.KHR_MATERIALS_SHEEN
                }
                getMaterialType(e) {
                    let t = this.parser.json.materials[e];
                    return t.extensions && t.extensions[this.name] ? c.EJi : null
                }
                extendMaterialParams(e, t) {
                    let n = this.parser,
                        r = n.json.materials[e];
                    if (!r.extensions || !r.extensions[this.name]) return Promise.resolve();
                    let a = [];
                    t.sheenColor = new c.Ilk(0, 0, 0), t.sheenRoughness = 0, t.sheen = 1;
                    let i = r.extensions[this.name];
                    if (void 0 !== i.sheenColorFactor) {
                        let e = i.sheenColorFactor;
                        t.sheenColor.setRGB(e[0], e[1], e[2], C)
                    }
                    return void 0 !== i.sheenRoughnessFactor && (t.sheenRoughness = i.sheenRoughnessFactor), void 0 !== i.sheenColorTexture && a.push(n.assignTexture(t, "sheenColorMap", i.sheenColorTexture, g)), void 0 !== i.sheenRoughnessTexture && a.push(n.assignTexture(t, "sheenRoughnessMap", i.sheenRoughnessTexture)), Promise.all(a)
                }
            }
            class D {
                constructor(e) {
                    this.parser = e, this.name = y.KHR_MATERIALS_TRANSMISSION
                }
                getMaterialType(e) {
                    let t = this.parser.json.materials[e];
                    return t.extensions && t.extensions[this.name] ? c.EJi : null
                }
                extendMaterialParams(e, t) {
                    let n = this.parser,
                        r = n.json.materials[e];
                    if (!r.extensions || !r.extensions[this.name]) return Promise.resolve();
                    let a = [],
                        i = r.extensions[this.name];
                    return void 0 !== i.transmissionFactor && (t.transmission = i.transmissionFactor), void 0 !== i.transmissionTexture && a.push(n.assignTexture(t, "transmissionMap", i.transmissionTexture)), Promise.all(a)
                }
            }
            class T {
                constructor(e) {
                    this.parser = e, this.name = y.KHR_MATERIALS_VOLUME
                }
                getMaterialType(e) {
                    let t = this.parser.json.materials[e];
                    return t.extensions && t.extensions[this.name] ? c.EJi : null
                }
                extendMaterialParams(e, t) {
                    let n = this.parser,
                        r = n.json.materials[e];
                    if (!r.extensions || !r.extensions[this.name]) return Promise.resolve();
                    let a = [],
                        i = r.extensions[this.name];
                    t.thickness = void 0 !== i.thicknessFactor ? i.thicknessFactor : 0, void 0 !== i.thicknessTexture && a.push(n.assignTexture(t, "thicknessMap", i.thicknessTexture)), t.attenuationDistance = i.attenuationDistance || 1 / 0;
                    let l = i.attenuationColor || [1, 1, 1];
                    return t.attenuationColor = new c.Ilk().setRGB(l[0], l[1], l[2], C), Promise.all(a)
                }
            }
            class x {
                constructor(e) {
                    this.parser = e, this.name = y.KHR_MATERIALS_IOR
                }
                getMaterialType(e) {
                    let t = this.parser.json.materials[e];
                    return t.extensions && t.extensions[this.name] ? c.EJi : null
                }
                extendMaterialParams(e, t) {
                    let n = this.parser.json.materials[e];
                    if (!n.extensions || !n.extensions[this.name]) return Promise.resolve();
                    let r = n.extensions[this.name];
                    return t.ior = void 0 !== r.ior ? r.ior : 1.5, Promise.resolve()
                }
            }
            class H {
                constructor(e) {
                    this.parser = e, this.name = y.KHR_MATERIALS_SPECULAR
                }
                getMaterialType(e) {
                    let t = this.parser.json.materials[e];
                    return t.extensions && t.extensions[this.name] ? c.EJi : null
                }
                extendMaterialParams(e, t) {
                    let n = this.parser,
                        r = n.json.materials[e];
                    if (!r.extensions || !r.extensions[this.name]) return Promise.resolve();
                    let a = [],
                        i = r.extensions[this.name];
                    t.specularIntensity = void 0 !== i.specularFactor ? i.specularFactor : 1, void 0 !== i.specularTexture && a.push(n.assignTexture(t, "specularIntensityMap", i.specularTexture));
                    let l = i.specularColorFactor || [1, 1, 1];
                    return t.specularColor = new c.Ilk().setRGB(l[0], l[1], l[2], C), void 0 !== i.specularColorTexture && a.push(n.assignTexture(t, "specularColorMap", i.specularColorTexture, g)), Promise.all(a)
                }
            }
            class w {
                constructor(e) {
                    this.parser = e, this.name = y.EXT_MATERIALS_BUMP
                }
                getMaterialType(e) {
                    let t = this.parser.json.materials[e];
                    return t.extensions && t.extensions[this.name] ? c.EJi : null
                }
                extendMaterialParams(e, t) {
                    let n = this.parser,
                        r = n.json.materials[e];
                    if (!r.extensions || !r.extensions[this.name]) return Promise.resolve();
                    let a = [],
                        i = r.extensions[this.name];
                    return t.bumpScale = void 0 !== i.bumpFactor ? i.bumpFactor : 1, void 0 !== i.bumpTexture && a.push(n.assignTexture(t, "bumpMap", i.bumpTexture)), Promise.all(a)
                }
            }
            class _ {
                constructor(e) {
                    this.parser = e, this.name = y.KHR_MATERIALS_ANISOTROPY
                }
                getMaterialType(e) {
                    let t = this.parser.json.materials[e];
                    return t.extensions && t.extensions[this.name] ? c.EJi : null
                }
                extendMaterialParams(e, t) {
                    let n = this.parser,
                        r = n.json.materials[e];
                    if (!r.extensions || !r.extensions[this.name]) return Promise.resolve();
                    let a = [],
                        i = r.extensions[this.name];
                    return void 0 !== i.anisotropyStrength && (t.anisotropy = i.anisotropyStrength), void 0 !== i.anisotropyRotation && (t.anisotropyRotation = i.anisotropyRotation), void 0 !== i.anisotropyTexture && a.push(n.assignTexture(t, "anisotropyMap", i.anisotropyTexture)), Promise.all(a)
                }
            }
            class P {
                constructor(e) {
                    this.parser = e, this.name = y.KHR_TEXTURE_BASISU
                }
                loadTexture(e) {
                    let t = this.parser,
                        n = t.json,
                        r = n.textures[e];
                    if (!r.extensions || !r.extensions[this.name]) return null;
                    let a = r.extensions[this.name],
                        i = t.options.ktx2Loader;
                    if (!i) {
                        if (!(n.extensionsRequired && n.extensionsRequired.indexOf(this.name) >= 0)) return null;
                        throw Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures")
                    }
                    return t.loadTextureImage(e, a.source, i)
                }
            }
            class k {
                constructor(e) {
                    this.parser = e, this.name = y.EXT_TEXTURE_WEBP, this.isSupported = null
                }
                loadTexture(e) {
                    let t = this.name,
                        n = this.parser,
                        r = n.json,
                        a = r.textures[e];
                    if (!a.extensions || !a.extensions[t]) return null;
                    let i = a.extensions[t],
                        l = r.images[i.source],
                        o = n.textureLoader;
                    if (l.uri) {
                        let e = n.options.manager.getHandler(l.uri);
                        null !== e && (o = e)
                    }
                    return this.detectSupport().then(function(a) {
                        if (a) return n.loadTextureImage(e, i.source, o);
                        if (r.extensionsRequired && r.extensionsRequired.indexOf(t) >= 0) throw Error("THREE.GLTFLoader: WebP required by asset but unsupported.");
                        return n.loadTexture(e)
                    })
                }
                detectSupport() {
                    return this.isSupported || (this.isSupported = new Promise(function(e) {
                        let t = new Image;
                        t.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA", t.onload = t.onerror = function() {
                            e(1 === t.height)
                        }
                    })), this.isSupported
                }
            }
            class J {
                constructor(e) {
                    this.parser = e, this.name = y.EXT_TEXTURE_AVIF, this.isSupported = null
                }
                loadTexture(e) {
                    let t = this.name,
                        n = this.parser,
                        r = n.json,
                        a = r.textures[e];
                    if (!a.extensions || !a.extensions[t]) return null;
                    let i = a.extensions[t],
                        l = r.images[i.source],
                        o = n.textureLoader;
                    if (l.uri) {
                        let e = n.options.manager.getHandler(l.uri);
                        null !== e && (o = e)
                    }
                    return this.detectSupport().then(function(a) {
                        if (a) return n.loadTextureImage(e, i.source, o);
                        if (r.extensionsRequired && r.extensionsRequired.indexOf(t) >= 0) throw Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");
                        return n.loadTexture(e)
                    })
                }
                detectSupport() {
                    return this.isSupported || (this.isSupported = new Promise(function(e) {
                        let t = new Image;
                        t.src = "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=", t.onload = t.onerror = function() {
                            e(1 === t.height)
                        }
                    })), this.isSupported
                }
            }
            class L {
                constructor(e) {
                    this.name = y.EXT_MESHOPT_COMPRESSION, this.parser = e
                }
                loadBufferView(e) {
                    let t = this.parser.json,
                        n = t.bufferViews[e];
                    if (!n.extensions || !n.extensions[this.name]) return null; {
                        let e = n.extensions[this.name],
                            r = this.parser.getDependency("buffer", e.buffer),
                            a = this.parser.options.meshoptDecoder;
                        if (!a || !a.supported) {
                            if (!(t.extensionsRequired && t.extensionsRequired.indexOf(this.name) >= 0)) return null;
                            throw Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files")
                        }
                        return r.then(function(t) {
                            let n = e.byteOffset || 0,
                                r = e.byteLength || 0,
                                i = e.count,
                                l = e.byteStride,
                                o = new Uint8Array(t, n, r);
                            return a.decodeGltfBufferAsync ? a.decodeGltfBufferAsync(i, l, o, e.mode, e.filter).then(function(e) {
                                return e.buffer
                            }) : a.ready.then(function() {
                                let t = new ArrayBuffer(i * l);
                                return a.decodeGltfBuffer(new Uint8Array(t), i, l, o, e.mode, e.filter), t
                            })
                        })
                    }
                }
            }
            class N {
                constructor(e) {
                    this.name = y.EXT_MESH_GPU_INSTANCING, this.parser = e
                }
                createNodeMesh(e) {
                    let t = this.parser.json,
                        n = t.nodes[e];
                    if (!n.extensions || !n.extensions[this.name] || void 0 === n.mesh) return null;
                    for (let e of t.meshes[n.mesh].primitives)
                        if (e.mode !== Z.TRIANGLES && e.mode !== Z.TRIANGLE_STRIP && e.mode !== Z.TRIANGLE_FAN && void 0 !== e.mode) return null;
                    let r = n.extensions[this.name].attributes,
                        a = [],
                        i = {};
                    for (let e in r) a.push(this.parser.getDependency("accessor", r[e]).then(t => (i[e] = t, i[e])));
                    return a.length < 1 ? null : (a.push(this.parser.createNodeMesh(e)), Promise.all(a).then(e => {
                        let t = e.pop(),
                            n = t.isGroup ? t.children : [t],
                            r = e[0].count,
                            a = [];
                        for (let e of n) {
                            let t = new c.yGw,
                                n = new c.Pa4,
                                l = new c._fP,
                                o = new c.Pa4(1, 1, 1),
                                s = new c.SPe(e.geometry, e.material, r);
                            for (let e = 0; e < r; e++) i.TRANSLATION && n.fromBufferAttribute(i.TRANSLATION, e), i.ROTATION && l.fromBufferAttribute(i.ROTATION, e), i.SCALE && o.fromBufferAttribute(i.SCALE, e), s.setMatrixAt(e, t.compose(n, l, o));
                            for (let t in i)
                                if ("_COLOR_0" === t) {
                                    let e = i[t];
                                    s.instanceColor = new c.lb7(e.array, e.itemSize, e.normalized)
                                } else "TRANSLATION" !== t && "ROTATION" !== t && "SCALE" !== t && e.geometry.setAttribute(t, i[t]);
                            c.Tme.prototype.copy.call(s, e), this.parser.assignFinalMaterial(s), a.push(s)
                        }
                        return t.isGroup ? (t.clear(), t.add(...a), t) : a[0]
                    }))
                }
            }
            let U = "glTF",
                O = {
                    JSON: 1313821514,
                    BIN: 5130562
                };
            class K {
                constructor(e) {
                    this.name = y.KHR_BINARY_GLTF, this.content = null, this.body = null;
                    let t = new DataView(e, 0, 12);
                    if (this.header = {
                            magic: m(new Uint8Array(e.slice(0, 4))),
                            version: t.getUint32(4, !0),
                            length: t.getUint32(8, !0)
                        }, this.header.magic !== U) throw Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
                    if (this.header.version < 2) throw Error("THREE.GLTFLoader: Legacy binary file detected.");
                    let n = this.header.length - 12,
                        r = new DataView(e, 12),
                        a = 0;
                    for (; a < n;) {
                        let t = r.getUint32(a, !0);
                        a += 4;
                        let n = r.getUint32(a, !0);
                        if (a += 4, n === O.JSON) {
                            let n = new Uint8Array(e, 12 + a, t);
                            this.content = m(n)
                        } else if (n === O.BIN) {
                            let n = 12 + a;
                            this.body = e.slice(n, n + t)
                        }
                        a += t
                    }
                    if (null === this.content) throw Error("THREE.GLTFLoader: JSON content not found.")
                }
            }
            class Q {
                constructor(e, t) {
                    if (!t) throw Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
                    this.name = y.KHR_DRACO_MESH_COMPRESSION, this.json = e, this.dracoLoader = t, this.dracoLoader.preload()
                }
                decodePrimitive(e, t) {
                    let n = this.json,
                        r = this.dracoLoader,
                        a = e.extensions[this.name].bufferView,
                        i = e.extensions[this.name].attributes,
                        l = {},
                        o = {},
                        s = {};
                    for (let e in i) l[et[e] || e.toLowerCase()] = i[e];
                    for (let t in e.attributes) {
                        let r = et[t] || t.toLowerCase();
                        if (void 0 !== i[t]) {
                            let a = n.accessors[e.attributes[t]],
                                i = V[a.componentType];
                            s[r] = i.name, o[r] = !0 === a.normalized
                        }
                    }
                    return t.getDependency("bufferView", a).then(function(e) {
                        return new Promise(function(t, n) {
                            r.decodeDracoFile(e, function(e) {
                                for (let t in e.attributes) {
                                    let n = e.attributes[t],
                                        r = o[t];
                                    void 0 !== r && (n.normalized = r)
                                }
                                t(e)
                            }, l, s, C, n)
                        })
                    })
                }
            }
            class j {
                constructor() {
                    this.name = y.KHR_TEXTURE_TRANSFORM
                }
                extendTexture(e, t) {
                    return (void 0 === t.texCoord || t.texCoord === e.channel) && void 0 === t.offset && void 0 === t.rotation && void 0 === t.scale || (e = e.clone(), void 0 !== t.texCoord && (e.channel = t.texCoord), void 0 !== t.offset && e.offset.fromArray(t.offset), void 0 !== t.rotation && (e.rotation = t.rotation), void 0 !== t.scale && e.repeat.fromArray(t.scale), e.needsUpdate = !0), e
                }
            }
            class X {
                constructor() {
                    this.name = y.KHR_MESH_QUANTIZATION
                }
            }
            class z extends c._C8 {
                constructor(e, t, n, r) {
                    super(e, t, n, r)
                }
                copySampleValue_(e) {
                    let t = this.resultBuffer,
                        n = this.sampleValues,
                        r = this.valueSize,
                        a = e * r * 3 + r;
                    for (let e = 0; e !== r; e++) t[e] = n[a + e];
                    return t
                }
                interpolate_(e, t, n, r) {
                    let a = this.resultBuffer,
                        i = this.sampleValues,
                        l = this.valueSize,
                        o = 2 * l,
                        s = 3 * l,
                        u = r - t,
                        c = (n - t) / u,
                        f = c * c,
                        d = f * c,
                        A = e * s,
                        h = A - s,
                        p = -2 * d + 3 * f,
                        B = d - f,
                        m = 1 - p,
                        g = B - f + c;
                    for (let e = 0; e !== l; e++) {
                        let t = i[h + e + l],
                            n = i[h + e + o] * u,
                            r = i[A + e + l],
                            s = i[A + e] * u;
                        a[e] = m * t + g * n + p * r + B * s
                    }
                    return a
                }
            }
            let Y = new c._fP;
            class W extends z {
                interpolate_(e, t, n, r) {
                    let a = super.interpolate_(e, t, n, r);
                    return Y.fromArray(a).normalize().toArray(a), a
                }
            }
            let Z = {
                    POINTS: 0,
                    LINES: 1,
                    LINE_LOOP: 2,
                    LINE_STRIP: 3,
                    TRIANGLES: 4,
                    TRIANGLE_STRIP: 5,
                    TRIANGLE_FAN: 6
                },
                V = {
                    5120: Int8Array,
                    5121: Uint8Array,
                    5122: Int16Array,
                    5123: Uint16Array,
                    5125: Uint32Array,
                    5126: Float32Array
                },
                q = {
                    9728: c.TyD,
                    9729: c.wem,
                    9984: c.YLQ,
                    9985: c.qyh,
                    9986: c.aH4,
                    9987: c.D1R
                },
                $ = {
                    33071: c.uWy,
                    33648: c.OoA,
                    10497: c.rpg
                },
                ee = {
                    SCALAR: 1,
                    VEC2: 2,
                    VEC3: 3,
                    VEC4: 4,
                    MAT2: 4,
                    MAT3: 9,
                    MAT4: 16
                },
                et = {
                    POSITION: "position",
                    NORMAL: "normal",
                    TANGENT: "tangent",
                    ...B >= 152 ? {
                        TEXCOORD_0: "uv",
                        TEXCOORD_1: "uv1",
                        TEXCOORD_2: "uv2",
                        TEXCOORD_3: "uv3"
                    } : {
                        TEXCOORD_0: "uv",
                        TEXCOORD_1: "uv2"
                    },
                    COLOR_0: "color",
                    WEIGHTS_0: "skinWeight",
                    JOINTS_0: "skinIndex"
                },
                en = {
                    scale: "scale",
                    translation: "position",
                    rotation: "quaternion",
                    weights: "morphTargetInfluences"
                },
                er = {
                    CUBICSPLINE: void 0,
                    LINEAR: c.NMF,
                    STEP: c.Syv
                },
                ea = {
                    OPAQUE: "OPAQUE",
                    MASK: "MASK",
                    BLEND: "BLEND"
                };

            function ei(e, t, n) {
                for (let r in n.extensions) void 0 === e[r] && (t.userData.gltfExtensions = t.userData.gltfExtensions || {}, t.userData.gltfExtensions[r] = n.extensions[r])
            }

            function el(e, t) {
                void 0 !== t.extras && ("object" == typeof t.extras ? Object.assign(e.userData, t.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + t.extras))
            }

            function eo(e) {
                let t = "",
                    n = Object.keys(e).sort();
                for (let r = 0, a = n.length; r < a; r++) t += n[r] + ":" + e[n[r]] + ";";
                return t
            }

            function es(e) {
                switch (e) {
                    case Int8Array:
                        return 1 / 127;
                    case Uint8Array:
                        return 1 / 255;
                    case Int16Array:
                        return 1 / 32767;
                    case Uint16Array:
                        return 1 / 65535;
                    default:
                        throw Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")
                }
            }
            let eu = new c.yGw;
            class ec {
                constructor(e = {}, t = {}) {
                    this.json = e, this.extensions = {}, this.plugins = {}, this.options = t, this.cache = new v, this.associations = new Map, this.primitiveCache = {}, this.nodeCache = {}, this.meshCache = {
                        refs: {},
                        uses: {}
                    }, this.cameraCache = {
                        refs: {},
                        uses: {}
                    }, this.lightCache = {
                        refs: {},
                        uses: {}
                    }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
                    let n = !1,
                        r = !1,
                        a = -1;
                    "undefined" != typeof navigator && void 0 !== navigator.userAgent && (n = !0 === /^((?!chrome|android).)*safari/i.test(navigator.userAgent), a = (r = navigator.userAgent.indexOf("Firefox") > -1) ? navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1] : -1), "undefined" == typeof createImageBitmap || n || r && a < 98 ? this.textureLoader = new c.dpR(this.options.manager) : this.textureLoader = new c.QRU(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new c.hH6(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), "use-credentials" === this.options.crossOrigin && this.fileLoader.setWithCredentials(!0)
                }
                setExtensions(e) {
                    this.extensions = e
                }
                setPlugins(e) {
                    this.plugins = e
                }
                parse(e, t) {
                    let n = this,
                        r = this.json,
                        a = this.extensions;
                    this.cache.removeAll(), this.nodeCache = {}, this._invokeAll(function(e) {
                        return e._markDefs && e._markDefs()
                    }), Promise.all(this._invokeAll(function(e) {
                        return e.beforeRoot && e.beforeRoot()
                    })).then(function() {
                        return Promise.all([n.getDependencies("scene"), n.getDependencies("animation"), n.getDependencies("camera")])
                    }).then(function(t) {
                        let i = {
                            scene: t[0][r.scene || 0],
                            scenes: t[0],
                            animations: t[1],
                            cameras: t[2],
                            asset: r.asset,
                            parser: n,
                            userData: {}
                        };
                        return ei(a, i, r), el(i, r), Promise.all(n._invokeAll(function(e) {
                            return e.afterRoot && e.afterRoot(i)
                        })).then(function() {
                            for (let e of i.scenes) e.updateMatrixWorld();
                            e(i)
                        })
                    }).catch(t)
                }
                _markDefs() {
                    let e = this.json.nodes || [],
                        t = this.json.skins || [],
                        n = this.json.meshes || [];
                    for (let n = 0, r = t.length; n < r; n++) {
                        let r = t[n].joints;
                        for (let t = 0, n = r.length; t < n; t++) e[r[t]].isBone = !0
                    }
                    for (let t = 0, r = e.length; t < r; t++) {
                        let r = e[t];
                        void 0 !== r.mesh && (this._addNodeRef(this.meshCache, r.mesh), void 0 !== r.skin && (n[r.mesh].isSkinnedMesh = !0)), void 0 !== r.camera && this._addNodeRef(this.cameraCache, r.camera)
                    }
                }
                _addNodeRef(e, t) {
                    void 0 !== t && (void 0 === e.refs[t] && (e.refs[t] = e.uses[t] = 0), e.refs[t]++)
                }
                _getNodeRef(e, t, n) {
                    if (e.refs[t] <= 1) return n;
                    let r = n.clone(),
                        a = (e, t) => {
                            let n = this.associations.get(e);
                            for (let [r, i] of (null != n && this.associations.set(t, n), e.children.entries())) a(i, t.children[r])
                        };
                    return a(n, r), r.name += "_instance_" + e.uses[t]++, r
                }
                _invokeOne(e) {
                    let t = Object.values(this.plugins);
                    t.push(this);
                    for (let n = 0; n < t.length; n++) {
                        let r = e(t[n]);
                        if (r) return r
                    }
                    return null
                }
                _invokeAll(e) {
                    let t = Object.values(this.plugins);
                    t.unshift(this);
                    let n = [];
                    for (let r = 0; r < t.length; r++) {
                        let a = e(t[r]);
                        a && n.push(a)
                    }
                    return n
                }
                getDependency(e, t) {
                    let n = e + ":" + t,
                        r = this.cache.get(n);
                    if (!r) {
                        switch (e) {
                            case "scene":
                                r = this.loadScene(t);
                                break;
                            case "node":
                                r = this._invokeOne(function(e) {
                                    return e.loadNode && e.loadNode(t)
                                });
                                break;
                            case "mesh":
                                r = this._invokeOne(function(e) {
                                    return e.loadMesh && e.loadMesh(t)
                                });
                                break;
                            case "accessor":
                                r = this.loadAccessor(t);
                                break;
                            case "bufferView":
                                r = this._invokeOne(function(e) {
                                    return e.loadBufferView && e.loadBufferView(t)
                                });
                                break;
                            case "buffer":
                                r = this.loadBuffer(t);
                                break;
                            case "material":
                                r = this._invokeOne(function(e) {
                                    return e.loadMaterial && e.loadMaterial(t)
                                });
                                break;
                            case "texture":
                                r = this._invokeOne(function(e) {
                                    return e.loadTexture && e.loadTexture(t)
                                });
                                break;
                            case "skin":
                                r = this.loadSkin(t);
                                break;
                            case "animation":
                                r = this._invokeOne(function(e) {
                                    return e.loadAnimation && e.loadAnimation(t)
                                });
                                break;
                            case "camera":
                                r = this.loadCamera(t);
                                break;
                            default:
                                if (!(r = this._invokeOne(function(n) {
                                        return n != this && n.getDependency && n.getDependency(e, t)
                                    }))) throw Error("Unknown type: " + e)
                        }
                        this.cache.add(n, r)
                    }
                    return r
                }
                getDependencies(e) {
                    let t = this.cache.get(e);
                    if (!t) {
                        let n = this;
                        t = Promise.all((this.json[e + ("mesh" === e ? "es" : "s")] || []).map(function(t, r) {
                            return n.getDependency(e, r)
                        })), this.cache.add(e, t)
                    }
                    return t
                }
                loadBuffer(e) {
                    let t = this.json.buffers[e],
                        n = this.fileLoader;
                    if (t.type && "arraybuffer" !== t.type) throw Error("THREE.GLTFLoader: " + t.type + " buffer type is not supported.");
                    if (void 0 === t.uri && 0 === e) return Promise.resolve(this.extensions[y.KHR_BINARY_GLTF].body);
                    let r = this.options;
                    return new Promise(function(e, a) {
                        n.load(c.Zp0.resolveURL(t.uri, r.path), e, void 0, function() {
                            a(Error('THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".'))
                        })
                    })
                }
                loadBufferView(e) {
                    let t = this.json.bufferViews[e];
                    return this.getDependency("buffer", t.buffer).then(function(e) {
                        let n = t.byteLength || 0,
                            r = t.byteOffset || 0;
                        return e.slice(r, r + n)
                    })
                }
                loadAccessor(e) {
                    let t = this,
                        n = this.json,
                        r = this.json.accessors[e];
                    if (void 0 === r.bufferView && void 0 === r.sparse) {
                        let e = ee[r.type],
                            t = V[r.componentType],
                            n = !0 === r.normalized,
                            a = new t(r.count * e);
                        return Promise.resolve(new c.TlE(a, e, n))
                    }
                    let a = [];
                    return void 0 !== r.bufferView ? a.push(this.getDependency("bufferView", r.bufferView)) : a.push(null), void 0 !== r.sparse && (a.push(this.getDependency("bufferView", r.sparse.indices.bufferView)), a.push(this.getDependency("bufferView", r.sparse.values.bufferView))), Promise.all(a).then(function(e) {
                        let a, i;
                        let l = e[0],
                            o = ee[r.type],
                            s = V[r.componentType],
                            u = s.BYTES_PER_ELEMENT,
                            f = u * o,
                            d = r.byteOffset || 0,
                            A = void 0 !== r.bufferView ? n.bufferViews[r.bufferView].byteStride : void 0,
                            h = !0 === r.normalized;
                        if (A && A !== f) {
                            let e = Math.floor(d / A),
                                n = "InterleavedBuffer:" + r.bufferView + ":" + r.componentType + ":" + e + ":" + r.count,
                                f = t.cache.get(n);
                            f || (a = new s(l, e * A, r.count * A / u), f = new c.vpT(a, A / u), t.cache.add(n, f)), i = new c.kB5(f, o, d % A / u, h)
                        } else a = null === l ? new s(r.count * o) : new s(l, d, r.count * o), i = new c.TlE(a, o, h);
                        if (void 0 !== r.sparse) {
                            let t = ee.SCALAR,
                                n = V[r.sparse.indices.componentType],
                                a = r.sparse.indices.byteOffset || 0,
                                u = r.sparse.values.byteOffset || 0,
                                f = new n(e[1], a, r.sparse.count * t),
                                d = new s(e[2], u, r.sparse.count * o);
                            null !== l && (i = new c.TlE(i.array.slice(), i.itemSize, i.normalized));
                            for (let e = 0, t = f.length; e < t; e++) {
                                let t = f[e];
                                if (i.setX(t, d[e * o]), o >= 2 && i.setY(t, d[e * o + 1]), o >= 3 && i.setZ(t, d[e * o + 2]), o >= 4 && i.setW(t, d[e * o + 3]), o >= 5) throw Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")
                            }
                        }
                        return i
                    })
                }
                loadTexture(e) {
                    let t = this.json,
                        n = this.options,
                        r = t.textures[e].source,
                        a = t.images[r],
                        i = this.textureLoader;
                    if (a.uri) {
                        let e = n.manager.getHandler(a.uri);
                        null !== e && (i = e)
                    }
                    return this.loadTextureImage(e, r, i)
                }
                loadTextureImage(e, t, n) {
                    let r = this,
                        a = this.json,
                        i = a.textures[e],
                        l = a.images[t],
                        o = (l.uri || l.bufferView) + ":" + i.sampler;
                    if (this.textureCache[o]) return this.textureCache[o];
                    let s = this.loadImageSource(t, n).then(function(t) {
                        t.flipY = !1, t.name = i.name || l.name || "", "" === t.name && "string" == typeof l.uri && !1 === l.uri.startsWith("data:image/") && (t.name = l.uri);
                        let n = (a.samplers || {})[i.sampler] || {};
                        return t.magFilter = q[n.magFilter] || c.wem, t.minFilter = q[n.minFilter] || c.D1R, t.wrapS = $[n.wrapS] || c.rpg, t.wrapT = $[n.wrapT] || c.rpg, r.associations.set(t, {
                            textures: e
                        }), t
                    }).catch(function() {
                        return null
                    });
                    return this.textureCache[o] = s, s
                }
                loadImageSource(e, t) {
                    let n = this.json,
                        r = this.options;
                    if (void 0 !== this.sourceCache[e]) return this.sourceCache[e].then(e => e.clone());
                    let a = n.images[e],
                        i = self.URL || self.webkitURL,
                        l = a.uri || "",
                        o = !1;
                    if (void 0 !== a.bufferView) l = this.getDependency("bufferView", a.bufferView).then(function(e) {
                        o = !0;
                        let t = new Blob([e], {
                            type: a.mimeType
                        });
                        return l = i.createObjectURL(t)
                    });
                    else if (void 0 === a.uri) throw Error("THREE.GLTFLoader: Image " + e + " is missing URI and bufferView");
                    let s = Promise.resolve(l).then(function(e) {
                        return new Promise(function(n, a) {
                            let i = n;
                            !0 === t.isImageBitmapLoader && (i = function(e) {
                                let t = new c.xEZ(e);
                                t.needsUpdate = !0, n(t)
                            }), t.load(c.Zp0.resolveURL(e, r.path), i, void 0, a)
                        })
                    }).then(function(e) {
                        var t;
                        return !0 === o && i.revokeObjectURL(l), el(e, a), e.userData.mimeType = a.mimeType || ((t = a.uri).search(/\.jpe?g($|\?)/i) > 0 || 0 === t.search(/^data\:image\/jpeg/) ? "image/jpeg" : t.search(/\.webp($|\?)/i) > 0 || 0 === t.search(/^data\:image\/webp/) ? "image/webp" : "image/png"), e
                    }).catch(function(e) {
                        throw console.error("THREE.GLTFLoader: Couldn't load texture", l), e
                    });
                    return this.sourceCache[e] = s, s
                }
                assignTexture(e, t, n, r) {
                    let a = this;
                    return this.getDependency("texture", n.index).then(function(i) {
                        if (!i) return null;
                        if (void 0 !== n.texCoord && n.texCoord > 0 && ((i = i.clone()).channel = n.texCoord), a.extensions[y.KHR_TEXTURE_TRANSFORM]) {
                            let e = void 0 !== n.extensions ? n.extensions[y.KHR_TEXTURE_TRANSFORM] : void 0;
                            if (e) {
                                let t = a.associations.get(i);
                                i = a.extensions[y.KHR_TEXTURE_TRANSFORM].extendTexture(i, e), a.associations.set(i, t)
                            }
                        }
                        return void 0 !== r && ("number" == typeof r && (r = 3001 === r ? g : C), "colorSpace" in i ? i.colorSpace = r : i.encoding = r === g ? 3001 : 3e3), e[t] = i, i
                    })
                }
                assignFinalMaterial(e) {
                    let t = e.geometry,
                        n = e.material,
                        r = void 0 === t.attributes.tangent,
                        a = void 0 !== t.attributes.color,
                        i = void 0 === t.attributes.normal;
                    if (e.isPoints) {
                        let e = "PointsMaterial:" + n.uuid,
                            t = this.cache.get(e);
                        t || (t = new c.UY4, c.F5T.prototype.copy.call(t, n), t.color.copy(n.color), t.map = n.map, t.sizeAttenuation = !1, this.cache.add(e, t)), n = t
                    } else if (e.isLine) {
                        let e = "LineBasicMaterial:" + n.uuid,
                            t = this.cache.get(e);
                        t || (t = new c.nls, c.F5T.prototype.copy.call(t, n), t.color.copy(n.color), t.map = n.map, this.cache.add(e, t)), n = t
                    }
                    if (r || a || i) {
                        let e = "ClonedMaterial:" + n.uuid + ":";
                        r && (e += "derivative-tangents:"), a && (e += "vertex-colors:"), i && (e += "flat-shading:");
                        let t = this.cache.get(e);
                        t || (t = n.clone(), a && (t.vertexColors = !0), i && (t.flatShading = !0), r && (t.normalScale && (t.normalScale.y *= -1), t.clearcoatNormalScale && (t.clearcoatNormalScale.y *= -1)), this.cache.add(e, t), this.associations.set(t, this.associations.get(n))), n = t
                    }
                    e.material = n
                }
                getMaterialType() {
                    return c.Wid
                }
                loadMaterial(e) {
                    let t;
                    let n = this,
                        r = this.json,
                        a = this.extensions,
                        i = r.materials[e],
                        l = {},
                        o = i.extensions || {},
                        s = [];
                    if (o[y.KHR_MATERIALS_UNLIT]) {
                        let e = a[y.KHR_MATERIALS_UNLIT];
                        t = e.getMaterialType(), s.push(e.extendParams(l, i, n))
                    } else {
                        let r = i.pbrMetallicRoughness || {};
                        if (l.color = new c.Ilk(1, 1, 1), l.opacity = 1, Array.isArray(r.baseColorFactor)) {
                            let e = r.baseColorFactor;
                            l.color.setRGB(e[0], e[1], e[2], C), l.opacity = e[3]
                        }
                        void 0 !== r.baseColorTexture && s.push(n.assignTexture(l, "map", r.baseColorTexture, g)), l.metalness = void 0 !== r.metallicFactor ? r.metallicFactor : 1, l.roughness = void 0 !== r.roughnessFactor ? r.roughnessFactor : 1, void 0 !== r.metallicRoughnessTexture && (s.push(n.assignTexture(l, "metalnessMap", r.metallicRoughnessTexture)), s.push(n.assignTexture(l, "roughnessMap", r.metallicRoughnessTexture))), t = this._invokeOne(function(t) {
                            return t.getMaterialType && t.getMaterialType(e)
                        }), s.push(Promise.all(this._invokeAll(function(t) {
                            return t.extendMaterialParams && t.extendMaterialParams(e, l)
                        })))
                    }!0 === i.doubleSided && (l.side = c.ehD);
                    let u = i.alphaMode || ea.OPAQUE;
                    if (u === ea.BLEND ? (l.transparent = !0, l.depthWrite = !1) : (l.transparent = !1, u === ea.MASK && (l.alphaTest = void 0 !== i.alphaCutoff ? i.alphaCutoff : .5)), void 0 !== i.normalTexture && t !== c.vBJ && (s.push(n.assignTexture(l, "normalMap", i.normalTexture)), l.normalScale = new c.FM8(1, 1), void 0 !== i.normalTexture.scale)) {
                        let e = i.normalTexture.scale;
                        l.normalScale.set(e, e)
                    }
                    if (void 0 !== i.occlusionTexture && t !== c.vBJ && (s.push(n.assignTexture(l, "aoMap", i.occlusionTexture)), void 0 !== i.occlusionTexture.strength && (l.aoMapIntensity = i.occlusionTexture.strength)), void 0 !== i.emissiveFactor && t !== c.vBJ) {
                        let e = i.emissiveFactor;
                        l.emissive = new c.Ilk().setRGB(e[0], e[1], e[2], C)
                    }
                    return void 0 !== i.emissiveTexture && t !== c.vBJ && s.push(n.assignTexture(l, "emissiveMap", i.emissiveTexture, g)), Promise.all(s).then(function() {
                        let r = new t(l);
                        return i.name && (r.name = i.name), el(r, i), n.associations.set(r, {
                            materials: e
                        }), i.extensions && ei(a, r, i), r
                    })
                }
                createUniqueName(e) {
                    let t = c.iUV.sanitizeNodeName(e || "");
                    return t in this.nodeNamesUsed ? t + "_" + ++this.nodeNamesUsed[t] : (this.nodeNamesUsed[t] = 0, t)
                }
                loadGeometries(e) {
                    let t = this,
                        n = this.extensions,
                        r = this.primitiveCache,
                        a = [];
                    for (let i = 0, l = e.length; i < l; i++) {
                        let l = e[i],
                            o = function(e) {
                                let t;
                                let n = e.extensions && e.extensions[y.KHR_DRACO_MESH_COMPRESSION];
                                if (t = n ? "draco:" + n.bufferView + ":" + n.indices + ":" + eo(n.attributes) : e.indices + ":" + eo(e.attributes) + ":" + e.mode, void 0 !== e.targets)
                                    for (let n = 0, r = e.targets.length; n < r; n++) t += ":" + eo(e.targets[n]);
                                return t
                            }(l),
                            s = r[o];
                        if (s) a.push(s.promise);
                        else {
                            let e;
                            e = l.extensions && l.extensions[y.KHR_DRACO_MESH_COMPRESSION] ? function(e) {
                                return n[y.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(e, t).then(function(n) {
                                    return ef(n, e, t)
                                })
                            }(l) : ef(new c.u9r, l, t), r[o] = {
                                primitive: l,
                                promise: e
                            }, a.push(e)
                        }
                    }
                    return Promise.all(a)
                }
                loadMesh(e) {
                    let t = this,
                        n = this.json,
                        r = this.extensions,
                        a = n.meshes[e],
                        i = a.primitives,
                        l = [];
                    for (let e = 0, t = i.length; e < t; e++) {
                        var o;
                        let t = void 0 === i[e].material ? (void 0 === (o = this.cache).DefaultMaterial && (o.DefaultMaterial = new c.Wid({
                            color: 16777215,
                            emissive: 0,
                            metalness: 1,
                            roughness: 1,
                            transparent: !1,
                            depthTest: !0,
                            side: c.Wl3
                        })), o.DefaultMaterial) : this.getDependency("material", i[e].material);
                        l.push(t)
                    }
                    return l.push(t.loadGeometries(i)), Promise.all(l).then(function(n) {
                        let l = n.slice(0, n.length - 1),
                            o = n[n.length - 1],
                            s = [];
                        for (let n = 0, u = o.length; n < u; n++) {
                            let u;
                            let f = o[n],
                                d = i[n],
                                A = l[n];
                            if (d.mode === Z.TRIANGLES || d.mode === Z.TRIANGLE_STRIP || d.mode === Z.TRIANGLE_FAN || void 0 === d.mode) !0 === (u = !0 === a.isSkinnedMesh ? new c.TUv(f, A) : new c.Kj0(f, A)).isSkinnedMesh && u.normalizeSkinWeights(), d.mode === Z.TRIANGLE_STRIP ? u.geometry = p(u.geometry, c.UlW) : d.mode === Z.TRIANGLE_FAN && (u.geometry = p(u.geometry, c.z$h));
                            else if (d.mode === Z.LINES) u = new c.ejS(f, A);
                            else if (d.mode === Z.LINE_STRIP) u = new c.x12(f, A);
                            else if (d.mode === Z.LINE_LOOP) u = new c.blk(f, A);
                            else if (d.mode === Z.POINTS) u = new c.woe(f, A);
                            else throw Error("THREE.GLTFLoader: Primitive mode unsupported: " + d.mode);
                            Object.keys(u.geometry.morphAttributes).length > 0 && function(e, t) {
                                if (e.updateMorphTargets(), void 0 !== t.weights)
                                    for (let n = 0, r = t.weights.length; n < r; n++) e.morphTargetInfluences[n] = t.weights[n];
                                if (t.extras && Array.isArray(t.extras.targetNames)) {
                                    let n = t.extras.targetNames;
                                    if (e.morphTargetInfluences.length === n.length) {
                                        e.morphTargetDictionary = {};
                                        for (let t = 0, r = n.length; t < r; t++) e.morphTargetDictionary[n[t]] = t
                                    } else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")
                                }
                            }(u, a), u.name = t.createUniqueName(a.name || "mesh_" + e), el(u, a), d.extensions && ei(r, u, d), t.assignFinalMaterial(u), s.push(u)
                        }
                        for (let n = 0, r = s.length; n < r; n++) t.associations.set(s[n], {
                            meshes: e,
                            primitives: n
                        });
                        if (1 === s.length) return a.extensions && ei(r, s[0], a), s[0];
                        let u = new c.ZAu;
                        a.extensions && ei(r, u, a), t.associations.set(u, {
                            meshes: e
                        });
                        for (let e = 0, t = s.length; e < t; e++) u.add(s[e]);
                        return u
                    })
                }
                loadCamera(e) {
                    let t;
                    let n = this.json.cameras[e],
                        r = n[n.type];
                    if (!r) {
                        console.warn("THREE.GLTFLoader: Missing camera parameters.");
                        return
                    }
                    return "perspective" === n.type ? t = new c.cPb(c.M8C.radToDeg(r.yfov), r.aspectRatio || 1, r.znear || 1, r.zfar || 2e6) : "orthographic" === n.type && (t = new c.iKG(-r.xmag, r.xmag, r.ymag, -r.ymag, r.znear, r.zfar)), n.name && (t.name = this.createUniqueName(n.name)), el(t, n), Promise.resolve(t)
                }
                loadSkin(e) {
                    let t = this.json.skins[e],
                        n = [];
                    for (let e = 0, r = t.joints.length; e < r; e++) n.push(this._loadNodeShallow(t.joints[e]));
                    return void 0 !== t.inverseBindMatrices ? n.push(this.getDependency("accessor", t.inverseBindMatrices)) : n.push(null), Promise.all(n).then(function(e) {
                        let n = e.pop(),
                            r = [],
                            a = [];
                        for (let i = 0, l = e.length; i < l; i++) {
                            let l = e[i];
                            if (l) {
                                r.push(l);
                                let e = new c.yGw;
                                null !== n && e.fromArray(n.array, 16 * i), a.push(e)
                            } else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', t.joints[i])
                        }
                        return new c.OdW(r, a)
                    })
                }
                loadAnimation(e) {
                    let t = this.json,
                        n = this,
                        r = t.animations[e],
                        a = r.name ? r.name : "animation_" + e,
                        i = [],
                        l = [],
                        o = [],
                        s = [],
                        u = [];
                    for (let e = 0, t = r.channels.length; e < t; e++) {
                        let t = r.channels[e],
                            n = r.samplers[t.sampler],
                            a = t.target,
                            c = a.node,
                            f = void 0 !== r.parameters ? r.parameters[n.input] : n.input,
                            d = void 0 !== r.parameters ? r.parameters[n.output] : n.output;
                        void 0 !== a.node && (i.push(this.getDependency("node", c)), l.push(this.getDependency("accessor", f)), o.push(this.getDependency("accessor", d)), s.push(n), u.push(a))
                    }
                    return Promise.all([Promise.all(i), Promise.all(l), Promise.all(o), Promise.all(s), Promise.all(u)]).then(function(e) {
                        let t = e[0],
                            r = e[1],
                            i = e[2],
                            l = e[3],
                            o = e[4],
                            s = [];
                        for (let e = 0, a = t.length; e < a; e++) {
                            let a = t[e],
                                u = r[e],
                                c = i[e],
                                f = l[e],
                                d = o[e];
                            if (void 0 === a) continue;
                            a.updateMatrix && a.updateMatrix();
                            let A = n._createAnimationTracks(a, u, c, f, d);
                            if (A)
                                for (let e = 0; e < A.length; e++) s.push(A[e])
                        }
                        return new c.m7l(a, void 0, s)
                    })
                }
                createNodeMesh(e) {
                    let t = this.json,
                        n = this,
                        r = t.nodes[e];
                    return void 0 === r.mesh ? null : n.getDependency("mesh", r.mesh).then(function(e) {
                        let t = n._getNodeRef(n.meshCache, r.mesh, e);
                        return void 0 !== r.weights && t.traverse(function(e) {
                            if (e.isMesh)
                                for (let t = 0, n = r.weights.length; t < n; t++) e.morphTargetInfluences[t] = r.weights[t]
                        }), t
                    })
                }
                loadNode(e) {
                    let t = this.json.nodes[e],
                        n = this._loadNodeShallow(e),
                        r = [],
                        a = t.children || [];
                    for (let e = 0, t = a.length; e < t; e++) r.push(this.getDependency("node", a[e]));
                    let i = void 0 === t.skin ? Promise.resolve(null) : this.getDependency("skin", t.skin);
                    return Promise.all([n, Promise.all(r), i]).then(function(e) {
                        let t = e[0],
                            n = e[1],
                            r = e[2];
                        null !== r && t.traverse(function(e) {
                            e.isSkinnedMesh && e.bind(r, eu)
                        });
                        for (let e = 0, r = n.length; e < r; e++) t.add(n[e]);
                        return t
                    })
                }
                _loadNodeShallow(e) {
                    let t = this.json,
                        n = this.extensions,
                        r = this;
                    if (void 0 !== this.nodeCache[e]) return this.nodeCache[e];
                    let a = t.nodes[e],
                        i = a.name ? r.createUniqueName(a.name) : "",
                        l = [],
                        o = r._invokeOne(function(t) {
                            return t.createNodeMesh && t.createNodeMesh(e)
                        });
                    return o && l.push(o), void 0 !== a.camera && l.push(r.getDependency("camera", a.camera).then(function(e) {
                        return r._getNodeRef(r.cameraCache, a.camera, e)
                    })), r._invokeAll(function(t) {
                        return t.createNodeAttachment && t.createNodeAttachment(e)
                    }).forEach(function(e) {
                        l.push(e)
                    }), this.nodeCache[e] = Promise.all(l).then(function(t) {
                        let l;
                        if ((l = !0 === a.isBone ? new c.N$j : t.length > 1 ? new c.ZAu : 1 === t.length ? t[0] : new c.Tme) !== t[0])
                            for (let e = 0, n = t.length; e < n; e++) l.add(t[e]);
                        if (a.name && (l.userData.name = a.name, l.name = i), el(l, a), a.extensions && ei(n, l, a), void 0 !== a.matrix) {
                            let e = new c.yGw;
                            e.fromArray(a.matrix), l.applyMatrix4(e)
                        } else void 0 !== a.translation && l.position.fromArray(a.translation), void 0 !== a.rotation && l.quaternion.fromArray(a.rotation), void 0 !== a.scale && l.scale.fromArray(a.scale);
                        return r.associations.has(l) || r.associations.set(l, {}), r.associations.get(l).nodes = e, l
                    }), this.nodeCache[e]
                }
                loadScene(e) {
                    let t = this.extensions,
                        n = this.json.scenes[e],
                        r = this,
                        a = new c.ZAu;
                    n.name && (a.name = r.createUniqueName(n.name)), el(a, n), n.extensions && ei(t, a, n);
                    let i = n.nodes || [],
                        l = [];
                    for (let e = 0, t = i.length; e < t; e++) l.push(r.getDependency("node", i[e]));
                    return Promise.all(l).then(function(e) {
                        for (let t = 0, n = e.length; t < n; t++) a.add(e[t]);
                        return r.associations = (e => {
                            let t = new Map;
                            for (let [e, n] of r.associations)(e instanceof c.F5T || e instanceof c.xEZ) && t.set(e, n);
                            return e.traverse(e => {
                                let n = r.associations.get(e);
                                null != n && t.set(e, n)
                            }), t
                        })(a), a
                    })
                }
                _createAnimationTracks(e, t, n, r, a) {
                    let i;
                    let l = [],
                        o = e.name ? e.name : e.uuid,
                        s = [];
                    switch (en[a.path] === en.weights ? e.traverse(function(e) {
                        e.morphTargetInfluences && s.push(e.name ? e.name : e.uuid)
                    }) : s.push(o), en[a.path]) {
                        case en.weights:
                            i = c.dUE;
                            break;
                        case en.rotation:
                            i = c.iLg;
                            break;
                        case en.position:
                        case en.scale:
                            i = c.yC1;
                            break;
                        default:
                            i = 1 === n.itemSize ? c.dUE : c.yC1
                    }
                    let u = void 0 !== r.interpolation ? er[r.interpolation] : c.NMF,
                        f = this._getArrayFromAccessor(n);
                    for (let e = 0, n = s.length; e < n; e++) {
                        let n = new i(s[e] + "." + en[a.path], t.array, f, u);
                        "CUBICSPLINE" === r.interpolation && this._createCubicSplineTrackInterpolant(n), l.push(n)
                    }
                    return l
                }
                _getArrayFromAccessor(e) {
                    let t = e.array;
                    if (e.normalized) {
                        let e = es(t.constructor),
                            n = new Float32Array(t.length);
                        for (let r = 0, a = t.length; r < a; r++) n[r] = t[r] * e;
                        t = n
                    }
                    return t
                }
                _createCubicSplineTrackInterpolant(e) {
                    e.createInterpolant = function(e) {
                        return new(this instanceof c.iLg ? W : z)(this.times, this.values, this.getValueSize() / 3, e)
                    }, e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0
                }
            }

            function ef(e, t, n) {
                let r = t.attributes,
                    a = [];
                for (let t in r) {
                    let i = et[t] || t.toLowerCase();
                    i in e.attributes || a.push(function(t, r) {
                        return n.getDependency("accessor", t).then(function(t) {
                            e.setAttribute(r, t)
                        })
                    }(r[t], i))
                }
                if (void 0 !== t.indices && !e.index) {
                    let r = n.getDependency("accessor", t.indices).then(function(t) {
                        e.setIndex(t)
                    });
                    a.push(r)
                }
                return el(e, t), ! function(e, t, n) {
                    let r = t.attributes,
                        a = new c.ZzF;
                    if (void 0 === r.POSITION) return; {
                        let e = n.json.accessors[r.POSITION],
                            t = e.min,
                            i = e.max;
                        if (void 0 !== t && void 0 !== i) {
                            if (a.set(new c.Pa4(t[0], t[1], t[2]), new c.Pa4(i[0], i[1], i[2])), e.normalized) {
                                let t = es(V[e.componentType]);
                                a.min.multiplyScalar(t), a.max.multiplyScalar(t)
                            }
                        } else {
                            console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
                            return
                        }
                    }
                    let i = t.targets;
                    if (void 0 !== i) {
                        let e = new c.Pa4,
                            t = new c.Pa4;
                        for (let r = 0, a = i.length; r < a; r++) {
                            let a = i[r];
                            if (void 0 !== a.POSITION) {
                                let r = n.json.accessors[a.POSITION],
                                    i = r.min,
                                    l = r.max;
                                if (void 0 !== i && void 0 !== l) {
                                    if (t.setX(Math.max(Math.abs(i[0]), Math.abs(l[0]))), t.setY(Math.max(Math.abs(i[1]), Math.abs(l[1]))), t.setZ(Math.max(Math.abs(i[2]), Math.abs(l[2]))), r.normalized) {
                                        let e = es(V[r.componentType]);
                                        t.multiplyScalar(e)
                                    }
                                    e.max(t)
                                } else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")
                            }
                        }
                        a.expandByVector(e)
                    }
                    e.boundingBox = a;
                    let l = new c.aLr;
                    a.getCenter(l.center), l.radius = a.min.distanceTo(a.max) / 2, e.boundingSphere = l
                }(e, t, n), Promise.all(a).then(function() {
                    return void 0 !== t.targets ? function(e, t, n) {
                        let r = !1,
                            a = !1,
                            i = !1;
                        for (let e = 0, n = t.length; e < n; e++) {
                            let n = t[e];
                            if (void 0 !== n.POSITION && (r = !0), void 0 !== n.NORMAL && (a = !0), void 0 !== n.COLOR_0 && (i = !0), r && a && i) break
                        }
                        if (!r && !a && !i) return Promise.resolve(e);
                        let l = [],
                            o = [],
                            s = [];
                        for (let u = 0, c = t.length; u < c; u++) {
                            let c = t[u];
                            if (r) {
                                let t = void 0 !== c.POSITION ? n.getDependency("accessor", c.POSITION) : e.attributes.position;
                                l.push(t)
                            }
                            if (a) {
                                let t = void 0 !== c.NORMAL ? n.getDependency("accessor", c.NORMAL) : e.attributes.normal;
                                o.push(t)
                            }
                            if (i) {
                                let t = void 0 !== c.COLOR_0 ? n.getDependency("accessor", c.COLOR_0) : e.attributes.color;
                                s.push(t)
                            }
                        }
                        return Promise.all([Promise.all(l), Promise.all(o), Promise.all(s)]).then(function(t) {
                            let n = t[0],
                                l = t[1],
                                o = t[2];
                            return r && (e.morphAttributes.position = n), a && (e.morphAttributes.normal = l), i && (e.morphAttributes.color = o), e.morphTargetsRelative = !0, e
                        })
                    }(e, t.targets, n) : e
                })
            }
            var ed = n(9971);
            let eA = e => "object" == typeof e && "function" == typeof e.then,
                eh = [];

            function ep(e, t, n = (e, t) => e === t) {
                if (e === t) return !0;
                if (!e || !t) return !1;
                let r = e.length;
                if (t.length !== r) return !1;
                for (let a = 0; a < r; a++)
                    if (!n(e[a], t[a])) return !1;
                return !0
            }

            function eB(e, t = null, n = !1, r = {}) {
                for (let a of (null === t && (t = [e]), eh))
                    if (ep(t, a.keys, a.equal)) {
                        if (n) return;
                        if (Object.prototype.hasOwnProperty.call(a, "error")) throw a.error;
                        if (Object.prototype.hasOwnProperty.call(a, "response")) return r.lifespan && r.lifespan > 0 && (a.timeout && clearTimeout(a.timeout), a.timeout = setTimeout(a.remove, r.lifespan)), a.response;
                        if (!n) throw a.promise
                    }
                let a = {
                    keys: t,
                    equal: r.equal,
                    remove: () => {
                        let e = eh.indexOf(a); - 1 !== e && eh.splice(e, 1)
                    },
                    promise: (eA(e) ? e : e(...t)).then(e => {
                        a.response = e, r.lifespan && r.lifespan > 0 && (a.timeout = setTimeout(a.remove, r.lifespan))
                    }).catch(e => a.error = e)
                };
                if (eh.push(a), !n) throw a.promise
            }
            let em = (e, t, n) => eB(e, t, !1, n),
                eg = (e, t, n) => void eB(e, t, !0, n),
                eC = e => {
                    if (void 0 === e || 0 === e.length) eh.splice(0, eh.length);
                    else {
                        let t = eh.find(t => ep(e, t.keys, t.equal));
                        t && t.remove()
                    }
                };
            n(7437);
            var eb = n(7975),
                ev = n.n(eb),
                ey = n(428),
                eE = n(257);
            let eF = {},
                eI = e => "colorSpace" in e || "outputColorSpace" in e,
                eM = () => {
                    var e;
                    return null != (e = eF.ColorManagement) ? e : null
                };
            "undefined" != typeof window && (null != (o = window.document) && o.createElement || (null == (s = window.navigator) ? void 0 : s.product) === "ReactNative") ? u.useLayoutEffect : u.useEffect;
            class eR extends u.Component {
                constructor(...e) {
                    super(...e), this.state = {
                        error: !1
                    }
                }
                componentDidCatch(e) {
                    this.props.set(e)
                }
                render() {
                    return this.state.error ? null : this.props.children
                }
            }
            eR.getDerivedStateFromError = () => ({
                error: !0
            });
            let eS = "__default",
                eG = new Map,
                eD = e => e && !!e.memoized && !!e.changes;

            function eT(e) {
                let t = e.__r3f.root;
                for (; t.getState().previousRoot;) t = t.getState().previousRoot;
                return t
            }
            let ex = {
                obj: e => e === Object(e) && !ex.arr(e) && "function" != typeof e,
                fun: e => "function" == typeof e,
                str: e => "string" == typeof e,
                num: e => "number" == typeof e,
                boo: e => "boolean" == typeof e,
                und: e => void 0 === e,
                arr: e => Array.isArray(e),
                equ(e, t, {
                    arrays: n = "shallow",
                    objects: r = "reference",
                    strict: a = !0
                } = {}) {
                    let i;
                    if (typeof e != typeof t || !!e != !!t) return !1;
                    if (ex.str(e) || ex.num(e) || ex.boo(e)) return e === t;
                    let l = ex.obj(e);
                    if (l && "reference" === r) return e === t;
                    let o = ex.arr(e);
                    if (o && "reference" === n) return e === t;
                    if ((o || l) && e === t) return !0;
                    for (i in e)
                        if (!(i in t)) return !1;
                    if (l && "shallow" === n && "shallow" === r) {
                        for (i in a ? t : e)
                            if (!ex.equ(e[i], t[i], {
                                    strict: a,
                                    objects: "reference"
                                })) return !1
                    } else
                        for (i in a ? t : e)
                            if (e[i] !== t[i]) return !1;
                    if (ex.und(i)) {
                        if (o && 0 === e.length && 0 === t.length || l && 0 === Object.keys(e).length && 0 === Object.keys(t).length) return !0;
                        if (e !== t) return !1
                    }
                    return !0
                }
            };

            function eH(e, t) {
                return e.__r3f = {
                    type: "",
                    root: null,
                    previousAttach: null,
                    memoizedProps: {},
                    eventCount: 0,
                    handlers: {},
                    objects: [],
                    parent: null,
                    ...t
                }, e
            }

            function ew(e, t) {
                let n = e;
                if (!t.includes("-")) return {
                    target: n,
                    key: t
                }; {
                    let r = t.split("-"),
                        a = r.pop();
                    return {
                        target: n = r.reduce((e, t) => e[t], e),
                        key: a
                    }
                }
            }
            let e_ = /-\d+$/;

            function eP(e, t, n) {
                if (ex.str(n)) {
                    if (e_.test(n)) {
                        let {
                            target: t,
                            key: r
                        } = ew(e, n.replace(e_, ""));
                        Array.isArray(t[r]) || (t[r] = [])
                    }
                    let {
                        target: r,
                        key: a
                    } = ew(e, n);
                    t.__r3f.previousAttach = r[a], r[a] = t
                } else t.__r3f.previousAttach = n(e, t)
            }

            function ek(e, t, n) {
                var r, a;
                if (ex.str(n)) {
                    let {
                        target: r,
                        key: a
                    } = ew(e, n), i = t.__r3f.previousAttach;
                    void 0 === i ? delete r[a] : r[a] = i
                } else null == (r = t.__r3f) || null == r.previousAttach || r.previousAttach(e, t);
                null == (a = t.__r3f) || delete a.previousAttach
            }

            function eJ(e, {
                children: t,
                key: n,
                ref: r,
                ...a
            }, {
                children: i,
                key: l,
                ref: o,
                ...s
            } = {}, u = !1) {
                let c = e.__r3f,
                    f = Object.entries(a),
                    d = [];
                if (u) {
                    let e = Object.keys(s);
                    for (let t = 0; t < e.length; t++) a.hasOwnProperty(e[t]) || f.unshift([e[t], eS + "remove"])
                }
                f.forEach(([t, n]) => {
                    var r;
                    if (null != (r = e.__r3f) && r.primitive && "object" === t || ex.equ(n, s[t])) return;
                    if (/^on(Pointer|Click|DoubleClick|ContextMenu|Wheel)/.test(t)) return d.push([t, n, !0, []]);
                    let i = [];
                    for (let e in t.includes("-") && (i = t.split("-")), d.push([t, n, !1, i]), a) {
                        let n = a[e];
                        e.startsWith(`${t}-`) && d.push([e, n, !1, e.split("-")])
                    }
                });
                let A = { ...a
                };
                return null != c && c.memoizedProps && null != c && c.memoizedProps.args && (A.args = c.memoizedProps.args), null != c && c.memoizedProps && null != c && c.memoizedProps.attach && (A.attach = c.memoizedProps.attach), {
                    memoized: A,
                    changes: d
                }
            }
            let eL = void 0 !== eE && !1;

            function eN(e, t) {
                var n, r, a;
                let i = e.__r3f,
                    l = null == i ? void 0 : i.root,
                    o = null == l ? void 0 : null == l.getState ? void 0 : l.getState(),
                    {
                        memoized: s,
                        changes: u
                    } = eD(t) ? t : eJ(e, t),
                    f = null == i ? void 0 : i.eventCount;
                e.__r3f && (e.__r3f.memoizedProps = s);
                for (let t = 0; t < u.length; t++) {
                    let [n, l, s, f] = u[t];
                    if (eI(e)) {
                        let e = "srgb",
                            t = "srgb-linear";
                        "encoding" === n ? (n = "colorSpace", l = 3001 === l ? e : t) : "outputEncoding" === n && (n = "outputColorSpace", l = 3001 === l ? e : t)
                    }
                    let d = e,
                        A = d[n];
                    if (f.length && !((A = f.reduce((e, t) => e[t], e)) && A.set)) {
                        let [t, ...r] = f.reverse();
                        d = r.reverse().reduce((e, t) => e[t], e), n = t
                    }
                    if (l === eS + "remove") {
                        if (d.constructor) {
                            let e = eG.get(d.constructor);
                            e || (e = new d.constructor, eG.set(d.constructor, e)), l = e[n]
                        } else l = 0
                    }
                    if (s && i) l ? i.handlers[n] = l : delete i.handlers[n], i.eventCount = Object.keys(i.handlers).length;
                    else if (A && A.set && (A.copy || A instanceof c.S9g)) {
                        if (Array.isArray(l)) A.fromArray ? A.fromArray(l) : A.set(...l);
                        else if (A.copy && l && l.constructor && (eL ? A.constructor.name === l.constructor.name : A.constructor === l.constructor)) A.copy(l);
                        else if (void 0 !== l) {
                            let e = null == (r = A) ? void 0 : r.isColor;
                            !e && A.setScalar ? A.setScalar(l) : A instanceof c.S9g && l instanceof c.S9g ? A.mask = l.mask : A.set(l), !eM() && o && !o.linear && e && A.convertSRGBToLinear()
                        }
                    } else if (d[n] = l, null != (a = d[n]) && a.isTexture && d[n].format === c.wk1 && d[n].type === c.ywz && o) {
                        let e = d[n];
                        eI(e) && eI(o.gl) ? e.colorSpace = o.gl.outputColorSpace : e.encoding = o.gl.outputEncoding
                    }
                    eU(e)
                }
                if (i && i.parent && e.raycast && f !== i.eventCount) {
                    let t = eT(e).getState().internal,
                        n = t.interaction.indexOf(e);
                    n > -1 && t.interaction.splice(n, 1), i.eventCount && t.interaction.push(e)
                }
                return !(1 === u.length && "onUpdate" === u[0][0]) && u.length && null != (n = e.__r3f) && n.parent && eO(e), e
            }

            function eU(e) {
                var t, n;
                let r = null == (t = e.__r3f) ? void 0 : null == (n = t.root) ? void 0 : null == n.getState ? void 0 : n.getState();
                r && 0 === r.internal.frames && r.invalidate()
            }

            function eO(e) {
                null == e.onUpdate || e.onUpdate(e)
            }
            let eK = new Set,
                eQ = new Set,
                ej = new Set;

            function eX(e, t) {
                if (e.size)
                    for (let {
                            callback: n
                        } of e.values()) n(t)
            }

            function ez(e, t) {
                switch (e) {
                    case "before":
                        return eX(eK, t);
                    case "after":
                        return eX(eQ, t);
                    case "tail":
                        return eX(ej, t)
                }
            }

            function eY(e, t, n) {
                let r = t.clock.getDelta();
                for ("never" === t.frameloop && "number" == typeof e && (r = e - t.clock.elapsedTime, t.clock.oldTime = t.clock.elapsedTime, t.clock.elapsedTime = e), i = t.internal.subscribers, a = 0; a < i.length; a++)(l = i[a]).ref.current(l.store.getState(), r, n);
                return !t.internal.priority && t.gl.render && t.gl.render(t.scene, t.camera), t.internal.frames = Math.max(0, t.internal.frames - 1), "always" === t.frameloop ? 1 : t.internal.frames
            }
            let eW = new WeakMap;

            function eZ(e, t) {
                return function(n, ...r) {
                    let a = eW.get(n);
                    return a || (a = new n, eW.set(n, a)), e && e(a), Promise.all(r.map(e => new Promise((n, r) => a.load(e, e => {
                        e.scene && Object.assign(e, function(e) {
                            let t = {
                                nodes: {},
                                materials: {}
                            };
                            return e && e.traverse(e => {
                                e.name && (t.nodes[e.name] = e), e.material && !t.materials[e.material.name] && (t.materials[e.material.name] = e.material)
                            }), t
                        }(e.scene)), n(e)
                    }, t, t => r(Error(`Could not load ${e}: ${null==t?void 0:t.message}`))))))
                }
            }

            function eV(e, t, n, r) {
                let a = Array.isArray(t) ? t : [t],
                    i = em(eZ(n, r), [e, ...a], {
                        equal: ex.equ
                    });
                return Array.isArray(t) ? i : i[0]
            }
            eV.preload = function(e, t, n) {
                let r = Array.isArray(t) ? t : [t];
                return eg(eZ(n), [e, ...r])
            }, eV.clear = function(e, t) {
                return eC([e, ...Array.isArray(t) ? t : [t]])
            };
            let {
                invalidate: eq,
                advance: e$
            } = function(e) {
                let t, n, r, a = !1,
                    i = !1;

                function l(o) {
                    for (let u of (n = requestAnimationFrame(l), a = !0, t = 0, ez("before", o), i = !0, e.values())) {
                        var s;
                        (r = u.store.getState()).internal.active && ("always" === r.frameloop || r.internal.frames > 0) && !(null != (s = r.gl.xr) && s.isPresenting) && (t += eY(o, r))
                    }
                    if (i = !1, ez("after", o), 0 === t) return ez("tail", o), a = !1, cancelAnimationFrame(n)
                }
                return {
                    loop: l,
                    invalidate: function t(n, r = 1) {
                        var o;
                        if (!n) return e.forEach(e => t(e.store.getState(), r));
                        null != (o = n.gl.xr) && o.isPresenting || !n.internal.active || "never" === n.frameloop || (r > 1 ? n.internal.frames = Math.min(60, n.internal.frames + r) : i ? n.internal.frames = 2 : n.internal.frames = 1, a || (a = !0, requestAnimationFrame(l)))
                    },
                    advance: function(t, n = !0, r, a) {
                        if (n && ez("before", t), r) eY(t, r, a);
                        else
                            for (let n of e.values()) eY(t, n.store.getState());
                        n && ez("after", t)
                    }
                }
            }(new Map), {
                reconciler: e0,
                applyProps: e1
            } = function(e, t) {
                function n(e, {
                    args: t = [],
                    attach: n,
                    ...r
                }, a) {
                    let i, l = `${e[0].toUpperCase()}${e.slice(1)}`;
                    if ("primitive" === e) {
                        if (void 0 === r.object) throw Error("R3F: Primitives without 'object' are invalid!");
                        i = eH(r.object, {
                            type: e,
                            root: a,
                            attach: n,
                            primitive: !0
                        })
                    } else {
                        let r = eF[l];
                        if (!r) throw Error(`R3F: ${l} is not part of the THREE namespace! Did you forget to extend? See: https://docs.pmnd.rs/react-three-fiber/api/objects#using-3rd-party-objects-declaratively`);
                        if (!Array.isArray(t)) throw Error("R3F: The args prop must be an array!");
                        i = eH(new r(...t), {
                            type: e,
                            root: a,
                            attach: n,
                            memoizedProps: {
                                args: t
                            }
                        })
                    }
                    return void 0 === i.__r3f.attach && (i.isBufferGeometry ? i.__r3f.attach = "geometry" : i.isMaterial && (i.__r3f.attach = "material")), "inject" !== l && eN(i, r), i
                }

                function r(e, t) {
                    let n = !1;
                    if (t) {
                        var r, a;
                        null != (r = t.__r3f) && r.attach ? eP(e, t, t.__r3f.attach) : t.isObject3D && e.isObject3D && (e.add(t), n = !0), n || null == (a = e.__r3f) || a.objects.push(t), t.__r3f || eH(t, {}), t.__r3f.parent = e, eO(t), eU(t)
                    }
                }

                function a(e, t, n) {
                    let r = !1;
                    if (t) {
                        var a, i;
                        if (null != (a = t.__r3f) && a.attach) eP(e, t, t.__r3f.attach);
                        else if (t.isObject3D && e.isObject3D) {
                            t.parent = e, t.dispatchEvent({
                                type: "added"
                            }), e.dispatchEvent({
                                type: "childadded",
                                child: t
                            });
                            let a = e.children.filter(e => e !== t),
                                i = a.indexOf(n);
                            e.children = [...a.slice(0, i), t, ...a.slice(i)], r = !0
                        }
                        r || null == (i = e.__r3f) || i.objects.push(t), t.__r3f || eH(t, {}), t.__r3f.parent = e, eO(t), eU(t)
                    }
                }

                function i(e, t, n = !1) {
                    e && [...e].forEach(e => l(t, e, n))
                }

                function l(e, t, n) {
                    if (t) {
                        var r, a, l, o, s;
                        t.__r3f && (t.__r3f.parent = null), null != (r = e.__r3f) && r.objects && (e.__r3f.objects = e.__r3f.objects.filter(e => e !== t)), null != (a = t.__r3f) && a.attach ? ek(e, t, t.__r3f.attach) : t.isObject3D && e.isObject3D && (e.remove(t), null != (o = t.__r3f) && o.root && function(e, t) {
                            let {
                                internal: n
                            } = e.getState();
                            n.interaction = n.interaction.filter(e => e !== t), n.initialHits = n.initialHits.filter(e => e !== t), n.hovered.forEach((e, r) => {
                                (e.eventObject === t || e.object === t) && n.hovered.delete(r)
                            }), n.capturedMap.forEach((e, r) => {
                                ! function(e, t, n, r) {
                                    let a = n.get(t);
                                    a && (n.delete(t), 0 === n.size && (e.delete(r), a.target.releasePointerCapture(r)))
                                }(n.capturedMap, t, e, r)
                            })
                        }(eT(t), t));
                        let u = null == (l = t.__r3f) ? void 0 : l.primitive,
                            c = !u && (void 0 === n ? null !== t.dispose : n);
                        if (u || (i(null == (s = t.__r3f) ? void 0 : s.objects, t, c), i(t.children, t, c)), delete t.__r3f, c && t.dispose && "Scene" !== t.type) {
                            let e = () => {
                                try {
                                    t.dispose()
                                } catch (e) {}
                            };
                            "undefined" == typeof IS_REACT_ACT_ENVIRONMENT ? (0, ey.unstable_scheduleCallback)(ey.unstable_IdlePriority, e) : e()
                        }
                        eU(e)
                    }
                }
                let o = () => {};
                return {
                    reconciler: ev()({
                        createInstance: n,
                        removeChild: l,
                        appendChild: r,
                        appendInitialChild: r,
                        insertBefore: a,
                        supportsMutation: !0,
                        isPrimaryRenderer: !1,
                        supportsPersistence: !1,
                        supportsHydration: !1,
                        noTimeout: -1,
                        appendChildToContainer: (e, t) => {
                            if (!t) return;
                            let n = e.getState().scene;
                            n.__r3f && (n.__r3f.root = e, r(n, t))
                        },
                        removeChildFromContainer: (e, t) => {
                            t && l(e.getState().scene, t)
                        },
                        insertInContainerBefore: (e, t, n) => {
                            if (!t || !n) return;
                            let r = e.getState().scene;
                            r.__r3f && a(r, t, n)
                        },
                        getRootHostContext: () => null,
                        getChildHostContext: e => e,
                        finalizeInitialChildren(e) {
                            var t;
                            return !!(null != (t = null == e ? void 0 : e.__r3f) ? t : {}).handlers
                        },
                        prepareUpdate(e, t, n, r) {
                            var a;
                            if ((null != (a = null == e ? void 0 : e.__r3f) ? a : {}).primitive && r.object && r.object !== e) return [!0]; {
                                let {
                                    args: t = [],
                                    children: a,
                                    ...i
                                } = r, {
                                    args: l = [],
                                    children: o,
                                    ...s
                                } = n;
                                if (!Array.isArray(t)) throw Error("R3F: the args prop must be an array!");
                                if (t.some((e, t) => e !== l[t])) return [!0];
                                let u = eJ(e, i, s, !0);
                                return u.changes.length ? [!1, u] : null
                            }
                        },
                        commitUpdate(e, [t, a], i, o, s, u) {
                            t ? function(e, t, a, i) {
                                var o;
                                let s = null == (o = e.__r3f) ? void 0 : o.parent;
                                if (!s) return;
                                let u = n(t, a, e.__r3f.root);
                                if (e.children) {
                                    for (let t of e.children) t.__r3f && r(u, t);
                                    e.children = e.children.filter(e => !e.__r3f)
                                }
                                e.__r3f.objects.forEach(e => r(u, e)), e.__r3f.objects = [], e.__r3f.autoRemovedBeforeAppend || l(s, e), u.parent && (u.__r3f.autoRemovedBeforeAppend = !0), r(s, u), u.raycast && u.__r3f.eventCount && eT(u).getState().internal.interaction.push(u), [i, i.alternate].forEach(e => {
                                    null !== e && (e.stateNode = u, e.ref && ("function" == typeof e.ref ? e.ref(u) : e.ref.current = u))
                                })
                            }(e, i, s, u) : eN(e, a)
                        },
                        commitMount(e, t, n, r) {
                            var a;
                            let i = null != (a = e.__r3f) ? a : {};
                            e.raycast && i.handlers && i.eventCount && eT(e).getState().internal.interaction.push(e)
                        },
                        getPublicInstance: e => e,
                        prepareForCommit: () => null,
                        preparePortalMount: e => eH(e.getState().scene),
                        resetAfterCommit: () => {},
                        shouldSetTextContent: () => !1,
                        clearContainer: () => !1,
                        hideInstance(e) {
                            var t;
                            let {
                                attach: n,
                                parent: r
                            } = null != (t = e.__r3f) ? t : {};
                            n && r && ek(r, e, n), e.isObject3D && (e.visible = !1), eU(e)
                        },
                        unhideInstance(e, t) {
                            var n;
                            let {
                                attach: r,
                                parent: a
                            } = null != (n = e.__r3f) ? n : {};
                            r && a && eP(a, e, r), (e.isObject3D && null == t.visible || t.visible) && (e.visible = !0), eU(e)
                        },
                        createTextInstance: o,
                        hideTextInstance: o,
                        unhideTextInstance: o,
                        getCurrentEventPriority: () => t ? t() : ed.DefaultEventPriority,
                        beforeActiveInstanceBlur: () => {},
                        afterActiveInstanceBlur: () => {},
                        detachDeletedInstance: () => {},
                        now: "undefined" != typeof performance && ex.fun(performance.now) ? performance.now : ex.fun(Date.now) ? Date.now : () => 0,
                        scheduleTimeout: ex.fun(setTimeout) ? setTimeout : void 0,
                        cancelTimeout: ex.fun(clearTimeout) ? clearTimeout : void 0
                    }),
                    applyProps: eN
                }
            }(0, function() {
                var e;
                let t = "undefined" != typeof self && self || "undefined" != typeof window && window;
                if (!t) return ed.DefaultEventPriority;
                switch (null == (e = t.event) ? void 0 : e.type) {
                    case "click":
                    case "contextmenu":
                    case "dblclick":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointerup":
                        return ed.DiscreteEventPriority;
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerenter":
                    case "pointerleave":
                    case "wheel":
                        return ed.ContinuousEventPriority;
                    default:
                        return ed.DefaultEventPriority
                }
            });
            e0.injectIntoDevTools({
                bundleType: 0,
                rendererPackageName: "@react-three/fiber",
                version: u.version
            }), u.unstable_act;
            let e9 = null,
                e2 = "https://www.gstatic.com/draco/versioned/decoders/1.5.5/";

            function e8(e = !0, t = !0, n) {
                return r => {
                    n && n(r), e && (e9 || (e9 = new d), e9.setDecoderPath("string" == typeof e ? e : e2), r.setDRACOLoader(e9)), t && r.setMeshoptDecoder("function" == typeof h ? h() : h)
                }
            }
            let e3 = (e, t, n, r) => eV(b, e, e8(t, n, r));
            e3.preload = (e, t, n, r) => eV.preload(b, e, e8(t, n, r)), e3.clear = e => eV.clear(b, e), e3.setDecoderPath = e => {
                e2 = e
            }
        },
        3390: function(e, t) {
            "use strict";

            function n(e, t) {
                var n = e.length;
                for (e.push(t); 0 < n;) {
                    var r = n - 1 >>> 1,
                        a = e[r];
                    if (0 < i(a, t)) e[r] = t, e[n] = a, n = r;
                    else break
                }
            }

            function r(e) {
                return 0 === e.length ? null : e[0]
            }

            function a(e) {
                if (0 === e.length) return null;
                var t = e[0],
                    n = e.pop();
                if (n !== t) {
                    e[0] = n;
                    for (var r = 0, a = e.length, l = a >>> 1; r < l;) {
                        var o = 2 * (r + 1) - 1,
                            s = e[o],
                            u = o + 1,
                            c = e[u];
                        if (0 > i(s, n)) u < a && 0 > i(c, s) ? (e[r] = c, e[u] = n, r = u) : (e[r] = s, e[o] = n, r = o);
                        else if (u < a && 0 > i(c, n)) e[r] = c, e[u] = n, r = u;
                        else break
                    }
                }
                return t
            }

            function i(e, t) {
                var n = e.sortIndex - t.sortIndex;
                return 0 !== n ? n : e.id - t.id
            }
            if ("object" == typeof performance && "function" == typeof performance.now) {
                var l, o = performance;
                t.unstable_now = function() {
                    return o.now()
                }
            } else {
                var s = Date,
                    u = s.now();
                t.unstable_now = function() {
                    return s.now() - u
                }
            }
            var c = [],
                f = [],
                d = 1,
                A = null,
                h = 3,
                p = !1,
                B = !1,
                m = !1,
                g = "function" == typeof setTimeout ? setTimeout : null,
                C = "function" == typeof clearTimeout ? clearTimeout : null,
                b = "undefined" != typeof setImmediate ? setImmediate : null;

            function v(e) {
                for (var t = r(f); null !== t;) {
                    if (null === t.callback) a(f);
                    else if (t.startTime <= e) a(f), t.sortIndex = t.expirationTime, n(c, t);
                    else break;
                    t = r(f)
                }
            }

            function y(e) {
                if (m = !1, v(e), !B) {
                    if (null !== r(c)) B = !0, H(E);
                    else {
                        var t = r(f);
                        null !== t && w(y, t.startTime - e)
                    }
                }
            }

            function E(e, n) {
                B = !1, m && (m = !1, C(M), M = -1), p = !0;
                var i = h;
                try {
                    for (v(n), A = r(c); null !== A && (!(A.expirationTime > n) || e && !G());) {
                        var l = A.callback;
                        if ("function" == typeof l) {
                            A.callback = null, h = A.priorityLevel;
                            var o = l(A.expirationTime <= n);
                            n = t.unstable_now(), "function" == typeof o ? A.callback = o : A === r(c) && a(c), v(n)
                        } else a(c);
                        A = r(c)
                    }
                    if (null !== A) var s = !0;
                    else {
                        var u = r(f);
                        null !== u && w(y, u.startTime - n), s = !1
                    }
                    return s
                } finally {
                    A = null, h = i, p = !1
                }
            }
            "undefined" != typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
            var F = !1,
                I = null,
                M = -1,
                R = 5,
                S = -1;

            function G() {
                return !(t.unstable_now() - S < R)
            }

            function D() {
                if (null !== I) {
                    var e = t.unstable_now();
                    S = e;
                    var n = !0;
                    try {
                        n = I(!0, e)
                    } finally {
                        n ? l() : (F = !1, I = null)
                    }
                } else F = !1
            }
            if ("function" == typeof b) l = function() {
                b(D)
            };
            else if ("undefined" != typeof MessageChannel) {
                var T = new MessageChannel,
                    x = T.port2;
                T.port1.onmessage = D, l = function() {
                    x.postMessage(null)
                }
            } else l = function() {
                g(D, 0)
            };

            function H(e) {
                I = e, F || (F = !0, l())
            }

            function w(e, n) {
                M = g(function() {
                    e(t.unstable_now())
                }, n)
            }
            t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(e) {
                e.callback = null
            }, t.unstable_continueExecution = function() {
                B || p || (B = !0, H(E))
            }, t.unstable_forceFrameRate = function(e) {
                0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : R = 0 < e ? Math.floor(1e3 / e) : 5
            }, t.unstable_getCurrentPriorityLevel = function() {
                return h
            }, t.unstable_getFirstCallbackNode = function() {
                return r(c)
            }, t.unstable_next = function(e) {
                switch (h) {
                    case 1:
                    case 2:
                    case 3:
                        var t = 3;
                        break;
                    default:
                        t = h
                }
                var n = h;
                h = t;
                try {
                    return e()
                } finally {
                    h = n
                }
            }, t.unstable_pauseExecution = function() {}, t.unstable_requestPaint = function() {}, t.unstable_runWithPriority = function(e, t) {
                switch (e) {
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                        break;
                    default:
                        e = 3
                }
                var n = h;
                h = e;
                try {
                    return t()
                } finally {
                    h = n
                }
            }, t.unstable_scheduleCallback = function(e, a, i) {
                var l = t.unstable_now();
                switch (i = "object" == typeof i && null !== i && "number" == typeof(i = i.delay) && 0 < i ? l + i : l, e) {
                    case 1:
                        var o = -1;
                        break;
                    case 2:
                        o = 250;
                        break;
                    case 5:
                        o = 1073741823;
                        break;
                    case 4:
                        o = 1e4;
                        break;
                    default:
                        o = 5e3
                }
                return o = i + o, e = {
                    id: d++,
                    callback: a,
                    priorityLevel: e,
                    startTime: i,
                    expirationTime: o,
                    sortIndex: -1
                }, i > l ? (e.sortIndex = i, n(f, e), null === r(c) && e === r(f) && (m ? (C(M), M = -1) : m = !0, w(y, i - l))) : (e.sortIndex = o, n(c, e), B || p || (B = !0, H(E))), e
            }, t.unstable_shouldYield = G, t.unstable_wrapCallback = function(e) {
                var t = h;
                return function() {
                    var n = h;
                    h = t;
                    try {
                        return e.apply(this, arguments)
                    } finally {
                        h = n
                    }
                }
            }
        },
        428: function(e, t, n) {
            "use strict";
            e.exports = n(3390)
        },
        2707: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return h
                }
            });
            var r, a, i = n(5671),
                l = function() {
                    return r || "undefined" != typeof window && (r = window.gsap) && r.registerPlugin && r
                },
                o = function() {
                    (r = l()) ? (r.registerEase("_CE", h.create), a = 1) : console.warn("Please gsap.registerPlugin(CustomEase)")
                },
                s = function(e) {
                    return ~~(1e3 * e + (e < 0 ? -.5 : .5)) / 1e3
                },
                u = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/gi,
                c = /[cLlsSaAhHvVtTqQ]/g,
                f = function(e) {
                    var t, n = e.length,
                        r = 1e20;
                    for (t = 1; t < n; t += 6) + e[t] < r && (r = +e[t]);
                    return r
                },
                d = function(e, t, n) {
                    n || 0 === n || (n = Math.max(+e[e.length - 1], +e[1]));
                    var r, a = -1 * +e[0],
                        i = -n,
                        l = e.length,
                        o = 1 / (+e[l - 2] + a),
                        s = -t || (Math.abs(+e[l - 1] - +e[1]) < .01 * (+e[l - 2] - +e[0]) ? f(e) + i : +e[l - 1] + i);
                    for (r = 0, s = s ? 1 / s : -o; r < l; r += 2) e[r] = (+e[r] + a) * o, e[r + 1] = (+e[r + 1] + i) * s
                },
                A = function e(t, n, r, a, i, l, o, s, u, c, f) {
                    var d, A = (t + r) / 2,
                        h = (n + a) / 2,
                        p = (r + i) / 2,
                        B = (a + l) / 2,
                        m = (i + o) / 2,
                        g = (l + s) / 2,
                        C = (A + p) / 2,
                        b = (h + B) / 2,
                        v = (p + m) / 2,
                        y = (B + g) / 2,
                        E = (C + v) / 2,
                        F = (b + y) / 2,
                        I = o - t,
                        M = s - n,
                        R = Math.abs((r - o) * M - (a - s) * I),
                        S = Math.abs((i - o) * M - (l - s) * I);
                    return c || (c = [{
                        x: t,
                        y: n
                    }, {
                        x: o,
                        y: s
                    }], f = 1), c.splice(f || c.length - 1, 0, {
                        x: E,
                        y: F
                    }), (R + S) * (R + S) > u * (I * I + M * M) && (d = c.length, e(t, n, A, h, C, b, E, F, u, c, f), e(E, F, v, y, m, g, o, s, u, c, f + 1 + (c.length - d))), c
                },
                h = function() {
                    function e(e, t, n) {
                        a || o(), this.id = e, this.setData(t, n)
                    }
                    var t = e.prototype;
                    return t.setData = function(e, t) {
                        t = t || {};
                        var n, a, l, o, s, f, h, p, B, m = (e = e || "0,0,1,1").match(u),
                            g = 1,
                            C = [],
                            b = [],
                            v = t.precision || 1,
                            y = v <= 1;
                        if (this.data = e, (c.test(e) || ~e.indexOf("M") && 0 > e.indexOf("C")) && (m = (0, i.IZ)(e)[0]), 4 === (n = m.length)) m.unshift(0, 0), m.push(1, 1), n = 8;
                        else if ((n - 2) % 6) throw "Invalid CustomEase";
                        for ((0 != +m[0] || 1 != +m[n - 2]) && d(m, t.height, t.originY), this.segment = m, o = 2; o < n; o += 6) a = {
                            x: +m[o - 2],
                            y: +m[o - 1]
                        }, l = {
                            x: +m[o + 4],
                            y: +m[o + 5]
                        }, C.push(a, l), A(a.x, a.y, +m[o], +m[o + 1], +m[o + 2], +m[o + 3], l.x, l.y, 1 / (2e5 * v), C, C.length - 1);
                        for (o = 0, n = C.length; o < n; o++) h = C[o], p = C[o - 1] || h, (h.x > p.x || p.y !== h.y && p.x === h.x || h === p) && h.x <= 1 ? (p.cx = h.x - p.x, p.cy = h.y - p.y, p.n = h, p.nx = h.x, y && o > 1 && Math.abs(p.cy / p.cx - C[o - 2].cy / C[o - 2].cx) > 2 && (y = 0), p.cx < g && (p.cx ? g = p.cx : (p.cx = .001, o === n - 1 && (p.x -= .001, g = Math.min(g, .001), y = 0)))) : (C.splice(o--, 1), n--);
                        if (s = 1 / (n = 1 / g + 1 | 0), f = 0, h = C[0], y) {
                            for (o = 0; o < n; o++) B = o * s, h.nx < B && (h = C[++f]), a = h.y + (B - h.x) / h.cx * h.cy, b[o] = {
                                x: B,
                                cx: s,
                                y: a,
                                cy: 0,
                                nx: 9
                            }, o && (b[o - 1].cy = a - b[o - 1].y);
                            f = C[C.length - 1], b[n - 1].cy = f.y - a, b[n - 1].cx = f.x - b[b.length - 1].x
                        } else {
                            for (o = 0; o < n; o++) h.nx < o * s && (h = C[++f]), b[o] = h;
                            f < C.length - 1 && (b[o - 1] = C[C.length - 2])
                        }
                        return this.ease = function(e) {
                            var t = b[e * n | 0] || b[n - 1];
                            return t.nx < e && (t = t.n), t.y + (e - t.x) / t.cx * t.cy
                        }, this.ease.custom = this, this.id && r && r.registerEase(this.id, this.ease), this
                    }, t.getSVGData = function(t) {
                        return e.getSVGData(this, t)
                    }, e.create = function(t, n, r) {
                        return new e(t, n, r).ease
                    }, e.register = function(e) {
                        r = e, o()
                    }, e.get = function(e) {
                        return r.parseEase(e)
                    }, e.getSVGData = function(t, n) {
                        var a, l, o, u, c, f, d, A, h, p, B = (n = n || {}).width || 100,
                            m = n.height || 100,
                            g = n.x || 0,
                            C = (n.y || 0) + m,
                            b = r.utils.toArray(n.path)[0];
                        if (n.invert && (m = -m, C = 0), "string" == typeof t && (t = r.parseEase(t)), t.custom && (t = t.custom), t instanceof e) a = (0, i.g5)((0, i.$v)([t.segment.slice(0)], B, 0, 0, -m, g, C));
                        else {
                            for (a = [g, C], u = 1 / (d = Math.max(5, 200 * (n.precision || 1))), d += 2, A = 5 / d, h = s(g + u * B), l = ((p = s(C + -(t(u) * m))) - C) / (h - g), o = 2; o < d; o++) c = s(g + o * u * B), (Math.abs(((f = s(C + -(t(o * u) * m))) - p) / (c - h) - l) > A || o === d - 1) && (a.push(h, p), l = (f - p) / (c - h)), h = c, p = f;
                            a = "M" + a.join(",")
                        }
                        return b && b.setAttribute("d", a), a
                    }, e
                }();
            h.version = "3.14.2", h.headless = !0, l() && r.registerPlugin(h)
        },
        257: function(e, t, n) {
            "use strict";
            var r, a;
            e.exports = (null == (r = n.g.process) ? void 0 : r.env) && "object" == typeof(null == (a = n.g.process) ? void 0 : a.env) ? n.g.process : n(4227)
        },
        4227: function(e) {
            ! function() {
                var t = {
                        229: function(e) {
                            var t, n, r, a = e.exports = {};

                            function i() {
                                throw Error("setTimeout has not been defined")
                            }

                            function l() {
                                throw Error("clearTimeout has not been defined")
                            }

                            function o(e) {
                                if (t === setTimeout) return setTimeout(e, 0);
                                if ((t === i || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
                                try {
                                    return t(e, 0)
                                } catch (n) {
                                    try {
                                        return t.call(null, e, 0)
                                    } catch (n) {
                                        return t.call(this, e, 0)
                                    }
                                }
                            }! function() {
                                try {
                                    t = "function" == typeof setTimeout ? setTimeout : i
                                } catch (e) {
                                    t = i
                                }
                                try {
                                    n = "function" == typeof clearTimeout ? clearTimeout : l
                                } catch (e) {
                                    n = l
                                }
                            }();
                            var s = [],
                                u = !1,
                                c = -1;

                            function f() {
                                u && r && (u = !1, r.length ? s = r.concat(s) : c = -1, s.length && d())
                            }

                            function d() {
                                if (!u) {
                                    var e = o(f);
                                    u = !0;
                                    for (var t = s.length; t;) {
                                        for (r = s, s = []; ++c < t;) r && r[c].run();
                                        c = -1, t = s.length
                                    }
                                    r = null, u = !1,
                                        function(e) {
                                            if (n === clearTimeout) return clearTimeout(e);
                                            if ((n === l || !n) && clearTimeout) return n = clearTimeout, clearTimeout(e);
                                            try {
                                                n(e)
                                            } catch (t) {
                                                try {
                                                    return n.call(null, e)
                                                } catch (t) {
                                                    return n.call(this, e)
                                                }
                                            }
                                        }(e)
                                }
                            }

                            function A(e, t) {
                                this.fun = e, this.array = t
                            }

                            function h() {}
                            a.nextTick = function(e) {
                                var t = Array(arguments.length - 1);
                                if (arguments.length > 1)
                                    for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                                s.push(new A(e, t)), 1 !== s.length || u || o(d)
                            }, A.prototype.run = function() {
                                this.fun.apply(null, this.array)
                            }, a.title = "browser", a.browser = !0, a.env = {}, a.argv = [], a.version = "", a.versions = {}, a.on = h, a.addListener = h, a.once = h, a.off = h, a.removeListener = h, a.removeAllListeners = h, a.emit = h, a.prependListener = h, a.prependOnceListener = h, a.listeners = function(e) {
                                return []
                            }, a.binding = function(e) {
                                throw Error("process.binding is not supported")
                            }, a.cwd = function() {
                                return "/"
                            }, a.chdir = function(e) {
                                throw Error("process.chdir is not supported")
                            }, a.umask = function() {
                                return 0
                            }
                        }
                    },
                    n = {};

                function r(e) {
                    var a = n[e];
                    if (void 0 !== a) return a.exports;
                    var i = n[e] = {
                            exports: {}
                        },
                        l = !0;
                    try {
                        t[e](i, i.exports, r), l = !1
                    } finally {
                        l && delete n[e]
                    }
                    return i.exports
                }
                r.ab = "//";
                var a = r(229);
                e.exports = a
            }()
        },
        6093: function(e, t) {
            "use strict";
            t.ContinuousEventPriority = 4, t.DefaultEventPriority = 16, t.DiscreteEventPriority = 1
        },
        1907: function(e, t, n) {
            e.exports = function(e) {
                "use strict";
                var t, r, a, i, l, o = {},
                    s = n(2265),
                    u = n(260),
                    c = Object.assign;

                function f(e) {
                    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
                    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
                }
                var d = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
                    A = Symbol.for("react.element"),
                    h = Symbol.for("react.portal"),
                    p = Symbol.for("react.fragment"),
                    B = Symbol.for("react.strict_mode"),
                    m = Symbol.for("react.profiler"),
                    g = Symbol.for("react.provider"),
                    C = Symbol.for("react.context"),
                    b = Symbol.for("react.forward_ref"),
                    v = Symbol.for("react.suspense"),
                    y = Symbol.for("react.suspense_list"),
                    E = Symbol.for("react.memo"),
                    F = Symbol.for("react.lazy");
                Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
                var I = Symbol.for("react.offscreen");
                Symbol.for("react.legacy_hidden"), Symbol.for("react.cache"), Symbol.for("react.tracing_marker");
                var M = Symbol.iterator;

                function R(e) {
                    return null === e || "object" != typeof e ? null : "function" == typeof(e = M && e[M] || e["@@iterator"]) ? e : null
                }

                function S(e) {
                    if (null == e) return null;
                    if ("function" == typeof e) return e.displayName || e.name || null;
                    if ("string" == typeof e) return e;
                    switch (e) {
                        case p:
                            return "Fragment";
                        case h:
                            return "Portal";
                        case m:
                            return "Profiler";
                        case B:
                            return "StrictMode";
                        case v:
                            return "Suspense";
                        case y:
                            return "SuspenseList"
                    }
                    if ("object" == typeof e) switch (e.$$typeof) {
                        case C:
                            return (e.displayName || "Context") + ".Consumer";
                        case g:
                            return (e._context.displayName || "Context") + ".Provider";
                        case b:
                            var t = e.render;
                            return (e = e.displayName) || (e = "" !== (e = t.displayName || t.name || "") ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
                        case E:
                            return null !== (t = e.displayName || null) ? t : S(e.type) || "Memo";
                        case F:
                            t = e._payload, e = e._init;
                            try {
                                return S(e(t))
                            } catch (e) {}
                    }
                    return null
                }

                function G(e) {
                    var t = e,
                        n = e;
                    if (e.alternate)
                        for (; t.return;) t = t.return;
                    else {
                        e = t;
                        do 0 != (4098 & (t = e).flags) && (n = t.return), e = t.return; while (e)
                    }
                    return 3 === t.tag ? n : null
                }

                function D(e) {
                    if (G(e) !== e) throw Error(f(188))
                }

                function T(e) {
                    var t = e.alternate;
                    if (!t) {
                        if (null === (t = G(e))) throw Error(f(188));
                        return t !== e ? null : e
                    }
                    for (var n = e, r = t;;) {
                        var a = n.return;
                        if (null === a) break;
                        var i = a.alternate;
                        if (null === i) {
                            if (null !== (r = a.return)) {
                                n = r;
                                continue
                            }
                            break
                        }
                        if (a.child === i.child) {
                            for (i = a.child; i;) {
                                if (i === n) return D(a), e;
                                if (i === r) return D(a), t;
                                i = i.sibling
                            }
                            throw Error(f(188))
                        }
                        if (n.return !== r.return) n = a, r = i;
                        else {
                            for (var l = !1, o = a.child; o;) {
                                if (o === n) {
                                    l = !0, n = a, r = i;
                                    break
                                }
                                if (o === r) {
                                    l = !0, r = a, n = i;
                                    break
                                }
                                o = o.sibling
                            }
                            if (!l) {
                                for (o = i.child; o;) {
                                    if (o === n) {
                                        l = !0, n = i, r = a;
                                        break
                                    }
                                    if (o === r) {
                                        l = !0, r = i, n = a;
                                        break
                                    }
                                    o = o.sibling
                                }
                                if (!l) throw Error(f(189))
                            }
                        }
                        if (n.alternate !== r) throw Error(f(190))
                    }
                    if (3 !== n.tag) throw Error(f(188));
                    return n.stateNode.current === n ? e : t
                }

                function x(e) {
                    return null !== (e = T(e)) ? function e(t) {
                        if (5 === t.tag || 6 === t.tag) return t;
                        for (t = t.child; null !== t;) {
                            var n = e(t);
                            if (null !== n) return n;
                            t = t.sibling
                        }
                        return null
                    }(e) : null
                }
                var H, w = Array.isArray,
                    _ = e.getPublicInstance,
                    P = e.getRootHostContext,
                    k = e.getChildHostContext,
                    J = e.prepareForCommit,
                    L = e.resetAfterCommit,
                    N = e.createInstance,
                    U = e.appendInitialChild,
                    O = e.finalizeInitialChildren,
                    K = e.prepareUpdate,
                    Q = e.shouldSetTextContent,
                    j = e.createTextInstance,
                    X = e.scheduleTimeout,
                    z = e.cancelTimeout,
                    Y = e.noTimeout,
                    W = e.isPrimaryRenderer,
                    Z = e.supportsMutation,
                    V = e.supportsPersistence,
                    q = e.supportsHydration,
                    $ = e.getInstanceFromNode,
                    ee = e.preparePortalMount,
                    et = e.getCurrentEventPriority,
                    en = e.detachDeletedInstance,
                    er = e.supportsMicrotasks,
                    ea = e.scheduleMicrotask,
                    ei = e.supportsTestSelectors,
                    el = e.findFiberRoot,
                    eo = e.getBoundingRect,
                    es = e.getTextContent,
                    eu = e.isHiddenSubtree,
                    ec = e.matchAccessibilityRole,
                    ef = e.setFocusIfFocusable,
                    ed = e.setupIntersectionObserver,
                    eA = e.appendChild,
                    eh = e.appendChildToContainer,
                    ep = e.commitTextUpdate,
                    eB = e.commitMount,
                    em = e.commitUpdate,
                    eg = e.insertBefore,
                    eC = e.insertInContainerBefore,
                    eb = e.removeChild,
                    ev = e.removeChildFromContainer,
                    ey = e.resetTextContent,
                    eE = e.hideInstance,
                    eF = e.hideTextInstance,
                    eI = e.unhideInstance,
                    eM = e.unhideTextInstance,
                    eR = e.clearContainer,
                    eS = e.cloneInstance,
                    eG = e.createContainerChildSet,
                    eD = e.appendChildToContainerChildSet,
                    eT = e.finalizeContainerChildren,
                    ex = e.replaceContainerChildren,
                    eH = e.cloneHiddenInstance,
                    ew = e.cloneHiddenTextInstance,
                    e_ = e.canHydrateInstance,
                    eP = e.canHydrateTextInstance,
                    ek = e.canHydrateSuspenseInstance,
                    eJ = e.isSuspenseInstancePending,
                    eL = e.isSuspenseInstanceFallback,
                    eN = e.registerSuspenseInstanceRetry,
                    eU = e.getNextHydratableSibling,
                    eO = e.getFirstHydratableChild,
                    eK = e.getFirstHydratableChildWithinContainer,
                    eQ = e.getFirstHydratableChildWithinSuspenseInstance,
                    ej = e.hydrateInstance,
                    eX = e.hydrateTextInstance,
                    ez = e.hydrateSuspenseInstance,
                    eY = e.getNextHydratableInstanceAfterSuspenseInstance,
                    eW = e.commitHydratedContainer,
                    eZ = e.commitHydratedSuspenseInstance,
                    eV = e.clearSuspenseBoundary,
                    eq = e.clearSuspenseBoundaryFromContainer,
                    e$ = e.shouldDeleteUnhydratedTailInstances,
                    e0 = e.didNotMatchHydratedContainerTextInstance,
                    e1 = e.didNotMatchHydratedTextInstance;

                function e9(e) {
                    if (void 0 === H) try {
                        throw Error()
                    } catch (e) {
                        var t = e.stack.trim().match(/\n( *(at )?)/);
                        H = t && t[1] || ""
                    }
                    return "\n" + H + e
                }
                var e2 = !1;

                function e8(e, t) {
                    if (!e || e2) return "";
                    e2 = !0;
                    var n = Error.prepareStackTrace;
                    Error.prepareStackTrace = void 0;
                    try {
                        if (t) {
                            if (t = function() {
                                    throw Error()
                                }, Object.defineProperty(t.prototype, "props", {
                                    set: function() {
                                        throw Error()
                                    }
                                }), "object" == typeof Reflect && Reflect.construct) {
                                try {
                                    Reflect.construct(t, [])
                                } catch (e) {
                                    var r = e
                                }
                                Reflect.construct(e, [], t)
                            } else {
                                try {
                                    t.call()
                                } catch (e) {
                                    r = e
                                }
                                e.call(t.prototype)
                            }
                        } else {
                            try {
                                throw Error()
                            } catch (e) {
                                r = e
                            }
                            e()
                        }
                    } catch (t) {
                        if (t && r && "string" == typeof t.stack) {
                            for (var a = t.stack.split("\n"), i = r.stack.split("\n"), l = a.length - 1, o = i.length - 1; 1 <= l && 0 <= o && a[l] !== i[o];) o--;
                            for (; 1 <= l && 0 <= o; l--, o--)
                                if (a[l] !== i[o]) {
                                    if (1 !== l || 1 !== o)
                                        do
                                            if (l--, 0 > --o || a[l] !== i[o]) {
                                                var s = "\n" + a[l].replace(" at new ", " at ");
                                                return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s
                                            }
                                    while (1 <= l && 0 <= o);
                                    break
                                }
                        }
                    } finally {
                        e2 = !1, Error.prepareStackTrace = n
                    }
                    return (e = e ? e.displayName || e.name : "") ? e9(e) : ""
                }
                var e3 = Object.prototype.hasOwnProperty,
                    e6 = [],
                    e4 = -1;

                function e5(e) {
                    return {
                        current: e
                    }
                }

                function e7(e) {
                    0 > e4 || (e.current = e6[e4], e6[e4] = null, e4--)
                }

                function te(e, t) {
                    e6[++e4] = e.current, e.current = t
                }
                var tt = {},
                    tn = e5(tt),
                    tr = e5(!1),
                    ta = tt;

                function ti(e, t) {
                    var n = e.type.contextTypes;
                    if (!n) return tt;
                    var r = e.stateNode;
                    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
                    var a, i = {};
                    for (a in n) i[a] = t[a];
                    return r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i
                }

                function tl(e) {
                    return null != (e = e.childContextTypes)
                }

                function to() {
                    e7(tr), e7(tn)
                }

                function ts(e, t, n) {
                    if (tn.current !== tt) throw Error(f(168));
                    te(tn, t), te(tr, n)
                }

                function tu(e, t, n) {
                    var r = e.stateNode;
                    if (t = t.childContextTypes, "function" != typeof r.getChildContext) return n;
                    for (var a in r = r.getChildContext())
                        if (!(a in t)) throw Error(f(108, function(e) {
                            var t = e.type;
                            switch (e.tag) {
                                case 24:
                                    return "Cache";
                                case 9:
                                    return (t.displayName || "Context") + ".Consumer";
                                case 10:
                                    return (t._context.displayName || "Context") + ".Provider";
                                case 18:
                                    return "DehydratedFragment";
                                case 11:
                                    return e = (e = t.render).displayName || e.name || "", t.displayName || ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef");
                                case 7:
                                    return "Fragment";
                                case 5:
                                    return t;
                                case 4:
                                    return "Portal";
                                case 3:
                                    return "Root";
                                case 6:
                                    return "Text";
                                case 16:
                                    return S(t);
                                case 8:
                                    return t === B ? "StrictMode" : "Mode";
                                case 22:
                                    return "Offscreen";
                                case 12:
                                    return "Profiler";
                                case 21:
                                    return "Scope";
                                case 13:
                                    return "Suspense";
                                case 19:
                                    return "SuspenseList";
                                case 25:
                                    return "TracingMarker";
                                case 1:
                                case 0:
                                case 17:
                                case 2:
                                case 14:
                                case 15:
                                    if ("function" == typeof t) return t.displayName || t.name || null;
                                    if ("string" == typeof t) return t
                            }
                            return null
                        }(e) || "Unknown", a));
                    return c({}, n, r)
                }

                function tc(e) {
                    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || tt, ta = tn.current, te(tn, e), te(tr, tr.current), !0
                }

                function tf(e, t, n) {
                    var r = e.stateNode;
                    if (!r) throw Error(f(169));
                    n ? (e = tu(e, t, ta), r.__reactInternalMemoizedMergedChildContext = e, e7(tr), e7(tn), te(tn, e)) : e7(tr), te(tr, n)
                }
                var td = Math.clz32 ? Math.clz32 : function(e) {
                        return 0 == (e >>>= 0) ? 32 : 31 - (tA(e) / th | 0) | 0
                    },
                    tA = Math.log,
                    th = Math.LN2,
                    tp = 64,
                    tB = 4194304;

                function tm(e) {
                    switch (e & -e) {
                        case 1:
                            return 1;
                        case 2:
                            return 2;
                        case 4:
                            return 4;
                        case 8:
                            return 8;
                        case 16:
                            return 16;
                        case 32:
                            return 32;
                        case 64:
                        case 128:
                        case 256:
                        case 512:
                        case 1024:
                        case 2048:
                        case 4096:
                        case 8192:
                        case 16384:
                        case 32768:
                        case 65536:
                        case 131072:
                        case 262144:
                        case 524288:
                        case 1048576:
                        case 2097152:
                            return 4194240 & e;
                        case 4194304:
                        case 8388608:
                        case 16777216:
                        case 33554432:
                        case 67108864:
                            return 130023424 & e;
                        case 134217728:
                            return 134217728;
                        case 268435456:
                            return 268435456;
                        case 536870912:
                            return 536870912;
                        case 1073741824:
                            return 1073741824;
                        default:
                            return e
                    }
                }

                function tg(e, t) {
                    var n = e.pendingLanes;
                    if (0 === n) return 0;
                    var r = 0,
                        a = e.suspendedLanes,
                        i = e.pingedLanes,
                        l = 268435455 & n;
                    if (0 !== l) {
                        var o = l & ~a;
                        0 !== o ? r = tm(o) : 0 != (i &= l) && (r = tm(i))
                    } else 0 != (l = n & ~a) ? r = tm(l) : 0 !== i && (r = tm(i));
                    if (0 === r) return 0;
                    if (0 !== t && t !== r && 0 == (t & a) && ((a = r & -r) >= (i = t & -t) || 16 === a && 0 != (4194240 & i))) return t;
                    if (0 != (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes))
                        for (e = e.entanglements, t &= r; 0 < t;) a = 1 << (n = 31 - td(t)), r |= e[n], t &= ~a;
                    return r
                }

                function tC(e) {
                    return 0 != (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0
                }

                function tb(e) {
                    for (var t = [], n = 0; 31 > n; n++) t.push(e);
                    return t
                }

                function tv(e, t, n) {
                    e.pendingLanes |= t, 536870912 !== t && (e.suspendedLanes = 0, e.pingedLanes = 0), (e = e.eventTimes)[t = 31 - td(t)] = n
                }

                function ty(e, t) {
                    var n = e.entangledLanes |= t;
                    for (e = e.entanglements; n;) {
                        var r = 31 - td(n),
                            a = 1 << r;
                        a & t | e[r] & t && (e[r] |= t), n &= ~a
                    }
                }
                var tE = 0;

                function tF(e) {
                    return 1 < (e &= -e) ? 4 < e ? 0 != (268435455 & e) ? 16 : 536870912 : 4 : 1
                }
                var tI = u.unstable_scheduleCallback,
                    tM = u.unstable_cancelCallback,
                    tR = u.unstable_shouldYield,
                    tS = u.unstable_requestPaint,
                    tG = u.unstable_now,
                    tD = u.unstable_ImmediatePriority,
                    tT = u.unstable_UserBlockingPriority,
                    tx = u.unstable_NormalPriority,
                    tH = u.unstable_IdlePriority,
                    tw = null,
                    t_ = null,
                    tP = "function" == typeof Object.is ? Object.is : function(e, t) {
                        return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
                    },
                    tk = null,
                    tJ = !1,
                    tL = !1;

                function tN(e) {
                    null === tk ? tk = [e] : tk.push(e)
                }

                function tU() {
                    if (!tL && null !== tk) {
                        tL = !0;
                        var e = 0,
                            t = tE;
                        try {
                            var n = tk;
                            for (tE = 1; e < n.length; e++) {
                                var r = n[e];
                                do r = r(!0); while (null !== r)
                            }
                            tk = null, tJ = !1
                        } catch (t) {
                            throw null !== tk && (tk = tk.slice(e + 1)), tI(tD, tU), t
                        } finally {
                            tE = t, tL = !1
                        }
                    }
                    return null
                }
                var tO = d.ReactCurrentBatchConfig;

                function tK(e, t) {
                    if (tP(e, t)) return !0;
                    if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
                    var n = Object.keys(e),
                        r = Object.keys(t);
                    if (n.length !== r.length) return !1;
                    for (r = 0; r < n.length; r++) {
                        var a = n[r];
                        if (!e3.call(t, a) || !tP(e[a], t[a])) return !1
                    }
                    return !0
                }

                function tQ(e, t) {
                    if (e && e.defaultProps)
                        for (var n in t = c({}, t), e = e.defaultProps) void 0 === t[n] && (t[n] = e[n]);
                    return t
                }
                var tj = e5(null),
                    tX = null,
                    tz = null,
                    tY = null;

                function tW() {
                    tY = tz = tX = null
                }

                function tZ(e, t, n) {
                    W ? (te(tj, t._currentValue), t._currentValue = n) : (te(tj, t._currentValue2), t._currentValue2 = n)
                }

                function tV(e) {
                    var t = tj.current;
                    e7(tj), W ? e._currentValue = t : e._currentValue2 = t
                }

                function tq(e, t, n) {
                    for (; null !== e;) {
                        var r = e.alternate;
                        if ((e.childLanes & t) !== t ? (e.childLanes |= t, null !== r && (r.childLanes |= t)) : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
                        e = e.return
                    }
                }

                function t$(e, t) {
                    tX = e, tY = tz = null, null !== (e = e.dependencies) && null !== e.firstContext && (0 != (e.lanes & t) && (r0 = !0), e.firstContext = null)
                }

                function t0(e) {
                    var t = W ? e._currentValue : e._currentValue2;
                    if (tY !== e) {
                        if (e = {
                                context: e,
                                memoizedValue: t,
                                next: null
                            }, null === tz) {
                            if (null === tX) throw Error(f(308));
                            tz = e, tX.dependencies = {
                                lanes: 0,
                                firstContext: e
                            }
                        } else tz = tz.next = e
                    }
                    return t
                }
                var t1 = null,
                    t9 = !1;

                function t2(e) {
                    e.updateQueue = {
                        baseState: e.memoizedState,
                        firstBaseUpdate: null,
                        lastBaseUpdate: null,
                        shared: {
                            pending: null,
                            interleaved: null,
                            lanes: 0
                        },
                        effects: null
                    }
                }

                function t8(e, t) {
                    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
                        baseState: e.baseState,
                        firstBaseUpdate: e.firstBaseUpdate,
                        lastBaseUpdate: e.lastBaseUpdate,
                        shared: e.shared,
                        effects: e.effects
                    })
                }

                function t3(e, t) {
                    return {
                        eventTime: e,
                        lane: t,
                        tag: 0,
                        payload: null,
                        callback: null,
                        next: null
                    }
                }

                function t6(e, t) {
                    var n = e.updateQueue;
                    null !== n && (n = n.shared, null !== aY && 0 != (1 & e.mode) && 0 == (2 & az) ? (null === (e = n.interleaved) ? (t.next = t, null === t1 ? t1 = [n] : t1.push(n)) : (t.next = e.next, e.next = t), n.interleaved = t) : (null === (e = n.pending) ? t.next = t : (t.next = e.next, e.next = t), n.pending = t))
                }

                function t4(e, t, n) {
                    if (null !== (t = t.updateQueue) && (t = t.shared, 0 != (4194240 & n))) {
                        var r = t.lanes;
                        r &= e.pendingLanes, n |= r, t.lanes = n, ty(e, n)
                    }
                }

                function t5(e, t) {
                    var n = e.updateQueue,
                        r = e.alternate;
                    if (null !== r && n === (r = r.updateQueue)) {
                        var a = null,
                            i = null;
                        if (null !== (n = n.firstBaseUpdate)) {
                            do {
                                var l = {
                                    eventTime: n.eventTime,
                                    lane: n.lane,
                                    tag: n.tag,
                                    payload: n.payload,
                                    callback: n.callback,
                                    next: null
                                };
                                null === i ? a = i = l : i = i.next = l, n = n.next
                            } while (null !== n);
                            null === i ? a = i = t : i = i.next = t
                        } else a = i = t;
                        n = {
                            baseState: r.baseState,
                            firstBaseUpdate: a,
                            lastBaseUpdate: i,
                            shared: r.shared,
                            effects: r.effects
                        }, e.updateQueue = n;
                        return
                    }
                    null === (e = n.lastBaseUpdate) ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
                }

                function t7(e, t, n, r) {
                    var a = e.updateQueue;
                    t9 = !1;
                    var i = a.firstBaseUpdate,
                        l = a.lastBaseUpdate,
                        o = a.shared.pending;
                    if (null !== o) {
                        a.shared.pending = null;
                        var s = o,
                            u = s.next;
                        s.next = null, null === l ? i = u : l.next = u, l = s;
                        var f = e.alternate;
                        null !== f && (o = (f = f.updateQueue).lastBaseUpdate) !== l && (null === o ? f.firstBaseUpdate = u : o.next = u, f.lastBaseUpdate = s)
                    }
                    if (null !== i) {
                        var d = a.baseState;
                        for (l = 0, f = u = s = null, o = i;;) {
                            var A = o.lane,
                                h = o.eventTime;
                            if ((r & A) === A) {
                                null !== f && (f = f.next = {
                                    eventTime: h,
                                    lane: 0,
                                    tag: o.tag,
                                    payload: o.payload,
                                    callback: o.callback,
                                    next: null
                                });
                                e: {
                                    var p = e,
                                        B = o;
                                    switch (A = t, h = n, B.tag) {
                                        case 1:
                                            if ("function" == typeof(p = B.payload)) {
                                                d = p.call(h, d, A);
                                                break e
                                            }
                                            d = p;
                                            break e;
                                        case 3:
                                            p.flags = -65537 & p.flags | 128;
                                        case 0:
                                            if (null == (A = "function" == typeof(p = B.payload) ? p.call(h, d, A) : p)) break e;
                                            d = c({}, d, A);
                                            break e;
                                        case 2:
                                            t9 = !0
                                    }
                                }
                                null !== o.callback && 0 !== o.lane && (e.flags |= 64, null === (A = a.effects) ? a.effects = [o] : A.push(o))
                            } else h = {
                                eventTime: h,
                                lane: A,
                                tag: o.tag,
                                payload: o.payload,
                                callback: o.callback,
                                next: null
                            }, null === f ? (u = f = h, s = d) : f = f.next = h, l |= A;
                            if (null === (o = o.next)) {
                                if (null === (o = a.shared.pending)) break;
                                o = (A = o).next, A.next = null, a.lastBaseUpdate = A, a.shared.pending = null
                            }
                        }
                        if (null === f && (s = d), a.baseState = s, a.firstBaseUpdate = u, a.lastBaseUpdate = f, null !== (t = a.shared.interleaved)) {
                            a = t;
                            do l |= a.lane, a = a.next; while (a !== t)
                        } else null === i && (a.shared.lanes = 0);
                        a1 |= l, e.lanes = l, e.memoizedState = d
                    }
                }

                function ne(e, t, n) {
                    if (e = t.effects, t.effects = null, null !== e)
                        for (t = 0; t < e.length; t++) {
                            var r = e[t],
                                a = r.callback;
                            if (null !== a) {
                                if (r.callback = null, r = n, "function" != typeof a) throw Error(f(191, a));
                                a.call(r)
                            }
                        }
                }
                var nt = (new s.Component).refs;

                function nn(e, t, n, r) {
                    n = null == (n = n(r, t = e.memoizedState)) ? t : c({}, t, n), e.memoizedState = n, 0 === e.lanes && (e.updateQueue.baseState = n)
                }
                var nr = {
                    isMounted: function(e) {
                        return !!(e = e._reactInternals) && G(e) === e
                    },
                    enqueueSetState: function(e, t, n) {
                        e = e._reactInternals;
                        var r = ic(),
                            a = id(e),
                            i = t3(r, a);
                        i.payload = t, null != n && (i.callback = n), t6(e, i), null !== (t = iA(e, a, r)) && t4(t, e, a)
                    },
                    enqueueReplaceState: function(e, t, n) {
                        e = e._reactInternals;
                        var r = ic(),
                            a = id(e),
                            i = t3(r, a);
                        i.tag = 1, i.payload = t, null != n && (i.callback = n), t6(e, i), null !== (t = iA(e, a, r)) && t4(t, e, a)
                    },
                    enqueueForceUpdate: function(e, t) {
                        e = e._reactInternals;
                        var n = ic(),
                            r = id(e),
                            a = t3(n, r);
                        a.tag = 2, null != t && (a.callback = t), t6(e, a), null !== (t = iA(e, r, n)) && t4(t, e, r)
                    }
                };

                function na(e, t, n, r, a, i, l) {
                    return "function" == typeof(e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, i, l) : !t.prototype || !t.prototype.isPureReactComponent || !tK(n, r) || !tK(a, i)
                }

                function ni(e, t, n) {
                    var r = !1,
                        a = tt,
                        i = t.contextType;
                    return "object" == typeof i && null !== i ? i = t0(i) : (a = tl(t) ? ta : tn.current, i = (r = null != (r = t.contextTypes)) ? ti(e, a) : tt), t = new t(n, i), e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null, t.updater = nr, e.stateNode = t, t._reactInternals = e, r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = a, e.__reactInternalMemoizedMaskedChildContext = i), t
                }

                function nl(e, t, n, r) {
                    e = t.state, "function" == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r), "function" == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && nr.enqueueReplaceState(t, t.state, null)
                }

                function no(e, t, n, r) {
                    var a = e.stateNode;
                    a.props = n, a.state = e.memoizedState, a.refs = nt, t2(e);
                    var i = t.contextType;
                    "object" == typeof i && null !== i ? a.context = t0(i) : (i = tl(t) ? ta : tn.current, a.context = ti(e, i)), a.state = e.memoizedState, "function" == typeof(i = t.getDerivedStateFromProps) && (nn(e, t, i, n), a.state = e.memoizedState), "function" == typeof t.getDerivedStateFromProps || "function" == typeof a.getSnapshotBeforeUpdate || "function" != typeof a.UNSAFE_componentWillMount && "function" != typeof a.componentWillMount || (t = a.state, "function" == typeof a.componentWillMount && a.componentWillMount(), "function" == typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount(), t !== a.state && nr.enqueueReplaceState(a, a.state, null), t7(e, n, a, r), a.state = e.memoizedState), "function" == typeof a.componentDidMount && (e.flags |= 4194308)
                }
                var ns = [],
                    nu = 0,
                    nc = null,
                    nf = 0,
                    nd = [],
                    nA = 0,
                    nh = null,
                    np = 1,
                    nB = "";

                function nm(e, t) {
                    ns[nu++] = nf, ns[nu++] = nc, nc = e, nf = t
                }

                function ng(e, t, n) {
                    nd[nA++] = np, nd[nA++] = nB, nd[nA++] = nh, nh = e;
                    var r = np;
                    e = nB;
                    var a = 32 - td(r) - 1;
                    r &= ~(1 << a), n += 1;
                    var i = 32 - td(t) + a;
                    if (30 < i) {
                        var l = a - a % 5;
                        i = (r & (1 << l) - 1).toString(32), r >>= l, a -= l, np = 1 << 32 - td(t) + a | n << a | r, nB = i + e
                    } else np = 1 << i | n << a | r, nB = e
                }

                function nC(e) {
                    null !== e.return && (nm(e, 1), ng(e, 1, 0))
                }

                function nb(e) {
                    for (; e === nc;) nc = ns[--nu], ns[nu] = null, nf = ns[--nu], ns[nu] = null;
                    for (; e === nh;) nh = nd[--nA], nd[nA] = null, nB = nd[--nA], nd[nA] = null, np = nd[--nA], nd[nA] = null
                }
                var nv = null,
                    ny = null,
                    nE = !1,
                    nF = !1,
                    nI = null;

                function nM(e, t) {
                    var n = iL(5, null, null, 0);
                    n.elementType = "DELETED", n.stateNode = t, n.return = e, null === (t = e.deletions) ? (e.deletions = [n], e.flags |= 16) : t.push(n)
                }

                function nR(e, t) {
                    switch (e.tag) {
                        case 5:
                            return null !== (t = e_(t, e.type, e.pendingProps)) && (e.stateNode = t, nv = e, ny = eO(t), !0);
                        case 6:
                            return null !== (t = eP(t, e.pendingProps)) && (e.stateNode = t, nv = e, ny = null, !0);
                        case 13:
                            if (null !== (t = ek(t))) {
                                var n = null !== nh ? {
                                    id: np,
                                    overflow: nB
                                } : null;
                                return e.memoizedState = {
                                    dehydrated: t,
                                    treeContext: n,
                                    retryLane: 1073741824
                                }, (n = iL(18, null, null, 0)).stateNode = t, n.return = e, e.child = n, nv = e, ny = null, !0
                            }
                            return !1;
                        default:
                            return !1
                    }
                }

                function nS(e) {
                    return 0 != (1 & e.mode) && 0 == (128 & e.flags)
                }

                function nG(e) {
                    if (nE) {
                        var t = ny;
                        if (t) {
                            var n = t;
                            if (!nR(e, t)) {
                                if (nS(e)) throw Error(f(418));
                                t = eU(n);
                                var r = nv;
                                t && nR(e, t) ? nM(r, n) : (e.flags = -4097 & e.flags | 2, nE = !1, nv = e)
                            }
                        } else {
                            if (nS(e)) throw Error(f(418));
                            e.flags = -4097 & e.flags | 2, nE = !1, nv = e
                        }
                    }
                }

                function nD(e) {
                    for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;) e = e.return;
                    nv = e
                }

                function nT(e) {
                    if (!q || e !== nv) return !1;
                    if (!nE) return nD(e), nE = !0, !1;
                    if (3 !== e.tag && (5 !== e.tag || e$(e.type) && !Q(e.type, e.memoizedProps))) {
                        var t = ny;
                        if (t) {
                            if (nS(e)) {
                                for (e = ny; e;) e = eU(e);
                                throw Error(f(418))
                            }
                            for (; t;) nM(e, t), t = eU(t)
                        }
                    }
                    if (nD(e), 13 === e.tag) {
                        if (!q) throw Error(f(316));
                        if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(f(317));
                        ny = eY(e)
                    } else ny = nv ? eU(e.stateNode) : null;
                    return !0
                }

                function nx() {
                    q && (ny = nv = null, nF = nE = !1)
                }

                function nH(e) {
                    null === nI ? nI = [e] : nI.push(e)
                }

                function nw(e, t, n) {
                    if (null !== (e = n.ref) && "function" != typeof e && "object" != typeof e) {
                        if (n._owner) {
                            if (n = n._owner) {
                                if (1 !== n.tag) throw Error(f(309));
                                var r = n.stateNode
                            }
                            if (!r) throw Error(f(147, e));
                            var a = r,
                                i = "" + e;
                            return null !== t && null !== t.ref && "function" == typeof t.ref && t.ref._stringRef === i ? t.ref : ((t = function(e) {
                                var t = a.refs;
                                t === nt && (t = a.refs = {}), null === e ? delete t[i] : t[i] = e
                            })._stringRef = i, t)
                        }
                        if ("string" != typeof e) throw Error(f(284));
                        if (!n._owner) throw Error(f(290, e))
                    }
                    return e
                }

                function n_(e, t) {
                    throw Error(f(31, "[object Object]" === (e = Object.prototype.toString.call(t)) ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
                }

                function nP(e) {
                    return (0, e._init)(e._payload)
                }

                function nk(e) {
                    function t(t, n) {
                        if (e) {
                            var r = t.deletions;
                            null === r ? (t.deletions = [n], t.flags |= 16) : r.push(n)
                        }
                    }

                    function n(n, r) {
                        if (!e) return null;
                        for (; null !== r;) t(n, r), r = r.sibling;
                        return null
                    }

                    function r(e, t) {
                        for (e = new Map; null !== t;) null !== t.key ? e.set(t.key, t) : e.set(t.index, t), t = t.sibling;
                        return e
                    }

                    function a(e, t) {
                        return (e = iU(e, t)).index = 0, e.sibling = null, e
                    }

                    function i(t, n, r) {
                        return (t.index = r, e) ? null !== (r = t.alternate) ? (r = r.index) < n ? (t.flags |= 2, n) : r : (t.flags |= 2, n) : (t.flags |= 1048576, n)
                    }

                    function l(t) {
                        return e && null === t.alternate && (t.flags |= 2), t
                    }

                    function o(e, t, n, r) {
                        return null === t || 6 !== t.tag ? (t = ij(n, e.mode, r)).return = e : (t = a(t, n)).return = e, t
                    }

                    function s(e, t, n, r) {
                        var i = n.type;
                        return i === p ? c(e, t, n.props.children, r, n.key) : (null !== t && (t.elementType === i || "object" == typeof i && null !== i && i.$$typeof === F && nP(i) === t.type) ? (r = a(t, n.props)).ref = nw(e, t, n) : (r = iO(n.type, n.key, n.props, null, e.mode, r)).ref = nw(e, t, n), r.return = e, r)
                    }

                    function u(e, t, n, r) {
                        return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? (t = iX(n, e.mode, r)).return = e : (t = a(t, n.children || [])).return = e, t
                    }

                    function c(e, t, n, r, i) {
                        return null === t || 7 !== t.tag ? (t = iK(n, e.mode, r, i)).return = e : (t = a(t, n)).return = e, t
                    }

                    function d(e, t, n) {
                        if ("string" == typeof t && "" !== t || "number" == typeof t) return (t = ij("" + t, e.mode, n)).return = e, t;
                        if ("object" == typeof t && null !== t) {
                            switch (t.$$typeof) {
                                case A:
                                    return (n = iO(t.type, t.key, t.props, null, e.mode, n)).ref = nw(e, null, t), n.return = e, n;
                                case h:
                                    return (t = iX(t, e.mode, n)).return = e, t;
                                case F:
                                    return d(e, (0, t._init)(t._payload), n)
                            }
                            if (w(t) || R(t)) return (t = iK(t, e.mode, n, null)).return = e, t;
                            n_(e, t)
                        }
                        return null
                    }

                    function B(e, t, n, r) {
                        var a = null !== t ? t.key : null;
                        if ("string" == typeof n && "" !== n || "number" == typeof n) return null !== a ? null : o(e, t, "" + n, r);
                        if ("object" == typeof n && null !== n) {
                            switch (n.$$typeof) {
                                case A:
                                    return n.key === a ? s(e, t, n, r) : null;
                                case h:
                                    return n.key === a ? u(e, t, n, r) : null;
                                case F:
                                    return B(e, t, (a = n._init)(n._payload), r)
                            }
                            if (w(n) || R(n)) return null !== a ? null : c(e, t, n, r, null);
                            n_(e, n)
                        }
                        return null
                    }

                    function m(e, t, n, r, a) {
                        if ("string" == typeof r && "" !== r || "number" == typeof r) return o(t, e = e.get(n) || null, "" + r, a);
                        if ("object" == typeof r && null !== r) {
                            switch (r.$$typeof) {
                                case A:
                                    return s(t, e = e.get(null === r.key ? n : r.key) || null, r, a);
                                case h:
                                    return u(t, e = e.get(null === r.key ? n : r.key) || null, r, a);
                                case F:
                                    return m(e, t, n, (0, r._init)(r._payload), a)
                            }
                            if (w(r) || R(r)) return c(t, e = e.get(n) || null, r, a, null);
                            n_(t, r)
                        }
                        return null
                    }
                    return function o(s, u, c, g) {
                        if ("object" == typeof c && null !== c && c.type === p && null === c.key && (c = c.props.children), "object" == typeof c && null !== c) {
                            switch (c.$$typeof) {
                                case A:
                                    e: {
                                        for (var C = c.key, b = u; null !== b;) {
                                            if (b.key === C) {
                                                if ((C = c.type) === p) {
                                                    if (7 === b.tag) {
                                                        n(s, b.sibling), (u = a(b, c.props.children)).return = s, s = u;
                                                        break e
                                                    }
                                                } else if (b.elementType === C || "object" == typeof C && null !== C && C.$$typeof === F && nP(C) === b.type) {
                                                    n(s, b.sibling), (u = a(b, c.props)).ref = nw(s, b, c), u.return = s, s = u;
                                                    break e
                                                }
                                                n(s, b);
                                                break
                                            }
                                            t(s, b), b = b.sibling
                                        }
                                        c.type === p ? ((u = iK(c.props.children, s.mode, g, c.key)).return = s, s = u) : ((g = iO(c.type, c.key, c.props, null, s.mode, g)).ref = nw(s, u, c), g.return = s, s = g)
                                    }
                                    return l(s);
                                case h:
                                    e: {
                                        for (b = c.key; null !== u;) {
                                            if (u.key === b) {
                                                if (4 === u.tag && u.stateNode.containerInfo === c.containerInfo && u.stateNode.implementation === c.implementation) {
                                                    n(s, u.sibling), (u = a(u, c.children || [])).return = s, s = u;
                                                    break e
                                                }
                                                n(s, u);
                                                break
                                            }
                                            t(s, u), u = u.sibling
                                        }(u = iX(c, s.mode, g)).return = s,
                                        s = u
                                    }
                                    return l(s);
                                case F:
                                    return o(s, u, (b = c._init)(c._payload), g)
                            }
                            if (w(c)) return function(a, l, o, s) {
                                for (var u = null, c = null, f = l, A = l = 0, h = null; null !== f && A < o.length; A++) {
                                    f.index > A ? (h = f, f = null) : h = f.sibling;
                                    var p = B(a, f, o[A], s);
                                    if (null === p) {
                                        null === f && (f = h);
                                        break
                                    }
                                    e && f && null === p.alternate && t(a, f), l = i(p, l, A), null === c ? u = p : c.sibling = p, c = p, f = h
                                }
                                if (A === o.length) return n(a, f), nE && nm(a, A), u;
                                if (null === f) {
                                    for (; A < o.length; A++) null !== (f = d(a, o[A], s)) && (l = i(f, l, A), null === c ? u = f : c.sibling = f, c = f);
                                    return nE && nm(a, A), u
                                }
                                for (f = r(a, f); A < o.length; A++) null !== (h = m(f, a, A, o[A], s)) && (e && null !== h.alternate && f.delete(null === h.key ? A : h.key), l = i(h, l, A), null === c ? u = h : c.sibling = h, c = h);
                                return e && f.forEach(function(e) {
                                    return t(a, e)
                                }), nE && nm(a, A), u
                            }(s, u, c, g);
                            if (R(c)) return function(a, l, o, s) {
                                var u = R(o);
                                if ("function" != typeof u) throw Error(f(150));
                                if (null == (o = u.call(o))) throw Error(f(151));
                                for (var c = u = null, A = l, h = l = 0, p = null, g = o.next(); null !== A && !g.done; h++, g = o.next()) {
                                    A.index > h ? (p = A, A = null) : p = A.sibling;
                                    var C = B(a, A, g.value, s);
                                    if (null === C) {
                                        null === A && (A = p);
                                        break
                                    }
                                    e && A && null === C.alternate && t(a, A), l = i(C, l, h), null === c ? u = C : c.sibling = C, c = C, A = p
                                }
                                if (g.done) return n(a, A), nE && nm(a, h), u;
                                if (null === A) {
                                    for (; !g.done; h++, g = o.next()) null !== (g = d(a, g.value, s)) && (l = i(g, l, h), null === c ? u = g : c.sibling = g, c = g);
                                    return nE && nm(a, h), u
                                }
                                for (A = r(a, A); !g.done; h++, g = o.next()) null !== (g = m(A, a, h, g.value, s)) && (e && null !== g.alternate && A.delete(null === g.key ? h : g.key), l = i(g, l, h), null === c ? u = g : c.sibling = g, c = g);
                                return e && A.forEach(function(e) {
                                    return t(a, e)
                                }), nE && nm(a, h), u
                            }(s, u, c, g);
                            n_(s, c)
                        }
                        return "string" == typeof c && "" !== c || "number" == typeof c ? (c = "" + c, null !== u && 6 === u.tag ? (n(s, u.sibling), (u = a(u, c)).return = s) : (n(s, u), (u = ij(c, s.mode, g)).return = s), l(s = u)) : n(s, u)
                    }
                }
                var nJ = nk(!0),
                    nL = nk(!1),
                    nN = {},
                    nU = e5(nN),
                    nO = e5(nN),
                    nK = e5(nN);

                function nQ(e) {
                    if (e === nN) throw Error(f(174));
                    return e
                }

                function nj(e, t) {
                    te(nK, t), te(nO, e), te(nU, nN), e = P(t), e7(nU), te(nU, e)
                }

                function nX() {
                    e7(nU), e7(nO), e7(nK)
                }

                function nz(e) {
                    var t = nQ(nK.current),
                        n = nQ(nU.current);
                    t = k(n, e.type, t), n !== t && (te(nO, e), te(nU, t))
                }

                function nY(e) {
                    nO.current === e && (e7(nU), e7(nO))
                }
                var nW = e5(0);

                function nZ(e) {
                    for (var t = e; null !== t;) {
                        if (13 === t.tag) {
                            var n = t.memoizedState;
                            if (null !== n && (null === (n = n.dehydrated) || eJ(n) || eL(n))) return t
                        } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
                            if (0 != (128 & t.flags)) return t
                        } else if (null !== t.child) {
                            t.child.return = t, t = t.child;
                            continue
                        }
                        if (t === e) break;
                        for (; null === t.sibling;) {
                            if (null === t.return || t.return === e) return null;
                            t = t.return
                        }
                        t.sibling.return = t.return, t = t.sibling
                    }
                    return null
                }
                var nV = [];

                function nq() {
                    for (var e = 0; e < nV.length; e++) {
                        var t = nV[e];
                        W ? t._workInProgressVersionPrimary = null : t._workInProgressVersionSecondary = null
                    }
                    nV.length = 0
                }
                var n$ = d.ReactCurrentDispatcher,
                    n0 = d.ReactCurrentBatchConfig,
                    n1 = 0,
                    n9 = null,
                    n2 = null,
                    n8 = null,
                    n3 = !1,
                    n6 = !1,
                    n4 = 0,
                    n5 = 0;

                function n7() {
                    throw Error(f(321))
                }

                function re(e, t) {
                    if (null === t) return !1;
                    for (var n = 0; n < t.length && n < e.length; n++)
                        if (!tP(e[n], t[n])) return !1;
                    return !0
                }

                function rt(e, t, n, r, a, i) {
                    if (n1 = i, n9 = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, n$.current = null === e || null === e.memoizedState ? rk : rJ, e = n(r, a), n6) {
                        i = 0;
                        do {
                            if (n6 = !1, n4 = 0, 25 <= i) throw Error(f(301));
                            i += 1, n8 = n2 = null, t.updateQueue = null, n$.current = rL, e = n(r, a)
                        } while (n6)
                    }
                    if (n$.current = rP, t = null !== n2 && null !== n2.next, n1 = 0, n8 = n2 = n9 = null, n3 = !1, t) throw Error(f(300));
                    return e
                }

                function rn() {
                    var e = 0 !== n4;
                    return n4 = 0, e
                }

                function rr() {
                    var e = {
                        memoizedState: null,
                        baseState: null,
                        baseQueue: null,
                        queue: null,
                        next: null
                    };
                    return null === n8 ? n9.memoizedState = n8 = e : n8 = n8.next = e, n8
                }

                function ra() {
                    if (null === n2) {
                        var e = n9.alternate;
                        e = null !== e ? e.memoizedState : null
                    } else e = n2.next;
                    var t = null === n8 ? n9.memoizedState : n8.next;
                    if (null !== t) n8 = t, n2 = e;
                    else {
                        if (null === e) throw Error(f(310));
                        e = {
                            memoizedState: (n2 = e).memoizedState,
                            baseState: n2.baseState,
                            baseQueue: n2.baseQueue,
                            queue: n2.queue,
                            next: null
                        }, null === n8 ? n9.memoizedState = n8 = e : n8 = n8.next = e
                    }
                    return n8
                }

                function ri(e, t) {
                    return "function" == typeof t ? t(e) : t
                }

                function rl(e) {
                    var t = ra(),
                        n = t.queue;
                    if (null === n) throw Error(f(311));
                    n.lastRenderedReducer = e;
                    var r = n2,
                        a = r.baseQueue,
                        i = n.pending;
                    if (null !== i) {
                        if (null !== a) {
                            var l = a.next;
                            a.next = i.next, i.next = l
                        }
                        r.baseQueue = a = i, n.pending = null
                    }
                    if (null !== a) {
                        i = a.next, r = r.baseState;
                        var o = l = null,
                            s = null,
                            u = i;
                        do {
                            var c = u.lane;
                            if ((n1 & c) === c) null !== s && (s = s.next = {
                                lane: 0,
                                action: u.action,
                                hasEagerState: u.hasEagerState,
                                eagerState: u.eagerState,
                                next: null
                            }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
                            else {
                                var d = {
                                    lane: c,
                                    action: u.action,
                                    hasEagerState: u.hasEagerState,
                                    eagerState: u.eagerState,
                                    next: null
                                };
                                null === s ? (o = s = d, l = r) : s = s.next = d, n9.lanes |= c, a1 |= c
                            }
                            u = u.next
                        } while (null !== u && u !== i);
                        null === s ? l = r : s.next = o, tP(r, t.memoizedState) || (r0 = !0), t.memoizedState = r, t.baseState = l, t.baseQueue = s, n.lastRenderedState = r
                    }
                    if (null !== (e = n.interleaved)) {
                        a = e;
                        do i = a.lane, n9.lanes |= i, a1 |= i, a = a.next; while (a !== e)
                    } else null === a && (n.lanes = 0);
                    return [t.memoizedState, n.dispatch]
                }

                function ro(e) {
                    var t = ra(),
                        n = t.queue;
                    if (null === n) throw Error(f(311));
                    n.lastRenderedReducer = e;
                    var r = n.dispatch,
                        a = n.pending,
                        i = t.memoizedState;
                    if (null !== a) {
                        n.pending = null;
                        var l = a = a.next;
                        do i = e(i, l.action), l = l.next; while (l !== a);
                        tP(i, t.memoizedState) || (r0 = !0), t.memoizedState = i, null === t.baseQueue && (t.baseState = i), n.lastRenderedState = i
                    }
                    return [i, r]
                }

                function rs() {}

                function ru(e, t) {
                    var n = n9,
                        r = ra(),
                        a = t(),
                        i = !tP(r.memoizedState, a);
                    if (i && (r.memoizedState = a, r0 = !0), r = r.queue, rb(rd.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || null !== n8 && 1 & n8.memoizedState.tag) {
                        if (n.flags |= 2048, rp(9, rf.bind(null, n, r, a, t), void 0, null), null === aY) throw Error(f(349));
                        0 != (30 & n1) || rc(n, t, a)
                    }
                    return a
                }

                function rc(e, t, n) {
                    e.flags |= 16384, e = {
                        getSnapshot: t,
                        value: n
                    }, null === (t = n9.updateQueue) ? (t = {
                        lastEffect: null,
                        stores: null
                    }, n9.updateQueue = t, t.stores = [e]) : null === (n = t.stores) ? t.stores = [e] : n.push(e)
                }

                function rf(e, t, n, r) {
                    t.value = n, t.getSnapshot = r, rA(t) && iA(e, 1, -1)
                }

                function rd(e, t, n) {
                    return n(function() {
                        rA(t) && iA(e, 1, -1)
                    })
                }

                function rA(e) {
                    var t = e.getSnapshot;
                    e = e.value;
                    try {
                        var n = t();
                        return !tP(e, n)
                    } catch (e) {
                        return !0
                    }
                }

                function rh(e) {
                    var t = rr();
                    return "function" == typeof e && (e = e()), t.memoizedState = t.baseState = e, e = {
                        pending: null,
                        interleaved: null,
                        lanes: 0,
                        dispatch: null,
                        lastRenderedReducer: ri,
                        lastRenderedState: e
                    }, t.queue = e, e = e.dispatch = rT.bind(null, n9, e), [t.memoizedState, e]
                }

                function rp(e, t, n, r) {
                    return e = {
                        tag: e,
                        create: t,
                        destroy: n,
                        deps: r,
                        next: null
                    }, null === (t = n9.updateQueue) ? (t = {
                        lastEffect: null,
                        stores: null
                    }, n9.updateQueue = t, t.lastEffect = e.next = e) : null === (n = t.lastEffect) ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e
                }

                function rB() {
                    return ra().memoizedState
                }

                function rm(e, t, n, r) {
                    var a = rr();
                    n9.flags |= e, a.memoizedState = rp(1 | t, n, void 0, void 0 === r ? null : r)
                }

                function rg(e, t, n, r) {
                    var a = ra();
                    r = void 0 === r ? null : r;
                    var i = void 0;
                    if (null !== n2) {
                        var l = n2.memoizedState;
                        if (i = l.destroy, null !== r && re(r, l.deps)) {
                            a.memoizedState = rp(t, n, i, r);
                            return
                        }
                    }
                    n9.flags |= e, a.memoizedState = rp(1 | t, n, i, r)
                }

                function rC(e, t) {
                    return rm(8390656, 8, e, t)
                }

                function rb(e, t) {
                    return rg(2048, 8, e, t)
                }

                function rv(e, t) {
                    return rg(4, 2, e, t)
                }

                function ry(e, t) {
                    return rg(4, 4, e, t)
                }

                function rE(e, t) {
                    return "function" == typeof t ? (t(e = e()), function() {
                        t(null)
                    }) : null != t ? (e = e(), t.current = e, function() {
                        t.current = null
                    }) : void 0
                }

                function rF(e, t, n) {
                    return n = null != n ? n.concat([e]) : null, rg(4, 4, rE.bind(null, t, e), n)
                }

                function rI() {}

                function rM(e, t) {
                    var n = ra();
                    t = void 0 === t ? null : t;
                    var r = n.memoizedState;
                    return null !== r && null !== t && re(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
                }

                function rR(e, t) {
                    var n = ra();
                    t = void 0 === t ? null : t;
                    var r = n.memoizedState;
                    return null !== r && null !== t && re(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
                }

                function rS(e, t) {
                    var n = tE;
                    tE = 0 !== n && 4 > n ? n : 4, e(!0);
                    var r = n0.transition;
                    n0.transition = {};
                    try {
                        e(!1), t()
                    } finally {
                        tE = n, n0.transition = r
                    }
                }

                function rG() {
                    return ra().memoizedState
                }

                function rD(e, t, n) {
                    var r = id(e);
                    n = {
                        lane: r,
                        action: n,
                        hasEagerState: !1,
                        eagerState: null,
                        next: null
                    }, rx(e) ? rH(t, n) : (rw(e, t, n), null !== (e = iA(e, r, n = ic())) && r_(e, t, r))
                }

                function rT(e, t, n) {
                    var r = id(e),
                        a = {
                            lane: r,
                            action: n,
                            hasEagerState: !1,
                            eagerState: null,
                            next: null
                        };
                    if (rx(e)) rH(t, a);
                    else {
                        rw(e, t, a);
                        var i = e.alternate;
                        if (0 === e.lanes && (null === i || 0 === i.lanes) && null !== (i = t.lastRenderedReducer)) try {
                            var l = t.lastRenderedState,
                                o = i(l, n);
                            if (a.hasEagerState = !0, a.eagerState = o, tP(o, l)) return
                        } catch (e) {} finally {}
                        null !== (e = iA(e, r, n = ic())) && r_(e, t, r)
                    }
                }

                function rx(e) {
                    var t = e.alternate;
                    return e === n9 || null !== t && t === n9
                }

                function rH(e, t) {
                    n6 = n3 = !0;
                    var n = e.pending;
                    null === n ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
                }

                function rw(e, t, n) {
                    null !== aY && 0 != (1 & e.mode) && 0 == (2 & az) ? (null === (e = t.interleaved) ? (n.next = n, null === t1 ? t1 = [t] : t1.push(t)) : (n.next = e.next, e.next = n), t.interleaved = n) : (null === (e = t.pending) ? n.next = n : (n.next = e.next, e.next = n), t.pending = n)
                }

                function r_(e, t, n) {
                    if (0 != (4194240 & n)) {
                        var r = t.lanes;
                        r &= e.pendingLanes, n |= r, t.lanes = n, ty(e, n)
                    }
                }
                var rP = {
                        readContext: t0,
                        useCallback: n7,
                        useContext: n7,
                        useEffect: n7,
                        useImperativeHandle: n7,
                        useInsertionEffect: n7,
                        useLayoutEffect: n7,
                        useMemo: n7,
                        useReducer: n7,
                        useRef: n7,
                        useState: n7,
                        useDebugValue: n7,
                        useDeferredValue: n7,
                        useTransition: n7,
                        useMutableSource: n7,
                        useSyncExternalStore: n7,
                        useId: n7,
                        unstable_isNewReconciler: !1
                    },
                    rk = {
                        readContext: t0,
                        useCallback: function(e, t) {
                            return rr().memoizedState = [e, void 0 === t ? null : t], e
                        },
                        useContext: t0,
                        useEffect: rC,
                        useImperativeHandle: function(e, t, n) {
                            return n = null != n ? n.concat([e]) : null, rm(4194308, 4, rE.bind(null, t, e), n)
                        },
                        useLayoutEffect: function(e, t) {
                            return rm(4194308, 4, e, t)
                        },
                        useInsertionEffect: function(e, t) {
                            return rm(4, 2, e, t)
                        },
                        useMemo: function(e, t) {
                            var n = rr();
                            return t = void 0 === t ? null : t, e = e(), n.memoizedState = [e, t], e
                        },
                        useReducer: function(e, t, n) {
                            var r = rr();
                            return t = void 0 !== n ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                                pending: null,
                                interleaved: null,
                                lanes: 0,
                                dispatch: null,
                                lastRenderedReducer: e,
                                lastRenderedState: t
                            }, r.queue = e, e = e.dispatch = rD.bind(null, n9, e), [r.memoizedState, e]
                        },
                        useRef: function(e) {
                            return e = {
                                current: e
                            }, rr().memoizedState = e
                        },
                        useState: rh,
                        useDebugValue: rI,
                        useDeferredValue: function(e) {
                            var t = rh(e),
                                n = t[0],
                                r = t[1];
                            return rC(function() {
                                var t = n0.transition;
                                n0.transition = {};
                                try {
                                    r(e)
                                } finally {
                                    n0.transition = t
                                }
                            }, [e]), n
                        },
                        useTransition: function() {
                            var e = rh(!1),
                                t = e[0];
                            return e = rS.bind(null, e[1]), rr().memoizedState = e, [t, e]
                        },
                        useMutableSource: function() {},
                        useSyncExternalStore: function(e, t, n) {
                            var r = n9,
                                a = rr();
                            if (nE) {
                                if (void 0 === n) throw Error(f(407));
                                n = n()
                            } else {
                                if (n = t(), null === aY) throw Error(f(349));
                                0 != (30 & n1) || rc(r, t, n)
                            }
                            a.memoizedState = n;
                            var i = {
                                value: n,
                                getSnapshot: t
                            };
                            return a.queue = i, rC(rd.bind(null, r, i, e), [e]), r.flags |= 2048, rp(9, rf.bind(null, r, i, n, t), void 0, null), n
                        },
                        useId: function() {
                            var e = rr(),
                                t = aY.identifierPrefix;
                            if (nE) {
                                var n = nB,
                                    r = np;
                                t = ":" + t + "R" + (n = (r & ~(1 << 32 - td(r) - 1)).toString(32) + n), 0 < (n = n4++) && (t += "H" + n.toString(32)), t += ":"
                            } else t = ":" + t + "r" + (n = n5++).toString(32) + ":";
                            return e.memoizedState = t
                        },
                        unstable_isNewReconciler: !1
                    },
                    rJ = {
                        readContext: t0,
                        useCallback: rM,
                        useContext: t0,
                        useEffect: rb,
                        useImperativeHandle: rF,
                        useInsertionEffect: rv,
                        useLayoutEffect: ry,
                        useMemo: rR,
                        useReducer: rl,
                        useRef: rB,
                        useState: function() {
                            return rl(ri)
                        },
                        useDebugValue: rI,
                        useDeferredValue: function(e) {
                            var t = rl(ri),
                                n = t[0],
                                r = t[1];
                            return rb(function() {
                                var t = n0.transition;
                                n0.transition = {};
                                try {
                                    r(e)
                                } finally {
                                    n0.transition = t
                                }
                            }, [e]), n
                        },
                        useTransition: function() {
                            return [rl(ri)[0], ra().memoizedState]
                        },
                        useMutableSource: rs,
                        useSyncExternalStore: ru,
                        useId: rG,
                        unstable_isNewReconciler: !1
                    },
                    rL = {
                        readContext: t0,
                        useCallback: rM,
                        useContext: t0,
                        useEffect: rb,
                        useImperativeHandle: rF,
                        useInsertionEffect: rv,
                        useLayoutEffect: ry,
                        useMemo: rR,
                        useReducer: ro,
                        useRef: rB,
                        useState: function() {
                            return ro(ri)
                        },
                        useDebugValue: rI,
                        useDeferredValue: function(e) {
                            var t = ro(ri),
                                n = t[0],
                                r = t[1];
                            return rb(function() {
                                var t = n0.transition;
                                n0.transition = {};
                                try {
                                    r(e)
                                } finally {
                                    n0.transition = t
                                }
                            }, [e]), n
                        },
                        useTransition: function() {
                            return [ro(ri)[0], ra().memoizedState]
                        },
                        useMutableSource: rs,
                        useSyncExternalStore: ru,
                        useId: rG,
                        unstable_isNewReconciler: !1
                    };

                function rN(e, t) {
                    try {
                        var n = "",
                            r = t;
                        do n += function(e) {
                            switch (e.tag) {
                                case 5:
                                    return e9(e.type);
                                case 16:
                                    return e9("Lazy");
                                case 13:
                                    return e9("Suspense");
                                case 19:
                                    return e9("SuspenseList");
                                case 0:
                                case 2:
                                case 15:
                                    return e = e8(e.type, !1);
                                case 11:
                                    return e = e8(e.type.render, !1);
                                case 1:
                                    return e = e8(e.type, !0);
                                default:
                                    return ""
                            }
                        }(r), r = r.return; while (r);
                        var a = n
                    } catch (e) {
                        a = "\nError generating stack: " + e.message + "\n" + e.stack
                    }
                    return {
                        value: e,
                        source: t,
                        stack: a
                    }
                }

                function rU(e, t) {
                    try {
                        console.error(t.value)
                    } catch (e) {
                        setTimeout(function() {
                            throw e
                        })
                    }
                }
                var rO = "function" == typeof WeakMap ? WeakMap : Map;

                function rK(e, t, n) {
                    (n = t3(-1, n)).tag = 3, n.payload = {
                        element: null
                    };
                    var r = t.value;
                    return n.callback = function() {
                        a7 || (a7 = !0, ie = r), rU(e, t)
                    }, n
                }

                function rQ(e, t, n) {
                    (n = t3(-1, n)).tag = 3;
                    var r = e.type.getDerivedStateFromError;
                    if ("function" == typeof r) {
                        var a = t.value;
                        n.payload = function() {
                            return r(a)
                        }, n.callback = function() {
                            rU(e, t)
                        }
                    }
                    var i = e.stateNode;
                    return null !== i && "function" == typeof i.componentDidCatch && (n.callback = function() {
                        rU(e, t), "function" != typeof r && (null === it ? it = new Set([this]) : it.add(this));
                        var n = t.stack;
                        this.componentDidCatch(t.value, {
                            componentStack: null !== n ? n : ""
                        })
                    }), n
                }

                function rj(e, t, n) {
                    var r = e.pingCache;
                    if (null === r) {
                        r = e.pingCache = new rO;
                        var a = new Set;
                        r.set(t, a)
                    } else void 0 === (a = r.get(t)) && (a = new Set, r.set(t, a));
                    a.has(n) || (a.add(n), e = iw.bind(null, e, t, n), t.then(e, e))
                }

                function rX(e) {
                    do {
                        var t;
                        if ((t = 13 === e.tag) && (t = null === (t = e.memoizedState) || null !== t.dehydrated), t) return e;
                        e = e.return
                    } while (null !== e);
                    return null
                }

                function rz(e, t, n, r, a) {
                    return 0 == (1 & e.mode) ? e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, 1 === n.tag && (null === n.alternate ? n.tag = 17 : ((t = t3(-1, 1)).tag = 2, t6(n, t))), n.lanes |= 1) : (e.flags |= 65536, e.lanes = a), e
                }

                function rY(e) {
                    e.flags |= 4
                }

                function rW(e, t) {
                    if (null !== e && e.child === t.child) return !0;
                    if (0 != (16 & t.flags)) return !1;
                    for (e = t.child; null !== e;) {
                        if (0 != (12854 & e.flags) || 0 != (12854 & e.subtreeFlags)) return !1;
                        e = e.sibling
                    }
                    return !0
                }
                if (Z) t = function(e, t) {
                    for (var n = t.child; null !== n;) {
                        if (5 === n.tag || 6 === n.tag) U(e, n.stateNode);
                        else if (4 !== n.tag && null !== n.child) {
                            n.child.return = n, n = n.child;
                            continue
                        }
                        if (n === t) break;
                        for (; null === n.sibling;) {
                            if (null === n.return || n.return === t) return;
                            n = n.return
                        }
                        n.sibling.return = n.return, n = n.sibling
                    }
                }, r = function() {}, a = function(e, t, n, r, a) {
                    (e = e.memoizedProps) !== r && (n = K(t.stateNode, n, e, r, a, nQ(nU.current)), (t.updateQueue = n) && rY(t))
                }, i = function(e, t, n, r) {
                    n !== r && rY(t)
                };
                else if (V) {
                    t = function(e, n, r, a) {
                        for (var i = n.child; null !== i;) {
                            if (5 === i.tag) {
                                var l = i.stateNode;
                                r && a && (l = eH(l, i.type, i.memoizedProps, i)), U(e, l)
                            } else if (6 === i.tag) l = i.stateNode, r && a && (l = ew(l, i.memoizedProps, i)), U(e, l);
                            else if (4 !== i.tag) {
                                if (22 === i.tag && null !== i.memoizedState) null !== (l = i.child) && (l.return = i), t(e, i, !0, !0);
                                else if (null !== i.child) {
                                    i.child.return = i, i = i.child;
                                    continue
                                }
                            }
                            if (i === n) break;
                            for (; null === i.sibling;) {
                                if (null === i.return || i.return === n) return;
                                i = i.return
                            }
                            i.sibling.return = i.return, i = i.sibling
                        }
                    };
                    var rZ = function(e, t, n, r) {
                        for (var a = t.child; null !== a;) {
                            if (5 === a.tag) {
                                var i = a.stateNode;
                                n && r && (i = eH(i, a.type, a.memoizedProps, a)), eD(e, i)
                            } else if (6 === a.tag) i = a.stateNode, n && r && (i = ew(i, a.memoizedProps, a)), eD(e, i);
                            else if (4 !== a.tag) {
                                if (22 === a.tag && null !== a.memoizedState) null !== (i = a.child) && (i.return = a), rZ(e, a, !0, !0);
                                else if (null !== a.child) {
                                    a.child.return = a, a = a.child;
                                    continue
                                }
                            }
                            if (a === t) break;
                            for (; null === a.sibling;) {
                                if (null === a.return || a.return === t) return;
                                a = a.return
                            }
                            a.sibling.return = a.return, a = a.sibling
                        }
                    };
                    r = function(e, t) {
                        var n = t.stateNode;
                        if (!rW(e, t)) {
                            var r = eG(e = n.containerInfo);
                            rZ(r, t, !1, !1), n.pendingChildren = r, rY(t), eT(e, r)
                        }
                    }, a = function(e, n, r, a, i) {
                        var l = e.stateNode,
                            o = e.memoizedProps;
                        if ((e = rW(e, n)) && o === a) n.stateNode = l;
                        else {
                            var s = n.stateNode,
                                u = nQ(nU.current),
                                c = null;
                            o !== a && (c = K(s, r, o, a, i, u)), e && null === c ? n.stateNode = l : (O(l = eS(l, c, r, o, a, n, e, s), r, a, i, u) && rY(n), n.stateNode = l, e ? rY(n) : t(l, n, !1, !1))
                        }
                    }, i = function(e, t, n, r) {
                        n !== r ? (e = nQ(nK.current), n = nQ(nU.current), t.stateNode = j(r, e, n, t), rY(t)) : t.stateNode = e.stateNode
                    }
                } else r = function() {}, a = function() {}, i = function() {};

                function rV(e, t) {
                    if (!nE) switch (e.tailMode) {
                        case "hidden":
                            t = e.tail;
                            for (var n = null; null !== t;) null !== t.alternate && (n = t), t = t.sibling;
                            null === n ? e.tail = null : n.sibling = null;
                            break;
                        case "collapsed":
                            n = e.tail;
                            for (var r = null; null !== n;) null !== n.alternate && (r = n), n = n.sibling;
                            null === r ? t || null === e.tail ? e.tail = null : e.tail.sibling = null : r.sibling = null
                    }
                }

                function rq(e) {
                    var t = null !== e.alternate && e.alternate.child === e.child,
                        n = 0,
                        r = 0;
                    if (t)
                        for (var a = e.child; null !== a;) n |= a.lanes | a.childLanes, r |= 14680064 & a.subtreeFlags, r |= 14680064 & a.flags, a.return = e, a = a.sibling;
                    else
                        for (a = e.child; null !== a;) n |= a.lanes | a.childLanes, r |= a.subtreeFlags, r |= a.flags, a.return = e, a = a.sibling;
                    return e.subtreeFlags |= r, e.childLanes = n, t
                }
                var r$ = d.ReactCurrentOwner,
                    r0 = !1;

                function r1(e, t, n, r) {
                    t.child = null === e ? nL(t, null, n, r) : nJ(t, e.child, n, r)
                }

                function r9(e, t, n, r, a) {
                    n = n.render;
                    var i = t.ref;
                    return (t$(t, a), r = rt(e, t, n, r, i, a), n = rn(), null === e || r0) ? (nE && n && nC(t), t.flags |= 1, r1(e, t, r, a), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, ac(e, t, a))
                }

                function r2(e, t, n, r, a) {
                    if (null === e) {
                        var i = n.type;
                        return "function" != typeof i || iN(i) || void 0 !== i.defaultProps || null !== n.compare || void 0 !== n.defaultProps ? ((e = iO(n.type, null, r, t, t.mode, a)).ref = t.ref, e.return = t, t.child = e) : (t.tag = 15, t.type = i, r8(e, t, i, r, a))
                    }
                    if (i = e.child, 0 == (e.lanes & a)) {
                        var l = i.memoizedProps;
                        if ((n = null !== (n = n.compare) ? n : tK)(l, r) && e.ref === t.ref) return ac(e, t, a)
                    }
                    return t.flags |= 1, (e = iU(i, r)).ref = t.ref, e.return = t, t.child = e
                }

                function r8(e, t, n, r, a) {
                    if (null !== e && tK(e.memoizedProps, r) && e.ref === t.ref) {
                        if (r0 = !1, 0 == (e.lanes & a)) return t.lanes = e.lanes, ac(e, t, a);
                        0 != (131072 & e.flags) && (r0 = !0)
                    }
                    return r4(e, t, n, r, a)
                }

                function r3(e, t, n) {
                    var r = t.pendingProps,
                        a = r.children,
                        i = null !== e ? e.memoizedState : null;
                    if ("hidden" === r.mode) {
                        if (0 == (1 & t.mode)) t.memoizedState = {
                            baseLanes: 0,
                            cachePool: null
                        }, te(aq, aV), aV |= n;
                        else {
                            if (0 == (1073741824 & n)) return e = null !== i ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                                baseLanes: e,
                                cachePool: null
                            }, t.updateQueue = null, te(aq, aV), aV |= e, null;
                            t.memoizedState = {
                                baseLanes: 0,
                                cachePool: null
                            }, r = null !== i ? i.baseLanes : n, te(aq, aV), aV |= r
                        }
                    } else null !== i ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, te(aq, aV), aV |= r;
                    return r1(e, t, a, n), t.child
                }

                function r6(e, t) {
                    var n = t.ref;
                    (null === e && null !== n || null !== e && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
                }

                function r4(e, t, n, r, a) {
                    var i = tl(n) ? ta : tn.current;
                    return (i = ti(t, i), t$(t, a), n = rt(e, t, n, r, i, a), r = rn(), null === e || r0) ? (nE && r && nC(t), t.flags |= 1, r1(e, t, n, a), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, ac(e, t, a))
                }

                function r5(e, t, n, r, a) {
                    if (tl(n)) {
                        var i = !0;
                        tc(t)
                    } else i = !1;
                    if (t$(t, a), null === t.stateNode) null !== e && (e.alternate = null, t.alternate = null, t.flags |= 2), ni(t, n, r), no(t, n, r, a), r = !0;
                    else if (null === e) {
                        var l = t.stateNode,
                            o = t.memoizedProps;
                        l.props = o;
                        var s = l.context,
                            u = n.contextType;
                        u = "object" == typeof u && null !== u ? t0(u) : ti(t, u = tl(n) ? ta : tn.current);
                        var c = n.getDerivedStateFromProps,
                            f = "function" == typeof c || "function" == typeof l.getSnapshotBeforeUpdate;
                        f || "function" != typeof l.UNSAFE_componentWillReceiveProps && "function" != typeof l.componentWillReceiveProps || (o !== r || s !== u) && nl(t, l, r, u), t9 = !1;
                        var d = t.memoizedState;
                        l.state = d, t7(t, r, l, a), s = t.memoizedState, o !== r || d !== s || tr.current || t9 ? ("function" == typeof c && (nn(t, n, c, r), s = t.memoizedState), (o = t9 || na(t, n, o, r, d, s, u)) ? (f || "function" != typeof l.UNSAFE_componentWillMount && "function" != typeof l.componentWillMount || ("function" == typeof l.componentWillMount && l.componentWillMount(), "function" == typeof l.UNSAFE_componentWillMount && l.UNSAFE_componentWillMount()), "function" == typeof l.componentDidMount && (t.flags |= 4194308)) : ("function" == typeof l.componentDidMount && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), l.props = r, l.state = s, l.context = u, r = o) : ("function" == typeof l.componentDidMount && (t.flags |= 4194308), r = !1)
                    } else {
                        l = t.stateNode, t8(e, t), o = t.memoizedProps, u = t.type === t.elementType ? o : tQ(t.type, o), l.props = u, f = t.pendingProps, d = l.context, s = "object" == typeof(s = n.contextType) && null !== s ? t0(s) : ti(t, s = tl(n) ? ta : tn.current);
                        var A = n.getDerivedStateFromProps;
                        (c = "function" == typeof A || "function" == typeof l.getSnapshotBeforeUpdate) || "function" != typeof l.UNSAFE_componentWillReceiveProps && "function" != typeof l.componentWillReceiveProps || (o !== f || d !== s) && nl(t, l, r, s), t9 = !1, d = t.memoizedState, l.state = d, t7(t, r, l, a);
                        var h = t.memoizedState;
                        o !== f || d !== h || tr.current || t9 ? ("function" == typeof A && (nn(t, n, A, r), h = t.memoizedState), (u = t9 || na(t, n, u, r, d, h, s) || !1) ? (c || "function" != typeof l.UNSAFE_componentWillUpdate && "function" != typeof l.componentWillUpdate || ("function" == typeof l.componentWillUpdate && l.componentWillUpdate(r, h, s), "function" == typeof l.UNSAFE_componentWillUpdate && l.UNSAFE_componentWillUpdate(r, h, s)), "function" == typeof l.componentDidUpdate && (t.flags |= 4), "function" == typeof l.getSnapshotBeforeUpdate && (t.flags |= 1024)) : ("function" != typeof l.componentDidUpdate || o === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), "function" != typeof l.getSnapshotBeforeUpdate || o === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = h), l.props = r, l.state = h, l.context = s, r = u) : ("function" != typeof l.componentDidUpdate || o === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), "function" != typeof l.getSnapshotBeforeUpdate || o === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), r = !1)
                    }
                    return r7(e, t, n, r, i, a)
                }

                function r7(e, t, n, r, a, i) {
                    r6(e, t);
                    var l = 0 != (128 & t.flags);
                    if (!r && !l) return a && tf(t, n, !1), ac(e, t, i);
                    r = t.stateNode, r$.current = t;
                    var o = l && "function" != typeof n.getDerivedStateFromError ? null : r.render();
                    return t.flags |= 1, null !== e && l ? (t.child = nJ(t, e.child, null, i), t.child = nJ(t, null, o, i)) : r1(e, t, o, i), t.memoizedState = r.state, a && tf(t, n, !0), t.child
                }

                function ae(e) {
                    var t = e.stateNode;
                    t.pendingContext ? ts(e, t.pendingContext, t.pendingContext !== t.context) : t.context && ts(e, t.context, !1), nj(e, t.containerInfo)
                }

                function at(e, t, n, r, a) {
                    return nx(), nH(a), t.flags |= 256, r1(e, t, n, r), t.child
                }
                var an = {
                    dehydrated: null,
                    treeContext: null,
                    retryLane: 0
                };

                function ar(e) {
                    return {
                        baseLanes: e,
                        cachePool: null
                    }
                }

                function aa(e, t, n) {
                    var r, a, i, l, o, s, u, c, d, A, h, p, B, m, g = t.pendingProps,
                        C = nW.current,
                        b = !1,
                        v = 0 != (128 & t.flags);
                    if ((m = v) || (m = (null === e || null !== e.memoizedState) && 0 != (2 & C)), m ? (b = !0, t.flags &= -129) : (null === e || null !== e.memoizedState) && (C |= 1), te(nW, 1 & C), null === e) return (nG(t), null !== (e = t.memoizedState) && null !== (e = e.dehydrated)) ? (0 == (1 & t.mode) ? t.lanes = 1 : eL(e) ? t.lanes = 8 : t.lanes = 1073741824, null) : (C = g.children, e = g.fallback, b ? (g = t.mode, b = t.child, C = {
                        mode: "hidden",
                        children: C
                    }, 0 == (1 & g) && null !== b ? (b.childLanes = 0, b.pendingProps = C) : b = iQ(C, g, 0, null), e = iK(e, g, n, null), b.return = t, e.return = t, b.sibling = e, t.child = b, t.child.memoizedState = ar(n), t.memoizedState = an, e) : ai(t, C));
                    if (null !== (C = e.memoizedState) && null !== (m = C.dehydrated)) {
                        if (v) return 256 & t.flags ? (t.flags &= -257, al(e, t, n, Error(f(422)))) : null !== t.memoizedState ? (t.child = e.child, t.flags |= 128, null) : (b = g.fallback, C = t.mode, g = iQ({
                            mode: "visible",
                            children: g.children
                        }, C, 0, null), b = iK(b, C, n, null), b.flags |= 2, g.return = t, b.return = t, g.sibling = b, t.child = g, 0 != (1 & t.mode) && nJ(t, e.child, null, n), t.child.memoizedState = ar(n), t.memoizedState = an, b);
                        if (0 == (1 & t.mode)) t = al(e, t, n, null);
                        else if (eL(m)) t = al(e, t, n, Error(f(419)));
                        else if (g = 0 != (n & e.childLanes), r0 || g) {
                            if (null !== (g = aY)) {
                                switch (n & -n) {
                                    case 4:
                                        b = 2;
                                        break;
                                    case 16:
                                        b = 8;
                                        break;
                                    case 64:
                                    case 128:
                                    case 256:
                                    case 512:
                                    case 1024:
                                    case 2048:
                                    case 4096:
                                    case 8192:
                                    case 16384:
                                    case 32768:
                                    case 65536:
                                    case 131072:
                                    case 262144:
                                    case 524288:
                                    case 1048576:
                                    case 2097152:
                                    case 4194304:
                                    case 8388608:
                                    case 16777216:
                                    case 33554432:
                                    case 67108864:
                                        b = 32;
                                        break;
                                    case 536870912:
                                        b = 268435456;
                                        break;
                                    default:
                                        b = 0
                                }
                                0 !== (g = 0 != (b & (g.suspendedLanes | n)) ? 0 : b) && g !== C.retryLane && (C.retryLane = g, iA(e, g, -1))
                            }
                            iM(), t = al(e, t, n, Error(f(421)))
                        } else eJ(m) ? (t.flags |= 128, t.child = e.child, eN(m, t = iP.bind(null, e)), t = null) : (n = C.treeContext, q && (ny = eQ(m), nv = t, nE = !0, nI = null, nF = !1, null !== n && (nd[nA++] = np, nd[nA++] = nB, nd[nA++] = nh, np = n.id, nB = n.overflow, nh = t)), t = ai(t, t.pendingProps.children), t.flags |= 4096);
                        return t
                    }
                    return b ? (r = e, a = t, i = g.children, l = g.fallback, o = n, s = a.mode, u = (r = r.child).sibling, c = {
                        mode: "hidden",
                        children: i
                    }, 0 == (1 & s) && a.child !== r ? ((i = a.child).childLanes = 0, i.pendingProps = c, a.deletions = null) : (i = iU(r, c)).subtreeFlags = 14680064 & r.subtreeFlags, null !== u ? l = iU(u, l) : (l = iK(l, s, o, null), l.flags |= 2), l.return = a, i.return = a, i.sibling = l, a.child = i, g = l, b = t.child, C = e.child.memoizedState, b.memoizedState = null === C ? ar(n) : {
                        baseLanes: C.baseLanes | n,
                        cachePool: null
                    }, b.childLanes = e.childLanes & ~n, t.memoizedState = an, g) : (d = e, A = t, h = g.children, p = n, d = (B = d.child).sibling, h = iU(B, {
                        mode: "visible",
                        children: h
                    }), 0 == (1 & A.mode) && (h.lanes = p), h.return = A, h.sibling = null, null !== d && (null === (p = A.deletions) ? (A.deletions = [d], A.flags |= 16) : p.push(d)), n = A.child = h, t.memoizedState = null, n)
                }

                function ai(e, t) {
                    return (t = iQ({
                        mode: "visible",
                        children: t
                    }, e.mode, 0, null)).return = e, e.child = t
                }

                function al(e, t, n, r) {
                    return null !== r && nH(r), nJ(t, e.child, null, n), e = ai(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
                }

                function ao(e, t, n) {
                    e.lanes |= t;
                    var r = e.alternate;
                    null !== r && (r.lanes |= t), tq(e.return, t, n)
                }

                function as(e, t, n, r, a) {
                    var i = e.memoizedState;
                    null === i ? e.memoizedState = {
                        isBackwards: t,
                        rendering: null,
                        renderingStartTime: 0,
                        last: r,
                        tail: n,
                        tailMode: a
                    } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = a)
                }

                function au(e, t, n) {
                    var r = t.pendingProps,
                        a = r.revealOrder,
                        i = r.tail;
                    if (r1(e, t, r.children, n), 0 != (2 & (r = nW.current))) r = 1 & r | 2, t.flags |= 128;
                    else {
                        if (null !== e && 0 != (128 & e.flags)) e: for (e = t.child; null !== e;) {
                            if (13 === e.tag) null !== e.memoizedState && ao(e, n, t);
                            else if (19 === e.tag) ao(e, n, t);
                            else if (null !== e.child) {
                                e.child.return = e, e = e.child;
                                continue
                            }
                            if (e === t) break;
                            for (; null === e.sibling;) {
                                if (null === e.return || e.return === t) break e;
                                e = e.return
                            }
                            e.sibling.return = e.return, e = e.sibling
                        }
                        r &= 1
                    }
                    if (te(nW, r), 0 == (1 & t.mode)) t.memoizedState = null;
                    else switch (a) {
                        case "forwards":
                            for (a = null, n = t.child; null !== n;) null !== (e = n.alternate) && null === nZ(e) && (a = n), n = n.sibling;
                            null === (n = a) ? (a = t.child, t.child = null) : (a = n.sibling, n.sibling = null), as(t, !1, a, n, i);
                            break;
                        case "backwards":
                            for (n = null, a = t.child, t.child = null; null !== a;) {
                                if (null !== (e = a.alternate) && null === nZ(e)) {
                                    t.child = a;
                                    break
                                }
                                e = a.sibling, a.sibling = n, n = a, a = e
                            }
                            as(t, !0, n, null, i);
                            break;
                        case "together":
                            as(t, !1, null, null, void 0);
                            break;
                        default:
                            t.memoizedState = null
                    }
                    return t.child
                }

                function ac(e, t, n) {
                    if (null !== e && (t.dependencies = e.dependencies), a1 |= t.lanes, 0 == (n & t.childLanes)) return null;
                    if (null !== e && t.child !== e.child) throw Error(f(153));
                    if (null !== t.child) {
                        for (n = iU(e = t.child, e.pendingProps), t.child = n, n.return = t; null !== e.sibling;) e = e.sibling, (n = n.sibling = iU(e, e.pendingProps)).return = t;
                        n.sibling = null
                    }
                    return t.child
                }
                var af = !1,
                    ad = !1,
                    aA = "function" == typeof WeakSet ? WeakSet : Set,
                    ah = null;

                function ap(e, t) {
                    var n = e.ref;
                    if (null !== n) {
                        if ("function" == typeof n) try {
                            n(null)
                        } catch (n) {
                            iH(e, t, n)
                        } else n.current = null
                    }
                }

                function aB(e, t, n) {
                    try {
                        n()
                    } catch (n) {
                        iH(e, t, n)
                    }
                }
                var am = !1;

                function ag(e, t, n) {
                    var r = t.updateQueue;
                    if (null !== (r = null !== r ? r.lastEffect : null)) {
                        var a = r = r.next;
                        do {
                            if ((a.tag & e) === e) {
                                var i = a.destroy;
                                a.destroy = void 0, void 0 !== i && aB(t, n, i)
                            }
                            a = a.next
                        } while (a !== r)
                    }
                }

                function aC(e, t) {
                    if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
                        var n = t = t.next;
                        do {
                            if ((n.tag & e) === e) {
                                var r = n.create;
                                n.destroy = r()
                            }
                            n = n.next
                        } while (n !== t)
                    }
                }

                function ab(e) {
                    var t = e.ref;
                    if (null !== t) {
                        var n = e.stateNode;
                        e = 5 === e.tag ? _(n) : n, "function" == typeof t ? t(e) : t.current = e
                    }
                }

                function av(e, t, n) {
                    if (t_ && "function" == typeof t_.onCommitFiberUnmount) try {
                        t_.onCommitFiberUnmount(tw, t)
                    } catch (e) {}
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            if (null !== (e = t.updateQueue) && null !== (e = e.lastEffect)) {
                                var r = e = e.next;
                                do {
                                    var a = r,
                                        i = a.destroy;
                                    a = a.tag, void 0 !== i && (0 != (2 & a) ? aB(t, n, i) : 0 != (4 & a) && aB(t, n, i)), r = r.next
                                } while (r !== e)
                            }
                            break;
                        case 1:
                            if (ap(t, n), "function" == typeof(e = t.stateNode).componentWillUnmount) try {
                                e.props = t.memoizedProps, e.state = t.memoizedState, e.componentWillUnmount()
                            } catch (e) {
                                iH(t, n, e)
                            }
                            break;
                        case 5:
                            ap(t, n);
                            break;
                        case 4:
                            Z ? aM(e, t, n) : V && V && (n = eG(t = t.stateNode.containerInfo), ex(t, n))
                    }
                }

                function ay(e, t, n) {
                    for (var r = t;;)
                        if (av(e, r, n), null === r.child || Z && 4 === r.tag) {
                            if (r === t) break;
                            for (; null === r.sibling;) {
                                if (null === r.return || r.return === t) return;
                                r = r.return
                            }
                            r.sibling.return = r.return, r = r.sibling
                        } else r.child.return = r, r = r.child
                }

                function aE(e) {
                    return 5 === e.tag || 3 === e.tag || 4 === e.tag
                }

                function aF(e) {
                    e: for (;;) {
                        for (; null === e.sibling;) {
                            if (null === e.return || aE(e.return)) return null;
                            e = e.return
                        }
                        for (e.sibling.return = e.return, e = e.sibling; 5 !== e.tag && 6 !== e.tag && 18 !== e.tag;) {
                            if (2 & e.flags || null === e.child || 4 === e.tag) continue e;
                            e.child.return = e, e = e.child
                        }
                        if (!(2 & e.flags)) return e.stateNode
                    }
                }

                function aI(e) {
                    if (Z) {
                        e: {
                            for (var t = e.return; null !== t;) {
                                if (aE(t)) break e;
                                t = t.return
                            }
                            throw Error(f(160))
                        }
                        var n = t;
                        switch (n.tag) {
                            case 5:
                                t = n.stateNode, 32 & n.flags && (ey(t), n.flags &= -33), n = aF(e),
                                    function e(t, n, r) {
                                        var a = t.tag;
                                        if (5 === a || 6 === a) t = t.stateNode, n ? eg(r, t, n) : eA(r, t);
                                        else if (4 !== a && null !== (t = t.child))
                                            for (e(t, n, r), t = t.sibling; null !== t;) e(t, n, r), t = t.sibling
                                    }(e, n, t);
                                break;
                            case 3:
                            case 4:
                                t = n.stateNode.containerInfo, n = aF(e),
                                    function e(t, n, r) {
                                        var a = t.tag;
                                        if (5 === a || 6 === a) t = t.stateNode, n ? eC(r, t, n) : eh(r, t);
                                        else if (4 !== a && null !== (t = t.child))
                                            for (e(t, n, r), t = t.sibling; null !== t;) e(t, n, r), t = t.sibling
                                    }(e, n, t);
                                break;
                            default:
                                throw Error(f(161))
                        }
                    }
                }

                function aM(e, t, n) {
                    for (var r, a, i = t, l = !1;;) {
                        if (!l) {
                            l = i.return;
                            e: for (;;) {
                                if (null === l) throw Error(f(160));
                                switch (r = l.stateNode, l.tag) {
                                    case 5:
                                        a = !1;
                                        break e;
                                    case 3:
                                    case 4:
                                        r = r.containerInfo, a = !0;
                                        break e
                                }
                                l = l.return
                            }
                            l = !0
                        }
                        if (5 === i.tag || 6 === i.tag) ay(e, i, n), a ? ev(r, i.stateNode) : eb(r, i.stateNode);
                        else if (18 === i.tag) a ? eq(r, i.stateNode) : eV(r, i.stateNode);
                        else if (4 === i.tag) {
                            if (null !== i.child) {
                                r = i.stateNode.containerInfo, a = !0, i.child.return = i, i = i.child;
                                continue
                            }
                        } else if (av(e, i, n), null !== i.child) {
                            i.child.return = i, i = i.child;
                            continue
                        }
                        if (i === t) break;
                        for (; null === i.sibling;) {
                            if (null === i.return || i.return === t) return;
                            4 === (i = i.return).tag && (l = !1)
                        }
                        i.sibling.return = i.return, i = i.sibling
                    }
                }

                function aR(e, t) {
                    if (Z) {
                        switch (t.tag) {
                            case 0:
                            case 11:
                            case 14:
                            case 15:
                                ag(3, t, t.return), aC(3, t), ag(5, t, t.return);
                                return;
                            case 1:
                            case 12:
                            case 17:
                                return;
                            case 5:
                                var n = t.stateNode;
                                if (null != n) {
                                    var r = t.memoizedProps;
                                    e = null !== e ? e.memoizedProps : r;
                                    var a = t.type,
                                        i = t.updateQueue;
                                    t.updateQueue = null, null !== i && em(n, i, a, e, r, t)
                                }
                                return;
                            case 6:
                                if (null === t.stateNode) throw Error(f(162));
                                n = t.memoizedProps, ep(t.stateNode, null !== e ? e.memoizedProps : n, n);
                                return;
                            case 3:
                                q && null !== e && e.memoizedState.isDehydrated && eW(t.stateNode.containerInfo);
                                return;
                            case 13:
                            case 19:
                                aS(t);
                                return
                        }
                        throw Error(f(163))
                    }
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            ag(3, t, t.return), aC(3, t), ag(5, t, t.return);
                            return;
                        case 12:
                        case 22:
                        case 23:
                            return;
                        case 13:
                        case 19:
                            aS(t);
                            return;
                        case 3:
                            q && null !== e && e.memoizedState.isDehydrated && eW(t.stateNode.containerInfo)
                    }
                    e: if (V) {
                        switch (t.tag) {
                            case 1:
                            case 5:
                            case 6:
                                break e;
                            case 3:
                            case 4:
                                ex((t = t.stateNode).containerInfo, t.pendingChildren);
                                break e
                        }
                        throw Error(f(163))
                    }
                }

                function aS(e) {
                    var t = e.updateQueue;
                    if (null !== t) {
                        e.updateQueue = null;
                        var n = e.stateNode;
                        null === n && (n = e.stateNode = new aA), t.forEach(function(t) {
                            var r = ik.bind(null, e, t);
                            n.has(t) || (n.add(t), t.then(r, r))
                        })
                    }
                }

                function aG(e) {
                    for (; null !== ah;) {
                        var t = ah;
                        if (0 != (8772 & t.flags)) {
                            var n = t.alternate;
                            try {
                                if (0 != (8772 & t.flags)) switch (t.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        ad || aC(5, t);
                                        break;
                                    case 1:
                                        var r = t.stateNode;
                                        if (4 & t.flags && !ad) {
                                            if (null === n) r.componentDidMount();
                                            else {
                                                var a = t.elementType === t.type ? n.memoizedProps : tQ(t.type, n.memoizedProps);
                                                r.componentDidUpdate(a, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                                            }
                                        }
                                        var i = t.updateQueue;
                                        null !== i && ne(t, i, r);
                                        break;
                                    case 3:
                                        var l = t.updateQueue;
                                        if (null !== l) {
                                            if (n = null, null !== t.child) switch (t.child.tag) {
                                                case 5:
                                                    n = _(t.child.stateNode);
                                                    break;
                                                case 1:
                                                    n = t.child.stateNode
                                            }
                                            ne(t, l, n)
                                        }
                                        break;
                                    case 5:
                                        var o = t.stateNode;
                                        null === n && 4 & t.flags && eB(o, t.type, t.memoizedProps, t);
                                        break;
                                    case 6:
                                    case 4:
                                    case 12:
                                    case 19:
                                    case 17:
                                    case 21:
                                    case 22:
                                    case 23:
                                        break;
                                    case 13:
                                        if (q && null === t.memoizedState) {
                                            var s = t.alternate;
                                            if (null !== s) {
                                                var u = s.memoizedState;
                                                if (null !== u) {
                                                    var c = u.dehydrated;
                                                    null !== c && eZ(c)
                                                }
                                            }
                                        }
                                        break;
                                    default:
                                        throw Error(f(163))
                                }
                                ad || 512 & t.flags && ab(t)
                            } catch (e) {
                                iH(t, t.return, e)
                            }
                        }
                        if (t === e) {
                            ah = null;
                            break
                        }
                        if (null !== (n = t.sibling)) {
                            n.return = t.return, ah = n;
                            break
                        }
                        ah = t.return
                    }
                }

                function aD(e) {
                    for (; null !== ah;) {
                        var t = ah;
                        if (t === e) {
                            ah = null;
                            break
                        }
                        var n = t.sibling;
                        if (null !== n) {
                            n.return = t.return, ah = n;
                            break
                        }
                        ah = t.return
                    }
                }

                function aT(e) {
                    for (; null !== ah;) {
                        var t = ah;
                        try {
                            switch (t.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    var n = t.return;
                                    try {
                                        aC(4, t)
                                    } catch (e) {
                                        iH(t, n, e)
                                    }
                                    break;
                                case 1:
                                    var r = t.stateNode;
                                    if ("function" == typeof r.componentDidMount) {
                                        var a = t.return;
                                        try {
                                            r.componentDidMount()
                                        } catch (e) {
                                            iH(t, a, e)
                                        }
                                    }
                                    var i = t.return;
                                    try {
                                        ab(t)
                                    } catch (e) {
                                        iH(t, i, e)
                                    }
                                    break;
                                case 5:
                                    var l = t.return;
                                    try {
                                        ab(t)
                                    } catch (e) {
                                        iH(t, l, e)
                                    }
                            }
                        } catch (e) {
                            iH(t, t.return, e)
                        }
                        if (t === e) {
                            ah = null;
                            break
                        }
                        var o = t.sibling;
                        if (null !== o) {
                            o.return = t.return, ah = o;
                            break
                        }
                        ah = t.return
                    }
                }
                var ax = 0,
                    aH = 1,
                    aw = 2,
                    a_ = 3,
                    aP = 4;
                if ("function" == typeof Symbol && Symbol.for) {
                    var ak = Symbol.for;
                    ax = ak("selector.component"), aH = ak("selector.has_pseudo_class"), aw = ak("selector.role"), a_ = ak("selector.test_id"), aP = ak("selector.text")
                }

                function aJ(e) {
                    var t = $(e);
                    if (null != t) {
                        if ("string" != typeof t.memoizedProps["data-testname"]) throw Error(f(364));
                        return t
                    }
                    if (null === (e = el(e))) throw Error(f(362));
                    return e.stateNode.current
                }

                function aL(e, t) {
                    switch (t.$$typeof) {
                        case ax:
                            if (e.type === t.value) return !0;
                            break;
                        case aH:
                            e: {
                                t = t.value,
                                e = [e, 0];
                                for (var n = 0; n < e.length;) {
                                    var r = e[n++],
                                        a = e[n++],
                                        i = t[a];
                                    if (5 !== r.tag || !eu(r)) {
                                        for (; null != i && aL(r, i);) i = t[++a];
                                        if (a === t.length) {
                                            t = !0;
                                            break e
                                        }
                                        for (r = r.child; null !== r;) e.push(r, a), r = r.sibling
                                    }
                                }
                                t = !1
                            }
                            return t;
                        case aw:
                            if (5 === e.tag && ec(e.stateNode, t.value)) return !0;
                            break;
                        case aP:
                            if ((5 === e.tag || 6 === e.tag) && null !== (e = es(e)) && 0 <= e.indexOf(t.value)) return !0;
                            break;
                        case a_:
                            if (5 === e.tag && "string" == typeof(e = e.memoizedProps["data-testname"]) && e.toLowerCase() === t.value.toLowerCase()) return !0;
                            break;
                        default:
                            throw Error(f(365))
                    }
                    return !1
                }

                function aN(e) {
                    switch (e.$$typeof) {
                        case ax:
                            return "<" + (S(e.value) || "Unknown") + ">";
                        case aH:
                            return ":has(" + (aN(e) || "") + ")";
                        case aw:
                            return '[role="' + e.value + '"]';
                        case aP:
                            return '"' + e.value + '"';
                        case a_:
                            return '[data-testname="' + e.value + '"]';
                        default:
                            throw Error(f(365))
                    }
                }

                function aU(e, t) {
                    var n = [];
                    e = [e, 0];
                    for (var r = 0; r < e.length;) {
                        var a = e[r++],
                            i = e[r++],
                            l = t[i];
                        if (5 !== a.tag || !eu(a)) {
                            for (; null != l && aL(a, l);) l = t[++i];
                            if (i === t.length) n.push(a);
                            else
                                for (a = a.child; null !== a;) e.push(a, i), a = a.sibling
                        }
                    }
                    return n
                }

                function aO(e, t) {
                    if (!ei) throw Error(f(363));
                    e = aU(e = aJ(e), t), t = [], e = Array.from(e);
                    for (var n = 0; n < e.length;) {
                        var r = e[n++];
                        if (5 === r.tag) eu(r) || t.push(r.stateNode);
                        else
                            for (r = r.child; null !== r;) e.push(r), r = r.sibling
                    }
                    return t
                }
                var aK = Math.ceil,
                    aQ = d.ReactCurrentDispatcher,
                    aj = d.ReactCurrentOwner,
                    aX = d.ReactCurrentBatchConfig,
                    az = 0,
                    aY = null,
                    aW = null,
                    aZ = 0,
                    aV = 0,
                    aq = e5(0),
                    a$ = 0,
                    a0 = null,
                    a1 = 0,
                    a9 = 0,
                    a2 = 0,
                    a8 = null,
                    a3 = null,
                    a6 = 0,
                    a4 = 1 / 0;

                function a5() {
                    a4 = tG() + 500
                }
                var a7 = !1,
                    ie = null,
                    it = null,
                    ir = !1,
                    ia = null,
                    ii = 0,
                    il = 0,
                    io = null,
                    is = -1,
                    iu = 0;

                function ic() {
                    return 0 != (6 & az) ? tG() : -1 !== is ? is : is = tG()
                }

                function id(e) {
                    return 0 == (1 & e.mode) ? 1 : 0 != (2 & az) && 0 !== aZ ? aZ & -aZ : null !== tO.transition ? (0 === iu && (e = tp, 0 == (4194240 & (tp <<= 1)) && (tp = 64), iu = e), iu) : 0 !== (e = tE) ? e : et()
                }

                function iA(e, t, n) {
                    if (50 < il) throw il = 0, io = null, Error(f(185));
                    var r = ih(e, t);
                    return null === r ? null : (tv(r, t, n), (0 == (2 & az) || r !== aY) && (r === aY && (0 == (2 & az) && (a9 |= t), 4 === a$ && iC(r, aZ)), ip(r, n), 1 === t && 0 === az && 0 == (1 & e.mode) && (a5(), tJ && tU())), r)
                }

                function ih(e, t) {
                    e.lanes |= t;
                    var n = e.alternate;
                    for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e;) e.childLanes |= t, null !== (n = e.alternate) && (n.childLanes |= t), n = e, e = e.return;
                    return 3 === n.tag ? n.stateNode : null
                }

                function ip(e, t) {
                    var n, r = e.callbackNode;
                    ! function(e, t) {
                        for (var n = e.suspendedLanes, r = e.pingedLanes, a = e.expirationTimes, i = e.pendingLanes; 0 < i;) {
                            var l = 31 - td(i),
                                o = 1 << l,
                                s = a[l]; - 1 === s ? (0 == (o & n) || 0 != (o & r)) && (a[l] = function(e, t) {
                                switch (e) {
                                    case 1:
                                    case 2:
                                    case 4:
                                        return t + 250;
                                    case 8:
                                    case 16:
                                    case 32:
                                    case 64:
                                    case 128:
                                    case 256:
                                    case 512:
                                    case 1024:
                                    case 2048:
                                    case 4096:
                                    case 8192:
                                    case 16384:
                                    case 32768:
                                    case 65536:
                                    case 131072:
                                    case 262144:
                                    case 524288:
                                    case 1048576:
                                    case 2097152:
                                        return t + 5e3;
                                    default:
                                        return -1
                                }
                            }(o, t)) : s <= t && (e.expiredLanes |= o), i &= ~o
                        }
                    }(e, t);
                    var a = tg(e, e === aY ? aZ : 0);
                    if (0 === a) null !== r && tM(r), e.callbackNode = null, e.callbackPriority = 0;
                    else if (t = a & -a, e.callbackPriority !== t) {
                        if (null != r && tM(r), 1 === t) 0 === e.tag ? (n = ib.bind(null, e), tJ = !0, tN(n)) : tN(ib.bind(null, e)), er ? ea(function() {
                            0 === az && tU()
                        }) : tI(tD, tU), r = null;
                        else {
                            switch (tF(a)) {
                                case 1:
                                    r = tD;
                                    break;
                                case 4:
                                    r = tT;
                                    break;
                                case 16:
                                default:
                                    r = tx;
                                    break;
                                case 536870912:
                                    r = tH
                            }
                            r = tI(r, iB.bind(null, e))
                        }
                        e.callbackPriority = t, e.callbackNode = r
                    }
                }

                function iB(e, t) {
                    if (is = -1, iu = 0, 0 != (6 & az)) throw Error(f(327));
                    var n = e.callbackNode;
                    if (iT() && e.callbackNode !== n) return null;
                    var r = tg(e, e === aY ? aZ : 0);
                    if (0 === r) return null;
                    if (0 != (30 & r) || 0 != (r & e.expiredLanes) || t) t = iR(e, r);
                    else {
                        t = r;
                        var a = az;
                        az |= 2;
                        var i = iI();
                        for ((aY !== e || aZ !== t) && (a5(), iE(e, t));;) try {
                            ! function() {
                                for (; null !== aW && !tR();) iS(aW)
                            }();
                            break
                        } catch (t) {
                            iF(e, t)
                        }
                        tW(), aQ.current = i, az = a, null !== aW ? t = 0 : (aY = null, aZ = 0, t = a$)
                    }
                    if (0 !== t) {
                        if (2 === t && 0 !== (a = tC(e)) && (r = a, t = im(e, a)), 1 === t) throw n = a0, iE(e, 0), iC(e, r), ip(e, tG()), n;
                        if (6 === t) iC(e, r);
                        else {
                            if (a = e.current.alternate, 0 == (30 & r) && ! function(e) {
                                    for (var t = e;;) {
                                        if (16384 & t.flags) {
                                            var n = t.updateQueue;
                                            if (null !== n && null !== (n = n.stores))
                                                for (var r = 0; r < n.length; r++) {
                                                    var a = n[r],
                                                        i = a.getSnapshot;
                                                    a = a.value;
                                                    try {
                                                        if (!tP(i(), a)) return !1
                                                    } catch (e) {
                                                        return !1
                                                    }
                                                }
                                        }
                                        if (n = t.child, 16384 & t.subtreeFlags && null !== n) n.return = t, t = n;
                                        else {
                                            if (t === e) break;
                                            for (; null === t.sibling;) {
                                                if (null === t.return || t.return === e) return !0;
                                                t = t.return
                                            }
                                            t.sibling.return = t.return, t = t.sibling
                                        }
                                    }
                                    return !0
                                }(a) && (2 === (t = iR(e, r)) && 0 !== (i = tC(e)) && (r = i, t = im(e, i)), 1 === t)) throw n = a0, iE(e, 0), iC(e, r), ip(e, tG()), n;
                            switch (e.finishedWork = a, e.finishedLanes = r, t) {
                                case 0:
                                case 1:
                                    throw Error(f(345));
                                case 2:
                                case 5:
                                    iD(e, a3);
                                    break;
                                case 3:
                                    if (iC(e, r), (130023424 & r) === r && 10 < (t = a6 + 500 - tG())) {
                                        if (0 !== tg(e, 0)) break;
                                        if (((a = e.suspendedLanes) & r) !== r) {
                                            ic(), e.pingedLanes |= e.suspendedLanes & a;
                                            break
                                        }
                                        e.timeoutHandle = X(iD.bind(null, e, a3), t);
                                        break
                                    }
                                    iD(e, a3);
                                    break;
                                case 4:
                                    if (iC(e, r), (4194240 & r) === r) break;
                                    for (a = -1, t = e.eventTimes; 0 < r;) {
                                        var l = 31 - td(r);
                                        i = 1 << l, (l = t[l]) > a && (a = l), r &= ~i
                                    }
                                    if (r = a, 10 < (r = (120 > (r = tG() - r) ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * aK(r / 1960)) - r)) {
                                        e.timeoutHandle = X(iD.bind(null, e, a3), r);
                                        break
                                    }
                                    iD(e, a3);
                                    break;
                                default:
                                    throw Error(f(329))
                            }
                        }
                    }
                    return ip(e, tG()), e.callbackNode === n ? iB.bind(null, e) : null
                }

                function im(e, t) {
                    var n = a8;
                    return e.current.memoizedState.isDehydrated && (iE(e, t).flags |= 256), 2 !== (e = iR(e, t)) && (t = a3, a3 = n, null !== t && ig(t)), e
                }

                function ig(e) {
                    null === a3 ? a3 = e : a3.push.apply(a3, e)
                }

                function iC(e, t) {
                    for (t &= ~a2, t &= ~a9, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
                        var n = 31 - td(t),
                            r = 1 << n;
                        e[n] = -1, t &= ~r
                    }
                }

                function ib(e) {
                    if (0 != (6 & az)) throw Error(f(327));
                    iT();
                    var t = tg(e, 0);
                    if (0 == (1 & t)) return ip(e, tG()), null;
                    var n = iR(e, t);
                    if (0 !== e.tag && 2 === n) {
                        var r = tC(e);
                        0 !== r && (t = r, n = im(e, r))
                    }
                    if (1 === n) throw n = a0, iE(e, 0), iC(e, t), ip(e, tG()), n;
                    if (6 === n) throw Error(f(345));
                    return e.finishedWork = e.current.alternate, e.finishedLanes = t, iD(e, a3), ip(e, tG()), null
                }

                function iv(e) {
                    null !== ia && 0 === ia.tag && 0 == (6 & az) && iT();
                    var t = az;
                    az |= 1;
                    var n = aX.transition,
                        r = tE;
                    try {
                        if (aX.transition = null, tE = 1, e) return e()
                    } finally {
                        tE = r, aX.transition = n, 0 == (6 & (az = t)) && tU()
                    }
                }

                function iy() {
                    aV = aq.current, e7(aq)
                }

                function iE(e, t) {
                    e.finishedWork = null, e.finishedLanes = 0;
                    var n = e.timeoutHandle;
                    if (n !== Y && (e.timeoutHandle = Y, z(n)), null !== aW)
                        for (n = aW.return; null !== n;) {
                            var r = n;
                            switch (nb(r), r.tag) {
                                case 1:
                                    null != (r = r.type.childContextTypes) && to();
                                    break;
                                case 3:
                                    nX(), e7(tr), e7(tn), nq();
                                    break;
                                case 5:
                                    nY(r);
                                    break;
                                case 4:
                                    nX();
                                    break;
                                case 13:
                                case 19:
                                    e7(nW);
                                    break;
                                case 10:
                                    tV(r.type._context);
                                    break;
                                case 22:
                                case 23:
                                    iy()
                            }
                            n = n.return
                        }
                    if (aY = e, aW = e = iU(e.current, null), aZ = aV = t, a$ = 0, a0 = null, a2 = a9 = a1 = 0, a3 = a8 = null, null !== t1) {
                        for (t = 0; t < t1.length; t++)
                            if (null !== (r = (n = t1[t]).interleaved)) {
                                n.interleaved = null;
                                var a = r.next,
                                    i = n.pending;
                                if (null !== i) {
                                    var l = i.next;
                                    i.next = a, r.next = l
                                }
                                n.pending = r
                            }
                        t1 = null
                    }
                    return e
                }

                function iF(e, t) {
                    for (;;) {
                        var n = aW;
                        try {
                            if (tW(), n$.current = rP, n3) {
                                for (var r = n9.memoizedState; null !== r;) {
                                    var a = r.queue;
                                    null !== a && (a.pending = null), r = r.next
                                }
                                n3 = !1
                            }
                            if (n1 = 0, n8 = n2 = n9 = null, n6 = !1, n4 = 0, aj.current = null, null === n || null === n.return) {
                                a$ = 1, a0 = t, aW = null;
                                break
                            }
                            e: {
                                var i = e,
                                    l = n.return,
                                    o = n,
                                    s = t;
                                if (t = aZ, o.flags |= 32768, null !== s && "object" == typeof s && "function" == typeof s.then) {
                                    var u = s,
                                        c = o,
                                        d = c.tag;
                                    if (0 == (1 & c.mode) && (0 === d || 11 === d || 15 === d)) {
                                        var A = c.alternate;
                                        A ? (c.updateQueue = A.updateQueue, c.memoizedState = A.memoizedState, c.lanes = A.lanes) : (c.updateQueue = null, c.memoizedState = null)
                                    }
                                    var h = rX(l);
                                    if (null !== h) {
                                        h.flags &= -257, rz(h, l, o, i, t), 1 & h.mode && rj(i, u, t), t = h, s = u;
                                        var p = t.updateQueue;
                                        if (null === p) {
                                            var B = new Set;
                                            B.add(s), t.updateQueue = B
                                        } else p.add(s);
                                        break e
                                    }
                                    if (0 == (1 & t)) {
                                        rj(i, u, t), iM();
                                        break e
                                    }
                                    s = Error(f(426))
                                } else if (nE && 1 & o.mode) {
                                    var m = rX(l);
                                    if (null !== m) {
                                        0 == (65536 & m.flags) && (m.flags |= 256), rz(m, l, o, i, t), nH(s);
                                        break e
                                    }
                                }
                                i = s,
                                4 !== a$ && (a$ = 2),
                                null === a8 ? a8 = [i] : a8.push(i),
                                s = rN(s, o),
                                o = l;do {
                                    switch (o.tag) {
                                        case 3:
                                            o.flags |= 65536, t &= -t, o.lanes |= t;
                                            var g = rK(o, s, t);
                                            t5(o, g);
                                            break e;
                                        case 1:
                                            i = s;
                                            var C = o.type,
                                                b = o.stateNode;
                                            if (0 == (128 & o.flags) && ("function" == typeof C.getDerivedStateFromError || null !== b && "function" == typeof b.componentDidCatch && (null === it || !it.has(b)))) {
                                                o.flags |= 65536, t &= -t, o.lanes |= t;
                                                var v = rQ(o, i, t);
                                                t5(o, v);
                                                break e
                                            }
                                    }
                                    o = o.return
                                } while (null !== o)
                            }
                            iG(n)
                        } catch (e) {
                            t = e, aW === n && null !== n && (aW = n = n.return);
                            continue
                        }
                        break
                    }
                }

                function iI() {
                    var e = aQ.current;
                    return aQ.current = rP, null === e ? rP : e
                }

                function iM() {
                    (0 === a$ || 3 === a$ || 2 === a$) && (a$ = 4), null === aY || 0 == (268435455 & a1) && 0 == (268435455 & a9) || iC(aY, aZ)
                }

                function iR(e, t) {
                    var n = az;
                    az |= 2;
                    var r = iI();
                    for (aY === e && aZ === t || iE(e, t);;) try {
                        ! function() {
                            for (; null !== aW;) iS(aW)
                        }();
                        break
                    } catch (t) {
                        iF(e, t)
                    }
                    if (tW(), az = n, aQ.current = r, null !== aW) throw Error(f(261));
                    return aY = null, aZ = 0, a$
                }

                function iS(e) {
                    var t = l(e.alternate, e, aV);
                    e.memoizedProps = e.pendingProps, null === t ? iG(e) : aW = t, aj.current = null
                }

                function iG(e) {
                    var n = e;
                    do {
                        var l = n.alternate;
                        if (e = n.return, 0 == (32768 & n.flags)) {
                            if (null !== (l = function(e, n, l) {
                                    var o = n.pendingProps;
                                    switch (nb(n), n.tag) {
                                        case 2:
                                        case 16:
                                        case 15:
                                        case 0:
                                        case 11:
                                        case 7:
                                        case 8:
                                        case 12:
                                        case 9:
                                        case 14:
                                            return rq(n), null;
                                        case 1:
                                        case 17:
                                            return tl(n.type) && to(), rq(n), null;
                                        case 3:
                                            return o = n.stateNode, nX(), e7(tr), e7(tn), nq(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (null === e || null === e.child) && (nT(n) ? rY(n) : null === e || e.memoizedState.isDehydrated && 0 == (256 & n.flags) || (n.flags |= 1024, null !== nI && (ig(nI), nI = null))), r(e, n), rq(n), null;
                                        case 5:
                                            nY(n), l = nQ(nK.current);
                                            var s = n.type;
                                            if (null !== e && null != n.stateNode) a(e, n, s, o, l), e.ref !== n.ref && (n.flags |= 512, n.flags |= 2097152);
                                            else {
                                                if (!o) {
                                                    if (null === n.stateNode) throw Error(f(166));
                                                    return rq(n), null
                                                }
                                                if (e = nQ(nU.current), nT(n)) {
                                                    if (!q) throw Error(f(175));
                                                    e = ej(n.stateNode, n.type, n.memoizedProps, l, e, n, !nF), n.updateQueue = e, null !== e && rY(n)
                                                } else {
                                                    var u = N(s, o, l, e, n);
                                                    t(u, n, !1, !1), n.stateNode = u, O(u, s, o, l, e) && rY(n)
                                                }
                                                null !== n.ref && (n.flags |= 512, n.flags |= 2097152)
                                            }
                                            return rq(n), null;
                                        case 6:
                                            if (e && null != n.stateNode) i(e, n, e.memoizedProps, o);
                                            else {
                                                if ("string" != typeof o && null === n.stateNode) throw Error(f(166));
                                                if (e = nQ(nK.current), l = nQ(nU.current), nT(n)) {
                                                    if (!q) throw Error(f(176));
                                                    if ((l = eX(e = n.stateNode, o = n.memoizedProps, n, !nF)) && null !== (s = nv)) switch (u = 0 != (1 & s.mode), s.tag) {
                                                        case 3:
                                                            e0(s.stateNode.containerInfo, e, o, u);
                                                            break;
                                                        case 5:
                                                            e1(s.type, s.memoizedProps, s.stateNode, e, o, u)
                                                    }
                                                    l && rY(n)
                                                } else n.stateNode = j(o, e, l, n)
                                            }
                                            return rq(n), null;
                                        case 13:
                                            if (e7(nW), o = n.memoizedState, nE && null !== ny && 0 != (1 & n.mode) && 0 == (128 & n.flags)) {
                                                for (e = ny; e;) e = eU(e);
                                                return nx(), n.flags |= 98560, n
                                            }
                                            if (null !== o && null !== o.dehydrated) {
                                                if (o = nT(n), null === e) {
                                                    if (!o) throw Error(f(318));
                                                    if (!q) throw Error(f(344));
                                                    if (!(e = null !== (e = n.memoizedState) ? e.dehydrated : null)) throw Error(f(317));
                                                    ez(e, n)
                                                } else nx(), 0 == (128 & n.flags) && (n.memoizedState = null), n.flags |= 4;
                                                return rq(n), null
                                            }
                                            if (null !== nI && (ig(nI), nI = null), 0 != (128 & n.flags)) return n.lanes = l, n;
                                            return o = null !== o, l = !1, null === e ? nT(n) : l = null !== e.memoizedState, o && !l && (n.child.flags |= 8192, 0 != (1 & n.mode) && (null === e || 0 != (1 & nW.current) ? 0 === a$ && (a$ = 3) : iM())), null !== n.updateQueue && (n.flags |= 4), rq(n), null;
                                        case 4:
                                            return nX(), r(e, n), null === e && ee(n.stateNode.containerInfo), rq(n), null;
                                        case 10:
                                            return tV(n.type._context), rq(n), null;
                                        case 19:
                                            if (e7(nW), null === (s = n.memoizedState)) return rq(n), null;
                                            if (o = 0 != (128 & n.flags), null === (u = s.rendering)) {
                                                if (o) rV(s, !1);
                                                else {
                                                    if (0 !== a$ || null !== e && 0 != (128 & e.flags))
                                                        for (e = n.child; null !== e;) {
                                                            if (null !== (u = nZ(e))) {
                                                                for (n.flags |= 128, rV(s, !1), null !== (e = u.updateQueue) && (n.updateQueue = e, n.flags |= 4), n.subtreeFlags = 0, e = l, o = n.child; null !== o;) l = o, s = e, l.flags &= 14680066, null === (u = l.alternate) ? (l.childLanes = 0, l.lanes = s, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = u.childLanes, l.lanes = u.lanes, l.child = u.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = u.memoizedProps, l.memoizedState = u.memoizedState, l.updateQueue = u.updateQueue, l.type = u.type, s = u.dependencies, l.dependencies = null === s ? null : {
                                                                    lanes: s.lanes,
                                                                    firstContext: s.firstContext
                                                                }), o = o.sibling;
                                                                return te(nW, 1 & nW.current | 2), n.child
                                                            }
                                                            e = e.sibling
                                                        }
                                                    null !== s.tail && tG() > a4 && (n.flags |= 128, o = !0, rV(s, !1), n.lanes = 4194304)
                                                }
                                            } else {
                                                if (!o) {
                                                    if (null !== (e = nZ(u))) {
                                                        if (n.flags |= 128, o = !0, null !== (e = e.updateQueue) && (n.updateQueue = e, n.flags |= 4), rV(s, !0), null === s.tail && "hidden" === s.tailMode && !u.alternate && !nE) return rq(n), null
                                                    } else 2 * tG() - s.renderingStartTime > a4 && 1073741824 !== l && (n.flags |= 128, o = !0, rV(s, !1), n.lanes = 4194304)
                                                }
                                                s.isBackwards ? (u.sibling = n.child, n.child = u) : (null !== (e = s.last) ? e.sibling = u : n.child = u, s.last = u)
                                            }
                                            if (null !== s.tail) return n = s.tail, s.rendering = n, s.tail = n.sibling, s.renderingStartTime = tG(), n.sibling = null, e = nW.current, te(nW, o ? 1 & e | 2 : 1 & e), n;
                                            return rq(n), null;
                                        case 22:
                                        case 23:
                                            return iy(), o = null !== n.memoizedState, null !== e && null !== e.memoizedState !== o && (n.flags |= 8192), o && 0 != (1 & n.mode) ? 0 != (1073741824 & aV) && (rq(n), Z && 6 & n.subtreeFlags && (n.flags |= 8192)) : rq(n), null;
                                        case 24:
                                        case 25:
                                            return null
                                    }
                                    throw Error(f(156, n.tag))
                                }(l, n, aV))) {
                                aW = l;
                                return
                            }
                        } else {
                            if (null !== (l = function(e, t) {
                                    switch (nb(t), t.tag) {
                                        case 1:
                                            return tl(t.type) && to(), 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
                                        case 3:
                                            return nX(), e7(tr), e7(tn), nq(), 0 != (65536 & (e = t.flags)) && 0 == (128 & e) ? (t.flags = -65537 & e | 128, t) : null;
                                        case 5:
                                            return nY(t), null;
                                        case 13:
                                            if (e7(nW), null !== (e = t.memoizedState) && null !== e.dehydrated) {
                                                if (null === t.alternate) throw Error(f(340));
                                                nx()
                                            }
                                            return 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
                                        case 19:
                                            return e7(nW), null;
                                        case 4:
                                            return nX(), null;
                                        case 10:
                                            return tV(t.type._context), null;
                                        case 22:
                                        case 23:
                                            return iy(), null;
                                        default:
                                            return null
                                    }
                                }(l, n))) {
                                l.flags &= 32767, aW = l;
                                return
                            }
                            if (null !== e) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
                            else {
                                a$ = 6, aW = null;
                                return
                            }
                        }
                        if (null !== (n = n.sibling)) {
                            aW = n;
                            return
                        }
                        aW = n = e
                    } while (null !== n);
                    0 === a$ && (a$ = 5)
                }

                function iD(e, t) {
                    var n = tE,
                        r = aX.transition;
                    try {
                        aX.transition = null, tE = 1,
                            function(e, t, n) {
                                do iT(); while (null !== ia);
                                if (0 != (6 & az)) throw Error(f(327));
                                var r = e.finishedWork,
                                    a = e.finishedLanes;
                                if (null !== r) {
                                    if (e.finishedWork = null, e.finishedLanes = 0, r === e.current) throw Error(f(177));
                                    e.callbackNode = null, e.callbackPriority = 0;
                                    var i = r.lanes | r.childLanes;
                                    if (function(e, t) {
                                            var n = e.pendingLanes & ~t;
                                            e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
                                            var r = e.eventTimes;
                                            for (e = e.expirationTimes; 0 < n;) {
                                                var a = 31 - td(n),
                                                    i = 1 << a;
                                                t[a] = 0, r[a] = -1, e[a] = -1, n &= ~i
                                            }
                                        }(e, i), e === aY && (aW = aY = null, aZ = 0), 0 == (2064 & r.subtreeFlags) && 0 == (2064 & r.flags) || ir || (ir = !0, l = tx, o = function() {
                                            return iT(), null
                                        }, tI(l, o)), i = 0 != (15990 & r.flags), 0 != (15990 & r.subtreeFlags) || i) {
                                        i = aX.transition, aX.transition = null;
                                        var l, o, s, u, c = tE;
                                        tE = 1;
                                        var d = az;
                                        az |= 4, aj.current = null,
                                            function(e, t) {
                                                for (J(e.containerInfo), ah = t; null !== ah;)
                                                    if (t = (e = ah).child, 0 != (1028 & e.subtreeFlags) && null !== t) t.return = e, ah = t;
                                                    else
                                                        for (; null !== ah;) {
                                                            e = ah;
                                                            try {
                                                                var n = e.alternate;
                                                                if (0 != (1024 & e.flags)) switch (e.tag) {
                                                                    case 0:
                                                                    case 11:
                                                                    case 15:
                                                                    case 5:
                                                                    case 6:
                                                                    case 4:
                                                                    case 17:
                                                                        break;
                                                                    case 1:
                                                                        if (null !== n) {
                                                                            var r = n.memoizedProps,
                                                                                a = n.memoizedState,
                                                                                i = e.stateNode,
                                                                                l = i.getSnapshotBeforeUpdate(e.elementType === e.type ? r : tQ(e.type, r), a);
                                                                            i.__reactInternalSnapshotBeforeUpdate = l
                                                                        }
                                                                        break;
                                                                    case 3:
                                                                        Z && eR(e.stateNode.containerInfo);
                                                                        break;
                                                                    default:
                                                                        throw Error(f(163))
                                                                }
                                                            } catch (t) {
                                                                iH(e, e.return, t)
                                                            }
                                                            if (null !== (t = e.sibling)) {
                                                                t.return = e.return, ah = t;
                                                                break
                                                            }
                                                            ah = e.return
                                                        }
                                                n = am, am = !1
                                            }(e, r),
                                            function(e, t) {
                                                for (ah = t; null !== ah;) {
                                                    var n = (t = ah).deletions;
                                                    if (null !== n)
                                                        for (var r = 0; r < n.length; r++) {
                                                            var a = n[r];
                                                            try {
                                                                var i = e;
                                                                Z ? aM(i, a, t) : ay(i, a, t);
                                                                var l = a.alternate;
                                                                null !== l && (l.return = null), a.return = null
                                                            } catch (e) {
                                                                iH(a, t, e)
                                                            }
                                                        }
                                                    if (n = t.child, 0 != (12854 & t.subtreeFlags) && null !== n) n.return = t, ah = n;
                                                    else
                                                        for (; null !== ah;) {
                                                            t = ah;
                                                            try {
                                                                var o = t.flags;
                                                                if (32 & o && Z && ey(t.stateNode), 512 & o) {
                                                                    var s = t.alternate;
                                                                    if (null !== s) {
                                                                        var u = s.ref;
                                                                        null !== u && ("function" == typeof u ? u(null) : u.current = null)
                                                                    }
                                                                }
                                                                if (8192 & o) switch (t.tag) {
                                                                    case 13:
                                                                        if (null !== t.memoizedState) {
                                                                            var c = t.alternate;
                                                                            (null === c || null === c.memoizedState) && (a6 = tG())
                                                                        }
                                                                        break;
                                                                    case 22:
                                                                        var f = null !== t.memoizedState,
                                                                            d = t.alternate,
                                                                            A = null !== d && null !== d.memoizedState;
                                                                        if (n = t, Z) {
                                                                            e: if (r = n, a = f, i = null, Z)
                                                                                for (var h = r;;) {
                                                                                    if (5 === h.tag) {
                                                                                        if (null === i) {
                                                                                            i = h;
                                                                                            var p = h.stateNode;
                                                                                            a ? eE(p) : eI(h.stateNode, h.memoizedProps)
                                                                                        }
                                                                                    } else if (6 === h.tag) {
                                                                                        if (null === i) {
                                                                                            var B = h.stateNode;
                                                                                            a ? eF(B) : eM(B, h.memoizedProps)
                                                                                        }
                                                                                    } else if ((22 !== h.tag && 23 !== h.tag || null === h.memoizedState || h === r) && null !== h.child) {
                                                                                        h.child.return = h, h = h.child;
                                                                                        continue
                                                                                    }
                                                                                    if (h === r) break;
                                                                                    for (; null === h.sibling;) {
                                                                                        if (null === h.return || h.return === r) break e;
                                                                                        i === h && (i = null), h = h.return
                                                                                    }
                                                                                    i === h && (i = null), h.sibling.return = h.return, h = h.sibling
                                                                                }
                                                                        }
                                                                        if (f && !A && 0 != (1 & n.mode)) {
                                                                            ah = n;
                                                                            for (var m = n.child; null !== m;) {
                                                                                for (n = ah = m; null !== ah;) {
                                                                                    var g = (r = ah).child;
                                                                                    switch (r.tag) {
                                                                                        case 0:
                                                                                        case 11:
                                                                                        case 14:
                                                                                        case 15:
                                                                                            ag(4, r, r.return);
                                                                                            break;
                                                                                        case 1:
                                                                                            ap(r, r.return);
                                                                                            var C = r.stateNode;
                                                                                            if ("function" == typeof C.componentWillUnmount) {
                                                                                                var b = r.return;
                                                                                                try {
                                                                                                    C.props = r.memoizedProps, C.state = r.memoizedState, C.componentWillUnmount()
                                                                                                } catch (e) {
                                                                                                    iH(r, b, e)
                                                                                                }
                                                                                            }
                                                                                            break;
                                                                                        case 5:
                                                                                            ap(r, r.return);
                                                                                            break;
                                                                                        case 22:
                                                                                            if (null !== r.memoizedState) {
                                                                                                aD(n);
                                                                                                continue
                                                                                            }
                                                                                    }
                                                                                    null !== g ? (g.return = r, ah = g) : aD(n)
                                                                                }
                                                                                m = m.sibling
                                                                            }
                                                                        }
                                                                }
                                                                switch (4102 & o) {
                                                                    case 2:
                                                                        aI(t), t.flags &= -3;
                                                                        break;
                                                                    case 6:
                                                                        aI(t), t.flags &= -3, aR(t.alternate, t);
                                                                        break;
                                                                    case 4096:
                                                                        t.flags &= -4097;
                                                                        break;
                                                                    case 4100:
                                                                        t.flags &= -4097, aR(t.alternate, t);
                                                                        break;
                                                                    case 4:
                                                                        aR(t.alternate, t)
                                                                }
                                                            } catch (e) {
                                                                iH(t, t.return, e)
                                                            }
                                                            if (null !== (n = t.sibling)) {
                                                                n.return = t.return, ah = n;
                                                                break
                                                            }
                                                            ah = t.return
                                                        }
                                                }
                                            }(e, r, a), L(e.containerInfo), e.current = r, s = r, u = e, ah = s,
                                            function e(t, n, r) {
                                                for (var a = 0 != (1 & t.mode); null !== ah;) {
                                                    var i = ah,
                                                        l = i.child;
                                                    if (22 === i.tag && a) {
                                                        var o = null !== i.memoizedState || af;
                                                        if (!o) {
                                                            var s = i.alternate,
                                                                u = null !== s && null !== s.memoizedState || ad;
                                                            s = af;
                                                            var c = ad;
                                                            if (af = o, (ad = u) && !c)
                                                                for (ah = i; null !== ah;) u = (o = ah).child, 22 === o.tag && null !== o.memoizedState ? aT(i) : null !== u ? (u.return = o, ah = u) : aT(i);
                                                            for (; null !== l;) ah = l, e(l, n, r), l = l.sibling;
                                                            ah = i, af = s, ad = c
                                                        }
                                                        aG(t, n, r)
                                                    } else 0 != (8772 & i.subtreeFlags) && null !== l ? (l.return = i, ah = l) : aG(t, n, r)
                                                }
                                            }(s, u, a), tS(), az = d, tE = c, aX.transition = i
                                    } else e.current = r;
                                    if (ir && (ir = !1, ia = e, ii = a), 0 === (i = e.pendingLanes) && (it = null), function(e) {
                                            if (t_ && "function" == typeof t_.onCommitFiberRoot) try {
                                                t_.onCommitFiberRoot(tw, e, void 0, 128 == (128 & e.current.flags))
                                            } catch (e) {}
                                        }(r.stateNode, n), ip(e, tG()), null !== t)
                                        for (n = e.onRecoverableError, r = 0; r < t.length; r++) n(t[r]);
                                    if (a7) throw a7 = !1, e = ie, ie = null, e;
                                    0 != (1 & ii) && 0 !== e.tag && iT(), 0 != (1 & (i = e.pendingLanes)) ? e === io ? il++ : (il = 0, io = e) : il = 0, tU()
                                }
                            }(e, t, n)
                    } finally {
                        aX.transition = r, tE = n
                    }
                    return null
                }

                function iT() {
                    if (null !== ia) {
                        var e = tF(ii),
                            t = aX.transition,
                            n = tE;
                        try {
                            if (aX.transition = null, tE = 16 > e ? 16 : e, null === ia) var r = !1;
                            else {
                                if (e = ia, ia = null, ii = 0, 0 != (6 & az)) throw Error(f(331));
                                var a = az;
                                for (az |= 4, ah = e.current; null !== ah;) {
                                    var i = ah,
                                        l = i.child;
                                    if (0 != (16 & ah.flags)) {
                                        var o = i.deletions;
                                        if (null !== o) {
                                            for (var s = 0; s < o.length; s++) {
                                                var u = o[s];
                                                for (ah = u; null !== ah;) {
                                                    var c = ah;
                                                    switch (c.tag) {
                                                        case 0:
                                                        case 11:
                                                        case 15:
                                                            ag(8, c, i)
                                                    }
                                                    var d = c.child;
                                                    if (null !== d) d.return = c, ah = d;
                                                    else
                                                        for (; null !== ah;) {
                                                            var A = (c = ah).sibling,
                                                                h = c.return;
                                                            if (! function e(t) {
                                                                    var n = t.alternate;
                                                                    null !== n && (t.alternate = null, e(n)), t.child = null, t.deletions = null, t.sibling = null, 5 === t.tag && null !== (n = t.stateNode) && en(n), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null
                                                                }(c), c === u) {
                                                                ah = null;
                                                                break
                                                            }
                                                            if (null !== A) {
                                                                A.return = h, ah = A;
                                                                break
                                                            }
                                                            ah = h
                                                        }
                                                }
                                            }
                                            var p = i.alternate;
                                            if (null !== p) {
                                                var B = p.child;
                                                if (null !== B) {
                                                    p.child = null;
                                                    do {
                                                        var m = B.sibling;
                                                        B.sibling = null, B = m
                                                    } while (null !== B)
                                                }
                                            }
                                            ah = i
                                        }
                                    }
                                    if (0 != (2064 & i.subtreeFlags) && null !== l) l.return = i, ah = l;
                                    else
                                        for (; null !== ah;) {
                                            if (i = ah, 0 != (2048 & i.flags)) switch (i.tag) {
                                                case 0:
                                                case 11:
                                                case 15:
                                                    ag(9, i, i.return)
                                            }
                                            var g = i.sibling;
                                            if (null !== g) {
                                                g.return = i.return, ah = g;
                                                break
                                            }
                                            ah = i.return
                                        }
                                }
                                var C = e.current;
                                for (ah = C; null !== ah;) {
                                    var b = (l = ah).child;
                                    if (0 != (2064 & l.subtreeFlags) && null !== b) b.return = l, ah = b;
                                    else
                                        for (l = C; null !== ah;) {
                                            if (o = ah, 0 != (2048 & o.flags)) try {
                                                switch (o.tag) {
                                                    case 0:
                                                    case 11:
                                                    case 15:
                                                        aC(9, o)
                                                }
                                            } catch (e) {
                                                iH(o, o.return, e)
                                            }
                                            if (o === l) {
                                                ah = null;
                                                break
                                            }
                                            var v = o.sibling;
                                            if (null !== v) {
                                                v.return = o.return, ah = v;
                                                break
                                            }
                                            ah = o.return
                                        }
                                }
                                if (az = a, tU(), t_ && "function" == typeof t_.onPostCommitFiberRoot) try {
                                    t_.onPostCommitFiberRoot(tw, e)
                                } catch (e) {}
                                r = !0
                            }
                            return r
                        } finally {
                            tE = n, aX.transition = t
                        }
                    }
                    return !1
                }

                function ix(e, t, n) {
                    t = rK(e, t = rN(n, t), 1), t6(e, t), t = ic(), null !== (e = ih(e, 1)) && (tv(e, 1, t), ip(e, t))
                }

                function iH(e, t, n) {
                    if (3 === e.tag) ix(e, e, n);
                    else
                        for (; null !== t;) {
                            if (3 === t.tag) {
                                ix(t, e, n);
                                break
                            }
                            if (1 === t.tag) {
                                var r = t.stateNode;
                                if ("function" == typeof t.type.getDerivedStateFromError || "function" == typeof r.componentDidCatch && (null === it || !it.has(r))) {
                                    e = rQ(t, e = rN(n, e), 1), t6(t, e), e = ic(), null !== (t = ih(t, 1)) && (tv(t, 1, e), ip(t, e));
                                    break
                                }
                            }
                            t = t.return
                        }
                }

                function iw(e, t, n) {
                    var r = e.pingCache;
                    null !== r && r.delete(t), t = ic(), e.pingedLanes |= e.suspendedLanes & n, aY === e && (aZ & n) === n && (4 === a$ || 3 === a$ && (130023424 & aZ) === aZ && 500 > tG() - a6 ? iE(e, 0) : a2 |= n), ip(e, t)
                }

                function i_(e, t) {
                    0 === t && (0 == (1 & e.mode) ? t = 1 : (t = tB, 0 == (130023424 & (tB <<= 1)) && (tB = 4194304)));
                    var n = ic();
                    null !== (e = ih(e, t)) && (tv(e, t, n), ip(e, n))
                }

                function iP(e) {
                    var t = e.memoizedState,
                        n = 0;
                    null !== t && (n = t.retryLane), i_(e, n)
                }

                function ik(e, t) {
                    var n = 0;
                    switch (e.tag) {
                        case 13:
                            var r = e.stateNode,
                                a = e.memoizedState;
                            null !== a && (n = a.retryLane);
                            break;
                        case 19:
                            r = e.stateNode;
                            break;
                        default:
                            throw Error(f(314))
                    }
                    null !== r && r.delete(t), i_(e, n)
                }

                function iJ(e, t, n, r) {
                    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
                }

                function iL(e, t, n, r) {
                    return new iJ(e, t, n, r)
                }

                function iN(e) {
                    return !(!(e = e.prototype) || !e.isReactComponent)
                }

                function iU(e, t) {
                    var n = e.alternate;
                    return null === n ? ((n = iL(e.tag, t, e.key, e.mode)).elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = 14680064 & e.flags, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = null === t ? null : {
                        lanes: t.lanes,
                        firstContext: t.firstContext
                    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
                }

                function iO(e, t, n, r, a, i) {
                    var l = 2;
                    if (r = e, "function" == typeof e) iN(e) && (l = 1);
                    else if ("string" == typeof e) l = 5;
                    else e: switch (e) {
                        case p:
                            return iK(n.children, a, i, t);
                        case B:
                            l = 8, a |= 8;
                            break;
                        case m:
                            return (e = iL(12, n, t, 2 | a)).elementType = m, e.lanes = i, e;
                        case v:
                            return (e = iL(13, n, t, a)).elementType = v, e.lanes = i, e;
                        case y:
                            return (e = iL(19, n, t, a)).elementType = y, e.lanes = i, e;
                        case I:
                            return iQ(n, a, i, t);
                        default:
                            if ("object" == typeof e && null !== e) switch (e.$$typeof) {
                                case g:
                                    l = 10;
                                    break e;
                                case C:
                                    l = 9;
                                    break e;
                                case b:
                                    l = 11;
                                    break e;
                                case E:
                                    l = 14;
                                    break e;
                                case F:
                                    l = 16, r = null;
                                    break e
                            }
                            throw Error(f(130, null == e ? e : typeof e, ""))
                    }
                    return (t = iL(l, n, t, a)).elementType = e, t.type = r, t.lanes = i, t
                }

                function iK(e, t, n, r) {
                    return (e = iL(7, e, r, t)).lanes = n, e
                }

                function iQ(e, t, n, r) {
                    return (e = iL(22, e, r, t)).elementType = I, e.lanes = n, e.stateNode = {}, e
                }

                function ij(e, t, n) {
                    return (e = iL(6, e, null, t)).lanes = n, e
                }

                function iX(e, t, n) {
                    return (t = iL(4, null !== e.children ? e.children : [], e.key, t)).lanes = n, t.stateNode = {
                        containerInfo: e.containerInfo,
                        pendingChildren: null,
                        implementation: e.implementation
                    }, t
                }

                function iz(e, t, n, r, a) {
                    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = Y, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = tb(0), this.expirationTimes = tb(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = tb(0), this.identifierPrefix = r, this.onRecoverableError = a, q && (this.mutableSourceEagerHydrationData = null)
                }

                function iY(e, t, n, r, a, i, l, o, s) {
                    return e = new iz(e, t, n, o, s), 1 === t ? (t = 1, !0 === i && (t |= 8)) : t = 0, i = iL(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = {
                        element: r,
                        isDehydrated: n,
                        cache: null,
                        transitions: null
                    }, t2(i), e
                }

                function iW(e) {
                    if (!e) return tt;
                    e = e._reactInternals;
                    e: {
                        if (G(e) !== e || 1 !== e.tag) throw Error(f(170));
                        var t = e;do {
                            switch (t.tag) {
                                case 3:
                                    t = t.stateNode.context;
                                    break e;
                                case 1:
                                    if (tl(t.type)) {
                                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                                        break e
                                    }
                            }
                            t = t.return
                        } while (null !== t);
                        throw Error(f(171))
                    }
                    if (1 === e.tag) {
                        var n = e.type;
                        if (tl(n)) return tu(e, n, t)
                    }
                    return t
                }

                function iZ(e) {
                    var t = e._reactInternals;
                    if (void 0 === t) {
                        if ("function" == typeof e.render) throw Error(f(188));
                        throw Error(f(268, e = Object.keys(e).join(",")))
                    }
                    return null === (e = x(t)) ? null : e.stateNode
                }

                function iV(e, t) {
                    if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
                        var n = e.retryLane;
                        e.retryLane = 0 !== n && n < t ? n : t
                    }
                }

                function iq(e, t) {
                    iV(e, t), (e = e.alternate) && iV(e, t)
                }

                function i$(e) {
                    return null === (e = x(e)) ? null : e.stateNode
                }

                function i0() {
                    return null
                }
                return l = function(e, t, n) {
                    if (null !== e) {
                        if (e.memoizedProps !== t.pendingProps || tr.current) r0 = !0;
                        else {
                            if (0 == (e.lanes & n) && 0 == (128 & t.flags)) return r0 = !1,
                                function(e, t, n) {
                                    switch (t.tag) {
                                        case 3:
                                            ae(t), nx();
                                            break;
                                        case 5:
                                            nz(t);
                                            break;
                                        case 1:
                                            tl(t.type) && tc(t);
                                            break;
                                        case 4:
                                            nj(t, t.stateNode.containerInfo);
                                            break;
                                        case 10:
                                            tZ(t, t.type._context, t.memoizedProps.value);
                                            break;
                                        case 13:
                                            var r = t.memoizedState;
                                            if (null !== r) {
                                                if (null !== r.dehydrated) return te(nW, 1 & nW.current), t.flags |= 128, null;
                                                if (0 != (n & t.child.childLanes)) return aa(e, t, n);
                                                return te(nW, 1 & nW.current), null !== (e = ac(e, t, n)) ? e.sibling : null
                                            }
                                            te(nW, 1 & nW.current);
                                            break;
                                        case 19:
                                            if (r = 0 != (n & t.childLanes), 0 != (128 & e.flags)) {
                                                if (r) return au(e, t, n);
                                                t.flags |= 128
                                            }
                                            var a = t.memoizedState;
                                            if (null !== a && (a.rendering = null, a.tail = null, a.lastEffect = null), te(nW, nW.current), !r) return null;
                                            break;
                                        case 22:
                                        case 23:
                                            return t.lanes = 0, r3(e, t, n)
                                    }
                                    return ac(e, t, n)
                                }(e, t, n);
                            r0 = 0 != (131072 & e.flags)
                        }
                    } else r0 = !1, nE && 0 != (1048576 & t.flags) && ng(t, nf, t.index);
                    switch (t.lanes = 0, t.tag) {
                        case 2:
                            var r = t.type;
                            null !== e && (e.alternate = null, t.alternate = null, t.flags |= 2), e = t.pendingProps;
                            var a = ti(t, tn.current);
                            t$(t, n), a = rt(null, t, r, e, a, n);
                            var i = rn();
                            return t.flags |= 1, "object" == typeof a && null !== a && "function" == typeof a.render && void 0 === a.$$typeof ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, tl(r) ? (i = !0, tc(t)) : i = !1, t.memoizedState = null !== a.state && void 0 !== a.state ? a.state : null, t2(t), a.updater = nr, t.stateNode = a, a._reactInternals = t, no(t, r, e, n), t = r7(null, t, r, !0, i, n)) : (t.tag = 0, nE && i && nC(t), r1(null, t, a, n), t = t.child), t;
                        case 16:
                            r = t.elementType;
                            e: {
                                switch (null !== e && (e.alternate = null, t.alternate = null, t.flags |= 2), e = t.pendingProps, r = (a = r._init)(r._payload), t.type = r, a = t.tag = function(e) {
                                    if ("function" == typeof e) return iN(e) ? 1 : 0;
                                    if (null != e) {
                                        if ((e = e.$$typeof) === b) return 11;
                                        if (e === E) return 14
                                    }
                                    return 2
                                }(r), e = tQ(r, e), a) {
                                    case 0:
                                        t = r4(null, t, r, e, n);
                                        break e;
                                    case 1:
                                        t = r5(null, t, r, e, n);
                                        break e;
                                    case 11:
                                        t = r9(null, t, r, e, n);
                                        break e;
                                    case 14:
                                        t = r2(null, t, r, tQ(r.type, e), n);
                                        break e
                                }
                                throw Error(f(306, r, ""))
                            }
                            return t;
                        case 0:
                            return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : tQ(r, a), r4(e, t, r, a, n);
                        case 1:
                            return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : tQ(r, a), r5(e, t, r, a, n);
                        case 3:
                            e: {
                                if (ae(t), null === e) throw Error(f(387));r = t.pendingProps,
                                a = (i = t.memoizedState).element,
                                t8(e, t),
                                t7(t, r, null, n);
                                var l = t.memoizedState;
                                if (r = l.element, q && i.isDehydrated) {
                                    if (i = {
                                            element: r,
                                            isDehydrated: !1,
                                            cache: l.cache,
                                            transitions: l.transitions
                                        }, t.updateQueue.baseState = i, t.memoizedState = i, 256 & t.flags) {
                                        t = at(e, t, r, n, a = Error(f(423)));
                                        break e
                                    }
                                    if (r !== a) {
                                        t = at(e, t, r, n, a = Error(f(424)));
                                        break e
                                    }
                                    for (q && (ny = eK(t.stateNode.containerInfo), nv = t, nE = !0, nI = null, nF = !1), n = nL(t, null, r, n), t.child = n; n;) n.flags = -3 & n.flags | 4096, n = n.sibling
                                } else {
                                    if (nx(), r === a) {
                                        t = ac(e, t, n);
                                        break e
                                    }
                                    r1(e, t, r, n)
                                }
                                t = t.child
                            }
                            return t;
                        case 5:
                            return nz(t), null === e && nG(t), r = t.type, a = t.pendingProps, i = null !== e ? e.memoizedProps : null, l = a.children, Q(r, a) ? l = null : null !== i && Q(r, i) && (t.flags |= 32), r6(e, t), r1(e, t, l, n), t.child;
                        case 6:
                            return null === e && nG(t), null;
                        case 13:
                            return aa(e, t, n);
                        case 4:
                            return nj(t, t.stateNode.containerInfo), r = t.pendingProps, null === e ? t.child = nJ(t, null, r, n) : r1(e, t, r, n), t.child;
                        case 11:
                            return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : tQ(r, a), r9(e, t, r, a, n);
                        case 7:
                            return r1(e, t, t.pendingProps, n), t.child;
                        case 8:
                        case 12:
                            return r1(e, t, t.pendingProps.children, n), t.child;
                        case 10:
                            e: {
                                if (r = t.type._context, a = t.pendingProps, i = t.memoizedProps, tZ(t, r, l = a.value), null !== i) {
                                    if (tP(i.value, l)) {
                                        if (i.children === a.children && !tr.current) {
                                            t = ac(e, t, n);
                                            break e
                                        }
                                    } else
                                        for (null !== (i = t.child) && (i.return = t); null !== i;) {
                                            var o = i.dependencies;
                                            if (null !== o) {
                                                l = i.child;
                                                for (var s = o.firstContext; null !== s;) {
                                                    if (s.context === r) {
                                                        if (1 === i.tag) {
                                                            (s = t3(-1, n & -n)).tag = 2;
                                                            var u = i.updateQueue;
                                                            if (null !== u) {
                                                                var c = (u = u.shared).pending;
                                                                null === c ? s.next = s : (s.next = c.next, c.next = s), u.pending = s
                                                            }
                                                        }
                                                        i.lanes |= n, null !== (s = i.alternate) && (s.lanes |= n), tq(i.return, n, t), o.lanes |= n;
                                                        break
                                                    }
                                                    s = s.next
                                                }
                                            } else if (10 === i.tag) l = i.type === t.type ? null : i.child;
                                            else if (18 === i.tag) {
                                                if (null === (l = i.return)) throw Error(f(341));
                                                l.lanes |= n, null !== (o = l.alternate) && (o.lanes |= n), tq(l, n, t), l = i.sibling
                                            } else l = i.child;
                                            if (null !== l) l.return = i;
                                            else
                                                for (l = i; null !== l;) {
                                                    if (l === t) {
                                                        l = null;
                                                        break
                                                    }
                                                    if (null !== (i = l.sibling)) {
                                                        i.return = l.return, l = i;
                                                        break
                                                    }
                                                    l = l.return
                                                }
                                            i = l
                                        }
                                }
                                r1(e, t, a.children, n),
                                t = t.child
                            }
                            return t;
                        case 9:
                            return a = t.type, r = t.pendingProps.children, t$(t, n), r = r(a = t0(a)), t.flags |= 1, r1(e, t, r, n), t.child;
                        case 14:
                            return a = tQ(r = t.type, t.pendingProps), a = tQ(r.type, a), r2(e, t, r, a, n);
                        case 15:
                            return r8(e, t, t.type, t.pendingProps, n);
                        case 17:
                            return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : tQ(r, a), null !== e && (e.alternate = null, t.alternate = null, t.flags |= 2), t.tag = 1, tl(r) ? (e = !0, tc(t)) : e = !1, t$(t, n), ni(t, r, a), no(t, r, a, n), r7(null, t, r, !0, e, n);
                        case 19:
                            return au(e, t, n);
                        case 22:
                            return r3(e, t, n)
                    }
                    throw Error(f(156, t.tag))
                }, o.attemptContinuousHydration = function(e) {
                    13 === e.tag && (iA(e, 134217728, ic()), iq(e, 134217728))
                }, o.attemptHydrationAtCurrentPriority = function(e) {
                    if (13 === e.tag) {
                        var t = ic(),
                            n = id(e);
                        iA(e, n, t), iq(e, n)
                    }
                }, o.attemptSynchronousHydration = function(e) {
                    switch (e.tag) {
                        case 3:
                            var t = e.stateNode;
                            if (t.current.memoizedState.isDehydrated) {
                                var n = tm(t.pendingLanes);
                                0 !== n && (ty(t, 1 | n), ip(t, tG()), 0 == (6 & az) && (a5(), tU()))
                            }
                            break;
                        case 13:
                            var r = ic();
                            iv(function() {
                                return iA(e, 1, r)
                            }), iq(e, 1)
                    }
                }, o.batchedUpdates = function(e, t) {
                    var n = az;
                    az |= 1;
                    try {
                        return e(t)
                    } finally {
                        0 === (az = n) && (a5(), tJ && tU())
                    }
                }, o.createComponentSelector = function(e) {
                    return {
                        $$typeof: ax,
                        value: e
                    }
                }, o.createContainer = function(e, t, n, r, a, i, l) {
                    return iY(e, t, !1, null, n, r, a, i, l)
                }, o.createHasPseudoClassSelector = function(e) {
                    return {
                        $$typeof: aH,
                        value: e
                    }
                }, o.createHydrationContainer = function(e, t, n, r, a, i, l, o, s) {
                    return (e = iY(n, r, !0, e, a, i, l, o, s)).context = iW(null), n = e.current, (i = t3(r = ic(), a = id(n))).callback = null != t ? t : null, t6(n, i), e.current.lanes = a, tv(e, a, r), ip(e, r), e
                }, o.createPortal = function(e, t, n) {
                    var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
                    return {
                        $$typeof: h,
                        key: null == r ? null : "" + r,
                        children: e,
                        containerInfo: t,
                        implementation: n
                    }
                }, o.createRoleSelector = function(e) {
                    return {
                        $$typeof: aw,
                        value: e
                    }
                }, o.createTestNameSelector = function(e) {
                    return {
                        $$typeof: a_,
                        value: e
                    }
                }, o.createTextSelector = function(e) {
                    return {
                        $$typeof: aP,
                        value: e
                    }
                }, o.deferredUpdates = function(e) {
                    var t = tE,
                        n = aX.transition;
                    try {
                        return aX.transition = null, tE = 16, e()
                    } finally {
                        tE = t, aX.transition = n
                    }
                }, o.discreteUpdates = function(e, t, n, r, a) {
                    var i = tE,
                        l = aX.transition;
                    try {
                        return aX.transition = null, tE = 1, e(t, n, r, a)
                    } finally {
                        tE = i, aX.transition = l, 0 === az && a5()
                    }
                }, o.findAllNodes = aO, o.findBoundingRects = function(e, t) {
                    if (!ei) throw Error(f(363));
                    t = aO(e, t), e = [];
                    for (var n = 0; n < t.length; n++) e.push(eo(t[n]));
                    for (t = e.length - 1; 0 < t; t--) {
                        n = e[t];
                        for (var r = n.x, a = r + n.width, i = n.y, l = i + n.height, o = t - 1; 0 <= o; o--)
                            if (t !== o) {
                                var s = e[o],
                                    u = s.x,
                                    c = u + s.width,
                                    d = s.y,
                                    A = d + s.height;
                                if (r >= u && i >= d && a <= c && l <= A) {
                                    e.splice(t, 1);
                                    break
                                }
                                if (r !== u || n.width !== s.width || A < i || d > l) {
                                    if (!(i !== d || n.height !== s.height || c < r || u > a)) {
                                        u > r && (s.width += u - r, s.x = r), c < a && (s.width = a - u), e.splice(t, 1);
                                        break
                                    }
                                } else {
                                    d > i && (s.height += d - i, s.y = i), A < l && (s.height = l - d), e.splice(t, 1);
                                    break
                                }
                            }
                    }
                    return e
                }, o.findHostInstance = iZ, o.findHostInstanceWithNoPortals = function(e) {
                    return null === (e = null !== (e = T(e)) ? function e(t) {
                        if (5 === t.tag || 6 === t.tag) return t;
                        for (t = t.child; null !== t;) {
                            if (4 !== t.tag) {
                                var n = e(t);
                                if (null !== n) return n
                            }
                            t = t.sibling
                        }
                        return null
                    }(e) : null) ? null : e.stateNode
                }, o.findHostInstanceWithWarning = function(e) {
                    return iZ(e)
                }, o.flushControlled = function(e) {
                    var t = az;
                    az |= 1;
                    var n = aX.transition,
                        r = tE;
                    try {
                        aX.transition = null, tE = 1, e()
                    } finally {
                        tE = r, aX.transition = n, 0 === (az = t) && (a5(), tU())
                    }
                }, o.flushPassiveEffects = iT, o.flushSync = iv, o.focusWithin = function(e, t) {
                    if (!ei) throw Error(f(363));
                    for (t = Array.from(t = aU(e = aJ(e), t)), e = 0; e < t.length;) {
                        var n = t[e++];
                        if (!eu(n)) {
                            if (5 === n.tag && ef(n.stateNode)) return !0;
                            for (n = n.child; null !== n;) t.push(n), n = n.sibling
                        }
                    }
                    return !1
                }, o.getCurrentUpdatePriority = function() {
                    return tE
                }, o.getFindAllNodesFailureDescription = function(e, t) {
                    if (!ei) throw Error(f(363));
                    var n = 0,
                        r = [];
                    e = [aJ(e), 0];
                    for (var a = 0; a < e.length;) {
                        var i = e[a++],
                            l = e[a++],
                            o = t[l];
                        if ((5 !== i.tag || !eu(i)) && (aL(i, o) && (r.push(aN(o)), ++l > n && (n = l)), l < t.length))
                            for (i = i.child; null !== i;) e.push(i, l), i = i.sibling
                    }
                    if (n < t.length) {
                        for (e = []; n < t.length; n++) e.push(aN(t[n]));
                        return "findAllNodes was able to match part of the selector:\n  " + r.join(" > ") + "\n\nNo matching component was found for:\n  " + e.join(" > ")
                    }
                    return null
                }, o.getPublicRootInstance = function(e) {
                    return (e = e.current).child ? 5 === e.child.tag ? _(e.child.stateNode) : e.child.stateNode : null
                }, o.injectIntoDevTools = function(e) {
                    if (e = {
                            bundleType: e.bundleType,
                            version: e.version,
                            rendererPackageName: e.rendererPackageName,
                            rendererConfig: e.rendererConfig,
                            overrideHookState: null,
                            overrideHookStateDeletePath: null,
                            overrideHookStateRenamePath: null,
                            overrideProps: null,
                            overridePropsDeletePath: null,
                            overridePropsRenamePath: null,
                            setErrorHandler: null,
                            setSuspenseHandler: null,
                            scheduleUpdate: null,
                            currentDispatcherRef: d.ReactCurrentDispatcher,
                            findHostInstanceByFiber: i$,
                            findFiberByHostInstance: e.findFiberByHostInstance || i0,
                            findHostInstancesForRefresh: null,
                            scheduleRefresh: null,
                            scheduleRoot: null,
                            setRefreshHandler: null,
                            getCurrentFiber: null,
                            reconcilerVersion: "18.0.0-fc46dba67-20220329"
                        }, "undefined" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) e = !1;
                    else {
                        var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
                        if (t.isDisabled || !t.supportsFiber) e = !0;
                        else {
                            try {
                                tw = t.inject(e), t_ = t
                            } catch (e) {}
                            e = !!t.checkDCE
                        }
                    }
                    return e
                }, o.isAlreadyRendering = function() {
                    return !1
                }, o.observeVisibleRects = function(e, t, n, r) {
                    if (!ei) throw Error(f(363));
                    var a = ed(e = aO(e, t), n, r).disconnect;
                    return {
                        disconnect: function() {
                            a()
                        }
                    }
                }, o.registerMutableSourceForHydration = function(e, t) {
                    var n = t._getVersion;
                    n = n(t._source), null == e.mutableSourceEagerHydrationData ? e.mutableSourceEagerHydrationData = [t, n] : e.mutableSourceEagerHydrationData.push(t, n)
                }, o.runWithPriority = function(e, t) {
                    var n = tE;
                    try {
                        return tE = e, t()
                    } finally {
                        tE = n
                    }
                }, o.shouldError = function() {
                    return null
                }, o.shouldSuspend = function() {
                    return !1
                }, o.updateContainer = function(e, t, n, r) {
                    var a = t.current,
                        i = ic(),
                        l = id(a);
                    return n = iW(n), null === t.context ? t.context = n : t.pendingContext = n, (t = t3(i, l)).payload = {
                        element: e
                    }, null !== (r = void 0 === r ? null : r) && (t.callback = r), t6(a, t), null !== (e = iA(a, l, i)) && t4(e, a, l), l
                }, o
            }
        },
        9971: function(e, t, n) {
            "use strict";
            e.exports = n(6093)
        },
        7975: function(e, t, n) {
            "use strict";
            e.exports = n(1907)
        },
        2640: function(e, t) {
            "use strict";

            function n(e, t) {
                var n = e.length;
                for (e.push(t); 0 < n;) {
                    var r = n - 1 >>> 1,
                        a = e[r];
                    if (0 < i(a, t)) e[r] = t, e[n] = a, n = r;
                    else break
                }
            }

            function r(e) {
                return 0 === e.length ? null : e[0]
            }

            function a(e) {
                if (0 === e.length) return null;
                var t = e[0],
                    n = e.pop();
                if (n !== t) {
                    e[0] = n;
                    for (var r = 0, a = e.length, l = a >>> 1; r < l;) {
                        var o = 2 * (r + 1) - 1,
                            s = e[o],
                            u = o + 1,
                            c = e[u];
                        if (0 > i(s, n)) u < a && 0 > i(c, s) ? (e[r] = c, e[u] = n, r = u) : (e[r] = s, e[o] = n, r = o);
                        else if (u < a && 0 > i(c, n)) e[r] = c, e[u] = n, r = u;
                        else break
                    }
                }
                return t
            }

            function i(e, t) {
                var n = e.sortIndex - t.sortIndex;
                return 0 !== n ? n : e.id - t.id
            }
            if ("object" == typeof performance && "function" == typeof performance.now) {
                var l, o = performance;
                t.unstable_now = function() {
                    return o.now()
                }
            } else {
                var s = Date,
                    u = s.now();
                t.unstable_now = function() {
                    return s.now() - u
                }
            }
            var c = [],
                f = [],
                d = 1,
                A = null,
                h = 3,
                p = !1,
                B = !1,
                m = !1,
                g = "function" == typeof setTimeout ? setTimeout : null,
                C = "function" == typeof clearTimeout ? clearTimeout : null,
                b = "undefined" != typeof setImmediate ? setImmediate : null;

            function v(e) {
                for (var t = r(f); null !== t;) {
                    if (null === t.callback) a(f);
                    else if (t.startTime <= e) a(f), t.sortIndex = t.expirationTime, n(c, t);
                    else break;
                    t = r(f)
                }
            }

            function y(e) {
                if (m = !1, v(e), !B) {
                    if (null !== r(c)) B = !0, H(E);
                    else {
                        var t = r(f);
                        null !== t && w(y, t.startTime - e)
                    }
                }
            }

            function E(e, n) {
                B = !1, m && (m = !1, C(M), M = -1), p = !0;
                var i = h;
                try {
                    for (v(n), A = r(c); null !== A && (!(A.expirationTime > n) || e && !G());) {
                        var l = A.callback;
                        if ("function" == typeof l) {
                            A.callback = null, h = A.priorityLevel;
                            var o = l(A.expirationTime <= n);
                            n = t.unstable_now(), "function" == typeof o ? A.callback = o : A === r(c) && a(c), v(n)
                        } else a(c);
                        A = r(c)
                    }
                    if (null !== A) var s = !0;
                    else {
                        var u = r(f);
                        null !== u && w(y, u.startTime - n), s = !1
                    }
                    return s
                } finally {
                    A = null, h = i, p = !1
                }
            }
            "undefined" != typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
            var F = !1,
                I = null,
                M = -1,
                R = 5,
                S = -1;

            function G() {
                return !(t.unstable_now() - S < R)
            }

            function D() {
                if (null !== I) {
                    var e = t.unstable_now();
                    S = e;
                    var n = !0;
                    try {
                        n = I(!0, e)
                    } finally {
                        n ? l() : (F = !1, I = null)
                    }
                } else F = !1
            }
            if ("function" == typeof b) l = function() {
                b(D)
            };
            else if ("undefined" != typeof MessageChannel) {
                var T = new MessageChannel,
                    x = T.port2;
                T.port1.onmessage = D, l = function() {
                    x.postMessage(null)
                }
            } else l = function() {
                g(D, 0)
            };

            function H(e) {
                I = e, F || (F = !0, l())
            }

            function w(e, n) {
                M = g(function() {
                    e(t.unstable_now())
                }, n)
            }
            t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(e) {
                e.callback = null
            }, t.unstable_continueExecution = function() {
                B || p || (B = !0, H(E))
            }, t.unstable_forceFrameRate = function(e) {
                0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : R = 0 < e ? Math.floor(1e3 / e) : 5
            }, t.unstable_getCurrentPriorityLevel = function() {
                return h
            }, t.unstable_getFirstCallbackNode = function() {
                return r(c)
            }, t.unstable_next = function(e) {
                switch (h) {
                    case 1:
                    case 2:
                    case 3:
                        var t = 3;
                        break;
                    default:
                        t = h
                }
                var n = h;
                h = t;
                try {
                    return e()
                } finally {
                    h = n
                }
            }, t.unstable_pauseExecution = function() {}, t.unstable_requestPaint = function() {}, t.unstable_runWithPriority = function(e, t) {
                switch (e) {
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                        break;
                    default:
                        e = 3
                }
                var n = h;
                h = e;
                try {
                    return t()
                } finally {
                    h = n
                }
            }, t.unstable_scheduleCallback = function(e, a, i) {
                var l = t.unstable_now();
                switch (i = "object" == typeof i && null !== i && "number" == typeof(i = i.delay) && 0 < i ? l + i : l, e) {
                    case 1:
                        var o = -1;
                        break;
                    case 2:
                        o = 250;
                        break;
                    case 5:
                        o = 1073741823;
                        break;
                    case 4:
                        o = 1e4;
                        break;
                    default:
                        o = 5e3
                }
                return o = i + o, e = {
                    id: d++,
                    callback: a,
                    priorityLevel: e,
                    startTime: i,
                    expirationTime: o,
                    sortIndex: -1
                }, i > l ? (e.sortIndex = i, n(f, e), null === r(c) && e === r(f) && (m ? (C(M), M = -1) : m = !0, w(y, i - l))) : (e.sortIndex = o, n(c, e), B || p || (B = !0, H(E))), e
            }, t.unstable_shouldYield = G, t.unstable_wrapCallback = function(e) {
                var t = h;
                return function() {
                    var n = h;
                    h = t;
                    try {
                        return e.apply(this, arguments)
                    } finally {
                        h = n
                    }
                }
            }
        },
        260: function(e, t, n) {
            "use strict";
            e.exports = n(2640)
        },
        8311: function(e) {
            e.exports = {
                style: {
                    fontFamily: "'__intranet_88ffcb', '__intranet_Fallback_88ffcb'"
                },
                className: "__className_88ffcb",
                variable: "__variable_88ffcb"
            }
        },
        8784: function(e) {
            e.exports = {
                style: {
                    fontFamily: "'__ppRegular_c59efa', '__ppRegular_Fallback_c59efa'"
                },
                className: "__className_c59efa",
                variable: "__variable_c59efa"
            }
        },
        4341: function(e) {
            e.exports = {
                style: {
                    fontFamily: "'__ppSemiBold_e86be0', '__ppSemiBold_Fallback_e86be0'"
                },
                className: "__className_e86be0",
                variable: "__variable_e86be0"
            }
        },
        9197: function(e, t, n) {
            "use strict";
            n.d(t, {
                Analytics: function() {
                    return h
                }
            });
            var r = n(2265),
                a = n(9376),
                i = n(257),
                l = () => {
                    window.va || (window.va = function() {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        (window.vaq = window.vaq || []).push(t)
                    })
                };

            function o() {
                return "undefined" != typeof window
            }

            function s() {
                return "production"
            }

            function u() {
                return "development" === ((o() ? window.vam : s()) || "production")
            }

            function c(e) {
                return new RegExp("/".concat(e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "(?=[/?#]|$)"))
            }

            function f(e) {
                return (0, r.useEffect)(() => {
                    var t;
                    e.beforeSend && (null == (t = window.va) || t.call(window, "beforeSend", e.beforeSend))
                }, [e.beforeSend]), (0, r.useEffect)(() => {
                    var t;
                    ! function() {
                        var e;
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                            debug: !0
                        };
                        if (!o()) return;
                        (function() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "auto";
                            if ("auto" === e) {
                                window.vam = s();
                                return
                            }
                            window.vam = e
                        })(t.mode), l(), t.beforeSend && (null == (e = window.va) || e.call(window, "beforeSend", t.beforeSend));
                        let n = t.scriptSrc ? t.scriptSrc : u() ? "https://va.vercel-scripts.com/v1/script.debug.js" : t.basePath ? "".concat(t.basePath, "/insights/script.js") : "/_vercel/insights/script.js";
                        if (document.head.querySelector('script[src*="'.concat(n, '"]'))) return;
                        let r = document.createElement("script");
                        r.src = n, r.defer = !0, r.dataset.sdkn = "@vercel/analytics" + (t.framework ? "/".concat(t.framework) : ""), r.dataset.sdkv = "1.6.1", t.disableAutoTrack && (r.dataset.disableAutoTrack = "1"), t.endpoint ? r.dataset.endpoint = t.endpoint : t.basePath && (r.dataset.endpoint = "".concat(t.basePath, "/insights")), t.dsn && (r.dataset.dsn = t.dsn), r.onerror = () => {
                            let e = u() ? "Please check if any ad blockers are enabled and try again." : "Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";
                            console.log("[Vercel Web Analytics] Failed to load script from ".concat(n, ". ").concat(e))
                        }, u() && !1 === t.debug && (r.dataset.debug = "false"), document.head.appendChild(r)
                    }({
                        framework: e.framework || "react",
                        basePath: null !== (t = e.basePath) && void 0 !== t ? t : function() {
                            if (void 0 !== i && void 0 !== i.env) return i.env.REACT_APP_VERCEL_OBSERVABILITY_BASEPATH
                        }(),
                        ...void 0 !== e.route && {
                            disableAutoTrack: !0
                        },
                        ...e
                    })
                }, []), (0, r.useEffect)(() => {
                    e.route && e.path && function(e) {
                        var t;
                        let {
                            route: n,
                            path: r
                        } = e;
                        null == (t = window.va) || t.call(window, "pageview", {
                            route: n,
                            path: r
                        })
                    }({
                        route: e.route,
                        path: e.path
                    })
                }, [e.route, e.path]), null
            }
            var d = () => {
                let e = (0, a.useParams)(),
                    t = (0, a.useSearchParams)(),
                    n = (0, a.usePathname)();
                return e ? {
                    route: function(e, t) {
                        if (!e || !t) return e;
                        let n = e;
                        try {
                            let e = Object.entries(t);
                            for (let [t, r] of e)
                                if (!Array.isArray(r)) {
                                    let e = c(r);
                                    e.test(n) && (n = n.replace(e, "/[".concat(t, "]")))
                                }
                            for (let [t, r] of e)
                                if (Array.isArray(r)) {
                                    let e = c(r.join("/"));
                                    e.test(n) && (n = n.replace(e, "/[...".concat(t, "]")))
                                }
                            return n
                        } catch (t) {
                            return e
                        }
                    }(n, Object.keys(e).length ? e : Object.fromEntries(t.entries())),
                    path: n
                } : {
                    route: null,
                    path: n
                }
            };

            function A(e) {
                let {
                    route: t,
                    path: n
                } = d();
                return r.createElement(f, {
                    path: n,
                    route: t,
                    ...e,
                    basePath: function() {
                        if (void 0 !== i && void 0 !== i.env) return i.env.NEXT_PUBLIC_VERCEL_OBSERVABILITY_BASEPATH
                    }(),
                    framework: "next"
                })
            }

            function h(e) {
                return r.createElement(r.Suspense, {
                    fallback: null
                }, r.createElement(A, { ...e
                }))
            }
        },
        4317: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return o
                }
            });
            var r = n(2265),
                a = n(7437),
                i = [15, 24, 30, 60, 120],
                l = {
                    container: {
                        position: "relative",
                        width: "var(--unicorn-width)",
                        height: "var(--unicorn-height)"
                    },
                    errorWrapper: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "100%"
                    },
                    errorBox: {
                        textAlign: "center",
                        padding: "1rem",
                        borderRadius: "0.5rem",
                        backgroundColor: "rgb(254 242 242)",
                        color: "rgb(239 68 68)"
                    },
                    errorTitle: {
                        fontWeight: "600",
                        marginBottom: "0.25rem"
                    },
                    errorMessage: {
                        fontSize: "0.875rem",
                        marginTop: "0.25rem"
                    }
                },
                o = function({
                    projectId: e,
                    jsonFilePath: t,
                    sdkUrl: n = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.5.2/dist/unicornStudio.umd.js",
                    width: o = "100%",
                    height: s = "100%",
                    scale: u = 1,
                    dpi: c = 1.5,
                    fps: f = 60,
                    altText: d = "Scene",
                    ariaLabel: A,
                    className: h = "",
                    lazyLoad: p = !0,
                    production: B = !0,
                    placeholder: m,
                    placeholderClassName: g,
                    showPlaceholderOnError: C = !0,
                    showPlaceholderWhileLoading: b = !0,
                    onLoad: v,
                    onError: y
                }) {
                    let E = (0, r.useRef)(null),
                        [F, I] = (0, r.useState)(!1),
                        [M, R] = (0, r.useState)(!0),
                        {
                            isLoaded: S,
                            error: G
                        } = function(e) {
                            let [t, n] = (0, r.useState)(!1), [a, i] = (0, r.useState)(null), l = (0, r.useCallback)(() => {
                                n(!0)
                            }, []), o = (0, r.useCallback)(() => {
                                i(Error("Failed to load UnicornStudio script"))
                            }, []);
                            return (0, r.useEffect)(() => {
                                let t = document.querySelector(`script[src="${e}"]`);
                                if (t) {
                                    if ("true" === t.getAttribute("data-loaded")) {
                                        n(!0);
                                        return
                                    }
                                    return t.addEventListener("load", l), t.addEventListener("error", o), () => {
                                        t.removeEventListener("load", l), t.removeEventListener("error", o)
                                    }
                                }
                                let r = document.createElement("script");
                                return r.src = e, r.async = !0, r.addEventListener("load", () => {
                                    r.setAttribute("data-loaded", "true"), l()
                                }), r.addEventListener("error", o), document.head.appendChild(r), () => {
                                    r.parentNode && (r.removeEventListener("load", l), r.removeEventListener("error", o))
                                }
                            }, [e, l, o]), {
                                isLoaded: t,
                                error: a,
                                handleScriptLoad: l,
                                handleScriptError: o
                            }
                        }(n),
                        {
                            error: D
                        } = function({
                            elementRef: e,
                            projectId: t,
                            jsonFilePath: n,
                            production: a,
                            scale: l,
                            dpi: o,
                            fps: s,
                            lazyLoad: u,
                            altText: c,
                            ariaLabel: f,
                            isScriptLoaded: d,
                            onLoad: A,
                            onError: h
                        }) {
                            let p = (0, r.useRef)(null),
                                [B, m] = (0, r.useState)(null),
                                g = (0, r.useRef)(!1),
                                C = (0, r.useRef)(""),
                                b = (0, r.useRef)(!1),
                                v = (0, r.useMemo)(() => {
                                    var e, t;
                                    return e = l, t = s, e >= .25 && e <= 1 ? i.includes(t) ? null : `Invalid fps: ${t}. FPS must be one of: 15, 24, 30, 60, 120` : `Invalid scale: ${e}. Scale must be between 0.25 and 1.0`
                                }, [l, s]),
                                y = (0, r.useRef)(null);
                            (0, r.useEffect)(() => {
                                if (v !== y.current) {
                                    if (y.current = v, v) {
                                        let e = Error(v);
                                        m(e), null == h || h(e)
                                    } else m(null)
                                }
                            }, [v, h]);
                            let E = (0, r.useCallback)(() => {
                                    var e;
                                    (null == (e = p.current) ? void 0 : e.destroy) && (p.current.destroy(), p.current = null), b.current = !1
                                }, []),
                                F = (0, r.useCallback)(async () => {
                                    var r;
                                    if (!e.current || !d || v) return;
                                    if (b.current) {
                                        console.log("Already initializing, skipping...");
                                        return
                                    }
                                    let i = `${t||""}-${n||""}-${l}-${o}-${s}-${a?"prod":"dev"}`;
                                    if (C.current === i && p.current) {
                                        console.log("Scene already initialized with this configuration, skipping...");
                                        return
                                    }
                                    C.current = i, g.current = !0, b.current = !0;
                                    try {
                                        let i;
                                        if (E(), !(null == (r = window.UnicornStudio) ? void 0 : r.addScene)) throw Error("UnicornStudio.addScene not found");
                                        let d = {
                                            elementId: e.current.id || `unicorn-${Math.random().toString(36).slice(2,11)}`,
                                            scale: l,
                                            dpi: o,
                                            fps: s,
                                            lazyLoad: u,
                                            altText: c,
                                            ariaLabel: f,
                                            production: a
                                        };
                                        if (e.current.id || (e.current.id = d.elementId), n) d.filePath = n;
                                        else if (t) d.projectId = t;
                                        else throw Error("No project ID or JSON file path provided");
                                        let h = new Promise((e, t) => {
                                                i = setTimeout(() => t(Error("Scene initialization timeout")), 15e3)
                                            }),
                                            B = () => {
                                                i && clearTimeout(i)
                                            };
                                        try {
                                            let e = await Promise.race([window.UnicornStudio.addScene(d), h]);
                                            if (B(), e) p.current = e, g.current = !1, m(null), b.current = !1, null == A || A();
                                            else throw b.current = !1, Error("Failed to initialize scene")
                                        } catch (e) {
                                            throw B(), e
                                        }
                                    } catch (n) {
                                        let e = (n instanceof Error ? n : Error("Unknown error")).message;
                                        e.includes("404") || e.includes("Failed to fetch") ? e = "Resource not found" : e.includes("Network") || e.includes("network") ? e = "Network error occurred" : e.includes("timeout") && (e = "Loading timeout");
                                        let t = Error(e);
                                        m(t), b.current = !1, null == h || h(t)
                                    }
                                }, [e, d, n, t, a, l, o, s, u, c, f, E, A, h, v]);
                            return (0, r.useEffect)(() => {
                                d && F()
                            }, [d, F]), (0, r.useEffect)(() => E, [E]), (0, r.useEffect)(() => {
                                let e = `${t||""}-${n||""}-${l}-${o}-${s}-${a?"prod":"dev"}`;
                                C.current !== e && (g.current = !1, m(null), b.current = !1, C.current = "")
                            }, [t, n, l, o, s, a]), {
                                error: B
                            }
                        }({
                            elementRef: E,
                            projectId: e,
                            jsonFilePath: t,
                            production: B,
                            scale: u,
                            dpi: c,
                            fps: f,
                            lazyLoad: p,
                            altText: d,
                            ariaLabel: A || d,
                            isScriptLoaded: S,
                            onLoad: () => {
                                I(!0), null == v || v()
                            },
                            onError: y
                        }),
                        T = G || D;
                    (0, r.useEffect)(() => {
                        R(function() {
                            if ("undefined" == typeof window) return !0;
                            try {
                                let e = document.createElement("canvas");
                                return !!(e.getContext("webgl") || e.getContext("experimental-webgl"))
                            } catch (e) {
                                return !1
                            }
                        }())
                    }, []);
                    let x = (m || g) && (!M || b && !F || C && T),
                        H = "number" == typeof o ? o : 0,
                        w = "number" == typeof s ? s : 0,
                        _ = "number" == typeof o && "number" == typeof s,
                        P = {
                            "--unicorn-width": "number" == typeof o ? `${o}px` : o,
                            "--unicorn-height": "number" == typeof s ? `${s}px` : s
                        };
                    return (0, a.jsxs)("div", {
                        ref: E,
                        style: { ...l.container,
                            ...P
                        },
                        className: h,
                        children: [x && (m || g) && (0, a.jsx)("div", {
                            style: {
                                position: "absolute",
                                inset: 0
                            },
                            children: "string" == typeof m ? (0, a.jsx)("img", {
                                src: m,
                                alt: d,
                                style: {
                                    width: _ ? `${H}px` : "100%",
                                    height: _ ? `${w}px` : "100%",
                                    objectFit: "cover"
                                }
                            }) : m || (g ? (0, a.jsx)("div", {
                                className: g,
                                style: {
                                    width: "100%",
                                    height: "100%"
                                },
                                "aria-label": d
                            }) : null)
                        }), T && !x && (0, a.jsx)("div", {
                            style: l.errorWrapper,
                            children: (0, a.jsxs)("div", {
                                style: l.errorBox,
                                children: [(0, a.jsx)("p", {
                                    style: l.errorTitle,
                                    children: "Error loading scene"
                                }), (0, a.jsx)("p", {
                                    style: l.errorMessage,
                                    children: T.message
                                })]
                            })
                        })]
                    })
                }
        }
    }
]);