import {useState} from 'react';
function Favouritecolor()
{const [color,setColor]=useState("red");
    return(<>
    <h1> MY Favourite color is {color}!</h1>
    <button onClick={()=> setColor("blue")}>blue</button>
    <button onClick={()=> setColor("red")}>red</button>
    <button onClick={()=> setColor("pink")}>pink</button>
    <button onClick={()=> setColor("green")}>green</button>
    </>
    );
}
    export default Favouritecolor;
