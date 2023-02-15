import { Body } from 'components/Body'

export const startAnimationDrawer = (duration: number, element: HTMLDivElement, direction: 'left' | 'right') => {
  let startAnimation: number | null = null

  requestAnimationFrame(function measure(time) {
    if (!startAnimation) {
      startAnimation = time
    }

    const progress = ((time - startAnimation) / duration) * 100
    const left = direction === 'right' ? 100 - progress : progress
    element.style.left = `-${left}%`

    if (progress < 100) {
      requestAnimationFrame(measure)
    } else {
      element.style.left = `0%`
      if (direction === 'left') {
        Body.removeChild(element)
      }
    }
  })
}
