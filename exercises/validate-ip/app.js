var ipAddress = `172.16.254.1`;
var ipArray = [];
var legitIP = [];

var checkIP = function(ipString){
  ipArray = ipString.split('.').map(Number);
  ipArray.map(function(num){
    legitIP.push(num >= 0 && num <= 255);
  });
    console.log(legitIP);
  }

  module.exports = {
    checkIP
  }

checkIP(ipAddress);
