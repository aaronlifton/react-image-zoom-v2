import { expect } from '@storybook/jest';
import type { Meta, StoryObj } from '@storybook/react';
import { fireEvent, userEvent, waitFor, within } from '@storybook/testing-library';
import { createRef } from 'react';
import { type ImageZoomProps, default as ImageZoom } from './ImageZoom';
import catImageUrl from './assets/cat.jpg';
import cat2ImageUrl from './assets/cat2.jpg';

const meta: Meta<typeof ImageZoom> = {
  title: 'Components/ImageZoom',
  component: ImageZoom,
  decorators: [
    (Story) => (
      <div className="h-full overflow-hidden">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    src: {
      options: ['cat.jpg', 'cat2.jpg'],
      control: { type: 'select' },
      mapping: {
        'cat.jpg': catImageUrl,
        'cat2.jpg': cat2ImageUrl,
      },
    },
  },
  //   glassSize: {
  //     options: [{width: 200}, {width: 300}],
  //     control: { type: 'select' },
  //   },
  // },
} satisfies Meta<typeof ImageZoom>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultProps: ImageZoomProps = {
  src: catImageUrl,
  width: 200,
  height: 200,
  zoomAlwaysVisible: true,
};

export const DefaultImageZoom: Story = {
  args: {
    ...defaultProps,
  },
};

export const HiddenByDefaultImageZoom: Story = {
  args: {
    ...defaultProps,
    zoomAlwaysVisible: false,
    useSmoothMovement: false,
  },
  play: async ({ canvasElement }) => {
    console.log('canvasElement', canvasElement);
    const canvas = within(canvasElement);
    const user = userEvent.setup();

    await waitFor(
      async () => {
        const imageTarget = canvas.getByRole('img');
        if (!imageTarget) throw new Error('imageTarget not found');

        expect(imageTarget).toHaveAttribute('src', '/lib/ImageZoom/assets/cat.jpg');
        expect(imageTarget).toHaveAttribute('width', '200');
      },
      { timeout: 250 },
    );

    let zoomContainer: HTMLDivElement | null;
    await waitFor(async () => {
      zoomContainer = canvasElement.querySelector('.zoom-container');
      if (!zoomContainer) throw new Error('zoomContainer not found');

      expect(canvasElement.querySelector('.zoom-container')).toHaveStyle({ display: 'none' });
      console.log({ display: zoomContainer.style.display });
    });
    let zoomImage: HTMLElement | null;
    await waitFor(async () => {
      zoomImage = canvasElement.querySelector('.zoom-image') as HTMLElement;
      expect(zoomImage).toBeDefined();
      if (!zoomImage) throw new Error('zoomImage not found');
    });
    await waitFor(
      async () => {
        const imageTarget = canvas.getByRole('img');
        await user.hover(imageTarget);
        expect(zoomImage).toHaveStyle({
          backgroundImage: 'url("http://127.0.0.1:6006/lib/ImageZoom/assets/cat.jpg")',
        });
        expect(zoomImage).toHaveStyle({
          backgroundSize: '1900px 1900px',
          backgroundPosition: '0px 0px',
        });

        const lensTarget = canvas.getByTestId('magnifying-glass');
        expect(lensTarget).toBeInTheDocument();
        const lensTargetRect = lensTarget.getBoundingClientRect();
        await user.pointer({
          node: imageTarget,
          coords: {
            // clientX: 100,
            // clientY: 100,
            clientX: lensTargetRect.x + lensTargetRect.width + 40,
            clientY: lensTargetRect.y + lensTargetRect.height + 40,
          },
        });
        const lensX = lensTargetRect.x;
        const lensY = lensTargetRect.y;
        let numWheelEvents = 0;
        const maxWheelEvents = 70;
        const wheelInterval = setInterval(() => {
          if (numWheelEvents++ > maxWheelEvents) {
            runLensTests();
            clearInterval(wheelInterval);
          }
          fireEvent.wheel(lensTarget, { clientX: lensX, clientY: lensY, deltaY: 0.1 });
        }, 1);

        const runLensTests = () => {
          const lensTarget = canvas.getByTestId('magnifying-glass');
          expect(lensTarget).toBeInTheDocument();
          const clientRect = lensTarget.getBoundingClientRect();
          const expectedWidth = Math.round(clientRect.width);
          const expectedHeight = Math.round(clientRect.height);
          expect(expectedWidth).toEqual(83);
          expect(expectedHeight).toEqual(83);
        };
      },
      { timeout: 550 },
    );
  },
};

const portalRef = createRef<HTMLDivElement>();
export const PortalImageZoom: Story = {
  decorators: [
    (Story) => (
      <div className="overflow-hidden flex-column">
        <div className="w-full flex">
          <div className="text-right border bg-gray-100 p-3 ml-auto flex-grow">1</div>
          <div
            id="portal-target"
            ref={portalRef}
            className="border bg-gray-100 p-3 ml-auto"
          >
            portal here
          </div>
        </div>
        <div className="w-full flex">
          <div className="text-right border bg-gray-100 p-3">
            <Story />
          </div>
          <div className="border bg-gray-100 p-3 flex-grow">2</div>
        </div>
      </div>
    ),
  ],
  args: {
    ...defaultProps,
    portal: portalRef,
  },
};
