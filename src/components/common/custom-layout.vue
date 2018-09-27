<template>
  <Layout>
    <Header class="header">
      <Row>
        <i-col span="3" offset="1">
          <img src="../../assets/images/logo.png" alt="logo" class="logo">
        </i-col>
        <i-col span="1">
          <Icon :class="triggerClasses" @click.native="handleCollapsed" type="md-menu" :size="32"/>
        </i-col>
        <i-col span="15">
          <Menu mode="horizontal" :active-name="activeName">
            <menu-item name="/app" to="/app">
              应用分析
            </menu-item>
            <menu-item name="/push" to="/push">
              推送营销
            </menu-item>
            <menu-item name="/dev" to="/dev">
              开发助手
            </menu-item>
            <menu-item name="/manage" to="/manage">
              应用管理
            </menu-item>
            <menu-item name="/dashboard" to="/dashboard">
              仪表盘
            </menu-item>
          </Menu>
        </i-col>
        <i-col span="4">
          <Row>
            <i-col span="8">
              <Dropdown>
                <Avatar src="http://static.xkcoding.com/note/image/2018-09-19-avatar.jpg"></Avatar>
                <DropdownMenu slot="list">
                  <DropdownItem>我的主页</DropdownItem>
                  <DropdownItem>我的收藏</DropdownItem>
                  <DropdownItem>
                    设置
                    <Badge status="error"/>
                  </DropdownItem>
                  <DropdownItem divided>退出</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </i-col>
            <i-col span="8">
              <Dropdown>
                <Badge :count="count" :offset="[20,4]">
                  <Icon type="md-notifications-outline" size="24"/>
                </Badge>
                <DropdownMenu slot="list">
                  <Tabs value="notification">
                    <TabPane label="通知" name="notification">
                      <div class="notification">通知内容</div>
                    </TabPane>
                    <TabPane label="关注" name="follow">
                      <div class="notification">关注内容</div>
                    </TabPane>
                    <TabPane label="系统" name="system">
                      <div class="notification">系统内容</div>
                    </TabPane>
                  </Tabs>
                </DropdownMenu>
              </Dropdown>
            </i-col>
            <i-col span="8">
              <Icon type="md-color-palette" size="24" @click="openTheme = true"/>
            </i-col>
          </Row>
        </i-col>
      </Row>
    </Header>
    <Layout>
      <Sider width="240" hide-trigger collapsible v-model="isCollapsed" class="sider"
             :class="{ 'sider-hider':isCollapsed }">
        <Menu theme="dark" :open-names="[this.$route.path.indexOf('table') !== -1 ? 'table' : '']"
              :active-name="activeName">
          <menu-item name="option1">
            <Icon type="ios-search"></Icon>
            <span>Option 1</span>
          </menu-item>
          <menu-item name="option2">
            <Icon type="ios-apps"></Icon>
            <span>Option 2</span>
          </menu-item>
          <menu-item name="option3">
            <Icon type="ios-bookmark"></Icon>
            <span>Option 3</span>
          </menu-item>
          <Submenu name="table">
            <template slot="title">
              <Icon type="md-grid"/>
              <span>Table系列</span>
            </template>
            <menu-item name="/table1" to="/table1">
              <Icon type="md-grid"/>
              <span>Table1</span>
            </menu-item>
          </Submenu>
        </Menu>
      </Sider>
      <Content class="content" :class="{'content-expand':isCollapsed}">
        <slot name="breadcrumb"></slot>
        <slot name="content"></slot>
      </Content>
    </Layout>
    <Drawer title="选择配色" v-model="openTheme" :closable="false">

    </Drawer>
  </Layout>
</template>

<script>
  export default {
    props: {},
    data() {
      return {
        activeName: this.$route.path,
        count: 2,
        openTheme: false,
        isCollapsed: false
      };
    },
    computed: {
      triggerClasses() {
        return [
          'trigger-icon',
          this.isCollapsed ? 'rotate' : ''
        ]
      }
    },
    methods: {
      handleCollapsed() {
        this.isCollapsed = !this.isCollapsed;
      }
    },
    created() {
      this.activeName = this.$route.path;
    }
  };
</script>

<style scoped lang="less">
  .header {
    position: fixed;
    width: 100%;
    height: 60px;
    background: #fff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
    top: 0;
    left: 0;
    z-index: 2;
    .logo {
      height: 50px;
      margin-top: 5px
    }
    .trigger-icon {
      cursor: pointer;
      transition: transform .3s ease;
      &.rotate {
        transform: rotateZ(90deg);
        transition: transform .3s ease;
      }
    }
  }

  .notification {
    text-align: center;
    height: 200px;
  }

  .ivu-menu-horizontal.ivu-menu-light:after {
    display: none;
  }

  .sider {
    position: fixed;
    margin-top: 60px;
    height: 100%;
    left: 0;
    overflow: auto;
    z-index: 1;
  }

  .sider-hider {
    .ivu-menu-item {
      span {
        display: none;
      }
    }
  }

  .content {
    margin-left: 240px;
    margin-top: 60px;
    padding: 16px;
    transition: all .2s ease-in-out;
  }

  .content-expand {
    margin-left: 65px;
  }

</style>
