const fs = require('fs');
const f = 'template.html';
let t = fs.readFileSync(f, 'utf8');
let n = 0;
function rep(a, b) {
  if (t.indexOf(a) === -1) { console.error('NOT FOUND:\n  ' + JSON.stringify(a.slice(0, 90))); process.exitCode = 1; return; }
  t = t.split(a).join(b); n++;
}

/* ===== HEAD / META ===== */
rep('<title>Alexy Performance Design</title>', '<title>ALEXY Performance — Custom volani po narudžbi</title>');
rep('content="Alexy Performance Design — atelje za restauraciju i modifikaciju volana i delova enterijera. Premium koža, Alcantara, ručno šivenje. Beograd.">',
    'content="ALEXY Performance — izrada premium custom volana po narudžbi za BMW, Mercedes, Audi, VW, Porsche i MINI. Karbon, koža, Alcantara, LED display & shift lights, M1/M2 tipke. Dostava Hrvatska i EU.">');
rep('<meta property="og:title" content="Alexy Performance Design">', '<meta property="og:title" content="ALEXY Performance — Custom volani">');
rep('<meta property="og:description" content="Atelje za restauraciju i modifikaciju volana i delova enterijera — premium koža, Alcantara, ručno šivenje. Beograd.">',
    '<meta property="og:description" content="Premium custom volani po tvojoj želji — karbon, koža, Alcantara, LED display & shift lights, funkcionalne M1/M2 tipke. Dostava Hrvatska i EU.">');

/* ===== NAV / FOOTER BRAND ===== */
rep('<span>Alexy <span class="sub">Performance Design</span></span>', '<span>Alexy <span class="sub">Performance</span></span>'); // nav + footer
rep('>Zakaži termin <span class="arw">', '>Zatraži ponudu <span class="arw">');

/* ===== HERO ===== */
rep('<p class="eyebrow">Atelje za volane i enterijer · Beograd</p>',
    '<p class="eyebrow">Custom volani po narudžbi · Hrvatska</p>');
rep(`        <h1>
          <span class="ln"><span>Kokpit koji</span></span>
          <span class="ln"><span>se oseća</span></span>
          <span class="ln"><span>u rukama.</span></span>
        </h1>`,
`        <h1>
          <span class="ln"><span>Tvoj volan.</span></span>
          <span class="ln"><span>Tvoj dizajn.</span></span>
          <span class="ln"><span>Bez kompromisa.</span></span>
        </h1>`);
rep('<p class="lead">Restauracija i modifikacija volana, ručica menjača i delova enterijera — premium prirodna koža, multilayer Alcantara i ručno šivenje, sklopljeno sa preciznošću servisne radionice.</p>',
    '<p class="lead">Izrađujemo premium custom volane za BMW, Mercedes, Audi, VW, Porsche i MINI — kovani karbon i koža, Alcantara, šav i 12h oznaka u boji po izboru, LED display sa shift lightsima i funkcionalne M1/M2 tipke. Dostava za Hrvatsku i celu EU.</p>');
rep('<a class="btn btn--solid" href="#/usluge" data-link>Pogledaj usluge <span class="arw">↗</span></a>\n          <a class="btn" href="#/galerija" data-link>Galerija radova <span class="arw">↗</span></a>',
    '<a class="btn btn--solid" href="#/usluge" data-link>Pogledaj izradu <span class="arw">↗</span></a>\n          <a class="btn" href="#/kontakt" data-link>Zatraži ponudu <span class="arw">↗</span></a>');

