import React, { useState, useRef, useEffect, useMemo } from 'react';
import MagnifyingGlass from './MagnifyingGlass';

export interface ImageZoomProps {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  glassSize: {
    width: number;
    height: number;
  };
  zoomScale: number;
}
type ZoomScale = { x: number; y: number };
const ImageZoom: React.FC<ImageZoomProps> = ({
  src,
  alt,
  width,
  height,
  glassSize: userGlassSize = { width: 40, height: 40 },
  zoomScale: userZoomScale,
}) => {
  const defaultZoomScale = userZoomScale ?? 1;
  const [glassSize, setGlassSize] = useState(userGlassSize);
  const [glassPosition, setGlassPosition] = useState({ x: 0, y: 0 });
  const [zoomContainerSize, setZoomContainerSize] = useState<
    { width: number; height: number } | undefined
  >();
  const [zoomContainerPosition, setZoomContainerPosition] = useState({ x: 0, y: 0 });
  const [zoomImageSize, setZoomImageSize] = useState({ width: 0, height: 0 });
  const [_isZoomVisible, setZoomVisible] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [zoomScale, setZoomScale] = useState<ZoomScale>({
    x: defaultZoomScale,
    y: defaultZoomScale,
  });
  const sourceImage = useRef<HTMLImageElement>();
  const zoomImage = useRef<HTMLImageElement>();
  const zoomContainer = useRef<HTMLDivElement>();
  const lens = useRef<HTMLDivElement | undefined>();
  // const previousTimeRef = useRef<number>();
  const animationFrameRef = useRef<number>();
  /* eslint-disable-next-line  */
  const scaleObserverRef = useRef();
  // const calculateZoomPosition = (e: MouseEvent) => {
  //   if (!sourceImage.current) return;
  //
  //   const rect = sourceImage.current.getBoundingClientRect();
  //   const userX = e.clientX - rect.left;
  //   const userY = e.clientY - rect.top;
  //   const zoomX = userX - glassSize.width / 2;
  //   const zoomY = userY - glassSize.height / 2;
  //   setZoomPosition({ x: zoomX, y: zoomY });
  // };

  // const toggleZoom = () => setZoomVisible(!isZoomVisible);
  const showZoom = () => setZoomVisible(true);
  const hideZoom = () => setZoomVisible(false);

  // const calcZoomImageWidth = () => {
  //   if (!zoomImage.current) return 0;
  //
  //   return zoomImage.current.naturalWidth * zoomScale.x;
  // };

  // const calcZoomImageHeight = () => {
  //   if (!zoomImage.current) return 0;
  //
  //   return zoomImage.current.naturalHeight * zoomScale.y;
  // };

  useEffect(() => {
    const image = sourceImage.current;
    if (!image) return;

    const calcScaleX = (width: number): number => {
      if (!zoomImage.current) return 1;

      return (zoomImage.current.naturalWidth * zoomScale.x) / width;
    };

    const calcScaleY = (height: number): number => {
      if (!zoomImage.current) return 1;

      return (zoomImage.current.naturalHeight * zoomScale.y) / (height || zoomImage.current.height);
    };

    let scaleX;
    let scaleY;
    image.onload = () => {
      zoomImage.current = image;
      if (!image) return;

      scaleX = calcScaleX(image.width);
      scaleY = calcScaleY(image.height);

      // const cx = zoomContainer.current.offsetWidth / glassSize.width;
      // const cy = zoomContainer.current.offsetHeight / glassSize.height;
      const cx = image.width / glassSize.width;
      const cy = image.height / glassSize.height;
      setZoomImageSize({
        width: image.width * cx,
        height: image.height * cy,
      });
      console.log('Loaded');
      setZoomContainerSize({ width: image.width, height: image.height });
      const clientRect = image.getBoundingClientRect();
      setZoomContainerPosition({ x: clientRect.width + 20, y: 0 });
    };

    // scaleX = calcScaleX(image.naturalWidth);
    // scaleY = calcScaleY(image.naturalHeight);
    setZoomScale({ x: scaleX, y: scaleY });

    image.addEventListener('mousemove', moveLens);
    image.addEventListener('mouseenter', showZoom);
    image.addEventListener('mouseleave', hideZoom);

    scaleObserver.current = new ResizeObserver(
      (entries: ResizeObserverEntry[], _observer: ResizeObserver) => {
        for (const entry of entries) {
          console.log(entry);
          // const { inlineSize: width, blockSize: height } = entry.contentBoxSize[0];
          // if (width && height) {
          // }
          //   setZoomContainerSize({ width, height });
        }
      },
    );

    scaleObserver.current.observe(image);
    // animationFrameRef.current = requestAnimationFrame(animate);
    return () => {
      image.removeEventListener('mousemove', moveLens);
      image.removeEventListener('mouseenter', showZoom);
      image.removeEventListener('mouseleave', hideZoom);
      scaleObserver.unobserve(image);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, [
    setZoomImageSize,
    setGlassSize,
    setZoomScale,
    glassSize.height,
    glassSize.width,
    moveLens,
    zoomScale.x,
    zoomScale.y,
  ]);

  const getCursorPos = (e: MouseEvent) => {
    if (!sourceImage.current) return { x: 0, y: 0 };

    /* Get the x and y positions of the sourceImage: */
    const a = sourceImage.current.getBoundingClientRect();
    /* Calculate the cursor's x and y coordinates, relative to the sourceImage: */
    let x = 0;
    let y = 0;
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    /* Consider any page scrolling: */
    // x = x - window.pageXOffset;
    // y = y - window.pageYOffset;
    x = x - window.scrollX;
    y = y - window.scrollY;
    return { x: x, y: y };
  };

  const moveLens = useMemo(
    (event: MouseEvent) => {
      event.preventDefault();
      if (!zoomContainer.current || !sourceImage.current) return;
      console.log('moveLens');

      /* Get the cursor's x and y positions: */
      /* Calculate the position of the zoomContainer.current: */
      /* Prevent the zoomContainer.current from being positioned outside the sourceImage. */
      const image = sourceImage.current;

      // Ensure the rectangle stays within the image

      // x = Math.min(x - clientRect.x, clientRect.x - glassSize.width);
      // y = Math.min(y - clientRect.y, clientRect.y);
      const pos = getCursorPos(event);
      /* Calculate the position of the portalEl.current: */
      let x;
      let y;
      const currentLens = lens.current;
      x = pos.x - currentLens.offsetWidth / 2;
      y = pos.y - currentLens.offsetHeight / 2;
      /* Prevent the portalEl.current from being positioned outside the image: */
      if (x > image.width - currentLens.offsetWidth) {
        x = image.width - currentLens.offsetWidth;
      }
      if (x < 0) {
        x = 0;
      }
      if (y > image.height - currentLens.offsetHeight) {
        y = image.height - currentLens.offsetHeight;
      }
      if (y < 0) {
        y = 0;
      }

      animationFrameRef.current = requestAnimationFrame(() => {
        setGlassPosition({ x, y });
        // console.log({ x, y });
        console.log({
          w2: zoomContainerSize.offsetWidth,
          h2: zoomContainerSize.offsetHeight,
          w: zoomImageSize.width,
          h: zoomImageSize.height,
        });
        const cx = zoomContainer.current.offsetWidth / currentLens.offsetWidth;
        const cy = zoomContainer.current.offsetHeight / currentLens.offsetHeight;
        // const cy = portalEl.current.offsetHeight / lens.offsetHeight;
        // const cx = portalEl.current.offsetWidth / lens.offsetWidth;
        setZoomPosition({ x: x * cx, y: y * cy });
      });
    },
    [
      zoomContainerSize.offsetHeight,
      zoomContainerSize.offsetWidth,
      zoomImageSize.height,
      zoomImageSize.width,
    ],
  );

  // const animate = (time) => {
  //   if (previousTimeRef.current !== undefined) {
  //     const deltaTime = time - previousTimeRef.current;
  //
  //     // Pass on a function to the setter of the state
  //     // to make sure we always have the latest state
  //     setCount((prevCount) => (prevCount + deltaTime * 0.01) % 100);
  //   }
  //   previousTimeRef.current = time;
  //   animationFrameRef.current = requestAnimationFrame(animate);
  // };

  // const zoomContainerHeight = React.useRef(scaleX * sourceImage.height);
  // const zoomPortalStyle = [
  //   `position: absolute; z-index: 1; width: '540px'`,
  //   `background-image: url("${props.largeImgSrc}"); background-size: ${portalImageWidth}px ${portalImageHeight}px;`,
  //   `background-repeat: no-repeat; background-position: -${zoomPosition.x}px -${zoomPosition.y}px; width: ${zoomContainerSize.width}px;`,
  //   `height: ${zoomContainerSize.height}px; transform: scale(${zoomScale.x}, ${zoomScale.y});`,
  // ].join();

  // if (sourceImage.current && zoomContainerPosition.x === 0) {
  //   const clientRect = sourceImage.current.getBoundingClientRect();
  // }

  return (
    <div style={{ position: 'relative', display: 'inline-block', '-webkit-transform-origin': 0 }}>
      <MagnifyingGlass
        ref={lens}
        x={glassPosition.x}
        y={glassPosition.y}
        size={glassSize.width}
      />
      <img
        ref={sourceImage}
        src={src}
        width={width}
        height={height}
        alt={alt}
        style={{ display: 'block' }}
      />
      {zoomContainerSize?.width && zoomContainerSize?.height && (
        <div
          ref={zoomContainer}
          style={{
            position: 'absolute',
            width: zoomContainerSize.width,
            height: zoomContainerSize.height,
            border: '1px solid #000',
            background: `url(${zoomImage.current?.src}) no-repeat`,
            backgroundSize: `${zoomImageSize.width}px ${zoomImageSize.height}px`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: `-${zoomPosition.x}px -${zoomPosition.y}px`,
            top: zoomContainerPosition.y,
            left: zoomContainerPosition.x,
            transform: `scale(${zoomScale.x}, ${zoomScale.y})`,
            cursor: 'none',
          }}
        />
      )}
    </div>
  );
};

export default ImageZoom;
