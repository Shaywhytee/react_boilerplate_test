import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

FadeOutView.propTypes = {
  children: PropTypes.node.isRequired,
};

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
