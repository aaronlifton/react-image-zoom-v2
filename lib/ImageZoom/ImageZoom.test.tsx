import { composeStories } from '@storybook/react';
import { userEvent } from '@storybook/testing-library';
import { fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import * as stories from './ImageZoom.stories';
// import { delay } from '../test/util';
const { DefaultImageZoom, HiddenByDefaultImageZoom, PortalImageZoom } = composeStories(stories);

it('moves the lens on mousemove and zooms with the mouse wheel', async () => {
  HiddenByDefaultImageZoom.play(screen);
});

it('Hides the zoom image by default', async () => {
  render(<HiddenByDefaultImageZoom debug={true} />);
  const canvas = within(document.querySelector('body') as HTMLElement);
  const user = userEvent.setup();

  await waitFor(
    async () => {
      const imageTarget = canvas.getByRole('img');
      expect(imageTarget).toHaveAttribute('src', '/lib/ImageZoom/assets/cat.jpg');
      expect(imageTarget).toHaveAttribute('width', '200');
    },
    { timeout: 250 },
  );

  await waitFor(async () => {
    const zoomContainer = document.querySelector('.zoom-container');
    if (!zoomContainer) {
      throw new Error('zoomContainer not found');
    }
    console.log('DISPLAY', (zoomContainer as HTMLElement)?.style?.display);
    expect(document.querySelector('.zoom-container')).toHaveStyle({ display: 'none' });
  });

  await waitFor(
    async () => {
      user.hover(canvas.getByRole('img'));

      expect(document.querySelector('.zoom-container')).toHaveStyle({ display: 'block' });

      const imageTarget = canvas.getByRole('img');
      fireEvent.load(imageTarget);
      const zoomImage = document.querySelector('.zoom-image') as HTMLElement;
      expect(zoomImage).toBeDefined();
      if (!zoomImage) {
        throw new Error('zoomImage not found');
      }

      expect(zoomImage).toHaveStyle({
        background: 'url("http://localhost:3000/lib/ImageZoom/assets/cat.jpg")',
      });
    },
    { timeout: 250 },
  );
});

it.todo('tests play function', async () => {
  const canvasElement = document;
  const canvas = screen;

  // const canvas = within(canvasElement);
  const user = userEvent.setup();

  render(<DefaultImageZoom debug={true} />);
  // test
  await waitFor(
    async () => {
      const imageTarget = canvas.getByRole('img');
      expect(imageTarget).toHaveAttribute('src', '/lib/ImageZoom/assets/cat.jpg');
      expect(imageTarget).toHaveAttribute('width', '200');
    },
    { timeout: 550 },
  );

  let zoomContainer: HTMLDivElement | null;
  await waitFor(
    async () => {
      //test
      zoomContainer = canvasElement.querySelector('.zoom-container');
      if (!zoomContainer) throw new Error('zoomContainer not found');

      expect(canvasElement.querySelector('.zoom-container')).toHaveStyle({ display: 'none' });
    },
    { timeout: 550 },
  );
  let zoomImage: HTMLElement | null;
  await waitFor(
    async () => {
      zoomImage = canvasElement.querySelector('.zoom-image') as HTMLElement;
      expect(zoomImage).toBeDefined();
      if (!zoomImage) throw new Error('zoomImage not found');
    },
    { timeout: 550 },
  );
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
});

// it('doesnt zoom more than 100%', async () => {
//   render(<DefaultImageZoom debug={true} />);
//   const firstImage = screen.getAllByRole('img')[0] as Element;
//   expect(firstImage).toBeInTheDocument();
//
//   const user = userEvent.setup();
//   await user.hover(firstImage);
//   await waitFor(
//     async () => {
//       const lensTarget = screen.getByTestId('magnifying-glass');
//       expect(lensTarget).toBeInTheDocument();
//     },
//     { timeout: 200 },
//   );
//
//   const lensTarget = screen.getByTestId('magnifying-glass');
//   user.hover(lensTarget);
//   fireEvent.load(firstImage);
//   await waitFor(
//     () => {
//       expect(firstImage).toHaveAttribute('width', '200');
//     },
//     { timeout: 200 },
//   );
//
//   let zoomContainer: HTMLDivElement | null;
//   await waitFor(
//     async () => {
//       zoomContainer = document.querySelector('.zoom-container');
//       if (!zoomContainer) throw new Error('zoomContainer not found');
//
//       const zoomImage = document.querySelector('.zoom-image') as HTMLElement;
//       expect(zoomImage).toBeDefined();
//       if (!zoomImage) throw new Error('zoomImage not found');
//
//       const imageTarget = screen.getByRole('img');
//       await user.hover(imageTarget);
//       expect(zoomImage).toHaveStyle({
//         backgroundImage: 'url("http://localhost:6006/lib/ImageZoom/assets/cat.jpg")',
//         backgroundSize: '1900px 1900px',
//         backgroundPosition: '0px 0px',
//       });
//
//       const lensTarget = screen.getByTestId('magnifying-glass');
//       expect(lensTarget).toBeInTheDocument();
//       const lensTargetRect = lensTarget.getBoundingClientRect();
//       await user.pointer({
//         node: imageTarget,
//         coords: {
//           // clientX: 100,
//           // clientY: 100,
//           clientX: lensTargetRect.x + lensTargetRect.width + 40,
//           clientY: lensTargetRect.y + lensTargetRect.height + 40,
//         },
//       });
//       const lensX = lensTargetRect.x;
//       const lensY = lensTargetRect.y;
//       let numWheelEvents = 0;
//       const maxWheelEvents = 70;
//       const wheelInterval = setInterval(() => {
//         if (numWheelEvents++ > maxWheelEvents) {
//           runLensTests();
//           clearInterval(wheelInterval);
//         }
//         fireEvent.wheel(lensTarget, { clientX: lensX, clientY: lensY, deltaY: 0.1 });
//       }, 1);
//
//       const runLensTests = () => {
//         const lensTarget = screen.getByTestId('magnifying-glass');
//         expect(lensTarget).toBeInTheDocument();
//         const clientRect = lensTarget.getBoundingClientRect();
//         const expectedWidth = Math.round(clientRect.width);
//         const expectedHeight = Math.round(clientRect.height);
//         expect(expectedWidth).toEqual(83);
//         expect(expectedHeight).toEqual(83);
//       };
//     },
//     { timeout: 350 },
//   );
// });

it('handles errors', async () => {
  render(<PortalImageZoom />);
  expect(screen.getAllByRole('img')[0]).toBeInTheDocument();

  // expect(await screen.findByText(/error loading posts/i)).toBeInTheDocument();
  return;
});
