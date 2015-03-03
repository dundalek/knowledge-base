
var fs = require('fs'),
    pinyin = require('./pinyin'),
    KMDoc = require('../kmdoc.common'),
    kmd = KMDoc.create({
        componentsPath:'../../components/',
        basename: 'out/chinese',
        title: 'Chinese notes'
    });

kmd.preprocess(function() {
    this.input = pinyin(this.input);
});

kmd.use('shortdef', 'toc', 'recall', 'columns', {'tts': {lang:'zh-CN'}}, 'search', 'tooltip', 'flashcard');

kmd.addStyle('htmlfiles/chinese.css')
   .addScript(kmd.options.componentsPath+'/pinyin.js/pinyin.tone.src.js')
   .addScript('htmlfiles/support.js')
   .addHead('<script>KMDoc.modules.tooltip.options.big = false;</script>');

function outputFile(f, defs) {
    fs.writeFileSync(f, pinyin(kmd.modules.flashcard.generate(defs)));
}

function isPhrase(str) {
    return str.match(/ /) && (str[0].toUpperCase() === str[0] || str[str.length-1].match(/[!.?]/));
}

kmd.postprocess(function() {
    var defs = this.definitions;
    var words = [],
        phrases = [];

    for (var i = 0; i < defs.length; i+=1) {
        if (isPhrase(defs[i].name) && isPhrase(defs[i].definition)) {
            phrases.push(defs[i]);
        } else {
            words.push(defs[i]);
        }
    }

    outputFile('out/vocabulary.csv', words);
    outputFile('out/phrases.csv', phrases);

    var tmpl = fs.readFileSync('caligraphy.tmpl', 'utf-8');

    var caligraphy = words.filter(function(x) {
            return x.name.match(/\([^A-Za-z]+\)/);
        }).map(function(x) {
            return {
                chinese: x.name.replace(/.*\(([^A-Za-z]+)\).*/, '$1'),
                pinyin: pinyin(x.name.replace(/\([^A-Za-z]+\)/, '')),
                trans: x.definition
            };
        });

    fs.writeFileSync('out/caligraphy.html', KMDoc.template(tmpl)({words: caligraphy}));
});

kmd.build();