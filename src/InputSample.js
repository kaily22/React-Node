import React, { useState } from "react";

function InputSample() {
    const [inputs, setInputs] = useState({
        name : '',
        nickname : ''
    });

    const {name,nickname} = inputs; //구조 분해 할당을 통해 값 추출

    const onChange = (e) => {
       const {value, name} = e.target; //우선 e.target에서 name과 value를 추출
       setInputs ({
           ...inputs, [name] : value
       });
    };


    const onReset = (e) => {
        setInputs({
            name : '',
            nickname : ''
        });
    };

    return (
        <div>
            <input name="name" placeholder="이름" onChange = {onChange} value={name}/>
            <input name="nickname" placeholder="닉네임" onChange= {onChange} value={nickname}/>
            <button onClick={onReset}>초기화</button>
        
            <div>
                <b>값 : </b>
                {name} ({nickname})
            </div>
        </div>
    );
}

export default InputSample;