/* ===== STATS ===== */
rep(`        <div class="stats rv-stagger" id="homeStats">
          <div class="cell"><div class="n"><span data-count="2018">2018</span></div><div class="k">Od tada u pogonu</div></div>
          <div class="cell"><div class="n"><span data-count="4">4</span></div><div class="k">Grupe usluga</div></div>
          <div class="cell"><div class="n">0.7–1.2<span style="font-size:.5em"> mm</span></div><div class="k">Alcantara slojevi</div></div>
          <div class="cell"><div class="n"><span data-count="15" data-prefix="~">~15</span><span style="font-size:.5em"> min</span></div><div class="k">Ugradnja gotovog volana</div></div>
        </div>`,
`        <div class="stats rv-stagger" id="homeStats">
          <div class="cell"><div class="n"><span data-count="6">6</span></div><div class="k">Marke koje radimo</div></div>
          <div class="cell"><div class="n"><span data-count="140">140</span><span style="font-size:.6em">+</span></div><div class="k">Modela vozila</div></div>
          <div class="cell"><div class="n">24–48<span style="font-size:.5em"> h</span></div><div class="k">Dostava Hrvatska</div></div>
          <div class="cell"><div class="n">100<span style="font-size:.5em">%</span></div><div class="k">Garancija na izradu</div></div>
        </div>`);

/* ===== HOME: services sec-head ===== */
rep(`            <p class="eyebrow">Šta radimo</p>
            <h2 class="h-section">Usluge, jasno<br>razvrstane</h2>`,
`            <p class="eyebrow">Šta radimo</p>
            <h2 class="h-section">Volan i sve<br>oko njega</h2>`);
rep('<p class="lead">Sve je grupisano po delu kokpita na kojem se radi — od kompletnog presvlačenja venca do sitnih custom detalja.</p>',
    '<p class="lead">Od kompletne izrade custom volana do LED optike, digitalnog kokpita i dodatne opreme — sve za jedan model, spremno za ugradnju.</p>');
rep('>Sve usluge i cene <span class="arw">', '>Sve što radimo <span class="arw">');

/* ===== HOME: feature band ===== */
rep('<div class="feature-media"><img data-img="feat2" alt="Detalj presvučenog venca volana"><span class="tag">Presvlačenje volana</span></div>',
    '<div class="feature-media"><img data-img="feat2" alt="Custom volan sa kontrastnim šavom"><span class="tag">Custom volani</span></div>');
rep(`            <p class="eyebrow">Materijal & šav</p>
            <h2 class="h-section">Koža koja<br>traje</h2>
            <p class="lead">Glatka, teksturirana ili perforirana prirodna koža i multilayer Alcantara, u boji po izboru. Ručni „baseball" šav ili mašinski prošiv, kontrastni ili ton-u-ton — venac dobija čvršći hvat i izgled kao iz salona.</p>
            <p class="lead">Isti standard obrade ide i na ručice menjača, suknjice, naslone za ruku, ispucale airbag poklopce i kočiona kleštila.</p>
            <div class="hero-actions">
              <a class="btn" href="#/usluge" data-link>Opcije materijala <span class="arw">↗</span></a>
              <a class="btn" href="#/galerija" data-link>Vidi primere <span class="arw">↗</span></a>
            </div>`,
`            <p class="eyebrow">Materijal & izrada</p>
            <h2 class="h-section">Karbon, koža,<br>Alcantara</h2>
            <p class="lead">Kovani karbon ili karbon obloge, premium prirodna koža i multilayer Alcantara — u kombinaciji i boji po izboru. Šav u boji konca po želji, 12h oznaka, perforacija na hvatovima.</p>
            <p class="lead">Svaki volan se pravi za konkretan model, sa OEM konektorima i tvojim airbag modulom — ide direktno na tvoje vozilo.</p>
            <div class="hero-actions">
              <a class="btn" href="#/modeli" data-link>Marke i modeli <span class="arw">↗</span></a>
              <a class="btn" href="#/kontakt" data-link>Zatraži ponudu <span class="arw">↗</span></a>
            </div>`);

/* ===== HOME: proces sec-head + CTA ===== */
rep('<div><p class="eyebrow">Kako ide</p><h2 class="h-section">Proces u<br>četiri faze</h2></div>',
    '<div><p class="eyebrow">Kako ide</p><h2 class="h-section">Kako nastaje<br>tvoj volan</h2></div>');
