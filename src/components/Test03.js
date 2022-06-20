import React, { useRef, useState } from 'react';

const Test03 = () => {
    const no = useRef(1)
    const [data,setData] = useState([])
    const names = '김다미,김태리,최우식,김희선,송혜교,전지현,강호동,이승기,제시,송소희,김건우,김철수,홍길동'.split(',')
    // String 객체 메서드
    const onAdd = () => {
        const ran = Math.floor(Math.random() * names.length)
        setData([
            ...data,
            {
                id:no.current++,
                text:names[ran]
            }
        ])
    }
    return (
        <div>
            <h2>데이터추가</h2>
            <button onClick={onAdd}>추가</button>
            <hr />
            <ul>
                {
                    data.map(item => <li key={item.id}>{item.id}/{item.text}</li>)
                }
            </ul>
        </div>
    );
};

export default Test03;