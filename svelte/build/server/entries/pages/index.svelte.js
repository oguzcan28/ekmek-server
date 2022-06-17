import { c as create_ssr_component, v as validate_component, a as add_attribute, e as escape, b as each } from "../../chunks/index-1259f1f6.js";
import ioClient from "socket.io-client";
import "moment";
ioClient("/");
const DarkModeButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${``}`;
});
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let total;
  let logs = [];
  total = logs.length;
  return `${$$result.head += `${$$result.title = `<title>Ekmek | G\xFCncel Rig Verileri</title>`, ""}`, ""}

${validate_component(DarkModeButton, "DarkModeButton").$$render($$result, {}, {}, {})}

<div class="${"text-center font-mono p-5 text-xl"}"><h1>Ekmek</h1>
  <p${add_attribute("class", "dark:text-white", 0)}>Mining ba\u015Flang\u0131\xE7 ${escape("verisi bekleniyor...")}</p></div>

<div class="${"flex justify-center p-1"}"><button class="${"bg-yellow-400 text-black p-1 rounded"}">Tabloyu ${escape("g\xF6ster")}</button></div>

${``}

<div class="${"p-5 font-mono"}"><div class="${"flex flex-row items-center justify-around p-5"}"><h1>${escape(total)} adet log mevcut</h1>
    <button class="${"p-1 rounded bg-yellow-400 text-black"}">Loglar\u0131 temizle
    </button></div>
  ${each(logs, (log) => {
    return `<p>${escape(log)}</p>`;
  })}</div>`;
});
export { Routes as default };
