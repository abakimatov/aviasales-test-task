export const formatPrice = (price: number): string => {
  const formated: string = price.toLocaleString('en-En', {})

  const result: string = formated.split(',').join(' ')

  return result
}
