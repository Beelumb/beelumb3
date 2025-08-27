import { useRef, useEffect, useState } from "react";


function FadeInUpOnScroll({ children, className = "", delay = 0 }) {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`fade-in-up${visible ? " visible" : ""} ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : undefined, }}
    >
      {children}
    </div>
  );
}

export default FadeInUpOnScroll;