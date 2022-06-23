//This algorithm will only work for numbers >= 0. There is no way to validate this condition, but it is required.


//Rules:
    //Players take turns removing 5, 3, or 2 stones from the pile until one is no longer able to remove those number of stones.
    //That person loses. canWin(stones) calculates recursively whether the active player can win the game or not, assuming all parties
    //play perfectly.

const canWin = stones => {
    //if subtracting 5 or 3 or 2 would lead to a false, can win
    //else, can't

    //Thought process:
        //If we are able to take away stones such that the new number is a no-win scenario, we can win

        //Calculate how many stones there would be left if 5, 3, or 2 were taken away respectively
        //Base case is that the current number of stones is 0 or 1 (can't win)
        //If stones are negative, the situation is a winnable one (could take a number leading to 0 or 1 for the other player)
        //Call function recursively on fives, threes, and twos. If any of them lead to a no-win scenario, the current scenario is winnable

    const fives = stones - 5;
    const threes = stones - 3;
    const twos = stones - 2;

    if(stones === 0 || stones === 1) {
        return false;
    } else if (stones < 0) {
        return true;
    } else {
        return (!canWin(fives) || !canWin(threes) || !canWin(twos));
    }
}

console.log(canWin(1))
console.log(canWin(2))
console.log(canWin(3))
console.log(canWin(4))
console.log(canWin(5))
console.log(canWin(6))
console.log(canWin(7))
console.log(canWin(8))
console.log(canWin(9))
console.log(canWin(10))
// console.log(canWin(11))
// console.log(canWin(12))
// console.log(canWin(13))
// console.log(canWin(14))
// console.log(canWin(15))
// console.log(canWin(16))
// console.log(canWin(17))