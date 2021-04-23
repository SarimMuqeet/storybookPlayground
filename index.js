/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

const IS_STORYBOOK_ENABLED = true

if(IS_STORYBOOK_ENABLED)
{
    require('./storybook/index')
} else {
    AppRegistry.registerComponent(appName, () => App);
}


