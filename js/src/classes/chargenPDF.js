/*
	Savage Worlds Web Tools by Jeffrey Gordon is licensed under a
	Creative Commons Attribution 4.0 International License.
*/


function chargenPDF( characterObject) {

	this.currentCharacter = characterObject;
	app_version = characterObject.appVersion;
}

chargenPDF.prototype.checkLineCol = function (lineN, colC) {

	if( this.portraitCalc ) {
		addPage = false;
		if( lineN > 300)  {
			lineN = 20;
			//colC = 155;
			addPage = true;
		}
	} else {

		addPage = false;
		if( lineN > 200)  {
			lineN = 20;
			colC = 155;

		}
	}
	return [lineN, colC, addPage];
}

chargenPDF.prototype.createBasicLandscapePDF = function () {

	this.portraitCalc = false;
	this.currentDoc = new jsPDF("l");

	// center line - temporary?
	this.currentDoc.lines([[0,0],[0,195]], 150, 5);

	this.currentDoc.setFontSize(20);
	this.currentDoc.setFontStyle("italic");
	this.currentDoc.setFontStyle("bold");

	this.currentDoc.text(20, 15, "Savage Worlds Character Sheet");
	this.currentDoc.setFontSize(12);
	this.currentDoc.setFontStyle("bold");
	this.currentDoc.text(5, 30, "Character Name: " + this.currentCharacter.getName() );
	this.currentDoc.setFontStyle("normal");
	this.currentDoc.lines([[0,0],[105,0]], 40, 31);

	this.currentDoc.setFontStyle("bold");
	this.currentDoc.text(5, 40, "Player Name:");
	this.currentDoc.setFontStyle("normal");
	this.currentDoc.lines([[0,0],[110,0]], 35, 41);

	this.currentDoc.setFontStyle("bold");
	this.currentDoc.text(5, 45, "Race: " + this.currentCharacter.getRace().local_name );
	this.currentDoc.setFontStyle("normal");
	this.currentDoc.lines([[0,0],[75,0]], 17, 46);

	this.currentDoc.setFontStyle("bold");
	this.currentDoc.text(98, 45, "Gender: " + this.currentCharacter.getGender().label);
	this.currentDoc.setFontStyle("normal");
	this.currentDoc.lines([[0,0],[30,0]], 115, 46);

	this.createAttributesAndSkillsTable( [6,30,70,92,122], 5,50,140,80, 5, 9 );
	this.createDerivedStatsTable( 65,90,45,40,11 );
	this.createDamageTrackTable( 110,90,35,40, 8, 10, 6 );
	this.createAdvancementTrack( 235,5,55, 9 );


	this.createEquipmentTable("Equipment", 155, 5, 75, 60);
	this.createArmorTable("Armor", 155, 66, 75, 28);
	this.createPowersTable("Powers", 155, 95, 75,40, 6);

	this.createWeaponTable( "Weapons", [10, 45,60,80,90,115,125], 5, 132, 6  );

	this.createHindrancesTable("Hindrances", 80, 172, 65, 28, 9);
	this.createEdgesTable("Edges", 5, 172, 65, 28, 9);


	if( this.currentCharacter.usesSPCCreation() ) {
		//~ console.log( this.currentCharacter );
		this.currentDoc.addPage();

		this.currentDoc.lines([[0,0],[0,195]], 150, 5);

		this.currentDoc.setFontSize(20);
		this.currentDoc.setFontStyle("italic");
		this.currentDoc.setFontStyle("bold");

		this.currentDoc.text(20, 15, "Savage Worlds Character Sheet");
		this.currentDoc.setFontSize(12);
		this.currentDoc.setFontStyle("bold");
		this.currentDoc.text(15, 21, "Super Powers of " + this.currentCharacter.getName() );
		this.currentDoc.setFontStyle("normal");
		if( this.currentCharacter.SPCRisingStars )
			this.currentDoc.text(15, 26,  "• " + "Power Level " + this.currentCharacter.getSPCPowerLevels()[ this.currentCharacter.getSPCSelectedPowerLevel() / 1].name + " (Rising Stars)" );
		else
			this.currentDoc.text(15, 26,  "• " + "Power Level " + this.currentCharacter.getSPCPowerLevels()[ this.currentCharacter.getSPCSelectedPowerLevel() / 1].name );

		this.currentDoc.text(15, 31,  "• " + "Available Points/Total Points: " + this.currentCharacter.getSPCCurrentPowerPoints() + " / " + this.currentCharacter.getSPCStartingPowerPoints() );
		//this.currentDoc.lines([[0,0],[105,0]], 40, 31);



		lineNumber = 35;
		columnPoint = 10;


		for( var powerCounter = 0; powerCounter < this.currentCharacter.getSelectedSPCPowers().length; powerCounter++) {
			this.currentDoc.setFontSize(13);
			currentPower = this.currentCharacter.getSelectedSPCPowers()[powerCounter];
			this.currentDoc.setFontStyle("bold");
			//console.log( currentPower );
			lineNumber += 4;
				lineCol = this.checkLineCol( lineNumber, columnPoint);
				lineNumber = lineCol[0];
				columnPoint = lineCol[1];
			if( currentPower.custom_name != "" && currentPower.custom_name != currentPower.select_option_name )
				this.currentDoc.text(columnPoint, lineNumber, currentPower.custom_name + " (" + currentPower.select_option_name + ")");
			else
				this.currentDoc.text(columnPoint, lineNumber, currentPower.select_option_name );

			this.currentDoc.setFontStyle("normal");
			this.currentDoc.setFontSize(10);

			// description
			var splitDescription = this.currentDoc.splitTextToSize(currentPower.description, 100);
			//console.log(splitDescription.length, splitDescription );

			if( splitDescription.length > 0) {
				lineNumber += 4;
					lineCol = this.checkLineCol( lineNumber, columnPoint);
					lineNumber = lineCol[0];
					columnPoint = lineCol[1];
				for( var  lcount = 0; lcount < splitDescription.length; lcount++) {
					this.currentDoc.text(columnPoint, lineNumber, splitDescription[lcount]);
					lineNumber += 4;
						lineCol = this.checkLineCol( lineNumber, columnPoint);
						lineNumber = lineCol[0];
						columnPoint = lineCol[1];
				}

				lineNumber += 4;
					lineCol = this.checkLineCol( lineNumber, columnPoint);
					lineNumber = lineCol[0];
					columnPoint = lineCol[1];
			}

			// Generic Modifiers
			for( var modifierCount = 0; modifierCount < currentPower.genericModifiersObj.length; modifierCount++ ) {

				if( currentPower.genericModifiersObj[modifierCount] && currentPower.genericModifiersObj[modifierCount].currentCost != 0) {
					this.currentDoc.text(columnPoint + 5, lineNumber, "• " + currentPower.genericModifiersObj[modifierCount].local_name + " (ModCost: " + currentPower.genericModifiersObj[modifierCount].currentCost + ", Page: 18-19)" );
					lineNumber += 4;
						lineCol = this.checkLineCol( lineNumber, columnPoint);
						lineNumber = lineCol[0];
						columnPoint = lineCol[1];
				}


			}

			// Power Modifiers
			for( var modifierCount = 0; modifierCount < currentPower.modifiersObj.length; modifierCount++ ) {

				if( currentPower.modifiersObj[modifierCount] && currentPower.modifiersObj[modifierCount].currentCost != 0) {
					this.currentDoc.text(columnPoint + 5, lineNumber, "• " + currentPower.modifiersObj[modifierCount].local_name + " (ModCost: " + currentPower.modifiersObj[modifierCount].currentCost + ", Page: " + currentPower.page + ")" );
					lineNumber += 4;
						lineCol = this.checkLineCol( lineNumber, columnPoint);
						lineNumber = lineCol[0];
						columnPoint = lineCol[1];
				}



			}

			// stats line
			var statsLine = "";
			if( currentPower.currentCost > 0 ) {
				statsLine += "• " + "Points: " + currentPower.currentCost;
			}
			if( currentPower.per_level > 0 ) {
				statsLine += ", Level: " + currentPower.selectedLevel;
			}
			if( currentPower.page != "") {
				statsLine += ", Page: " + currentPower.page;
			}

			this.currentDoc.text(columnPoint + 5, lineNumber, statsLine );


			// final spacing between powers..
			lineNumber += 4;
				lineCol = this.checkLineCol( lineNumber, columnPoint);
				lineNumber = lineCol[0];
				columnPoint = lineCol[1];
			this.currentDoc.setFontStyle("normal");
		}
	}

	// Footer
	this.currentDoc.setFontSize(6);
	this.currentDoc.lines([[0,0],[135,0]], 155, 189);
	this.currentDoc.text(155, 192, "Created and Printed with Savage Worlds Web Tools by Jeffrey Gordon - version " + app_version);
	this.currentDoc.text(155, 194, "The web tools are http://jdgwf.github.io/savage-worlds-web-tools/");
	this.currentDoc.text(155, 196, "This tool references the Savage Worlds game system, available from Pinnacle Entertainment Group at www.peginc.com. Savage Worlds and");
	this.currentDoc.text(155, 198, "all associated logos and trademarks are copyrights of Pinnacle Entertainment Group. Used with permission. Pinnacle makes no representation");
	this.currentDoc.text(155, 200, "or warranty as to the quality, viability, or suitability for purpose of this product.");
	this.currentDoc.setFontSize(10);
}

