import Character from '../Character';

test('new Character', () => {
  const newChar = new Character('hollow');
  expect(newChar).toEqual({
    name: 'hollow',
    level: 1,
    health: 100,
  });
});
