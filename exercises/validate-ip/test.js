var chai = require('chai');
var assert = chai.assert;
var checkIP = require(`./app.js`);

describe(`testing if an IP address is valid or not`, function(){
  it(`should return true if each of the numbers are between 0 & 255`, function(){
    assert.equal(checkIP(`172.16.254.1`), [ true, true, true, true ]);
  });
  it(`should return false if the IP address is invalid`, function(){
    assert.isFalse(checkIP('300.1.1.1'));
  })
});
