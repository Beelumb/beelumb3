import { useEffect, useRef, useState } from "react";

function useIsVisible(ref) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      { threshold: 1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);

  return isIntersecting;
}

export default function AnimatedCounter({
  start = 0,
  end = 100,
  duration = 2000,
  className = "",
  percent,
  p,
  style,
}) {
  const [count, setCount] = useState(start);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef();
  const isVisible = useIsVisible(ref);
  const increment = (end - start) / (duration / 16);

  useEffect(() => {
    if (!isVisible || hasAnimated) return;
    let current = start;
    setCount(start);
    const step = () => {
      current += increment;
      if (
        (increment > 0 && current >= end) ||
        (increment < 0 && current <= end)
      ) {
        setCount(end);
        setHasAnimated(true);
        return;
      }
      setCount(Math.floor(current));
      requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
    // eslint-disable-next-line
  }, [isVisible, hasAnimated, start, end, duration]);

  return (
    <div className={`animated-counter ${className}`} style={style}>
      <span ref={ref} className={className}>
        + {count} {percent}
      </span>
      <p className="purple-p" style={{ fontSize: "1.2rem" }}>
        {p}
      </p>
    </div>
  );
}
