import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const NebulaBackground: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const container = containerRef.current;
        const width = container.clientWidth;
        const height = container.clientHeight;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        container.appendChild(renderer.domElement);

        // Particle System (Starfield)
        const particlesCount = 5000;
        const geo = new THREE.BufferGeometry();
        const pos = new Float32Array(particlesCount * 3);
        const colors = new Float32Array(particlesCount * 3);

        for (let i = 0; i < particlesCount * 3; i += 3) {
            pos[i] = (Math.random() - 0.5) * 20;
            pos[i + 1] = (Math.random() - 0.5) * 20;
            pos[i + 2] = (Math.random() - 0.5) * 20;

            colors[i] = 0.2 + Math.random() * 0.1;
            colors[i + 1] = 0.4 + Math.random() * 0.2;
            colors[i + 2] = 0.8 + Math.random() * 0.2;
        }

        geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
        geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        const mat = new THREE.PointsMaterial({
            size: 0.015,
            vertexColors: true,
            transparent: true,
            opacity: 0.6,
            blending: THREE.AdditiveBlending
        });

        const points = new THREE.Points(geo, mat);
        scene.add(points);

        camera.position.z = 5;

        // Mouse interaction relative to container
        let mouseX = 0, mouseY = 0;
        const onMove = (e: MouseEvent) => {
            const rect = container.getBoundingClientRect();
            mouseX = ((e.clientX - rect.left) / width - 0.5);
            mouseY = ((e.clientY - rect.top) / height - 0.5);
        };
        window.addEventListener('mousemove', onMove);

        const animate = () => {
            requestAnimationFrame(animate);
            points.rotation.y += 0.0004;
            points.rotation.x += 0.0002;
            points.position.x += (mouseX * 0.5 - points.position.x) * 0.03;
            points.position.y += (-mouseY * 0.5 - points.position.y) * 0.03;
            renderer.render(scene, camera);
        };
        animate();

        const handleResize = () => {
            const w = container.clientWidth;
            const h = container.clientHeight;
            camera.aspect = w / h;
            camera.updateProjectionMatrix();
            renderer.setSize(w, h);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('mousemove', onMove);
            window.removeEventListener('resize', handleResize);
            if (container.contains(renderer.domElement)) {
                container.removeChild(renderer.domElement);
            }
            geo.dispose();
            mat.dispose();
            renderer.dispose();
        };
    }, []);

    return (
        <div ref={containerRef} className="absolute inset-0 z-0 pointer-events-none opacity-50" />
    );
};

export default NebulaBackground;
