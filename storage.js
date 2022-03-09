const TODO_STORAGE_KEY = 'TODO'

export default {
    get(){
        return JSON.parse(localStorage.getItem(TODO_STORAGE_KEY)) || [];
    },
    set(todos){
        localStorage.setItem(TODO_STORAGE_KEY,JSON.stringify(todos));
    }
}