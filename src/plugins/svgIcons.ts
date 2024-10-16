export default defineNuxtPlugin(() => {
  svgIcons.value = import.meta.glob('assets/svg/**/*.svg', {
    query: '?raw',
    import: 'default',
    eager: false,
  })
})
