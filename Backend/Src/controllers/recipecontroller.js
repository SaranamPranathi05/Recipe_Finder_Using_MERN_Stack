const axios=require('axios')

const mongoose=require('mongoose')


const rd=async(req,res)=>{
    const name=req.query.name?.toLowerCase();

    if(!name){
        return res.status(400).json({message:"Recipe name is required"});
    }


    try{
        const response=await axios.get(
            `https://api.spoonacular.com/recipes/complexSearch`,{
                parms:{
                    query:name,
                    Number:5,
                    addrinfo:true,
                    apiKey:"5a1bd8dc2d6d458fbb2cc7b3c17d0625"
                }
            }
        )

    if(response.data.result.length==0){
        return res.status(404).json({message:"Recipe not found"});
    }

        const data=response.data.results.map(r=>({
            name:r.title,
            ingredients: r.extendedIngredients?.map(i => i.original) || [],
            instructions: r.instructions || "No instructions available",
            readyInMinutes: r.readyInMinutes
        }));

        res.status(200).json(data);
    }
    catch(error){
        console.log(error.message);
        res.status(500).json({message:"fetching error"});
    }



    mongoose.connect( "mongodb+srv://2320030267_db_user:SoIynigKdY9tGomv@cluster0.n6ec914.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(()=>console.log("Mongo db connected")).
    catch((err)=>console.log("Mongo DB error",err));


    const sr=await.Pmodel.create(data);
    res.status(200).json({message:"Recipe Saved"})



    






};


module.exports={data};