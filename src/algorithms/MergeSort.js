const merge = (left, right) => {
    let res = []
    while (left.length && right.length) {
        if (left[0] <= right[0])
            res.push(left.shift())
        else
            res.push(right.shift())
    }

    return [ ...res, ...left, ...right]
}

const MergeSort = (array) => {
    if (array.length < 2) return array
    const mid = Math.floor(array.length / 2)
    const left = array.splice(0, mid)
    return merge(MergeSort(left), MergeSort(array))
}

export default MergeSort