rep(`        <div class="cta rv">
          <p class="eyebrow" style="justify-content:center">Termin uz najavu</p>
          <h2>Donesi volan —<br>vrati se po nov kokpit</h2>
          <p class="lead">Pošalji model vozila i par fotografija, javimo procenu i rok. Zamena gotovog volana gotova je za ~15 minuta.</p>
          <div class="cta-actions">
            <a class="btn btn--solid" href="#/kontakt" data-link>Pošalji upit <span class="arw">↗</span></a>
            <a class="btn" href="tel:+381600000000">+381 60 000 0000</a>
          </div>
        </div>`,
`        <div class="cta rv">
          <p class="eyebrow" style="justify-content:center">Upit bez obaveze</p>
          <h2>Reci nam model —<br>šaljemo ponudu</h2>
          <p class="lead">Javi marku i model vozila i šta želiš na volanu — materijal, boju šava, LED display, tastere. Dobićeš ponudu i rok izrade.</p>
          <div class="cta-actions">
            <a class="btn btn--solid" href="#/kontakt" data-link>Pošalji upit <span class="arw">↗</span></a>
            <a class="btn" href="tel:+385976131648">+385 97 613 1648</a>
          </div>
        </div>`);

/* ===== USLUGE pagehead ===== */
rep(`      <p class="eyebrow">Usluge & cene</p>
      <h1>Svaka usluga,<br>po delu kokpita</h1>
      <p class="lead">Cene su okvirne i zavise od stanja dela, materijala i tipa šava. Za tačnu ponudu pošalji fotografije kroz <a href="#/kontakt" data-link style="color:var(--accent)">kontakt formu</a>.</p>`,
`      <p class="eyebrow">Usluge & opcije</p>
      <h1>Šta sve radimo<br>na volanu i oko njega</h1>
      <p class="lead">Opseg zavisi od modela vozila, materijala i izabranih opcija. Za tačnu ponudu javi marku i model kroz <a href="#/kontakt" data-link style="color:var(--accent)">kontakt formu</a> ili Instagram DM.</p>`);

/* ===== MODELI pagehead ===== */
rep(`      <p class="eyebrow">Modeli & obrade</p>
      <h1>Gotovi volani<br>i primeri obrada</h1>
      <p class="lead">Presek onoga što izlazi iz radionice — kombinacije materijala, reza i šava. Stanje na lageru se menja; pošalji upit za konkretan model vozila i traženu obradu.</p>`,
`      <p class="eyebrow">Podržani modeli</p>
      <h1>Marke i modeli<br>za koje radimo</h1>
      <p class="lead">Custom volan radimo za većinu novijih i modela prethodne generacije ovih marki. Ne vidiš svoj model? Pošalji upit — lista se stalno širi. <span style="color:var(--muted-2)">(Fotografije izrada dodajemo uskoro.)</span></p>`);
rep('<p class="mini-note" style="margin-top:2rem">* Prikazane su obrade iz naše arhive radova, ne cenovnik sa zalihama.</p>',
    '<p class="mini-note" style="margin-top:2rem">* Prikazane su tipične izvedbe po marki; svaki volan se radi za konkretan model i specifikaciju.</p>');

/* ===== GALERIJA pagehead ===== */
rep(`      <p class="eyebrow">Galerija</p>
      <h1>Radovi iz<br>radionice</h1>
      <p class="lead">Radovi su podeljeni po delu kokpita. Otvori kategoriju koja te zanima; klik na sliku otvara uvećan prikaz.</p>`,
`      <p class="eyebrow">Galerija</p>
      <h1>Primeri<br>izrada</h1>
      <p class="lead">Fotografije gotovih volana po kategoriji — klik na sliku otvara uvećan prikaz. Najsvežije radove objavljujemo na Instagramu <a href="https://instagram.com/alexy_performance__volani" target="_blank" rel="noopener" style="color:var(--accent)">@alexy_performance__volani</a>.</p>`);

/* ===== PROCES pagehead + CTA ===== */
rep(`      <p class="eyebrow">Proces renoviranja</p>
      <h1>Od pohabanog<br>do kao-nov</h1>
      <p class="lead">Svaki volan prolazi kroz iste četiri faze. Bez preskakanja koraka — tu je razlika između „obloženo" i „urađeno kako treba".</p>`,
`      <p class="eyebrow">Kako nastaje volan</p>
      <h1>Od konfiguracije<br>do isporuke</h1>
      <p class="lead">Svaki volan prolazi kroz iste četiri faze — od dogovora o detaljima do zapakovane pošiljke. Bez preskakanja koraka.</p>`);
