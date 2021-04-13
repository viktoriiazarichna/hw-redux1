import {
    INC,
    DEC,
    RESET,
    INC_CUSTOM,

    INC_TWO,
    INC_CUSTOM_TWO,
    DEC_TWO,
    RESET_TWO,
} from '../action-types';

const incAction = () => ({type: INC})
const decAction = () => ({type: DEC})
const resetAction = () => ({type: RESET})
const incCustomAction = (payload) => ({type: INC_CUSTOM, payload })


const incAction2 = () => ({type: INC_TWO})
const decAction2 = () => ({type: DEC_TWO})
const resetAction2 = () => ({type: RESET_TWO})
const incCustomAction2 = (payload) => ({type: INC_CUSTOM_TWO, payload })


export {
    incAction,
    decAction,
    resetAction,
    incCustomAction,


    incAction2,
    decAction2,
    resetAction2,
    incCustomAction2,
}
