import { mount } from '@vue/test-utils'
import AtCheckbox from '../index'

const factory = (values = {}, slots = { default: [] }) => {
  return mount(AtCheckbox as any, {
    slots,
    props: { ...values },
  })
}

const checkboxOption = [
  {
    value: 'list1',
    label: 'iPhone X',
    desc:
      '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。',
  },
  { value: 'list2', label: 'HUAWEI P20' },
  {
    value: 'list3',
    label: 'OPPO Find X',
    desc:
      '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。',
    disabled: true,
  },
  {
    value: 'list4',
    label: 'vivo NEX',
    desc:
      '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。',
    disabled: true,
  },
]

describe('AtCheckbox', () => {
  it('should render default AtCheckbox', () => {
    const wrapper = factory()
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should render prop -- options', () => {
    const wrapper = factory({ options: checkboxOption })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should render prop -- selectedList', () => {
    const wrapper = factory({ options: checkboxOption, selectedList: ['list2'] })
    expect(wrapper.element).toMatchSnapshot()
  })
})

describe('AtCheckbox Behavior', () => {
  it('should trigger onChange', () => {
    const onClick = jest.fn()
    const wrapper = factory({
      options: checkboxOption,
      selectedList: ['list2'],
      onChange: onClick,
    })
    wrapper.find('.at-checkbox .at-checkbox__option').trigger('tap')
    expect(onClick).toBeCalled()
  })

  it('should not trigger onChange when disabled', () => {
    const onClick = jest.fn()
    const wrapper = factory({
      options: checkboxOption,
      selectedList: ['list2'],
      onChange: onClick,
    })
    wrapper.find('.at-checkbox .at-checkbox__option:nth-child(3)').trigger('tap')
    expect(onClick).not.toBeCalled()
  })
})
