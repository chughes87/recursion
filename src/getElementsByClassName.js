// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:

var hasClassName = function(element, className)
{
  if(!element.classList)
  {
    return;
  }
  for(var i = 0; i < element.classList.length; i++)
  {
    var name = element.classList[i];
    if(name === className)
    {
      return true;
    }
  }
  return false;
}

var getNodes = function(element, className)
{
  var results = [];
  if(hasClassName(element, className))
  {
    results.push(element);
  }
  for (var i = 0; i < element.childNodes.length; i++) 
  {
    var child = element.childNodes[i];
    var childNodes = getNodes(child,className);
    if(childNodes.length > 0)
    {
      results = results.concat(childNodes);
    }
  }
  return results;
}

var getElementsByClassName = function (className) {
  return getNodes(document.body, className);
};
