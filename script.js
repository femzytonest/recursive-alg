function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return `${year} is a leap year.`;
    } else {
        return `${year} is not a leap year.`;
    }
}

console.log(isLeapYear(2024));  // Example output: 2024 is a leap year.
console.log(isLeapYear(1900));  // Example output: 1900 is not a leap year.
console.log(isLeapYear(2000));  // Example output: 2000 is a leap year.



function ticketPrice(age) {
    if (age <= 12) {
        return "Ticket Price: $10 (Children)";
    } else if (age >= 13 && age <= 17) {
        return "Ticket Price: $15 (Teenagers)";
    } else if (age >= 18) {
        return "Ticket Price: $20 (Adults)";
    } else {
        return "Invalid age.";
    }
}

console.log(ticketPrice(10));  // Example output: Ticket Price: $10 (Children)
console.log(ticketPrice(15));  // Example output: Ticket Price: $15 (Teenagers)
console.log(ticketPrice(25));  // Example output: Ticket Price: $20 (Adults)


function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

console.log(fibonacci(6));  // Example output: 8 (0, 1, 1, 2, 3, 5, 8)
console.log(fibonacci(10)); // Example output: 55


function isPalindrome(str) {
    str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase(); // Remove non-alphanumeric characters and convert to lowercase
    if (str.length <= 1) {
        return true;  // Base case: a string of length 1 or 0 is always a palindrome
    } else {
        if (str[0] === str[str.length - 1]) {
            return isPalindrome(str.slice(1, str.length - 1)); // Recurse with the string minus the first and last characters
        } else {
            return false;
        }
    }
}

console.log(isPalindrome("A man a plan a canal Panama"));  // Example output: true
console.log(isPalindrome("Hello"));  // Example output: false
