# react4xp-templates

**Optional ready-made React4xp templates**

Contains raw JSX files meant to be _automatically detected and compiled_ in a standard Enonic XP project with React4xp (such as [the React4xp starter](https://developer.enonic.com/templates/react4xp)).

**Prerequisites** for auto-detecting and -compilation are these package versions in the parent project:
* **react4xp-buildconstants**: version 0.7.10 or above,
* **react4xp-build-components**: version 0.3.11 or above.


[The React4xp library](https://github.com/enonic/lib-react4xp) (version **0.3.9** and above) has functions for using these directly, for example rendering a page controller with regions, with minimal boilerplate.


## Install

```bash
npm add --save-dev react4xp-templates
```

Also check your project's `package.json`: if `react4xp-buildconstants` or `react4xp-build-components` versions are too low, they need to be upgraded similar to this.

## Usage

After adding this package and building the project, these templates are compiled _as if they were located in the React4xp project_ under `src/main/resources/react4xp`. This means:

* JSX files under `_entries` become React4xp entries with jsxPaths relative to the `_entries` directory,
* and the rest become `import`-able from `react4xp-templates` in client-side JS and JSX:


Server-side, in a page controller:

```javascript
const React4xp = require('/lib/enonic/react4xp');
const portal = require('/lib/xp/portal');

exports.get = request => {
	const content = portal.getContent();
	return React4xp.render(
	    'react4xp-templates/Page', {	// <-- jsxPath to _entries/react4xp-templates/Page.jsx
		    content,
		    regions: "main" 
		}, request
	);
}
```

Client-side, in an entry (before compilation):

```javascript
import React from 'react';
import Region from 'react4xp-templates/Region';		// <-- standard webpack import path, not jsxPath

return (props) => <Region {...{props}} />;
```
