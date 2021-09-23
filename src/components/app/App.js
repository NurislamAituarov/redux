import s from './App.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from '../counter/counter';
import Test from '../test/test';
import myContext from '../test/context';

export default function App() {
    return (
        <>
            <Counter />
            <Test />
        </>
    )
}



