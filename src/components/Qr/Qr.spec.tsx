import { render } from '@testing-library/react';
import React from 'react';

import Qr from './index';

const Props = {};

beforeEach(() => {
  render(<Qr {...Props} />);
});

test('Its rendering', () => {});
