

// leave only source link
KMDoc.modules.tooltip.options.actions = KMDoc.modules.tooltip.options.actions.slice(0,1);

// add google with JSON Schema prefix
KMDoc.modules.tooltip.options.actions.push(_.template('<a href="http://www.google.com/search?query=JSON+Schema+<%=name%>" title="Search on Google" target="_blank"><img class="favicon" src="http://www.google.com/favicon.ico"></a>'));