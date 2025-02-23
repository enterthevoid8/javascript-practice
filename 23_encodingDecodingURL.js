/**
 * Encoding and Decoding URLs in JavaScript
 * 
 * Definition & Explanation:
 * In JavaScript, URL encoding and decoding ensure that special characters in URLs are correctly formatted for transmission.
 * 
 * Encoding converts special characters into a URL-safe format using percent-encoding (%xx).
 * Decoding converts encoded components back to their original format.
 * JavaScript provides encodeURI() / decodeURI() and encodeURIComponent() / decodeURIComponent() for handling URL encoding.
 * 
 * Method	                    Purpose
 * encodeURI(str)	            Encodes a full URL but keeps reserved characters (?, &, =).
 * decodeURI(str)	            Decodes a URL encoded using encodeURI().
 * encodeURIComponent(str)	    Encodes individual components of a URL (e.g., query params, path segments) including reserved characters.
 * decodeURIComponent(str)	    Decodes a string encoded using encodeURIComponent().
 * 
 */

// JavaScript URL Encoding & Decoding Examples

// 1. Encoding a Full URL using encodeURI (Does NOT encode reserved characters)
const url = "https://example.com/search?query=hello world&category=books";
const encodedURL = encodeURI(url);
console.log("Encoded URL:", encodedURL); 
// Output: https://example.com/search?query=hello%20world&category=books

// 2. Decoding a URL using decodeURI
const decodedURL = decodeURI(encodedURL);
console.log("Decoded URL:", decodedURL); 
// Output: https://example.com/search?query=hello world&category=books

// 3. Encoding a URL Component (Query Parameter) using encodeURIComponent
const queryParam = "hello world@#&=";
const encodedParam = encodeURIComponent(queryParam);
console.log("Encoded Query Parameter:", encodedParam); 
// Output: hello%20world%40%23%26%3D

// 4. Decoding a URL Component using decodeURIComponent
const decodedParam = decodeURIComponent(encodedParam);
console.log("Decoded Query Parameter:", decodedParam); 
// Output: hello world@#&=

// 5. Using encodeURIComponent to Safely Append Query Parameters
const baseURL = "https://example.com/search";
const searchQuery = "hello world@books";
const safeURL = `${baseURL}?query=${encodeURIComponent(searchQuery)}`;
console.log("Safe URL with Encoded Query:", safeURL); 
// Output: https://example.com/search?query=hello%20world%40books

// 6. Handling Special Characters in URL Encoding
const specialChars = "Hello! How are you? #JavaScript&SEO";
const encodedSpecialChars = encodeURIComponent(specialChars);
console.log("Encoded Special Characters:", encodedSpecialChars);
// Output: Hello%21%20How%20are%20you%3F%20%23JavaScript%26SEO

// 7. Decoding Special Characters
const decodedSpecialChars = decodeURIComponent(encodedSpecialChars);
console.log("Decoded Special Characters:", decodedSpecialChars);
// Output: Hello! How are you? #JavaScript&SEO

// 8. Incorrect Use: encodeURI for Query Parameters (Wrong Method)
const incorrectEncoding = encodeURI(queryParam);
console.log("Incorrect Encoding (Using encodeURI on a Query Parameter):", incorrectEncoding); 
// Output: hello world@#&= (Does not encode special characters correctly)

// 9. Correct Use: encodeURIComponent for Query Parameters
console.log("Correct Encoding (Using encodeURIComponent):", encodedParam);
// Output: hello%20world%40%23%26%3D

// 10. Decoding a Full URL with Multiple Encoded Parameters
const complexEncodedURL = "https://example.com/search?query=JavaScript%20Functions%20%26%20Methods";
const decodedComplexURL = decodeURI(complexEncodedURL);
console.log("Decoded Complex URL:", decodedComplexURL);
// Output: https://example.com/search?query=JavaScript Functions & Methods
