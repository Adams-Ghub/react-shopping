import React from 'react';


function Filter(props){

    return (
        <div style={{display:'flex', flexDirection:'row'}}>
           
            <div >
                <img src={props.iconimg} style={{width:'16px',height:'16px', marginRight:'10px'}}/>
            </div>
            <p>
                {props.title}
            </p>
        </div>
    )
}
export default Filter;