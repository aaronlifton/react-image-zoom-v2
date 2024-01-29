import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { setProjectAnnotations } from '@storybook/react';
import { afterEach } from 'vitest';
import * as globalStorybookConfig from '../../.storybook/preview';
import type { ProjectAnnotations } from '../../node_modules/@storybook/react/dist/index';

setProjectAnnotations(globalStorybookConfig as ProjectAnnotations);

afterEach(() => {
  cleanup();
});
