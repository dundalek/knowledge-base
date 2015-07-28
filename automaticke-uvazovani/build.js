var kmd = require('../kmdoc.common').create({
    title: 'Automaticke Uvazovani',
    lang: 'cs_CZ'
});

kmd.use({'mindmap': {autoOpen: false, out: 'index-mindmap.json'}}, 'shortsource', 'toc', 'columns', 'tooltip', 'math', 'recall', 'autolink', 'search', 'flashcard');

kmd.addHead('<script>KMDoc.modules.tooltip.options.actions[1] = _.template(\'<a href="http://cs.wikipedia.org/w/index.php?search=<%=name%>" title="Wikipedia" target="_blank"><img class="favicon" src="http://cs.wikipedia.org/favicon.ico"></a>\'); KMDoc.modules.columns.options.columns = 1;</script>');

kmd.build();
