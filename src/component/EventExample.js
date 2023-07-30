import React from 'react'

export default function EventExample() {
    const handleFormInput = (e) =>{
        console.log(e.target.value);
    }
        
    const handleButtonClick = () => {
        alert("Button clicked")
    }

  return (     
         <section>
            <form>
                <h2>Typical Form</h2>
                <input type="text" name="example" style={{margin: '1rem 0'}} 
                 onChange={handleFormInput}
                />
            </form>
            <button onClick={handleButtonClick}>
                Click me
            </button>
         </section>
  )
}
