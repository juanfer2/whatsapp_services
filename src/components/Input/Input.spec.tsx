import { render } from '@testing-library/react';
import React from 'react';

import Input from './index';

const Props = {};

beforeEach(() => {
  render(<Input {...Props} />);
});

test('Its rendering', () => {});
