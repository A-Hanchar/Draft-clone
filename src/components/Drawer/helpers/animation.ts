import { Body } from 'components/Body'

export const startAnimationDrawer = (duration: number, element: HTMLDivElement, isDirection: boolean) => {
  const distance = element.clientWidth
  let startAnimation: number | null = null

  requestAnimationFrame(function measure(time) {
    if (!startAnimation) {
      startAnimation = time
    }

    const progress = (time - startAnimation) / duration
    const translate = isDirection ? progress * distance - distance - 50 : -progress * distance - 50
    element.style.transform = `translateX(${translate}px)`

    if (progress < 1) {
      requestAnimationFrame(measure)
    } else if (!isDirection) {
      Body.removeChild(element)
    }
  })
}
