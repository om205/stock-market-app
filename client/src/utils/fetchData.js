export const fetchData = async () => {
    const url = `http://localhost:3001/stockindices/nse`
    const res = await fetch(url)
    // return res
    const data = await res.json()
    return data
}
