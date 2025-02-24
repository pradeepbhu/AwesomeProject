import React, {useState} from 'react';
import {
  StatusBar,
} from 'react-native';
import { COLORS } from './theme';

const STYLES = ['default', 'dark-content', 'light-content'];
const TRANSITIONS = ['fade', 'slide', 'none'];

const CustomStatusBar = ({backgroundColor = COLORS.transparent,theme = 1}) => {
  const [hidden, setHidden] = useState(false);
  const [statusBarStyle, setStatusBarStyle] = useState(STYLES[theme]);
  const [statusBarTransition, setStatusBarTransition] = useState(
    TRANSITIONS[0],
  );

  return (
      <StatusBar
        animated={true}
        translucent={true}
        backgroundColor={backgroundColor}
        barStyle={statusBarStyle}
        showHideTransition={statusBarTransition}
        hidden={hidden}
      />
  );
};

export default CustomStatusBar;
