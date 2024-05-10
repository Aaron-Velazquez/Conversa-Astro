import { c as createComponent, r as renderTemplate, d as renderHead, e as renderSlot, f as createAstro, m as maybeRenderHead, g as addAttribute, h as renderComponent } from '../astro_CCwpTYCO.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                             */
/* empty css                             */
import { ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
/* empty css                             */

const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-dmqsi53g> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Conversa | ${title}</title>${renderHead()}</head> <body data-astro-cid-dmqsi53g> <main data-astro-cid-dmqsi53g> <nav class="menu" data-astro-cid-dmqsi53g> <div class="opciones" data-astro-cid-dmqsi53g> <span class="logo" onclick="window.location.href = './';" data-astro-cid-dmqsi53g>
Conversa
</span> <!-- <li>Desarrollo</li> --> <li onclick="window.location.href = './landings';" data-astro-cid-dmqsi53g>Landings</li> <li onclick="window.location.href = './soporte';" data-astro-cid-dmqsi53g>Soporte</li> <li onclick="window.location.href = './nosotros';" data-astro-cid-dmqsi53g>Nosotros</li> <li onclick="window.location.href = './planes';" data-astro-cid-dmqsi53g>Presupuesto</li> </div> <div class="contacto" data-astro-cid-dmqsi53g> <span onclick="window.location.href = './contacto';" data-astro-cid-dmqsi53g>Contactanos</span> <img id="hamburger" class="burger" src="./img/menuToggle.svg" alt="Hamburguesa" data-astro-cid-dmqsi53g> <img id="salir" class="burger onScreen-mob" src="./img/x.svg" alt="X" data-astro-cid-dmqsi53g> </div> </nav> <div class="menu-mobile onScreen" data-astro-cid-dmqsi53g> <span id="Desarrollo" data-astro-cid-dmqsi53g>Desarrollo</span> <span id="Plantillas" data-astro-cid-dmqsi53g>Plantillas</span> <span id="Soporte" data-astro-cid-dmqsi53g>Soporte</span> <span id="Nosotros" data-astro-cid-dmqsi53g>Nosotros</span> <span id="Contacto" data-astro-cid-dmqsi53g>Contacto</span> </div> ${renderSlot($$result, $$slots["default"])} </main> <footer data-astro-cid-dmqsi53g> <div class="footer-container" data-astro-cid-dmqsi53g> <span data-astro-cid-dmqsi53g>Conversa</span> <div class="footer_sections" data-astro-cid-dmqsi53g> <div class="footer-section" data-astro-cid-dmqsi53g> <span class="foot_titulo" data-astro-cid-dmqsi53g>Nosotros</span> <li data-astro-cid-dmqsi53g>Términos y condiciones</li> <li data-astro-cid-dmqsi53g>Presupuestos</li> <li data-astro-cid-dmqsi53g>Contacto</li> <li data-astro-cid-dmqsi53g>Quienes Somos</li> </div> <div class="footer-section" data-astro-cid-dmqsi53g> <span class="foot_titulo" data-astro-cid-dmqsi53g>Casos de Uso</span> <li data-astro-cid-dmqsi53g>Restaurantes</li> <li data-astro-cid-dmqsi53g>Gimnasios</li> <li data-astro-cid-dmqsi53g>Portafolios</li> <li data-astro-cid-dmqsi53g>Seguros</li> </div> <div class="footer-section" data-astro-cid-dmqsi53g> <span class="bolder" data-astro-cid-dmqsi53g>E-Mail</span> <li data-astro-cid-dmqsi53g>social@conversa.com.py</li> <span class="bolder" data-astro-cid-dmqsi53g>Teléfono</span> <li id="tel" data-astro-cid-dmqsi53g>+595 973236438</li> </div> </div> <div class="line" data-astro-cid-dmqsi53g></div> <div class="social-icons" data-astro-cid-dmqsi53g> <div class="social-icon" data-astro-cid-dmqsi53g> <figure data-astro-cid-dmqsi53g> <img src="./img/instagram.svg" alt="Instagram" data-astro-cid-dmqsi53g> </figure> <span data-astro-cid-dmqsi53g>Instagram</span> </div> <div class="social-icon" data-astro-cid-dmqsi53g> <figure data-astro-cid-dmqsi53g> <img src="./img/facebook.svg" alt="Facebook" data-astro-cid-dmqsi53g> </figure> <span data-astro-cid-dmqsi53g>Facebook</span> </div> <div class="social-icon" data-astro-cid-dmqsi53g> <figure data-astro-cid-dmqsi53g> <img src="./img/whatsapp.svg" alt="Whatsapp" data-astro-cid-dmqsi53g> </figure> <span data-astro-cid-dmqsi53g>Whatsapp</span> </div> </div> </div> </footer>  </body></html>`;
}, "C:/Users/Aaron/Desktop/Proyectos/Front/Conversa-Astro/src/components/Layout.astro", void 0);

const $$Astro = createAstro();
const $$HeroImg = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$HeroImg;
  const { header, subtitle, imagen } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<main data-astro-cid-bvw5cdef> <div class="backgroundIMG" data-astro-cid-bvw5cdef> <img${addAttribute(imagen, "src")} alt="background" data-astro-cid-bvw5cdef> </div> <div class="hero__header" data-astro-cid-bvw5cdef> <div class="hero__texto" data-astro-cid-bvw5cdef> <h1 data-astro-cid-bvw5cdef>${header}</h1> <p data-astro-cid-bvw5cdef>${subtitle}</p> </div> </div> </main> `;
}, "C:/Users/Aaron/Desktop/Proyectos/Front/Conversa-Astro/src/components/hero-img.astro", void 0);

