/*

Data here is NOT Licensed under the Creative Commons and is owned by Pinnacle Entertainment Group.

This product references the Savage Worlds game system, available from Pinnacle Entertainment Group at www.peginc.com.
Savage Worlds and all associated logos and trademarks are copyrights of Pinnacle Entertainment Group. Used with permission.
Pinnacle makes no representation or warranty as to the quality, viability, or suitability for purpose of this product.

The entries in this file are from Savage Worlds: Deluxe and are owned by Pinnacle Entertainment Group.
*/
if(!chargen_edges)
	var chargen_edges = Array();

chargen_edges = chargen_edges.concat(Array(
	{
		name: "Extra Edge",
		category: "racial",
		unlisted: 1,
		description: "Character gains an extra edge",
		book: books_list[0],
		prereqs: {},
		incompatible: {},
		char_effects: function( character_object ) {
			character_object.edges_available++;
		},
		page: ""
	},
	{
		name: "Agile",
		category: "attributes",
		unlisted: 1,
		description: "base d6 Agility",
		book: books_list[0],
		char_effects: function( character_object ) {
			character_object.race.attributes.agility = 1;
		},
		prereqs: {},
		incompatible: {},
		page: ""
	},
	{
		name: "Low Light Vision",
		category: "racial",
		description: "Your eyes amplify light like a cat’s, allowing them to see in the dark. You ignore attack penalties for Dim and Dark lighting.",
		book: books_list[0],
		prereqs: {},
		unlisted: 1,
		incompatible: {},
		page: ""
	},
	{
		name: "Alertness",
		category: "Background",
		description: "Not much gets by your hero. He’s very observant and perceptive, and adds +2 to his Notice rolls to hear, see, or otherwise sense the world around him.",
		book: books_list[0],
		prereqs: {},
		incompatible: {},
		page: "p35"
	},
	{
		name: "Ambidextrous",
		category: "Background",
		description: "Your hero is as deft with his left hand as he is with his right. Characters normally suffer a –2 penalty when performing physical tasks with the off-hand (characters are assumed to be right-handed). With this Edge, your warrior ignores the –2 penalty for using his off-hand (see page 75).",
		book: books_list[0],
		prereqs: {
			attributes: {
				agility: 3
			}
		},
		incompatible: {},
		page: "p35"
	},
	{
		name: "Arcane Background",
		category: "Background",
		description: "This is the Edge your character must purchase to have any sort of magical, psionic, or other supernatural ability. See Chapter Five for a complete description of Arcane Backgrounds.",
		book: books_list[0],
		prereqs: {
		},
		char_effects: function( character_object ){
			character_object.arcane_background = 1;
		},
		incompatible: {},
		page: "p35"
	},
	{
		name: "Arcane Resistance",
		category: "Background",
		description: "This individual is particularly resistant to magic (including psionics, weird science, etc.), whether by nature or by heritage. He acts as if he had 2 points of Armor when hit by damage-causing arcane powers, and adds +2 to his Trait rolls when resisting opposed powers. Even friendly arcane powers must subtract this modifier to affect the resistant hero.",
		book: books_list[0],
		prereqs: {
			attributes: {
				spirit: 3
			}
		},
		incompatible: {},
		page: "p35"
	},
	{
		name: "Arcane Resistance, Improved",
		category: "Background",
		description: "As above but Armor and resistance are increased to 4.",
		book: books_list[0],
		prereqs: {
			edges: Array("Arcane Resistance")
		},
		incompatible: {},
		page: "p35"
	},
	{
		name: "Attractive",
		category: "Background",
		description: "It’s no secret that beautiful people have an easier time getting their way in life. This Edge grants your beautiful or handsome character +2 to Charisma.",
		book: books_list[0],
		prereqs: {
			attributes: {
				vigor: 2
			}
		},
		char_effects: function( character_object ) {
			character_object.derived.charisma = character_object.derived.charisma + 2;
		},
		incompatible: {
			hindrances: Array(
				"Ugly"
			)
		},
		page: "p35"
	},
	{
		name: "Attractive, Very",
		category: "Background",
		description: "Your hero is drop-dead gorgeous. His Charisma is increased to +4.",
		book: books_list[0],
		prereqs: {
			edges: Array("Attractive")
		},
		char_effects: function( character_object ) {
			character_object.derived.charisma = character_object.derived.charisma + 2;
		},
		incompatible: {
			hindrances: Array(
				"Ugly"
			)
		},
		page: "p35"
	},
	{
		name: "Berserk",
		category: "Background",
		description: "Immediately after suffering a wound (including a Shaken result from physical damage), your hero must make a Smarts roll or go Berserk. While Berserk, his Parry is reduced by 2 but he adds +2 to all Fighting, Strength, melee damage rolls, and Toughness. The warrior ignores all wound modifiers while Berserk, but cannot use any skills, Edges, or maneuvers that require concentration, including Shooting and Taunt, but not Intimidation. Berserkers attack with reckless abandon. Anytime his Fighting die is a 1 (regardless of his Wild Die), he hits a random adjacent target (not the original target). The attack may hit friend as well as foe. If there are no other adjacent targets, the blow simply misses. The Berserker may end his rage by doing nothing (not even moving) for one full action and making a Smarts roll at –2.",
		book: books_list[0],
		prereqs: {
		},
		char_effects: function( character_object ) {
		},
		incompatible: {},
		page: "p35"
	},
	{
		name: "Brave",
		category: "Background",
		description: "Those with this Edge have learned to master their fear. Or perhaps are so jaded or emotionally distant they’ve just lost their normal “fight or flight” responses. Either way, your hero adds +2 to Fear tests. If the character is in a setting that uses Guts as a Setting Rule, it adds to that as well.",
		book: books_list[0],
		prereqs: {
			attributes: {
				spirit: 2
			}
		},
		char_effects: function( character_object ) {

		},
		incompatible: {},
		page: "p35"
	},
	{
		name: "Brawny",
		category: "Background",
		description: "Your bruiser is very large or perhaps just very fit. His bulk resists damage better than most and adds +1 to his Toughness. In addition, the character can carry more than most proportional to his Strength. He can carry 8 times his Strength in pounds without penalty instead of the usual 5 times his Strength.",
		book: books_list[0],
		prereqs: {
			attributes: {
				vigor: 2,
				strength: 2
			}
		},
		char_effects: function( character_object ) {
			character_object.derived.toughness++;
			character_object.encumbrance_multiplier = 8;
		},
		incompatible: {
			hindrances: Array(
				"obese"
			)
		},
		page: "p36"
	},
	{
		name: "Fast Healer",
		category: "Background",
		description: "Some individuals just seem to heal faster than others. Those with this blessing add +2 to Vigor rolls when checking for natural healing. See page 78 for complete rules on Healing.",
		book: books_list[0],
		prereqs: {
			attributes: {
				vigor: 3
			}
		},
		char_effects: function( character_object ) {

		},
		incompatible: {},
		page: "p36"
	},
	{
		name: "Fleet-Footed",
		category: "Background",
		description: "The hero’s Pace is increased by +2 and he rolls a d10 instead of a d6 when running.",
		book: books_list[0],
		prereqs: {
			attributes: {
				agility: 2
			}
		},
		char_effects: function( character_object ) {

		},
		incompatible: {},
		page: "p36"
	},
	{
		name: "Linguist",
		category: "Background",
		description: "The character has an ear for languages and a rare talent for recognizing similarities between them. A character with this Edge starts with a number of languages equal to his Smarts die, and can make a Smarts roll at –2 to make herself understood in any language or dialect she has heard spoken for at least a week.",
		book: books_list[0],
		prereqs: {
		},
		char_effects: function( character_object ) {
			attributes: {
				smarts: 2
			}
		},
		incompatible: {},
		page: "p36"
	},
	{
		name: "Luck",
		category: "Background",
		description: "The adventurer seems to be blessed by fate, karma, the gods, or whatever external forces he believes in (or believe in him!) He draws one extra Benny at the beginning of each game session, allowing him to succeed at important tasks more often than most, and survive incredible dangers.",
		book: books_list[0],
		prereqs: {
		},
		char_effects: function( character_object ) {
		},
		incompatible: {
			hindrances: Array(
				"Bad Luck"
			)
		},
		page: "p36"
	},
	{
		name: "Great Luck",
		category: "Background",
		description: "The player draws two extra Bennies instead of one at the start of each session.",
		book: books_list[0],
		prereqs: {
			edges: Array("Luck")
		},
		char_effects: function( character_object ) {
		},
		incompatible: {
			hindrances: Array(
				"Bad Luck"
			)
		},
		page: "p36"
	},
	{
		name: "Noble",
		category: "Background",
		description: "Those born of noble blood have many perks in life, but often have just as many responsibilities. Nobles have high status in their societies, are entitled to special treatment from their foes, gain +2 Charisma, and also have the Rich Edge. This gives the hero several Edges for the price of one, but the responsibilities more than offset the additional perks. Nobles often have troops under their control, as well as land, a family home, and other assets. All of this must be determined by the GM, and balanced by the grave responsibilities the character faces. As an example, a character in a fantasy campaign might have a company of swordsmen, a small keep, and even a magical sword he inherited from his father. But he also has an entire region to manage, criminals to judge, justice to mete out, and a jealous neighbor who covets his lands and constantly plots against him at court.",
		book: books_list[0],
		prereqs: {
		},
		char_effects: function( character_object ) {
		},
		incompatible: {},
		page: "p36"
	},
	{
		name: "Quick",
		category: "Background",
		description: "Quick characters have lightning-fast reflexes and a cool head. Whenever you are dealt a 5 or lower in combat, you may discard and draw again until you get a card higher than 5. Characters with both the Level Headed and Quick Edges draw their additional card and take the best as usual. If that card is a Five or less, the Quick Edge may be used to draw a replacement until it’s Six or higher.",
		book: books_list[0],
		prereqs: {
			attributes: {
				agility: 3
			}
		},
		char_effects: function( character_object ) {
		},
		incompatible: {},
		page: "p36"
	},
	{
		name: "Rich",
		category: "Background",
		description: "Whether the individual was born with a silver spoon in his mouth or earned it through hard work, he’s got more money than most. Rich heroes start with three times the normal starting funds for the setting. If a regular income is appropriate for this setting, the hero receives the modern day equivalent of a $150,000 annual salary.",
		book: books_list[0],
		prereqs: {
		},
		char_effects: function( character_object ) {
		},
		incompatible: {},
		page: "p36"
	},
	{
		name: "Filthy Rich",
		category: "Background",
		description: "This character is very wealthy. He has five times the starting funds for the setting and, if appropriate, a yearly income of around $500,000. Wealthier characters should have a very complete background as well. This needs to be worked out with the GM, and comes with many more assets as well as onerous responsibilities.",
		book: books_list[0],
		prereqs: {
			edges: Array("Rich|Noble")
		},
		char_effects: function( character_object ) {
		},
		incompatible: {},
		page: "p36"
	},
	{
		name: "Block",
		category: "Combat",
		description: "Warriors who engage in frequent hand-to-hand combat are far more skilled in personal defense than most others. They’ve learned not only how to attack, but how to block their opponent’s blows as well. A fighter with this Edge adds +1 to his Parry.",
		book: books_list[0],
		prereqs: {
			attributes: {
				agility: 3
			},
			rank: 1,
			skills: Array(
				{
					name: "Fighting",
					required: 3
				}
			)
		},
		char_effects: function( character_object ) {
		},
		incompatible: {},
		page: "p37"
	},
	{
		name: "Improved Block",
		category: "Combat",
		description: "As above, but the hero adds +2 to his Parry.",
		book: books_list[0],
		prereqs: {
			edges: Array("Block")
		},
		char_effects: function( character_object ) {
		},
		incompatible: {},
		page: "p37"
	},
	{
		name: "Brawler",
		category: "Combat",
		description: "Frequent fights with his bare hands have given this thug a powerful punch. When he hits a foe with a successful bare-handed Fighting roll, he adds +2 to his damage.",
		book: books_list[0],
		prereqs: {
			attributes: {
				strength: 3
			}
		},
		char_effects: function( character_object ) {
		},
		incompatible: {},
		page: "p37"
	},
	{
		name: "Bruiser",
		category: "Combat",
		description: "When the bruiser gets a raise on his bare-handed Fighting attack, he rolls a d8 instead of a d6.",
		book: books_list[0],
		prereqs: {
			edges: Array("Brawler"),
			rank: 1
		},
		char_effects: function( character_object ) {
		},
		incompatible: {},
		page: "p37"
	},
	{
		name: "Combat Reflexes",
		category: "Combat",
		description: "Your adventurer recovers quickly from shock and trauma. He adds +2 to his Spirit roll when attempting to recover from being Shaken.",
		book: books_list[0],
		prereqs: {
			rank: 1
		},
		char_effects: function( character_object ) {
		},
		incompatible: {},
		page: "p37"
	},
	{
		name: "Counterattack",
		category: "Combat",
		description: "Fighters with this Edge know how to respond instantly to an enemy’s mistakes. Once per round (if not Shaken), the character receives one free Fighting attack against one adjacent foe who failed a Fighting attack against him. This attack is made at –2, and the Counterattack must be a normal attack (no Disarm, Wild Attack, or other maneuvers), and may not be combined with Frenzy or Sweep. It may be used with the Defend maneuver, but not Full Defense.",
		book: books_list[0],
		prereqs: {
			rank: 1,
			skills: Array( Array("Fighting", 2 ) ),
		},
		char_effects: function( character_object ) {
		},
		incompatible: {},
		page: "p37"
	},
	{
		name: "Improved Counterattack",
		category: "Combat",
		description: "As above but the character may ignore the –2 penalty.",
		book: books_list[0],
		prereqs: {
			edges: Array("Counterattack"),
			rank: 2
		},
		char_effects: function( character_object ) {
		},
		incompatible: {},
		page: "p37"
	},
	{
		name: "Dodge",
		category: "Combat",
		description: "Some crafty types know how to get out of harm’s way. This Edge allows them to use cover, movement, and concealment to make them harder to hit. Unless they are the victim of a surprise attack and taken completely unaware, attackers must subtract 1 from their ranged attack rolls when targeting them (even in close combat). Characters who attempt to evade area effect attacks may add +1 to their Agility roll as well (when allowed).",
		book: books_list[0],
		prereqs: {
			rank: 1,
			attributes: {
				agility: 3
			}
		},
		char_effects: function( character_object ) {
		},
		incompatible: {},
		page: "p37"
	},
	{
		name: "Improved Dodge",
		category: "Combat",
		description: "As above but attackers subtract 2 from their attack rolls, and the character adds +2 to evade area effect weapons when allowed.",
		book: books_list[0],
		prereqs: {
			edges: Array("Dodge"),
			rank: 2
		},
		char_effects: function( character_object ) {
		},
		incompatible: {},
		page: "p37"
	},
	{
		name: "Elan",
		category: "Combat",
		description: "When this spirited hero puts his heart into something it tends to pay off in big ways. When you spend a Benny on a Trait roll (including Soak rolls), add +2 to the final total.",
		book: books_list[0],
		prereqs: {
			rank: 0,
			attributes: {
				spirit: 3
			}
		},
		char_effects: function( character_object ) {
		},
		incompatible: {},
		page: "p38"
	},
	{
		name: "Extraction",
		category: "Combat",
		description: Array(
			"When a character normally withdraws from a melee, his attacker gets a free attack before he does so—a very dangerous proposition for most. Your hero is adept at retreating from an engagement.",
			"Make an Agility roll. If successful, one opponent doesn’t get a free attack anytime you disengage (see page 87)."
		),
		book: books_list[0],
		prereqs: {
			rank: 0,
			attributes: {
				agility: 3
			}
		},
		char_effects: function( character_object ) {
		},
		incompatible: {},
		page: "p38"
	},
	{
		name: "Improved Extraction",
		category: "Combat",
		description: "As above but if you succeed with a raise all opponents currently in melee with the character lose their free attack as your warrior withdraws.",
		book: books_list[0],
		prereqs: {
			edges: Array("Extraction"),
			rank: 0
		},
		char_effects: function( character_object ) {
		},
		incompatible: {},
		page: "p38"
	},
	{
		name: "First Strike",
		category: "Combat",
		description: "Once per turn the hero (if not Shaken) gets a free Fighting attack against a single foe who moves adjacent to him. This automatically interrupts the opponent’s action and does not cost the hero his action if he is on Hold or has not yet acted this round.",
		book: books_list[0],
		prereqs: {
			rank: 0,
			attributes: {
				agility: 3
			}
		},
		char_effects: function( character_object ) {
		},
		incompatible: {},
		page: "p38"
	},
	{
		name: "Improved First Strike",
		category: "Combat",
		description: "As above but the hero may make one free attack against each and every foe who moves adjacent to him.",
		book: books_list[0],
		prereqs: {
			edges: Array("First Strike"),
			rank: 3
		},
		char_effects: function( character_object ) {
		},
		incompatible: {},
		page: "p38"
	},
	{
		name: "Florentine",
		category: "Combat",
		description: "A character trained to fight “Florentine” is a master at wielding two weapons at once. He adds +1 to his Fighting rolls versus an opponent with a single weapon and no shield. In addition, opponents subtract 1 from any “gang up” bonuses they would normally get against the fighter as his two flashing blades parry their blows.",
		book: books_list[0],
		prereqs: {
			rank: 0,
			attributes: {
				agility: 3
			},
			skills: Array(
				{
					name: "Fighting",
					required: 3
				}
			)
		},
		char_effects: function( character_object ) {
		},
		incompatible: {},
		page: "p38"
	},
	{
		name: "Frenzy",
		category: "Combat",
		description: Array(
			"Frenzied fighters make fast and furious melee attacks, sacrificing finesse for raw speed. This allows them to make an extra Fighting attack per round at a –2 penalty to all Fighting rolls. This attack must be taken at the same time as another Fighting attack though it may target any two foes adjacent to the hero (Wild Cards roll two Fighting dice and one Wild Die). The –2 penalty is subtracted from all attacks.",
			"A character armed with two weapons still only makes one extra attack."
		),
		book: books_list[0],
		prereqs: {
			rank: 1,
			skills: Array(
				{
					name: "Fighting",
					required: 4
				}
			)
		},
		char_effects: function( character_object ) {
		},
		incompatible: {},
		page: "p38"
	},
	{
		name: "Improved Frenzy",
		category: "Combat",
		description: "As above but the character may ignore the –2 Frenzy penalty",
		book: books_list[0],
		prereqs: {
			edges: Array("Frenzy"),
			rank: 2
		},
		char_effects: function( character_object ) {
		},
		incompatible: {},
		page: "p38"
	},
	{
		name: "Giant Killer",
		category: "Combat",
		description: Array(
			"The bigger they are, the harder they are to kill. At least for most. But your hero knows how to find the weak points in massive creatures.",
			"Your hero does +1d6 damage when attacking creatures three sizes or more larger than himself. An ogre (Size +3) with this ability, for example, gains the bonus only against creatures of Size +6 or greater. A human Giant Killer (Size 0), can claim the bonus against the ogre, however."
		),
		book: books_list[0],
		prereqs: {
			rank: 2
		},
		char_effects: function( character_object ) {
		},
		incompatible: {},
		page: "p38"
	},
	{
		name: "Hard to Kill",
		category: "Combat",
		description: Array(
			"This adventurer has more lives than a truckload of cats. When forced to make Vigor rolls due to Incapacitation, he may ignore his wound modifiers. This only applies to Vigor rolls called for to resist Incapacitation or death (see page 77). He still suffers from wound modifiers for other Trait rolls normally."
		),
		book: books_list[0],
		prereqs: {
			wild_card: 1,
			rank: 0,
			attributes: {
				spirit: 3
			}
		},
		char_effects: function( character_object ) {
		},
		incompatible: {},
		page: "p38"
	},
	{
		name: "Harder to Kill",
		category: "Combat",
		description: "Your hero is tougher to kill than Rasputin. If he is ever “killed,” roll a die. On an odd result, he’s dead as usual. On an even roll, he’s Incapacitated but somehow escapes death. He may be captured, stripped of all his belongings, or mistakenly left for dead, but he somehow survives.",
		book: books_list[0],
		prereqs: {
			edges: Array("Hard to Kill"),
			rank: 2
		},
		char_effects: function( character_object ) {
		},
		incompatible: {},
		page: "p39"
	},
	{
		name: "Improvisational Fighter",
		category: "Combat",
		description: Array(
			"Heroes often find themselves fighting with pieces of equipment or furnishings not designed for combat. A character with this Edge has a knack for using such improvised weapons, and does not suffer the usual –1 penalty to attack and Parry when wielding them. See page 83 for details."
		),
		book: books_list[0],
		prereqs: {
			rank: 1,
			attributes: {
				smarts: 2
			}
		},
		char_effects: function( character_object ) {
		},
		incompatible: {},
		page: "p39"
	},
	{
		name: "Killer Instinct",
		category: "Combat",
		description: Array(
			"This hero hates losing. If he ties on an opposed roll of any sort, he wins. In addition, if his skill die on an opposed skill roll is a 1, he can reroll it (but must keep the second result, even if it’s another 1)."
		),
		book: books_list[0],
		prereqs: {
			rank: 3
		},
		char_effects: function( character_object ) {
		},
		incompatible: {},
		page: "p39"
	},
	{
		name: "Level Headed",
		category: "Combat",
		description: Array(
			"Fighters who can keep their cool when everyone else is running for cover are deadly customers in combat.",
			"A hero with this Edge draws an additional Action Card in combat and acts on the best of the draw."
		),
		book: books_list[0],
		prereqs: {
			rank: 1,
			attributes: {
				smarts: 3
			}
		},
		char_effects: function( character_object ) {
		},
		incompatible: {},
		page: "p39"
	},
	{
		name: "Improved Level Headed",
		category: "Combat",
		description: "As above but the hero draws 3 cards.",
		book: books_list[0],
		prereqs: {
			edges: Array("Level Headed"),
			rank: 2
		},
		char_effects: function( character_object ) {
		},
		incompatible: {},
		page: "p39"
	},
	{
		name: "Marksman",
		category: "Combat",
		description: Array(
			"The hero excels at taking controlled, measured shots. If he does not move in a turn, he may fire as if he took the Aim maneuver. Marksman may never be used with a Rate of Fire greater than 1.",
			"Marksman works with both Shooting and Throwing."
		),
		book: books_list[0],
		prereqs: {
			rank: 1
		},
		char_effects: function( character_object ) {
		},
		incompatible: {},
		page: "p39"
	},
	{
		name: "Martial Artist",
		category: "Combat",
		description: Array(
			"This character is highly trained in hand-to-hand fighting. He is never considered unarmed in combat and so is never subject to the Unarmed Defender rule (page 87). With a successful unarmed attack, he adds +d4 to his Strength roll (as if he were using a small weapon)."
		),
		book: books_list[0],
		prereqs: {
			rank: 1,
			skills: Array(
				{
					name: "Fighting",
					required: 2
				}
			)
		},
		char_effects: function( character_object ) {
		},
		incompatible: {},
		page: "p39"
	},
	{
		name: "Improved Martial Artist",
		category: "Combat",
		description: "The character now adds +d6 to his bare- handed damage.",
		book: books_list[0],
		prereqs: {
			edges: Array("Martial Artist"),
			rank: 2,
			skills: Array(
				{
					name: "Fighting",
					required: 4
				}
			)
		},
		char_effects: function( character_object ) {
		},
		incompatible: {},
		page: "p39"
	},
	{
		name: "Nerves of Steel",
		category: "Combat",
		description: Array(
			"Your hero has learned to fight on through the most intense pain. He may ignore 1 point of wound penalties."
		),
		book: books_list[0],
		prereqs: {
			wild_card: 1,
			rank: 0,
			attributes: {
				vigor: 3
			}
		},
		char_effects: function( character_object ) {
		},
		incompatible: {},
		page: "p39"
	},
	{
		name: "Improved Nerves of Steel",
		category: "Combat",
		description: "The hero ignores 2 points of wound penalties.",
		book: books_list[0],
		prereqs: {
			edges: Array("Nerves of Steel"),
			rank: 0
		},
		char_effects: function( character_object ) {
		},
		incompatible: {},
		page: "p39"
	},
	{
		name: "No Mercy",
		category: "Combat",
		description: Array(
			"The character may spend a Benny to reroll any one damage roll, including those made for area effect attacks."
		),
		book: books_list[0],
		prereqs: {
			rank: 1
		},
		char_effects: function( character_object ) {
		},
		incompatible: {},
		page: "p39"
	},
	{
		name: "Quick Draw",
		category: "Combat",
		description: Array(
			"This Edge allows a hero to draw a weapon as a free action (and thus ignore the usual –2 multi-action penalty if he chooses to fire as well). If the character must make an Agility roll to draw a weapon (see page 74), he adds +2 to the roll."
		),
		book: books_list[0],
		prereqs: {
			rank: 0,
			attributes: {
				agility: 3
			}
		},
		char_effects: function( character_object ) {
		},
		incompatible: {},
		page: "p39"
	},
	{
		name: "Rock and Roll",
		category: "Combat",
		description: "Some veteran shooters learn to compensate for the recoil of fully automatic weapons. If a character with this Edge does not move, he may ignore the recoil penalty for firing a weapon on full automatic.",
		book: books_list[0],
		prereqs: {
			rank: 1,
			skills: Array(
				{
					name: "Shooting",
					required: 3
				}
			)
		},
		char_effects: function( character_object ) {
		},
		incompatible: {},
		page: "p39"
	},
	{
		name: "Steady Hands",
		category: "Combat",
		description: Array(
			"Your hero ignores the “unstable platform” penalty for firing from the backs of animals or while riding in moving vehicles. In addition, when performing actions while Running (see page 74), his penalty is –1 instead of –2."
		),
		book: books_list[0],
		prereqs: {
			rank: 0,
			attributes: {
				agility: 3
			}
		},
		char_effects: function( character_object ) {
		},
		incompatible: {},
		page: "p39"
	},
	{
		name: "Sweep",
		category: "Combat",
		description: Array(
			"Sweep allows a character to make a single Fighting attack and apply it against all currently adjacent targets at a –2 penalty (friends and foes alike—be careful). Resolve each damage roll separately. The attack is applied immediately when rolled and only affects targets adjacent at that time.",
			"A character may not use Sweep in the same round she uses Frenzy, nor may she Sweep more than once per round, or with a second weapon held in another hand. In effect, the hero may only perform Sweep once per action unless she somehow gets two entire actions (perhaps under the effects of a spell or power, for example)."
		),
		book: books_list[0],
		prereqs: {
			rank: 0,
			skills: Array(
				{
					name: "Fighting",
					required: 3
				}
			),
			attributes: {
				agility: 3
			}
		},
		char_effects: function( character_object ) {
		},
		incompatible: {},
		page: "p39"
	},
	{
		name: "Improved Sweep",
		category: "Combat",
		description: "As above but the hero may ignore the –2 penalty.",
		book: books_list[0],
		prereqs: {
			edges: Array("Sweep"),
			rank: 1
		},
		char_effects: function( character_object ) {
		},
		incompatible: {},
		page: "p40"
	},
	{
		name: "Trademark Weapon",
		category: "Combat",
		description: Array(
			"The hero knows one unique weapon (Excalibur, Old Betsy, Sting) like the back of his hand. When using that weapon, he adds +1 to his Fighting, Shooting, or Throwing rolls. A hero can take this Edge multiple times, applying it to a different weapon each time. If a Trademark Weapon is lost, the hero can replace it, but the benefit of the Edge doesn’t kick in for two game weeks."
		),
		book: books_list[0],
		prereqs: {
			rank: 0,
			skills: Array(
				{
					name: "Fighting||Shooting",
					required: 4
				}
			),
			attributes: {
				agility: 3
			}
		},
		char_effects: function( character_object ) {
		},
		incompatible: {},
		page: "p39"
	},
	{
		name: "Improved Trademark Weapon",
		category: "Combat",
		description: "As above but the bonus when using the weapon increases to +2.",
		book: books_list[0],
		prereqs: {
			edges: Array("Trademark Weapon"),
			rank: 2
		},
		char_effects: function( character_object ) {
		},
		incompatible: {},
		page: "p40"
	},
	{
		name: "Two-Fisted",
		category: "Combat",
		description: Array(
			"A Two-Fisted hero isn’t ambidextrous—he’s simply learned to fight with two weapons (or both fists) at once. When attacking with a weapon in each hand, he rolls each attack separately but ignores the multi-action penalty (see page 75)."
		),
		book: books_list[0],
		prereqs: {
			rank: 0,
			attributes: {
				agility: 3
			}
		},
		char_effects: function( character_object ) {
		},
		incompatible: {},
		page: "p40"
	},
	{
		name: "Command",
		category: "Leadership",
		description: Array(
			"Command is the ability to give clear instructions to surrounding allies and enforce your hero’s will upon them. This makes your character’s compatriots more willing to fight on despite their wounds, and so adds +1 to their Spirit rolls to recover from being Shaken"
		),
		book: books_list[0],
		prereqs: {
			rank: 0,
			attributes: {
				smarts: 2
			}
		},
		char_effects: function( character_object ) {
		},
		incompatible: {},
		page: "p40"
	},
	{
		name: "Command Presence",
		category: "Leadership",
		description: "A booming voice, effective commands, natural charisma, or simple training results in a much more effective combat element. At the center of that element is the officer in command. A hero with this Edge has a “command radius” of 10” instead of the usual 5”.",
		book: books_list[0],
		prereqs: {
			edges: Array("Command"),
			rank: 0
		},
		char_effects: function( character_object ) {
		},
		incompatible: {},
		page: "p40"
	},
	{
		name: "Fervor",
		category: "Leadership",
		description: "A simple phrase uttered by a great leader can sometimes have momentous results. A leader with this ability can inspire his men to bloody fervor by yelling a motto, slogan, or other inspirational words. Those in the command radius add +1 to their Fighting damage rolls.",
		book: books_list[0],
		prereqs: {
			edges: Array("Command"),
			rank: 2,
			attributes: {
				spirit: 3
			}
		},
		char_effects: function( character_object ) {
		},
		incompatible: {},
		page: "p40"
	},
	{
		name: "Hold the Line!",
		category: "Leadership",
		description: "This Edge strengthens the will of the men under the hero’s command. The troops add +1 to their Toughness.",
		book: books_list[0],
		prereqs: {
			edges: Array("Command"),
			rank: 1,
			attributes: {
				smarts: 3
			}
		},
		char_effects: function( character_object ) {
		},
		incompatible: {},
		page: "p40"
	},
	{
		name: "Inspire",
		category: "Leadership",
		description: "Leaders with exceptional reputations and experience in battle inspire the soldiers around them. They add +2 to Spirit rolls when recovering from being Shaken (this includes the original +1 bonus for the Command Edge).",
		book: books_list[0],
		prereqs: {
			edges: Array("Command"),
			rank: 1
		},
		char_effects: function( character_object ) {
		},
		incompatible: {},
		page: "p40"
	},
	{
		name: "Leader of Men",
		category: "Leadership",
		description: Array(
			"Command comes easy to this commander. Those under his command work like a well-oiled machine when he’s in charge.",
			"Allies under the leader’s command roll a d10 as the Wild Die instead of a d6 when making group rolls."
		),
		book: books_list[0],
		prereqs: {
			edges: Array("Command"),
			rank: 2
		},
		char_effects: function( character_object ) {
		},
		incompatible: {},
		page: "p40"
	},
	{
		name: "Natural Leader",
		category: "Leadership",
		description: "This Edge signifies a special link between a leader and his men. With it, he may share his Bennies with any troops under his command.",
		book: books_list[0],
		prereqs: {
			edges: Array("Command"),
			rank: 0,
			attributes: {
				spirit: 3
			}
		},
		char_effects: function( character_object ) {
		},
		incompatible: {},
		page: "p40"
	},
	{
		name: "Tactician",
		category: "Leadership",
		description: Array(
			"The leader has a natural grasp of small unit tactics and can frequently take advantage of a rapidly changing situation.",
			"At the beginning of a fight and before any Action Cards are dealt, the hero makes a Knowledge (Battle) roll. For each success and raise he receives one Action Card. These are kept separate from his regular Action Cards and are not placed back into the deck until used or the combat ends (including Jokers!). At the start of any round, the hero may give one or more of these extra cards to his allies, whether Extras or Wild Cards, who then use it as their Action Card for the round in place of the one dealt them. This allows Extras to operate independently of Wild Card characters for one round if they receive their own card.",
			"Only one character per encounter may use this edge."
		),
		book: books_list[0],
		prereqs: {
			edges: Array("Command"),
			rank: 1,
			wild_card: 1,
			attributes: {
				smarts: 3
			},
			skills: Array(
				{
					name: "Knowledge: Battle",
					required: 2
				}
			)
		},
		char_effects: function( character_object ) {
		},
		incompatible: {},
		page: "p40"
	},
	{
		name: "New Power",
		category: "Power",
		repeatable: 1,
		description: Array(
			"An arcane character may learn a new power by choosing this Edge (which may be taken multiple times). He may choose from any powers normally available to his particular Arcane Background."
		),
		book: books_list[0],
		retakable: 1,
		prereqs: {
			arcane_background: 1,
			rank: 0
		},
		char_effects: function( character_object ) {
			character_object.powers_available++;
		},
		incompatible: {},
		page: "p41"
	},
	{
		name: "Power Points",
		category: "Power",
		repeatable: 1,
		description: Array(
			"Wizards, weird scientists, and other arcane types always want more power. This Edge grants them an additional 5 Power Points.",
			"Power Points may be selected more than once, but only once per Rank."
		),
		book: books_list[0],
		retakable: 1,
		once_per_rank: 1,
		prereqs: {
			arcane_background: 1,
			rank: 0
		},
		char_effects: function( character_object ) {
			character_object.power_points_available += 5;
		},
		incompatible: {
			once_per_rank: 1
		},
		page: "p41"
	},
	{
		name: "Rapid Recharge",
		category: "Power",
		description: Array(
			"This Edge allows an arcane character to regain 1 Power Point every 30 minutes."
		),
		book: books_list[0],

		prereqs: {
			arcane_background: 1,
			rank: 1,
			attributes: {
				spirit: 2
			}
		},
		incompatible: {
		},
		page: "p41"
	},
	{
		name: "Improved Rapid Recharge",
		category: "Power",
		description: Array(
			"The character regains 1 Power Point every 15 minutes."
		),
		book: books_list[0],

		prereqs: {
			edges: Array("Rapid Recharge"),
			arcane_background: 1,
			rank: 2
		},
		incompatible: {
		},
		page: "p41"
	},
	{
		name: "Soul Drain",
		category: "Power",
		description: Array(
			"Spellcasters, mentalists, and other arcane types in dire need of Power Points may use this Edge to drain energy from their own souls. To use this dangerous ability, the arcane character first decides how many Power Points he wants to draw from himself. Then he makes a Spirit roll minus the number of points he’s trying to drain. (This is a free action.) On a Spirit total of 1 or less, the character suffers a wound and falls unconscious for 1d6 hours. On a failure, the character suffers a wound. On a success or better, the character gets the points he needed and may attempt to cast a spell with them immediately (they may not be saved)."
		),
		book: books_list[0],

		prereqs: {
			arcane_background: 1,
			rank: 1,
			skills: Array(
				{
					name: "Knowledge: Arcana||Knowledge: Arcane||Knowledge: Magic", // just in case some forget the skill
					required: 4
				}
			)
		},
		incompatible: {
		},
		page: "p41"
	},
	{
		name: "Ace",
		category: "Professional",
		description: Array(
			"Aces are soecual pilots and drivers who feel more comfortable behind the wheel, throttle, or flight stick than on their own two feet.",
			"Aces add +2 to Boating, Driving, and Piloting rolls. In addition, they may also spend Bennies to make Soak rolls for any vehicle or vessel they control. This is a Boating, Driving, or Piloting roll at –2 (cancelling their usual +2). Each success and raise negates a wound and any critical hit that would have resulted from it."
		),
		book: books_list[0],

		prereqs: {
			attributes: {
				agility: 3
			}
		},
		incompatible: {
		},
		page: "p41"
	},
	{
		name: "Acrobat",
		category: "Professional",
		description: Array(
			"Those who have formal training in the acrobatic arts or are naturally agile may take this Edge. It adds +2 to all Agility rolls made to perform acrobatic maneuvers (including Trick maneuvers), and also adds +1 to a character’s Parry as long as he has no encumbrance penalty."
		),
		book: books_list[0],

		prereqs: {
			attributes: {
				agility: 3,
				strength: 2,
			}
		},
		incompatible: {
		},
		page: "p42"
	},
	{
		name: "Adept",
		category: "Professional",
		description: Array(
			"Adepts are holy warriors who have trained themselves to be living weapons. Some do so to be ultimate warriors; others do it in the service of a cause or deity.",
			"As a free action, an adept can spend 1 Power Point to gain AP 2 with all of his unarmed attacks until his next action.",
			"In addition, upon taking this Edge and at each new Rank, they may choose to change the trappings of one of the following powers to work only on themselves but be activated as a free action: boost/lower trait, deflection, healing, smite, or speed. The Adept must have the power to begin with, and this does not allow him to activate more than one power in a round."
		),
		book: books_list[0],

		prereqs: {
			arcane_background: 1,
			arcane_background_selected: "miracles",
			edges: Array("Martial Arist"),
			skills: Array(
				{
					name: "Faith",
					required: 3
				},
				{
					name: "Fighting",
					required: 3
				}
			),
			attributes: {
				agility: 3,
				strength: 2,
			}
		},
		incompatible: {
		},
		page: "p42"
	},
	{
		name: "Assassin",
		category: "Professional",
		description: Array(
			"Assassins are trained killers who know how to kill with deadly precision — if they can properly approach their prey. Assassins add +2 to any damage roll where they strike a foe unawares (even with ranged attacks)."
		),
		book: books_list[0],

		prereqs: {
			attributes: {
				agility: 3
			},
			skills: Array(
				{
					name: "Climbing",
					required: 2
				},
				{
					name: "Fighting",
					required: 2
				},
				{
					name: "Stealth",
					required: 3
				}
			)
		},
		incompatible: {
		},
		page: "p42"
	},
	{
		name: "Champion",
		category: "Professional",
		description: Array(
			"Champions are holy (or unholy) men and women chosen to fight for a particular deity or religion. Most are pious souls ready and willing to lay down their lives for a greater cause, but some may have been born into the role and follow their path with some reluctance.",
			"Champions fight the forces of darkness (or good). They add +2 damage when attacking supernaturally evil (or good) creatures, and have +2 Toughness when suffering damage from supernaturally evil (or good) sources, including arcane powers and the weapons, claws, teeth, etc., of such creatures."
		),
		book: books_list[0],

		prereqs: {
			arcane_background: 1,
			arcane_background_selected: "miracles",
			skills: Array(
				{
					name: "Faith",
					required: 3
				},
				{
					name: "Fighting",
					required: 3
				}
			),
			attributes: {
				agility: 3,
				spirit: 3,
				strength: 2,
			}
		},
		incompatible: {
		},
		page: "p42"
	},
	{
		name: "Gadgeteer",
		category: "Professional",
		description: Array(
			"These mechanical gurus are so technically savvy they can quickly build a machine to handle nearly any situation.",
			"Once per game session, a gadgeteer can create a “jury-rigged” device from spare parts. The device functions just like any other Weird Science device, and uses any power available to Weird Scientists in that setting (though this is still subject to Rank restrictions). It has half the inventor’s Power Points, and once these are used up, the gadget burns out and does not recharge. The inventor must have access to some parts and a reasonable amount of time (GM’s call, but at least 1d20 minutes) to create the gizmo."
		),
		book: books_list[0],

		prereqs: {
			arcane_background: 1,
			arcane_background_selected: "weird-science",
			skills: Array(
				{
					name: "Repair",
					required: 3
				},
				{
					name: "Weird Science",
					required: 3
				}
				// The arbitrary science knowledge skills I'n not sure how to enforce, so omitting.
			),
			attributes: {
				smarts: 3
			}
		},
		incompatible: {
		},
		page: "p42"
	},
	{
		name: "Holy/Unholy Warrior",
		category: "Professional",
		description: Array(
			"Acolytes, clerics, paladins, holy slayers, and other avatars of the gods are frequently tasked with battling the forces of evil in the mortal world. This Edge gives them a slight advantage against such foes.",
			"As an action, a priest or other holy person may call upon his chosen deity to repulse supernaturally evil creatures, such as the undead, demons, and the like. It also works on evil characters with the Arcane Background (Miracles) Edge.",
			"Repulsing evil costs 1 Power Point and has a range of the character’s Spirit. Targeted creatures within that range must make a Spirit roll. Failure means the creature is Shaken; a 1 means it is destroyed. Wild Cards suffer an automatic Wound instead.",
			"A character may also be an Unholy Warrior working for the forces of evil. In this case, he repulses good creatures, such as angels, paladins, or good characters with Arcane Background (Miracles)."
		),
		book: books_list[0],

		prereqs: {
			arcane_background: 1,
			arcane_background_selected: "miracles",
			skills: Array(
				{
					name: "Faith",
					required: 3
				}
			),
			attributes: {
				spirit: 3
			}
		},
		incompatible: {
		},
		page: "p42"
	},
	{
		name: "Investigator",
		category: "Professional",
		description: Array(
			"Investigators have spent a great deal of time researching ancient legends, working the streets, or deducing devilish mysteries. Some of these heroes are actual Private Investigators for hire while others may be sleuthing mages in a fantasy world or perhaps inquisitive college professors stumbling upon Things Man Was Not Meant to Know in the dark of night. Investigators add +2 to Investigation and Streetwise rolls, as well as Notice rolls made to search through evidence."
		),
		book: books_list[0],

		prereqs: {

			skills: Array(
				{
					name: "Investigation",
					required: 3
				},
				{
					name: "Streetwise",
					required: 3
				}
			),
			attributes: {
				spirit: 3
			}
		},
		incompatible: {
		},
		page: "p43"
	},
	{
		name: "Investigator",
		category: "Professional",
		description: Array(
			"Through advanced schooling, book-learning, computer-enhanced skill programs, or just amazing intuitive perception, your hero has a talent for picking up skills on the fly. There is little he can’t figure out given a little time and a dash of luck.",
			"Any time he makes an unskilled roll for a Smarts- based skill, he may do so at d4 instead of the usual d4–2."
		),
		book: books_list[0],

		prereqs: {

			attributes: {
				smarts: 4
			}
		},
		incompatible: {
		},
		page: "p43"
	},
	{
		name: "McGyver",
		category: "Professional",
		description: Array(
			"This character can improvise something when the need for a tool arises. He suffers no negative penalties on Trait rolls for lack of equipment in most situations.",
			"In addition, given a few simple tools, props, or devices, he can generally rig devices to help escape from death-traps, weapons to match some bizarre need, or otherwise create something that’s needed when such a thing isn’t actually present. The extent of this is completely up to the Game Master, but creativity should be rewarded, particularly in dire situations where few other answers are possible."
		),
		book: books_list[0],

		prereqs: {
			skills: Array(
				{
					name: "Repair",
					required: 2
				},
				{
					name: "Notice",
					required: 3
				}
			),
			attributes: {
				smarts: 2
			}
		},
		incompatible: {
		},
		page: "p43"
	},
	{
		name: "Mentalist",
		category: "Professional",
		description: Array(
			"Mentalists are masters of mind control and psionics. Some are pulp heroes, others are trained in secret government academies to root out traitors. Their frequent toying with human minds gives them a +2 on any opposed Psionics roll, whether they are using their powers against a foe or are trying to defend against a rival Mentalist."
		),
		book: books_list[0],

		prereqs: {
			arcane_background: 1,
			arcane_background_selected: "psionics",
			skills: Array(
				{
					name: "Psionics",
					required: 3
				}
			),
			attributes: {
				smarts: 3
			}
		},
		incompatible: {
		},
		page: "p42"
	},
	{
		name: "Mr. Fix It",
		category: "Professional",
		description: Array(
			"The inventor adds +2 to Repair rolls. With a raise, he halves the time normally required to fix something. This means that if a particular Repair job already states that a raise repairs it in half the time, a Mr. Fix It could finish the job in one-quarter the time with a raise."
		),
		book: books_list[0],

		prereqs: {
			arcane_background: 1,
			arcane_background_selected: "weird-science",
			skills: Array(
				{
					name: "Repair",
					required: 3
				},
				{
					name: "Weird Science",
					required: 3
				}
				// The arbitrary science knowledge skills I'n not sure how to enforce, so omitting.
			),
			attributes: {
				smarts: 4
			}
		},
		incompatible: {
		},
		page: "p42"
	},
	{
		name: "Scholar",
		category: "Professional",
		description: Array(
			"Learned professors, devoted students, and amateur enthusiasts spend months of their lives studying particular subjects. They become experts in these fields, and rarely fail to answer questions in their particular area of expertise.",
			"Pick any two Knowledge skills the Scholar has a d8 or better in. Add +2 to your total whenever these skills are used. Those who study military history have a natural edge when commanding troops in Mass Battles (see page 106)—a +2 to a Knowledge (Battle) roll can mean the difference between a rousing victory and a crushing defeat."
		),
		book: books_list[0],

		prereqs: {
			// really no way to enforce this one either.
		},
		incompatible: {
		},
		page: "p43"
	},
	{
		name: "Thief",
		category: "Professional",
		description: Array(
			"Thieves specialize in deceit, treachery, and acrobatics. They can be invaluable where traps must be detected, walls must be climbed, and locks must be picked.",
			"Thieves add +2 to Climbing, Lockpick, Stealth, as well as Notice or Repair rolls that relate to traps and similar devices. The bonus to Stealth does not apply when the character is in a wilderness environment—only in urban areas."
		),
		book: books_list[0],

		prereqs: {
			skills: Array(
				{
					name: "Lockpicking",
					required: 3
				},
				{
					name: "Climbing",
					required: 3
				},
				{
					name: "Stealth",
					required: 3
				}
				// The arbitrary science knowledge skills I'n not sure how to enforce, so omitting.
			),
			attributes: {
				agility: 3
			}
		},
		incompatible: {
		},
		page: "p44"
	},
	{
		name: "Wizard",
		category: "Professional",
		description: Array(
			"Wizards range from young apprentices to frighteningly powerful supreme sorcerers. They are often physically weak, however, and rarely have the divine powers or healing abilities of priestly spellcasters. What they lack in spiritual favor, however, they more than make up for in utility and eldritch might.",
			"Wizards tend to learn their craft in formalized institutions or under the tutelage of experienced masters. Each raise a Wizard gets on his Spellcasting roll reduces the cost of the spell by 1 Power Point. The Wizard must have the points available to cast the spell in the first place before rolling."
		),
		book: books_list[0],

		prereqs: {
			arcane_background: 1,
			arcane_background_selected: "magic",
			skills: Array(
				{
					name: "Spellcasting",
					required: 3
				},
				{
					name: "Knowledge: Arcana||Knowledge: Arcane||Knowledge: Magic", // just in case some forget the skill
					required: 3
				}
			),
			attributes: {
				smarts: 3
			}
		},
		incompatible: {
		},
		page: "p44"
	},
	{
		name: "Woodsman",
		category: "Professional",
		description: Array(
			"Woodsmen are rangers, scouts, and hunters who are more at home in the wilderness than in urban areas. They are skilled trackers and scouts, and know how to live off the land for months at a time. Woodsmen gain +2 to Tracking, Survival, and Stealth rolls made in the wilderness (not towns, ruins, or underground)."
		),
		book: books_list[0],

		prereqs: {
			arcane_background: 1,
			arcane_background_selected: "magic",
			skills: Array(
				{
					name: "Tracking",
					required: 3
				},
				{
					name: "Survival",
					required: 3
				}
			),
			attributes: {
				spirit: 2
			}
		},
		incompatible: {
		},
		page: "p44"
	},
	{
		name: "Charismatic",
		category: "Social",
		description: Array(
			"Your hero has learned how to work with others, even those who might be somewhat opposed to him or his efforts. This adds +2 to his Charisma."
		),
		book: books_list[0],

		prereqs: {
			attributes: {
				spirit: 3
			}
		},
		incompatible: {
		},
		page: "p44"
	},
	{
		name: "Common Bond",
		category: "Social",
		description: Array(
			"This Edge signifies a special link between close companions—such as a typical party. It doesn’t matter whether or not the characters get along perfectly or not, they’ve just formed a close and common bond during their epic adventures.",
			"A character with this Edge may freely give his Bennies to any other Wild Card he can communicate with. This represents the character giving his verbal or spiritual support to the ally. The player should say what his character is doing to give the support. The gesture could be as complex as a rousing speech, or as simple as a knowing nod."
		),
		book: books_list[0],

		prereqs: {
			wild_card: 1,
			attributes: {
				spirit: 3
			}
		},
		incompatible: {
		},
		page: "p44"
	},
	{
		name: "Connections",
		category: "Social",
		description: Array(
			"Whether it’s to the Feds, the cops, the Mob, or some big corporation, your heroine knows someone on the inside—someone who is willing to lend her a hand on occasion (usually once per game session).",
			"This Edge may be taken more than once, but each time must be applied to a different organization. The GM should also ensure the organization is limited to a single, unique organization. A hero may, for instance, have Connections (US Army), but he shouldn’t have a blanket Connections (Military).",
			"To use a character’s Connections requires that she first get in touch with one of her contacts. This requires a Streetwise roll. Failure means the particular contact wasn’t available, their cell phone wasn’t on, or they were otherwise tied up.",
			"Once in contact, the hero must make a Persuasion roll. The GM should feel free to modify both the Persuasion roll and any results based on the circumstances.",
			"A failure indicates the heroine’s contacts just couldn’t come through this time, or perhaps just weren’t persuaded that their help was really necessary.",
			"On a success, the contact might share information, but won’t do anything too risky to help. On a raise, the contact is willing to leak sensitive information, but stops short of outright betrayal.",
			"Two or more raises means the heroine has pushed the right buttons and can count on serious help. The Connection will risk serious consequences for the heroine, and if she needs financial assistance, may provide more than he’s comfortable with. If the heroine asks for muscle, the contact delivers either one expert (a safe- cracker, wheel-man, security expert, etc.) or five average fighter-types for the contact’s particular organization (a mob boss sends five thugs, the Army sends five infantrymen, etc.)."
		),
		book: books_list[0],

		prereqs: {

		},
		incompatible: {
		},
		page: "p44"
	},
	{
		name: "Strong Willed",
		category: "Social",
		description: Array(
			"Characters with strong willpower use their voice, steely stares, or quick wits to unnerve their opponents. Strong Willed adds +2 to a character’s Intimidation and Taunt rolls, as well as his Spirit and Smarts rolls when resisting Test of Wills attacks."
		),
		book: books_list[0],

		prereqs: {
			skills: Array(
				{
					name: "Intimidation",
					required: 2
				},
				{
					name: "Taunt",
					required: 2
				}
			)
		},
		incompatible: {
		},
		page: "p44"
	},
	{
		name: "Beast Bond",
		category: "Weird",
		description: Array(
			"Some individuals can exert incredible will over their animal companions. These characters may spend their own Bennies for any animals under their control, including mounts, pet dogs, familiars, and so on."
		),
		book: books_list[0],

		prereqs: {

		},
		incompatible: {
		},
		page: "p45"
	},
	{
		name: "Beast Master",
		category: "Weird",
		description: Array(
			"Animals like your hero, and won’t attack him unless he attacks them first or they are enraged for some reason. His “animal magnetism” is so great he’s attracted a loyal animal of some sort as well. This is typically a dog, wolf, or raptor, though the GM may allow other companions if it fits the setting.",
			"The beast is an Extra (not a Wild Card). If it should be killed, the hero finds a replacement in 2d6 days."
		),
		book: books_list[0],

		prereqs: {
			attributes: {
				spirit: 3
			}
		},
		incompatible: {
		},
		page: "p45"
	},
	{
		name: "Danger Sense",
		category: "Weird",
		description: Array(
			"Your hero can sense when something bad is about to happen. Anytime he’s about to be the victim of a surprise attack, ambush, or other nasty surprise, he gets a Notice roll at –2 just before the attack or event occurs. If successful, the character knows something is about to happen and may take appropriate action against it. This means the hero is on Hold for the first round of a combat. Should the hero fail his roll, he still follows the normal Surprise rules, if applicable (see page 73)."
		),
		book: books_list[0],

		prereqs: {

		},
		incompatible: {
		},
		page: "p45"
	},
	{
		name: "Healer",
		category: "Weird",
		description: Array(
			"A hero with this Edge adds +2 to all Healing rolls (including natural healing rolls for his own wounds), whether natural or magical in nature. Up to five companions traveling with a Healer add the bonus to their natural healing rolls as well"
		),
		book: books_list[0],

		prereqs: {
			attributes: {
				spirit: 3
			}
		},
		incompatible: {
		},
		page: "p45"
	},
	{
		name: "Liquid Courage",
		category: "Weird",
		description: Array(
			"Your hero processes alcohol far differently than most. The round after consuming a stiff drink (at least 8 ounces of hard liquor or equivalent), the character’s Vigor increases by one die type (increasing Toughness as well). The hard drinker can also ignore one level of wound modifiers (which stacks with other abilities that do the same).",
			"The effect lasts for one hour after it begins. If the drunkard seeks inebriation he suffers –2 to Smarts and Agility-based rolls for as long as he continues to drink and the next 1d6 hours thereafter."
		),
		book: books_list[0],

		prereqs: {
			attributes: {
				vigor: 3
			}
		},
		incompatible: {
		},
		page: "p45"
	},
	{
		name: "Scavenger",
		category: "Weird",
		description: Array(
			"Once per session the hero may “suddenly remember” that he has a much-needed piece of equipment on his person. The item must be capable of being stored in the hero’s pocket or bag (assuming he has one), and the Game Master has the final word on what can be found."
		),
		book: books_list[0],

		prereqs: {
			edges: Array("Luck")
		},
		incompatible: {
		},
		page: "p45"
	},
	{
		name: "Dead Shot",
		category: "Wild Card",
		description: Array(
			"The character doubles his total damage when making a successful Shooting or Throwing attack this round."
		),
		book: books_list[0],

		prereqs: {
			wild_card: 1,
			rank: 1,
			skills: Array(
				{
					name: "Throwing||Shooting",
					required: 4
				}
			)
		},
		incompatible: {
		},
		page: "p45"
	},
	{
		name: "Mighty Blow",
		category: "Wild Card",
		description: Array(
			"The character doubles his total damage when making a successful Fighting attack this round."
		),
		book: books_list[0],

		prereqs: {
			wild_card: 1,
			rank: 1,
			skills: Array(
				{
					name: "Fighting",
					required: 4
				}
			)
		},
		incompatible: {
		},
		page: "p45"
	},
	{
		name: "Power Surge",
		category: "Wild Card",
		description: Array(
			"This Edge is for those characters with Arcane Backgrounds. When dealt a Joker, the character recovers 2d6 Power Points. He may not exceed his usual limit."
		),
		book: books_list[0],

		prereqs: {
			wild_card: 1,
			rank: 1,
			skills: Array(
				{
					name: "Miracles||Weird Science||Spellcasting",
					required: 4
				}
			)
		},
		incompatible: {
		},
		page: "p45"
	},
	{
		name: "Followers",
		category: "Legendary",
		description: Array(
			"Heroes often acquire dedicated warbands, “merry men,” or others who voluntarily follow the hero on his adventures.",
			"Each time this Edge is chosen, five followers join the hero’s band. Casualties are not automatically replaced, so a hero may need to choose this Edge again on occasion to replenish his losses. The followers must have some way to eat and earn income, and generally want a piece of whatever loot, treasure, or other rewards the hero acquires. Otherwise, they are completely dedicated to their idol and risk their lives for him under any normal conditions. They won’t knowingly throw their lives away except under very special circumstances.",
			"The GM determines the followers’ statistics, but in general, use the Soldier statistics presented on page 93. Followers generally come with only basic equipment depending on their particular setting (warriors in fantasy come with at least leather armor and short swords, for example). The hero must purchase any additional equipment for his Followers himself."
		),
		book: books_list[0],

		prereqs: {
			wild_card: 1,
			rank: 4

		},
		incompatible: {
		},
		page: "p46"
	},
	{
		name: "Martial Arts Master",
		category: "Legendary",
		description: Array(
			"The warrior is deadly with his hands. He adds +2 to his bare-handed damage every time he takes this Edge, up to a maximum of five times for a total damage bonus of +10."
		),
		book: books_list[0],

		prereqs: {
			rank: 4,
			edges: Array("Improved Martial Arts"),
			skills: Array(
				{
					name: "Fighting",
					required: 5
				}
			)
		},
		incompatible: {
		},
		page: "p46"
	},
	{
		name: "Professional",
		category: "Legendary",
		description: Array(
			"The character is an expert at a particular skill or attribute (his choice). That Trait becomes d12+1. This Edge may be selected more than once, but it may never be applied to the same skill or attribute twice."
		),
		book: books_list[0],

		prereqs: {
			rank: 4,
			skills: Array(
				// {
				// 	name: "*",
				// 	required: 5
				// }
				// no idea how to enforce this yet.
			)
		},
		incompatible: {
		},
		page: "p46"
	},
	{
		name: "Expert",
		category: "Legendary",
		description: Array(
			"As above, but the Trait increases to d12+2."
		),
		book: books_list[0],

		prereqs: {
			rank: 4,
			edges: Array("Professional"),
			skills: Array(
				// {
				// 	name: "*",
				// 	required: 5
				// }
				// no idea how to enforce this yet.
			)
		},
		incompatible: {
		},
		page: "p46"
	},
	{
		name: "Master",
		category: "Legendary",
		description: Array(
			"As above, but the Trait increases to d12+2.",
			"The character’s Wild Die increases to a d10 when rolling a particular Trait of his choice. This Edge may be chosen multiple times, though it only affects a particular Trait once."
		),
		book: books_list[0],

		prereqs: {
			rank: 4,
			edges: Array("Expert"),
			skills: Array(
				// {
				// 	name: "*",
				// 	required: 5
				// }
				// no idea how to enforce this yet.
			)
		},
		incompatible: {
		},
		page: "p46"
	},
	{
		name: "Sidekick",
		category: "Legendary",
		description: Array(
			"A character who triumphs over evil time and time again becomes an inspiration to others. Eventually, one of these young crusaders may attempt to join the hero in his epic quests.",
			"The hero gains a Novice Rank sidekick. The sidekick is a Wild Card, gains experience as usual, and has abilities that complement or mimic his hero’s.",
			"The player character should control his sidekick just like any other ally. Of course, the sidekick may occasionally cause trouble (by getting captured, running into danger when he’s not supposed to, etc.). The player should be prepared for his “Edge” to occasionally become a “Hindrance.”",
			"If the sidekick dies, he isn’t replaced unless the hero chooses this Edge again."
		),
		book: books_list[0],

		prereqs: {
			wild_card: 1,
			rank: 4
		},
		incompatible: {
		},
		page: "p46"
	},
	{
		name: "Tough as Nails",
		category: "Legendary",
		description: Array(
			"Your hero is a grizzled veteran. Increase his Toughness by +1."
		),
		book: books_list[0],

		prereqs: {
			rank: 4
		},
		incompatible: {
		},
		char_effects: function( character_object ) {
			character_object.derived.toughness += 1;
		},
		page: "p46"
	},
	{
		name: "Improved Tough as Nails",
		category: "Legendary",
		description: Array(
			"Increase your hero’s Toughness by another +1."
		),
		book: books_list[0],

		prereqs: {
			rank: 4,
			edges: Array("Tough as Nails")
		},
		incompatible: {
		},
		char_effects: function( character_object ) {
			character_object.derived.toughness += 1;
		},
		page: "p46"
	},
	{
		name: "Weapon Master",
		category: "Legendary",
		description: Array(
			"Increase your hero’s Parry by +1."
		),
		book: books_list[0],

		prereqs: {
			rank: 4,
			skills: Array(
				{
					name: "Fighting",
					required: 5
				}
			)
		},
		incompatible: {
		},
		char_effects: function( character_object ) {
			character_object.derived.parry += 1;
		},
		page: "p46"
	},
	{
		name: "Improved Weapon Master",
		category: "Legendary",
		description: Array(
			"Increase your hero’s Parry by another +1."
		),
		book: books_list[0],

		prereqs: {
			rank: 4,
			edges: Array("Weapon Master")
		},
		incompatible: {
		},
		char_effects: function( character_object ) {
			character_object.derived.parry += 1;
		},
		page: "p46"
	}

));

/*
 chargen_edges.sort(
	function(a, b)
	{
		var nameA = a.name.toLowerCase();
		var nameB = b.name.toLowerCase();
		return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
	}
);
*/
