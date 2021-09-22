import { inc, dec, rnd } from "../actions/actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const Counter = ({ counter, inc, dec, rnd }) => {
    return (
        <>
            <h1>Hello world</h1>
            <button onClick={inc}>INC</button>
            <button onClick={dec}>DEC</button>
            <button onClick={rnd}>RND</button><br />
            <span>{counter}</span>
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        counter: state
    }
}
const mapDispatchToProps = (dispatch) => {
    const { incDispatch, decDispatch, rndDispatch } = bindActionCreators({
        incDispatch: inc,
        decDispatch: dec,
        rndDispatch: rnd
    }, dispatch)
    return {
        inc: incDispatch,
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