import React from 'react';
import Region from 'react4xp-templates/Region';

export default ({regionsObject, regionTag, classesByName}) => {
    if (
        !regionsObject ||
        typeof regionsObject !== 'object'
    ) {
        console.error('<RegionRange> regionsObject: ' + JSON.stringify(regionsObject));
        throw Error("Can't render <RegionRange> without regionsObject.");
    }

    // TODO: sanitize tag and name: not all characters (or tags) are acceptable
    return Object.keys(regionsObject).map(name => <Region
        key={name}
        name={name}
        regionData={regionsObject[name]}
        tag={regionTag ? regionTag :
            (name === "main") ? "main" : null
        }
        clazz={(classesByName || {})[name]}
    />);
};
