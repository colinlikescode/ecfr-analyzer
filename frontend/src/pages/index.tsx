import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import styled, { createGlobalStyle, keyframes, css } from "styled-components";
import { departmentData, DepartmentData } from "../mock_data";
import Head from "next/head";
import { fetchAgencyExplanation } from "../apis/grokAgencyFrontendApi";
import { useApiConfigStore } from "../store/apiConfigStore";
import { useAgencyStore } from "../store/agencyStore";
import AnimatedNumber from "../components/AnimatedNumber";
import AnimatedStatValue from "../components/AnimatedStatValue";

// Global styles to ensure the dark background covers the entire page
const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    background: linear-gradient(135deg, #0a0e17 0%, #080e1d 50%, #0b1533 100%);
    color: #ffffff;
    font-family: 'ProximaNovaRegular', sans-serif;
    height: 100%;
    width: 100%;
    overflow-x: hidden;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-overflow-scrolling: touch; /* Smooth scrolling on iOS */
  }

  ::selection {
    background: rgba(218, 165, 32, 0.3);
    color: #ffffff;
  }

  * {
    box-sizing: border-box;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  /* Improve touch target sizes on mobile */
  @media (max-width: 768px) {
    button, a, input, textarea, select {
      min-height: 44px; /* Recommended minimum touch target size */
      font-size: 16px; /* Prevents iOS Safari from zooming in on inputs */
    }
    
    /* Prevent text from getting too small on mobile */
    p, li, span {
      font-size: 16px;
    }
    
    /* Fix common mobile tap delay */
    a, button, [role="button"], input, label, select, textarea {
      touch-action: manipulation;
    }
  }

  @keyframes gradientFlow {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @keyframes floatUp {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0);
    }
  }
  
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  
  @keyframes shimmer {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }

  @keyframes glitchAnimation {
    0% { transform: translate3d(-3px, 1px, 0); }
    20% { transform: translate3d(2px, -2px, 0); }
    40% { transform: translate3d(0px, 1px, 0); }
    60% { transform: translate3d(-2px, 0px, 0); }
    80% { transform: translate3d(1px, -1px, 0); }
    100% { transform: translate3d(1px, 2px, 0); }
  }

  @keyframes glitchAnimation2 {
    0% { transform: translate3d(2px, -1px, 0); }
    25% { transform: translate3d(-3px, 2px, 0); }
    50% { transform: translate3d(1px, 1px, 0); }
    75% { transform: translate3d(0px, -2px, 0); }
    100% { transform: translate3d(-1px, 0px, 0); }
  }

  @keyframes glitchAnimation3 {
    0% { transform: translate3d(1px, 2px, 0); }
    33% { transform: translate3d(-2px, -1px, 0); }
    66% { transform: translate3d(1px, 0px, 0); }
    100% { transform: translate3d(0px, 1px, 0); }
  }
`;

// Add a background animation component
const AnimatedBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    top: -10%;
    right: -10%;
    width: 120%;
    height: 120%;
    background: radial-gradient(
      ellipse at 80% 20%,
      rgba(16, 50, 120, 0.15) 0%,
      rgba(10, 14, 23, 0) 70%
    );
    opacity: 0.7;
    animation: pulse 20s ease-in-out infinite alternate;
  }
`;

const BackgroundParticle = styled.div<{
  size: number;
  top: number;
  left: number;
  delay: number;
}>`
  position: absolute;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  top: ${(props) => props.top}%;
  left: ${(props) => props.left}%;
  background: radial-gradient(
    circle,
    rgba(218, 165, 32, 0.2) 0%,
    rgba(218, 165, 32, 0) 70%
  );
  border-radius: 50%;
  opacity: 0.3;
  animation: floatParticle ${(props) => 15 + props.delay}s ease-in-out infinite;
  animation-delay: ${(props) => props.delay}s;

  @keyframes floatParticle {
    0%,
    100% {
      transform: translate(0, 0);
    }
    25% {
      transform: translate(
        ${(props) => props.size / 3}px,
        -${(props) => props.size / 2}px
      );
    }
    50% {
      transform: translate(
        ${(props) => props.size / 2}px,
        ${(props) => props.size / 3}px
      );
    }
    75% {
      transform: translate(
        -${(props) => props.size / 3}px,
        ${(props) => props.size / 4}px
      );
    }
  }
`;

// Add a footer component
const Footer = styled.footer`
  margin-top: 5rem;
  padding: 2rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: -1px;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(
      90deg,
      rgba(218, 165, 32, 0) 0%,
      rgba(218, 165, 32, 0.3) 50%,
      rgba(218, 165, 32, 0) 100%
    );
  }
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterTitle = styled.h4`
  font-family: "ProximaNovaSemiBold", sans-serif;
  font-size: 1.1rem;
  color: #ffffff;
  margin-bottom: 1.25rem;
  position: relative;
  display: inline-block;

  &:after {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 30px;
    height: 2px;
    background: linear-gradient(90deg, #daa520, transparent);
  }
`;

const FooterLink = styled.a`
  font-family: "ProximaNovaRegular", sans-serif;
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.75rem;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;

  &:hover {
    color: #daa520;
    transform: translateX(5px);
  }

  svg {
    margin-right: 8px;
    opacity: 0.6;
    transition: opacity 0.2s ease;
  }

  &:hover svg {
    opacity: 1;
  }
`;

const FooterCopyright = styled.div`
  font-family: "ProximaNovaRegular", sans-serif;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.4);
  text-align: center;
  width: 100%;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
`;

// Add a highlight component for important text
const Highlight = styled.span`
  color: #daa520;
  position: relative;
  font-family: "ProximaNovaSemiBold", sans-serif;

  &:after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(218, 165, 32, 0.5),
      transparent
    );
  }
