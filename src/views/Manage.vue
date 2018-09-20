<template>
  <custom-layout>
    <div slot="content">
      <Card shadow :padding="0">
        <Row>
          <i-col :xs="24" :sm="24" :md="0" :lg="0">
            <Tabs value="option1">
              <TabPane label="设置一" name="option1"></TabPane>
              <TabPane label="设置二" name="option2"></TabPane>
              <TabPane label="设置三" name="option3"></TabPane>
            </Tabs>
          </i-col>
        </Row>
        <Row>
          <i-col :xs="0" :sm="0" :md="4" :lg="4">
            <CellGroup>
              <Cell title="设置一" to="/push" selected></Cell>
              <Cell title="设置二" to="/push"></Cell>
              <Cell title="设置三" to="/push"></Cell>
            </CellGroup>
          </i-col>
          <i-col :xs="24" :sm="24" :md="20" :lg="20">
            <Row :gutter="64" style="padding: 16px;">
              <i-col span="12">
                <Form label-position="top">
                  <FormItem label="邮箱">
                    <Input v-model="form.mail"/>
                  </FormItem>
                  <FormItem label="昵称">
                    <Input v-model="form.name"/>
                  </FormItem>
                  <FormItem label="个人介绍">
                    <Input v-model="form.desc" type="textarea" :rows="4"/>
                  </FormItem>
                  <FormItem label="国家">
                    <Select v-model="form.country" transfer>
                      <Option value="中国">中国</Option>
                      <Option value="美国">美国</Option>
                    </Select>
                  </FormItem>
                  <FormItem label="电话号码">
                    <Row :gutter="16">
                      <i-col span="6"><Input v-model="form.zone"/></i-col>
                      <i-col span="18"><Input v-model="form.phone"/></i-col>
                    </Row>
                  </FormItem>
                </Form>
                <Button type="primary" size="large">更新信息</Button>
              </i-col>
              <i-col span="12">
                <Avatar icon="ios-person" size="large"></Avatar>
                <Divider></Divider>
                <Upload action="//jsonplaceholder.typicode.com/posts/">
                  <Button icon="ios-cloud-upload-outline">上传头像</Button>
                </Upload>
              </i-col>
            </Row>
          </i-col>
        </Row>
      </Card>
    </div>
  </custom-layout>
</template>

<script>
  export default {
    name: "Manage",
    props: {},
    data() {
      return {
        form: {
          mail: "",
          name: "",
          desc: "",
          country: "",
          zone: "010",
          phone: "10000000"
        }
      };
    },
    computed: {},
    methods: {}
  };
</script>

<style scoped lang="less">
</style>
