// TODO: write your code here

export default function iconsString(char) {
  const iconsBase = {
    Swordsman: '\ud83d\ude21',
    Bowman: '\ud83d\ude20',
    Magician: '\ud83e\uddd0',
    Daemon: '\ud83d\udc7f',
    Undead: '\ud83d\udc80',
    Zombie: '\ud83e\udddf',
    Attack: '\u2694',
    Defence: '\ud83d\udee1',
    Health: '\u2764',
  };
  const shortPanel = (`${iconsBase[char.type]} `
  + `${char.name.slice(0, 1)}`
  + `(${char.level}) `
  + `${iconsBase.Attack}`
  + `${char.attack} `
  + `${iconsBase.Defence}`
  + `${char.defence} `
  + `${iconsBase.Health}`
  + `${char.health}`);
  return shortPanel;
}
