import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { inc, dec, rnd } from '../actions/actions'
import './counter.scss'

const Counter = ({ dec, inc, rnd, state }) => {
    return (
        <div className="counter">
            Counter
            <h1>Hello</h1>
            <button onClick={rnd}>RND</button>
            <button onClick={inc}>INC</button>
            <button onClick={dec}>DEC</button><br />
            <span>{state}</span>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        state
    }
}
const mapDispatchToProps = (dispatch) => {
    const { incDispatch, decDispatch, rndDispatch } = bindActionCreators({
        incDispatch: inc,
        decDispatch: dec,
        rndDispatch: rnd
    }, dispatch)
    return {
        inc:incDispatch,
        dec: decDispatch,
        rnd: rndDispatch
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
























// import { connect } from "react-redux";
// import { inc, dec, rnd } from "../actions/actions";
// import { bindActionCreators } from "redux";

// const Counter = ({ counter, inc, dec, rnd }) => {
//     return (
//         <div>
//             <h1>Hello World</h1>
//             <span>{counter}</span> <br />
//             <button onClick={inc} className="btn btn-primary">INC</button>
//             <button onClick={dec} className="btn btn-outline-dark">DEC</button>
//             <button onClick={rnd} className="btn btn-outline-dark">DEC</button>
//         </div>
//     )
// }
// const mapStateToProps = (state) => {
//     return {
//         counter: state
//     }
// }
// const mapDispatchToProps = (dispatch) => {
//     const { incDispatch, decDispatch, rndDispatch } = bindActionCreators({
//         incDispatch: inc,
//         decDispatch: dec,
//         rndDispatch: rnd
//     }, dispatch)
//     return {
//         inc: incDispatch,
//         dec: decDispatch,
//         rnd: rndDispatch
//     }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);