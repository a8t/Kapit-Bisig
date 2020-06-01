export default function(array, separator) {
  return array.flatMap((el, index) =>
    index === array.length - 1 ? el : [el, separator]
  )
}