`;

// Add a badge component
const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(179, 25, 66, 0.08);
  color: #ff647c;
  font-size: 0.6rem;
  font-weight: 600;
  font-family: "ProximaNovaSemiBold", sans-serif;
  padding: 0.1rem 0.35rem;
  border-radius: 3px;
  margin-left: 0.4rem;
  position: relative;
  top: -1px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
`;

// Styled components for the app
const AppContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem 2rem;
  font-family: "ProximaNovaRegular", sans-serif;
  color: #f1f1f1;
  min-height: 100vh;
  position: relative;

  @media (max-width: 768px) {
    padding: 0 1rem 2rem;
    overflow-x: hidden;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: -20%;
    width: 50%;
    height: 70%;
    background: radial-gradient(
      circle,
      rgba(218, 165, 32, 0.05) 0%,
      rgba(16, 20, 30, 0) 70%
    );
    z-index: 0;
    pointer-events: none;
    animation: pulse 15s ease-in-out infinite alternate;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 10%;
    left: -10%;
    width: 40%;
    height: 60%;
    background: radial-gradient(
      circle,
      rgba(179, 25, 66, 0.03) 0%,
      rgba(16, 20, 30, 0) 70%
    );
    z-index: 0;
    pointer-events: none;
    animation: pulse 15s ease-in-out infinite alternate-reverse;
  }

  @keyframes pulse {
    0% {
      opacity: 0.5;
      transform: scale(1);
    }
    50% {
      opacity: 0.7;
      transform: scale(1.05);
    }
    100% {
      opacity: 0.5;
      transform: scale(1);
    }
  }
`;

const OfficialHeader = styled.div`
  width: 100%;
  padding: 8px 0;
  text-align: right;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 1.5rem;
`;

const OfficialText = styled.span`
  color: #ffffff;
  font-size: 0.85rem;
  font-family: "ProximaNovaRegular", sans-serif;
  display: inline-flex;
  align-items: center;

  &::before {
    content: "";
    display: inline-block;
    width: 16px;
    height: 12px;
    margin-right: 8px;
    background-image: url("/usflag.svg");
    background-size: cover;
    background-position: center;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  }
`;

const MainNavigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  margin-bottom: 3rem;
  position: sticky;
  top: 0;
  backdrop-filter: blur(10px);
  z-index: 100;
  transition: all 0.3s ease;

  &:after {
    content: "";
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(
      90deg,
      rgba(218, 165, 32, 0) 0%,
      rgba(218, 165, 32, 0.3) 50%,
      rgba(218, 165, 32, 0) 100%
    );
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  z-index: 2;

  &:hover {
    .logo-icon {
      transform: rotate(10deg);
      box-shadow: 0 0 25px rgba(218, 165, 32, 0.4);
    }
  }
`;

const LogoIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: linear-gradient(135deg, #daa520, #b8860b);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  font-weight: bold;
  color: #0a0e17;
  font-size: 24px;
  font-family: "ProximaNovaSemiBold", sans-serif;
  box-shadow: 0 8px 20px rgba(218, 165, 32, 0.25);
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    background: linear-gradient(
      135deg,
      rgba(218, 165, 32, 0.4),
      rgba(184, 134, 11, 0.1)
    );
    z-index: -1;
    border-radius: 20px;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover:before {
    opacity: 1;
  }
`;

const LogoText = styled.div`
  display: flex;
  flex-direction: column;
`;

const LogoTitle = styled.h1`
  margin: 0;
  font-size: 1.4rem;
  color: #ffffff;
  line-height: 1.2;
  font-family: "ProximaNovaSemiBold", sans-serif;
  letter-spacing: -0.02em;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #daa520, transparent);
    transition: width 0.3s ease;
  }

  ${Logo}:hover &:after {
    width: 100%;
  }
`;

const LogoSubtitle = styled.p`
  margin: 0;
  font-size: 0.85rem;
  color: #a0a8c0;
  font-family: "ProximaNovaRegular", sans-serif;
  letter-spacing: 0.02em;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const NavLink = styled.a`
  color: #ffffff;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.2s;
  font-family: "ProximaNovaRegular", sans-serif;

  &:hover {
    color: #daa520;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  animation: fadeIn 0.8s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

// Agency Cards at the top
const AgencyCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 4.5rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
`;

// Update the AgencyCard to be more beautiful
const AgencyCard = styled.div`
  background: rgba(10, 14, 23, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 2rem;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);

  &:hover {
    background: rgba(10, 14, 23, 0.5);
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3),
      0 0 30px rgba(218, 165, 32, 0.15);
    border-color: rgba(218, 165, 32, 0.1);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      rgba(218, 165, 32, 0) 0%,
      rgba(218, 165, 32, 0.5) 50%,
      rgba(218, 165, 32, 0) 100%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at center,
      rgba(218, 165, 32, 0.05) 0%,
      transparent 70%
    );
    opacity: 0;
    transition: opacity 0.5s ease;
    z-index: -1;
  }

  &:hover::after {
    opacity: 1;
  }
`;

// Enhance the AgencyTitle for better aesthetics
const AgencyTitle = styled.h3`
  font-size: 0.9rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.75);
  margin-bottom: 0.75rem;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  font-family: "ProximaNovaRegular", sans-serif;
  position: relative;
  padding-bottom: 0.5rem;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 30px;
    height: 1px;
    background: rgba(218, 165, 32, 0.3);
  }
`;

// Update the AgencyCount with simplified styles without redundant animations
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
  animation: numberEntrance 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  animation-delay: calc(var(--index, 0) * 0.15s);
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
`;

// Enhance the AgencyDescription
const AgencyDescription = styled.p`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.55);
  margin: 0;
  font-family: "ProximaNovaRegular", sans-serif;
  line-height: 1.5;
  max-width: 90%;
  transition: color 0.3s ease;

  ${AgencyCard}:hover & {
    color: rgba(255, 255, 255, 0.7);
  }
`;

const Header = styled.header`
  margin-bottom: 3rem;
  text-align: center;
