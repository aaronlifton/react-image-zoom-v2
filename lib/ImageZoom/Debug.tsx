import { type RenderProps } from './ImageZoom';
const Debug: React.FC<RenderProps> = ({
  zoomScale,
  glassSize,
  zoomPosition,
  zoomImageSize,
  glassPosition,
  isLoaded,
}: RenderProps) => {
  return (
    <div
      id="debug"
      data-testid="debug"
    >
      <div className="flex flex-row gap-1">
        <div>Scale</div>
        <div>
          ({zoomScale.x.toFixed(2)},{zoomScale.y.toFixed(2)})
        </div>
        <div>glassSize</div>
        <div>
          ({glassSize.width.toFixed(2)},{glassSize.height.toFixed(2)}
        </div>
        <div>zoomPosition</div>
        <div>
          ({zoomPosition.x.toFixed(2)},{zoomPosition.y.toFixed(2)})
        </div>
        <div>zoomImageSize</div>
        <div>
          {zoomImageSize.width.toFixed(2)}x{zoomImageSize.height.toFixed(2)}
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
        <div>glassPosition</div>
        <div>
          ({glassPosition.x.toFixed(2)},{glassPosition.y.toFixed(2)})
        </div>
        <div>Loaded</div>
        <div>{isLoaded ? 'true' : 'false'}</div>
      </div>
    </div>
  );
};

export default Debug;
