function makeArray(firstArray, secondArray, maxLength) {
    const lastArray = firstArray.concat(secondArray);
    if (maxLength > 0) {
        return lastArray.slice(0, maxLength);
    } else {
        return [];
    }
}