`;

const Title = styled.h1`
  color: #ffffff;
  font-size: 3.2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  font-family: "ProximaNovaSemiBold", sans-serif;
  text-align: center;
`;

const Subtitle = styled.p`
  color: #a0a8c0;
  font-size: 1.2rem;
  margin-bottom: 0;
  text-align: center;
`;

const TabsContainer = styled.div`
  display: flex;
  margin-bottom: 3rem;
  position: relative;
  z-index: 1;
  background: transparent;
  padding: 0;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);

  @media (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    padding-bottom: 0.5rem;
    justify-content: flex-start;
    /* Hide scrollbar but keep functionality */
    &::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
`;

const Tab = styled.button<{ active: boolean }>`
  position: relative;
  padding: 0.75rem 1.5rem;
  font-size: 0.9rem;
  background: transparent;
  color: ${(props) => (props.active ? "#ffffff" : "rgba(255, 255, 255, 0.5)")};
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: ${(props) =>
      props.active ? "ProximaNovaSemiBold" : "ProximaNovaRegular"},
    sans-serif;
  font-weight: ${(props) => (props.active ? "600" : "400")};
  letter-spacing: 0.02em;
  z-index: 2;
  margin: 0 0.5rem;

  @media (max-width: 768px) {
    padding: 0.75rem 1rem;
    margin: 0 0.25rem;
    flex-shrink: 0;
    white-space: nowrap;
  }

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 2px;
    background: ${(props) =>
      props.active
        ? "linear-gradient(90deg, rgba(218, 165, 32, 0.8), rgba(218, 165, 32, 0.4))"
        : "transparent"};
    transform: scaleX(${(props) => (props.active ? "1" : "0")});
    transform-origin: left center;
    transition: transform 0.3s ease;
  }

  &:hover {
    color: ${(props) => (props.active ? "#ffffff" : "#daa520")};

    &::after {
      background: linear-gradient(
        90deg,
        rgba(218, 165, 32, 0.8),
        rgba(218, 165, 32, 0.4)
      );
      transform: scaleX(1);
    }
  }
`;

const TabContent = styled.div`
  position: relative;
  overflow: visible; /* Ensure dropdown can overflow without being clipped */
  z-index: 1;
`;

// Typography and Containers
const ResultsTitle = styled.h2`
  font-family: "ProximaNovaSemiBold", sans-serif;
  color: #fff;
  font-size: 1.8rem;
  margin-top: 2.5rem;
  margin-bottom: 1.8rem;
  font-weight: 600;
`;

// Sort indicator styling
const SortIndicator = styled.span`
  font-size: 0.8rem;
  opacity: 0.7;
  margin-left: 0.5rem;
  font-weight: normal;
  font-style: italic;
`;

const YearTabsContainer = styled.div`
  display: flex;
  position: relative;
  z-index: 1;
  background: rgba(19, 22, 32, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 30px;
  padding: 0.3rem;
  width: 20rem;
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3),
    inset 0 1px 2px rgba(255, 255, 255, 0.05);
  margin-left: auto;
  height: 3rem;
  align-items: center;
  justify-content: space-between;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 20rem;
    margin: 0 auto 1.5rem auto;
  }

  &:hover {
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.4),
      inset 0 1px 2px rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.15);
  }
`;

const YearTab = styled.button<{ active: boolean }>`
  position: relative;
  padding: 0.4rem 0;
  font-size: 0.89rem;
  background: ${(props) =>
    props.active ? "linear-gradient(135deg, #daa520, #f2c94c)" : "transparent"};
  color: ${(props) => (props.active ? "#131620" : "rgba(255, 255, 255, 0.7)")};
  border: none;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  font-family: "ProximaNovaSemiBold", sans-serif;
  font-weight: 600;
  border-radius: 30px;
  width: 33.33%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  line-height: 1;
  height: 100%;
  overflow: visible;
  position: relative;
  box-shadow: ${(props) =>
    props.active ? "0 4px 12px rgba(218, 165, 32, 0.3)" : "none"};
  transform: ${(props) => (props.active ? "translateY(-1px)" : "none")};

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.05);
    opacity: 0;
    transition: opacity 0.2s ease;
    border-radius: 30px;
  }

  &:hover {
    background: ${(props) =>
      props.active
        ? "linear-gradient(135deg, #daa520, #f2c94c)"
        : "rgba(255, 255, 255, 0.07)"};
    color: ${(props) => (props.active ? "#131620" : "#ffffff")};
    transform: ${(props) =>
      props.active ? "translateY(-2px)" : "translateY(-1px)"};

    &:before {
      opacity: 1;
    }
  }

  &:active {
    transform: translateY(0);
    transition: transform 0.1s ease;
  }
