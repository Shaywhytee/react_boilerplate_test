import React, { useEffect, useRef } from 'react';

function FadeInView({ children }) {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    element.classList.add('fade-in');
  }, []);

  return (
    <div ref={elementRef} className="fade_container">
      {children}
    </div>
  );
}

export default FadeInView;
