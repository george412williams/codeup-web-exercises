(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray = planetsString.split('|');

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    var planetsStringBreaks = planetsArray.join('<br>');
    // to alphabetize a mixed type list (...using html elements?)

// =====BONUS=====

    //pseudo:
    //function that makes new string in a ul from an array
    //var planetsStringList = '<ul>' + planetsArray.join('<ul>','<li>','</li>','</ul>');

    //function planetsStringList(planet) {
    //     for (var i = 0; i < planet.planetsArray.length; i++) {
    //         var list = planet.planetsArray[i];
    //     }
    //}

    //===try a forEach?====

    //planetsArray.forEach(function (planet) {
    //     var ul = document.createElement('ul');
    //     var li = document.createElement('li');
    //     // looking up the following line for meaning
    //     var text = document.createTextNode(planet);
    //     li.appendChild(text);
    //     document.getElementById("planetsListArray").appendChild(li);
    //});

    //====== try w loop?=====

    for (i = 0; i < planetsArray.length; i++) {
        var li = document.createElement("li");
        var text = document.createTextNode(planetsArray[i]);
        li.appendChild(text);
        document.getElementById("myUl").appendChild(li);
    }


})();