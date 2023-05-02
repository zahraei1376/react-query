import { useQuery } from "react-query";
import axios from "axios";

const RQSuperHeroes = () => {
    const fetchSuperHerous = () => {
        return axios.get("http://localhost:4000/superheroes")
    }

    const { isLoading, data } = useQuery("super-heroes", fetchSuperHerous);

    if (isLoading) {
        return <h2>Loading...</h2>
    }

    return (
        <>
            <h2>RQ Super Heroes Page</h2>
            {
                data?.data?.map(heroe => {
                    return <div key={heroe.name}>{heroe.name}</div>
                })
            }
        </>
    )
}

export default RQSuperHeroes;