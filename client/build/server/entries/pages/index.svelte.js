import { a as safe_not_equal, n as noop, c as create_ssr_component, b as subscribe, d as set_store_value, e as escape, f as each } from "../../chunks/index-cb9bf181.js";
import ioClient from "socket.io-client";
ioClient();
const subscriber_queue = [];
function writable(value, start = noop) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run, invalidate = noop) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || noop;
    }
    run(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
const logs = writable(typeof localStorage !== "undefined" ? JSON.parse(localStorage.getItem("logs") ? localStorage.getItem("logs") : "[]") : []);
if (typeof localStorage !== "undefined") {
  logs.subscribe((value) => localStorage.setItem("logs", JSON.stringify(value)));
}
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let total;
  let $logs, $$unsubscribe_logs;
  $$unsubscribe_logs = subscribe(logs, (value) => $logs = value);
  let loglar = $logs;
  total = loglar.length;
  {
    {
      set_store_value(logs, $logs = loglar, $logs);
    }
  }
  $$unsubscribe_logs();
  return `${$$result.head += `${$$result.title = `<title>EKMEK App</title>`, ""}`, ""}



<div class="${"text-center font-mono p-5 text-xl"}"><h1>Ekmek&#39;e Ho\u015Fgeldin!</h1></div>

<div class="${"p-5"}"><h1>${escape(total)} adet log mevcut</h1>
  ${each($logs, (log) => {
    return `<p>${escape(log)}</p>`;
  })}</div>`;
});
export { Routes as default };
