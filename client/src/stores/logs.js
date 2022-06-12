import { writable } from "svelte/store";

// Store an Array or Object:
export const logs = writable(
  typeof localStorage !== 'undefined' ? JSON.parse(
    localStorage.getItem('logs') ? localStorage.getItem('logs') : "[]"
  ) : []
);

// check for localStorage, this won't run on SSR
if (typeof localStorage !== 'undefined') {
  logs.subscribe(value => localStorage.setItem('logs', JSON.stringify(value)));
};
