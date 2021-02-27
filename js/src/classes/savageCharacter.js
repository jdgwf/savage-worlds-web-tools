"use strict";

function savageCharacter (useLang) {
    this.appVersion = globalAppVersion;

    var _books = Array();
    var _useLang = "en-US";

    var _availableEdges = Array();
    var _combatEdges = Array();

    var _name = "";
    var _background = "";

    var _description = "";

    var _startingFunds = 500;
    var _currentFunds = 500;

    var _naturalWeapons = Array();
    var _attributeBoost = 0;
    var _displayAttributes = 0;

    var _availableHindrances = Array();

    var _diceValues = {
        agility: Array(),
        smarts: Array(),
        spirit: Array(),
        strength: Array(),
        vigor: Array(),
    }

    var _isNew = true;
    var _multipleLanguages = false;
    var _usesStrain = false;

    var _selectedSPCPowers = Array();

    var _powerAlterations = Array();
    var _loadLimit = 0;

    var _activeSkills = Array();

    var _characterJournal = Array();

    var _spcExtraPowerPoints = 0;

    var _knownLanguages = Array();

    var _knownLanguagesLimit = 0;

    var _XP = 0;

    var _innateAttacks = Array();

    var _uuid = -1;

    var _availableCyberware = Array();

    var allSkills = Array();
    var _options = Array();

    var _selectedAdvancements = Array();
    var _selectedEquipment = Array();

    var _selectedPowers = Array();
    var _powerPointsAvailable = 0;
    var _totalPowersKnown = 0;
    var _additionalPowersKnown = 0;

    var _usesSanity = false;
    var _usesGutsSkill = false;

    var _usesRiftsCreation = false;

    var _usesSPCCreation = false;
    var _SPCRisingStars = false;
    var _SPCCurrentPowerPoints = 0;
    var _SPCTakenExtraPowerPoints = false;
    var _SPCPowerLevels = Array();
    var _SPCPowerLimit = 0;
    var _SPCSelectedPowerLevel = 0;
    var _SPCStartingPowerPoints = 0;

    var _selectedArmor = Array();
    var _selectedMundaneGear = Array();
    var _selectedRangedWeapons = Array();
    var _selectedHandWeapons = Array();
    var _selectedShields = Array();

    var _perkOptions = Array();

    var _spcGenericModifiers = Array();

    var _attributes = {};

    var _attributeBoost = {};

    var _derived = {};

    var _perks = Array();

    var _advances = Array();

    var _skills = Array();

    var _edges = Array();

    var _gear = Array();

    var _race = {};

    var _raceOptions = Array();

    var _race = {};

    var _genderOptions = Array();

    var _selectedPerks = Array();

    var _skillList = Array();

    var _gender = {};

    var _skillValues = {};

    var _customRangedWeapons = [];
    var _customHandWeapons = [];
    var _customGear = [];
    var _customArmor = [];
    var _customShields = [];

    var _selectedHindrances = Array();
    var _selectedEdges = Array();

    var _installedHindrances = Array();
    var _installedEdges = Array();

    var _bornAHero = false;

    var _selectedArcaneBackground = null;

    var _load = {
        currentLoad: 0,
        loadModifier: 0,
        combatLoad: 0,
        combatLoadModifier: 0
    }

    var _allSkills = Array();


    var _agilitySkills = Array();
    var _smartsSkills = Array();
    var _spiritSkills = Array();
    var _vigorSkills = Array();
    var _strengthSkills = Array();

    var _availablePerkPoints = 0;
    var    _totalPerkPoints = 0;
    var _optimizedPerkPoints = 0;
    var _availableEdgePoints = 0;

    var _isValid = true;
    var _validSPCoverLimitShown = false;
    var _validationReport = Array();
    var _warningReport = Array();

    var _skillPointsAvailable = 15;
    var _skillPointsUsed = 0;

    var _strainBoost = 0;
    var _doubleStrain = 0;

    var _linguistSelected = false;

    var _encumbranceMultiplier = 5;

    var _installedCyberware = Array();

    var _currentStrain = 0;
    var _maxStrain = 0;
    var _availableMundaneGear = Array();
    var _availableArmor = Array();
    var _availableHandWeapons = Array();
    var _availableRangedWeapons = Array();
    var _availableShields = Array();

    var _availableArcaneBackgrounds = Array();
    var _availablePowers = Array();
    var _availableTrappings = Array();

    var _secondMajorHindranceChosen = false;
    var _attributePointsUsed = 0;
    var _hasArcaneBackground = false;

    var _currentArcaneBackground = {};
    var _attributePointsAvailable = 5;
    var _attributePointsUsed = 0;
    var _xpOptions = Array();

    this.init = function(useLang){

        if( useLang )
            _useLang = useLang;
        else if( localStorage["users_preferred_language"] )
            _useLang = localStorage["users_preferred_language"];
        else
            _useLang = "en-US";

        _name = "";
        _background = "";

        _description = "";

        _startingFunds = 500;
        _currentFunds = 500;

        _naturalWeapons = Array();

        _isNew = true;
        _multipleLanguages = false;
        _usesStrain = false;

        _selectedSPCPowers = Array();

        _powerAlterations = Array();

        _activeSkills = Array();

        _characterJournal = Array();

        _spcExtraPowerPoints = 0;

        _knownLanguages = Array();

        _knownLanguagesLimit = 0;

        _innateAttacks = Array();

        _installedCyberware = Array();

        _xpOptions = Array();

        for( var optCounter = 0; optCounter <= 100; optCounter++) {
            var xpObj = {
                value: optCounter,
                rankValue: 0,
                label: optCounter,
                rankName: "temp"
            };
            if( optCounter < 20) {
                xpObj.rankName = this.getTranslation("CHARGEN_RANK_NOVICE");
                xpObj.rankValue = 0;
            } else if (optCounter < 40 ) {
                xpObj.rankName = this.getTranslation("CHARGEN_RANK_SEASONED");
                xpObj.rankValue = 1;
            } else if (optCounter < 60 ) {
                xpObj.rankName = this.getTranslation("CHARGEN_RANK_VETERAN");
                xpObj.rankValue = 2;
            } else if (optCounter < 80 ) {
                xpObj.rankName = this.getTranslation("CHARGEN_RANK_HEROIC");
                xpObj.rankValue = 3;
            } else {
                xpObj.rankName = this.getTranslation("CHARGEN_RANK_LEGENDARY");
                xpObj.rankValue = 4;
            }

            if( optCounter == 0 )
                _XP = xpObj;
            _xpOptions.push( xpObj );
        }

        _uuid = this.makeUUID();

        _options = Array();

        _selectedAdvancements = Array();
        _selectedEquipment = Array();

        _selectedPowers = Array();
        _powerPointsAvailable = 0;
        _totalPowersKnown = 0;
        _additionalPowersKnown = 0

        _usesSanity = false;
        _usesGutsSkill = false;

        _usesRiftsCreation = false;

        _usesSPCCreation = false;
        _SPCRisingStars = false;
        _SPCCurrentPowerPoints = 0;
        _SPCTakenExtraPowerPoints = false;
        _SPCPowerLevels = Array();
        _SPCSelectedPowerLevel = 0;
        _SPCPowerLevels[0] = {
            power_points: 15,
            rising_stars_power_points: 5,
            name: this.getTranslation("SPC_PULP_HEROES")
        };
        _SPCPowerLevels[1] = {
            power_points: 30,
            rising_stars_power_points: 10,
            name: this.getTranslation("SPC_STREET_FIGHTERS")
        };
        _SPCPowerLevels[2] = {
            power_points: 45,
            rising_stars_power_points: 20,
            name: this.getTranslation("SPC_FOUR_COLOR")
        };
        _SPCPowerLevels[3] = {
            power_points: 60,
            rising_stars_power_points: 30,
            name: this.getTranslation("SPC_HEAVY_HITTERS")
        };
        _SPCPowerLevels[4] = {
            power_points: 75,
            rising_stars_power_points: 50,
            name: this.getTranslation("SPC_COSMIC")
        };

        _selectedArmor = Array();
        _selectedMundaneGear = Array();
        _selectedRangedWeapons = Array();
        _selectedHandWeapons = Array();
        _selectedShields = Array();

        _perkOptions = Array(
            {
                label: "- " + this.getTranslation("CHARGEN_SELECT_A_PERK") + " -",
                tag: "null",
                cost: 0,
                spcOnly: false,
                effect: function() {

                }
            },
            {
                label: this.getTranslation("CHARGEN_PERKS_ATTRIBUTE"),
                tag: "attribute",
                cost: 2,
                spcOnly: false,
                effect: function(savageCharObj) {
                    //savageCharObj.attributePointsAvailable = savageCharObj.attributePointsAvailable + 1;
                    savageCharObj.incrementAttributePointsAvailable( 1 );
                }
            },
            {
                label: this.getTranslation("CHARGEN_PERKS_EDGE"),
                tag: "edge",
                cost: 2,
                spcOnly: false,
                effect: function(savageCharObj) {
                    savageCharObj.incrementAvailbleEdgePoints( 1 );
                }
            },
            {
                label: this.getTranslation("CHARGEN_PERKS_SKILL"),
                tag: "skill",
                cost: 1,
                spcOnly: false,
                effect: function(savageCharObj) {
                    //savageCharObj.skillPointsAvailable = savageCharObj.skillPointsAvailable + 1;
                    savageCharObj.incrementSkillPointsAvailable( 1 );
                }
            },
            {
                label: this.getTranslation("CHARGEN_PERKS_FUNDS"),
                tag: "funds",
                cost: 1,
                spcOnly: false,
                effect: function(savageCharObj) {
                    //savageCharObj.startingFunds = savageCharObj.startingFunds * 2;
                    savageCharObj.addCurrentFunds( savageCharObj.getStartingFunds() );
                }
            },
            {
                label: this.getTranslation("SPC_ADDITIONAL_POWER_POINTS_PERK"),
                tag: "spc-power-points",
                cost: 2,
                spcOnly: true,
                effect: function(savageCharObj) {
                    //savageCharObj.SPCTakenExtraPowerPoints = true;
                    savageCharObj.setTakenSPCExtraPowerPoints( true );
                }
            }
        );

        _spcGenericModifiers = Array();

        _spcGenericModifiers.push( {
            "local_name": this.getTranslation("SPC_MOD_CONTIGENT"),
            // "points": Array(-1,-2)
            "points": [0,-1,-2],
            "currentCost": 0
        });

        _spcGenericModifiers.push( {
            "local_name": this.getTranslation("SPC_MOD_DEVICE"),
            //~ "points": Array(-1,-2)
            "points": [0,-1,-2],
            "currentCost": 0
        });

        _spcGenericModifiers.push( {
            "local_name": this.getTranslation("SPC_MOD_LIMITATION"),
            //~ "points": Array(-1,-2)
            "points": [0,-1,-2],
            "currentCost": 0
        });

        _spcGenericModifiers.push( {
            "local_name": this.getTranslation("SPC_MOD_PROJECTILE"),
            "points": 1,
            "currentCost": 0
        });

        _spcGenericModifiers.push( {
            "local_name": this.getTranslation("SPC_MOD_RTA"),
            "points": 2,
            "currentCost": 0
        });

        _spcGenericModifiers.push( {
            "local_name": this.getTranslation("SPC_MOD_RA"),
            "points": -1,
            "currentCost": 0
        });

        _spcGenericModifiers.push( {
            "local_name": this.getTranslation("SPC_MOD_STA"),
            "points": -1,
            "currentCost": 0
        });

        _spcGenericModifiers.push( {
            "local_name": this.getTranslation("SPC_MOD_SWITCHABLE"),
            "points": 2,
            "switchable": 1,
            "currentCost": 0
        });



        for( var bookCounter = 0; bookCounter < savageWorldsBooksList.length; bookCounter++ ) {
            _books[bookCounter] = get_book_by_id( savageWorldsBooksList[bookCounter].id );
            if( _books[bookCounter].id == 1 ) {
                _books[bookCounter].inUse = true;
            } else {
                _books[bookCounter].inUse = false;
            }
            for( var setting_c = 0; setting_c < _books[bookCounter].setting_rules.length; setting_c++) {
                _books[bookCounter].setting_rules[setting_c].inUse = false;
            }
        }

        // Localize Edges
        for( var edgeCounter = 0; edgeCounter < savageWorldsEdges.length; edgeCounter++ ) {
            savageWorldsEdges[edgeCounter].local_name = this.getLocalName( savageWorldsEdges[edgeCounter].name );
            savageWorldsEdges[edgeCounter].select_option_name = savageWorldsEdges[edgeCounter].local_name;

            if( savageWorldsEdges[edgeCounter].child == 1 ) {
                savageWorldsEdges[edgeCounter].select_option_name = "↳ " + savageWorldsEdges[edgeCounter].select_option_name;
            }

            if( savageWorldsEdges[edgeCounter].child == 2 ) {
                savageWorldsEdges[edgeCounter].select_option_name = "↳ " + savageWorldsEdges[edgeCounter].select_option_name;
            }

            //savageWorldsEdges[edgeCounter].local_description = this.getLocalName( savageWorldsEdges[edgeCounter].description );
            savageWorldsEdges[edgeCounter].bookObj = get_book_by_id( savageWorldsEdges[edgeCounter].book );
        }

        // Localize Hindrances
        for( var hindranceCounter = 0; hindranceCounter < savageWorldsHindrances.length; hindranceCounter++ ) {
            savageWorldsHindrances[hindranceCounter].local_name = this.getLocalName( savageWorldsHindrances[hindranceCounter].name );
            savageWorldsHindrances[hindranceCounter].select_option_name = savageWorldsHindrances[hindranceCounter].local_name;
            if( savageWorldsHindrances[hindranceCounter].severity == "major")
                savageWorldsHindrances[hindranceCounter].select_option_name = savageWorldsHindrances[hindranceCounter].local_name + " (" + this.getTranslation("CHARGEN_MAJOR_HINDRANCE") + ")";
            else if( savageWorldsHindrances[hindranceCounter].severity == "minor")
                savageWorldsHindrances[hindranceCounter].select_option_name = savageWorldsHindrances[hindranceCounter].local_name  + " (" + this.getTranslation("CHARGEN_MINOR_HINDRANCE") + ")";

    //        savageWorldsHindrances[hindranceCounter].local_description = this.getLocalName( savageWorldsHindrances[hindranceCounter].description );
            savageWorldsHindrances[hindranceCounter].bookObj = get_book_by_id( savageWorldsHindrances[hindranceCounter].book );
        }

        // Localize SPC Powers...

        for( var spcCounter = 0; spcCounter < savageWorldsSPCPowers.length; spcCounter++ ) {
            savageWorldsSPCPowers[spcCounter].local_name = this.getLocalName( savageWorldsSPCPowers[spcCounter].name );
            savageWorldsSPCPowers[spcCounter].select_option_name = savageWorldsSPCPowers[spcCounter].local_name;

            savageWorldsSPCPowers[spcCounter].modifiersObj =  JSON.parse(savageWorldsSPCPowers[spcCounter].modifiers)
            for( var modCounter = 0; modCounter < savageWorldsSPCPowers[spcCounter].modifiersObj.length; modCounter++ ) {
                savageWorldsSPCPowers[spcCounter].modifiersObj[ modCounter ].local_name = this.getLocalName( savageWorldsSPCPowers[spcCounter].modifiersObj[ modCounter ].name )
                if( savageWorldsSPCPowers[spcCounter].modifiersObj[ modCounter ].points[0] == "[" )
                        savageWorldsSPCPowers[spcCounter].modifiersObj[ modCounter ].points = JSON.parse(     savageWorldsSPCPowers[spcCounter].modifiersObj[ modCounter ].points );
            }

            savageWorldsSPCPowers[spcCounter].genericModifiersObj = angular.copy( _spcGenericModifiers );

    //        savageWorldsSPCPowers[spcCounter].local_description = this.getLocalName( savageWorldsSPCPowers[spcCounter].description );
            savageWorldsSPCPowers[spcCounter].bookObj = get_book_by_id( savageWorldsSPCPowers[spcCounter].book );
        }

        // Localize Arcane Backgrounds
        for( var abCounter = 0; abCounter < savageWorldsArcaneBackgrounds.length; abCounter++ ) {
            savageWorldsArcaneBackgrounds[abCounter].local_name = this.getLocalName( savageWorldsArcaneBackgrounds[abCounter].name );
            savageWorldsArcaneBackgrounds[abCounter].select_option_name = savageWorldsArcaneBackgrounds[abCounter].local_name;
            savageWorldsArcaneBackgrounds[abCounter].local_backlash = this.getLocalName( savageWorldsArcaneBackgrounds[abCounter].backlash );
    //        savageWorldsArcaneBackgrounds[abCounter].local_description = this.getLocalName( savageWorldsArcaneBackgrounds[abCounter].description );
            savageWorldsArcaneBackgrounds[abCounter].bookObj = get_book_by_id( savageWorldsArcaneBackgrounds[abCounter].book );
        }

        // Localize Arcane Trappings
        for( var abCounter = 0; abCounter < savageWorldsArcaneTrappings.length; abCounter++ ) {
            savageWorldsArcaneTrappings[abCounter].local_name = this.getLocalName( savageWorldsArcaneTrappings[abCounter].name );
            savageWorldsArcaneTrappings[abCounter].select_option_name = savageWorldsArcaneTrappings[abCounter].local_name;
    //        savageWorldsArcaneTrappings[abCounter].local_description = this.getLocalName( savageWorldsArcaneTrappings[abCounter].description );
            savageWorldsArcaneTrappings[abCounter].bookObj = get_book_by_id( savageWorldsArcaneTrappings[abCounter].book );
        }

        // Localize Cyberware
        for( var abCounter = 0; abCounter < savageWorldsCyberware.length; abCounter++ ) {
            savageWorldsCyberware[abCounter].local_name = this.getLocalName( savageWorldsCyberware[abCounter].name );
            savageWorldsCyberware[abCounter].local_description = this.getLocalName( savageWorldsCyberware[abCounter].description );
            savageWorldsCyberware[abCounter].bookObj = get_book_by_id( savageWorldsCyberware[abCounter].book );
        }

        // Localize Powers
        for( var abCounter = 0; abCounter < savageWorldsPowers.length; abCounter++ ) {
            savageWorldsPowers[abCounter].local_name = this.getLocalName( savageWorldsPowers[abCounter].name );
            savageWorldsPowers[abCounter].select_option_name = savageWorldsPowers[abCounter].local_name;
        //    savageWorldsPowers[abCounter].local_description = this.getLocalName( savageWorldsPowers[abCounter].description );
            savageWorldsPowers[abCounter].local_duration = this.getLocalName( savageWorldsPowers[abCounter].duration );
            savageWorldsPowers[abCounter].local_additional_effects = this.getLocalName( savageWorldsPowers[abCounter].additional_effects );
            savageWorldsPowers[abCounter].bookObj = get_book_by_id( savageWorldsPowers[abCounter].book );
        }

        // Localize Equipment
            // Localize General -
            for( var eqCounter = 0; eqCounter < savageWorldsGearGeneral.length; eqCounter++ ) {
                savageWorldsGearGeneral[eqCounter].local_name = this.getLocalName( savageWorldsGearGeneral[eqCounter].name );
                savageWorldsGearGeneral[eqCounter].select_option_name = savageWorldsGearGeneral[eqCounter].local_name;
            }

            // Localize Types
            for( var eqCounter = 0; eqCounter < savageWorldsGearTypes.length; eqCounter++ ) {
                savageWorldsGearTypes[eqCounter].local_name = this.getLocalName( savageWorldsGearTypes[eqCounter].name );
                savageWorldsGearTypes[eqCounter].select_option_name = savageWorldsGearTypes[eqCounter].local_name;

                savageWorldsGearTypes[eqCounter].generalObj = get_gear_general_by_id( savageWorldsGearTypes[eqCounter].general );
            }

            // Localize Classes
            // for( var eqCounter = 0; eqCounter < savageWorldsGearClasses.length; eqCounter++ ) {
            //     savageWorldsGearClasses[eqCounter].local_name = this.getLocalName( savageWorldsGearClasses[eqCounter].name );
            //     savageWorldsGearClasses[eqCounter].select_option_name = savageWorldsGearClasses[eqCounter].local_name;

            //     savageWorldsGearTypes[eqCounter].generalObj = get_gear_general_by_id( savageWorldsGearTypes[eqCounter].general );
            //     savageWorldsGearTypes[eqCounter].typeObj = get_gear_type_by_id( savageWorldsGearTypes[eqCounter].type );
            // }

            // Localize Mundane
            for( var eqCounter = 0; eqCounter < savageWorldsGearMundane.length; eqCounter++ ) {
                savageWorldsGearMundane[eqCounter].local_name = this.getLocalName( savageWorldsGearMundane[eqCounter].name );
                savageWorldsGearMundane[eqCounter].select_option_name = savageWorldsGearMundane[eqCounter].local_name;

                savageWorldsGearMundane[eqCounter].local_notes = this.getLocalName( savageWorldsGearMundane[eqCounter].notes );

                savageWorldsGearMundane[eqCounter].generalObj = get_gear_general_by_id( savageWorldsGearMundane[eqCounter].general );
                savageWorldsGearMundane[eqCounter].typeObj = get_gear_type_by_id( savageWorldsGearMundane[eqCounter].type );

                savageWorldsGearMundane[eqCounter].bookObj = get_book_by_id( savageWorldsGearMundane[eqCounter].book );
            }

            // Localize Armor
            for( var eqCounter = 0; eqCounter < savageWorldsGearArmor.length; eqCounter++ ) {
                savageWorldsGearArmor[eqCounter].local_name = this.getLocalName( savageWorldsGearArmor[eqCounter].name );
                savageWorldsGearArmor[eqCounter].select_option_name = savageWorldsGearArmor[eqCounter].local_name;

                savageWorldsGearArmor[eqCounter].local_notes = this.getLocalName( savageWorldsGearArmor[eqCounter].notes );

                savageWorldsGearArmor[eqCounter].generalObj = get_gear_general_by_id( savageWorldsGearArmor[eqCounter].general );
                savageWorldsGearArmor[eqCounter].typeObj = get_gear_type_by_id( savageWorldsGearArmor[eqCounter].type );

                savageWorldsGearArmor[eqCounter].bookObj = get_book_by_id( savageWorldsGearArmor[eqCounter].book );
            }

            // Localize Shields
            for( var eqCounter = 0; eqCounter < savageWorldsGearShields.length; eqCounter++ ) {
                savageWorldsGearShields[eqCounter].local_name = this.getLocalName( savageWorldsGearShields[eqCounter].name );
                savageWorldsGearShields[eqCounter].select_option_name = savageWorldsGearShields[eqCounter].local_name;

                //savageWorldsGearShields[eqCounter].local_notes = this.getLocalName( savageWorldsGearShields[eqCounter].notes );

                savageWorldsGearShields[eqCounter].generalObj = get_gear_general_by_id( savageWorldsGearShields[eqCounter].general );
                savageWorldsGearShields[eqCounter].typeObj = get_gear_type_by_id( savageWorldsGearShields[eqCounter].type );

                savageWorldsGearShields[eqCounter].bookObj = get_book_by_id( savageWorldsGearShields[eqCounter].book );
            }

            // Localize Hand Weapons
            for( var eqCounter = 0; eqCounter < savageWorldsGearHandWeapons.length; eqCounter++ ) {
                savageWorldsGearHandWeapons[eqCounter].local_name = this.getLocalName( savageWorldsGearHandWeapons[eqCounter].name );
                savageWorldsGearHandWeapons[eqCounter].select_option_name = savageWorldsGearHandWeapons[eqCounter].local_name;

                savageWorldsGearHandWeapons[eqCounter].local_notes = this.getLocalName( savageWorldsGearHandWeapons[eqCounter].notes );

                savageWorldsGearHandWeapons[eqCounter].generalObj = get_gear_general_by_id( savageWorldsGearHandWeapons[eqCounter].general );
                savageWorldsGearHandWeapons[eqCounter].typeObj = get_gear_type_by_id( savageWorldsGearHandWeapons[eqCounter].type );

                savageWorldsGearHandWeapons[eqCounter].bookObj = get_book_by_id( savageWorldsGearHandWeapons[eqCounter].book );
            }

            // Localize Ranged Weapons
            for( var eqCounter = 0; eqCounter < savageWorldsGearRangedWeapons.length; eqCounter++ ) {
                savageWorldsGearRangedWeapons[eqCounter].local_name = this.getLocalName( savageWorldsGearRangedWeapons[eqCounter].name );
                savageWorldsGearRangedWeapons[eqCounter].select_option_name = savageWorldsGearRangedWeapons[eqCounter].local_name;

                savageWorldsGearRangedWeapons[eqCounter].local_notes = this.getLocalName( savageWorldsGearRangedWeapons[eqCounter].notes );

                savageWorldsGearRangedWeapons[eqCounter].generalObj = get_gear_general_by_id( savageWorldsGearRangedWeapons[eqCounter].general );
                savageWorldsGearRangedWeapons[eqCounter].typeObj = get_gear_type_by_id( savageWorldsGearRangedWeapons[eqCounter].type );

                savageWorldsGearRangedWeapons[eqCounter].bookObj = get_book_by_id( savageWorldsGearRangedWeapons[eqCounter].book );
            }

        _attributes = {
            agility: 1,
            smarts: 1,
            spirit: 1,
            strength: 1,
            vigor: 1
        }

        _attributeBoost = {
            agility: 0,
            smarts: 0,
            spirit: 0,
            strength: 0,
            vigor: 0,
        };

        // derived statistics...
        _derived = {
            pace: 6,
            charisma: 0,
            parry: 2,
            toughness: 4,
            armor: 0,
            strain: 0,
            currentLoad: 0,
            sanity: 0
        };

        localizeDice( _useLang);

        // character creation perks....
        _perks = Array();

        // character development advances....
        _advances = Array();

        // skills list...
        _skills = Array();

        // edges list...
        _edges = Array();

        // gear list...
        _gear = Array();

        _race = {};

        _raceOptions = Array();

        for( var raceCount = 0; raceCount < savageWorldsRaces.length; raceCount++ ) {
            if( this.bookInUse( savageWorldsRaces[raceCount].book ) ) {
                var newItem = {}
                angular.extend(newItem, get_race_by_id( savageWorldsRaces[raceCount].id, _useLang ));

                _raceOptions.push( newItem );
            }

        }

        _race = this._getRaceById(1);

        _genderOptions = Array(
            {
                id: "m",
                label: this.getTranslation( "GENERAL_MALE" )
            },
            {
                id: "f",
                label: this.getTranslation( "GENERAL_FEMALE" )
            },
            {
                id: "o",
                label: this.getTranslation( "GENERAL_OTHER" )
            }
        );

        _selectedPerks = Array();

        _skillList = Array();
        for( var skillCounter = 0; skillCounter < savageWorldsSkillList.length; skillCounter++) {
            _skillList[skillCounter] = {};
            angular.extend( _skillList[skillCounter], savageWorldsSkillList[skillCounter]);
        }

        _gender = _genderOptions[0];

        _skillValues = {};

        _selectedHindrances = Array();
        _selectedEdges = Array();

        _installedHindrances = Array();
        _installedEdges = Array();

        _bornAHero = false;

        this.refreshAvailable();
        this.validate();

            // Localize Advancement Types
            this.advancementTypes = Array();
            this.advancementTypes.push ( {
                    tag: "none",
                    takenAt: -1,
                    label: this.getTranslation("CHARGEN_ADVANCEMENT_NOT_SELECTED"),
                    option1: "",
                    option2: "",
                }
            );

            this.advancementTypes.push ( {
                    tag: "edge",
                    takenAt: -1,
                    label: this.getTranslation("CHARGEN_ADVANCEMENT_NEW_EDGE"),
                    option1: _availableEdges[0],
                    option2: "",
                }
            );

            this.advancementTypes.push ( {
                    tag: "incskill",
                    takenAt: -1,
                    label: this.getTranslation("CHARGEN_ADVANCEMENT_INCREASE_SKILL"),
                    option1: "",
                    option2: "",
                }
            );

            this.advancementTypes.push ( {
                    tag: "inc2skills",
                    takenAt: -1,
                    label: this.getTranslation("CHARGEN_ADVANCEMENT_INCREASE_2_SKILLS"),
                    option1: "",
                    option2: "",
                }
            );

            this.advancementTypes.push ( {
                    tag: "skill",
                    takenAt: -1,
                    label: this.getTranslation("CHARGEN_ADVANCEMENT_NEW_SKILL"),
                    option1: "",
                    option2: "",
                }
            );

            this.advancementTypes.push ( {
                    tag: "attribute",
                    takenAt: -1,
                    label: this.getTranslation("CHARGEN_ADVANCEMENT_INCREASE_ATTRIBUTE"),
                    option1: "",
                    option2: "",
                }
            );

    }

    this.calcSPC = function() {
        this.hasSPCSwitchablePowers = false;
        this.switchableSPCPowers = Array()

        if( _usesSPCCreation ) {
            _SPCPowerLimit = 0;
            _SPCCurrentPowerPoints = 0;
            if( _SPCRisingStars ) {
                _SPCCurrentPowerPoints = _SPCPowerLevels[ _SPCSelectedPowerLevel ].rising_stars_power_points;
                _SPCCurrentPowerPoints += _spcExtraPowerPoints;
                _SPCPowerLimit = _SPCCurrentPowerPoints;
            } else {
                _SPCCurrentPowerPoints = _SPCPowerLevels[ _SPCSelectedPowerLevel ].power_points;
                _SPCCurrentPowerPoints += _spcExtraPowerPoints;
                _SPCPowerLimit = Math.ceil( _SPCCurrentPowerPoints / 3 );
            }
            if( this.hasEdge("the-best-there-is"))  {
                if( !_SPCRisingStars ) {
                    _SPCPowerLimit = Math.ceil( _SPCCurrentPowerPoints / 2 );
                } else {
                    _SPCPowerLimit = Math.ceil( _SPCCurrentPowerPoints / 2 );
                    if( _SPCPowerLimit < _SPCCurrentPowerPoints)
                        _SPCPowerLimit = _SPCCurrentPowerPoints;
                }
            }

            // for the extra power points perk....
            if( _SPCTakenExtraPowerPoints ) {
                if( _SPCSelectedPowerLevel == 0 || _SPCSelectedPowerLevel == 1 ) {
                    _SPCCurrentPowerPoints += 5;
                } else {
                    _SPCCurrentPowerPoints += 10;
                }
            }

            _SPCStartingPowerPoints = _SPCCurrentPowerPoints;

            for( var powerCounter = 0; powerCounter < _selectedSPCPowers.length; powerCounter++) {
                _selectedSPCPowers[powerCounter].currentCost = _selectedSPCPowers[powerCounter].cost  / 1* _selectedSPCPowers[powerCounter].selectedLevel / 1;
                for( var modCounter = 0; modCounter < _selectedSPCPowers[powerCounter].modifiersObj.length; modCounter++) {
                    if( typeof(_selectedSPCPowers[powerCounter].modifiersObj[modCounter].currentCost) != "undefined" && _selectedSPCPowers[powerCounter].modifiersObj[modCounter].currentCost != 0) {
                        _selectedSPCPowers[powerCounter].currentCost += _selectedSPCPowers[powerCounter].modifiersObj[modCounter].currentCost / 1;
                    }
                }
                _selectedSPCPowers[powerCounter].switchable = false;
                for( var modCounter = 0; modCounter < _selectedSPCPowers[powerCounter].genericModifiersObj.length; modCounter++) {
                    if( typeof(_selectedSPCPowers[powerCounter].genericModifiersObj[modCounter].currentCost) != "undefined" && _selectedSPCPowers[powerCounter].genericModifiersObj[modCounter].currentCost != 0) {
                        _selectedSPCPowers[powerCounter].currentCost += _selectedSPCPowers[powerCounter].genericModifiersObj[modCounter].currentCost / 1;
                        if( _selectedSPCPowers[powerCounter].genericModifiersObj[modCounter].switchable > 0 && _selectedSPCPowers[powerCounter].genericModifiersObj[modCounter].currentCost > 0 ) {
                                this.switchableSPCPowers.push( _selectedSPCPowers[powerCounter] );
                                this.hasSPCSwitchablePowers = true;
                                _selectedSPCPowers[powerCounter].switchable = true;

                        }
                        _selectedSPCPowers[powerCounter].internalID = powerCounter;
                    }
                }

                if( _selectedSPCPowers[powerCounter].currentCost < 1 )
                    _selectedSPCPowers[powerCounter].currentCost = 1;

                if( _selectedSPCPowers[powerCounter].boost_attribute > 0 ) {
                    if( _selectedSPCPowers[powerCounter].boosted_attribute != "" ) {
                        //~ console.log( "_selectedSPCPowers[powerCounter].boosted_attribute", _selectedSPCPowers[powerCounter].boosted_attribute);
                        //~ console.log( "_selectedSPCPowers[powerCounter].selectedLevel", _selectedSPCPowers[powerCounter].selectedLevel );
                        this.boostAttribute( _selectedSPCPowers[powerCounter].boosted_attribute, _selectedSPCPowers[powerCounter].selectedLevel );
                    }
                }

                if( _selectedSPCPowers[powerCounter].boost_skill > 0 ) {
                    if( _selectedSPCPowers[powerCounter].boosted_skill != "" ) {
                        this.boostSkill( _selectedSPCPowers[powerCounter].boosted_skill, _selectedSPCPowers[powerCounter].boosted_skill_specialty, _selectedSPCPowers[powerCounter].selectedLevel  );
                    }
                }

                if( _selectedSPCPowers[powerCounter].currentCost > _SPCPowerLimit) {
                    if( _validSPCoverLimitShown  == false ) {
                        _validationReport.push(
                            this.getTranslation("CHARGEN_VALIDATION_SPC_OVER_LIMIT").replace(
                                "{value}", _selectedSPCPowers[powerCounter].local_name
                            )
                        );
                        _isValid = false;
                        _validSPCoverLimitShown = true;
                    }

                }

                if( _selectedSPCPowers[powerCounter].switchableWith ) {
                    if( _selectedSPCPowers[powerCounter].currentCost > _selectedSPCPowers[powerCounter].switchableWith.currentCost - 2) {
                        _validationReport.push(
                            this.getTranslation("CHARGEN_VALIDATION_SPC_SWITCH").replace(
                                "{value}", _selectedSPCPowers[powerCounter].local_name
                            )
                        );
                        _isValid = false;
                    }
                } else {
                    _SPCCurrentPowerPoints -= _selectedSPCPowers[powerCounter].currentCost;
                }

                if( _selectedSPCPowers[powerCounter].charEffect ) {
                    _selectedSPCPowers[powerCounter].charEffect( this, _selectedSPCPowers[powerCounter]);
                }
            }

            if( _SPCCurrentPowerPoints < 0 ) {
                _validationReport.push( this.getTranslation("CHARGEN_VALIDATION_SPC_OVER_POWER_POINTS") );
                _isValid = false;
            }
        }
    }

    this.newUUID = function() {
        _uuid = this.makeUUID();
    }

    this.makeUUID = function(){
        var d = new Date().getTime();
        if(window.performance && typeof window.performance.now === "function"){
            d += performance.now(); //use high-precision timer if available
        }
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = (d + Math.random()*16)%16 | 0;
            d = Math.floor(d/16);
            return (c=='x' ? r : (r&0x3|0x8)).toString(16);
        });
        return uuid;
    };

    this.refreshAvailable = function( ) {

        _agilitySkills = Array();
        _allSkills = Array();
        _smartsSkills = Array();
        _spiritSkills = Array();
        _strengthSkills = Array();
        _vigorSkills = Array(); // I'm not aware of any vigor skills, but I' m prepared on the backend ;)

        for( var skillCounter = 0; skillCounter < _skillList.length; skillCounter++ ) {
            var showSkill = true;
            if( _skillList[skillCounter].name[ _useLang ] ) {
                _skillList[skillCounter].local_name = _skillList[skillCounter].name[ _useLang ];
            } else {
                _skillList[skillCounter].local_name = _skillList[skillCounter].name[ "en-US" ];
            }
            if( !_skillList[skillCounter].value )
                _skillList[skillCounter].value = 0;
            if( !_skillList[skillCounter].spec )
                _skillList[skillCounter].spec = "";
            if( !_skillList[skillCounter].specialties )
                _skillList[skillCounter].specialties = Array();

            _skillList[skillCounter].displayValue = "";
            if( _skillList[skillCounter].value + _skillList[skillCounter].boost > 0 ) {
                diceValue = getDiceValue( _skillList[skillCounter].value + _skillList[skillCounter].boost );
                _skillList[skillCounter].displayValue = diceValue.local_label;
            }

            for( var specialtyCounter = 0; specialtyCounter < _skillList[skillCounter].specialties.length; specialtyCounter++) {
                _skillList[skillCounter].specialties[specialtyCounter].displayValue = "";
                if( typeof( _skillList[skillCounter].specialties[specialtyCounter].boost ) == "undefined" )
                     _skillList[skillCounter].specialties[specialtyCounter].boost = 0;
                if( _skillList[skillCounter].specialties[specialtyCounter].value + _skillList[skillCounter].specialties[specialtyCounter].boost  > 0 ) {
                    diceValue = getDiceValue( _skillList[skillCounter].specialties[specialtyCounter].value  + _skillList[skillCounter].specialties[specialtyCounter].boost );
                    _skillList[skillCounter].specialties[specialtyCounter].displayValue = diceValue.local_label;
                }
            }

            _skillList[skillCounter].showSkill = true;
            if( !this.bookInUse( _skillList[skillCounter].book) ) {
                _skillList[skillCounter].showSkill = false;
                _skillList[skillCounter].value = 0;
                _skillValues[ _skillList[skillCounter].short_name ] = 0;
            }

            if(  _skillList[skillCounter].for_arcane ) {
                if( !this.hasArcane( _skillList[skillCounter].for_arcane )) {
                    _skillList[skillCounter].showSkill = false;
                    _skillValues[ _skillList[skillCounter].short_name ] = 0;
                    _skillList[skillCounter].value = 0;
                }
            }

            if( _skillList[skillCounter].id == "SKILL_GUTS" ) {
                if( _usesGutsSkill == false ) {
                    _skillList[skillCounter].showSkill = false;
                    _skillValues[ _skillList[skillCounter].short_name ] = 0;
                }
            }

            if( _skillValues[ _skillList[skillCounter].id ] ) {
                _skillList[skillCounter].value = _skillValues[ _skillList[skillCounter].short_name ];

            }

            if( _skillList[skillCounter].showSkill && _skillList[skillCounter].attribute == "agility" ) {
                _agilitySkills.push( _skillList[skillCounter] );
            }
            if( _skillList[skillCounter].showSkill && _skillList[skillCounter].attribute == "smarts" ) {
                _smartsSkills.push( _skillList[skillCounter] );
            }
            if( _skillList[skillCounter].showSkill && _skillList[skillCounter].attribute == "spirit" ) {
                _spiritSkills.push( _skillList[skillCounter] );
            }
            if( _skillList[skillCounter].showSkill && _skillList[skillCounter].attribute == "strength" ) {
                _strengthSkills.push( _skillList[skillCounter] );
            }
            if( _skillList[skillCounter].showSkill && _skillList[skillCounter].attribute == "vigor" ) {
                _vigorSkills.push( _skillList[skillCounter] );
            }
            _allSkills.push( _skillList[skillCounter] );

            for( var skc = 0; skc < _skillList[skillCounter].specialties.length; skc++ ) {
                _skillList[skillCounter].specialties[skc].is_specialty = _skillList[skillCounter].id
                _skillList[skillCounter].specialties[skc].local_name = _skillList[skillCounter].local_name + ": " + _skillList[skillCounter].specialties[skc].name;
                _skillList[skillCounter].specialties[skc].id = _skillList[skillCounter].id
                _skillList[skillCounter].specialties[skc].specify_name = _skillList[skillCounter].specialties[skc].name
                _skillList[skillCounter].specialties[skc].attribute = _skillList[skillCounter].attribute
                if( ! _skillList[skillCounter].specialties[skc].boost )
                    _skillList[skillCounter].specialties[skc].boost = 0;
                _allSkills.push( _skillList[skillCounter].specialties[skc] );
            }
        }

        _allSkills.unshift( {id: 'undefined',local_name: this.getTranslation('GENERAL_SELECT')} );

        _raceOptions = Array();
        for( var raceCount = 0; raceCount < savageWorldsRaces.length; raceCount++ ) {

            if( this.bookInUse( savageWorldsRaces[raceCount].book ) ) {
                var newItem = {}
                angular.extend(newItem, get_race_by_id( savageWorldsRaces[raceCount].id, _useLang ));

                _raceOptions.push( newItem );
            }
        }

    }

    this.isPerkOptimized = function() {
        if( _totalPerkPoints == _optimizedPerkPoints )
            return true;
        else
            return false;
    }

    this.getArcaneSkill = function() {
        for(var skillCounter = 0; skillCounter < _skillList.length; skillCounter++ ) {
            if(  _skillList[skillCounter].for_arcane ) {
                if( this.hasArcane( _skillList[skillCounter].for_arcane )) {
                    return _skillList[skillCounter];
                }
            }
        }
        return null;
    }

    this.getDerived = function() {
        return _derived;
    }

    this.getAvailableEdges = function() {
        return _availableEdges;
    }

    this.getAvailableCyberware = function() {
        return _availableCyberware;
    }

    this.getAvailablePerks = function() {
        return _availablePerks;
    }

    this.getSelectedSPCPowers = function() {
        return _selectedSPCPowers;
    }

    this.getAvailableHindrances = function() {
        return _availableHindrances;
    }

    this.getAvailableHandWeapons = function() {
        return _availableHandWeapons;
    }

    this.getAvailableRangedWeapons = function() {
        return _availableRangedWeapons;
    }

    this.getSelectedRangedWeapons = function() {
        return _selectedRangedWeapons;
    }

    this.getSelectedAvancements = function() {
        var _return = 0;
        for( var aC = 0; aC < _selectedAdvancements.length; aC++) {
            if( _selectedAdvancements[aC].tag != 'none')
                _return++;
        }
        return _return;
    }

    this.getSelectedHandWeapons = function() {
        return _selectedHandWeapons;
    }

    this.getSelectedArmor = function() {
        return _selectedArmor;
    }

    this.getXP = function() {
        return _XP;
    }

    this.getXPOptions = function() {
        return _xpOptions;
    }

    this.getSelectedAdvancements = function() {
        return _selectedAdvancements;
    }

    this.getAvailableAdvancements = function() {
        return _selectedAdvancements.length;
    }

    this.getAllSkills = function() {
        return _allSkills;
    }

    this.getSkillList = function() {
        return _allSkills;
    }

    this.getSelectedShields = function() {
        return _selectedShields;
    }

    this.getAvailableArmor = function() {
        return _availableArmor;
    }

    this.getAvailableShields = function() {
        return _availableShields;
    }

    this.getAvailableMundaneGear = function() {
        return _availableMundaneGear;
    }


    this.getSelectedMundaneGear = function() {
        return _selectedMundaneGear;
    }

    this.getSelectedEdges = function() {
        return _selecteddges;
    }

    this.getInstalledEdges = function() {
        return _installedEdges;
    }

    this.getInstalledHindrances = function() {
        return _installedHindrances;
    }

    this.getSelectedHindrances = function() {
        return _selectedHindrances;
    }

    this.getSelectedPerks = function() {
        return _selectedPerks;
    }

    this.setGender = function( genderID ) {
        for(var gc = 0; gc < _genderOptions.length; gc++) {
            if( genderID == _genderOptions[gc].id ) {
                _gender = _genderOptions[gc];
                return true;
            }
        }
        return false;
    }

    this.setXP = function( xpValue ) {
        for(var xpc = 0; xpc < _xpOptions.length; xpc++) {
            if( xpValue == _xpOptions[xpc].value ) {
                _XP = _xpOptions[xpc];
                return true;
            }
        }
        return false;
    }

    this._getRaceById = function( raceID ) {

        for(var gc = 0; gc < _raceOptions.length; gc++) {

            if( raceID == _raceOptions[gc].id ) {
                return  _raceOptions[gc];
            }
        }
        return null;
    }

    this.setRace = function( raceID ) {
        for(var gc = 0; gc < savageWorldsRaces.length; gc++) {
            if( raceID == savageWorldsRaces[gc].id ) {
                _race = savageWorldsRaces[gc];
                return true;
            }
        }
        return false;
    }

    this.removePower = function(powerIndex) {

        if(
            _selectedPowers[ powerIndex ]
        ) {
            _selectedPowers.splice(powerIndex, 1);
            return true;
        }

        return false;
    }

    this.addPower = function(powerBookID, powerTag, trappingBookID, trappingTag, powerName) {

        for( var powerCounter = 0; powerCounter < savageWorldsPowers.length; powerCounter++) {
            if(
                savageWorldsPowers[powerCounter].tag == powerTag
                    &&
                savageWorldsPowers[powerCounter].book == powerBookID
            ) {
                var newPower = {};
                angular.extend( newPower, savageWorldsPowers[ powerCounter ] );

                newPower.trapping = savageWorldsArcaneTrappings[0];
                for( var trappingCounter = 0; trappingCounter < savageWorldsArcaneTrappings.length; trappingCounter++) {
                    if(
                        savageWorldsArcaneTrappings[trappingCounter].tag == trappingTag
                            &&
                        savageWorldsArcaneTrappings[trappingCounter].book == trappingBookID
                    ) {
                        newPower.trapping = savageWorldsArcaneTrappings[trappingCounter];
                    }
                }
                if( powerName )
                    newPower.customName = powerName;
                else
                    newPower.customName = newPower.local_name;

                _selectedPowers.push( newPower );
                return true;
            }
        }
        return false;
    }

    this.addEdge = function(bookId, edgeTag) {
        for( var edgeCounter = 0; edgeCounter < savageWorldsEdges.length; edgeCounter++) {
            if(
                savageWorldsEdges[edgeCounter].tag == edgeTag
                    &&
                savageWorldsEdges[edgeCounter].book == bookId
            ) {
                var newEdge = {};
                angular.extend( newEdge, savageWorldsEdges[ edgeCounter ] );
                _selectedEdges.push( newEdge );
                return true;
            }
        }
        return false;
    }

    this.addCyberEdge = function(bookId, edgeTag) {
        for( var edgeCounter = 0; edgeCounter < savageWorldsEdges.length; edgeCounter++) {
            if(
                savageWorldsEdges[edgeCounter].tag == edgeTag
                    &&
                savageWorldsEdges[edgeCounter].book == bookId
            ) {
                var newEdge = {};
                angular.extend( newEdge, savageWorldsEdges[ edgeCounter ] );
                newEdge.cyber = true;
                _selectedEdges.push( newEdge );
                return true;
            }
        }
        return false;
    }

    this.removeEdge = function(indexNumber) {
        if( _edges[indexNumber] ) {
            _edges = _edges.splice(indexNumber, 1);
            return true;
        }
        return false;
    }

    this.removeEdgeByTag = function(edgeTag) {
        for( var edgeCounter = 0; edgeCounter < _selectedEdges.length; edgeCounter++) {
            if( _selectedEdges[edgeCounter].tag == edgeTag ) {
                _selectedEdges.splice(edgeCounter, 1);
                return true;
            }
        }
        return false;
    }

    this.getHandWeaponByTag = function(bookID, theTag) {
        for( var eqCount = 0; eqCount < savageWorldsGearHandWeapons.length; eqCount++) {
            if( savageWorldsGearHandWeapons[eqCount].tag == theTag && savageWorldsGearHandWeapons[eqCount].book == bookID ) {

                return savageWorldsGearHandWeapons[ eqCount ];
            }
        }
        return false;
    }

    this.getMundaneByTag = function(bookID, theTag) {
        for( var eqCount = 0; eqCount < savageWorldsGearMundane.length; eqCount++) {
            if( savageWorldsGearMundane[eqCount].tag == theTag && savageWorldsGearMundane[eqCount].book == bookID ) {

                return savageWorldsGearMundane[ eqCount ];
            }
        }
        return false;
    }

    this.getShieldByTag = function(bookID, theTag) {
        for( var eqCount = 0; eqCount < savageWorldsGearShields.length; eqCount++) {
            if( savageWorldsGearShields[eqCount].tag == theTag && savageWorldsGearShields[eqCount].book == bookID ) {

                return savageWorldsGearShields[ eqCount ];
            }
        }
        return false;
    }

    this.getArmorByTag = function(bookID, theTag) {
        for( var eqCount = 0; eqCount < savageWorldsGearArmor.length; eqCount++) {
            if( savageWorldsGearArmor[eqCount].tag == theTag && savageWorldsGearArmor[eqCount].book == bookID ) {

                return savageWorldsGearArmor[ eqCount ];
            }
        }
        return false;
    }


    this.getRangedWeaponByTag = function(bookID, theTag) {
        for( var eqCount = 0; eqCount < savageWorldsGearRangedWeapons.length; eqCount++) {
            if( savageWorldsGearRangedWeapons[eqCount].tag == theTag && savageWorldsGearRangedWeapons[eqCount].book == bookID ) {

                return savageWorldsGearRangedWeapons[ eqCount ];
            }
        }
        return false;
    }

    this.addHindrance = function(bookId, hindranceTag, specifyField) {
        for( var hindranceCounter = 0; hindranceCounter < savageWorldsHindrances.length; hindranceCounter++) {
            if(
                savageWorldsHindrances[hindranceCounter].tag == hindranceTag
                    &&
                savageWorldsHindrances[hindranceCounter].book == bookId
            ) {
                if(specifyField)
                    savageWorldsHindrances[hindranceCounter ].specifyField = specifyField;
                else
                    savageWorldsHindrances[hindranceCounter ].specifyField = "";
                _selectedHindrances.push( savageWorldsHindrances[hindranceCounter ]);
                return true;
            }
        }
        return false;
    }


    this.getCyberTraitList = function() {
    }


    this.getCyberSkillList = function() {
    }

    this.getCyberWeaponOptions = function() {
        var _returnValue = Array();

        var pushItem = {
            id: "",
            label: this.getTranslation("CHARGEN_SELECT_LIGHT_WEAPON")
        };

        _returnValue.push( pushItem );

        for( var wC = 0; wC < _selectedRangedWeapons.length; wC++ ) {
            if( _selectedRangedWeapons[ wC ].weight < 3 ) {
                var pushItem = {
                    id: _selectedRangedWeapons[ wC ].tag,
                    label: _selectedRangedWeapons[ wC ].local_name,
                };

                var foundItem = false;
                for( var rvC = 0; rvC < _returnValue.length; rvC++) {
                    if( _returnValue[ rvC ].id == _selectedRangedWeapons[ wC ].tag ) {
                        foundItem = true;
                        break;
                    }
                }

                if( !foundItem )
                    _returnValue.push( pushItem );
            }
        }

        return _returnValue;
    }

    this.removeHindrance = function(indexNumber) {
        if( this.hindrances[indexNumber] ) {
            this.hindrances = this.hindrances.splice(indexNumber, 1);
            return true;
        }
        return false;
    }

    this.removeHindranceByTag = function(hindranceTag) {
        for( var hindranceCounter = 0; hindranceCounter < _selectedHindrances.length; hindranceCounter++) {
            if( _selectedHindrances[hindranceCounter].tag == hindranceTag ) {
                _selectedHindrances.splice(hindranceCounter, 1);
                return true;
            }
        }
        return false;
    }

    this.addGear = function(bookId, tag) {
    // TODO
    }

    this.removeGear = function(indexNumber) {
        if( _gear[indexNumber] ) {
            _gear = _gear.splice(indexNumber, 1);
            return true;
        }
        return false;
    }

    // Validate does both calculation and validation of the character as per the base rules and settings
    this.validate = function() {
        _isValid = true;
        _validSPCoverLimitShown = false;
        _validationReport = Array();
        _warningReport = Array();
        _powerAlterations = Array();
        _skillPointsAvailable = 15;
        _skillPointsUsed = 0;

        _strainBoost = 0;
        _doubleStrain = 0;

        _knownLanguagesLimit = 1;
        _linguistSelected = false;

        _naturalWeapons = Array();

        _encumbranceMultiplier = 5;

        _currentFunds = _startingFunds;
        _spcExtraPowerPoints = 0;

        _attributePointsAvailable = 5;
        _attributePointsUsed = 0;

        _availableEdgePoints = 0;
        _installedHindrances = Array();
        _installedEdges = Array();
        _hasArcaneBackground = false;

        _currentArcaneBackground = {};

        //_startingFunds = 500;

        _usesSanity = false;
        _usesGutsSkill = false;

        _usesRiftsCreation = false;
        _usesSPCCreation = false;

        var swDeluxe = get_book_by_id( 1 ) ;
        swDeluxe.inUse = true;

        _bornAHero = false;
        if( this.isSettingRuleEnabled( "born-a-hero") )
            _bornAHero = true;

        _usesSPCCreation = false;
        if( this.isSettingRuleEnabled( "super-hero") )
            _usesSPCCreation = true;

        _multipleLanguages = false;
        if( this.isSettingRuleEnabled( "multiple-languages") )
            _multipleLanguages = true;

        _usesSanity = false;
        if( this.isSettingRuleEnabled( "sanity") )
            _usesSanity = true;

        _usesStrain = false;

        if( this.isSettingRuleEnabled( "cyberware-strain") )
            _usesStrain = true;

        _diceValues = {
            agility: Array(),
            smarts: Array(),
            spirit: Array(),
            strength: Array(),
            vigor: Array(),
        }

        if(  _selectedArcaneBackground && _selectedArcaneBackground.power_points ) {
            _powerPointsAvailable = _selectedArcaneBackground.power_points;
        }

        if(  _selectedArcaneBackground && _selectedArcaneBackground.powers ) {
            _totalPowersKnown = _selectedArcaneBackground.powers;
        }



        // for( lBookCounter = 0; lBookCounter.u)

        _attributeBoost = {
            agility: 0,
            smarts: 0,
            spirit: 0,
            strength: 0,
            vigor: 0,
        };

        _displayAttributes = {
            agility: getDiceValue( _attributes.agility + _attributeBoost.agility ),
            smarts: getDiceValue( _attributes.smarts + _attributeBoost.smarts ),
            spirit: getDiceValue( _attributes.spirit + _attributeBoost.spirit ),
            strength: getDiceValue( _attributes.strength + _attributeBoost.strength ),
            vigor: getDiceValue( _attributes.vigor + _attributeBoost.vigor ),
        };

        _derived._strainBonus = 0;
        _derived._doubleStrain = false;

        // Calc init derived stats
        _derived.toughness = 0; // Math.floor(_displayAttributes.vigor.value / 2) + 2;
        _derived.armor = 0;
        _load.currentLoad = 0;
        _load.combatLoad = 0;
        var fightingSkill = this.getSkill("SKILL_FIGHTING");
        _derived.parry = 2;
        var fightingValue = 0;
        if( fightingSkill.value > 0 ) {
            fightingValue = getDiceValue( fightingSkill.value );
            _derived.parry = Math.floor(fightingValue.value / 2) + 2;
        }
        _derived.pace = 6;
        _derived.charisma = 0;
        _derived.sanity = Math.floor(_displayAttributes.spirit.value / 2) + 2;

        // Calculate used attribute points
        _attributePointsUsed += _attributes.agility - 1;
        _attributePointsUsed += _attributes.smarts - 1;
        _attributePointsUsed += _attributes.spirit - 1;
        _attributePointsUsed += _attributes.strength - 1;
        _attributePointsUsed += _attributes.vigor - 1;

        // _attributePointsAvailable = _attributePointsAvailable - _attributePointsUsed;
        // _skillPointsAvailable = _skillPointsAvailable - _skillPointsUsed;

        for( var skillCounter = 0; skillCounter < _skillList.length; skillCounter++) {
            _skillList[skillCounter].boost = 0;
            if( _skillList[ skillCounter].specialties ) {
                for( var skillCounter2 = 0; skillCounter2 < _skillList[ skillCounter].specialties.length; skillCounter2++) {
                    _skillList[ skillCounter].specialties[skillCounter2].boost = 0;
                }
            }
        }

        // Process Racial Hindrances
        var racial_hindrances = 0;
        if( _race.hindrances ) {
            racial_hindrances = JSON.parse( _race.hindrances );
            if( racial_hindrances ) {
                for( var hindranceCounter = 0; hindranceCounter < racial_hindrances.length; hindranceCounter++ ) {
                    hindrance = this.getHindrance( racial_hindrances[hindranceCounter] );
                    if( hindrance ) {
                        if( typeof(hindrance.charEffect) == "function" ) {
                            hindrance.charEffect( this );
                        }
                        if( typeof(hindrance.charEffects) == "function" ) {
                            hindrance.charEffects( this );
                        }
                        _installedHindrances.push( hindrance );
                    }
                }
            }
        }

        // Process Racial Edges
        var racial_edges = 0;
        if( _race.edges ) {
            racial_edges = JSON.parse( _race.edges );
            if( racial_edges ) {
                for( var edgeCounter = 0; edgeCounter < racial_edges.length; edgeCounter++ ) {
                    var edge = this.getEdge( racial_edges[edgeCounter] );

                    if( edge ) {
                        _installedEdges.push( edge );

                        if( typeof(edge.charEffect) == "function" ) {
                            edge.charEffect( this );
                        }
                        if( typeof(edge.charEffects) == "function" ) {
                            edge.charEffects( this );
                        }
                    }

                }
            }
        }

        // Calcuate Strain and Cyberware
        if( _usesStrain ) {
            _derived.currentStrain = 0;
            _derived.strain = 0;

            for( var cyberC = 0; cyberC < _installedCyberware.length; cyberC++ ) {
                _derived.currentStrain += _installedCyberware[ cyberC ].getStrainCost();
                _installedCyberware[ cyberC ].localCost = _installedCyberware[ cyberC ].getCost( this );

                if( _installedCyberware[ cyberC ].tag == "weapon-melee" && _installedCyberware[ cyberC ].option1 != "" ) {
                    _installedCyberware[ cyberC ].localNotes = "";

                    switch( _installedCyberware[cyberC].option1 ) {
                        case "chain":
                            _installedCyberware[cyberC].localCost += 500;
                            _installedCyberware[ cyberC ].localNotes += ", AP 2";

                            _installedCyberware[cyberC].localNotes += " (" + this.getTranslation("SCIFI_CHAIN") + ")";
                            break;
                        case "vibro":
                            _installedCyberware[cyberC].localCost += 500;
                            _installedCyberware[ cyberC ].localNotes += ", AP 2";

                            _installedCyberware[cyberC].localNotes += " (" + this.getTranslation("SCIFI_VIBRO") + ")";
                            break;
                        case "energy":
                            _installedCyberware[ cyberC ].dieDamage = "d8";
                            _installedCyberware[ cyberC ].localNotes += ", AP 4";
                            _installedCyberware[cyberC].localCost += 500;

                            _installedCyberware[cyberC].localNotes += " (" + this.getTranslation("SCIFI_ENERGY") + ")";
                            break;
                        case "molec":

                            _installedCyberware[cyberC].localCost += 500;

                            _installedCyberware[cyberC].localNotes += ", AP 3";

                            _installedCyberware[cyberC].localNotes += " (" + this.getTranslation("SCIFI_MOLECULAR") + ")";

                            break;
                        case "power":

                            _installedCyberware[cyberC].localCost += 500;
                            _installedCyberware[cyberC].localNotes += " + d6";

                            _installedCyberware[cyberC].localNotes += " (" + this.getTranslation("SCIFI_POWER") + ")";
                            break;
                        case "stun":

                            _installedCyberware[cyberC].localCost += 500;

                            _installedCyberware[cyberC].localNotes += " (" + this.getTranslation("SCIFI_STUN") + ")";
                            break;
                        default:
                            // no mods
                            break;
                    }

                }


                if( _installedCyberware[ cyberC ].getModEffect ) {
                    //~ console.log( "Cyberware - running getModEffect of "  + _installedCyberware[ cyberC ].local_name );
                    _installedCyberware[ cyberC ].getModEffect( this );
                }

                _currentFunds -= _installedCyberware[cyberC].localCost ;
            }

            _displayAttributes = {
                agility: getDiceValue( _attributes.agility + _attributeBoost.agility ),
                smarts: getDiceValue( _attributes.smarts + _attributeBoost.smarts ),
                spirit: getDiceValue( _attributes.spirit + _attributeBoost.spirit ),
                strength: getDiceValue( _attributes.strength + _attributeBoost.strength ),
                vigor: getDiceValue( _attributes.vigor + _attributeBoost.vigor ),
            };

            if( _displayAttributes.spirit.value < _displayAttributes.vigor.value )
                _derived.strain = _displayAttributes.spirit.value + _derived._strainBonus;
            else
                _derived.strain = _displayAttributes.vigor.value + _derived._strainBonus;

            if( _derived._doubleStrain )
                _derived.strain = _derived.strain * 2;



        } else {

            _displayAttributes = {
                agility: getDiceValue( _attributes.agility + _attributeBoost.agility ),
                smarts: getDiceValue( _attributes.smarts + _attributeBoost.smarts ),
                spirit: getDiceValue( _attributes.spirit + _attributeBoost.spirit ),
                strength: getDiceValue( _attributes.strength + _attributeBoost.strength ),
                vigor: getDiceValue( _attributes.vigor + _attributeBoost.vigor ),
            };
        }

        // Calculate used skill points
        for( skillCounter = 0; skillCounter < _skillList.length; skillCounter++) {
            if( _skillList[skillCounter].value ) {

                effectiveCurrentValue =  _skillList[skillCounter].value + _skillList[skillCounter].boost ;
                if(  effectiveCurrentValue > _displayAttributes[_skillList[skillCounter].attribute].id ) {
                    regularCost = _displayAttributes[_skillList[skillCounter].attribute].id;
                    doubleCost = effectiveCurrentValue - _displayAttributes[_skillList[skillCounter].attribute].id;
                    if( _skillList[skillCounter].boost > 0 ) {
                        regularCost = regularCost - _skillList[skillCounter].boost;
                        if ( regularCost < 0)
                            regularCost = 0;
                    }
                    if( !_skillList[skillCounter].advskill || _skillList[skillCounter].advskill == 0)
                        _skillPointsUsed += regularCost + doubleCost * 2;
                } else {
                    if( !_skillList[skillCounter].advskill || _skillList[skillCounter].advskill == 0)
                        _skillPointsUsed += _skillList[skillCounter].value;
                }
            }

            for( specialtyCounter = 0; specialtyCounter < _skillList[skillCounter].specialties.length; specialtyCounter++ ) {
                //effectiveCurrentValue =  _skillList[skillCounter].value + _skillList[skillCounter].boost ;
                if( _skillList[skillCounter].specialties[specialtyCounter].value ) {
                    if( _skillList[skillCounter].specialties[specialtyCounter].value + _skillList[skillCounter].specialties[specialtyCounter].boost > _displayAttributes[_skillList[skillCounter].attribute].id ) {
                        regularCost = _displayAttributes[_skillList[skillCounter].attribute].id;
                        doubleCost = _skillList[skillCounter].specialties[specialtyCounter].value - _displayAttributes[_skillList[skillCounter].attribute].id;
                        if(  !_skillList[skillCounter].advskill || _skillList[skillCounter].advskill == 0)
                            _skillPointsUsed += regularCost + doubleCost * 2;
                    } else {
                        if(  !_skillList[skillCounter].advskill || _skillList[skillCounter].advskill == 0)
                            _skillPointsUsed += _skillList[skillCounter].specialties[specialtyCounter].value;
                    }
                }
            }
        }


        // Process Selected Hindrances
        var majorPerk = 0;
        var minorPerk1 = 0;
        var minorPerk2 = 0;
        var majorPerk2 = 0;
        var _usedPerkPoints = 0;
        var _extraPerkPointCost = 0;
        var _selectedPerkPoints = 0;
        _secondMajorHindranceChosen = false;
        for( var hindranceCounter = 0; hindranceCounter < _selectedHindrances.length; hindranceCounter++) {

            if( typeof(_selectedHindrances[hindranceCounter].charEffect) == "function" ) {
                _selectedHindrances[hindranceCounter].charEffect( this );
            }
            if( typeof(_selectedHindrances[hindranceCounter].charEffects) == "function" ) {
                _selectedHindrances[hindranceCounter].charEffects( this );
            }
            _installedHindrances.push( _selectedHindrances[hindranceCounter] );

            if( _selectedHindrances[hindranceCounter].severity == "major" ) {
                _selectedPerkPoints += 2;
                if( _usesSPCCreation ) {
                    if( majorPerk == 0 ) {
                        majorPerk = 2;
                        majorPerk2 = 0;
                    } else if( majorPerk2 == 0) {
                        majorPerk = 2;
                        majorPerk2 = 2;
                        _secondMajorHindranceChosen = true;
                    }
                } else {
                    majorPerk = 2;
                }
            }

            if( _selectedHindrances[hindranceCounter].severity == "minor" ) {
                _selectedPerkPoints += 1;
                if( minorPerk1 == 0 ) {
                    minorPerk1 = 1;
                    minorPerk2 = 0;
                } else if( minorPerk2 == 0) {
                    minorPerk1 = 1;
                    minorPerk2 = 1;
                }
            }
        }

        // Calculate Perks Available
        if( _usesSPCCreation ) {
            _totalPerkPoints = majorPerk + majorPerk2 + minorPerk2 + minorPerk1;
            _availablePerkPoints = majorPerk + majorPerk2 + minorPerk2 + minorPerk1;
            _optimizedPerkPoints = 6;

        }
        else {
            _totalPerkPoints = majorPerk + minorPerk2 + minorPerk1;
            _availablePerkPoints = majorPerk + minorPerk2 + minorPerk1;
            _optimizedPerkPoints = 4;
        }

        _SPCTakenExtraPowerPoints = false;
        // Process Selected Perks
        for( var perkCounter = 0; perkCounter < _selectedPerks.length; perkCounter++) {
            _selectedPerks[perkCounter].effect(this);
            _availablePerkPoints = _availablePerkPoints - _selectedPerks[perkCounter].cost;
            _usedPerkPoints += _selectedPerks[perkCounter].cost;
        }

        if( _attributePointsUsed > _attributePointsAvailable ) {
            _validationReport.push( this.getTranslation("CHARGEN_VALIDATION_TOO_MANY_ATTRIBUTES") );
            _isValid = false;
        }

        if( _selectedArcaneBackground && _selectedArcaneBackground.powers && _selectedPowers.length > _selectedArcaneBackground.powers ) {
            _validationReport.push( this.getTranslation("CHARGEN_VALIDATION_TOO_MANY_POWERS") );
            _isValid = false;
        }

        if( _skillPointsUsed > _skillPointsAvailable ) {
            _validationReport.push( this.getTranslation("CHARGEN_VALIDATION_TOO_MANY_SKILLS") );
            _isValid = false;
        }

        if( _SPCTakenExtraPowerPoints && majorPerk2 == 0 ) {
            _validationReport.push( this.getTranslation("CHARGEN_VALIDATION_SPC_EP_REQUIRES_2MAJOR") );
            _isValid = false;
        }

        // Process Selected Edges
        for( var edgeCounter = 0; edgeCounter < _selectedEdges.length; edgeCounter++) {

            _installedEdges.push( _selectedEdges[edgeCounter] );
            if( ! _selectedEdges[ edgeCounter ].cyber )
                _availableEdgePoints = _availableEdgePoints - 1;

            if( typeof(_selectedEdges[edgeCounter].charEffect) == "function" ) {
                _selectedEdges[edgeCounter].charEffect( this );
            }

            if( typeof(_selectedEdges[edgeCounter].charEffects) == "function" ) {
                _selectedEdges[edgeCounter].charEffects( this );
            }

            if( _selectedEdges[edgeCounter].extraPerkPointCost ) {
                _extraPerkPointCost += _selectedEdges[edgeCounter].extraPerkPointCost;
            }
        }



        //~ console.log( "------------------------" );
        //~ console.log( "_availablePerkPoints", _availablePerkPoints );
        //~ console.log( "_extraPerkPointCost", _extraPerkPointCost );
        //~ console.log( "_selectedPerkPoints", _selectedPerkPoints );
        //~ console.log( "_totalPerkPoints",  _totalPerkPoints);
        //~ console.log( "_optimizedPerkPoints", _optimizedPerkPoints );
        //~ console.log( "_usedPerkPoints", _usedPerkPoints );
        //~ console.log( "majorPerk", majorPerk );
        //~ console.log( "majorPerk2", majorPerk2 );
        //~ console.log( "minorPerk2", minorPerk2 );
        //~ console.log( "minorPerk1", minorPerk1 );

        //~ console.log( "test", _extraPerkPointCost + ">" + (_selectedPerkPoints - _usedPerkPoints ) );


        if( _extraPerkPointCost > _selectedPerkPoints - _usedPerkPoints ) {
            _validationReport.push( this.getTranslation("CHARGEN_VALIDATION_EDGE_REQUIRES_HINDRANCES") );
            _isValid = false;



        }

        if( _extraPerkPointCost ) {
            _availablePerkPoints = _selectedPerkPoints - _extraPerkPointCost ;
            //~ _availablePerkPoints -= 2;
            if( _availablePerkPoints > _totalPerkPoints )
                _availablePerkPoints = _totalPerkPoints;
            if( _availablePerkPoints < 0 )
                _availablePerkPoints = 0;
        }

        //~ console.log( "_availablePerkPoints", _availablePerkPoints );

        if( _availablePerkPoints < 0 ) {
            _validationReport.push( this.getTranslation("CHARGEN_VALIDATION_TOO_MANY_PERKS") );
            _isValid = false;
        }

        if( _availableEdgePoints < 0 ) {
            _validationReport.push( this.getTranslation("CHARGEN_VALIDATION_TOO_MANY_EDGES") );
            _isValid = false;
        }

        if( _hasArcaneBackground > 0 && _selectedArcaneBackground.tag == "" ) {
            _validationReport.push( this.getTranslation("CHARGEN_VALIDATION_NO_ARCANE_BG") );
            _isValid = false;
        }

        // Apply Arcane Background
        _availableArcaneBackgrounds = Array();
        _availablePowers = Array();
        _availableTrappings = Array();




        _availableArcaneBackgrounds.push(
            {
                local_name: "- " + this.getTranslation("CHARGEN_SELECT_ARCANE_BG") + " -",
                select_option_name:  "- " + this.getTranslation("CHARGEN_SELECT_ARCANE_BG") + " -",
                tag: "",
                powers: 0,
                power_points: 0,
                bookObj: {
                    local_name: ""
                },
                blank: true
            }
        );

        _availablePowers.push(
            {
                local_name: "- " + this.getTranslation("CHARGEN_SELECT_POWER") + " -",
                select_option_name:  "- " + this.getTranslation("CHARGEN_SELECT_POWER") + " -",
                tag: "",
                bookObj: {
                    local_name: ""
                },
                blank: true
            }
        );

        if( _hasArcaneBackground ) {
            _selectedArcaneBackground.freePower = null;
            for( var abCounter = 0 ; abCounter < savageWorldsArcaneBackgrounds.length ; abCounter++)
                _availableArcaneBackgrounds.push( savageWorldsArcaneBackgrounds[abCounter] );

            for( var abCounter = 0 ; abCounter < savageWorldsPowers.length ; abCounter++) {

                if(
                    _powerAlterations.length > 0
                    &&
                    typeof(_powerAlterations[ savageWorldsPowers[abCounter].id ]) != "undefined"
                ) {

                    if( typeof(_powerAlterations[ savageWorldsPowers[abCounter].id ].adjusted_rank) != "undefined" ) {
                        //console.log("!", _powerAlterations[ savageWorldsPowers[abCounter].id ].adjusted_rank, _XP.rankValue);
                        if( _powerAlterations[ savageWorldsPowers[abCounter].id ].adjusted_rank <= _XP.rankValue  )
                             savageWorldsPowers[abCounter].selectable = true;
                        else
                             savageWorldsPowers[abCounter].selectable = false;
                    } else {
                        if( savageWorldsPowers[abCounter].rank <= _XP.rankValue  )
                             savageWorldsPowers[abCounter].selectable = true;
                        else
                             savageWorldsPowers[abCounter].selectable = false;
                    }
                //    console.log("_powerAlterations", _powerAlterations[ savageWorldsPowers[abCounter].id ]);
                //    console.log("savageWorldsPowers[abCounter]", abCounter, savageWorldsPowers[abCounter]);
                } else {

                    if( savageWorldsPowers[abCounter].rank <= _XP.rankValue  )
                         savageWorldsPowers[abCounter].selectable = true;
                    else
                         savageWorldsPowers[abCounter].selectable = false;
                }

                if( _selectedArcaneBackground && _selectedArcaneBackground.power_list && _selectedArcaneBackground.power_list.length > 0 ) {
                    if( _selectedArcaneBackground.power_list.indexOf( savageWorldsPowers[abCounter].tag ) < 0 ) {
                        savageWorldsPowers[abCounter].selectable = false;
                    }
                }

                _availablePowers.push( savageWorldsPowers[abCounter] );
                if( _selectedArcaneBackground.free_power != "" && _selectedArcaneBackground.free_power == savageWorldsPowers[abCounter].tag) {
                    _selectedArcaneBackground.freePower = savageWorldsPowers[abCounter];
                }
            }
            for( var abCounter = 0 ; abCounter < savageWorldsArcaneTrappings.length ; abCounter++)
                _availableTrappings.push( savageWorldsArcaneTrappings[abCounter] );

        } else {
            _selectedArcaneBackground = _availableArcaneBackgrounds[0];
        }

        if( !_selectedArcaneBackground )
            _selectedArcaneBackground = _availableArcaneBackgrounds[0];

        // Process Available Gear
        _availableMundaneGear = Array();
        for( var gearCounter = 0; gearCounter < savageWorldsGearMundane.length; gearCounter++) {
            if( this.bookInUse( savageWorldsGearMundane[ gearCounter ].book ) ) {
                _availableMundaneGear.push( savageWorldsGearMundane[ gearCounter ] );
            }
        }

        _availableArmor = Array();
        for( var gearCounter = 0; gearCounter < savageWorldsGearArmor.length; gearCounter++) {
            if( this.bookInUse( savageWorldsGearArmor[ gearCounter ].book ) ) {
                _availableArmor.push( savageWorldsGearArmor[ gearCounter ] );
            }
        }

        _availableHandWeapons = Array();
        for( var gearCounter = 0; gearCounter < savageWorldsGearHandWeapons.length; gearCounter++) {
            if( this.bookInUse( savageWorldsGearHandWeapons[ gearCounter ].book ) ) {
                _availableHandWeapons.push( savageWorldsGearHandWeapons[ gearCounter ] );
            }
        }

        _availableRangedWeapons = Array();
        for( var gearCounter = 0; gearCounter < savageWorldsGearRangedWeapons.length; gearCounter++) {
            if( this.bookInUse( savageWorldsGearRangedWeapons[ gearCounter ].book ) ) {
                _availableRangedWeapons.push( savageWorldsGearRangedWeapons[ gearCounter ] );
            }
        }

        _availableShields = Array();
        for( var gearCounter = 0; gearCounter < savageWorldsGearShields.length; gearCounter++) {
            if( this.bookInUse( savageWorldsGearShields[ gearCounter ].book ) ) {
                _availableShields.push( savageWorldsGearShields[ gearCounter ] );
            }
        }

        // Process Available Hindrances
        _availableHindrances = Array();
        _availableHindrances.push(
        {
            local_name: "- " + this.getTranslation("CHARGEN_SELECT_HINDRANCE") + " -",
            select_option_name:  "- " + this.getTranslation("CHARGEN_SELECT_HINDRANCE") + " -",
            tag: "",
            selectable: true,
            bookObj: {
                local_name: ""
            },
            blank: true
        }
        );
        for( var hindranceCounter = 0; hindranceCounter < savageWorldsHindrances.length; hindranceCounter++) {
            if( savageWorldsHindrances[hindranceCounter].racial == 0 ) {
                if( this.bookInUse( savageWorldsHindrances[hindranceCounter].book ) ) {
                    savageWorldsHindrances[hindranceCounter].selectable = true;

                    if( typeof(savageWorldsHindrances[hindranceCounter].requires) == "function" ) {
                        savageWorldsHindrances[hindranceCounter].selectable = savageWorldsHindrances[hindranceCounter].requires( this );
                    }

                    if( savageWorldsHindrances[hindranceCounter].conflicts_edge != "" ) {
                        if( this.hasEdge( savageWorldsHindrances[hindranceCounter].conflicts_edge ))
                            savageWorldsHindrances[hindranceCounter].selectable = false;
                    }

                    if( savageWorldsHindrances[hindranceCounter].conflicts_hindrance != "" ) {
                        if( this.hasHindrance( savageWorldsHindrances[hindranceCounter].conflicts_hindrance ))
                            savageWorldsHindrances[hindranceCounter].selectable = false;
                    }

                    if( this.hasHindrance( savageWorldsHindrances[hindranceCounter].tag ) ) {
                        savageWorldsHindrances[hindranceCounter].selectable = false;
                    }

                    _availableHindrances.push( savageWorldsHindrances[hindranceCounter] );
                }
            }
        }

        // Process Availble Cyberware
        _availableCyberware = Array();
        for( var cyberCounter = 0; cyberCounter < savageWorldsCyberware.length; cyberCounter++) {
            _availableCyberware.push( savageWorldsCyberware[ cyberCounter ] );
        }

        for( var cyberIndex = 0; cyberIndex < _installedCyberware.length; cyberIndex++) {

             _installedCyberware[ cyberIndex ].selectedEdge = null;
             for( var edgeC = 0; edgeC < _combatEdges.length; edgeC++ ) {
                 if( _combatEdges[ edgeC ].tag == _installedCyberware[ cyberIndex ].option2 && _combatEdges[ edgeC ].book == _installedCyberware[ cyberIndex ].option1 )
                    _installedCyberware[ cyberIndex ].selectedEdge = _combatEdges[ edgeC ]
             }

        }
        // Process Available Edges
        _availableEdges = Array();
        _availableEdges.push(
            {
                local_name:  "- " + this.getTranslation("CHARGEN_SELECT_EDGE") + " -",
                select_option_name:  "- " + this.getTranslation("CHARGEN_SELECT_EDGE") + " -",
                tag: "",
                selectable: true,
                bookObj: {
                    local_name: ""
                },
                blank: true
            }
        );

        _combatEdges = Array();
        _combatEdges.push(
            {
                local_name:  "- " + this.getTranslation("CHARGEN_SELECT_EDGE") + " -",
                select_option_name:  "- " + this.getTranslation("CHARGEN_SELECT_EDGE") + " -",
                tag: "",
                selectable: true,
                bookObj: {
                    local_name: ""
                },
                blank: true
            }
        );

        for( var edgeCounter = 0; edgeCounter < savageWorldsEdges.length; edgeCounter++) {
            if( savageWorldsEdges[edgeCounter].racial == 0 ) {

                if( this.bookInUse( savageWorldsEdges[edgeCounter].book ) ) {
                    savageWorldsEdges[edgeCounter].selectable = true;

                    _combatEdges.push( savageWorldsEdges[edgeCounter] );

                    if( typeof(savageWorldsEdges[edgeCounter].requires) == "function" ) {
                        savageWorldsEdges[edgeCounter].selectable = savageWorldsEdges[edgeCounter].requires( this );
                    }

                    if( savageWorldsEdges[edgeCounter].required_edge != ""  ) {
                        if( !this.hasEdge( savageWorldsEdges[edgeCounter].required_edge )) {
                            savageWorldsEdges[edgeCounter].selectable = false;
                        }
                    }

                    if( savageWorldsEdges[edgeCounter].conflicts_edge != "" ) {
                        if( this.hasEdge( savageWorldsEdges[edgeCounter].conflicts_edge )) {
                            savageWorldsEdges[edgeCounter].selectable = false;

                        }
                    }

                    if( savageWorldsEdges[edgeCounter].required_rank > _XP.rankValue ) {
                        if(
                            ( _bornAHero == false )
                                ||
                            (    _bornAHero == true && this.isMARS() == false && _XP.value > 0 )
                                ||
                            (    _bornAHero == true && this.isMARS() == true && _XP.value > 20 )

                        ) {
                                savageWorldsEdges[edgeCounter].selectable = false;
                        }
                    }

                    if( savageWorldsEdges[edgeCounter].conflicts_hindrance != ""  ) {
                        if( this.hasHindrance( savageWorldsEdges[edgeCounter].conflicts_hindrance )) {
                            savageWorldsEdges[edgeCounter].selectable = false;
                        }
                    }
                    if( savageWorldsEdges[edgeCounter].reselectable == 0 && this.hasEdge( savageWorldsEdges[edgeCounter].tag ) ) {
                        savageWorldsEdges[edgeCounter].selectable = false;
                    }

                    if(
                        _usesSPCCreation == true  &&
                        (
                            savageWorldsEdges[edgeCounter].tag == "arcane-background"
                                ||
                            savageWorldsEdges[edgeCounter].tag == "arcane-resistance"
                                ||
                            savageWorldsEdges[edgeCounter].tag == "arcane-resistance-improved"
                                ||
                            savageWorldsEdges[edgeCounter].tag == "holy-warrior"
                                ||
                            savageWorldsEdges[edgeCounter].tag == "gadgeteer"
                                ||
                            savageWorldsEdges[edgeCounter].tag == "unholy-warrior"
                                ||
                            savageWorldsEdges[edgeCounter].tag == "unholy-warrior"
                                ||
                            savageWorldsEdges[edgeCounter].tag == "holy-warrior"
                                ||
                            savageWorldsEdges[edgeCounter].tag == "holy-unholy-warrior"
                                ||
                            savageWorldsEdges[edgeCounter].tag == "new-power"
                                ||
                            savageWorldsEdges[edgeCounter].tag == "no-mercy"
                                ||
                            savageWorldsEdges[edgeCounter].tag == "power-points"
                                ||
                            savageWorldsEdges[edgeCounter].tag == "rapid-recharge"
                                ||
                            savageWorldsEdges[edgeCounter].tag == "soul-drain"
                                ||
                            savageWorldsEdges[edgeCounter].tag == "wizard"
                        )
                    ) {
                        if(
                            savageWorldsEdges[edgeCounter].tag == "power-points"
                                &&
                            _SPCRisingStars == true
                        ) {
                            savageWorldsEdges[edgeCounter].selectable = true;
                        } else {
                            savageWorldsEdges[edgeCounter].selectable = false;
                        }
                    }

                    _availableEdges.push( savageWorldsEdges[edgeCounter] );
                }
            }
        }

        // Advancements...
        this.availableAdvancements = Math.floor(_XP.value / 5);

        this.allocateAdvancementSlots();

        // clear out advancement skill specialties
        for( var skillCounter = 0; skillCounter < _skillList.length; skillCounter++ ) {
            for(var specialtyCounter = _skillList[skillCounter].specialties - 1; specialtyCounter >= 0; specialtyCounter++) {
                if( _skillList[skillCounter].specialties[specialtyCounter].advskill > 0 ) {
                    _skillList[skillCounter].specialties = _skillList[skillCounter].specialties.splice(specialtyCounter, 1);
                }
            }
        }

        if( _selectedAdvancements.length > this.availableAdvancements) {
            _validationReport.push( this.getTranslation("CHARGEN_VALIDATION_TOO_MANY_ADVANCEMENTS") );
            _isValid = false;
        }

        // check to make sure a requirement wasn't removed from edges...
        for( edgeCounter = 0; edgeCounter < _selectedEdges.length; edgeCounter++) {

            if( typeof(_selectedEdges[edgeCounter].requires) == "function" ) {
                if( _selectedEdges[edgeCounter].requires(this) == false ) {
                    _validationReport.push( _selectedEdges[edgeCounter].local_name + ": " + this.getTranslation("CHARGEN_VALIDATION_EDGE_DOESNT_MEET_REQUIREMENTS") );
                    _isValid = false;
                }
            }

            if( _selectedEdges[edgeCounter].required_edge != ""  ) {
                if( !this.hasEdge( _selectedEdges[edgeCounter].required_edge )) {
                    theEdge = this.getEdge( _selectedEdges[edgeCounter].required_edge  );
                    _validationReport.push( _selectedEdges[edgeCounter].local_name + ": " + this.getTranslation("CHARGEN_VALIDATION_REQUIRES_EDGE").replace( "{value}", theEdge.local_name) );
                    _isValid = false;
                }
            }

            if( _selectedEdges[edgeCounter].conflicts_edge != "" ) {
                if( this.hasEdge( _selectedEdges[edgeCounter].conflicts_edge )) {

                    theEdge = this.getEdge( _selectedEdges[edgeCounter].conflicts_edge  );
                    _validationReport.push( _selectedEdges[edgeCounter].local_name + ": " + this.getTranslation("CHARGEN_VALIDATION_CONFLICTS_EDGE").replace( "{value}", theEdge.local_name) );
                    _isValid = false;

                }
            }

            if( _selectedEdges[edgeCounter].conflicts_hindrance != ""  ) {
                if( hindranceTag = this.hasHindrance( _selectedEdges[edgeCounter].conflicts_hindrance ) ) {
                    theHindrance = this.getHindrance( hindranceTag  );
                    _validationReport.push( _selectedEdges[edgeCounter].local_name + ": " + this.getTranslation("CHARGEN_VALIDATION_CONFLICTS_HINDRANCE").replace( "{value}", theHindrance.local_name) );
                    _isValid = false;
                }
            }

        }
        for( var powerCounter = 0; powerCounter < _selectedPowers.length; powerCounter++ ) {
            if(  _selectedPowers[powerCounter].trapping && _selectedPowers[powerCounter].trapping.tag != "" ) {
                _selectedPowers[powerCounter].showName = _selectedPowers[powerCounter].customName + " (" + _selectedPowers[powerCounter].local_name + ", " + _selectedPowers[powerCounter].trapping.local_name + ")";
            } else {
                _selectedPowers[powerCounter].showName = _selectedPowers[powerCounter].customName + " (" + _selectedPowers[powerCounter].local_name + ")";
            }

         }

         var attributeIncreaseNovice = false;
         var attributeIncreaseSeasoned = false;
         var attributeIncreaseVeteran = false;
         var attributeIncreaseHeroic = false;

         for( var advCounter = 0; advCounter < _selectedAdvancements.length; advCounter++) {
             // Edge Advancement
             if( _selectedAdvancements[advCounter].tag == "edge" ) {

                 if(
                     _selectedAdvancements[advCounter].option1
                         &&
                     typeof( _selectedAdvancements[advCounter].option1.charEffects) == "function"
                 ) {
                     _selectedAdvancements[advCounter].option1.charEffects(this);
                 }

                if(
                    _selectedAdvancements[advCounter].option1
                        &&
                    typeof( _selectedAdvancements[advCounter].option1.requires) == "function"
                ) {
                    if( !_selectedAdvancements[advCounter].option1.requires(this) ) {
                        invalidMessage = this.getTranslation("CHARGEN_VALIDATION_ADVANCEMENT_INVALID_EDGE");
                        invalidMessage = invalidMessage.replace("{value}", _selectedAdvancements[advCounter].option1.local_name );
                        _validationReport.push( invalidMessage );
                        _isValid = false;
                    }
                }

                if(
                    _selectedAdvancements[advCounter].option1
                        &&
                    _selectedAdvancements[advCounter].option1.required_edge
                ) {
                    if( !this.hasEdge( _selectedAdvancements[advCounter].option1.required_edge, advCounter ) ) {
                        invalidMessage = this.getTranslation("CHARGEN_VALIDATION_ADVANCEMENT_INVALID_EDGE");
                        invalidMessage = invalidMessage.replace("{value}", _selectedAdvancements[advCounter].option1.local_name );
                        _validationReport.push( invalidMessage );
                        _isValid = false;
                    }
                }

                _installedEdges.push( _selectedAdvancements[advCounter].option1 );

             }
             // End of Edge Advancement

             // Attribute Advancement
             if( _selectedAdvancements[advCounter].tag == "attribute" ) {
                 this.boostAttribute( _selectedAdvancements[advCounter].option1 );

                 if( advCounter < 3 ) {
                     if( attributeIncreaseNovice ) {
                         _validationReport.push( this.getTranslation("CHARGEN_VALIDATION_ADVANCEMENT_ATTRIBUTE_NOVICE") );
                         _isValid = false;
                     }
                     attributeIncreaseNovice = true;
                 } else if( advCounter < 7 ) {
                     if( attributeIncreaseSeasoned ) {
                         _validationReport.push( this.getTranslation("CHARGEN_VALIDATION_ADVANCEMENT_ATTRIBUTE_SEASONED") );
                         _isValid = false;
                     }
                     attributeIncreaseSeasoned = true;
                 } else if( advCounter < 11 ) {

                     if( attributeIncreaseVeteran ) {
                         _validationReport.push( this.getTranslation("CHARGEN_VALIDATION_ADVANCEMENT_ATTRIBUTE_VETERAN") );
                         _isValid = false;
                     }
                     attributeIncreaseVeteran = true;
                 } else if( advCounter < 15 ) {
                     if( attributeIncreaseHeroic ) {
                         _validationReport.push( this.getTranslation("CHARGEN_VALIDATION_ADVANCEMENT_ATTRIBUTE_HEROIC") );
                         _isValid = false;
                     }
                     attributeIncreaseHeroic = true;
                 } else {
                     // Legendary can have an attribute increase every other advance
                     if(
                         advCounter != 15 // just in case someone chose it at advance #15.
                             &&
                         _selectedAdvancements[advCounter - 1].tag != "attribute"
                     ) {
                         _validationReport.push( this.getTranslation("CHARGEN_VALIDATION_ADVANCEMENT_ATTRIBUTE_LEGENDARY") );
                         _isValid = false;
                     }
                 }
             }
             // End of Attribute Advancement

             // Skill Increase Advancement
             if( _selectedAdvancements[advCounter].tag == "incskill" ) {
                 // TODO
                 if( _selectedAdvancements[advCounter].option1 )
                     this.boostSkill( _selectedAdvancements[advCounter].option1.id );

             }
             // End of Skill Increase Advancement

             // 2 Skills Increase Advancement
             if( _selectedAdvancements[advCounter].tag == "inc2skills" ) {
                 // TODO
                 if( _selectedAdvancements[advCounter].option1 )
                     this.boostSkill( _selectedAdvancements[advCounter].option1.id );
                 if( _selectedAdvancements[advCounter].option2 )
                     this.boostSkill( _selectedAdvancements[advCounter].option2.id );
             }
             // End of 2 Skills Increase Advancement

             // New Skill Advancement
             if( _selectedAdvancements[advCounter].tag == "skill" ) {
                 if(
                     _selectedAdvancements[advCounter].option1
                     &&
                     ( _selectedAdvancements[advCounter].option1.specify
                        && _selectedAdvancements[advCounter].option1.specify > 0
                    ) ||
                    (
                        _selectedAdvancements[advCounter].option1
                        &&
                        _selectedAdvancements[advCounter].option1.is_specialty
                        &&
                        _selectedAdvancements[advCounter].option1.is_specialty != ""
                    )
                 ) {
                     this.addSpecialtySkill(
                         _selectedAdvancements[advCounter].option1,
                         _selectedAdvancements[advCounter].option2,
                         1,
                         1
                     );
                     //this.refreshAvailable();
                 } else {
                     _selectedAdvancements[advCounter].option2 = null;
                     if( _selectedAdvancements[advCounter].option1 ) {
                         if( _selectedAdvancements[advCounter].option1.id )
                             this.boostSkill( _selectedAdvancements[advCounter].option1.id );
                         else
                             this.boostSkill( _selectedAdvancements[advCounter].option1 );
                     } else {
                         _selectedAdvancements[advCounter].option1 = _allSkills[0];
                     }
                 }
             }
             // End of New Skill Advancement

             // recalculate attributes from advancement boosts
            _displayAttributes = {
                agility: getDiceValue( _attributes.agility + _attributeBoost.agility ),
                smarts: getDiceValue( _attributes.smarts + _attributeBoost.smarts ),
                spirit: getDiceValue( _attributes.spirit + _attributeBoost.spirit ),
                strength: getDiceValue( _attributes.strength + _attributeBoost.strength ),
                vigor: getDiceValue( _attributes.vigor + _attributeBoost.vigor ),
            };
        }


        _totalPowersKnown += _additionalPowersKnown;


        fightingSkill = this.getSkill("SKILL_FIGHTING");

        _derived.parry = 2;
        if( fightingSkill.value > 0 ) {
            fightingValue = getDiceValue( fightingSkill.value + fightingSkill.boost  );
            _derived.parry = Math.floor(fightingValue.value / 2) + 2;
        }

        this.calcSPC();


        this.refreshAvailable();

         // recalculate attributes from advancement boosts
        _displayAttributes = {
            agility: getDiceValue( _attributes.agility + _attributeBoost.agility ),
            smarts: getDiceValue( _attributes.smarts + _attributeBoost.smarts ),
            spirit: getDiceValue( _attributes.spirit + _attributeBoost.spirit ),
            strength: getDiceValue( _attributes.strength + _attributeBoost.strength ),
            vigor: getDiceValue( _attributes.vigor + _attributeBoost.vigor ),
        };

        if( _attributes.spirit + _attributeBoost.spirit  <  _attributes.vigor + _attributeBoost.vigor  ) {
            _maxStrain = _attributes.spirit + _attributeBoost.spiri;
        } else {
            _maxStrain = _attributes.vigor + _attributeBoost.vigor;
        }
        _maxStrain += _strainBoost;
        if( _doubleStrain > 0 )
            _maxStrain = _maxStrain * 2;

        // recalc derived toughness
        _derived.toughness_base = Math.floor(_displayAttributes.vigor.value / 2) + 2;
        //_derived.toughness += _attributeBoost.vigor; // will always be in steps of 2, so just add it ;)
        _derived.toughness += _derived.toughness_base;

         _load.currentLoad = 0;
         _load.combatLoad = 0;
         // subtract gear costs....

         for( var gearCounter = 0; gearCounter < _selectedHandWeapons.length; gearCounter++) {

            _selectedHandWeapons[ gearCounter ].localCost = _selectedHandWeapons[ gearCounter ].purchaseCost;
            _selectedHandWeapons[ gearCounter ].localWeight = _selectedHandWeapons[ gearCounter ].weight;
            _selectedHandWeapons[ gearCounter ].localAP = _selectedHandWeapons[ gearCounter ].ap;
            _selectedHandWeapons[ gearCounter ].localNotes = _selectedHandWeapons[ gearCounter ].notes;
            _selectedHandWeapons[ gearCounter ].localDamage = _selectedHandWeapons[ gearCounter ].damage;

            _selectedHandWeapons[ gearCounter ].local_name = this.getLocalName( _selectedHandWeapons[ gearCounter ].name );

            switch( _selectedHandWeapons[ gearCounter ].sciFiMod ) {
                case "chain":
                    _selectedHandWeapons[ gearCounter ].localCost += 500;
                    _selectedHandWeapons[ gearCounter ].localWeight += 2;
                    _selectedHandWeapons[ gearCounter ].localAP += 2;
                    _selectedHandWeapons[ gearCounter ].local_name = this.getTranslation("SCIFI_CHAIN") + "-" + _selectedHandWeapons[ gearCounter ].local_name;
                    break;
                case "vibro":
                    _selectedHandWeapons[ gearCounter ].localCost += 500;
                    _selectedHandWeapons[ gearCounter ].localWeight += 2;
                    _selectedHandWeapons[ gearCounter ].localAP += 2;
                    _selectedHandWeapons[ gearCounter ].local_name = this.getTranslation("SCIFI_VIBRO") + "-" + _selectedHandWeapons[ gearCounter ].local_name;
                    break;
                case "energy":
                    _selectedHandWeapons[ gearCounter ].local_name = this.getTranslation("SCIFI_ENERGY") + "-" + _selectedHandWeapons[ gearCounter ].local_name;


                    _selectedHandWeapons[ gearCounter ].localDamage = _selectedHandWeapons[ gearCounter ].localDamage.replace("d10", "d12");
                    _selectedHandWeapons[ gearCounter ].localDamage = _selectedHandWeapons[ gearCounter ].localDamage.replace("d8", "d10");
                    _selectedHandWeapons[ gearCounter ].localDamage = _selectedHandWeapons[ gearCounter ].localDamage.replace("d6", "d8");
                    _selectedHandWeapons[ gearCounter ].localDamage = _selectedHandWeapons[ gearCounter ].localDamage.replace("d4", "d6");

                    _selectedHandWeapons[ gearCounter ].localCost += 500;
                    _selectedHandWeapons[ gearCounter ].localWeight += 1;
                    _selectedHandWeapons[ gearCounter ].localAP += 4;
                    break;
                case "molec":
                    _selectedHandWeapons[ gearCounter ].local_name = this.getTranslation("SCIFI_MOLECULAR") + "-" + _selectedHandWeapons[ gearCounter ].local_name;

                    _selectedHandWeapons[ gearCounter ].localCost += 500;
                    //_selectedHandWeapons[ gearCounter ].ap += 4;
                    var addAP = _selectedHandWeapons[ gearCounter ].localDamage;

                    if(addAP.indexOf("+") > 0 ) {
                        addAP = addAP.substring(0, addAP.indexOf("+") );
                    }

                    addAP = addAP.replace("d", "") / 1;

                    _selectedHandWeapons[ gearCounter ].localAP += Math.floor(addAP / 2);

                    break;
                case "power":
                    _selectedHandWeapons[ gearCounter ].local_name = this.getTranslation("SCIFI_POWER") + "-" + _selectedHandWeapons[ gearCounter ].local_name;

                    _selectedHandWeapons[ gearCounter ].localCost += 500;
                    _selectedHandWeapons[ gearCounter ].localWeight += 1;
                    _selectedHandWeapons[ gearCounter ].localDamage += " + d6";
                    break;
                case "stun":
                    _selectedHandWeapons[ gearCounter ].local_name = this.getTranslation("SCIFI_STUN") + "-" + _selectedHandWeapons[ gearCounter ].local_name;

                    _selectedHandWeapons[ gearCounter ].localCost += 500;
                    _selectedHandWeapons[ gearCounter ].localWeight += 1;
                    break;
                default:
                    // no mods
                    break;
            }

             _currentFunds -= _selectedHandWeapons[ gearCounter ].purchaseCost;
             _load.currentLoad += _selectedHandWeapons[ gearCounter ].localWeight;
             if( _selectedHandWeapons[ gearCounter ].droppedDuringCombat == false )
                 _load.combatLoad += _selectedHandWeapons[ gearCounter ].localWeight;
             _selectedHandWeapons[ gearCounter ].toHitRollModifier = 0;
             _selectedHandWeapons[ gearCounter ].currentParry = _selectedHandWeapons[ gearCounter ].parry;



            if( _selectedHandWeapons[ gearCounter ].readiedLocation && _selectedHandWeapons[ gearCounter ].min_str > _displayAttributes.strength.value ) {
                _warningReport.push( this.getTranslation("CHARGEN_BELOW_STR_WEAPON") );

                if( _selectedHandWeapons[ gearCounter ].localDamage_strength > 0) {
                    var damageBit = _selectedHandWeapons[ gearCounter ].localDamage;

                    damageBit = this.setCharAt( damageBit, 1, _displayAttributes.strength.value);

                    if( _selectedHandWeapons[ gearCounter ].currentParry > 0 )
                        _selectedHandWeapons[ gearCounter ].currentParry = 0;

                    _selectedHandWeapons[gearCounter].
                        = _displayAttributes.strength.local_label + " + " + damageBit;
                } else {
                    _selectedHandWeapons[ gearCounter ].displayDamage = _selectedHandWeapons[ gearCounter ].localDamage;
                    _selectedHandWeapons[ gearCounter ].toHitRollModifier = -1;
                }
            } else {
                if( _selectedHandWeapons[ gearCounter ].localDamage_strength > 0) {
                    _selectedHandWeapons[ gearCounter ].displayDamage = _displayAttributes.strength.local_label + " + " + _selectedHandWeapons[ gearCounter ].localDamage;
                } else {
                    _selectedHandWeapons[ gearCounter ].displayDamage = _selectedHandWeapons[ gearCounter ].localDamage;
                }
            }

            if( _selectedHandWeapons[ gearCounter ].readiedLocation != "")
                _derived.parry += _selectedHandWeapons[ gearCounter ].parry_modifier;
         }

        for( var gearCounter = 0; gearCounter < _selectedRangedWeapons.length; gearCounter++) {
             _currentFunds -= _selectedRangedWeapons[ gearCounter ].purchaseCost;
             _load.currentLoad += _selectedRangedWeapons[ gearCounter ].weight;
             if( _selectedRangedWeapons[ gearCounter ].droppedDuringCombat == false )
                 _load.combatLoad += _selectedRangedWeapons[ gearCounter ].weight;
             _selectedRangedWeapons[ gearCounter ].toHitRollModifier = 0;
             _selectedRangedWeapons[ gearCounter ].currentParry = _selectedRangedWeapons[ gearCounter ].parry;

            if( _selectedRangedWeapons[ gearCounter ].readiedLocation && _selectedRangedWeapons[ gearCounter ].min_str > _displayAttributes.strength.value ) {
                _warningReport.push( this.getTranslation("CHARGEN_BELOW_STR_WEAPON") );

                if( _selectedHandWeapons[ gearCounter ].damage_strength > 0) {
                    var damageBit = _selectedRangedWeapons[ gearCounter ].damage;

                    damageBit = this.setCharAt( damageBit, 1, _displayAttributes.strength.value);

                    if( _selectedRangedWeapons[ gearCounter ].currentParry > 0 )
                        _selectedRangedWeapons[ gearCounter ].currentParry = 0;

                    _selectedRangedWeapons[ gearCounter ].displayDamage = _displayAttributes.strength.local_label + " + " +  damageBit;
                } else {
                    _selectedRangedWeapons[ gearCounter ].displayDamage = _selectedRangedWeapons[ gearCounter ].damage;
                    _selectedRangedWeapons[ gearCounter ].toHitRollModifier = -1;
                }
            } else {
                if( _selectedRangedWeapons[ gearCounter ].damage_strength > 0) {
                    _selectedRangedWeapons[ gearCounter ].displayDamage = _displayAttributes.strength.local_label + " + " + _selectedRangedWeapons[ gearCounter ].damage;
                } else {
                    _selectedRangedWeapons[ gearCounter ].displayDamage = _selectedRangedWeapons[ gearCounter ].damage;
                }
            }

            if( _selectedRangedWeapons[ gearCounter ].readiedLocation != "")
                _derived.parry += _selectedRangedWeapons[ gearCounter ].parry_modifier;
         }

         var cyberParenthetical = this.getTranslation( "CHARGEN_CYBER_PARENTHETICAL" );

         for( var cyberCounter = 0; cyberCounter < _installedCyberware.length; cyberCounter++) {
            if( _installedCyberware[ cyberCounter ].chooseRangedWeapon ) {
                for( var gearCounter = 0; gearCounter < _selectedRangedWeapons.length; gearCounter++) {
                    if( _selectedRangedWeapons[ gearCounter ].tag == _installedCyberware[ cyberCounter ].option1.id ) {

                        _selectedRangedWeapons[ gearCounter ].alwaysReady = true;

                        if( !_selectedRangedWeapons[ gearCounter ].customName )
                            _selectedRangedWeapons[ gearCounter ].customName = this.getLocalName( _selectedRangedWeapons[ gearCounter ].name );
                        _selectedRangedWeapons[ gearCounter ].original_name = this.getLocalName( _selectedRangedWeapons[ gearCounter ].name );

                        if( _installedCyberware[ cyberCounter ].customName ) {

                            if(
                                _selectedRangedWeapons[ gearCounter ].customName != _installedCyberware[ cyberCounter ].customName
                                    &&
                                _selectedRangedWeapons[ gearCounter ].original_name == _selectedRangedWeapons[ gearCounter ].customName
                            ) {
                                 _selectedRangedWeapons[ gearCounter ].customName = _installedCyberware[ cyberCounter ].customName;
                                 break;
                            }

                        } else {
                            if(
                                _selectedRangedWeapons[ gearCounter ].customName + " " + cyberParenthetical != _installedCyberware[ cyberCounter ].local_name
                                    &&
                                _selectedRangedWeapons[ gearCounter ].original_name == _selectedRangedWeapons[ gearCounter ].customName
                            ) {
                                  _selectedRangedWeapons[ gearCounter ].customName = _selectedRangedWeapons[ gearCounter ].local_name + " " + cyberParenthetical;
                                  break;
                            }

                        }

                    }

                }
            }

        }


         for( var gearCounter = 0; gearCounter < _selectedArmor.length; gearCounter++) {
             _currentFunds -= _selectedArmor[ gearCounter ].purchaseCost;
             if( _selectedArmor[ gearCounter ].isReadied ) {
                 if( _selectedArmor[ gearCounter ].covers_torso > 0 ) {
                     if( _selectedArmor[ gearCounter ].armor > _derived.armor ) {
                         _derived.armor = _selectedArmor[ gearCounter ].armor;
                     }
                 }
             }
             _load.currentLoad += _selectedArmor[ gearCounter ].weight;
             if( _selectedArmor[ gearCounter ].droppedDuringCombat == false )
                 _load.combatLoad += _selectedArmor[ gearCounter ].weight;
         }
         for( var gearCounter = 0; gearCounter < _selectedShields.length; gearCounter++) {
             _currentFunds -= _selectedShields[ gearCounter ].purchaseCost;
             _load.currentLoad += _selectedShields[ gearCounter ].weight;
            if( _selectedShields[ gearCounter ].readiedLocation && _selectedShields[ gearCounter ].readiedLocation != "")
                _derived.parry += _selectedShields[ gearCounter ].parry;
             if( _selectedShields[ gearCounter ].droppedDuringCombat == false )
                 _load.combatLoad += _selectedShields[ gearCounter ].weight;
         }
         for( var gearCounter = 0; gearCounter < _selectedMundaneGear.length; gearCounter++) {
             _currentFunds -= _selectedMundaneGear[ gearCounter ].purchaseCost * _selectedMundaneGear[ gearCounter ].count;
             _selectedMundaneGear[ gearCounter ].totalWeight = _selectedMundaneGear[ gearCounter ].weight * _selectedMundaneGear[ gearCounter ].count;
             _selectedMundaneGear[ gearCounter ].totalPurchaseCost = _selectedMundaneGear[ gearCounter ].purchaseCost * _selectedMundaneGear[ gearCounter ].count;
             _load.currentLoad += _selectedMundaneGear[ gearCounter ].weight * _selectedMundaneGear[ gearCounter ].count;
             if( _selectedMundaneGear[ gearCounter ].droppedDuringCombat == false )
                 _load.combatLoad += _selectedMundaneGear[ gearCounter ].weight * _selectedMundaneGear[ gearCounter ].count;
         }

        if( _currentFunds < 0 ) {
            _validationReport.push( this.getTranslation("CHARGEN_VALIDATION_TOO_MANY_FUNDS") );
            _isValid = false;
        }

        if( _usesSPCCreation ) {
            if( this.hasEdge("arcane-background") ) {
                var invalidMessage = this.getTranslation("CHARGEN_SPC_CANNOT_HAVE_AB");
                _validationReport.push( invalidMessage );
                _isValid = false;
            }
        }


        if( _derived.armor == 0) {
            _derived.toughnessAndArmor = _derived.toughness;
        } else {
            _derived.toughnessAndArmor = ( _derived.toughness + _derived.armor ) + " (" + _derived.armor + ")";
        }

        _loadLimit = _displayAttributes.strength.value * _encumbranceMultiplier;
        // if( this.hasEdge("brawny") )
        //     _loadLimit = _displayAttributes.strength.value * 8;

        if( _loadLimit > 0 ) {
            _load.loadModifier = Math.floor( _load.currentLoad / _loadLimit ) * -1 ;
            _load.combatLoadModifier = Math.floor( _load.combatLoad / _loadLimit ) * -1 ;
        } else {
            _load.loadModifier = 0;
            _load.combatLoadModifier = 0;
        }

        if( _load.loadModifier < -3 ) {
            _warningReport.push( this.getTranslation("CHARGEN_CHARACTER_OVERLOADED") );
        }

        for( var gearCounter = 0; gearCounter < _selectedHandWeapons.length; gearCounter++) {
            _selectedHandWeapons[ gearCounter ].toHitRollModifier -= _load.loadModifier;
        }

        if( _multipleLanguages == true && _linguistSelected == false )
            _knownLanguagesLimit = _displayAttributes.smarts.value / 2 + 1;
        //console.log( "_knownLanguagesLimit", _knownLanguagesLimit );
        for( var langCounter = 0; langCounter < _knownLanguagesLimit; langCounter++ ) {
            if( typeof(_knownLanguages[ langCounter]) == "undefined")
                _knownLanguages[ langCounter ] = "";
        }

        _activeSkills = {};
        for( var skCount = 0; skCount <  _agilitySkills.length; skCount++ ) {
            //console.log( _agilitySkills[skCount].local_name, _agilitySkills[skCount].displayValue );
            if( _agilitySkills[skCount].displayValue && _agilitySkills[skCount].displayValue != "")
                _activeSkills[ _agilitySkills[skCount].local_name ] = _agilitySkills[skCount].displayValue;
        }

        for( var skCount = 0; skCount <  _smartsSkills.length; skCount++ ) {
            //console.log( _smartsSkills[skCount].local_name, _smartsSkills[skCount].displayValue );
            if( _smartsSkills[skCount].displayValue && _smartsSkills[skCount].displayValue != "")
                _activeSkills[ _smartsSkills[skCount].local_name ] = _smartsSkills[skCount].displayValue;

            if( _smartsSkills[skCount].specialties.length > 0 ) {
                for( var spCount = 0; spCount <  _smartsSkills[skCount].specialties.length; spCount++ ) {
                    skillName = _smartsSkills[skCount].local_name + " (" + _smartsSkills[skCount].specialties[spCount].name + ")";
                    _activeSkills[ skillName ] = _smartsSkills[skCount].specialties[spCount].displayValue;
                }
            }
        }

        for( var skCount = 0; skCount <  _spiritSkills.length; skCount++ ) {
            //console.log( _spiritSkills[skCount].local_name, _spiritSkills[skCount].displayValue );
            if( _spiritSkills[skCount].displayValue && _spiritSkills[skCount].displayValue != "")
                _activeSkills[ _spiritSkills[skCount].local_name ] = _spiritSkills[skCount].displayValue;
        }

        for( var skCount = 0; skCount <  _strengthSkills.length; skCount++ ) {
            //console.log( _strengthSkills[skCount].local_name, _strengthSkills[skCount].displayValue );
            if( _strengthSkills[skCount].displayValue && _strengthSkills[skCount].displayValue != "")
                _activeSkills[ _strengthSkills[skCount].local_name ] = _strengthSkills[skCount].displayValue;
        }

        for( var gdvc = 0; gdvc < globalDiceValues.length; gdvc++) {
            if( 1 + _attributeBoost.agility <= globalDiceValues[gdvc].id  && globalDiceValues[gdvc].id <= 5 + _attributeBoost.agility )
                _diceValues.agility.push( globalDiceValues[gdvc] );
            if( 1 + _attributeBoost.smarts <= globalDiceValues[gdvc].id  && globalDiceValues[gdvc].id <= 5 + _attributeBoost.smarts )
                _diceValues.smarts.push( globalDiceValues[gdvc] );
            if( 1 + _attributeBoost.spirit <= globalDiceValues[gdvc].id  && globalDiceValues[gdvc].id <= 5 + _attributeBoost.spirit )
                _diceValues.spirit.push( globalDiceValues[gdvc] );
            if( 1 + _attributeBoost.strength <= globalDiceValues[gdvc].id  && globalDiceValues[gdvc].id <= 5 + _attributeBoost.strength )
                _diceValues.strength.push( globalDiceValues[gdvc] );
            if( 1 + _attributeBoost.vigor <= globalDiceValues[gdvc].id  && globalDiceValues[gdvc].id <= 5 + _attributeBoost.vigor )
                _diceValues.vigor.push( globalDiceValues[gdvc] );

        }

        //console.log( _activeSkills );

    }

    this.setEncumbranceMultiplier = function( newValue ) {
        // only modify up! This fixes problems with brawny edge overriding cyberware mule
        if( newValue > _encumbranceMultiplier )
            _encumbranceMultiplier = newValue / 1;
    }

    this.setCharAt = function(str,index,chr) {
        if(index > str.length-1) return str;
        return str.substr(0,index) + chr + str.substr(index+1);
    }

    this.getEdge = function( edgeTag ) {
        for( var edgeCounter = 0; edgeCounter < savageWorldsEdges.length; edgeCounter++ ) {
            if( savageWorldsEdges[edgeCounter].tag == edgeTag ) {
                return savageWorldsEdges[edgeCounter];
            }
        }
        return null;
    }

    this.getHindrance = function( hindranceTag  ) {

        for( var hindranceCounter = 0; hindranceCounter < savageWorldsHindrances.length; hindranceCounter++ ) {
            if( savageWorldsHindrances[hindranceCounter].tag == hindranceTag ) {
                return savageWorldsHindrances[hindranceCounter];
            }
        }
        return null;
    }

    this.exportBBCode = function() {
        var html = this.exportHTMLCode();

        while( html.indexOf("<br />\n") > -1)
            html = html.replace("<br />\n", "\n");
        while( html.indexOf("<br />") > -1)
            html = html.replace("<br />", "\n");
        while( html.indexOf("<br/>\n") > -1)
            html = html.replace("<br/>\n", "\n");
        while( html.indexOf("<br/>") > -1)
            html = html.replace("<br/>", "\n");
        while( html.indexOf("<br>\n") > -1)
            html = html.replace("<br>\n", "\n");
        while( html.indexOf("<br>") > -1)
            html = html.replace("<br>", "\n");
        while( html.indexOf("<strong>") > -1)
            html = html.replace("<strong>", "[b]");
        while( html.indexOf("</strong>") > -1)
            html = html.replace("</strong>", "[/b]");
        while( html.indexOf("<b>") > -1)
            html = html.replace("<b>", "[b]");
        while( html.indexOf("</b>") > -1)
            html = html.replace("</b>", "[/b]");
        while( html.indexOf("</ul>") > -1)
            html = html.replace("</ul>", "[/list]");
        while( html.indexOf("<ul>") > -1)
            html = html.replace("<ul>", "[list]");
        while( html.indexOf("</li>\n") > -1)
            html = html.replace("</li>\n", "\n");
        while( html.indexOf("</li>") > -1)
            html = html.replace("</li>", "\n");
        while( html.indexOf("<li>") > -1)
            html = html.replace("<li>", "[*]");
        while( html.indexOf("<h3>") > -1)
            html = html.replace("<h3>", "[size=200][b]");
        while( html.indexOf("</h3>") > -1)
            html = html.replace("</h3>", "[/b][/size]\n");
        while( html.indexOf("<em>") > -1)
            html = html.replace("<em>", "[i]");
        while( html.indexOf("</em>") > -1)
            html = html.replace("</em>", "[/i]");

        while( html.indexOf("<h4>") > -1)
            html = html.replace("<h4>", "[size=150][b]");
        while( html.indexOf("</h4>") > -1)
            html = html.replace("</h4>", "[/b][/size]\n");

        while( html.indexOf("<h5>") > -1)
            html = html.replace("<h5>", "[size=125][b]");
        while( html.indexOf("</h5>") > -1)
            html = html.replace("</h5>", "[/b][/size]\n");

        // This should be pretty close! :)

        return html;
    }

    this.exportHTMLCode = function() {
        var html;
        if( _name != "")
            html = "<h3>" + _name + "</h3>";
        else
            html = "<h3>The Nameless Character :(</h3>";

        if( _description != "")
            html += _description.replace("\n", "<br />\n") + "<br />\n<br />\n";

        if( _background != "")
            html += _background.replace("\n", "<br />\n") + "<br />\n<br />\n";

        html += "<b>" + _race.local_name + " " + _gender.label + "</b><br />\n";

        html += "<b>" + this.getTranslation("CHARGEN_RANK") + ":</b> " + _XP.rankName + "<br />\n";

        /*
    Attributes: Agility d8, Smarts d6, Spirit d6, Strength d6, Vigor d8
    Skills: Fighting d8, Notice d6, Shooting d8, Stealth d8, Survival d8, Tracking d6, Climbing d6
    Charisma: –1; Pace: 6; Parry: 5; Toughness: 10 (4)
    Hindrances: Bad Luck, Greedy (Minor), Habit (Minor—frequently disappears)
    Edges: Alertness, Woodsman, Assassin
    Gear: Binoculars (in cabin), body armor (+4, hidden in cabin), blaster pistol (Range 12/24/48, Damage 2d6+2, AP 2, hidden in cabin), commlink, C$50.
         * */

        // Traits
            // Attributes
            html += "<strong>" + this.getTranslation("GENERAL_ATTRIBUTES") + ":</strong> ";
                html += this.getTranslation("ATTRIBUTE_AGILITY") + ": " +  _displayAttributes.agility.local_label + ", ";
                html += this.getTranslation("ATTRIBUTE_SMARTS") + ": " +  _displayAttributes.smarts.local_label + ", ";
                html += this.getTranslation("ATTRIBUTE_SPIRIT") + ": " +   _displayAttributes.spirit.local_label + ", ";
                html += this.getTranslation("ATTRIBUTE_STRENGTH") + ": " +   _displayAttributes.strength.local_label + ", ";
                html += this.getTranslation("ATTRIBUTE_VIGOR") + ": " +   _displayAttributes.vigor.local_label + " ";
            html += "<br />\n";

            // Skills
            html += "<strong>" + this.getTranslation("GENERAL_SKILLS") + ":</strong> ";

            // sort skills alphabetacially
            keys = Object.keys(_activeSkills),

            keys.sort();

            for (var kCount = 0; kCount < keys.length; kCount++) {
                html += keys[kCount] + ": " + _activeSkills[ keys[kCount] ];
                if( kCount < keys.length -1 )
                    html += ", ";
            }

            html += "<br />\n";

            // Derived
            //html += "<b>" + this.getTranslation("CHARGEN_ATTRIBUTES") + ":</b> ";

            if( _derived.charisma != 0 ) {
                if( _derived.charisma > 0 ) {
                    html += "<strong>" + this.getTranslation("GENERAL_CHARISMA") + ":</strong> +" + _derived.charisma + "; ";
                } else {
                    html += "<strong>" + this.getTranslation("GENERAL_CHARISMA") + ":</strong> " + _derived.charisma + "; ";
                }
            }
            html += "<strong>" + this.getTranslation("GENERAL_PACE") + ":</strong> " + _derived.pace + "; ";

            html += "<strong>" + this.getTranslation("GENERAL_PARRY") + ":</strong> " + _derived.parry + "; ";

            html += "<strong>" + this.getTranslation("GENERAL_TOUGHNESS") + ":</strong> " + (_derived.toughness + _derived.armor ) + " ";
            if( _derived.armor != 0 )
                html += "(" + _derived.armor + ")";

            html += "<br />\n";
            // Edges

            html += "<strong>" + this.getTranslation("GENERAL_EDGES") + ":</strong> ";
            var eCounter = 0;
            if( _installedEdges.length > 0 ) {
                for (var eCount = 0; eCount < _installedEdges.length; eCount++) {
                    html += _installedEdges[ eCount ].local_name ;
                    if( _installedEdges[ eCount ].racial )
                        html += " " + this.getTranslation("CHARGEN_RACIAL_PARENTHETICAL") + "";
                    if( eCount < _installedEdges.length - 1 ) {
                        html += ", ";
                    }
                    eCounter++;
                }
            }

            if( eCounter == 0 ) {
                html += "(none)";
            }

            html += "<br />\n";

            // Hindrances
            html += "<strong>" + this.getTranslation("GENERAL_HINDRANCES") + ":</strong> ";

            var hCounter = 0;
            if( _installedHindrances.length > 0 ) {
                for (var hCount = 0; hCount < _installedHindrances.length; hCount++) {
                    html += _installedHindrances[ hCount ].select_option_name ;
                    if( _installedHindrances[ hCount ].specifyField )
                        html += ": " + _installedHindrances[ hCount ].specifyField;
                    if( _installedHindrances[ hCount ].racial )
                        html += " " + this.getTranslation("CHARGEN_RACIAL_PARENTHETICAL") + "";
                    if( hCount < _installedHindrances.length - 1 ) {
                        html += ", ";
                    }
                    hCounter++;
                }
            }

            if(hCounter == 0) {
                html += "(none)";
            }

            html += "<br />\n";

        // Gear
            html += "<strong>" + this.getTranslation("GENERAL_GEAR") + ":</strong> ";
            var gearCount = 0;

                for (var gCount = 0; gCount < _selectedHandWeapons.length; gCount++) {
                    html += _selectedHandWeapons[gCount].local_name;
                    // TODO: reach and damage
                    html += " (";
                //      console.log(_selectedHandWeapons[gCount]);
                    html += "Damage:  " + _selectedHandWeapons[gCount].displayDamage.toString();
                    if( _selectedHandWeapons[gCount].reach > 0 )
                        html += ", Reach:  " + _selectedHandWeapons[gCount]

                            ;
                    if( _selectedHandWeapons[gCount].ap > 0 )
                        html += ", AP: " +  _selectedHandWeapons[gCount].ap;
                    html += " )";

                    html += ", ";
                    gearCount++;
                }

                for (var gCount = 0; gCount < _selectedRangedWeapons.length; gCount++) {
                    html += _selectedRangedWeapons[gCount].local_name;
                    // TODO: range, rof, ap, and damage
                    html += " (";
                    //~ console.log(_selectedHandWeapons[gCount]);
                    html += "Damage:  " + _selectedRangedWeapons[gCount].displayDamage.toString();
                    if( _selectedRangedWeapons[gCount].range )
                        html += ", Range:  " +  _selectedRangedWeapons[gCount].range;
                    if( _selectedRangedWeapons[gCount].ap > 0 )
                        html += ", AP: " +  _selectedRangedWeapons[gCount].ap;
                    if( _selectedRangedWeapons[gCount].rof > 0 )
                        html += ", ROF: " +  _selectedRangedWeapons[gCount].rof;
                    html += " )";

                    html += ", ";
                    gearCount++;
                }

                for (var gCount = 0; gCount < _selectedArmor.length; gCount++) {
                    html += _selectedArmor[gCount].local_name + ", ";
                    gearCount++;
                }

                for (var gCount = 0; gCount < _selectedShields.length; gCount++) {
                    html += _selectedShields[gCount].local_name + ", ";
                    gearCount++;
                }

                for (var gCount = 0; gCount < _selectedMundaneGear.length; gCount++) {
                    html += _selectedMundaneGear[gCount].local_name + ", ";
                    gearCount++;
                }

            if(gearCount == 0) {
                html += "(none)";
            } else {
                // remove last comma
                html = html.substr(0, html.length - 2);
            }

            html += "<br />\n";

        // Gear
        if( _installedCyberware.length > 0 ) {
            html += "<strong>" + this.getTranslation("GENERAL_CYBERWARE") + ":</strong> ";
            var gearCount = 0;

                for (var gCount = 0; gCount < _installedCyberware.length; gCount++) {
                    //~ console.log( _installedCyberware[gCount] );
                    if( _installedCyberware[gCount].customName )
                        html += _installedCyberware[gCount].customName + " (" + _installedCyberware[gCount].local_name + "); ";
                    else
                        html += _installedCyberware[gCount].local_name + "; ";
                    gearCount++;
                }

            if(gearCount == 0) {
                html += "(none)";
            } else {
                // remove last comma
                html = html.substr(0, html.length - 2);
            }

            html += "<br />\n";
        }
        // Powers
            if( _selectedPowers.length > 0 ) {
                html += "<strong>" + this.getTranslation("GENERAL_POWERS") + ":</strong> ";

                for(p_counter = 0; p_counter < _selectedPowers.length; p_counter++) {

                    if( _selectedPowers[p_counter].customName != "") {
                        power_name = _selectedPowers[p_counter].customName + " (" + _selectedPowers[p_counter].local_name;
                        if( _selectedPowers[p_counter].trapping.local_name != "" )
                            power_name += ", " + _selectedPowers[p_counter].trapping.local_name  + ")";
                        else
                            power_name += ")";

                    } else {
                        if( _selectedPowers[p_counter].trapping != "" ) {
                            power_name = _selectedPowers[p_counter].local_name + " (" + _selectedPowers[p_counter].trapping.local_name  + ")" ;
                        } else {
                            power_name = _selectedPowers[p_counter].local_name ;
                        }
                    }

                    details_line = " - ";

                    //~ console.log( _selectedPowers[p_counter] );

                    if(_selectedPowers[p_counter].cost) {
                        details_line += "Cost: " + _selectedPowers[p_counter].cost + "; ";
                    }
                    if(_selectedPowers[p_counter].range) {
                        details_line += "Range: " + _selectedPowers[p_counter].range + "; ";
                    }
                    if(_selectedPowers[p_counter].damage) {
                        details_line += "Damage: " + _selectedPowers[p_counter].damage + "; ";
                    }
                    if(_selectedPowers[p_counter].local_duration) {
                        details_line += "Duration: " + _selectedPowers[p_counter].local_duration + "; ";
                    }

                    //~ if(_selectedPowers[p_counter].bookObj) {
                        //~ details_line += _selectedPowers[p_counter].bookObj.abbrev + " " + _selectedPowers[p_counter].page;
                    //~ }
                    details_line = "";

                    if( details_line && details_line != " - ")
                        html += "<em>" + power_name + "</em>" + details_line + ", ";
                    else
                        html +=  "<em>" + power_name + "</em>, ";
                }

                html = html.substr(0, html.length - 2);

                html += "<br />\n";
            }

            if( _usesSPCCreation ) {

                powerLevel = _SPCPowerLevels[ _SPCSelectedPowerLevel ].name + " Hero";
                if( _SPCRisingStars )
                    powerLevel += ", A Rising Star";
                html += "<br /><h5>Super Hero Powers (" + powerLevel;

                if( _SPCTakenExtraPowerPoints ) {
                    html += ", Super Karma Taken";
                }

                html  += ")</h5>";

                for( var powerCounter = 0; powerCounter < _selectedSPCPowers.length; powerCounter++) {

                    var exportItem = {
                        id: _selectedSPCPowers[powerCounter].id,
                        level: _selectedSPCPowers[powerCounter].selectedLevel,
                        desc: _selectedSPCPowers[powerCounter].description,
                        customName: _selectedSPCPowers[powerCounter].custom_name,
                        switchableWith: _selectedSPCPowers[powerCounter].switchableWith,
                        boostedAttribute: _selectedSPCPowers[powerCounter].boosted_attribute,
                        boostedSkill: _selectedSPCPowers[powerCounter].boosted_skill,
                        boostedSkillSpecialty: _selectedSPCPowers[powerCounter].boosted_specialty
                    }

                    //_exportObject.spcPowers.push( exportItem );
                    if(
                        _selectedSPCPowers[powerCounter].custom_name != ""
                            &&

                        _selectedSPCPowers[powerCounter].custom_name != _selectedSPCPowers[powerCounter].local_name
                    ) {
                        html += "<strong>" + _selectedSPCPowers[powerCounter].custom_name + " (" +  _selectedSPCPowers[powerCounter].local_name;

                        if( _selectedSPCPowers[powerCounter].boosted_attribute ) {
                            attribute = _selectedSPCPowers[powerCounter].boosted_attribute.charAt(0).toUpperCase() + _selectedSPCPowers[powerCounter].boosted_attribute.slice(1);
                            html += ": " + attribute ;
                        }

                        html += ")";
                    } else {
                        html += "<strong>" +  _selectedSPCPowers[powerCounter].local_name;
                        if( _selectedSPCPowers[powerCounter].boosted_attribute ) {
                            attribute = _selectedSPCPowers[powerCounter].boosted_attribute.charAt(0).toUpperCase() + _selectedSPCPowers[powerCounter].boosted_attribute.slice(1);
                            html += ": " + attribute ;
                        }
                    }

                    if( _selectedSPCPowers[powerCounter].per_level ) {
                        html += " - Level " + _selectedSPCPowers[powerCounter].selectedLevel;
                    }

                    html += " - " + _selectedSPCPowers[powerCounter].currentCost + " points</strong>";
                    if( _selectedSPCPowers[powerCounter].switchableWith ) {
                        html += " " + this.getTranslation("GENERAL_NOT_TALLIED_PARENTH");
                    }

                    html += "<br />\n";

                    if( _selectedSPCPowers[powerCounter].description != "")
                        html += _selectedSPCPowers[powerCounter].description.replace("\n", "<br />\n") + "<br />\n";

                    html += "<ul>";
                    if( _selectedSPCPowers[powerCounter].switchableWith ) {
                        html += "<li>Switchable With: " + _selectedSPCPowers[powerCounter].switchableWith.local_name + "</li>";
                    }

                    for( var modCounter = 0; modCounter < _selectedSPCPowers[powerCounter].modifiersObj.length; modCounter++) {
                        if( _selectedSPCPowers[powerCounter].modifiersObj[modCounter].currentCost != 0) {
                            html += "<li>";
                            html += _selectedSPCPowers[powerCounter].modifiersObj[modCounter].local_name;
                            html += ": ";
                            if( _selectedSPCPowers[powerCounter].modifiersObj[modCounter].currentCost > 0 )
                                html += "+";
                            html += _selectedSPCPowers[powerCounter].modifiersObj[modCounter].currentCost;
                            html += "</li>";
                        }
                    }

                    for( var modCounter = 0; modCounter < _selectedSPCPowers[powerCounter].genericModifiersObj.length; modCounter++) {
                        if( _selectedSPCPowers[powerCounter].genericModifiersObj[modCounter].currentCost != 0) {
                            html += "<li>";
                            html += _selectedSPCPowers[powerCounter].genericModifiersObj[modCounter].local_name;
                            html += ": ";
                            if( _selectedSPCPowers[powerCounter].genericModifiersObj[modCounter].currentCost > 0 )
                                html += "+";
                            html += _selectedSPCPowers[powerCounter].genericModifiersObj[modCounter].currentCost;
                            html += "</li>";

                        }
                    }

                    html += "</ul>";
                }
                if( _SPCCurrentPowerPoints != 0 )
                    html += "<strong>Remaining Power Points</strong>: " + _SPCCurrentPowerPoints + "<br />\n";
            }

        return html;
    }

    this.enableSettingRule = function(settingTag) {
    //    console.log( "enableSettingRule", settingTag);
        for(var bookCounter = 0; bookCounter < savageWorldsBooksList.length; bookCounter++ ) {
            for( var settingCounter = 0 ; settingCounter < savageWorldsBooksList[bookCounter].setting_rules.length; settingCounter++ ) {
                if( settingTag == savageWorldsBooksList[bookCounter].setting_rules[ settingCounter].tag ) {
                    savageWorldsBooksList[bookCounter].setting_rules[ settingCounter].inUse = true;
                    return true;
                }
            }
        }
        return false;
    }

    this.disableSettingRule = function(settingTag) {
    //    console.log( "enableSettingRule", settingTag);
        for(var bookCounter = 0; bookCounter < savageWorldsBooksList.length; bookCounter++ ) {
            for( var settingCounter = 0 ; settingCounter < savageWorldsBooksList[bookCounter].setting_rules.length; settingCounter++ ) {
                if( settingTag == savageWorldsBooksList[bookCounter].setting_rules[ settingCounter].tag ) {
                    savageWorldsBooksList[bookCounter].setting_rules[ settingCounter].inUse = false;
                    return true;
                }
            }
        }
        return false;
    }

    this.isSettingRuleEnabled = function( settingTag ) {
    //    console.log( "isSettingRuleEnabled", settingTag);
        for(var bookCounter = 0; bookCounter < savageWorldsBooksList.length; bookCounter++ ) {
            for( var settingCounter = 0 ; settingCounter < savageWorldsBooksList[bookCounter].setting_rules.length; settingCounter++ ) {
                if(
                    settingTag
                    &&
                    settingTag != ""
                    &&
                    savageWorldsBooksList[bookCounter].setting_rules[ settingCounter ]
                    &&
                    savageWorldsBooksList[bookCounter].setting_rules[ settingCounter ].tag
                    &&
                    settingTag == savageWorldsBooksList[bookCounter].setting_rules[ settingCounter ].tag
                ) {
                    if( savageWorldsBooksList[bookCounter].inUse == true ) {
                        return savageWorldsBooksList[bookCounter].setting_rules[ settingCounter].inUse;
                    } else {
                        // book is disabled, so setting rule is too.
                        return false;
                    }
                }
            }
        }
        return false;
    }

    this.importJSON = function( jsonString ) {

        if( jsonString ) {
            var _importObject = JSON.parse(jsonString);

            if( _importObject ) {
                this.init( _useLang );
                if( _importObject.name )
                    _name = _importObject.name;
                if( _importObject.background )
                    _background = _importObject.background;
                if( _importObject.uuid )
                    _uuid = _importObject.uuid;
                if( _importObject.description )
                    _description = _importObject.description;

                if( _importObject.books ) {
                    for( var importCounter = 0; importCounter < _importObject.books.length; importCounter++ ) {
                        for( var bookCounter = 0; bookCounter < _books.length; bookCounter++ ) {
                            //_books[bookCounter].inUse = false;
                            if ( _importObject.books[importCounter] == _books[bookCounter].short_name ) {
                                _books[bookCounter].inUse = true;
                            }
                        }
                    }
                }

                if( _importObject.startingFunds )
                    _startingFunds = _importObject.startingFunds;

                if( _importObject.settingRules ) {
                    for( var importCounter = 0; importCounter < _importObject.settingRules.length; importCounter++ ) {
                        this.enableSettingRule( _importObject.settingRules[importCounter] );
                    }
                }

                this.validate();

                for( var attribute in _attributes ) {
                    if( _importObject.attributes[ attribute ] ) {
                        attribute = attribute.toLowerCase().trim();
                        if( _attributes[attribute] )
                            _attributes[attribute] =  _importObject.attributes[ attribute ];
                    }
                }

                if( _importObject.knownLanguages ) {
                    _knownLanguages = _importObject.knownLanguages;
                }

                if( _importObject.gender )
                    this.setGender( _importObject.gender  );

                if( _importObject.xp )
                    this.setXP( _importObject.xp  );

                if( _importObject.race ){
                    this.setRace( _importObject.race  );
                }

                if( _importObject.skills ) {
                    for( var importCounter = 0; importCounter < _importObject.skills.length; importCounter++ ) {
                        this.setSkill(
                            _importObject.skills[importCounter].id,
                            _importObject.skills[importCounter].value
                        );

                        if( _importObject.skills[importCounter].specialties ) {
                            this.setSpecialties(
                                _importObject.skills[importCounter].id,
                                _importObject.skills[importCounter].specialties
                            );
                        }
                    }
                }

                if( _importObject.edges ) {
                    _selectedEdges = Array();
                    for( var importCounter = 0; importCounter < _importObject.edges.length; importCounter++ ) {
                        this.addEdge(
                            _importObject.edges[importCounter].book,
                            _importObject.edges[importCounter].tag
                        );
                    }
                }

                if( _importObject.powers ) {

                    for( var powerCounter = 0; powerCounter < _importObject.powers.length; powerCounter++ ) {
                        this.addPower(
                            _importObject.powers[powerCounter].powerBook,
                            _importObject.powers[powerCounter].powerTag,
                            _importObject.powers[powerCounter].trapBook,
                            _importObject.powers[powerCounter].trapTag,
                            _importObject.powers[powerCounter].customName
                        );
                    }
                }

                if( _importObject.hindrances ) {
                    _selectedHindrances = Array();
                    for( var importCounter = 0; importCounter < _importObject.hindrances.length; importCounter++ ) {
                        this.addHindrance(
                            _importObject.hindrances[importCounter].book,
                            _importObject.hindrances[importCounter].tag,
                            _importObject.hindrances[importCounter].specify
                        );
                    }
                }

                if( _importObject.perks ) {
                    _selectedPerks = Array();
                    for( var importCounter = 0; importCounter < _importObject.perks.length; importCounter++ ) {
                        this.addPerk(
                            _importObject.perks[importCounter]
                        );
                    }
                }

                if( _importObject.arcanebg ) {
                    this.setArcaneBackground( _importObject.arcanebg );
                }

                if( _importObject.gearMundane ) {
                    _selectedMundaneGear = Array();
                    for( var importCounter = 0; importCounter < _importObject.gearMundane.length; importCounter++ ) {
                        itemCount = 1;
                        if( _importObject.gearMundane[importCounter].count )
                            itemCount = _importObject.gearMundane[importCounter].count;
                        this.addGearMundane(
                            _importObject.gearMundane[importCounter].book,
                            _importObject.gearMundane[importCounter].tag,
                            _importObject.gearMundane[importCounter].cost,
                            _importObject.gearMundane[importCounter].dropped,
                            itemCount
                        );
                    }
                }

                if( _importObject.gearShields ) {
                    _selectedShields = Array();
                    for( var importCounter = 0; importCounter < _importObject.gearShields.length; importCounter++ ) {
                        this.addGearShield(
                            _importObject.gearShields[importCounter].book,
                            _importObject.gearShields[importCounter].tag,
                            _importObject.gearShields[importCounter].cost,
                            _importObject.gearShields[importCounter].loc,
                            _importObject.gearShields[importCounter].dropped
                        );
                    }
                }

                if( _importObject.gearHandWeapons ) {
                    _selectedHandWeapons = Array();
                    for( var importCounter = 0; importCounter < _importObject.gearHandWeapons.length; importCounter++ ) {
                        var _sciFiMod = "";
                        if( _importObject.gearHandWeapons[importCounter].sciFiMod )
                            _sciFiMod = _importObject.gearHandWeapons[importCounter].sciFiMod ;
                        this.addGearHandWeapon(
                            _importObject.gearHandWeapons[importCounter].book,
                            _importObject.gearHandWeapons[importCounter].tag,
                            _importObject.gearHandWeapons[importCounter].cost,
                            _importObject.gearHandWeapons[importCounter].loc,
                            _importObject.gearHandWeapons[importCounter].dropped,
                            _sciFiMod
                        );
                    }
                }

                if( _importObject.gearRangedWeapons ) {
                    _selectedRangedWeapons = Array();
                    for( var importCounter = 0; importCounter < _importObject.gearRangedWeapons.length; importCounter++ ) {
                        this.addGearRangedWeapon(
                            _importObject.gearRangedWeapons[importCounter].book,
                            _importObject.gearRangedWeapons[importCounter].tag,
                            _importObject.gearRangedWeapons[importCounter].cost,
                            _importObject.gearRangedWeapons[importCounter].loc,
                            _importObject.gearRangedWeapons[importCounter].dropped
                        );
                    }
                }

                if( _importObject.gearArmor ) {
                    _selectedArmor = Array();
                    for( var importCounter = 0; importCounter < _importObject.gearArmor.length; importCounter++ ) {
                        this.addGearArmor(
                            _importObject.gearArmor[importCounter].book,
                            _importObject.gearArmor[importCounter].tag,
                            _importObject.gearArmor[importCounter].cost,
                            _importObject.gearArmor[importCounter].readied,
                            _importObject.gearArmor[importCounter].dropped
                        );
                    }
                }

                this._customRangedWeapons = [];
                this._customHandWeapons = [];
                this._customGear = [];
                this._customArmor = [];
                this._customShields = [];

                if( _importObject.customRangedWeapons )
                    this._customRangedWeapons = _importObject.customRangedWeapons;
                if( _importObject.customHandWeapons )
                    this._customHandWeapons = _importObject.customHandWeapons;
                if( _importObject.customGear )
                    this._customGear = _importObject.customGear;
                if( _importObject.customArmor )
                    this._customArmor = _importObject.customArmor;
                if( _importObject.customShields )
                    this._customShields = _importObject.customShields;


                if(_importObject.spcpowerlevel)
                    _SPCSelectedPowerLevel = _importObject.spcpowerlevel;

                if(
                    _importObject.risingstars
                        &&
                    (
                        _importObject.risingstars > 1 || _importObject.risingstars == "1"
                    )
                ){
                    _SPCRisingStars = true;
                } else {
                    _SPCRisingStars = false;
                }

                if( _importObject.spcPowers ) {
                    //powerID, descriptionText, level, modifiers
                    //~ console.log( _importObject.spcPowers );
                    for( var importCounter = 0; importCounter < _importObject.spcPowers.length; importCounter++ ) {
                        //console.log(" *", _importObject.spcPowers[ importCounter ])
                        powerID = _importObject.spcPowers[ importCounter ].id;
                        descriptionText = _importObject.spcPowers[ importCounter ].desc;
                        customName = _importObject.spcPowers[ importCounter ].customName;
                        level = _importObject.spcPowers[ importCounter ].level;
                        modifiers = _importObject.spcPowers[ importCounter ].modifiers;
                        if( _importObject.spcPowers[ importCounter ].genericModifiers )
                            genericModifiers = _importObject.spcPowers[ importCounter ].genericModifiers;
                        else
                            genericModifiers = null;

                        boostedAttribute = _importObject.spcPowers[ importCounter ].boostedAttribute;
                        boostedSkill = _importObject.spcPowers[ importCounter ].boostedSkill;
                        boostedSkillSpecialty = _importObject.spcPowers[ importCounter ].boostedSkillSpecialty;

                        switchableWith = _importObject.spcPowers[importCounter].switchableWith;

                        this.addSPCPower( powerID, customName, descriptionText, level, modifiers, genericModifiers, switchableWith, boostedAttribute,  boostedSkill, boostedSkillSpecialty );
                    }
                }

                if( _importObject.cyberware ) {
                    for( var importCounter = 0; importCounter < _importObject.cyberware.length; importCounter++ ) {
                        this.installCyberware(
                            _importObject.cyberware[ importCounter ].tag,
                            _importObject.cyberware[ importCounter].selectedRank,
                            _importObject.cyberware[ importCounter].option1,
                            _importObject.cyberware[ importCounter].option2,
                            _importObject.cyberware[ importCounter].option3,
                            _importObject.cyberware[ importCounter].customName
                        );
                    }
                }

                if( _importObject.advancements ) {
                    _selectedAdvancements = Array();
                    this.validate();
                    for( var importCounter = 0; importCounter < _importObject.advancements.length; importCounter++ ) {
                        this.setAdvancementType(
                            _importObject.advancements[importCounter].takenAt,
                            _importObject.advancements[importCounter].tag
                        );

                        if( _importObject.advancements[importCounter].option1 ) {
                            option1name = null;
                            if( _importObject.advancements[importCounter].option1name )
                                option1name = _importObject.advancements[importCounter].option1name;

                            if( _importObject.advancements[importCounter].option1book ){
                                this.setAdvancementOption1(
                                    _importObject.advancements[importCounter].takenAt,
                                    _importObject.advancements[importCounter].option1,
                                    option1name,
                                    _importObject.advancements[importCounter].option1book
                                 );
                            } else {
                                this.setAdvancementOption1(
                                    _importObject.advancements[importCounter].takenAt,
                                    _importObject.advancements[importCounter].option1,
                                    option1name
                                );
                            }
                        }

                        if( _importObject.advancements[importCounter].option2 ) {
                            option2name = null;
                            if( _importObject.advancements[importCounter].option2name )
                                option2name = _importObject.advancements[importCounter].option2name;
                            if( _importObject.advancements[importCounter].option2book ){
                                this.setAdvancementOption2(
                                    _importObject.advancements[importCounter].takenAt,
                                    _importObject.advancements[importCounter].option2,
                                    option2name,
                                    _importObject.advancements[importCounter].option2book
                                 );
                            } else {
                                this.setAdvancementOption2(
                                    _importObject.advancements[importCounter].takenAt,
                                    _importObject.advancements[importCounter].option2,
                                    option2name
                                );
                            }
                        }
                    }
                }

                _isNew = false;
                this.validate();
                return true;
            }
        }

        return false;
    }

    this.setAdvancementOption1 = function( advIndex, optionItem, specifyName, bookID ) {

        if( optionItem && _selectedAdvancements[advIndex] ) {
            if( _selectedAdvancements[advIndex].tag == "edge" ) {
                _selectedAdvancements[advIndex].option1 = this.getEdge( optionItem );
            } else {

                if(
                    _selectedAdvancements[advIndex].tag == "incskill"
                        ||
                    _selectedAdvancements[advIndex].tag == "inc2skills"
                        ||
                    _selectedAdvancements[advIndex].tag == "skill"
                ) {
                    if( optionItem.id ) {
                        _selectedAdvancements[advIndex].option1 = optionItem;
                    } else {
                        if(_selectedAdvancements[advIndex].tag == "skill")
                            _selectedAdvancements[advIndex].option1 = this.getSkill( optionItem );
                        else
                            _selectedAdvancements[advIndex].option1 = this.getSkill( optionItem , specifyName);
                    }
                } else {
                    _selectedAdvancements[advIndex].option1 = optionItem;
                }

            }
            if( bookID )
                _selectedAdvancements[advIndex].option1book = bookID;
        }
        //console.log( "option 1 _selectedAdvancements[advIndex]", _selectedAdvancements[advIndex]);
    }

    this.setAdvancementOption2 = function( advIndex, optionItem, specifyName, bookID ) {
        if( optionItem && _selectedAdvancements[advIndex] ) {
            if(
                _selectedAdvancements[advIndex].tag == "skill"

            ) {
                _selectedAdvancements[advIndex].option2 = specifyName;
            } else {
                if(
                    _selectedAdvancements[advIndex].tag == "incskill"
                        ||
                    _selectedAdvancements[advIndex].tag == "inc2skills"
                ) {
                    if( optionItem.id ) {
                        _selectedAdvancements[advIndex].option2 = optionItem;
                    } else {
                        _selectedAdvancements[advIndex].option2 = this.getSkill( optionItem , specifyName);
                    }

                } else {
                    _selectedAdvancements[advIndex].option2 = optionItem;
                }

            }
            if( bookID )
                _selectedAdvancements[advIndex].option2book = bookID;
        }
    }

    this.setAdvancementType = function( advIndex, advTag ) {
        if( advTag && _selectedAdvancements[advIndex] ) {
            for( advCounter = 0; advCounter < this.advancementTypes.length; advCounter++ ) {
                if( advTag == this.advancementTypes[advCounter].tag) {
                    var advItem = {};
                    angular.extend( advItem, this.advancementTypes[advCounter] );
                    advItem.takenAt = advIndex;
                    _selectedAdvancements[advIndex] = advItem;
                    return true;
                }
            }
        }
        return false;
    }

    this.addBook = function( bookObject ) {

    }

    this.allocateAdvancementSlots = function () {
        if( _selectedAdvancements.length < this.availableAdvancements ) {
            for( advCounter = _selectedAdvancements.length; advCounter < this.availableAdvancements; advCounter++ ) {
                var advItem = {};
                angular.extend( advItem, this.advancementTypes[0] );
                advItem.takenAt = advCounter;
                _selectedAdvancements[advCounter] = advItem;
            }
        }

        if( _selectedAdvancements.length > this.availableAdvancements ) {
            _selectedAdvancements = _selectedAdvancements.slice(0, this.availableAdvancements);
        }
    }

    this.exportJSON = function() {
        var _exportObject = {};
        _exportObject.name = _name;
        _exportObject.background = _background;
        _exportObject.description = _description;

        _exportObject.uuid = _uuid;

        _exportObject.xp = _XP.value;
        _exportObject.gender = _gender.id;
        _exportObject.race = _race.id;

        _exportObject.startingFunds = _startingFunds;

        _exportObject.attributes = {
            agility: _attributes.agility,
            smarts: _attributes.smarts,
            spirit: _attributes.spirit,
            strength: _attributes.strength,
            vigor: _attributes.vigor,
        }

        _exportObject.books = Array();

        for( var bookCounter = 0; bookCounter < _books.length; bookCounter++ ) {
            if ( _books[bookCounter].inUse  )
                _exportObject.books.push( _books[bookCounter].short_name );
        }

        _exportObject.perks = Array();
        for( var perkCounter = 0; perkCounter < _selectedPerks.length; perkCounter++ ) {
            _exportObject.perks.push( _selectedPerks[perkCounter].tag );
        }

        _exportObject.skills = Array();

        for( var skillCounter = 0; skillCounter < _skillList.length; skillCounter++ ) {
            if(
                _skillList[skillCounter].value > 0
                ||
                _skillList[skillCounter].specialties.length > 0
            ) {
                var skillObj = {
                    id: _skillList[skillCounter].id,
                    value: _skillList[skillCounter].value
                };

                if( _skillList[skillCounter].specialties.length > 0 ) {
                    skillObj.specialties = Array();

                    for(var specCounter = 0; specCounter < _skillList[skillCounter].specialties.length; specCounter++ ) {
                        if( _skillList[skillCounter].specialties[specCounter].advskill == 0 ) {
                            skillObj.specialties.push(
                                _skillList[skillCounter].specialties[specCounter]
                            );
                        }

                    }
                }
                _exportObject.skills.push( skillObj );
            }
            _exportObject.edges = Array();
            for( var edgeCounter = 0; edgeCounter < _selectedEdges.length; edgeCounter++ ) {
                if( !_selectedEdges[edgeCounter].cyber ) {
                    _exportObject.edges.push( {
                        book: _selectedEdges[edgeCounter].book,
                        tag: _selectedEdges[edgeCounter].tag,
                    });
                }
            }

            if( _selectedPowers.length > 0 ) {
                _exportObject.powers = Array();
                for( var powerCounter = 0; powerCounter < _selectedPowers.length; powerCounter++ ) {
                    _exportObject.powers.push( {
                        powerBook: _selectedPowers[powerCounter].book,
                        powerTag: _selectedPowers[powerCounter].tag,
                        trapBook: _selectedPowers[powerCounter].trapping.book,
                        trapTag: _selectedPowers[powerCounter].trapping.tag,
                        customName: _selectedPowers[powerCounter].customName,
                    });
                }
            }

            _exportObject.hindrances = Array();
            for( var hindranceCounter = 0; hindranceCounter < _selectedHindrances.length; hindranceCounter++ ) {
                _exportObject.hindrances.push( {
                    book: _selectedHindrances[hindranceCounter].book,
                    tag: _selectedHindrances[hindranceCounter].tag,
                    specify: _selectedHindrances[hindranceCounter].specifyField,
                });
            }

            if( _selectedArcaneBackground.tag != "")
                _exportObject.arcanebg = _selectedArcaneBackground.tag;

            _exportObject.gearMundane = Array();
            for( var gearCounter = 0; gearCounter < _selectedMundaneGear.length; gearCounter++ ) {
                _exportObject.gearMundane.push( {
                    book: _selectedMundaneGear[ gearCounter ].book,
                    tag: _selectedMundaneGear[ gearCounter ].tag,
                    cost: _selectedMundaneGear[ gearCounter ].purchaseCost,
                    count: _selectedMundaneGear[ gearCounter ].count,
                    dropped: _selectedMundaneGear[ gearCounter ].droppedDuringCombat
                });
            }

            _exportObject.gearShields = Array();
            for( var gearCounter = 0; gearCounter < _selectedShields.length; gearCounter++ ) {
                _exportObject.gearShields.push( {
                    book: _selectedShields[ gearCounter ].book,
                    tag: _selectedShields[ gearCounter ].tag,
                    cost: _selectedShields[ gearCounter ].purchaseCost,
                    loc: _selectedShields[ gearCounter ].readiedLocation,
                    dropped: _selectedShields[ gearCounter ].droppedDuringCombat
                });
            }

            _exportObject.gearHandWeapons = Array();
            for( var gearCounter = 0; gearCounter < _selectedHandWeapons.length; gearCounter++ ) {
                _exportObject.gearHandWeapons.push( {
                    book: _selectedHandWeapons[ gearCounter ].book,
                    tag: _selectedHandWeapons[ gearCounter ].tag,
                    cost: _selectedHandWeapons[ gearCounter ].purchaseCost,
                    loc: _selectedHandWeapons[ gearCounter ].readiedLocation,
                    dropped: _selectedHandWeapons[ gearCounter ].droppedDuringCombat,
                    sciFiMod: _selectedHandWeapons[ gearCounter ].sciFiMod
                });
            }

            _exportObject.gearRangedWeapons = Array();
            for( var gearCounter = 0; gearCounter < _selectedRangedWeapons.length; gearCounter++ ) {
                _exportObject.gearRangedWeapons.push( {
                    book: _selectedRangedWeapons[ gearCounter ].book,
                    tag: _selectedRangedWeapons[ gearCounter ].tag,
                    cost: _selectedRangedWeapons[ gearCounter ].purchaseCost,
                    loc: _selectedRangedWeapons[ gearCounter ].readiedLocation,
                    dropped: _selectedRangedWeapons[ gearCounter ].droppedDuringCombat
                });
            }

            _exportObject.gearArmor = Array();
            for( var gearCounter = 0; gearCounter < _selectedArmor.length; gearCounter++ ) {
                _exportObject.gearArmor.push( {
                    book: _selectedArmor[ gearCounter ].book,
                    tag: _selectedArmor[ gearCounter ].tag,
                    cost: _selectedArmor[ gearCounter ].purchaseCost,
                    readied: _selectedArmor[ gearCounter ].isReadied,
                    dropped: _selectedArmor[ gearCounter ].droppedDuringCombat
                });
            }

            _exportObject.settingRules = Array();
            for( var bookCounter = 0; bookCounter < savageWorldsBooksList.length; bookCounter++ ) {
                for( var settingCounter = 0; settingCounter < savageWorldsBooksList[bookCounter].setting_rules.length; settingCounter++ ) {
                    if( savageWorldsBooksList[bookCounter].inUse && savageWorldsBooksList[bookCounter].setting_rules[settingCounter].inUse ) {
                        _exportObject.settingRules.push( savageWorldsBooksList[bookCounter].setting_rules[settingCounter].tag );
                    }
                }

            }

            _exportObject.customRangedWeapons = this._customRangedWeapons;
            _exportObject.customHandWeapons = this._customHandWeapons;
            _exportObject.customGear = this._customGear;
            _exportObject.customArmor = this._customArmor;
            _exportObject.customShields = this._customShields;


            _exportObject.spcpowerlevel = _SPCSelectedPowerLevel;
            if(_SPCRisingStars )
                _exportObject.risingstars = 1;
            else
                _exportObject.risingstars = 0;

            _exportObject.knownLanguages = Array();
            for( var langCounter = 0; langCounter < _knownLanguagesLimit + 1; langCounter++ ) {
                _exportObject.knownLanguages.push( _knownLanguages[langCounter] );
            }

            if( _installedCyberware.length > 0 ) {
                _exportObject.cyberware = Array()
                for( var cyberC = 0; cyberC < _installedCyberware.length; cyberC++) {
                    var exportItem = {
                        tag: _installedCyberware[ cyberC ].tag,
                        selectedRank: _installedCyberware[ cyberC ].selectedRank,
                        option1: _installedCyberware[ cyberC ].option1,
                        option2: _installedCyberware[ cyberC ].option2,
                        option3: _installedCyberware[ cyberC ].option3,
                        customName: _installedCyberware[ cyberC ].customName,
                    }
                    _exportObject.cyberware.push( exportItem );
                }
            }

            if( _usesSPCCreation ) {
                _exportObject.spcPowers = Array()

                for( var powerCounter = 0; powerCounter < _selectedSPCPowers.length; powerCounter++) {

                    var modifierObj = Array();
                    for( var modCounter = 0; modCounter < _selectedSPCPowers[powerCounter].modifiersObj.length; modCounter++) {

                        modifierObj[modCounter] = {
                            //desc: _selectedSPCPowers[powerCounter].modifiersObj[modCounter].description,
                            cost: _selectedSPCPowers[powerCounter].modifiersObj[modCounter].currentCost,
                        }
                    }

                    var genericModifiersObj = Array();
                    for( var modCounter = 0; modCounter < _selectedSPCPowers[powerCounter].genericModifiersObj.length; modCounter++) {

                        genericModifiersObj[modCounter] = {
                            //desc: _selectedSPCPowers[powerCounter].modifiersObj[modCounter].description,
                            cost: _selectedSPCPowers[powerCounter].genericModifiersObj[modCounter].currentCost,
                        }
                    }

                    switchableWith = "";
                    if( _selectedSPCPowers[powerCounter].switchableWith && _selectedSPCPowers[powerCounter].switchableWith.tag ) {
                        switchableWith = {
                            "tag": _selectedSPCPowers[powerCounter].switchableWith.tag,
                            "internalID": _selectedSPCPowers[powerCounter].switchableWith.internalID
                        };
                    }

                    var exportItem = {
                        id: _selectedSPCPowers[powerCounter].id,
                        level: _selectedSPCPowers[powerCounter].selectedLevel,
                        desc: _selectedSPCPowers[powerCounter].description,
                        customName: _selectedSPCPowers[powerCounter].custom_name,
                        switchableWith: switchableWith,
                        modifiers: modifierObj,
                        genericModifiers: genericModifiersObj,
                        boostedAttribute: _selectedSPCPowers[powerCounter].boosted_attribute,
                        boostedSkill: _selectedSPCPowers[powerCounter].boosted_skill,
                        boostedSkillSpecialty: _selectedSPCPowers[powerCounter].boosted_specialty
                    }

                    _exportObject.spcPowers.push( exportItem );
                }
            }

            _exportObject.advancements = Array();
            for( var advCounter = 0; advCounter < _selectedAdvancements.length; advCounter++ ) {
                if( _selectedAdvancements[advCounter].tag != "none") {
                    var exportItem = {
                        tag: _selectedAdvancements[advCounter].tag,
                        takenAt: _selectedAdvancements[advCounter].takenAt
                    }

                    if( _selectedAdvancements[advCounter].option1 ) {

                        if( _selectedAdvancements[advCounter].option1.tag ) {
                            exportItem.option1 = _selectedAdvancements[advCounter].option1.tag;
                        } else {
                            if( _selectedAdvancements[advCounter].option1.id ) {
                                exportItem.option1 = _selectedAdvancements[advCounter].option1.id;
                            } else {
                                exportItem.option1 = _selectedAdvancements[advCounter].option1;
                            }
                        }
                        if( typeof(_selectedAdvancements[advCounter].option1.specify_name) == "string" ) {
                            exportItem.option1name = _selectedAdvancements[advCounter].option1.specify_name;
                        }
                    }

                    if( _selectedAdvancements[advCounter].option1book ) {
                        exportItem.option1book = _selectedAdvancements[advCounter].option1book;
                    }

                    if( _selectedAdvancements[advCounter].option2 ) {
                        if( _selectedAdvancements[advCounter].option2.tag ) {
                            exportItem.option2 = _selectedAdvancements[advCounter].option2.tag;
                        } else {
                            if( _selectedAdvancements[advCounter].option2.id ) {
                                exportItem.option2 = _selectedAdvancements[advCounter].option2.id;
                            } else {
                                exportItem.option2 = _selectedAdvancements[advCounter].option2;
                            }
                        }

                        if( typeof(_selectedAdvancements[advCounter].option2.specify_name) == "string" ) {
                            exportItem.option2name = _selectedAdvancements[advCounter].option2.specify_name;
                        }
                        if( typeof(_selectedAdvancements[advCounter].option2) == "string" ) {
                            exportItem.option2name = _selectedAdvancements[advCounter].option2;
                        }
                    }

                    if( _selectedAdvancements[advCounter].option2book ) {
                        exportItem.option2book = _selectedAdvancements[advCounter].option2book;
                    }

                    _exportObject.advancements.push(
                        exportItem
                    )
                }
            }
        }

        return JSON.stringify( _exportObject );
    }

    this.getTranslation = function(langKey) {
        for( lang_count = 0; lang_count < availableLanguages.length; lang_count++ ) {
            if( availableLanguages[lang_count].short_code == _useLang ) {

                if(availableLanguages[lang_count].translations[langKey] ) {
                    return availableLanguages[lang_count].translations[langKey];
                } else {
                    return langKey;
                }
            }
        }
        return langKey;
    }

    this.bookInUse = function( bookID ) {
        // console.log(_books);
        for( var bookCounter = 0; bookCounter < _books.length; bookCounter++) {
            if( _books[bookCounter].id == bookID ) {
                if( _books[bookCounter].inUse == true ){
                    return true;
                }
            }
        }
        return false;
    }

    this.hasArcane = function( arcaneTag ) {
        if( typeof( arcaneTag ) == "string") {
            if( _selectedArcaneBackground && _selectedArcaneBackground.tag == arcaneTag)
                return true;
        } else {
            // for possible future use.
            if( typeof( arcaneTag ) == "array") {
                for(var atc = 0; atc > arcaneTag.length; atc++ ) {
                    if( _selectedArcaneBackground && _selectedArcaneBackground.tag == arcaneTag[atc])
                        return true;
                }
            }
        }
        return false;
    }

    this.getPerkOptions = function() {
        return _perkOptions;
    }

    this.getRaceOptions = function() {
        return _raceOptions;
    }

    this.getAvailableEdges = function() {
        return _availableEdges;
    }

    this.getAvailablePowers = function() {
        return _availablePowers;
    }

    this.getAvailableTrappings = function() {
        return _availableTrappings;
    }

    this.setSelectedPower = function( powerIndex, powerObject ) {
        if( _selectedPowers[ powerIndex ] )
            return _selectedPowers[ powerIndex ] = powerObject;
        else
            return false;
    }

    this.getStartingFunds = function() {
        return _startingFunds;
    }

    this.addCurrentFunds = function( newValue ) {
        return _currentFunds += newValue / 1;
    }

    this.setStartingFunds = function( newValue ) {
        _startingFunds = newValue / 1;
    }

    this.setCurrentFunds = function( newValue ) {
        _currentFunds = newValue / 1;
    }

    this.getCurrentFunds = function() {
        return _currentFunds;
    }

    this.getGenderOptions = function() {
        return _genderOptions;
    }


    this.getRace = function() {
        return _race;
    }

    this.getGender = function() {
        return _gender;
    }

    this.getName = function() {
        return _name;
    }

    this.getDescripton = function() {
        return _description;
    }

    this.getDiceValues = function() {
        return _diceValues;
    }

    this.usesSPCCreation = function() {
        return _usesSPCCreation;
    }

    this.getAvailableEdgePoints = function() {
        return _availableEdgePoints;
    }

    this.getBackground = function() {
        return _background;
    }

    this.setName = function( newValue ) {
        return _name = newValue;
    }

    this.setDescripton = function( newValue ) {
        return _description = newValue;
    }

    this.setBackground = function( newValue ) {
        return _background = newValue;
    }

    this.getAttributeDisplayValues = function() {
        return _displayAttributes;
    }

    this.getSPCSelectedPowerLevel = function() {
        return _SPCSelectedPowerLevel;
    }

    this.setSPCCampaignPowerLevel = function( newValue ) {
        return _SPCSelectedPowerLevel = newValue;
    }

    this.getSPCCurrentPowerPoints = function() {
        return _SPCCurrentPowerPoints;
    }

    this.getSPCPowerLimit = function() {
        return _SPCPowerLimit;
    }

    this.getSPCStartingPowerPoints = function() {
        return _SPCStartingPowerPoints;
    }

    this.getSPCPowerLevels = function() {
        return _SPCPowerLevels;
    }

    this.getAttributes = function() {
        return _attributes;
    }

    this.getBooks = function() {
        return _books;
    }

    this.getCurrentLoad = function() {
        return _load.currentLoad;
    }

    this.getCurrentLoadModifier = function() {
        return _load.loadModifier;
    }

    this.getSPCRisingStars = function() {
        return _SPCRisingStars;
    }

    this.incrementSPCPowerLevel = function( powerIndex ) {
        _selectedSPCPowers[powerIndex].selectedLevel++;
        if( _selectedSPCPowers[powerIndex].max_level > 1 && _selectedSPCPowers[powerIndex].selectedLevel >= _selectedSPCPowers[powerIndex].max_level) {
            _selectedSPCPowers[powerIndex].selectedLevel = _selectedSPCPowers[powerIndex].max_level;
        }
        return _selectedSPCPowers[powerIndex];
    }



    this.decrementSPCPowerLevel = function( powerIndex ) {
        _selectedSPCPowers[powerIndex].selectedLevel--;
        if( _selectedSPCPowers[powerIndex].selectedLevel < 1) {
            _selectedSPCPowers[powerIndex].selectedLevel = 1;
        }
        return _selectedSPCPowers[powerIndex];
    }

    this.setSPCRisingStars = function( newValue ) {
        return _SPCRisingStars = newValue;
    }

    this.getCombatLoadModifier = function() {
        return _load.combatLoadModifier;
    }

    this.getCombatLoad = function() {
        return _load.combatLoad;
    }

    this.usesStrain = function( setValue ) {
        if( typeof( setValue ) != "undefined" )
            _usesStrain = setValue;
        return _usesStrain;
    }

    this.usesSanity = function( setValue ) {
        if( typeof( setValue ) != "undefined" )
            _usesSanity = setValue;
        return _usesSanity;
    }

    this.hasArcaneBackground = function( setValue ) {

        if( typeof( setValue ) != "undefined" )
            _hasArcaneBackground = setValue;

        return _hasArcaneBackground;
    }

    this.getWarningReport = function() {
        return _warningReport;
    }

    this.getValidationReport = function() {
        return _validationReport;
    }

    this.incrementAttributePointsAvailable = function( incValue ) {
        if( typeof( incValue ) == "undefined" )
            incValue = 1;
        _attributePointsAvailable += incValue / 1;
    }

    this.secondMajorHindranceChosen = function() {
        return _secondMajorHindranceChosen;
    }

    this.incrementAvailbleEdgePoints = function( incValue ) {
        if( typeof( incValue ) == "undefined" )
            incValue = 1;
        _availableEdgePoints += incValue / 1;
    }

    this.incrementSkillPointsAvailable = function( incValue ) {
        if( typeof( incValue ) == "undefined" )
            incValue = 1;
        _skillPointsAvailable += incValue / 1;
    }

    this.incrementEdgePoints = function( incValue ) {
        if( typeof( incValue ) == "undefined" )
            incValue = 1;
        _availableEdgePoints += incValue / 1;
    }

    this.incrementPace = function( incValue ) {
        if( typeof( incValue ) == "undefined" )
            incValue = 1;
        _derived.pace += incValue / 1;
    }

    this.incrementStrain = function( incValue ) {
        if( typeof( incValue ) == "undefined" )
            incValue = 1;
        _derived._strainBonus += incValue / 1;
    }

    this.incrementArmor = function( incValue ) {
        if( typeof( incValue ) == "undefined" )
            incValue = 1;
        _derived.armor += incValue / 1;
    }

    this.getCombatEdges = function( cyberIndex ) {
        return _combatEdges;
    }

    this.doubleStrain = function() {
        _derived._doubleStrain = true
    }

    this.getAvailbleArcaneBackgrounds = function() {
        return _availableArcaneBackgrounds;
    }

    this.setTakenSPCExtraPowerPoints = function( newValue ) {
        if( newValue )
            _SPCTakenExtraPowerPoints = true;
        else
            _SPCTakenExtraPowerPoints = false;
    }

    this.getTakenSPCExtraPowerPoints = function() {
        return _SPCTakenExtraPowerPoints;
    }

    this.isValid = function() {
        return _isValid;
    }

    this.getLocalName = function( incomingStringArray ) {
            if( incomingStringArray[ _useLang] ) {
                return incomingStringArray[ _useLang];
            } else {
                return incomingStringArray[ "en-US" ];
            }
    }

    this.getAgilitySkills = function() {
        return _agilitySkills;
    }

    this.getAvailableSkillPoints = function() {
        return _skillPointsAvailable;
    }

    this.getUsedSkillPoints = function() {
        return _skillPointsUsed;
    }

    this.getAvailableAttributePoints = function() {
        return _attributePointsAvailable;
    }

    this.getUsedAttributePoints = function() {
        return _attributePointsUsed;
    }

    this.getSmartsSkills = function() {
        return _smartsSkills;
    }

    this.getPowerPointsAvailable = function() {
        return _powerPointsAvailable;
    }

    this.usesPowerPoints = function() {
        if ( this.isSettingRuleEnabled("no-power-points") )
            return false;
        else
            return true;
    }

    this.getSelectedPowers = function() {
        return _selectedPowers;
    }

    this.getSelectedArcaneBackground = function() {
        return _selectedArcaneBackground;
    }

    this.getAvailablePerkPoints = function() {
        return _availablePerkPoints;
    }

    this.getAvailableNumberOfPowers = function() {
        return _totalPowersKnown;
    }

    this.incrementAdditionalPowersKnown = function() {
        _additionalPowersKnown++;
        //~ console.log( "incrementAdditionalPowersKnown", _additionalPowersKnown );
        return _additionalPowersKnown;
    }

    this.addAdditionalPowerPoints = function( numberPowerPoints ) {
        _powerPointsAvailable += numberPowerPoints / 1;
        //~ console.log( "addAdditionalPowerPoints", _totalPowerPoints );
        return _powerPointsAvailable;
    }

    this.addAdditionalSPCPowerPoints = function( numberPowerPoints ) {
        _spcExtraPowerPoints += numberPowerPoints / 1;
        //~ console.log( "addAdditionalSPCPowerPoints", _spcExtraPowerPoints );
        return _spcExtraPowerPoints;
    }

    this.getCurrentFunds = function() {
        return _currentFunds;
    }

    this.getSpiritSkills = function() {
        return _spiritSkills;
    }

    this.getVigorSkills = function() {
        return _vigorSkills;
    }

    this.getStrengthSkills = function() {
        return _strengthSkills;
    }

    this.incrementSkill = function( skillID ) {
        for( var skillCounter = 0; skillCounter < _skillList.length; skillCounter++ ) {
            if( _skillList[skillCounter].id == skillID ) {
                _skillList[skillCounter].value++;
                if( _skillList[skillCounter].value > 5)
                    _skillList[skillCounter].value = 5;

                return true;
            }

        }
        return false;
    }

    this.removeCyberware = function( cyberIndex ) {
        if( _installedCyberware[ cyberIndex ] )
            _installedCyberware.splice( cyberIndex, 1);
    }


    this.setCyberEdge = function( cyberIndex, bookID, edgeTag ) {
        if( _installedCyberware[ cyberIndex ] ) {
             _installedCyberware[ cyberIndex ].option1 = bookID;
             _installedCyberware[ cyberIndex ].option2 = edgeTag;
             _installedCyberware[ cyberIndex ].selectedEdge = null;
             for( var edgeC = 0; edgeC < _combatEdges.length; edgeC++ ) {
                 if( _combatEdges[ edgeC ].tag == edgeTag && _combatEdges[ edgeC ].book == bookID )
                    _installedCyberware[ cyberIndex ].selectedEdge = _combatEdges[ edgeC ]
             }
        }

        return _installedCyberware[ cyberIndex ].option1;
    }

    this.getLoadLimit = function() {
        return _loadLimit;
    }

    this.setCyberOption1 = function( cyberIndex, newValue ) {
        if( _installedCyberware[ cyberIndex ] )
             _installedCyberware[ cyberIndex ].option1 = newValue;

        return _installedCyberware[ cyberIndex ].option1;
    }

    this.setCyberOption2 = function( cyberIndex, newValue ) {
        if( _installedCyberware[ cyberIndex ] )
             _installedCyberware[ cyberIndex ].option2 = newValue;

        return _installedCyberware[ cyberIndex ].option2;
    }

    this.setCyberOption3 = function( cyberIndex, newValue ) {
        if( _installedCyberware[ cyberIndex ] )
             _installedCyberware[ cyberIndex ].option3 = newValue;

        return _installedCyberware[ cyberIndex ].option3;
    }

    this.setCyberCustomName = function( cyberIndex, newValue ) {
        if( _installedCyberware[ cyberIndex ] )
             _installedCyberware[ cyberIndex ].customName = newValue;

        return _installedCyberware[ cyberIndex ].customName;
    }

    this.installCyberware = function( cyberTag, selectedRank, option1, option2, option3, customName ) {
        if( typeof( selectedRank ) == "undefined" )
            selectedRank = 1;
        if( typeof( option1 ) == "undefined" )
            option1 = null;
        if( typeof( option2 ) == "undefined" )
            option2 = null;
        if( typeof( option3 ) == "undefined" )
            option3 = null;
        if( typeof( customName ) == "undefined" )
            customName = null;

        for( var cyberC = 0; cyberC < _availableCyberware.length; cyberC++ ) {
            if( _availableCyberware[cyberC].tag == cyberTag ) {

                var cyberObject = angular.copy ( _availableCyberware[cyberC] );

                cyberObject.selectedRank = selectedRank;
                cyberObject.option1 = option1;
                cyberObject.option2 = option2;
                cyberObject.option3 = option3;
                cyberObject.customName = customName;

                _installedCyberware.push( cyberObject );

                return cyberObject;
                break;
            }
        }

    }

    this.getInstalledCyberware = function() {
        return _installedCyberware;
    }

    this.cyberwareAvailable = function( cyberTag ) {

        var maxAvailable = 0;
        var currentInstalled = 0;
        for( var cyberC = 0; cyberC < _availableCyberware.length; cyberC++ ) {

            if( _availableCyberware[cyberC].tag == cyberTag ) {
                if( _availableCyberware[cyberC].getMax() == "u" )
                    return true;
                else
                    maxAvailable = _availableCyberware[cyberC].getMax();
            }
        }

        for( var cyberC = 0; cyberC < _installedCyberware.length; cyberC++ ) {
            if( _installedCyberware[cyberC].tag == cyberTag ) {
                currentInstalled++;
            }
        }

        if( maxAvailable > currentInstalled )
            return true;
        else
            return false;

    }

    this.decrementSkill = function( skillID ) {
        for( var skillCounter = 0; skillCounter < _skillList.length; skillCounter++ ) {
            if( _skillList[skillCounter].id == skillID ) {
                _skillList[skillCounter].value--;
                if( _skillList[skillCounter].value < 0)
                    _skillList[skillCounter].value = 0;

                return true;
            }

        }
        return false;
    }

    this.addSpecialtySkill = function( skillItem, specialtyName, specialtyValue, advancementSkill ) {
        if( !specialtyName )
            specialtyName = '';
        if( !specialtyValue )
            specialtyValue = 1;  // d4
        if( !advancementSkill )
            advancementSkill = 0;
        for( var skillCounter = 0; skillCounter < _skillList.length; skillCounter++ ) {
            if(
                (
                    _skillList[skillCounter].id == skillItem
                        ||
                    _skillList[skillCounter].id == skillItem.id
                )
                    &&
                !_skillList[skillCounter].is_specialty
            ) {
                _skillList[skillCounter].specialties.push(
                    {
                        name: specialtyName,
                        value: specialtyValue,
                        advskill: advancementSkill
                    }
                );
            }
        }
        return false;
    }

    this.setSkill = function( skillID, skillValue ) {
        for( var skillCounter = 0; skillCounter < _skillList.length; skillCounter++ ) {
            if( _skillList[skillCounter].id == skillID ) {
                _skillList[skillCounter].value = skillValue;
                _skillList[skillCounter].advskill = 0;
                return true;
            }

        }
        return false;
    }

    this.addRacialSkill = function( skillID, skillValue ) {
        for( var skillCounter = 0; skillCounter < _skillList.length; skillCounter++ ) {
            if( _skillList[skillCounter].id == skillID ) {
                _skillList[skillCounter].boost = skillValue;
                _skillList[skillCounter].advskill = 0;
                return true;
            }
        }
        return false;
    }

    this.getSkill = function( skillID, specifyName ) {
        for( var skillCounter = 0; skillCounter < _allSkills.length; skillCounter++ ) {
            if(
                _allSkills[skillCounter].id == skillID
                    ||
                _allSkills[skillCounter] == skillID
                    ||
                (
                    skillID.id
                        &&
                    (
                        _allSkills[skillCounter].id == skillID.id
                            ||
                        _allSkills[skillCounter] == skillID.id
                    )
                )
            ) {
                if( specifyName ) {
                    if( specifyName ) {
                        if( _allSkills[skillCounter].specialties ) {

                            for( var specC = 0; specC < _allSkills[skillCounter].specialties.length; specC++ ) {

                                if( _allSkills[skillCounter].specialties[specC].name.trim().toLowerCase() == specifyName.trim().toLowerCase() ) {
                                    return _allSkills[skillCounter].specialties[specC];
                                }
                            }
                        }
                        return null;
                    }
                } else {
                    return _allSkills[skillCounter];
                }

            }

        }
        return null;
    }

    this.setSpecialties = function( skillID, specialtiesValue ) {
        for( var skillCounter = 0; skillCounter < _skillList.length; skillCounter++ ) {
            if( _skillList[skillCounter].id == skillID ) {
                _skillList[skillCounter].specialties = specialtiesValue;
                return true;
            }

        }
        return false;
    }

    this.incrementSpecialtySkill = function( skillID, specialtyIndex ) {
        for( var skillCounter = 0; skillCounter < _skillList.length; skillCounter++ ) {
            if( _skillList[skillCounter].id == skillID ) {
                if( _skillList[skillCounter].specialties[ specialtyIndex] ) {
                    _skillList[skillCounter].specialties[ specialtyIndex].value++;
                    if( _skillList[skillCounter].specialties[ specialtyIndex].value < 0)
                        _skillList[skillCounter].specialties[ specialtyIndex].value = 0;
                    return true;
                }
            }

        }
        return false;
    }

    this.decrementSpecialtySkill = function( skillID, specialtyIndex ) {
        for( var skillCounter = 0; skillCounter < _skillList.length; skillCounter++ ) {
            if( _skillList[skillCounter].id == skillID ) {
                if( _skillList[skillCounter].specialties[ specialtyIndex] ) {

                    if( _skillList[skillCounter].specialties[ specialtyIndex].value < 2) {
                        //_skillList[skillCounter].specialties[ specialtyIndex].value = 0;
                        if( _skillList[skillCounter].specialties.length == 1){
                            _skillList[skillCounter].specialties = Array();
                            return true;
                        } else {
                            this.removeSpecialtyAtIndex( skillID, specialtyIndex);
                            return true;
                        }
                    } else {
                        _skillList[skillCounter].specialties[ specialtyIndex].value--;
                        return true;
                    }

                }
            }

        }
        return false;
    }

    this.updateSpecialtySkillName = function( skillID, specialtyIndex, updatedName ) {
        for( var skillCounter = 0; skillCounter < _skillList.length; skillCounter++ ) {
            if( _skillList[skillCounter].id == skillID ) {
                if( _skillList[skillCounter].specialties[ specialtyIndex] ) {
                    _skillList[skillCounter].specialties[ specialtyIndex].name = updatedName;
                    return true;
                }
            }

        }
        return false;
    }

    this.hasEdge = function( edgeTag, maxCount ) {
        if( !maxCount )
            maxCount = -1;
        for( var edgeCounter = 0; edgeCounter < _selectedEdges.length; edgeCounter++ ) {

            if( _selectedEdges[edgeCounter].tag == edgeTag) {
                return true;
            }
        }

        for( var edgeCounter = 0; edgeCounter < _race.edges.length; edgeCounter++ ) {
            if( _race.edges[edgeCounter].tag == edgeTag){
                return true;
            }
        }

        for( var edgeCounter = 0; edgeCounter < _selectedAdvancements.length; edgeCounter++ ) {
            if(
                _selectedAdvancements[edgeCounter].tag == "edge"
                    &&
                 _selectedAdvancements[edgeCounter].option1
                     &&
                 _selectedAdvancements[edgeCounter].option1.tag
                     &&
                 _selectedAdvancements[edgeCounter].option1.tag == edgeTag
            ){
                if( maxCount == -1 || maxCount >= edgeCounter )
                     return true;
            }
        }
        return false;
    }

    this.hasHindrance = function( edgeTag ) {
        for( var hindranceCounter = 0; hindranceCounter < _selectedHindrances.length; hindranceCounter++ ) {
            if(
                _selectedHindrances[hindranceCounter].tag.indexOf(edgeTag + "-") === 0
                    ||
                _selectedHindrances[hindranceCounter].tag == edgeTag
            ) {
                return _selectedHindrances[hindranceCounter].tag;
            }
        }

        for( var hindranceCounter = 0; hindranceCounter < _race.hindrances.length; hindranceCounter++ ) {
            if(
                _race.hindrances[hindranceCounter].indexOf(edgeTag + "-") === 0
                    ||
                _race.hindrances[hindranceCounter].tag == edgeTag
            ) {

                return _race.hindrances[hindranceCounter].tag;
            }
        }
        return false;
    }

    this.removeSpecialtyAtIndex = function( skillID, specialtyIndex ) {
        for( var skillCounter = 0; skillCounter < _skillList.length; skillCounter++ ) {
            if( _skillList[skillCounter].id == skillID ) {
                if( _skillList[skillCounter].specialties[ specialtyIndex] ) {
                    _skillList[skillCounter].specialties.splice(specialtyIndex, 1);
                    return true;
                }
            }

        }
        return false;
    }

    this.addPerk = function( perkTag ) {
        for( var perkCounter = 0; perkCounter < _perkOptions.length; perkCounter++ ) {
            if( perkTag == _perkOptions[perkCounter].tag ) {
                _selectedPerks.push( _perkOptions[perkCounter] );
                return true;
            }
        }
        return false;
    }

    this.removePerk = function( perkTag ) {
        for( var perkCounter = 0; perkCounter < _selectedPerks.length; perkCounter++ ) {
            if( perkTag == _selectedPerks[perkCounter].tag ) {
                _selectedPerks.splice( perkCounter, 1 );
                return true;
            }
        }
        return false;
    }
    this.setAttribute = function( attributeName, diceID ) {
        _attributes[attributeName] = diceID - _attributeBoost[attributeName];
    }

    this.boostAttribute = function( attributeName, boostNumber ) {
        if( !boostNumber )
            boostNumber = 1;
        _attributeBoost[attributeName] += boostNumber;
    }

    this.boostSkill = function( skillID, specialtyName, boostNumber ) {
        //~ console.log( "boostSkill", skillID, specialtyName, boostNumber );
        if( !boostNumber )
            boostNumber = 1;
        for( var skillCounter = 0; skillCounter < _skillList.length; skillCounter++ ) {
            if( _skillList[skillCounter].id == skillID ) {
                if( specialtyName && _skillList[skillCounter].specify ) {

                    for( var skillCounter2 = 0; skillCounter2 < _skillList[skillCounter].specialties.length; skillCounter2++ ) {
                        if(  _skillList[skillCounter].specialties[skillCounter2].name == specialtyName ) {
                            _skillList[skillCounter].specialties[skillCounter2].boost += boostNumber;
                            return true;
                        }
                    }

                    // Specialy is not found - add it and boost it!
                    _skillList[skillCounter].specialties.push(
                        {
                            name: specialtyName,
                            value: 0,
                            boost: boostNumber
                        }
                    );
                    return true;
                } else {
                    _skillList[skillCounter].boost += boostNumber;
                    return true;
                }
            }
        }
        return false;
    }

    this.setArcaneBackground = function( abTag ) {
        for( abCounter = 0; abCounter < savageWorldsArcaneBackgrounds.length; abCounter++) {
            if( abTag == savageWorldsArcaneBackgrounds[abCounter].tag ) {
                _selectedArcaneBackground = savageWorldsArcaneBackgrounds[abCounter];
                return true;
            }
        }
        return false;
    }

    this.addGearMundane = function( fromBook, gearTag, itemCost, droppedDuringCombat, itemCount ) {
        if( !itemCount )
            itemCount = 1;
        if(!droppedDuringCombat)
            droppedDuringCombat = false;
        for( var gearCounter = 0; gearCounter < _availableMundaneGear.length; gearCounter++ ) {
            if(
                gearTag == _availableMundaneGear[ gearCounter ].tag
                    &&
                fromBook == _availableMundaneGear[ gearCounter ].book

            ) {
                mundaneGearIndex = this.getMundaneGear( gearTag );

                var pushedItem = {};
                angular.extend( pushedItem, _availableMundaneGear[ gearCounter ]);
                pushedItem.droppedDuringCombat = droppedDuringCombat;
                if( itemCost > -1 ) {
                    pushedItem.purchaseCost = itemCost;
                } else {
                    pushedItem.purchaseCost = pushedItem.cost;
                }

                if( mundaneGearIndex > -1 ) {

                    if( _selectedMundaneGear[mundaneGearIndex].purchaseCost == pushedItem.purchaseCost  ) {
                        _selectedMundaneGear[mundaneGearIndex].count++;
                    } else {
                        // push new item since prices don't match.
                        pushedItem.count = itemCount;
                        _selectedMundaneGear.push( pushedItem );
                    }
                    return true;
                } else {
                    // push new item
                    pushedItem.count = itemCount;


                    _selectedMundaneGear.push( pushedItem );
                    return true;
                }
            }
        }
        return false;
    }

    this.getMundaneGear = function( gearTag ) {
        for( var findCounter = 0; findCounter < _selectedMundaneGear.length; findCounter++ ) {
            if( _selectedMundaneGear[findCounter].tag == gearTag )
                return findCounter;
        }

        return -1;
    }

    this.addGearRangedWeapon = function( fromBook, gearTag, itemCost, readiedLocation, droppedDuringCombat ) {
        if(!droppedDuringCombat)
            droppedDuringCombat = false;
        for( var gearCounter = 0; gearCounter < _availableRangedWeapons.length; gearCounter++ ) {
            if(
                gearTag == _availableRangedWeapons[ gearCounter ].tag
                    &&
                fromBook == _availableRangedWeapons[ gearCounter ].book
            ) {
                var pushedItem = {};
                angular.extend( pushedItem, _availableRangedWeapons[ gearCounter ]);
                pushedItem.droppedDuringCombat = droppedDuringCombat;
                if( itemCost > -1 ) {
                    pushedItem.purchaseCost = itemCost;
                } else {
                    pushedItem.purchaseCost = pushedItem.cost;
                }
                if( readiedLocation ) {
                    pushedItem.readiedLocation = readiedLocation;
                } else {
                    pushedItem.readiedLocation = "";
                }
                _selectedRangedWeapons.push( pushedItem );
                return true;
            }
        }
        return false;
    }

    this.addGearHandWeapon = function( fromBook, gearTag, itemCost, readiedLocation, droppedDuringCombat, sciFiMod ) {
        if(!droppedDuringCombat)
            droppedDuringCombat = false;
        if(!sciFiMod)
            sciFiMod = "";
        for( var gearCounter = 0; gearCounter < _availableHandWeapons.length; gearCounter++ ) {
            //~ if(
                //~ gearTag == _availableHandWeapons[ gearCounter ].tag
            //~ ) {
                //~ console.log( _availableHandWeapons[ gearCounter ].book );
                //~ console.log(gearCounter);
            //~ }
            if(
                gearTag == _availableHandWeapons[ gearCounter ].tag
                    &&
                fromBook == _availableHandWeapons[ gearCounter ].book
            ) {
                var pushedItem = {};
                angular.extend( pushedItem, _availableHandWeapons[ gearCounter ]);
                pushedItem.droppedDuringCombat = droppedDuringCombat;
                if( itemCost > -1 ) {
                    pushedItem.purchaseCost = itemCost;
                } else {
                    pushedItem.purchaseCost = pushedItem.cost;
                }
                if( readiedLocation ) {
                    pushedItem.readiedLocation = readiedLocation;
                } else {
                    pushedItem.readiedLocation = "";
                }

                pushedItem.sciFiMod = sciFiMod;

                _selectedHandWeapons.push( pushedItem );
                return true;
            }
        }
        return false;
    }

    this.addGearShield = function( fromBook, gearTag, itemCost, readiedLocation, droppedDuringCombat ) {
        if(!droppedDuringCombat)
            droppedDuringCombat = false;
        for( var gearCounter = 0; gearCounter < _availableShields.length; gearCounter++ ) {
            if(
                gearTag == _availableShields[ gearCounter ].tag
                    &&
                fromBook == _availableShields[ gearCounter ].book
            ) {
                var pushedItem = {};
                angular.extend( pushedItem, _availableShields[ gearCounter ]);
                pushedItem.droppedDuringCombat = droppedDuringCombat;
                if( itemCost > -1 ) {
                    pushedItem.purchaseCost = itemCost;
                } else {
                    pushedItem.purchaseCost = pushedItem.cost;
                }
                if( readiedLocation ) {
                    pushedItem.readiedLocation = readiedLocation;
                } else {
                    pushedItem.readiedLocation = "";
                }
                _selectedShields.push( pushedItem );
                return true;
            }
        }
        return false;
    }

    this.addGearArmor = function( fromBook, gearTag, itemCost, isReadied, droppedDuringCombat ) {
        if(!droppedDuringCombat)
            droppedDuringCombat = false;
        for( var gearCounter = 0; gearCounter < _availableArmor.length; gearCounter++ ) {
            if(
                gearTag == _availableArmor[ gearCounter ].tag
                    &&
                fromBook == _availableArmor[ gearCounter ].book
            ) {
                var pushedItem = {};
                angular.extend( pushedItem, _availableArmor[ gearCounter ]);
                pushedItem.droppedDuringCombat = droppedDuringCombat;
                if( itemCost > -1 ) {
                    pushedItem.purchaseCost = itemCost;
                } else {
                    pushedItem.purchaseCost = pushedItem.cost;
                }
                if( isReadied ) {
                    pushedItem.isReadied = isReadied;
                } else {
                    pushedItem.isReadied = false;
                }
                _selectedArmor.push( pushedItem );
                return true;
            }
        }
        return false;
    }

    this.removeMundane = function( gearIndex ) {
        if( _selectedMundaneGear[gearIndex].count > 1)
            _selectedMundaneGear[gearIndex].count--;
        else
            _selectedMundaneGear.splice( gearIndex, 1);
    }

    this.removeArmor = function( gearIndex ) {
        _selectedArmor.splice( gearIndex, 1);
    }
    this.removeHandWeapon = function( gearIndex ) {
        _selectedHandWeapons.splice( gearIndex, 1);
    }

    this.removeRangedWeapon = function( gearIndex ) {
        _selectedRangedWeapons.splice( gearIndex, 1);
    }

    this.removeShield = function( gearIndex ) {
        _selectedShields.splice( gearIndex, 1);
    }

    this.equipPrimaryHandWeapon = function( gearIndex ) {
        // unequip all items in primary hand....
        for( var gearCounter = 0; gearCounter < _selectedShields.length; gearCounter++ ) {
            if( _selectedShields[ gearCounter ].readiedLocation == "primary" )
                _selectedShields[ gearCounter ].readiedLocation = "";
            if( _selectedHandWeapons[gearIndex].requires_2_hands > 0 ) {
                if( _selectedShields[ gearCounter ].readiedLocation == "secondary" )
                    _selectedShields[ gearCounter ].readiedLocation = "";
            }
        }

        for( var gearCounter = 0; gearCounter < _selectedHandWeapons.length; gearCounter++ ) {
            if( _selectedHandWeapons[ gearCounter ].readiedLocation == "primary" )
                _selectedHandWeapons[ gearCounter ].readiedLocation = "";
            if( _selectedHandWeapons[gearIndex].requires_2_hands > 0 ) {
                if( _selectedHandWeapons[ gearCounter ].readiedLocation == "secondary" )
                    _selectedHandWeapons[ gearCounter ].readiedLocation = "";
            }
        }

        for( var gearCounter = 0; gearCounter < _selectedRangedWeapons.length; gearCounter++ ) {
            if( _selectedRangedWeapons[ gearCounter ].readiedLocation == "primary" )
                _selectedRangedWeapons[ gearCounter ].readiedLocation = "";
            if( _selectedRangedWeapons[gearIndex].requires_2_hands > 0 ) {
                if( _selectedRangedWeapons[ gearCounter ].readiedLocation == "secondary" )
                    _selectedRangedWeapons[ gearCounter ].readiedLocation = "";
            }
        }

        _selectedHandWeapons[gearIndex].droppedDuringCombat = false;
        _selectedHandWeapons[gearIndex].readiedLocation = "primary";

    }

    this.hasNaturalWeapons = function( newValue ) {

        if( typeof( newValue ) != "undefined" ) {
            if( newValue === true )
                _naturalWeapons.push("Natural Weapons");
            else
                _naturalWeapons.push(newValue);
        }

        return _naturalWeapons;
    }

    this.equipPrimaryRangedWeapon = function( gearIndex ) {
        // unequip all items in primary hand....
        for( var gearCounter = 0; gearCounter < _selectedShields.length; gearCounter++ ) {
            if( _selectedShields[ gearCounter ].readiedLocation == "primary" )
                _selectedShields[ gearCounter ].readiedLocation = "";
            if( _selectedHandWeapons[gearIndex].requires_2_hands > 0 ) {
                if( _selectedShields[ gearCounter ].readiedLocation == "secondary" )
                    _selectedShields[ gearCounter ].readiedLocation = "";
            }
        }

        for( var gearCounter = 0; gearCounter < _selectedHandWeapons.length; gearCounter++ ) {
            if( _selectedHandWeapons[ gearCounter ].readiedLocation == "primary" )
                _selectedHandWeapons[ gearCounter ].readiedLocation = "";
            if( _selectedHandWeapons[gearIndex].requires_2_hands > 0 ) {
                if( _selectedHandWeapons[ gearCounter ].readiedLocation == "secondary" )
                    _selectedHandWeapons[ gearCounter ].readiedLocation = "";
            }
        }

        for( var gearCounter = 0; gearCounter < _selectedRangedWeapons.length; gearCounter++ ) {
            if( _selectedRangedWeapons[ gearCounter ].readiedLocation == "primary" )
                _selectedRangedWeapons[ gearCounter ].readiedLocation = "";
            if( _selectedRangedWeapons[gearIndex].requires_2_hands > 0 ) {
                if( _selectedRangedWeapons[ gearCounter ].readiedLocation == "secondary" )
                    _selectedRangedWeapons[ gearCounter ].readiedLocation = "";
            }
        }

        _selectedRangedWeapons[gearIndex].droppedDuringCombat = false;
        _selectedRangedWeapons[gearIndex].readiedLocation = "primary";

    }

    this.equipSecondaryHandWeapon = function( gearIndex ) {
        // unequip all items in primary hand....
        for( var gearCounter = 0; gearCounter < _selectedShields.length; gearCounter++ ) {
            if( _selectedShields[ gearCounter ].readiedLocation == "secondary" )
                _selectedShields[ gearCounter ].readiedLocation = "";
        }

        for( var gearCounter = 0; gearCounter < _selectedHandWeapons.length; gearCounter++ ) {
            if( _selectedHandWeapons[ gearCounter ].readiedLocation == "secondary" )
                _selectedHandWeapons[ gearCounter ].readiedLocation = "";
        }

        for( var gearCounter = 0; gearCounter < _selectedRangedWeapons.length; gearCounter++ ) {
            if( _selectedRangedWeapons[ gearCounter ].readiedLocation == "secondary" )
                _selectedRangedWeapons[ gearCounter ].readiedLocation = "";
        }

        _selectedHandWeapons[gearIndex].readiedLocation = "secondary";
        _selectedHandWeapons[gearIndex].droppedDuringCombat = false;
    }

    this.equipSecondaryRangedWeapon = function( gearIndex ) {
        // unequip all items in primary hand....
        for( var gearCounter = 0; gearCounter < _selectedShields.length; gearCounter++ ) {
            if( _selectedShields[ gearCounter ].readiedLocation == "secondary" )
                _selectedShields[ gearCounter ].readiedLocation = "";
        }

        for( var gearCounter = 0; gearCounter < _selectedHandWeapons.length; gearCounter++ ) {
            if( _selectedHandWeapons[ gearCounter ].readiedLocation == "secondary" )
                _selectedHandWeapons[ gearCounter ].readiedLocation = "";
        }

        for( var gearCounter = 0; gearCounter < _selectedRangedWeapons.length; gearCounter++ ) {
            if( _selectedRangedWeapons[ gearCounter ].readiedLocation == "secondary" )
                _selectedRangedWeapons[ gearCounter ].readiedLocation = "";
        }

        _selectedRangedWeapons[gearIndex].readiedLocation = "secondary";
        _selectedRangedWeapons[gearIndex].droppedDuringCombat = false;
    }

    this.equipPrimaryShield = function( gearIndex ) {
        // unequip all items in primary hand....
        for( var gearCounter = 0; gearCounter < _selectedShields.length; gearCounter++ ) {
            if( _selectedShields[ gearCounter ].readiedLocation == "primary" )
                _selectedShields[ gearCounter ].readiedLocation = "";
        }

        for( var gearCounter = 0; gearCounter < _selectedHandWeapons.length; gearCounter++ ) {
            if( _selectedHandWeapons[ gearCounter ].readiedLocation == "secondary" )
                _selectedHandWeapons[ gearCounter ].readiedLocation = "";
        }

        for( var gearCounter = 0; gearCounter < _selectedRangedWeapons.length; gearCounter++ ) {
            if( _selectedRangedWeapons[ gearCounter ].readiedLocation == "secondary" )
                _selectedRangedWeapons[ gearCounter ].readiedLocation = "";
        }

        _selectedShields[gearIndex].readiedLocation = "primary";
        _selectedShields[gearIndex].droppedDuringCombat = false;
    }

    this.equipSecondaryShield = function( gearIndex ) {
        // unequip all items in primary hand....
        for( var gearCounter = 0; gearCounter < _selectedShields.length; gearCounter++ ) {
            if( _selectedShields[ gearCounter ].readiedLocation == "secondary" )
                _selectedShields[ gearCounter ].readiedLocation = "";
        }

        for( var gearCounter = 0; gearCounter < _selectedHandWeapons.length; gearCounter++ ) {
            if( _selectedHandWeapons[ gearCounter ].readiedLocation == "secondary" )
                _selectedHandWeapons[ gearCounter ].readiedLocation = "";
        }

        for( var gearCounter = 0; gearCounter < _selectedRangedWeapons.length; gearCounter++ ) {
            if( _selectedRangedWeapons[ gearCounter ].readiedLocation == "secondary" )
                _selectedRangedWeapons[ gearCounter ].readiedLocation = "";
        }

        _selectedShields[gearIndex].readiedLocation = "secondary";
        _selectedShields[gearIndex].droppedDuringCombat = false;
    }

    this.unequipShield = function( gearIndex ) {
        _selectedShields[gearIndex].readiedLocation = "";
    }

    this.unequipHandWeapon = function( gearIndex ) {
        _selectedHandWeapons[gearIndex].readiedLocation = "";
    }

    this.unequipRangedWeapon = function( gearIndex ) {
        _selectedRangedWeapons[gearIndex].readiedLocation = "";
    }

    this.setSciFiMod = function( gearIndex, sciFiModSelected ) {
        _selectedHandWeapons[gearIndex].sciFiMod = sciFiModSelected;
    }

    this.equipArmor = function( gearIndex ) {
        _selectedArmor[gearIndex].isReadied = true;
        _selectedArmor[gearIndex].droppedDuringCombat = false;
    }

    this.unequipArmor = function( gearIndex ) {
        _selectedArmor[gearIndex].isReadied = false;
    }

    this.setDroppedDuringCombat = function( itemType, gearIndex ) {
        if( itemType == "armor")
            _selectedArmor[gearIndex].droppedDuringCombat = true;
        if( itemType == "handweapon")
            _selectedHandWeapons[gearIndex].droppedDuringCombat = true;
        if( itemType == "rangedweapon")
            _selectedRangedWeapons[gearIndex].droppedDuringCombat = true;
        if( itemType == "shield")
            _selectedShields[gearIndex].droppedDuringCombat = true;
        if( itemType == "gear")
            _selectedMundaneGear[gearIndex].droppedDuringCombat = true;
    }

    this.setUsedDuringCombat = function( itemType, gearIndex ) {
        if( itemType == "armor")
            _selectedArmor[gearIndex].droppedDuringCombat = false;
        if( itemType == "handweapon")
            _selectedHandWeapons[gearIndex].droppedDuringCombat = false;
        if( itemType == "handweapon")
            _selectedRangedWeapons[gearIndex].droppedDuringCombat = false;
        if( itemType == "shield")
            _selectedShields[gearIndex].droppedDuringCombat = false;
        if( itemType == "gear")
            _selectedMundaneGear[gearIndex].droppedDuringCombat = false;
    }

    this.addSPCPower = function( powerID, customName, descriptionText, level, modifiers, genericModifiers, switchableWith, boostedAttribute, boostedSkill, boostedSkillSpecialty ) {
        if( !descriptionText )
            descriptionText = "";
        if( !level )
            level = 1;

        if( !genericModifiers )
            genericModifiers = Array();

        for( var spcCounter = 0; spcCounter < savageWorldsSPCPowers.length; spcCounter++) {
            if( powerID == savageWorldsSPCPowers[spcCounter].id) {
                var addPower = angular.copy( savageWorldsSPCPowers[spcCounter] );

                if(!customName) {
                    addPower.custom_name = savageWorldsSPCPowers[spcCounter].local_name;
                } else {
                    addPower.custom_name = customName;
                }

                addPower.description = descriptionText;
                addPower.selectedLevel = level / 1;
                for( var modCounter = 0; modCounter < addPower.modifiersObj.length;modCounter++) {
                    addPower.modifiersObj[modCounter].description = "";
                    addPower.modifiersObj[modCounter].currentCost = 0;
                    if( modifiers && modifiers[modCounter] ) {
                        //addPower.modifiersObj[modCounter].description = modifiers[modCounter].desc;
                        addPower.modifiersObj[modCounter].currentCost = modifiers[modCounter].cost;
                    }
                }

                for( var modCounter = 0; modCounter < addPower.genericModifiersObj.length;modCounter++) {
                    addPower.genericModifiersObj[modCounter].description = "";
                    addPower.genericModifiersObj[modCounter].currentCost = 0;
                    if( genericModifiers && genericModifiers[modCounter] ) {
                        //addPower.modifiersObj[modCounter].description = modifiers[modCounter].desc;
                        addPower.genericModifiersObj[modCounter].currentCost = genericModifiers[modCounter].cost;
                    }
                }

                addPower.boosted_attribute = "";
                addPower.boosted_skill = "";
                addPower.boosted_skill_specialty = "";
                addPower.switchableWith = "";

                if( switchableWith && switchableWith.internalID ) {

                    if( _selectedSPCPowers[switchableWith.internalID] )
                        addPower.switchableWith = _selectedSPCPowers[switchableWith.internalID];
                    // for( var slcCounter = 0; slcCounter < _selectedSPCPowers.length; slcCounter++) {
                    //
                    //     if( _selectedSPCPowers.)
                    // }
                }

                if( boostedAttribute )
                    addPower.boosted_attribute = boostedAttribute;

                if( boostedSkill )
                    addPower.boosted_skill = boostedSkill;

                if( boostedSkillSpecialty )
                    addPower.boosted_skill_specialty = boostedSkillSpecialty;

                _selectedSPCPowers.push( addPower );

                return true;
            }
        }
        return false;
    }

    this.init(useLang);
}
