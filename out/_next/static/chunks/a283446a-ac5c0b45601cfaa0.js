(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [47], {
        5960: function(t) {
            var e;
            e = function() {
                return (function t(e, o, i) {
                    function n(r, a) {
                        if (!o[r]) {
                            if (!e[r]) {
                                if (s) return s(r, !0);
                                throw Error("Cannot find module '" + r + "'")
                            }
                            var l = o[r] = {
                                exports: {}
                            };
                            e[r][0].call(l.exports, function(t) {
                                return n(e[r][1][t] || t)
                            }, l, l.exports, t, e, o, i)
                        }
                        return o[r].exports
                    }
                    for (var s = void 0, r = 0; r < i.length; r++) n(i[r]);
                    return n
                })({
                    1: [function(t, e, o) {
                        e.exports = {
                            name: "cannon",
                            version: "0.6.2",
                            description: "A lightweight 3D physics engine written in JavaScript.",
                            homepage: "https://github.com/schteppe/cannon.js",
                            author: "Stefan Hedman <schteppe@gmail.com> (http://steffe.se)",
                            keywords: ["cannon.js", "cannon", "physics", "engine", "3d"],
                            main: "./build/cannon.js",
                            engines: {
                                node: "*"
                            },
                            repository: {
                                type: "git",
                                url: "https://github.com/schteppe/cannon.js.git"
                            },
                            bugs: {
                                url: "https://github.com/schteppe/cannon.js/issues"
                            },
                            licenses: [{
                                type: "MIT"
                            }],
                            devDependencies: {
                                jshint: "latest",
                                "uglify-js": "latest",
                                nodeunit: "^0.9.0",
                                grunt: "~0.4.0",
                                "grunt-contrib-jshint": "~0.1.1",
                                "grunt-contrib-nodeunit": "^0.4.1",
                                "grunt-contrib-concat": "~0.1.3",
                                "grunt-contrib-uglify": "^0.5.1",
                                "grunt-browserify": "^2.1.4",
                                "grunt-contrib-yuidoc": "^0.5.2",
                                browserify: "*"
                            },
                            dependencies: {}
                        }
                    }, {}],
                    2: [function(t, e, o) {
                        e.exports = {
                            version: t("../package.json").version,
                            AABB: t("./collision/AABB"),
                            ArrayCollisionMatrix: t("./collision/ArrayCollisionMatrix"),
                            Body: t("./objects/Body"),
                            Box: t("./shapes/Box"),
                            Broadphase: t("./collision/Broadphase"),
                            Constraint: t("./constraints/Constraint"),
                            ContactEquation: t("./equations/ContactEquation"),
                            Narrowphase: t("./world/Narrowphase"),
                            ConeTwistConstraint: t("./constraints/ConeTwistConstraint"),
                            ContactMaterial: t("./material/ContactMaterial"),
                            ConvexPolyhedron: t("./shapes/ConvexPolyhedron"),
                            Cylinder: t("./shapes/Cylinder"),
                            DistanceConstraint: t("./constraints/DistanceConstraint"),
                            Equation: t("./equations/Equation"),
                            EventTarget: t("./utils/EventTarget"),
                            FrictionEquation: t("./equations/FrictionEquation"),
                            GSSolver: t("./solver/GSSolver"),
                            GridBroadphase: t("./collision/GridBroadphase"),
                            Heightfield: t("./shapes/Heightfield"),
                            HingeConstraint: t("./constraints/HingeConstraint"),
                            LockConstraint: t("./constraints/LockConstraint"),
                            Mat3: t("./math/Mat3"),
                            Material: t("./material/Material"),
                            NaiveBroadphase: t("./collision/NaiveBroadphase"),
                            ObjectCollisionMatrix: t("./collision/ObjectCollisionMatrix"),
                            Pool: t("./utils/Pool"),
                            Particle: t("./shapes/Particle"),
                            Plane: t("./shapes/Plane"),
                            PointToPointConstraint: t("./constraints/PointToPointConstraint"),
                            Quaternion: t("./math/Quaternion"),
                            Ray: t("./collision/Ray"),
                            RaycastVehicle: t("./objects/RaycastVehicle"),
                            RaycastResult: t("./collision/RaycastResult"),
                            RigidVehicle: t("./objects/RigidVehicle"),
                            RotationalEquation: t("./equations/RotationalEquation"),
                            RotationalMotorEquation: t("./equations/RotationalMotorEquation"),
                            SAPBroadphase: t("./collision/SAPBroadphase"),
                            SPHSystem: t("./objects/SPHSystem"),
                            Shape: t("./shapes/Shape"),
                            Solver: t("./solver/Solver"),
                            Sphere: t("./shapes/Sphere"),
                            SplitSolver: t("./solver/SplitSolver"),
                            Spring: t("./objects/Spring"),
                            Trimesh: t("./shapes/Trimesh"),
                            Vec3: t("./math/Vec3"),
                            Vec3Pool: t("./utils/Vec3Pool"),
                            World: t("./world/World")
                        }
                    }, {
                        "../package.json": 1,
                        "./collision/AABB": 3,
                        "./collision/ArrayCollisionMatrix": 4,
                        "./collision/Broadphase": 5,
                        "./collision/GridBroadphase": 6,
                        "./collision/NaiveBroadphase": 7,
                        "./collision/ObjectCollisionMatrix": 8,
                        "./collision/Ray": 9,
                        "./collision/RaycastResult": 10,
                        "./collision/SAPBroadphase": 11,
                        "./constraints/ConeTwistConstraint": 12,
                        "./constraints/Constraint": 13,
                        "./constraints/DistanceConstraint": 14,
                        "./constraints/HingeConstraint": 15,
                        "./constraints/LockConstraint": 16,
                        "./constraints/PointToPointConstraint": 17,
                        "./equations/ContactEquation": 19,
                        "./equations/Equation": 20,
                        "./equations/FrictionEquation": 21,
                        "./equations/RotationalEquation": 22,
                        "./equations/RotationalMotorEquation": 23,
                        "./material/ContactMaterial": 24,
                        "./material/Material": 25,
                        "./math/Mat3": 27,
                        "./math/Quaternion": 28,
                        "./math/Vec3": 30,
                        "./objects/Body": 31,
                        "./objects/RaycastVehicle": 32,
                        "./objects/RigidVehicle": 33,
                        "./objects/SPHSystem": 34,
                        "./objects/Spring": 35,
                        "./shapes/Box": 37,
                        "./shapes/ConvexPolyhedron": 38,
                        "./shapes/Cylinder": 39,
                        "./shapes/Heightfield": 40,
                        "./shapes/Particle": 41,
                        "./shapes/Plane": 42,
                        "./shapes/Shape": 43,
                        "./shapes/Sphere": 44,
                        "./shapes/Trimesh": 45,
                        "./solver/GSSolver": 46,
                        "./solver/Solver": 47,
                        "./solver/SplitSolver": 48,
                        "./utils/EventTarget": 49,
                        "./utils/Pool": 51,
                        "./utils/Vec3Pool": 54,
                        "./world/Narrowphase": 55,
                        "./world/World": 56
                    }],
                    3: [function(t, e, o) {
                        var i = t("../math/Vec3");

                        function n(t) {
                            t = t || {}, this.lowerBound = new i, t.lowerBound && this.lowerBound.copy(t.lowerBound), this.upperBound = new i, t.upperBound && this.upperBound.copy(t.upperBound)
                        }
                        t("../utils/Utils"), e.exports = n;
                        var s = new i;
                        n.prototype.setFromPoints = function(t, e, o, i) {
                            var n = this.lowerBound,
                                r = this.upperBound;
                            n.copy(t[0]), o && o.vmult(n, n), r.copy(n);
                            for (var a = 1; a < t.length; a++) {
                                var l = t[a];
                                o && (o.vmult(l, s), l = s), l.x > r.x && (r.x = l.x), l.x < n.x && (n.x = l.x), l.y > r.y && (r.y = l.y), l.y < n.y && (n.y = l.y), l.z > r.z && (r.z = l.z), l.z < n.z && (n.z = l.z)
                            }
                            return e && (e.vadd(n, n), e.vadd(r, r)), i && (n.x -= i, n.y -= i, n.z -= i, r.x += i, r.y += i, r.z += i), this
                        }, n.prototype.copy = function(t) {
                            return this.lowerBound.copy(t.lowerBound), this.upperBound.copy(t.upperBound), this
                        }, n.prototype.clone = function() {
                            return new n().copy(this)
                        }, n.prototype.extend = function(t) {
                            var e = t.lowerBound.x;
                            this.lowerBound.x > e && (this.lowerBound.x = e);
                            var o = t.upperBound.x;
                            this.upperBound.x < o && (this.upperBound.x = o);
                            var e = t.lowerBound.y;
                            this.lowerBound.y > e && (this.lowerBound.y = e);
                            var o = t.upperBound.y;
                            this.upperBound.y < o && (this.upperBound.y = o);
                            var e = t.lowerBound.z;
                            this.lowerBound.z > e && (this.lowerBound.z = e);
                            var o = t.upperBound.z;
                            this.upperBound.z < o && (this.upperBound.z = o)
                        }, n.prototype.overlaps = function(t) {
                            var e = this.lowerBound,
                                o = this.upperBound,
                                i = t.lowerBound,
                                n = t.upperBound;
                            return (i.x <= o.x && o.x <= n.x || e.x <= n.x && n.x <= o.x) && (i.y <= o.y && o.y <= n.y || e.y <= n.y && n.y <= o.y) && (i.z <= o.z && o.z <= n.z || e.z <= n.z && n.z <= o.z)
                        }, n.prototype.contains = function(t) {
                            var e = this.lowerBound,
                                o = this.upperBound,
                                i = t.lowerBound,
                                n = t.upperBound;
                            return e.x <= i.x && o.x >= n.x && e.y <= i.y && o.y >= n.y && e.z <= i.z && o.z >= n.z
                        }, n.prototype.getCorners = function(t, e, o, i, n, s, r, a) {
                            var l = this.lowerBound,
                                h = this.upperBound;
                            t.copy(l), e.set(h.x, l.y, l.z), o.set(h.x, h.y, l.z), i.set(l.x, h.y, h.z), n.set(h.x, l.y, l.z), s.set(l.x, h.y, l.z), r.set(l.x, l.y, h.z), a.copy(h)
                        };
                        var r = [new i, new i, new i, new i, new i, new i, new i, new i];
                        n.prototype.toLocalFrame = function(t, e) {
                            var o = r[0],
                                i = r[1],
                                n = r[2],
                                s = r[3],
                                a = r[4],
                                l = r[5],
                                h = r[6],
                                p = r[7];
                            this.getCorners(o, i, n, s, a, l, h, p);
                            for (var c = 0; 8 !== c; c++) {
                                var u = r[c];
                                t.pointToLocal(u, u)
                            }
                            return e.setFromPoints(r)
                        }, n.prototype.toWorldFrame = function(t, e) {
                            var o = r[0],
                                i = r[1],
                                n = r[2],
                                s = r[3],
                                a = r[4],
                                l = r[5],
                                h = r[6],
                                p = r[7];
                            this.getCorners(o, i, n, s, a, l, h, p);
                            for (var c = 0; 8 !== c; c++) {
                                var u = r[c];
                                t.pointToWorld(u, u)
                            }
                            return e.setFromPoints(r)
                        }
                    }, {
                        "../math/Vec3": 30,
                        "../utils/Utils": 53
                    }],
                    4: [function(t, e, o) {
                        function i() {
                            this.matrix = []
                        }
                        e.exports = i, i.prototype.get = function(t, e) {
                            if (t = t.index, (e = e.index) > t) {
                                var o = e;
                                e = t, t = o
                            }
                            return this.matrix[(t * (t + 1) >> 1) + e - 1]
                        }, i.prototype.set = function(t, e, o) {
                            if (t = t.index, (e = e.index) > t) {
                                var i = e;
                                e = t, t = i
                            }
                            this.matrix[(t * (t + 1) >> 1) + e - 1] = o ? 1 : 0
                        }, i.prototype.reset = function() {
                            for (var t = 0, e = this.matrix.length; t !== e; t++) this.matrix[t] = 0
                        }, i.prototype.setNumObjects = function(t) {
                            this.matrix.length = t * (t - 1) >> 1
                        }
                    }, {}],
                    5: [function(t, e, o) {
                        var i = t("../objects/Body"),
                            n = t("../math/Vec3"),
                            s = t("../math/Quaternion");

                        function r() {
                            this.world = null, this.useBoundingBoxes = !1, this.dirty = !0
                        }
                        t("../shapes/Shape"), t("../shapes/Plane"), e.exports = r, r.prototype.collisionPairs = function(t, e, o) {
                            throw Error("collisionPairs not implemented for this BroadPhase class!")
                        };
                        var a = i.STATIC | i.KINEMATIC;
                        r.prototype.needBroadphaseCollision = function(t, e) {
                            return (t.collisionFilterGroup & e.collisionFilterMask) != 0 && (e.collisionFilterGroup & t.collisionFilterMask) != 0 && ((t.type & a) == 0 && t.sleepState !== i.SLEEPING || (e.type & a) == 0 && e.sleepState !== i.SLEEPING)
                        }, r.prototype.intersectionTest = function(t, e, o, i) {
                            this.useBoundingBoxes ? this.doBoundingBoxBroadphase(t, e, o, i) : this.doBoundingSphereBroadphase(t, e, o, i)
                        };
                        var l = new n;
                        new n, new s, new n, r.prototype.doBoundingSphereBroadphase = function(t, e, o, i) {
                            e.position.vsub(t.position, l);
                            var n = Math.pow(t.boundingRadius + e.boundingRadius, 2);
                            l.norm2() < n && (o.push(t), i.push(e))
                        }, r.prototype.doBoundingBoxBroadphase = function(t, e, o, i) {
                            t.aabbNeedsUpdate && t.computeAABB(), e.aabbNeedsUpdate && e.computeAABB(), t.aabb.overlaps(e.aabb) && (o.push(t), i.push(e))
                        };
                        var h = {
                                keys: []
                            },
                            p = [],
                            c = [];
                        r.prototype.makePairsUnique = function(t, e) {
                            for (var o = t.length, i = 0; i !== o; i++) p[i] = t[i], c[i] = e[i];
                            t.length = 0, e.length = 0;
                            for (var i = 0; i !== o; i++) {
                                var n = p[i].id,
                                    s = c[i].id,
                                    r = n < s ? n + "," + s : s + "," + n;
                                h[r] = i, h.keys.push(r)
                            }
                            for (var i = 0; i !== h.keys.length; i++) {
                                var r = h.keys.pop(),
                                    a = h[r];
                                t.push(p[a]), e.push(c[a]), delete h[r]
                            }
                        }, r.prototype.setWorld = function(t) {};
                        var u = new n;
                        r.boundingSphereCheck = function(t, e) {
                            return t.position.vsub(e.position, u), Math.pow(t.shape.boundingSphereRadius + e.shape.boundingSphereRadius, 2) > u.norm2()
                        }, r.prototype.aabbQuery = function(t, e, o) {
                            return console.warn(".aabbQuery is not implemented in this Broadphase subclass."), []
                        }
                    }, {
                        "../math/Quaternion": 28,
                        "../math/Vec3": 30,
                        "../objects/Body": 31,
                        "../shapes/Plane": 42,
                        "../shapes/Shape": 43
                    }],
                    6: [function(t, e, o) {
                        e.exports = r;
                        var i = t("./Broadphase"),
                            n = t("../math/Vec3"),
                            s = t("../shapes/Shape");

                        function r(t, e, o, s, r) {
                            i.apply(this), this.nx = o || 10, this.ny = s || 10, this.nz = r || 10, this.aabbMin = t || new n(100, 100, 100), this.aabbMax = e || new n(-100, -100, -100);
                            var a = this.nx * this.ny * this.nz;
                            if (a <= 0) throw "GridBroadphase: Each dimension's n must be >0";
                            this.bins = [], this.binLengths = [], this.bins.length = a, this.binLengths.length = a;
                            for (var l = 0; l < a; l++) this.bins[l] = [], this.binLengths[l] = 0
                        }
                        r.prototype = new i, r.prototype.constructor = r;
                        var a = new n;
                        new n, r.prototype.collisionPairs = function(t, e, o) {
                            var i = t.numObjects(),
                                n = t.bodies,
                                r = this.aabbMax,
                                l = this.aabbMin,
                                h = this.nx,
                                p = this.ny,
                                c = this.nz,
                                u = p * c,
                                d = r.x,
                                v = r.y,
                                y = r.z,
                                f = l.x,
                                m = l.y,
                                w = l.z,
                                x = h / (d - f),
                                g = p / (v - m),
                                b = c / (y - w),
                                B = (d - f) / h,
                                E = (v - m) / p,
                                A = (y - w) / c,
                                S = .5 * Math.sqrt(B * B + E * E + A * A),
                                C = s.types,
                                z = C.SPHERE,
                                q = C.PLANE;
                            C.BOX, C.COMPOUND, C.CONVEXPOLYHEDRON;
                            for (var R = this.bins, M = this.binLengths, P = this.bins.length, F = 0; F !== P; F++) M[F] = 0;
                            var V = Math.ceil,
                                l = Math.min,
                                r = Math.max;

                            function T(t, e, o, i, n, s, r) {
                                var a = (t - f) * x | 0,
                                    l = (e - m) * g | 0,
                                    d = (o - w) * b | 0,
                                    v = V((i - f) * x),
                                    y = V((n - m) * g),
                                    B = V((s - w) * b);
                                a < 0 ? a = 0 : a >= h && (a = h - 1), l < 0 ? l = 0 : l >= p && (l = p - 1), d < 0 ? d = 0 : d >= c && (d = c - 1), v < 0 ? v = 0 : v >= h && (v = h - 1), y < 0 ? y = 0 : y >= p && (y = p - 1), B < 0 ? B = 0 : B >= c && (B = c - 1), a *= u, l *= c, d *= 1, v *= u, y *= c, B *= 1;
                                for (var E = a; E <= v; E += u)
                                    for (var A = l; A <= y; A += c)
                                        for (var S = d; S <= B; S += 1) {
                                            var C = E + A + S;
                                            R[C][M[C]++] = r
                                        }
                            }
                            for (var F = 0; F !== i; F++) {
                                var I = n[F],
                                    N = I.shape;
                                switch (N.type) {
                                    case z:
                                        var W = I.position.x,
                                            L = I.position.y,
                                            j = I.position.z,
                                            O = N.radius;
                                        T(W - O, L - O, j - O, W + O, L + O, j + O, I);
                                        break;
                                    case q:
                                        N.worldNormalNeedsUpdate && N.computeWorldNormal(I.quaternion);
                                        var k = N.worldNormal,
                                            _ = f + .5 * B - I.position.x,
                                            U = m + .5 * E - I.position.y,
                                            H = w + .5 * A - I.position.z;
                                        a.set(_, U, H);
                                        for (var D = 0, X = 0; D !== h; D++, X += u, a.y = U, a.x += B)
                                            for (var G = 0, Y = 0; G !== p; G++, Y += c, a.z = H, a.y += E)
                                                for (var Q = 0, Z = 0; Q !== c; Q++, Z += 1, a.z += A)
                                                    if (a.dot(k) < S) {
                                                        var K = X + Y + Z;
                                                        R[K][M[K]++] = I
                                                    }
                                        break;
                                    default:
                                        I.aabbNeedsUpdate && I.computeAABB(), T(I.aabb.lowerBound.x, I.aabb.lowerBound.y, I.aabb.lowerBound.z, I.aabb.upperBound.x, I.aabb.upperBound.y, I.aabb.upperBound.z, I)
                                }
                            }
                            for (var F = 0; F !== P; F++) {
                                var J = M[F];
                                if (J > 1)
                                    for (var $ = R[F], D = 0; D !== J; D++)
                                        for (var I = $[D], G = 0; G !== D; G++) {
                                            var tt = $[G];
                                            this.needBroadphaseCollision(I, tt) && this.intersectionTest(I, tt, e, o)
                                        }
                            }
                            this.makePairsUnique(e, o)
                        }
                    }, {
                        "../math/Vec3": 30,
                        "../shapes/Shape": 43,
                        "./Broadphase": 5
                    }],
                    7: [function(t, e, o) {
                        e.exports = s;
                        var i = t("./Broadphase"),
                            n = t("./AABB");

                        function s() {
                            i.apply(this)
                        }
                        s.prototype = new i, s.prototype.constructor = s, s.prototype.collisionPairs = function(t, e, o) {
                            var i, n, s, r, a = t.bodies,
                                l = a.length;
                            for (i = 0; i !== l; i++)
                                for (n = 0; n !== i; n++) s = a[i], r = a[n], this.needBroadphaseCollision(s, r) && this.intersectionTest(s, r, e, o)
                        }, new n, s.prototype.aabbQuery = function(t, e, o) {
                            o = o || [];
                            for (var i = 0; i < t.bodies.length; i++) {
                                var n = t.bodies[i];
                                n.aabbNeedsUpdate && n.computeAABB(), n.aabb.overlaps(e) && o.push(n)
                            }
                            return o
                        }
                    }, {
                        "./AABB": 3,
                        "./Broadphase": 5
                    }],
                    8: [function(t, e, o) {
                        function i() {
                            this.matrix = {}
                        }
                        e.exports = i, i.prototype.get = function(t, e) {
                            if (t = t.id, (e = e.id) > t) {
                                var o = e;
                                e = t, t = o
                            }
                            return t + "-" + e in this.matrix
                        }, i.prototype.set = function(t, e, o) {
                            if (t = t.id, (e = e.id) > t) {
                                var i = e;
                                e = t, t = i
                            }
                            o ? this.matrix[t + "-" + e] = !0 : delete this.matrix[t + "-" + e]
                        }, i.prototype.reset = function() {
                            this.matrix = {}
                        }, i.prototype.setNumObjects = function(t) {}
                    }, {}],
                    9: [function(t, e, o) {
                        e.exports = h;
                        var i = t("../math/Vec3"),
                            n = t("../math/Quaternion"),
                            s = t("../math/Transform");
                        t("../shapes/ConvexPolyhedron"), t("../shapes/Box");
                        var r = t("../collision/RaycastResult"),
                            a = t("../shapes/Shape"),
                            l = t("../collision/AABB");

                        function h(t, e) {
                            this.from = t ? t.clone() : new i, this.to = e ? e.clone() : new i, this._direction = new i, this.precision = 1e-4, this.checkCollisionResponse = !0, this.skipBackfaces = !1, this.collisionFilterMask = -1, this.collisionFilterGroup = -1, this.mode = h.ANY, this.result = new r, this.hasHit = !1, this.callback = function(t) {}
                        }
                        h.prototype.constructor = h, h.CLOSEST = 1, h.ANY = 2, h.ALL = 4;
                        var p = new l,
                            c = [];
                        h.prototype.intersectWorld = function(t, e) {
                            return this.mode = e.mode || h.ANY, this.result = e.result || new r, this.skipBackfaces = !!e.skipBackfaces, this.collisionFilterMask = void 0 !== e.collisionFilterMask ? e.collisionFilterMask : -1, this.collisionFilterGroup = void 0 !== e.collisionFilterGroup ? e.collisionFilterGroup : -1, e.from && this.from.copy(e.from), e.to && this.to.copy(e.to), this.callback = e.callback || function() {}, this.hasHit = !1, this.result.reset(), this._updateDirection(), this.getAABB(p), c.length = 0, t.broadphase.aabbQuery(t, p, c), this.intersectBodies(c), this.hasHit
                        };
                        var u = new i,
                            d = new i;

                        function v(t, e, o, i) {
                            i.vsub(e, T), o.vsub(e, u), t.vsub(e, d);
                            var n, s, r = T.dot(T),
                                a = T.dot(u),
                                l = T.dot(d),
                                h = u.dot(u),
                                p = u.dot(d);
                            return (n = h * l - a * p) >= 0 && (s = r * p - a * l) >= 0 && n + s < r * h - a * a
                        }
                        h.pointInTriangle = v;
                        var y = new i,
                            f = new n;
                        h.prototype.intersectBody = function(t, e) {
                            e && (this.result = e, this._updateDirection());
                            var o = this.checkCollisionResponse;
                            if ((!o || t.collisionResponse) && (this.collisionFilterGroup & t.collisionFilterMask) != 0 && (t.collisionFilterGroup & this.collisionFilterMask) != 0)
                                for (var i = 0, n = t.shapes.length; i < n; i++) {
                                    var s = t.shapes[i];
                                    if ((!o || s.collisionResponse) && (t.quaternion.mult(t.shapeOrientations[i], f), t.quaternion.vmult(t.shapeOffsets[i], y), y.vadd(t.position, y), this.intersectShape(s, f, y, t), this.result._shouldStop)) break
                                }
                        }, h.prototype.intersectBodies = function(t, e) {
                            e && (this.result = e, this._updateDirection());
                            for (var o = 0, i = t.length; !this.result._shouldStop && o < i; o++) this.intersectBody(t[o])
                        }, h.prototype._updateDirection = function() {
                            this.to.vsub(this.from, this._direction), this._direction.normalize()
                        }, h.prototype.intersectShape = function(t, e, o, i) {
                            if (!(function(t, e, o) {
                                    o.vsub(t, T);
                                    var i = T.dot(e);
                                    return e.mult(i, I), I.vadd(t, I), o.distanceTo(I)
                                }(this.from, this._direction, o) > t.boundingSphereRadius)) {
                                var n = this[t.type];
                                n && n.call(this, t, e, o, i)
                            }
                        }, new i, new i;
                        var m = new i,
                            w = new i,
                            x = new i,
                            g = new i;
                        new i, new r, h.prototype.intersectBox = function(t, e, o, i) {
                            return this.intersectConvex(t.convexPolyhedronRepresentation, e, o, i)
                        }, h.prototype[a.types.BOX] = h.prototype.intersectBox, h.prototype.intersectPlane = function(t, e, o, n) {
                            var s = this.from,
                                r = this.to,
                                a = this._direction,
                                l = new i(0, 0, 1);
                            e.vmult(l, l);
                            var h = new i;
                            s.vsub(o, h);
                            var p = h.dot(l);
                            if (r.vsub(o, h), !(p * h.dot(l) > 0 || s.distanceTo(r) < p)) {
                                var c = l.dot(a);
                                if (!(Math.abs(c) < this.precision)) {
                                    var u = new i,
                                        d = new i,
                                        v = new i;
                                    s.vsub(o, u);
                                    var y = -l.dot(u) / c;
                                    a.scale(y, d), s.vadd(d, v), this.reportIntersection(l, v, t, n, -1)
                                }
                            }
                        }, h.prototype[a.types.PLANE] = h.prototype.intersectPlane, h.prototype.getAABB = function(t) {
                            var e = this.to,
                                o = this.from;
                            t.lowerBound.x = Math.min(e.x, o.x), t.lowerBound.y = Math.min(e.y, o.y), t.lowerBound.z = Math.min(e.z, o.z), t.upperBound.x = Math.max(e.x, o.x), t.upperBound.y = Math.max(e.y, o.y), t.upperBound.z = Math.max(e.z, o.z)
                        };
                        var b = {
                            faceList: [0]
                        };
                        h.prototype.intersectHeightfield = function(t, e, o, n) {
                            t.data, t.elementSize;
                            var r = new i,
                                a = new h(this.from, this.to);
                            s.pointToLocalFrame(o, e, a.from, a.from), s.pointToLocalFrame(o, e, a.to, a.to);
                            var l = [],
                                p = null,
                                c = null,
                                u = null,
                                d = null,
                                v = t.getIndexOfPosition(a.from.x, a.from.y, l, !1);
                            if (v && (p = l[0], c = l[1], u = l[0], d = l[1]), (v = t.getIndexOfPosition(a.to.x, a.to.y, l, !1)) && ((null === p || l[0] < p) && (p = l[0]), (null === u || l[0] > u) && (u = l[0]), (null === c || l[1] < c) && (c = l[1]), (null === d || l[1] > d) && (d = l[1])), null !== p) {
                                var y = [];
                                t.getRectMinMax(p, c, u, d, y), y[0], y[1];
                                for (var f = p; f <= u; f++)
                                    for (var m = c; m <= d; m++) {
                                        if (this.result._shouldStop || (t.getConvexTrianglePillar(f, m, !1), s.pointToWorldFrame(o, e, t.pillarOffset, r), this.intersectConvex(t.pillarConvex, e, r, n, b), this.result._shouldStop)) return;
                                        t.getConvexTrianglePillar(f, m, !0), s.pointToWorldFrame(o, e, t.pillarOffset, r), this.intersectConvex(t.pillarConvex, e, r, n, b)
                                    }
                            }
                        }, h.prototype[a.types.HEIGHTFIELD] = h.prototype.intersectHeightfield;
                        var B = new i,
                            E = new i;
                        h.prototype.intersectSphere = function(t, e, o, i) {
                            var n = this.from,
                                s = this.to,
                                r = t.radius,
                                a = Math.pow(s.x - n.x, 2) + Math.pow(s.y - n.y, 2) + Math.pow(s.z - n.z, 2),
                                l = 2 * ((s.x - n.x) * (n.x - o.x) + (s.y - n.y) * (n.y - o.y) + (s.z - n.z) * (n.z - o.z)),
                                h = Math.pow(l, 2) - 4 * a * (Math.pow(n.x - o.x, 2) + Math.pow(n.y - o.y, 2) + Math.pow(n.z - o.z, 2) - Math.pow(r, 2));
                            if (!(h < 0)) {
                                if (0 === h) n.lerp(s, h, B), B.vsub(o, E), E.normalize(), this.reportIntersection(E, B, t, i, -1);
                                else {
                                    var p = (-l - Math.sqrt(h)) / (2 * a),
                                        c = (-l + Math.sqrt(h)) / (2 * a);
                                    if (p >= 0 && p <= 1 && (n.lerp(s, p, B), B.vsub(o, E), E.normalize(), this.reportIntersection(E, B, t, i, -1)), this.result._shouldStop) return;
                                    c >= 0 && c <= 1 && (n.lerp(s, c, B), B.vsub(o, E), E.normalize(), this.reportIntersection(E, B, t, i, -1))
                                }
                            }
                        }, h.prototype[a.types.SPHERE] = h.prototype.intersectSphere;
                        var A = new i;
                        new i, new i;
                        var S = new i;
                        h.prototype.intersectConvex = function(t, e, o, i, n) {
                            for (var s = n && n.faceList || null, r = t.faces, a = t.vertices, l = t.faceNormals, h = this._direction, p = this.from, c = this.to, u = p.distanceTo(c), d = s ? s.length : r.length, y = this.result, f = 0; !y._shouldStop && f < d; f++) {
                                var b = s ? s[f] : f,
                                    B = r[b],
                                    E = l[b];
                                S.copy(a[B[0]]), e.vmult(S, S), S.vadd(o, S), S.vsub(p, S), e.vmult(E, A);
                                var C = h.dot(A);
                                if (!(Math.abs(C) < this.precision)) {
                                    var z = A.dot(S) / C;
                                    if (!(z < 0)) {
                                        h.mult(z, m), m.vadd(p, m), w.copy(a[B[0]]), e.vmult(w, w), o.vadd(w, w);
                                        for (var q = 1; !y._shouldStop && q < B.length - 1; q++) {
                                            x.copy(a[B[q]]), g.copy(a[B[q + 1]]), e.vmult(x, x), e.vmult(g, g), o.vadd(x, x), o.vadd(g, g);
                                            var R = m.distanceTo(p);
                                            (v(m, w, x, g) || v(m, x, w, g)) && !(R > u) && this.reportIntersection(A, m, t, i, b)
                                        }
                                    }
                                }
                            }
                        }, h.prototype[a.types.CONVEXPOLYHEDRON] = h.prototype.intersectConvex;
                        var C = new i,
                            z = new i,
                            q = new i,
                            R = new i,
                            M = new i,
                            P = new i;
                        new l;
                        var F = [],
                            V = new s;
                        h.prototype.intersectTrimesh = function(t, e, o, i, n) {
                            n && n.faceList;
                            var r = t.indices;
                            t.vertices, t.faceNormals;
                            var a = this.from,
                                l = this.to,
                                h = this._direction;
                            V.position.copy(o), V.quaternion.copy(e), s.vectorToLocalFrame(o, e, h, z), s.pointToLocalFrame(o, e, a, q), s.pointToLocalFrame(o, e, l, R);
                            var p = q.distanceSquared(R);
                            t.tree.rayQuery(this, V, F);
                            for (var c = 0, u = F.length; !this.result._shouldStop && c !== u; c++) {
                                var d = F[c];
                                t.getNormal(d, C), t.getVertex(r[3 * d], w), w.vsub(q, S);
                                var y = z.dot(C),
                                    f = C.dot(S) / y;
                                if (!(f < 0)) {
                                    z.scale(f, m), m.vadd(q, m), t.getVertex(r[3 * d + 1], x), t.getVertex(r[3 * d + 2], g);
                                    var b = m.distanceSquared(q);
                                    (v(m, x, w, g) || v(m, w, x, g)) && !(b > p) && (s.vectorToWorldFrame(e, C, M), s.pointToWorldFrame(o, e, m, P), this.reportIntersection(M, P, t, i, d))
                                }
                            }
                            F.length = 0
                        }, h.prototype[a.types.TRIMESH] = h.prototype.intersectTrimesh, h.prototype.reportIntersection = function(t, e, o, i, n) {
                            var s = this.from,
                                r = this.to,
                                a = s.distanceTo(e),
                                l = this.result;
                            if (!(this.skipBackfaces && t.dot(this._direction) > 0)) switch (l.hitFaceIndex = void 0 !== n ? n : -1, this.mode) {
                                case h.ALL:
                                    this.hasHit = !0, l.set(s, r, t, e, o, i, a), l.hasHit = !0, this.callback(l);
                                    break;
                                case h.CLOSEST:
                                    (a < l.distance || !l.hasHit) && (this.hasHit = !0, l.hasHit = !0, l.set(s, r, t, e, o, i, a));
                                    break;
                                case h.ANY:
                                    this.hasHit = !0, l.hasHit = !0, l.set(s, r, t, e, o, i, a), l._shouldStop = !0
                            }
                        };
                        var T = new i,
                            I = new i
                    }, {
                        "../collision/AABB": 3,
                        "../collision/RaycastResult": 10,
                        "../math/Quaternion": 28,
                        "../math/Transform": 29,
                        "../math/Vec3": 30,
                        "../shapes/Box": 37,
                        "../shapes/ConvexPolyhedron": 38,
                        "../shapes/Shape": 43
                    }],
                    10: [function(t, e, o) {
                        var i = t("../math/Vec3");

                        function n() {
                            this.rayFromWorld = new i, this.rayToWorld = new i, this.hitNormalWorld = new i, this.hitPointWorld = new i, this.hasHit = !1, this.shape = null, this.body = null, this.hitFaceIndex = -1, this.distance = -1, this._shouldStop = !1
                        }
                        e.exports = n, n.prototype.reset = function() {
                            this.rayFromWorld.setZero(), this.rayToWorld.setZero(), this.hitNormalWorld.setZero(), this.hitPointWorld.setZero(), this.hasHit = !1, this.shape = null, this.body = null, this.hitFaceIndex = -1, this.distance = -1, this._shouldStop = !1
                        }, n.prototype.abort = function() {
                            this._shouldStop = !0
                        }, n.prototype.set = function(t, e, o, i, n, s, r) {
                            this.rayFromWorld.copy(t), this.rayToWorld.copy(e), this.hitNormalWorld.copy(o), this.hitPointWorld.copy(i), this.shape = n, this.body = s, this.distance = r
                        }
                    }, {
                        "../math/Vec3": 30
                    }],
                    11: [function(t, e, o) {
                        t("../shapes/Shape");
                        var i = t("../collision/Broadphase");

                        function n(t) {
                            i.apply(this), this.axisList = [], this.world = null, this.axisIndex = 0;
                            var e = this.axisList;
                            this._addBodyHandler = function(t) {
                                e.push(t.body)
                            }, this._removeBodyHandler = function(t) {
                                var o = e.indexOf(t.body); - 1 !== o && e.splice(o, 1)
                            }, t && this.setWorld(t)
                        }
                        e.exports = n, n.prototype = new i, n.prototype.setWorld = function(t) {
                            this.axisList.length = 0;
                            for (var e = 0; e < t.bodies.length; e++) this.axisList.push(t.bodies[e]);
                            t.removeEventListener("addBody", this._addBodyHandler), t.removeEventListener("removeBody", this._removeBodyHandler), t.addEventListener("addBody", this._addBodyHandler), t.addEventListener("removeBody", this._removeBodyHandler), this.world = t, this.dirty = !0
                        }, n.insertionSortX = function(t) {
                            for (var e = 1, o = t.length; e < o; e++) {
                                for (var i = t[e], n = e - 1; n >= 0 && !(t[n].aabb.lowerBound.x <= i.aabb.lowerBound.x); n--) t[n + 1] = t[n];
                                t[n + 1] = i
                            }
                            return t
                        }, n.insertionSortY = function(t) {
                            for (var e = 1, o = t.length; e < o; e++) {
                                for (var i = t[e], n = e - 1; n >= 0 && !(t[n].aabb.lowerBound.y <= i.aabb.lowerBound.y); n--) t[n + 1] = t[n];
                                t[n + 1] = i
                            }
                            return t
                        }, n.insertionSortZ = function(t) {
                            for (var e = 1, o = t.length; e < o; e++) {
                                for (var i = t[e], n = e - 1; n >= 0 && !(t[n].aabb.lowerBound.z <= i.aabb.lowerBound.z); n--) t[n + 1] = t[n];
                                t[n + 1] = i
                            }
                            return t
                        }, n.prototype.collisionPairs = function(t, e, o) {
                            var i, s, r = this.axisList,
                                a = r.length,
                                l = this.axisIndex;
                            for (this.dirty && (this.sortList(), this.dirty = !1), i = 0; i !== a; i++) {
                                var h = r[i];
                                for (s = i + 1; s < a; s++) {
                                    var p = r[s];
                                    if (this.needBroadphaseCollision(h, p)) {
                                        if (!n.checkBounds(h, p, l)) break;
                                        this.intersectionTest(h, p, e, o)
                                    }
                                }
                            }
                        }, n.prototype.sortList = function() {
                            for (var t = this.axisList, e = this.axisIndex, o = t.length, i = 0; i !== o; i++) {
                                var s = t[i];
                                s.aabbNeedsUpdate && s.computeAABB()
                            }
                            0 === e ? n.insertionSortX(t) : 1 === e ? n.insertionSortY(t) : 2 === e && n.insertionSortZ(t)
                        }, n.checkBounds = function(t, e, o) {
                            0 === o ? (i = t.position.x, n = e.position.x) : 1 === o ? (i = t.position.y, n = e.position.y) : 2 === o && (i = t.position.z, n = e.position.z);
                            var i, n, s = t.boundingRadius;
                            return n - e.boundingRadius < i + s
                        }, n.prototype.autoDetectAxis = function() {
                            for (var t = 0, e = 0, o = 0, i = 0, n = 0, s = 0, r = this.axisList, a = r.length, l = 1 / a, h = 0; h !== a; h++) {
                                var p = r[h],
                                    c = p.position.x;
                                t += c, e += c * c;
                                var u = p.position.y;
                                o += u, i += u * u;
                                var d = p.position.z;
                                n += d, s += d * d
                            }
                            var v = e - t * t * l,
                                y = i - o * o * l,
                                f = s - n * n * l;
                            v > y ? v > f ? this.axisIndex = 0 : this.axisIndex = 2 : y > f ? this.axisIndex = 1 : this.axisIndex = 2
                        }, n.prototype.aabbQuery = function(t, e, o) {
                            o = o || [], this.dirty && (this.sortList(), this.dirty = !1);
                            var i = this.axisIndex,
                                n = "x";
                            1 === i && (n = "y"), 2 === i && (n = "z");
                            var s = this.axisList;
                            e.lowerBound[n], e.upperBound[n];
                            for (var r = 0; r < s.length; r++) {
                                var a = s[r];
                                a.aabbNeedsUpdate && a.computeAABB(), a.aabb.overlaps(e) && o.push(a)
                            }
                            return o
                        }
                    }, {
                        "../collision/Broadphase": 5,
                        "../shapes/Shape": 43
                    }],
                    12: [function(t, e, o) {
                        e.exports = a, t("./Constraint");
                        var i = t("./PointToPointConstraint"),
                            n = t("../equations/ConeEquation"),
                            s = t("../equations/RotationalEquation");
                        t("../equations/ContactEquation");
                        var r = t("../math/Vec3");

                        function a(t, e, o) {
                            var a = void 0 !== (o = o || {}).maxForce ? o.maxForce : 1e6,
                                l = o.pivotA ? o.pivotA.clone() : new r,
                                h = o.pivotB ? o.pivotB.clone() : new r;
                            this.axisA = o.axisA ? o.axisA.clone() : new r, this.axisB = o.axisB ? o.axisB.clone() : new r, i.call(this, t, l, e, h, a), this.collideConnected = !!o.collideConnected, this.angle = void 0 !== o.angle ? o.angle : 0;
                            var p = this.coneEquation = new n(t, e, o),
                                c = this.twistEquation = new s(t, e, o);
                            this.twistAngle = void 0 !== o.twistAngle ? o.twistAngle : 0, p.maxForce = 0, p.minForce = -a, c.maxForce = 0, c.minForce = -a, this.equations.push(p, c)
                        }
                        a.prototype = new i, a.constructor = a, new r, new r, a.prototype.update = function() {
                            var t = this.bodyA,
                                e = this.bodyB,
                                o = this.coneEquation,
                                n = this.twistEquation;
                            i.prototype.update.call(this), t.vectorToWorldFrame(this.axisA, o.axisA), e.vectorToWorldFrame(this.axisB, o.axisB), this.axisA.tangents(n.axisA, n.axisA), t.vectorToWorldFrame(n.axisA, n.axisA), this.axisB.tangents(n.axisB, n.axisB), e.vectorToWorldFrame(n.axisB, n.axisB), o.angle = this.angle, n.maxAngle = this.twistAngle
                        }
                    }, {
                        "../equations/ConeEquation": 18,
                        "../equations/ContactEquation": 19,
                        "../equations/RotationalEquation": 22,
                        "../math/Vec3": 30,
                        "./Constraint": 13,
                        "./PointToPointConstraint": 17
                    }],
                    13: [function(t, e, o) {
                        e.exports = n;
                        var i = t("../utils/Utils");

                        function n(t, e, o) {
                            o = i.defaults(o, {
                                collideConnected: !0,
                                wakeUpBodies: !0
                            }), this.equations = [], this.bodyA = t, this.bodyB = e, this.id = n.idCounter++, this.collideConnected = o.collideConnected, o.wakeUpBodies && (t && t.wakeUp(), e && e.wakeUp())
                        }
                        n.prototype.update = function() {
                            throw Error("method update() not implmemented in this Constraint subclass!")
                        }, n.prototype.enable = function() {
                            for (var t = this.equations, e = 0; e < t.length; e++) t[e].enabled = !0
                        }, n.prototype.disable = function() {
                            for (var t = this.equations, e = 0; e < t.length; e++) t[e].enabled = !1
                        }, n.idCounter = 0
                    }, {
                        "../utils/Utils": 53
                    }],
                    14: [function(t, e, o) {
                        e.exports = s;
                        var i = t("./Constraint"),
                            n = t("../equations/ContactEquation");

                        function s(t, e, o, s) {
                            i.call(this, t, e), void 0 === o && (o = t.position.distanceTo(e.position)), void 0 === s && (s = 1e6), this.distance = o;
                            var r = this.distanceEquation = new n(t, e);
                            this.equations.push(r), r.minForce = -s, r.maxForce = s
                        }
                        s.prototype = new i, s.prototype.update = function() {
                            var t = this.bodyA,
                                e = this.bodyB,
                                o = this.distanceEquation,
                                i = .5 * this.distance,
                                n = o.ni;
                            e.position.vsub(t.position, n), n.normalize(), n.mult(i, o.ri), n.mult(-i, o.rj)
                        }
                    }, {
                        "../equations/ContactEquation": 19,
                        "./Constraint": 13
                    }],
                    15: [function(t, e, o) {
                        e.exports = a, t("./Constraint");
                        var i = t("./PointToPointConstraint"),
                            n = t("../equations/RotationalEquation"),
                            s = t("../equations/RotationalMotorEquation");
                        t("../equations/ContactEquation");
                        var r = t("../math/Vec3");

                        function a(t, e, o) {
                            var a = void 0 !== (o = o || {}).maxForce ? o.maxForce : 1e6,
                                l = o.pivotA ? o.pivotA.clone() : new r,
                                h = o.pivotB ? o.pivotB.clone() : new r;
                            i.call(this, t, l, e, h, a), (this.axisA = o.axisA ? o.axisA.clone() : new r(1, 0, 0)).normalize(), (this.axisB = o.axisB ? o.axisB.clone() : new r(1, 0, 0)).normalize();
                            var p = this.rotationalEquation1 = new n(t, e, o),
                                c = this.rotationalEquation2 = new n(t, e, o),
                                u = this.motorEquation = new s(t, e, a);
                            u.enabled = !1, this.equations.push(p, c, u)
                        }
                        a.prototype = new i, a.constructor = a, a.prototype.enableMotor = function() {
                            this.motorEquation.enabled = !0
                        }, a.prototype.disableMotor = function() {
                            this.motorEquation.enabled = !1
                        }, a.prototype.setMotorSpeed = function(t) {
                            this.motorEquation.targetVelocity = t
                        }, a.prototype.setMotorMaxForce = function(t) {
                            this.motorEquation.maxForce = t, this.motorEquation.minForce = -t
                        };
                        var l = new r,
                            h = new r;
                        a.prototype.update = function() {
                            var t = this.bodyA,
                                e = this.bodyB,
                                o = this.motorEquation,
                                n = this.rotationalEquation1,
                                s = this.rotationalEquation2,
                                r = this.axisA,
                                a = this.axisB;
                            i.prototype.update.call(this), t.quaternion.vmult(r, l), e.quaternion.vmult(a, h), l.tangents(n.axisA, s.axisA), n.axisB.copy(h), s.axisB.copy(h), this.motorEquation.enabled && (t.quaternion.vmult(this.axisA, o.axisA), e.quaternion.vmult(this.axisB, o.axisB))
                        }
                    }, {
                        "../equations/ContactEquation": 19,
                        "../equations/RotationalEquation": 22,
                        "../equations/RotationalMotorEquation": 23,
                        "../math/Vec3": 30,
                        "./Constraint": 13,
                        "./PointToPointConstraint": 17
                    }],
                    16: [function(t, e, o) {
                        e.exports = r, t("./Constraint");
                        var i = t("./PointToPointConstraint"),
                            n = t("../equations/RotationalEquation");
                        t("../equations/RotationalMotorEquation"), t("../equations/ContactEquation");
                        var s = t("../math/Vec3");

                        function r(t, e, o) {
                            var r = void 0 !== (o = o || {}).maxForce ? o.maxForce : 1e6,
                                a = new s,
                                l = new s,
                                h = new s;
                            t.position.vadd(e.position, h), h.scale(.5, h), e.pointToLocalFrame(h, l), t.pointToLocalFrame(h, a), i.call(this, t, a, e, l, r);
                            var p = this.rotationalEquation1 = new n(t, e, o),
                                c = this.rotationalEquation2 = new n(t, e, o),
                                u = this.rotationalEquation3 = new n(t, e, o);
                            this.equations.push(p, c, u)
                        }
                        r.prototype = new i, r.constructor = r, new s, new s, r.prototype.update = function() {
                            var t = this.bodyA,
                                e = this.bodyB,
                                o = (this.motorEquation, this.rotationalEquation1),
                                n = this.rotationalEquation2,
                                r = this.rotationalEquation3;
                            i.prototype.update.call(this), t.vectorToWorldFrame(s.UNIT_X, o.axisA), e.vectorToWorldFrame(s.UNIT_Y, o.axisB), t.vectorToWorldFrame(s.UNIT_Y, n.axisA), e.vectorToWorldFrame(s.UNIT_Z, n.axisB), t.vectorToWorldFrame(s.UNIT_Z, r.axisA), e.vectorToWorldFrame(s.UNIT_X, r.axisB)
                        }
                    }, {
                        "../equations/ContactEquation": 19,
                        "../equations/RotationalEquation": 22,
                        "../equations/RotationalMotorEquation": 23,
                        "../math/Vec3": 30,
                        "./Constraint": 13,
                        "./PointToPointConstraint": 17
                    }],
                    17: [function(t, e, o) {
                        e.exports = r;
                        var i = t("./Constraint"),
                            n = t("../equations/ContactEquation"),
                            s = t("../math/Vec3");

                        function r(t, e, o, r, a) {
                            i.call(this, t, o), a = void 0 !== a ? a : 1e6, this.pivotA = e ? e.clone() : new s, this.pivotB = r ? r.clone() : new s;
                            var l = this.equationX = new n(t, o),
                                h = this.equationY = new n(t, o),
                                p = this.equationZ = new n(t, o);
                            this.equations.push(l, h, p), l.minForce = h.minForce = p.minForce = -a, l.maxForce = h.maxForce = p.maxForce = a, l.ni.set(1, 0, 0), h.ni.set(0, 1, 0), p.ni.set(0, 0, 1)
                        }
                        r.prototype = new i, r.prototype.update = function() {
                            var t = this.bodyA,
                                e = this.bodyB,
                                o = this.equationX,
                                i = this.equationY,
                                n = this.equationZ;
                            t.quaternion.vmult(this.pivotA, o.ri), e.quaternion.vmult(this.pivotB, o.rj), i.ri.copy(o.ri), i.rj.copy(o.rj), n.ri.copy(o.ri), n.rj.copy(o.rj)
                        }
                    }, {
                        "../equations/ContactEquation": 19,
                        "../math/Vec3": 30,
                        "./Constraint": 13
                    }],
                    18: [function(t, e, o) {
                        e.exports = s;
                        var i = t("../math/Vec3");
                        t("../math/Mat3");
                        var n = t("./Equation");

                        function s(t, e, o) {
                            var s = void 0 !== (o = o || {}).maxForce ? o.maxForce : 1e6;
                            n.call(this, t, e, -s, s), this.axisA = o.axisA ? o.axisA.clone() : new i(1, 0, 0), this.axisB = o.axisB ? o.axisB.clone() : new i(0, 1, 0), this.angle = void 0 !== o.angle ? o.angle : 0
                        }
                        s.prototype = new n, s.prototype.constructor = s;
                        var r = new i,
                            a = new i;
                        s.prototype.computeB = function(t) {
                            var e = this.a,
                                o = this.b,
                                i = this.axisA,
                                n = this.axisB,
                                s = this.jacobianElementA,
                                l = this.jacobianElementB;
                            return i.cross(n, r), n.cross(i, a), s.rotational.copy(a), l.rotational.copy(r), -(Math.cos(this.angle) - i.dot(n)) * e - this.computeGW() * o - t * this.computeGiMf()
                        }
                    }, {
                        "../math/Mat3": 27,
                        "../math/Vec3": 30,
                        "./Equation": 20
                    }],
                    19: [function(t, e, o) {
                        e.exports = s;
                        var i = t("./Equation"),
                            n = t("../math/Vec3");

                        function s(t, e, o) {
                            o = void 0 !== o ? o : 1e6, i.call(this, t, e, 0, o), this.restitution = 0, this.ri = new n, this.rj = new n, this.ni = new n
                        }
                        t("../math/Mat3"), s.prototype = new i, s.prototype.constructor = s;
                        var r = new n,
                            a = new n,
                            l = new n;
                        s.prototype.computeB = function(t) {
                            var e = this.a,
                                o = this.b,
                                i = this.bi,
                                n = this.bj,
                                s = this.ri,
                                h = this.rj,
                                p = i.velocity,
                                c = i.angularVelocity,
                                u = (i.force, i.torque, n.velocity),
                                d = n.angularVelocity,
                                v = (n.force, n.torque, this.jacobianElementA),
                                y = this.jacobianElementB,
                                f = this.ni;
                            s.cross(f, r), h.cross(f, a), f.negate(v.spatial), r.negate(v.rotational), y.spatial.copy(f), y.rotational.copy(a), l.copy(n.position), l.vadd(h, l), l.vsub(i.position, l), l.vsub(s, l);
                            var m = f.dot(l),
                                w = this.restitution + 1;
                            return -m * e - (w * u.dot(f) - w * p.dot(f) + d.dot(a) - c.dot(r)) * o - t * this.computeGiMf()
                        };
                        var h = new n,
                            p = new n,
                            c = new n,
                            u = new n,
                            d = new n;
                        s.prototype.getImpactVelocityAlongNormal = function() {
                            return this.bi.position.vadd(this.ri, c), this.bj.position.vadd(this.rj, u), this.bi.getVelocityAtWorldPoint(c, h), this.bj.getVelocityAtWorldPoint(u, p), h.vsub(p, d), this.ni.dot(d)
                        }
                    }, {
                        "../math/Mat3": 27,
                        "../math/Vec3": 30,
                        "./Equation": 20
                    }],
                    20: [function(t, e, o) {
                        e.exports = s;
                        var i = t("../math/JacobianElement"),
                            n = t("../math/Vec3");

                        function s(t, e, o, n) {
                            this.id = s.id++, this.minForce = void 0 === o ? -1e6 : o, this.maxForce = void 0 === n ? 1e6 : n, this.bi = t, this.bj = e, this.a = 0, this.b = 0, this.eps = 0, this.jacobianElementA = new i, this.jacobianElementB = new i, this.enabled = !0, this.setSpookParams(1e7, 4, 1 / 60)
                        }
                        s.prototype.constructor = s, s.id = 0, s.prototype.setSpookParams = function(t, e, o) {
                            this.a = 4 / (o * (1 + 4 * e)), this.b = 4 * e / (1 + 4 * e), this.eps = 4 / (o * o * t * (1 + 4 * e))
                        }, s.prototype.computeB = function(t, e, o) {
                            var i = this.computeGW();
                            return -this.computeGq() * t - i * e - this.computeGiMf() * o
                        }, s.prototype.computeGq = function() {
                            var t = this.jacobianElementA,
                                e = this.jacobianElementB,
                                o = this.bi,
                                i = this.bj,
                                n = o.position,
                                s = i.position;
                            return t.spatial.dot(n) + e.spatial.dot(s)
                        };
                        var r = new n;
                        s.prototype.computeGW = function() {
                            var t = this.jacobianElementA,
                                e = this.jacobianElementB,
                                o = this.bi,
                                i = this.bj,
                                n = o.velocity,
                                s = i.velocity,
                                a = o.angularVelocity || r,
                                l = i.angularVelocity || r;
                            return t.multiplyVectors(n, a) + e.multiplyVectors(s, l)
                        }, s.prototype.computeGWlambda = function() {
                            var t = this.jacobianElementA,
                                e = this.jacobianElementB,
                                o = this.bi,
                                i = this.bj,
                                n = o.vlambda,
                                s = i.vlambda,
                                a = o.wlambda || r,
                                l = i.wlambda || r;
                            return t.multiplyVectors(n, a) + e.multiplyVectors(s, l)
                        };
                        var a = new n,
                            l = new n,
                            h = new n,
                            p = new n;
                        s.prototype.computeGiMf = function() {
                            var t = this.jacobianElementA,
                                e = this.jacobianElementB,
                                o = this.bi,
                                i = this.bj,
                                n = o.force,
                                s = o.torque,
                                r = i.force,
                                c = i.torque,
                                u = o.invMassSolve,
                                d = i.invMassSolve;
                            return o.invInertiaWorldSolve ? o.invInertiaWorldSolve.vmult(s, h) : h.set(0, 0, 0), i.invInertiaWorldSolve ? i.invInertiaWorldSolve.vmult(c, p) : p.set(0, 0, 0), n.mult(u, a), r.mult(d, l), t.multiplyVectors(a, h) + e.multiplyVectors(l, p)
                        };
                        var c = new n;
                        s.prototype.computeGiMGt = function() {
                            var t = this.jacobianElementA,
                                e = this.jacobianElementB,
                                o = this.bi,
                                i = this.bj,
                                n = o.invMassSolve,
                                s = i.invMassSolve,
                                r = o.invInertiaWorldSolve,
                                a = i.invInertiaWorldSolve,
                                l = n + s;
                            return r && (r.vmult(t.rotational, c), l += c.dot(t.rotational)), a && (a.vmult(e.rotational, c), l += c.dot(e.rotational)), l
                        };
                        var u = new n;
                        new n, new n, new n, new n, new n, s.prototype.addToWlambda = function(t) {
                            var e = this.jacobianElementA,
                                o = this.jacobianElementB,
                                i = this.bi,
                                n = this.bj;
                            e.spatial.mult(i.invMassSolve * t, u), i.vlambda.vadd(u, i.vlambda), o.spatial.mult(n.invMassSolve * t, u), n.vlambda.vadd(u, n.vlambda), i.invInertiaWorldSolve && (i.invInertiaWorldSolve.vmult(e.rotational, u), u.mult(t, u), i.wlambda.vadd(u, i.wlambda)), n.invInertiaWorldSolve && (n.invInertiaWorldSolve.vmult(o.rotational, u), u.mult(t, u), n.wlambda.vadd(u, n.wlambda))
                        }, s.prototype.computeC = function() {
                            return this.computeGiMGt() + this.eps
                        }
                    }, {
                        "../math/JacobianElement": 26,
                        "../math/Vec3": 30
                    }],
                    21: [function(t, e, o) {
                        e.exports = s;
                        var i = t("./Equation"),
                            n = t("../math/Vec3");

                        function s(t, e, o) {
                            i.call(this, t, e, -o, o), this.ri = new n, this.rj = new n, this.t = new n
                        }
                        t("../math/Mat3"), s.prototype = new i, s.prototype.constructor = s;
                        var r = new n,
                            a = new n;
                        s.prototype.computeB = function(t) {
                            this.a;
                            var e = this.b,
                                o = (this.bi, this.bj, this.ri),
                                i = this.rj,
                                n = this.t;
                            o.cross(n, r), i.cross(n, a);
                            var s = this.jacobianElementA,
                                l = this.jacobianElementB;
                            return n.negate(s.spatial), r.negate(s.rotational), l.spatial.copy(n), l.rotational.copy(a), -this.computeGW() * e - t * this.computeGiMf()
                        }
                    }, {
                        "../math/Mat3": 27,
                        "../math/Vec3": 30,
                        "./Equation": 20
                    }],
                    22: [function(t, e, o) {
                        e.exports = s;
                        var i = t("../math/Vec3");
                        t("../math/Mat3");
                        var n = t("./Equation");

                        function s(t, e, o) {
                            var s = void 0 !== (o = o || {}).maxForce ? o.maxForce : 1e6;
                            n.call(this, t, e, -s, s), this.axisA = o.axisA ? o.axisA.clone() : new i(1, 0, 0), this.axisB = o.axisB ? o.axisB.clone() : new i(0, 1, 0), this.maxAngle = Math.PI / 2
                        }
                        s.prototype = new n, s.prototype.constructor = s;
                        var r = new i,
                            a = new i;
                        s.prototype.computeB = function(t) {
                            var e = this.a,
                                o = this.b,
                                i = this.axisA,
                                n = this.axisB,
                                s = this.jacobianElementA,
                                l = this.jacobianElementB;
                            return i.cross(n, r), n.cross(i, a), s.rotational.copy(a), l.rotational.copy(r), -(Math.cos(this.maxAngle) - i.dot(n)) * e - this.computeGW() * o - t * this.computeGiMf()
                        }
                    }, {
                        "../math/Mat3": 27,
                        "../math/Vec3": 30,
                        "./Equation": 20
                    }],
                    23: [function(t, e, o) {
                        e.exports = s;
                        var i = t("../math/Vec3");
                        t("../math/Mat3");
                        var n = t("./Equation");

                        function s(t, e, o) {
                            o = void 0 !== o ? o : 1e6, n.call(this, t, e, -o, o), this.axisA = new i, this.axisB = new i, this.targetVelocity = 0
                        }
                        s.prototype = new n, s.prototype.constructor = s, s.prototype.computeB = function(t) {
                            this.a;
                            var e = this.b,
                                o = (this.bi, this.bj, this.axisA),
                                i = this.axisB,
                                n = this.jacobianElementA,
                                s = this.jacobianElementB;
                            return n.rotational.copy(o), i.negate(s.rotational), -(this.computeGW() - this.targetVelocity) * e - t * this.computeGiMf()
                        }
                    }, {
                        "../math/Mat3": 27,
                        "../math/Vec3": 30,
                        "./Equation": 20
                    }],
                    24: [function(t, e, o) {
                        var i = t("../utils/Utils");

                        function n(t, e, o) {
                            o = i.defaults(o, {
                                friction: .3,
                                restitution: .3,
                                contactEquationStiffness: 1e7,
                                contactEquationRelaxation: 3,
                                frictionEquationStiffness: 1e7,
                                frictionEquationRelaxation: 3
                            }), this.id = n.idCounter++, this.materials = [t, e], this.friction = o.friction, this.restitution = o.restitution, this.contactEquationStiffness = o.contactEquationStiffness, this.contactEquationRelaxation = o.contactEquationRelaxation, this.frictionEquationStiffness = o.frictionEquationStiffness, this.frictionEquationRelaxation = o.frictionEquationRelaxation
                        }
                        e.exports = n, n.idCounter = 0
                    }, {
                        "../utils/Utils": 53
                    }],
                    25: [function(t, e, o) {
                        function i(t) {
                            var e = "";
                            "string" == typeof(t = t || {}) ? (e = t, t = {}) : "object" == typeof t && (e = ""), this.name = e, this.id = i.idCounter++, this.friction = void 0 !== t.friction ? t.friction : -1, this.restitution = void 0 !== t.restitution ? t.restitution : -1
                        }
                        e.exports = i, i.idCounter = 0
                    }, {}],
                    26: [function(t, e, o) {
                        e.exports = n;
                        var i = t("./Vec3");

                        function n() {
                            this.spatial = new i, this.rotational = new i
                        }
                        n.prototype.multiplyElement = function(t) {
                            return t.spatial.dot(this.spatial) + t.rotational.dot(this.rotational)
                        }, n.prototype.multiplyVectors = function(t, e) {
                            return t.dot(this.spatial) + e.dot(this.rotational)
                        }
                    }, {
                        "./Vec3": 30
                    }],
                    27: [function(t, e, o) {
                        e.exports = n;
                        var i = t("./Vec3");

                        function n(t) {
                            t ? this.elements = t : this.elements = [0, 0, 0, 0, 0, 0, 0, 0, 0]
                        }
                        n.prototype.identity = function() {
                            var t = this.elements;
                            t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1
                        }, n.prototype.setZero = function() {
                            var t = this.elements;
                            t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 0
                        }, n.prototype.setTrace = function(t) {
                            var e = this.elements;
                            e[0] = t.x, e[4] = t.y, e[8] = t.z
                        }, n.prototype.getTrace = function(t) {
                            var t = t || new i,
                                e = this.elements;
                            t.x = e[0], t.y = e[4], t.z = e[8]
                        }, n.prototype.vmult = function(t, e) {
                            e = e || new i;
                            var o = this.elements,
                                n = t.x,
                                s = t.y,
                                r = t.z;
                            return e.x = o[0] * n + o[1] * s + o[2] * r, e.y = o[3] * n + o[4] * s + o[5] * r, e.z = o[6] * n + o[7] * s + o[8] * r, e
                        }, n.prototype.smult = function(t) {
                            for (var e = 0; e < this.elements.length; e++) this.elements[e] *= t
                        }, n.prototype.mmult = function(t, e) {
                            for (var o = e || new n, i = 0; i < 3; i++)
                                for (var s = 0; s < 3; s++) {
                                    for (var r = 0, a = 0; a < 3; a++) r += t.elements[i + 3 * a] * this.elements[a + 3 * s];
                                    o.elements[i + 3 * s] = r
                                }
                            return o
                        }, n.prototype.scale = function(t, e) {
                            e = e || new n;
                            for (var o = this.elements, i = e.elements, s = 0; 3 !== s; s++) i[3 * s + 0] = t.x * o[3 * s + 0], i[3 * s + 1] = t.y * o[3 * s + 1], i[3 * s + 2] = t.z * o[3 * s + 2];
                            return e
                        }, n.prototype.solve = function(t, e) {
                            e = e || new i;
                            for (var o = [], n = 0; n < 12; n++) o.push(0);
                            for (n = 0; n < 3; n++)
                                for (r = 0; r < 3; r++) o[n + 4 * r] = this.elements[n + 3 * r];
                            o[3] = t.x, o[7] = t.y, o[11] = t.z;
                            var s, n, r, a, l = 3;
                            do {
                                if (0 === o[(n = 3 - l) + 4 * n]) {
                                    for (r = n + 1; r < 3; r++)
                                        if (0 !== o[n + 4 * r]) {
                                            a = 4;
                                            do s = 4 - a, o[s + 4 * n] += o[s + 4 * r]; while (--a);
                                            break
                                        }
                                }
                                if (0 !== o[n + 4 * n])
                                    for (r = n + 1; r < 3; r++) {
                                        var h = o[n + 4 * r] / o[n + 4 * n];
                                        a = 4;
                                        do o[(s = 4 - a) + 4 * r] = s <= n ? 0 : o[s + 4 * r] - o[s + 4 * n] * h; while (--a)
                                    }
                            } while (--l);
                            if (e.z = o[11] / o[10], e.y = (o[7] - o[6] * e.z) / o[5], e.x = (o[3] - o[2] * e.z - o[1] * e.y) / o[0], isNaN(e.x) || isNaN(e.y) || isNaN(e.z) || e.x === 1 / 0 || e.y === 1 / 0 || e.z === 1 / 0) throw "Could not solve equation! Got x=[" + e.toString() + "], b=[" + t.toString() + "], A=[" + this.toString() + "]";
                            return e
                        }, n.prototype.e = function(t, e, o) {
                            if (void 0 === o) return this.elements[e + 3 * t];
                            this.elements[e + 3 * t] = o
                        }, n.prototype.copy = function(t) {
                            for (var e = 0; e < t.elements.length; e++) this.elements[e] = t.elements[e];
                            return this
                        }, n.prototype.toString = function() {
                            for (var t = "", e = 0; e < 9; e++) t += this.elements[e] + ",";
                            return t
                        }, n.prototype.reverse = function(t) {
                            t = t || new n;
                            for (var e = [], o = 0; o < 18; o++) e.push(0);
                            for (o = 0; o < 3; o++)
                                for (s = 0; s < 3; s++) e[o + 6 * s] = this.elements[o + 3 * s];
                            e[3] = 1, e[9] = 0, e[15] = 0, e[4] = 0, e[10] = 1, e[16] = 0, e[5] = 0, e[11] = 0, e[17] = 1;
                            var i, o, s, r, a = 3;
                            do {
                                if (0 === e[(o = 3 - a) + 6 * o]) {
                                    for (s = o + 1; s < 3; s++)
                                        if (0 !== e[o + 6 * s]) {
                                            r = 6;
                                            do i = 6 - r, e[i + 6 * o] += e[i + 6 * s]; while (--r);
                                            break
                                        }
                                }
                                if (0 !== e[o + 6 * o])
                                    for (s = o + 1; s < 3; s++) {
                                        var l = e[o + 6 * s] / e[o + 6 * o];
                                        r = 6;
                                        do e[(i = 6 - r) + 6 * s] = i <= o ? 0 : e[i + 6 * s] - e[i + 6 * o] * l; while (--r)
                                    }
                            } while (--a);
                            o = 2;
                            do {
                                s = o - 1;
                                do {
                                    var l = e[o + 6 * s] / e[o + 6 * o];
                                    r = 6;
                                    do e[(i = 6 - r) + 6 * s] = e[i + 6 * s] - e[i + 6 * o] * l; while (--r)
                                } while (s--)
                            } while (--o);
                            o = 2;
                            do {
                                var l = 1 / e[o + 6 * o];
                                r = 6;
                                do e[(i = 6 - r) + 6 * o] = e[i + 6 * o] * l; while (--r)
                            } while (o--);
                            o = 2;
                            do {
                                s = 2;
                                do {
                                    if (isNaN(i = e[3 + s + 6 * o]) || i === 1 / 0) throw "Could not reverse! A=[" + this.toString() + "]";
                                    t.e(o, s, i)
                                } while (s--)
                            } while (o--);
                            return t
                        }, n.prototype.setRotationFromQuaternion = function(t) {
                            var e = t.x,
                                o = t.y,
                                i = t.z,
                                n = t.w,
                                s = e + e,
                                r = o + o,
                                a = i + i,
                                l = e * s,
                                h = e * r,
                                p = e * a,
                                c = o * r,
                                u = o * a,
                                d = i * a,
                                v = n * s,
                                y = n * r,
                                f = n * a,
                                m = this.elements;
                            return m[0] = 1 - (c + d), m[1] = h - f, m[2] = p + y, m[3] = h + f, m[4] = 1 - (l + d), m[5] = u - v, m[6] = p - y, m[7] = u + v, m[8] = 1 - (l + c), this
                        }, n.prototype.transpose = function(t) {
                            for (var e = (t = t || new n).elements, o = this.elements, i = 0; 3 !== i; i++)
                                for (var s = 0; 3 !== s; s++) e[3 * i + s] = o[3 * s + i];
                            return t
                        }
                    }, {
                        "./Vec3": 30
                    }],
                    28: [function(t, e, o) {
                        e.exports = n;
                        var i = t("./Vec3");

                        function n(t, e, o, i) {
                            this.x = void 0 !== t ? t : 0, this.y = void 0 !== e ? e : 0, this.z = void 0 !== o ? o : 0, this.w = void 0 !== i ? i : 1
                        }
                        n.prototype.set = function(t, e, o, i) {
                            this.x = t, this.y = e, this.z = o, this.w = i
                        }, n.prototype.toString = function() {
                            return this.x + "," + this.y + "," + this.z + "," + this.w
                        }, n.prototype.toArray = function() {
                            return [this.x, this.y, this.z, this.w]
                        }, n.prototype.setFromAxisAngle = function(t, e) {
                            var o = Math.sin(.5 * e);
                            this.x = t.x * o, this.y = t.y * o, this.z = t.z * o, this.w = Math.cos(.5 * e)
                        }, n.prototype.toAxisAngle = function(t) {
                            t = t || new i, this.normalize();
                            var e = 2 * Math.acos(this.w),
                                o = Math.sqrt(1 - this.w * this.w);
                            return o < .001 ? (t.x = this.x, t.y = this.y, t.z = this.z) : (t.x = this.x / o, t.y = this.y / o, t.z = this.z / o), [t, e]
                        };
                        var s = new i,
                            r = new i;
                        n.prototype.setFromVectors = function(t, e) {
                            if (t.isAntiparallelTo(e)) t.tangents(s, r), this.setFromAxisAngle(s, Math.PI);
                            else {
                                var o = t.cross(e);
                                this.x = o.x, this.y = o.y, this.z = o.z, this.w = Math.sqrt(Math.pow(t.norm(), 2) * Math.pow(e.norm(), 2)) + t.dot(e), this.normalize()
                            }
                        };
                        var a = new i,
                            l = new i,
                            h = new i;
                        n.prototype.mult = function(t, e) {
                            e = e || new n;
                            var o = this.w;
                            return a.set(this.x, this.y, this.z), l.set(t.x, t.y, t.z), e.w = o * t.w - a.dot(l), a.cross(l, h), e.x = o * l.x + t.w * a.x + h.x, e.y = o * l.y + t.w * a.y + h.y, e.z = o * l.z + t.w * a.z + h.z, e
                        }, n.prototype.inverse = function(t) {
                            var e = this.x,
                                o = this.y,
                                i = this.z,
                                s = this.w;
                            t = t || new n, this.conjugate(t);
                            var r = 1 / (e * e + o * o + i * i + s * s);
                            return t.x *= r, t.y *= r, t.z *= r, t.w *= r, t
                        }, n.prototype.conjugate = function(t) {
                            return (t = t || new n).x = -this.x, t.y = -this.y, t.z = -this.z, t.w = this.w, t
                        }, n.prototype.normalize = function() {
                            var t = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
                            0 === t ? (this.x = 0, this.y = 0, this.z = 0, this.w = 0) : (t = 1 / t, this.x *= t, this.y *= t, this.z *= t, this.w *= t)
                        }, n.prototype.normalizeFast = function() {
                            var t = (3 - (this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)) / 2;
                            0 === t ? (this.x = 0, this.y = 0, this.z = 0, this.w = 0) : (this.x *= t, this.y *= t, this.z *= t, this.w *= t)
                        }, n.prototype.vmult = function(t, e) {
                            e = e || new i;
                            var o = t.x,
                                n = t.y,
                                s = t.z,
                                r = this.x,
                                a = this.y,
                                l = this.z,
                                h = this.w,
                                p = h * o + a * s - l * n,
                                c = h * n + l * o - r * s,
                                u = h * s + r * n - a * o,
                                d = -r * o - a * n - l * s;
                            return e.x = p * h + -(d * r) + -(c * l) - -(u * a), e.y = c * h + -(d * a) + -(u * r) - -(p * l), e.z = u * h + -(d * l) + -(p * a) - -(c * r), e
                        }, n.prototype.copy = function(t) {
                            return this.x = t.x, this.y = t.y, this.z = t.z, this.w = t.w, this
                        }, n.prototype.toEuler = function(t, e) {
                            e = e || "YZX";
                            var o, i, n, s = this.x,
                                r = this.y,
                                a = this.z,
                                l = this.w;
                            if ("YZX" === e) {
                                var h = s * r + a * l;
                                if (h > .499 && (o = 2 * Math.atan2(s, l), i = Math.PI / 2, n = 0), h < -.499 && (o = -2 * Math.atan2(s, l), i = -Math.PI / 2, n = 0), isNaN(o)) {
                                    var p = a * a;
                                    o = Math.atan2(2 * r * l - 2 * s * a, 1 - r * r * 2 - 2 * p), i = Math.asin(2 * h), n = Math.atan2(2 * s * l - 2 * r * a, 1 - s * s * 2 - 2 * p)
                                }
                            } else throw Error("Euler order " + e + " not supported yet.");
                            t.y = o, t.z = i, t.x = n
                        }, n.prototype.setFromEuler = function(t, e, o, i) {
                            var n = Math.cos(t / 2),
                                s = Math.cos(e / 2),
                                r = Math.cos(o / 2),
                                a = Math.sin(t / 2),
                                l = Math.sin(e / 2),
                                h = Math.sin(o / 2);
                            return "XYZ" === (i = i || "XYZ") ? (this.x = a * s * r + n * l * h, this.y = n * l * r - a * s * h, this.z = n * s * h + a * l * r, this.w = n * s * r - a * l * h) : "YXZ" === i ? (this.x = a * s * r + n * l * h, this.y = n * l * r - a * s * h, this.z = n * s * h - a * l * r, this.w = n * s * r + a * l * h) : "ZXY" === i ? (this.x = a * s * r - n * l * h, this.y = n * l * r + a * s * h, this.z = n * s * h + a * l * r, this.w = n * s * r - a * l * h) : "ZYX" === i ? (this.x = a * s * r - n * l * h, this.y = n * l * r + a * s * h, this.z = n * s * h - a * l * r, this.w = n * s * r + a * l * h) : "YZX" === i ? (this.x = a * s * r + n * l * h, this.y = n * l * r + a * s * h, this.z = n * s * h - a * l * r, this.w = n * s * r - a * l * h) : "XZY" === i && (this.x = a * s * r - n * l * h, this.y = n * l * r - a * s * h, this.z = n * s * h + a * l * r, this.w = n * s * r + a * l * h), this
                        }, n.prototype.clone = function() {
                            return new n(this.x, this.y, this.z, this.w)
                        }
                    }, {
                        "./Vec3": 30
                    }],
                    29: [function(t, e, o) {
                        var i = t("./Vec3"),
                            n = t("./Quaternion");

                        function s(t) {
                            t = t || {}, this.position = new i, t.position && this.position.copy(t.position), this.quaternion = new n, t.quaternion && this.quaternion.copy(t.quaternion)
                        }
                        e.exports = s;
                        var r = new n;
                        s.pointToLocalFrame = function(t, e, o, n) {
                            var n = n || new i;
                            return o.vsub(t, n), e.conjugate(r), r.vmult(n, n), n
                        }, s.prototype.pointToLocal = function(t, e) {
                            return s.pointToLocalFrame(this.position, this.quaternion, t, e)
                        }, s.pointToWorldFrame = function(t, e, o, n) {
                            var n = n || new i;
                            return e.vmult(o, n), n.vadd(t, n), n
                        }, s.prototype.pointToWorld = function(t, e) {
                            return s.pointToWorldFrame(this.position, this.quaternion, t, e)
                        }, s.prototype.vectorToWorldFrame = function(t, e) {
                            var e = e || new i;
                            return this.quaternion.vmult(t, e), e
                        }, s.vectorToWorldFrame = function(t, e, o) {
                            return t.vmult(e, o), o
                        }, s.vectorToLocalFrame = function(t, e, o, n) {
                            var n = n || new i;
                            return e.w *= -1, e.vmult(o, n), e.w *= -1, n
                        }
                    }, {
                        "./Quaternion": 28,
                        "./Vec3": 30
                    }],
                    30: [function(t, e, o) {
                        e.exports = n;
                        var i = t("./Mat3");

                        function n(t, e, o) {
                            this.x = t || 0, this.y = e || 0, this.z = o || 0
                        }
                        n.ZERO = new n(0, 0, 0), n.UNIT_X = new n(1, 0, 0), n.UNIT_Y = new n(0, 1, 0), n.UNIT_Z = new n(0, 0, 1), n.prototype.cross = function(t, e) {
                            var o = t.x,
                                i = t.y,
                                s = t.z,
                                r = this.x,
                                a = this.y,
                                l = this.z;
                            return (e = e || new n).x = a * s - l * i, e.y = l * o - r * s, e.z = r * i - a * o, e
                        }, n.prototype.set = function(t, e, o) {
                            return this.x = t, this.y = e, this.z = o, this
                        }, n.prototype.setZero = function() {
                            this.x = this.y = this.z = 0
                        }, n.prototype.vadd = function(t, e) {
                            if (!e) return new n(this.x + t.x, this.y + t.y, this.z + t.z);
                            e.x = t.x + this.x, e.y = t.y + this.y, e.z = t.z + this.z
                        }, n.prototype.vsub = function(t, e) {
                            if (!e) return new n(this.x - t.x, this.y - t.y, this.z - t.z);
                            e.x = this.x - t.x, e.y = this.y - t.y, e.z = this.z - t.z
                        }, n.prototype.crossmat = function() {
                            return new i([0, -this.z, this.y, this.z, 0, -this.x, -this.y, this.x, 0])
                        }, n.prototype.normalize = function() {
                            var t = this.x,
                                e = this.y,
                                o = this.z,
                                i = Math.sqrt(t * t + e * e + o * o);
                            if (i > 0) {
                                var n = 1 / i;
                                this.x *= n, this.y *= n, this.z *= n
                            } else this.x = 0, this.y = 0, this.z = 0;
                            return i
                        }, n.prototype.unit = function(t) {
                            t = t || new n;
                            var e = this.x,
                                o = this.y,
                                i = this.z,
                                s = Math.sqrt(e * e + o * o + i * i);
                            return s > 0 ? (s = 1 / s, t.x = e * s, t.y = o * s, t.z = i * s) : (t.x = 1, t.y = 0, t.z = 0), t
                        }, n.prototype.norm = function() {
                            var t = this.x,
                                e = this.y,
                                o = this.z;
                            return Math.sqrt(t * t + e * e + o * o)
                        }, n.prototype.length = n.prototype.norm, n.prototype.norm2 = function() {
                            return this.dot(this)
                        }, n.prototype.lengthSquared = n.prototype.norm2, n.prototype.distanceTo = function(t) {
                            var e = this.x,
                                o = this.y,
                                i = this.z,
                                n = t.x,
                                s = t.y,
                                r = t.z;
                            return Math.sqrt((n - e) * (n - e) + (s - o) * (s - o) + (r - i) * (r - i))
                        }, n.prototype.distanceSquared = function(t) {
                            var e = this.x,
                                o = this.y,
                                i = this.z,
                                n = t.x,
                                s = t.y,
                                r = t.z;
                            return (n - e) * (n - e) + (s - o) * (s - o) + (r - i) * (r - i)
                        }, n.prototype.mult = function(t, e) {
                            e = e || new n;
                            var o = this.x,
                                i = this.y,
                                s = this.z;
                            return e.x = t * o, e.y = t * i, e.z = t * s, e
                        }, n.prototype.scale = n.prototype.mult, n.prototype.dot = function(t) {
                            return this.x * t.x + this.y * t.y + this.z * t.z
                        }, n.prototype.isZero = function() {
                            return 0 === this.x && 0 === this.y && 0 === this.z
                        }, n.prototype.negate = function(t) {
                            return (t = t || new n).x = -this.x, t.y = -this.y, t.z = -this.z, t
                        };
                        var s = new n,
                            r = new n;
                        n.prototype.tangents = function(t, e) {
                            var o = this.norm();
                            if (o > 0) {
                                var i = 1 / o;
                                s.set(this.x * i, this.y * i, this.z * i), .9 > Math.abs(s.x) ? r.set(1, 0, 0) : r.set(0, 1, 0), s.cross(r, t), s.cross(t, e)
                            } else t.set(1, 0, 0), e.set(0, 1, 0)
                        }, n.prototype.toString = function() {
                            return this.x + "," + this.y + "," + this.z
                        }, n.prototype.toArray = function() {
                            return [this.x, this.y, this.z]
                        }, n.prototype.copy = function(t) {
                            return this.x = t.x, this.y = t.y, this.z = t.z, this
                        }, n.prototype.lerp = function(t, e, o) {
                            var i = this.x,
                                n = this.y,
                                s = this.z;
                            o.x = i + (t.x - i) * e, o.y = n + (t.y - n) * e, o.z = s + (t.z - s) * e
                        }, n.prototype.almostEquals = function(t, e) {
                            return void 0 === e && (e = 1e-6), !(Math.abs(this.x - t.x) > e || Math.abs(this.y - t.y) > e || Math.abs(this.z - t.z) > e)
                        }, n.prototype.almostZero = function(t) {
                            return void 0 === t && (t = 1e-6), !(Math.abs(this.x) > t || Math.abs(this.y) > t || Math.abs(this.z) > t)
                        };
                        var a = new n;
                        n.prototype.isAntiparallelTo = function(t, e) {
                            return this.negate(a), a.almostEquals(t, e)
                        }, n.prototype.clone = function() {
                            return new n(this.x, this.y, this.z)
                        }
                    }, {
                        "./Mat3": 27
                    }],
                    31: [function(t, e, o) {
                        e.exports = h;
                        var i = t("../utils/EventTarget");
                        t("../shapes/Shape");
                        var n = t("../math/Vec3"),
                            s = t("../math/Mat3"),
                            r = t("../math/Quaternion");
                        t("../material/Material");
                        var a = t("../collision/AABB"),
                            l = t("../shapes/Box");

                        function h(t) {
                            t = t || {}, i.apply(this), this.id = h.idCounter++, this.world = null, this.preStep = null, this.postStep = null, this.vlambda = new n, this.collisionFilterGroup = "number" == typeof t.collisionFilterGroup ? t.collisionFilterGroup : 1, this.collisionFilterMask = "number" == typeof t.collisionFilterMask ? t.collisionFilterMask : 1, this.collisionResponse = !0, this.position = new n, t.position && this.position.copy(t.position), this.previousPosition = new n, this.initPosition = new n, this.velocity = new n, t.velocity && this.velocity.copy(t.velocity), this.initVelocity = new n, this.force = new n;
                            var e = "number" == typeof t.mass ? t.mass : 0;
                            this.mass = e, this.invMass = e > 0 ? 1 / e : 0, this.material = t.material || null, this.linearDamping = "number" == typeof t.linearDamping ? t.linearDamping : .01, this.type = e <= 0 ? h.STATIC : h.DYNAMIC, typeof t.type == typeof h.STATIC && (this.type = t.type), this.allowSleep = void 0 === t.allowSleep || t.allowSleep, this.sleepState = 0, this.sleepSpeedLimit = void 0 !== t.sleepSpeedLimit ? t.sleepSpeedLimit : .1, this.sleepTimeLimit = void 0 !== t.sleepTimeLimit ? t.sleepTimeLimit : 1, this.timeLastSleepy = 0, this._wakeUpAfterNarrowphase = !1, this.torque = new n, this.quaternion = new r, t.quaternion && this.quaternion.copy(t.quaternion), this.initQuaternion = new r, this.angularVelocity = new n, t.angularVelocity && this.angularVelocity.copy(t.angularVelocity), this.initAngularVelocity = new n, this.interpolatedPosition = new n, this.interpolatedQuaternion = new r, this.shapes = [], this.shapeOffsets = [], this.shapeOrientations = [], this.inertia = new n, this.invInertia = new n, this.invInertiaWorld = new s, this.invMassSolve = 0, this.invInertiaSolve = new n, this.invInertiaWorldSolve = new s, this.fixedRotation = void 0 !== t.fixedRotation && t.fixedRotation, this.angularDamping = void 0 !== t.angularDamping ? t.angularDamping : .01, this.aabb = new a, this.aabbNeedsUpdate = !0, this.wlambda = new n, t.shape && this.addShape(t.shape), this.updateMassProperties()
                        }
                        h.prototype = new i, h.prototype.constructor = h, h.DYNAMIC = 1, h.STATIC = 2, h.KINEMATIC = 4, h.AWAKE = 0, h.SLEEPY = 1, h.SLEEPING = 2, h.idCounter = 0, h.prototype.wakeUp = function() {
                            var t = this.sleepState;
                            this.sleepState = 0, t === h.SLEEPING && this.dispatchEvent({
                                type: "wakeup"
                            })
                        }, h.prototype.sleep = function() {
                            this.sleepState = h.SLEEPING, this.velocity.set(0, 0, 0), this.angularVelocity.set(0, 0, 0)
                        }, h.sleepyEvent = {
                            type: "sleepy"
                        }, h.sleepEvent = {
                            type: "sleep"
                        }, h.prototype.sleepTick = function(t) {
                            if (this.allowSleep) {
                                var e = this.sleepState,
                                    o = this.velocity.norm2() + this.angularVelocity.norm2(),
                                    i = Math.pow(this.sleepSpeedLimit, 2);
                                e === h.AWAKE && o < i ? (this.sleepState = h.SLEEPY, this.timeLastSleepy = t, this.dispatchEvent(h.sleepyEvent)) : e === h.SLEEPY && o > i ? this.wakeUp() : e === h.SLEEPY && t - this.timeLastSleepy > this.sleepTimeLimit && (this.sleep(), this.dispatchEvent(h.sleepEvent))
                            }
                        }, h.prototype.updateSolveMassProperties = function() {
                            this.sleepState === h.SLEEPING || this.type === h.KINEMATIC ? (this.invMassSolve = 0, this.invInertiaSolve.setZero(), this.invInertiaWorldSolve.setZero()) : (this.invMassSolve = this.invMass, this.invInertiaSolve.copy(this.invInertia), this.invInertiaWorldSolve.copy(this.invInertiaWorld))
                        }, h.prototype.pointToLocalFrame = function(t, e) {
                            var e = e || new n;
                            return t.vsub(this.position, e), this.quaternion.conjugate().vmult(e, e), e
                        }, h.prototype.vectorToLocalFrame = function(t, e) {
                            var e = e || new n;
                            return this.quaternion.conjugate().vmult(t, e), e
                        }, h.prototype.pointToWorldFrame = function(t, e) {
                            var e = e || new n;
                            return this.quaternion.vmult(t, e), e.vadd(this.position, e), e
                        }, h.prototype.vectorToWorldFrame = function(t, e) {
                            var e = e || new n;
                            return this.quaternion.vmult(t, e), e
                        };
                        var p = new n,
                            c = new r;
                        h.prototype.addShape = function(t, e, o) {
                            var i = new n,
                                s = new r;
                            return e && i.copy(e), o && s.copy(o), this.shapes.push(t), this.shapeOffsets.push(i), this.shapeOrientations.push(s), this.updateMassProperties(), this.updateBoundingRadius(), this.aabbNeedsUpdate = !0, this
                        }, h.prototype.updateBoundingRadius = function() {
                            for (var t = this.shapes, e = this.shapeOffsets, o = t.length, i = 0, n = 0; n !== o; n++) {
                                var s = t[n];
                                s.updateBoundingSphereRadius();
                                var r = e[n].norm(),
                                    a = s.boundingSphereRadius;
                                r + a > i && (i = r + a)
                            }
                            this.boundingRadius = i
                        };
                        var u = new a;
                        h.prototype.computeAABB = function() {
                            for (var t = this.shapes, e = this.shapeOffsets, o = this.shapeOrientations, i = t.length, n = this.quaternion, s = this.aabb, r = 0; r !== i; r++) {
                                var a = t[r];
                                o[r].mult(n, c), c.vmult(e[r], p), p.vadd(this.position, p), a.calculateWorldAABB(p, c, u.lowerBound, u.upperBound), 0 === r ? s.copy(u) : s.extend(u)
                            }
                            this.aabbNeedsUpdate = !1
                        };
                        var d = new s,
                            v = new s;
                        new s, h.prototype.updateInertiaWorld = function(t) {
                            var e = this.invInertia;
                            (e.x !== e.y || e.y !== e.z || t) && (d.setRotationFromQuaternion(this.quaternion), d.transpose(v), d.scale(e, d), d.mmult(v, this.invInertiaWorld))
                        };
                        var y = new n,
                            f = new n;
                        h.prototype.applyForce = function(t, e) {
                            this.type === h.DYNAMIC && (e.vsub(this.position, y), y.cross(t, f), this.force.vadd(t, this.force), this.torque.vadd(f, this.torque))
                        };
                        var m = new n,
                            w = new n;
                        h.prototype.applyLocalForce = function(t, e) {
                            this.type === h.DYNAMIC && (this.vectorToWorldFrame(t, m), this.pointToWorldFrame(e, w), this.applyForce(m, w))
                        };
                        var x = new n,
                            g = new n,
                            b = new n;
                        h.prototype.applyImpulse = function(t, e) {
                            this.type === h.DYNAMIC && (e.vsub(this.position, x), g.copy(t), g.mult(this.invMass, g), this.velocity.vadd(g, this.velocity), x.cross(t, b), this.invInertiaWorld.vmult(b, b), this.angularVelocity.vadd(b, this.angularVelocity))
                        };
                        var B = new n,
                            E = new n;
                        h.prototype.applyLocalImpulse = function(t, e) {
                            this.type === h.DYNAMIC && (this.vectorToWorldFrame(t, B), this.pointToWorldFrame(e, E), this.applyImpulse(B, E))
                        };
                        var A = new n;
                        h.prototype.updateMassProperties = function() {
                            this.invMass = this.mass > 0 ? 1 / this.mass : 0;
                            var t = this.inertia,
                                e = this.fixedRotation;
                            this.computeAABB(), A.set((this.aabb.upperBound.x - this.aabb.lowerBound.x) / 2, (this.aabb.upperBound.y - this.aabb.lowerBound.y) / 2, (this.aabb.upperBound.z - this.aabb.lowerBound.z) / 2), l.calculateInertia(A, this.mass, t), this.invInertia.set(t.x > 0 && !e ? 1 / t.x : 0, t.y > 0 && !e ? 1 / t.y : 0, t.z > 0 && !e ? 1 / t.z : 0), this.updateInertiaWorld(!0)
                        }, h.prototype.getVelocityAtWorldPoint = function(t, e) {
                            var o = new n;
                            return t.vsub(this.position, o), this.angularVelocity.cross(o, e), this.velocity.vadd(e, e), e
                        }
                    }, {
                        "../collision/AABB": 3,
                        "../material/Material": 25,
                        "../math/Mat3": 27,
                        "../math/Quaternion": 28,
                        "../math/Vec3": 30,
                        "../shapes/Box": 37,
                        "../shapes/Shape": 43,
                        "../utils/EventTarget": 49
                    }],
                    32: [function(t, e, o) {
                        t("./Body");
                        var i = t("../math/Vec3"),
                            n = t("../math/Quaternion");
                        t("../collision/RaycastResult");
                        var s = t("../collision/Ray"),
                            r = t("../objects/WheelInfo");

                        function a(t) {
                            this.chassisBody = t.chassisBody, this.wheelInfos = [], this.sliding = !1, this.world = null, this.indexRightAxis = void 0 !== t.indexRightAxis ? t.indexRightAxis : 1, this.indexForwardAxis = void 0 !== t.indexForwardAxis ? t.indexForwardAxis : 0, this.indexUpAxis = void 0 !== t.indexUpAxis ? t.indexUpAxis : 2
                        }
                        e.exports = a, new i, new i, new i;
                        var l = new i,
                            h = new i,
                            p = new i;
                        new s, a.prototype.addWheel = function(t) {
                            var e = new r(t = t || {}),
                                o = this.wheelInfos.length;
                            return this.wheelInfos.push(e), o
                        }, a.prototype.setSteeringValue = function(t, e) {
                            this.wheelInfos[e].steering = t
                        }, new i, a.prototype.applyEngineForce = function(t, e) {
                            this.wheelInfos[e].engineForce = t
                        }, a.prototype.setBrake = function(t, e) {
                            this.wheelInfos[e].brake = t
                        }, a.prototype.addToWorld = function(t) {
                            this.constraints, t.add(this.chassisBody);
                            var e = this;
                            this.preStepCallback = function() {
                                e.updateVehicle(t.dt)
                            }, t.addEventListener("preStep", this.preStepCallback), this.world = t
                        }, a.prototype.getVehicleAxisWorld = function(t, e) {
                            e.set(0 === t ? 1 : 0, 1 === t ? 1 : 0, 2 === t ? 1 : 0), this.chassisBody.vectorToWorldFrame(e, e)
                        }, a.prototype.updateVehicle = function(t) {
                            for (var e = this.wheelInfos, o = e.length, n = this.chassisBody, s = 0; s < o; s++) this.updateWheelTransform(s);
                            this.currentVehicleSpeedKmHour = 3.6 * n.velocity.norm();
                            var r = new i;
                            this.getVehicleAxisWorld(this.indexForwardAxis, r), 0 > r.dot(n.velocity) && (this.currentVehicleSpeedKmHour *= -1);
                            for (var s = 0; s < o; s++) this.castRay(e[s]);
                            this.updateSuspension(t);
                            for (var a = new i, l = new i, s = 0; s < o; s++) {
                                var h = e[s],
                                    p = h.suspensionForce;
                                p > h.maxSuspensionForce && (p = h.maxSuspensionForce), h.raycastResult.hitNormalWorld.scale(p * t, a), h.raycastResult.hitPointWorld.vsub(n.position, l), n.applyImpulse(a, h.raycastResult.hitPointWorld)
                            }
                            this.updateFriction(t);
                            var c = new i,
                                u = new i,
                                d = new i;
                            for (s = 0; s < o; s++) {
                                var h = e[s];
                                n.getVelocityAtWorldPoint(h.chassisConnectionPointWorld, d);
                                var v = 1;
                                if (1 === this.indexUpAxis && (v = -1), h.isInContact) {
                                    this.getVehicleAxisWorld(this.indexForwardAxis, u);
                                    var y = u.dot(h.raycastResult.hitNormalWorld);
                                    h.raycastResult.hitNormalWorld.scale(y, c), u.vsub(c, u);
                                    var f = u.dot(d);
                                    h.deltaRotation = v * f * t / h.radius
                                }(h.sliding || !h.isInContact) && 0 !== h.engineForce && h.useCustomSlidingRotationalSpeed && (h.deltaRotation = (h.engineForce > 0 ? 1 : -1) * h.customSlidingRotationalSpeed * t), Math.abs(h.brake) > Math.abs(h.engineForce) && (h.deltaRotation = 0), h.rotation += h.deltaRotation, h.deltaRotation *= .99
                            }
                        }, a.prototype.updateSuspension = function(t) {
                            for (var e = this.chassisBody.mass, o = this.wheelInfos, i = o.length, n = 0; n < i; n++) {
                                var s = o[n];
                                if (s.isInContact) {
                                    var r, a = s.suspensionRestLength - s.suspensionLength;
                                    r = s.suspensionStiffness * a * s.clippedInvContactDotSuspension;
                                    var l = s.suspensionRelativeVelocity;
                                    r -= (l < 0 ? s.dampingCompression : s.dampingRelaxation) * l, s.suspensionForce = r * e, s.suspensionForce < 0 && (s.suspensionForce = 0)
                                } else s.suspensionForce = 0
                            }
                        }, a.prototype.removeFromWorld = function(t) {
                            this.constraints, t.remove(this.chassisBody), t.removeEventListener("preStep", this.preStepCallback), this.world = null
                        };
                        var c = new i,
                            u = new i;
                        a.prototype.castRay = function(t) {
                            this.updateWheelTransformWorld(t);
                            var e = this.chassisBody,
                                o = -1,
                                n = t.suspensionRestLength + t.radius;
                            t.directionWorld.scale(n, c);
                            var s = t.chassisConnectionPointWorld;
                            s.vadd(c, u);
                            var r = t.raycastResult;
                            r.reset();
                            var a = e.collisionResponse;
                            e.collisionResponse = !1, this.world.rayTest(s, u, r), e.collisionResponse = a;
                            var l = r.body;
                            if (t.raycastResult.groundObject = 0, l) {
                                o = r.distance, t.raycastResult.hitNormalWorld = r.hitNormalWorld, t.isInContact = !0;
                                var h = r.distance;
                                t.suspensionLength = h - t.radius;
                                var p = t.suspensionRestLength - t.maxSuspensionTravel,
                                    d = t.suspensionRestLength + t.maxSuspensionTravel;
                                t.suspensionLength < p && (t.suspensionLength = p), t.suspensionLength > d && (t.suspensionLength = d, t.raycastResult.reset());
                                var v = t.raycastResult.hitNormalWorld.dot(t.directionWorld),
                                    y = new i;
                                e.getVelocityAtWorldPoint(t.raycastResult.hitPointWorld, y);
                                var f = t.raycastResult.hitNormalWorld.dot(y);
                                if (v >= -.1) t.suspensionRelativeVelocity = 0, t.clippedInvContactDotSuspension = 10;
                                else {
                                    var m = -1 / v;
                                    t.suspensionRelativeVelocity = f * m, t.clippedInvContactDotSuspension = m
                                }
                            } else t.suspensionLength = t.suspensionRestLength + 0 * t.maxSuspensionTravel, t.suspensionRelativeVelocity = 0, t.directionWorld.scale(-1, t.raycastResult.hitNormalWorld), t.clippedInvContactDotSuspension = 1;
                            return o
                        }, a.prototype.updateWheelTransformWorld = function(t) {
                            t.isInContact = !1;
                            var e = this.chassisBody;
                            e.pointToWorldFrame(t.chassisConnectionPointLocal, t.chassisConnectionPointWorld), e.vectorToWorldFrame(t.directionLocal, t.directionWorld), e.vectorToWorldFrame(t.axleLocal, t.axleWorld)
                        }, a.prototype.updateWheelTransform = function(t) {
                            var e = this.wheelInfos[t];
                            this.updateWheelTransformWorld(e), e.directionLocal.scale(-1, l), h.copy(e.axleLocal), l.cross(h, p), p.normalize(), h.normalize();
                            var o = e.steering,
                                i = new n;
                            i.setFromAxisAngle(l, o);
                            var s = new n;
                            s.setFromAxisAngle(h, e.rotation);
                            var r = e.worldTransform.quaternion;
                            this.chassisBody.quaternion.mult(i, r), r.mult(s, r), r.normalize();
                            var a = e.worldTransform.position;
                            a.copy(e.directionWorld), a.scale(e.suspensionLength, a), a.vadd(e.chassisConnectionPointWorld, a)
                        };
                        var d = [new i(1, 0, 0), new i(0, 1, 0), new i(0, 0, 1)];
                        a.prototype.getWheelTransformWorld = function(t) {
                            return this.wheelInfos[t].worldTransform
                        };
                        var v = new i,
                            y = [],
                            f = [];
                        a.prototype.updateFriction = function(t) {
                            for (var e = this.wheelInfos, o = e.length, n = this.chassisBody, s = 0; s < o; s++) {
                                var r = e[s],
                                    a = r.raycastResult.body;
                                r.sideImpulse = 0, r.forwardImpulse = 0, f[s] || (f[s] = new i), y[s] || (y[s] = new i)
                            }
                            for (var s = 0; s < o; s++) {
                                var r = e[s],
                                    a = r.raycastResult.body;
                                if (a) {
                                    var l = y[s];
                                    this.getWheelTransformWorld(s).vectorToWorldFrame(d[this.indexRightAxis], l);
                                    var h = r.raycastResult.hitNormalWorld,
                                        p = l.dot(h);
                                    h.scale(p, v), l.vsub(v, l), l.normalize(), h.cross(l, f[s]), f[s].normalize(), r.sideImpulse = function(t, e, o, i, n, s) {
                                        if (n.norm2() > 1.1) return 0;
                                        t.getVelocityAtWorldPoint(e, S), o.getVelocityAtWorldPoint(i, C), S.vsub(C, z);
                                        var s = -.2 * n.dot(z) * (1 / (t.invMass + o.invMass));
                                        return s
                                    }(n, r.raycastResult.hitPointWorld, a, r.raycastResult.hitPointWorld, l), r.sideImpulse *= 1
                                }
                            }
                            this.sliding = !1;
                            for (var s = 0; s < o; s++) {
                                var r = e[s],
                                    a = r.raycastResult.body,
                                    c = 0;
                                if (r.slipInfo = 1, a) {
                                    var u = r.brake ? r.brake : 0;
                                    c = function(t, e, o, i, n) {
                                        var s = 0;
                                        t.getVelocityAtWorldPoint(o, m), e.getVelocityAtWorldPoint(o, w), m.vsub(w, x);
                                        var r = i.dot(x);
                                        return n < (s = -(1 / (A(t, o, i) + A(e, o, i)) * r)) && (s = n), s < -n && (s = -n), s
                                    }(n, a, r.raycastResult.hitPointWorld, f[s], u) + r.engineForce * t;
                                    var g = u / c;
                                    r.slipInfo *= g
                                }
                                if (r.forwardImpulse = 0, r.skidInfo = 1, a) {
                                    r.skidInfo = 1;
                                    var b = r.suspensionForce * t * r.frictionSlip,
                                        B = b * b;
                                    r.forwardImpulse = c;
                                    var E = .5 * r.forwardImpulse,
                                        q = 1 * r.sideImpulse,
                                        R = E * E + q * q;
                                    if (r.sliding = !1, R > B) {
                                        this.sliding = !0, r.sliding = !0;
                                        var g = b / Math.sqrt(R);
                                        r.skidInfo *= g
                                    }
                                }
                            }
                            if (this.sliding)
                                for (var s = 0; s < o; s++) {
                                    var r = e[s];
                                    0 !== r.sideImpulse && r.skidInfo < 1 && (r.forwardImpulse *= r.skidInfo, r.sideImpulse *= r.skidInfo)
                                }
                            for (var s = 0; s < o; s++) {
                                var r = e[s],
                                    M = new i;
                                if (M.copy(r.raycastResult.hitPointWorld), 0 !== r.forwardImpulse) {
                                    var P = new i;
                                    f[s].scale(r.forwardImpulse, P), n.applyImpulse(P, M)
                                }
                                if (0 !== r.sideImpulse) {
                                    var a = r.raycastResult.body,
                                        F = new i;
                                    F.copy(r.raycastResult.hitPointWorld);
                                    var V = new i;
                                    y[s].scale(r.sideImpulse, V), n.pointToLocalFrame(M, M), M["xyz" [this.indexUpAxis]] *= r.rollInfluence, n.pointToWorldFrame(M, M), n.applyImpulse(V, M), V.scale(-1, V), a.applyImpulse(V, F)
                                }
                            }
                        };
                        var m = new i,
                            w = new i,
                            x = new i,
                            g = new i,
                            b = new i,
                            B = new i,
                            E = new i;

                        function A(t, e, o) {
                            return e.vsub(t.position, g), g.cross(o, b), t.invInertiaWorld.vmult(b, E), E.cross(g, B), t.invMass + o.dot(B)
                        }
                        var S = new i,
                            C = new i,
                            z = new i
                    }, {
                        "../collision/Ray": 9,
                        "../collision/RaycastResult": 10,
                        "../math/Quaternion": 28,
                        "../math/Vec3": 30,
                        "../objects/WheelInfo": 36,
                        "./Body": 31
                    }],
                    33: [function(t, e, o) {
                        var i = t("./Body"),
                            n = t("../shapes/Sphere"),
                            s = t("../shapes/Box"),
                            r = t("../math/Vec3"),
                            a = t("../constraints/HingeConstraint");

                        function l(t) {
                            if (this.wheelBodies = [], this.coordinateSystem = void 0 === t.coordinateSystem ? new r(1, 2, 3) : t.coordinateSystem.clone(), this.chassisBody = t.chassisBody, !this.chassisBody) {
                                var e = new s(new r(5, 2, .5));
                                this.chassisBody = new i(1, e)
                            }
                            this.constraints = [], this.wheelAxes = [], this.wheelForces = []
                        }
                        e.exports = l, l.prototype.addWheel = function(t) {
                            var e = (t = t || {}).body;
                            e || (e = new i(1, new n(1.2))), this.wheelBodies.push(e), this.wheelForces.push(0), new r;
                            var o = void 0 !== t.position ? t.position.clone() : new r,
                                s = new r;
                            this.chassisBody.pointToWorldFrame(o, s), e.position.set(s.x, s.y, s.z);
                            var l = void 0 !== t.axis ? t.axis.clone() : new r(0, 1, 0);
                            this.wheelAxes.push(l);
                            var h = new a(this.chassisBody, e, {
                                pivotA: o,
                                axisA: l,
                                pivotB: r.ZERO,
                                axisB: l,
                                collideConnected: !1
                            });
                            return this.constraints.push(h), this.wheelBodies.length - 1
                        }, l.prototype.setSteeringValue = function(t, e) {
                            var o = this.wheelAxes[e],
                                i = Math.cos(t),
                                n = Math.sin(t),
                                s = o.x,
                                r = o.y;
                            this.constraints[e].axisA.set(i * s - n * r, n * s + i * r, 0)
                        }, l.prototype.setMotorSpeed = function(t, e) {
                            var o = this.constraints[e];
                            o.enableMotor(), o.motorTargetVelocity = t
                        }, l.prototype.disableMotor = function(t) {
                            this.constraints[t].disableMotor()
                        };
                        var h = new r;
                        l.prototype.setWheelForce = function(t, e) {
                            this.wheelForces[e] = t
                        }, l.prototype.applyWheelForce = function(t, e) {
                            var o = this.wheelAxes[e],
                                i = this.wheelBodies[e],
                                n = i.torque;
                            o.scale(t, h), i.vectorToWorldFrame(h, h), n.vadd(h, n)
                        }, l.prototype.addToWorld = function(t) {
                            for (var e = this.constraints, o = this.wheelBodies.concat([this.chassisBody]), i = 0; i < o.length; i++) t.add(o[i]);
                            for (var i = 0; i < e.length; i++) t.addConstraint(e[i]);
                            t.addEventListener("preStep", this._update.bind(this))
                        }, l.prototype._update = function() {
                            for (var t = this.wheelForces, e = 0; e < t.length; e++) this.applyWheelForce(t[e], e)
                        }, l.prototype.removeFromWorld = function(t) {
                            for (var e = this.constraints, o = this.wheelBodies.concat([this.chassisBody]), i = 0; i < o.length; i++) t.remove(o[i]);
                            for (var i = 0; i < e.length; i++) t.removeConstraint(e[i])
                        };
                        var p = new r;
                        l.prototype.getWheelSpeed = function(t) {
                            var e = this.wheelAxes[t],
                                o = this.wheelBodies[t].angularVelocity;
                            return this.chassisBody.vectorToWorldFrame(e, p), o.dot(p)
                        }
                    }, {
                        "../constraints/HingeConstraint": 15,
                        "../math/Vec3": 30,
                        "../shapes/Box": 37,
                        "../shapes/Sphere": 44,
                        "./Body": 31
                    }],
                    34: [function(t, e, o) {
                        e.exports = n, t("../shapes/Shape");
                        var i = t("../math/Vec3");

                        function n() {
                            this.particles = [], this.density = 1, this.smoothingRadius = 1, this.speedOfSound = 1, this.viscosity = .01, this.eps = 1e-6, this.pressures = [], this.densities = [], this.neighbors = []
                        }
                        t("../math/Quaternion"), t("../shapes/Particle"), t("../objects/Body"), t("../material/Material"), n.prototype.add = function(t) {
                            this.particles.push(t), this.neighbors.length < this.particles.length && this.neighbors.push([])
                        }, n.prototype.remove = function(t) {
                            var e = this.particles.indexOf(t); - 1 !== e && (this.particles.splice(e, 1), this.neighbors.length > this.particles.length && this.neighbors.pop())
                        };
                        var s = new i;
                        n.prototype.getNeighbors = function(t, e) {
                            for (var o = this.particles.length, i = t.id, n = this.smoothingRadius * this.smoothingRadius, r = 0; r !== o; r++) {
                                var a = this.particles[r];
                                a.position.vsub(t.position, s), i !== a.id && s.norm2() < n && e.push(a)
                            }
                        };
                        var r = new i,
                            a = new i,
                            l = new i,
                            h = new i,
                            p = new i,
                            c = new i;
                        n.prototype.update = function() {
                            for (var t = this.particles.length, e = this.speedOfSound, o = this.eps, i = 0; i !== t; i++) {
                                var n = this.particles[i],
                                    s = this.neighbors[i];
                                s.length = 0, this.getNeighbors(n, s), s.push(this.particles[i]);
                                for (var u = s.length, d = 0, v = 0; v !== u; v++) {
                                    n.position.vsub(s[v].position, r);
                                    var y = r.norm(),
                                        f = this.w(y);
                                    d += s[v].mass * f
                                }
                                this.densities[i] = d, this.pressures[i] = e * e * (this.densities[i] - this.density)
                            }
                            for (var i = 0; i !== t; i++) {
                                var m, w, x = this.particles[i];
                                a.set(0, 0, 0), l.set(0, 0, 0);
                                for (var s = this.neighbors[i], u = s.length, v = 0; v !== u; v++) {
                                    var g = s[v];
                                    x.position.vsub(g.position, p);
                                    var b = p.norm();
                                    m = -g.mass * (this.pressures[i] / (this.densities[i] * this.densities[i] + o) + this.pressures[v] / (this.densities[v] * this.densities[v] + o)), this.gradw(p, h), h.mult(m, h), a.vadd(h, a), g.velocity.vsub(x.velocity, c), c.mult(1 / (1e-4 + this.densities[i] * this.densities[v]) * this.viscosity * g.mass, c), w = this.nablaw(b), c.mult(w, c), l.vadd(c, l)
                                }
                                l.mult(x.mass, l), a.mult(x.mass, a), x.force.vadd(l, x.force), x.force.vadd(a, x.force)
                            }
                        }, n.prototype.w = function(t) {
                            var e = this.smoothingRadius;
                            return 315 / (64 * Math.PI * Math.pow(e, 9)) * Math.pow(e * e - t * t, 3)
                        }, n.prototype.gradw = function(t, e) {
                            var o = t.norm(),
                                i = this.smoothingRadius;
                            t.mult(945 / (32 * Math.PI * Math.pow(i, 9)) * Math.pow(i * i - o * o, 2), e)
                        }, n.prototype.nablaw = function(t) {
                            var e = this.smoothingRadius;
                            return 945 / (32 * Math.PI * Math.pow(e, 9)) * (e * e - t * t) * (7 * t * t - 3 * e * e)
                        }
                    }, {
                        "../material/Material": 25,
                        "../math/Quaternion": 28,
                        "../math/Vec3": 30,
                        "../objects/Body": 31,
                        "../shapes/Particle": 41,
                        "../shapes/Shape": 43
                    }],
                    35: [function(t, e, o) {
                        var i = t("../math/Vec3");

                        function n(t, e, o) {
                            o = o || {}, this.restLength = "number" == typeof o.restLength ? o.restLength : 1, this.stiffness = o.stiffness || 100, this.damping = o.damping || 1, this.bodyA = t, this.bodyB = e, this.localAnchorA = new i, this.localAnchorB = new i, o.localAnchorA && this.localAnchorA.copy(o.localAnchorA), o.localAnchorB && this.localAnchorB.copy(o.localAnchorB), o.worldAnchorA && this.setWorldAnchorA(o.worldAnchorA), o.worldAnchorB && this.setWorldAnchorB(o.worldAnchorB)
                        }
                        e.exports = n, n.prototype.setWorldAnchorA = function(t) {
                            this.bodyA.pointToLocalFrame(t, this.localAnchorA)
                        }, n.prototype.setWorldAnchorB = function(t) {
                            this.bodyB.pointToLocalFrame(t, this.localAnchorB)
                        }, n.prototype.getWorldAnchorA = function(t) {
                            this.bodyA.pointToWorldFrame(this.localAnchorA, t)
                        }, n.prototype.getWorldAnchorB = function(t) {
                            this.bodyB.pointToWorldFrame(this.localAnchorB, t)
                        };
                        var s = new i,
                            r = new i,
                            a = new i,
                            l = new i,
                            h = new i,
                            p = new i,
                            c = new i,
                            u = new i,
                            d = new i,
                            v = new i,
                            y = new i;
                        n.prototype.applyForce = function() {
                            var t = this.stiffness,
                                e = this.damping,
                                o = this.restLength,
                                i = this.bodyA,
                                n = this.bodyB;
                            this.getWorldAnchorA(h), this.getWorldAnchorB(p), h.vsub(i.position, c), p.vsub(n.position, u), p.vsub(h, s);
                            var f = s.norm();
                            r.copy(s), r.normalize(), n.velocity.vsub(i.velocity, a), n.angularVelocity.cross(u, y), a.vadd(y, a), i.angularVelocity.cross(c, y), a.vsub(y, a), r.mult(-t * (f - o) - e * a.dot(r), l), i.force.vsub(l, i.force), n.force.vadd(l, n.force), c.cross(l, d), u.cross(l, v), i.torque.vsub(d, i.torque), n.torque.vadd(v, n.torque)
                        }
                    }, {
                        "../math/Vec3": 30
                    }],
                    36: [function(t, e, o) {
                        var i = t("../math/Vec3"),
                            n = t("../math/Transform"),
                            s = t("../collision/RaycastResult"),
                            r = t("../utils/Utils");

                        function a(t) {
                            t = r.defaults(t, {
                                chassisConnectionPointLocal: new i,
                                chassisConnectionPointWorld: new i,
                                directionLocal: new i,
                                directionWorld: new i,
                                axleLocal: new i,
                                axleWorld: new i,
                                suspensionRestLength: 1,
                                suspensionMaxLength: 2,
                                radius: 1,
                                suspensionStiffness: 100,
                                dampingCompression: 10,
                                dampingRelaxation: 10,
                                frictionSlip: 1e4,
                                steering: 0,
                                rotation: 0,
                                deltaRotation: 0,
                                rollInfluence: .01,
                                maxSuspensionForce: Number.MAX_VALUE,
                                isFrontWheel: !0,
                                clippedInvContactDotSuspension: 1,
                                suspensionRelativeVelocity: 0,
                                suspensionForce: 0,
                                skidInfo: 0,
                                suspensionLength: 0,
                                maxSuspensionTravel: 1,
                                useCustomSlidingRotationalSpeed: !1,
                                customSlidingRotationalSpeed: -.1
                            }), this.maxSuspensionTravel = t.maxSuspensionTravel, this.customSlidingRotationalSpeed = t.customSlidingRotationalSpeed, this.useCustomSlidingRotationalSpeed = t.useCustomSlidingRotationalSpeed, this.sliding = !1, this.chassisConnectionPointLocal = t.chassisConnectionPointLocal.clone(), this.chassisConnectionPointWorld = t.chassisConnectionPointWorld.clone(), this.directionLocal = t.directionLocal.clone(), this.directionWorld = t.directionWorld.clone(), this.axleLocal = t.axleLocal.clone(), this.axleWorld = t.axleWorld.clone(), this.suspensionRestLength = t.suspensionRestLength, this.suspensionMaxLength = t.suspensionMaxLength, this.radius = t.radius, this.suspensionStiffness = t.suspensionStiffness, this.dampingCompression = t.dampingCompression, this.dampingRelaxation = t.dampingRelaxation, this.frictionSlip = t.frictionSlip, this.steering = 0, this.rotation = 0, this.deltaRotation = 0, this.rollInfluence = t.rollInfluence, this.maxSuspensionForce = t.maxSuspensionForce, this.engineForce = 0, this.brake = 0, this.isFrontWheel = t.isFrontWheel, this.clippedInvContactDotSuspension = 1, this.suspensionRelativeVelocity = 0, this.suspensionForce = 0, this.skidInfo = 0, this.suspensionLength = 0, this.sideImpulse = 0, this.forwardImpulse = 0, this.raycastResult = new s, this.worldTransform = new n, this.isInContact = !1
                        }
                        e.exports = a;
                        var l = new i,
                            h = new i,
                            l = new i;
                        a.prototype.updateWheel = function(t) {
                            var e = this.raycastResult;
                            if (this.isInContact) {
                                var o = e.hitNormalWorld.dot(e.directionWorld);
                                e.hitPointWorld.vsub(t.position, h), t.getVelocityAtWorldPoint(h, l);
                                var i = e.hitNormalWorld.dot(l);
                                if (o >= -.1) this.suspensionRelativeVelocity = 0, this.clippedInvContactDotSuspension = 10;
                                else {
                                    var n = -1 / o;
                                    this.suspensionRelativeVelocity = i * n, this.clippedInvContactDotSuspension = n
                                }
                            } else e.suspensionLength = this.suspensionRestLength, this.suspensionRelativeVelocity = 0, e.directionWorld.scale(-1, e.hitNormalWorld), this.clippedInvContactDotSuspension = 1
                        }
                    }, {
                        "../collision/RaycastResult": 10,
                        "../math/Transform": 29,
                        "../math/Vec3": 30,
                        "../utils/Utils": 53
                    }],
                    37: [function(t, e, o) {
                        e.exports = r;
                        var i = t("./Shape"),
                            n = t("../math/Vec3"),
                            s = t("./ConvexPolyhedron");

                        function r(t) {
                            i.call(this), this.type = i.types.BOX, this.halfExtents = t, this.convexPolyhedronRepresentation = null, this.updateConvexPolyhedronRepresentation(), this.updateBoundingSphereRadius()
                        }
                        r.prototype = new i, r.prototype.constructor = r, r.prototype.updateConvexPolyhedronRepresentation = function() {
                            var t = this.halfExtents.x,
                                e = this.halfExtents.y,
                                o = this.halfExtents.z,
                                i = [new n(-t, -e, -o), new n(t, -e, -o), new n(t, e, -o), new n(-t, e, -o), new n(-t, -e, o), new n(t, -e, o), new n(t, e, o), new n(-t, e, o)];
                            new n(0, 0, 1), new n(0, 1, 0), new n(1, 0, 0);
                            var r = new s(i, [
                                [3, 2, 1, 0],
                                [4, 5, 6, 7],
                                [5, 4, 0, 1],
                                [2, 3, 7, 6],
                                [0, 4, 7, 3],
                                [1, 2, 6, 5]
                            ]);
                            this.convexPolyhedronRepresentation = r, r.material = this.material
                        }, r.prototype.calculateLocalInertia = function(t, e) {
                            return e = e || new n, r.calculateInertia(this.halfExtents, t, e), e
                        }, r.calculateInertia = function(t, e, o) {
                            o.x = 1 / 12 * e * (2 * t.y * 2 * t.y + 2 * t.z * 2 * t.z), o.y = 1 / 12 * e * (2 * t.x * 2 * t.x + 2 * t.z * 2 * t.z), o.z = 1 / 12 * e * (2 * t.y * 2 * t.y + 2 * t.x * 2 * t.x)
                        }, r.prototype.getSideNormals = function(t, e) {
                            var o = this.halfExtents;
                            if (t[0].set(o.x, 0, 0), t[1].set(0, o.y, 0), t[2].set(0, 0, o.z), t[3].set(-o.x, 0, 0), t[4].set(0, -o.y, 0), t[5].set(0, 0, -o.z), void 0 !== e)
                                for (var i = 0; i !== t.length; i++) e.vmult(t[i], t[i]);
                            return t
                        }, r.prototype.volume = function() {
                            return 8 * this.halfExtents.x * this.halfExtents.y * this.halfExtents.z
                        }, r.prototype.updateBoundingSphereRadius = function() {
                            this.boundingSphereRadius = this.halfExtents.norm()
                        };
                        var a = new n;
                        new n, r.prototype.forEachWorldCorner = function(t, e, o) {
                            for (var i = this.halfExtents, n = [
                                    [i.x, i.y, i.z],
                                    [-i.x, i.y, i.z],
                                    [-i.x, -i.y, i.z],
                                    [-i.x, -i.y, -i.z],
                                    [i.x, -i.y, -i.z],
                                    [i.x, i.y, -i.z],
                                    [-i.x, i.y, -i.z],
                                    [i.x, -i.y, i.z]
                                ], s = 0; s < n.length; s++) a.set(n[s][0], n[s][1], n[s][2]), e.vmult(a, a), t.vadd(a, a), o(a.x, a.y, a.z)
                        };
                        var l = [new n, new n, new n, new n, new n, new n, new n, new n];
                        r.prototype.calculateWorldAABB = function(t, e, o, i) {
                            var n = this.halfExtents;
                            l[0].set(n.x, n.y, n.z), l[1].set(-n.x, n.y, n.z), l[2].set(-n.x, -n.y, n.z), l[3].set(-n.x, -n.y, -n.z), l[4].set(n.x, -n.y, -n.z), l[5].set(n.x, n.y, -n.z), l[6].set(-n.x, n.y, -n.z), l[7].set(n.x, -n.y, n.z);
                            var s = l[0];
                            e.vmult(s, s), t.vadd(s, s), i.copy(s), o.copy(s);
                            for (var r = 1; r < 8; r++) {
                                var s = l[r];
                                e.vmult(s, s), t.vadd(s, s);
                                var a = s.x,
                                    h = s.y,
                                    p = s.z;
                                a > i.x && (i.x = a), h > i.y && (i.y = h), p > i.z && (i.z = p), a < o.x && (o.x = a), h < o.y && (o.y = h), p < o.z && (o.z = p)
                            }
                        }
                    }, {
                        "../math/Vec3": 30,
                        "./ConvexPolyhedron": 38,
                        "./Shape": 43
                    }],
                    38: [function(t, e, o) {
                        e.exports = r;
                        var i = t("./Shape"),
                            n = t("../math/Vec3");
                        t("../math/Quaternion");
                        var s = t("../math/Transform");

                        function r(t, e, o) {
                            i.call(this), this.type = i.types.CONVEXPOLYHEDRON, this.vertices = t || [], this.worldVertices = [], this.worldVerticesNeedsUpdate = !0, this.faces = e || [], this.faceNormals = [], this.computeNormals(), this.worldFaceNormalsNeedsUpdate = !0, this.worldFaceNormals = [], this.uniqueEdges = [], this.uniqueAxes = o ? o.slice() : null, this.computeEdges(), this.updateBoundingSphereRadius()
                        }
                        r.prototype = new i, r.prototype.constructor = r;
                        var a = new n;
                        r.prototype.computeEdges = function() {
                            var t = this.faces,
                                e = this.vertices;
                            e.length;
                            var o = this.uniqueEdges;
                            o.length = 0;
                            for (var i = 0; i !== t.length; i++)
                                for (var n = t[i], s = n.length, r = 0; r !== s; r++) {
                                    var l = (r + 1) % s;
                                    e[n[r]].vsub(e[n[l]], a), a.normalize();
                                    for (var h = !1, p = 0; p !== o.length; p++)
                                        if (o[p].almostEquals(a) || o[p].almostEquals(a)) {
                                            h = !0;
                                            break
                                        }
                                    h || o.push(a.clone())
                                }
                        }, r.prototype.computeNormals = function() {
                            this.faceNormals.length = this.faces.length;
                            for (var t = 0; t < this.faces.length; t++) {
                                for (var e = 0; e < this.faces[t].length; e++)
                                    if (!this.vertices[this.faces[t][e]]) throw Error("Vertex " + this.faces[t][e] + " not found!");
                                var o = this.faceNormals[t] || new n;
                                this.getFaceNormal(t, o), o.negate(o), this.faceNormals[t] = o;
                                var i = this.vertices[this.faces[t][0]];
                                if (0 > o.dot(i)) {
                                    console.error(".faceNormals[" + t + "] = Vec3(" + o.toString() + ") looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.");
                                    for (var e = 0; e < this.faces[t].length; e++) console.warn(".vertices[" + this.faces[t][e] + "] = Vec3(" + this.vertices[this.faces[t][e]].toString() + ")")
                                }
                            }
                        };
                        var l = new n,
                            h = new n;
                        r.computeNormal = function(t, e, o, i) {
                            e.vsub(t, h), o.vsub(e, l), l.cross(h, i), i.isZero() || i.normalize()
                        }, r.prototype.getFaceNormal = function(t, e) {
                            var o = this.faces[t],
                                i = this.vertices[o[0]],
                                n = this.vertices[o[1]],
                                s = this.vertices[o[2]];
                            return r.computeNormal(i, n, s, e)
                        };
                        var p = new n;
                        r.prototype.clipAgainstHull = function(t, e, o, i, s, r, a, l, h) {
                            for (var c = -1, u = -Number.MAX_VALUE, d = 0; d < o.faces.length; d++) {
                                p.copy(o.faceNormals[d]), s.vmult(p, p);
                                var v = p.dot(r);
                                v > u && (u = v, c = d)
                            }
                            for (var y = [], f = o.faces[c], m = f.length, w = 0; w < m; w++) {
                                var x = o.vertices[f[w]],
                                    g = new n;
                                g.copy(x), s.vmult(g, g), i.vadd(g, g), y.push(g)
                            }
                            c >= 0 && this.clipFaceAgainstHull(r, t, e, y, a, l, h)
                        };
                        var c = new n,
                            u = new n,
                            d = new n,
                            v = new n,
                            y = new n,
                            f = new n;
                        r.prototype.findSeparatingAxis = function(t, e, o, i, n, s, r, a) {
                            var l = Number.MAX_VALUE,
                                h = 0;
                            if (this.uniqueAxes)
                                for (var p = 0; p !== this.uniqueAxes.length; p++) {
                                    o.vmult(this.uniqueAxes[p], c);
                                    var m = this.testSepAxis(c, t, e, o, i, n);
                                    if (!1 === m) return !1;
                                    m < l && (l = m, s.copy(c))
                                } else
                                    for (var w = r ? r.length : this.faces.length, p = 0; p < w; p++) {
                                        var x = r ? r[p] : p;
                                        c.copy(this.faceNormals[x]), o.vmult(c, c);
                                        var m = this.testSepAxis(c, t, e, o, i, n);
                                        if (!1 === m) return !1;
                                        m < l && (l = m, s.copy(c))
                                    }
                            if (t.uniqueAxes)
                                for (var p = 0; p !== t.uniqueAxes.length; p++) {
                                    n.vmult(t.uniqueAxes[p], u), h++;
                                    var m = this.testSepAxis(u, t, e, o, i, n);
                                    if (!1 === m) return !1;
                                    m < l && (l = m, s.copy(u))
                                } else
                                    for (var g = a ? a.length : t.faces.length, p = 0; p < g; p++) {
                                        var x = a ? a[p] : p;
                                        u.copy(t.faceNormals[x]), n.vmult(u, u), h++;
                                        var m = this.testSepAxis(u, t, e, o, i, n);
                                        if (!1 === m) return !1;
                                        m < l && (l = m, s.copy(u))
                                    }
                            for (var b = 0; b !== this.uniqueEdges.length; b++) {
                                o.vmult(this.uniqueEdges[b], v);
                                for (var B = 0; B !== t.uniqueEdges.length; B++)
                                    if (n.vmult(t.uniqueEdges[B], y), v.cross(y, f), !f.almostZero()) {
                                        f.normalize();
                                        var E = this.testSepAxis(f, t, e, o, i, n);
                                        if (!1 === E) return !1;
                                        E < l && (l = E, s.copy(f))
                                    }
                            }
                            return i.vsub(e, d), d.dot(s) > 0 && s.negate(s), !0
                        };
                        var m = [],
                            w = [];
                        r.prototype.testSepAxis = function(t, e, o, i, n, s) {
                            r.project(this, t, o, i, m), r.project(e, t, n, s, w);
                            var a = m[0],
                                l = m[1],
                                h = w[0],
                                p = w[1];
                            if (a < p || h < l) return !1;
                            var c = a - p,
                                u = h - l;
                            return c < u ? c : u
                        };
                        var x = new n,
                            g = new n;
                        r.prototype.calculateLocalInertia = function(t, e) {
                            this.computeLocalAABB(x, g);
                            var o = g.x - x.x,
                                i = g.y - x.y,
                                n = g.z - x.z;
                            e.x = 1 / 12 * t * (2 * i * 2 * i + 2 * n * 2 * n), e.y = 1 / 12 * t * (2 * o * 2 * o + 2 * n * 2 * n), e.z = 1 / 12 * t * (2 * i * 2 * i + 2 * o * 2 * o)
                        }, r.prototype.getPlaneConstantOfFace = function(t) {
                            var e = this.faces[t],
                                o = this.faceNormals[t],
                                i = this.vertices[e[0]];
                            return -o.dot(i)
                        };
                        var b = new n,
                            B = new n,
                            E = new n,
                            A = new n,
                            S = new n,
                            C = new n,
                            z = new n,
                            q = new n;
                        r.prototype.clipFaceAgainstHull = function(t, e, o, i, n, s, r) {
                            for (var a = [], l = -1, h = Number.MAX_VALUE, p = 0; p < this.faces.length; p++) {
                                b.copy(this.faceNormals[p]), o.vmult(b, b);
                                var c = b.dot(t);
                                c < h && (h = c, l = p)
                            }
                            if (!(l < 0)) {
                                var u = this.faces[l];
                                u.connectedFaces = [];
                                for (var d = 0; d < this.faces.length; d++)
                                    for (var v = 0; v < this.faces[d].length; v++) - 1 !== u.indexOf(this.faces[d][v]) && d !== l && -1 === u.connectedFaces.indexOf(d) && u.connectedFaces.push(d);
                                i.length;
                                for (var y = u.length, f = 0; f < y; f++) {
                                    var m, w = this.vertices[u[f]],
                                        x = this.vertices[u[(f + 1) % y]];
                                    w.vsub(x, B), E.copy(B), o.vmult(E, E), e.vadd(E, E), A.copy(this.faceNormals[l]), o.vmult(A, A), e.vadd(A, A), E.cross(A, S), S.negate(S), C.copy(w), o.vmult(C, C), e.vadd(C, C), C.dot(S);
                                    var g = u.connectedFaces[f];
                                    z.copy(this.faceNormals[g]);
                                    var R = this.getPlaneConstantOfFace(g);
                                    q.copy(z), o.vmult(q, q);
                                    var m = R - q.dot(e);
                                    for (this.clipFaceAgainstPlane(i, a, q, m); i.length;) i.shift();
                                    for (; a.length;) i.push(a.shift())
                                }
                                z.copy(this.faceNormals[l]);
                                var R = this.getPlaneConstantOfFace(l);
                                q.copy(z), o.vmult(q, q);
                                for (var m = R - q.dot(e), d = 0; d < i.length; d++) {
                                    var M = q.dot(i[d]) + m;
                                    if (M <= n && (console.log("clamped: depth=" + M + " to minDist=" + n), M = n), M <= s) {
                                        var P = i[d];
                                        if (M <= 0) {
                                            var F = {
                                                point: P,
                                                normal: q,
                                                depth: M
                                            };
                                            r.push(F)
                                        }
                                    }
                                }
                            }
                        }, r.prototype.clipFaceAgainstPlane = function(t, e, o, i) {
                            var s, r, a = t.length;
                            if (a < 2) return e;
                            var l = t[t.length - 1],
                                h = t[0];
                            s = o.dot(l) + i;
                            for (var p = 0; p < a; p++) {
                                if (h = t[p], r = o.dot(h) + i, s < 0) {
                                    if (r < 0) {
                                        var c = new n;
                                        c.copy(h), e.push(c)
                                    } else {
                                        var c = new n;
                                        l.lerp(h, s / (s - r), c), e.push(c)
                                    }
                                } else if (r < 0) {
                                    var c = new n;
                                    l.lerp(h, s / (s - r), c), e.push(c), e.push(h)
                                }
                                l = h, s = r
                            }
                            return e
                        }, r.prototype.computeWorldVertices = function(t, e) {
                            for (var o = this.vertices.length; this.worldVertices.length < o;) this.worldVertices.push(new n);
                            for (var i = this.vertices, s = this.worldVertices, r = 0; r !== o; r++) e.vmult(i[r], s[r]), t.vadd(s[r], s[r]);
                            this.worldVerticesNeedsUpdate = !1
                        }, new n, r.prototype.computeLocalAABB = function(t, e) {
                            var o = this.vertices.length,
                                i = this.vertices;
                            t.set(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), e.set(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
                            for (var n = 0; n < o; n++) {
                                var s = i[n];
                                s.x < t.x ? t.x = s.x : s.x > e.x && (e.x = s.x), s.y < t.y ? t.y = s.y : s.y > e.y && (e.y = s.y), s.z < t.z ? t.z = s.z : s.z > e.z && (e.z = s.z)
                            }
                        }, r.prototype.computeWorldFaceNormals = function(t) {
                            for (var e = this.faceNormals.length; this.worldFaceNormals.length < e;) this.worldFaceNormals.push(new n);
                            for (var o = this.faceNormals, i = this.worldFaceNormals, s = 0; s !== e; s++) t.vmult(o[s], i[s]);
                            this.worldFaceNormalsNeedsUpdate = !1
                        }, r.prototype.updateBoundingSphereRadius = function() {
                            for (var t = 0, e = this.vertices, o = 0, i = e.length; o !== i; o++) {
                                var n = e[o].norm2();
                                n > t && (t = n)
                            }
                            this.boundingSphereRadius = Math.sqrt(t)
                        };
                        var R = new n;
                        r.prototype.calculateWorldAABB = function(t, e, o, i) {
                            for (var n, s, r, a, l, h, p = this.vertices.length, c = this.vertices, u = 0; u < p; u++) R.copy(c[u]), e.vmult(R, R), t.vadd(R, R), R.x < n || void 0 === n ? n = R.x : (R.x > a || void 0 === a) && (a = R.x), R.y < s || void 0 === s ? s = R.y : (R.y > l || void 0 === l) && (l = R.y), R.z < r || void 0 === r ? r = R.z : (R.z > h || void 0 === h) && (h = R.z);
                            o.set(n, s, r), i.set(a, l, h)
                        }, r.prototype.volume = function() {
                            return 4 * Math.PI * this.boundingSphereRadius / 3
                        }, r.prototype.getAveragePointLocal = function(t) {
                            t = t || new n;
                            for (var e = this.vertices.length, o = this.vertices, i = 0; i < e; i++) t.vadd(o[i], t);
                            return t.mult(1 / e, t), t
                        }, r.prototype.transformAllPoints = function(t, e) {
                            var o = this.vertices.length,
                                i = this.vertices;
                            if (e) {
                                for (var n = 0; n < o; n++) {
                                    var s = i[n];
                                    e.vmult(s, s)
                                }
                                for (var n = 0; n < this.faceNormals.length; n++) {
                                    var s = this.faceNormals[n];
                                    e.vmult(s, s)
                                }
                            }
                            if (t)
                                for (var n = 0; n < o; n++) {
                                    var s = i[n];
                                    s.vadd(t, s)
                                }
                        };
                        var M = new n,
                            P = new n,
                            F = new n;
                        r.prototype.pointIsInside = function(t) {
                            var e = this.vertices.length,
                                o = this.vertices,
                                i = this.faces,
                                n = this.faceNormals,
                                s = this.faces.length;
                            this.getAveragePointLocal(M);
                            for (var r = 0; r < s; r++) {
                                this.faces[r].length;
                                var e = n[r],
                                    a = o[i[r][0]];
                                t.vsub(a, P);
                                var l = e.dot(P);
                                M.vsub(a, F);
                                var h = e.dot(F);
                                if (l < 0 && h > 0 || l > 0 && h < 0) return !1
                            }
                            return -1
                        }, new n;
                        var V = new n,
                            T = new n;
                        r.project = function(t, e, o, i, n) {
                            var r = t.vertices.length,
                                a = 0,
                                l = 0,
                                h = t.vertices;
                            T.setZero(), s.vectorToLocalFrame(o, i, e, V), s.pointToLocalFrame(o, i, T, T);
                            var p = T.dot(V);
                            l = a = h[0].dot(V);
                            for (var c = 1; c < r; c++) {
                                var u = h[c].dot(V);
                                u > a && (a = u), u < l && (l = u)
                            }
                            if ((l -= p) > (a -= p)) {
                                var d = l;
                                l = a, a = d
                            }
                            n[0] = a, n[1] = l
                        }
                    }, {
                        "../math/Quaternion": 28,
                        "../math/Transform": 29,
                        "../math/Vec3": 30,
                        "./Shape": 43
                    }],
                    39: [function(t, e, o) {
                        e.exports = r;
                        var i = t("./Shape"),
                            n = t("../math/Vec3");
                        t("../math/Quaternion");
                        var s = t("./ConvexPolyhedron");

                        function r(t, e, o, r) {
                            var a = [],
                                l = [],
                                h = [],
                                p = [],
                                c = [],
                                u = Math.cos,
                                d = Math.sin;
                            a.push(new n(e * u(0), e * d(0), -(.5 * o))), p.push(0), a.push(new n(t * u(0), t * d(0), .5 * o)), c.push(1);
                            for (var v = 0; v < r; v++) {
                                var y = 2 * Math.PI / r * (v + 1),
                                    f = 2 * Math.PI / r * (v + .5);
                                v < r - 1 ? (a.push(new n(e * u(y), e * d(y), -(.5 * o))), p.push(2 * v + 2), a.push(new n(t * u(y), t * d(y), .5 * o)), c.push(2 * v + 3), h.push([2 * v + 2, 2 * v + 3, 2 * v + 1, 2 * v])) : h.push([0, 1, 2 * v + 1, 2 * v]), (r % 2 == 1 || v < r / 2) && l.push(new n(u(f), d(f), 0))
                            }
                            h.push(c), l.push(new n(0, 0, 1));
                            for (var m = [], v = 0; v < p.length; v++) m.push(p[p.length - v - 1]);
                            h.push(m), this.type = i.types.CONVEXPOLYHEDRON, s.call(this, a, h, l)
                        }
                        r.prototype = new s
                    }, {
                        "../math/Quaternion": 28,
                        "../math/Vec3": 30,
                        "./ConvexPolyhedron": 38,
                        "./Shape": 43
                    }],
                    40: [function(t, e, o) {
                        var i = t("./Shape"),
                            n = t("./ConvexPolyhedron"),
                            s = t("../math/Vec3"),
                            r = t("../utils/Utils");

                        function a(t, e) {
                            e = r.defaults(e, {
                                maxValue: null,
                                minValue: null,
                                elementSize: 1
                            }), this.data = t, this.maxValue = e.maxValue, this.minValue = e.minValue, this.elementSize = e.elementSize, null === e.minValue && this.updateMinValue(), null === e.maxValue && this.updateMaxValue(), this.cacheEnabled = !0, i.call(this), this.pillarConvex = new n, this.pillarOffset = new s, this.type = i.types.HEIGHTFIELD, this.updateBoundingSphereRadius(), this._cachedPillars = {}
                        }
                        e.exports = a, a.prototype = new i, a.prototype.update = function() {
                            this._cachedPillars = {}
                        }, a.prototype.updateMinValue = function() {
                            for (var t = this.data, e = t[0][0], o = 0; o !== t.length; o++)
                                for (var i = 0; i !== t[o].length; i++) {
                                    var n = t[o][i];
                                    n < e && (e = n)
                                }
                            this.minValue = e
                        }, a.prototype.updateMaxValue = function() {
                            for (var t = this.data, e = t[0][0], o = 0; o !== t.length; o++)
                                for (var i = 0; i !== t[o].length; i++) {
                                    var n = t[o][i];
                                    n > e && (e = n)
                                }
                            this.maxValue = e
                        }, a.prototype.setHeightValueAtIndex = function(t, e, o) {
                            this.data[t][e] = o, this.clearCachedConvexTrianglePillar(t, e, !1), t > 0 && (this.clearCachedConvexTrianglePillar(t - 1, e, !0), this.clearCachedConvexTrianglePillar(t - 1, e, !1)), e > 0 && (this.clearCachedConvexTrianglePillar(t, e - 1, !0), this.clearCachedConvexTrianglePillar(t, e - 1, !1)), e > 0 && t > 0 && this.clearCachedConvexTrianglePillar(t - 1, e - 1, !0)
                        }, a.prototype.getRectMinMax = function(t, e, o, i, n) {
                            n = n || [];
                            for (var s = this.data, r = this.minValue, a = t; a <= o; a++)
                                for (var l = e; l <= i; l++) {
                                    var h = s[a][l];
                                    h > r && (r = h)
                                }
                            n[0] = this.minValue, n[1] = r
                        }, a.prototype.getIndexOfPosition = function(t, e, o, i) {
                            var n = this.elementSize,
                                s = this.data,
                                r = Math.floor(t / n),
                                a = Math.floor(e / n);
                            return o[0] = r, o[1] = a, i && (r < 0 && (r = 0), a < 0 && (a = 0), r >= s.length - 1 && (r = s.length - 1), a >= s[0].length - 1 && (a = s[0].length - 1)), !(r < 0) && !(a < 0) && !(r >= s.length - 1) && !(a >= s[0].length - 1)
                        }, a.prototype.getHeightAt = function(t, e, o) {
                            var i = [];
                            this.getIndexOfPosition(t, e, i, o);
                            var n = [];
                            return this.getRectMinMax(i[0], i[1] + 1, i[0], i[1] + 1, n), (n[0] + n[1]) / 2
                        }, a.prototype.getCacheConvexTrianglePillarKey = function(t, e, o) {
                            return t + "_" + e + "_" + (o ? 1 : 0)
                        }, a.prototype.getCachedConvexTrianglePillar = function(t, e, o) {
                            return this._cachedPillars[this.getCacheConvexTrianglePillarKey(t, e, o)]
                        }, a.prototype.setCachedConvexTrianglePillar = function(t, e, o, i, n) {
                            this._cachedPillars[this.getCacheConvexTrianglePillarKey(t, e, o)] = {
                                convex: i,
                                offset: n
                            }
                        }, a.prototype.clearCachedConvexTrianglePillar = function(t, e, o) {
                            delete this._cachedPillars[this.getCacheConvexTrianglePillarKey(t, e, o)]
                        }, a.prototype.getConvexTrianglePillar = function(t, e, o) {
                            var i = this.pillarConvex,
                                r = this.pillarOffset;
                            if (this.cacheEnabled) {
                                var a = this.getCachedConvexTrianglePillar(t, e, o);
                                if (a) {
                                    this.pillarConvex = a.convex, this.pillarOffset = a.offset;
                                    return
                                }
                                i = new n, r = new s, this.pillarConvex = i, this.pillarOffset = r
                            }
                            var a = this.data,
                                l = this.elementSize,
                                h = i.faces;
                            i.vertices.length = 6;
                            for (var p = 0; p < 6; p++) i.vertices[p] || (i.vertices[p] = new s);
                            h.length = 5;
                            for (var p = 0; p < 5; p++) h[p] || (h[p] = []);
                            var c = i.vertices,
                                u = (Math.min(a[t][e], a[t + 1][e], a[t][e + 1], a[t + 1][e + 1]) - this.minValue) / 2 + this.minValue;
                            o ? (r.set((t + .75) * l, (e + .75) * l, u), c[0].set(.25 * l, .25 * l, a[t + 1][e + 1] - u), c[1].set(-.75 * l, .25 * l, a[t][e + 1] - u), c[2].set(.25 * l, -.75 * l, a[t + 1][e] - u), c[3].set(.25 * l, .25 * l, -u - 1), c[4].set(-.75 * l, .25 * l, -u - 1), c[5].set(.25 * l, -.75 * l, -u - 1), h[0][0] = 0, h[0][1] = 1, h[0][2] = 2, h[1][0] = 5, h[1][1] = 4, h[1][2] = 3, h[2][0] = 2, h[2][1] = 5, h[2][2] = 3, h[2][3] = 0, h[3][0] = 3, h[3][1] = 4, h[3][2] = 1, h[3][3] = 0, h[4][0] = 1, h[4][1] = 4, h[4][2] = 5, h[4][3] = 2) : (r.set((t + .25) * l, (e + .25) * l, u), c[0].set(-.25 * l, -.25 * l, a[t][e] - u), c[1].set(.75 * l, -.25 * l, a[t + 1][e] - u), c[2].set(-.25 * l, .75 * l, a[t][e + 1] - u), c[3].set(-.25 * l, -.25 * l, -u - 1), c[4].set(.75 * l, -.25 * l, -u - 1), c[5].set(-.25 * l, .75 * l, -u - 1), h[0][0] = 0, h[0][1] = 1, h[0][2] = 2, h[1][0] = 5, h[1][1] = 4, h[1][2] = 3, h[2][0] = 0, h[2][1] = 2, h[2][2] = 5, h[2][3] = 3, h[3][0] = 1, h[3][1] = 0, h[3][2] = 3, h[3][3] = 4, h[4][0] = 4, h[4][1] = 5, h[4][2] = 2, h[4][3] = 1), i.computeNormals(), i.computeEdges(), i.updateBoundingSphereRadius(), this.setCachedConvexTrianglePillar(t, e, o, i, r)
                        }, a.prototype.calculateLocalInertia = function(t, e) {
                            return (e = e || new s).set(0, 0, 0), e
                        }, a.prototype.volume = function() {
                            return Number.MAX_VALUE
                        }, a.prototype.calculateWorldAABB = function(t, e, o, i) {
                            o.set(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE), i.set(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
                        }, a.prototype.updateBoundingSphereRadius = function() {
                            var t = this.data,
                                e = this.elementSize;
                            this.boundingSphereRadius = new s(t.length * e, t[0].length * e, Math.max(Math.abs(this.maxValue), Math.abs(this.minValue))).norm()
                        }
                    }, {
                        "../math/Vec3": 30,
                        "../utils/Utils": 53,
                        "./ConvexPolyhedron": 38,
                        "./Shape": 43
                    }],
                    41: [function(t, e, o) {
                        e.exports = s;
                        var i = t("./Shape"),
                            n = t("../math/Vec3");

                        function s() {
                            i.call(this), this.type = i.types.PARTICLE
                        }
                        s.prototype = new i, s.prototype.constructor = s, s.prototype.calculateLocalInertia = function(t, e) {
                            return (e = e || new n).set(0, 0, 0), e
                        }, s.prototype.volume = function() {
                            return 0
                        }, s.prototype.updateBoundingSphereRadius = function() {
                            this.boundingSphereRadius = 0
                        }, s.prototype.calculateWorldAABB = function(t, e, o, i) {
                            o.copy(t), i.copy(t)
                        }
                    }, {
                        "../math/Vec3": 30,
                        "./Shape": 43
                    }],
                    42: [function(t, e, o) {
                        e.exports = s;
                        var i = t("./Shape"),
                            n = t("../math/Vec3");

                        function s() {
                            i.call(this), this.type = i.types.PLANE, this.worldNormal = new n, this.worldNormalNeedsUpdate = !0, this.boundingSphereRadius = Number.MAX_VALUE
                        }
                        s.prototype = new i, s.prototype.constructor = s, s.prototype.computeWorldNormal = function(t) {
                            var e = this.worldNormal;
                            e.set(0, 0, 1), t.vmult(e, e), this.worldNormalNeedsUpdate = !1
                        }, s.prototype.calculateLocalInertia = function(t, e) {
                            return e = e || new n
                        }, s.prototype.volume = function() {
                            return Number.MAX_VALUE
                        };
                        var r = new n;
                        s.prototype.calculateWorldAABB = function(t, e, o, i) {
                            r.set(0, 0, 1), e.vmult(r, r);
                            var n = Number.MAX_VALUE;
                            o.set(-n, -n, -n), i.set(n, n, n), 1 === r.x && (i.x = t.x), 1 === r.y && (i.y = t.y), 1 === r.z && (i.z = t.z), -1 === r.x && (o.x = t.x), -1 === r.y && (o.y = t.y), -1 === r.z && (o.z = t.z)
                        }, s.prototype.updateBoundingSphereRadius = function() {
                            this.boundingSphereRadius = Number.MAX_VALUE
                        }
                    }, {
                        "../math/Vec3": 30,
                        "./Shape": 43
                    }],
                    43: [function(t, e, o) {
                        e.exports = i;
                        var i = t("./Shape");

                        function i() {
                            this.id = i.idCounter++, this.type = 0, this.boundingSphereRadius = 0, this.collisionResponse = !0, this.material = null
                        }
                        t("../math/Vec3"), t("../math/Quaternion"), t("../material/Material"), i.prototype.constructor = i, i.prototype.updateBoundingSphereRadius = function() {
                            throw "computeBoundingSphereRadius() not implemented for shape type " + this.type
                        }, i.prototype.volume = function() {
                            throw "volume() not implemented for shape type " + this.type
                        }, i.prototype.calculateLocalInertia = function(t, e) {
                            throw "calculateLocalInertia() not implemented for shape type " + this.type
                        }, i.idCounter = 0, i.types = {
                            SPHERE: 1,
                            PLANE: 2,
                            BOX: 4,
                            COMPOUND: 8,
                            CONVEXPOLYHEDRON: 16,
                            HEIGHTFIELD: 32,
                            PARTICLE: 64,
                            CYLINDER: 128,
                            TRIMESH: 256
                        }
                    }, {
                        "../material/Material": 25,
                        "../math/Quaternion": 28,
                        "../math/Vec3": 30,
                        "./Shape": 43
                    }],
                    44: [function(t, e, o) {
                        e.exports = s;
                        var i = t("./Shape"),
                            n = t("../math/Vec3");

                        function s(t) {
                            if (i.call(this), this.radius = void 0 !== t ? Number(t) : 1, this.type = i.types.SPHERE, this.radius < 0) throw Error("The sphere radius cannot be negative.");
                            this.updateBoundingSphereRadius()
                        }
                        s.prototype = new i, s.prototype.constructor = s, s.prototype.calculateLocalInertia = function(t, e) {
                            e = e || new n;
                            var o = 2 * t * this.radius * this.radius / 5;
                            return e.x = o, e.y = o, e.z = o, e
                        }, s.prototype.volume = function() {
                            return 4 * Math.PI * this.radius / 3
                        }, s.prototype.updateBoundingSphereRadius = function() {
                            this.boundingSphereRadius = this.radius
                        }, s.prototype.calculateWorldAABB = function(t, e, o, i) {
                            for (var n = this.radius, s = ["x", "y", "z"], r = 0; r < s.length; r++) {
                                var a = s[r];
                                o[a] = t[a] - n, i[a] = t[a] + n
                            }
                        }
                    }, {
                        "../math/Vec3": 30,
                        "./Shape": 43
                    }],
                    45: [function(t, e, o) {
                        e.exports = l;
                        var i = t("./Shape"),
                            n = t("../math/Vec3");
                        t("../math/Quaternion");
                        var s = t("../math/Transform"),
                            r = t("../collision/AABB"),
                            a = t("../utils/Octree");

                        function l(t, e) {
                            i.call(this), this.type = i.types.TRIMESH, this.vertices = new Float32Array(t), this.indices = new Int16Array(e), this.normals = new Float32Array(e.length), this.aabb = new r, this.edges = null, this.scale = new n(1, 1, 1), this.tree = new a, this.updateEdges(), this.updateNormals(), this.updateAABB(), this.updateBoundingSphereRadius(), this.updateTree()
                        }
                        l.prototype = new i, l.prototype.constructor = l;
                        var h = new n;
                        l.prototype.updateTree = function() {
                            var t = this.tree;
                            t.reset(), t.aabb.copy(this.aabb);
                            var e = this.scale;
                            t.aabb.lowerBound.x *= 1 / e.x, t.aabb.lowerBound.y *= 1 / e.y, t.aabb.lowerBound.z *= 1 / e.z, t.aabb.upperBound.x *= 1 / e.x, t.aabb.upperBound.y *= 1 / e.y, t.aabb.upperBound.z *= 1 / e.z;
                            for (var o = new r, i = new n, s = new n, a = new n, l = [i, s, a], h = 0; h < this.indices.length / 3; h++) {
                                var p = 3 * h;
                                this._getUnscaledVertex(this.indices[p], i), this._getUnscaledVertex(this.indices[p + 1], s), this._getUnscaledVertex(this.indices[p + 2], a), o.setFromPoints(l), t.insert(o, h)
                            }
                            t.removeEmptyNodes()
                        };
                        var p = new r;
                        l.prototype.getTrianglesInAABB = function(t, e) {
                            p.copy(t);
                            var o = this.scale,
                                i = o.x,
                                n = o.y,
                                s = o.z,
                                r = p.lowerBound,
                                a = p.upperBound;
                            return r.x /= i, r.y /= n, r.z /= s, a.x /= i, a.y /= n, a.z /= s, this.tree.aabbQuery(p, e)
                        }, l.prototype.setScale = function(t) {
                            var e = this.scale.x === this.scale.y === this.scale.z,
                                o = t.x === t.y === t.z;
                            e && o || this.updateNormals(), this.scale.copy(t), this.updateAABB(), this.updateBoundingSphereRadius()
                        }, l.prototype.updateNormals = function() {
                            for (var t = this.normals, e = 0; e < this.indices.length / 3; e++) {
                                var o = 3 * e,
                                    i = this.indices[o],
                                    n = this.indices[o + 1],
                                    s = this.indices[o + 2];
                                this.getVertex(i, y), this.getVertex(n, f), this.getVertex(s, m), l.computeNormal(f, y, m, h), t[o] = h.x, t[o + 1] = h.y, t[o + 2] = h.z
                            }
                        }, l.prototype.updateEdges = function() {
                            for (var t = {}, e = function(e, o) {
                                    t[n < s ? n + "_" + s : s + "_" + n] = !0
                                }, o = 0; o < this.indices.length / 3; o++) {
                                var i = 3 * o,
                                    n = this.indices[i],
                                    s = this.indices[i + 1],
                                    r = this.indices[i + 2];
                                e(n, s), e(s, r), e(r, n)
                            }
                            var a = Object.keys(t);
                            this.edges = new Int16Array(2 * a.length);
                            for (var o = 0; o < a.length; o++) {
                                var l = a[o].split("_");
                                this.edges[2 * o] = parseInt(l[0], 10), this.edges[2 * o + 1] = parseInt(l[1], 10)
                            }
                        }, l.prototype.getEdgeVertex = function(t, e, o) {
                            var i = this.edges[2 * t + (e ? 1 : 0)];
                            this.getVertex(i, o)
                        };
                        var c = new n,
                            u = new n;
                        l.prototype.getEdgeVector = function(t, e) {
                            this.getEdgeVertex(t, 0, c), this.getEdgeVertex(t, 1, u), u.vsub(c, e)
                        };
                        var d = new n,
                            v = new n;
                        l.computeNormal = function(t, e, o, i) {
                            e.vsub(t, v), o.vsub(e, d), d.cross(v, i), i.isZero() || i.normalize()
                        };
                        var y = new n,
                            f = new n,
                            m = new n;
                        l.prototype.getVertex = function(t, e) {
                            var o = this.scale;
                            return this._getUnscaledVertex(t, e), e.x *= o.x, e.y *= o.y, e.z *= o.z, e
                        }, l.prototype._getUnscaledVertex = function(t, e) {
                            var o = 3 * t,
                                i = this.vertices;
                            return e.set(i[o], i[o + 1], i[o + 2])
                        }, l.prototype.getWorldVertex = function(t, e, o, i) {
                            return this.getVertex(t, i), s.pointToWorldFrame(e, o, i, i), i
                        }, l.prototype.getTriangleVertices = function(t, e, o, i) {
                            var n = 3 * t;
                            this.getVertex(this.indices[n], e), this.getVertex(this.indices[n + 1], o), this.getVertex(this.indices[n + 2], i)
                        }, l.prototype.getNormal = function(t, e) {
                            var o = 3 * t;
                            return e.set(this.normals[o], this.normals[o + 1], this.normals[o + 2])
                        };
                        var w = new r;
                        l.prototype.calculateLocalInertia = function(t, e) {
                            this.computeLocalAABB(w);
                            var o = w.upperBound.x - w.lowerBound.x,
                                i = w.upperBound.y - w.lowerBound.y,
                                n = w.upperBound.z - w.lowerBound.z;
                            return e.set(1 / 12 * t * (2 * i * 2 * i + 2 * n * 2 * n), 1 / 12 * t * (2 * o * 2 * o + 2 * n * 2 * n), 1 / 12 * t * (2 * i * 2 * i + 2 * o * 2 * o))
                        };
                        var x = new n;
                        l.prototype.computeLocalAABB = function(t) {
                            var e = t.lowerBound,
                                o = t.upperBound,
                                i = this.vertices.length;
                            this.vertices, this.getVertex(0, x), e.copy(x), o.copy(x);
                            for (var n = 0; n !== i; n++) this.getVertex(n, x), x.x < e.x ? e.x = x.x : x.x > o.x && (o.x = x.x), x.y < e.y ? e.y = x.y : x.y > o.y && (o.y = x.y), x.z < e.z ? e.z = x.z : x.z > o.z && (o.z = x.z)
                        }, l.prototype.updateAABB = function() {
                            this.computeLocalAABB(this.aabb)
                        }, l.prototype.updateBoundingSphereRadius = function() {
                            for (var t = 0, e = this.vertices, o = new n, i = 0, s = e.length / 3; i !== s; i++) {
                                this.getVertex(i, o);
                                var r = o.norm2();
                                r > t && (t = r)
                            }
                            this.boundingSphereRadius = Math.sqrt(t)
                        }, new n;
                        var g = new s,
                            b = new r;
                        l.prototype.calculateWorldAABB = function(t, e, o, i) {
                            g.position = t, g.quaternion = e, this.aabb.toWorldFrame(g, b), o.copy(b.lowerBound), i.copy(b.upperBound)
                        }, l.prototype.volume = function() {
                            return 4 * Math.PI * this.boundingSphereRadius / 3
                        }, l.createTorus = function(t, e, o, i, n) {
                            t = t || 1, e = e || .5, o = o || 8, i = i || 6, n = n || 2 * Math.PI;
                            for (var s = [], r = [], a = 0; a <= o; a++)
                                for (var h = 0; h <= i; h++) {
                                    var p = h / i * n,
                                        c = a / o * Math.PI * 2,
                                        u = (t + e * Math.cos(c)) * Math.cos(p),
                                        d = (t + e * Math.cos(c)) * Math.sin(p),
                                        v = e * Math.sin(c);
                                    s.push(u, d, v)
                                }
                            for (var a = 1; a <= o; a++)
                                for (var h = 1; h <= i; h++) {
                                    var y = (i + 1) * a + h - 1,
                                        f = (i + 1) * (a - 1) + h - 1,
                                        m = (i + 1) * (a - 1) + h,
                                        w = (i + 1) * a + h;
                                    r.push(y, f, w), r.push(f, m, w)
                                }
                            return new l(s, r)
                        }
                    }, {
                        "../collision/AABB": 3,
                        "../math/Quaternion": 28,
                        "../math/Transform": 29,
                        "../math/Vec3": 30,
                        "../utils/Octree": 50,
                        "./Shape": 43
                    }],
                    46: [function(t, e, o) {
                        e.exports = n, t("../math/Vec3"), t("../math/Quaternion");
                        var i = t("./Solver");

                        function n() {
                            i.call(this), this.iterations = 10, this.tolerance = 1e-7
                        }
                        n.prototype = new i;
                        var s = [],
                            r = [],
                            a = [];
                        n.prototype.solve = function(t, e) {
                            var o, i, n, l, h, p = 0,
                                c = this.iterations,
                                u = this.tolerance * this.tolerance,
                                d = this.equations,
                                v = d.length,
                                y = e.bodies,
                                f = y.length;
                            if (0 !== v)
                                for (var m = 0; m !== f; m++) y[m].updateSolveMassProperties();
                            r.length = v, a.length = v, s.length = v;
                            for (var m = 0; m !== v; m++) {
                                var w = d[m];
                                s[m] = 0, a[m] = w.computeB(t), r[m] = 1 / w.computeC()
                            }
                            if (0 !== v) {
                                for (var m = 0; m !== f; m++) {
                                    var x = y[m],
                                        g = x.vlambda,
                                        b = x.wlambda;
                                    g.set(0, 0, 0), b && b.set(0, 0, 0)
                                }
                                for (p = 0; p !== c; p++) {
                                    l = 0;
                                    for (var B = 0; B !== v; B++) {
                                        var w = d[B];
                                        o = a[B], i = r[B], h = s[B], n = i * (o - w.computeGWlambda() - w.eps * h), h + n < w.minForce ? n = w.minForce - h : h + n > w.maxForce && (n = w.maxForce - h), s[B] += n, l += n > 0 ? n : -n, w.addToWlambda(n)
                                    }
                                    if (l * l < u) break
                                }
                                for (var m = 0; m !== f; m++) {
                                    var x = y[m],
                                        E = x.velocity,
                                        A = x.angularVelocity;
                                    E.vadd(x.vlambda, E), A && A.vadd(x.wlambda, A)
                                }
                            }
                            return p
                        }
                    }, {
                        "../math/Quaternion": 28,
                        "../math/Vec3": 30,
                        "./Solver": 47
                    }],
                    47: [function(t, e, o) {
                        function i() {
                            this.equations = []
                        }
                        e.exports = i, i.prototype.solve = function(t, e) {
                            return 0
                        }, i.prototype.addEquation = function(t) {
                            t.enabled && this.equations.push(t)
                        }, i.prototype.removeEquation = function(t) {
                            var e = this.equations,
                                o = e.indexOf(t); - 1 !== o && e.splice(o, 1)
                        }, i.prototype.removeAllEquations = function() {
                            this.equations.length = 0
                        }
                    }, {}],
                    48: [function(t, e, o) {
                        e.exports = s, t("../math/Vec3"), t("../math/Quaternion");
                        var i = t("./Solver"),
                            n = t("../objects/Body");

                        function s(t) {
                            for (i.call(this), this.iterations = 10, this.tolerance = 1e-7, this.subsolver = t, this.nodes = [], this.nodePool = []; this.nodePool.length < 128;) this.nodePool.push(this.createNode())
                        }
                        s.prototype = new i;
                        var r = [],
                            a = [],
                            l = {
                                bodies: []
                            },
                            h = n.STATIC;

                        function p(t) {
                            for (var e = t.length, o = 0; o !== e; o++) {
                                var i = t[o];
                                if (!i.visited && !(i.body.type & h)) return i
                            }
                            return !1
                        }
                        var c = [];

                        function u(t, e, o) {
                            e.push(t.body);
                            for (var i = t.eqs.length, n = 0; n !== i; n++) {
                                var s = t.eqs[n]; - 1 === o.indexOf(s) && o.push(s)
                            }
                        }

                        function d(t, e) {
                            return e.id - t.id
                        }
                        s.prototype.createNode = function() {
                            return {
                                body: null,
                                children: [],
                                eqs: [],
                                visited: !1
                            }
                        }, s.prototype.solve = function(t, e) {
                            for (var o = this.nodePool, i = e.bodies, n = this.equations, s = n.length, h = i.length, v = this.subsolver; o.length < h;) o.push(this.createNode());
                            r.length = h;
                            for (var y = 0; y < h; y++) r[y] = o[y];
                            for (var y = 0; y !== h; y++) {
                                var f = r[y];
                                f.body = i[y], f.children.length = 0, f.eqs.length = 0, f.visited = !1
                            }
                            for (var m = 0; m !== s; m++) {
                                var w = n[m],
                                    y = i.indexOf(w.bi),
                                    x = i.indexOf(w.bj),
                                    g = r[y],
                                    b = r[x];
                                g.children.push(b), g.eqs.push(w), b.children.push(g), b.eqs.push(w)
                            }
                            var B, E = 0,
                                A = a;
                            for (v.tolerance = this.tolerance, v.iterations = this.iterations; B = p(r);) {
                                A.length = 0, l.bodies.length = 0,
                                    function(t, e, o, i) {
                                        for (c.push(t), t.visited = !0, e(t, o, i); c.length;)
                                            for (var n, s = c.pop(); n = p(s.children);) n.visited = !0, e(n, o, i), c.push(n)
                                    }(B, u, l.bodies, A);
                                var S = A.length;
                                A = A.sort(d);
                                for (var y = 0; y !== S; y++) v.addEquation(A[y]);
                                v.solve(t, l), v.removeAllEquations(), E++
                            }
                            return E
                        }
                    }, {
                        "../math/Quaternion": 28,
                        "../math/Vec3": 30,
                        "../objects/Body": 31,
                        "./Solver": 47
                    }],
                    49: [function(t, e, o) {
                        var i = function() {};
                        e.exports = i, i.prototype = {
                            constructor: i,
                            addEventListener: function(t, e) {
                                void 0 === this._listeners && (this._listeners = {});
                                var o = this._listeners;
                                return void 0 === o[t] && (o[t] = []), -1 === o[t].indexOf(e) && o[t].push(e), this
                            },
                            hasEventListener: function(t, e) {
                                if (void 0 === this._listeners) return !1;
                                var o = this._listeners;
                                return void 0 !== o[t] && -1 !== o[t].indexOf(e)
                            },
                            removeEventListener: function(t, e) {
                                if (void 0 === this._listeners) return this;
                                var o = this._listeners;
                                if (void 0 === o[t]) return this;
                                var i = o[t].indexOf(e);
                                return -1 !== i && o[t].splice(i, 1), this
                            },
                            dispatchEvent: function(t) {
                                if (void 0 === this._listeners) return this;
                                var e = this._listeners[t.type];
                                if (void 0 !== e) {
                                    t.target = this;
                                    for (var o = 0, i = e.length; o < i; o++) e[o].call(this, t)
                                }
                                return this
                            }
                        }
                    }, {}],
                    50: [function(t, e, o) {
                        var i = t("../collision/AABB"),
                            n = t("../math/Vec3");

                        function s(t) {
                            t = t || {}, this.root = t.root || null, this.aabb = t.aabb ? t.aabb.clone() : new i, this.data = [], this.children = []
                        }

                        function r(t, e) {
                            (e = e || {}).root = null, e.aabb = t, s.call(this, e), this.maxDepth = void 0 !== e.maxDepth ? e.maxDepth : 8
                        }
                        e.exports = r, r.prototype = new s, s.prototype.reset = function(t, e) {
                            this.children.length = this.data.length = 0
                        }, s.prototype.insert = function(t, e, o) {
                            var i = this.data;
                            if (o = o || 0, !this.aabb.contains(t)) return !1;
                            var n = this.children;
                            if (o < (this.maxDepth || this.root.maxDepth)) {
                                var s = !1;
                                n.length || (this.subdivide(), s = !0);
                                for (var r = 0; 8 !== r; r++)
                                    if (n[r].insert(t, e, o + 1)) return !0;
                                s && (n.length = 0)
                            }
                            return i.push(e), !0
                        };
                        var a = new n;
                        s.prototype.subdivide = function() {
                            var t = this.aabb,
                                e = t.lowerBound,
                                o = t.upperBound,
                                r = this.children;
                            r.push(new s({
                                aabb: new i({
                                    lowerBound: new n(0, 0, 0)
                                })
                            }), new s({
                                aabb: new i({
                                    lowerBound: new n(1, 0, 0)
                                })
                            }), new s({
                                aabb: new i({
                                    lowerBound: new n(1, 1, 0)
                                })
                            }), new s({
                                aabb: new i({
                                    lowerBound: new n(1, 1, 1)
                                })
                            }), new s({
                                aabb: new i({
                                    lowerBound: new n(0, 1, 1)
                                })
                            }), new s({
                                aabb: new i({
                                    lowerBound: new n(0, 0, 1)
                                })
                            }), new s({
                                aabb: new i({
                                    lowerBound: new n(1, 0, 1)
                                })
                            }), new s({
                                aabb: new i({
                                    lowerBound: new n(0, 1, 0)
                                })
                            })), o.vsub(e, a), a.scale(.5, a);
                            for (var l = this.root || this, h = 0; 8 !== h; h++) {
                                var p = r[h];
                                p.root = l;
                                var c = p.aabb.lowerBound;
                                c.x *= a.x, c.y *= a.y, c.z *= a.z, c.vadd(e, c), c.vadd(a, p.aabb.upperBound)
                            }
                        }, s.prototype.aabbQuery = function(t, e) {
                            this.data, this.children;
                            for (var o = [this]; o.length;) {
                                var i = o.pop();
                                i.aabb.overlaps(t) && Array.prototype.push.apply(e, i.data), Array.prototype.push.apply(o, i.children)
                            }
                            return e
                        };
                        var l = new i;
                        s.prototype.rayQuery = function(t, e, o) {
                            return t.getAABB(l), l.toLocalFrame(e, l), this.aabbQuery(l, o), o
                        }, s.prototype.removeEmptyNodes = function() {
                            for (var t = [this]; t.length;) {
                                for (var e = t.pop(), o = e.children.length - 1; o >= 0; o--) e.children[o].data.length || e.children.splice(o, 1);
                                Array.prototype.push.apply(t, e.children)
                            }
                        }
                    }, {
                        "../collision/AABB": 3,
                        "../math/Vec3": 30
                    }],
                    51: [function(t, e, o) {
                        function i() {
                            this.objects = [], this.type = Object
                        }
                        e.exports = i, i.prototype.release = function() {
                            for (var t = arguments.length, e = 0; e !== t; e++) this.objects.push(arguments[e])
                        }, i.prototype.get = function() {
                            return 0 === this.objects.length ? this.constructObject() : this.objects.pop()
                        }, i.prototype.constructObject = function() {
                            throw Error("constructObject() not implemented in this Pool subclass yet!")
                        }
                    }, {}],
                    52: [function(t, e, o) {
                        function i() {
                            this.data = {
                                keys: []
                            }
                        }
                        e.exports = i, i.prototype.get = function(t, e) {
                            if (t > e) {
                                var o = e;
                                e = t, t = o
                            }
                            return this.data[t + "-" + e]
                        }, i.prototype.set = function(t, e, o) {
                            if (t > e) {
                                var i = e;
                                e = t, t = i
                            }
                            var n = t + "-" + e;
                            this.get(t, e) || this.data.keys.push(n), this.data[n] = o
                        }, i.prototype.reset = function() {
                            for (var t = this.data, e = t.keys; e.length > 0;) {
                                var o = e.pop();
                                delete t[o]
                            }
                        }
                    }, {}],
                    53: [function(t, e, o) {
                        function i() {}
                        e.exports = i, i.defaults = function(t, e) {
                            for (var o in t = t || {}, e) o in t || (t[o] = e[o]);
                            return t
                        }
                    }, {}],
                    54: [function(t, e, o) {
                        e.exports = s;
                        var i = t("../math/Vec3"),
                            n = t("./Pool");

                        function s() {
                            n.call(this), this.type = i
                        }
                        s.prototype = new n, s.prototype.constructObject = function() {
                            return new i
                        }
                    }, {
                        "../math/Vec3": 30,
                        "./Pool": 51
                    }],
                    55: [function(t, e, o) {
                        e.exports = u;
                        var i = t("../collision/AABB"),
                            n = t("../shapes/Shape"),
                            s = t("../collision/Ray"),
                            r = t("../math/Vec3"),
                            a = t("../math/Transform");
                        t("../shapes/ConvexPolyhedron");
                        var l = t("../math/Quaternion");
                        t("../solver/Solver");
                        var h = t("../utils/Vec3Pool"),
                            p = t("../equations/ContactEquation"),
                            c = t("../equations/FrictionEquation");

                        function u(t) {
                            this.contactPointPool = [], this.frictionEquationPool = [], this.result = [], this.frictionResult = [], this.v3pool = new h, this.world = t, this.currentContactMaterial = null, this.enableFrictionReduction = !1
                        }
                        u.prototype.createContactEquation = function(t, e, o, i, n, s) {
                            this.contactPointPool.length ? ((r = this.contactPointPool.pop()).bi = t, r.bj = e) : r = new p(t, e), r.enabled = t.collisionResponse && e.collisionResponse && o.collisionResponse && i.collisionResponse;
                            var r, a = this.currentContactMaterial;
                            r.restitution = a.restitution, r.setSpookParams(a.contactEquationStiffness, a.contactEquationRelaxation, this.world.dt);
                            var l = o.material || t.material,
                                h = i.material || e.material;
                            return l && h && l.restitution >= 0 && h.restitution >= 0 && (r.restitution = l.restitution * h.restitution), r.si = n || o, r.sj = s || i, r
                        }, u.prototype.createFrictionEquationsFromContact = function(t, e) {
                            var o = t.bi,
                                i = t.bj,
                                n = t.si,
                                s = t.sj,
                                r = this.world,
                                a = this.currentContactMaterial,
                                l = a.friction,
                                h = n.material || o.material,
                                p = s.material || i.material;
                            if (h && p && h.friction >= 0 && p.friction >= 0 && (l = h.friction * p.friction), l > 0) {
                                var u = l * r.gravity.length(),
                                    d = o.invMass + i.invMass;
                                d > 0 && (d = 1 / d);
                                var v = this.frictionEquationPool,
                                    y = v.length ? v.pop() : new c(o, i, u * d),
                                    f = v.length ? v.pop() : new c(o, i, u * d);
                                return y.bi = f.bi = o, y.bj = f.bj = i, y.minForce = f.minForce = -u * d, y.maxForce = f.maxForce = u * d, y.ri.copy(t.ri), y.rj.copy(t.rj), f.ri.copy(t.ri), f.rj.copy(t.rj), t.ni.tangents(y.t, f.t), y.setSpookParams(a.frictionEquationStiffness, a.frictionEquationRelaxation, r.dt), f.setSpookParams(a.frictionEquationStiffness, a.frictionEquationRelaxation, r.dt), y.enabled = f.enabled = t.enabled, e.push(y, f), !0
                            }
                            return !1
                        };
                        var d = new r,
                            v = new r,
                            y = new r;
                        u.prototype.createFrictionFromAverage = function(t) {
                            var e = this.result[this.result.length - 1];
                            if (this.createFrictionEquationsFromContact(e, this.frictionResult) && 1 !== t) {
                                var o = this.frictionResult[this.frictionResult.length - 2],
                                    i = this.frictionResult[this.frictionResult.length - 1];
                                d.setZero(), v.setZero(), y.setZero();
                                var n = e.bi;
                                e.bj;
                                for (var s = 0; s !== t; s++)(e = this.result[this.result.length - 1 - s]).bodyA !== n ? (d.vadd(e.ni, d), v.vadd(e.ri, v), y.vadd(e.rj, y)) : (d.vsub(e.ni, d), v.vadd(e.rj, v), y.vadd(e.ri, y));
                                var r = 1 / t;
                                v.scale(r, o.ri), y.scale(r, o.rj), i.ri.copy(o.ri), i.rj.copy(o.rj), d.normalize(), d.tangents(o.t, i.t)
                            }
                        };
                        var f = new r,
                            m = new r,
                            w = new l,
                            x = new l;
                        u.prototype.getContacts = function(t, e, o, i, n, s, r) {
                            this.contactPointPool = n, this.frictionEquationPool = r, this.result = i, this.frictionResult = s;
                            for (var a = 0, l = t.length; a !== l; a++) {
                                var h = t[a],
                                    p = e[a],
                                    c = null;
                                h.material && p.material && (c = o.getContactMaterial(h.material, p.material) || null);
                                for (var u = 0; u < h.shapes.length; u++) {
                                    h.quaternion.mult(h.shapeOrientations[u], w), h.quaternion.vmult(h.shapeOffsets[u], f), f.vadd(h.position, f);
                                    for (var d = h.shapes[u], v = 0; v < p.shapes.length; v++) {
                                        p.quaternion.mult(p.shapeOrientations[v], x), p.quaternion.vmult(p.shapeOffsets[v], m), m.vadd(p.position, m);
                                        var y = p.shapes[v];
                                        if (!(f.distanceTo(m) > d.boundingSphereRadius + y.boundingSphereRadius)) {
                                            var g = null;
                                            d.material && y.material && (g = o.getContactMaterial(d.material, y.material) || null), this.currentContactMaterial = g || c || o.defaultContactMaterial;
                                            var b = this[d.type | y.type];
                                            b && (d.type < y.type ? b.call(this, d, y, f, m, w, x, h, p, d, y) : b.call(this, y, d, m, f, x, w, p, h, d, y))
                                        }
                                    }
                                }
                            }
                        }, u.prototype[n.types.BOX | n.types.BOX] = u.prototype.boxBox = function(t, e, o, i, n, s, r, a) {
                            t.convexPolyhedronRepresentation.material = t.material, e.convexPolyhedronRepresentation.material = e.material, t.convexPolyhedronRepresentation.collisionResponse = t.collisionResponse, e.convexPolyhedronRepresentation.collisionResponse = e.collisionResponse, this.convexConvex(t.convexPolyhedronRepresentation, e.convexPolyhedronRepresentation, o, i, n, s, r, a, t, e)
                        }, u.prototype[n.types.BOX | n.types.CONVEXPOLYHEDRON] = u.prototype.boxConvex = function(t, e, o, i, n, s, r, a) {
                            t.convexPolyhedronRepresentation.material = t.material, t.convexPolyhedronRepresentation.collisionResponse = t.collisionResponse, this.convexConvex(t.convexPolyhedronRepresentation, e, o, i, n, s, r, a, t, e)
                        }, u.prototype[n.types.BOX | n.types.PARTICLE] = u.prototype.boxParticle = function(t, e, o, i, n, s, r, a) {
                            t.convexPolyhedronRepresentation.material = t.material, t.convexPolyhedronRepresentation.collisionResponse = t.collisionResponse, this.convexParticle(t.convexPolyhedronRepresentation, e, o, i, n, s, r, a, t, e)
                        }, u.prototype[n.types.SPHERE] = u.prototype.sphereSphere = function(t, e, o, i, n, s, r, a) {
                            var l = this.createContactEquation(r, a, t, e);
                            i.vsub(o, l.ni), l.ni.normalize(), l.ri.copy(l.ni), l.rj.copy(l.ni), l.ri.mult(t.radius, l.ri), l.rj.mult(-e.radius, l.rj), l.ri.vadd(o, l.ri), l.ri.vsub(r.position, l.ri), l.rj.vadd(i, l.rj), l.rj.vsub(a.position, l.rj), this.result.push(l), this.createFrictionEquationsFromContact(l, this.frictionResult)
                        };
                        var g = new r,
                            b = new r,
                            B = new r;
                        u.prototype[n.types.PLANE | n.types.TRIMESH] = u.prototype.planeTrimesh = function(t, e, o, i, n, s, l, h) {
                            var p = new r;
                            g.set(0, 0, 1), n.vmult(g, g);
                            for (var c = 0; c < e.vertices.length / 3; c++) {
                                e.getVertex(c, p);
                                var u = new r;
                                if (u.copy(p), a.pointToWorldFrame(i, s, u, p), p.vsub(o, b), 0 >= g.dot(b)) {
                                    var d = this.createContactEquation(l, h, t, e);
                                    d.ni.copy(g), g.scale(b.dot(g), B), p.vsub(B, B), d.ri.copy(B), d.ri.vsub(l.position, d.ri), d.rj.copy(p), d.rj.vsub(h.position, d.rj), this.result.push(d), this.createFrictionEquationsFromContact(d, this.frictionResult)
                                }
                            }
                        };
                        var E = new r,
                            A = new r;
                        new r;
                        var S = new r,
                            C = new r,
                            z = new r,
                            q = new r,
                            R = new r,
                            M = new r,
                            P = new r,
                            F = new r,
                            V = new r,
                            T = new r,
                            I = new r,
                            N = new i,
                            W = [];
                        u.prototype[n.types.SPHERE | n.types.TRIMESH] = u.prototype.sphereTrimesh = function(t, e, o, i, n, r, l, h) {
                            a.pointToLocalFrame(i, r, o, P);
                            var p = t.radius;
                            N.lowerBound.set(P.x - p, P.y - p, P.z - p), N.upperBound.set(P.x + p, P.y + p, P.z + p), e.getTrianglesInAABB(N, W);
                            for (var c = t.radius * t.radius, u = 0; u < W.length; u++)
                                for (var d = 0; d < 3; d++)
                                    if (e.getVertex(e.indices[3 * W[u] + d], S), S.vsub(P, A), A.norm2() <= c) {
                                        C.copy(S), a.pointToWorldFrame(i, r, C, S), S.vsub(o, A);
                                        var v = this.createContactEquation(l, h, t, e);
                                        v.ni.copy(A), v.ni.normalize(), v.ri.copy(v.ni), v.ri.scale(t.radius, v.ri), v.ri.vadd(o, v.ri), v.ri.vsub(l.position, v.ri), v.rj.copy(S), v.rj.vsub(h.position, v.rj), this.result.push(v), this.createFrictionEquationsFromContact(v, this.frictionResult)
                                    }
                            for (var u = 0; u < W.length; u++)
                                for (var d = 0; d < 3; d++) {
                                    e.getVertex(e.indices[3 * W[u] + d], z), e.getVertex(e.indices[3 * W[u] + (d + 1) % 3], q), q.vsub(z, R), P.vsub(q, F);
                                    var y = F.dot(R);
                                    P.vsub(z, F);
                                    var f = F.dot(R);
                                    if (f > 0 && y < 0) {
                                        P.vsub(z, F), M.copy(R), M.normalize(), f = F.dot(M), M.scale(f, F), F.vadd(z, F);
                                        var m = F.distanceTo(P);
                                        if (m < t.radius) {
                                            var v = this.createContactEquation(l, h, t, e);
                                            F.vsub(P, v.ni), v.ni.normalize(), v.ni.scale(t.radius, v.ri), a.pointToWorldFrame(i, r, F, F), F.vsub(h.position, v.rj), a.vectorToWorldFrame(r, v.ni, v.ni), a.vectorToWorldFrame(r, v.ri, v.ri), this.result.push(v), this.createFrictionEquationsFromContact(v, this.frictionResult)
                                        }
                                    }
                                }
                            for (var u = 0, w = W.length; u !== w; u++) {
                                e.getTriangleVertices(W[u], V, T, I), e.getNormal(W[u], E), P.vsub(V, F);
                                var m = F.dot(E);
                                if (E.scale(m, F), P.vsub(F, F), m = F.distanceTo(P), s.pointInTriangle(F, V, T, I) && m < t.radius) {
                                    var v = this.createContactEquation(l, h, t, e);
                                    F.vsub(P, v.ni), v.ni.normalize(), v.ni.scale(t.radius, v.ri), a.pointToWorldFrame(i, r, F, F), F.vsub(h.position, v.rj), a.vectorToWorldFrame(r, v.ni, v.ni), a.vectorToWorldFrame(r, v.ri, v.ri), this.result.push(v), this.createFrictionEquationsFromContact(v, this.frictionResult)
                                }
                            }
                            W.length = 0
                        };
                        var L = new r,
                            j = new r;
                        u.prototype[n.types.SPHERE | n.types.PLANE] = u.prototype.spherePlane = function(t, e, o, i, n, s, r, a) {
                            var l = this.createContactEquation(r, a, t, e);
                            if (l.ni.set(0, 0, 1), s.vmult(l.ni, l.ni), l.ni.negate(l.ni), l.ni.normalize(), l.ni.mult(t.radius, l.ri), o.vsub(i, L), l.ni.mult(l.ni.dot(L), j), L.vsub(j, l.rj), -L.dot(l.ni) <= t.radius) {
                                var h = l.ri,
                                    p = l.rj;
                                h.vadd(o, h), h.vsub(r.position, h), p.vadd(i, p), p.vsub(a.position, p), this.result.push(l), this.createFrictionEquationsFromContact(l, this.frictionResult)
                            }
                        };
                        var O = new r,
                            k = new r,
                            _ = new r,
                            U = new r,
                            H = new r,
                            D = new r,
                            X = new r,
                            G = [new r, new r, new r, new r, new r, new r],
                            Y = new r,
                            Q = new r,
                            Z = new r,
                            K = new r;
                        u.prototype[n.types.SPHERE | n.types.BOX] = u.prototype.sphereBox = function(t, e, o, i, n, s, r, a) {
                            var l = this.v3pool;
                            o.vsub(i, U), e.getSideNormals(G, s);
                            for (var h = t.radius, p = !1, c = null, u = 0, d = 0, v = 0, y = null, f = 0, m = G.length; f !== m && !1 === p; f++) {
                                H.copy(G[f]);
                                var w = H.norm();
                                H.normalize();
                                var x = U.dot(H);
                                if (x < w + h && x > 0) {
                                    D.copy(G[(f + 1) % 3]), X.copy(G[(f + 2) % 3]);
                                    var g = D.norm(),
                                        b = X.norm();
                                    D.normalize(), X.normalize();
                                    var B = U.dot(D),
                                        E = U.dot(X);
                                    if (B < g && B > -g && E < b && E > -b) {
                                        var A = Math.abs(x - w - h);
                                        (null === y || A < y) && (y = A, d = B, v = E, c = w, Q.copy(H), Z.copy(D), K.copy(X), u++)
                                    }
                                }
                            }
                            if (u) {
                                p = !0;
                                var S = this.createContactEquation(r, a, t, e);
                                Q.mult(-h, S.ri), S.ni.copy(Q), S.ni.negate(S.ni), Q.mult(c, Q), Z.mult(d, Z), Q.vadd(Z, Q), K.mult(v, K), Q.vadd(K, S.rj), S.ri.vadd(o, S.ri), S.ri.vsub(r.position, S.ri), S.rj.vadd(i, S.rj), S.rj.vsub(a.position, S.rj), this.result.push(S), this.createFrictionEquationsFromContact(S, this.frictionResult)
                            }
                            for (var C = l.get(), z = 0; 2 !== z && !p; z++)
                                for (var q = 0; 2 !== q && !p; q++)
                                    for (var R = 0; 2 !== R && !p; R++)
                                        if (C.set(0, 0, 0), z ? C.vadd(G[0], C) : C.vsub(G[0], C), q ? C.vadd(G[1], C) : C.vsub(G[1], C), R ? C.vadd(G[2], C) : C.vsub(G[2], C), i.vadd(C, Y), Y.vsub(o, Y), Y.norm2() < h * h) {
                                            p = !0;
                                            var S = this.createContactEquation(r, a, t, e);
                                            S.ri.copy(Y), S.ri.normalize(), S.ni.copy(S.ri), S.ri.mult(h, S.ri), S.rj.copy(C), S.ri.vadd(o, S.ri), S.ri.vsub(r.position, S.ri), S.rj.vadd(i, S.rj), S.rj.vsub(a.position, S.rj), this.result.push(S), this.createFrictionEquationsFromContact(S, this.frictionResult)
                                        }
                            l.release(C), C = null;
                            for (var M = l.get(), P = l.get(), S = l.get(), F = l.get(), A = l.get(), V = G.length, z = 0; z !== V && !p; z++)
                                for (var q = 0; q !== V && !p; q++)
                                    if (z % 3 != q % 3) {
                                        G[q].cross(G[z], M), M.normalize(), G[z].vadd(G[q], P), S.copy(o), S.vsub(P, S), S.vsub(i, S);
                                        var T = S.dot(M);
                                        M.mult(T, F);
                                        for (var R = 0; R === z % 3 || R === q % 3;) R++;
                                        A.copy(o), A.vsub(F, A), A.vsub(P, A), A.vsub(i, A);
                                        var I = Math.abs(T),
                                            N = A.norm();
                                        if (I < G[R].norm() && N < h) {
                                            p = !0;
                                            var W = this.createContactEquation(r, a, t, e);
                                            P.vadd(F, W.rj), W.rj.copy(W.rj), A.negate(W.ni), W.ni.normalize(), W.ri.copy(W.rj), W.ri.vadd(i, W.ri), W.ri.vsub(o, W.ri), W.ri.normalize(), W.ri.mult(h, W.ri), W.ri.vadd(o, W.ri), W.ri.vsub(r.position, W.ri), W.rj.vadd(i, W.rj), W.rj.vsub(a.position, W.rj), this.result.push(W), this.createFrictionEquationsFromContact(W, this.frictionResult)
                                        }
                                    }
                            l.release(M, P, S, F, A)
                        };
                        var J = new r,
                            $ = new r,
                            tt = new r,
                            te = new r,
                            to = new r,
                            ti = new r,
                            tn = new r,
                            ts = new r,
                            tr = new r,
                            ta = new r;
                        u.prototype[n.types.SPHERE | n.types.CONVEXPOLYHEDRON] = u.prototype.sphereConvex = function(t, e, o, i, n, s, r, a) {
                            var l = this.v3pool;
                            o.vsub(i, J);
                            for (var h = e.faceNormals, p = e.faces, c = e.vertices, u = t.radius, d = 0; d !== c.length; d++) {
                                var v = c[d];
                                if (s.vmult(v, to), i.vadd(to, to), to.vsub(o, te), te.norm2() < u * u) {
                                    f = !0;
                                    var y = this.createContactEquation(r, a, t, e);
                                    y.ri.copy(te), y.ri.normalize(), y.ni.copy(y.ri), y.ri.mult(u, y.ri), to.vsub(i, y.rj), y.ri.vadd(o, y.ri), y.ri.vsub(r.position, y.ri), y.rj.vadd(i, y.rj), y.rj.vsub(a.position, y.rj), this.result.push(y), this.createFrictionEquationsFromContact(y, this.frictionResult);
                                    return
                                }
                            }
                            for (var f = !1, d = 0, m = p.length; d !== m && !1 === f; d++) {
                                var w = h[d],
                                    x = p[d];
                                s.vmult(w, ti), s.vmult(c[x[0]], tn), tn.vadd(i, tn), ti.mult(-u, ts), o.vadd(ts, ts), ts.vsub(tn, tr);
                                var g = tr.dot(ti);
                                if (o.vsub(tn, ta), g < 0 && ta.dot(ti) > 0) {
                                    for (var b = [], B = 0, E = x.length; B !== E; B++) {
                                        var A = l.get();
                                        s.vmult(c[x[B]], A), i.vadd(A, A), b.push(A)
                                    }
                                    if (function(t, e, o) {
                                            for (var i = null, n = t.length, s = 0; s !== n; s++) {
                                                var r = t[s];
                                                t[(s + 1) % n].vsub(r, O), O.cross(e, k), o.vsub(r, _);
                                                var a = k.dot(_);
                                                if (null !== i && (!(a > 0) || !0 !== i) && (!(a <= 0) || !1 !== i)) return !1;
                                                null === i && (i = a > 0)
                                            }
                                            return !0
                                        }(b, ti, o)) {
                                        f = !0;
                                        var y = this.createContactEquation(r, a, t, e);
                                        ti.mult(-u, y.ri), ti.negate(y.ni);
                                        var S = l.get();
                                        ti.mult(-g, S);
                                        var C = l.get();
                                        ti.mult(-u, C), o.vsub(i, y.rj), y.rj.vadd(C, y.rj), y.rj.vadd(S, y.rj), y.rj.vadd(i, y.rj), y.rj.vsub(a.position, y.rj), y.ri.vadd(o, y.ri), y.ri.vsub(r.position, y.ri), l.release(S), l.release(C), this.result.push(y), this.createFrictionEquationsFromContact(y, this.frictionResult);
                                        for (var B = 0, z = b.length; B !== z; B++) l.release(b[B]);
                                        return
                                    }
                                    for (var B = 0; B !== x.length; B++) {
                                        var q = l.get(),
                                            R = l.get();
                                        s.vmult(c[x[(B + 1) % x.length]], q), s.vmult(c[x[(B + 2) % x.length]], R), i.vadd(q, q), i.vadd(R, R), R.vsub(q, $), $.unit(tt);
                                        var M = l.get(),
                                            P = l.get();
                                        o.vsub(q, P);
                                        var F = P.dot(tt);
                                        tt.mult(F, M), M.vadd(q, M);
                                        var V = l.get();
                                        if (M.vsub(o, V), F > 0 && F * F < $.norm2() && V.norm2() < u * u) {
                                            var y = this.createContactEquation(r, a, t, e);
                                            M.vsub(i, y.rj), M.vsub(o, y.ni), y.ni.normalize(), y.ni.mult(u, y.ri), y.rj.vadd(i, y.rj), y.rj.vsub(a.position, y.rj), y.ri.vadd(o, y.ri), y.ri.vsub(r.position, y.ri), this.result.push(y), this.createFrictionEquationsFromContact(y, this.frictionResult);
                                            for (var B = 0, z = b.length; B !== z; B++) l.release(b[B]);
                                            l.release(q), l.release(R), l.release(M), l.release(V), l.release(P);
                                            return
                                        }
                                        l.release(q), l.release(R), l.release(M), l.release(V), l.release(P)
                                    }
                                    for (var B = 0, z = b.length; B !== z; B++) l.release(b[B])
                                }
                            }
                        }, new r, new r, u.prototype[n.types.PLANE | n.types.BOX] = u.prototype.planeBox = function(t, e, o, i, n, s, r, a) {
                            e.convexPolyhedronRepresentation.material = e.material, e.convexPolyhedronRepresentation.collisionResponse = e.collisionResponse, this.planeConvex(t, e.convexPolyhedronRepresentation, o, i, n, s, r, a)
                        };
                        var tl = new r,
                            th = new r,
                            tp = new r,
                            tc = new r;
                        u.prototype[n.types.PLANE | n.types.CONVEXPOLYHEDRON] = u.prototype.planeConvex = function(t, e, o, i, n, s, r, a) {
                            th.set(0, 0, 1), n.vmult(th, th);
                            for (var l = 0, h = 0; h !== e.vertices.length; h++)
                                if (tl.copy(e.vertices[h]), s.vmult(tl, tl), i.vadd(tl, tl), tl.vsub(o, tp), 0 >= th.dot(tp)) {
                                    var p = this.createContactEquation(r, a, t, e);
                                    th.mult(th.dot(tp), tc), tl.vsub(tc, tc), tc.vsub(o, p.ri), p.ni.copy(th), tl.vsub(i, p.rj), p.ri.vadd(o, p.ri), p.ri.vsub(r.position, p.ri), p.rj.vadd(i, p.rj), p.rj.vsub(a.position, p.rj), this.result.push(p), l++, this.enableFrictionReduction || this.createFrictionEquationsFromContact(p, this.frictionResult)
                                }
                            this.enableFrictionReduction && l && this.createFrictionFromAverage(l)
                        };
                        var tu = new r,
                            td = new r;
                        u.prototype[n.types.CONVEXPOLYHEDRON] = u.prototype.convexConvex = function(t, e, o, i, n, s, r, a, l, h, p, c) {
                            if (!(o.distanceTo(i) > t.boundingSphereRadius + e.boundingSphereRadius) && t.findSeparatingAxis(e, o, n, i, s, tu, p, c)) {
                                var u = [];
                                t.clipAgainstHull(o, n, e, i, s, tu, -100, 100, u);
                                for (var d = 0, v = 0; v !== u.length; v++) {
                                    var y = this.createContactEquation(r, a, t, e, l, h),
                                        f = y.ri,
                                        m = y.rj;
                                    tu.negate(y.ni), u[v].normal.negate(td), td.mult(u[v].depth, td), u[v].point.vadd(td, f), m.copy(u[v].point), f.vsub(o, f), m.vsub(i, m), f.vadd(o, f), f.vsub(r.position, f), m.vadd(i, m), m.vsub(a.position, m), this.result.push(y), d++, this.enableFrictionReduction || this.createFrictionEquationsFromContact(y, this.frictionResult)
                                }
                                this.enableFrictionReduction && d && this.createFrictionFromAverage(d)
                            }
                        };
                        var tv = new r,
                            ty = new r,
                            tf = new r;
                        u.prototype[n.types.PLANE | n.types.PARTICLE] = u.prototype.planeParticle = function(t, e, o, i, n, s, r, a) {
                            if (tv.set(0, 0, 1), r.quaternion.vmult(tv, tv), i.vsub(r.position, ty), 0 >= tv.dot(ty)) {
                                var l = this.createContactEquation(a, r, e, t);
                                l.ni.copy(tv), l.ni.negate(l.ni), l.ri.set(0, 0, 0), tv.mult(tv.dot(i), tf), i.vsub(tf, tf), l.rj.copy(tf), this.result.push(l), this.createFrictionEquationsFromContact(l, this.frictionResult)
                            }
                        };
                        var tm = new r;
                        u.prototype[n.types.PARTICLE | n.types.SPHERE] = u.prototype.sphereParticle = function(t, e, o, i, n, s, r, a) {
                            if (tm.set(0, 0, 1), i.vsub(o, tm), tm.norm2() <= t.radius * t.radius) {
                                var l = this.createContactEquation(a, r, e, t);
                                tm.normalize(), l.rj.copy(tm), l.rj.mult(t.radius, l.rj), l.ni.copy(tm), l.ni.negate(l.ni), l.ri.set(0, 0, 0), this.result.push(l), this.createFrictionEquationsFromContact(l, this.frictionResult)
                            }
                        };
                        var tw = new l,
                            tx = new r;
                        new r;
                        var tg = new r,
                            tb = new r,
                            tB = new r;
                        u.prototype[n.types.PARTICLE | n.types.CONVEXPOLYHEDRON] = u.prototype.convexParticle = function(t, e, o, i, n, s, r, a) {
                            var l = -1,
                                h = null;
                            if (tx.copy(i), tx.vsub(o, tx), n.conjugate(tw), tw.vmult(tx, tx), t.pointIsInside(tx)) {
                                t.worldVerticesNeedsUpdate && t.computeWorldVertices(o, n), t.worldFaceNormalsNeedsUpdate && t.computeWorldFaceNormals(n);
                                for (var p = 0, c = t.faces.length; p !== c; p++) {
                                    var u = [t.worldVertices[t.faces[p][0]]],
                                        d = t.worldFaceNormals[p];
                                    i.vsub(u[0], tb);
                                    var v = -d.dot(tb);
                                    (null === h || Math.abs(v) < Math.abs(h)) && (h = v, l = p, tg.copy(d))
                                }
                                if (-1 !== l) {
                                    var y = this.createContactEquation(a, r, e, t);
                                    tg.mult(h, tB), tB.vadd(i, tB), tB.vsub(o, tB), y.rj.copy(tB), tg.negate(y.ni), y.ri.set(0, 0, 0);
                                    var f = y.ri,
                                        m = y.rj;
                                    f.vadd(i, f), f.vsub(a.position, f), m.vadd(o, m), m.vsub(r.position, m), this.result.push(y), this.createFrictionEquationsFromContact(y, this.frictionResult)
                                } else console.warn("Point found inside convex, but did not find penetrating face!")
                            }
                        }, u.prototype[n.types.BOX | n.types.HEIGHTFIELD] = u.prototype.boxHeightfield = function(t, e, o, i, n, s, r, a) {
                            t.convexPolyhedronRepresentation.material = t.material, t.convexPolyhedronRepresentation.collisionResponse = t.collisionResponse, this.convexHeightfield(t.convexPolyhedronRepresentation, e, o, i, n, s, r, a)
                        };
                        var tE = new r,
                            tA = new r,
                            tS = [0];
                        u.prototype[n.types.CONVEXPOLYHEDRON | n.types.HEIGHTFIELD] = u.prototype.convexHeightfield = function(t, e, o, i, n, s, r, l) {
                            var h = e.data,
                                p = e.elementSize,
                                c = t.boundingSphereRadius;
                            a.pointToLocalFrame(i, s, o, tE);
                            var u = Math.floor((tE.x - c) / p) - 1,
                                d = Math.ceil((tE.x + c) / p) + 1,
                                v = Math.floor((tE.y - c) / p) - 1,
                                y = Math.ceil((tE.y + c) / p) + 1;
                            if (!(d < 0) && !(y < 0) && !(u > h.length) && !(v > h[0].length)) {
                                u < 0 && (u = 0), d < 0 && (d = 0), v < 0 && (v = 0), y < 0 && (y = 0), u >= h.length && (u = h.length - 1), d >= h.length && (d = h.length - 1), y >= h[0].length && (y = h[0].length - 1), v >= h[0].length && (v = h[0].length - 1);
                                var f = [];
                                e.getRectMinMax(u, v, d, y, f);
                                var m = f[0],
                                    w = f[1];
                                if (!(tE.z - c > w) && !(tE.z + c < m))
                                    for (var x = u; x < d; x++)
                                        for (var g = v; g < y; g++) e.getConvexTrianglePillar(x, g, !1), a.pointToWorldFrame(i, s, e.pillarOffset, tA), o.distanceTo(tA) < e.pillarConvex.boundingSphereRadius + t.boundingSphereRadius && this.convexConvex(t, e.pillarConvex, o, tA, n, s, r, l, null, null, tS, null), e.getConvexTrianglePillar(x, g, !0), a.pointToWorldFrame(i, s, e.pillarOffset, tA), o.distanceTo(tA) < e.pillarConvex.boundingSphereRadius + t.boundingSphereRadius && this.convexConvex(t, e.pillarConvex, o, tA, n, s, r, l, null, null, tS, null)
                            }
                        };
                        var tC = new r,
                            tz = new r;
                        u.prototype[n.types.SPHERE | n.types.HEIGHTFIELD] = u.prototype.sphereHeightfield = function(t, e, o, i, n, s, r, l) {
                            var h = e.data,
                                p = t.radius,
                                c = e.elementSize;
                            a.pointToLocalFrame(i, s, o, tC);
                            var u = Math.floor((tC.x - p) / c) - 1,
                                d = Math.ceil((tC.x + p) / c) + 1,
                                v = Math.floor((tC.y - p) / c) - 1,
                                y = Math.ceil((tC.y + p) / c) + 1;
                            if (!(d < 0) && !(y < 0) && !(u > h.length) && !(y > h[0].length)) {
                                u < 0 && (u = 0), d < 0 && (d = 0), v < 0 && (v = 0), y < 0 && (y = 0), u >= h.length && (u = h.length - 1), d >= h.length && (d = h.length - 1), y >= h[0].length && (y = h[0].length - 1), v >= h[0].length && (v = h[0].length - 1);
                                var f = [];
                                e.getRectMinMax(u, v, d, y, f);
                                var m = f[0],
                                    w = f[1];
                                if (!(tC.z - p > w) && !(tC.z + p < m))
                                    for (var x = this.result, g = u; g < d; g++)
                                        for (var b = v; b < y; b++) {
                                            var B = x.length;
                                            if (e.getConvexTrianglePillar(g, b, !1), a.pointToWorldFrame(i, s, e.pillarOffset, tz), o.distanceTo(tz) < e.pillarConvex.boundingSphereRadius + t.boundingSphereRadius && this.sphereConvex(t, e.pillarConvex, o, tz, n, s, r, l), e.getConvexTrianglePillar(g, b, !0), a.pointToWorldFrame(i, s, e.pillarOffset, tz), o.distanceTo(tz) < e.pillarConvex.boundingSphereRadius + t.boundingSphereRadius && this.sphereConvex(t, e.pillarConvex, o, tz, n, s, r, l), x.length - B > 2) return
                                        }
                            }
                        }
                    }, {
                        "../collision/AABB": 3,
                        "../collision/Ray": 9,
                        "../equations/ContactEquation": 19,
                        "../equations/FrictionEquation": 21,
                        "../math/Quaternion": 28,
                        "../math/Transform": 29,
                        "../math/Vec3": 30,
                        "../shapes/ConvexPolyhedron": 38,
                        "../shapes/Shape": 43,
                        "../solver/Solver": 47,
                        "../utils/Vec3Pool": 54
                    }],
                    56: [function(t, e, o) {
                        e.exports = w;
                        var i = t("../shapes/Shape"),
                            n = t("../math/Vec3"),
                            s = t("../math/Quaternion"),
                            r = t("../solver/GSSolver");
                        t("../utils/Vec3Pool"), t("../equations/ContactEquation"), t("../equations/FrictionEquation");
                        var a = t("./Narrowphase"),
                            l = t("../utils/EventTarget"),
                            h = t("../collision/ArrayCollisionMatrix"),
                            p = t("../material/Material"),
                            c = t("../material/ContactMaterial"),
                            u = t("../objects/Body"),
                            d = t("../utils/TupleDictionary"),
                            v = t("../collision/RaycastResult"),
                            y = t("../collision/AABB"),
                            f = t("../collision/Ray"),
                            m = t("../collision/NaiveBroadphase");

                        function w() {
                            l.apply(this), this.dt = -1, this.allowSleep = !1, this.contacts = [], this.frictionEquations = [], this.quatNormalizeSkip = 0, this.quatNormalizeFast = !1, this.time = 0, this.stepnumber = 0, this.default_dt = 1 / 60, this.nextId = 0, this.gravity = new n, this.broadphase = new m, this.bodies = [], this.solver = new r, this.constraints = [], this.narrowphase = new a(this), this.collisionMatrix = new h, this.collisionMatrixPrevious = new h, this.materials = [], this.contactmaterials = [], this.contactMaterialTable = new d, this.defaultMaterial = new p("default"), this.defaultContactMaterial = new c(this.defaultMaterial, this.defaultMaterial, {
                                friction: .3,
                                restitution: 0
                            }), this.doProfiling = !1, this.profile = {
                                solve: 0,
                                makeContactConstraints: 0,
                                broadphase: 0,
                                integrate: 0,
                                narrowphase: 0
                            }, this.subsystems = [], this.addBodyEvent = {
                                type: "addBody",
                                body: null
                            }, this.removeBodyEvent = {
                                type: "removeBody",
                                body: null
                            }
                        }
                        w.prototype = new l, new y;
                        var x = new f;
                        if (w.prototype.getContactMaterial = function(t, e) {
                                return this.contactMaterialTable.get(t.id, e.id)
                            }, w.prototype.numObjects = function() {
                                return this.bodies.length
                            }, w.prototype.collisionMatrixTick = function() {
                                var t = this.collisionMatrixPrevious;
                                this.collisionMatrixPrevious = this.collisionMatrix, this.collisionMatrix = t, this.collisionMatrix.reset()
                            }, w.prototype.add = w.prototype.addBody = function(t) {
                                -1 === this.bodies.indexOf(t) && (t.index = this.bodies.length, this.bodies.push(t), t.world = this, t.initPosition.copy(t.position), t.initVelocity.copy(t.velocity), t.timeLastSleepy = this.time, t instanceof u && (t.initAngularVelocity.copy(t.angularVelocity), t.initQuaternion.copy(t.quaternion)), this.collisionMatrix.setNumObjects(this.bodies.length), this.addBodyEvent.body = t, this.dispatchEvent(this.addBodyEvent))
                            }, w.prototype.addConstraint = function(t) {
                                this.constraints.push(t)
                            }, w.prototype.removeConstraint = function(t) {
                                var e = this.constraints.indexOf(t); - 1 !== e && this.constraints.splice(e, 1)
                            }, w.prototype.rayTest = function(t, e, o) {
                                o instanceof v ? this.raycastClosest(t, e, {
                                    skipBackfaces: !0
                                }, o) : this.raycastAll(t, e, {
                                    skipBackfaces: !0
                                }, o)
                            }, w.prototype.raycastAll = function(t, e, o, i) {
                                return o.mode = f.ALL, o.from = t, o.to = e, o.callback = i, x.intersectWorld(this, o)
                            }, w.prototype.raycastAny = function(t, e, o, i) {
                                return o.mode = f.ANY, o.from = t, o.to = e, o.result = i, x.intersectWorld(this, o)
                            }, w.prototype.raycastClosest = function(t, e, o, i) {
                                return o.mode = f.CLOSEST, o.from = t, o.to = e, o.result = i, x.intersectWorld(this, o)
                            }, w.prototype.remove = function(t) {
                                t.world = null;
                                var e = this.bodies.length - 1,
                                    o = this.bodies,
                                    i = o.indexOf(t);
                                if (-1 !== i) {
                                    o.splice(i, 1);
                                    for (var n = 0; n !== o.length; n++) o[n].index = n;
                                    this.collisionMatrix.setNumObjects(e), this.removeBodyEvent.body = t, this.dispatchEvent(this.removeBodyEvent)
                                }
                            }, w.prototype.removeBody = w.prototype.remove, w.prototype.addMaterial = function(t) {
                                this.materials.push(t)
                            }, w.prototype.addContactMaterial = function(t) {
                                this.contactmaterials.push(t), this.contactMaterialTable.set(t.materials[0].id, t.materials[1].id, t)
                            }, "undefined" == typeof performance && (performance = {}), !performance.now) {
                            var g = Date.now();
                            performance.timing && performance.timing.navigationStart && (g = performance.timing.navigationStart), performance.now = function() {
                                return Date.now() - g
                            }
                        }
                        var b = new n;
                        w.prototype.step = function(t, e, o) {
                            if (o = o || 10, 0 === (e = e || 0)) this.internalStep(t), this.time += t;
                            else {
                                var i = Math.floor((this.time + e) / t) - Math.floor(this.time / t);
                                i = Math.min(i, o);
                                for (var n = performance.now(), s = 0; s !== i && (this.internalStep(t), !(performance.now() - n > 1e3 * t)); s++);
                                this.time += e;
                                for (var r = this.time % t / t, a = this.bodies, l = 0; l !== a.length; l++) {
                                    var h = a[l];
                                    h.type !== u.STATIC && h.sleepState !== u.SLEEPING ? (h.position.vsub(h.previousPosition, b), b.scale(r, b), h.position.vadd(b, h.interpolatedPosition)) : (h.interpolatedPosition.copy(h.position), h.interpolatedQuaternion.copy(h.quaternion))
                                }
                            }
                        };
                        var B = {
                                type: "postStep"
                            },
                            E = {
                                type: "preStep"
                            },
                            A = {
                                type: "collide",
                                body: null,
                                contact: null
                            },
                            S = [],
                            C = [],
                            z = [],
                            q = [],
                            R = (new n, new n, new n, new n, new n, new n, new n, new n, new n, new s, new s),
                            M = new s,
                            P = new n;
                        w.prototype.internalStep = function(t) {
                            this.dt = t;
                            var e, o = this.contacts,
                                n = this.numObjects(),
                                s = this.bodies,
                                r = this.solver,
                                a = this.gravity,
                                l = this.doProfiling,
                                h = this.profile,
                                p = u.DYNAMIC,
                                c = this.constraints,
                                d = (a.norm(), a.x),
                                v = a.y,
                                y = a.z,
                                f = 0;
                            for (l && (e = performance.now()), f = 0; f !== n; f++) {
                                var m = s[f];
                                if (m.type & p) {
                                    var w = m.force,
                                        x = m.mass;
                                    w.x += x * d, w.y += x * v, w.z += x * y
                                }
                            }
                            for (var f = 0, g = this.subsystems.length; f !== g; f++) this.subsystems[f].update();
                            l && (e = performance.now()), z.length = 0, q.length = 0, this.broadphase.collisionPairs(this, z, q), l && (h.broadphase = performance.now() - e);
                            var b = c.length;
                            for (f = 0; f !== b; f++) {
                                var F = c[f];
                                if (!F.collideConnected)
                                    for (var V = z.length - 1; V >= 0; V -= 1)(F.bodyA === z[V] && F.bodyB === q[V] || F.bodyB === z[V] && F.bodyA === q[V]) && (z.splice(V, 1), q.splice(V, 1))
                            }
                            this.collisionMatrixTick(), l && (e = performance.now());
                            var T = o.length;
                            for (f = 0; f !== T; f++) S.push(o[f]);
                            o.length = 0;
                            var I = this.frictionEquations.length;
                            for (f = 0; f !== I; f++) C.push(this.frictionEquations[f]);
                            this.frictionEquations.length = 0, this.narrowphase.getContacts(z, q, this, o, S, this.frictionEquations, C), l && (h.narrowphase = performance.now() - e), l && (e = performance.now());
                            for (var f = 0; f < this.frictionEquations.length; f++) r.addEquation(this.frictionEquations[f]);
                            for (var N = o.length, W = 0; W !== N; W++) {
                                var F = o[W],
                                    m = F.bi,
                                    L = F.bj;
                                F.si, F.sj, (m.material && L.material && this.getContactMaterial(m.material, L.material) || this.defaultContactMaterial).friction, m.material && L.material && (m.material.friction >= 0 && L.material.friction >= 0 && (m.material.friction, L.material.friction), m.material.restitution >= 0 && L.material.restitution >= 0 && (F.restitution = m.material.restitution * L.material.restitution)), r.addEquation(F), m.allowSleep && m.type === u.DYNAMIC && m.sleepState === u.SLEEPING && L.sleepState === u.AWAKE && L.type !== u.STATIC && L.velocity.norm2() + L.angularVelocity.norm2() >= 2 * Math.pow(L.sleepSpeedLimit, 2) && (m._wakeUpAfterNarrowphase = !0), L.allowSleep && L.type === u.DYNAMIC && L.sleepState === u.SLEEPING && m.sleepState === u.AWAKE && m.type !== u.STATIC && m.velocity.norm2() + m.angularVelocity.norm2() >= 2 * Math.pow(m.sleepSpeedLimit, 2) && (L._wakeUpAfterNarrowphase = !0), this.collisionMatrix.set(m, L, !0), this.collisionMatrixPrevious.get(m, L) || (A.body = L, A.contact = F, m.dispatchEvent(A), A.body = m, L.dispatchEvent(A))
                            }
                            for (l && (h.makeContactConstraints = performance.now() - e, e = performance.now()), f = 0; f !== n; f++) {
                                var m = s[f];
                                m._wakeUpAfterNarrowphase && (m.wakeUp(), m._wakeUpAfterNarrowphase = !1)
                            }
                            var b = c.length;
                            for (f = 0; f !== b; f++) {
                                var F = c[f];
                                F.update();
                                for (var V = 0, j = F.equations.length; V !== j; V++) {
                                    var O = F.equations[V];
                                    r.addEquation(O)
                                }
                            }
                            r.solve(t, this), l && (h.solve = performance.now() - e), r.removeAllEquations();
                            var k = Math.pow;
                            for (f = 0; f !== n; f++) {
                                var m = s[f];
                                if (m.type & p) {
                                    var _ = k(1 - m.linearDamping, t),
                                        U = m.velocity;
                                    U.mult(_, U);
                                    var H = m.angularVelocity;
                                    if (H) {
                                        var D = k(1 - m.angularDamping, t);
                                        H.mult(D, H)
                                    }
                                }
                            }
                            for (this.dispatchEvent(E), f = 0; f !== n; f++) {
                                var m = s[f];
                                m.preStep && m.preStep.call(m)
                            }
                            l && (e = performance.now());
                            var X = this.stepnumber,
                                G = u.DYNAMIC | u.KINEMATIC,
                                Y = X % (this.quatNormalizeSkip + 1) == 0,
                                Q = this.quatNormalizeFast,
                                Z = .5 * t;
                            for (i.types.PLANE, i.types.CONVEXPOLYHEDRON, f = 0; f !== n; f++) {
                                var K = s[f],
                                    J = K.force,
                                    $ = K.torque;
                                if (K.type & G && K.sleepState !== u.SLEEPING) {
                                    var tt = K.velocity,
                                        te = K.angularVelocity,
                                        to = K.position,
                                        ti = K.quaternion,
                                        tn = K.invMass,
                                        ts = K.invInertiaWorld;
                                    tt.x += J.x * tn * t, tt.y += J.y * tn * t, tt.z += J.z * tn * t, K.angularVelocity && (ts.vmult($, P), P.mult(t, P), P.vadd(te, te)), to.x += tt.x * t, to.y += tt.y * t, to.z += tt.z * t, K.angularVelocity && (R.set(te.x, te.y, te.z, 0), R.mult(ti, M), ti.x += Z * M.x, ti.y += Z * M.y, ti.z += Z * M.z, ti.w += Z * M.w, Y && (Q ? ti.normalizeFast() : ti.normalize())), K.aabb && (K.aabbNeedsUpdate = !0), K.updateInertiaWorld && K.updateInertiaWorld()
                                }
                            }
                            for (this.clearForces(), this.broadphase.dirty = !0, l && (h.integrate = performance.now() - e), this.time += t, this.stepnumber += 1, this.dispatchEvent(B), f = 0; f !== n; f++) {
                                var m = s[f],
                                    tr = m.postStep;
                                tr && tr.call(m)
                            }
                            if (this.allowSleep)
                                for (f = 0; f !== n; f++) s[f].sleepTick(this.time)
                        }, w.prototype.clearForces = function() {
                            for (var t = this.bodies, e = t.length, o = 0; o !== e; o++) {
                                var i = t[o];
                                i.force, i.torque, i.force.set(0, 0, 0), i.torque.set(0, 0, 0)
                            }
                        }
                    }, {
                        "../collision/AABB": 3,
                        "../collision/ArrayCollisionMatrix": 4,
                        "../collision/NaiveBroadphase": 7,
                        "../collision/Ray": 9,
                        "../collision/RaycastResult": 10,
                        "../equations/ContactEquation": 19,
                        "../equations/FrictionEquation": 21,
                        "../material/ContactMaterial": 24,
                        "../material/Material": 25,
                        "../math/Quaternion": 28,
                        "../math/Vec3": 30,
                        "../objects/Body": 31,
                        "../shapes/Shape": 43,
                        "../solver/GSSolver": 46,
                        "../utils/EventTarget": 49,
                        "../utils/TupleDictionary": 52,
                        "../utils/Vec3Pool": 54,
                        "./Narrowphase": 55
                    }]
                }, {}, [2])(2)
            }, t.exports = e()
        }
    }
]);