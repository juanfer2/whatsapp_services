import { render } from '@testing-library/react';
import React from 'react';

import InfoLogin from './index';

const Props = {};

beforeEach(() => {
  render(<InfoLogin {...Props} />);
});

test('Its rendering', () => {});
