/*
    Savage Worlds Web Tools by Jeffrey Gordon is licensed under a
    Creative Commons Attribution 4.0 International License.
*/
"use strict";
var scifiCreator = function(objectType, objectLabel, availableSizes, availableMods, availableOptions) {
    this.init(objectType, objectLabel, availableSizes, availableMods, availableOptions);
};

scifiCreator.prototype.init = function(objectType, objectLabel, availableSizes, availableMods, availableOptions){
    this.appVersion = "2016040101";

    this.itemName = "";
        this.objectDescription = "";
        this.useLang = "en-US";

        this.uuid = this.makeUUID();

        this.objectLabel = objectLabel;
        this.examples = "";
        this.extraNotes = "";
        this.size = 0;
        this.objectType = objectType;
        this.acc = 0;
        this.ts = 0;
        this.climb = 0;
        this.toughness = 0;
        this.baseToughness = 0;
        this.baseCost = 0;
        this.armor = 0;
        this.frontArmor = 0
        this.sideArmor = 0;
        this.creatorOptions = Array();
        this.numberOfLegs = 0;
        this.rearArmor = 0;
        this.mods = 0;
        this.baseMods = 0;
        this.crew = 0;
        this.hasWeaponMounts = 0;
        this.requiresMountPoint = 0;
        this.flyingPace = 0;
        this.cost = 0;
        this.vehicleWeaponModPoints = 0;
        this.energyCapacity =  0;
        this.baseEnergyCapacity =  0;
        this.provisions = 0;

        this.hasTorpedoTube = 0;
        this.hasMissileLauncher = 0;

        this.aircraft = 0;

        this.selectedSize = 0;

        if(availableOptions)
            this.availableOptions = availableOptions;
        else
            this.availableOptions = Array();

        if(availableSizes)
            this.availableSizes = availableSizes;
        else
            this.availableSizes = Array();

        if(availableMods)
            this.availableMods = availableMods;
        else
            this.availableMods = Array();

        this.selectedModifications = Array();
        this.selectedModifications_list = {};

        this.mods_available = 0;

        this.selected_weapons = Array();
        this.selectedWeaponsList = Array();

        if(this.objectType == "power_armor") {
            this.requiresMountPoint = 1;
            this.hasWeaponMounts = 1;
        } else {
            this.requiresMountPoint = 0;
            this.hasWeaponMounts = 0;
        }
};

scifiCreator.prototype.newUUID = function() {
        this.uuid = this.makeUUID();
    };

