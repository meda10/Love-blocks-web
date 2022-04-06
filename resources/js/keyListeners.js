export default () => {
  const keyPressListener = (event) => {
    console.log(event)
    event.stopImmediatePropagation()
  }
  return {
    keyPressListener,
  }
}
