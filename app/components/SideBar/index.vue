<template>
  <el-aside
    :width="asideWidth"
    class="aside"
  >
    <i
      class="switch-btn"
      :class="switchBtnIcon"
      :style="switchBtnLeftDistance"
      @click="changeVisible"
    ></i>
    <h5
      v-if="title"
      class="aside-header"
    >
      {{ title }}
    </h5>
    <el-menu
      mode="vertical"
      :collapse-transition="false"
      :default-active="defaultActive"
      :default-openeds="defaultOpeneds"
      @select="handleSelectMenuItem"
    >
      <template v-for="(menu, index) in menus">
        <el-sub-menu
          v-if="menu.children && menu.children.length > 0"
          :key="index"
          :index="index + ''"
        >
          <template v-slot:title>
            <i :class="menu.icon" />
            <span>{{ menu.name }}</span>
          </template>
          <el-menu-item
            v-for="(subMenu, i) in menu.children"
            :key="index + '-' + i"
            :index="index + '-' + i"
          >
            {{ subMenu.name }}
          </el-menu-item>
        </el-sub-menu>
        <el-menu-item
          v-else
          :key="index"
          :index="index + ''"
        >
          <i :class="menu.icon"></i>
          <span>{{ menu.name }}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </el-aside>
</template>

<script>
import {
  ElMenu,
  ElMenuItem,
  ElSubMenu,
  ElAside
} from 'element-plus';
import { SideBarConfig } from './source';
/**
 * 侧边栏组件
 */
export default {
  name: 'SideBar',
  components: {
    ElMenu,
    ElMenuItem,
    ElSubMenu,
    ElAside
  },
  props: {
    /**
     * 侧边栏宽度
     */
    width: {
      type: Number,
      default: 160
    },
    /**
     * 侧边栏大标题
     */
    title: {
      type: String,
      default: ''
    },
    /**
     * /user接口的user对象,会根据user的权限过滤菜单
     */
    user: {
      type: Object,
      required: true
    },
    /**
     * 是否生产环境
     */
    isProduction: {
      type: Boolean,
      required: true
    },
    type: {
      type: String,
      default: ''
    },
    api: {
      type: String,
      default: ''
    },
    configs: {
      type: Array,
      validator (value) {
        return value?.every(item => item.name && (item.children?.length || item.href));
      },
      default () {
        return [];
      }
    }
  },
  data () {
    return {
      menus: [],
      visible: true
    };
  },
  computed: {
    defaultOpeneds () {
      const openedList = this.menus.reduce((pre, current, index) => {
        if (current.opened) {
          return pre.concat([`${index}`]);
        }
        return pre;
      }, []);
      return openedList;
    },
    defaultActive () {
      const activeIndex = this.menus.reduce((pre, current, index) => {
        if (pre) {
          return pre;
        }
        if (current.href === window.location.pathname) {
          return `${index}`;
        }
        const childIndex = (current.children || []).findIndex(menu => menu.href === window.location.pathname);
        if (childIndex !== -1) {
          return `${index}-${childIndex}`;
        }
        return pre;
      }, null);
      return activeIndex;
    },
    asideWidth () {
      const width = this.visible ? `${this.width}px` : '0px';
      return width;
    },
    switchBtnLeftDistance () {
      return {
        marginLeft: this.visible ? `${this.width - 16}px` : '0px'
      };
    },
    switchBtnIcon () {
      return this.visible ? 'el-icon-d-arrow-left' : 'el-icon-d-arrow-right';
    },
    menuConfig () {
      return new SideBarConfig(this.type, this.isProduction, this.api, this.configs);
    }
  },
  watch: {
    menuConfig () {
      this.getMenus();
    }
  },
  mounted () {
    this.getMenus();
  },
  methods: {
    handleSelectMenuItem (index) {
      const menuIndexPath = index.split('-').map(Number);
      const menuItem = menuIndexPath.reduce((pre, currentIndex) => {
        const currentMenu = pre.menus[currentIndex];
        const url = currentMenu?.href || '/';
        return {
          url,
          menus: currentMenu?.children || [],
          menu: currentMenu,
          indexPath: pre.indexPath.concat([url])
        };
      }, { menus: this.menus, url: '/', indexPath: [] });
      /**
       * 选择事件请取用{ url, menu, menuIndexPath },其他字段是兼容以前的版本
       * @event select-menu
       * @property {object}
       */
      this.$emit('select-menu', {
        index: menuItem.url,
        indexPath: menuItem.indexPath,
        menuIndexPath,
        url: menuItem.url,
        menu: menuItem.menu
      });
    },
    async getMenus () {
      const menus = await this.menuConfig.getMenus(this.user);
      this.menus = menus;
    },
    changeVisible () {
      this.visible = !this.visible;
    }
  }
};
</script>

<style lang="less" scoped>
.aside-header {
  font-weight: 700;
  font-size: 16px;
  border-bottom: 1px solid #f5f5f5;
  margin: 0 15px;
  padding: 35px 0 37px 0;
  text-align: center;
}
.switch-btn {
  position: absolute;
  /* right: 0; */
  padding: 15px 0;
  margin-top: 20px;
  background: #fff;
  border: 1px solid #e5e5e5;
}
.aside {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  h5 {
    line-height: 1.15;
  }
}
.red-point {
  position: absolute;
  top: 21px;
  height: 6px;
  width: 6px;
  background: red;
  border-radius: 100%;
}
</style>
