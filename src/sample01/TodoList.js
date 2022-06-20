import React from 'react';
import TodoItem from './TodoItem';
import './TodoList.css'

const TodoList = ({data, onDel, onMod}) => {
    return (
        <ul className="TodoList">
            {
                data.map(item=><TodoItem key={item.id} item={item} onDel={onDel} onMod={onMod}/>)
            }
        </ul>
    );
};

export default TodoList;