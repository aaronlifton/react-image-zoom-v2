import { ForwardRefExoticComponent, RefAttributes, type CSSProperties } from 'react';
import { type ZoomSize, type ZoomPosition } from './types';
interface ZoomPortalProps {
  zoomContainerSize: ZoomSize;
  zoomContainerPosition: ZoomPosition;
  zoomAlwaysVisible?: boolean;
  isZoomVisible: boolean;
  style: CSSProperties;
  portal?: React.RefObject<Element | DocumentFragment>;
  isLoaded: boolean;
}
declare const ZoomPortal: ForwardRefExoticComponent<
  ZoomPortalProps & RefAttributes<HTMLDivElement>
>;
export default ZoomPortal;
//# sourceMappingURL=ZoomPortal.d.ts.map
