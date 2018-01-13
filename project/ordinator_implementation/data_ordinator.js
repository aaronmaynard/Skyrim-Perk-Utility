/**
This document contains all of the perk information.  To create a new note, copy the node labeled
'Node X'.  Follow the example as given by the first perk, in the first perk tree.  Each perk tree
is labeled accordingly.  Do not change this as this is how the scripts display the information to
the canvas on the website.  If you have any questions, leave a comment on the issue documentation
on GitHub.  https://github.com/aaronmaynard/Skyrim-Perk-Utility
**/

(function() {

  window.perkTrees = [
    {
      name: 'Alchemy Ordinator',	// The name that shows on the top of the perk tree, as well as in the branch list.
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
          name: 'N0 - Illusion Mastery',
          levels: 2,
          desc: ['Illusion spells cost 35% less Magicka, Illusion spells last 0.5% longer per level of Illusion, and mind affecting Illusion spells (Calm, Fear, Frenzy, Rally) are 0.1 points stronger per level of Illusion.','Illusion spells cost 50% less Magicka, Illusion spells last 1% longer per level of Illusion, and mind affecting Illusion spells (Calm, Fear, Frenzy, Rally) are 0.2 points stronger per level of Illusion.'],
          req: [0, 20],
          pos: [0, 0],
          id: ['00000000', '00000000']
        }, {
          name: 'N1 - Illusion Dual Casting',
          levels: 1,
          desc: ['Dual casting an Illusion spell empowers it, increasing effectiveness and cost.'],
          req: [20],
          pos: [10, -10],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N2 - Quiet Before the Storm',
          levels: 2,
          desc: ['All spells you cast from any school of magic are silent to others.','All spells you cast from any school of magic, as well as all shouts, are silent to others.'],
          req: [40, 60],
          pos: [10, -10],
          deps: [0],
          id: ['00000000', '00000000']
        }, {
          name: 'N3 - Night Eye',
          levels: 1,
          desc: ['Grants the "Night Eye" power. At will, grants improved night vision for 120 seconds.'],
          req: [30],
          pos: [10, -10],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N4 - Ghost of the Tenth Eye',
          levels: 1,
          desc: ['Sneaking while under the effect of the Vision of the Tenth Eye spell will summon a disembodied eye under your control. The eye has 1 point of Health, but is invisible and silent. You must know the Vision of the Tenth Eye spell to learn this perk.'],
          req: [90],
          pos: [10, -10],
          deps: [3],
          id: ['00000000']
        }, {
          name: 'N5 - Dream Theif',
          levels: 1,
          desc: ['Activate sleeping victims to steal their dream, increasing the effectiveness of your Illusion spells by 50% for 3600 seconds. Chance to fail and alert the victim, based on Illusion skill.'],
          req: [20],
          pos: [10, -10],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N6 - Kindred Mage',
          levels: 1,
          desc: ['Mind affecting spells and effects are 15 points stronger (or 30 points if you are the same race as the target).'],
          req: [40],
          pos: [10, -10],
          deps: [5],
          id: ['00000000']
        }, {
          name: 'N7 - Fickle Fate',
          levels: 1,
          desc: ['Mind affecting spells and effects cast on others are between 1 and 40 points stronger, chosen at random.'],
          req: [50],
          pos: [10, -10],
          deps: [6],
          id: ['00000000']
        }, {
          name: 'N8 - Master of the Mind',
          levels: 1,
          desc: ['Mind affecting spells (Calm, Fear, Frenzy, Rally) and Commanding Presence also work on undead, daedra and automatons.'],
          req: [60],
          pos: [10, -10],
          deps: [7],
          id: ['00000000']
        }, {
          name: 'N9 - Dream Charm',
          levels: 1,
          desc: ['Activate sleeping victims to project yourself into their dream, improving their disposition towards you. High disposition may earn you quests, discounts and gifts. Chance to fail and alert the victim, based on Illusion skill.'],
          req: [70],
          pos: [10, -10],
          deps: [6],
          id: ['00000000']
        }, {
          name: 'N10 - Dream Geas',
          levels: 1,
          desc: ['Activate sleeping victims to send a dream that compels them to fight at your side until released. You can only have one Dream Thrall at a time. Chance to fail and alert the victim, based on Illusion skill.'],
          req: [90],
          pos: [10, -10],
          deps: [9],
          id: ['00000000']
        }, {
          name: 'N11 - Commanding Presence',
          levels: 1,
          desc: ['In combat, you radiate an aura of mystical nobility that touches allied creatures and people within 40 feet. Those affected gain 20% extra attack damage and have 20% chance of a critical strike.'],
          req: [30],
          pos: [10, -10],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N12 - Crown of the False King',
          levels: 1,
          desc: ['Commanding Presence also increases armor by 80 points and magic resistance by 20%.'],
          req: [40],
          pos: [10, -10],
          deps: [11],
          id: ['00000000']
        }, {
          name: 'N13 - Imperious Splendor',
          levels: 1,
          desc: ['Commanding Presence and Crown of the False King are twice as powerful as long as you remain above 75% Health.'],
          req: [60],
          pos: [10, -10],
          deps: [12],
          id: ['00000000']
        }, {
          name: 'N14 - Protect Your God',
          levels: 1,
          desc: ['When struck by a weapon, may compel a nearby ally affected by Commanding Presence to engage your attacker, dealing 250% extra attack damage for 5 seconds.'],
          req: [80],
          pos: [10, -10],
          deps: [13],
          id: ['00000000']
        }, {
          name: 'N15 - Imposing Presence',
          levels: 1,
          desc: ['You radiate an aura of mystical charisma that touches all within 40 feet. Any Illusion spell you cast on those affected is 25% more powerful and lasts 30% longer.'],
          req: [30],
          pos: [10, -10],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N16 - Shadow Refuge',
          levels: 1,
          desc: ['While affected by an invisibility spell or effect, you take 35% less damage from attacks and sneaking is 15% better.'],
          req: [70],
          pos: [10, -10],
          deps: [16],
          id: ['00000000']
        }, {
          name: 'N17 - Wilting',
          levels: 1,
          desc: ['Those affected by a Calm spell or effect within the radius of Imposing Presence lose 200 points of armor and 50% magic resistance.'],
          req: [40],
          pos: [10, -10],
          deps: [15],
          id: ['00000000']
        }, {
          name: 'N18 - Neverworld',
          levels: 1,
          desc: ['Those affected by a Calm spell or effect within the radius of Imposing Presence are enraptured by a lotus dream from which they may refuse to return to reality. When the Calm is broken due to an attack, they may become Calmed again for 30 seconds.'],
          req: [70],
          pos: [10, -10],
          deps: [17],
          id: ['00000000']
        }, {
          name: 'N19 - Terror',
          levels: 1,
          desc: ['Those affected by a Fear spell or effect within the radius of Imposing Presence drop their weapon.'],
          req: [50],
          pos: [10, -10],
          deps: [17],
          id: ['00000000']
        }, {
          name: 'N20 - Soulcrusher',
          levels: 1,
          desc: ['Feast upon the minds of those affected by a Fear spell or effect within the radius of Imposing Presence, absorbing 25 points of Magicka per second.'],
          req: [80],
          pos: [10, -10],
          deps: [19],
          id: ['00000000']
        }, {
          name: 'N21 - Pandemonium',
          levels: 1,
          desc: ['Those affected by a Frenzy spell or effect within the radius of Imposing Presence gain 50% extra attack damage.'],
          req: [60],
          pos: [10, -10],
          deps: [19],
          id: ['00000000']
        }, {
          name: 'N22 - Nightfall',
          levels: 1,
          desc: ['Those affected by a Frenzy spell or effect within the radius of Imposing Presence are consumed by battle hunger when there are no other enemies remaining, taking 40 points of damage per second.'],
          req: [90],
          pos: [10, -10],
          deps: [21],
          id: ['00000000']
        }, {
          name: 'N23 - The Reaper Comes',
          levels: 1,
          desc: ['Activate any non-essential humanoid (only) under the effect of a Calm spell to send a wraith to slay the target within 15 seconds. This counts as an assault, if you get seen. This effect has a 180 second cooldown and can only affect one target at a time.'],
          req: [70],
          pos: [10, -10],
          deps: [17],
          id: ['00000000']
        }, {
          name: 'N24 - Lamb to the Slaughter',
          levels: 1,
          desc: ['Activate any humanoid (only) under the effect of a Fear spell to compel the target to stand motionless for 30 seconds. Your attacks against this target ignore armor. This effect has a 180 second cooldown and can only affect one target at a time.'],
          req: [80],
          pos: [10, -10],
          deps: [23],
          id: ['00000000']
        }, {
          name: 'N25 - Heavy Weighs the Tapestry',
          levels: 1,
          desc: ['Activate any humanoid (only) under the effect of a Frenzy spell to incapacitate the target with magical exhaustion for 30 seconds and drain 500 points of Magicka and Stamina. This effect has a 180 second cooldown and can only affect one target at a time.'],
          req: [90],
          pos: [10, -10],
          deps: [24],
          id: ['00000000']
        }, {
          name: 'N26 - Entice Barter',
          levels: 1,
          desc: ['Activate any target under the effect of a Calm spell to initiate trade.'],
          req: [30],
          pos: [10, -10],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N27 - Nemesis',
          levels: 1,
          desc: ['Activate any hostile creature or humanoid in combat to summon an illusion of the target with 1% extra attack damage per Illusion level. The illusion relentlessly attacks the target for 30 seconds. This effect has a 180 second cooldown.'],
          req: [50],
          pos: [10, -10],
          deps: [15, 26],
          id: ['00000000']
        }, {
          name: 'N28 - Blind Guardian',
          levels: 1,
          desc: ['Activate any non-hostile creature or humanoid in combat to summon an illusion of the target. The illusion fights for the target for 60 seconds and the target won`t flee for its duration. This effect has a 300 second cooldown.'],
          req: [90],
          pos: [10, -10],
          deps: [27],
          id: ['00000000']
        }, {
          name: 'N29 - Wraithwalker',
          levels: 1,
          desc: ['After using an Activate perk (Blind Guardian, Heavy Weighs the Tapestry, Lamb to the Slaughter, Nemesis, The Reaper Comes), Illusion spells are 50% more powerful and last 50% longer for 10 seconds. The cooldown of Activate perks ends after 8 seconds out of combat.'],
          req: [100],
          pos: [10, -10],
          deps: [25, 28],
          id: ['00000000']
        }
      ]
    }, {
      name: 'Conjuration',
      cname: 'conjuration',
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
      name: 'Destruction',
      cname: 'destruction',
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
      name: 'Restoration',
      cname: 'restoration',
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
      name: 'Alteration',
      cname: 'alteration',
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
      name: 'Enchanting',
      cname: 'enchanting',
      perks: [
        {
          name: 'N0 - Enchanting Mastery',
          levels: 2,
          desc: ['New enchantments are 20% stronger. Soul gems provide 2 extra weapon charge points per level of Enchanting.','New enchantments are 40% stronger. Soul gems provide 4 extra weapon charge points per level of Enchanting.'],
          req: [0, 20],
          pos: [0, 0],
          id: ['00000000', '00000000']
        }, {
          name: 'N1 - Soul Siphon',
          levels: 1,
          desc: ['Death blows with enchanted weapons to creatures, but not people, trap 5% of the victim`s soul, recharging the weapon. Does not apply to staves.'],
          req: [20],
          pos: [10, -10],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N2 - Thunderstruck',
          levels: 1,
          desc: ['Weapon enchantments are 25% more effective when delivered by a power attack (or 50% for a two-handed power attack).'],
          req: [30],
          pos: [10, -10],
          deps: [1],
          id: ['00000000']
        }, {
          name: 'N3 - Spellscribe',
          levels: 1,
          desc: ['Grants the "Spellscribe" power: use it to store the spell you are dual casting. Your power attacks and power bashes unleash the stored spell for free, with a cooldown based on Enchanting skill. Only works with spells that affect other targets.'],
          req: [40],
          pos: [10, -10],
          deps: [1],
          id: ['00000000']
        }, {
          name: 'N4 - Might and Magic',
          levels: 1,
          desc: ['Might and Magic - You are adept at weaving blade and magic. Spells cast with your left hand are 10% more effective if you are wielding a weapon in your right hand. Attacks with a weapon in your right hand deal 10% more damage if you are holding a spell in your left hand.'],
          req: [60],
          pos: [10, -10],
          deps: [3],
          id: ['00000000']
        }, {
          name: 'N5 - Power Echoes',
          levels: 1,
          desc: ['Spellscribe activates twice before going on cooldown.'],
          req: [70],
          pos: [10, -10],
          deps: [3],
          id: ['00000000']
        }, {
          name: 'N6 - Gem Dust',
          levels: 1,
          desc: ['You may choose to destroy a Flawless Gem when you begin the enchanting process and sprinkle its dust on the Arcane Enchanter. New enchantments are 25% stronger when placed upon an item of the type corresponding to the gem.'],
          req: [40],
          pos: [10, -10],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N7 - Preserver',
          levels: 1,
          desc: ['Learning an item`s enchantment does not destroy it.'],
          req: [50],
          pos: [10, -10],
          deps: [6],
          id: ['00000000']
        }, {
          name: 'N8 - Regalia',
          levels: 1,
          desc: ['New enchantments placed upon robes, circlets, hoods and necklaces are 30% stronger.'],
          req: [60],
          pos: [10, -10],
          deps: [6],
          id: ['00000000']
        }, {
          name: 'N9 - Twin Enchantment',
          levels: 1,
          desc: ['Can place two enchantments upon the same item.'],
          req: [80],
          pos: [10, -10],
          deps: [8],
          id: ['00000000']
        }, {
          name: 'N10 - Arcane Nexus',
          levels: 1,
          desc: ['You may choose to upgrade one arcane enchanter to an Arcane Nexus for 2500 gold. New enchantments created at an Arcane Nexus are 25% stronger. Can be "Disassembled" by sneaking, allowing you to upgrade another.'],
          req: [90],
          pos: [10, -10],
          deps: [9],
          id: ['00000000']
        }, {
          name: 'N11 - Miracle',
          levels: 1,
          desc: ['You put your heart and soul into the next item you enchant at an Arcane Nexus, placing up to three enchantments upon it that are 25% stronger. Try as you might, you will never be able to repeat this feat.'],
          req: [100],
          pos: [10, -10],
          deps: [10],
          id: ['00000000']
        }, {
          name: 'N12 - Last Word',
          levels: 3,
          desc: ['Scrolls are 2% more powerful or last 4% longer per level of Enchanting.','Scrolls are 4% more powerful or last 8% longer per level of Enchanting.','Scrolls are 6% more powerful or last 12% longer per level of Enchanting.'],
          req: [20, 40, 60],
          pos: [10, -10],
          deps: [0],
          id: ['00000000', '00000000', '00000000']
        }, {
          name: 'N13 - Staff Channeler',
          levels: 1,
          desc: ['When a staff is equipped, all weapon enchantments drain 25% less charge and you gain a small amount of Enchanting experience in combat.'],
          req: [30],
          pos: [10, -10],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N14 - Secret Keeper',
          levels: 1,
          desc: ['When a staff is equipped in your left hand, your attacks deal 25% more damage and critical damage. When a staff is equipped in your right hand, your spells and scrolls are 25% more effective.'],
          req: [40],
          pos: [10, -10],
          deps: [12, 13],
          id: ['00000000']
        }, {
          name: 'N15 - Staff Recharge',
          levels: 1,
          desc: ['Equipped staves regenerate 5 points of charge per second, up to their charge level when you last equipped them or recharged them with a soul gem.'],
          req: [60],
          pos: [10, -10],
          deps: [13, 14],
          id: ['00000000']
        }, {
          name: 'N16 - Charge Tap',
          levels: 1,
          desc: ['Grants the "Charge Tap" power. At will, drains a quarter of your current weapon charge to restore Health by 15% of the amount drained and Magicka and Stamina by 25% of the amount drained. (If you have two enchanted weapons equipped, the drain is split.)'],
          req: [70],
          pos: [10, -10],
          deps: [15],
          id: ['00000000']
        }, {
          name: 'N17 - Attunement',
          levels: 1,
          desc: ['All enchantments on equipped weapons and armor are 10% more powerful and last 10% longer.'],
          req: [70],
          pos: [10, -10],
          deps: [8, 15],
          id: ['00000000']
        }, {
          name: 'N18 - Heart of the Sun',
          levels: 1,
          desc: ['Use an equipped staff as an energy source, causing it to lose charge at a rate of 15 points per second but making your weapon enchantments 1% more effective per 50 points of charge remaining in the staff. (This effect stacks if more than one staff is equipped.) Sheathe to cancel.'],
          req: [80],
          pos: [10, -10],
          deps: [16, 17],
          id: ['00000000']
        }, {
          name: 'N19 - Flame of Magnus',
          levels: 1,
          desc: ['While casting or concentrating on a staff in your left hand, you may attack with your right hand, dealing 50% more damage and critical damage.'],
          req: [50],
          pos: [10, -10],
          deps: [14],
          id: ['00000000']
        }, {
          name: 'N20 - You Shall Not Pass',
          levels: 1,
          desc: ['Simultaneously (within 1 second) using an enchanted staff in your left hand and striking with an enchanted weapon in your right hand releases a flash of light that staggers enemies and deals damage equal to half your Enchanting skill level.'],
          req: [90],
          pos: [10, -10],
          deps: [16, 19],
          id: ['00000000']
        }
      ]
    }, {
      name: 'Smithing',
      cname: 'smithing',
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
          pos: [-0, -130],
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
          pos: [10, -120],
          deps: [11],
          id: ['00000000']
        }, {
          name: 'N13 - The Pendulum',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [15, -140],
          deps: [12],
          id: ['00000000']
        }, {
          name: 'N14 - Grand Slam',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -155],
          deps: [13],
          id: ['00000000']
        }, {
          name: 'N15 - Deadfall',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [15, -170],
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
          pos: [15, -195],
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
          deps: [26],
          id: ['00000000']
        }
      ]
    }, {
      name: 'One-Handed',
      cname: 'onehanded',
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
        },{
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
          pos: [-5, -150],
          deps: [14, 19],
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
      name: 'Pickpocket',
      cname: 'pickpocket',
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
