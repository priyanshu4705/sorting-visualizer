const bubbleSort = (arr, animations) => {
    let flag = false;
    for (let i = 0; i < arr.length; i++) {
        flag = false
        for (let j = 0; j < arr.length; j++) {
            animations.push([j, arr[j], 'red'])
            if (arr[j] > arr[j + 1]) {
                animations.push([j, arr[j], 'yellow'])
                animations.push([j+1, arr[j+1], 'yellow'])
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
                flag = true
                // updates height
                animations.push([j, arr[j], 'teal'])
                animations.push([j + 1, arr[j + 1], 'teal'])
            }
        }
        if (!flag)
        break
    }
}

const getBubbleSortAnimations = (array) => {
    let animations = []
    if (array.length <= 1) return array
    bubbleSort(array, animations)
    return animations
}

export default getBubbleSortAnimations