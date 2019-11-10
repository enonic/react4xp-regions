import React from 'react';
import Region from 'react4xp-templates/Region';

export default ({content, regionTag}) => {
    const regions = Object.keys(
        (content.page || {}).regions || {}
    );
    return regions.map(regionName =>
        <Region key={regionName} name={regionName} tag={regionTag} {...{content}} />
    );
};
