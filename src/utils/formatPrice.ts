export const formatPrice = (price: number): string => {
  const formated: string = price.toLocaleString('en-En', {})

  const splited: string[] = formated.split(',')
  const lastElementIdx = splited.length - 1

  //hack for IE10
  if (splited[lastElementIdx].length < 3)
    return splited.slice(0, lastElementIdx).join(' ')

  return splited.join(' ')
}
