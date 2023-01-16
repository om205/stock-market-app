const mapping = {
    1:'nse',
    2:'bse',
    3:'ashokley',
    4:'cipla',
    5:'eichermot',
    6:'reliance',
    7:'tatasteel'
}
const fetchData = async ({ queryKey }) => {
    const id = queryKey[1];
    const searchQuery = mapping[id]
  
    // const url = `https://stock-market-app-om.onrender.com/stockindices/nse`
    const url = `http://localhost:3001/stockindices/${searchQuery}`

    const apiRes = await fetch(url);
  
    if (!apiRes.ok) {
      throw new Error(`fetch failed`);
    }
  
    return apiRes.json();
  };
  
  export default fetchData;
