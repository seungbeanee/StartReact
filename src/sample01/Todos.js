import React, { useRef, useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './Todos.css'

const Todos = () => {
    const [data, setData] = useState([
        {id:1,text:'친구만들기', isChk : true},
        {id:2,text:'회사미팅하기', isChk : false},
    ])

    const no = useRef(data.length+1)

    const onDel = (id) => {
        setData(data.filter(item => item.id !== id))
    }
    //추가
    const onAdd = (text) => {
        setData([
            ...data,
        {
            id:no.current++,
            text:text,
            isChk:false
        }
        ])
    }

    //수정
    const onMod = (id) => {
        setData(data.map(item => item.id === id ? {...item, isChk: !item.isChk} : item))
    }
    return (
        <div className="Todos">
            <h1>할일만들기</h1>
            <TodoForm onAdd={onAdd}/>
            <TodoList data={data} onDel={onDel} onMod={onMod}/>
        </div>
    );
};

export default Todos;