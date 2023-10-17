<script>
  export let progress = 50;
  let progressText = 0;
  $: progressText = Math.round(progress);
</script>

<div class="bar" style="--progress:{progress}%">
  <div class="text">{progressText}%</div>
  <div class="progress" class:no-anim={progress === 0} ></div>
</div>

<style>
  .bar {
    min-width: 200px;
    display: block;
    border-radius: 10px;
    width: 100%;
    height: 15px;
    border: 2px solid #ddd;
    overflow: hidden;
    margin: 5px 1px;
  }
  .progress {
    margin: 2px;
    border-radius: 10px;
    border: none;
    height: calc(100% - 4px);
    width: var(--progress);
    background-color: #c8b459;
    transition: ease 0.1s;
    text-align: center;
  }
  .no-anim {
    transition: 0s;
  }
  .text {
    position: absolute;
    margin-left: 8px;
    font-size: 11px;
    mix-blend-mode: difference;
    color: #fff;
  }
</style>
