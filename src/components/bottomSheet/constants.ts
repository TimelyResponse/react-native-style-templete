import Animated, { Easing } from 'react-native-reanimated';
import { KEYBOARD_BEHAVIOR, KEYBOARD_BLUR_BEHAVIOR } from '../../constants';
import { exp } from '../../utilities/easingExp';

const DEFAULT_ANIMATION_EASING: Animated.EasingFunction = Easing.out(exp);

const DEFAULT_ANIMATION_DURATION = 500;
const DEFAULT_HANDLE_HEIGHT = 24;
const DEFAULT_OVER_DRAG_RESISTANCE_FACTOR = 2.5;
const DEFAULT_ENABLE_CONTENT_PANNING_GESTURE = true;
const DEFAULT_ENABLE_HANDLE_PANNING_GESTURE = true;
const DEFAULT_ENABLE_OVER_DRAG = true;
const DEFAULT_ENABLE_FLASH_SCROLLABLE_INDICATOR_ON_EXPAND = true;
const DEFAULT_ANIMATE_ON_MOUNT = false;

const DEFAULT_KEYBOARD_BEHAVIOR = KEYBOARD_BEHAVIOR.none;
const DEFAULT_KEYBOARD_BLUR_BEHAVIOR = KEYBOARD_BLUR_BEHAVIOR.none;

export {
  DEFAULT_ANIMATION_EASING,
  DEFAULT_ANIMATION_DURATION,
  DEFAULT_HANDLE_HEIGHT,
  DEFAULT_OVER_DRAG_RESISTANCE_FACTOR,
  DEFAULT_ENABLE_CONTENT_PANNING_GESTURE,
  DEFAULT_ENABLE_HANDLE_PANNING_GESTURE,
  DEFAULT_ENABLE_OVER_DRAG,
  DEFAULT_ENABLE_FLASH_SCROLLABLE_INDICATOR_ON_EXPAND,
  DEFAULT_ANIMATE_ON_MOUNT,
  DEFAULT_KEYBOARD_BEHAVIOR,
  DEFAULT_KEYBOARD_BLUR_BEHAVIOR,
};
