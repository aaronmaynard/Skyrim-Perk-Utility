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
          name: 'Root',
          levels: 1,
          desc: ['This perk tree can be found on the appropriate page'],
          req: [0],
          pos: [0, 0],
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
          name: 'N0 Smithing Mastery',
          levels: 5,
          desc: ['Description'],
          req: [0, 20, 40, 60, 80],
          pos: [0, 0],
          id: ['00000000', '00000000', '00000000', '00000000', '00000000']
        }, {
          name: 'N1 Arcane Blacksmith',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N2 Dwarven Autocannon',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N3 Remote Control',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [2],
          id: ['00000000']
        }, {
          name: 'N4 Electrobolt',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [2],
          id: ['00000000']
        }, {
          name: 'N5 Firing Line',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [4],
          id: ['00000000']
        }, {
          name: 'N6 Spin Up',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [4],
          id: ['00000000']
        }, {
          name: 'N7 Meric Smithing',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N8 Expert Smithing',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [7],
          id: ['00000000']
        }, {
          name: 'N9 Exotic Smithing',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [8],
          id: ['00000000']
        }, {
          name: 'N10 Planar Smithing',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [9],
          id: ['00000000']
        }, {
          name: 'N11 Advanced Workshop',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N12 Smithing Specialization',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [11],
          id: ['00000000']
        }, {
          name: 'N13 Iron Lore',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [12],
          id: ['00000000']
        }, {
          name: 'N14 Recycle Materials',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [11],
          id: ['00000000']
        }, {
          name: 'N15 Sandstone Sheath',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [14],
          id: ['00000000']
        }, {
          name: 'N16 Fuel the Inferno',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [12, 14],
          id: ['00000000']
        }, {
          name: 'N17 Heart of Creation',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [10, 16],
          id: ['00000000']
        }
      ]
    }, {
      name: 'Heavy Armor',
      cname: 'heavyarmor',
      perks: [
        {
          name: 'N0 - Heavy Armor Mastery',
          levels: 2,
          desc: ['Armor rating of Heavy Armor increased by 20%. You gain a small amount of Heavy Armor experience when wearing at least two pieces of Heavy Armor in combat.','Armor rating of Heavy Armor increased by 40%. You gain a small amount of Heavy Armor experience when wearing at least two pieces of Heavy Armor in combat.'],
          req: [0, 20],
          pos: [0, 0],
          id: ['00000000', '00000000']
        }, {
          name: 'N1 - Cushioned',
          levels: 2,
          desc: ['You take half damage from falling if wearing all Heavy Armor.','You take half/no damage from falling if wearing all Heavy Armor.'],
          req: [20, 40],
          pos: [10, -10],
          deps: [0],
          id: ['00000000', '00000000']
        }, {
          name: 'N2 - Battle Weary',
          levels: 1,
          desc: ['Tired enemies have a harder time defeating your armor. You take up to 20% less attack damage from enemies with half or less Stamina, if wearing all Heavy Armor. The lower their Stamina, the less damage you take.'],
          req: [30],
          pos: [10, -10],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N3 - Born to Fight',
          levels: 1,
          desc: ['Heavy Armor weighs half as much and slows you down half as much when worn.'],
          req: [50],
          pos: [10, -10],
          deps: [2],
          id: ['00000000']
        }, {
          name: 'N4 - Break Upon Me',
          levels: 1,
          desc: ['You are immune to basic melee weapon perks (Clash of Champions/Heroes, Denting/Crushing Blows, Bleed Like a Lamb/Dog, Bite Marks). If wearing all Heavy Armor, you take 10% less attack damage from enemies affected by one or more of these perks.'],
          req: [60],
          pos: [10, -10],
          deps: [2],
          id: ['00000000']
        }, {
          name: 'N5 - Rise Above',
          levels: 1,
          desc: ['If wearing all Heavy Armor, you intimidate enemies within 15 feet. They lose 5% attack damage and you gain 5% attack damage for each enemy affected.'],
          req: [80],
          pos: [10, -10],
          deps: [4],
          id: ['00000000']
        }, {
          name: 'N6 - Primal Fear',
          levels: 1,
          desc: ['If wearing all Heavy Armor, walking (but not running) towards living enemies within 30 feet in front of you may break their confidence, causing them to flee for 8 seconds.'],
          req: [90],
          pos: [10, -10],
          deps: [5],
          id: ['00000000']
        }, {
          name: 'N7 - Reap the Whirlwind',
          levels: 1,
          desc: ['When struck by a power attack or power bash, your attacks deal 125% more damage to the attacker for 5 seconds if wearing all Heavy Armor.'],
          req: [70],
          pos: [10, -10],
          deps: [4],
          id: ['00000000']
        }, {
          name: 'N8 - Sovereign',
          levels: 1,
          desc: ['When struck by an attack, subsequent attacks are deflected if wearing all Heavy Armor. You take 75% reduced damage from attacks for 1 second.'],
          req: [90],
          pos: [10, -10],
          deps: [7],
          id: ['00000000']
        }, {
          name: 'N9 - Face of the Mountain',
          levels: 1,
          desc: ['When struck by a power attack or power bash, the attacker`s strike rebounds forcefully as if striking solid rock, staggering them and potentially knocking them to the ground if wearing all Heavy Armor.'],
          req: [100],
          pos: [10, -10],
          deps: [8],
          id: ['00000000']
        }, {
          name: 'N10 - Heavy Armor Fit',
          levels: 1,
          desc: ['Armor rating of Heavy Armor increased by 25% if wearing all Heavy Armor.'],
          req: [30],
          pos: [10, -10],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N11 - Face of Death',
          levels: 1,
          desc: ['You no longer need to wear a helmet to benefit from perks that require "wearing all Heavy Armor". If you are not wearing a helmet, Heavy Armor pieces have 20% increased armor rating.'],
          req: [40],
          pos: [10, -10],
          deps: [10],
          id: ['00000000']
        }, {
          name: 'N12 - Defiance',
          levels: 1,
          desc: ['You are trained to deflect incoming attacks while wearing all Heavy Armor. Whenever an enemy attacks you, you gain 15 points of armor rating for 10 seconds. This effect stacks.'],
          req: [40],
          pos: [10, -10],
          deps: [10],
          id: ['00000000']
        }, {
          name: 'N13 - Bedrock',
          levels: 1,
          desc: ['If wearing all Heavy Armor, you have 20% chance to brace for impact when attacked by an enemy, becoming immune to stagger for 4 seconds.'],
          req: [60],
          pos: [10, -10],
          deps: [12],
          id: ['00000000']
        }, {
          name: 'N14 - Revel in Battle',
          levels: 1,
          desc: ['Defiance also increases melee weapon damage by 3% for 10 seconds. This effect stacks.'],
          req: [50],
          pos: [10, -10],
          deps: [12],
          id: ['00000000']
        }, {
          name: 'N15 - Rallying Standard',
          levels: 1,
          desc: ['Grants the "Rallying Standard" power. Once a day, place a banner that grants 150 points of armor and 25% melee damage to allies within 25 feet wearing all Heavy Armor (including you) and prevents them from fleeing. Lasts 60 seconds.'],
          req: [40],
          pos: [10, -10],
          deps: [10],
          id: ['00000000']
        }, {
          name: 'N16 - Never Kneel',
          levels: 1,
          desc: ['If wearing all Heavy Armor, take 30% less attack damage from power attacks.'],
          req: [60],
          pos: [10, -10],
          deps: [12, 15],
          id: ['00000000']
        }, {
          name: 'N17 - Out of the Inferno',
          levels: 1,
          desc: ['Incoming fire, frost and shock damage reduced by 0.02% per point of armor if wearing all Heavy Armor.'],
          req: [80],
          pos: [10, -10],
          deps: [16],
          id: ['00000000']
        }, {
          name: 'N18 - Warbringer',
          levels: 1,
          desc: ['Raising your hands (to draw a weapon or spell) places a Rallying Standard at your location for 120 seconds. This does not count against the limit of one Rallying Standard at a time.'],
          req: [80],
          pos: [10, -10],
          deps: [15],
          id: ['00000000']
        }, {
          name: 'N19 - Doombringer',
          levels: 1,
          desc: ['Rallying Standard also improves Destruction spells and effects by 15%.'],
          req: [90],
          pos: [10, -10],
          deps: [18],
          id: ['00000000']
        }, {
          name: 'N20 - Immortal',
          levels: 1,
          desc: ['If wearing all Heavy Armor, take 75% less damage from attacks below 15% Health (or 20% Health if you are affected by Rallying Standard).'],
          req: [90],
          pos: [10, -10],
          deps: [17, 18],
          id: ['00000000']
        }, {
          name: 'N21 - Lead the Tempest',
          levels: 1,
          desc: ['Sprinting in combat increases the armor of allied people within 20 feet by 25% of your own armor, and the armor of allied Skeletons created by Bone Collector within 20 feet by 15% of your own armor. Lasts 30 seconds.'],
          req: [70],
          pos: [10, -10],
          deps: [3, 11, 13],
          id: ['00000000']
        }
      ]
    }, {
      name: 'Block',
      cname: 'block',
      perks: [
        {
          name: 'Node 0',
          levels: 5,
          desc: ['Description'],
          req: [0, 20, 40, 60, 80],
          pos: [0, 0],
          id: ['00000000', '00000000', '00000000', '00000000', '00000000']
        }, {
          name: 'Node X',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [0],
          id: ['00000000']
        }
      ]
    }, {
      name: 'Two-Handed',
      cname: 'twohanded',
      perks: [
        {
          name: 'N0 - Two-Handed Mastery',
          levels: 5,
          desc: ['Description'],
          req: [0, 20, 40, 60, 80],
          pos: [0, 0],
          id: ['00000000', '00000000', '00000000', '00000000', '00000000']
        }, {
          name: 'N1 - Trained Fighter',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [-40, -50],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N2 - Death or Glory',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [-35, -120],
          deps: [1],
          id: ['00000000']
        }, {
          name: 'N3 - Wolfkin',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [-25, -150],
          deps: [2],
          id: ['00000000']
        }, {
          name: 'N4 - Bleed Like a Dog',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [-20, -55],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N5 - Rive',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [-20, -90],
          deps: [4],
          id: ['00000000']
        }, {
          name: 'N6 - Execute',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [-5, -115],
          deps: [5],
          id: ['00000000']
        }, {
          name: 'N7 - Decimate',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [0, -90],
          deps: [6],
          id: ['00000000']
        }, {
          name: 'N8 - Bisect',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [-5, -160],
          deps: [7],
          id: ['00000000']
        }, {
          name: 'N9 - Ram`s Head',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [-5, -175],
          deps: [8],
          id: ['00000000']
        }, {
          name: 'N10 - Crushing Blows',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [5, -60],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N11 - Batter',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -90],
          deps: [10],
          id: ['00000000']
        }, {
          name: 'N12 - Avalance',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [25, -280],
          deps: [11],
          id: ['00000000']
        }, {
          name: 'N13 - The Pendulum',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [30, -140],
          deps: [12],
          id: ['00000000']
        }, {
          name: 'N14 - Grand Slam',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [25, -150],
          deps: [13],
          id: ['00000000']
        }, {
          name: 'N15 - Deadfall',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [30, -165],
          deps: [14],
          id: ['00000000']
        }, {
          name: 'N16 - Clash of Heros',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [20, -55],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N17 - Maul',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [30, -90],
          deps: [16],
          id: ['00000000']
        }, {
          name: 'N18 - Breach the Wall',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [30, -120],
          deps: [17],
          id: ['00000000']
        }, {
          name: 'N19 - Subjugate',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [35, -140],
          deps: [18],
          id: ['00000000']
        }, {
          name: 'N20 - Humiliate',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [25, -160],
          deps: [19],
          id: ['00000000']
        }, {
          name: 'N21 - Overthrow',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [25, -175],
          deps: [20],
          id: ['00000000']
        }, {
          name: 'N22 - Slayer of a Thousand Sons',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -205],
          deps: [9, 15, 21],
          id: ['00000000']
        }, {
          name: 'N23 - Ferocious Strength',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [55, -65],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N24 - Trample',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [70, -80],
          deps: [23],
          id: ['00000000']
        }, {
          name: 'N25 - Bear Hide',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [65, -155],
          deps: [24],
          id: ['00000000']
        }, {
          name: 'N26 - Massacre',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [50, -140],
          deps: [24],
          id: ['00000000']
        }, {
          name: 'N27 - Enter the Arena',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [50, -165],
          deps: [26],
          id: ['00000000']
        }, {
          name: 'N28 - Voice of Rage and Ruin',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [35, -170],
          deps: [27],
          id: ['00000000']
        }
      ]
    }, {
      name: 'One-Handed',
      cname: 'onehanded',
      perks: [
        {
          name: 'N0 One-Handed Mastery',
          levels: 5,
          desc: ['Description'],
          req: [0, 20, 40, 60, 80],
          pos: [0, 0],
          id: ['00000000', '00000000', '00000000', '00000000', '00000000']
        }, {
          name: 'N1 Furious Strength',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N2 Overrun',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [1],
          id: ['00000000']
        }, {
          name: 'N3 Disciplined Fighter',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N4 Rogue`s Parry',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [3],
          id: ['00000000']
        }, {
          name: 'N5 Thundering Blow',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [3],
          id: ['00000000']
        }, {
          name: 'N6 Aftershock',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [5],
          id: ['00000000']
        }, {
          name: 'N7 Ravage',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N8 Man o` War',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [7],
          id: ['00000000']
        }, {
          name: 'N9 Unleash the Beast',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [8],
          id: ['00000000']
        }, {
          name: 'N10 Bleed Like a Lamb',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N11 Mangle',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [10],
          id: ['00000000']
        }, {
          name: 'N12 Shieldbiter',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [11],
          id: ['00000000']
        }, {
          name: 'N13 Wolfstooth',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [12],
          id: ['00000000']
        }, {
          name: 'N14 Go for the Throat',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [13],
          id: ['00000000']
        }, {
          name: 'N15 Apex Predator',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [14],
          id: ['00000000']
        }, {
          name: 'N16 Denting Blows',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N17 Smite',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [16],
          id: ['00000000']
        }, {
          name: 'N18 Rise Kinsmen',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [17],
          id: ['00000000']
        }, {
          name: 'N19 Toll the Bell',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [18],
          id: ['00000000']
        }, {
          name: 'N20 Meteor Storm',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [19],
          id: ['00000000']
        }, {
          name: 'N21 Skull Crack',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [20],
          id: ['00000000']
        }, {
          name: 'N22 Clash of Champions',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N23 Cross Cut',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [22],
          id: ['00000000']
        }, {
          name: 'N24 Falling Sword',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [23],
          id: ['00000000']
        }, {
          name: 'N25 Windswept',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [24],
          id: ['00000000']
        }, {
          name: 'N26 Into the Dust',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [25],
          id: ['00000000']
        }, {
          name: 'N27 Judgment',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [26],
          id: ['00000000']
        }, {
          name: 'N28 Bite Marks',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N29 Savage',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [28],
          id: ['00000000']
        }, {
          name: 'N30 Twin Fang',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [29],
          id: ['00000000']
        }, {
          name: 'N31 Swaying Cobra',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [30],
          id: ['00000000']
        }, {
          name: 'N32 Death Adder',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [31],
          id: ['00000000']
        }, {
          name: 'N33 Coiling Python',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [32],
          id: ['00000000']
        }, {
          name: 'N34 Wandering Warrior',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [15, 21, 27, 33],
          id: ['00000000']
        }
      ]
    }, {
      name: 'Archery',
      cname: 'marksman',
      perks: [
        {
          name: 'Node 0',
          levels: 5,
          desc: ['Description'],
          req: [0, 20, 40, 60, 80],
          pos: [0, 0],
          id: ['00000000', '00000000', '00000000', '00000000', '00000000']
        }, {
          name: 'Node X',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [0],
          id: ['00000000']
        }
      ]
    }, {
      name: 'Light Armor',
      cname: 'lightarmor',
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
      name: 'Sneak',
      cname: 'sneak',
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
      name: 'Lockpicking',
      cname: 'lockpicking',
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
      name: 'Pickpocket',
      cname: 'pickpocket',
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
      name: 'Speech',
      cname: 'speechcraft',
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
    }
  ];

}).call(this);
