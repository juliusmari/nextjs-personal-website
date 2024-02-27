"use client";

import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Writer = () => {
  return (
    <Typewriter
      loop
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1000}
      words={[
        "Make a difference.",
        "Pursue your passions.",
        "Unleash your potential.",
      ]}
    />
  );
};

export default Writer;
