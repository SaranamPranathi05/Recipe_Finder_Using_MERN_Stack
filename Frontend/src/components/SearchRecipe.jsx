import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './SearchRecipe.css';
const SearchRecipe = () => {

    const[name,setname]=useState("");
    const nav=useNavigate();


    const getdata=async(e)=>{
        e.preventDefault();
        try{
            const answer=await fetch(`http://localhost:3000/api/recipes?name=${name}`);


            if(!answer.ok){
                throw new Error("not found");
            }

            const dd=await answer.json();
            nav('/display',{state:{recipe:dd}});

        }
        catch(error){
            alert(error.message);
        }
    }

  return (
    <div>

        <form onSubmit={getdata}>

            <input type="text"
            value={name}
            onChange={(e)=>setname(e.target.value)}
            required placeholder='name'/>

            <button type="submit">
                Find
            </button>









        </form>
    </div>
  )
}

export default SearchRecipe