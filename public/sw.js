if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise((async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},s=(s,r)=>{Promise.all(s.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(s)};self.define=(s,n,a)=>{r[s]||(r[s]=Promise.resolve().then((()=>{let r={};const i={uri:location.origin+s.slice(1)};return Promise.all(n.map((s=>{switch(s){case"exports":return r;case"module":return i;default:return e(s)}}))).then((e=>{const s=a(...e);return r.default||(r.default=s),r}))})))}}define("./sw.js",["./workbox-1ca495a9"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/1a48c3c1-f7a5dca36c1dc05fef5d.js",revision:"uDm5U7mV8f18oz0E8Frk8"},{url:"/_next/static/chunks/1bfc9850-1b539aa80a3265a37522.js",revision:"uDm5U7mV8f18oz0E8Frk8"},{url:"/_next/static/chunks/commons-960fee0af4948d411b3a.js",revision:"uDm5U7mV8f18oz0E8Frk8"},{url:"/_next/static/chunks/d7eeaac4-1d075a624011efae86a4.js",revision:"uDm5U7mV8f18oz0E8Frk8"},{url:"/_next/static/chunks/framework-df2ebe1bf5bf4be23f6e.js",revision:"uDm5U7mV8f18oz0E8Frk8"},{url:"/_next/static/chunks/main-7677979382ac65a4372b.js",revision:"uDm5U7mV8f18oz0E8Frk8"},{url:"/_next/static/chunks/pages/_app-1b4ae1f396472e9ee6b8.js",revision:"uDm5U7mV8f18oz0E8Frk8"},{url:"/_next/static/chunks/pages/_error-185047e70030535cbb7e.js",revision:"uDm5U7mV8f18oz0E8Frk8"},{url:"/_next/static/chunks/pages/index-259ad3a56062b2c2d79b.js",revision:"uDm5U7mV8f18oz0E8Frk8"},{url:"/_next/static/chunks/polyfills-3d2c0f0875171918a758.js",revision:"uDm5U7mV8f18oz0E8Frk8"},{url:"/_next/static/chunks/webpack-8e8e4eaaaa09e70287be.js",revision:"uDm5U7mV8f18oz0E8Frk8"},{url:"/_next/static/css/bdd9b3952a295f31037d.css",revision:"uDm5U7mV8f18oz0E8Frk8"},{url:"/_next/static/uDm5U7mV8f18oz0E8Frk8/_buildManifest.js",revision:"uDm5U7mV8f18oz0E8Frk8"},{url:"/_next/static/uDm5U7mV8f18oz0E8Frk8/_ssgManifest.js",revision:"uDm5U7mV8f18oz0E8Frk8"},{url:"/android-chrome-192x192.png",revision:"3b7320d383ec1a7c67231bc8ffc20bd7"},{url:"/android-chrome-512x512.png",revision:"0636513358ce3c8527bba7cf30a4302d"},{url:"/apple-touch-icon.png",revision:"9658bd60d0cd4e895189060d683622eb"},{url:"/bg.svg",revision:"5dfe32ef63570d544e50f7787b8e0751"},{url:"/browserconfig.xml",revision:"6a2ae2a5ca2aa2f5bbeac9c6eab4d8c9"},{url:"/favicon-16x16.png",revision:"013d6b891377e7622b06a38cfde9698b"},{url:"/favicon-32x32.png",revision:"21f9fe9551a83001ccc3c6e5c636d9fe"},{url:"/favicon.ico",revision:"927fa5bcb086b060510eb6d175b6cded"},{url:"/mstile-150x150.png",revision:"261a6f3885f8a091dbb41a33a7347465"},{url:"/safari-pinned-tab.svg",revision:"68e8620ddf20a8be7bf6a97a9617bc45"},{url:"/site.webmanifest",revision:"37d9e29902a2ba7038c759f7f430bd72"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));