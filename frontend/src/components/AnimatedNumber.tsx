import React, { useState, useEffect, useRef, useCallback } from "react";
import styled from "styled-components";

// Define keyframes and styled components for the AnimatedNumber
const NumberContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0;

  &::before {
    content: "";
    position: absolute;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: radial-gradient(
      circle at center,
      rgba(218, 165, 32, 0.06) 0%,
      transparent 70%
    );
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  ${(props) => props.theme.hoverSelector}:hover &::before {
    opacity: 1;
  }
`;

const AgencyCount = styled.div`
  font-size: 3.5rem;
  font-weight: 700;
  color: transparent;
  margin: 1rem 0;
  font-family: "ProximaNovaSemiBold", sans-serif;
  line-height: 1;
  background: linear-gradient(135deg, #daa520 20%, #f5d76e 80%);
  background-clip: text;
  -webkit-background-clip: text;
  position: relative;
  text-shadow: 0 0 10px rgba(218, 165, 32, 0.3),
    0 0 30px rgba(218, 165, 32, 0.1);
  opacity: 0;
  transform: perspective(1000px) translateY(20px) rotateX(20deg);
  animation: numberEntrance 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  animation-delay: 0s;
  will-change: transform, opacity;
  display: inline-block;
  text-align: center;
  width: 100%;
  animation-fill-mode: forwards;

  @keyframes numberEntrance {
    0% {
      opacity: 0;
      transform: perspective(1000px) translateY(50px) rotateX(20deg);
      filter: blur(8px);
    }
    50% {
      opacity: 0.8;
      filter: blur(4px);
    }
    100% {
      opacity: 1;
      transform: perspective(1000px) translateY(0) rotateX(0);
      filter: blur(0);
    }
  }

  &.glitching {
    animation: none;
    opacity: 1;
    transform: none;
    filter: none;
    text-shadow: 0 0 10px rgba(218, 165, 32, 0.8),
      0 0 20px rgba(218, 165, 32, 0.4), 0 0 30px rgba(218, 165, 32, 0.2);
  }
`;

const GlitchLayer = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transform: translate3d(0, 0, 0);
  background: linear-gradient(135deg, #daa520 20%, #f5d76e 80%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  pointer-events: none;

  &.active {
    opacity: 0.8;
    animation: glitchAnimation 0.3s ease-in-out infinite alternate;
  }

  &:nth-child(2) {
    background: linear-gradient(135deg, #e5b833 20%, #f8df8b 80%);
    -webkit-background-clip: text;
    background-clip: text;

    &.active {
      animation-name: glitchAnimation2;
      animation-duration: 0.3s;
    }
  }

  &:nth-child(3) {
    background: linear-gradient(135deg, #b8860b 20%, #daa520 80%);
    -webkit-background-clip: text;
    background-clip: text;

    &.active {
      animation-name: glitchAnimation3;
      animation-duration: 0.3s;
    }
  }

  @keyframes glitchAnimation {
    0% {
      transform: translate3d(-3px, 1px, 0);
    }
    20% {
      transform: translate3d(2px, -2px, 0);
    }
    40% {
      transform: translate3d(0px, 1px, 0);
    }
    60% {
      transform: translate3d(-2px, 0px, 0);
    }
    80% {
      transform: translate3d(1px, -1px, 0);
    }
    100% {
      transform: translate3d(1px, 2px, 0);
    }
  }

  @keyframes glitchAnimation2 {
    0% {
      transform: translate3d(2px, -1px, 0);
    }
    25% {
      transform: translate3d(-3px, 2px, 0);
    }
    50% {
      transform: translate3d(1px, 1px, 0);
    }
    75% {
      transform: translate3d(0px, -2px, 0);
    }
    100% {
      transform: translate3d(-1px, 0px, 0);
    }
  }

  @keyframes glitchAnimation3 {
    0% {
      transform: translate3d(1px, 2px, 0);
    }
    33% {
      transform: translate3d(-2px, -1px, 0);
    }
    66% {
      transform: translate3d(1px, 0px, 0);
    }
    100% {
      transform: translate3d(0px, 1px, 0);
    }
  }
`;

// Initialize theme object with the hoverSelector
const theme = {
  hoverSelector: "div",
};

interface AnimatedNumberProps {
  value: string;
  index: number;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ value, index }) => {
  const [displayValue, setDisplayValue] = useState("");
  const [isGlitching, setIsGlitching] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);
  const nodeRef = useRef(null);
  const animationRunningRef = useRef(false);

  // Parse numeric value and suffix
  const getValueParts = useCallback(() => {
    if (typeof value === "string") {
      const match = value.match(/^([\d.]+)([MK]?)$/);
      if (match) {
        return {
          numericValue: match[1],
          suffix: match[2],
        };
      }
    }
    return {
      numericValue: value,
      suffix: "",
    };
  }, [value]);

  const { numericValue, suffix } = getValueParts();

  // Characters to use in the glitch effect
  const glitchChars = "0123456789$#@%&^*!?£€¥§~";

  // Generate a random character from our set
  const getRandomChar = () =>
    glitchChars[Math.floor(Math.random() * glitchChars.length)];

  // Generate a glitched version of the target value
  const generateGlitchedValue = useCallback(() => {
    let result = "";
    // Keep the original length to avoid layout shifts
    const padLength = numericValue.length;

    for (let i = 0; i < padLength; i++) {
      // The closer we get to the final reveal, the more likely to show the correct digit
      const correctProbability = isRevealed ? 0.9 : 0.3;
      if (Math.random() > correctProbability) {
        result += getRandomChar();
      } else {
        result += numericValue[i];
      }
    }
    return result + suffix;
  }, [numericValue, suffix, isRevealed]);

  useEffect(() => {
    // Prevent running animation if it's already in progress or has completed
    if (animationRunningRef.current) return;

    animationRunningRef.current = true;

    // Use a fixed delay for all animations instead of a staggered delay based on index
    const startDelay = 600; // Remove the index * 150 to make all animations start at the same time
    let glitchCount = 0;
    const maxGlitches = 15;

    const initialTimeout = setTimeout(() => {
      setIsGlitching(true);

      // Initial rapid glitch phase
      const randomChars = Array(numericValue.length)
        .fill(0)
        .map(() => getRandomChar())
        .join("");
      setDisplayValue(randomChars + suffix);

      // Create an emitter effect that will dispatch multiple glitch updates at fixed intervals
      const emitGlitchUpdate = () => {
        glitchCount++;

        // Progressive reveal logic
        if (glitchCount > maxGlitches * 0.6) {
          setIsRevealed(true);
        }

        if (glitchCount < maxGlitches) {
          // During active glitching, update with glitched value
          setDisplayValue(generateGlitchedValue());

          // Use fixed timing for more consistent duration across all animations
          const nextDelay = 80; // Fixed delay instead of random
          setTimeout(emitGlitchUpdate, nextDelay);
        } else {
          // Set the final value
          setDisplayValue(value);

          // Simply turn off glitching - that's it!
          setIsGlitching(false);
        }
      };

      // Start the glitch emitter
      setTimeout(emitGlitchUpdate, 100);
    }, startDelay);

    return () => {
      clearTimeout(initialTimeout);
      // Reset the animation running flag if component unmounts
      animationRunningRef.current = false;
    };
    // Use a more stable dependency array that won't trigger re-renders
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, numericValue.length, suffix]);

  return (
    <NumberContainer theme={theme}>
      <AgencyCount
        ref={nodeRef}
        data-value={value}
        className={isGlitching ? "glitching" : ""}
      >
        {displayValue}
        <GlitchLayer className={isGlitching ? "active" : ""}>
          {displayValue}
        </GlitchLayer>
        <GlitchLayer className={isGlitching ? "active" : ""}>
          {displayValue}
        </GlitchLayer>
      </AgencyCount>
    </NumberContainer>
  );
};

export default AnimatedNumber;
