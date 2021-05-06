const selectionSort = (arr, animations) => {
    for (let i = 0; i < arr.length; i++){
        let pos = i
        for (let j = i + 1; j < arr.length; j++){
            if (arr[j] < arr[pos]) {
                pos = j
            }
        }

        let temp = arr[i]
        arr[i] = arr[pos]
        arr[pos] = temp
    }
}

const getSelectionSortAnimations = (array) => {
    let animations = []
    if (array.length <= 1) return array
    selectionSort(array,animations)
    return animations
}

export default getSelectionSortAnimations