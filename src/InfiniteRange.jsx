import React from 'react';
import Range from './Range';
import PropTypes from 'prop-types';

export default class InfiniteRange extends React.Component{
    static displayName = 'InfiniteRange';
    constructor(props) {
        super(props);
    }
    render() {
        const { min, max, minLabel, maxLabel } = this.props;
        const customMax = max;
        const customMin = min;
        const interval = customMax - customMin;
        const positiveInfinity = customMax + interval * 5 / 100;
        const negativeInfinity = customMin - interval * 5 / 100;
        const customMarks = {
            [customMin]: <span title={customMin}>{minLabel}</span>,
            [customMax]: <span title={customMax}>{maxLabel}</span>,
        };
        const customProps = {
            min: negativeInfinity,
            max: positiveInfinity,
            marks: customMarks,
            haveInfiniteValue: true,
            realMin: customMin,
            realMax: customMax
        };
        const rangeProps = {...this.props, ...customProps};
        return (
            <Range
                {...rangeProps}
            />
        );
    }
}