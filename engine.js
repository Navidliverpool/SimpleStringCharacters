// I wrote this function and it passes all tests.
function solve(s) {
    //..
    console.log("s is: ", s)
    let arr = Array.from(s);
    console.log("arr is: ", arr)
    if (arr.length == 0) {
        return [0, 0, 0, 0];
    }
    let numbers = 0;
    let lowercase = 0;
    let uppercase = 0;
    let specialCharacters = 0;
    let toNum;
    var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    for (let i = 0; i < arr.length; i++) {
        toNum = Number(arr[i])
        if (toNum || arr[i] == 0) {
            console.log("nums are: ", arr[i])
            numbers++;
        } else if (format.test(arr[i])) {
            console.log("specialCharacters are: ", arr[i])
            specialCharacters++;
        } else if (arr[i] == arr[i].toUpperCase()) {
            console.log("uppercase are: ", arr[i])
            uppercase++;
        } else {
            console.log("lowercase are: ", arr[i])
            lowercase++;
        }
    }
    return [uppercase, lowercase, numbers, specialCharacters];
}

// this code is from other people.
const solve = x => {
    let u = x.match(/[A-Z]/g) || []
    let d = x.match(/[a-z]/g) || []
    let n = x.match(/[0-9]/g) || []
    let s = x.match(/[^A-Z0-9]/gi) || []
    return [u.length, d.length, n.length, s.length]
}

// this code is from other people.
const solve = (string) => (
    Object.values([...string].reduce((acc, char) => {
        if (/[A-Z]/.test(char)) {
            acc.upper++;
        } else if (/[a-z]/.test(char)) {
            acc.lower++;
        } else if (/[0-9]/.test(char)) {
            acc.number++;
        } else {
            acc.other++;
        }
        return acc;
    }, { upper: 0, lower: 0, number: 0, other: 0 }))
);

// this code is from other people.
const solve = (s) => {
    let result = [0, 0, 0, 0];
    for (let i = 0; i < s.length; i += 1) {
        if (s[i].toLowerCase() > s[i]) {
            result[0] += 1;
        } else if (s[i].toUpperCase() < s[i]) {
            result[1] += 1;
        } else if (s[i] >= 0 && s[i] <= 9) {
            result[2] += 1;
        } else {
            result[3] += 1;
        }
    }
    return result;
};

// this code is from other people.
function solve(str) {
    count_array = [0, 0, 0, 0];
    for (var i = 0, len = str.length; i < len; i++) {
        if (str.charAt(i) >= 'A' && str.charAt(i) <= 'Z')
            count_array[0] = count_array[0] + 1;
        else if (str.charAt(i) >= 'a' && str.charAt(i) <= 'z')
            count_array[1] = count_array[1] + 1;
        else if (str.charAt(i) >= '0' && str.charAt(i) <= '9')
            count_array[2] = count_array[2] + 1;
        else
            count_array[3] = count_array[3] + 1;
    }
    return count_array;
}