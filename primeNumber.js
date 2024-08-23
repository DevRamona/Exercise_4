const arrayDepth = (array) => {
    if(!Array.isArray(array)) return 0
    return 1 + Math.max(...array.map(arrayDepth))
}

const flattenedArray = (array) => array.flat(arrayDepth(array -1 ))