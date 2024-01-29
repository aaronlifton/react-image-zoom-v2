import React from 'react';
import type { ZoomSize } from './types';
interface MagnifyingGlassProps extends React.HTMLAttributes<HTMLDivElement> {
  x: number;
  y: number;
  size: ZoomSize;
}
declare const MagnifyingGlass: React.ForwardRefExoticComponent<
  MagnifyingGlassProps & React.RefAttributes<HTMLDivElement>
>;
export default MagnifyingGlass;
//# sourceMappingURL=MagnifyingGlass.d.ts.map
