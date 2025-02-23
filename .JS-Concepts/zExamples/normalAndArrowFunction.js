var obj = {
    name: "Lalit",
    regular: function() {
        console.log(this.name); // "Lalit" (dynamic `this`)
    },
    arrow: () => {
        console.log(this.name); // `undefined` or global `this` (lexical `this`)
    }
};

obj.regular(); // "Lalit"
obj.arrow();   // `undefined` (or the global `this` value)
