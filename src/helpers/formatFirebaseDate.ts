export const formatFirebaseDate = (date: string) => {
  date = date.slice(0, 10).trim().replaceAll(':', '/')
  const dateMonth = date.slice(3, 5)
  const dateDay = date.slice(0, 2)
  const dateYear = date.slice(6, 11)
  const formattedDate = `${dateMonth}/${dateDay}/${dateYear}`

  return new Date(formattedDate)
}
