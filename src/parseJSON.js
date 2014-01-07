// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function (json) {
  if(json === 'null')
  {
    return null;
  }
  if(json === "true")
  {
    return true;
  }
  if(json === "false")
  {
    return false;
  }
  if(json[0] === '"' && json[json.length-1] === '"')
  {
    return json.slice(1,json.length-1);
  }
  if(json[0] === '[' && json[json.length-1] === ']')
  {
    var arrElems = parseJSON(json.slice(1,json.length-1)).split(',');
    for (var i = 0; i < arrElems.length; i++) {
      arrElems[i]
    };
    return [];
  }
  return parseInt(json);
};
