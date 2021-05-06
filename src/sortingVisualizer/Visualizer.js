import React, { useCallback, useEffect, useState } from 'react'
import './visualizer.css'

function Visualizer() {

    const [array, setArray] = useState([]);

    // Fill Array with Random Numbers between 5 and 750
    const resetArray = useCallback(() => {
        let temp = [];
        for (let i = 0; i < 310; i++) {
            temp.push(randomNumber(20, 635))
        }
        // console.log(temp);
        setArray(temp)
        testArray(temp)
    }, [])

    // perform different test on array
    const testArray = (arr) => {
        let found = 0
        for (let i in arr) {
            if (i === 0) {
                found = 1
                break;
            }
        }
        console.log(found === 0 ? 'safe array' : 'found 0')
    }

    // Fill array on startUp
    useEffect(() => { resetArray() }, [resetArray])
    // Generate random Number
    const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1))

    const mergeSort = () => { console.log('Perform merge sort') }
    const bubbleSort = () => { }
    const selectionSort = () => { }
    const insertionSort = () => { }
    const quickSort = () => {}


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
