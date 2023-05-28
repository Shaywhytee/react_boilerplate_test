import React, { useEffect, useRef } from 'react';

function FadeOutView({ children }) {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    element.classList.add('fade-out');

    return () => {
      element.classList.remove('fade-out');
    };
  }, []);

  return <div ref={elementRef}>{children}</div>;
}

export default FadeOutView;
