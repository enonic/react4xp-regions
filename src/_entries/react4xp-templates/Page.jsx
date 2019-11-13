import React from 'react';
import RegionRange from 'react4xp-templates/RegionRange';

export default ({ content }) => {
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
            <RegionRange regionsObject={content.page.regions} />
        </body>
    </html>;
};
