import React, { forwardRef } from 'react';

interface MagnifyingGlassProps extends React.HTMLAttributes<HTMLDivElement> {
  x: number;
  y: number;
  size: number;
}

const MagnifyingGlass = forwardRef<HTMLDivElement, MagnifyingGlassProps>(({ x, y, size }, ref) => {
  return (
    <div
      ref={ref}
      style={{
        position: 'absolute',
        display: 'block',
        top: y,
        left: x,
        width: size,
        height: size,
        border: '1px solid #000',
        cursor: 'none',
        background: 'rgba(0, 0, 0, 0.25)',
        zIndex: 1000,
      }}
    />
  );
});

MagnifyingGlass.displayName = 'MagnifyingGlass';
export default MagnifyingGlass;