chargenPDF.prototype.createBasicPortraitPDF = function () {

	this.portraitCalc = true;
	this.currentDoc = new jsPDF();
	this.currentDoc.setFontSize(20);
	this.currentDoc.setFontStyle("italic");
	this.currentDoc.setFontStyle("bold");
	this.currentDoc.text(50, 20, "Savage Worlds Character Sheet");

	this.currentDoc.setFontSize(12);
	this.currentDoc.setFontStyle("bold");
	this.currentDoc.text(5, 30, "Character Name: " + this.currentCharacter.getName() );
	this.currentDoc.setFontStyle("normal");
	this.currentDoc.lines([[0,0],[125,0]], 40, 31);

	this.currentDoc.setFontStyle("bold");
	this.currentDoc.text(5, 40, "Player Name:");
	this.currentDoc.setFontStyle("normal");
	this.currentDoc.lines([[0,0],[130,0]], 35, 41);

	this.currentDoc.setFontStyle("bold");
	this.currentDoc.text(5, 45, "Race: " + this.currentCharacter.getRace().local_name );
	this.currentDoc.setFontStyle("normal");
	this.currentDoc.lines([[0,0],[95,0]], 17, 46);

	this.currentDoc.setFontStyle("bold");
	this.currentDoc.text(133, 45, "Gender: " + this.currentCharacter.getGender().label);
	this.currentDoc.setFontStyle("normal");
	this.currentDoc.lines([[0,0],[30,0]], 150, 46);

	this.createAttributesAndSkillsTable( [10,40,110,140,170], 5,50,200,80 );
	this.createDerivedStatsTable( 95,90,55,40 );
	this.createDamageTrackTable( 150,90,55,40 );
	this.createHindrancesTable("Hindrances", 5, 130,65,40);
	this.createEdgesTable("Edges", 70,130,80,40);
	this.createWeaponTable( "Weapons", Array(10, 45, 60, 80, 90, 120, 130 ),  5, 170, 8  );
	this.createArmorTable("Armor",  5, 220, 65, 20);
	this.createPowersTable("Powers",  5, 240, 65, 33);
	this.createEquipmentTable("Equipment",  70, 220, 80, 53);

	this.createAdvancementTrack( 150,130,55 );


	if( this.currentCharacter.usesSPCCreation() ) {
		//~ console.log( this.currentCharacter );
		this.currentDoc.addPage();

		//this.currentDoc.lines([[0,0],[0,195]], 150, 5);

		this.currentDoc.setFontSize(20);
		this.currentDoc.setFontStyle("italic");
		this.currentDoc.setFontStyle("bold");

		this.currentDoc.text(50, 15, "Savage Worlds Character Sheet");
		this.currentDoc.setFontSize(12);
		this.currentDoc.setFontStyle("bold");
		this.currentDoc.text(15, 21, "Super Powers of " + this.currentCharacter.getName() );
		this.currentDoc.setFontStyle("normal");
		if( this.currentCharacter.SPCRisingStars )
			this.currentDoc.text(15, 26,  "• " + "Power Level " + this.currentCharacter.getSPCPowerLevels()[ this.currentCharacter.getSPCSelectedPowerLevel() / 1].name + " (Rising Stars)" );
		else
			this.currentDoc.text(15, 26,  "• " + "Power Level " + this.currentCharacter.getSPCPowerLevels()[ this.currentCharacter.getSPCSelectedPowerLevel() / 1].name );

		this.currentDoc.text(15, 31,  "• " + "Available Points/Total Points: " + this.currentCharacter.getSPCCurrentPowerPoints() + " / " + this.currentCharacter.getSPCStartingPowerPoints() );

		lineNumber = 35;
		columnPoint = 10;


		for( var powerCounter = 0; powerCounter < this.currentCharacter.getSelectedSPCPowers().length; powerCounter++) {
			this.currentDoc.setFontSize(13);
			currentPower = this.currentCharacter.getSelectedSPCPowers()[powerCounter];
			this.currentDoc.setFontStyle("bold");
			//console.log( currentPower );
			lineNumber += 4;
				lineCol = this.checkLineCol( lineNumber, columnPoint );
				lineNumber = lineCol[0];
				columnPoint = lineCol[1];
			if( currentPower.custom_name != "" && currentPower.custom_name != currentPower.select_option_name )
				this.currentDoc.text(columnPoint, lineNumber, currentPower.custom_name + " (" + currentPower.select_option_name + ")");
			else
				this.currentDoc.text(columnPoint, lineNumber, currentPower.select_option_name );

			this.currentDoc.setFontStyle("normal");
			this.currentDoc.setFontSize(10);

			// description
			var splitDescription = this.currentDoc.splitTextToSize(currentPower.description, 180);
			//console.log(splitDescription.length, splitDescription );

			if( splitDescription.length > 0) {
				lineNumber += 4;
					lineCol = this.checkLineCol( lineNumber, columnPoint);
					lineNumber = lineCol[0];
					columnPoint = lineCol[1];
				for( var  lcount = 0; lcount < splitDescription.length; lcount++) {
					this.currentDoc.text(columnPoint, lineNumber, splitDescription[lcount]);
					lineNumber += 4;
						lineCol = this.checkLineCol( lineNumber, columnPoint);
						lineNumber = lineCol[0];
						columnPoint = lineCol[1];
				}

				lineNumber += 4;
					lineCol = this.checkLineCol( lineNumber, columnPoint);
					lineNumber = lineCol[0];
					columnPoint = lineCol[1];
			}

			// Generic Modifiers
			for( var modifierCount = 0; modifierCount < currentPower.genericModifiersObj.length; modifierCount++ ) {

				if( currentPower.genericModifiersObj[modifierCount] && currentPower.genericModifiersObj[modifierCount].currentCost != 0) {
					this.currentDoc.text(columnPoint + 5, lineNumber, "• " + currentPower.genericModifiersObj[modifierCount].local_name + " (ModCost: " + currentPower.genericModifiersObj[modifierCount].currentCost + ", Page: 18-19)" );
					lineNumber += 4;
						lineCol = this.checkLineCol( lineNumber, columnPoint);
						lineNumber = lineCol[0];
						columnPoint = lineCol[1];
				}


			}

			// Power Modifiers
			for( var modifierCount = 0; modifierCount < currentPower.modifiersObj.length; modifierCount++ ) {

				if( currentPower.modifiersObj[modifierCount] && currentPower.modifiersObj[modifierCount].currentCost != 0) {
					this.currentDoc.text(columnPoint + 5, lineNumber, "• " + currentPower.modifiersObj[modifierCount].local_name + " (ModCost: " + currentPower.modifiersObj[modifierCount].currentCost + ", Page: " + currentPower.page + ")" );
					lineNumber += 4;
						lineCol = this.checkLineCol( lineNumber, columnPoint);
						lineNumber = lineCol[0];
						columnPoint = lineCol[1];
				}



			}

			// stats line
			var statsLine = "";
			if( currentPower.currentCost > 0 ) {
				statsLine += "• " + "Points: " + currentPower.currentCost;
			}
			if( currentPower.per_level > 0 ) {
				statsLine += ", Level: " + currentPower.selectedLevel;
			}
			if( currentPower.page != "") {
				statsLine += ", Page: " + currentPower.page;
			}

			this.currentDoc.text(columnPoint + 5, lineNumber, statsLine );


			// final spacing between powers..
			lineNumber += 4;
				lineCol = this.checkLineCol( lineNumber, columnPoint);
				lineNumber = lineCol[0];
				columnPoint = lineCol[1];
			this.currentDoc.setFontStyle("normal");
		}
	}


// 		this.createPowersTable("Powers", 70,130,80,40);
	// Footer
	this.currentDoc.setFontSize(6);
	this.currentDoc.lines([[0,0],[200,0]], 5, 273);
	this.currentDoc.text(20, 275, "Created and Printed with Savage Worlds Web Tools by Jeffrey Gordon - version " + app_version);
	this.currentDoc.text(20, 277, "The web tools are http://jdgwf.github.io/savage-worlds-web-tools/ and can be used offline");
	this.currentDoc.text(20, 279, "This tool references the Savage Worlds game system, available from Pinnacle Entertainment Group at www.peginc.com. Savage Worlds and all associated logos and trademarks");
	this.currentDoc.text(20, 281, "are copyrights of Pinnacle Entertainment Group. Used with permission. Pinnacle makes no representation or warranty as to the quality, viability, or suitability for purpose of this product.");
	this.currentDoc.setFontSize(10);
};

