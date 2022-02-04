// Problem 1
function anaToVori(ana) {
    const vori = ana / 16;
    return vori;
}
let result1 = anaToVori(32);
// console.log(result1);

// Problem 2
function pandaCost(singara, samosa, jilapi) {

    if (singara < 0 || samosa < 0 || jilapi < 0) {
        return 'Please Sir/Mam, Give me a valid quantity. It is a Nagative number';
    }
    else if (typeof singara == 'string' || typeof samosa == 'string' || typeof jilapi == 'string') {
        return 'Please Sir/Mam, Give me a valid quantity. It is a string';
    }
    else if (typeof singara == 'boolean' || typeof samosa == 'boolean' || typeof jilapi == 'boolean') {
        return 'Please Sir/Mam, Give me a valid quantity. It is a boolean';
    }

    let perSingara = 7;
    let perSamosa = 10;
    let perJilapi = 15;

    let singaraCost = singara * perSingara;
    let samosaCost = samosa * perSamosa;
    let jilapiCost = jilapi * perJilapi;

    let totalCost = singaraCost + samosaCost + jilapiCost;
    return totalCost;
}

let result2 = pandaCost(1, 1, 1);
// console.log(result2);

// Problem 3
function picnicBudget(person) {
    if (person < 0 || typeof person == 'string' || typeof person == 'boolean') {
        return 'Please Sir/Mam, Give me a valid information about person.';
    }
    

    if (person <= 100) {
        let firstGroupCost = person * 5000;
        return firstGroupCost;
    }
    else if (person <= 200) {
        let firstGroupCost = 100 * 5000;
        let restPerson = person - 100;
        let secondGroupCost = restPerson * 4000;
        let result1 = firstGroupCost + secondGroupCost;
        return result1;
    }
    else {
        let firstGroupCost = 100 * 5000;
        let secondGroupCost = 100 * 4000;
        let restPerson2 = person - 200;
        let thirdGroupCost = restPerson2 * 3000;
        let result2 = firstGroupCost + secondGroupCost + thirdGroupCost;
        return result2;
    }
}

let result3 = picnicBudget(50);
// console.log(result3);

// problem 4
function oddFriend(friends) {
    let oddBro = '';
    for (const friend of friends) {
        if (friend.length % 2 == 1) {
            oddBro = friend;
            break;
        }
    }
    return oddBro;
}

let array = ['amlu', 'dumulu', 'ramulu', 'kamulu', 'tamlu', 'pamlulla', 'borolu'];
let result4 = oddFriend(array);
// console.log(result4)