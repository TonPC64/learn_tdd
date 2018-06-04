class Checkout {
  constructor(rules) {
    this.rules = rules
    this.data = {}
  }
  scan(val) {
    if (typeof val === 'string' && val.length > 0) {
      val.split('').forEach(item => {
        const upperKey = item.toUpperCase()
        if (!this.data[upperKey]) {
          this.data[upperKey] = 1
        } else {
          this.data[upperKey]++
        }
      })
    }
  }
  calculateTotal() {
    this.total = 0
    const keys = !!this.data ? Object.keys(this.data) : []
    keys.forEach(key => {
      if (this.rules[key] && this.rules[key].promotion) {
        const pro = this.rules[key].promotion
        this.total += checkPromotion(this.rules[key].unit, pro, this.data[key])
      } else {
        this.total += this.rules[key].unit * this.data[key]
      }
    })
    return this.total
  }
}

function checkPromotion(unit, pro, amount) {
  let item = amount
  let total = 0
  for (; item - pro.buy >= 0; ) {
    item -= pro.buy
    total += pro.for
  }
  if (item != 0) {
    total += unit * item
  }
  return total
}

module.exports = Checkout
