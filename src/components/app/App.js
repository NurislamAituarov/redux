import s from './App.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from '../counter/counter';
import Test, { Message } from '../test/test';

export default function App() {
    return (
        <>
            <Counter />
            <Test render={(counter) => (<Message state={counter}/>)} />
        </>
    )
}



