"use client";

import React, { FC } from 'react';
import { TooltipProps } from "../../modules/user/interfaces/tooltip.interface"; //interface

const Tooltip: FC<TooltipProps> = ({ text, isVisible, tooltipRef }) => {
  return (
    <div
      ref={tooltipRef}
      className="absolute w-72 top-[-10] bg-[#424242] text-[#9E9E9E] text-sm rounded-lg shadow-lg p-2 z-10 transition-opacity duration-200"
      style={{ visibility: isVisible ? 'visible' : 'hidden', opacity: isVisible ? 1 : 0 }}
    >
      {text}
    </div>
  );
};

export default Tooltip;
