import React from 'react';
import RegionRange from 'react4xp-templates/RegionRange';

export default ({ content }) =>
    <html>
        <head>
            { /*  TODO: Allow custom head elements through props? Or the other way: skip title to keep this minimal? */ }
            {content.displayName ? <title>{content.displayName}</title> : null}
        </head>

        <body className="xp-page">
            <RegionRange {...{content}} />
        </body>
    </html>;
