import iconsString from '../app';

test('zombie', () => {
  const man = {
    name: 'Зомби',
    type: 'Zombie',
    health: 500,
    level: 14,
    attack: 80,
    defence: 3,
  };
  const result = iconsString(man);
  expect(result).toEqual('🧟 З(14) ⚔80 🛡3 ❤500');
});
test('bowman', () => {
  const char = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10,
  };
  const result = iconsString(char);
  expect(result).toEqual('😠 Л(1) ⚔40 🛡10 ❤50');
});
