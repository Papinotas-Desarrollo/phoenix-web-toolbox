import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, number, color } from '@storybook/addon-knobs';
import SimpleSpinner from '../src/SimpleSpinner/SimpleSpinner';

/** Story for SimpleSpinner */
const addSimpleSpinnerStory = stories => {
  stories.addDecorator(withKnobs).add('SimpleSpinner', () => {
    const size = number('Size', 25);
    const mainColor = color('Main Color', '#3498DB');
    const altColor = color('Alt Color', '#F3F3F3');
    return <SimpleSpinner size={size} mainColor={mainColor} altColor={altColor} />;
  });
};

const stories = storiesOf('Loading', module);
addSimpleSpinnerStory(stories);
export default stories;
