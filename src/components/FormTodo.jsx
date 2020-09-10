import React, {useState} from 'react'
import api from '../services/api_method'

export default function FormTodo() {
    const initialData = {
        id: null,
        todo: '',
        created_at: null,
        updated_at: null
    }
    const [list, setList] = useState(initialData)
    const handleChange = (e) => {
        const {value, name} = e.target
        setList({...list, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            todo: list.todo,
        }

        api.postTodo(data)
        .then(response => {
            setList({
                id: null,
                todo: response.data.todo,
                created_at: null,
                updated_at: null
            })
        }).catch(e => console.log(e))
    }

    return (
        <>
        <h1 className="display-4 mt-4 text-center mb-4">Todo List App</h1>
        <div className="row">
          <form onSubmit={handleSubmit} method="post">
            <div className="form-group">
              <label>Add Todo</label>
              <input className="form-control" type="text" name="todo" value={list.todo} onChange={handleChange} />
              <button type="submit" className="btn btn-outline-primary mt-3">Add Todo</button>
            </div>
          </form>
        </div>
        </>
    )
}
