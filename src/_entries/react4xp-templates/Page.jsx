import React from 'react';
import RegionRange from 'react4xp-templates/RegionRange';

export default ({ title, ...props }) =>   // TODO: Allow custom head elements through props?
    <html>
        <head>
            {title ? <title>{title}</title> : null}
        </head>

        <body className="xp-page">
            <RegionRange {...props} />
        </body>
    </html>;
