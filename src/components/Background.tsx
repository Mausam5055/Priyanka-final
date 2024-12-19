import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const Background = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Initialize Three.js scene with better performance settings
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true,
      powerPreference: "high-performance"
    });
    
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Create Earth with optimized geometry
    const earthGeometry = new THREE.SphereGeometry(3, 24, 24); // Reduced segments for better performance
    const earthMaterial = new THREE.MeshPhongMaterial({
      color: 0x00ff99,
      transparent: true,
      opacity: 0.3,
      wireframe: true,
    });
    const earth = new THREE.Mesh(earthGeometry, earthMaterial);

    // Create geometric shapes with optimized geometries
    const shapes: THREE.Mesh[] = [];
    const geometries = [
      new THREE.IcosahedronGeometry(1),
      new THREE.OctahedronGeometry(1),
      new THREE.TetrahedronGeometry(1),
    ];

    // Create fewer shapes for better performance
    for (let i = 0; i < 10; i++) {
      const geometry = geometries[Math.floor(Math.random() * geometries.length)];
      const material = new THREE.MeshPhongMaterial({
        color: new THREE.Color(
          `hsl(${Math.random() * 360}, 50%, 50%)`
        ),
        transparent: true,
        opacity: 0.2,
        wireframe: true,
      });
      
      const shape = new THREE.Mesh(geometry, material);
      shape.position.set(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20
      );
      shape.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      shapes.push(shape);
      scene.add(shape);
    }

    // Add lights
    const ambientLight = new THREE.AmbientLight(0x404040);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1);

    scene.add(earth);
    scene.add(ambientLight);
    scene.add(directionalLight);

    camera.position.z = 10;

    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      
      earth.rotation.x += 0.001;
      earth.rotation.y += 0.001;

      shapes.forEach((shape, i) => {
        shape.rotation.x += 0.002 * (i % 2 ? 1 : -1);
        shape.rotation.y += 0.003 * (i % 2 ? 1 : -1);
        shape.position.y += Math.sin(Date.now() * 0.001 + i) * 0.01;
      });

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 -z-10" />;
};