#!/bin/bash

for f in */; do cd "$f"; [ -e build.js ] && echo "$f" && node build.js; cd ..; done

echo -e "Title: KMDoc Knowledge Base\nHTML header: <link rel=\"stylesheet\" type=\"text/css\" href=\"components/bootstrap/css/bootstrap.min.css\">\n" | cat - README.md | multimarkdown | sed "s/<body>/<body>\n<div class=\"container\">/;s/<\\/body>/<\\/div>\n<\\/body>/" > index.html

rm -rf api
cp -r ./components/kmdoc/doc/api .
