import Character from '../Character';
import Team from '../Team';

test('new Team', () => {
  const team = new Team('hollow');
  expect(team).toEqual({ name: 'hollow', members: new Set() });
});

test('Team add', () => {
  const char = new Character('Hollow');
  const team = new Team('hollow');
  team.add(char);
  expect(team).toEqual({
    name: 'hollow',
    members: new Set([{
      name: 'Hollow',
      level: 1,
      health: 100,
    }]),
  });
});

test('Team addAll', () => {
  const bow = new Character('Bow');
  const sword = new Character('Sword');
  const mage = new Character('Mage');
  const team = new Team('Hollow');
  team.addAll(bow, sword, mage);
  expect(team).toEqual({
    name: 'Hollow',
    members: new Set([{
      name: 'Bow',
      level: 1,
      health: 100,
    },
    {
      name: 'Sword',
      level: 1,
      health: 100,
    },
    {
      name: 'Mage',
      level: 1,
      health: 100,
    }]),
  });
});

test('Team toArray', () => {
  const bow = new Character('Bow');
  const sword = new Character('Sword');
  const mage = new Character('Mage');
  const team = new Team('Hollow');
  team.addAll(bow, sword, mage);
  expect(team.toArray()).toEqual([{
    name: 'Bow',
    level: 1,
    health: 100,
  },
  {
    name: 'Sword',
    level: 1,
    health: 100,
  },
  {
    name: 'Mage',
    level: 1,
    health: 100,
  }]);
});
