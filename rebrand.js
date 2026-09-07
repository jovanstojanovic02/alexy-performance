const fs = require('fs');
const f = 'template.html';
let t = fs.readFileSync(f, 'utf8');
const before = t;

function rep(a, b, must = true) {
  if (must && t.indexOf(a) === -1) { console.error('NOT FOUND:', JSON.stringify(a.slice(0, 80))); process.exitCode = 1; return; }
  t = t.split(a).join(b);
}

/* ---------- COLORS: lime -> light copper ---------- */
rep('--accent:    #E8FF5A;', '--accent:    #E9A868;');
rep('--accent-dk: #C4DE38;', '--accent-dk: #C67B41;');
rep('--accent-ink:#0C0D07;', '--accent-ink:#1B1206;');
rep('rgba(232,255,90,.16)', 'rgba(233,168,104,.18)');
rep('rgba(232,255,90,.05)', 'rgba(233,168,104,.06)');
rep('rgba(232,255,90,.12)', 'rgba(233,168,104,.14)');
rep('linear-gradient(158deg, #eeff6b 0%, var(--accent) 42%, var(--accent-dk) 100%)',
    'linear-gradient(158deg, #F5C89B 0%, var(--accent) 42%, var(--accent-dk) 100%)');
rep('/* lime sweep page transition */', '/* copper sweep page transition */');

/* ---------- LOGO -> neutral typographic monogram "A" ---------- */
rep(
`.mark{
  display:block; width:30px; height:30px; flex:none; font-size:0;
  background:url("__LOGO_128__") center/contain no-repeat;
}`,
`.mark{
  display:grid; place-items:center; width:30px; height:30px; flex:none;
  background:linear-gradient(145deg, var(--accent), var(--accent-dk));
  border-radius:7px; color:var(--accent-ink);
  font-family:var(--ff-display); font-weight:900; font-size:15px; line-height:1;
}
.mark::before{ content:"A"; display:block; transform:translateY(.02em); }`);

rep(
`.intro .mark{ width:clamp(124px, 30vw, 200px); height:clamp(124px, 30vw, 200px); background-image:url("__LOGO_512__"); }`,
`.intro .mark{ width:clamp(104px, 26vw, 172px); height:clamp(104px, 26vw, 172px); border-radius:24px; font-size:clamp(58px, 15vw, 96px); }`);

rep(
`.swipe-logo{
  position:absolute; left:50%; top:50%; transform:translate(-50%,-50%) scale(.8);
  width:clamp(130px, 26vw, 210px); aspect-ratio:1;
  background:url("__LOGO_512__") center/contain no-repeat;
  filter:brightness(0); opacity:0;
}`,
`.swipe-logo{
  position:absolute; left:50%; top:50%; transform:translate(-50%,-50%) scale(.8);
  width:clamp(130px, 26vw, 210px); aspect-ratio:1;
  display:grid; place-items:center; line-height:1;
  color:var(--bg); font-family:var(--ff-display); font-weight:900; font-size:clamp(92px, 20vw, 150px);
  opacity:0;
}
.swipe-logo::before{ content:"A"; }`);

/* ---------- FAVICON ---------- */
const FAV = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='14' fill='%23E9A868'/%3E%3Cpath d='M16 48 L32 16 L48 48 M22 38 L42 38' stroke='%231B1206' stroke-width='6' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E";
rep('<link rel="icon" type="image/png" sizes="64x64" href="__LOGO_64__">',
    '<link rel="icon" href="' + FAV + '">');
rep('<link rel="apple-touch-icon" href="__LOGO_128__">',
    '<link rel="apple-touch-icon" href="' + FAV + '">');

/* ---------- NAME: Goxy -> Alexy ---------- */
rep('<title>Goxy Performance Design</title>', '<title>Alexy Performance Design</title>');
rep('content="Goxy Performance Design — atelje', 'content="Alexy Performance Design — atelje');
rep('<meta property="og:title" content="Goxy Performance Design">', '<meta property="og:title" content="Alexy Performance Design">');
rep('<span class="intro-word">Goxy</span>', '<span class="intro-word">Alexy</span>');
rep('<span>Goxy <span class="sub">Performance Design</span></span>', '<span>Alexy <span class="sub">Performance Design</span></span>'); // nav + footer (2x)
rep('margin-bottom:1rem">Goxy Performance Design</h2>', 'margin-bottom:1rem">Alexy Performance Design</h2>');
rep('© 2026 Goxy Performance Design', '© 2026 Alexy Performance Design');
rep("sessionStorage.getItem('goxy_intro')", "sessionStorage.getItem('alexy_intro')");
rep("sessionStorage.setItem('goxy_intro','1')", "sessionStorage.setItem('alexy_intro','1')");

/* ---------- CONTACT: neutralize real Goxy details for a template ---------- */
rep('tel:+38163305960', 'tel:+381600000000');            // 2x hrefs
rep('>+381 63 305 960<', '>+381 60 000 0000<');          // 2x link text
rep('na +381 63 305 960.', 'na +381 60 000 0000.');      // demo form message
rep('mailto:rattexpertensweden@gmail.com', 'mailto:kontakt@primer.rs');
rep('>rattexpertensweden@gmail.com<', '>kontakt@primer.rs<');
rep('https://instagram.com/goxy_performancedesign', 'https://instagram.com/vas_profil');
rep('>@goxy_performancedesign<', '>@vas_profil<');
rep('Instagram @goxy_performancedesign', 'Instagram @vas_profil');
rep('Leposave Mihailović 57, Beograd', 'Vaša adresa, Beograd'); // 2x

if (t === before) { console.error('NO CHANGES MADE'); process.exit(1); }
fs.writeFileSync(f, t);
const leftGoxy = (t.match(/goxy/gi) || []).length;
const leftLime = (t.match(/#E8FF5A|#C4DE38|#eeff6b|232,255,90/gi) || []).length;
const leftTokens = (t.match(/__LOGO_\d+__/g) || []).length;
console.log('OK. remaining goxy:', leftGoxy, ' remaining lime:', leftLime, ' remaining logo-tokens:', leftTokens);
