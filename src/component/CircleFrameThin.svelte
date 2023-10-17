<script>
  export let size = 100;
</script>

<div class="wrapper">
  <div class="circle outer-line" style="--circle-size: {size}px">
        <div class="content">
          <slot></slot>
        </div>
  </div>
</div>

<style>
  .wrapper {
    padding: 1px;
    margin-right: 3px;
  }
  .circle {
    border-radius: 50%;
    background-color: #000;
    padding: 1px;
  }
  .outer-line {
    border: 2px solid #6d6561;
    box-shadow: inset 0px 0px 2px 0px #000;
    overflow: hidden;
  }
  .content {
    display: flex;
    width: 100%;
    height: 100%;
  }
</style>
