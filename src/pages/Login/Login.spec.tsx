import { render } from '@testing-library/react';
import React from 'react';

import Login from './index';

const Props = {};

beforeEach(() => {
  render(<Login {...Props} />);
});

test('Its rendering', () => {});
