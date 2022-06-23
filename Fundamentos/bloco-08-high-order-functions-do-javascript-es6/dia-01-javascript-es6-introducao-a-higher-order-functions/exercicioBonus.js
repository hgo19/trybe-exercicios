// Parte I - Game Actions Simulator
// Nestes exercícios você irá implementar HOFs que simulam um turno de batalha em um jogo. Você irá criar funções que calculam dano, atualizam status, e ao final, retornam os resultados da rodada.
// Para os próximos exercícios copie o código abaixo.

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonAttack = (dragon) => Math.floor(Math.random() * (dragon.strength - 15)) + 15;

const warAttack = (warrior) => (Math.floor(Math.random() * (warrior.strength * warrior.weaponDmg - warrior.strength)) + warrior.strength);

const mageAttack = (mage) => {
  const mageTurn = {
    damage: (Math.floor(Math.random() * (mage.intelligence * 2 - mage.intelligence)) + mage.intelligence),
    manaSpent: 15,
  }
  if (mageTurn.mana < 15) {
    mageTurn.mana = 0;
    return 'Não possui mana suficiente';
  }
  return mageTurn;
}

const gameActions = {
  warriorTurn: (warAttack) => {
    warrior.damage = warAttack(warrior)
    dragon.healthPoints -= warrior.damage;
  },
  mageTurn: (mageAttack) => {
    mage.damage = mageAttack(mage).damage;
    mage.mana -= mageAttack(mage).manaSpent;
    dragon.healthPoints -= mage.damage;
  },
  dragonTurn: (dragonAttack) => {
    dragon.damage = dragonAttack(dragon);
    warrior.healthPoints -= dragon.damage;
    mage.healthPoints -= dragon.damage;
  },
  turnResults: () => battleMembers,
};

gameActions.warriorTurn(warAttack);
gameActions.mageTurn(mageAttack);
gameActions.dragonTurn(dragonAttack);
console.log(gameActions.turnResults());
