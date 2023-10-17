<script>
  import { onMount } from "svelte";
  import CircleFrame from "./CircleFrame.svelte";
  import CircleFrameThin from "./CircleFrameThin.svelte";
  import CooldownProgressBar from "./CooldownProgressBar.svelte";

  export let size = 100;
  export let name = "ahri";
  export let version = "10.1.1";
  let skillImages = [];
  let img = "";

  $: {
    let nameId = name.charAt(0).toUpperCase() + name.slice(1);
    skillImages = [
      `https://ddragon.leagueoflegends.com/cdn/${version}/img/spell/${nameId}Q.png`,
      `https://ddragon.leagueoflegends.com/cdn/${version}/img/spell/${nameId}W.png`,
      `https://ddragon.leagueoflegends.com/cdn/${version}/img/spell/${nameId}E.png`,
      `https://ddragon.leagueoflegends.com/cdn/${version}/img/spell/${nameId}R.png`,
    ];
    img = `https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${nameId}.png`;
  }

  let progress = 50;
  let cooldownQWER = [
    Math.random() * 50 + 3,
    Math.random() * 50 + 2,
    Math.random() * 80 + 5,
    Math.random() * 200 + 100,
  ];
  let progressQWER = [0, 0, 0, 0];
  (() => {
    setInterval(() => {
      progressQWER.map((v, i) => {
        progressQWER[i] = Math.min(
          100,
          progressQWER[i] + 100 / cooldownQWER[i],
        );
        if (progressQWER[i] >= 100) {
          progressQWER[i] = 0;
        }
      });
    }, 100);
  })();
</script>

<div class="wrapper">
  <CircleFrame>
    <img src={img} alt="" width="100px"/>
  </CircleFrame>
  <div class="flex flex-column">
    {#each skillImages as src, i}
      <div class="flex">
        <CircleFrameThin>
          <img {src} alt="" width="18px" />
        </CircleFrameThin>
        <CooldownProgressBar progress={progressQWER[i]} />
      </div>
    {/each}
  </div>
</div>

<style>
  .wrapper {
    display: flex;
  }
  .flex {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .flex-column {
    flex-direction: column;
  }
</style>
