(function() {

  window.perkTrees = [
    {
      name: 'Alchemy',
      cname: 'alchemy',
      perks: [
        {
          name: 'Alchemist',
          levels: 5,
          desc: ['Potions and poisons you make are 20% stronger.', 'Potions and poisons you make are 40% stronger.', 'Potions and poisons you make are 60% stronger.', 'Potions and poisons you make are 80% stronger.', 'Potions and poisons you make are 100% stronger.'],
          req: [0, 20, 40, 60, 80],
          pos: [0, 0],
          id: ['000BE127', '000C07CA', '000C07CB', '000C07CC', '000C07CD']
        }, {
          name: 'Physician',
          desc: ['Potions you mix that restore Health, Magicka or Stamina are 25% more powerful.'],
          req: [20],
          pos: [110, -21],
          deps: [0],
          id: ['00058215']
        }, {
          name: 'Poisoner',
          desc: ['Poisons you mix are 25% more effective.'],
          req: [30],
          pos: [20, -70],
          deps: [1],
          id: ['00058217']
        }, {
          name: 'Benefactor',
          desc: ['Potions you mix with beneficial effects have an additional 25% greater magnitude.'],
          req: [30],
          pos: [87, -71],
          deps: [1],
          id: ['00058216']
        }, {
          name: 'Concentrated Poison',
          desc: ['Poisins applied to weapons last for twice as many hits.'],
          req: [60],
          pos: [24, -110],
          deps: [2],
          id: ['00105F2F']
        }, {
          name: 'Experimenter',
          levels: 3,
          desc: ['Eating an ingredient reveals first two effects.', 'Eating an ingredient reveals first three effects.', 'Eating an ingredient reveals first four effects.'],
          req: [50, 70, 90],
          pos: [77, -111],
          deps: [3],
          id: ['00058218', '00105F2A', '00105F2B']
        }, {
          name: 'Green Thumb',
          desc: ['Two ingredients are gathered from plants.'],
          req: [70],
          pos: [31, -163],
          deps: [4],
          id: ['00105F2E']
        }, {
          name: 'Snakeblood',
          desc: ['50% resistance to all poisons.'],
          req: [80],
          pos: [70, -178],
          deps: [4, 5],
          id: ['00105F2C']
        }, {
          name: 'Purity',
          desc: ['All negative effects are removed from created potions, and all positive effects are removed from created poisons.'],
          req: [100],
          pos: [58, -216],
          deps: [7],
          id: ['0005821D']
        }
      ]
    }, {
      name: 'Illusion',
      cname: 'illusion',
      perks: [
        {
          name: 'Root',
          levels: 1,
          desc: ['This perk tree can be found on the appropriate page'],
          req: [0],
          pos: [0, 0],
          id: ['00000000']
        }
      ]
    }, {
      name: 'Conjuration',
      cname: 'conjuration',
      perks: [
        {
          name: 'Root',
          levels: 1,
          desc: ['This perk tree can be found on the appropriate page'],
          req: [0],
          pos: [0, 0],
          id: ['00000000']
        }
      ]
    }, {
      name: 'Destruction',
      cname: 'destruction',
      perks: [
        {
          name: 'Root',
          levels: 1,
          desc: ['This perk tree can be found on the appropriate page'],
          req: [0],
          pos: [0, 0],
          id: ['00000000']
        }
      ]
    }, {
      name: 'Restoration',
      cname: 'restoration',
      perks: [
        {
          name: 'Root',
          levels: 1,
          desc: ['This perk tree can be found on the appropriate page'],
          req: [0],
          pos: [0, 0],
          id: ['00000000']
        }
      ]
    }, {
      name: 'Alteration',
      cname: 'alteration',
      perks: [
        {
          name: 'Root',
          levels: 1,
          desc: ['This perk tree can be found on the appropriate page'],
          req: [0],
          pos: [0, 0],
          id: ['00000000']
        }
      ]
    }, {
      name: 'Enchanting',
      cname: 'enchanting',
      perks: [
        {
          name: 'Root',
          levels: 1,
          desc: ['This perk tree can be found on the appropriate page'],
          req: [0],
          pos: [0, 0],
          id: ['00000000']
        }
      ]
    }, {
      name: 'Smithing',
      cname: 'smithing',
      perks: [
        {
          name: 'Root',
          levels: 1,
          desc: ['This perk tree can be found on the appropriate page'],
          req: [0],
          pos: [0, 0],
          id: ['00000000']
        }
      ]
    }, {
      name: 'Heavy Armor',
      cname: 'heavyarmor',
      perks: [
        {
          name: 'Root',
          levels: 1,
          desc: ['This perk tree can be found on the appropriate page'],
          req: [0],
          pos: [0, 0],
          id: ['00000000']
        }
      ]
    }, {
      name: 'Block',
      cname: 'block',
      perks: [
        {
          name: 'Root',
          levels: 1,
          desc: ['This perk tree can be found on the appropriate page'],
          req: [0],
          pos: [0, 0],
          id: ['00000000']
        }
      ]
    }, {
      name: 'Two-Handed',
      cname: 'twohanded',
      perks: [
        {
          name: 'Root',
          levels: 1,
          desc: ['This perk tree can be found on the appropriate page'],
          req: [0],
          pos: [0, 0],
          id: ['00000000']
        }
      ]
    }, {
      name: 'One-Handed',
      cname: 'onehanded',
      perks: [
        {
          name: 'Root',
          levels: 1,
          desc: ['This perk tree can be found on the appropriate page'],
          req: [0],
          pos: [0, 0],
          id: ['00000000']
        }
      ]
    }, {
      name: 'Archery',
      cname: 'marksman',
      perks: [
        {
          name: 'Root',
          levels: 1,
          desc: ['This perk tree can be found on the appropriate page'],
          req: [0],
          pos: [0, 0],
          id: ['00000000']
        }
      ]
    }, {
      name: 'Light Armor',
      cname: 'lightarmor',
      perks: [
        {
          name: 'Agile Defender',
          levels: 5,
          desc: ['Increase armor rating for Light armor by 20%.', 'Increase armor rating for Light armor by 40%.', 'Increase armor rating for Light armor by 60%.', 'Increase armor rating for Light armor by 80%.', 'Increase armor rating for Light armor by 100%.'],
          req: [0, 20, 40, 60, 80],
          pos: [0, 0],
          id: ['000BE123', '00079376', '00079389', '00079391', '00079392']
        }, {
          name: 'Custom Fit',
          desc: ['25% Armor bonus if wearing all Light Armor: head, chest, hands, feet.'],
          req: [30],
          pos: [-15, -62],
          deps: [0],
          id: ['00051B1B']
        }, {
          name: 'Unhindered',
          desc: ["Light Armor weighs nothing and doesn't slow you down when worn."],
          req: [50],
          pos: [-47, -110],
          deps: [1],
          id: ['00051B1C']
        }, {
          name: 'Matching Set',
          desc: ['Additional 25% Armor bonus if wearing a matched set of Light Armor.'],
          req: [70],
          pos: [8, -153],
          deps: [1],
          id: ['00051B17']
        }, {
          name: 'Wind Walker',
          desc: ['Stamina regenerates 50% faster in all Light Armor: head, chest, hands, feet.'],
          req: [60],
          pos: [-42, -143],
          deps: [2],
          id: ['00105F22']
        }, {
          name: 'Deft Movement',
          desc: ['10% chance of avoiding all damage from a melee attack while wearing all Light Armor: head, chest, hands, feet.'],
          req: [100],
          pos: [-15, -170],
          captionOffset: [0, -13],
          deps: [3, 4],
          id: ['00107831']
        }
      ]
    }, {
      name: 'Sneak',
      cname: 'sneak',
      perks: [
        {
          name: 'Stealth',
          levels: 5,
          desc: ['You are 20% harder to detect when sneaking.', 'You are 25% harder to detect when sneaking.', 'You are 30% harder to detect when sneaking.', 'You are 35% harder to detect when sneaking.', 'You are 40% harder to detect when sneaking.'],
          req: [0, 20, 40, 60, 80],
          pos: [0, 0],
          id: ['000BE126', '000C07C6', '000C07C7', '000C07C8', '000C07C9']
        }, {
          name: 'Backstab',
          desc: ['Sneak attacks with one-handed weapons now do six times damage.'],
          req: [30],
          pos: [43, -55],
          deps: [0],
          id: ['00058210']
        }, {
          name: 'Deadly Aim',
          desc: ['Sneak attacks with bows now do three times damage.'],
          req: [40],
          pos: [48, -112],
          deps: [1],
          id: ['001036F0']
        }, {
          name: "Assassin's Blade",
          desc: ['Sneak attacks with daggers now do a total of fifteen times normal damage.'],
          req: [50],
          pos: [27, -121],
          deps: [2],
          id: ['00058211']
        }, {
          name: 'Muffled Movement',
          desc: ['Noise from armor is reduced 50%.'],
          req: [30],
          pos: [-54, -56],
          deps: [0],
          id: ['00058213']
        }, {
          name: 'Light Foot',
          desc: ["You won't trigger pressure plates."],
          req: [40],
          pos: [-32, -113],
          deps: [4],
          id: ['0005820C']
        }, {
          name: 'Silent Roll',
          desc: ['Sprinting while sneaking executes a silent forward roll.'],
          req: [50],
          pos: [-9, -134],
          deps: [5],
          id: ['00105F23']
        }, {
          name: 'Silence',
          desc: ['Walking and running does not affect detection.'],
          req: [70],
          pos: [21, -162],
          deps: [6],
          id: ['00105F24']
        }, {
          name: 'Shadow Warrior',
          desc: ['Crouching stops combat for a moment and forces distant opponents to search for a target.'],
          req: [100],
          pos: [68, -176],
          deps: [7],
          id: ['00058214']
        }
      ]
    }, {
      name: 'Lockpicking',
      cname: 'lockpicking',
      perks: [
        {
          name: 'Novice Locks',
          desc: ['Novice locks are much easier to pick.'],
          pos: [0, 0],
          id: ['000F392A']
        }, {
          name: 'Apprentice Locks',
          desc: ['Apprentice locks are much easier to pick.'],
          req: [25],
          pos: [31, -57],
          deps: [0],
          id: ['000BE125']
        }, {
          name: 'Quick Hands',
          desc: ['Able to pick locks without being noticed.'],
          req: [40],
          pos: [-7, -87],
          deps: [1],
          id: ['00106259']
        }, {
          name: 'Wax Key',
          desc: ["Automatically gives you a copy of a picked lock's key if it has one."],
          req: [50],
          pos: [-45, -106],
          deps: [2],
          id: ['00107830']
        }, {
          name: 'Adept Locks',
          desc: ['Adept locks are much easier to pick.'],
          req: [50],
          pos: [55, -111],
          deps: [1],
          id: ['000C3680']
        }, {
          name: 'Golden Touch',
          desc: ['Find more gold in chests.'],
          req: [60],
          pos: [13, -124],
          deps: [4],
          id: ['0005820A']
        }, {
          name: 'Treasure Hunter',
          desc: ['50% greater chance of finding special treasure.'],
          req: [70],
          pos: [-15, -145],
          deps: [5],
          id: ['00105F26']
        }, {
          name: 'Expert Locks',
          desc: ['Expert locks are much easier to pick.'],
          req: [75],
          pos: [59, -143],
          deps: [4],
          id: ['000C3681']
        }, {
          name: 'Locksmith',
          desc: ['Pick starts close to the lock opening position.'],
          req: [80],
          pos: [22, -162],
          deps: [7],
          id: ['00058208']
        }, {
          name: 'Unbreakable',
          desc: ['Lockpicks never break.'],
          req: [100],
          pos: [0, -177],
          deps: [8],
          id: ['00058209']
        }, {
          name: 'Master Locks',
          desc: ['Master locks are much easier to pick.'],
          req: [100],
          pos: [67, -193],
          deps: [7],
          id: ['000C3682']
        }
      ]
    }, {
      name: 'Pickpocket',
      cname: 'pickpocket',
      perks: [
        {
          name: 'Light Fingers',
          levels: 5,
          desc: ['Pickpocketing bonus of 20%. Item weight and value reduce pickpocketing odds.', 'Pickpocketing bonus of 40%. Item weight and value reduce pickpocketing odds.', 'Pickpocketing bonus of 60%. Item weight and value reduce pickpocketing odds.', 'Pickpocketing bonus of 80%. Item weight and value reduce pickpocketing odds.', 'Pickpocketing bonus of 100%. Item weight and value reduce pickpocketing odds.'],
          req: [0, 20, 40, 60, 80],
          pos: [0, 0],
          id: ['000BE124', '00018E6A', '00018E6B', '00018E6C', '00018E6D']
        }, {
          name: 'Night Thief',
          desc: ['+25% chance to pickpocket if the target is asleep.'],
          req: [30],
          pos: [25, -50],
          deps: [0],
          id: ['00058202']
        }, {
          name: 'Poisoned',
          desc: ['Silently harm enemies by placing poisons in their pockets.'],
          req: [40],
          pos: [13, -106],
          deps: [1],
          id: ['00105F28']
        }, {
          name: 'Cutpurse',
          desc: ['Pickpocketing gold is 50% easier.'],
          req: [40],
          pos: [44, -107],
          deps: [1],
          id: ['00058204']
        }, {
          name: 'Extra Pockets',
          desc: ['Carrying capacity is increased by 100.'],
          req: [50],
          pos: [72, -105],
          deps: [1],
          id: ['00096590']
        }, {
          name: 'Keymaster',
          desc: ['Pickpocketing keys almost always works.'],
          req: [60],
          pos: [21, -128],
          deps: [3],
          id: ['000D79A0']
        }, {
          name: 'Misdirection',
          desc: ['Can pickpocket equipped weapons.'],
          req: [70],
          pos: [55, -157],
          deps: [3],
          id: ['00058201']
        }, {
          name: 'Perfect Touch',
          desc: ['Can pickpocket equipped items.'],
          req: [100],
          pos: [72, -162],
          deps: [6],
          id: ['00058205']
        }
      ]
    }, {
      name: 'Speech',
      cname: 'speechcraft',
      perks: [
        {
          name: 'Haggling',
          levels: 5,
          desc: ['Buying and selling prices are 10% better.', 'Buying and selling prices are 15% better.', 'Buying and selling prices are 20% better.', 'Buying and selling prices are 25% better.', 'Buying and selling prices are 30% better.'],
          req: [0, 20, 40, 60, 80],
          pos: [0, 0],
          id: ['000BE128', '000C07CE', '000C07CF', '000C07D0', '000C07D1']
        }, {
          name: 'Allure',
          desc: ['10% better prices with the opposite sex.'],
          req: [30],
          pos: [14, -55],
          deps: [0],
          id: ['00058F75']
        }, {
          name: 'Bribery',
          desc: ['Can bribe guards to ignore crimes.'],
          req: [30],
          pos: [60, -56],
          deps: [0],
          id: ['00058F72']
        }, {
          name: 'Persuasion',
          desc: ['Persuasion attempts are 30% easier.'],
          req: [50],
          pos: [83, -111],
          deps: [2],
          id: ['001090A2']
        }, {
          name: 'Intimidation',
          desc: ['Intimidation is twice as successful.'],
          req: [70],
          pos: [95, -143],
          deps: [3],
          id: ['00105F29']
        }, {
          name: 'Merchant',
          desc: ['Can sell any type of item to any kind of merchant.'],
          req: [50],
          pos: [5, -111],
          deps: [1],
          id: ['00058F7A']
        }, {
          name: 'Investor',
          desc: ['Can invest 500 gold with a shopkeeper to increase his available gold permanently.'],
          req: [70],
          pos: [-4, -142],
          deps: [5],
          id: ['00058F7B']
        }, {
          name: 'Fence',
          desc: ['Can barter stolen goods with any merchant you have invested in.'],
          req: [90],
          pos: [-12, -169],
          deps: [6],
          id: ['00058F79']
        }, {
          name: 'Master Trader',
          desc: ['Every merchant in the world gains 1000 gold for bartering.'],
          req: [100],
          pos: [56, -177],
          deps: [7],
          id: ['001090A5']
        }
      ]
    }
  ];

}).call(this);
