import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Reducer from './components/reducer/reducer';
import MyContext from './components/test/context';

function click(){
    console.log('Поздравляю вы нажали меня');
}

const store = createStore(Reducer)
ReactDOM.render(
    <Provider store={store}>
        <MyContext.Provider value={click}>
            <App />
        </MyContext.Provider>
    </Provider>
    , document.getElementById('root'));























// ////////////
// function getStatusColor(status) {
//     const statusMapping = {
//         success: 'green',
//         warning: 'yellow',
//         info: 'blue',
//         error: 'red'
//     }
//     return statusMapping[status] ?? 'black'
// }
// console.log(getStatusColor('info'));

// // до вызова функции
// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };

// function multiplyNumeric(menu) {
//     const result = Object.entries(menu).map(elem => {
//         if (typeof elem[1] === 'number') {
//             const a = elem[1] * 2;
//             elem.splice(1, 1, a)
//             return elem
//         }
//         return elem
//     })
//     result.forEach(elem => {
//         menu[elem[0]] = elem[1]
//     })
// }
// console.log(menu);
// multiplyNumeric(menu);
// console.log(menu);