`;

const YearTabMonth = styled.span`
  font-size: 0.65rem;
  display: block;
  margin-top: 0.2rem;
  white-space: nowrap;
  overflow: visible;
  letter-spacing: 0.02em;
  font-weight: 400;
  opacity: 0.8;
  text-align: center;
  width: 100%;

  ${YearTab}:hover & {
    opacity: 1;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 200px;
  padding: 1.5rem;
  background: rgba(15, 20, 30, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  font-family: "ProximaNovaRegular", sans-serif;
  font-size: 1rem;
  margin-bottom: 1.5rem;
  resize: vertical;
  color: #e2e8f0;
  transition: all 0.3s ease;
  box-shadow: inset 0 2px 10px rgba(0, 0, 0, 0.2);
  line-height: 1.6;

  &:focus {
    outline: none;
    border-color: rgba(218, 165, 32, 0.5);
    box-shadow: inset 0 2px 10px rgba(0, 0, 0, 0.2),
      0 0 0 3px rgba(218, 165, 32, 0.1);
  }

  &::placeholder {
    color: rgba(160, 168, 192, 0.6);
  }
`;

const Button = styled.button`
  background: linear-gradient(135deg, #daa520, #b8860b);
  color: #0a0e17;
  border: none;
  border-radius: 12px;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  font-family: "ProximaNovaSemiBold", sans-serif;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 20px -5px rgba(218, 165, 32, 0.3);

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0)
    );
    transform: translateY(-100%);
    transition: transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 25px -5px rgba(218, 165, 32, 0.4);

    &:before {
      transform: translateY(0);
    }
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 5px 15px -5px rgba(218, 165, 32, 0.4);
  }

  &:focus {
    outline: none;
    box-shadow: 0 10px 20px -5px rgba(218, 165, 32, 0.3),
      0 0 0 3px rgba(218, 165, 32, 0.2);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    background: linear-gradient(135deg, #555, #333);
    transform: none;
    box-shadow: none;
  }
`;

const ResultsContainer = styled.div`
  margin-top: 1.5rem;
  animation: fadeIn 0.6s ease-out;

  @media (max-width: 768px) {
    margin-top: 1rem;
    padding: 0 0.5rem;
  }
`;

const ResultsData = styled.div`
  font-family: "ProximaNovaRegular", monospace;
  white-space: pre-wrap;
  padding: 1.5rem;
  background: rgba(15, 20, 30, 0.6);
  border-radius: 16px;
  color: #e2e8f0;
  line-height: 1.6;
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: inset 0 2px 10px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    padding: 1rem;
    font-size: 0.9rem;
    border-radius: 12px;
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(218, 165, 32, 0.2);
    border-radius: 4px;

    &:hover {
      background: rgba(218, 165, 32, 0.3);
    }
  }
`;

const WordCountItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 16px;
  border-radius: 8px;
  transition: all 0.2s ease;
  font-family: "ProximaNovaRegular", sans-serif;
  margin-bottom: 6px;
  background: rgba(15, 20, 30, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.03);

  &:hover {
    background: rgba(218, 165, 32, 0.1);
    transform: translateX(5px);
    border-color: rgba(218, 165, 32, 0.1);
  }
`;

const WordText = styled.span`
  font-weight: 500;
  color: #d1d5db;
  font-family: "ProximaNovaRegular", sans-serif;
`;

const CountBadge = styled.span`
  background: rgba(218, 165, 32, 0.15);
  color: #daa520;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  font-family: "ProximaNovaSemiBold", sans-serif;
  min-width: 40px;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
`;

// Add these new styled components for the department cards
const DepartmentCardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
  animation: cardsAppear 0.6s ease-out forwards;

  @keyframes cardsAppear {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const DepartmentCard = styled.div`
  background: linear-gradient(
    180deg,
    rgba(32, 39, 55, 0.7) 0%,
    rgba(18, 24, 38, 0.7) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  padding: 2.5rem;
  transition: all 0.4s cubic-bezier(0.17, 0.67, 0.83, 0.67);
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #b31942, #daa520);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle at top right,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(16, 20, 30, 0) 60%
    );
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    border-color: rgba(255, 255, 255, 0.14);

    &::before {
      opacity: 1;
    }
  }
`;

const DepartmentName = styled.h3`
  font-family: "ProximaNovaSemiBold", sans-serif;
  font-size: 1.35rem;
  color: #ffffff;
  margin-bottom: 1.75rem;
  letter-spacing: -0.01em;
  line-height: 1.3;
  position: relative;
  display: inline-block;

  &:after {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 40px;
    height: 2px;
    background: linear-gradient(90deg, #daa520, transparent);
  }
`;

const DepartmentStats = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.75rem;
  align-items: center;
`;

const DepartmentStat = styled.div`
  display: flex;
  flex-direction: column;
`;

const StatLabel = styled.span`
  font-family: "ProximaNovaRegular", sans-serif;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
  display: flex;
  align-items: center;

  svg {
    margin-left: 0.375rem;
    opacity: 0.6;
    transition: opacity 0.2s ease;
  }

  &:hover svg {
    opacity: 1;
  }
`;

const DepartmentInfo = styled.div`
  font-family: "ProximaNovaRegular", sans-serif;
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 2rem;
  position: relative;
  padding-left: 1.25rem;
  display: flex;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #daa520;
    box-shadow: 0 0 10px rgba(218, 165, 32, 0.5);
  }
`;

const ViewDetailsLink = styled.a`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-family: "ProximaNovaSemiBold", sans-serif;
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: all 0.2s ease;
  padding: 0.5rem 1rem;
  margin-right: -0.5rem;
  border-radius: 8px;

  svg {
    margin-left: 0.5rem;
    transition: transform 0.2s ease;
  }

  &:hover {
    color: #daa520;
    background: rgba(218, 165, 32, 0.1);

    svg {
      transform: translateX(3px);
    }
  }
`;

// Add the missing styled components for search functionality
const SearchInputWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  z-index: 10;

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 0.5rem;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 10px 12px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 4px;
  background-color: #2a2a2a;
  color: white;
  font-size: 14px;
  outline: none;

  &:focus {
    border-color: #4a9eff;
    box-shadow: 0 0 0 2px rgba(74, 158, 255, 0.2);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

const NoResultsMessage = styled.div`
  padding: 16px;
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
  font-style: italic;
`;

// Add this styled component for dropdown items after other styled components
const DropdownItem = styled.div<{ isSelected: boolean }>`
  width: 100%;
  text-align: left;
  background: ${(props) =>
    props.isSelected ? "rgba(218, 165, 32, 0.08)" : "transparent"};
  color: ${(props) =>
    props.isSelected ? "rgba(218, 165, 32, 0.9)" : "rgba(255, 255, 255, 0.85)"};
  border: none;
  padding: 1rem 1.5rem;
  font-family: ${(props) =>
    props.isSelected
      ? '"ProximaNovaSemiBold", sans-serif'
      : '"ProximaNovaRegular", sans-serif'};
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.2s ease;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  position: relative;
  overflow: hidden;

  &:hover {
    background-color: rgba(218, 165, 32, 0.15);
    color: #ffffff;
  }
