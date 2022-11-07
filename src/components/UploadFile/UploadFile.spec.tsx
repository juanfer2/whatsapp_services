import { render } from '@testing-library/react';
import React from 'react';

import UploadFile from './index';

const Props = {};

beforeEach(() => {
  render(<UploadFile {...Props} />);
});

test('Its rendering', () => {});
