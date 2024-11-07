"use client";
import React from "react";

interface IProps {
  className?: string;
}
const LinkedinIcon: React.FC<IProps> = ({ className = "" }) => (
  <svg
    className={className}
    width="144"
    height="144"
    viewBox="0 0 144 144"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_2726_29157)">
      <path
        d="M133.341 0H10.6312C4.75312 0 0 4.64063 0 10.3781V133.594C0 139.331 4.75312 144 10.6312 144H133.341C139.219 144 144 139.331 144 133.622V10.3781C144 4.64063 139.219 0 133.341 0ZM42.7219 122.709H21.3469V53.9719H42.7219V122.709ZM32.0344 44.6063C25.1719 44.6063 19.6313 39.0656 19.6313 32.2312C19.6313 25.3969 25.1719 19.8562 32.0344 19.8562C38.8688 19.8562 44.4094 25.3969 44.4094 32.2312C44.4094 39.0375 38.8688 44.6063 32.0344 44.6063ZM122.709 122.709H101.362V89.2969C101.362 81.3375 101.222 71.0719 90.2531 71.0719C79.1437 71.0719 77.4562 79.7625 77.4562 88.7344V122.709H56.1375V53.9719H76.6125V63.3656H76.8937C79.7344 57.9656 86.7094 52.2563 97.0875 52.2563C118.716 52.2563 122.709 66.4875 122.709 84.9938V122.709Z"
        fill="currentColor"
      />
    </g>
  </svg>
);

export default LinkedinIcon;
