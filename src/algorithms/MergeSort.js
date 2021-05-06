const merge = (arr, start, mid, end) => {
    let res = []
    let i = start, j = mid + 1

    while (i <= mid && j <= end) {
        if (arr[i] <= arr[j])
            res.push(arr[i])
        else
            res.push(arr[j])
    }

    while (i <= mid)
        res.push(arr[i])

    while (j <= end)
        res.push(arr[j])
    
    arr = res.slice()
}

const MergeSort = (array, start, end) => {
    if (start < end) {
        let mid = Math.floor((start + end) / 2)
        MergeSort(array, start, mid)
        MergeSort(array, mid + 1, end)
        merge(array, start, mid, end)
    }
}

let temp = [];
const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1))
for (let i = 0; i < 50; i++) {
    temp.push(randomNumber(20, 635))
}
console.log({ 'before': temp });
MergeSort(temp, 0, temp.length)
console.log({ 'after': temp });

// export default MergeSort