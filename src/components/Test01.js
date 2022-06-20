import React, { useState } from 'react';
import Test01Sub from './Test01Sub';

const dataList = [
    {id:1,name:'김다미'},
    {id:2,name:'김철수'},
    {id:3,name:'최진수'},
]

const Test01 = () => {
    const [data, setData ] = useState( dataList )

    const onAdd01 = (name) => {
        setData( data.concat({id:4, name}) )
    }
    const onAdd02 = (text) => {
        setData([
            ...data,
            {
                id:5,
                name:text
            }
        ])
    }

    const onDel01 = (num) => {
        setData (data.filter(item => item.id !== num))
    }
    const onDel02 = (id) => {
        setData( data.filter(item => item.id !== id))
    }

    const onMod01 = (id) => {
        setData( data.map(item => {
            if(item.id === id ){
                return {
                    ...item,
                    name:'유재석'
                }
            }else {
                return item
            }
        }))
    }
    const onMod02 = (id) => {
        setData(data.map(item => item.id === id ? {...item,
        name:'강호동'} : item))
    }
    return (
        <div>
            <Test01Sub onAdd01={onAdd01} onAdd02={onAdd02} onDel01={onDel01} onDel02={onDel02} onMod01={onMod01}  onMod02={onMod02}/>
        </div>
    );
};

export default Test01;