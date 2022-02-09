import React, {useState} from 'react';



export default function RenderSqare() {

    const [color, setColor] = useState('black');

    const newColor = (text) => {
       setColor(text)
    }
    


    return (
    <div>
      <input type={'text'} placeholder='Enter Color' onChange={text => newColor(text.target.value)} /> 
      <div className="box-display" style={{justifyContent:'center', alignItems: 'center', "height": 100, "width": 100, "backgroundColor": color}}>

      </div>
    </div>
  );
}