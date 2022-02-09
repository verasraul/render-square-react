import React, {useState} from 'react';



export default function RenderSqare() {

    const [color, setColor] = useState('black');

    const newColor = (text) => {
       setColor(text)
    }
    


    return (
    <div>
        <br></br>
      <input type={'text'} placeholder='Enter Color' onChange={text => newColor(text.target.value)} />
      <br></br>
      <div className="box-display" style={{
          "display":'flex',
          "justifyContent":'center', 
          "alignItems": 'center', 
          "height": 200, 
          "width": 200, 
          "backgroundColor": color,
          "color": 'white' }}>
              <p>Color will display here</p>

      </div>
    </div>
  );
}