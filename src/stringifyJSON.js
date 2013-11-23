// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
	var stringifyPrimitive = function(prim){
		var val;
		if(typeof(prim) == 'string'){
			val = '\"' + prim+ '\"';
		}else{
			val = prim.toString();
		}
		return val;
	};
	var stringifyArray = function(arr){
		var stringified = "[";
		for(var index in arr){
			stringified += stringifyUnknown(obj[index]);
			if(index < arr.length -1){
				stringified += ",";
			}
		}
		stringified += "]";
		return stringified;
	};
	var stringifyObject = function(obj){
		var stringified = "{";
		for(var key in obj){
			stringified += stringifyPrimitive(key) + ':' + stringifyUnknown(obj[key]);
		}
		stringified += "}";
		return stringified;
	};

	var stringifyUnknown = function(unknown){
		if(unknown == null){
			return 'null';
		}else if(typeof(unknown) === 'object'){
			if(unknown instanceof Array){
				return stringifyArray(unknown);
			}else{
				return stringifyObject(unknown);
			}
		}else{
			return stringifyPrimitive(unknown);
		}
	}

	var test = stringifyUnknown(obj);
	return test;//stringifyUnknown(obj);
};
