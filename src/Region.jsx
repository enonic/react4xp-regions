import React from 'react';

const ComponentTag = (component) => (component && component.path) ?
    `\t\t\t\t\t\t\n\t\t\t\t\t\t\t<!--# COMPONENT ${component.path} -->` :
    null;

export default ({regionData, name = "main", tag, clazz}) =>  {
    if (!((name || '').trim())) {
        console.error(`<Region NO_NAME> regionData: ${JSON.stringify(regionData)}`);
        throw Error(`Can't render <Region> without a name.`);
    }

    if (
        !regionData ||
        typeof regionData !== 'object' ||
        !Object.keys(regionData).length
    ) {
        console.error(`<Region "${name}"> regionData: ${JSON.stringify(regionData)}`);
        throw Error(`Can't render <Region "${name}"> without regionData.`);
    }

    const TAG = tag || "div";
    return <TAG
        data-portal-region={name}
        className={"xp-region " + (clazz ? clazz : name)}
        dangerouslySetInnerHTML={{
            __html: `\t\t\t\t\t${
                regionData.components && regionData.components.length > 0 ?
                    regionData.components
                        .map(component => ComponentTag(component))
                        .join('\n')                    :
                    ''
            }\t\t\t\t\t\n`,
        }}
    ></TAG>;
};
