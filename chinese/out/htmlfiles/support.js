
(function() {

	KMDoc.modules.tooltip.options.actions.unshift(function(def) {
	    if (def.name.match(/\([^A-Za-z]+\)/)) {
	        var t = def.name.match(/\(([^A-Za-z]+)\)/)[1];
	        return '<a title="See the stroke order" href="http://lost-theory.org/ocrat/chargif/search.py?string='+t+'" class="brush" target="_blank">&nbsp;</a>';
	    }
	    return '';
	});

	var PINYIN_TONE_DICT = {};

	for (var i = PINYIN_TONE.length-1; i >= 0; i -= 1) {
	    PINYIN_TONE_DICT[PINYIN_TONE[i][0]] = PINYIN_TONE[i][1];
	}
	PINYIN_TONE_DICT['zi'] = PINYIN_TONE_DICT['zè'];

	function pinyin2zh(x) {
	    x = x.toLowerCase();
	    if (x in PINYIN_TONE_DICT) {
	        return PINYIN_TONE_DICT[x][0];
	    } else {
	        for (var i = x.length; i > 0; i -= 1) {
	            var tmp = x.substring(0, i);
	            if (tmp in PINYIN_TONE_DICT) {
	                return PINYIN_TONE_DICT[tmp][0] + pinyin2zh(x.substring(i));
	            }
	        }
	    }
	    return '';
	}

	var tmpl = KMDoc.modules.tts.options.template;

	function defText(def) {
		var t = def.name;
		if (t.match(/\([^A-Za-z]+\)/)) {
		    t = t.match(/\(([^A-Za-z]+)\)/)[1];
		} else {
		    var words = t.replace(/\([^A-Za-z]+\)/g, ' ').split(/\s+/);
		    t = words.map(pinyin2zh).join(' ');
		}
		return tmpl({name: t});
	}

	KMDoc.modules.tts.options.template = defText;
  KMDoc.modules.tts.options.lang = 'zh-CN';

})();
