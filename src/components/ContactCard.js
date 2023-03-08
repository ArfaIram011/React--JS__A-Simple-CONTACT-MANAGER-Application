import React from 'react';
import user from '../images/user.png'


function ContactCard(props) {
    const {name,email}=props.contact;
    console.log(props.id);
    
  return (
    <div className='item'>
                <div className='content'>
                    <div className='header'>
                        <img className='ui avatar image' src={user} alt='user'/>
                       {name}</div>
                        <div>{email}</div>
                      <i 
                      style={{float:'right',color:'red',marginTop:'7px'}}
                      className='trash alternate outline icon'
                      // onClick={()=>alert('button clicked')}
                      onClick={()=>props.clickHandler(props.id)}
                      ></i>
                    </div>
             </div>
  )
}

export default ContactCard;