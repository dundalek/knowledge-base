(function (factory) {
    if (typeof module !== 'undefined' && typeof module.exports !== 'undefined' && typeof require !== 'undefined') {
        // CommonJS
        module.exports = factory();
    } else {
        // running in browser
        window.pinyin = factory();
    }
})(function() {
    var tones = [
        'a ɑ e i o u ü A E I O U Ü', // neutral, 0, 5
        'ā ɑ̄ ē ī ō ū ǖ Ā Ē Ī Ō Ū Ǖ', // 1
        'á ɑ́ é í ó ú ǘ Á É Í Ó Ú Ǘ', // 2
        'ǎ ɑ̌ ě ǐ ǒ ǔ ǚ Ǎ Ě Ǐ Ǒ Ǔ Ǚ', // 3
        'à ɑ̀ è ì ò ù ǜ À È Ì Ò Ù Ǜ', // 4
    ];

    tones = tones.map(function(x) {return x.split(' ')});

    var regex = new RegExp('([' + tones[0].join('') + '])([0-5])', 'g');

    function pinyin(str) {
        return str.replace(regex, function(match, vowel, tone) {
            tone = parseInt(tone);
            var idx = tones[0].indexOf(vowel);
            if (tone === 0 || tone === 5) {
                return vowel;
            } else if (idx === -1) {
                return vowel + tone;
            }
            return tones[tone][idx];
        });
    }

    //pinyin('qia3 ke4 li');

    return pinyin;
});
