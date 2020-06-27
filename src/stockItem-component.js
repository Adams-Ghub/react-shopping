import React from 'react';
import carticon from './images/carticonimg.png';
import 'bootstrap'

function Item(props){
    return(
        <div style={{borderRadius:'5px',margin:'5px', borderColor:'black', backgroundColor:'white',width:'24%',padding:'5px 10px',margin:'10px'}}>
            <p style={{backgroundColor:'orange',
                        color:'white',
                        textAlign:'center',
                        borderRadius:'14px',
                        width:'50px',
                        position:'relative',
                        left:'76%'}}>
                {props.discount}
            </p>
            <img src={props.itemimg} style={{width:'180px',height:'162px',alignItems:'center' }}/>
            <p style={{marginBottom:'0px',fontSize:'16px',fontWeight:'bolder'}}>
                {props.name}
            </p>
            <p style={{color:'#808080'}}>
                {props.qty}
            </p>
            <p style={{fontFamily:'arial',
                        fontSize:'14px',
                        fontStyle:'italic',
                        fontWeight:'bold',
                        textDecorationLine:'line-through',
                        color:'orange',
                        margin:'0px'}}>
                {props.oldprice}
            </p>
            <div class="row" style={{display:'flex',flexDirection:'row', marginTop:'0px'}}>
                <p class="col-lg-6" style={{color:'green',fontWeight:'bolder'}}>
                    {props.price}
                </p>
                <span class="col-lg-6" style={{color:'green',
                              fontFamily:'arial',
                              fontSize:'16px',
                              fontWeight:'bolder',
                              paddingLeft:'40px'
                            }}><img src={carticon} style={{width:'17px',
                                                                            height:'17px',
                                                                            marginRight:'4px'}}/>cart</span>

            </div>
           
        </div>
    )
}
export default Item;