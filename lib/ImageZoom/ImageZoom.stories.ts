import type { Meta, StoryObj } from '@storybook/react';

import { default as ImageZoom, type ImageZoomProps } from './ImageZoom';
import catImageUrl from './assets/cat.jpg';

const meta = {
  title: 'Components/ImageZoom',
  component: ImageZoom,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  // argtypes: {
  //   src: {
  //     options: ["cat.jpg", "lion.jpg"],
  //     control: { type: 'select' },
  //   },
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
  glassSize: { width: 40, height: 40 },
  zoomScale: 1,
  width: 200,
  height: 200,
};

export const DefaultButtonImageZoom: Story = {
  args: {
    ...defaultProps,
  },
};
