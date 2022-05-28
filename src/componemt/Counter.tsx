import React, { FormEvent, useState } from 'react';

const Counter = () => {

    const [count, setCount] = useState<number>(0)

    const handelIncrement = (): void => {
        setCount(count + 1)
    }
    const handelFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

    }




    return (
        <div>
            <h2>This is Counter</h2>
            <h2>{count}</h2>
            <button onClick={handelIncrement}> increment</button>
        </div>
    );
};

export default Counter;