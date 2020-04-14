import { ResizeSensor } from 'css-element-queries'
export default {
  data() {
    return {
      // default height
      tableHeight: '400px'
    }
  },
  mounted() {
    this.$nextTick(() => {
      if (this.$refs.formPage && this.$refs.formPage.$el) {
        new ResizeSensor(this.$refs.formPage.$el, () => {
          this.tableHeight = this.$refs.formPage.$refs.formContent.clientHeight + 'px'
        })
      }
    })
  },
  methods: {
  }
}
