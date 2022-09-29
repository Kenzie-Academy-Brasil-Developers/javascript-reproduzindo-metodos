/*Adicione seu codigo abaixo */
// Método Map ----------------------------------------------------------------------------------

const arrayMap = [1, 2, 3, 4, 5]; //esse é o array que você terá que iterar

// função callback

function callbackMap(element) {
  return element * 2
}
// let map = arrayMap.map(callbackMap)
// console.log(map);
function map(array, callback) {
let map = [];

  for (let i = 0; i < array[i]; i++) {
    
      map.push(callback(array[i], i, array))
  }
  return map
} 

console.log(map(arrayMap, callbackMap));

// let map = arrayMap.map((element, index, array) => {
// return  `Número ${element} no index: ${index}, veio desse array: ${array}`;
// }) 
// console.log(map);


//Método Filter --------------------------------------------------------------------------------

const arrayFilter = [1, 2, 3, 4, 5];
// função callback
// Ela apenas imprime o elemento que for maior que 2
function callbackFilter(element, index, array) {
  if (element > 2 && index && array.length > 2) {
    return true;
  }
}

function filter(array, callback) {
  let filtro = []

  for(let i = 0; i < array.length; i++){
    if(callback(array[i], i, array)){
      filtro.push(array[i])
    }

  }
  return filtro
}

console.log(filter(arrayFilter, callbackFilter));



 //Método Find ------------------------------------------------------------------------------------------

const arrayFind = [1, 2, 3, 4, 5]; // array para iteração do método

//nossa primeira callback testa se o elemento é maior que 2 e menor que 12
function callbackFind(element) {
  if (element > 2 && element < 5) {
    return true;
  }
}

function find(array, callback) {  

  for (let i = 0; i < array.length; i++) {

    if (callback(array[i], i, array)) {
      return array[i]
    }

  }
 return undefined

}
console.log(find(arrayFind, callbackFind));

 //Método Reduce ------------------------------------------------------------------------------------------

const arrayReduce = [1, 2, 3, 4, 5]; //esse é o array que você terá que iterar

// função callback
// Ela apenas soma os valores, como um acumulador 
function callbackReduce(acumulator, valorAtual) {
  return acumulator + valorAtual;
}

function reduce(array, callback, initialValue = 0) {
let result =  initialValue 

  for(let i = 0; i < array.length; i ++){    
      result = callback(result, array[i] )       

  }
  return result
}

 console.log(reduce(arrayReduce, callbackReduce));
 console.log(reduce(arrayReduce, callbackReduce, 50));

 
//Método Includes ---------------------------------------------------------------------------

const arrayIncludes =  [1, 2, 3, 4, 5]; // array para iteração do método

function includes(array, searchElement, initial = 0) {

  for (let i = 0; i < array.length; i++) {
    if (searchElement == array[i]) {
      return true
    } 
  } 
      return false
    
}


console.log(includes(arrayIncludes, 5));
console.log(includes(arrayIncludes, 10));

//Método IndexOf ---------------------------------------------------------------------------

const arrayIndexOf = [1, 2, 3, 4, 5]; // array para iteração do método

//primeira callback que procura algum elemento que seja uma string
function callbackFindIndex(element) {
  return typeof element === "string" ? true : false;
}

//segunda callback que testa se existe algum elemento igual a 3 no array
function callbackFindIndexTwo(element) {
  return element == 3 ? true : false;
}

function FindIndex(array, callback) {


  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array))
      return i
  }
  return -1
}
console.log(FindIndex(arrayIndexOf, callbackFindIndex));
console.log(FindIndex(arrayIndexOf, callbackFindIndexTwo));


