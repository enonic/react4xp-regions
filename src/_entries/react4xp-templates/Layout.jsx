import React from 'react';
import RegionRange from 'react4xp-templates/RegionRange';

export default ({component, containerTag, containerClass, classesByName}) => {
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
        <RegionRange regionsObject={component.regions} classesByName={classesByName}/>
    </TAG>;
};
