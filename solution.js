// this is an algorithm that solves the crystal ball problem


//This function finds the critical height that the ball will break
function findCriticalHeight(totalHeight, crystalBallCount) {
    let start = 1; // The lowest possible height where the ball will break
    let end = totalHeight; // The highest possible height

    while (start <= end) {
        const mid = Math.floor((start + end) / 2); // Calculate the midpoint

        // Simulate dropping the balls from the midpoint
        if (simulateDrop(mid, crystalBallCount)) {
            // Ball broke, so the critical height is below or at mid
            end = mid - 1;
        } else {
            // Ball didn't break, so the critical height is above mid
            start = mid + 1;
        }
    }

    return start; // The critical height where the ball first breaks
}

function simulateDrop(height, crystalBallCount) {
    // Simulate dropping the crystal balls and determine if they break
    // For simplicity, you can use a random threshold here
    const threshold = Math.random() * height;
    return threshold <= height / crystalBallCount;
}

const totalHeight = 100; // Total height from which the balls are dropped
const crystalBallCount = 2; // Number of crystal balls available

const criticalHeight = findCriticalHeight(totalHeight, crystalBallCount);
console.log(`The critical height is ${criticalHeight}`);
