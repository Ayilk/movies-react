import { MoviesGrid } from "../componentes/MoviesGrid";
import { Search } from "../componentes/Search";
import { useQuery } from "../Hooks/useQuery";
import { useDebounce } from "../Hooks/useDebounce";

export function LandingPage(){
    const query = useQuery();
    const search = query.get("search");

    const debouncedSearch = useDebounce(search, 300)
    return (
        <div>
            <Search/>
            <MoviesGrid 
            key= {debouncedSearch}
            search= {debouncedSearch}
            />
        </div>
    )
}   