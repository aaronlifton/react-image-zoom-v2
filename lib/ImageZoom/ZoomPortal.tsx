import { forwardRef, type CSSProperties } from 'react';
import { createPortal } from 'react-dom';
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
const ZoomPortal = forwardRef<HTMLDivElement, ZoomPortalProps>(
  (
    {
      zoomContainerSize,
      zoomContainerPosition,
      zoomAlwaysVisible,
      isZoomVisible,
      style,
      portal,
      isLoaded,
    }: ZoomPortalProps,
    ref,
  ) => {
    const zoomPortal = (
      <div
        className="zoom-container"
        ref={ref}
        style={{
          position: portal?.current ? 'relative' : 'absolute',
          width: zoomContainerSize.width,
          height: zoomContainerSize.height,
          overflow: 'hidden',
          border: '1px solid #000',
          top: zoomContainerPosition.y,
          left: zoomContainerPosition.x,
          display: zoomAlwaysVisible || isZoomVisible ? 'block' : 'none',
        }}
      >
        {isLoaded && (
          <div
            className="zoom-image"
            style={style}
          />
        )}
      </div>
    );

    if (portal?.current) {
      return createPortal(zoomPortal, portal.current);
    }

    return zoomPortal;
  },
);
ZoomPortal.displayName = 'ZoomPortal';
export default ZoomPortal;
