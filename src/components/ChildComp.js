
import {useSelector, useDispatch} from 'react-redux';
import {
    incCustomAction2,

} from '../redux/action-creators'


export function ChildComp () {

    const counter2 = useSelector(({counter2: {counter}}) => {
        return counter
    })
    const dispatch = useDispatch();

    return(
        <>
            <h2> {counter2} - counter 2 child </h2>
            <button onClick={() => dispatch(incCustomAction2(20))}>inc custom</button>
        </>
    )
}