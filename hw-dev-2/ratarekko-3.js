function groupAnagrams(words) {
    const groupedAnagrams = new Map();

    for (const word of words) {
        const sortedWord = word.split('').sort().join('');
        if (groupedAnagrams.has(sortedWord)) {
            groupedAnagrams.get(sortedWord).push(word);
        } else {
            groupedAnagrams.set(sortedWord, [word]);
        }
    }

    return Array.from(groupedAnagrams.values());
}

console.log(groupAnagrams(["tsar", "rat", "tar", "star", "tars", "cheese"]));