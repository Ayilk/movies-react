import styles from "./Search.module.css";
import { FcSearch } from 'react-icons/fc';
import {useNavigate} from "react-router-dom";
import { useQuery } from "../Hooks/useQuery";

export function Search(){
    const query = useQuery();
    const search = query.get("search");

    
    
    const navigate = useNavigate();

   

    const handleSubmit = (e) => {
        e.preventDefault();
       
    }
    return(
        <form 
        className = { styles.searchContainer }
        onSubmit = {handleSubmit}
        >
            <div className = { styles.searchBox }>
                <input 
                className = { styles.searchInput } 
                type = "text" 
                placeholder = "Qué película buscas?"
                aria-label="Search Movies"
                value = {search}
                onChange = {(e) => {
                    const value = e.target.value;
                    navigate("/?search=" + value);
                }}
                />
                <button 
                className = { styles.searchButton } 
                type = "submit" >
                    <FcSearch size = {30}/>
                </button>
            </div>
        </form>
    )
}