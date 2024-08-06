const person={
    name:'Tien',
    age:22,
    address:{
        street:'NCT',
        city:'HCM',
        country:'VN'
    },
    profiles:['FB','YT'],
    printProfile:()=>{
        person.profiles.map(
            profile=>console.log(profile)
            
        )
        
    }
}

export default function LearningJavaScript(){
return(
    <>
           <div>Hello {person.name}</div>
           <div>You Information: </div>
           <i>{person.age}</i>
           <i>{person.address.street}</i>
           <i>{person.address.city}</i>
           <i>{person.address.country}</i>
           <div>{person.profiles[0]}</div>
           <div>{person.printProfile()}</div>
    </>
 
)
} 