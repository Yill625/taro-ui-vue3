import { mount } from '@vue/test-utils'
import AtTimeline from '../index'

const factory = (values = {}, slots = { default: [] }) => {
  return mount(AtTimeline as any, {
    slots,
    props: { ...values },
  })
}

describe('AtTimeline', () => {
  const list = [{ title: '刷牙洗脸' }, { title: '吃早餐' }, { title: '上班' }, { title: '睡觉' }]

  it('should render prop -- pending', () => {
    const wrapper = factory({ items: list, pending: true })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should render prop -- items', () => {
    const wrapper = factory({ items: list })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should render prop -- items.color', () => {
    const wrapper = factory({
      items: [
        { title: '刷牙洗脸' },
        { title: '吃早餐', color: 'green' },
        { title: '上班', color: 'red' },
        { title: '睡觉', color: 'yellow' },
      ],
    })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should render prop -- items.icon', () => {
    const wrapper = factory({
      items: [
        { title: '刷牙洗脸', icon: 'check-circle' },
        { title: '吃早餐', icon: 'clock' },
        { title: '上班', icon: 'clock' },
        { title: '睡觉', icon: 'clock' },
      ],
    })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should render prop -- items.content', () => {
    const wrapper = factory({
      items: [
        { title: '刷牙洗脸', content: ['大概8:00'], icon: 'check-circle' },
        {
          title: '吃早餐',
          content: ['牛奶+面包', '餐后记得吃药'],
          icon: 'clock',
        },
        {
          title: '上班',
          content: ['查看邮件', '写PPT', '发送PPT给领导'],
          icon: 'clock',
        },
        { title: '睡觉', content: ['不超过23:00'], icon: 'clock' },
      ],
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})
