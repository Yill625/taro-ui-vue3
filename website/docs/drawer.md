# Drawer 抽屉

---

抽屉菜单

## 使用指南

在 Taro 文件中引入组件

```typescript
import { AtDrawer } from 'taro-ui-vue3'
```

**组件依赖的样式文件（仅按需引用时需要）**

```scss
@import "taro-ui-vue3/dist/style/components/drawer.scss";
```

## 用法

```html
<AtDrawer 
  :show="show" 
  mask 
  @close="onClose" 
  :items="['菜单1', '菜单2']"
></AtDrawer>
```

## 右边弹出

```html
<AtDrawer 
  :show="show" 
  right 
  mask 
  @close="onClose"
  :items="['菜单1', '菜单2']"
></AtDrawer>
```

## 自定义内容

```html
<AtDrawer
  :show="show"
  mask
>
  <view class='drawer-item'>优先展示items里的数据</view>
  <view class='drawer-item'>如果items没有数据就会展示children</view>
  <view class='drawer-item'>这是自定义内容 <AtIcon value='home' size='20' /></view>
  <view class='drawer-item'>这是自定义内容</view>
</AtDrawer>
```

## Drawer 参数

| 参数  | 说明           | 类型    | 可选值            | 默认值 |
|:------|:---------------|:--------|:------------------|:-------|
| show  | 展示或隐藏     | Boolean | -                 | false  |
| mask  | 是否需要遮罩   | Boolean | -                 | true   |
| width | 抽屉宽度       | String  | 合法的 CSS 宽度单位 | 230px  |
| right | 是否从右侧滑出 | Boolean | -                 | false  |
| items | 菜单列表       | Array   | -                 | -      |

## Drawer 事件

| 事件名称    | 说明                       | 返回参数          |
|:------------|:---------------------------|:------------------|
| onItemClick | 点击菜单时触发             | index（菜单序号） |
| onClose     | 动画结束组件关闭的时候触发 | -                 |