rep('<p class="lead">Javi model vozila i stanje volana — dobićeš procenu i termin.</p>',
    '<p class="lead">Javi marku i model — dobićeš ponudu, opcije i rok izrade.</p>');

/* ===== KONTAKT ===== */
rep('<h1>Javi se,<br>donesi volan</h1>', '<h1>Javi model,<br>šaljemo ponudu</h1>');
rep('<h2 class="h-section" style="font-size:var(--fs-xl); margin-bottom:1rem">Alexy Performance Design</h2>',
    '<h2 class="h-section" style="font-size:var(--fs-xl); margin-bottom:1rem">ALEXY Performance</h2>');
rep(`            <div class="two-col">
              <p>Radionica specijalizovana za restauraciju i modifikaciju volana, ručica menjača i delova enterijera. Radimo sa premium prirodnom kožom i multilayer Alcantarom, ručnim i mašinskim šavom.</p>
              <p>Fokus je na performance i tuning vozilima — BMW M, Audi RS, VW/Golf platforme — ali kroz radionicu prođe svašta, od oldtajmera do dnevnih auta kojima je venac „otišao".</p>
            </div>
            <ul class="info-list">
              <li><span class="lbl">Telefon</span><a class="val" href="tel:+381600000000">+381 60 000 0000</a></li>
              <li><span class="lbl">Email</span><a class="val" href="mailto:kontakt@primer.rs">kontakt@primer.rs</a></li>
              <li><span class="lbl">Instagram</span><a class="val" href="https://instagram.com/vas_profil" target="_blank" rel="noopener">@vas_profil</a></li>
              <li><span class="lbl">Adresa</span><span class="val">Vaša adresa, Beograd</span></li>
              <li><span class="lbl">Termin</span><span class="val">Isključivo uz prethodnu najavu</span></li>
            </ul>`,
`            <div class="two-col">
              <p>ALEXY Performance izrađuje premium custom volane po narudžbi — za BMW, Mercedes-Benz, Audi, Volkswagen, Porsche i MINI. Kovani karbon i karbon, Alcantara i prirodna koža, šav i 12h oznaka u boji po izboru.</p>
              <p>Uz volan radimo LED display sa shift lightsima, funkcionalne M1/M2 tipke, airbag opciju, digitalni kokpit, LED/Xenon optiku i dodatnu opremu. Gotov volan šaljemo na adresu — Hrvatska, EU i Srbija.</p>
            </div>
            <ul class="info-list">
              <li><span class="lbl">Telefon</span><a class="val" href="tel:+385976131648">+385 97 613 1648</a></li>
              <li><span class="lbl">Instagram</span><a class="val" href="https://instagram.com/alexy_performance__volani" target="_blank" rel="noopener">@alexy_performance__volani</a></li>
              <li><span class="lbl">Upit</span><span class="val">Preko forme ili Instagram DM-a</span></li>
              <li><span class="lbl">Dostava</span><span class="val">Hrvatska 1–2 dana · EU 2–5 · Srbija 2–4</span></li>
              <li><span class="lbl">Garancija</span><span class="val">Na izradu i ugrađene komponente</span></li>
            </ul>`);
rep('<p class="eyebrow" style="margin-bottom:1.2rem">Upit za termin</p>', '<p class="eyebrow" style="margin-bottom:1.2rem">Upit za ponudu</p>');
rep('<div class="field"><label for="f-car">Vozilo (marka, model, godina)</label><input id="f-car" name="car" type="text" placeholder="npr. BMW F30, 2015"></div>',
    '<div class="field"><label for="f-car">Vozilo (marka, model, godina)</label><input id="f-car" name="car" type="text" placeholder="npr. BMW G20, 2021"></div>');
rep('<textarea id="f-msg" name="message" placeholder="Opiši stanje dela i šta želiš..."></textarea>',
    '<textarea id="f-msg" name="message" placeholder="Opiši šta želiš — materijal, boja šava, LED display, tasteri..."></textarea>');
