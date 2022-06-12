import { c as create_ssr_component, e as escape, a as each } from "../../chunks/index-57608c9a.js";
import ioClient from "socket.io-client";
ioClient();
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let total;
  let logs = [];
  total = logs.length;
  return `${$$result.head += `${$$result.title = `<title>EKMEK App</title>`, ""}`, ""}



<div class="${"text-center font-mono p-5 text-xl"}"><h1>Ekmek&#39;e Ho\u015Fgeldin!</h1></div>

<div class="${"p-5 font-mono"}"><h1>${escape(total)} adet log mevcut</h1>
  ${each(logs, (log) => {
    return `<p>${escape(log)}</p>`;
  })}</div>`;
});
export { Routes as default };
