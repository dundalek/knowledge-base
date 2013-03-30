var kmd = require('../components/kmdoc').create({componentsPath:'../components/'});

kmd.use('recall', 'autolink', 'tooltip', 'search', 'flashcard');

kmd.build();