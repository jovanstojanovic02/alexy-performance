# ALEXY Performance — sajt

Jednostrani (single-file) sajt sa client-side hash routerom za **ALEXY Performance** —
izrada custom volana po narudžbi (BMW, Mercedes-Benz, Audi, VW, Porsche, MINI).

**Live:** https://jovanstojanovic02.github.io/alexy-performance/

## Kako se gradi

`index.html` je build output. Izvor je `template.html` + `images.json`.

```bash
bash build.sh    # ubaci images.json u template.html -> index.html
```

`build.sh` menja token `__IMAGES_JSON__` u `template.html`. Logo je CSS
monogram "A" (bez slike), favicon je inline SVG — nema `__LOGO_*__` tokena.

Boje / tekst se menjaju direktno u `template.html` (`:root` tokeni na vrhu,
`SERVICES` / `MODELS` / `PROCESS` / `MARQUEE` niska u `<script>` bloku).
`rebrand.js` i `content.js` su transformacije korišćene pri pravljenju ovog
sajta iz Goxy predloška — čuvaju se radi reference, ne pokreću se u buildu.

## Sadržaj

Tekst i podaci povučeni sa Instagrama `@alexy_performance__volani`
(telefon +385 97 613 1648, marke/modeli, materijali, rokovi dostave).
`ig/` sadrži skinute IG postere i logo.

**Fotografije volana još nisu ubačene** — na slikama su privremeni placeholderi
dok klijent ne pošalje prave fotografije radova.
