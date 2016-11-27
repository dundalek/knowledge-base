var kmd = require('../kmdoc.common').create({
    title: 'JSON Schema',
    fileIn: '../kb/json-schema.md',
    basename: 'index',
});

kmd.use('recall', 'autolink', 'tooltip', 'search', 'toc', 'shortsource');

kmd.addStyle('style.css');
kmd.addScript('custom.js');

var transformDef = kmd.transformDef;

kmd.transformDef = function(def) {
    def = transformDef.call(this, def);

    return def;
}

kmd.build();
