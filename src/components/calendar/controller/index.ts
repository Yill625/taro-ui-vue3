import { h, defineComponent, computed, PropType } from "vue"
import { Picker, Text, View } from '@tarojs/components'
import { AtCalendarControllerProps } from 'types/calendar'
import dayjs from 'dayjs/esm/index'

const AtCalendarController = defineComponent({
  name: "AtCalendarController",

  data: () => ({ addGlobalClass: true }),

  props: {
    generateDate: {
      type: [String, Number] as PropType<AtCalendarControllerProps["generateDate"]>,
      default: Date.now()
    },
    minDate: [String, Number, Date] as PropType<AtCalendarControllerProps["minDate"]>,
    maxDate: [String, Number, Date] as PropType<AtCalendarControllerProps["maxDate"]>,
    hideArrow: Boolean,
    monthFormat: {
      type: String as PropType<AtCalendarControllerProps["monthFormat"]>,
      default: 'YYYY年MM月'
    },
    onPreMonth: Function as unknown as PropType<AtCalendarControllerProps["onPreMonth"]>,
    onNextMonth: Function as unknown as PropType<AtCalendarControllerProps["onNextMonth"]>,
    onSelectDate: Function as unknown as PropType<AtCalendarControllerProps["onSelectDate"]>
  },

  setup(props: AtCalendarControllerProps) {
    const dayjsDate = computed(() => dayjs(props.generateDate))
    const dayjsMinDate = computed(() => !!props.minDate && dayjs(props.minDate))
    const dayjsMaxDate = computed(() => !!props.maxDate && dayjs(props.maxDate))

    const isMinMonth = computed(() => {
      return dayjsMinDate.value &&
        dayjsMinDate.value
          .startOf('month')
          .isSame(dayjsDate.value)
    })

    const isMaxMonth = computed(() => {
      return dayjsMaxDate.value &&
        dayjsMaxDate.value
          .startOf('month')
          .isSame(dayjsDate.value)
    })

    const minDateValue = computed(() => dayjsMinDate.value
      ? dayjsMinDate.value.format('YYYY-MM')
      : ''
    )

    const maxDateValue = computed(() => dayjsMaxDate.value
      ? dayjsMaxDate.value.format('YYYY-MM')
      : ''
    )

    const genArrowClass = (
      direction: string,
      disabled: boolean
    ) => ({
      'controller__arrow': true,
      [`controller__arrow--${direction}`]: true,
      'controller__arrow--disabled': disabled,
    })

    return () => (
      h(View, {
        class: 'at-calendar__controller controller'
      }, {
        default: () => [
          !props.hideArrow && h(View, {
            class: genArrowClass('left', isMinMonth.value),
            onTap: props.onPreMonth.bind(this, isMinMonth.value)
          }),

          h(Picker, {
            mode: 'date',
            fields: 'month',
            end: maxDateValue.value,
            start: minDateValue.value,
            value: dayjsDate.value.format('YYYY-MM'),
            onChange: props.onSelectDate
          }, {
            default: () => [
              h(Text, {
                class: 'controller__info'
              }, { default: () => dayjsDate.value.format(props.monthFormat) })
            ]
          }),

          !props.hideArrow && h(View, {
            class: genArrowClass('right', isMaxMonth.value),
            onTap: props.onNextMonth.bind(this, isMaxMonth.value)
          })
        ]
      })
    )
  }
})

export default AtCalendarController