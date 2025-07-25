import React, { useRef, useEffect } from 'react';

const BackgroundCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();

    const blobs = [
      {
        x: canvas.width / 3,
        y: canvas.height / 2,
        r: 250,
        dx: 1.2,
        dy: 1.0,
        color: 'rgba(185, 28, 80, 0.6)' // soft red glow
      },
      {
        x: (canvas.width / 3) * 2,
        y: canvas.height / 2,
        r: 250,
        dx: -1.1,
        dy: 1.1,
        color: 'rgba(88, 105, 118, 0.6)' // soft blue-gray glow
      }
    ];

    const getTransparentVersion = (color: string): string => {
      return color.replace(/rgba\((\d+), (\d+), (\d+), [^)]+\)/, 'rgba($1, $2, $3, 0)');
    };

    const detectAndResolveCollision = (a: typeof blobs[0], b: typeof blobs[0]) => {
      const dx = b.x - a.x;
      const dy = b.y - a.y;
      const dist = Math.hypot(dx, dy);
      const minDist = a.r + b.r;

      if (dist < minDist) {
        const overlap = 0.5 * (minDist - dist);
        const nx = dx / dist;
        const ny = dy / dist;

        a.x -= overlap * nx;
        a.y -= overlap * ny;
        b.x += overlap * nx;
        b.y += overlap * ny;

        const dvx = b.dx - a.dx;
        const dvy = b.dy - a.dy;
        const impactSpeed = dvx * nx + dvy * ny;

        if (impactSpeed < 0) {
          const impulse = 2 * impactSpeed / 2;
          a.dx += impulse * nx;
          a.dy += impulse * ny;
          b.dx -= impulse * nx;
          b.dy -= impulse * ny;
        }
      }
    };

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      blobs.forEach(blob => {
        blob.x += blob.dx;
        blob.y += blob.dy;

        if (blob.x - blob.r <= 0 || blob.x + blob.r >= canvas.width) {
          blob.dx *= -1;
          blob.x = Math.max(blob.r, Math.min(canvas.width - blob.r, blob.x));
        }
        if (blob.y - blob.r <= 0 || blob.y + blob.r >= canvas.height) {
          blob.dy *= -1;
          blob.y = Math.max(blob.r, Math.min(canvas.height - blob.r, blob.y));
        }
      });

      for (let i = 0; i < blobs.length; i++) {
        for (let j = i + 1; j < blobs.length; j++) {
          detectAndResolveCollision(blobs[i], blobs[j]);
        }
      }

      blobs.forEach(blob => {
        const gradient = ctx.createRadialGradient(blob.x, blob.y, 0, blob.x, blob.y, blob.r);
        const transparentColor = getTransparentVersion(blob.color);

        gradient.addColorStop(0, blob.color);
        gradient.addColorStop(0.7, transparentColor);
        gradient.addColorStop(1, 'transparent');

        ctx.fillStyle = gradient;
        ctx.fillRect(blob.x - blob.r, blob.y - blob.r, blob.r * 2, blob.r * 2);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();
    window.addEventListener('resize', resizeCanvas);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0
      }}
    />
  );
};

export default BackgroundCanvas;