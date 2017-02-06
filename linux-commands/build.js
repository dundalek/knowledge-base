var kmd = require('../kmdoc.common').create({
    title: 'Linux Commands',
    fileIn: '../kb/linux-commands.md',
    basename: 'index',
});

kmd.use('recall', 'autolink', 'tooltip', 'search', 'toc', 'shortsource', {'docset': { name: 'LinuxCommands' }});

kmd.build();