const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

const _sfc_main = {
  __name: 'contactForm',
  setup(__props, { expose: __expose }) {
  __expose();

const responseMessage = ref('');

async function submit(e){
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const response = await fetch("http://127.0.0.1:8000/api/registro", {
        method: "POST",
        body: formData
    });
    clear();
    const data = await response.json();
    responseMessage.value = data.message;
}
function clear(){
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("mensaje").value = "";
}

const __returned__ = { responseMessage, submit, clear, ref };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "formulario-de-contacto" }, _attrs))} data-v-0848c6cd><div class="contacto-text" data-v-0848c6cd><h2 data-v-0848c6cd>Hablemos</h2><span data-v-0848c6cd>Atendemos tu solicitud lo antes posible.</span></div><div class="contacto-row" data-v-0848c6cd><form class="contactForm" data-v-0848c6cd><div class="form-row" data-v-0848c6cd><div class="form-column" data-v-0848c6cd><label data-v-0848c6cd>Nombre</label><input id="nombre" type="text" name="nombre" required data-v-0848c6cd></div><div class="form-column" data-v-0848c6cd><label data-v-0848c6cd>Apellido</label><input id="apellido" type="text" name="apellido" required data-v-0848c6cd></div></div><label data-v-0848c6cd>Correo</label><input id="mail" type="email" name="correo" required data-v-0848c6cd><label id="mensaje" class="textArea" data-v-0848c6cd>Mensaje</label><textarea class="textArea" type="text" name="mensaje" required data-v-0848c6cd></textarea><input type="submit" value="Enviar" data-v-0848c6cd></form><div class="linea" data-v-0848c6cd></div><div class="side-form" data-v-0848c6cd><div class="call-us" data-v-0848c6cd><span class="title" data-v-0848c6cd>Llámanos</span><span data-v-0848c6cd>Te atendemos en horario de oficina.</span><span data-v-0848c6cd>(0973) 236-438</span></div><div class="social-media" data-v-0848c6cd><span class="title" data-v-0848c6cd> Conocenos </span><span data-v-0848c6cd>Leemos tus mensajes en redes sociales.</span><figure data-v-0848c6cd></figure></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/contactForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
};
const Contactform = /*#__PURE__*/_export_sfc(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-0848c6cd"]]);

const $$Contacto = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-2mxdoeuz": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$HeroImg, { "header": "\xBFTienes dudas?Contactanos", "subtitle": "Envia un mensaje a la bandeja y conectamos contigo en brevedad.", "imagen": "./img/contacto-bg.jpg", "data-astro-cid-2mxdoeuz": true })} ${renderComponent($$result2, "Contactform", Contactform, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Aaron/Desktop/Proyectos/Front/Conversa-Astro/src/components/contactForm.vue", "client:component-export": "default", "data-astro-cid-2mxdoeuz": true })} ` })} `;
}, "C:/Users/Aaron/Desktop/Proyectos/Front/Conversa-Astro/src/pages/contacto.astro", void 0);

const $$file = "C:/Users/Aaron/Desktop/Proyectos/Front/Conversa-Astro/src/pages/contacto.astro";
const $$url = "/contacto";

const contacto = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Contacto,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, _export_sfc as _, $$HeroImg as a, contacto as c };
