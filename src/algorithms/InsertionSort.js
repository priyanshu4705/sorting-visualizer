// Made with 💜 by Priyanshu Srivastava
const insertionSort = (arr, animations) => {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        animations.push([i, arr[i], 'yellow'])
        let key = arr[i]
        let j = i - 1
        while (j >= 0 && arr[j] > key) {
            animations.push([j, arr[j], 'red'])
            animations.push([j + 1, arr[j + 1], 'red'])
            arr[j + 1] = arr[j]
            animations.push([j, arr[j], 'red'])
            animations.push([j + 1, arr[j + 1], 'red'])
            animations.push([j, arr[j], 'teal'])
            if (j === (i - 1))
                animations.push([j + 1, arr[j + 1], 'yellow'])
            else
                animations.push([j + 1, arr[j + 1], 'teal'])
            j = j - 1
        }
        arr[j + 1] = key
    }

    for (let x = len-1; x >= 0; x--) {
        animations.push([x, arr[x], 'red'])
    }
}

const getInsertionSortAnimations = (array) => {
    let animations = []
    if (array.length <= 1) return array
    insertionSort(array, animations)
    return animations
}

export default getInsertionSortAnimations