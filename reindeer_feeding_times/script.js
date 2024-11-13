// Write an ES6 arrow function to schedule reindeer feeding times
// The function should take the number of reindeer and return an array of feeding time

const feedReindeer = numReindeer => {
    const feedingTimes = [];
    for (let i = 0; i < numReindeer; i++) {
        feedingTimes.push(`Reindeer #${i+1} feeding time: 8am`);
    }
    return feedingTimes;
};

console.log(feedReindeer(9));