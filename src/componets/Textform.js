import React,{useState} from 'react'


export default function Textform(props) {
    const handleUpClick=()=>{
        let newtext=text.toUpperCase();
        setText(newtext)
    }
    const handleClearClick=()=>{
      let newtext=('');
      setText(newtext)
  }
    const handleLoClick=()=>{
      let newtext=text.toLowerCase();
      setText(newtext)
  }
    const handleOnChange=(event)=>{
        setText(event.target.value)
    }
    const [text,setText] = useState('');
  return (
    <>
    <div className='container'> 
        <h1 className="mb-3">{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" onChange={handleOnChange} value={text} id="My box" rows="8"></textarea>
        </div>
        <button className='btn btn-primary mx-2' onClick={handleUpClick}>Uppercase</button>
        <button className='btn btn-primary mx-2' onClick={handleLoClick}>Lowercase</button>
        <button className='btn btn-primary mx-2' onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className='container my-3' >
      <h1>Your text summary.</h1>
      <p>{text.split(' ').length} words,{text.length} charactors</p>
      <p>In {0.008* text.split(' ').length}Minutes you can read easyly.</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
