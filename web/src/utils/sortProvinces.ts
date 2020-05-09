const provinceOrder = [
  "British Colombia",
  "Alberta",
  "Saskatchewan",
  "Manitoba",
  "Ontario",
  "Quebec",
]

export const sortProvinces = arr =>
  arr.slice().sort(function(a, b) {
    return (
      provinceOrder.indexOf(a.provinceName) -
      provinceOrder.indexOf(b.provinceName)
    )
  })
