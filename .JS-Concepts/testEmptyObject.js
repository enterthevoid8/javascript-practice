// Using Object entries(ECMA 7+): You can use object entries length along with constructor type.
Object.entries(obj).length === 0 && obj.constructor === Object;
// Since date object length is 0, you need to check constructor check as well

// Using Object keys(ECMA 5+): You can use object keys length along with constructor type.
Object.keys(obj).length === 0 && obj.constructor === Object;
// Since date object length is 0, you need to check constructor check as well

//Using for-in with hasOwnProperty(Pre-ECMA 5): You can use a for-in loop along with hasOwnProperty.
function isEmpty(obj) {
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      return false;
    }
  }

  return JSON.stringify(obj) === JSON.stringify({});
}