<script>
  export let size = 100;
</script>

<div class="wrapper">
  <div class="circle outer-line" style="--circle-size: {size}px">
    <div class="circle line-stroke">
      <div class="circle inner-line">
        <div class="content">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .wrapper {
    padding: 5px;
  }
  .circle {
    border-radius: 50%;
  }
  .outer-line {
    border: 2px solid #6d6561;
    box-shadow: inset 0px 0px 10px 0px #000;
  }
  .line-stroke {
    border: 3px solid #00000000;
    box-shadow: 0px 0px 5px 4px #000;
  }
  .inner-line {
    border: 2px solid #7b6f68;
    box-shadow: 0px 0px 28px 1px #3a3535;
    overflow: hidden;
  }
  .content {
    display: flex;
    width: 100%;
    height: 100%;
  }
</style>