chargenPDF.prototype.createDamageTrackTable = function(left, top, height, width, smallFontSize, spacing_between, incap_margin) {

	if(!smallFontSize)
		smallFontSize = 14;
	if(!spacing_between)
		spacing_between = 20;
	if(!incap_margin)
		incap_margin = 0;

	this.currentDoc.rect(left, top, height, width);
	this.currentDoc.setFontStyle("bold");
	this.currentDoc.text(left+2, top+5, "Wounds");
	this.currentDoc.text(left+spacing_between+ 10, top+5, "Fatigue");

	this.currentDoc.circle(left+7, top+11, 5);
	this.currentDoc.circle(left+7, top+22, 5);
	this.currentDoc.circle(left+7, top+33, 5);

	this.currentDoc.rect(left+spacing_between+ 10, top+7, 10, 10);
	this.currentDoc.rect(left+spacing_between+ 10, top+18, 10, 10);

	this.currentDoc.setFontSize(smallFontSize);
	this.currentDoc.text(left+spacing_between+incap_margin, top+34, "Incapacitated");
	this.currentDoc.setFontStyle("normal");
	this.currentDoc.setFontSize(20);

	this.currentDoc.text(left+spacing_between+ 11, top+14, "-1");
	this.currentDoc.text(left+spacing_between+ 11, top+25, "-2");

	this.currentDoc.text(left+4, top+13, "-1");
	this.currentDoc.text(left+4, top+24, "-2");
	this.currentDoc.text(left+4, top+35, "-3");
	this.currentDoc.setFontSize(10);
}
chargenPDF.prototype.createDerivedStatsTable = function( left, top, height, width, smallFontSize ) {

	if(!smallFontSize)
		smallFontSize = 12;

	this.currentDoc.rect(left, top, height, width);
	this.currentDoc.setFontSize(smallFontSize);
	this.currentDoc.setFontStyle("bold");
	this.currentDoc.text(left + 1, top+5, "Pace: " + this.currentCharacter.getDerived().pace);
	this.currentDoc.text(left + 1, top+10, "Parry: " + this.currentCharacter.getDerived().parry);
	this.currentDoc.text(left + 1, top+15, "Toughness: " + this.currentCharacter.getDerived().toughnessAndArmor);
	this.currentDoc.text(left + 1, top+20, "Charisma: " + this.currentCharacter.getDerived().charisma);

	if( this.currentCharacter.usesSanity() )
		this.currentDoc.text(left + 1, top+25, "Sanity: " + this.currentCharacter.getDerived().sanity);

	if( this.currentCharacter.usesStrain() )
		this.currentDoc.text(left + 1, top+30, "Strain: " + this.currentCharacter.getDerived().currentStrain + " / " + this.currentCharacter.getDerived().strain);

	this.currentDoc.text(left + 1, top+35, "Current / Combat Load");
	this.currentDoc.setFontStyle("normal");

	this.currentDoc.text(
		left + 1,
		top+39,

		this.currentCharacter.getCurrentLoad() + " (" + this.currentCharacter.getCurrentLoadModifier() + ")"

		+ " / " +

		this.currentCharacter.getCombatLoad() + " (" + this.currentCharacter.getCombatLoadModifier() + ")"

	);
	this.currentDoc.setFontSize(10);
};

