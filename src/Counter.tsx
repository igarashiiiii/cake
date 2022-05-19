import React,{ useState, useRef, useEffect } from 'react';

const Counter:React.FC<{}> = () => {
    const [value, setValue] = useState<number>(0)

    const incremet = () => {
        setValue((prevState)=> prevState + 1)
    }

    const decremet = () => {
        setValue((prevState)=> prevState - 1)
    }

    const renderTimes = useRef<number>(0);
    useEffect(() => {
        renderTimes.current = renderTimes.current + 1
    })

    const ref = useRef<HTMLInputElement>(null!);

    const focusInput = ()=>{
        const current = ref.current;
         current.focus();
        }
    

    return (
    <div>
        <div>value:{value}</div>
        <button onClick={incremet}>+1</button>
        <button onClick={decremet}>-1</button>
        <div>this componet was re-rendered {renderTimes.current}</div>
        <input ref={ref} type="text" />
        <button onClick={focusInput}>Click me!</button>
    </div>
    )
}

export default Counter;