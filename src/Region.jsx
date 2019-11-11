import React from 'react';

const ComponentTag = (component) => (component && component.path) ?
    `\t\t\t\t\t\t\n\t\t\t\t\t\t\t<!--# COMPONENT ${component.path} -->` :
    null;

export default (props) =>
{
    const {content, name = "main", tag} = props;
    if (!content || !content.page) {
        console.error('<Region> props: ' + JSON.stringify(props));
        throw Error("Can't render <Region> without content.page.");
    }
    const regionContent = ((content.page || {}).regions || {})[name] || {};

    // TODO: sanitize tag and name: not all characters (or tags) are acceptable
    const TAG = tag ?
        tag :
        (name === "main") ?
            "main" :
            "div";

    return <TAG
        data-portal-region={name}
        className="xp-region"
        dangerouslySetInnerHTML={{
            __html: `\t\t\t\t\t${
                regionContent.components && regionContent.components.length > 0 ?
                    regionContent.components
                        .map(component => ComponentTag(component))
                        .join('\n')                    :
                    ''
            }\t\t\t\t\t\n`,
        }}
    ></TAG>;
};
