import React from 'react';
import PropTypes from 'prop-types';

const Grid = ({ columns, rows, spacing, height, minChildWidth, breakpoints, children, ...restProps }) => {
    const gridStyles = {
        display: 'grid',
        gridTemplateColumns: `repeat(${ columns }, minmax(${ minChildWidth }, 1fr))`,
        gridTemplateRows: rows ? `repeat(${ rows }, 1fr)` : 'auto',
        gridGap: spacing,
        height,
    };

    const mediaQueryStyles = Object.keys(breakpoints).map((breakpoint) => {
        const breakpointValue = breakpoints[ breakpoint ];
        return {
            [ `@media (min-width: ${ breakpointValue })` ]: {
                gridTemplateColumns: breakpointValue.columns ? `repeat(${ breakpointValue.columns }, minmax(${ minChildWidth }, 1fr))` : 'auto',
                gridTemplateRows: breakpointValue.rows ? `repeat(${ breakpointValue.rows }, 1fr)` : 'auto',
                gridGap: breakpointValue.spacing || spacing,
                height: breakpointValue.height || height,
            },
        };
    });

    const mergedStyles = [ gridStyles, ...mediaQueryStyles ].reduce((acc, style) => ({ ...acc, ...style }), {});

    return (
        <div style={ mergedStyles } { ...restProps }>
            { children }
        </div>
    );
};

Grid.propTypes = {
    columns: PropTypes.number.isRequired,
    rows: PropTypes.number,
    spacing: PropTypes.string,
    height: PropTypes.string,
    minChildWidth: PropTypes.string,
    breakpoints: PropTypes.object,
    children: PropTypes.node,
};

export default Grid;
