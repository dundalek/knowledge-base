
for f in */; do cd "$f"; [ -e build.js ] && echo "$f" && node build.js; cd ..; done

