import React from "react";
import MyContext from "./context";
import './test.scss'
const Test2 = (props) => {
    // console.log(props.children);
    return (
        <MyContext.Consumer>
            {
                (value) => {
                    return (
                        <>
                            <button onClick={value}>click me</button>
                            {
                                React.Children.map(props.children, (child) => {
                                    // console.log(child);
                                    return React.cloneElement(child, {className: 'children'})
                                })
                            }
                        </>
                    )
                }
            }
        </MyContext.Consumer>
    )
}
export default Test2;