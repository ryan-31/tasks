/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length == 0) {
        return [];
    } else if (numbers.length == 1) {
        return [numbers[0], numbers[0]];
    } else {
        return [numbers[0], numbers[numbers.length - 1]];
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((num: number): number => num * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const ints = numbers.map((number: string): number =>
        isNaN(parseInt(number)) ? 0 : parseInt(number)
    );
    return ints;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const removedDollars = amounts.map((amount: string): number => {
        const removed = amount.replace("$", "");
        return isNaN(parseInt(removed)) ? 0 : parseInt(removed);
    });
    return removedDollars;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const shouting = messages.map((message: string) => {
        const lastChar = message[message.length - 1];
        if (lastChar === "!") {
            return message.toUpperCase();
        } else if (lastChar !== "?") {
            return message;
        } else {
            return null;
        }
    });
    const filteredShouting = shouting.filter((word) => {
        return word !== null;
    }) as string[];
    return filteredShouting;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    let ctr = 0;
    const newWords = [...words];
    newWords.map((word: string) => {
        if (word.length < 4) {
            ctr += 1;
        }
    });
    return ctr;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const rgb = ["red", "green", "blue"];
    let status = true;
    if (colors.length === 0) {
        return true;
    }
    colors.map((color: string) => {
        if (!rgb.includes(color)) {
            status = false;
        }
    });
    return status;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    let sum = 0;
    const nums = [...addends];
    if (nums.length === 0) {
        return "0=0";
    }
    const strNums = nums.join("+");
    nums.map((num: number) => {
        sum += num;
    });

    return `${sum}=${strNums}`;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    let sum = 0;
    const nums = [...values];
    let negInd = -1;

    nums.map((num: number) => {
        if (num < 0 && negInd === -1) {
            negInd = nums.indexOf(num);
            // console.log(negInd);
        }
    });

    if (negInd === -1) {
        nums.map((nums: number) => (sum += nums));
        return [...nums, sum];
    } else {
        nums.slice(0, negInd).map((nums: number) => (sum += nums));
        // console.log([
        //     ...nums.slice(0, negInd + 1),
        //     sum,
        //     ...nums.slice(negInd + 1)
        // ]);
        return [...nums.slice(0, negInd + 1), sum, ...nums.slice(negInd + 1)];
    }
}
