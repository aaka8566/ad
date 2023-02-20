export const fetchdata=async()=>{
    try{
        let res=await fetch(`https://jsonplaceholder.typicode.com/users`);
        let res1=await res.json();
        return res1;
    }
    catch(er){
        console.log(er);
    }
    };

    export const createpages=async()=>{
const res=await fetch(`https://jsonplaceholder.typicode.com/users`);
const res1=await res.json();
return res1;
    };
    
    
    export const gettodos=async(id:number)=>{
let res=await fetch(`https://jsonplaceholder.typicode.com/users/${id}/todos`);
let res1=await res.json();
return res1;
    } 
    