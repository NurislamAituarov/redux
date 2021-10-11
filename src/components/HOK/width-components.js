import { useState } from "react"

const withComponent = (Component) => {
    return (props) => {
        const [count, setCount] = useState(0)
        const onClick = () => {
            setCount(count => count + 1)
        }
        return (
            <Component
                {...props}
                onClick={onClick}
                count={count}
            />
        )
    }
}

const First = ({ count, onClick }) => {
    const [value, setValue] = useState('');
    return (
        <div style={{ width: '400px', backgroundColor: 'red', margin: '0 auto' }}>
            <p>{count}</p>
            <input onChange={(e) => setValue(e.target.value)} value={value} />
            <button onClick={onClick}>first</button>
        </div>
    )
}
const Second = ({ onClick, count }) => {
    const [value, setValue] = useState('');
    return (
        <div style={{ width: '400px', backgroundColor: 'red', margin: '0 auto' }}>
            <p>{count}</p>
            <input onChange={(e) => setValue(e.target.value)} value={value} />
            <button onClick={onClick}>second</button>
        </div>
    )
}

export const WithFirst = withComponent(First)
export const WithSecond = withComponent(Second)



