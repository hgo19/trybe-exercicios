// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Banana', 'Melancia', 'Maçã'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Açaí', 'Kaki', 'Mamão'];

const fruitSalad = (fruit, additional) => {
  const newList = [...fruit, ...additional];
  return newList;
};

console.log(fruitSalad(specialFruit, additionalItens));