import React, { useCallback, useEffect, useState } from 'react'
import getMergeSortAnimations from '../algorithms/MergeSort'
import './visualizer.css'

function Visualizer() {

    const [array, setArray] = useState([]);

    // Fill Array with Random Numbers between 5 and 750
    const resetArray = useCallback(() => {
        let temp = [];
        for (let i = 0; i < 310; i++) {
            temp.push(randomNumber(5, 635))
        }
        setArray(temp)
    }, [])

    // Fill array on startUp
    useEffect(() => { resetArray() }, [resetArray])
    // Generate random Number
    const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

    const mergeSort = () => {
        const bars = document.querySelectorAll('.bar')
        let animations = getMergeSortAnimations(array)
        console.log(bars);
        for (let i = 0; i < animations.length; i++) {
            const isColorChange = i % 3 !== 2
            if (isColorChange) {
                const [leftBar, RightBar] = animations[i]
                const leftBarStyle = bars[leftBar].style
                const rightBarStyle = bars[RightBar].style
                const color = i % 3 === 0 ? 'teal' : 'red'
                setTimeout(() => {
                    leftBarStyle.backgroundColor = color
                    rightBarStyle.backgroundColor = color
                }, i)
            } else {
                const [leftBar, newHeight] = animations[i]
                const leftBarStyle = bars[leftBar].style
                setTimeout(() => {
                    leftBarStyle.height = `${newHeight}px`
                }, i)
            }
        }
    }

    const bubbleSort = () => { }
    const selectionSort = () => { }
    const insertionSort = () => { }
    const quickSort = () => { }


    return (
        <div>
            <div className="button-container">
                <button onClick={resetArray}>Generate array</button>
                <button onClick={mergeSort}>Merge Sort</button>
                <button onClick={bubbleSort}>Bubble Sort</button>
                <button onClick={selectionSort}>Selection Sort</button>
                <button onClick={insertionSort}>Insertion Sort</button>
                <button onClick={quickSort}>Quick Sort</button>
            </div>
            <div className="bar-container">
                {array.map((num, id) => (
                    <div style={{ height: `${num}px` }} className="bar" key={id}></div>
                ))}
            </div>
        </div>
    )
}

export default Visualizer
