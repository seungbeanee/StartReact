import React from 'react';

const Test1Sub = ({onAdd01, onAdd02, onDel01, onDel02, onMod01, onMod02}) => {
    return (
        <div>
            <p>
                <button onClick={() => onAdd01('김태리')}>추가</button>
                <button onClick={() => onAdd02('김철수')}>추가</button>
            </p>
            <p>
                <button onClick={() => onDel01(1)}>삭제</button>
                <button onClick={() => onDel02(2)}>삭제</button>
            </p>
            <p>
                <button onClick={() => onMod01(1)}>수정</button>
                <button onClick={() => onMod02(2)}>수정</button>
            </p>
        </div>
    );
};

export default Test1Sub;