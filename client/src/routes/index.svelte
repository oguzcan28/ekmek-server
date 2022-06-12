<svelte:head>
  <title>EKMEK App</title>
</svelte:head>

<script>
  import { socket } from "$lib/realtime.js";
  import { onMount } from "svelte";
  import { logs } from "../stores/logs";

  let loglar = $logs;

  const logPusher = log => {
    loglar.push(log);
  };

  $: total = $logs.length;

  $: {
    $logs = loglar;
  }

  onMount(async () => {
    socket.on("connect", () => {
      console.log("Socket connected");
    });
  
    socket.on("frontend", log => {
      logPusher(log);
      // console.log(log);
      // console.log(logs);
    });
  });
</script>

<div class="text-center font-mono p-5 text-xl">
  <h1>Ekmek'e Hoşgeldin!</h1>
</div>

<div class="p-5">
  <h1>{total} adet log mevcut</h1>
  {#each $logs as log}
    <p>{log}</p>
  {/each}
</div>
