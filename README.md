### March平台前端

## 项目说明  

- 使用 vue3 + typescript进行构建
- 结构如下
```bash
.
├── app
│   ├── components        (一些页面布局公共基础组件)
│   │   └── ...   
│   ├── app.vue           (前端布局入口文件)
│   │   └── ...
.
├── src
│   ├── _type            (ts类型定义管理)
│   │   └── ...
│   ├── api              (网络层API)
│   │   └── ...
│   ├── configs           (配置文件管理)
│   │   └── ...   
│   ├── constants        (存放一些常量及枚举文件)
│   │   └── ...
│   ├── interfaces       (存放ts接口)
│   │   └── ...
│   ├── pages            (平台页面管理)
│   │   └── ...
│   ├── store            (vuex 储存用户信息)        
│   │   └── ...
│   ├── style            (平台页面存放)        
│   │   └── ...
│   ├── utils            (存放工具类)        
│   │   └── ...
├── .prettierrc.js        (前端代码规范)
├── .eslintrc.js          (前端代码规范)
├── package.json          (application’s package manifest.)
├── README.md
├── tsconfig.json         (The TypeScript project configuration.)
|—— vite.config.ts        ( vite 自定义配置文件)

```


### 访问地址

1. XXXXXX

### 页面对应代码地址说明
Dodo

### 开发人员

- Davidson
- Enid
- 

### 分工说明

1. 紧急(<1day)需求，抽离代码至公共代码库、流程重新设计等需求由 Davidson 直接负责
2. xxx

### 环境说明

- march 平台环境切换通过 url 前缀进行切换
- 测试账号，请联系 Leon 或 张金祥
- 部分页面打开必须要携带路径参数

|    环境  | git 分支 |     内网地址             |      外网地址          | 
| -------- | -------- |---------------------| ----------------------------- | 
| 开发环境 | develop   | xxxx.xxx   | xxx.xxx   |
| 生产环境 | release   | xxxx.xxx  | xxx.xxx   |

## 如何使用

[开始构建](https://git.code.oa.com/andon-fe/feflow-devkit-andon-page)

## 开发准备

#### [学习资料](http://tapd.oa.com/service_product_center/markdown_wikis/view#1010156421008656143)

> 必读 vue3.x 官方文档、ES6 语法

已接入 eslint 和 prettier，编译和 commit 自动检查规范，按照提示修改即可

#### [Vue 开发必备知识](https://cn.vuejs.org/guide/introduction.html)

## 建议

1. 本项目为多页面实现、vuex（不推荐） 仅用于存储用户信息和签名
2. 不是通用组件不建议使用$attrs,$listeners，不推荐使用 inject,provide
3. 枚举后期添加常量访问功能，建议遇到魔术量改为枚举定义的常量
