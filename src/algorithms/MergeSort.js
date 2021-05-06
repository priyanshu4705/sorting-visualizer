const merge = (array, start, mid, end, temp, animations) => {
    let i = start, j = mid + 1, k = start
    while (i <= mid && j <= end) {
        animations.push([i, array[i], 'yellow'])
        animations.push([j, array[j], 'yellow'])
        if (temp[i] <= temp[j]) {
            animations.push([i, array[i], 'red'])
            animations.push([k, temp[i], 'red'])
            array[k++] = temp[i++]
        } else {
            animations.push([k, temp[j], 'red'])
            array[k++] = temp[j++]
        }
    }

    while (i <= mid) {
        animations.push([i, array[i], 'yellow'])
        animations.push([k, temp[i], 'red'])
        array[k++] = temp[i++]
    }
    while (j <= end) {
        animations.push([j, array[j], 'yellow'])
        animations.push([k, temp[j], 'red'])
        array[k++] = temp[j++]
    }
}

const mergeSortHelper = (array, start, end, temp, animations) => {
    if (start === end) return
    const mid = Math.floor((start + end) / 2)
    mergeSortHelper(temp, start, mid, array, animations)
    mergeSortHelper(temp, mid + 1, end, array, animations)
    merge(array, start, mid, end, temp, animations)
}

const getMergeSortAnimations = (array) => {
    let animations = []
    if (array.length <= 1) return array
    let temp = array.slice()
    mergeSortHelper(array, 0, array.length - 1, temp, animations)
    return animations
}

export default getMergeSortAnimations