for ( i =1; i <= 30; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

for(i = 1; i <=30; i++) {
  if (i % 7 == 0) {
    console.log(i);
  }
}


for(i = 30; i <=30 && i >=1 ; i--) {
  if (i % 2) {
    console.log(i);
  }
}


var manLive = function manLive(male, maleName){
  switch(male) {
    case "Kavkazian":
      return maleName + " army.";
    case "France":
      return maleName + " eat lyagushko";
    case "Turkey":
      return maleName + " upravlaet Bezpilotnik Bayragdar";
    case "Azerbayjani":
      return maleName + " drive Armenian soldiers from the field like dogs.";
  }
   
};

console.log(manLive('Azerbayjani' , 'Nasib'));


var React = require("react");

var Factorial = React.createClass({
    render: function(){
        var result = this.props.result || 1,
            n = this.props.n;
        if(!n){
	    return <span>{result}</span>
	}else{
	    return <Factorial n={n - 1} result={result*n}/>
	}
    }
});
module.exports = Factorial;