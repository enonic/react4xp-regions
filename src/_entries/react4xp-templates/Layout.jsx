import React from 'react';
import PropTypes from 'prop-types';

import Regions from 'react4xp-templates/Regions';

/**
 * @param component (mandatory object): component data (e.g. from portal.getComponent()).
 *      Has a .regions attribute, which is an object where keys are region names and values are region data (e.g. component.regions)
 * @param containerTag (optional string): the HTML tag of the layout's outer container element. Defaults to 'div'.
 * @param containerClass (optional string): the HTML class of the layout's outer container element. No default.
 * @param regionNames (optional string or array of strings): selects to display only one, or some specific, of the available regions in the
 *     regions data. The array defines sequence, so this can also be used to display of all regions in a specific order.
 *     If omitted, all regions are displayed in the order of Object.keys(component.regions).
 * @param regionClasses (optional boolean, string or object): HTML class for the region elements, added after "xp-region".
 *     If boolean, and it's true: adds a class that is the same as the name
 *     If string, all regions get that class.
 *     If object: keys are region names and values are a class name string for each region.
 * @returns A react4xp-representation (react component) of an XP layout. Must be SERVER-SIDE-rendered by react4xp!
 */
const Layout = ({ component, containerTag, containerClass, regionNames, regionClasses }) => {
    if (
        !component ||
        typeof component  !== 'object' ||
        !(Object.keys(component).length)
    ) {
        console.error(`<Layout> missing component: ${JSON.stringify(component)}`);
        throw Error(`Can't render <Layout> without component.`);
    }

    const TAG = containerTag || 'div';

    return <TAG className={containerClass}>
        <Regions regionsData={component.regions} classes={regionClasses} names={regionNames}/>
    </TAG>;
};


Layout.propTypes = {
    component: PropTypes.shape({
        regions: PropTypes.objectOf(PropTypes.object).isRequired,
    }).isRequired,
    containerTag: PropTypes.string,
    containerClass: PropTypes.string,
    regionNames: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string),
    ]),
    regionClasses: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string,
        PropTypes.objectOf(PropTypes.string),
    ]),
};

export default Layout;
