import React, { useEffect, useState, useRef } from 'react';

import { css } from 'styled-components';

export function SlideUp({ children }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return <div className={`${isVisible ? 'slide-up show' : 'slide-up'}`}>{children}</div>;
}

export function SlideDown({ children }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return <div className={`${isVisible ? 'slide-down show' : 'slide-down'}`}>{children}</div>;
}

export function SlideLeft({ children }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.5 } // Adjust the threshold value as needed
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} className={`slide-left ${isVisible ? "show" : ""}`}>
      {children}
    </div>
  );
}

export function SlideRight({ children }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.5 } // Adjust the threshold value as needed
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} className={`slide-right ${isVisible ? "show" : ""}`}>
      {children}
    </div>
  );
}



export const SlideStyles = css`
  /* SlideUp Animation */
  .slide-up {
    opacity: 0;
    transform: translateY(50px);
    transition: opacity 0.5s ease, transform 1s ease;
  }

  .slide-up.show {
    opacity: 1;
    transform: translateY(0);
  }

  /* SlideDown Animation */
  .slide-down {
    opacity: 0;
    transform: translateY(-50px);
    transition: opacity 0.5s ease, transform 1s ease;
  }

  .slide-down.show {
    opacity: 1;
    transform: translateY(0);
  }

  /* SlideLeft Animation */
  .slide-left {
    opacity: 0;
    transform: translateX(50px);
    transition: opacity 0.5s ease, transform 1s ease;
}

.slide-left.show {
  opacity: 1;
  transform: translateX(0);
}

/* SlideRight Animation */
.slide-right {
  opacity: 0;
  transform: translateX(-50px);
  transition: opacity 0.5s ease, transform 1s ease;
}

.slide-right.show {
  opacity: 1;
  transform: translateX(0);
}

`