rep('<p class="form-note">Preview forma — poruka se ne šalje. Za sada koristi telefon, email ili Instagram.</p>',
    '<p class="form-note">Preview forma — poruka se ne šalje. Piši nam na Instagram DM ili na +385 97 613 1648.</p>');
rep('<div class="form-msg" id="fmsg">Hvala! Ovo je demo verzija — poruka nije poslata. Javi se direktno na +381 60 000 0000.</div>',
    '<div class="form-msg" id="fmsg">Hvala! Ovo je demo verzija — poruka nije poslata. Javi se na +385 97 613 1648 ili @alexy_performance__volani.</div>');

/* ===== FOOTER ===== */
rep('<p>Atelje za restauraciju i modifikaciju volana i enterijera. Premium koža, Alcantara, ručno šivenje. Beograd.</p>',
    '<p>Izrada premium custom volana po narudžbi — kovani karbon, koža, Alcantara, LED display &amp; shift lights. Dostava Hrvatska i EU.</p>');
rep(`        <a href="tel:+381600000000">+381 60 000 0000</a>
        <a href="mailto:kontakt@primer.rs">kontakt@primer.rs</a>
        <a href="https://instagram.com/vas_profil" target="_blank" rel="noopener">Instagram @vas_profil</a>
        <a href="#/kontakt" data-link>Vaša adresa, Beograd</a>`,
`        <a href="tel:+385976131648">+385 97 613 1648</a>
        <a href="https://instagram.com/alexy_performance__volani" target="_blank" rel="noopener">Instagram @alexy_performance__volani</a>
        <a href="#/kontakt" data-link>Dostava · Hrvatska, EU i Srbija</a>`);
rep('<span>© 2026 Alexy Performance Design</span>', '<span>© 2026 ALEXY Performance</span>');

