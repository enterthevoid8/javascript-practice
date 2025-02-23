 //Example1:

   const person = {
     name: 'Sudheer Jonna',
     age: 35
   };

 const handler = {
   get(target, prop) {
     if (prop === 'name') {
       return 'Mr. ' + target[prop];
     }
     return target[prop];
   }
 };

 const proxy = new Proxy(person, handler);

 //Example2: 

 var handler1 = {
   get: function (obj, prop) {
     return prop in obj ? obj[prop] : 100;
   },
 };

 var p = new Proxy({}, handler1);
 p.a = 10;
 p.b = null;

 console.log(p.a, p.b); // 10, null
 console.log("c" in p, p.c); // false, 100