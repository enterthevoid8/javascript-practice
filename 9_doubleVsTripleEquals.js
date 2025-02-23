0 == false   // true
0 === false  // false
1 == "1"     // true
1 === "1"    // false
null == undefined // true
null === undefined // false
'0' == false // true
'0' === false // false
NaN == NaN || NaN === NaN // false
[]==[] || []===[] //false, refer different objects in memory
{}=={} || {}==={} //false, refer different objects in memory