chargenPDF.prototype.createAdvancementTrack = function( left, top, width, smallFontSize ) {

	if(!smallFontSize)
		smallFontSize = 10;

	this.currentDoc.rect(left,top,width,143);
	//~ this.currentDoc.setFontStyle("bold");
	//~ this.currentDoc.setFontSize(14);
	//~ this.currentDoc.text(left + 5, top + 7, "Initial Edges");
	//~ this.currentDoc.setFontStyle("normal");
	//~ this.currentDoc.setFontSize(smallFontSize);
	//~ advLineLocation = top + 11;
	//~ advLineHeight = 4;
	//~ for( novice_slot = 0; novice_slot <= this.currentCharacter.selectedEdges.length; novice_slot++) {
		//~ if(this.currentCharacter.selectedEdges[novice_slot])
			//~ this.currentDoc.text(left + 2, advLineLocation + novice_slot * advLineHeight, this.currentCharacter.selectedEdges[novice_slot].local_name + " (" + this.currentCharacter.selectedEdges[novice_slot].bookObj.abbrev + " " + this.currentCharacter.selectedEdges[novice_slot].page + ")" );
		//~ else
			//~ this.currentDoc.text(left + 2, advLineLocation + novice_slot * advLineHeight, "");
	//~ }

	this.currentDoc.setFontStyle("bold");
	this.currentDoc.setFontSize(14);
	this.currentDoc.text(left + 5, top + 5, "Advancements");
	this.currentDoc.setFontStyle("normal");
	this.currentDoc.setFontSize(smallFontSize);

	advLineHeight = 4;
	advLineLocation = top + 10;

	this.currentDoc.setFontStyle("bold");
	this.currentDoc.text(left + 2, advLineLocation, "Novice");
	this.currentDoc.setFontStyle("normal");
//	advLineLocation += advLineHeight;
	for( adv_slot = 1; adv_slot < 23; adv_slot++) {
		advLineLocation += advLineHeight;
		current_xp = adv_slot * 5;

		if(this.currentCharacter.getSelectedAdvancements()[adv_slot - 1])
			selectedAdvancement = this.currentCharacter.getSelectedAdvancements()[adv_slot - 1];
		else
			selectedAdvancement = null;

		if( adv_slot % 4 == 0) {
			this.currentDoc.setFontStyle("bold");
			if(current_xp >= 100 ) {
				label = "Legendary";
			} else if(current_xp >= 80) {
				label = "Heroic";
			} else if(current_xp >= 60) {
				label = "Veteran";
			} else  {
				label = "Seasoned";
			}
			this.currentDoc.text(left + 2, advLineLocation, label);
			this.currentDoc.setFontStyle("normal");
			advLineLocation += advLineHeight
		}
		current_xp = current_xp.toString();
		if(current_xp.length == 1)
			current_xp = "  " + current_xp;
		if(current_xp.length == 2)
			current_xp = " " + current_xp;

		advancement_slot = 0;

		if( selectedAdvancement && selectedAdvancement.tag ) {
			if(selectedAdvancement.tag == "none") {
				this.currentDoc.text(left + 2, advLineLocation, current_xp + ": ( unused )");
			} else
			if(selectedAdvancement.tag == "attribute") {
				this.currentDoc.text(left + 2, advLineLocation, current_xp + ": " + selectedAdvancement.option1 + "++");
			} else if(selectedAdvancement.tag == "skill") {
				this.currentDoc.text(left + 2, advLineLocation, current_xp + ": +Skill - " + selectedAdvancement.option1.local_name);
			} else if(selectedAdvancement.tag == "edge") {
				this.currentDoc.setFontStyle("bold");
				this.currentDoc.text(left + 2, advLineLocation, current_xp + ": +Edge - " + selectedAdvancement.option1.local_name);
				this.currentDoc.setFontStyle("normal");
			} else {
				if(selectedAdvancement.option2.local_name && selectedAdvancement.option1.local_name ) {
					this.currentDoc.text(left + 2, advLineLocation, current_xp + ": " + selectedAdvancement.option1.local_name + "++, " + selectedAdvancement.option2.local_name  + "++");
				} else {
					if(selectedAdvancement.option2 ) {
						this.currentDoc.text(left + 2, advLineLocation, current_xp + ": " + selectedAdvancement.option2.local_name + "++");
					} else {
						this.currentDoc.text(left + 2, advLineLocation, current_xp + ": " + selectedAdvancement.option1.local_name + "++");
					}
				}
			}

		} else {
			this.currentDoc.text(left + 2, advLineLocation, current_xp + ":");
			this.currentDoc.lines([[0,0],[width-10,0]], left + 8, advLineLocation);
		}
	}
	this.currentDoc.setFontSize(10);
};

