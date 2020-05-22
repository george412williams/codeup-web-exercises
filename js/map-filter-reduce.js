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

let languageHatTrick = users.filter(user => user.languages.length >= 3);

let emailList = users.map((user) => `[${email}]`);
// let userEmails = user.map(user =>
    //return user.email);

//.reduce to get total # yrs exp, use this to find the avg

// let combinedExp = users.filter((lanuages) => languages += languages);
// let avgExp = users.reduce((languages) => (combinedExp / combinedExp.length);
    let combinedExp = users.map((language) => {
        //changes are defined here with this return
        return language += language;
    }, 0);
    let avgExp = combinedExp / users.length;
    //let ttlExp = user.reduce((total, user) => {
        //return total + user.yearsOfExperience;
    //}, 0};        //logs 35
    //let avgExp = ttlExp/user.length;

    // let avgExp = users.map(average)=> {
    //     return combinedExp / combinedExp.length;
    // };

//.reduce to get longest email from users list

let longestEmail = users.reduce((longEmail, user) => `${longEmail}${users.name} has the longest email!`,"");
// let longestEmail = users.reduce((longestEmail, user) => {
    // if (longestEmail.length > user.email.length) {
    //  return longestEmail;
    //}else{
    //}return user.email; }, "");    //accurate, , "") is not necessary bc not trying to accum a value, since want want either or value, its not an addendum, but recommends

//.reduce to get the list of user's names in a single string: 'Your instructors are: ...names...

    //let instructorsString = users.reduce((finalString, instructor) => `${finalString}${instructor.name.substring(0,1).toUpperCase()}${instructor.name.substring(1,instructor.name.length).toLowerCase()} `,"Your instructors are: ");
    //need comma sep and a period ending
    //let instructorsString = users.reduce((finalString, instructor, index)...
    //if(index < user.length - 1) {   //checking to see if index is not at end
    // return `${finalString}${instructor.name.substring(0,1).toUpperCase()}${instructor.name.substring(1,instructor.name.length).toLowerCase()} `
    // }else{ return similar string
    // => `${finalString}${instructor.name.substring(0,1).toUpperCase()}${instructor.name.substring(1,instructor.name.length).toLowerCase()} `,"Your instructors are: ");


//let instructors = users.filter((name) => {
//  return names;
// }, 'Your instructors are: ';

//BONUS

//instructor bonus  first is a pseudo talkthru

//jays first, this version is broken, fix it

// let uniqeLangs = users.map(user => user.languages.map(language => language.split(",")
//     .join(",")).join(",").split(",").sort().reduce((langList, lang) => {
//         const length = langList.length;
//             if (length ===) || langList[length - 1] != lang) {
//                 langList.push(lang);
//     } return langList;
// }, []);

    // let unigueLangs = users.reduce((langList, user) => {
    //     for let lang of user.languages) {
    //         if(!langList.includes(lang)) {
    //             langList.push(lang);
    //         }
    // }return langList
    // }, []);

//another

    //uses Set, Java, takes dupes and removes them, then array.from and turns it back into an array

    //....lost me on this one Go to Github
    //he admits to showing off here
// let uniqueLangsQuick = Array.from(set)users.reduce((langs, user) =>
//     for (let lang of user.languages)
// {
//     langs.push(lang);
//
// });
// }, [])));




 // JS IFEE END
});