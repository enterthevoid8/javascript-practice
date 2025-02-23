//	Collator: These are the objects that enable language-sensitive string comparison.
//	DateTimeFormat: These are the objects that enable language-sensitive date and time formatting.
//	ListFormat: These are the objects that enable language-sensitive list formatting.
//	NumberFormat: Objects that enable language-sensitive number formatting.
//	PluralRules: Objects that enable plural-sensitive formatting and language-specific rules for plurals.
//	RelativeTimeFormat: Objects that enable language-sensitive relative time formatting.

var date = new Date(Date.UTC(2019, 07, 07, 3, 0, 0));
console.log(new Intl.DateTimeFormat("en-GB").format(date)); // 07/08/2019
console.log(new Intl.DateTimeFormat("en-AU").format(date)); // 07/08/2019
console.log(new Intl.DateTimeFormat("en-US").format(date)); // 8/7/2019