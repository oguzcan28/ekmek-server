<script>
  import { onMount } from "svelte";
  let theme = "";

  onMount(() => {
    let browserTheme = localStorage.theme;
    theme = browserTheme === "dark" ? "Açık" : "Koyu";
  });

  const toggleTheme = () => {
    if (localStorage.theme === "dark") {
      localStorage.theme = "light";
      theme = "Açık";
    } else {
      localStorage.theme = "dark";
      theme = "Koyu";
    }
    window.location.reload();
  };
</script>

{#if theme}
  <button on:click={toggleTheme} class="bg-orange-300 dark:text-yellow-50 dark:bg-yellow-800 px-2 py-1 m-5 rounded-xl absolute right-5">{theme}</button>
{/if}
