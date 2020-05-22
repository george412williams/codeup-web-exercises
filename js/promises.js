"use strict";

var githubAPI = fetch('https://api.github.com', {
    headers: {
        'Authorization': `token ${GITHUB_API_KEY}`
        //make sure key is added as a string
    }
});
        //remember, this can be listed in key.js so they are not accessible through this file
    //in html, link js/keys.js if token is not on this page and refer: `token ${TOKEN_NAME}`

githubAPI.then((response) => response.json())
    .then(jsonResponse => (jsonResponse.results))
    .then(commitLast => commitLast.get(commit))
    .catch(error => console.log(error));

// function wait(num) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if ()
//         })
//     })
// }

//BONUS









