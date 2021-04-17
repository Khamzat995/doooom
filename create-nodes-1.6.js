const divOne = document.createElement('div');
  divOne.className = 'div';
const ulOne = document.createElement('ul');
  ulOne.className = 'ul';
const liOne = document.createElement('li');
  liOne.className = 'liOne';
const liTwo = document.createElement('li');
  liTwo.className = 'liTwo';
const aOne = document.createElement('a');
  aOne.className = 'aOne';
  aOne.href = "https://instagram.com/intocode";
  aOne.textContent = 'наш инстаграм'
const aTwo = document.createElement('a');
  aTwo.className = 'aTwo';
  aTwo.href = "https://intocode.ru";
  aTwo.textContent = 'наш сайт';
    divOne.append(ulOne);
    ulOne.prepend(liOne);
    liOne.append(aOne);
    ulOne.append(liTwo);
    liTwo.append(aTwo);

    document.body.prepend(divOne);
