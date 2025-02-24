import { Dimensions, Platform } from 'react-native';

// Width of Your MObile Screen.
const { width } = Dimensions.get('window');

// Standard width of mobile screen.
const STANDARD_WIDTH = 375;

// Width of your mobile screen.
const CURRENT_WIDTH = width;

// Ratio of  YOUR MOBILE SCREEN/STANDARD WIDTH SCREEN.
const K = CURRENT_WIDTH / STANDARD_WIDTH;

const USE_FOR_BIGGER_SIZE = true;

// So,dynamicSize is used to set width,Height of Card,Block,Images,etc.
export function dynamicSize(size) {
  var adjustSize = size;
  // if (Platform.OS === 'ios')
  // {
  //   if(width < 550)
  //   {
  //     return K * adjustSize
  //   }
  //   else
  //   {
  //     return adjustSize*K*0.57
  //   }
  // }
  // else
  // {
    if(width < 550)
    {
      return K * adjustSize
    }
    else
    {
      return adjustSize*K*0.57
    }
  }
// }

// And getFontSize is used for fontSize of the Text.
export function getFontSize(size) {
  if (USE_FOR_BIGGER_SIZE || CURRENT_WIDTH < STANDARD_WIDTH) {
    const newSize = dynamicSize(size);
    return newSize;
  }
  return size;
}
