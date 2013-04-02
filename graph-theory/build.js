var kmd = require('../components/kmdoc').create({
    componentsPath:'../components/',
    title: 'Graph Theory glossary'
});

kmd.use('recall', 'autolink', 'tooltip', 'search', 'flashcard');

kmd.build();