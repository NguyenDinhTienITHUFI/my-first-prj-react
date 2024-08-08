import { AuthContext } from './security/AuthContext';
import { useContext } from 'react'
export default function FooterComponent(){
    const authContext= useContext(AuthContext)
   
    return(
        <footer className='footer'>
            <div className='container'>
                Contact for us: +84964801795
            </div>
          
        </footer>
    )
}