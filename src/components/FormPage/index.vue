<template>
  <div ref="formPage" class="form-page">
    <div ref="formTop" class="form-top">
      <slot name="top" />
    </div>
    <div ref="formContent" class="form-content">
      <slot name="content" />
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .form-page{
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow: hidden;
    height: 100%;
    .form-content{
      flex-grow: 1;
      overflow: hidden;
      flex-shrink: 1;
    }
  }
</style>
