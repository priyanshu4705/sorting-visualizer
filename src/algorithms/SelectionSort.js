// Made with 💜 by Priyanshu Srivastava
const selectionSort = (arr, animations) => {
    for (let i = 0; i < arr.length; i++) {
        let pos = i
        animations.push([i, arr[i], 'yellow'])
        for (let j = i + 1; j < arr.length; j++) {
            animations.push([j, arr[j], 'yellow'])
            if (arr[j] < arr[pos]) {
                if (pos !== i)
                    animations.push([j, arr[j], 'teal'])
                pos = j
                animations.push([pos, arr[pos], 'red'])
            } else {
                animations.push([j, arr[j], 'teal'])
            }
        }

        if (pos !== i) {
            let temp = arr[i]
            arr[i] = arr[pos]
            arr[pos] = temp
            animations.push([pos, arr[pos], 'red'])
            animations.push([i, arr[i], 'red'])
            animations.push([pos, arr[pos], 'teal'])
        }
        animations.push([i, arr[i], 'red'])
    }
}

const getSelectionSortAnimations = (array) => {
    let animations = []
    if (array.length <= 1) return array
    selectionSort(array, animations)
    return animations
}

export default getSelectionSortAnimations