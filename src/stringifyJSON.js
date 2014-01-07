// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
	if(obj === null)
	{
		return 'null';
	}
	if(typeof(obj) == "string")
	{
		return '"' + obj + '"';
	}
	if(Array.isArray(obj))
	{
		var arr = [];
		for (var i = 0; i < obj.length; i++) 
		{
			arr.push(stringifyJSON(obj[i]));
		}; 
		return '[' + arr.join(',') + ']';
	}
	if(typeof(obj) === 'object')
	{
		var arr = [];
		for (var prop in obj) 
		{
			if (obj[prop] !== undefined && typeof(obj[prop]) !== 'function') 
			{
				arr.push(stringifyJSON(prop) + ":" + stringifyJSON(obj[prop]));
			};
		}; 
		return '{' + arr.join(',') + '}';
	}
	return '' + obj;

};
