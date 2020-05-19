import Character from './Character';

export default class Team {
  constructor(name) {
    this.name = name;
    this.members = new Set();
  }

  add(char) {
    if (this.members.has(char)) {
      throw new Error('Такой персонаж уже в команде');
    }
    this.members.add(char);
  }

  addAll(...rest) {
    rest.forEach((item) => this.members.add(item));
  }

  toArray() {
    return Array.from(this.members);
  }
}

const team = new Team('Hollow');
const bow = new Character('bow');
const sword = new Character('sword');
const mage = new Character('mage');

// team.add(bow);
// team.add(sword);
// team.add(mage);
// console.log(team);

// team.add(mage);
// console.log(team);


team.addAll(bow, sword, mage, bow, sword, mage);

// eslint-disable-next-line
console.log(team.toArray());
// eslint-disable-next-line
console.log(team);
