export const createNewTextFile = (content = '') => {
  return new Blob([content], {
    type: 'text/plain',
  })
}
