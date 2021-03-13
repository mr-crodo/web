let carSeller1 = {
  firstName: "Jack",
  lastName: "white",
  regYear: 2008,
  hasDiscount: true,
  discountCalculation: function(year) {
    var discount;
    var numberOfYears = 2019 - year;

    if(numberOfYears <= 2) {
      discount = 0;
    } else if ((numberOfYears > 2) &&
    (numberOfYears <= 5)) {
      discount = 20;
    } else if (numberOfYears > 5) {
      discount = 30;
    }

    return discount;
  }
}

console.log(carSeller1.discountCalculation(2020));