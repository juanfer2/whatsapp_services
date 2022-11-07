import { render } from '@testing-library/react';
import React from 'react';

import Navbar from './index';

const Props = {
  
};

beforeEach(() => {
	render(<Navbar {...Props} />);	
});

test('Its rendering', () => { });
