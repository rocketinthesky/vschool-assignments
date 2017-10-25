// Write a function that generates a completely random password including uppercase, lowercase, numeric, and symbol characters. The function should accept one argument, an integer defining how long the password should be.

function passGen(num) {
  var password = "";
  var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()";

  for (i = 0; i < num; i++) {
    password += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  console.log(password);
}

passGen(1024);
