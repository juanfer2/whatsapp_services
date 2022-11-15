import { render } from '@testing-library/react';
import React from 'react';

import TextArea from './index';

const Props = {
  
};

beforeEach(() => {
	render(<TextArea {...Props} />);	
});

test('Its rendering', () => { });
