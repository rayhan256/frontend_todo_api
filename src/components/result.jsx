import React from 'react'
import { useEffect, useState } from 'react'
import api from '../services/api_method'

export default function Result() {
    const [todo, setTodo] = useState([])
    useEffect(() => {
        api.getTodo()
        .then(response => setTodo(response.data))
    })
    
    return (
        <div>
            <ul>
                {todo.map(item => (
                    <li key={item.id}>{item.todo}</li>
                ))}
            </ul>
        </div>
    )
}
