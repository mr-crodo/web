let carSeller1 = {
  firstName: "Jack",
  lastName: "white",
  regYear: 2030,
  hasDiscount: true,
  discount: 0,
  discountCalculation: function() {
    var discount;
    var numberOfYears = 2019 - this.regYear;

    if(numberOfYears <= 2) {
      discount = 0;
    } else if ((numberOfYears > 2) &&
    (numberOfYears <= 5)) {
      discount = 20;
    } else if (numberOfYears > 5) {
      discount = 30;
    }

    this.discount = discount;
  }
};

carSeller1.discountCalculation();

console.log(carSeller1);