import React, { useCallback, useEffect, useState } from 'react'
import getMergeSortAnimations from '../algorithms/MergeSort'
import getSelectionSortAnimations from '../algorithms/SelectionSort';
import animator from './Animator'
import './visualizer.css'

function Visualizer() {

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
    const bubbleSort = () => { }
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