/* ===== JS DATA: SERVICES ===== */
rep(`  var SERVICES = [
    { g:"Volan", items:[
      { k:"vol4",  ic:"wheel",   t:"Presvlačenje volana", d:"Glatka, teksturirana ili perforirana prirodna koža, odnosno multilayer Alcantara (0.7–1.2 mm), u boji po izboru. Ručni ili mašinski šav, kontrastni ili ton-u-ton.", p:"od 90 €" },
      { k:"vol10", ic:"convert", t:"Konverzija gumenog venca u kožni", d:"Tvrdi plastični ili gumeni venac pretvaramo u obložen kožom, uz opcionu 2 mm gel podlogu za mekši hvat.", p:"100 €" },
      { k:"vol7",  ic:"cut",     t:"Modifikacije i zasecanje venca", d:"Flat-bottom rez, zadebljanje venca, zona za palčeve i pozicioni marker na 12h.", p:"od 250 €" }
    ]},
    { g:"Enterijer", items:[
      { k:"ruc1", ic:"knob",     t:"Ručice menjača i delovi enterijera", d:"Ručica menjača, ručna kočnica, obloge i sitni delovi — presvlačenje u istom materijalu i šavu kao volan.", p:"od 25 €" },
      { k:"ruc4", ic:"gaiter",   t:"Suknjice menjača i ručne kočnice", d:"Nove kožne ili Alcantara suknjice sa kontrastnim ručnim šavom, kroj po originalu.", p:"upit" },
      { k:"ruc5", ic:"armrest",  t:"Nasloni za ruku", d:"Presvlačenje postojećeg ili izrada novog naslona, po želji sa memory penom.", p:"upit" }
    ]},
    { g:"Restauracija", items:[
      { k:"vol8", ic:"airbag",   t:"Restauracija i popravka airbega", d:"Pohabani i ispucali poklopci airbega — reparacija i presvlačenje uz zadržavanje originalnih oznaka.", p:"od 40 €" },
      { k:"vol2", ic:"stack",    t:"Gotovi volani na stanju", d:"Veliki izbor već presvučenih volana za brzu zamenu — ugradnja traje oko 15 minuta.", p:"upit" }
    ]},
    { g:"Custom & Detailing", items:[
      { k:"cus2", ic:"layers",   t:"Custom projekat", d:"Kombinacije boja, materijala i šavova po specifikaciji — potpuno personalizovan kokpit.", p:"po dogovoru" },
      { k:"koc2", ic:"brake",    t:"Detailing kočnica", d:"Priprema i farbanje kočionih kleštila temperaturno otpornim lakom, logotip po želji.", p:"upit" },
      { k:"vol5", ic:"stitch",   t:"Ručno šivenje u više boja", d:"Kontrastni ili višebojni ručni „baseball” šav kao završni detalj na vencu ili ručici.", p:"upit" }
    ]}
  ];`,
`  var SERVICES = [
    { g:"Custom volan", items:[
      { k:"vol4",  ic:"wheel",   t:"Izrada custom volana", d:"Nov venac za tvoj model — kovani karbon, karbon obloge, Alcantara ili premium koža. Oblik, debljina i hvat po želji, sa OEM konektorima i tvojim airbag modulom.", p:"upit" },
      { k:"vol5",  ic:"stitch",  t:"Šav i 12h oznaka", d:"Ručni ili mašinski šav u izabranoj boji konca, kontrastni ili ton-u-ton. Kontrastna 12h (top) oznaka i perforacija na hvatovima.", p:"upit" },
      { k:"vol8",  ic:"airbag",  t:"Airbag i M1/M2 tasteri", d:"Zadržavamo tvoj originalni airbag modul; ugradnja funkcionalnih M1/M2 tastera i multifunkcijskih komandi.", p:"upit" }
    ]},
    { g:"Elektronika i LED", items:[
      { k:"vol2",  ic:"stack",   t:"LED display & shift lights", d:"Integrisani displej na vencu sa shift lightsima i podesivim pragovima obrtaja.", p:"upit" },
      { k:"ruc1",  ic:"knob",    t:"Funkcionalni tasteri", d:"Media, kruz-kontrola i M-tasteri povezani i testirani na tvom vozilu.", p:"upit" },
      { k:"cus2",  ic:"layers",  t:"Ambijentalna rasvjeta", d:"Višezonska ambijentalna rasveta u kabini, boje po izboru.", p:"upit" }
    ]},
    { g:"Kokpit i optika", items:[
      { k:"vol11", ic:"brake",   t:"Digitalni / virtuelni kokpit", d:"Retrofit digitalne instrument table (virtuelni kokpit) za podržane modele.", p:"upit" },
      { k:"vol10", ic:"convert", t:"LED / Xenon svetla", d:"Zamenska prednja i zadnja svetla, plug-and-play za tvoj model.", p:"upit" },
      { k:"cus4",  ic:"cut",     t:"Multimedija i navigacija", d:"Novije multimedije, Apple CarPlay / Android Auto, navigacija.", p:"upit" }
    ]},
    { g:"Izvedba & isporuka", items:[
      { k:"vol12", ic:"gaiter",  t:"OEM ili custom izvedba", d:"Diskretno OEM+ ili potpuno custom — dizajn i detalji po tvojoj specifikaciji.", p:"upit" },
      { k:"ruc5",  ic:"armrest", t:"Retrovizori i dodaci", d:"Retrovizori sa auto-zatamnjenjem, blindspot i ostala dodatna oprema.", p:"upit" },
      { k:"vol3",  ic:"wheel",   t:"Dostava & garancija", d:"Slanje na adresu: Hrvatska 1–2 dana, EU 2–5, Srbija 2–4. Garancija na izradu i komponente.", p:"—" }
    ]}
  ];`);