chargenPDF.prototype.createAttributesAndSkillsTable = function( skillcols, left, top, height, width, skill_line_height, smallFontSize  ) {

	if(!skill_line_height)
		skill_line_height = 5;
	if(!smallFontSize)
		smallFontSize = 10;

	// this.currentDoc.rect(5,50,200,80);
	this.currentDoc.rect(left, top, height, width);
	this.currentDoc.setFontStyle("bold");
	this.currentDoc.text(skillcols[0], top+5, "Agility: " + getDiceValue( this.currentCharacter.getAttributeDisplayValues().agility.id, this.useLang).local_label );
	this.currentDoc.text(skillcols[1], top+5, "Smarts: " + getDiceValue( this.currentCharacter.getAttributeDisplayValues().smarts.id, this.useLang).local_label );
	this.currentDoc.text(skillcols[2], top+5, "Spirit: " + getDiceValue( this.currentCharacter.getAttributeDisplayValues().spirit.id, this.useLang).local_label );
	this.currentDoc.text(skillcols[3], top+5, "Strength: " + getDiceValue( this.currentCharacter.getAttributeDisplayValues().strength.id, this.useLang).local_label );
	this.currentDoc.text(skillcols[4], top+5, "Vigor: " + getDiceValue( this.currentCharacter.getAttributeDisplayValues().vigor.id, this.useLang).local_label );

	// Agility Skills

	this.currentDoc.setFontSize(smallFontSize);
	this.currentDoc.setFontStyle("normal");
	currentSkillCount = 0;
	for(skill_counter = 0; skill_counter < this.currentCharacter.getSkillList().length; skill_counter++) {
		if(this.currentCharacter.getSkillList()[skill_counter].attribute == "agility") {

			currentSkill = this.currentCharacter.getSkillList()[skill_counter];
			//console.log("currentSkill", currentSkill);
			//console.log( currentSkill.local_name, currentSkill.id + currentSkill.boost);
			if( currentSkill.displayValue )
				this.currentDoc.text(skillcols[0], top+13+currentSkillCount * skill_line_height, currentSkill.local_name + ": " + currentSkill.displayValue );
			else
				this.currentDoc.text(skillcols[0], top+13+currentSkillCount * skill_line_height, this.currentCharacter.getSkillList()[skill_counter].local_name + ": -");
			currentSkillCount++;
		}
	}

	// Smarts Skills
	this.currentDoc.setFontSize(smallFontSize);
	this.currentDoc.setFontStyle("normal");
	currentSkillCount = 0;
	if( this.currentCharacter.arcane_background_selected && this.currentCharacter.arcane_background_selected.skill) {

		currentSkill = this.currentCharacter.getSkillList()[skill_counter];
		if( currentSkill )
			this.currentDoc.text(skillcols[1], top+13+currentSkillCount * skill_line_height, currentSkill.local_name + ": " + currentSkill.displayValue );
		else
			this.currentDoc.text(skillcols[1], top+13+currentSkillCount * skill_line_height, this.currentCharacter.getSkillList()[skill_counter].local_name + ": -");
		currentSkillCount++;
	}

	for(skill_counter = 0; skill_counter < this.currentCharacter.getSkillList().length; skill_counter++) {
		if(this.currentCharacter.getSkillList()[skill_counter].attribute == "smarts") {
			if(
				this.currentCharacter.getSkillList()[skill_counter].showSkill
			) {

				if( this.currentCharacter.getSkillList()[skill_counter].specialties && this.currentCharacter.getSkillList()[skill_counter].specialties.length > 0) {
					currentSkill = this.currentCharacter.getSkillList()[skill_counter];
					for( specialtyCounter = 0; specialtyCounter < currentSkill.specialties.length; specialtyCounter++) {
						currentSpecialtySkill = currentSkill.specialties[specialtyCounter];
						//this.currentDoc.text(skillcols[1], 63+currentSkillCount * skill_line_height, currentSkill.local_name + ": " + getDiceValue( currentSkill.value + currentSkill.boost ) );
						//console.log("currentSpecialtySkill", currentSpecialtySkill);
						this.currentDoc.text(skillcols[1], top+13+currentSkillCount * skill_line_height, currentSkill.local_name + " (" + currentSpecialtySkill.name + "): " + currentSpecialtySkill.displayValue );
						currentSkillCount++;
					}
				} else {
					currentSkill = this.currentCharacter.getSkillList()[skill_counter];
					if( currentSkill.displayValue ) {
						// this.currentDoc.text(skillcols[1], 63+currentSkillCount * skill_line_height, currentSkill.local_name[0] + currentSkill.local_name[1] +  currentSkill.local_name[2] + " (" + currentSkill.specify_text + "): " + getDiceValue( currentSkill.value + currentSkill.boost ) );
						this.currentDoc.text(skillcols[1], top+13+currentSkillCount * skill_line_height, currentSkill.local_name + ": " + currentSkill.displayValue );
					} else {
						this.currentDoc.text(skillcols[1], top+13+currentSkillCount * skill_line_height, this.currentCharacter.getSkillList()[skill_counter].local_name + ": -");
					}
					currentSkillCount++;
				}
			}

		}
	}

	// Spirit Skills
	this.currentDoc.setFontSize(smallFontSize);
	this.currentDoc.setFontStyle("normal");
	currentSkillCount = 0;
	for(skill_counter = 0; skill_counter < this.currentCharacter.getSkillList().length; skill_counter++) {

		if(
			this.currentCharacter.getSkillList()[skill_counter].showSkill
		) {
			if(this.currentCharacter.getSkillList()[skill_counter].attribute == "spirit") {
				currentSkill = this.currentCharacter.getSkillList()[skill_counter];
				//~ console.log("currentSkill", currentSkill);
				if( currentSkill.displayValue )
					this.currentDoc.text(skillcols[2], top+13+currentSkillCount * skill_line_height, currentSkill.local_name + ": " + currentSkill.displayValue );
				else
					this.currentDoc.text(skillcols[2], top+13+currentSkillCount * skill_line_height, this.currentCharacter.getSkillList()[skill_counter].local_name + ": -");
				currentSkillCount++;
			}
		}
	}

	// Strength Skills
	this.currentDoc.setFontSize(smallFontSize);
	this.currentDoc.setFontStyle("normal");
	currentSkillCount = 0;
	for(skill_counter = 0; skill_counter < this.currentCharacter.getSkillList().length; skill_counter++) {
		if(this.currentCharacter.getSkillList()[skill_counter].attribute == "strength") {
			currentSkill = this.currentCharacter.getSkillList()[skill_counter];
			if( currentSkill.displayValue )
				this.currentDoc.text(skillcols[3], top+13+currentSkillCount * skill_line_height, currentSkill.local_name + ": " + currentSkill.displayValue );
			else
				this.currentDoc.text(skillcols[3], top+13+currentSkillCount * skill_line_height, this.currentCharacter.getSkillList()[skill_counter].local_name + ": -");
			currentSkillCount++;
		}
	}

	this.currentDoc.setFontSize(10);
}

