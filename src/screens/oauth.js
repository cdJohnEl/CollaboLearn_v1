import React, {useState, useEffect} from 'react'
import countriesList from './countries';
import Cover from '../comps/cover';


function AccountPage(props) {
    const [view, setView] = React.useState('numview');
    const [loading, setLoading] = React.useState(false);
  return (
    <div className='oauth-view rel'>

        {loading == true && <Cover />}

        <h1 className='s50 otitle fontb'>Sign in</h1>
        <h1 className='s24 oline fontn'>Enter your phone number for OTP</h1>

        <select defaultValue={"+234"} className='iput s20 fontb'>
            {
                countriesList.map(e => {
                    return (
                        <option value={e.dial_code}>{e.name} ({e.dial_code})</option>
                    )
                })
            }
        </select>


        <input placeholder='0000 000 0000' className='iput s24 fontb'/>
        <button className='button s24 fontb cfff '>Continue</button>


    </div>
    
  )
}

export default AccountPage;