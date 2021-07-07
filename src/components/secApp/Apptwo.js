import React from 'react';
import { render } from 'react-dom';
import { v4 } from 'uuid';


const names =["John","Willie","Ryan","Thomas","Jack"];
const listNames=names.map((name) => <li key={v4()}>{name}</li>);

function NewName(){   
    return( 
        <ul>{listNames}</ul>
        
    )
   
}
console.log(listNames);
export default NewName;
