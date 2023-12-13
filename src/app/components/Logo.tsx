import React, { useState, useEffect } from 'react';

interface LogoProps {
  className?: string,
  isScrolled?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className, isScrolled }) => {

  const classes = {
    circle:"flex justify-center items-center w-15 h-15 border-[3px] border-black rounded-full transition-color duration-300 ease",
    text:"text-[36px] font-bold font-radley lowercase transition-color duration-300 ease"
  }
  return (
    <div className={`${classes.circle} ${isScrolled ? "bg-black border-white" : "bg-white"} ${className}`}>
      <span className={`${classes.text} ${isScrolled ? "text-white" : "text-black"}`}>OA</span>
    </div>
  );
};

export default Logo;
