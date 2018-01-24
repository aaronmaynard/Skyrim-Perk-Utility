(function() {

  window.perkTrees = [
    {
      name: 'Alchemy',
      cname: 'alchemy',
      perks: [
        {
          name: 'N0 - Alchemy Mastery',
          levels: 2,
          desc: ['Potions and poisons you make are 20% stronger.','Potions and poisons you make are 40% stronger.'],
          req: [0, 20],
          pos: [0, 0],
          id: ['00000000', '00000000']
        }, {
          name: 'N1 - Elemental Oil',
          levels: 1,
          desc: ['You may choose a power: "Fire Oil", "Frost Oil" or "Shock Oil". At will, create a pool of oil that lasts 20 seconds. It reacts violently when struck by a projectile or explosion, exploding and dealing damage equal to your Alchemy skill level.'],
          req: [40],
          pos: [0, -85],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N2 - The Alchemist`s Cookbook',
          levels: 1,
          desc: ['You may choose a second Elemental Oil power. In addition to "Fire Oil", "Frost Oil" and "Shock Oil", you may also choose "Calming Oil", "Frenzy Oil", "Paralysis Oil" or "Hallowed Oil".'],
          req: [60],
          pos: [10, -125],
          deps: [1],
          id: ['00000000']
        }, {
          name: 'N3 - Walking Disaster',
          levels: 1,
          desc: ['In combat, periodically spill a random oil puddle on the ground. Puddles last 60 seconds.'],
          req: [90],
          pos: [15, -160],
          deps: [2],
          id: ['00000000']
        }, {
          name: 'N4 - Advanced Lab',
          levels: 1,
          desc: ['You may choose to upgrade one alchemy lab to an Advanced version for 2500 gold. Potions you mix are 25% stronger at an Advanced Lab. Can be "Disassembled" by sneaking, allowing you to upgrade another.'],
          req: [30],
          pos: [15, -70],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N5 - Lab Skeever',
          levels: 1,
          desc: ['For 20 seconds after using any alchemy lab, beneficial potions you drink last 15 times longer and are 25% stronger.'],
          req: [50],
          pos: [20, -100],
          deps: [4],
          id: ['00000000']
        }, {
          name: 'N6 - Double Toil and Trouble',
          levels: 1,
          desc: ['You mix twice as many potions at your Advanced Lab.'],
          req: [70],
          pos: [25, -140],
          deps: [5],
          id: ['00000000']
        }, {
          name: 'N7 - Experimenter',
          levels: 1,
          desc: ['Eating an ingredient reveals all effects.'],
          req: [30],
          pos: [35, -75],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N8 - Green Thumb',
          levels: 1,
          desc: ['Twice as many ingredients are gathered from most harvestable objects.'],
          req: [60],
          pos: [40, -125],
          deps: [5, 7],
          id: ['00000000']
        }, {
          name: 'N9 - Pure Mixture',
          levels: 1,
          desc: ['All negative effects are removed from created potions, and all positive effects are removed from created poisons.'],
          req: [70],
          pos: [40, -145],
          deps: [8],
          id: ['00000000']
        }, {
          name: 'N10 - Stimulants',
          levels: 1,
          desc: ['When you use a beneficial potion or ingredient, you regenerate 2% of your Magicka and Stamina per second for 30 seconds.'],
          req: [20],
          pos: [55, -50],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N11 - Crimson Haze',
          levels: 1,
          desc: ['Stimulants also increases movement speed by 10% for its duration.'],
          req: [40],
          pos: [55, -100],
          deps: [10],
          id: ['00000000']
        }, {
          name: 'N12 - Maenad',
          levels: 1,
          desc: ['Magicka and Stamina are increased by 50 points when you are under the effect of a beneficial potion or ingredient, but reduced by 25 points when you are not.'],
          req: [60],
          pos: [60, -140],
          deps: [11],
          id: ['00000000']
        }, {
          name: 'N13 - Witchmaster',
          levels: 1,
          desc: ['When you use a beneficial potion or ingredient, 50% chance to receive a powerful side effect, randomly chosen from a range of 40 side effects.'],
          req: [80],
          pos: [50, -155],
          deps: [11],
          id: ['00000000']
        }, {
          name: 'N14 - Chymical Wedding',
          levels: 1,
          desc: ['Witchmaster side effects have 50% chance to cause side effects themselves.'],
          req: [90],
          pos: [25, -165],
          deps: [13],
          id: ['00000000']
        }, {
          name: 'N15 - Poisoner',
          levels: 1,
          desc: ['Poisons you mix are 1% more powerful per level of Alchemy.'],
          req: [30],
          pos: [85, -45],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N16 - Bottomless Cup',
          levels: 1,
          desc: ['Poisons applied to weapons last for one additional hit per 10 levels of Alchemy.'],
          req: [40],
          pos: [75, -95],
          deps: [15],
          id: ['00000000']
        }, {
          name: 'N17 - Alkahest',
          levels: 1,
          desc: ['Your poisons are highly corrosive, enabling you to ignore 40% of the armor rating of an affected target for their duration.'],
          req: [50],
          pos: [90, -115],
          deps: [15],
          id: ['00000000']
        }, {
          name: 'N18 - Amplify Lethality',
          levels: 1,
          desc: ['Grants the "Amplify Lethality" power. Once a day, point at a victim to silently reduce their poison resistance by 250% for 10 seconds.'],
          req: [80],
          pos: [65, -150],
          deps: [16, 17],
          id: ['00000000']
        }, {
          name: 'N19 - World Serpent',
          levels: 1,
          desc: ['When you shout, your blood turns poisonous for 15 seconds. The next time you get hit with a weapon, retaliate with a powerful poisonous strike that deals 50 points of poison damage per second for 10 seconds.'],
          req: [90],
          pos: [70, -170],
          deps: [13, 18],
          id: ['00000000']
        }, {
          name: 'N20 - That Which Does Not Kill You...',
          levels: 1,
          desc: ['Upon learning this perk, you imbibe a deadly toxin, taking 150 damage per second. If you survive for 60 seconds, you receive 3 perk points and a permanent 25% bonus to all potions and poisons you make.'],
          req: [100],
          pos: [50, -195],
          deps: [14, 19],
          id: ['00000000']
        }, {
          name: 'N21 - Physician',
          levels: 1,
          desc: ['You may choose a type of beneficial potion: Health, Magicka or Stamina. Potions you mix that restore or fortify the chosen attribute are 50% stronger.'],
          req: [20],
          pos: [80, -10],
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
          levels: 2,
          desc: ['Armor rating of Light Armor increased by 20%. You gain a small amount of Light Armor experience when wearing at least two pieces of Light Armor in combat.','Armor rating of Light Armor increased by 40%. You gain a small amount of Light Armor experience when wearing at least two pieces of Light Armor in combat.'],
          req: [0, 20],
          pos: [0, 0],
          id: ['00000000', '00000000']
        }, {
          name: 'N1 Annoying Mosquitos',
          levels: 2,
          desc: ['You take 10% less attack damage from enemies with full Health if wearing all Light Armor.','You take 20% less attack damage from enemies with full Health if wearing all Light Armor.'],
          req: [20,40],
          pos: [10, -10],
          deps: [0],
          id: ['00000000', '00000000']
        }, {
          name: 'N2 As a Leaf',
          levels: 1,
          desc: ['While sprinting in Light Armor, you cannot be staggered and take 50% less damage from power attacks.'],
          req: [30],
          pos: [10, -10],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N3 Iron Fist',
          levels: 1,
          desc: ['Increases unarmed damage by 5% of your current Stamina, and you gain Light Armor experience when using unarmed attacks in combat. Requires two free hands.','Increases unarmed damage by 15% of your current Stamina, and you gain Light Armor experience when using unarmed attacks in combat. Requires two free hands.','Increases unarmed damage by 25% of your current Stamina, and you gain Light Armor experience when using unarmed attacks in combat. Requires two free hands.'],
          req: [20,40,60],
          pos: [10, -10],
          deps: [0],
          id: ['00000000', '00000000', '00000000']
        }, {
          name: 'N4 Sweeping Wind',
          levels: 1,
          desc: ['Unarmed power attacks do 25% more damage. Additionally, if your movement speed is increased, they do 2% damage per 1% movement speed. Requires two free hands.'],
          req: [40],
          pos: [10, -10],
          deps: [3],
          id: ['00000000']
        }, {
          name: 'N5 Rushing Tide',
          levels: 1,
          desc: ['Unarmed attacks grant 10% increased Stamina regeneration and 5% movement speed for 8 seconds. This effect stacks. Requires two free hands.'],
          req: [50],
          pos: [10, -10],
          deps: [4],
          id: ['00000000']
        }, {
          name: 'N6 Hissing Dragon',
          levels: 1,
          desc: ['You may choose a damage type (fire, frost, shock, poison, disease or sun). Unarmed attacks unleash a shockwave that deals the chosen damage type to all targets in front of you. Requires two free hands. Does not activate while sneaking.'],
          req: [70],
          pos: [10, -10],
          deps: [5],
          id: ['00000000']
        }, {
          name: 'N7 Breaking Waves',
          levels: 1,
          desc: ['Unarmed attacks have 15% chance of a critical strike that deals critical damage equal to 40% of your current Stamina. If you are affected by Wardancer, every hit is a critical strike. Requires two free hands.'],
          req: [90],
          pos: [10, -10],
          deps: [5],
          id: ['00000000']
        }, {
          name: 'N8 Light Armor Fit',
          levels: 1,
          desc: ['Armor rating of Light Armor increased by 25% if wearing all Light Armor.'],
          req: [30],
          pos: [10, -10],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N9 Unhindered',
          levels: 1,
          desc: ['Light Armor weighs nothing and doesn`t slow you down when worn.'],
          req: [50],
          pos: [10, -10],
          deps: [4, 8],
          id: ['00000000']
        }, {
          name: 'N10 Into the Maelstrom',
          levels: 1,
          desc: ['You take 10% less attack damage when fighting more than one enemy if wearing all Light Armor.'],
          req: [60],
          pos: [10, -10],
          deps: [9],
          id: ['00000000']
        }, {
          name: 'N11 Keen Senses',
          levels: 1,
          desc: ['You no longer need to wear a helmet to benefit from perks that require "wearing all Light Armor". If you are not wearing a helmet, Light Armor pieces have 20% increased armor rating.'],
          req: [40],
          pos: [10, -10],
          deps: [8],
          id: ['00000000']
        }, {
          name: 'N12 Evasive Leap',
          levels: 1,
          desc: ['If wearing all Light Armor, jump in combat to cause all incoming attacks and spells to miss for 1 second. This effect has a 5 second cooldown.'],
          req: [60],
          pos: [10, -10],
          deps: [8],
          id: ['00000000']
        }, {
          name: 'N13 Wild and Free',
          levels: 1,
          desc: ['While sprinting in Light Armor, you take 50% less damage from attacks.'],
          req: [80],
          pos: [10, -10],
          deps: [12],
          id: ['00000000']
        }, {
          name: 'N14 Initiative',
          levels: 2,
          desc: ['When you enter combat, if wearing all Light Armor, regenerate up to 10% of your maximum Stamina per second. This bonus gradually diminishes over the course of 15 seconds.','When you enter combat, if wearing all Light Armor, regenerate up to 20% of your maximum Stamina per second. This bonus gradually diminishes over the course of 15 seconds.'],
          req: [40,60],
          pos: [10, -10],
          deps: [8],
          id: ['00000000','00000000']
        }, {
          name: 'N15 Lightning Strike',
          levels: 1,
          desc: ['Your critical strikes deal 75% more critical damage for 10 seconds after entering combat while wearing all Light Armor.'],
          req: [90],
          pos: [10, -10],
          deps: [14],
          id: ['00000000']
        }, {
          name: 'N16 Fight or Flight',
          levels: 1,
          desc: ['When struck by an unblocked attack or spell in combat, an adrenaline rush regenerates 5% of your maximum Stamina per second for 6 seconds if wearing all Light Armor.'],
          req: [70],
          pos: [10, -10],
          deps: [14],
          id: ['00000000']
        }, {
          name: 'N17 Survival Instinct',
          levels: 1,
          desc: ['When you get struck by an unblocked attack or hostile spell in combat, gain 10% movement speed for 6 seconds if wearing all Light Armor.'],
          req: [80],
          pos: [10, -10],
          deps: [16],
          id: ['00000000']
        }, {
          name: 'N18 Windrunner',
          levels: 1,
          desc: ['Move 10% faster in combat if wearing all Light Armor.'],
          req: [50],
          pos: [10, -10],
          deps: [14],
          id: ['00000000']
        }, {
          name: 'N19 Wardancer',
          levels: 1,
          desc: ['Your agility enables you to strike more effectively, granting 20% more attack damage and critical damage if wearing all Light Armor. This effect is lost for 6 seconds whenever you get struck by an unblocked attack or a hostile spell in combat.'],
          req: [70],
          pos: [10, -10],
          deps: [18],
          id: ['00000000']
        }, {
          name: 'N20 Spelldancer',
          levels: 1,
          desc: ['Wardancer also improves elemental (fire, frost and shock) spells and effects by the same amount.'],
          req: [80],
          pos: [10, -10],
          deps: [19],
          id: ['00000000']
        }, {
          name: 'N21 Glancing Blows',
          levels: 1,
          desc: ['You take 30% less damage from blocked attacks while Wardancer is active. When you lose the Wardancer effect due to an unblocked attack, it also deals 30% less damage.'],
          req: [90],
          pos: [10, -10],
          deps: [19],
          id: ['00000000']
        }, {
          name: 'N22 Tempting Fate',
          levels: 1,
          desc: ['You gain 20% movement speed if you are not blocking during an enemy`s power attack. If the power attack misses, the effect lasts until combat ends or until you get struck by a power attack.'],
          req: [100],
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
          levels: 2,
          desc: ['Sneaking is 15% more effective. Sneak success depends on visibility (movement and light level), sound (movement and armor weight), skill level and distance.','Sneaking is 30% more effective. Sneak success depends on visibility (movement and light level), sound (movement and armor weight), skill level and distance.'],
          req: [0, 20],
          pos: [0, 0],
          id: ['00000000', '00000000']
        }, {
          name: 'N1 - Demolition Job',
          levels: 1,
          desc: ['All Destruction spells and scrolls are 1% more powerful per level of Sneak if the target is not detecting the caster (2% for rune spells).'],
          req: [30],
          pos: [45, -15],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N2 - Spot Detection',
          levels: 1,
          desc: ['Grants the "Spot Detection" power. At will, outlines all humanoids within 150 feet that are detecting you with a green glow. Lasts 30 seconds.'],
          req: [30],
          pos: [-45, -10],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N3 - Light Foot',
          levels: 1,
          desc: ['You won`t trigger pressure plates.'],
          req: [50],
          pos: [-75, -70],
          deps: [2],
          id: ['00000000']
        }, {
          name: 'N4 - Sneak Attack',
          levels: 1,
          desc: ['Sneak attacks with one-handed weapons deal 100% more damage. Sneak attacks with any other weapon or fists deal 25% more damage.'],
          req: [20],
          pos: [45, -50],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N5 - Assasin`s Blade',
          levels: 1,
          desc: ['Sneak attacks with daggers deal 1% more damage per level of Sneak.'],
          req: [40],
          pos: [70, -85],
          deps: [4],
          id: ['00000000']
        }, {
          name: 'N6 - Backstab',
          levels: 2,
          desc: ['You deal 25% more damage and critical damage with daggers when striking a target from behind.','You deal 50% more damage and critical damage with daggers when striking a target from behind.'],
          req: [50,70],
          pos: [60, -110],
          deps: [5],
          id: ['00000000', '00000000']
        }, {
          name: 'N7 - Problem Solver',
          levels: 1,
          desc: ['Sneak attacks deal 10% more damage for each 200 points of Health the target has, up to 50% more damage.'],
          req: [80],
          pos: [40, -135],
          deps: [4],
          id: ['00000000']
        }, {
          name: 'N8 - Cloak and Dagger',
          levels: 1,
          desc: ['Breaking invisibility with a power attack is a guaranteed critical strike that deals 50% more critical damage.'],
          req: [90],
          pos: [55, -155],
          deps: [7],
          id: ['00000000']
        }, {
          name: 'N9 - Laughing Ghost',
          levels: 1,
          desc: ['Grants the "Laughing Ghost" power. At will, while sneaking, teleport through the shadows behind a target to attempt a sneak power attack with your right weapon that deals double sneak attack damage. The target must be out of combat.'],
          req: [100],
          pos: [45, -175],
          deps: [7],
          id: ['00000000']
        }, {
          name: 'N10 - Tripwire',
          levels: 1,
          desc: ['Grants the "Tripwire" power. At will, places a tripwire in front of you for 120 seconds. It snaps when tripped, knocking all targets hit by it to the floor.'],
          req: [20],
          pos: [-50, -45],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N11 - Whiplash',
          levels: 1,
          desc: ['Tripwire also reduces armor rating by 1000 points for 5 seconds.'],
          req: [40],
          pos: [-40, -85],
          deps: [10],
          id: ['00000000']
        }, {
          name: 'N12 - Silent Roll',
          levels: 1,
          desc: ['Sprinting while sneaking executes a silent forward roll.'],
          req: [30],
          pos: [-25, -60],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N13 - Dynamic Entry',
          levels: 1,
          desc: ['Performing a silent roll increases your weapon damage by 40% and unarmed damage by 40 points for 3 seconds.'],
          req: [40],
          pos: [-15, -95],
          deps: [12],
          id: ['00000000']
        }, {
          name: 'N14 - Dodge Roll',
          levels: 1,
          desc: ['Performing a silent roll makes you ethereal for 1 second, causing all incoming attacks and spells to miss.'],
          req: [60],
          pos: [-25, -125],
          deps: [13],
          id: ['00000000']
        }, {
          name: 'N15 - Backup Plan',
          levels: 1,
          desc: ['After being out of combat for at least 5 seconds, entering combat will place a Tripwire behind you for 60 seconds. This does not count against the limit of one Tripwire at a time.'],
          req: [70],
          pos: [-50, -140],
          deps: [11, 14],
          id: ['00000000']
        }, {
          name: 'N16 - Greased Lightning',
          levels: 1,
          desc: ['A hidden bottle enables you to leave a trail of grease whenever you perform a silent roll in combat. The grease lasts for 10 seconds and staggers running enemies, while sprinting enemies slip and fall to the ground.'],
          req: [90],
          pos: [-35, -160],
          deps: [14],
          id: ['00000000']
        }, {
          name: 'N17 - Fog of War',
          levels: 1,
          desc: ['Sneaking is 15% more effective against targets that are in combat with you, or 30% if they are in combat with someone else.'],
          req: [30],
          pos: [0, -50],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N18 - Infiltrator',
          levels: 1,
          desc: ['Your footsteps and equipped armor make 75% less noise when sneaking.'],
          req: [40],
          pos: [20, -70],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N19 - Right Behind You',
          levels: 1,
          desc: ['You are adept at hiding in your target`s blind spot. Sneaking is 15% more effective within 30 feet and 30% more effective within 15 feet.'],
          req: [50],
          pos: [10, -100],
          deps: [17, 18],
          id: ['00000000']
        }, {
          name: 'N20 - Disengage',
          levels: 1,
          desc: ['Grants the "Disengage" power. Once a day, all enemies within 100 feet who are attacking you or searching for you instantly stop and resume their normal activities.'],
          req: [60],
          pos: [-5, -115],
          deps: [19],
          id: ['00000000']
        }, {
          name: 'N21 - Clean Escape',
          levels: 1,
          desc: ['When you stand still for 8 seconds while sneaking, enemies within 150 feet no longer search for you.'],
          req: [70],
          pos: [30, -120],
          deps: [19],
          id: ['00000000']
        }, {
          name: 'N22 - Smokescreen',
          levels: 1,
          desc: ['Grants the "Smokescreen" power. Once a day, creates a 35 foot cloud for 180 seconds that blinds those in the cloud, preventing them from seeing sneaking targets. Sneak attacks against them deal 50% more damage.'],
          req: [60],
          pos: [20, -130],
          deps: [19],
          id: ['00000000']
        }, {
          name: 'N23 - Party Starter',
          levels: 1,
          desc: ['When you gain invisibility, places a barrel of flammable booze at your location. When you lose invisibility, it explodes, dealing fire damage equal to 200% of your Sneak skill level and staggering targets. This effect has a 15 second cooldown.'],
          req: [80],
          pos: [20, -155],
          deps: [22],
          id: ['00000000']
        }, {
          name: 'N24 - Behind Enemy Lines',
          levels: 1,
          desc: ['Sneaking is 15% more effective for each enemy within 100 feet that is not detecting you.'],
          req: [80],
          pos: [-5, -150],
          deps: [14, 19],
          id: ['00000000']
        }, {
          name: 'N25 - Shadow Warrior',
          levels: 1,
          desc: ['Entering sneak mode in combat grants 2 seconds of invisibility, briefly leaving combat and forcing distant opponents to search for you. This effect has an 8 second cooldown.'],
          req: [90],
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
          levels: 2,
          desc: ['Weaker locks are easier to pick.','All locks are easier to pick.'],
          req: [0, 20],
          pos: [0, 0],
          id: ['00000000', '00000000']
        }, {
          name: 'N1 Game of Fate',
          levels: 1,
          desc: ['There are 5 Dragons of Fate hidden in random locked containers in Skyrim. Each grants 15000 gold and a free perk point when removed from its container. The name of the container changes to indicate the treasure inside.'],
          req: [20],
          pos: [10, -10],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N2 Lockdown',
          levels: 1,
          desc: ['Activate a hostile automaton to lockpick your way into its engine. Lock difficulty is based on its current Health. Pick its lock within 15 seconds to reduce its Health to 1 and shut it down for 60 seconds. If you fail, you can`t try again for 30 seconds.'],
          req: [30],
          pos: [10, -10],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N3 Hotwire',
          levels: 1,
          desc: ['Activate an automaton under Lockdown to lockpick its brain. Succeed within 15 seconds to hack the automaton, forcing it to follow you and fight for you. If you fail, you can`t try again for 30 seconds. You can only have one Hotwired Automaton at a time.'],
          req: [50],
          pos: [10, -10],
          deps: [2],
          id: ['00000000']
        }, {
          name: 'N4 Percussive Maintenance',
          levels: 1,
          desc: ['Your Hotwired Automaton moves 30% faster and attacks 20% faster. Hitting your Hotwired Automaton with a mace or warhammer repairs it 150 points (or 300 points on a power attack) and further increases attack speed by 50% for 10 seconds.'],
          req: [90],
          pos: [10, -10],
          deps: [3],
          id: ['00000000']
        }, {
          name: 'N5 Wax Key',
          levels: 1,
          desc: ['Gives you a copy of a picked lock`s key if it has one.'],
          req: [30],
          pos: [10, -10],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N6 Locksmith',
          levels: 1,
          desc: ['Pick starts much closer to the lock opening position.'],
          req: [40],
          pos: [10, -10],
          deps: [5],
          id: ['00000000']
        }, {
          name: 'N7 Seen This Before',
          levels: 1,
          desc: ['Your skill at lockpicking is such that you may bypass locks of Expert or lower level without using a key or manually picking the lock. After picking or bypassing at least 100 locks, you gain 2 perk points.'],
          req: [100],
          pos: [10, -10],
          deps: [6],
          id: ['00000000']
        }, {
          name: 'N8 Robber`s Eye',
          levels: 1,
          desc: ['When you enter a dwelling you don`t own, illuminates a locked container for 120 seconds. During this time, it contains valuable items (based on your Lockpicking skill and the difficulty of its lock). This can only occur once every 12-60 ingame hours.'],
          req: [30],
          pos: [10, -10],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N9 Gone in Fifteen Seconds',
          levels: 1,
          desc: ['Taking 15 seconds or less to pick the lock on a container illuminated by Robber`s Eye improves the added treasure by an average of 50% based on the level of the lock and resets the cooldown of Robber`s Eye.'],
          req: [40],
          pos: [10, -10],
          deps: [8],
          id: ['00000000']
        }, {
          name: 'N10 Golden Touch',
          levels: 1,
          desc: ['Find 20-100 more gold in many dungeon chests and 2-10 more gold in some corpses, urns, etc.'],
          req: [60],
          pos: [10, -10],
          deps: [9],
          id: ['00000000']
        }, {
          name: 'N11 Nose for Treasure',
          levels: 1,
          desc: ['You may choose an item type (gold, jewelry, books, ingredients, potions, ingots, weapons, armor, scrolls). Containers illuminated by Robber`s Eye are three times more likely to contain items of your chosen type over other types.'],
          req: [50],
          pos: [10, -10],
          deps: [8],
          id: ['00000000']
        }, {
          name: 'N12 Dungeoneer',
          levels: 1,
          desc: ['Robber`s Eye also works in dungeons and lasts three times as long.'],
          req: [60],
          pos: [10, -10],
          deps: [9, 11],
          id: ['00000000']
        }, {
          name: 'N13 Treasure Hunter',
          levels: 1,
          desc: ['Increases the chance of finding an additional weapon or armor item in many dungeon chests from 10% to 15%.'],
          req: [90],
          pos: [10, -10],
          deps: [10, 12],
          id: ['00000000']
        }, {
          name: 'N14 Bear Traps',
          levels: 1,
          desc: ['Able to pick up Bear Traps or create them at a Forge or Anvil, and drop them from your inventory to place them. The teeth of placed Bear Traps deal 2 points of damage per level of Lockpicking. You can only pick up and carry two Bear Traps at a time.'],
          req: [20],
          pos: [10, -10],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N15 Lockjaw',
          levels: 1,
          desc: ['Your Bear Traps stagger victims struck by the teeth, reducing their armor rating by 10 points per level of Lockpicking for 5 seconds.'],
          req: [40],
          pos: [10, -10],
          deps: [14],
          id: ['00000000']
        }, {
          name: 'N16 Bait',
          levels: 1,
          desc: ['Grants the "Bait" power. At will, lures the nearest hostile target within 75 feet to the location of the nearest Bear Trap placed within 50 feet (not during combat or conversation). Lasts 30 seconds.'],
          req: [70],
          pos: [10, -10],
          deps: [15],
          id: ['00000000']
        }, {
          name: 'N17 The Revenge',
          levels: 1,
          desc: ['You can pick up and carry 3 Bear Traps.'],
          req: [80],
          pos: [10, -10],
          deps: [16],
          id: ['00000000']
        }, {
          name: 'N18 Big Game Hunter',
          levels: 1,
          desc: ['Placed Bear Traps are 20% bigger and more likely to successfully hit small or fast moving targets. They also rearm themselves 2.5 seconds after being triggered.'],
          req: [50],
          pos: [10, -10],
          deps: [15],
          id: ['00000000']
        }, {
          name: 'N19 Bushwhack',
          levels: 1,
          desc: ['If the victim of your Bear Trap is not detecting you, the trap is five times as effective.'],
          req: [80],
          pos: [10, -10],
          deps: [16, 18],
          id: ['00000000']
        }, {
          name: 'N20 Dragon`s Teeth',
          levels: 1,
          desc: ['When placing a Bear Trap, you may choose to add an extra effect: Poison, Drain Magicka, Drain Stamina, Slow, Banish or Turn Undead. This effect is triggered when a victim is struck by the teeth and takes damage.'],
          req: [100],
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
          levels: 2,
          desc: ['Adds 20% to your pickpocket chance and increases carry weight by 50 points.','Adds 40% to your pickpocket chance and increases carry weight by 100 points.'],
          req: [0, 20],
          pos: [0, 0],
          id: ['00000000', '00000000']
        }, {
          name: 'N1 Trained Rabbit',
          levels: 1,
          desc: ['Grants the "Trained Rabbit" power. At will, silently sends out a trained rabbit to lead you to the nearest loose valuable item (armor, weapon, key, book, soul gem, ingredient). It then returns to you.'],
          req: [20],
          pos: [10, -10],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N2 Blood Money',
          levels: 1,
          desc: ['You find 10-100 more gold when looting humanoid corpses you have slain in an especially violent fashion (with an attack that dealt at least 100 more damage than their remaining Health or a killmove).'],
          req: [20],
          pos: [10, -10],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N3 Death`s Emperor',
          levels: 2,
          desc: ['A cursed septim appears in your inventory. When someone else is in possession of the coin, your attacks deal 100% more damage and critical damage to them.','A cursed septim appears in your inventory. When someone else is in possession of the coin, your attacks deal 200% more damage and critical damage to them.'],
          req: [40, 60],
          pos: [10, -10],
          deps: [0],
          id: ['00000000', '00000000']
        }, {
          name: 'N4 Doomed to Plunder',
          levels: 1,
          desc: ['Killing a victim in possession of the Death`s Emperor grants 100-300 more gold.'],
          req: [70],
          pos: [10, -10],
          deps: [3],
          id: ['00000000']
        }, {
          name: 'N5 Mutiny',
          levels: 1,
          desc: ['Grants the "Mutiny" power. At will, activates the curse of the Death`s Emperor, causing whoever is in possession of the coin to attack randomly for 30 seconds. Any deaths resulting from this can`t be traced back to you.'],
          req: [90],
          pos: [10, -10],
          deps: [4],
          id: ['00000000']
        }, {
          name: 'N6 Theif`s Eye',
          levels: 1,
          desc: ['When you enter a major city, illuminates a random citizen on the streets for 300 seconds. If you interact with the target during this time, they will carry valuable items (based on your Pickpocket skill). This can only occur once every 12-60 ingame hours.'],
          req: [30],
          pos: [10, -10],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N7 Thief`s Luck',
          levels: 1,
          desc: ['You may choose an item type (gold, jewelry, books, ingredients, potions, ingots, scrolls). Those illuminated by Thief`s Eye are three times more likely to carry items of your chosen type over other types.'],
          req: [50],
          pos: [10, -10],
          deps: [6],
          id: ['00000000']
        }, {
          name: 'N8 Crime Wave',
          levels: 1,
          desc: ['Shortly after you pickpocket or speak with the target illuminated by Thief`s Eye, a new victim is illuminated, up to 4 times in a row.'],
          req: [80],
          pos: [10, -10],
          deps: [7],
          id: ['00000000']
        }, {
          name: 'N9 Cutpurse',
          levels: 1,
          desc: ['Adds 25% to your chance to pickpocket gold, keys and jewelry.'],
          req: [30],
          pos: [10, -10],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N10 Brotherhood Cocktail',
          levels: 1,
          desc: ['Silently harm enemies by placing poisons in their pockets while pickpocketing.'],
          req: [40],
          pos: [10, -10],
          deps: [9],
          id: ['00000000']
        }, {
          name: 'N11 Trickster',
          levels: 1,
          desc: ['Can pickpocket equipped weapons. If the target is sleeping, can pickpocket any equipped item.'],
          req: [70],
          pos: [10, -10],
          deps: [10],
          id: ['00000000']
        }, {
          name: 'N12 On the Run',
          levels: 1,
          desc: ['After you successfully pickpocket someone, sneaking is 200% more effective and movement speed is increased by 25% for 10 seconds.'],
          req: [40],
          pos: [10, -10],
          deps: [9],
          id: ['00000000']
        }, {
          name: 'N13 Lawless World',
          levels: 1,
          desc: ['Petty crimes are slowly forgotten, allowing your bounties for non-violent crimes to decay at a rate of 50% of your Pickpocket skill level each day.'],
          req: [50],
          pos: [10, -10],
          deps: [9],
          id: ['00000000']
        }, {
          name: 'N14 Stalk the Prey',
          levels: 1,
          desc: ['Preparing to pickpocket (sneaking behind a victim with the pickpocket message displayed) for at least 10 seconds adds 20% to your chance to pickpocket any item.'],
          req: [60],
          pos: [10, -10],
          deps: [12,13],
          id: ['00000000']
        }, {
          name: 'N15 You Saw Nothing',
          levels: 1,
          desc: ['Grants the "You Saw Nothing" power. Once a day, distract a target and others in a 40 foot radius. For 45 seconds, you will not receive a bounty if they are the only witness of your crimes. Does not prevent them from defending themselves.'],
          req: [80],
          pos: [10, -10],
          deps: [14],
          id: ['00000000']
        }, {
          name: 'N16 Robbed Blind',
          levels: 1,
          desc: ['Adds the Thief`s Eye effect to You Saw Nothing.'],
          req: [90],
          pos: [10, -10],
          deps: [15],
          id: ['00000000']
        }, {
          name: 'N17 Dragon Hoard',
          levels: 1,
          desc: ['Whenever you sleep with 50000 or more gold in your inventory, you may choose to spend it to purchase a perk point.'],
          req: [100],
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
