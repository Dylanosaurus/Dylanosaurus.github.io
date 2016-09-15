function tellStory(){
    //gather form elements
    var txtNounA = document.getElementById("txtNounA");
    var txtAdjA = document.getElementById("txtAdjA");
    var txtTimeA = document.getElementById("txtTimeA");
    var txtVerbA = document.getElementById("txtVerbA");
    var txtClothingA = document.getElementById("txtClothingA");
    var txtLiquidA = document.getElementById("txtLiquidA");
    var txtVerbB = document.getElementById("txtVerbB");
    var txtNounB = document.getElementById("txtNounB");
    var txtNumberA = document.getElementById("txtNumberA");
    var txtAdjB = document.getElementById("txtAdjB");
    var txtNumberB = document.getElementById("txtNumberB");
    var txtVehicleA = document.getElementById("txtVehicleA");
    var txtExclamA = document.getElementById("txtExclamA");
    var txtMoneyA = document.getElementById("txtMoneyA");
    var txtVerbingA = document.getElementById("txtVerbingA");
    var txtNounC = document.getElementById("txtNounC");
    var txtAdjC = document.getElementById("txtAdjC");
    var txtNounD = document.getElementById("txtNounD");
    var output = document.getElementById("output");

    //create variables for input        
    var nouna = txtNounA.value;
    var adja = txtAdjA.value;
    var timea = txtTimeA.value;
    var verba = txtVerbA.value;
    var clothinga = txtClothingA.value;
    var liquida = txtLiquidA.value;
    var verbb = txtVerbB.value;

    var nounb = txtNounB.value;
    var numbera = txtNumberA.value;
    var adjb = txtAdjB.value;
    var numberb = txtNumberB.value;
    var vehiclea = txtVehicleA.value;
    var exclama = txtExclamA.value;
    var moneya = txtMoneyA.value;
    var verbinga = txtVerbingA.value;
    var nounc = txtNounC.value;
    var adjc = txtAdjC.value;
    var nound = txtNounD.value;

    //write the story
    var story = "Holy " + nouna + "! Work is " + adja + "! First of all, I got up really late (";
    story += timea + "), so I didn't have time to " + verba + ". Then, I had to rush to work, not wearing any/a " + clothinga;
    story += ". My stink'n scalding hot " + liquida + " spilled all over my lap as I tried to " + verbb + " while driving the car. ";
    story += "I turned on " + nounb + " avenue, but I should have turned " + numbera + " exit(s) ago. ";
    story += "Boy was I " + adjb + "! After making about " + numberb + " more mistakes, I finally pulled into the parking lot. ";
    story += "I found an open space, but I overshot it and slammed the guy next to me’s " + vehiclea + ', killing the people inside. “';
    story += exclama + '“. I got charged ' + moneya + " for " + verbinga + " my boss and his three kids. I will never forget my first day working at ";
    story += nounc + "‘s " + adjc + " " + nound + " shop.";
    //copy story to output
    output.innerHTML = story;
} // end tellStory
