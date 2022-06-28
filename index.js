function isObject(val) {
      if (val === null) { return false;}
      return ( (typeof val === 'function') || (typeof val === 'object') );
  }
  
function isDate(value) {
      switch (typeof value) {
          case 'number':
              return true;
          case 'string':
              return !isNaN(Date.parse(value));
          case 'object':
              if (value instanceof Date) {
                  return !isNaN(value.getTime());
              }
          default:
              return false;
      }
  }
  
function isEmptyOrOnlySpacesString(str) {
      return (!str || /^\s*$/.test(str));
  }
  
function getTimeZone() {
      return Intl.DateTimeFormat().resolvedOptions().timeZone;
  }
  
function doesObjectHasEmptyProperties(obj) {
    let emptyKeys = [];
          for(let key in obj) {
          if(obj[key] === "") {
             emptyKeys.push(key + " is empty.\n");
          }
            
      }
    return emptyKeys.join('') + ' others keys are filled';
  }

function isSorted (arr){
  return arr.every((a,b,c) => !b || c[b-1] <= a);
}

function shuffleArray (arr){
  let len = arr.length;
  while (len) {
    const i = Math.floor(Math.random() * len--);
    [arr[len], arr[i]] = [arr[i], arr[len]];
  }
  return arr;
}

  module.exports = {
    isObject,
    isDate,
    isEmptyOrOnlySpacesString,
    getTimeZone,
    doesObjectHasEmptyProperties,
    isSorted,
    shuffleArray,
  }