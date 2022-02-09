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
          display:'flex',
          justifyContent:'center',
          paddingTop : '10%',
        //   textAlign : 'center',
        //   border : '10px solid grey',
      }}> 
        <div className='box' style={{
            border : '10px solid purple',
            paddingTop : '25%',
            height: '50vh', 
            width: '100vh',
            backgroundColor: color,
            color: 'white' }}>
              <p>Color will display here</p>
            </div>
      </div>
    </div>
  );
}