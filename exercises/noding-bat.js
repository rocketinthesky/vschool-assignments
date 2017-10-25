var everyNth=function(str, n){
	newStr = "";
	for (i = 0; i < str.length; i++)
      if (i % n === 0) {
      	newStr += str.charAt(i);
      }
  console.log(newStr);
}

everyNth('Chocolates', 4)
