// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
	var results = [];
	var innerFunction = function(elem) {
		var index = 0;
		for( index in elem.classList ){
			if(elem.classList[index] == className){
				results.push(elem);
			}
		}
		for( index in elem.childNodes ){
			innerFunction(elem.childNodes[index]);
		}
	}
	innerFunction(document.body);
	return results;
};
