 //JavaScript Document

//access the JSON file using XHR object

let requestURL = 'https://jaypatel01122000.github.io/JSON-Georgian/pizza.json';

//Create new XHR object, XHR object allows us to fetch data without a page referesh

let request = new XMLHttpRequest();
//opening a new request
request.open('GET', requestURL);
//remove pizzaType
request.responseType = 'json';
//send the request using the send methos
request.send();

//wait for the request to be returned, store the response in a variable, invoke pizzaTypes function with pizzatype as argument
request.onload = function() {
let plentyPizza = request.response;
console.log(plentyPizza);
pizzaTypes(plentyPizza);

};

function pizzaTypes(jsonObj) {
  let pizzaTypes = jsonObj.pizzaTypes;
  let section = document.querySelector('section');
  for (let i = 0; i< pizzaTypes.length; i++){

      //build HTML elements
      let article = document.createElement('article');
      let h2 = document.createElement('h2')
      let img = document.createElement('img')
      let p1 = document.createElement('p')
      let p2 = document.createElement('p')
      let ul = document.createElement('ul')

    img.setAttribute('src', 'https://jaypatel01122000.github.io/JSON-Georgian/assets/' + pizzaTypes[i].image);
    img.setAttribute('alt', pizzaTypes[i].image);
    h2.textContent = pizzaTypes[i].name;
    p1.textContent = 'size' + pizzaTypes[i].size;
    p2.textContent = 'price' + pizzaTypes[i].price;
    let toppings = pizzaTypes[i].toppings;
    for(let j = 0; j<  toppings.length; j++) {

      let listItem = document.createElement('li');
      listItem.textContent = toppings[j];
      ul.appendChild(listItem);
    }
      article.appendChild(img);
      article.appendChild(h2);
      article.appendChild(p1);
      article.appendChild(p2);
      article.appendChild(ul);
      section .appendChild(article);
  }
}
