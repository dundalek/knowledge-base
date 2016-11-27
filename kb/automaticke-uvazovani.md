
# Automatické uvažování

Zde jsou poznámky z předmětu [Automatické uvažování (A4M33AU)](https://cw.fel.cvut.cz/wiki/courses/a4m33au/start) vyučovaném na [ČVUT FEL](https://www.fel.cvut.cz/cz).

Dále doporučuji tuto stránku o [výrokové logice](http://www.phil.muni.cz/fil/logika/vl.php).

## Úvod

Pozorování @http://cw.felk.cvut.cz/lib/exe/fetch.php/courses/a4m33au/01-uvod.pdf#4
: pozorováním lze získat omezené znalosti týkající se objektů v našem dosahu.
example: Pozorováním mohu získat znalost: "Pes, kterého vidím, má čtyři nohy." Ale nemohu pozorováním zjisit platnost tvrzení: "Všichni psi mají nejvýše čtyři nohy." Protože není v mých silách prozkoumat všechny psy na světě.

Uvažování @http://cw.felk.cvut.cz/lib/exe/fetch.php/courses/a4m33au/01-uvod.pdf#5
: Konstruování (neintuitivních) závěrů z daných předpokladů. Cílem uvažování je odvodit znalost, kterou nemůžeme (nebo nechceme) získat pozorováním. Uvažování je smysluplné (korektní), pokud jím získané závěry jsou pravdivé.

Logika @http://cw.felk.cvut.cz/lib/exe/fetch.php/courses/a4m33au/01-uvod.pdf#7
: Matematický obor zkoumající exaktní postupy uvažování.

Syntaxe @http://cw.felk.cvut.cz/lib/exe/fetch.php/courses/a4m33au/01-uvod.pdf#8
: Syntaxe logiky je ta část logiky, která se zabývá formální popisem logického jazyka, aniž by mu přiřazovala význam či zkoumala pravdivost.

Sémantika @http://cw.felk.cvut.cz/lib/exe/fetch.php/courses/a4m33au/01-uvod.pdf#9
: je ta část logiky, která se zabývá přiřazováním významu symbolům a dalším konstrukcím jazyka logiky.

Korektnost @http://cw.felk.cvut.cz/lib/exe/fetch.php/courses/a4m33au/01-uvod.pdf#12
: Uvažování (v logice i jinde) přináší prospěch jen pokud jeho výsledky jsou pravdivá tvrzení. Takovému uvažování (takovým deduktivním pravidlům) říkáme korektní.

nekonzistentní systémy @http://cw.felk.cvut.cz/lib/exe/fetch.php/courses/a4m33au/01-uvod.pdf#13
: systémy, v nichž lze dokázat nepravdivá tvrzení.

neúplné systémy @http://cw.felk.cvut.cz/lib/exe/fetch.php/courses/a4m33au/01-uvod.pdf#13
: systémy ve kterých nelze dokázat to, co potřebujeme.

Russelův paradox @http://cw.felk.cvut.cz/lib/exe/fetch.php/courses/a4m33au/01-uvod.pdf#14
: Pokud použijeme neformální definici množiny: Všechny objekty s danou vlastnosti tvoří množinu.

Gödelova věta @http://cw.felk.cvut.cz/lib/exe/fetch.php/courses/a4m33au/01-uvod.pdf#15
: ne všechna pravdivá tvrzení lze formálně dokázat.

Algoritmus Britského muzea @http://cw.felk.cvut.cz/lib/exe/fetch.php/courses/a4m33au/01-uvod.pdf#17
: každé dokazatelné tvrzení lze dokázat strojově. Pomocí odvozovacích pravidel postupně generujeme důkazy všech pravdivých tvrzení. Jistě takto jednou najdeme i důkaz tvrzení, které chceme dokázat. Obecně ale nelze každé dokazatelné tvrzení dokázat efektivně.


Automatické uvažování @http://cw.felk.cvut.cz/lib/exe/fetch.php/courses/a4m33au/01-uvod.pdf#21
: zkratka ATP (automated theorem proving). Rozdělení: Hledání modelů (model finding), Kontrola modelů.

Automatické dokazování @http://cw.felk.cvut.cz/lib/exe/fetch.php/courses/a4m33au/01-uvod.pdf#22
: Cílem je počítačem z dané množiny předpokladů logicky odvodit platnost daného závěru. Výsledkem je: důkaz závěru z předpokladů (nebo jen konstatování, že je tvrzení dokazatelné). Nebo konstatování, že tvrzení je nedokazatelné (pouze někdy!). Nebo není schopen systém rozhodnout v rámci daných omezení (čas, paměť, ...).

Kontrola modelů @http://cw.felk.cvut.cz/lib/exe/fetch.php/courses/a4m33au/01-uvod.pdf#24
: Formálně: zkoumáme, zda platí tvrzení v dané interpretaci – v rámci daného přiřazení významu logického jazyka.
note: Nezkoumáme obecnou platnost tvrzení, jen v rámci konkrétní struktury. Typicky používáme při verifikaci vlastností systémů s konečně mnoha stavy.

Hledání modelů @http://cw.felk.cvut.cz/lib/exe/fetch.php/courses/a4m33au/01-uvod.pdf#25
: Formálně: hledáme model množiny formulí.
note: Hledáme jednu konkrétní strukturu a k ní interpretaci daného logického jazyka tak, aby v této interpretaci platila všechna tvrzení z dané množiny. Používáme obvykle pro nalezení protipříkladu, tedy když chceme ukázat, že dané tvrzení není dokazatelné z dané množiny předpokladů.

Interaktivní systémy @http://cw.felk.cvut.cz/lib/exe/fetch.php/courses/a4m33au/01-uvod.pdf#26
: pracují v menších krocích. Operátor systému „napovídá“, jaké taktiky má zkoušet a směruje ho tak k cíli.

Automatické systémy @http://cw.felk.cvut.cz/lib/exe/fetch.php/courses/a4m33au/01-uvod.pdf#26
: se snaží zcela samostatně vyřešit úlohu.

Dostupné nástroje automatického uvažování

- Pro predikátovou logiku prvního řádu: E, Otter, Prover9, SPASS, Vampire,
Waldmeister (rovnicový), aj.
- Pro logiky vyšších řádů: ACL2, Coq, HOL, Isabelle, Nqthm, Agda, aj.
- Knihovna TPTP (www.tptp.org) s problémy zapsanými v predikátové logice prvního řádu. Má interface na webu.

## Rezoluční kalkulus pro výrokovou logiku


Interpretace @http://cw.felk.cvut.cz/lib/exe/fetch.php/courses/a4m33au/02-vyrok_rezol.pdf#4
: Interpretace M je zobrazení, které přiřazuje každé výrokové proměnné význam – nepravda nebo pravda, nebo jako hodnoty 0 nebo 1.
note: V rámci dané interpretace pak můžeme dosadit za proměnné dané formule φ a vyčíslit její pravdivost podle známých pravidel.

Model @http://cw.felk.cvut.cz/lib/exe/fetch.php/courses/a4m33au/02-vyrok_rezol.pdf#4
: Jestliže je formule φ pravdivá v dané interpretaci M, říkáme, že M je model φ, značíme: M |= φ. Říkáme též, že M splňuje φ.
symbol: |=

Sémantický důsledek @http://cw.felk.cvut.cz/lib/exe/fetch.php/courses/a4m33au/02-vyrok_rezol.pdf#5
: Jestliže ψ platí ve všech interpretacích, ve kterých platí φ, říkáme, že ψ je sémantický důsledek φ. Značení: φ ⊨ ψ
symbol: ⊨
note: Pro množinu formulí A také píšeme A ⊨ φ, pokud φ platí ve všech interpretacích, ve kterých jsou splněny všechny formule z A.

Poznámky

- Pozorování: Relace "⊨" na formulích je reflexivní a tranzitivní.
- Je-li současně φ ⊨ ψ a ψ ⊨ φ, říkáme, že tyto formule jsou sémanticky ekvivalentní nebo také ekvi-splnitelné, někdy značeno φ ⧦ φ.
- Někdy se rozlišuje značením, že M je model formule ψ a že ψ je sémantickým důsledkem φ: M⊧ψ, φ⊨ψ.

Tautologie @http://cw.felk.cvut.cz/lib/exe/fetch.php/courses/a4m33au/02-vyrok_rezol.pdf#8
: Jestliže formule φ platí ve všech interpretacích, nazýváme jí tautologie. Značení: ⊨ φ
symobl: ⊨ φ
example: ⊨ (a | ¬a)
note: Někdy se též zavádí speciální symbol (nulární logická spojka) pro tautologii „⊤“.

Tautologie - vlastnosti

- Každá interpretace je modelem (libovolné) tautologie.
- Každá tautologie je sémantickým důsledkem libovolné formule, například b ⊨ (a | ¬a)
- Důsledek: všechny tautologie jsou sématicky ekvivalentní.

Kontradikce @http://cw.felk.cvut.cz/lib/exe/fetch.php/courses/a4m33au/02-vyrok_rezol.pdf#10
: Jestliže formule ψ není splněná v žádné interpretaci, nazveme jí kontradikce, nebo sporná formule.
example: (a & ¬a)
alias: Spor
note: Někdy se zavádí pro kontradikci speciální symbol (nulární logická spojka) „⊥“.


Sporná množina @http://cw.felk.cvut.cz/lib/exe/fetch.php/courses/a4m33au/02-vyrok_rezol.pdf#10
: Množinu formulí, která není splněná v žádné interpretaci, nazveme spornou množinou.

Kontradikce (spor) – vlastnosti

- Sporná formule (množina) nemá žádný model.
- Libovolná formule je sémantickým důsledkem sporné formule (množiny), například: (a & ¬a) ⊨ b
- Důsledek: Všechny kontradikce jsou sémanticky ekvivalentní.
- Formule je sporná právě když její negace je tautologie a naopak.


Logický kalkulus @http://cw.felk.cvut.cz/lib/exe/fetch.php/courses/a4m33au/02-vyrok_rezol.pdf#14
: Mechanismus, které umožňují zjistit (odvodit) pravdivost formule syntaktickými prostředky, tedy pouze prací se symboly, kterými jsou formule zapsány. Každý logický kalkulus se skládá z:<br>*jazyka*, ve kterém se zapisují jeho formule;<br>*axiomů*, což jsou formule, jejichž platnost v daném kalulu implicitně předpokládáme;<br>*odvozovacích pravidel*, která říkají, jaké formule můžeme odvodit z axiomů, nebo z jiných již odvozených formulí.
alias: Logický deduktivní kalkulus

Důkaz @http://cw.felk.cvut.cz/lib/exe/fetch.php/courses/a4m33au/02-vyrok_rezol.pdf#16
: Důkaz v daném logickém kalkulu je taková konečná posloupnost formulí, kde každá formule je buďto:<br>*jeden z axiomů*, nebo<br>*odvozená* pomocí některého logického pravidla kalkulu z předcházejících formulí v posloupnosti.

Dokazatelnost @http://cw.felk.cvut.cz/lib/exe/fetch.php/courses/a4m33au/02-vyrok_rezol.pdf#17
: Řekneme, že formule ψ je dokazatelná z množiny formulí A, pokud existuje důkaz ψ z A. Značení: A ⊦ ψ.
symbol: ⊦
note: Pozorování: Každý axiom je triviálně dokazatelný důkazem délky 1.

Hilbertův implikativní kalkulus pro výrokovou logiku @http://cw.felk.cvut.cz/lib/exe/fetch.php/courses/a4m33au/02-vyrok_rezol.pdf#18
: má odvozovací pravidlo modus ponens.

Korektnost logického kalkulu @http://cw.felk.cvut.cz/lib/exe/fetch.php/courses/a4m33au/02-vyrok_rezol.pdf#19
: Logický kalkulus je korektní, jestliže platí: všechny axiomy jsou tautologie, a pokud z formulí φ1,...,φn odvodíme ψ, musí platit φ,...,φ⊨ ψ. Čili, vše, co je dokazatelné, je pravda.
formal: Logický kalkulus je korektní, jestliže platí: pokud A ⊦ ψ pak A ⊨ ψ.
example: Hilbertův kalkulus je korektní, protože všechny jeho axiomy jsou tautologie, a pravidlo modus ponens je korektní: φ, φ ⇒ ψ ⊨ ψ (nakreslit tabulku).

Úplnost logického kalkulu @http://cw.felk.cvut.cz/lib/exe/fetch.php/courses/a4m33au/02-vyrok_rezol.pdf#20
: Vše, co je pravda, je dokazatelné.
formal:  Logický kalkulus je úplný, jestliže platí: pokud A ⊨ ψ pak A ⊦ ψ.
example: Hilbertův kalkulus pro výrokovou logiku je úplný.

Rezoluční kalkulus @http://cw.felk.cvut.cz/lib/exe/fetch.php/courses/a4m33au/21
: Rezoluční kalkulus umožňuje dokázat, že je daná množina tzv. klauzulí sporná, tedy zda v žádné interpretaci nelze splnit všechny dané formule. Úlohu je tedy nejprve nutné převést na hledání důkazu sporu z nějaké množiny klauzulí.


Jazyk rezolučního kalkulu pro výrokovou logiku

Literál @http://cw.felk.cvut.cz/lib/exe/fetch.php/courses/a4m33au/02-vyrok_rezol.pdf#23
: je výroková proměnná nebo její negace.

Klauzule @http://cw.felk.cvut.cz/lib/exe/fetch.php/courses/a4m33au/02-vyrok_rezol.pdf#23
:je disjunkce libovolného počtu literálů.
example: a | b | ~b | c
note: Klauzule se obvykle uvažují jako množiny symbolů, nikoliv jako posloupnosti.



Prázdná klauzule @http://cw.felk.cvut.cz/lib/exe/fetch.php/courses/a4m33au/02-vyrok_rezol.pdf#23
: je klauzule, která neobsahuje žádný literál. Tato je ekvivalentní (každé) kontradikci. Značení , někdy též ⊥ nebo {}.
symbols:
    - 
    - ⊥
    - "{}"

Axiomy, odvozovací pravidlo výrokové rezoluce

- Výroková rezoluce nemá žádné axiomy (stejně tak predikátová).
- Výroková rezoluce má pouze jedno odvozovací pravidlo:

```
    D|a         ¬a | G
    ----------------------
        D|G
```

- kde D a G jsou disjunkce libovolného počtu literálů (klauzule).
- Výsledná klauzule „D | G“ se nazývá *rezolventa*.

Věta (o úplnosti rezolučního kalkulu) @http://cw.felk.cvut.cz/lib/exe/fetch.php/courses/a4m33au/02-vyrok_rezol.pdf#29
: Buď A sporná množina klauzulí. Pak lze rezolučním kalkulem odvodit prázdnou klauzuli (spor).
alias: refutationally complete
type: theorem

Použití rezolučního kalkulu

1. Převedeme úlohu na hledání důkazu
spornosti množiny formulí.
2. Formule převedeme do CNF (na klauzule).
3. Aplikujeme rezoluční kalkulus.

Metoda důkazu sporem @http://cw.felk.cvut.cz/lib/exe/fetch.php/courses/a4m33au/02-vyrok_rezol.pdf#31
: Věta: A ⊨ φ právě když A∪{¬φ} ⊨  (jinak řečeno, A∪{¬φ} je sporná množina formulí).
note: Takže chceme-li zkoumat, zda A ⊨ φ, převedeme problém na ekvivalentní problém zkomající, zda A∪{¬φ} je sporná.
type: theorem

Převedení formulí na CNF

- Všechny logické spojky přepíšeme pomocí konjunkce, disjunkce a negace.
- Pomocí DeMorganových pravidel přesuneme všechny negace co nejhlouběji, až k výrokovým proměnným.
- Průběžně eliminujeme dvojité negace.
- Distributivním pravidlem roznásobíme konjunkce a disjunkce tak, aby všechny disjunkce byly uvnitř konjunkcí.

Strategie aplikace rezolučního pravidla

- Při použití rezoluce (i jiných důkazových
mechanismů) musíme (my, nebo automatický dokazovač) volit, na které dvě klauzule použít rezoluční pravidlo.
- Snahou je vybírat takové klauzule, které nejspíš povedou ke krátkému důkazu.

Strategie aplikace rezolučního pravidla @http://cw.felk.cvut.cz/lib/exe/fetch.php/courses/a4m33au/02-vyrok_rezol.pdf#35
: <br>

Optimalizace konverze na CNF @http://cw.felk.cvut.cz/lib/exe/fetch.php/courses/a4m33au/02-vyrok_rezol.pdf#38
: <br>

Subsumpce @http://cw.felk.cvut.cz/lib/exe/fetch.php/courses/a4m33au/02-vyrok_rezol.pdf#39
: Jestliže φ⊆ψ ve smyslu množin literálů, říkáme, že formule φ subsumuje formuli ψ. Značme φ ⊑ ψ.
symbol: ⊑
example: a | ~c ⊑ a | b | ~c | ~d
note: Tvrzení: Jestliže φ ⊑ ψ pak φ ⊧ ψ. Naopak to neplatí (příklad). Pro množiny klauzulí A a B řekneme, že množina A subsumuje množinu B (zn. A ⊑ B), pokud každou klauzuli z B subsumuje nějaká klauzule z A. Příklad: { a, ~b | ~c } ⊑ { a | d, ~b | ~c | e, a | ~e }

Subsumpce v rezoluci @http://cw.felk.cvut.cz/lib/exe/fetch.php/courses/a4m33au/02-vyrok_rezol.pdf#40
: Pokud existuje rezoluční důkaz sporu z B a platí-li A ⊑ B, pak: <br>- existuje rezoluční důkaz sporu z A;<br>- ten lze mechanicky sestrojit, a<br>- není delší než důkaz z B.
note: Struktura důkazu bude stejná, jen nám „vypadnou“ některé literály a následně ta rezoluční pravidla, ve kterých jsme se těchto literálů předtím „zbavovali“.

Dopředná subsumpce @http://cw.felk.cvut.cz/lib/exe/fetch.php/courses/a4m33au/02-vyrok_rezol.pdf#43
: Vždy ponecháváme subsumující klauzuli (tu s méně literály, vlevo od ⊑ )
alias: forward
formal: Pokud odvodíme klauzuli ψ, a ψ je subsumována nějakou z již dříve odvozených klauzulí φ (tedy φ ⊑ ψ), klauzuli ψ zahodíme. (Cokoliv bychom dokázali z ψ můžeme dokázat i z φ.)

Zpětná subsumpce @http://cw.felk.cvut.cz/lib/exe/fetch.php/courses/a4m33au/02-vyrok_rezol.pdf#43
: zahazujeme subsumovanou klauzuli (tu s více literály, vpravo od ⊑ ).
alias: backward
formal: Pokud odvodíme klauzuli φ, klauzulí φ nahradíme všechny doposud odvozené klauzule ψi, které jsou subsumovány φ (tedy φ ⊑ ψ).

Uspořádaná rezoluce @http://cw.felk.cvut.cz/lib/exe/fetch.php/courses/a4m33au/02-vyrok_rezol.pdf#46
: Myšlenka: Abychom dospěli k prázdné klauzuli, musíme z nějaké klauzule odstranit postupně všechny literály.<br>Nezávisí na pořadí, v jakém literály odstraňujeme.<br>Tím, že nějaké pořadí zvolíme, omezíme množství odvozených klauzulí.

Kvaziuspořádání @http://cw.felk.cvut.cz/lib/exe/fetch.php/courses/a4m33au/02-vyrok_rezol.pdf#48
: ≼ je reflexivní tranzitivní relace.
symbol: ≼

Lineární uspořádání @http://cw.felk.cvut.cz/lib/exe/fetch.php/courses/a4m33au/02-vyrok_rezol.pdf#48
: ≼ je totální kvaziuspořádání, tedy takové, kde platí, že pro libovolné A a B platí A ≼ B nebo B ≼ A (obecně může platit i obojí najednou).
note: V lineárním uspořádání jsou každé dva prvky porovnatelné.

Úplnost uspořádané rezoluce @http://cw.felk.cvut.cz/lib/exe/fetch.php/courses/a4m33au/02-vyrok_rezol.pdf#49
: Věta: Z každé sporné množiny klauzulí S lze uspořádanou rezolucí odvodit spor.
type: theorem

## Rezoluční kalkulus pro logiku prvního řádu

## Tableaux metody

Tableau metoda @http://cw.felk.cvut.cz/lib/exe/fetch.php/courses/a4m33au/08-tableaux.pdf#2
: |
    se užívaná pro automatické dokazování vět v predikátové logice, ale i
    v dalších (modálních, temporálních, aj.) logikách.
    Sémantické tableau je strom, kde každý uzel je logická
    formule.
    Sémantické tableau vzniká iterativně z předchozích
    tableaux postupnou aplikací určitých pravidel.
    Dokazování pomocí tableau metody postupně rozděluje
    vstupní formuli na menší formule, dokud na všech větvích
    stromu nenajde komplementární páry formulí nebo pokud
    už nemůže aplikovat žádné z pravidel.
    Vstupem pro tableau metodu bude množina formulí
    predikátové logiky.
    Cílem metody bude, tak jako v případě rezoluční metody,
    najít spor v této množině.

Negation normal form @http://cw.felk.cvut.cz/lib/exe/fetch.php/courses/a4m33au/08-tableaux.pdf#10
: Formule v negativní normální formě (NNF) je taková logická formule, která obsahuje negaci pouze v literálech.
symbol: NNF
note: Převod všech formulí na NNF formule se obvykle provádí před zahájením tableau metody.


### Tableau pravidla pro predikátovou logiku

- Na začátku přepokládejme tableau tvořené jen jedním
uzlem - kořenem obsahujícím konjunkci všech formulí ze
vstupní množiny.
- Někdy se také tento kořen označuje symbolem Т (top).
Tento uzel se obvykle v grafické podobě tabla nezobrazuje.
- Nyní se začnou na tableau aplikovat postupně jednotlivá
pravidla.

konjuknce @http://cw.felk.cvut.cz/lib/exe/fetch.php/courses/a4m33au/08-tableaux.pdf#5
: A & B -> připojíme větev s A a B

disjunkce @http://cw.felk.cvut.cz/lib/exe/fetch.php/courses/a4m33au/08-tableaux.pdf#8
: A | B -> vytvoříme jednu větev s A a druhou s B

negace @http://cw.felk.cvut.cz/lib/exe/fetch.php/courses/a4m33au/08-tableaux.pdf#11
: převedení negace blíže k literálům. Pokud budeme zpracovávat pomocí tableau metody pouze formule v tzv. negativní normální formě (NNF), není třeba žádné pravidlo pro zpracování negace zavádět.

univerzální kvantifikace @http://cw.felk.cvut.cz/lib/exe/fetch.php/courses/a4m33au/08-tableaux.pdf#12
: nahrazením všech volných výskytů proměnné x za novou proměnnou x’, která se ještě nikde v tableau nevyskytuje.

existenční kvantifikace @http://cw.felk.cvut.cz/lib/exe/fetch.php/courses/a4m33au/08-tableaux.pdf#14
: nahrazením všech volných výskytů x termem f(x1 ,…,xn). Zde f je nový funkční symbol, který se ještě nikde v tableau nevyskytuje.

uzavření větve @http://cw.felk.cvut.cz/lib/exe/fetch.php/courses/a4m33au/08-tableaux.pdf#15
: pokud se na některé větvi v tableau vyskytují dva komplementární literály co dávají po unifikační substituci spor, potom aplikujeme substituci θ na všechny uzly tableau a takovou větev označíme za uzavřenou.

uzavřené tableau @http://cw.felk.cvut.cz/lib/exe/fetch.php/courses/a4m33au/08-tableaux.pdf#16
: Tableau je uzavřené, pokud jsou všechny jeho větve uzavřené.
note: Takové tableau dosvědčuje spor vstupní množiny formulí, protože všechna tableau pravidla jsou logicky korektní (tedy kořen tabla implikuje každý uzel v tablu) a každá cesta z kořene do listu obsahuje dvojici komplementárních literálů, což představuje spor.

LeanTAP @http://cw.felk.cvut.cz/lib/exe/fetch.php/courses/a4m33au/08-tableaux.pdf#18
: LeanTAP je jeden z nejkratších úplných dokazovačů pro predikátovou logiku. LeanTAP používá tableau metodu a skládá se z pěti klauzulí v programovacím jazyku Prolog. Jako vstup přepokládá dokazovač konjunkci skolemizovaných uzavřených formulí v NNF.


## DPLL a metody pro SAT

SAT @http://cw.felk.cvut.cz/lib/exe/fetch.php/courses/a4m33au/09-dpll.pdf#2
: Boolean SATisfiability problem. Řeší problém nalezení ohodnocení proměnných v booleovské formuli bez kvantifikátorů tak, že je formule splněna.
note: Jinými slovy řešíme problém pravdivosti uzavřené existenčněkvantifikované booleovské formule. Vstupem většiny SAT solverů je CNF (Conjunctive Normal Form). Nalezení řešení SAT je NP-úplný problém (Stephen Cook 1971).

DPLL @http://cw.felk.cvut.cz/lib/exe/fetch.php/courses/a4m33au/09-dpll.pdf#6
: Davis-Putnam-Logemann-Loveland algoritmus pro řešení SAT. The basic backtracking algorithm runs by choosing a literal, assigning a truth value to it, simplifying the formula and then recursively checking if the simplified formula is satisfiable. The DPLL algorithm enhances over the backtracking algorithm by the eager use of the following rules at each step: unit propagation and pure literal elimination.

unit clause @http://cw.felk.cvut.cz/lib/exe/fetch.php/courses/a4m33au/09-dpll.pdf#6
: je klausule která obsahuje právě jeden literál. Tento literál obsahuje nenastavenou proměnnou.
alias: jednotková klauzule

unit propagation @http://cw.felk.cvut.cz/lib/exe/fetch.php/courses/a4m33au/09-dpll.pdf#6
: If a clause is a unit clause, i.e. it contains only a single unassigned literal, this clause can only be satisfied by assigning the necessary value to make this literal true. Thus, no choice is necessary. In practice, this often leads to deterministic cascades of units, thus avoiding a large part of the naive search space.
alias: unit propagation

pure výskyt @http://cw.felk.cvut.cz/lib/exe/fetch.php/courses/a4m33au/09-dpll.pdf#8
: znamená, že se literál všude ve Φ vyskytuje buď ve tvaru x anebo se všude ve Φ vyskytuje ve tvaru ¬x.
note: Jinými slovy literál je pure, pokud se vykytuje v celé Φ právě s jednou polaritou.



pure literal elimination @http://cw.felk.cvut.cz/lib/exe/fetch.php/courses/a4m33au/09-dpll.pdf#8
: If a propositional variable occurs with only one polarity in the formula, it is called pure. Pure literals can always be assigned in a way that makes all clauses containing them true. Thus, these clauses do not constrain the search anymore and can be deleted.

MiniSat @http://cw.felk.cvut.cz/lib/exe/fetch.php/courses/a4m33au/09-dpll.pdf#10
: velmi výkonný SAT solver

MiniSat – analýza konfliktu @http://cw.felk.cvut.cz/lib/exe/fetch.php/courses/a4m33au/09-dpll.pdf#12
: Konflikt nastane pokud se nějaká klauzule stane nesplnitelnou během propagace unit klauzule (boolean_constraint_propagation()).
