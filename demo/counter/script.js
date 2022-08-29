let num = document.getElementById('value');

let decrement = () => {
  let temp = Number(num.innerText);
  console.log(temp);
  if (temp != 0) {
    temp--;
  }
  num.innerText = temp;
};

let decBtn = document.getElementById('decrement');
decBtn.addEventListener('click', decrement);

// ----------------------------------

let reset = () => {
  num.innerText = 0;
};

let resetBtn = document.getElementById('reset');
resetBtn.addEventListener('click', reset);

// ----------------------------------

let increment = () => {
  let temp = Number(num.innerText);
  temp++;
  num.innerText = temp;
};

let incBtn = document.getElementById('increment');
incBtn.addEventListener('click', increment);
