import { AppRegistry } from 'react-native';
import App from './src/App';

AppRegistry.registerComponent('Demo', () => App);

import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
  'Warning: Failed child context type',
]);