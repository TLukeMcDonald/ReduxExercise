import C from './constants'
import { allSkiDays } from './store/reducers'

const state = [
  {
    "resort": "Kirkwood",
    "date": "2017-11-15",
    "powder": true,
    "backcountry": false
  },
  {
    "resort": "Boreal",
    "date": "2017-11-16",
    "powder": false,
    "backcountry": false
  }
]

const action = {
  type: C.REMOVE_DAY,
  payload: "2017-11-15"
}

const nextState = allSkiDays(state, action)

console.log(`

  initial state: ${JSON.stringify(state)}
  action: ${JSON.stringify(action)}
  new state: ${JSON.stringify(nextState)}

  `)
