import { render } from '@testing-library/react';
import React from 'react';

import ErrorPage from './index';

const Props = {
  
};

beforeEach(() => {
	render(<ErrorPage {...Props} />);	
});

test('Its rendering', () => { });
