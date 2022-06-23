// let elementoQueEstou = document.getElementById('elementoOndeVoceEsta');
// let elementoPai = elementoQueEstou.parentElement;
// elementoPai.style.color = 'red';
// let meuFilho = elementoQueEstou.firstElementChild;
// meuFilho.innerText = 'Esse é meu filho';
// let primeiroFilho = elementoPai.firstElementChild;
// let meuIrmao = elementoQueEstou.previousElementSibling;
// let falaDoPai = elementoQueEstou.nextSibling; 
// let meuProximoIrmao = elementoQueEstou.nextElementSibling;
// let terceiroFilho = elementoPai.lastElementChild.previousElementSibling;

// let meuNovoIrmao = document.createElement('section');
// meuNovoIrmao.id = 'meuNovoIrmao';
// elementoPai.appendChild(meuNovoIrmao);

// let meuNovoFilho = document.createElement('section');
// meuNovoFilho.id = 'meuNovoFilho';
// elementoQueEstou.appendChild(meuNovoFilho);

// let meuNeto = document.createElement('section');
// meuNeto.id = 'meuNeto';
// elementoQueEstou.firstElementChild.appendChild(meuNeto);

// let meuTioAvo = meuNeto.parentElement.parentElement.parentElement.lastElementChild.previousElementSibling.previousElementSibling;

// let pai = document.getElementById('pai');

const pai = document.getElementById('pai');

for (let index = pai.childNodes.length - 1; index >= 0; index -= 1) {
  const currentChildren = pai.childNodes[index];
  if (currentChildren.id !== 'elementoOndeVoceEsta') {
    currentChildren.remove();
  }
}


const segundoEUltimoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho');
segundoEUltimoFilhoDoFilho.remove();