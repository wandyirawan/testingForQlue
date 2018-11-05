console.log("starting app")
const encodeJson = '[{"username":"ali","hair_color":"brown","height":1.2},{"username":"marc","hair_color":"blue","height":1.4},{"username": "joe","hair_color":"brown","height":1.7},{"username":"zehua","hair_color":"black","height":1.8}]'

const generalImprovedJson = (encodeJsonStr) => {
  const jsonObj = JSON.parse(encodeJsonStr)
  const result = jsonObj.reduce((obj,item) => {
    obj['h'] = Object.keys(item)
    obj['d'] = obj['d'] || []
    obj['d'].push(Object.values(item))
    return obj
  },{});
  return result;
}
var temp = generalImprovedJson(encodeJson)
console.log(temp);
