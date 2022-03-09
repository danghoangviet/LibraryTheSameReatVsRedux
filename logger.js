export default function Logger(reducer){
    return (prevState, action, args) => {
        console.group(action)
        console.log('Prev State:' , prevState)
        console.log('Arguments action', args)
        const nextState = reducer(prevState, action, args)
        console.log('Next State:' , nextState)
        console.groupEnd
        return nextState
    }
}