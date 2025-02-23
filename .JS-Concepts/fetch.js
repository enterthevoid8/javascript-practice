fetch('https://jsonplaceholder.typicode.com/postses').then(function (response) {
	// The API call was successful!
	return response.json();
}).then(function (data) {
	// This is the JSON from our response
	console.log(data);
}).catch(function (err) {
	// There was an error
	console.warn('Something went wrong.', err);
});

fetch(url).then(function(response){
return response.json();
}).then(function(data){
console.log(data.posts)
}).catch(function(error){
console.log("some error occured",error)
});