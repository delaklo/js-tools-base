function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}
  
function isEmptyOrOnlySpacesString(str) {
      return (!str || /^\s*$/.test(str));
  }
  
function getTimeZone() {
      return Intl.DateTimeFormat().resolvedOptions().timeZone;
  }
  
function doesObjectHaveEmptyProps(obj) {
    const emptyKeys = [];
          for(let key in obj) {
          if(obj[key] === "") {
             emptyKeys.push(key + " is empty.\n");
          }    
      }
    return emptyKeys.join('') + ' other keys are filled';
  }

function isSorted (list){
  return list.every((v,i,l) => !i || l[i-1] <= v);
}

function shuffleArray (list){
  let res = Array.from(list);
  let len = list.length;
  while (len) {
    const i = Math.floor(Math.random() * len--);
    [res[len],res[i]] = [res[i], res[len]];
  }
  return res;
}

function generateRandomIntList(len, max){
  return Array.from({ length: len }, () => Math.floor(Math.random() * max));
}

function randomInt(min, max){
  return Math.floor(Math.random() * (Math.ceil(max) - Math.floor(min))) + min;
}

  module.exports = {
    isObject,
    isEmptyOrOnlySpacesString,
    getTimeZone,
    doesObjectHaveEmptyProps,
    isSorted,
    shuffleArray,
    generateRandomIntList,
    randomInt,
  }