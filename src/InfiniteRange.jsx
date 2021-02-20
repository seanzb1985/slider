import React from 'react';
import Range from './Range';
import PropTypes from 'prop-types';

export default class InfiniteRange extends React.Component{
    static displayName = 'InfiniteRange';
    constructor(props) {
        super(props);
    }
    render() {
        const { min, max, minLabel, maxLabel, step } = this.props;
        const customMax = max;
        const customMin = min;
        const interval = customMax - customMin;
        let positiveInfinity = customMax + interval * 5 / 100;
        let negativeInfinity = customMin - interval * 5 / 100;
        // fix bug: GEDS-6916.
        if (step >= 1) {
            positiveInfinity = Math.ceil(positiveInfinity);
            negativeInfinity = Math.floor(negativeInfinity);
        }
        const customMarks = {
            [customMin]: <span title={customMin}>{minLabel}</span>,
            [customMax]: <span title={customMax}>{maxLabel}</span>
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