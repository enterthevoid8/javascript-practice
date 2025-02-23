var mainString = "hello",
  subString = "hell";
mainString.includes(subString);

var mainString = "hello",
  subString = "hell";
mainString.indexOf(subString) !== -1;

var mainString = "hello",
  regex = /hell/;
regex.test(mainString);