import React, {
  useState,
  useRef,
  useLayoutEffect,
  useMemo,
  useCallback,
  type CSSProperties,
} from 'react';
import MagnifyingGlass from './MagnifyingGlass';
import ZoomPortal from './ZoomPortal';
import { clamp, usePreviousValue } from './Util';
import type { ZoomSize, ZoomScale, ZoomPosition } from './types';
import Debug from './Debug';

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
const ImageZoom: React.FC<ImageZoomProps> = ({
  src,
  alt,
  width,
  height,
  zoomScale: userZoomScale = 1,
  zoomContainerGap = 20,
  zoomAlwaysVisible,
  useSmoothMovement = true,
  debug,
  DebugElement = Debug,
  portal,
}) => {
  const [glassPosition, setGlassPosition] = useState<ZoomPosition>({ x: 1, y: 0 });
  const [zoomContainerSize, setZoomContainerSize] = useState<ZoomSize | undefined>();
  const [zoomContainerPosition, setZoomContainerPosition] = useState<ZoomPosition>({ x: 0, y: 0 });
  const [isZoomVisible, setZoomVisible] = useState(false);
  const [zoomScale, setZoomScale] = useState<ZoomScale>({ x: userZoomScale, y: userZoomScale });
  const [isLoaded, setLoaded] = useState(false);
  const sourceImage = useRef<HTMLImageElement | null>(null);
  const zoomImage = useRef<HTMLImageElement | null>(null);
  const zoomContainer = useRef<HTMLDivElement | null>(null);
  const lens = useRef<HTMLDivElement | null>(null);
  const prevSrc = usePreviousValue(src);
  useLayoutEffect(() => {
    if (src !== prevSrc) {
      setZoomScale({ x: 1, y: 1 });
    }
  }, [src, prevSrc]);

  const showZoom = useCallback(() => {
    setZoomVisible(true);
  }, []);
  const hideZoom = useCallback(
    (event: MouseEvent) => {
      const elementRect = sourceImage.current?.getBoundingClientRect();
      if (!elementRect || !zoomContainerSize) return;

      const cursorX = event.clientX;
      const cursorY = event.clientY;

      if (
        cursorX > elementRect.left &&
        cursorX < elementRect.right + zoomContainerGap + zoomContainerSize?.width &&
        cursorY > elementRect.top &&
        cursorY < elementRect.bottom
      ) {
        return;
      }

      setZoomVisible(false);
    },
    [zoomContainerSize, zoomContainerGap],
  );

  const getCursorPos = useCallback((e: MouseEvent) => {
    if (!sourceImage.current) return { x: 0, y: 0 };

    const a = sourceImage.current.getBoundingClientRect();
    let x = 0;
    let y = 0;
    x = (e.pageX || e.clientX) - a.left;
    y = (e.pageY || e.clientY) - a.top;
    x = x - window.scrollX;
    y = y - window.scrollY;
    return { x: x, y: y };
  }, []);

  const moveLens = useMemo(
    () => (event: MouseEvent) => {
      event.preventDefault();
      if (!zoomContainer.current || !sourceImage.current || !zoomContainerSize) return;

      const image = sourceImage.current;
      const pos = getCursorPos(event);
      const glassSizeWidth = zoomContainerSize.width / zoomScale.x;
      const glassSizeHeight = zoomContainerSize.height / zoomScale.y;
      const x = clamp(pos.x, 0, image.width - glassSizeWidth);
      const y = clamp(pos.y, 0, image.height - glassSizeHeight);
      if (x === -Infinity || y === Infinity) return;

      setGlassPosition({ x, y });
    },
    [zoomScale.x, zoomContainerSize, zoomScale.y, getCursorPos],
  );

  const calcZoomImageWidth = useCallback((width: number, zoomScaleX: number) => {
    return width * zoomScaleX;
  }, []);
  const calcZoomImageHeight = useCallback((height: number, zoomScaleY: number) => {
    return height * zoomScaleY;
  }, []);

  const handleWheel = useMemo(
    () => (event: WheelEvent) => {
      event.stopPropagation();
      event.preventDefault();
      if (!sourceImage.current || !zoomContainerSize) return;
      if (zoomScale.x === 0 || zoomScale.y === 0 || (zoomScale.x === 1 && zoomScale.y === 1)) {
        return;
      }

      const glassSizeWidth = zoomContainerSize.width / zoomScale.x;
      const glassSizeHeight = zoomContainerSize.height / zoomScale.y;
      console.log(
        `${glassPosition.x}* ${glassSizeWidth} ${sourceImage.current.width} ${zoomScale.x} ${zoomScale.y}`,
      );
      if (glassPosition.x + glassSizeWidth >= sourceImage.current?.width) return;
      if (glassPosition.y + glassSizeHeight >= sourceImage.current?.height) {
        return;
      }

      if ((sourceImage.current?.width || 0) - glassPosition.x - glassSizeWidth - 1 < 0) {
        return;
      }
      if ((sourceImage.current?.height || 0) - glassPosition.y - glassSizeHeight - 1 < 0) {
        return;
      }

      const newDelta = event.deltaY > 0 ? -0.1 : 0.1;
      const newZoomScaleX = clamp(
        zoomScale.x + newDelta,
        1,
        sourceImage.current.naturalWidth / glassSizeWidth,
      );
      const newZoomScaleY = clamp(
        zoomScale.y + newDelta,
        1,
        sourceImage.current.naturalHeight / glassSizeHeight,
      );

      setZoomScale({ x: newZoomScaleX, y: newZoomScaleY });
    },
    [zoomScale, glassPosition.x, glassPosition.y, zoomContainerSize],
  );

  const loadImage = useCallback(() => {
    if (isLoaded) setLoaded(false);

    const image = sourceImage?.current;
    if (!image) return;
    zoomImage.current = image;
    setZoomScale({ x: 1, y: 1 });

    const calcScaleX = (width: number): number => {
      if (!zoomImage.current) return 1;

      return (zoomImage.current.naturalWidth * zoomScale.x) / width;
    };

    const calcScaleY = (height: number): number => {
      if (!zoomImage.current) return 1;

      return (zoomImage.current.naturalHeight * zoomScale.y) / (height || zoomImage.current.height);
    };

    const scaleX = calcScaleX(image.width);
    const scaleY = calcScaleY(image.height);

    setZoomScale({ x: scaleX, y: scaleY });

    setZoomContainerSize({ width: image.width, height: image.height });

    if (debug) console.log('Loaded');
    setLoaded(true);
  }, [debug, isLoaded, zoomScale.x, zoomScale.y]);

  useLayoutEffect(() => {
    const image = sourceImage.current;
    if (!image) return;

    const imageWidth = width || image.getBoundingClientRect().width;
    if (!portal) setZoomContainerPosition({ x: imageWidth + zoomContainerGap, y: 0 });
    setZoomContainerSize({ width: imageWidth, height: image.height });
  }, [width, zoomContainerGap, portal]);

  useLayoutEffect(() => {
    const image = sourceImage.current;
    if (!image) return;

    image.onload = loadImage;
    const lensEl = lens.current;
    const zoomContainerEl = zoomContainer.current;
    const preventDefault = (event: Event) => event.preventDefault();

    lensEl?.addEventListener('mousemove', moveLens);
    lensEl?.addEventListener('mouseenter', showZoom);
    lensEl?.addEventListener('wheel', handleWheel);
    lensEl?.addEventListener('mouseleave', hideZoom);
    image.addEventListener('wheel', preventDefault);
    image.addEventListener('mousemove', moveLens);
    image.addEventListener('mouseenter', showZoom);
    zoomContainerEl?.addEventListener('mouseleave', hideZoom);

    return () => {
      lensEl?.removeEventListener('mousemove', moveLens);
      lensEl?.removeEventListener('mouseenter', showZoom);
      lensEl?.removeEventListener('wheel', handleWheel);
      image.removeEventListener('wheel', preventDefault);
      image.removeEventListener('mousemove', moveLens);
      image.removeEventListener('mouseenter', showZoom);
      zoomContainerEl?.removeEventListener('mouseleave', hideZoom);
      // image.removeEventListener('mousemove', moveLens);
      // image.removeEventListener('mouseenter', showZoom);
      // lensEl?.addEventListener('mouseleave', hideZoom);
      // zoomContainerEl?.removeEventListener('mouseleave', hideZoom);
    };
  }, [moveLens, handleWheel, hideZoom, showZoom, loadImage]);

  const glassSize = useMemo(() => {
    const width = Math.min(
      (zoomContainerSize?.width || 0) / zoomScale.x,
      (sourceImage.current?.width || 0) - glassPosition.x,
    );
    const height = Math.min(
      (zoomContainerSize?.height || 0) / zoomScale.y,
      (sourceImage.current?.height || 0) - glassPosition.y,
    );

    return { width, height };
  }, [zoomContainerSize, zoomScale, glassPosition]);

  const zoomImageSize = useMemo(() => {
    const image = sourceImage.current;

    if (!image) return { width: 0, height: 0 };

    return {
      width: calcZoomImageWidth(image.width, zoomScale.x),
      height: calcZoomImageHeight(image.height, zoomScale.y),
    };
  }, [calcZoomImageWidth, calcZoomImageHeight, zoomScale.x, zoomScale.y]);

  const zoomPosition = useMemo(() => {
    if (!zoomContainerSize) return { x: 0, y: 0 };

    let x = glassPosition.x * zoomScale.x;
    let y = glassPosition.y * zoomScale.y;
    if (zoomImageSize.width - x < zoomContainerSize.width) {
      x = zoomImageSize.width - zoomContainerSize.width;
    }
    if (zoomImageSize.height - y < zoomContainerSize.height) {
      y = zoomImageSize.height - zoomContainerSize.height;
    }

    return { x, y };
  }, [zoomContainerSize, glassPosition, zoomScale.x, zoomScale.y, zoomImageSize]);

  const zoomImageStyle = useMemo<CSSProperties>(
    () => ({
      width: '100%',
      height: '100%',
      background: `url(${zoomImage.current?.src})`,
      backgroundSize: `${zoomImageSize.width}px ${zoomImageSize.height}px`,
      backgroundPosition: `-${Math.min(
        zoomPosition.x,
        Math.round(zoomImageSize.width - (zoomContainerSize?.width || 0)),
      )}px -${Math.min(zoomPosition.y, zoomImageSize.height - (zoomContainerSize?.height || 0))}px`,
      cursor: 'none',
      ...(useSmoothMovement
        ? { transition: 'background-position .1s ease-out, background-size .1s ease-out' }
        : {}),
    }),
    // Disabled lint so that memoization would re-occur when the image src
    // changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      zoomContainerSize?.width,
      zoomContainerSize?.height,
      zoomImageSize.height,
      zoomImageSize.width,
      zoomPosition.x,
      zoomPosition.y,
      useSmoothMovement,
      zoomImage.current?.src,
    ],
  );

  return (
    <div>
      <div
        style={{
          position: 'relative',
          display: 'inline-block',
          transformOrigin: 0,
          backfaceVisibility: 'hidden',
          WebkitTapHighlightColor: 'rgb(0,0,0,0)',
          cursor: 'none',
        }}
      >
        {zoomContainerSize && isZoomVisible && (
          <MagnifyingGlass
            ref={lens}
            x={Math.min(glassPosition.x, zoomContainerSize.width - glassSize.width)}
            y={Math.min(glassPosition.y, zoomContainerSize.height - glassSize.height)}
            size={{ width: glassSize.width, height: glassSize.height }}
          />
        )}
        <img
          ref={sourceImage}
          src={src}
          width={width}
          height={height}
          alt={alt}
          style={{ display: 'block', backfaceVisibility: 'hidden', cursor: 'none' }}
        />
        {zoomContainerSize?.width && zoomContainerSize?.height && (
          <ZoomPortal
            zoomContainerSize={zoomContainerSize}
            zoomContainerPosition={zoomContainerPosition}
            zoomAlwaysVisible={zoomAlwaysVisible}
            isZoomVisible={isZoomVisible}
            style={zoomImageStyle}
            ref={zoomContainer}
            portal={portal}
            isLoaded={isLoaded}
          />
        )}
      </div>
      {debug && DebugElement && (
        <DebugElement
          isLoaded={isLoaded}
          zoomScale={zoomScale}
          glassSize={glassSize}
          zoomPosition={zoomPosition}
          zoomImageSize={zoomImageSize}
          glassPosition={glassPosition}
        />
      )}
    </div>
  );
};

ImageZoom.displayName = 'ImageZoom';
export default ImageZoom;
