/*

Data here is NOT Licensed under the Creative Commons and is owned by Pinnacle Entertainment Group.

This product references the Savage Worlds game system, available from Pinnacle Entertainment Group at www.peginc.com.
Savage Worlds and all associated logos and trademarks are copyrights of Pinnacle Entertainment Group. Used with permission.
Pinnacle makes no representation or warranty as to the quality, viability, or suitability for purpose of this product.

The entries in this file are from Savage Worlds: Sci-Fi Companion and are owned by Pinnacle Entertainment Group.
*/
if(typeof(extraDatabase) == "undefined")
	var extraDatabase = Array();

if(typeof(extraBooks) == "undefined")
	var extraBooks = Array();

var currentBook = books_list[4];

extraBooks = extraBooks.concat(currentBook);

extraDatabase = extraDatabase.concat(Array(
/*
	{
		name: "Alligator/Crocodile",
		wildcard: 0,
		image: "",
		blurb: "Alligators and crocs are staples of most pulp-genre adventure games. The statistics here represent an average specimen of either species. Much larger versions are often found in more remote areas.",
		attributes: {
			agility: "d4",
	smarts: "d4 (A)",
			spirit: "d6",
			strength: "d10",
			vigor: "d10"
		},
		skills: {
			 'Fighting' : "d8",
			 'Notice' : "d6",
			 'Swimming' : "d8"
		},
		charisma: "",
		pace: "3",
		parry: "6",
		toughness: "9",
		armor: "2",
		abilities: Array(
			{
				name: "Armor +2",
				description: "Thick skin."
			},
			{
				name: "Aquatic",
				description: "Pace 5"
			},
			{
				name: "Bite",
				description: "Str+d6"
			},
			{
				name: "Rollover	",
				description: "Both gators and crocs are notorious for grasping their prey in their vice-like jaws and rolling over and over with their flailing victims in their mouth. If one of these large amphibians hits with a raise, it causes an extra 2d4 rollover damage to its prey in addition to its regular Strength damage."
			}
		),
		book: currentBook,

		page: "p135"
	}
));
*/
    {
		name: "Arc Beetle",
		wildcard: 0,
		image: "https://upload.wikimedia.org/wikipedia/commons/7/77/Dytiscus_latissimus.jpg",
		blurb: "Arc beetles are armored insects with a distinctive yellow and blue striped shell. Protruding from their forehead are two long antennae that crackle with bioelectrical energy and can throw bolts of electricity to a range of over 45 yards.",
		attributes: {
			agility: "d6",
			smarts: "d6(A)",
			spirit: "d8",
			strength: "d10",
			vigor: "d8"
		},
		skills: {
			'Climbing' : "d8", 
			'Fighting' : "d6", 
			'Notice'   : "d6",
            'Shooting' : "d8"
		},
		charisma: "",
		pace: "6",
		parry: "5",
		toughness: "11(3)",
		armor: "3",
		abilities: Array(
			{
				name: "Armor +3",
				description: "Thick shell"
			},
			{
				name: "Bite",
				description: "Str+d4"
			},
			{
				name: "Electricity",
				description: "Arc beetles fire bolts of electricity from their antennae. This works as the bolt power, and the beetle has 20 Power Points for this purpose only. It uses Shooting as its arcane skill"
			},
			{
				name: "Size +2",
				description: "Arc beetles are over 6’ long and 4’ high."
			}
		),
		book: currentBook,

		page: "p75"
	},
	{
		name: "Avrok",
		wildcard: 0,
		image: "",
		blurb: "The avrok is a massive crocodilian creature found on more primitive worlds with plentiful game.",
		attributes: {
			agility: "d10",
			smarts: "d6(A)",
			spirit: "d8",
			strength: "d12+2",
			vigor: "d10"
		},
		skills: {
			'Fighting' : "d8", 
			'Notice'   : "d6",
			'Stealth' : "d8",
			'Swimming' : "d12"
		},
		charisma: "",
		pace: "6",
		parry: "6",
		toughness: "15(2)",
		armor: "2",
		abilities: Array(
			{
				name: "Aquatic",
				description: "Pace 12."
			},
			{
				name: "Armor +2",
				description: "Thick hide."
			},
			{
				name: "Large",
				description: "Attackers are +2 to attack rolls because of the beast’s size."
			},
			{
				name: "Shake",
				description: "If an avrok scores a raise on its attack it has secured a strong grip. On subsequent rounds it proceeds to shake its head violently, allowing its teeth to saw through its prey. This causes 3d6 damage and no attack roll is required. Escaping requires an opposed Strength roll."
			},
			{
				name: "Size +6",
				description: "Avroks measure 35’."
			}
		),
		book: currentBook,

		page: "p75"
	},{
		name: "Barbed Tongued Lizard",
		wildcard: 0,
		image: "",
		tags: "",
		blurb: "Barbed tongues get their name from the sharp bony 'teeth' at the end of their longtongue. The barbs deliver a poison which causes immense pain but little physical harm. Some aggressive species use this to stun and eat their prey, while others use it to escape.Barbed tongue lizards have dark red scales they can flush with blood to turn bright red and startle potential threats.",
		attributes: {
			agility: "d8",
			smarts: "d6(a)",
			spirit: "d4",
			strength: "d12+1",
			vigor: "d6"
		}
		skills: {
			'Fighting': "d12",
			'Intimidation': "d6",
			'Notice': "d6",
			'Stealth': "d4"
		}
		charisma: "0",
		pace: "10",
		parry: "8",
		toughness: "9",
		armor: "0",
		abilities: Array(
			{
				name: "Bite",
				description: "Str+d8."
			},
			{
				name: "Fast",
				description: "Pace 10; d10 running die."
			},
			{
				name: "Large",
				description: "Attackers add +2 toattack rolls because of the beast’s size."
			},
			{
				name: "Low Light Vision",
				description: "No penalties for Dim and Dark lighting."
			},
			{
				name: "Size +4",
				description: "Barbed tongue sweigh 2000 pounds."
			},
			{
				name: "Tongue",
				description: "Str+d4, Reach 1.The tongue is tipped with bony barbs that deliver a pain-causing poison. Anyone Shaken or wounded must make a Vigor roll or be Shaken and cannot attempt to recover for 1d6 rounds."
			}
		),
		book: currentBook,
		page: "p75"
	},{
		name: "Batspider",
		wildcard: 0,
		image: "",
		tags: "",
		blurb: "Batspiders are a species of flying arachnid. Each spider is about six inches across with two sets of bat-like wings extending from their back. Batspiders commonly dwell in forests or jungles, swooping down from trees to land on their prey’s back. They are often found as solitary hunters, though sometimes as many as a dozen gather together. They never form true swarms.",
		attributes: {
			agility: "d10",
			smarts: "d6(a)",
			spirit: "d8",
			strength: "—",
			vigor: "d6"
		}
		skills: {
			'Fighting': "d6",
			'Notice': "d8",
			'Stealth': "d10"
		}
		charisma: "0",
		pace: "4",
		parry: "5",
		toughness: "2",
		armor: "0",
		abilities: Array(
			{
				name: "Backbiter",
				description: "If a batspider has surprise, it flies onto its opponent’s back and attacks with the Drop. The victim suffers a –2 penalty to attack while it remains on his back."
			},
			{
				name: "Flying",
				description: "Pace 8."
			},
			{
				name: "Poison Bite (–2)",
				description: "Bat spiders can’t cause true damage with their bite and thus can’t penetrate armor, but they seek out bare skin or light clothing, making a Called Shot if necessary. With a successful Fighting roll as a Touch Attack (+2) they manage to bite and deliver their poison. Victims must make a Vigor roll at –2 (–4 if it hit with a raise) or suffer 2d4 damage at the start of each subsequent round."
			},
			{
				name: "Size –3",
				description: "Batspiders are six inches in diameter."
			},
			{
				name: "Small",
				description: "Attackers subtract 2 from their rolls due to the bat spider’s small size."
			},
			{
				name: "Wall Walker",
				description: "Batspiders can move across vertical or horizontal surfaces at their Pace"
			}
		),
		book: currentBook,
		page: "p75"
	},{
		name: "Bleeder Rabbit",
		wildcard: 0,
		image: "",
		tags: "",
		blurb: "Imagine a rabbit the size of a small child covered with scaly skin like that of an armadillo. Then enlarge its teeth to the length of an adult human’s index finger. That’s a bleeder rabbit—or bleeder bunny as some crews prefer.Despite their relatively small size, bleeder bunnies can kill much larger prey with a single bite. Their saliva acts as an anticoagulant, preventing the deep wound from clotting. All the bunny has to do is make one bite, then flee to a safe distance and wait for its prey to slowly bleed to death.",
		attributes: {
			agility: "d8",
			smarts: "d6(a)",
			spirit: "d10",
			strength: "d4",
			vigor: "d8"
		}
		skills: {
			'Fighting': "d6",
			'Notice': "d10",
			'Stealth': "d6"
		}
		charisma: "0",
		pace: "6",
		parry: "5",
		toughness: "6 (1)",
		armor: "1",
		abilities: Array(
			{
				name: "Armor +1",
				description: "Scaly skin."
			},
			{
				name: "Bite",
				description: "Str+d4."
			},
			{
				name: "Bleeder",
				description: "A character Shaken or wounded because of a bite attack suffers Fatigue at the start of every other round. A successful Healing roll stops the bleeding."
			},
			{
				name: "Leap",
				description: "Doubles jumping distances."
			},
			{
				name: "Pounce",
				description: "The beast can make a special Wild Attack if it can jump at least 2” to the target, adding +4 to attack and damage instead of +2 (Parry is still just -2)."
			},
			{
				name: "Size –1",
				description: "Bleeders stand 3’ in height."
			}
		),
		book: currentBook,
		page: "p76"
	},{
		name: "Bone Spider",
		wildcard: 0,
		image: "",
		tags: "",
		blurb: "Bone spiders are nightmarish creatures from desolate worlds. They have bodies the size of a man’s head, 12 inch long legs, and bodies covered in black, segmented, bony armor. At the end of their extendable jaws are four sharp fangs surrounding a circular mouth filled with teeth capable of cutting through bone. It’s a flesh eater and willing to attack opponents much larger than itself.",
		attributes: {
			agility: "d10",
			smarts: "d6(a)",
			spirit: "d8",
			strength: "d4",
			vigor: "d8"
		}
		skills: {
			'Fighting': "d8",
			'Intimidation': "d6",
			'Notice': "d8",
			'Stealth': "d10"
		}
		charisma: "0",
		pace: "6",
		parry: "6",
		toughness: "6 (2)",
		armor: "2",
		abilities: Array(
			{
				name: "Armor +2",
				description: "Bony shell."
			},
			{
				name: "Bite",
				description: "Str+d4."
			},
			{
				name: "Fear –2",
				description: "They are nightmarish creatures."
			},
			{
				name: "Paralysis",
				description: "Anyone Shaken or wounded by a bone spider must make a Vigor roll or be paralyzed for 2d6 rounds."
			},
			{
				name: "Small",
				description: "Attackers subtract 2 from their rolls due to the spider’s small size."
			},
			{
				name: "Size –2",
				description: "Bone spiders are the same size as human heads with 12” long legs."
			}
		),
		book: currentBook,
		page: "p77"
	},{
		name: "Bristled Gorer",
		wildcard: 0,
		image: "",
		tags: "",
		blurb: "Bristled gorers are herbivores that use their four sharp tusks to dig up roots and tubers. Although predominantly flat, their teeth and jaws are more than capable of crushing thick fibers. They are quadrupedal and covered in short fur, which stands on end when the creature is startled, and almost doubles its effective size. 77Tr a v e l e rs & Xen o s The flesh of a gorer is extremely tasty, and native races hunt them. Despite being herbivorous, gorers are aggressive when provoked and their tusks are quite capable of slicing through flesh and bone.",
		attributes: {
			agility: "d6",
			smarts: "d4(a)",
			spirit: "d6",
			strength: "d8",
			vigor: "d8"
		}
		skills: {
			'Fighting': "d6",
			'Intimidation': "d8",
			'Notice': "d6"
		}
		charisma: "0",
		pace: "6",
		parry: "5",
		toughness: "6",
		armor: "0",
		abilities: Array(
			{
				name: "Berserk",
				description: "When a gorer is frightened (such as being attacked), it goes berserk. It gains +2 to all Fighting and Strength rolls and its Toughness, but Parry is reduced by 2. It also ignores wound penalties."
			},
			{
				name: "Gore",
				description: "If a gorer can charge at least 6” before attacking, it adds +4 to damage."
			},
			{
				name: "Tusks",
				description: "Str+d6."
			}
		),
		book: currentBook,
		page: "p77"
	},{
		name: "Crab, Giant",
		wildcard: 0,
		image: "",
		tags: "",
		blurb: "Giant crabs are found throughout the oceans of the galaxy. They are voracious hunters who attack anything they can crack or rend with their powerful claws.",
		attributes: {
			agility: "d8",
			smarts: "d4(a)",
			spirit: "d6",
			strength: "d10",
			vigor: "d8"
		}
		skills: {
			'Fighting': "d8",
			'Notice': "d6",
			'Stealth': "d6",
			'Swimming': "d8"
		}
		charisma: "0",
		pace: "8",
		parry: "6",
		toughness: "10 (3)",
		armor: "3",
		abilities: Array(
			{
				name: "Armor +3",
				description: "Crabs have thick shells."
			},
			{
				name: "Claws",
				description: "Str+d8, AP 2."
			},
			{
				name: "Grapple",
				description: "A crab which succeeds in a grapple maneuver inflicts Str damage on subsequent rounds."
			},
			{
				name: "Size +1",
				description: "These creatures weigh over 300 pounds"
			}
		),
		book: currentBook,
		page: "p78"
	},{
		name: "Creature From The Id",
		wildcard: 0,
		image: "",
		tags: "",
		blurb: "Id monsters are created when a psionicist dies from extreme backlash. The entities somehow take physical form and seek out other psionicists—which they slay and feed on (just the brain). If they can be seen, creatures from the id take on a muted and much larger aspect of their creator.",
		attributes: {
			agility: "d8",
			smarts: "d6(a)",
			spirit: "d10",
			strength: "d12+8",
			vigor: "d10"
		}
		skills: {
			'Fighting': "d10",
			'Notice': "d8"
		}
		charisma: "0",
		pace: "6",
		parry: "7",
		toughness: "10",
		armor: "0",
		abilities: Array(
			{
				name: "Claws",
				description: "Str+d8."
			},
			{
				name: "Fearless",
				description: "Immune to Fear and Intimidation."
			},
			{
				name: "Invisible",
				description: "Id monsters are invisible in their natural state. A character may detect the invisible presence if he has a reason to look and makes a Notice roll at –6. Once detected, he may attack the thing at –6. These creatures radiate heat, so thermal or infravision eliminates their invisibility bonus."
			},
			{
				name: "Invulnerability",
				description: "Non-psionic attacks cause no damage, though they can Shake the creature. Multiple Shaken results from non-psionic attacks do not result in a wound."
			},
			{
				name: "Size +3",
				description: "Id creatures stand 10’ tall."
			},
			{
				name: "Weakness (Psionics)",
				description: "Id monsters suffer normal damage from psionic attacks."
			}
		),
		book: currentBook,
		page: "p78"
	},{
		name: "Cyber Dog",
		wildcard: 0,
		image: "",
		tags: "",
		blurb: "Cyber enhanced dogs are typically rottweilers or German shepherds augmented with cybernetics to improve their use as guard and attack dogs.",
		attributes: {
			agility: "d8",
			smarts: "d6(a)",
			spirit: "d6",
			strength: "d8",
			vigor: "d6"
		}
		skills: {
			'Fighting': "d6",
			'Intimidation': "d6",
			'Notice': "d10",
			'Stealth': "d8"
		}
		charisma: "0",
		pace: "10",
		parry: "5",
		toughness: "6 (2)",
		armor: "2",
		abilities: Array(
			{
				name: "Armor +2",
				description: "Subdermal plates."
			},
			{
				name: "Bite",
				description: "Str+d8. Enhanced jaw muscles."
			},
			{
				name: "Enhanced Senses",
				description: "+2 to Notice rolls."
			},
			{
				name: "Go for the Throat",
				description: "Dogs instinctively go for an opponent’s soft spots. With a raise on its attack roll, the animal hits the target’s most weakly-armored location."
			},
			{
				name: "Infravision",
				description: "Dogs halve penalties for poor lighting when attacking heat-producing targets."
			},
			{
				name: "Leg Enhancements",
				description: "Pace 10. Cyber enhanced dogs roll a d10 when running instead of a d6."
			},
			{
				name: "Size –1",
				description: "Most are the size of German shepherds or rottweilers."
			}
		),
		book: currentBook,
		page: "p78"
	}
));