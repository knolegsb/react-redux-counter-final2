import { combineEpics } from 'redux-observable'
import counter, { epics as counterEpics } from "./counter"

export const epics = combineEpics (
    counterEpics,
);

export default {
    counter
}