`;

// Add this component to handle the dropdown logic with virtualization
const AgencyDropdown = ({
  selectedAgency,
  setSelectedAgency,
}: {
  selectedAgency: string;
  setSelectedAgency: (agency: string) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Track visible range for virtualization
  const [visibleStartIndex, setVisibleStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(20); // Show only 20 items at a time

  // Use the Zustand hook to directly subscribe to store changes
  const { agencyNames, isLoading, error } = useAgencyStore();

  // Lazy load agency data - only create the array when the dropdown is open
  const allAgencies = useMemo(() => {
    // Only process agencies data when dropdown is open
    if (!isOpen) return [];

    return isLoading || error || agencyNames.length === 0
      ? departmentData.slice(0, 15).map((dept) => dept.name)
      : agencyNames; // Show all agencies
  }, [agencyNames, isLoading, error, isOpen]);

  // Calculate visible items for virtualization
  const visibleAgencies = useMemo(() => {
    if (!isOpen) return [];
    return allAgencies.slice(
      visibleStartIndex,
      visibleStartIndex + visibleCount
    );
  }, [allAgencies, visibleStartIndex, visibleCount, isOpen]);

  // Handle scroll to update visible items
  const handleScroll = useCallback(() => {
    if (!listRef.current || !isOpen) return;

    const scrollTop = listRef.current.scrollTop;
    const itemHeight = 44; // Approximate height of each item in pixels
    const newStartIndex = Math.floor(scrollTop / itemHeight);

    setVisibleStartIndex(Math.max(0, newStartIndex - 5)); // Buffer of 5 items
  }, [isOpen]);

  useEffect(() => {
    const listElement = listRef.current;
    if (isOpen && listElement) {
      listElement.addEventListener("scroll", handleScroll);
      return () => {
        listElement.removeEventListener("scroll", handleScroll);
      };
    }
  }, [isOpen, handleScroll]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    // Only add the event listener when the dropdown is open
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Clean up resources when dropdown closes
  useEffect(() => {
    if (!isOpen) {
      // Reset virtualization state when closing
      setVisibleStartIndex(0);
    }
  }, [isOpen]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  // Use a single delegated handler for all items
  const handleItemClick = (event: React.MouseEvent) => {
    if (!(event.target instanceof HTMLElement)) return;

    const item = event.target.closest("[data-agency]");
    if (item && item.hasAttribute("data-agency")) {
      const agency = item.getAttribute("data-agency");
      if (agency) {
        setSelectedAgency(agency);
        setIsOpen(false);
      }
    }
  };

  // Prepare placeholder elements for virtualization
  const topPlaceholderHeight = visibleStartIndex * 44; // 44px per item
  const bottomPlaceholderHeight = Math.max(
    0,
    (allAgencies.length - (visibleStartIndex + visibleCount)) * 44
  );

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        marginBottom: "1.5rem",
        zIndex: 100,
      }}
      ref={dropdownRef}
    >
      <button
        onClick={toggleDropdown}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "rgba(22, 25, 37, 0.7)",
          backdropFilter: "blur(12px)",
          color: "rgba(255, 255, 255, 0.95)",
          border: "1px solid rgba(255, 255, 255, 0.15)",
          borderRadius: "16px",
          padding: "1.2rem 1.5rem",
          fontFamily: '"ProximaNovaSemiBold", sans-serif',
          fontSize: "1rem",
          letterSpacing: "0.01em",
          cursor: "pointer",
          transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
          boxShadow:
            "0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
        }}
      >
        {selectedAgency || "Select an agency to analyze..."}
        <svg
          width="16"
          height="10"
          viewBox="0 0 16 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            marginLeft: "12px",
            transition: "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
            transform: isOpen ? "rotate(180deg)" : "none",
          }}
        >
          <path
            d="M1 1L8 8L15 1"
            stroke="rgba(255, 255, 255, 0.7)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Only render the list in the DOM when it's open */}
      {isOpen && (
        <div
          style={{
            position: "absolute",
            bottom: "calc(100% + 10px)",
            left: 0,
            width: "100%",
            maxHeight: "350px",
            overflowY: "auto",
            background: "rgba(32, 36, 48, 0.98)",
            backdropFilter: "blur(20px)",
            borderRadius: "16px",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            boxShadow:
              "0 -10px 40px rgba(0, 0, 0, 0.4), inset 0 0 0 1px rgba(255, 255, 255, 0.05)",
            zIndex: 150,
            transform: "translateY(0)",
            transformOrigin: "bottom center",
            transition:
              "opacity 0.3s ease, transform 0.3s ease, max-height 0.3s ease",
            willChange: "opacity, transform",
          }}
          role="listbox"
          ref={listRef}
          onClick={handleItemClick} // Use event delegation
        >
          {/* Placeholder for items above the visible window */}
          {topPlaceholderHeight > 0 && (
            <div style={{ height: `${topPlaceholderHeight}px` }} />
          )}

          {/* Only render visible items */}
          {visibleAgencies.map((agency, index) => (
            <DropdownItem
              key={visibleStartIndex + index}
              data-agency={agency}
              role="option"
              aria-selected={selectedAgency === agency}
              isSelected={selectedAgency === agency}
            >
              {agency}
            </DropdownItem>
          ))}

          {/* Placeholder for items below the visible window */}
          {bottomPlaceholderHeight > 0 && (
            <div style={{ height: `${bottomPlaceholderHeight}px` }} />
          )}
        </div>
      )}
    </div>
  );
};

// Add this styled component for the new understanding button
const UnderstandButton = styled.button`
  background: linear-gradient(
    135deg,
    rgba(218, 165, 32, 0.9),
    rgba(242, 201, 76, 0.95)
  );
  color: #131620;
  font-family: "ProximaNovaSemiBold", sans-serif;
  border: none;
  border-radius: 16px;
  padding: 1.5rem;
  font-size: 1.05rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  cursor: pointer;
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.25),
    inset 0 2px 4px rgba(255, 255, 255, 0.3), 0 0 0 0 rgba(218, 165, 32, 0.5);
  width: 100%;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  overflow: hidden;
  transform: translateY(0);

  &:hover {
    background: linear-gradient(
      135deg,
      rgba(218, 165, 32, 1),
      rgba(252, 211, 86, 1)
    );
    transform: translateY(-2px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3),
      inset 0 2px 4px rgba(255, 255, 255, 0.4), 0 0 0 0 rgba(218, 165, 32, 0.5);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2),
      inset 0 2px 4px rgba(255, 255, 255, 0.2);
    transition: all 0.2s ease;
  }

  &:focus {
    outline: none;
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2),
      inset 0 2px 4px rgba(255, 255, 255, 0.3),
      0 0 0 2px rgba(218, 165, 32, 0.4);
  }

  &:disabled {
    background: linear-gradient(
      135deg,
      rgba(70, 70, 70, 0.5),
      rgba(90, 90, 90, 0.5)
    );
    cursor: not-allowed;
    transform: none;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    color: rgba(255, 255, 255, 0.4);
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.2) 50%,
      transparent 100%
    );
    transition: left 0.7s ease;
  }

  &:hover:before {
    left: 100%;
  }

  svg {
    margin-right: 12px;
    filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.1));
  }

  strong {
    font-weight: 700;
    font-family: "ProximaNovaBold", sans-serif;
    position: relative;
    display: inline-block;
    padding: 0 6px; /* Reduced padding from 12px to 6px */
    margin: 0 2px; /* Reduced margin from 3px to 2px */

    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: rgba(0, 0, 0, 0.2);
      border-radius: 2px;
    }
  }