/* ===== JS DATA: MODELS / MOD_BRANDS / MOD_TAGS ===== */
rep(`  var MODELS = [
    { k:"vol1",  b:"BMW",  t:"M-Technic II / crveni marker",       tags:["Koža","Marker","Kontrast"] },
    { k:"vol2",  b:"BMW",  t:"M-Technic II / M-tricolor šav",      tags:["Koža","Marker","Kontrast"] },
    { k:"vol3",  b:"BMW",  t:"M-Technic II / plavi kontrast",      tags:["Koža","Marker","Kontrast"] },
    { k:"vol10", b:"BMW",  t:"M-Sport (F serija) / OEM koža",      tags:["Koža","Perforacija","OEM+"] },
    { k:"vol11", b:"BMW",  t:"M-Sport (F serija) / puna perforacija", tags:["Koža","Perforacija","OEM+"] },
    { k:"vol12", b:"BMW",  t:"M-Sport (F serija) / alcantara + koža", tags:["Alcantara","Koža","Perforacija","OEM+"] },
    { k:"vol13", b:"BMW",  t:"M-Sport (E70) / alcantara venac",    tags:["Alcantara","Koža","Perforacija","OEM+"] },
    { k:"vol14", b:"BMW",  t:"M-Sport (E serija) / alcantara + perforacija", tags:["Alcantara","Koža","Perforacija","OEM+"] },
    { k:"vol4",  b:"Audi", t:"S-line / crveni ručni šav",          tags:["Koža","Perforacija","Alcantara","Kontrast"] },
    { k:"vol7",  b:"Audi", t:"S / flat-bottom, alcantara airbag",  tags:["Koža","Perforacija","Alcantara","Flat-bottom","Kontrast"] },
    { k:"vol8",  b:"Audi", t:"S / flat-bottom, OEM izgled",        tags:["Alcantara","Flat-bottom","OEM+"] },
    { k:"vol9",  b:"Audi", t:"S / flat-bottom, kontrastni šav",    tags:["Alcantara","Flat-bottom","Kontrast"] }
  ];
  var MOD_BRANDS = ["BMW","Audi"];
  var MOD_TAGS = ["Koža","Alcantara","Perforacija","Flat-bottom","Kontrast","Marker","OEM+"];`,
`  var MODELS = [
    { k:"vol10", b:"BMW",  t:"F / G serija — M-Sport venac",       tags:["Karbon","Koža","M1/M2 tipke","LED display"] },
    { k:"vol1",  b:"BMW",  t:"E serija — M-Technic izvedba",        tags:["Koža","Alcantara","OEM+"] },
    { k:"vol13", b:"BMW",  t:"i serija (i4 / iX) — flat-bottom",    tags:["Kovani karbon","Alcantara","LED display"] },
    { k:"vol2",  b:"Mercedes-Benz", t:"W205 / W213 — AMG venac",    tags:["Karbon","Koža","M1/M2 tipke"] },
    { k:"vol3",  b:"Mercedes-Benz", t:"A / CLA (W177) — AMG",       tags:["Alcantara","Koža","LED display"] },
    { k:"vol5",  b:"Mercedes-Benz", t:"EQ serija — custom venac",   tags:["Kovani karbon","Koža","OEM+"] },
    { k:"vol4",  b:"Audi", t:"A3 / A4 / A5 — S-line",               tags:["Koža","Perforacija","LED display"] },
    { k:"vol7",  b:"Audi", t:"S / RS — flat-bottom",                tags:["Kovani karbon","Alcantara","M1/M2 tipke"] },
    { k:"vol9",  b:"Audi", t:"e-tron / Q serija — OEM+",            tags:["Koža","Alcantara","OEM+"] },
    { k:"vol11", b:"Volkswagen", t:"Golf 7 / Golf 8 — R izvedba",   tags:["Karbon","Koža","LED display"] },
    { k:"vol12", b:"Volkswagen", t:"Passat / Arteon — flat-bottom", tags:["Koža","Perforacija","OEM+"] },
    { k:"vol14", b:"Volkswagen", t:"ID.3 / ID.4 / ID.7 — custom",   tags:["Alcantara","Koža","LED display"] },
    { k:"vol6",  b:"Porsche", t:"911 (991 / 992) — GT venac",       tags:["Kovani karbon","Alcantara","12h oznaka"] },
    { k:"vol8",  b:"Porsche", t:"Macan / Cayenne — sport venac",    tags:["Koža","Karbon","M1/M2 tipke"] },
    { k:"vol1",  b:"MINI", t:"F54 / F55 / F56 — JCW izvedba",       tags:["Alcantara","Koža","Kontrast"] },
    { k:"vol10", b:"MINI", t:"R56 / R60 — custom venac",            tags:["Koža","Perforacija","OEM+"] }
  ];
  var MOD_BRANDS = ["BMW","Mercedes-Benz","Audi","Volkswagen","Porsche","MINI"];
  var MOD_TAGS = ["Kovani karbon","Karbon","Alcantara","Koža","Perforacija","LED display","M1/M2 tipke","12h oznaka","OEM+"];`);

