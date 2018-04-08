import React from 'react';
import Range from './Range';
import PropTypes from 'prop-types';

export default class InfiniteRange extends Range{
    constructor(props) {
        super(props);
        const { min, max } = props;
        this.customMax = max;
        this.customMin = min;
        const interval = this.customMax - this.customMin;
        this.positiveInfinity = this.customMax + interval * 5 / 100;
        this.negativeInfinity = this.customMin - interval * 5 / 100;
        this.customMarks = {
            [this.customMin]: 'Min',
            [this.customMax]: 'Max',
          }
    }
    render() {
        const customProps = {
            min: this.negativeInfinity,
            max: this.positiveInfinity,
            marks: this.customMarks,
            haveInfiniteValue: true,
            realMin: this.customMin,
            realMax: this.customMax,
        }
        const rangeProps = {...this.props, ...customProps}
        return (
            <Range
                {...rangeProps}
                />
        );
    }
}