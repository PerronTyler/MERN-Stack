function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}

function fiveHeadsSync() {
    return new Promise((resolve, reject) => {
        let headsCount = 0;
        let attempts = 0;
        while (headsCount < 5) {
            attempts++;
            let result = tossCoin();
            console.log(`${result} was flipped`);
            if (result === "heads") {
                headsCount++;
            } else {
                headsCount = 0;
            }
            if (headsCount === 5) {
                resolve(`You reached 5 heads in a row! it only took ${attempts} attempts to flip five "heads"`)
            } else if (attempts > 100) {
                reject("sorry better luck next time")
            }
        }
    })
}

fiveHeadsSync()
    .then(res => console.log(res))
    .catch(err => console.log(err));

