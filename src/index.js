import Slider from './Slider';
import Range from './Range';
import Handle from './Handle';
import InfiniteRange from './InfiniteRange';
import createSliderWithTooltip from './createSliderWithTooltip';

Slider.Range = Range;
Slider.Handle = Handle;
Slider.createSliderWithTooltip = createSliderWithTooltip;
Slider.InfiniteRange = InfiniteRange;
export default Slider;
export { Range, Handle, createSliderWithTooltip };
