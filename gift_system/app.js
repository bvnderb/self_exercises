/* Create a comprehensive gift management system that combines:
            1. Arrow functions for gift processing
            2. Proper scope management with let/const
 
            Requirements:
            - Create an arrow function that adds gifts to a child's list
            - Use block scope to manage different gift categories (toys, books, clothes)
            - Handle cases where:
            * Gift weight exceeds sleigh capacity (>25kg)
            * Child's name is not on the nice list
            * Invalid gift category SWITCH
        */


let toyGifts = [];
let bookGifts = [];
let clothesGifts = [];

const addGift = (childName, giftCategory, giftWeight, giftName) => {
    if (giftWeight > 25) {
        throw new Error(`Gift ${giftName} is too heavy for the sleigh (${giftWeight})`);
    }

    if (!isOnNiceList(childName)) {
        throw new Error(`${childName} has been naughty... shame on you!`);
    }

    switch (giftCategory) {
        case 'toy':
            toyGifts.push({ name: childName, weight: giftWeight, gift: giftName });
            break;
        case 'book':
            bookGifts.push({ name: childName, weight: giftWeight, gift: giftName });
            break;
        case 'clothes':
            clothesGifts.push({ name: childName, weight: giftWeight, gift: giftName });
            break;
        default:
            throw new Error(`Invalid gift category ${giftCategory}`);
    }
}
    // the switch is the same as the following code: 

//     if (giftCategory === 'toy') {
//         // logic to be continued
//     } else if (giftCategory === 'book') {
//         // logic to be continued
//     } else if (giftCategory === 'clothes') {
//         // logic to be continued
//     } else {
//         throw new Error(`Invalid gift category ${giftCategory}`);
//     }

// };

//  helper functions are used across our application in various other functions or scenario's
// this function is hoisted for example
function isOnNiceList(childName) {
    // check if child is on the nice list - maybe in the future with an api...
    return true;
}