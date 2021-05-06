const merge = (array, start, mid, end, temp, animations) => {
    let i = start, j = mid + 1, k = start
    while (i <= mid && j <= end) {
        // select the bars
        animations.push([i, j])
        // unselect the bars
        animations.push([i, j])
        if (temp[i] <= temp[j]) {
            // overwrite original array
            animations.push([k, temp[i]])
            array[k++] = temp[i++]
        } else {
            animations.push([k, temp[j]])
            array[k++] = temp[j++]
        }
    }

    while (i <= mid) {
        // select the bars
        animations.push([i, i])
        // unselect the bars
        animations.push([i, i])
        // overwrite original array
        animations.push([k, temp[i]])
        array[k++] = temp[i++]
    }
    while (j <= end) {
        // select the bars
        animations.push([j, j])
        // unselect the bars
        animations.push([j, j])
        // overwrite original array
        animations.push([k, temp[j]])
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