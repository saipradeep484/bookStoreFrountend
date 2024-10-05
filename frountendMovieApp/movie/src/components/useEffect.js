import { useState } from "react";
import Button from '@mui/material/Button';
export default function Counter(){
const [count ,setCount] = useState(0);
 return(
    <div>
        
        <Button onClick={() =>setCount(count+1)}> click me</Button>
        
        <p>the count value is {count}</p>
    </div>
 );
}
        
        




        