/* ===== JS DATA: PROCESS ===== */
rep(`  var PROCESS = [
    { n:"01", t:"Demontaža i čišćenje", s:"Skidamo staru kožu i čistimo venac od lepka i naslaga.", d:"Skidamo pohabanu kožu i venac čistimo od starog lepka, prašine i naslaga. Čisti se i unutrašnja strana volana.", k:"pro1" },
    { n:"02", t:"Priprema venca", s:"Inspekcija, stezanje i po potrebi gel podloga za bolji hvat.", d:"Detaljna inspekcija, stezanje deformisanih delova i po potrebi 2 mm gel podloga za bolji hvat — standard na BMW M volanima.", k:"pro2" },
    { n:"03", t:"Koža i šav", s:"Ukrajanje po meri, ručno ili mašinsko prošivanje, navlačenje.", d:"Odabir kože ili Alcantare, ukrajanje po tačnim dimenzijama venca, ručno ili mašinsko prošivanje i navlačenje na volan.", k:"pro3" },
    { n:"04", t:"Završni detailing", s:"Fino doterivanje, kontrola šava i predaja za ugradnju.", d:"Fino doterivanje celog venca i pozadine, kontrola šava i predaja volana spremnog za ugradnju.", k:"pro4" }
  ];`,
`  var PROCESS = [
    { n:"01", t:"Konfiguracija", s:"Biraš model, materijal, oblik venca, boju šava i 12h oznake.", d:"Kroz upit prolazimo model vozila, oblik i debljinu venca, materijal (kovani karbon / karbon / koža / Alcantara), boju konca i 12h oznake, te opcije za airbag, M1/M2 tastere i LED display.", k:"pro1" },
    { n:"02", t:"Izrada venca", s:"Obrada jezgra, karbon ili presvlačenje kožom po meri.", d:"Pripremamo jezgro venca, radimo kovani karbon ili karbon obloge, odnosno ukrajamo kožu / Alcantaru po tačnim dimenzijama tvog modela.", k:"pro2" },
    { n:"03", t:"Šivenje i montaža", s:"Ručni šav u boji po izboru, LED display i tasteri.", d:"Ručno ili mašinsko šivenje u izabranoj boji konca, ugradnja LED displeja sa shift lightsima i funkcionalnih tastera, montaža na tvoj airbag modul.", k:"pro3" },
    { n:"04", t:"Kontrola i slanje", s:"Provera funkcija, pakovanje i dostava HR / EU.", d:"Testiranje svih funkcija i tastera, finalna kontrola šava i sklopa, sigurno pakovanje i slanje — Hrvatska 1–2 dana, EU 2–5, Srbija 2–4.", k:"pro4" }
  ];`);

/* ===== JS DATA: MARQUEE + GAL_FILTERS ===== */
rep('var MARQUEE = ["Premium leđer","Alcantara multilayer","Ručni šav","BMW M","Audi RS","Flat-bottom","Airbag restauracija","Detailing kočnica","VW / Golf","Custom kokpit"];',
    'var MARQUEE = ["Kovani karbon","Alcantara","Premium koža","LED display & shift lights","M1 / M2 tipke","Šav po želji","12h oznaka","BMW","Mercedes-Benz","Audi","Volkswagen","Porsche","MINI","OEM & custom","Dostava HR & EU"];');

fs.writeFileSync(f, t);
console.log('replacements applied:', n);
const chk = ['Beograd','presvlačenje volana','restauraciju','Goxy','+381 60','kontakt@primer','vas_profil','Od tada u pogonu'];
chk.forEach(function(c){ var m=(t.match(new RegExp(c.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'),'gi'))||[]).length; if(m) console.log('  still present:', c, '×'+m); });
