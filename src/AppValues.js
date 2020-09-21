import {Dimensions, Platform} from 'react-native';

const {width: deviceWidth, height: deviceHeight} = Dimensions.get('window');

export const WIDTH_DEVICE = deviceWidth;

export const HEGHT_DEVICE = deviceHeight;
export const IS_PHONE_X =
  Platform.OS === 'ios' &&
  (WIDTH_DEVICE === 812 ||
    HEGHT_DEVICE === 812 ||
    WIDTH_DEVICE === 896 ||
    HEGHT_DEVICE === 896);

export const COLOR_BG_WHITE = '#ffff';

export const COLOR_BG_RED = '#ff0000';

export const COLOR_BG_BLUE = '#3e8ada';

export const COLOR_BG_GREY = '#eee';

export const COLOR_BG_GREEN = '#34c65b';

export const COLOR_BG_ORANGE = '#fbad86';

export const COLOR_BG_WHITE_GRAY = '#f5ffff';

export const COLOR_BG_DARK_GREY = '#2f3c48';

export const COLOR_BG_BLACK = '#000000';

export const COLOR_BG_APP = '#eaeaea';
