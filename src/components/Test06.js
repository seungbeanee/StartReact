import React, { useState } from 'react';

const dataList = [
    {id:1, name:'chk1' , text:'연령(만 14세 이상) 확인(필수)', isChk:false },
    {id:2, name:'chk2' , text:'증권플러스 이용약관 (필수)', isChk:false },
    {id:3, name:'chk3' , text:'연령(만 14세 이상) 확인(필수)', isChk:false },
    {id:4, name:'chk4' , text:'연령(만 14세 이상) 확인(필수)', isChk:false },
]

const Test6 = () => {
    const [ data , setData  ] = useState( dataList )
    const changeInput  = (e) => {
        const { name , checked } = e.target 
        if( name === 'all') {
            setData( data.map( item => {
                return {
                    ...item ,
                    isChk : checked 
                }
            }))
        }else{
            setData( data.map( item => item.name === name ? 
                {...item, isChk:checked }:item))
        }
    }
    return (
        <div>
            
            <p>
                <input type="checkbox" name="all" onChange={changeInput} checked={
                    data.filter( item => item.isChk !== true ).length === 0
                }/>
                <label>약관동의</label>
            </p>
            <hr/>
             {
                data.map( item =>  <p key={item.id}>
                    <input type="checkbox" name={item.name} checked={item.isChk} onChange={ changeInput } />
                    <label> {item.text} </label>
                </p>)
             }
           
        </div>
    );
};

export default Test6;