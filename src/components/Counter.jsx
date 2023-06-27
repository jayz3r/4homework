import { useSelector, useDispatch } from "react-redux"
import { incrCounter} from "../store/counterReducer"
import { useState } from "react"
import {decrCounter} from "../store/counterReducer"

const Counter = () => {
    const [val, setVal] = useState(1)
    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch()

    const onIncr = () => {
        dispatch(incrCounter(val))
    }
    const onDecr = () =>{
        dispatch(decrCounter(val))
    }
    return (
        <div>Counter: {counter}
            <input type="number" onChange={e => setVal(Number(e.target.value))} />
            <button onClick={onDecr}>-</button>
            <button onClick={onIncr}>+</button>
        </div>
    )
}
export default Counter