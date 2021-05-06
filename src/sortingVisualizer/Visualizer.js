import React, { useCallback, useEffect, useState } from 'react'
import getBubbleSortAnimations from '../algorithms/BubbleSort';
import getInsertionSortAnimations from '../algorithms/InsertionSort';
import getMergeSortAnimations from '../algorithms/MergeSort'
import getSelectionSortAnimations from '../algorithms/SelectionSort';
import animator from './Animator'
import './visualizer.css'

function Visualizer() {
    // Made with 💜 by Priyanshu Srivastava
    const [array, setArray] = useState([]);
    const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

    const resetArray = useCallback(() => {
        let temp = [];
        for (let i = 0; i < 200; i++)
            temp.push(randomNumber(5, 625))

        let inBar = document.querySelectorAll('.bar')
        for (let i = 0; i < inBar.length; i++)
            inBar[i].style.backgroundColor = 'teal'

        setArray(temp)
    }, [])

    useEffect(() => { resetArray() }, [resetArray])

    const mergeSort = () => animator(getMergeSortAnimations(array))
    const selectionSort = () => animator(getSelectionSortAnimations(array))
    const bubbleSort = () => animator(getBubbleSortAnimations(array))
    const insertionSort = () => animator(getInsertionSortAnimations(array))
    const quickSort = () => { }


    return (
        <div>
            <div className="button-container">
                <button onClick={resetArray}>Generate array</button>
                <button onClick={bubbleSort}>Bubble Sort</button>
                <button onClick={selectionSort}>Selection Sort</button>
                <button onClick={insertionSort}>Insertion Sort</button>
                <button onClick={mergeSort}>Merge Sort</button>
                <button disabled onClick={quickSort}>Quick Sort</button>
                <p>Made with 💜 by Priyanshu Srivastava</p>
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
