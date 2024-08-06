import {PropTypes} from'prop-types'

export default function CounterButton({by,incrementMethod,decrenebtMethod}){

   
    
    //  function incrementCounterFunction(){
       
    //     incrementMethod(by);
 
    //  }
    //  function decrementCounterFunction(){
        
    //      decrenebtMethod(by);
    //  }
     return(
         <div className="Counter">
            
             <div>
             <button className="counterButton"onClick={()=>incrementMethod(by)}
             
 
             >+{by}</button>
               <button className="counterButton"onClick={()=>decrenebtMethod(by)}
             
 
             >-{by}</button>
 
 
 
             </div>
             
 
         </div>
     )
 }
 CounterButton.prototype={
     by: PropTypes.number
 }
 CounterButton.defaultProps={
     by:1
 }