chargenPDF.prototype.createWeaponTable = function( label, cols, left, top, numlines  ) {

	if(!top)
		top = 170;

	width = cols[6] + 15;
	// Weapons
	this.currentDoc.rect(5,top,width,numlines * 4 + 15);
	this.currentDoc.setFontStyle("bold");
	this.currentDoc.setFontSize(14);
	this.currentDoc.text(10, top + 5, label);
	this.currentDoc.setFontStyle("normal");
	this.currentDoc.setFontSize(10);

	this.currentDoc.setFontStyle("bold");
	this.currentDoc.text(cols[0], top + 10, "Name");
	this.currentDoc.text(cols[1], top + 10, "Weight");
	this.currentDoc.text(cols[2], top + 10, "Damage");
	this.currentDoc.text(cols[3], top + 10, "AP");
	this.currentDoc.text(cols[4], top + 10, "Range");
	this.currentDoc.text(cols[5], top + 10, "ROF");
	this.currentDoc.text(cols[6], top + 10, "Shots");
	this.currentDoc.setFontStyle("normal");

	var natWeaponCount = 0;

	naturalWeapons = this.currentCharacter.hasNaturalWeapons();
	for(var nw_counter = 0; nw_counter < naturalWeapons.length; nw_counter++) {
		natWeaponCount++;
		this.currentDoc.text(cols[0] - 2, top + 15 + (  natWeaponCount  - 1) * 4, "* " + naturalWeapons[nw_counter].toString());
		this.currentDoc.lines([[0,0],[cols[1]-cols[0] - 1,0]], cols[0], top + 16 + ( natWeaponCount   - 1) * 4);
		this.currentDoc.lines([[0,0],[cols[2]-cols[1] - 1,0]], cols[1], top + 16 + ( natWeaponCount  - 1 ) * 4);
		this.currentDoc.lines([[0,0],[cols[3]-cols[2] - 1,0]], cols[2], top + 16 + ( natWeaponCount  - 1 ) * 4);
		this.currentDoc.lines([[0,0],[cols[4]-cols[3] - 1,0]], cols[3], top + 16 + ( natWeaponCount  - 1 ) * 4);
		this.currentDoc.lines([[0,0],[cols[5]-cols[4] - 1,0]], cols[4], top + 16 + ( natWeaponCount  - 1 ) * 4);
		this.currentDoc.lines([[0,0],[cols[6]-cols[5] - 1,0]], cols[5], top + 16 + ( natWeaponCount  - 1 ) * 4);
		this.currentDoc.lines([[0,0],[width-cols[5] - 11,0]], cols[6], top + 16 + ( natWeaponCount  - 1 ) * 4);
	}

	currentWeapons = this.currentCharacter.getSelectedHandWeapons();
	currentWeapons = currentWeapons.concat(this.currentCharacter.getSelectedRangedWeapons());
	for(var w_counter = 0; w_counter < numlines - natWeaponCount; w_counter++) {
		//~ console.log( currentWeapons[w_counter] );
		if(currentWeapons[w_counter]) {
			if( currentWeapons[w_counter].customName ) {
				if( currentWeapons[w_counter].readiedLocation || currentWeapons[w_counter].alwaysReady )
					this.currentDoc.text(cols[0] - 2, top + 15 + ( w_counter + natWeaponCount ) * 4, "* " + currentWeapons[w_counter].customName.toString());
				else
					this.currentDoc.text(cols[0], top + 15 + ( w_counter + natWeaponCount ) * 4, currentWeapons[w_counter].customName.toString());
			} else {
				if( currentWeapons[w_counter].local_name ) {
					localName = currentWeapons[w_counter].local_name.toString();

					if( currentWeapons[w_counter].purchaseCost == 0 )
						localName += " (free)";
					else if ( currentWeapons[w_counter].purchaseCost < currentWeapons[w_counter].cost )
						localName += " (reduced)";
					if( currentWeapons[w_counter].readiedLocation || currentWeapons[w_counter].alwaysReady )
						this.currentDoc.text(cols[0] - 2, top + 15 + ( w_counter + natWeaponCount ) * 4, "* " + localName);
					else
						this.currentDoc.text(cols[0], top + 15 + ( w_counter + natWeaponCount ) * 4, localName);
				}
			}

			if(currentWeapons[w_counter].localWeight ) {
				this.currentDoc.text(cols[1], top + 15 + ( w_counter + natWeaponCount ) * 4, currentWeapons[w_counter].localWeight.toString());
			} else {
				if(currentWeapons[w_counter].weight )
					this.currentDoc.text(cols[1], top + 15 + ( w_counter + natWeaponCount ) * 4, currentWeapons[w_counter].weight.toString());
			}

			if(currentWeapons[w_counter].localDamage ) {
				this.currentDoc.text(cols[2], top + 15 + ( w_counter + natWeaponCount ) * 4, currentWeapons[w_counter].localDamage.toString());
			} else {
				if(currentWeapons[w_counter].damage )
					this.currentDoc.text(cols[2], top + 15 + ( w_counter + natWeaponCount ) * 4, currentWeapons[w_counter].displayDamage.toString());
			}

			if(currentWeapons[w_counter].localAP ) {
				this.currentDoc.text(cols[3], top + 15 + ( w_counter + natWeaponCount ) * 4, currentWeapons[w_counter].localAP.toString());
			} else {
				if(currentWeapons[w_counter].ap )
					this.currentDoc.text(cols[3], top + 15 + ( w_counter + natWeaponCount ) * 4, currentWeapons[w_counter].ap.toString());
				else
					this.currentDoc.text(cols[3], top + 15 + ( w_counter + natWeaponCount ) * 4, "-");
			}



			if(currentWeapons[w_counter].range )
				this.currentDoc.text(cols[4], top + 15 + ( w_counter + natWeaponCount ) * 4, currentWeapons[w_counter].range.toString());

			if(currentWeapons[w_counter].rof )
				this.currentDoc.text(cols[5], top + 15 + ( w_counter + natWeaponCount ) * 4, currentWeapons[w_counter].rof.toString());

			if(currentWeapons[w_counter].shots ) {
				this.currentDoc.text(cols[6], top + 15 + ( w_counter + natWeaponCount ) * 4, currentWeapons[w_counter].shots.toString());
			} else {
				if(currentWeapons[w_counter].range )
					this.currentDoc.text(cols[6], top + 15 + ( w_counter + natWeaponCount ) * 4, "1");
			}

		}

		this.currentDoc.lines([[0,0],[cols[1]-cols[0] - 1,0]], cols[0], top + 16 + ( w_counter + natWeaponCount ) * 4);
		this.currentDoc.lines([[0,0],[cols[2]-cols[1] - 1,0]], cols[1], top + 16 + ( w_counter + natWeaponCount ) * 4);
		this.currentDoc.lines([[0,0],[cols[3]-cols[2] - 1,0]], cols[2], top + 16 + ( w_counter + natWeaponCount ) * 4);
		this.currentDoc.lines([[0,0],[cols[4]-cols[3] - 1,0]], cols[3], top + 16 + ( w_counter + natWeaponCount ) * 4);
		this.currentDoc.lines([[0,0],[cols[5]-cols[4] - 1,0]], cols[4], top + 16 + ( w_counter + natWeaponCount ) * 4);
		this.currentDoc.lines([[0,0],[cols[6]-cols[5] - 1,0]], cols[5], top + 16 + ( w_counter + natWeaponCount ) * 4);
		this.currentDoc.lines([[0,0],[width-cols[5] - 11,0]], cols[6], top + 16 + ( w_counter + natWeaponCount ) * 4);
	}

	this.currentDoc.setFontSize(10);
}

