import { useForm } from "react-hook-form";

export default function Search(onSubmit){
    const {register, handleSubmit}= useForm();
    return <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder={"search.."}className="input" {...register("characterName")} type="text"/>
        <button type="submit">Submit</button>



    </form>

}