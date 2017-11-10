const ask = require("readline-sync");
const charStats = {};
const inventory = [];
let hasCharacter = false;
let potions = 3;
let monster = {};
let distanceToFinalBoss = 5000;
let damage = 0;
const classChoices = ['Fighter', 'Mage', 'Archer'];
const adventureChoices = ['walk', 'check inventory', 'drink potion', 'check character stats'];
const fightChoices = ['fight', 'run', 'drink potion', 'check character stats'];
const currentPosition =()=> {
  if (distanceToFinalBoss === 5000) {
    console.log(`You stand on the outskirts of town, standing in a field that lies before a forest...`);
  } else if (distanceToFinalBoss < 5000 && distanceToFinalBoss >=4000) {
      console.log(`You are in a forest, the trees sway gently in the breeze. Other than that the forest is quiet, too quiet...`);
  } else if (distanceToFinalBoss < 4000 && distanceToFinalBoss >=3000) {
      console.log(`You are in a canyon, various rock formations are scattered throughout. Who knows what dangers they hold...`);
  } else if (distanceToFinalBoss < 3000 && distanceToFinalBoss >=2000) {
      console.log(`You are in a murky swamp. Mosquitos buzz about you as you hear frogs croak and watch something move through the water...`);
  } else if (distanceToFinalBoss < 2000 && distanceToFinalBoss >=1000) {
      console.log(`You are in the ruins of an ancient castle. Carrion birds circle above you...`);
  } else if (distanceToFinalBoss < 1000 && distanceToFinalBoss >=100) {
      console.log(`You are in the crypts of the castle ruins. You see a sarchophagus...`);
  } else if (distanceToFinalBoss < 100 && distanceToFinalBoss >=0) {
      console.log(`You stand before a sarchophagus. You hear faint whispering...`);
  } else if (distanceToFinalBoss < 0) {
      console.log(`Behold the Lich King!`);
      monster = monsters[5];
  }
}

const monsters = [
  {
    name: 'Goblin',
    weapon: 'spear',
    damage: 4,
    health: 10,
    currentHealth: 10,
    movement: 4,
    defense: 2,
    accuracy: 3,
    potions: 1,
    loot: ['twig', 'used tissue', 'gold ring']
  },
  {
    name: 'Orc',
    weapon: 'sword',
    damage: 6,
    health: 15,
    currentHealth: 15,
    movement: 5,
    defense: 3,
    accuracy: 3,
    potions: 3,
    loot: ['gold ring', 'bottle of mead']
  },
  {
    name: 'Banshee',
    weapon: 'claws',
    damage: 8,
    health: 20,
    currentHealth: 20,
    movement: 3,
    defense: 4,
    accuracy: 5,
    potions: 4,
    loot: ['gold tooth', 'pearl necklace', 'seaweed']
  },
  {
    name: 'Skeleton',
    weapon: 'club',
    damage: 6,
    health: 15,
    currentHealth: 15,
    movement: 3,
    defense: 4,
    accuracy: 3,
    potions: 6,
    loot: ['gold tooth', 'bone meal']
  },
  {
    name: 'Ghoul',
    weapon: 'bite',
    damage: 12,
    health: 25,
    currentHealth: 25,
    movement: 3,
    defense: 5,
    accuracy: 6,
    potions: 10,
    loot: ['gold ring', 'gold tooth', 'diamond']
  },
  {
    name: 'Lich King',
    weapon: 'cone of cold',
    damage: 24,
    health: 120,
    currentHealth: 60,
    movement: 8000,
    defense: 70,
    accuracy: 60,
    potions: 0,
    loot: ['Crown of the Lich King']
  }

];

const monsterGen =()=> {
  if (monster === monsters[5]) {
    hasEscaped = false;
    console.log(`The ${monster.name} appears!`);
    fight();
  } else {
  let monsterNum = Math.floor(Math.random() * 3);
  if (monsterNum === 0) {
    monster = monsters[Math.floor(Math.random() * 5)];
    monster.currentHealth = monster.health;
    hasEscaped = false;
    console.log(`A wild ${monster.name} appears!`);
    fight();
  } else {
    console.log(`But you are safe, for now...`);
  }
 }
}

const attackMonster =()=> {
  let heroAttack = (Math.floor(Math.random() * 10) + 1 + charStats.accuracy);
    if (heroAttack >= monster.defense) {
      damage = charStats.damage + Math.floor(Math.random() * 4)
      monster.currentHealth = monster.currentHealth -= damage;
      console.log(`You hit the ${monster.name} for ${damage} points of damage!`);
      if (monster.currentHealth > 0) {
        let monsterAttack = (Math.floor(Math.random() * 10) + 1 + monster.accuracy);
          if (monsterAttack >= charStats.defense) {
            damage = monster.damage + Math.floor(Math.random() * 4)
            charStats.currentHealth = charStats.currentHealth -= damage;
            console.log(`You have been hit by the ${monster.name} for ${damage} points of damage!`);
              if (charStats.currentHealth <= 0) {
                console.log(`You have been slain by the ${monster.name}! RIP ${charStats.name}`);
                charStats.health = -1;
              }
          } else {
            console.log(`The ${monster.name} misses!`);
          }
      } else {
        console.log(`You have slain the ${monster.name}!`);
        potions = potions += monster.potions;
        let randomLoot = monster.loot[Math.floor(Math.random() * monster.loot.length)];
        inventory.push(randomLoot);
        charStats.health = charStats.health += 2;
        charStats.currentHealth = charStats.health;
        console.log(`You loot ${monster.potions} potion(s) and a ${randomLoot}! You gain +2 to your max health and your health is restored!`);
      }
    } else {
      console.log(`You missed!`);
      let monsterAttack = (Math.floor(Math.random() * 10) + 1 + monster.accuracy);
        if (monsterAttack >= charStats.defense) {
          damage = monster.damage + Math.floor(Math.random() * 4)
          charStats.currentHealth = charStats.currentHealth -= damage;
          console.log(`You have been hit by the ${monster.name} for ${damage} points of damage!`);
            if (charStats.currentHealth <= 0) {
              console.log(`You have been slain by the ${monster.name}!`);
              charStats.health = -1;
              return;
            }
        } else {
          console.log(`The ${monster.name} misses!`);
        }
    }
}

