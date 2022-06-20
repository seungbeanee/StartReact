import React, { useRef, useState } from 'react';

const Test04 = () => {
    const [data , setData ] = useState([])
    const [text, setText ] = useState('')
    const no = useRef(1)
    const textRef = useRef(null)

    const ChangeInput = (e) => {
        const {value} = e.target
        setText(value)
    }
    const onAdd = () => {
        setData([
            ...data,
            {
                id:no.current++,
                text:text
            }
        ])
        setText('')
        textRef.current.focus()
    }
    return (
        <div>
            <input type="text" value={text} onChange={ChangeInput} ref={textRef}/>
            <button onClick={onAdd}>추가</button>
            <hr />
            <ul>
                {
                    data.map(item => <li key={item.id}>
                        {item.id}/{item.text}
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Test04;