`;

// Add these new styled components for the enhanced layout
const GrokAnalysisCard = styled.div`
  background: rgba(22, 25, 37, 0.7);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
  padding: 2.5rem;
  margin-bottom: 2rem;
  position: relative;
  overflow: visible; /* Changed from 'hidden' to 'visible' to allow dropdown to overflow */

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle at top right,
      rgba(218, 165, 32, 0.05),
      transparent 60%
    );
    pointer-events: none;
  }
`;

const GrokHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.5rem;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: -1.25rem;
    left: -2.5rem;
    width: calc(100% + 5rem);
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.1),
      transparent
    );
  }
`;

const GrokTitle = styled.h2`
  font-family: "ProximaNovaBold", sans-serif;
  font-size: 1.8rem;
  color: rgba(255, 255, 255, 0.95);
  margin: 0;
  position: relative;
  display: inline-block;

  &:before {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 40px;
    height: 3px;
    background: linear-gradient(90deg, #daa520, transparent);
    border-radius: 3px;
  }
`;

// Add these new styled components for the modal
const ModalOverlay = styled.div<{ isVisible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(9, 11, 16, 0.75);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};
  transition: opacity 0.3s ease, visibility 0.3s ease;
`;

const ModalContent = styled.div`
  background: linear-gradient(
    135deg,
    rgba(27, 32, 44, 0.95) 0%,
    rgba(15, 19, 26, 0.9) 100%
  );
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  max-width: 600px;
  width: 90%;
  margin: 0 auto;
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #ffffff;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: auto;
  max-height: 80vh;

  @media (max-width: 768px) {
    width: 95%;
    padding: 1.5rem;
    max-height: 85vh;
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(218, 165, 32, 0.2);
    border-radius: 4px;

    &:hover {
      background: rgba(218, 165, 32, 0.3);
    }
  }
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
`;

const ModalTitle = styled.h3`
  font-family: "ProximaNovaSemiBold", sans-serif;
  color: rgba(255, 255, 255, 0.95);
  font-size: 1.2rem;
  margin: 0;
  font-weight: 600;
`;

const ModalCloseButton = styled.button`
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.6);
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  transition: color 0.2s ease;

  &:hover {
    color: rgba(255, 255, 255, 0.9);
  }

  &:focus {
    outline: none;
  }
`;

const ModalBody = styled.div`
  padding: 2.5rem 2rem; /* Increased padding */
  color: rgba(255, 255, 255, 0.85);
  font-family: "ProximaNovaRegular", sans-serif;
  font-size: 1rem;
  line-height: 1.5;
`;

const ErrorText = styled.div`
  color: #ff4d4f;
  font-size: 16px;
  line-height: 1.5;
`;

const AnalysisText = styled.div`
  color: #ffffff;
  font-size: 16px;
  line-height: 1.6;
  white-space: pre-wrap;
