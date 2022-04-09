import { useForm } from "react-hook-form";
import './Search.css';
export default function Search(onSubmit){
    const {register, handleSubmit}= useForm();
    return <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("characterName")} type="text"/>



    </form>

}