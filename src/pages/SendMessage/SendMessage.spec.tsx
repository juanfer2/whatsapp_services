import { render } from '@testing-library/react';
import React from 'react';

import SendMessage from './index';

const Props = {};

beforeEach(() => {
  render(<SendMessage {...Props} />);
});

test('Its rendering', () => {});
