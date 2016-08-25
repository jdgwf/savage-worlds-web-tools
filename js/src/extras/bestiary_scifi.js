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
		image: "",
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
		armor: "2",
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
				name: "Electricity ",
				description: "Arc beetles fire bolts of electricity from their antennae. This works as the bolt power, and the beetle has 20 Power Points for this purpose only. It uses Shooting as its arcane skill"
			},
			{
				name: "•Size +2",
				description: "Arc beetles are over 6’ long and 4’ high."
			}
		),
		book: currentBook,

		page: "p75"
	}
));