"use strict";
$(document).ready(function() {

    const users = [
        {
            id: 1,
            name: 'ryan',
            email: 'ryan@codeup.com',
            languages: ['clojure', 'javascript'],
            yearsOfExperience: 5
        },
        {
            id: 2,
            name: 'luis',
            email: 'luis@codeup.com',
            languages: ['java', 'scala', 'php'],
            yearsOfExperience: 6
        },
        {
            id: 3,
            name: 'zach',
            email: 'zach@codeup.com',
            languages: ['javascript', 'bash'],
            yearsOfExperience: 7
        },
        {
            id: 4,
            name: 'fernando',
            email: 'fernando@codeup.com',
            languages: ['java', 'php', 'sql'],
            yearsOfExperience: 8
        },
        {
            id: 5,
            name: 'justin',
            email: 'justin@codeup.com',
            languages: ['html', 'css', 'javascript', 'php'],
            yearsOfExperience: 9
        }
    ];

let languageHatTrick = users.filter((language) => language.length >= 3);

let emailList = users.map((email) => `[${email}]`);

//.reduce to get total # yrs exp, use this to find the avg

// let combinedExp = users.filter((lanuages) => languages += languages);
// let avgExp = users.reduce((languages) => (combinedExp / combinedExp.length);
    let combinedExp = users.map((language) => {
        //changes are defined here with this return
        return language += language;
    }, 0);

    // let avgExp = users.map(average)=> {
    //     return combinedExp / combinedExp.length;
    // };

//.reduce to get longest email from users list

let longestEmail = users.reduce((longEmail, user) => `${longEmail}${users.name} has the longest email!`,"");

//.reduce to get the list of user's names in a single string: 'Your instructors are: ...names...

//let instructors = users.filter((name) => {
//  return names;
// }, 'Your instructors are: ';

//BONUS






 // JS IFEE END
});