`;

const ShowResultsButton = styled.button`
  background: linear-gradient(135deg, #1a2151 0%, #323b79 100%);
  color: #ffffff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 20px auto;
  display: block;

  &:hover {
    background: linear-gradient(135deg, #323b79 0%, #1a2151 100%);
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }

  &:focus {
    outline: none;
  }
`;

// Update the HomePage component to include modal state and functions
const HomePage = () => {
  // Tab and UI state
  const [activeTab, setActiveTab] = useState<"wordcount" | "grok">("wordcount");
  const [text, setText] = useState("");
  const [wordCount, setWordCount] = useState<Record<string, number>>({});
  const [grokAnalysis, setGrokAnalysis] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingPercentage, setProcessingPercentage] = useState(0);
  const [visibleAgencies, setVisibleAgencies] = useState(9);
  const [activeYear, setActiveYear] = useState<"2023" | "2024" | "2025">(
    "2025"
  );
  const [selectedAgency, setSelectedAgency] = useState<string>("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  // API and data hooks - all in one place to avoid duplications
  const initializeApi = useApiConfigStore((state) => state.initializeBaseUrl);
  const fetchAgencyData = useAgencyStore((state) => state.fetchAgencyData);
  const {
    isLoading: isDataLoading,
    error: dataError,
    agencies,
  } = useAgencyStore();

  // Move all hooks to the top level - outside of any conditionals
  const agenciesList = useAgencyStore((state) => state.agencies);
  const getWordCountForYear = useAgencyStore(
    (state) => state.getWordCountForYear
  );

  // Sort agencies by word count for the active year (highest to lowest)
  const sortedAgencies = useMemo(() => {
    return [...agenciesList].sort((a, b) => {
      const countA = a.wordCounts[activeYear] || 0;
      const countB = b.wordCounts[activeYear] || 0;
      return countB - countA; // Descending order (highest first)
    });
  }, [agenciesList, activeYear]);

  // Derived values
  const agenciesLength = agencies.length;

  // Log data loading state changes
  useEffect(() => {
    if (dataError) {
      console.error(`Data error: ${dataError}`);
    }
  }, [isDataLoading, dataError, agenciesLength]);

  // Initialize API and fetch data on mount
  useEffect(() => {
    initializeApi();
    fetchAgencyData();
  }, []);

  // Event handlers
  const handleShowMoreAgencies = () => {
    setVisibleAgencies((prev) => Math.min(prev + 9, agenciesLength));
  };

  // Create background particles
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.floor(Math.random() * 100) + 50,
    top: Math.floor(Math.random() * 100),
    left: Math.floor(Math.random() * 100),
    delay: Math.floor(Math.random() * 10),
  }));

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const processWordCount = () => {
    if (!text.trim()) {
      return;
    }

    setIsProcessing(true);

    // Simple word count implementation
    const words = text.toLowerCase().match(/\b(\w+)\b/g) || [];
    const count: Record<string, number> = {};

    words.forEach((word) => {
      count[word] = (count[word] || 0) + 1;
    });

    // Sort by frequency
    const sortedCount = Object.fromEntries(
      Object.entries(count).sort((a, b) => b[1] - a[1])
    );

    setWordCount(sortedCount);
    setIsProcessing(false);
  };

  // Add a function to close the modal
  const closeModal = () => {
    setIsModalVisible(false);
  };

  // Update the process function to call the API and show the modal
  const processGrokAnalysis = () => {
    if (!selectedAgency) return;

    setIsProcessing(true);
    setProcessingPercentage(0);
    setGrokAnalysis(""); // Clear previous analysis

    // Start percentage animation from 0 to 100 over 15 seconds (150 steps, every 100ms)
    const intervalDuration = 100; // 100ms
    const totalDuration = 5000; // 5 seconds
    const steps = totalDuration / intervalDuration;
    const incrementPerStep = 100 / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      setProcessingPercentage(
        Math.min(Math.round(currentStep * incrementPerStep), 100)
      );

      if (currentStep >= steps) {
        clearInterval(interval);
        if (!isProcessing) return; // Already finished processing
        setIsProcessing(false);
      }
    }, intervalDuration);

    // Call the API immediately to get the agency explanation
    fetchAgencyExplanation(selectedAgency, {
      format: "detailed",
      selectedDate: new Date().toISOString().split("T")[0],
    })
      .then((response) => {
        if (response.error) {
          setGrokAnalysis(`Error: ${response.error}`);
        } else {
          setGrokAnalysis(response.explanation);
        }
        // Show the modal as soon as we get the response
        setIsModalVisible(true);
        // If percentage animation is still running, don't stop it,
        // but mark processing as complete
        setIsProcessing(false);
      })
      .catch((error) => {
        setGrokAnalysis(`Failed to fetch analysis: ${error.message}`);
        setIsModalVisible(true);
        setIsProcessing(false);
      });
  };

  const handleProcess = () => {
    if (activeTab === "wordcount") {
      processWordCount();
    } else {
      processGrokAnalysis();
    }
  };

  const processGrokAnalysisButton = (
    <UnderstandButton
      onClick={processGrokAnalysis}
      disabled={!selectedAgency || isProcessing}
    >
      {isProcessing ? (
        <>
          <span style={{ marginRight: "12px" }}>{processingPercentage}%</span>
          Processing analysis...
        </>
      ) : (
        <>
          {/* Replace SVG with public.avif image */}
          <img
            src="/public.avif"
            alt="Money icon"
            width="24"
            height="24"
            style={{
              marginRight: "12px",
              filter: "drop-shadow(0 2px 2px rgba(0, 0, 0, 0.1))",
            }}
          />
          Understand what the agency <strong>actually</strong> does according to
          their federal regulations
        </>
      )}
    </UnderstandButton>
  );

  // This simplifies the previously problematic code
  const useAgencyDetails = (agencyName: string) => {
    return useMemo(() => {
      return agencies.find((a) => a.name === agencyName) || null;
    }, [agencies, agencyName]);
  };

  // Render department cards
  const renderDepartmentCards = () => {
    return sortedAgencies.slice(0, visibleAgencies).map((agency, index) => {
      // Get word count for the active year
      const wordCount = agency.wordCounts[activeYear];

      // Format the word count with commas
      const formattedWordCount =
        wordCount !== undefined ? wordCount.toLocaleString() : "N/A";

      return (
        <DepartmentCard key={index}>
          <DepartmentName>{agency.displayName || agency.name}</DepartmentName>
          <DepartmentStats>
            <DepartmentStat>
              <AnimatedStatValue
                value={formattedWordCount}
                index={0}
                isWords={true}
              />
              <StatLabel>words</StatLabel>
            </DepartmentStat>
          </DepartmentStats>
          <DepartmentInfo>{agency.subAgencies} sub agencies</DepartmentInfo>
        </DepartmentCard>
      );
    });
  };

  return (
    <>
      <Head>
        <title>eCFR Analyzer</title>
        <meta name="description" content="eCFR Analyzer" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />
      <AnimatedBackground>
        {Array.from({ length: 20 }).map((_, index) => (
          <BackgroundParticle
            key={index}
            size={Math.random() * 60 + 20}
            top={Math.random() * 100}
            left={Math.random() * 100}
            delay={Math.random() * 5}
          />
        ))}
      </AnimatedBackground>
      <AppContainer>
        <OfficialHeader>
          <OfficialText>
            Not an official website of the United States government
          </OfficialText>
        </OfficialHeader>

        <ContentWrapper>
          <Header>
            <Title>
              eCFR <Highlight>Analyzer</Highlight>
            </Title>
            <Subtitle>
              Created for the Trump Administration to Analyze the Code of
              Federal Regulations
            </Subtitle>
          </Header>

          <AgencyCardsContainer>
            <AgencyCard>
              <AgencyTitle>Main Agencies</AgencyTitle>
              <AnimatedNumber value="153" index={0} />
              <AgencyDescription>Number of Parent Agencies</AgencyDescription>
            </AgencyCard>
            <AgencyCard>
              <AgencyTitle>Sub Agencies</AgencyTitle>
              <AnimatedNumber value="163" index={1} />
              <AgencyDescription>Number of Child Agencies</AgencyDescription>
            </AgencyCard>
            <AgencyCard>
              <AgencyTitle>Total Sections</AgencyTitle>
              <AnimatedNumber value="231,318" index={2} />
              <AgencyDescription>
                Amount of Federal Regulations
              </AgencyDescription>
            </AgencyCard>
          </AgencyCardsContainer>

          <TabsContainer>
            <Tab
              active={activeTab === "wordcount"}
              onClick={() => setActiveTab("wordcount")}
            >
              Word Count Analysis
            </Tab>
            <Tab
              active={activeTab === "grok"}
              onClick={() => setActiveTab("grok")}
            >
              Grok AI Analysis <Badge>Via API</Badge>
            </Tab>
          </TabsContainer>

          <TabContent>
            {activeTab === "grok" && (
              <GrokAnalysisCard>
                <GrokHeader>
                  <GrokTitle>Grok AI Analysis</GrokTitle>
                  <YearTabsContainer>
                    <YearTab
                      active={activeYear === "2023"}
                      onClick={() => setActiveYear("2023")}
                    >
                      <span>2023</span>
                      <YearTabMonth>March</YearTabMonth>
                    </YearTab>
                    <YearTab
                      active={activeYear === "2024"}
                      onClick={() => setActiveYear("2024")}
                    >
                      <span>2024</span>
                      <YearTabMonth>March</YearTabMonth>
                    </YearTab>
                    <YearTab
                      active={activeYear === "2025"}
                      onClick={() => setActiveYear("2025")}
                    >
                      <span>2025</span>
                      <YearTabMonth>March</YearTabMonth>
                    </YearTab>
                  </YearTabsContainer>
                </GrokHeader>

                <AgencyDropdown
                  selectedAgency={selectedAgency}
                  setSelectedAgency={setSelectedAgency}
                />

                {processGrokAnalysisButton}
              </GrokAnalysisCard>
            )}

            {activeTab === "wordcount" && (
              <ResultsContainer>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "2.5rem",
                  }}
                >
                  <ResultsTitle style={{ marginBottom: 0 }}>
                    Agency Statistics
                  </ResultsTitle>
                  <YearTabsContainer>
                    <YearTab
                      active={activeYear === "2023"}
                      onClick={() => setActiveYear("2023")}
                    >
                      <span>2023</span>
                      <YearTabMonth>March</YearTabMonth>
                    </YearTab>
                    <YearTab
                      active={activeYear === "2024"}
                      onClick={() => setActiveYear("2024")}
                    >
                      <span>2024</span>
                      <YearTabMonth>March</YearTabMonth>
                    </YearTab>
                    <YearTab
                      active={activeYear === "2025"}
                      onClick={() => setActiveYear("2025")}
                    >
                      <span>2025</span>
                      <YearTabMonth>March</YearTabMonth>
                    </YearTab>
                  </YearTabsContainer>
                </div>
                <DepartmentCardsGrid>
                  {renderDepartmentCards()}
                </DepartmentCardsGrid>
                {visibleAgencies < agenciesLength && (
                  <div
                    className="load-more-button-container"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "3rem",
                      width: "100%",
                    }}
                  >
                    <button
                      onClick={handleShowMoreAgencies}
                      style={{
                        background: "linear-gradient(135deg, #daa520, #b8860b)",
                        color: "#131620",
                        fontFamily: '"ProximaNovaSemiBold", sans-serif',
                        border: "none",
                        borderRadius: "50px",
                        padding: "1rem 2.5rem",
                        fontSize: "0.9rem",
                        fontWeight: 700,
                        letterSpacing: "1px",
                        textTransform: "uppercase",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        width: "280px",
                        boxShadow: "0 2px 10px rgba(218, 165, 32, 0.2)",
                        position: "relative",
                        overflow: "hidden",
                        marginTop: "1.5rem",
                      }}
                    >
                      Show More Agencies
                    </button>
                  </div>
                )}
              </ResultsContainer>
            )}

            {activeTab === "grok" && <div></div>}
          </TabContent>
        </ContentWrapper>
      </AppContainer>

      {/* Modal for agency explanation */}
      <ModalOverlay isVisible={isModalVisible}>
        <ModalContent>
          <ModalHeader>
            <ModalTitle>Grok Analysis Results 🇺🇸</ModalTitle>
            <ModalCloseButton onClick={closeModal}>×</ModalCloseButton>
          </ModalHeader>
          <ModalBody>
            {grokAnalysis.startsWith("Error:") ||
            grokAnalysis.startsWith("Failed") ? (
              <ErrorText>{grokAnalysis}</ErrorText>
            ) : (
              <ResultsData>{grokAnalysis}</ResultsData>
            )}
          </ModalBody>
        </ModalContent>
      </ModalOverlay>
    </>
  );
};

export default HomePage;
