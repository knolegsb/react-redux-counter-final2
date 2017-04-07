import { INCREMENT, SET_INIT } from 'actions';

const counterIncrementEpic = (action$, store) => 
    action$.ofType(INCREMENT)
    .delay(1000)
    .mapTo({type: INCREMENT});

export default combineEpics ( 
    counterIncrementEpic,
)