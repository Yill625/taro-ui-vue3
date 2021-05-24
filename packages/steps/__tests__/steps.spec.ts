import { mount } from '@vue/test-utils'
import AtSteps from '../index'

const factory = (values = {}, slots = { default: [''] }) => {
  return mount(AtSteps as any, {
    slots,
    props: { ...values },
  })
}

describe('AtSteps', () => {
  const items1 = [
    {
      title: '步骤一',
      desc: '这里是额外的信息，最多两行',
      icon: {
        value: 'sound',
        activeColor: '#fff',
        inactiveColor: '#78A4FA',
        size: '14',
      },
    },
    {
      title: '步骤二',
      desc: '这里是额外的信息，最多两行',
      icon: {
        value: 'shopping-cart',
        activeColor: '#fff',
        inactiveColor: '#78A4FA',
        size: '14',
      },
    },
    {
      title: '步骤三',
      desc: '这里是额外的信息，最多两行',
      icon: {
        value: 'camera',
        activeColor: '#fff',
        inactiveColor: '#78A4FA',
        size: '14',
      },
    },
  ]

  const items2 = [
    {
      title: '步骤一',
      desc: '这里是额外的信息，最多两行',
      success: true,
    },
    {
      title: '步骤二',
      desc: '这里是额外的信息，最多两行',
    },
    {
      title: '步骤三',
      desc: '这里是额外的信息，最多两行',
      error: true,
    },
  ]

  it('should render default AtSteps', () => {
    const wrapper = factory()
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should render prop -- style', () => {
    const wrapper = factory({ style: 'color:red;' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should render prop -- class', () => {
    const wrapper = factory({ class: 'test' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should render prop -- items', () => {
    const wrapper1 = factory({ items: items1 })
    expect(wrapper1.element).toMatchSnapshot()
    const wrapper2 = factory({ items: items2 })
    expect(wrapper2.element).toMatchSnapshot()
  })

  it('should render prop -- current', () => {
    const wrapper = factory({ items: items1, current: 1 })
    expect(wrapper.element).toMatchSnapshot()
  })
})
