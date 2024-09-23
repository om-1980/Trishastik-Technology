import { useEffect } from 'react';

const Particle2DAnimation = () => {
  useEffect(() => {
    const w = window.innerWidth,
      h = window.innerHeight,
      canvas = document.getElementById('particle-canvas') as HTMLCanvasElement,
      ctx = canvas?.getContext('2d'),
      rate = 60,
      arc = 100,
      size = 7,
      speed = 20,
      parts = new Array(arc).fill({}),
      colors = ['red', '#f57900', 'yellow', '#ce5c00', '#5c3566'];
    const mouse = { x: 0, y: 0 };
    let time: number;

    if (!canvas || !ctx) {
      console.error('Canvas or context not found');
      return;
    }

    canvas.setAttribute('width', w.toString());
    canvas.setAttribute('height', h.toString());

    function createParticles() {
      time = 0;
      for (let i = 0; i < arc; i++) {
        parts[i] = {
          x: Math.ceil(Math.random() * w),
          y: Math.ceil(Math.random() * h),
          toX: Math.random() * 5 - 1,
          toY: Math.random() * 2 - 1,
          c: colors[Math.floor(Math.random() * colors.length)],
          size: Math.random() * size,
        };
      }
    }

    function renderParticles() {
      if (!ctx) return; // Add null check for 'ctx'
      ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
      ctx.clearRect(0, 0, w, h);
      canvas.addEventListener('mousemove', MouseMove, false);
      for (let i = 0; i < arc; i++) {
        const li = parts[i];
        const distanceFactor = Math.max(Math.min(15 - DistanceBetween(mouse, parts[i]) / 10, 10), 1);
        ctx.beginPath();
        ctx.arc(li.x, li.y, li.size * distanceFactor, 0, Math.PI * 2, false);
        ctx.fillStyle = li.c;
        ctx.strokeStyle = li.c;
        if (i % 2 === 0) ctx.stroke();
        else ctx.fill();

        li.x = li.x + li.toX * (time * 0.05);
        li.y = li.y + li.toY * (time * 0.05);

        if (li.x > w) li.x = 0;
        if (li.y > h) li.y = 0;
        if (li.x < 0) li.x = w;
        if (li.y < 0) li.y = h;
      }
      if (time < speed) time++;
      setTimeout(renderParticles, 1000 / rate);
    }

    function MouseMove(e: MouseEvent) {
      mouse.x = e.layerX;
      mouse.y = e.layerY;
    }

    function DistanceBetween(p1: { x: number; y: number }, p2: { x: number; y: number }) {
      const dx = p2.x - p1.x;
      const dy = p2.y - p1.y;
      return Math.sqrt(dx * dx + dy * dy);
    }

    createParticles();
    renderParticles();
  }, []);

  return <canvas id="particle-canvas" className="absolute inset-0 bg-black w-full h-full"></canvas>;
};

export default Particle2DAnimation;
