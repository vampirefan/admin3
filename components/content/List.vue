<script lang="ts">
const iconTypeMap: any = {
  todo: 'i-carbon-checkbox',
  done: 'i-carbon-checkbox-checked',
  info: 'i-carbon-information',
  success: 'i-carbon-checkmark-outline',
  warning: 'i-carbon-warning',
  danger: 'i-carbon-warning-alt',
}

export default defineComponent({
  props: {
    /**
     * Used to override the default icon, use unocss-iconify
     */
    icon: {
      type: String,
      default: null,
    },
    /**
     * Type of list
     */
    type: {
      type: String,
      default: 'done',
      validator: (value: string) => ['todo', 'done', 'info', 'success', 'warning', 'danger'].includes(value),
    },
  },
  setup(props) {
    const slots = useSlots()

    const { flatUnwrap, unwrap } = useUnwrap()

    const iconName = computed(() => props.icon || iconTypeMap[props.type])

    // Usage of render function is mandatory to access default slot
    // Otherwise Vue warns that slot "default" was invoked outside of the render function
    return () => {
      const items = flatUnwrap((slots.default && slots.default()) ?? [], ['ul']).map(li => unwrap(li, ['li']))

      return h(
        'ul',
        items.map(item =>
          h('li', { class: 'mb-3 flex items-center' }, [
            h('i', { class: `list-${props.type} ${iconName.value} w-5 mr-2 flex-shrink-0` }),
            h('span', h(resolveComponent('ContentSlot'), { use: () => item })),
          ]),
        ),
      )
    }
  },
})
</script>

<style scoped>
/* done */
.list-done {
  color: rgba(34, 197, 94, 1);
}

/* Info */
.list-info {
  color: rgba(59, 130, 246, 1);
}

/* Success */
.list-success {
  color: rgba(34, 197, 94, 1);
}

/* Warning */
.list-warning {
  color: rgba(234, 179, 8, 1);
}

/* Danger */
.list-danger {
  color: rgba(239, 68, 68, 1);
}
</style>
