<script>
  import { socket } from "$lib/realtime.js";
  import { onMount } from "svelte";
  import { checkGpu } from "$lib/checkGpuLog.js";
  import { checkUptime } from "$lib/checkUptimeLog.js";
  import DarkModeButton from "$lib/components/DarkModeButton/index.svelte";

  let logs = [];
  let gpuList = [];
  let bootTime;

  let tableOpen = false;

  // TODO: total hash-rate & total power calculator here.
  $: total = logs.length;

  const logPusher = (log) => {
    logs.push(log);
    logs = [...logs];
  };

  const gpuAdder = (gpu) => {
    // for (let i = 0; i < gpuList.length; i++) {
    //   const alreadyGpu = gpuList[i];
    //   // const testGpu = {...alreadyGpu};
    //   if (gpu.name === alreadyGpu.name && gpu.row === alreadyGpu.row) {
    //     // console.log(alreadyGpu);
    //   } else {
    //     console.log(gpu);
    //     // gpuList.push(gpu);
    //     // gpuList = [ ...gpuList ];
    //     // console.log(gpuList);
    //   }
    // }

    // console.log(gpuList);

    if (gpuList.length < 6) {
      gpuList.push(gpu);
      gpuList = [...gpuList];
      // todo: row'a göre sırala.
      
    };
  };

  onMount(async () => {
    socket.on("connect", () => {
      console.log("Socket connected");
    });

    socket.on("frontend", (log) => {
      logPusher(log);

      // Analyze log here...
      const isUptime = checkUptime(log);
      const isGpu = checkGpu(log);
      
      if (isUptime) {
        bootTime = isUptime;
        // console.log(bootTime);
      };
      
      if (isGpu) {
        // console.log(isGpu);
        
        gpuAdder(isGpu);
        //   for (let i = 0; i < gpuList.length; i++) {
        //     const gpu = gpuList[i];
        //     if (isGpu.row === gpu.row && isGpu.name === gpu.name) {
        //       gpu.coreTemp = isGpu.coreTemp;
        //       gpu.vramTemp = isGpu.vramTemp;
        //       gpu.fan = isGpu.fan;
        //       gpu.power = isGpu.power;
        //       gpu.hash = isGpu.hash;
        //       gpu.r = isGpu.r;
        //     } else {
        //       gpuList.push(isGpu);
        //       // gpuList = [...gpuList];
        //     };
        //   };
        //   console.log(gpuList);
        // } else {
        //   gpuList.push(isGpu);
        // gpuList = [...gpuList];
      };
    });
  });

  const clearLogs = () => {
    logs = [];
  };

  const toggleTable = () => {
    tableOpen = !tableOpen;
  };
</script>

<svelte:head>
  <title>Ekmek Teknesi</title>
</svelte:head>

<DarkModeButton />

<div class="text-center font-mono p-5 text-xl">
  <h1>Ekmek</h1>
  <p
    class={bootTime
      ? "dark:text-yellow-400 text-yellow-600"
      : "dark:text-white"}
  >
    Mining başlangıç {bootTime ? bootTime : "verisi bekleniyor..."}
  </p>
</div>

<div class="flex justify-center p-1">
  <button on:click={toggleTable} class="bg-yellow-400 text-black p-1 rounded">
    Tabloyu {tableOpen ? "gizle" : "göster"}
  </button>
</div>

{#if tableOpen}
  <div class="flex flex-col">
    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
        <div class="overflow-hidden">
          <table class="min-w-full">
            <thead class="bg-white border-b">
              <tr>
                <th
                  scope="col"
                  class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                >
                  #
                </th>
                <th
                  scope="col"
                  class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                >
                  Ekran kartı
                </th>
                <th
                  scope="col"
                  class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                >
                  Sıcaklık
                </th>
                <th
                  scope="col"
                  class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                >
                  Vram
                </th>
                <th
                  scope="col"
                  class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                >
                  Fan
                </th>
                <th
                  scope="col"
                  class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                >
                  Güç
                </th>
                <th
                  scope="col"
                  class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                >
                  Hash
                </th>
                <th
                  scope="col"
                  class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                >
                  R
                </th>
              </tr>
            </thead>
            <tbody>
              {#each gpuList as gpu}
                <tr
                  class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                >
                  <td
                    class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                  >
                    {Number(gpu.row) + 1}
                  </td>
                  <td
                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                  >
                    {gpu.name}
                  </td>
                  <td
                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                  >
                    {gpu.coreTemp + " °C"}
                  </td>
                  <td
                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                  >
                    {gpu.vramTemp + " °C"}
                  </td>
                  <td
                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                  >
                    {gpu.fan}
                  </td>
                  <td
                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                  >
                    {gpu.power}
                  </td>
                  <td
                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                  >
                    {gpu.hash}
                  </td>
                  <td
                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                  >
                    {gpu.r}
                  </td>
                </tr>
              {/each}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
{/if}

<div class="p-5 font-mono">
  <div class="flex flex-row items-center justify-around p-5">
    <h1>{total} adet log mevcut</h1>
    <button on:click={clearLogs} class="p-1 rounded bg-yellow-400 text-black">
      Logları temizle
    </button>
  </div>
  {#each logs as log}
    <p>{log}</p>
  {/each}
</div>
