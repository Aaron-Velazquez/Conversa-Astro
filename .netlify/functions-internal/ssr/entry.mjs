import { renderers } from './renderers.mjs';
import { manifest } from './manifest_BW4FzRoQ.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_B3vOLMb1.mjs');
const _page1 = () => import('./chunks/contacto_BzG1DBmn.mjs');
const _page2 = () => import('./chunks/landings_TgwPUHi-.mjs');
const _page3 = () => import('./chunks/nosotros_YwrFTi7p.mjs');
const _page4 = () => import('./chunks/planes_DUUWz-4P.mjs');
const _page5 = () => import('./chunks/soporte_Hf4fDNcY.mjs');
const _page6 = () => import('./chunks/index_CTxRCCqE.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/contacto.astro", _page1],
    ["src/pages/landings.astro", _page2],
    ["src/pages/nosotros.astro", _page3],
    ["src/pages/planes.astro", _page4],
    ["src/pages/soporte.astro", _page5],
    ["src/pages/index.astro", _page6]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "a9774893-da06-4c60-8dbb-57451e04960c"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
