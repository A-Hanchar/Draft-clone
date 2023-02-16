export const createBlob = (content = ' ') => {
  return new Blob([content], {
    type: 'text/plain',
  })
}
