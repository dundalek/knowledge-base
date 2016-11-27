var kmd = require('../kmdoc.common').create({
    title: 'Graph Theory glossary',
    fileIn: '../kb/graph-theory.md',
    basename: 'index',
});

kmd.use('recall', 'autolink', 'tooltip', 'search', 'flashcard');

kmd.build();
