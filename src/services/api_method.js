import api from './api'

const getTodo = () => api.get("todo")
const postTodo = data => api.post("insertTodo", data)
const updateTodo = (id, data) => api.put(`updateTodo/${id}`, data)
const deleteTodo = id => api.delete(`deleteTodo/${id}`)

export default {
    getTodo,
    postTodo,
    updateTodo,
    deleteTodo
}