import React from "react";
import styled from "styled-components";

const StatValue = styled.span`
  font-family: "ProximaNovaSemiBold", sans-serif;
  font-size: 2.75rem;
  font-weight: 700;
  color: transparent;
  background: linear-gradient(135deg, #b31942, #e63e6d);
  background-clip: text;
  -webkit-background-clip: text;
  margin-bottom: 0.375rem;
  letter-spacing: -0.02em;
  line-height: 1;
  opacity: 0;
  animation: simpleValueEntrance 1s ease-out forwards;
  animation-delay: 0.3s;
  position: relative;
  display: inline-block;
  text-align: center;
  width: 100%;

  @keyframes simpleValueEntrance {
    0% {
      opacity: 0;
      transform: translateY(10px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

interface AnimatedStatValueProps {
  value: string;
  index: number;
  isWords?: boolean;
}

const AnimatedStatValue: React.FC<AnimatedStatValueProps> = ({
  value,
  index,
  isWords = false,
}) => {
  // Format number with abbreviations for thousands (K) and millions (M)
  const formatNumberWithAbbreviation = (value: string) => {
    // Parse the number by removing commas
    const numValue = parseFloat(value.replace(/,/g, ""));

    if (numValue >= 1000000) {
      return (numValue / 1000000).toFixed(2) + "M";
    } else if (numValue >= 1000) {
      return (numValue / 1000).toFixed(2) + "K";
    } else {
      return numValue.toString();
    }
  };

  const displayValue = isWords ? formatNumberWithAbbreviation(value) : value;

  return (
    <div className="number-container">
      <StatValue>{displayValue}</StatValue>
    </div>
  );
};

export default AnimatedStatValue;
