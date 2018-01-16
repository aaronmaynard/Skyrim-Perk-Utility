/**
This document contains all of the perk information.  To create a new note, copy the node labeled
'Node X'.  Follow the example as given by the first perk, in the first perk tree.  Each perk tree
is labeled accordingly.  Do not change this as this is how the scripts display the information to
the canvas on the website.  If you have any questions, leave a comment on the issue documentation
on GitHub.  https://github.com/aaronmaynard/Skyrim-Perk-Utility

Multiply final result by 5
**/

(function() {

  window.perkTrees = [
    {
      name: 'Alchemy',	// The name that shows on the top of the perk tree, as well as in the branch list.
      cname: 'alchemy',	// Do not change the name and cname.
      perks: [
        {
          name: 'Node 0',	// The name of the perk, ie: "Alchemist".
          levels: 5,		// The number of times this perk can be developed. If set to anything other then one, progress will show.
          desc: ['Description'],	// Description of what the perk does, ie: "Potions and poisons you make are 20% stronger.".
          req: [0, 20, 40, 60, 80],	// The skill level required to obtain the level(s) of the perk.
          pos: [0, 0],				// The position on the canvas. The canvas reposition based on the balance point.
          id: ['00000000', '00000000', '00000000', '00000000', '00000000']	// The perk ID's. The number of perk ID's should match the number of levels.
        }, {
          name: 'Node X',	// NODE TEMPLATE
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [0],
          id: ['00000000']
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
          name: 'N0 Light Armor Mastery',
          levels: 5,
          desc: ['Description'],
          req: [0, 20, 40, 60, 80],
          pos: [0, 0],
          id: ['00000000', '00000000', '00000000', '00000000', '00000000']
        }, {
          name: 'N1 Annoying Mosquitos',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N2 As a Leaf',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N3 Iron Fist',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N4 Sweeping Wind',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [3],
          id: ['00000000']
        }, {
          name: 'N5 Rushing Tide',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [4],
          id: ['00000000']
        }, {
          name: 'N6 Hissing Dragon',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [5],
          id: ['00000000']
        }, {
          name: 'N7 Breaking Waves',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [5],
          id: ['00000000']
        }, {
          name: 'N8 Light Armor Fit',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N9 Unhindered',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [4, 8],
          id: ['00000000']
        }, {
          name: 'N10 Into the Maelstrom',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [9],
          id: ['00000000']
        }, {
          name: 'N11 Keen Senses',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [8],
          id: ['00000000']
        }, {
          name: 'N12 Evasive Leap',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [8],
          id: ['00000000']
        }, {
          name: 'N13 Wild and Free',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [12],
          id: ['00000000']
        }, {
          name: 'N14 Initiative',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [8],
          id: ['00000000']
        }, {
          name: 'N15 Lightning Strike',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [14],
          id: ['00000000']
        }, {
          name: 'N16 Fight or Flight',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [14],
          id: ['00000000']
        }, {
          name: 'N17 Survival Instinct',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [16],
          id: ['00000000']
        }, {
          name: 'N18 Windrunner',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [14],
          id: ['00000000']
        }, {
          name: 'N19 Wardancer',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [18],
          id: ['00000000']
        }, {
          name: 'N20 Spelldancer',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [19],
          id: ['00000000']
        }, {
          name: 'N21 Glancing Blows',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [19],
          id: ['00000000']
        }, {
          name: 'N22 Tempting Fate',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [17, 21],
          id: ['00000000']
        }
      ]
    }, {
      name: 'Sneak',
      cname: 'sneak',
      perks: [
        {
          name: 'N0 - Sneak Mastery',
          levels: 5,
          desc: ['Description'],
          req: [0, 20, 40, 60, 80],
          pos: [0, 0],
          id: ['00000000', '00000000', '00000000', '00000000', '00000000']
        }, {
          name: 'N1 - Demolition Job',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [45, -15],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N2 - Spot Detection',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [-45, -10],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N3 - Light Foot',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [-75, -70],
          deps: [2],
          id: ['00000000']
        }, {
          name: 'N4 - Sneak Attack',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [45, -50],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N5 - Assasin`s Blade',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [70, -85],
          deps: [4],
          id: ['00000000']
        }, {
          name: 'N6 - Backstab',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [60, -110],
          deps: [5],
          id: ['00000000']
        }, {
          name: 'N7 - Problem Solver',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [40, -135],
          deps: [4],
          id: ['00000000']
        }, {
          name: 'N8 - Cloak and Dagger',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [55, -155],
          deps: [7],
          id: ['00000000']
        }, {
          name: 'N9 - Laughing Ghost',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [45, -175],
          deps: [7],
          id: ['00000000']
        }, {
          name: 'N10 - Tripwire',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [-50, -45],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N11 - Whiplash',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [-40, -85],
          deps: [10],
          id: ['00000000']
        }, {
          name: 'N12 - Silent Roll',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [-25, -60],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N13 - Dynamic Entry',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [-15, -95],
          deps: [12],
          id: ['00000000']
        }, {
          name: 'N14 - Dodge Roll',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [-25, -125],
          deps: [13],
          id: ['00000000']
        }, {
          name: 'N15 - Backup Plan',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [-50, -140],
          deps: [11, 14],
          id: ['00000000']
        }, {
          name: 'N16 - Greased Lightning',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [-35, -160],
          deps: [14],
          id: ['00000000']
        }, {
          name: 'N17 - Fog of War',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [0, -50],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N18 - Infiltrator',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [20, -70],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N19 - Right Behind You',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -100],
          deps: [17, 18],
          id: ['00000000']
        }, {
          name: 'N20 - Disengage',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [-5, -115],
          deps: [19],
          id: ['00000000']
        }, {
          name: 'N21 - Clean Escape',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [30, -120],
          deps: [19],
          id: ['00000000']
        }, {
          name: 'N22 - Smokescreen',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [20, -130],
          deps: [19],
          id: ['00000000']
        }, {
          name: 'N23 - Party Starter',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [20, -155],
          deps: [22],
          id: ['00000000']
        }, {
          name: 'N24 - Behind Enemy Lines',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [-1, -30],
          deps: [70, 95],
          id: ['00000000']
        }, {
          name: 'N25 - Shadow Warrior',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [0, -175],
          deps: [24],
          id: ['00000000']
        }
      ]
    }, {
      name: 'Lockpicking',
      cname: 'lockpicking',
      perks: [
        {
          name: 'N0 Lockpicking Mastery',
          levels: 5,
          desc: ['Description'],
          req: [0, 20, 40, 60, 80],
          pos: [0, 0],
          id: ['00000000', '00000000', '00000000', '00000000', '00000000']
        }, {
          name: 'N1 Game of Fate',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N2 Lockdown',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N3 Hotwire',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [2],
          id: ['00000000']
        }, {
          name: 'N4 Percussive Maintenance',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [3],
          id: ['00000000']
        }, {
          name: 'N5 Wax Key',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N6 Locksmith',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [5],
          id: ['00000000']
        }, {
          name: 'N7 Seen This Before',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [6],
          id: ['00000000']
        }, {
          name: 'N8 Robber`s Eye',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N9 Gone in Fifteen Seconds',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [8],
          id: ['00000000']
        }, {
          name: 'N10 Golden Touch',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [9],
          id: ['00000000']
        }, {
          name: 'N11 Nose for Treasure',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [8],
          id: ['00000000']
        }, {
          name: 'N12 Dungeoneer',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [9, 11],
          id: ['00000000']
        }, {
          name: 'N13 Treasure Hunter',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [10, 12],
          id: ['00000000']
        }, {
          name: 'N14 Bear Traps',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N15 Lockjaw',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [14],
          id: ['00000000']
        }, {
          name: 'N16 Bait',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [15],
          id: ['00000000']
        }, {
          name: 'N17 The Revenge',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [16],
          id: ['00000000']
        }, {
          name: 'N18 Big Game Hunter',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [15],
          id: ['00000000']
        }, {
          name: 'N19 Bushwhack',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [16, 18],
          id: ['00000000']
        }, {
          name: 'N20 Dragon`s Teeth',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [17, 19],
          id: ['00000000']
        }
      ]
    }, {
      name: 'Pickpocket',
      cname: 'pickpocket',
      perks: [
        {
          name: 'N0 Pickpocket Mastery',
          levels: 5,
          desc: ['Description'],
          req: [0, 20, 40, 60, 80],
          pos: [0, 0],
          id: ['00000000', '00000000', '00000000', '00000000', '00000000']
        }, {
          name: 'N1 Trained Rabbit',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N2 Blood Money',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N3 Death`s Emperor',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N4 Doomed to Plunder',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [3],
          id: ['00000000']
        }, {
          name: 'N5 Mutiny',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [4],
          id: ['00000000']
        }, {
          name: 'N6 Theif`s Eye',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N7 Thief`s Luck',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [6],
          id: ['00000000']
        }, {
          name: 'N8 Crime Wave',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [7],
          id: ['00000000']
        }, {
          name: 'N9 Cutpurse',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N10 Brotherhood Cocktail',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [9],
          id: ['00000000']
        }, {
          name: 'N11 Trickster',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [10],
          id: ['00000000']
        }, {
          name: 'N12 On the Run',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [9],
          id: ['00000000']
        }, {
          name: 'N13 Lawless World',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [9],
          id: ['00000000']
        }, {
          name: 'N14 Stalk the Prey',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [12,13],
          id: ['00000000']
        }, {
          name: 'N15 You Saw Nothing',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [14],
          id: ['00000000']
        }, {
          name: 'N16 Robbed Blind',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [15],
          id: ['00000000']
        }, {
          name: 'N17 Dragon Hoard',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [5,8 , 14],
          id: ['00000000']
        }
      ]
    }, {
      name: 'Speech',
      cname: 'speechcraft',
      perks: [
        {
          name: 'Speech Mastery',
          levels: 2,
          desc: ['Sell items for 10% more. Your intimidation attempts are twice/four times as likely to succeed.','Sell items for 20% more. Your intimidation attempts are twice/four times as likely to succeed.'],
          req: [0, 20],
          pos: [0, 0],
          id: ['00000000', '00000000']
        }, {
          name: 'Bribery',
          levels: 1,
          desc: ['Can bribe guards to ignore crimes.'],
          req: [30],
          pos: [60, -25],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'Kinship',
          levels: 1,
          desc: ['Buy items for 15% less when trading with the same race.'],
          req: [30],
          pos: [-25, -55],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'Business Relation',
          levels: 1,
          desc: ['Create a bond with the next merchant you speak with. Buy items for 30% less from that specific merchant.'],
          req: [40],
          pos: [-50, -95],
          deps: [2],
          id: ['00000000']
        }, {
          name: 'Salesman',
          levels: 1,
          desc: ['Can sell any type of item to any kind of merchant.'],
          req: [50],
          pos: [-30, -100],
          deps: [2],
          id: ['00000000']
        }, {
          name: 'Investor',
          levels: 1,
          desc: ['Can invest 500 gold with a shopkeeper to increase his or her available gold by 500 permanently.'],
          req: [60],
          pos: [-25, -125],
          deps: [3, 4],
          id: ['00000000']
        }, {
          name: 'Fence',
          levels: 1,
          desc: ['Can barter stolen goods with any merchant.'],
          req: [70],
          pos: [-10, -150],
          deps: [5],
          id: ['00000000']
        }, {
          name: 'Trade Prince',
          levels: 1,
          desc: ['Every merchant in the world gains 1000 gold for bartering.'],
          req: [90],
          pos: [-20, -175],
          deps: [6],
          id: ['00000000']
        }, {
          name: 'And the Universe Listens',
          levels: 1,
          desc: ['Shouting restores points of Health, Magicka and Stamina equal to your shout cooldown in seconds. You gain Speech experience when shouting based on your shout cooldown.'],
          req: [20],
          pos: [40, -45],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'Windborne',
          levels: 1,
          desc: ['Shouting summons up a divine wind, granting 30% extra attack damage and 15% increased movement speed for 15 seconds. This effect stacks.'],
          req: [40],
          pos: [60, -85],
          deps: [8],
          id: ['00000000']
        }, {
          name: 'Hurricane Force',
          levels: 1,
          desc: ['Shouts that affect others are 1% more powerful per level of Speech.'],
          req: [60],
          pos: [70, -120],
          deps: [9],
          id: ['00000000']
        }, {
          name: 'Force Redoubled',
          levels: 2,
          desc: ['25% chance to reduce the cooldown of any shout to 3 seconds.','50% chance to reduce the cooldown of any shout to 3 seconds.'],
          req: [50,70],
          pos: [85, -95],
          deps: [9],
          id: ['00000000', '00000000']
        }, {
          name: 'Thu`um of War',
          levels: 1,
          desc: ['Your shouts stagger nearby enemies within 25 feet, reducing armor rating by 300 points for 10 seconds and knocking enemies below 25% Health to the ground.'],
          req: [70],
          pos: [95, -135],
          deps: [11],
          id: ['00000000']
        }, {
          name: 'Merciless Storm',
          levels: 1,
          desc: ['Grants the "Merciless Storm" power. Once a day, cancels an active shout cooldown, allowing you to shout again immediately afterwards.'],
          req: [80],
          pos: [75, -145],
          deps: [11],
          id: ['00000000']
        }, {
          name: 'Dovahzulaan',
          levels: 1,
          desc: ['For 120 seconds after using Merciless Storm, any shout you use also carries the previous shout.'],
          req: [100],
          pos: [85, -170],
          deps: [13],
          id: ['00000000']
        }, {
          name: 'Speak With Animals',
          levels: 1,
          desc: ['Can Activate animals to tame them, forcing them to follow you anywhere you go and fight for you until released. You can only have one Wild Companion at a time. Use the "Release Companion" power to release your Wild Companion.'],
          req: [50],
          pos: [35, -90],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'Horn of Sovngarde',
          levels: 2,
          desc: ['Grants the "Horn of Sovngarde" power. Once a day, blow a horn to call the nearest three friendly people (except followers) within 200 feet to follow you for 600 seconds/one ingame day.','Grants the "Horn of Sovngarde" power. Once a day, blow a horn to call the nearest three friendly people (except followers) within 200 feet to follow you for 600 seconds/one ingame day.'],
          req: [70, 90],
          pos: [60, -130],
          deps: [15],
          id: ['00000000', '00000000']
        }, {
          name: 'Gift of Kynareth',
          levels: 1,
          desc: ['Improves your Wild Companion. Wolves gain 100% extra attack damage. Spiders gain magic immunity. Bears gain 150 points of Health. Chaurus gain 300 points of armor. Saber cats gain 40% movement speed and move silently.'],
          req: [80],
          pos: [45, -140],
          deps: [15],
          id: ['00000000']
        }, {
          name: 'Performer',
          levels: 1,
          desc: ['Grants the "Perform" power. Once a day, play a song to entertain up to five people within 50 feet and collect a donation from each, based on your Speech skill and the amount of gold they are carrying.'],
          req: [20],
          pos: [0, -45],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'Serenade',
          levels: 1,
          desc: ['Performing to members of the opposite sex yields twice as much gold and potentially small items.'],
          req: [30],
          pos: [-5, -75],
          deps: [18],
          id: ['00000000']
        }, {
          name: 'Irresitible Dance',
          levels: 1,
          desc: ['Can Perform in combat to force the two nearest enemy people within 100 feet to dance spellbound, preventing them from acting and reducing their armor skills by 50 levels. Use again to stop.'],
          req: [30],
          pos: [15, -95],
          deps: [18],
          id: ['00000000']
        }, {
          name: 'Lorde of the Dance',
          levels: 1,
          desc: ['Irresistible Dance can affect up to five enemies.'],
          req: [90],
          pos: [40, -160],
          deps: [20],
          id: ['00000000']
        }, {
          name: 'Encore',
          levels: 1,
          desc: ['Able to Perform multiple times per day.'],
          req: [40],
          pos: [-10, -130],
          deps: [20],
          id: ['00000000']
        }, {
          name: 'Golden Fiddle',
          levels: 1,
          desc: ['Irresistible Dance now also forces daedra, undead and animals to listen spellbound.'],
          req: [40],
          pos: [15, -120],
          deps: [20],
          id: ['00000000']
        }, {
          name: 'Earthquake Drum',
          levels: 1,
          desc: ['Can Perform in combat to unleash shockwaves. Each drumbeat deals 50 points of damage to nearby enemies within 30 feet. Use again to stop.'],
          req: [60],
          pos: [10, -140],
          deps: [22, 23],
          id: ['00000000']
        }, {
          name: 'Witching Rhythm',
          levels: 1,
          desc: ['Earthquake Drum deals 50% more damage. Each beat of Earthquake Drum also briefly reduces the magic resistance of affected enemies by 200% for 0.4 seconds.'],
          req: [80],
          pos: [15, -155],
          deps: [24],
          id: ['00000000']
        }, {
          name: 'War Drummer',
          levels: 1,
          desc: ['Each beat of Earthquake Drum also heals nearby allies by up to 20 points based on their missing Health percentage, and grants them 100% extra attack damage for 0.4 seconds.'],
          req: [90],
          pos: [10, -170],
          deps: [25],
          id: ['00000000']
        }
      ]
    }
  ];

}).call(this);
