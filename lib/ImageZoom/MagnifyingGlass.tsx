import React, { forwardRef } from 'react';
import type { ZoomSize } from './types';

interface MagnifyingGlassProps extends React.HTMLAttributes<HTMLDivElement> {
  x: number;
  y: number;
  size: ZoomSize;
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
        width: size.width,
        height: size.height,
        border: '1px solid #000',
        cursor: 'none',
        background: 'rgba(0, 0, 0, 0.25)',
        zIndex: 1000,
        backfaceVisibility: 'hidden',
      }}
      data-testid="magnifying-glass"
    />
  );
});

MagnifyingGlass.displayName = 'MagnifyingGlass';
export default MagnifyingGlass;
