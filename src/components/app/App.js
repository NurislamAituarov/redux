import s from './App.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from '../counter/counter';
import Test, { Message } from '../test/test';
import { WithFirst, WithSecond } from '../HOK/width-components';

export default function App() {
    return (
        <>
            <WithFirst/>
            <WithSecond/>
            <Counter />
            <Test render={(counter) => (<Message state={counter} />)} />
        </>
    )
}



