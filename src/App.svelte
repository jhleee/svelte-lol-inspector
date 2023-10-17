<script>
  let count = 0;
  function increase() {
    count++;
  }
</script>

<main>
  <h1>Counter</h1>
  <button on:click={increase}>{count}</button>
</main>