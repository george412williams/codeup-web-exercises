"use strict";


var githubAPI = fetch(`https://api.github.com/users/your-github-username`, {
//'https://api.github.com/users/your-github-username'
    headers: {
        'Authorization': `token ${GITHUB_API_KEY}`
        //make sure key is added as a string
    }
});

//console.log(githubAPI);



// function lastCommitDate(userName) {
//     let githubAPI = fetch(`https://api.github.com/users/${username}/events`, {
//         headers: {
//             'Authorization': `token ${GITHUB_API_KEY}`
//         }
//     })
//     githubAPI.then((response) => response.json()).catch((error) =>{
//         console.log(error)
//     })
//
// };
//
// lastCommitDate(userName, githubAPI).then(console.log);

    // .then(commitDateArray => commitDateArray.forEach(commitDate => commitDate.))
        //remember, this can be listed in key.js so they are not accessible through this file
    //in html, link js/keys.js if token is not on this page and refer: `token ${TOKEN_NAME}`

// githubAPI.then((response) => response.json())
//     .then(jsonResponse => (jsonResponse.results))
//     .then(commitLast => commitLast.get(commit))
//     .catch(error => console.log(error));
//
//find type in the array of events
//organized from older to most recent, want to look at type of property of each event
//consider how you might filter out certain events
//look for type property of commit event or push event
//new Date()
//once date, look at date obj in JS and toDateString()

//============Instructor walkthrough=============

//github personal access token copied; first check gitignore to double check keys.js


function lastCommitDate(userName) {
    let githubAPI = fetch(`https://api.github.com/users/${username}/events`, {
        headers: {
            'Authorization': `token ${GITHUB_API_KEY}`
        }
    }).then(response => response.json())
        // want to filter thru PushEvents only
        .then(events => {
            return events.filter(event => event.type === "PushEvent")[0].created_at;
                //check the dot notation an location to be sure
                    //returns array of push events, note index position
                        //find created_at and see that the first one is most recent, [0]
                        //logs a date, needs formatting, doDateString
            //the return of this fx is still a promise, so call all info first, add .then to format info (in console.log)
        });
}
lastCommitDate('george412williams').then(date => {
    console.log(new Date(date).toDateString());
    //logs date string properly
});
//events is the array of objs we have, second chain refers to promise chain already

//PART 2

function wait(seconds) {
    seconds = seconds * 1000;
    //returns a promise
    return new Promise(resolve =>  {
        //could create a custom message for the resolve
        setTimeout(() => {
            if (seconds > 1000){
                console.log("You'll see this after " + seconds/1000 + " seconds");
            }else {
                console.log("You'll see this after " + seconds/1000 + " second");
            }
        }, seconds)
    });
}

wait(1);
wait(2);
wait(3);
//last conditional bit is for a custom message

//==============================================

//BONUS

// let wait = num => {
//     num = num * 1000;
//         return ...
// function wait(num) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if ()
//         })
//     })
// }
// }








