
import React from 'react';

interface SlideWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export const SlideWrapper: React.FC<SlideWrapperProps> = ({ children, className = "" }) => {
  return (
    <div className={`min-h-screen w-full bg-midnight-black text-white relative flex flex-col overflow-hidden ${className}`}>
      {children}
    </div>
  );
};
