<script>
  import { onMount } from "svelte";
  import ChapionProfile from "./component/ChapionProfile.svelte";
  import { getConfig } from "./libs/ddragonData";

  let config = {};
  (async () => {
    config = await getConfig();
  })();
  let champions = ["briar", "brand", "aatrox", "annie", "jinx"];
</script>

<main>
  <div class="section flex">
    {#each champions as champ}
      <ChapionProfile version={config.version} name={champ} />
    {/each}
  </div>
</main>

<style>
  main {
    background-color: #333;
    height: 100vh;
    padding: 30px 30px;
  }
  .flex {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 10px;
  }
</style>
