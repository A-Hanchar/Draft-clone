export const createNewTextFile = (content = '') =>
  new Blob([content], {
    type: 'text/plain',
  })
