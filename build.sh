#!/bin/bash
cd "$(dirname "$0")"
node -e '
const fs=require("fs");
let t=fs.readFileSync("template.html","utf8");
const esc = s => s.replace(/\$/g,"$$$$");
t=t.replace("__IMAGES_JSON__", esc(fs.readFileSync("images.json","utf8")));
if(fs.existsSync("logo/logo-512.b64.txt")) t=t.replace(/__LOGO_512__/g, esc(fs.readFileSync("logo/logo-512.b64.txt","utf8").trim()));
if(fs.existsSync("logo/logo-128.b64.txt")) t=t.replace(/__LOGO_128__/g, esc(fs.readFileSync("logo/logo-128.b64.txt","utf8").trim()));
if(fs.existsSync("logo/logo-64.b64.txt"))  t=t.replace(/__LOGO_64__/g,  esc(fs.readFileSync("logo/logo-64.b64.txt","utf8").trim()));
fs.writeFileSync("goxy-redizajn.html", t);
fs.writeFileSync("preview-wrapped.html","<!doctype html><html><head><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"></head><body>\n"+t+"\n</body></html>");
console.log("built", Math.round(fs.statSync("goxy-redizajn.html").size/1024),"KB");
'
