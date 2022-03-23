import { useState } from 'react'

const Item = () => {
  const [show, setShow] = useState(true)



  
    return (
        
        <button onClick={() => setShow(!show)}>{show ? 'soy un detalle' : 'Soy un detalle en construccion'}</button>
    
    
    );
    }
export default Item
