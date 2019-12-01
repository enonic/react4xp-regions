import React from 'react';
import PropTypes from 'prop-types';

import Regions from 'react4xp-regions/Regions';

/**
 * @param content (mandatory object): a page's content data (e.g. from portal.getContent()).
 *      Has a .page.regions attribute, which is an object where keys are region names and values are region data (e.g. content.page.regions)
 * @param regionNames (optional string or array of strings): selects to display only one, or some specific, of the available regions in the
 *      regions data. The array defines sequence, so this can also be used to display of all regions in a specific order.
 *      If omitted, all regions are displayed in the order of Object.keys(regionsData).
 * @param regionClasses (optional boolean, string or object): HTML class for the region elements, added after "xp-region".
 *     If boolean, and it's true: adds a class that is the same as the name
 *     If string, all regions get that class.
 *     If object: keys are region names and values are a class name string for each region.
 * @returns A react4xp-representation (react component) of an XP page. Must be SERVER-SIDE-rendered by react4xp!
 */
const Page = ({ content, regionNames, regionClasses }) => {
    if (
        !content ||
        !content.page ||
        typeof content.page  !== 'object' ||
        !(Object.keys(content.page).length)
    ) {
        console.error(`<Page> missing content.page - content: ${JSON.stringify(content)}`);
        throw Error(`Can't render <Page displayName="${content.displayName}"> without content.page.`);
    }


    return <html>
        <head>
            {content.displayName ? <title>{content.displayName}</title> : null}
        </head>

        <body className="xp-page">
            <Regions regions={content.page.regions} classes={regionClasses} names={regionNames} />
        </body>
    </html>;

};


Page.propTypes = {
    content: PropTypes.shape({
        displayName: PropTypes.string,
        page: PropTypes.shape({
            regions: PropTypes.objectOf(PropTypes.object).isRequired,
        }).isRequired,
    }).isRequired,
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

export default Page;