chargenPDF.prototype.createEquipmentTable = function(label, left, top, width, height) {

	// Equipment

	this.currentDoc.rect(left, top, width, height);
	this.currentDoc.setFontStyle("bold");
	this.currentDoc.setFontSize(14);
	this.currentDoc.text(left + 1, top + 5, label);
	this.currentDoc.setFontStyle("normal");
	this.currentDoc.setFontSize(10);

	current_equipment = this.currentCharacter.getSelectedMundaneGear();
	var droppedInCombatFootnote = "";
	var currentLine = 0;
	for(e_counter = 0; e_counter < 9; e_counter++) {
		if(current_equipment[e_counter]) {

			equipment_line = "";

			localName = current_equipment[e_counter].local_name.toString();

			if( current_equipment[e_counter].purchaseCost == 0 )
				localName += " (free)";
			else if ( current_equipment[e_counter].purchaseCost < current_equipment[e_counter].cost )
				localName += " (reduced)";

			if(current_equipment[e_counter].name )
				equipment_line += localName;
			if(current_equipment[e_counter].count && current_equipment[e_counter].count > 1 )
				equipment_line += " x" + current_equipment[e_counter].count;
			if(current_equipment[e_counter].weight ) {
				equipment_line += " - " + current_equipment[e_counter].weight + "lbs";
				if(current_equipment[e_counter].count && current_equipment[e_counter].count > 1 )
					equipment_line += " each";
			}

			if( current_equipment[e_counter].droppedDuringCombat > 0) {

				equipment_line += " ‡";
				droppedInCombatFootnote = "‡ Dropped in Combat";
			}

			this.currentDoc.text(left + 1, top + 10 + e_counter * 4, equipment_line);
			currentLine = e_counter;

		}
	}

	currentLine++;
	currentLine++;
	this.currentDoc.text(left + 5, top + 10 + currentLine * 4, droppedInCombatFootnote);

	var installedCyberware = this.currentCharacter.getInstalledCyberware();
	if( installedCyberware.length > 0 ) {

		cyberwareHeight = installedCyberware.length * 4 + 2;

		this.currentDoc.setFontStyle("bold");
		this.currentDoc.setFontSize(14);
		this.currentDoc.text(left + 1, top + height - cyberwareHeight, "Cyberware");
		this.currentDoc.setFontStyle("normal");
		this.currentDoc.setFontSize(10);
		for( var cCounter = 0; cCounter < installedCyberware.length; cCounter++) {
			if( installedCyberware[ cCounter ].customName )
				var equipment_line = installedCyberware[cCounter].customName + " (" + installedCyberware[cCounter].local_name + ")"
			else
				var equipment_line = installedCyberware[ cCounter ].local_name
			this.currentDoc.text(left + 1, top + height - cyberwareHeight + 4 + cCounter * 4, equipment_line);
		}
	}

	this.currentDoc.setFontSize(10);
}

chargenPDF.prototype.createHindrancesTable = function(label, left, top, width, height, smallFontSize) {
	if(!smallFontSize)
		smallFontSize = 10;
	this.currentDoc.rect(left,top,width,height);
	this.currentDoc.setFontStyle("bold");
	this.currentDoc.setFontSize(14);
	this.currentDoc.text(left + 5, top + 5, label);
	this.currentDoc.setFontStyle("normal");
	this.currentDoc.setFontSize(smallFontSize);
	for(hind_counter = 0; hind_counter < this.currentCharacter.getInstalledHindrances().length; hind_counter++) {
		majorMinor = "";
		if( this.currentCharacter.getInstalledHindrances()[hind_counter].severity == "major")
			majorMinor = "major, ";
		if( this.currentCharacter.getInstalledHindrances()[hind_counter].severity == "minor")
			majorMinor = "minor, ";
		if( this.currentCharacter.getInstalledHindrances()[hind_counter].racial > 0)
			majorMinor = "racial, ";
		if( this.currentCharacter.getInstalledHindrances()[hind_counter].cyber)
			majorMinor = "cyber, ";
		if(this.currentCharacter.getInstalledHindrances()[hind_counter].specify_text && this.currentCharacter.getInstalledHindrances()[hind_counter].specifyField != "")
			this.currentDoc.text(left + 5, top + 10 + hind_counter * Math.floor(smallFontSize / 2) -1 , this.currentCharacter.getInstalledHindrances()[hind_counter].local_name + ": " + this.currentCharacter.getInstalledHindrances()[hind_counter].specifyField + " (" + majorMinor + this.currentCharacter.getInstalledHindrances()[hind_counter].bookObj.abbrev + " " + this.currentCharacter.getInstalledHindrances()[hind_counter].page + ")" );
		else
			this.currentDoc.text(left + 5, top + 10 + hind_counter * Math.floor(smallFontSize / 2) -1 , this.currentCharacter.getInstalledHindrances()[hind_counter].local_name + " (" + majorMinor + this.currentCharacter.getInstalledHindrances()[hind_counter].bookObj.abbrev + " " + this.currentCharacter.getInstalledHindrances()[hind_counter].page + ")" );
	}
	this.currentDoc.setFontSize(10);
}

chargenPDF.prototype.createEdgesTable = function(label, left, top, width, height, smallFontSize) {
	if(!smallFontSize)
		smallFontSize = 10;
	this.currentDoc.rect(left,top,width,height);
	this.currentDoc.setFontStyle("bold");
	this.currentDoc.setFontSize(14);
	this.currentDoc.text(left + 5, top + 5, label);
	this.currentDoc.setFontStyle("normal");
	this.currentDoc.setFontSize(smallFontSize);
	if( this.currentCharacter.getRace().edges ) {
	}
	for(edge_counter = 0; edge_counter < this.currentCharacter.getInstalledEdges().length; edge_counter++) {
		majorMinor = "";

		if( this.currentCharacter.getInstalledEdges()[edge_counter].racial > 0)
			majorMinor = "racial, ";
		if( this.currentCharacter.getInstalledEdges()[edge_counter].cyber)
			majorMinor = "cyber, ";
		if(this.currentCharacter.getInstalledEdges()[edge_counter].specify_text && this.currentCharacter.getInstalledEdges()[edge_counter].specifyField != "")
			this.currentDoc.text(left + 5, top + 10 + edge_counter * Math.floor(smallFontSize / 2) -1 , this.currentCharacter.getInstalledEdges()[edge_counter].local_name + ": " + this.currentCharacter.getInstalledEdges()[edge_counter].specifyField + " (" + majorMinor + this.currentCharacter.getInstalledEdges()[edge_counter].bookObj.abbrev + " " + this.currentCharacter.getInstalledEdges()[edge_counter].page + ")" );
		else
			this.currentDoc.text(left + 5, top + 10 + edge_counter * Math.floor(smallFontSize / 2) -1 , this.currentCharacter.getInstalledEdges()[edge_counter].local_name + " (" + majorMinor + this.currentCharacter.getInstalledEdges()[edge_counter].bookObj.abbrev + " " + this.currentCharacter.getInstalledEdges()[edge_counter].page + ")" );
	}
	this.currentDoc.setFontSize(10);
}

