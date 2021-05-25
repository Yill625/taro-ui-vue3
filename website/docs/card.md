# Card 卡片

---

提供常见的卡片样式。

## 使用指南

在 Taro 文件中引入组件


```typescript
import { AtCard } from 'taro-ui-vue3'
```


**组件依赖的样式文件（仅按需引用时需要）**


```scss
@import "taro-ui-vue3/dist/style/components/card.scss";
```


## 一般用法


```html
<AtCard
  note='小Tips'
  extra='额外信息'
  title='这是个标题'
  thumb='http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG'
>
  这也是内容区 可以随意定义功能
</AtCard>
```


## AtCard 参数

| 参数   | 说明           | 类型    | 可选值 | 默认值 |
| ------ | -------------- | ------- | ------ | ------ |
| title  | 元素的标题     | `String`  | -      | -      |
| note   | 元素的辅助信息 | `String`  | -      | -      |
| thumb  | 元素的缩略图   | `String`  | -      | -      |
| icon  | 元素的图标，仅支持 AtIcon 支持的类型: `AtIconBaseProps`, 详细定义如下  | `AtIconBaseProps`  | -      | -      |
| renderIcon | 元素自定义图标 | `JSX.Element | VNode` | - | - |  
| extra  | 元素的额外信息 | `String`  | -      | -      |
| extraStyle | 元素的额外信息自定义样式 | `Object` | - | - |
| isFull | 是否通栏       | `Boolean` | -      | -      |

<br>

#### `AtIconBaseProps` 字段定义

```ts
interface AtIconBaseProps {
  value: string
  color?: string
  prefixClass?: string
  size?: number | string
}
```


## AtCard 事件

| 事件名称 | 说明                 | 返回参数 |
| -------- | -------------------- | -------- |
| onClick  | 元素被点击触发的事件 | -        |
