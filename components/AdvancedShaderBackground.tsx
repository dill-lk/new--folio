'use client';

import { useEffect, useRef } from 'react';

export default function AdvancedShaderBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
    if (!gl) {
      console.error('WebGL not supported');
      return;
    }

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Advanced Fragment Shader with Raymarching
    const fragmentShader = `
      precision highp float;
      
      uniform vec2 u_resolution;
      uniform float u_time;
      uniform vec2 u_mouse;
      
      #define MAX_STEPS 100
      #define MAX_DIST 100.0
      #define SURF_DIST 0.01
      
      // Smooth minimum for blending shapes
      float smin(float a, float b, float k) {
        float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
        return mix(b, a, h) - k * h * (1.0 - h);
      }
      
      // Distance to sphere
      float sdSphere(vec3 p, float r) {
        return length(p) - r;
      }
      
      // Distance to box
      float sdBox(vec3 p, vec3 b) {
        vec3 q = abs(p) - b;
        return length(max(q, 0.0)) + min(max(q.x, max(q.y, q.z)), 0.0);
      }
      
      // Rotation matrix
      mat2 rot(float a) {
        float s = sin(a);
        float c = cos(a);
        return mat2(c, -s, s, c);
      }
      
      // Scene distance function
      float getDist(vec3 p) {
        // Animated parameters
        float t = u_time * 0.5;
        
        // Rotating sphere
        vec3 p1 = p;
        p1.xz *= rot(t);
        float sphere = sdSphere(p1 - vec3(0, sin(t) * 0.5, 0), 0.8);
        
        // Rotating box
        vec3 p2 = p;
        p2.xy *= rot(t * 0.7);
        p2.xz *= rot(t * 0.5);
        float box = sdBox(p2 - vec3(sin(t * 1.5) * 1.5, 0, 2), vec3(0.5));
        
        // Torus
        vec3 p3 = p - vec3(0, 0, 4);
        p3.xy *= rot(t);
        vec2 torus = vec2(length(p3.xz) - 1.0, p3.y);
        float torusShape = length(torus) - 0.3;
        
        // Mouse-influenced sphere
        vec2 mouseNorm = (u_mouse / u_resolution - 0.5) * 4.0;
        float mouseSphere = sdSphere(p - vec3(mouseNorm, 0), 0.5);
        
        // Smooth blend all shapes
        float d = smin(sphere, box, 0.5);
        d = smin(d, torusShape, 0.5);
        d = smin(d, mouseSphere, 0.3);
        
        // Ground plane
        float ground = p.y + 1.5;
        d = min(d, ground);
        
        return d;
      }
      
      // Raymarching
      float rayMarch(vec3 ro, vec3 rd) {
        float dO = 0.0;
        
        for(int i = 0; i < MAX_STEPS; i++) {
          vec3 p = ro + rd * dO;
          float dS = getDist(p);
          dO += dS;
          if(dO > MAX_DIST || dS < SURF_DIST) break;
        }
        
        return dO;
      }
      
      // Calculate normal
      vec3 getNormal(vec3 p) {
        float d = getDist(p);
        vec2 e = vec2(0.01, 0);
        
        vec3 n = d - vec3(
          getDist(p - e.xyy),
          getDist(p - e.yxy),
          getDist(p - e.yyx)
        );
        
        return normalize(n);
      }
      
      // Fractal noise
      float hash(vec2 p) {
        return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
      }
      
      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        
        float a = hash(i);
        float b = hash(i + vec2(1.0, 0.0));
        float c = hash(i + vec2(0.0, 1.0));
        float d = hash(i + vec2(1.0, 1.0));
        
        return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
      }
      
      float fbm(vec2 p) {
        float value = 0.0;
        float amplitude = 0.5;
        float frequency = 1.0;
        
        for(int i = 0; i < 5; i++) {
          value += amplitude * noise(p * frequency);
          amplitude *= 0.5;
          frequency *= 2.0;
        }
        
        return value;
      }
      
      void main() {
        vec2 uv = (gl_FragCoord.xy - 0.5 * u_resolution.xy) / u_resolution.y;
        vec3 col = vec3(0);
        
        // Camera setup
        vec3 ro = vec3(0, 0, -3);
        vec3 rd = normalize(vec3(uv, 1));
        
        // Raymarching
        float d = rayMarch(ro, rd);
        
        if(d < MAX_DIST) {
          vec3 p = ro + rd * d;
          vec3 n = getNormal(p);
          
          // Lighting
          vec3 lightPos = vec3(2, 5, -3);
          vec3 lightDir = normalize(lightPos - p);
          float diff = max(dot(n, lightDir), 0.0);
          
          // Ambient occlusion approximation
          float ao = 1.0 - (d / MAX_DIST);
          
          // Fresnel
          float fresnel = pow(1.0 - max(dot(-rd, n), 0.0), 3.0);
          
          // Combine lighting
          col = vec3(diff * ao);
          col += fresnel * 0.3;
          
          // Add noise texture
          float noiseVal = fbm(p.xy * 3.0 + u_time * 0.1);
          col *= 0.8 + noiseVal * 0.4;
        } else {
          // Background with gradient and noise
          float gradient = 1.0 - length(uv) * 0.3;
          float bg_noise = fbm(uv * 2.0 + u_time * 0.05);
          col = vec3(gradient * 0.1) + vec3(bg_noise * 0.05);
        }
        
        // Pixelation effect
        vec2 pixelSize = vec2(8.0, 8.0);
        vec2 pixelUV = floor(gl_FragCoord.xy / pixelSize) * pixelSize;
        col *= 0.9 + 0.2 * noise(pixelUV * 0.1);
        
        // Black and white with contrast
        float gray = dot(col, vec3(0.299, 0.587, 0.114));
        gray = pow(gray, 1.2); // Increase contrast
        col = vec3(gray);
        
        // Vignette
        float vignette = 1.0 - length(uv) * 0.3;
        col *= vignette;
        
        gl_FragColor = vec4(col, 1.0);
      }
    `;

    const vertexShader = `
      attribute vec4 a_position;
      void main() {
        gl_Position = a_position;
      }
    `;

    // Compile shader
    function createShader(gl: WebGLRenderingContext, type: number, source: string) {
      const shader = gl.createShader(type);
      if (!shader) return null;
      
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('Shader compile error:', gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      
      return shader;
    }

    // Create program
    const vShader = createShader(gl, gl.VERTEX_SHADER, vertexShader);
    const fShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShader);
    
    if (!vShader || !fShader) return;

    const program = gl.createProgram();
    if (!program) return;

    gl.attachShader(program, vShader);
    gl.attachShader(program, fShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Program link error:', gl.getProgramInfoLog(program));
      return;
    }

    // Setup geometry
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    const positions = new Float32Array([
      -1, -1,
      1, -1,
      -1, 1,
      1, 1,
    ]);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

    const positionLocation = gl.getAttribLocation(program, 'a_position');
    const resolutionLocation = gl.getUniformLocation(program, 'u_resolution');
    const timeLocation = gl.getUniformLocation(program, 'u_time');
    const mouseLocation = gl.getUniformLocation(program, 'u_mouse');

    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Render loop
    let startTime = Date.now();
    let animationId: number;

    const render = () => {
      const time = (Date.now() - startTime) / 1000;

      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.clearColor(0, 0, 0, 1);
      gl.clear(gl.COLOR_BUFFER_BIT);

      gl.useProgram(program);

      gl.enableVertexAttribArray(positionLocation);
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

      gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
      gl.uniform1f(timeLocation, time);
      gl.uniform2f(mouseLocation, mouseX, mouseY);

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

      animationId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10"
      style={{ imageRendering: 'pixelated' }}
    />
  );
}
