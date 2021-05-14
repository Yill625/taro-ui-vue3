# Picker 选择器

---

从底部弹起的滚动选择器，这里用的是微信小程序自带的 `Picker` 原生组件，`taro-ui-vue3` 引用的是 `taro` 封装的基础组件。
现支持四种选择器，通过 `mode` 来区分（默认是普通选择器），分别是：
- 普通选择器
- 多列选择器
- 时间选择器
- 日期选择器

## 使用指南


## 示例


```html
<template>
  <view>
    <view class='example-item'>
      <picker
        mode='selector'
        :range="selector"
        :value="selectorValue"
        @change="handleChange"
        @cancel="handleCancel"
      >
        <view class='demo-list-item'>
          <view class='demo-list-item__label'>国家地区</view>
          <view class='demo-list-item__value'>
            {{ selector[selectorValue] }}
          </view>
        </view>
      </picker>
    </view>
    <view class='example-item'>
      <picker
        mode='time'
        :value="timeSel"
        @change="handleTimeChange"
      >
        <view class='demo-list-item'>
          <view class='demo-list-item__label'>请选择时间</view>
          <view class='demo-list-item__value'>{{ timeSel }}</view>
        </view>
      </picker>
    </view>
    <view class='example-item'>
      <picker
        mode='date'
        :value="dateSel"
        @change="handleDateChange"
      >
        <view class='demo-list-item'>
          <view class='demo-list-item__label'>请选择日期</view>
          <view class='demo-list-item__value'>{{ dateSel }}</view>
        </view>
      </picker>
    </view>
    <view class='panel'>
        <view class='panel__title'>多列选择器</view>
        <view class='panel__content'>
          <view class='example-item'>
            <picker
              mode='multiSelector'
              :range="multiSelector"
              :value="mulitSelectorValues"
              @change="handleMulitChange"
              @columnchange="handleColumnChange"
            >
              <view class='demo-list-item'>
                <view class='demo-list-item__label'>请选择早餐</view>
                <view class='demo-list-item__value'>{{
                  `${
                  multiSelector[0][mulitSelectorValues[0]]
                } & ${multiSelector[1][mulitSelectorValues[1]]}`
                  }}</view>
              </view>
            </picker>
          </view>
        </view>
      </view>
  </view>
</template>
<script>
export default {
  name: 'PickerDemo',
  data() {
    return {
      timeSel: '06:18',
      selector: ['中国', '美国', '巴西', '日本'],
      selectorValue: 0,
      dateSel: '2018-06-18',
      multiSelector: [
        ['饭', '粥', '粉'],
        ['猪肉', '牛肉']
      ],
      mulitSelectorValues: [0, 1],
    }
  },
  methods: {
    handleTimeChange (e) {
      this.timeSel = e.detail.value
    },
    handleChange (e) {
      this.selectorValue = e.detail.value
    },
    handleDateChange (e) {
      this.dateSel = e.detail.value
    },
    handleCancel(e) {
      console.log('handleCancel', e)
    },

    handleColumnChange(e) {
      console.log('handleColumnChange', e)
    }
  },
}
</script>
```


## 普通选择器

普通选择器：`mode = selector`

| 微信 | H5 | 参数     | 说明                         | 类型    | 可选值                 | 默认值   |
|:-----|:---|:---------|:-----------------------------|:--------|:-----------------------|:---------|
| √    | √  | range     | mode 为 selector 或 multiSelector 时，range 有效  | Array / Object Array  | - | []    |
| √    | √  | rangeKey     | 当 range 是一个 Object Array 时，通过 rangeKey 来指定 Object 中 key 的值作为选择器显示内容    | String  | -  | - |
| √    | √  | value   | value 的值表示选择了 range 中的第几个（下标从 0 开始） | Number  | -  | 0 |
| √    | √  | change | value 改变时触发 change 事件，event.detail = value: value | EventHandle | -  | - |
| √    | √  | cancel | 取消选择或点遮罩层收起 picker 时触发 | EventHandle | -  | - |
| √    | √  | disabled | 是否禁用 | Boolean | -  | false |


## 多列选择器

多列选择器：`mode = multiSelector`

| 微信 | H5 | 参数     | 说明                         | 类型    | 可选值                 | 默认值   |
|:-----|:---|:---------|:-----------------------------|:--------|:-----------------------|:---------|
| √    | √  | range     | mode 为 selector 或 multiSelector 时，range 有效。二维数组，长度表示多少列，数组的每项表示每列的数据，如[['a','b'], ['c','d']]  | 二维 Array / 二维 Object Array  | - | []  |
| √    | √  | rangeKey     | 当 range 是一个 二维 Object Array 时，通过 rangeKey 来指定 Object 中 key 的值作为选择器显示内容  | String  | -  | - |
| √    | √  | value   | value 的值表示选择了 range 中的第几个（下标从 0 开始） | Array  | -  | [] |
| √    | √  | change | value 改变时触发 change 事件，event.detail = value: value | EventHandle | -  | - |
| √    | √  | columnchange | 某一列的值改变时触发 columnchange 事件，event.detail = column: column, value: value，column 的值表示改变了第几列（下标从 0 开始），value 的值表示变更值的下标 | EventHandle | -  | - |
| √    | √  | cancel | 取消选择时触发 | EventHandle | -  | - |
| √    | √  | disabled | 是否禁用 | Boolean | -  | false |


## 时间选择器

时间选择器：`mode = time`

| 微信 | H5 | 参数     | 说明                         | 类型    | 可选值                 | 默认值   |
|:-----|:---|:---------|:-----------------------------|:--------|:-----------------------|:---------|
| √    | √  | value     | 表示选中的时间，格式为'hh:mm' | String | - | -  |
| √    | √  | start     | 表示有效时间范围的开始，字符串格式为'hh:mm'  | String  | -  | - |
| √    | √  | end     | 表示有效时间范围的结束，字符串格式为'hh:mm'  | String  | -  | - |
| √    | √  | change | value 改变时触发 change 事件，event.detail = value: value | EventHandle | -  | - |
| √    | √  | cancel | 取消选择或点遮罩层收起 picker 时触发 | EventHandle | -  | - |
| √    | √  | disabled | 是否禁用 | Boolean | -  | false |


## 日期选择器

日期选择器：`mode = date`

| 微信 | H5 | 参数     | 说明                         | 类型    | 可选值                 | 默认值   |
|:-----|:---|:---------|:-----------------------------|:--------|:-----------------------|:---------|
| √    | √  | value     | 表示选中的日期，格式为'YYYY-MM-DD' | String | - | new Date()  |
| √    | √  | start     | 表示有效日期范围的开始，字符串格式为'YYYY-MM-DD'  | String  | -  | 1970-01-01 |
| √    | √  | end     | 表示有效日期范围的结束，字符串格式为'YYYY-MM-DD'  | String  | -  | 2999-01-01 |
| √    | √  | fields     | 表示选择器的粒度  | String  | `year`、`month`、`day`  | day |
| √    | √  | change | value 改变时触发 change 事件，event.detail = value: value | EventHandle | -  | - |
| √    | √  | cancel | 取消选择或点遮罩层收起 picker 时触发 | EventHandle | -  | - |
| √    | √  | disabled | 是否禁用 | Boolean | -  | false |
