import { useState } from "react";

const INITIAL_ARRAY = [1, 2, 3];
const INPUT_VALUE = 4;
const NEW_ARRAY = [4, 5, 6];
const NEW_ELEMENT = 9;

function ArrayComponent() {
    const [myArray, setMyArray] = useState(INITIAL_ARRAY);

    const updateArrayWithNewArray = () => {
        setMyArray(NEW_ARRAY);
    };
    const addInputValue = () => {
        setMyArray([...myArray, INPUT_VALUE]);
    };
    const replaceSecondElement = () => {
        if (myArray.length >= 2) {
            const newArray = [...myArray];
            newArray[1] = NEW_ELEMENT;
            setMyArray(newArray);
        }
    };

    const filterNumbers = () => {
        const filteredArray = myArray.filter((number) => number <= 3);
        setMyArray(filteredArray);
    };
    const resetArray = () => {
        setMyArray(INITIAL_ARRAY);
    };
    const removeSecondNumber = () => {
        if (myArray.length >= 2) {
            const newArray = [...myArray];
            newArray.splice(1, 1);
            setMyArray(newArray);
        }
    };
    const clearArray = () => {
        setMyArray([]);
    };

    return (
        <div>
            <h1>Initial array: {myArray.join(", ")}</h1>
            <button onClick={updateArrayWithNewArray}>Set array to [4, 5, 6]</button>
            <button onClick={addInputValue}>Add number at end</button>
            <button onClick={replaceSecondElement}>
                Replace second element
            </button>
            <button onClick={filterNumbers}>Keep numbers less than 3</button>
            <button onClick={resetArray}>Reset array</button>
            <button onClick={removeSecondNumber}>Remove second number</button>
            <button onClick={clearArray}>Clear array</button>
        </div>
    );
}

export default ArrayComponent;
