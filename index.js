var input = "ABCDCBA";

function isPalindrome(string) {
    var mid = Math.floor(string.length/2);

    for(var i=0;i<mid;i++) {
        if(string[i] !== string[string.length - 1 - i]) {
            return false;
        }
    }

    return true;
}

function isPalindromeAnother(string) {
    return string.toLowerCase() === string.toLowerCase().split("").reverse().join("");
}

console.log(isPalindrome(input));
console.log(isPalindromeAnother(input));