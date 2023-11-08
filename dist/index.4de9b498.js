// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"gAbrY":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "2751c5c64de9b498";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"4pp4s":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _swiper = require("../lib/swiper");
var _swiperDefault = parcelHelpers.interopDefault(_swiper);
const state = {
    page: window.location.pathname,
    API_KEY: "ecfebf36fb13c9599b30b4385926dcff",
    API_URL: "https://api.themoviedb.org/3",
    searchQuery: {
        name: "",
        type: "",
        page: 1,
        totalPages: 1,
        totalResults: 0
    }
};
const highlightActiveLink = ()=>{
    const links = document.querySelectorAll(".nav-link");
    links.forEach((link)=>{
        if (link.getAttribute("href") === state.page) link.classList.add("active");
    });
};
const isSubmit = (event)=>{
    const query = document.getElementById("search-term").value;
    const input = document.getElementById("search-term");
    if (!query) {
        event.preventDefault();
        input.style.border = "1px solid red";
    }
    setTimeout(()=>{
        input.style.border = "1px solid white";
    }, 4000);
};
const showSpinner = ()=>{
    document.querySelector(".overlay").classList.add("show");
};
const hideSpinner = ()=>{
    document.querySelector(".overlay").classList.remove("show");
};
const fetchData = async (endpoint)=>{
    const { API_KEY, API_URL } = state;
    try {
        showSpinner();
        const response = await fetch(`${API_URL}/${endpoint}?api_key=${API_KEY}&language=en-US`);
        const data = await response.json();
        hideSpinner();
        return data;
    } catch (error) {
        console.log(error);
    }
};
const displayPopularMovies = async ()=>{
    const { results } = await fetchData("movie/popular");
    results.forEach((movie)=>{
        const { id, title, poster_path: image, release_date: date } = movie;
        const movieCard = document.createElement("div");
        movieCard.classList.add("card");
        movieCard.innerHTML = `
    <a href=movie-details.html?id=${id}>
    <img
      src=https://image.tmdb.org/t/p/w500/${image}
      class="card-img-top"
      alt=${title}
    />
  </a>
  <div class="card-body">
    <h5 class="card-title">${title}</h5>
    <p class="card-text">
      <small class="text-muted">Release: ${date}</small>
    </p>
  </div>
    `;
        document.getElementById("popular-movies").appendChild(movieCard);
    });
};
const displayPopularShows = async ()=>{
    const { results } = await fetchData("tv/popular");
    results.forEach((show)=>{
        const { id, original_name: title, poster_path: image, first_air_date: date } = show;
        const TVShowCard = document.createElement("div");
        TVShowCard.classList.add("card");
        TVShowCard.innerHTML = `
    <a href=tv-details.html?id=${id}>
    <img
      src=https://image.tmdb.org/t/p/w500/${image}
      class="card-img-top"
      alt=${title}
    />
  </a>
  <div class="card-body">
    <h5 class="card-title">${title}</h5>
    <p class="card-text">
      <small class="text-muted">Release: ${date}</small>
    </p>
  </div>
    `;
        document.getElementById("popular-shows").appendChild(TVShowCard);
    });
};
const displayBackground = (type, image)=>{
    const background = document.createElement("div");
    background.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${image})`;
    background.classList.add("background-overlay");
    type === "movie" ? document.getElementById("movie-details").appendChild(background) : document.getElementById("show-details").appendChild(background);
};
const displayMovieDetails = async ()=>{
    const movieId = window.location.search.split("=")[1];
    const movie = await fetchData(`movie/${movieId}`);
    const { budget, genres, title, runtime, overview, release_date: date, revenue, status, production_companies: companies, homepage, poster_path: image, backdrop_path: background, vote_average: rate } = movie;
    displayBackground("movie", background);
    const formatToUSD = (value)=>value.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        });
    const production = companies.map((company)=>company.name).join(", ");
    const movieDetails = document.createElement("div");
    movieDetails.innerHTML = `
  <div class="details-top">
  <div>
    <img
      src=${!image ? "/images/no-image.jpg" : `https://image.tmdb.org/t/p/w500/${image}`}
      class="card-img-top"
      alt=${title}
    />
  </div>
  <div>
    <h2>${title}</h2>
    <p>
      <i class="fas fa-star text-primary"></i>
      ${rate.toFixed(1)} / 10
    </p>
    <p class="text-muted">Release Date: ${date}</p>
    <p>
    ${overview}
    </p>
    <h5>Genres</h5>
    <ul class="list-group">
    ${genres.map((genre)=>`<li>${genre.name}</li>`).join("")}
    </ul>
    ${homepage ? `<a href=${homepage} target="_blank" class="btn">Visit Movie Homepage</a>` : ""}
  </div>
