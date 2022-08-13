import React, { useRef } from 'react';


const useRenderCounter = () => {
  const renderCount = useRef(0);
  renderCount.current = renderCount.current + 1;

    return (
      <p>{renderCount.current}</p>
    );

};

export default useRenderCounter;