export const formatPipeString = function(inputString) {
    if (typeof inputString !== 'string') return [];

    // 1. split('|') divides the string at every pipe character.
    // 2. map(item => item.trim()) removes whitespace from both sides of each word.
    return inputString.split('|').map(item => item.trim());
};

