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
          name: 'N0 - Illusion Mastery',
          levels: 2,
          desc: ['Illusion spells cost 35% less Magicka, Illusion spells last 0.5% longer per level of Illusion, and mind affecting Illusion spells (Calm, Fear, Frenzy, Rally) are 0.1 points stronger per level of Illusion.','Illusion spells cost 50% less Magicka, Illusion spells last 1% longer per level of Illusion, and mind affecting Illusion spells (Calm, Fear, Frenzy, Rally) are 0.2 points stronger per level of Illusion.'],
          req: [0, 20],
          pos: [0, 0],
          id: ['__0148FE', '__0149D4']
        }, {
          name: 'N1 - Illusion Dual Casting',
          levels: 1,
          desc: ['Dual casting an Illusion spell empowers it, increasing effectiveness and cost.'],
          req: [20],
          pos: [10, -10],
          deps: [0],
          id: ['000153D0']
        }, {
          name: 'N2 - Quiet Before the Storm',
          levels: 2,
          desc: ['All spells you cast from any school of magic are silent to others.','All spells you cast from any school of magic, as well as all shouts, are silent to others.'],
          req: [40, 60],
          pos: [10, -10],
          deps: [0],
          id: ['000581FD', '__01FC99']
        }, {
          name: 'N3 - Night Eye',
          levels: 1,
          desc: ['Grants the "Night Eye" power. At will, grants improved night vision for 120 seconds.'],
          req: [30],
          pos: [10, -10],
          deps: [0],
          id: ['__01B5B3']
        }, {
          name: 'N4 - Ghost of the Tenth Eye',
          levels: 1,
          desc: ['Sneaking while under the effect of the Vision of the Tenth Eye spell will summon a disembodied eye under your control. The eye has 1 point of Health, but is invisible and silent. You must know the Vision of the Tenth Eye spell to learn this perk.'],
          req: [90],
          pos: [10, -10],
          deps: [3],
          id: ['__01F711']
        }, {
          name: 'N5 - Dream Theif',
          levels: 1,
          desc: ['Activate sleeping victims to steal their dream, increasing the effectiveness of your Illusion spells by 50% for 3600 seconds. Chance to fail and alert the victim, based on Illusion skill.'],
          req: [20],
          pos: [10, -10],
          deps: [0],
          id: ['__01DBD7']
        }, {
          name: 'N6 - Kindred Mage',
          levels: 1,
          desc: ['Mind affecting spells and effects are 15 points stronger (or 30 points if you are the same race as the target).'],
          req: [40],
          pos: [10, -10],
          deps: [5],
          id: ['000581E2']
        }, {
          name: 'N7 - Fickle Fate',
          levels: 1,
          desc: ['Mind affecting spells and effects cast on others are between 1 and 40 points stronger, chosen at random.'],
          req: [50],
          pos: [10, -10],
          deps: [6],
          id: ['000581E1']
        }, {
          name: 'N8 - Master of the Mind',
          levels: 1,
          desc: ['Mind affecting spells (Calm, Fear, Frenzy, Rally) and Commanding Presence also work on undead, daedra and automatons.'],
          req: [60],
          pos: [10, -10],
          deps: [7],
          id: ['00059B76']
        }, {
          name: 'N9 - Dream Charm',
          levels: 1,
          desc: ['Activate sleeping victims to project yourself into their dream, improving their disposition towards you. High disposition may earn you quests, discounts and gifts. Chance to fail and alert the victim, based on Illusion skill.'],
          req: [70],
          pos: [10, -10],
          deps: [6],
          id: ['__01F18E']
        }, {
          name: 'N10 - Dream Geas',
          levels: 1,
          desc: ['Activate sleeping victims to send a dream that compels them to fight at your side until released. You can only have one Dream Thrall at a time. Chance to fail and alert the victim, based on Illusion skill.'],
          req: [90],
          pos: [10, -10],
          deps: [9],
          id: ['__01E143']
        }, {
          name: 'N11 - Commanding Presence',
          levels: 1,
          desc: ['In combat, you radiate an aura of mystical nobility that touches allied creatures and people within 40 feet. Those affected gain 20% extra attack damage and have 20% chance of a critical strike.'],
          req: [30],
          pos: [10, -10],
          deps: [0],
          id: ['__01F708']
        }, {
          name: 'N12 - Crown of the False King',
          levels: 1,
          desc: ['Commanding Presence also increases armor by 80 points and magic resistance by 20%.'],
          req: [40],
          pos: [10, -10],
          deps: [11],
          id: ['__02DB9A']
        }, {
          name: 'N13 - Imperious Splendor',
          levels: 1,
          desc: ['Commanding Presence and Crown of the False King are twice as powerful as long as you remain above 75% Health.'],
          req: [60],
          pos: [10, -10],
          deps: [12],
          id: ['__02020E']
        }, {
          name: 'N14 - Protect Your God',
          levels: 1,
          desc: ['When struck by a weapon, may compel a nearby ally affected by Commanding Presence to engage your attacker, dealing 250% extra attack damage for 5 seconds.'],
          req: [80],
          pos: [10, -10],
          deps: [13],
          id: ['__020204']
        }, {
          name: 'N15 - Imposing Presence',
          levels: 1,
          desc: ['You radiate an aura of mystical charisma that touches all within 40 feet. Any Illusion spell you cast on those affected is 25% more powerful and lasts 30% longer.'],
          req: [30],
          pos: [10, -10],
          deps: [0],
          id: ['__01DBC9']
        }, {
          name: 'N16 - Shadow Refuge',
          levels: 1,
          desc: ['While affected by an invisibility spell or effect, you take 35% less damage from attacks and sneaking is 15% better.'],
          req: [70],
          pos: [10, -10],
          deps: [16],
          id: ['__01F70E']
        }, {
          name: 'N17 - Wilting',
          levels: 1,
          desc: ['Those affected by a Calm spell or effect within the radius of Imposing Presence lose 200 points of armor and 50% magic resistance.'],
          req: [40],
          pos: [10, -10],
          deps: [15],
          id: ['00059B77']
        }, {
          name: 'N18 - Neverworld',
          levels: 1,
          desc: ['Those affected by a Calm spell or effect within the radius of Imposing Presence are enraptured by a lotus dream from which they may refuse to return to reality. When the Calm is broken due to an attack, they may become Calmed again for 30 seconds.'],
          req: [70],
          pos: [10, -10],
          deps: [17],
          id: ['__0B22DB']
        }, {
          name: 'N19 - Terror',
          levels: 1,
          desc: ['Those affected by a Fear spell or effect within the radius of Imposing Presence drop their weapon.'],
          req: [50],
          pos: [10, -10],
          deps: [17],
          id: ['00059B78']
        }, {
          name: 'N20 - Soulcrusher',
          levels: 1,
          desc: ['Feast upon the minds of those affected by a Fear spell or effect within the radius of Imposing Presence, absorbing 25 points of Magicka per second.'],
          req: [80],
          pos: [10, -10],
          deps: [19],
          id: ['__0B22DC']
        }, {
          name: 'N21 - Pandemonium',
          levels: 1,
          desc: ['Those affected by a Frenzy spell or effect within the radius of Imposing Presence gain 50% extra attack damage.'],
          req: [60],
          pos: [10, -10],
          deps: [19],
          id: ['000C44B5']
        }, {
          name: 'N22 - Nightfall',
          levels: 1,
          desc: ['Those affected by a Frenzy spell or effect within the radius of Imposing Presence are consumed by battle hunger when there are no other enemies remaining, taking 40 points of damage per second.'],
          req: [90],
          pos: [10, -10],
          deps: [21],
          id: ['__0B22DD']
        }, {
          name: 'N23 - The Reaper Comes',
          levels: 1,
          desc: ['Activate any non-essential humanoid (only) under the effect of a Calm spell to send a wraith to slay the target within 15 seconds. This counts as an assault, if you get seen. This effect has a 180 second cooldown and can only affect one target at a time.'],
          req: [70],
          pos: [10, -10],
          deps: [17],
          id: ['__01F70F']
        }, {
          name: 'N24 - Lamb to the Slaughter',
          levels: 1,
          desc: ['Activate any humanoid (only) under the effect of a Fear spell to compel the target to stand motionless for 30 seconds. Your attacks against this target ignore armor. This effect has a 180 second cooldown and can only affect one target at a time.'],
          req: [80],
          pos: [10, -10],
          deps: [23],
          id: ['__02E672']
        }, {
          name: 'N25 - Heavy Weighs the Tapestry',
          levels: 1,
          desc: ['Activate any humanoid (only) under the effect of a Frenzy spell to incapacitate the target with magical exhaustion for 30 seconds and drain 500 points of Magicka and Stamina. This effect has a 180 second cooldown and can only affect one target at a time.'],
          req: [90],
          pos: [10, -10],
          deps: [24],
          id: ['__01F19D']
        }, {
          name: 'N26 - Entice Barter',
          levels: 1,
          desc: ['Activate any target under the effect of a Calm spell to initiate trade.'],
          req: [30],
          pos: [10, -10],
          deps: [0],
          id: ['__01DBD6']
        }, {
          name: 'N27 - Nemesis',
          levels: 1,
          desc: ['Activate any hostile creature or humanoid in combat to summon an illusion of the target with 1% extra attack damage per Illusion level. The illusion relentlessly attacks the target for 30 seconds. This effect has a 180 second cooldown.'],
          req: [50],
          pos: [10, -10],
          deps: [15, 26],
          id: ['__01F194']
        }, {
          name: 'N28 - Blind Guardian',
          levels: 1,
          desc: ['Activate any non-hostile creature or humanoid in combat to summon an illusion of the target. The illusion fights for the target for 60 seconds and the target won`t flee for its duration. This effect has a 300 second cooldown.'],
          req: [90],
          pos: [10, -10],
          deps: [27],
          id: ['__01F722']
        }, {
          name: 'N29 - Wraithwalker',
          levels: 1,
          desc: ['After using an Activate perk (Blind Guardian, Heavy Weighs the Tapestry, Lamb to the Slaughter, Nemesis, The Reaper Comes), Illusion spells are 50% more powerful and last 50% longer for 10 seconds. The cooldown of Activate perks ends after 8 seconds out of combat.'],
          req: [100],
          pos: [10, -10],
          deps: [25, 28],
          id: ['__01F71B']
        }
      ]
    }, {
      name: 'Conjuration',
      cname: 'conjuration',
      perks: [
        {
          name: 'N0 - Conjuration Mastery',
          levels: 5,
          desc: ['Description'],
          req: [0, 20, 40, 60, 80],
          pos: [0, 0],
          id: ['00000000', '00000000', '00000000', '00000000', '00000000']
        }, {
          name: 'N1 - Cujuration Dual Casting',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [-40, -5],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N2 - Planemeld',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [-65, -35],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N3 - Signed in Blood',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [-95, -60],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N4 - Atromancy',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [-75, -75],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N5 - Pact Magic',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [-85, -100],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N6 - Maelstrom',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [-80, -120],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N7 - Elemental Potency',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [-65, -130],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N8 - Unleash Hell',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [-70, -170],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N9 - Summon Resist',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [-55, -155],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N10 - March of Oblivion',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [-45, -175],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N11 - Ravenous Dead',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [-35, -55],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N12 - Edge of Oblivion',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [-60, -100],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N13 - Preservation',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [-40, -90],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N14 - Undead Crown',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [-30, -110],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N15 - A Plague Upon Thee',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [-40, -120],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N16 - Corpse Gas',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [-45, -135],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N17 - Necromaster',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [-40, -150],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N18 - Shocked to Life',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [-25, -160],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N19 - Bone Collector',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [-15, -45],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N20 - Dead Tide',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [-10, -65],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N21 - Reap and Sow',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [-25, -95],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N22 - Barrow Lord',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -100],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N23 - Skeleton Mages',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [-10, -125],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N24 - Fire Ritual',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [-20, -150],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N25 - Conjure Alter',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [5, -145],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N26 - King of Bones',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [-15, -175],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N27 - Puppet Master',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [0, -170],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N28 - Mystic Binding',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [15, -45],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N29 - Soul Raider',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [25, -60],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N30 - Rend From This World',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [35, -85],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N31 - Void Burn',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [40, -110],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N32 - Hollow Binding',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [35, -130],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N33 - Dark Wispers',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [25, -150],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N34 - Brand of the Necromaster',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -160],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N35 - Covenant of Coldharbour',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [40, -165],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N36 - Feed the Monster',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [55, -65],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N37 - Rat King',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [55, -25],
          deps: [0],
          id: ['00000000']
        }
	  ]
    }, {
      name: 'Destruction',
      cname: 'destruction',
      perks: [
        {
          name: 'N0 - Destruction Mastery',
          levels: 5,
          desc: ['Description'],
          req: [0, 20, 40, 60, 80],
          pos: [0, 0],
          id: ['00000000', '00000000', '00000000', '00000000', '00000000']
        }, {
          name: 'N1 - Destruction Dual Casting',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [-45, -5],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N2 - Force of Nature',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [-60, -35],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N3 - Robe of the Magi',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [-95, -45],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N4 - Elemental Specialization',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [-95, -75],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N5 - Combustion',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [-45, -60],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N6 - Scarring Burns',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [-65, -80],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N7 - Flash Fire',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [-95, -115],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N8 - Pyromancer Ascension',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [-80, -125],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N9 - Conflagration',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [-60, -100],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N10 - Scorched Earth',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [-75, -140],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N11 - World in Flames',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [-85, -150],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N12 - Outburst',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [-65, -155],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N13 - Cataclysm',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [-65, -175],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N14 - Merciless Cold',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [-15, -65],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N15 - Frostfall',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [-35, -85],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N16 - Shatter',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [-55, -120],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N17 - Crystalize',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [-25, -115],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N18 - Iced Earth',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [-40, -130],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N19 - Hypothermia',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [-40, -145],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N20 - Winter`s Majesty',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [-55, -175],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N21 - Exhaust',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [-35, -165],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N22 - Glacial Prison',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [-30, -190],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N23 - Ionized Path',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -55],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N24 - Satic Field',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [5, -85],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N25 - Magnetize',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [-10, -110],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N26 - Arc Burn',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [20, -105],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N27 - Nova Charge',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [0, -120],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N28 - Electroconvulsions',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [-5, -145],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N29 - Stormblast',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [-15, -170],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N30 - Show Them All',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [0, -160],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N31 - Absolute Power',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [-5, -185],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N32 - Runecaster',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [50, -80],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N33 - Ancient Seals',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [30, -130],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N34 - War of the Elementals',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [55, -40],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N35 - Harsh Lesson',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [45, -5],
          deps: [0],
          id: ['00000000']
        }
      ]
    }, {
      name: 'Restoration',
      cname: 'restoration',
      perks: [
        {
          name: 'N0 Restoration Mastery',
          levels: 5,
          desc: ['Description'],
          req: [0, 20, 40, 60, 80],
          pos: [0, 0],
          id: ['00000000', '00000000', '00000000', '00000000', '00000000']
        }, {
          name: 'N1 Tome of Many Pages',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N2 Restoration Dual Casting',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N3 Edgewalker',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N4 Respite',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [3],
          id: ['00000000']
        }, {
          name: 'N5 Necromanticon',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [3],
          id: ['00000000']
        }, {
          name: 'N6 Chalice of Tears',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [5],
          id: ['00000000']
        }, {
          name: 'N7 Plague Doctor',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [5],
          id: ['00000000']
        }, {
          name: 'N8 False Light',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [3],
          id: ['00000000']
        }, {
          name: 'N9 Lightwielder',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [8],
          id: ['00000000']
        }, {
          name: 'N10 In Thy Name',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [9],
          id: ['00000000']
        }, {
          name: 'N11 Spirit Tutors',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N12 Sacred Guardian',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [11],
          id: ['00000000']
        }, {
          name: 'N13 Pilgrim',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [11],
          id: ['00000000']
        }, {
          name: 'N14 Gods and Mortals',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [13],
          id: ['00000000']
        }, {
          name: 'N15 Descending Light',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N16 Overflowing Cip',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [15],
          id: ['00000000']
        }, {
          name: 'N17 Under my Wings',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [16],
          id: ['00000000']
        }, {
          name: 'N18 Wheel of Life',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [11, 16],
          id: ['00000000']
        }, {
          name: 'N19 Enduring Ideal',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [18],
          id: ['00000000']
        }, {
          name: 'N20 Hallowed Burial',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [15],
          id: ['00000000']
        }, {
          name: 'N21 Exorcist',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [20],
          id: ['00000000']
        }, {
          name: 'N22 Crusader`s Fire',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [21],
          id: ['00000000']
        }, {
          name: 'N23 Vigilant',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [15],
          id: ['00000000']
        }, {
          name: 'N24 Antimagic Field',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [23],
          id: ['00000000']
        }, {
          name: 'N25 Warrior`s Flame',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [15],
          id: ['00000000']
        }, {
          name: 'N26 Forbidden Sanctuary',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [23, 25],
          id: ['00000000']
        }, {
          name: 'N27 Bastion Ward',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [26],
          id: ['00000000']
        }, {
          name: 'N28 Mage Ward',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [27],
          id: ['00000000']
        }, {
          name: 'N29 Sacred Flame',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [25],
          id: ['00000000']
        }, {
          name: 'N30 Ashes to Ashes',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [25],
          id: ['00000000']
        }, {
          name: 'N31 Battle Cleric',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [29, 30],
          id: ['00000000']
        }, {
          name: 'N32 Eternal Flame',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [31],
          id: ['00000000']
        }, {
          name: 'N33 Apotheosis',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -10],
          deps: [31],
          id: ['00000000']
        }
      ]
    }, {
      name: 'Alteration',
      cname: 'alteration',
      perks: [
        {
          name: 'N0 - Alteration Mastery',
          levels: 5,
          desc: ['Description'],
          req: [0, 20, 40, 60, 80],
          pos: [0, 0],
          id: ['00000000', '00000000', '00000000', '00000000', '00000000']
        }, {
          name: 'N1 - Alteration Dual Casting',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [-30, -10],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N2 - Mage Armor',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [50, -20],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N3 - Distorted Shape',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [85, -40],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N4 - Geomancer',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [-30, -45],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N5 - Philosopher`s Stone',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [-10, -70],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N6 - Vancian Magic',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [30, -65],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N7 - Wild Shrines',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [50, -60],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N8 - Energy Sheild',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [75, -75],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N9 - Spellblade',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [15, -85],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N10 - Alter Self: Resistances',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [5, -95],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N11 - Throne of Nirn',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [-55, -120],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N12 - Command Lock',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [-25, -115],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N13 - Quadratic Wizard',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [30, -120],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N14 - Intuituve Magic',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [55, -125],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N15 - Welloc`s Dormant Arcana',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [65, -110],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N16 - Home Mythal',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [-15, -145],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N17 - Alter Self: Attributes',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [5, -135],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N18 - Energy Roil',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [15, -150],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N19 - Dungeon Master',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [35, -145],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N20 - The Monarch',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [70, -140],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N21 - Aurification',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [-50, -155],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N22 - Emergency Teleport',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [-35, -170],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N23 - Dimension Door',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [-15, -160],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N24 - Nullifier',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [10, -170],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N25 - Rend Resistances',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [25, -165],
          deps: [0],
          id: ['00000000']
        }, {
          name: 'N26 - Arcane Thesis',
          levels: 1,
          desc: ['Description'],
          req: [5],
          pos: [65, -175],
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
