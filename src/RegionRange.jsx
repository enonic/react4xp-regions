import React from 'react';
import Region from 'react4xp-templates/Region';

export default (props) => {
    const {content, regionTag} = props;
    if (!content || !content.page) {
        console.error('<RegionRange> props: ' + JSON.stringify(props));
        throw Error("Can't render <RegionRange> without content.page.");
    }
    const regions = Object.keys(
        (content.page || {}).regions || {}
    );
    return regions.map(regionName =>
        <Region key={regionName} name={regionName} tag={regionTag} {...{content}} />
    );
};
