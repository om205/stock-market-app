import { useParams } from "react-router-dom"

const Details = () => {
    const { id } = useParams()
    return (
        <>
        Hi
            {id}
        </>
    )
}

export default Details