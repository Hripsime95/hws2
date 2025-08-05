import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            const stateInstance = [...state]
            const sortedState = action.payload === 'up' 
                ? stateInstance.sort((a,b) => a.name.localeCompare(b.name))
                : stateInstance.sort((a,b) => b.name.localeCompare(a.name))
            
            return sortedState// need to fix
        }
        case 'check': {
            return state.filter(a => a.age >= 18); // need to fix
        }
        default:
            return state
    }
}
