import { createStore } from "redux";
import Test2 from "./test2";
import { useState } from 'react'


export const Message = (props) => {
    return (
        <span>{props.state}</span>
    )
}

const Test = ({ render }) => {
    const [state, setState] = useState(0);
    const onCount = () => {
        setState(state + 1)
    }
    return (
        <>
            <Test2>
                <button onClick={onCount}> children</button>
                <input type="text" placeholder="children"></input>
            </Test2>
            {render(state)}
        </>
    )
}
export default Test;

