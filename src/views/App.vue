<template>
  <custom-layout>
    <div slot="breadcrumb" style="margin-bottom: 16px">
      <Breadcrumb>
        <BreadcrumbItem to="/">Home</BreadcrumbItem>
        <BreadcrumbItem to="/app">Apps</BreadcrumbItem>
        <BreadcrumbItem>Shiny</BreadcrumbItem>
      </Breadcrumb>
    </div>
    这是应用管理页面
  </custom-layout>
</template>

<script>
  export default {
    name: "App",
    props: {},
    data() {
      return {};
    },
    computed: {},
    methods: {}
  };
</script>

<style scoped lang="less">
</style>
