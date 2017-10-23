// var stringE = function(str) {
//   console.log(str.match(/e/gi).length);
// }
//
// stringE('Heelele');


var stringE=function(str){
	if (str.match(/e/gi).length >= 1 && str.match(/e/gi).length <= 3) {
    	console.log(true);
    } else if (str.match(/e/gi).length < 1 || str.match(/e/gi).length > 3){
    	console.log(false);
    }
}

stringE('ll')
