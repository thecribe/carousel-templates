import React, { useState } from "react";

const Carousel = () => {
  const [output, setOutput] = useState(0);

  setTimeout(() => {
    let count = output + 1;
    if (count <= 10) {
      setOutput(count);
    } else {
      setOutput(0);
    }
  }, 1000);

  return <div>Carousel</div>;
};

export default Carousel;
