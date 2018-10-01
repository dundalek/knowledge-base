# KMDoc Knowledge Base

This repository contains knowledge represented using KMDoc software. The goal is to collect here knowledge from many fields and disciplines.

You can browse online versions of:

- [Chinese Notes](http://kb.knomaton.org/chinese/out/chinese.html)
- [Graph Theory glossary](http://kb.knomaton.org/graph-theory/)
- [Multi-Agent Systems](http://kb.knomaton.org/multi-agent-systems/)
- [JSON Schema rererence](http://kb.knomaton.org/json-schema/)
- [Automatické Uvažování (Automated Reasoning, available only in czech)](http://kb.knomaton.org/automaticke-uvazovani/)

Check out the source code of the [knowledge files](https://github.com/dundalek/knowledge-base) and  [kmdoc](https://github.com/dundalek/kmdoc) which powers this site.

## Build instructions

To build the resulting files yourself you can run following commands:

```sh
git clone --recursive https://github.com/dundalek/knowledge-base.git
cd components/kmdoc
npm install
cd ../..
./build.sh
```
