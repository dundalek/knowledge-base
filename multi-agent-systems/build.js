var kmd = require('../kmdoc.common').create({
    title: 'Multi-Agent Systems'
});

kmd.use({'mindmap': {autoOpen: true, out: 'index-mindmap.json'}}, 'shortsource', 'toc', 'tooltip', 'math', 'recall', 'autolink', 'search', 'flashcard');

kmd.build();
