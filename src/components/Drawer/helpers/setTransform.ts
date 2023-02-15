export const setTransform = (progress: number, distance: number, element: HTMLDivElement, isDirection: boolean) => {
  const translate = isDirection ? progress * distance - distance - 50 : -progress * distance - 50
  element.style.transform = `translateX(${translate}px)`
}
