<template>
  <custom-layout>
    <div slot="content">
      <Card shadow>
        <div style="padding: 32px 64px;">
          <h1>服务端分页及自定义序号</h1>
          <Table :columns="columns" :data="data" :loading="loading" border size="small"></Table>

          <div style="text-align: center;margin: 16px 0;">
            <Page :total="total" :current.sync="current" show-sizer @on-change="getData"
                  @on-page-size-change="handleChangePageSize" transfer></Page>
          </div>
        </div>
      </Card>
    </div>
  </custom-layout>
</template>

<script>
  import $ from "libs/utils"

  export default {
    name: "Table1",
    props: {},
    data() {
      return {
        columns: [
          {
            title: "序号",
            type: "index",
            width: 60,
            align: "center",
            indexMethod: (row) => {
              return row._index + 1 + (this.current - 1) * this.size
            }
          }, {
            title: "姓名",
            key: "name"
          }
        ],
        data: [],
        loading: false,
        total: 0,
        current: 1,
        size: 10
      };
    },
    computed: {},
    methods: {
      getData() {
        if (this.loading) {
          return;
        }
        this.loading = true

        $.ajax({
          methods: "get",
          url: `/data/list/${this.current}/${this.size}`
        }).then(res => {
          setTimeout(() => {
            this.data = res.data.data.list
            this.total = res.data.data.total
            this.loading = false
          }, 1000)
        })
      },
      handleChangePageSize(val) {
        this.size = val

        this.$nextTick(() => {
          this.getData()
        })
      }
    },
    created() {
      this.getData()
    }
  };
</script>

<style scoped>
</style>