const flee =()=> {
  let escapeAttempt = (Math.floor(Math.random() * 4) + 3 + charStats.movement);
  let cutOffAttempt = (Math.floor(Math.random() * 4) + 1 + monster.movement);
  if (escapeAttempt > cutOffAttempt) {
    console.log(`You have escaped!`);
    hasEscaped = true;
  } else {
    console.log(`The ${monster.name} has cutoff your escape!`);
    let monsterAttack = (Math.floor(Math.random() * 10) + 1 + monster.accuracy);
      if (monsterAttack >= charStats.defense) {
        charStats.currentHealth = charStats.currentHealth -= monster.damage;
        console.log(`You have been hit by the ${monster.name} for ${monster.damage} points of damage!`);
          if (charStats.currentHealth <= 0) {
            console.log(`You have been slain by the ${monster.name}!`);
            charStats.health = -1;
          }
      } else {
        console.log(`The ${monster.name} misses!`);
      }
  }
}

const combatPotion =()=> {
  if (potions < 1) {
    console.log(`You have no potions`);
  } else {
    charStats.currentHealth = charStats.health;
    potions--;
    console.log(`All of your health has been restored!`);
}
}

const fight =()=> {
  while (monster.currentHealth > 0 && charStats.currentHealth > 0 && hasEscaped === false) {
    let fightChoice = ask.keyInSelect(fightChoices, `What're you going to do?`);
    switch (fightChoice) {
      case 0:
        attackMonster();
        break;
      case 1:
        flee();
        break;
      case 2:
        combatPotion();
        break;
      case 3:
        console.log(charStats);
        break;
      default:
        break;
    }
  }
}

const walk =()=> {
  console.log(`You walk ahead ${charStats.movement}`);
  distanceToFinalBoss = distanceToFinalBoss -= charStats.movement;
  currentPosition();
  monsterGen();
}

const checkInventory =()=> {
  if (inventory.length === 0 && potions === 0) {
    console.log(`\n\tYou have nothing in your inventory`);
  } else {
    console.log(`\n\t potions: ${potions}\n\t`, inventory.toString());
  }
}

const drinkPotion =()=> {
  if (potions < 1) {
    console.log(`You have no potions`);
  } else {
    statUpgrade();
    potions--;
 }
}

const statUpgrade =()=> {
  let stat = Math.floor(Math.random() * 4)
  if (stat === 0) {
     charStats.damage = charStats.damage += 1;
     console.log(`Your damage increases by 1, your damage is now ${charStats.damage}`);
  } else if (stat === 1) {
     charStats.movement = charStats.movement += 1;
     console.log(`Your movement increases by 1, your movement is now ${charStats.movement}`);
  } else if (stat === 2) {
     charStats.defense = charStats.defense += 1;
     console.log(`Your defense increases by 1, your defense is now ${charStats.defense}`);
  } else if (stat === 3) {
     charStats.accuracy = charStats.accuracy += 1;
     console.log(`Your accuracy increases by 1, your accuracy is now ${charStats.accuracy}`);
 }
}

const charCreation =()=> {
  console.log(`Welcome hero. Choose a name for your character`);
  charStats.name = ask.question(`\nEnter name: `);
  hasCharacter = true;
  charStats.class = ask.keyInSelect(classChoices, `\nChoose a class: `);
  if (charStats.class === 0) {
    charStats.class = 'Fighter';
    charStats.weapon = 'sword';
    charStats.damage = 5;
    charStats.health = 25;
    charStats.currentHealth = 5;
    charStats.movement = 4;
    charStats.defense = 5;
    charStats.accuracy = 5
  } else if (charStats.class === 1) {
    charStats.class = 'Mage';
    charStats.weapon = 'Fireball';
    charStats.damage = 7;
    charStats.health = 15;
    charStats.currentHealth = 15;
    charStats.movement = 5;
    charStats.defense = 3;
    charStats.accuracy = 5
  } else if (charStats.class === 2) {
    charStats.class = 'Archer';
    charStats.weapon = 'bow & arrows';
    charStats.damage = 5;
    charStats.health = 20;
    charStats.currentHealth = 20;
    charStats.movement = 6;
    charStats.defense = 4;
    charStats.accuracy = 7
  };

  console.log(`You have the following stats: \n`, charStats);
  if (ask.keyInYN(`Is this correct?`)) {
    console.log(`Your journey begins!\nYou are on the outskirts of a small village, standing in a field that lies before a mysterious forest...`);
    adventure();
  } else {
    charCreation();
  }
}

const adventure =()=> {
  while (charStats.health > 0 && monsters[5].currentHealth > 0) {
    let choice = ask.keyInSelect(adventureChoices, `What would you like to do?`);
    switch (choice) {
      case (0):
       walk();
       break;
      case 1:
       checkInventory();
       break;
      case 2:
       drinkPotion();
       break;
      case 3:
       console.log(charStats);
       break;
      default:
       charStats.health = 0;
       break;
    }
  }
}

let begin =()=> {
  while (hasCharacter === false) {
    charCreation();
  }
}

begin();
adventure();
