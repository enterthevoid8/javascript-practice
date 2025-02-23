function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

console.log(validateEmail("test@example.com")); // true
console.log(validateEmail("invalid-email"));   // false
console.log(validateEmail("user@domain.co.in")); // true
console.log(validateEmail("user@.com"));       // false
console.log(validateEmail("USER@EXAMPLE.COM")); // true
