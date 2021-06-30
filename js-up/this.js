function getStart() {
  console.log(this);
}

getStart();

const prod = {
  name: 'Intel',
  price: 100,
  getPrice: function() {
    console.log(this.price);
  },
  info: {
    information: ['2.3ghz'],
    getInfo: function() {
      console.log(this);
      
    }
  }
}

prod.getPrice();
prod.info.getInfo();