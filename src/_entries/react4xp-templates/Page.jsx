import React from 'react';
import Region from 'react4xp-templates/Region';

export default ({
    regions,
    content,
    title,
    regionTag
    // TODO: Allow custom head elements through props?
                }) =>
    [
        '<!DOCTYPE html>',
        <html>
            <head>
                { title ?
                    <title>{title}</title> :
                    null
                }
            </head>

            <body className="xp-page">
                {
                    regions ?
                        regions.map(region => <Region {...{content}} name={region} tag={regionTag} />) :
                        null
                }
            </body>
        </html>
    ];
