import {styles} from './style';
import React from 'react';
import {Button} from 'react-native-elements';

function LongButton(props) {
  return (
    <Button
      {...props}
      type="solid"
      activeOpacity={0.8}
      buttonStyle={[styles.longButton, props.buttonStyle]}
      titleStyle={[styles.buttonTitle, props.titleStyle]}
      containerStyle={
        !props.isNotBottom && [styles.containerStyle, props.containerStyle]
      }
      disabledTitleStyle={[{color: 'white'}, props.disabledTitleStyle]}
      disabledStyle={[{backgroundColor: '#dbdae6'}, props.disabledTitleStyle]}
    />
  );
}

export default LongButton;
