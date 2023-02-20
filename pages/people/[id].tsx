import React from 'react'
import { createpages } from '@/utils/api';
import { gettodos } from '@/utils/api';
const Singlepeople = ({re,id}:any) => {
  console.log(re);
  console.log(id);
    return (
    <div>user id:{id}
<h1>Todos Data</h1>
{re.map((el:any)=>(
    <div style={{margin:"10%",boxShadow:"0px 7px 29px 0px"}} key={el.id}>{el.title}</div>
))}
    </div>
  )
}

// box-shadow:  ;
export async function getStaticPaths() {
    let pp=await createpages();
    return {
      paths: pp.map((el:any)=>({params:{id:el.id.toString()}})),
      fallback: false, // can also be true or 'blocking'
    }
  };
export async function getStaticProps(context:any){
    const {params:{id}}=context;
    const re=await gettodos(id);
    return{
        props:{re,id}
    } 
}


export default Singlepeople;