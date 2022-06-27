const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA(array) {
  return array.reduce((acc, curr) => {
    const sumAs = curr.split('').reduce((counter, letterA) => letterA === 'A' || letterA === 'a' ? counter += 1 : counter, 0)
    return acc += sumAs 
  }, 0)
}

console.log(containsA(names));