import { createStore } from "redux";
import Test2 from "./test2";

const Test =()=>{
    return(
        <Test2/>
    )
}
export default Test;
// export default function Test() {

//     const reducer = (state = 0, action) => {
//         switch (action.type) {
//             case "INC":
//                 return state + 1;
//             case "DEC":
//                 return state - 1;
//             case "RND":
//                 return state + action.value;
//             default:
//                 return state;
//         }
//     }
//     const store = createStore(reducer);
// //ACTIONS///
//     const inc = () => ({ type: "INC" });
//     const dec = () => ({ type: "DEC" });
//     const rnd = (value) => ({ type: "RND", value });

// //DISPATCH// изменяем
//     const incClick = () => {
//         store.dispatch(inc());
//     }
//     const decClick = () => {
//         store.dispatch(dec());
//     }
//     const rndClick = (value) => {
//         store.dispatch(rnd(value));
//     }
// //SUBSCRIBE//при обновлени
//     const update = () => {
//         console.log(store.getState())
//     }
//     store.subscribe(update)


//     return (
//         <div>
//             <h1>Hello World</h1>
//             <span>0</span><br />
//             <button onClick={incClick}>INC</button>
//             <button onClick={decClick}>DEC</button>
//             <button onClick={()=>{
//                 const value = Math.floor(Math.random()*10);
//                 rndClick(value)
//             }}>RND</button>
//         </div>
//     )

// }

