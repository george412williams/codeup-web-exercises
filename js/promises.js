"use strict";


var githubAPI = fetch(`https://api.github.com/users/your-github-username`, {
//'https://api.github.com/users/your-github-username'
    headers: {
        'Authorization': `token ${GITHUB_API_KEY}`
        //make sure key is added as a string
    }
});

//console.log(githubAPI);

githubAPI.then((response) => response.json()).catch((error) =>{
    console.log(error)
})


// function lastCommitDate() {
//     var githubAPI = fetch(`https://api.github.com/users/${username}/events`, {
//         headers: {
//             'Authorization': `token ${GITHUB_API_KEY}`
//         }
//     })
//
// };

//find type in the array of events
//organized from older to most recent, want to look at type of property of each event
//consider how you might filter out certain events
//look for type property of commit event or push event
//new Date()
//once date, look at date obj in JS and toDateString()

// function wait(num) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if ()
//         })
//     })
// }


    // .then(commitDateArray => commitDateArray.forEach(commitDate => commitDate.))
        //remember, this can be listed in key.js so they are not accessible through this file
    //in html, link js/keys.js if token is not on this page and refer: `token ${TOKEN_NAME}`

// githubAPI.then((response) => response.json())
//     .then(jsonResponse => (jsonResponse.results))
//     .then(commitLast => commitLast.get(commit))
//     .catch(error => console.log(error));
//

//BONUS









