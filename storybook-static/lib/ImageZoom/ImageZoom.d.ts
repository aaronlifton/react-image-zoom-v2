import React from 'react';
import type { ZoomSize, ZoomScale, ZoomPosition } from './types';
export interface ImageZoomProps {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  zoomScale?: number;
  zoomContainerGap?: number;
  zoomAlwaysVisible?: boolean;
  useSmoothMovement?: boolean;
  debug?: boolean;
  DebugElement?: React.FC<RenderProps>;
  portal?: React.RefObject<Element | DocumentFragment>;
}
export interface RenderProps {
  zoomScale: ZoomScale;
  zoomPosition: ZoomPosition;
  zoomImageSize: ZoomSize;
  glassSize: ZoomSize;
  glassPosition: ZoomPosition;
  isLoaded: boolean;
}
declare const ImageZoom: React.FC<ImageZoomProps>;
export default ImageZoom;
//# sourceMappingURL=ImageZoom.d.ts.map