chargenPDF.prototype.createPowersTable = function(label, left, top, width, height, smallFontSize) {

	//this.currentDoc.rect(left,top,width,height);
	if(!smallFontSize)
		smallFontSize = 7;

	if( this.currentCharacter.hasArcaneBackground() ) {
		this.currentDoc.rect(left, top ,width, height);
		this.currentDoc.setFontStyle("bold");
		this.currentDoc.setFontSize(14);

		if( this.currentCharacter.usesPowerPoints() )
			this.currentDoc.text(left + 1, top + 5, this.currentCharacter.getSelectedArcaneBackground().local_name + " - " + this.currentCharacter.getPowerPointsAvailable() + " power points");
		else
			this.currentDoc.text(left + 1, top + 5, this.currentCharacter.getSelectedArcaneBackground().local_name + "");

		this.currentDoc.setFontStyle("normal");
		this.currentDoc.setFontSize(10);
		current_location = top + 5;
		for(p_counter = 0; p_counter < this.currentCharacter.getSelectedPowers().length; p_counter++) {
			current_location += 5;
			if( this.currentCharacter.getSelectedPowers()[p_counter].customName != "") {
				power_name = this.currentCharacter.getSelectedPowers()[p_counter].customName + " (" + this.currentCharacter.getSelectedPowers()[p_counter].local_name;
				if( this.currentCharacter.getSelectedPowers()[p_counter].trapping.local_name != "" )
					power_name += ", " + this.currentCharacter.getSelectedPowers()[p_counter].trapping.local_name  + ")";
				else
					power_name += ")";
				this.currentDoc.text(left+1, current_location , power_name );
			} else {
				if( this.currentCharacter.getSelectedPowers()[p_counter].trapping != "" ) {
					this.currentDoc.text(left+1, current_location , this.currentCharacter.getSelectedPowers()[p_counter].local_name + " (" + this.currentCharacter.getSelectedPowers()[p_counter].trapping.local_name  + ")" );
				} else {
					this.currentDoc.text(left+1, current_location , this.currentCharacter.getSelectedPowers()[p_counter].local_name );
				}
			}

			details_line = "";

			if(this.currentCharacter.getSelectedPowers()[p_counter].cost) {
				details_line += "C:" + this.currentCharacter.getSelectedPowers()[p_counter].cost + " | ";
			}
			if(this.currentCharacter.getSelectedPowers()[p_counter].range) {
				details_line += "R:" + this.currentCharacter.getSelectedPowers()[p_counter].range + " | ";
			}
			if(this.currentCharacter.getSelectedPowers()[p_counter].damage) {
				details_line += "Dm:" + this.currentCharacter.getSelectedPowers()[p_counter].damage + " | ";
			}
			if(this.currentCharacter.getSelectedPowers()[p_counter].local_duration) {
				details_line += "Du:" + this.currentCharacter.getSelectedPowers()[p_counter].local_duration + " | ";
			}
			if(this.currentCharacter.getSelectedPowers()[p_counter].bookObj) {
				details_line += this.currentCharacter.getSelectedPowers()[p_counter].bookObj.abbrev + " " + this.currentCharacter.getSelectedPowers()[p_counter].page;
			}

			if(details_line != "") {
				current_location += 3;
				this.currentDoc.setFontSize(smallFontSize);
				this.currentDoc.text(left + 1, current_location , details_line );
				this.currentDoc.setFontSize(10);
			}
		}
	} else {
		this.currentDoc.rect(left, top ,width, height);

		this.currentDoc.setFontStyle("bold");
		this.currentDoc.setFontSize(14);
		this.currentDoc.text(left + 5, top + 5, "Powers");
		this.currentDoc.setFontStyle("normal");
		this.currentDoc.setFontSize(10);

		this.currentDoc.text(left + 5, top + 12, "No Arcane Background Selected");
	}
	this.currentDoc.setFontSize(10);
}

chargenPDF.prototype.createArmorTable = function(label, left, top, width, height) {
	// Armor
	this.currentDoc.rect(left, top ,width, height);
	this.currentDoc.setFontStyle("bold");
	this.currentDoc.setFontSize(14);
	this.currentDoc.text(left + 1, top + 5, label);
	this.currentDoc.setFontStyle("normal");
	this.currentDoc.setFontSize(9);


	currentArmor = this.currentCharacter.getSelectedArmor();
	a_counter_total = 0;
	for(a_counter = 0; a_counter < currentArmor.length; a_counter++) {
		if(currentArmor[a_counter]) {
			armor_line = "";

			localName = currentArmor[a_counter].local_name.toString();

			if( currentArmor[a_counter].purchaseCost == 0 )
				localName += " (free)";
			else if ( currentArmor[a_counter].purchaseCost < currentArmor[a_counter].cost )
				localName += " (reduced)";

			if(currentArmor[a_counter].name )
				armor_line += localName;
			if(currentArmor[a_counter].armor )
				armor_line += " - armor " + currentArmor[a_counter].armor;
			if(currentArmor[a_counter].weight )
				armor_line += ", " + currentArmor[a_counter].weight + "lbs";

			this.currentDoc.text(left + 1, top + 10 + a_counter * 5, armor_line);
			if(currentArmor[a_counter].local_notes ) {
				this.currentDoc.setFontSize(6);
				this.currentDoc.text(left + 1, top + 10 + a_counter * 5 + 3, currentArmor[a_counter].local_notes);
				this.currentDoc.setFontSize(10);
			}
			a_counter_total++;
		}

	}

	currentShields = this.currentCharacter.getSelectedShields();
	for(b_counter = 0; b_counter < currentShields.length; b_counter++) {
		if(currentShields[b_counter]) {
			armor_line = "";

			localName = currentShields[b_counter].local_name.toString();

			if( currentShields[b_counter].purchaseCost == 0 )
				localName += " (free)";
			else if ( currentShields[b_counter].purchaseCost < currentShields[b_counter].cost )
				localName += " (reduced)";


			if(currentShields[b_counter].name )
				armor_line += localName;
			if(currentShields[b_counter].parry )
				armor_line += " - parry " + currentShields[b_counter].parry;
			if(currentShields[b_counter].parry )
				armor_line += " - armor vs ranged " + currentShields[b_counter].armor;
			if(currentShields[b_counter].weight )
				armor_line += ", " + currentShields[b_counter].weight + "lbs";

			this.currentDoc.text(left + 1, top + 10 + (a_counter_total + b_counter) * 5, armor_line);
			if( currentShields[b_counter].local_notes ) {
				this.currentDoc.setFontSize(6);
				this.currentDoc.text(left + 1, top + 10 + (a_counter_total + b_counter) * 5 + 3, currentShields[b_counter].local_notes);
				this.currentDoc.setFontSize(10);
			}
		}
	}

	this.currentDoc.setFontSize(10);
}


