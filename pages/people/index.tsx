import React from 'react'
import { fetchdata } from '@/utils/api';
import { useRouter } from 'next/router';
const People = ({container}:any) => {
    const router=useRouter();
const handleClick=(id:any)=>{
router.push(`/people/${id}`)
}
    console.log(container);
  return (
    <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"10px"}}>
        {container?.map((el:any)=>(
            <div style={{backgroundColor:"rgb(131,188,255)"}} key={el.id}>
<h1>{el.name}</h1>
<h4>{el.username}</h4>
<h2>{el.address.street}{el.address.suite}</h2>

<button onClick={()=>handleClick(el.id)}>Get Todos</button>
            </div>
        ))}
    </div>
  )
}

export default People;
export async function getStaticProps(){
    let container=await fetchdata();
    return {props:{container}};
    }