</div>
<div class="details-bottom">
  <h2>Movie Info</h2>
  <ul>
    <li><span class="text-secondary">Budget:</span> ${formatToUSD(budget)}</li>
    <li><span class="text-secondary">Revenue:</span> ${formatToUSD(revenue)}</li>
    <li><span class="text-secondary">Runtime:</span> ${runtime} minutes</li>
    <li><span class="text-secondary">Status:</span> ${status}</li>
  </ul>
  <h4>Production Companies</h4>
  <div class="list-group">${production}</div>
</div>
  `;
    document.getElementById("movie-details").appendChild(movieDetails);
};
const displayShowDetails = async ()=>{
    const showId = window.location.search.split("=")[1];
    const show = await fetchData(`tv/${showId}`);
    console.log(show);
    const { genres, original_name: name, last_episode_to_air: lastEpisode, overview, first_air_date: date, status, number_of_seasons: seasonsAmount, production_companies: companies, homepage, poster_path: image, backdrop_path: background, vote_average: rate } = show;
    displayBackground("tv", background);
    const production = companies.map((company)=>company.name).join(", ");
    const showDetails = document.createElement("div");
    showDetails.innerHTML = `
    <div class="details-top">
    <div>
      <img
        src=${!image ? "/images/no-image.jpg" : `https://image.tmdb.org/t/p/w500/${image}`}
        class="card-img-top"
        alt=${name}
      />
    </div>
    <div>
      <h2>${name}</h2>
      <p>
        <i class="fas fa-star text-primary"></i>
        ${rate.toFixed(1)} / 10
      </p>
      <p class="text-muted">Release Date: ${date}</p>
      <p>
      ${overview}
      </p>
      <h5>Genres</h5>
      <ul class="list-group">
      ${genres.map((genre)=>`<li>${genre.name}</li>`).join("")}
      </ul>
      <a href=${homepage} target="_blank" class="btn">Visit Movie Homepage</a>
    </div>
  </div>
  <div class="details-bottom">
    <h2>Show info</h2>
    <ul>
    <li><span class="text-secondary">Number Of Episodes:</span> 
    ${seasonsAmount}
    </li>
    <li>
      <span class="text-secondary">Last Episode To Air:</span>
      ${lastEpisode.air_date}
    </li>
    <li><span class="text-secondary">Status:</span> ${status}</li>
  </ul>
    </ul>
    <h4>Production Companies</h4>
    <div class="list-group">${production}</div>
  </div>`;
    document.getElementById("show-details").appendChild(showDetails);
};
const initSwiper = ()=>{
    const swiper = new (0, _swiperDefault.default)(".swiper", {
        speed: 400,
        slidesPerView: 1,
        loop: true,
        freeMode: true,
        spaceBetween: 30,
        autoplay: {
            delay: 4000
        },
        breakpoints: {
            500: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 40
            }
        }
    });
};
const showSliders = async ()=>{
    const { results } = await fetchData("movie/top_rated");
    console.log(results);
    results.forEach((movie)=>{
        const { id, title, vote_average: rate, poster_path: image } = movie;
        const movieSlide = document.createElement("div");
        movieSlide.classList.add("swiper-slide");
        movieSlide.innerHTML = `
    <a href="movie-details.html?id=${id}">
      <img src=https://image.tmdb.org/t/p/w500/${image} alt=${title} />
    </a>
    <h4 class="swiper-rating">
      <i class="fas fa-star text-secondary"></i> ${rate.toFixed(1)} / 10
    </h4>
    `;
        document.querySelector(".swiper-wrapper").appendChild(movieSlide);
    });
    initSwiper();
};
const displaySearchResults = (results)=>{
    document.getElementById("search-results-heading").innerHTML = "";
    document.getElementById("search-results").innerHTML = "";
    if (!!results.length) results.forEach((result)=>{
        const { poster_path: image, title, name, id, first_air_date, release_date } = result;
        const cart = document.createElement("div");
        cart.classList.add("cart");
        const { searchQuery: { page, name: query, totalPages, totalResults, type } } = state;
        cart.innerHTML = `
          <div class="card">
            <a href=${type}-details.html?id=${id}>
            <img src=${image ? `https://image.tmdb.org/t/p/w500/${image}` : "http://surl.li/mzaha"}
             class="card-img-top" alt=${title || name} />
          </a>
          <div class="card-body">
            <h5 class="card-title">${title || name}</h5>
            <p class="card-text">
            ${release_date ? `Release Date: ${release_date || first_air_date}` : ""}
            </p>
          </div>
        </div>`;
        const resultHeading = document.getElementById("search-results-heading");
        resultHeading.innerHTML = `<h2>${results.length} results of 
        ${totalResults} for ${query}</h2>`;
        document.getElementById("search-results").appendChild(cart);
        const pages = document.querySelector(".page-counter");
        pages.textContent = `
      Page ${page} of ${totalPages}`;
    });
    else {
        const message = document.createElement("h1");
        const pagination = document.querySelector(".pagination");
        pagination.style.display = "none";
        message.textContent = "NO RESUTS MATCH";
        message.style.margin = "0 auto";
        message.style.height = "calc(100vh - 400px)";
        document.getElementById("search-results").appendChild(message);
    }
};
const searchAPIData = async ()=>{
    const { API_KEY, API_URL, searchQuery: { name, type, page } } = state;
    showSpinner();
    try {
        const response = await fetch(`${API_URL}/search/${type}?api_key=${API_KEY}&query=${name}&page=${page}`);
        const data = await response.json();
        hideSpinner();
        return data;
    } catch (error) {
        alert(error.message);
    }
};
const searchMedia = async ()=>{
    const query = window.location.search;
    const urlParams = new URLSearchParams(query);
    state.searchQuery.name = urlParams.get("search-term");
    state.searchQuery.type = urlParams.get("type");
    const { results, page, total_pages, total_results } = await searchAPIData();
    state.searchQuery.page = page;
    state.searchQuery.totalResults = total_results;
    state.searchQuery.totalPages = total_pages;
    displaySearchResults(results);
};
const displayPagination = ()=>{
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");
    nextButton.addEventListener("click", async ()=>{
        if (state.searchQuery.page < state.searchQuery.totalPages) {
            state.searchQuery.page++;
            const { results } = await searchAPIData();
            displaySearchResults(results);
            prevButton.disabled = false;
        } else nextButton.disabled = true;
    });
    prevButton.addEventListener("click", async ()=>{
        if (state.searchQuery.page > 1) {
            state.searchQuery.page--;
            const { results } = await searchAPIData();
            displaySearchResults(results);
            nextButton.disabled = false;
        } else prevButton.disabled = true;
    });
};
const init = ()=>{
    switch(state.page){
        case "/":
        case "/index.html":
            showSliders();
            displayPopularMovies();
            break;
        case "/movie-details.html":
            displayMovieDetails();
            break;
        case "/search.html":
            searchMedia();
            displayPagination();
            break;
        case "/shows.html":
            displayPopularShows();
            break;
        case "/tv-details.html":
            displayShowDetails();
            break;
    }
    highlightActiveLink();
};
document.addEventListener("DOMContentLoaded", init);
const submitBtn = document.querySelector(".btn");
submitBtn.addEventListener("click", isSubmit);

},{"../lib/swiper":"ePqkp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["gAbrY","4pp4s"], "4pp4s", "parcelRequire6405")

//# sourceMappingURL=index.4de9b498.js.map
