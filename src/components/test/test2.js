import MyContext from "./context";

const Test2 = () => {
    return(
        <MyContext.Consumer>
            {
                (value)=>{
                    return(
                        <button onClick={value}>click me</button>
                    )
                }
            }
        </MyContext.Consumer>  
    )
}
export default Test2;