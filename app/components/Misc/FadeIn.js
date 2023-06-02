import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

FadeInView.propTypes = {
  children: PropTypes.node.isRequired,
};

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