scifiCreator.prototype.makeUUID = function(){
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

scifiCreator.prototype.reset = function() {
    this.init(this.objectType, this.objectLabel, this.availableSizes, this.availableMods, this.availableOptions);
};

scifiCreator.prototype.setSizes = function(availableSizes) {
    this.availableSizes = availableSizes
};

scifiCreator.prototype.exportHTML = function() {
    return this.createStatesBlock();
};

scifiCreator.prototype.getModName = function( modTag ) {
    // search through available mods to see if function exists
    for(var getModCount = 0; getModCount < this.availableMods.length; getModCount++) {
        if( this.availableMods[getModCount].tag == modTag ) {
            return this.getLocalName( this.availableMods[getModCount].name );
        }
    }

    return "Error: getModName - Not Found !";
};

scifiCreator.prototype.getTranslation = function(langKey) {
    for( var lang_count = 0; lang_count < availableLanguages.length; lang_count++ ) {
        if( availableLanguages[lang_count].short_code == this.useLang ) {

            if(availableLanguages[lang_count].translations[langKey] ) {
                return availableLanguages[lang_count].translations[langKey];
            } else {
                return langKey;
            }
        }
    }
    return langKey;
};


scifiCreator.prototype.simplify_cost = function (input_price) {
    if(input_price > 1000000000) {
        // it's a billion+
        return input_price / 1000000000 + 'B';
    } else if(input_price > 1000000) {
        // it's a million+
        return input_price / 1000000 + 'M';
    } else if(input_price > 1000){
        // it's a thousand+
        return input_price / 1000 + 'K';
    } else {
        return input_price;
    }
},

scifiCreator.prototype.getLocalName = function( incoming_string_array ) {
    if( incoming_string_array[ this.useLang] ) {
        return incoming_string_array[ this.useLang];
    } else {
        return incoming_string_array[ "en-US" ];
    }
};

scifiCreator.prototype.formatMoney = function(n, decPlaces, thouSeparator, decSeparator) {
    var
        decPlaces = isNaN(decPlaces = Math.abs(decPlaces)) ? 2 : decPlaces,
        decSeparator = decSeparator == undefined ? "." : decSeparator,
        thouSeparator = thouSeparator == undefined ? "," : thouSeparator,
        sign = n < 0 ? "-" : "",
        i = parseInt(n = Math.abs(+n || 0).toFixed(decPlaces)) + "",
        j = (j = i.length) > 3 ? j % 3 : 0;
    return sign + (j ? i.substr(0, j) + thouSeparator : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thouSeparator) + (decPlaces ? decSeparator + Math.abs(n - i).toFixed(decPlaces).slice(2) : "");
};

scifiCreator.prototype.createStatesBlock = function() {
    var html_return = "";

    html_return += "<h3>" + this.itemName + "</h3>";
    html_return += "<p>";

    html_return += this.objectDescription + "</p><br />";

    if(this.selectedSize && this.selectedSize.size > 0) {
        html_return += "<strong>" + this.getLocalName(this.selectedSize.sizeLabel)  + "</strong>: ";
        html_return += this.getTranslation("CREATOR_SIZE") + " " + this.size + ", ";
        if(this.acc > 0)
            html_return += this.getTranslation("CREATOR_ACC_TS") + " " +  this.acc + "/" + this.formatPaceRealWorld(this.ts) + ", ";
        if(this.aircraft)
            html_return += this.getTranslation("CREATOR_CLIMB") + " " + this.climb + ", ";
        if(this.flyingPace > 0)
            html_return += this.getTranslation("CREATOR_FLYPACE") + " " +  this.formatPaceRealWorld(this.flyingPace) + ", ";
        if(this.toughness > 0) {
            if( this.frontArmor > 0 ) {
                html_return += this.getTranslation("CREATOR_TOUGHNESS") + " " + this.toughness + " (<span title='" + this.getTranslation("CREATOR_FASARA")  + ")'>" + this.frontArmor + "/" + this.sideArmor + "/" +  this.rearArmor + "</span>), ";
            } else {
                html_return += this.getTranslation("CREATOR_TOUGHNESS") + " " + this.toughness + " (" + this.armor + "), ";
            }

        } else {
            if(this.armor) {
                html_return += this.getTranslation("CREATOR_ARMOR") + " +"  + this.armor + ", ";
            }
        }

        if(this.pace > 0)
            html_return += this.getTranslation("CREATOR_PACE") + " "  + this.formatPaceRealWorld(this.pace) + ", ";
        if(this.crew > 0)
            html_return += this.getTranslation("CREATOR_CREW") + " "  + this.crew + ", ";

        if(this.strength > 0 && this.objectType != "power_armor")
            html_return += this.getTranslation("CREATOR_STRENGTH") + " "  + this.getLocalName(  this.getStrengthLabel( this.strength ).label ) + ", ";

        html_return += this.getTranslation("CREATOR_COST") + " C$" + this.formatMoney(this.cost, 0) + ", ";
        html_return += this.getTranslation("CREATOR_REMAINING_MODS") + " "  + this.mods_available + "<br />";


        //html_return += "<strong>Mods Available</strong>: " + this.mods_available + "<br />";
        if( this.hasWeaponMounts )
            html_return += "<strong>" + this.getTranslation("CREATOR_WEAPON_MODS_AVAILABLE")  + "</strong>: " + this.vehicleWeaponModPoints + "<br />";

        html_return += "<strong>" + this.getTranslation("CREATOR_NOTES")  + "</strong>: ";

        this.sortSelectedModificationsList();
        var mod_count = 0;

        for(var modTag in this.selectedModifications_list){

            if( mod_count > 0)
                html_return += ", ";
            if(this.selectedModifications_list[modTag] > 1)
                    html_return += this.selectedModifications_list[modTag] + "x "

                var modName = this.getModName(modTag);
                html_return += modName;

                mod_count++;
        }
        if( mod_count == 0)
            html_return += this.getTranslation("CREATOR_NONE");

        html_return += "<br />";

        html_return += "<strong>" + this.getTranslation("CREATOR_WEAPONS")  + "</strong>: ";
        //this.sort_selectedWeaponsList();
        html_return += "<ul>";
        var weapon_count = 0;
//            console.log("this.selectedWeaponsList",this.selectedWeaponsList);
        for(var weaponName in this.selectedWeaponsList){
            html_return += "<li>";
            if(this.selectedWeaponsList[weaponName].count > 1)
                    html_return += this.selectedWeaponsList[weaponName].count + "x ";
                //this.selectedWeaponsList[weaponName].obj = this.updateWeaponDisplayName( this.selectedWeaponsList[weaponName] );
                html_return += this.selectedWeaponsList[weaponName].obj.display_name;
                html_return += this.makeWeaponStatHTML( this.selectedWeaponsList[weaponName].obj );
                html_return += "</li>";
                weapon_count++;
        }
        if( weapon_count == 0 )
            html_return += "<li>" + this.getTranslation("CREATOR_NONE")  + "</li>";
        html_return += "</ul>";

        if( this.getModificationCount("Shields") > 0) {
            html_return += "<strong>" + this.getTranslation("CREATOR_SHIELDS")  + "</strong>: ";
            html_return += this.size * 10;
            may_recover = this.getTranslation("CREATOR_MAY_RECOVER").replace("{value}", this.size);
            html_return += " - " + may_recover + "<br />";
        }

        if(this.energyCapacity > 0)
            html_return += "<strong>" + this.getTranslation("CREATOR_ENERGY_CAPACITY")  + "</strong>: " + this.energyCapacity + "<br />";

        if( this.extraNotes != "" ) {
            html_return += "<strong>" + this.getTranslation("CREATOR_EXTRA_NOTES")  + "</strong>: ";
            html_return += this.extraNotes;
        }
    } else {
        html_return += this.getTranslation("CREATOR_SIZE_MUST_BE_SELECTED");
    }

    return html_return;
};

scifiCreator.prototype.makeWeaponStatHTML = function( weapon_object ) {
    var return_val = " (";
    return_val += weapon_object



        + ", ";
    return_val += weapon_object.damage;

    if( weapon_object.count >= 4)
        return_val += " +2";
    else if( weapon_object.count >= 3)
        return_val += " +1";
    else if( weapon_object.count >= 2)
        return_val += " +1";

    return_val += ", ";

    return_val += "ROF " + weapon_object.rof + ", ";
    var notes = this.getLocalName( weapon_object.notes );
    if( notes != "")
        return_val += notes + ", ";
    return_val = return_val.substring(0, return_val.length - 2);
    return_val += ")";
    return return_val;
};

scifiCreator.prototype.exportBBCode = function() {
    html_return = "";

    html_return += "[b][size=150]" + this.itemName + "[/size][/b]\n";
    if(this.objectDescription)
        html_return += "" + this.objectDescription + "\n\n";
    else
        html_return += "\n";

    if(this.selectedSize && this.selectedSize.sizeLabel) {
        html_return += "[b]" + this.getLocalName(this.selectedSize.sizeLabel) + "[/b]: ";
        html_return += this.getTranslation("CREATOR_SIZE") + " " + this.size + ", ";
        if(this.acc > 0)
            html_return += this.getTranslation("CREATOR_ACC_TS") + " " + this.acc + "/" + this.formatPaceRealWorld(this.ts) + ", ";
        if(this.aircraft)
            html_return += this.getTranslation("CREATOR_CLIMB") + " " + this.climb + ", ";
        if(this.flyingPace > 0)
            html_return += this.getTranslation("CREATOR_FLYPACE") + " " + this.formatPaceRealWorld(this.flyingPace) + ", ";
        if(this.toughness > 0) {
            html_return += this.getTranslation("CREATOR_TOUGHNESS") + " " + this.toughness + " (" + this.armor + "), ";
        } else {
            if(this.armor) {
                html_return += this.getTranslation("CREATOR_ARMOR") + "  +" + this.armor + ", ";
            }
        }

        if(this.pace > 0)
            html_return += this.getTranslation("CREATOR_PACE") + "  " + this.formatPaceRealWorld(this.pace) + ", ";
        if(this.crew > 0)
            html_return += this.getTranslation("CREATOR_CREW") + "  " + this.crew + ", ";

        if(this.strength > 0 && this.objectType != "power_armor")
            html_return += this.getTranslation("CREATOR_STRENGTH") + " "  + this.getLocalName(  this.getStrengthLabel( this.strength ).label ) + ", ";

        html_return += this.getTranslation("CREATOR_COST") + " C$" + this.simplify_cost(this.cost) + ", ";
        html_return += this.getTranslation("CREATOR_REMAINING_MODS") + " " + this.mods_available + "\n";

        html_return += "[b]" + this.getTranslation("CREATOR_NOTES") + "[/b]: ";

        var mod_count = 0;
        for(var modName in this.selectedModifications_list){
            if( mod_count > 0)
                html_return += ", ";
            if(this.selectedModifications_list[modName] > 1)
                    html_return += this.selectedModifications_list[modName] + "x ";
            html_return += modName;
            mod_count++;
        }
        if(mod_count == 0)
            html_return += this.getTranslation("CREATOR_NONE");

        html_return += "\n";

        html_return += "[b]" + this.getTranslation("CREATOR_WEAPONS") + "[/b]: ";
        html_return += "[list]";

        var weapon_count = 0;
        var weapon_count = 0;

        for(var weaponName in this.selectedWeaponsList){
            html_return += "[*]";
            if(this.selectedWeaponsList[weaponName].count > 1)
                    html_return += this.selectedWeaponsList[weaponName].count + "x ";

                html_return += this.selectedWeaponsList[weaponName].obj.display_name;
                html_return += this.makeWeaponStatHTML( this.selectedWeaponsList[weaponName].obj );
                html_return += "\n";
                weapon_count++;
        }
        if( weapon_count == 0 )
            html_return += "[*]" + this.getTranslation("CREATOR_NONE") + ".\n";
        html_return += "[/list]";

        html_return += "\n";

        if( this.getModificationCount("Shields") > 0) {
            html_return += "[b]" + this.getTranslation("CREATOR_SHIELDS") + "[/b]: ";
            html_return += this.size * 10;
            may_recover = this.getTranslation("CREATOR_MAY_RECOVER").replace("{value}", this.size);
            html_return += " - " + may_recover + "\n";
        }


        if(this.energyCapacity > 0)
            html_return += "[b]" + this.getTranslation("CREATOR_ENERGY_CAPACITY") + "[/b]: " + this.energyCapacity + "\n";
    } else {
        html_return += this.getTranslation("CREATOR_SIZE_MUST_BE_SELECTED");
    }



    for(removeHideCounter = 1; removeHideCounter < 31; removeHideCounter++) {
        html_return = html_return.replace("<span class='hide'>" + removeHideCounter + "</span>", "");

        // fix for bb code sunglasses when posting some vehicles and walkers to a bb forum.
        html_return = html_return.replace("8)", " 8 )");
    }


    return html_return;
};

scifiCreator.prototype.exportJSON = function() {
    var exportObject = {};
    exportObject.size = this.size;
    exportObject.objectType = this.objectType;
    exportObject.itemName = this.itemName;
    exportObject.uuid = this.uuid;
    exportObject.objectDescription = this.objectDescription;
    exportObject.mods = Array();
    exportObject.exported = new Date();
    exportObject.options = this.creatorOptions;
    for(var modCounter = 0; modCounter < this.selectedModifications.length; modCounter++)
        exportObject.mods = exportObject.mods.concat( this.selectedModifications[modCounter].tag );
    exportObject.weapons = Array();
    for(var local_weapon_counter = 0; local_weapon_counter < this.selected_weapons.length; local_weapon_counter++) {
        var weapon_item = {
            tag: this.selected_weapons[local_weapon_counter].tag,
            fixed: this.selected_weapons[local_weapon_counter].fixed,
            count: this.selected_weapons[local_weapon_counter].count
        };
        exportObject.weapons = exportObject.weapons.concat( weapon_item );
    }

    var export_string = JSON.stringify(exportObject);


    return export_string;

};

scifiCreator.prototype.stripslashes = function(str) {
    return (str + '').replace(/\\(.?)/g, function (s, n1) {
    switch (n1) {
    case '\\':
      return '\\';
    case '0':
      return '\u0000';
    case '':
      return '';
    default:
      return n1;
    }
    });
};

scifiCreator.prototype.importJSON = function(importedObjectString) {
    try {
        importedObjectString = this.stripslashes(importedObjectString);
        var importedObj = JSON.parse(importedObjectString);
    }
    catch(e) {
        // JSON Import error
        return false;
    }

    if(typeof importedObj =='object') {
        this.reset();
        this.setSize(importedObj.size);
        this.setName(importedObj.itemName);
        if( typeof(importedObj.objectDescription) != "undefined")
            this.setDescription(importedObj.objectDescription);

        if( typeof(importedObj.uuid) != "undefined")
            this.uuid = importedObj.uuid;

        // legacy version description checks
        if( typeof(importedObj.ship_description) != "undefined")
            this.setDescription(importedObj.ship_description);
        if( typeof(importedObj.power_armor_description) != "undefined")
            this.setDescription(importedObj.power_armor_description);
        if( typeof(importedObj.walker_description) != "undefined")
            this.setDescription(importedObj.walker_description);
        if( typeof(importedObj.vehicle_description) != "undefined")
            this.setDescription(importedObj.vehicle_description);
        if( typeof(importedObj.object_description) != "undefined")
            this.setDescription(importedObj.object_description);
        if( typeof(importedObj.item_name) != "undefined")
            this.setName(importedObj.item_name);

        if( importedObj.options )
            this.creatorOptions = importedObj.options;

        for(var modCounter = 0; modCounter < importedObj.mods.length; modCounter++)
            this.addMod( importedObj.mods[modCounter] );

        for(var local_weapon_counter = 0; local_weapon_counter < importedObj.weapons.length; local_weapon_counter++) {
            if( importedObj.weapons[local_weapon_counter].tag)
                this.addWeapon( importedObj.weapons[local_weapon_counter].tag );
            else
                this.addWeapon( importedObj.weapons[local_weapon_counter].name );

            if( typeof(importedObj.weapons[local_weapon_counter].fixed) != "undefined" && importedObj.weapons[local_weapon_counter].fixed != "")
                this.fixWeapon( this.selected_weapons.length - 1, importedObj.weapons[local_weapon_counter].fixed );

            if( typeof(importedObj.weapons[local_weapon_counter].count) != "undefined" && importedObj.weapons[local_weapon_counter].count > 0)
                this.setWeaponCount( this.selected_weapons.length - 1, importedObj.weapons[local_weapon_counter].count );

            if( typeof(importedObj.weapons[local_weapon_counter].linked) != "undefined" && importedObj.weapons[local_weapon_counter].linked > 0)
                this.linkWeapon( this.selected_weapons.length - 1, importedObj.weapons[local_weapon_counter].linked);

        }
        this.calculate();
        return true;
    }
    // Wasn't an object (or was empty)
    return false;
};

scifiCreator.prototype.sortSelectedModificationsList = function() {
    var keyList = Object.keys(this.selectedModifications_list);

    keyList.sort();

    var newList = {};

    for (var keyCount = 0; keyCount < keyList.length; keyCount++) {
        var keyName = keyList[keyCount];
        newList[keyName] = this.selectedModifications_list[keyName];
    }
    this.selectedModifications_list = newList;
};

scifiCreator.prototype.sortWeaponList = function() {

    this.selected_weapons.sort(function(a, b){
        if( a.linkable < b.linkable ) return 1;
        if( a.linkable > b.linkable ) return -1;
        if(a.mods > b.mods) return -1;
        if(a.mods < b.mods) return 1;
        return 0;
    });

};

scifiCreator.prototype.appendExtraNotes = function( note ) {
    if(this.extraNotes != "")
        this.extraNotes += ", ";
    this.extraNotes += note;
    return note;
};

scifiCreator.prototype.calculate = function() {


    if( this.selectedSize && this.selectedSize.sizeLabel ) {
        // Flush Stats for recalulation
        this.strength = 0;

        this.strengthBonus = 0;
        this.aircraft = 0;
        this.watercraft = 0;
        this.flyingPace = 0;
        this.hasWeaponMounts = 0;
        this.vehicleWeaponModPoints = 0;

        this.hasTorpedoTube = 0;
        this.hasMissileLauncher = 0;

        this.examples = this.selectedSize.examples;
        this.size = this.selectedSize.size;
        this.acc = this.selectedSize.acc;
        this.ts = this.selectedSize.ts;
        this.aircraft = 0;
        this.strengthBonus = 0;
        this.climb = this.selectedSize.climb;
        if(this.selectedSize.strength)
            this.strength = this.selectedSize.strength;
        this.toughness = this.selectedSize.toughness;
        this.baseToughness = this.selectedSize.toughness;
        this.armor = this.selectedSize.armor;
        this.mods = this.selectedSize.mods;
        this.baseMods = this.selectedSize.mods;
        this.crew = this.selectedSize.crew;
        this.cost = this.selectedSize.cost;
        this.baseCost =  this.selectedSize.cost;
        this.energyCapacity = this.selectedSize.energyCapacity;
        this.baseEnergyCapacity = this.selectedSize.energyCapacity;
        this.provisions = this.selectedSize.provisions;
        this.weight = this.selectedSize.weight;
        this.pace = this.selectedSize.pace;
        this.basePace = this.selectedSize.pace;

        this.extraNotes = "";

        this.mods_available = this.mods;

        // Starship is always an aircraft for these purposes ;)
        if(this.objectType == "starship")
            this.aircraft = 1;

        if( this.selectedSize && this.selectedSize.strength )
            this.strength = this.selectedSize.strength;
        // Go through Mods for availability, calculation and listings
        this.selectedModifications.sort( this.sortMods );
        // Sort mods
        this.selectedModifications_list = {};
        for(var calcModCount = 0; calcModCount < this.selectedModifications.length; calcModCount++) {
            //this.selectedModifications_list += "<li>" + this.selectedModifications[modCount].name + "</li>";
            this.mods = this.mods - this.selectedModifications[calcModCount].getModCost(this);
            this.cost += this.selectedModifications[calcModCount].getCost(this);

            // attempt to see if mod is still availble - remove if it's not.
            if( this.selectedModifications[calcModCount].isAvailable ) {
                if(this.selectedModifications[calcModCount].isAvailable(this) == false) {
                    this.removeMod(this.selectedModifications[calcModCount].tag);
                    this.calculate();
                    // stop all processing as the page is recalcuating anyways
                    return;
                }
            }

            if( this.selectedModifications[calcModCount].getWeight )
                this.weight += this.selectedModifications[calcModCount].getWeight(this);

            if( this.selectedModifications[calcModCount].getModEffect )
                this.selectedModifications[calcModCount].getModEffect(this);

            // Linked weapons are displayed elsewhere...
            if(this.selectedModifications[calcModCount].tag != "linked") {
                if( typeof(this.selectedModifications_list[this.selectedModifications[calcModCount].tag]) == "undefined")
                    this.selectedModifications_list[this.selectedModifications[calcModCount].tag] = 1;
                else
                    this.selectedModifications_list[this.selectedModifications[calcModCount].tag]++;
            }
        }

        // Go through Weapons for availability, calculation and listings
        // Sort weapons
        //this.selected_weapons.sort( sortMods );
        this.sortWeaponList();

        this.selectedWeaponsList = {};
        var fixedWeaponModUsage = 0;
        var linkedWeaponModUsage = Array();
        var otherWeaponModUsage = 0;
        for(var calcModCount = 0; calcModCount < this.selected_weapons.length; calcModCount++) {

            // attempt to see if weapon is still availble - remove if it's not.
            if( this.selected_weapons[calcModCount].isAvailable ) {
                if(this.selected_weapons[calcModCount].isAvailable(this) == false) {
                    this.removeWeapon(calcModCount);
                    this.calculate();
                    // stop all processing as the page is recalcuating anyways
                    return;
                }
            }

            this.selected_weapons[calcModCount] = this.updateWeaponDisplayName( this.selected_weapons[calcModCount] );
            // Continue on....
            var weaponModCost = this.selected_weapons[calcModCount].mods;

            if( typeof(this.selected_weapons[calcModCount].current_mod_cost) != "undefined") {
                weaponModCost = this.selected_weapons[calcModCount].current_mod_cost;
            }

            if(this.selected_weapons[calcModCount].fixed != 0 && this.selected_weapons[calcModCount].fixed != "")
                weaponModCost = weaponModCost / 2;

            if(this.requiresMountPoint > 0)
                this.vehicleWeaponModPoints -= weaponModCost;
            else
                this.mods -= weaponModCost;

            if( this.selected_weapons[calcModCount].getWeight )
                this.weight += this.selected_weapons[calcModCount].getWeight(this);

            if( this.selected_weapons[calcModCount].count > 1) {
                this.cost += this.selected_weapons[calcModCount].cost / 1 * this.selected_weapons[calcModCount].count;
            } else {
                this.cost += this.selected_weapons[calcModCount].cost / 1;
            }



            var weaponListName = this.selected_weapons[calcModCount].display_name;

            if(
                this.selected_weapons[calcModCount].fixed != 0
                &&
                this.selected_weapons[calcModCount].fixed != '0'
                &&
                this.selected_weapons[calcModCount].fixed != ""
            ) {

                var fixedLabel = "";
                switch( this.selected_weapons[calcModCount].fixed.toLowerCase().trim() ) {
                    case "bow":
                        fixedLabel = this.getTranslation("CREATOR_FIXED_BOW_FRONT");
                    //    console.log("bow",this.selected_weapons[calcModCount].fixed.toLowerCase().trim());
                        break;
                    case "port":
                        fixedLabel = this.getTranslation("CREATOR_FIXED_PORT_LEFT");
                        break;
                    case "starboard":
                        fixedLabel = this.getTranslation("CREATOR_FIXED_STARBOARD_RIGHT");
                        break;
                    case "stern":
                        fixedLabel = this.getTranslation("CREATOR_FIXED_STERN_REAR");
                        break;
                    default:
                        fixedLabel = this.getTranslation("CREATOR_FIXED");
                        break;
                }

                weaponListName = weaponListName + " (" + fixedLabel + ")";
                this.selected_weapons[calcModCount].display_name = weaponListName;

            } else {
                if(this.selected_weapons[calcModCount].linked) {
                    weaponListName = weaponListName + " (linked<span class='hide'>" + this.selected_weapons[calcModCount].linked + "</span>)";
                }
            }

            if( typeof(this.selectedWeaponsList[weaponListName]) == "undefined" || this.selectedWeaponsList[weaponListName] == "0") {
                if( this.selected_weapons[calcModCount].missiles_per > 0) {
                    this.selectedWeaponsList[weaponListName] = {
                        obj: this.selected_weapons[calcModCount],
                        count: this.selected_weapons[calcModCount].missiles_per
                    };
                } else {
                    this.selectedWeaponsList[weaponListName] = {
                        obj: this.selected_weapons[calcModCount],
                        count: 1
                    };
                }

            } else {
                if( this.selected_weapons[calcModCount].missiles_per > 0 )
                    this.selectedWeaponsList[weaponListName].count = (this.selectedWeaponsList[weaponListName].count / 1) + (this.selected_weapons[calcModCount].missiles_per / 1);
                else
                    this.selectedWeaponsList[weaponListName].count++;
            }
        }

        this.mods_available = this.mods; // - sortSelectedModificationsList.length;
        if(this.requiresMountPoint == 0) {
            this.vehicleWeaponModPoints = this.mods_available; // - sortSelectedModificationsList.length;
        }


    }
};

scifiCreator.prototype.setName = function(newValue) {
    this.itemName = newValue;
};

scifiCreator.prototype.setOption = function( short_tag, value ) {
    localStorage.setItem( this.getOptionLSName(short_tag), value.toString() );
};

scifiCreator.prototype.getOptionLSName = function( short_tag) {
    return "com.jdg.swwt.settings." + current_selectedObject.objectType + "." + short_tag;
};

scifiCreator.prototype.getAvailableOptions = function() {
    if(this.availableOptions) {
        // put current values into system
        for(var localSettingCount = 0; localSettingCount < this.availableOptions.length; localSettingCount++) {
            if( typeof(this.availableOptions[localSettingCount].desciption) == "undefined") {
                this.availableOptions[localSettingCount].desciption = "";
            }

            this.availableOptions[localSettingCount].value = localStorage.getItem( this.getOptionLSName( this.availableOptions[localSettingCount].short_tag ) );
            if(this.availableOptions[localSettingCount].value == "1")
                this.availableOptions[localSettingCount].value = this.availableOptions[localSettingCount].value / 1;
        }
        return this.availableOptions;

    } else {
        return Array();
    }
};

scifiCreator.prototype.formatPaceRealWorld = function(pace_value) {
    // never take things at pace value. /groan
    return pace_value + " (" + Math.floor(pace_value * 2.4)+ " mph, " + Math.floor(pace_value * 3.862416) + " kph)";
},

scifiCreator.prototype.setDescription = function(newValue) {
    this.objectDescription = newValue;
};

scifiCreator.prototype.addMod = function(modName) {
    var return_value = 0;
    if( !modName ) {
        return false;
    }
    for(var addModCount = 0; addModCount < this.availableMods.length; addModCount++) {
        if(
            modName.toLowerCase() == this.availableMods[addModCount].tag.toLowerCase()
            ||
            modName.toLowerCase() == this.availableMods[addModCount].name["en-US"].toLowerCase()
        ) {
            //newMod = jQuery.extend({}, this.availableMods[addModCount]);
            var newMod = {};
            angular.extend(newMod, this.availableMods[addModCount]);
            this.selectedModifications = this.selectedModifications.concat( newMod  );
            return;
        }
    }

    return return_value;
};

scifiCreator.prototype.getStrengthLabel = function( strength_value ) {
    return getDiceValue( strength_value );
};

scifiCreator.prototype.addWeapon = function(weaponName) {
    var return_value = 0;
    for(var addlocal_weapon_count = 0; addlocal_weapon_count < savageWorldsVehicleWeapons.length; addlocal_weapon_count++) {
        if(
            (
                weaponName.toLowerCase() == savageWorldsVehicleWeapons[addlocal_weapon_count].tag.toLowerCase()
            )
                ||
            (
                typeof(savageWorldsVehicleWeapons[addlocal_weapon_count].name_old) != "undefined"
                    &&
                weaponName.toLowerCase() == savageWorldsVehicleWeapons[addlocal_weapon_count].name_old["en-US"].toLowerCase()
            )
                ||
            (
                typeof(savageWorldsVehicleWeapons[addlocal_weapon_count].name) != "undefined"
                    &&
                weaponName.toLowerCase() == savageWorldsVehicleWeapons[addlocal_weapon_count].name["en-US"].toLowerCase()

            )
        ) {
            var newWeapon = {};
            angular.extend(newWeapon, savageWorldsVehicleWeapons[addlocal_weapon_count]);
            newWeapon.linked = 0;
            newWeapon.count = 1;
            newWeapon.fixed = 0;
            this.selected_weapons = this.selected_weapons.concat( newWeapon );
            return;
        }
    }

    return return_value;
};

scifiCreator.prototype.updateWeaponDisplayName = function( weaponObject ) {
    weaponObject.count = weaponObject.count / 1;
    weaponObject.mods = weaponObject.mods / 1;

    if( weaponObject.count == 1 ){
        weaponObject.display_name = this.getLocalName(weaponObject.name);
    }
    if( weaponObject.count == 2 ){
        linkedTranslation = this.getTranslation("CREATOR_DUAL_LINKED");
        weaponObject.display_name = linkedTranslation.replace("{name}",this.getLocalName(weaponObject.name_plural) );
    }
    if( weaponObject.count == 3 ){
        linkedTranslation = this.getTranslation("CREATOR_TRI_LINKED");
        weaponObject.display_name = linkedTranslation.replace("{name}",this.getLocalName(weaponObject.name_plural) );
    }
    if( weaponObject.count == 4 ){
        linkedTranslation = this.getTranslation("CREATOR_QUAD_LINKED");
        weaponObject.display_name = linkedTranslation.replace("{name}",this.getLocalName(weaponObject.name_plural) );
    }

    if( weaponObject.count > 1 ) {
        weaponObject.current_mod_cost = (weaponObject.mods * weaponObject.count) / 2;
    } else {
        weaponObject.current_mod_cost = weaponObject.mods;
    }

    return weaponObject;
};

scifiCreator.prototype.incrementWeaponCount = function( weaponIndex ) {
    weaponIndex = weaponIndex / 1;
    this.selected_weapons[weaponIndex].count++;
    if( this.selected_weapons[weaponIndex].count > 4)
        this.selected_weapons[weaponIndex].count = 4;

};

scifiCreator.prototype.setWeaponCount = function( weaponIndex, newCount ) {
    weaponIndex = weaponIndex / 1;
    if( this.selected_weapons[weaponIndex] ) {
        this.selected_weapons[weaponIndex].count = newCount;
        if( this.selected_weapons[weaponIndex].count < 1)
            this.selected_weapons[weaponIndex].count = 1;
        if( this.selected_weapons[weaponIndex].count > 4)
            this.selected_weapons[weaponIndex].count = 4;
    }
};

scifiCreator.prototype.decrementWeaponCount = function( weaponIndex ) {
    weaponIndex = weaponIndex / 1;
    this.selected_weapons[weaponIndex].count--;
    if( this.selected_weapons[weaponIndex].count < 1)
        this.selected_weapons[weaponIndex].count = 1;
};

scifiCreator.prototype.removeMod = function(modName) {
    for(var removeModCount = 0; removeModCount < this.selectedModifications.length; removeModCount++) {
        if(modName.toLowerCase() == this.selectedModifications[removeModCount].tag.toLowerCase()) {
            this.selectedModifications.splice(removeModCount, 1);
            return;
        }
    }
};

scifiCreator.prototype.hasMod = function(modName) {
    for(var removeModCount = 0; removeModCount < this.selectedModifications.length; removeModCount++) {
        if(modName.toLowerCase() == this.selectedModifications[removeModCount].tag.toLowerCase()) {
            return true;
        }
    }
    return false;
};

scifiCreator.prototype.removeWeapon = function(weaponIndex) {
    weaponIndex = weaponIndex / 1;
    this.selected_weapons.splice(weaponIndex, 1);
};

scifiCreator.prototype.linkWeapon = function(weaponIndex, linkIndex) {
    weaponIndex = weaponIndex / 1;

    this.selected_weapons[weaponIndex].linked = (linkIndex / 1);
};

scifiCreator.prototype.fixWeapon = function(weaponIndex, fixedValue) {
    weaponIndex = weaponIndex / 1;

    this.selected_weapons[weaponIndex].fixed = (fixedValue);
};

scifiCreator.prototype.getLinkedWeapons = function() {
    numberOfLinks = this.getModificationCount("Linked");
    returnVal = Array();
    if( numberOfLinks > 0 ){

        for(var linked_weapon_count = 0; linked_weapon_count < this.selected_weapons.length; linked_weapon_count++) {
            if(this.selected_weapons[linked_weapon_count].linked > 0) {
                // unset any links that were removed...
                if(this.selected_weapons[linked_weapon_count].linked > numberOfLinks)
                    this.selected_weapons[linked_weapon_count].linked  = 0;
                else
                    returnVal[this.selected_weapons[linked_weapon_count].linked] = this.selected_weapons[linked_weapon_count].name;
            }
        }
        while(returnVal.length < numberOfLinks + 1) {
            for(var linked_weapon_count = returnVal.length; linked_weapon_count < numberOfLinks + 1; linked_weapon_count++) {
                returnVal[linked_weapon_count] = "";
            }
        }
    } else {
        // unlink all weapons as all links have disappeared
        for(var linked_weapon_count = 0; linked_weapon_count < this.selected_weapons.length; linked_weapon_count++) {
            this.selected_weapons[linked_weapon_count].linked  = 0;
        }
        returnVal = Array();
    }

    return returnVal;

};

scifiCreator.prototype.getModificationCount = function(modName) {
    var return_value = 0;
    for(var modCount = 0; modCount < this.selectedModifications.length; modCount++) {
        if(modName.toLowerCase() == this.selectedModifications[modCount].tag.toLowerCase())
            return_value++;
    }

    return return_value;
};

scifiCreator.prototype.setSize = function(sizeNumber) {
    for(var sizeCount = 0; sizeCount < this.availableSizes.length; sizeCount++) {
        if(sizeNumber == this.availableSizes[sizeCount].size) {
            this.selectedSize = this.availableSizes[sizeCount];
            this.size = this.availableSizes[sizeCount].size;
            return true;
        }
    }
    return false;
};

scifiCreator.prototype.sortMods = function(a,b) {
    if( typeof(a.calcWeight) == "undefined")
        a.calcWeight = 5;
    if( typeof(b.calcWeight) == "undefined")
        b.calcWeight = 5;

    if (a.calcWeight < b.calcWeight){
        return -1;
    } else {
        if (a.calcWeight > b.calcWeight) {
            return 1;
        } else {
            return a.name > b.name;
        }
    }
};

scifiCreator.prototype.optionActive = function( short_tag ) {
    var value = localStorage.getItem( this.getOptionLSName( short_tag) );
    value = value / 1;
    if( value > 0 )
        return true;
    else
        return false;
};

scifiCreator.prototype.addOption = function(option_tag) {
    var push_it = false;
    for( var opt_c = this.creatorOptions.length - 1; opt_c >= 0; opt_c--) {
        if( this.creatorOptions[opt_c] == option_tag )
            return false;
    }
    this.creatorOptions.push( option_tag ) ;

};

scifiCreator.prototype.removeOption = function(option_tag) {
    for( var opt_c = this.creatorOptions.length - 1; opt_c >= 0; opt_c--) {
        if( this.creatorOptions[opt_c] == option_tag )
            this.creatorOptions.splice( opt_c, 1);

    }
};

scifiCreator.prototype.hasOption = function(option_tag) {
    for( var opt_c = this.creatorOptions.length - 1; opt_c >= 0; opt_c--) {
        if( this.creatorOptions[opt_c] == option_tag )
            return true;
    }
    return false;
};


