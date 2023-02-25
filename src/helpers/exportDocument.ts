export const exportDocument = (file: Blob) => {
  const downloadUrl = URL.createObjectURL(file)
  const downloadLink = document.createElement('a')

  downloadLink.href = downloadUrl
  downloadLink.setAttribute('download', 'draft.txt')

  downloadLink.click()

  URL.revokeObjectURL(downloadUrl)
}
