if(!self.define){let e,s={};const r=(r,o)=>(r=new URL(r+".js",o).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(o,a)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let l={};const n=e=>r(e,i),d={module:{uri:i},exports:l,require:n};s[i]=Promise.all(o.map((e=>d[e]||n(e)))).then((e=>(a(...e),l)))}}define(["./workbox-2b403519"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:".nojekyll",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"decks/http.html",revision:"e4d01c8d71862bc2741159b23c837897"},{url:"decks/internet.html",revision:"2f070241d88edba972d05b0d728e34da"},{url:"decks/intro.html",revision:"eaf4dcd0f8e7cdd41c79cee243588cd4"},{url:"decks/more-http.html",revision:"1b83a4009ed1732cd8fb1560009cf8e7"},{url:"decks/overview.html",revision:"f76c753f5f52a490f90c19c302b45baa"},{url:"images/Tcp_state_diagram_fixed_new.svg",revision:"a267a69a05a407e58c55438bff585594"},{url:"images/ajax.png",revision:"bce3b7e8dad28aa7215d72aa250302c4"},{url:"images/certificate1.png",revision:"6e11d6c8ba5b4f6e27759c74e0d9e0e4"},{url:"images/certificate2.png",revision:"2f5349ccf124f96986af3b3b3a944cb4"},{url:"images/certificate3.png",revision:"17737a78a5c037e1d27c30de29b2f4e5"},{url:"images/cloudflare-502.png",revision:"c205010dee5c58a686ee3fb099204ba5"},{url:"images/fetch.gif",revision:"20909eaf586ebbc6c4e3d80d181bd859"},{url:"images/github_404.png",revision:"402231d69d6f0d3f6df22fbb33881cc7"},{url:"images/hostinger-502-Featured-Graph.webp",revision:"1a61dacbbbf4d2044ec2d6ee7f306d9a"},{url:"images/mdn-compatibility-table.png",revision:"37c5a75430b30fb13df497e1530347bb"},{url:"images/multiplexing01.svg",revision:"47ba5b32e42cf5a06c3741d29ef9b94a"},{url:"images/observer.svg",revision:"1a9a67fd79fe210e5f0ac9f2d3ea19ee"},{url:"images/plasma.png",revision:"a64be9ba1c31a3188e52653a952aad88"},{url:"images/reverse-proxy-cdn-example.svg",revision:"75c250796b0ac958e457960af9e77c60"},{url:"images/reverse-proxy-lb-example.svg",revision:"f574461a5a2d223d0a62f987b0b0242d"},{url:"images/tls-ssl-handshake.png",revision:"18e1ed24fc12e6ab167f64abe4bbcc53"},{url:"images/tls.svg",revision:"c1ccedc192ce73d6793f9b2df98236eb"},{url:"images/web-server-plus-more.svg",revision:"e87630f483881b0eb86a3a73bfdb57c5"},{url:"images/web-server.svg",revision:"a4240814ef4b2568c7444fb87cc10c68"},{url:"images/☃.svg",revision:"526a48bc067743562c7720a23df74529"},{url:"index.html",revision:"cdf2e459416b6e43b6a94ad70688b756"},{url:"main.js",revision:"79ea823b921bda03d10f8fd3681a90fd"},{url:"node_modules/@fontsource-variable/lexend-deca/files/lexend-deca-latin-ext-wght-normal.3c52b0d9539d16f55727.woff2",revision:null},{url:"node_modules/@fontsource-variable/lexend-deca/files/lexend-deca-latin-wght-normal.89aab19b14ed836c4ff1.woff2",revision:null},{url:"node_modules/@fontsource-variable/lexend-deca/files/lexend-deca-vietnamese-wght-normal.dab39dd47d8c51e5288a.woff2",revision:null},{url:"node_modules/reveal.js/dist/theme/fonts/source-sans-pro/source-sans-pro-italic.10a5cb40054505a4b3a9.ttf",revision:null},{url:"node_modules/reveal.js/dist/theme/fonts/source-sans-pro/source-sans-pro-italic.97e79d3e28a440c77195.eot",revision:null},{url:"node_modules/reveal.js/dist/theme/fonts/source-sans-pro/source-sans-pro-italic.983d97ca59e8e24e94c6.woff",revision:null},{url:"node_modules/reveal.js/dist/theme/fonts/source-sans-pro/source-sans-pro-regular.36443d248c8a75fde2a6.eot",revision:null},{url:"node_modules/reveal.js/dist/theme/fonts/source-sans-pro/source-sans-pro-regular.45c54810910de71280ab.ttf",revision:null},{url:"node_modules/reveal.js/dist/theme/fonts/source-sans-pro/source-sans-pro-regular.d16535500d9438afb409.woff",revision:null},{url:"node_modules/reveal.js/dist/theme/fonts/source-sans-pro/source-sans-pro-semibold.6ebea875df77b49da05b.ttf",revision:null},{url:"node_modules/reveal.js/dist/theme/fonts/source-sans-pro/source-sans-pro-semibold.83db537e62224a779338.eot",revision:null},{url:"node_modules/reveal.js/dist/theme/fonts/source-sans-pro/source-sans-pro-semibold.f11ba60ae1c65b37e616.woff",revision:null},{url:"node_modules/reveal.js/dist/theme/fonts/source-sans-pro/source-sans-pro-semibolditalic.522a9ee9b3b2ecbdd367.ttf",revision:null},{url:"node_modules/reveal.js/dist/theme/fonts/source-sans-pro/source-sans-pro-semibolditalic.a43f56accdef4a0b01f0.woff",revision:null},{url:"node_modules/reveal.js/dist/theme/fonts/source-sans-pro/source-sans-pro-semibolditalic.fb03c6601ab6f48952c4.eot",revision:null}],{})}));
