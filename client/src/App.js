import { Routes, Route, Link } from "react-router-dom";
import Details from "./Details/Details";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Chart from "./chart/Chart";


const App = (props) => {
    const [pageURL, setPageURL] = useState('')
    useEffect(() => {
        let url = window.location.pathname
        if(url === '/') url = ''
        setPageURL(url)
    })
    const param = useParams()
    console.log(param)
    return (
        <>
            <nav className="nav nav-main">
                <Link to="/nse" className="nav-options active">NSE</Link><div className="vr"></div>
                <Link to="/bse" className="nav-options">BSE</Link><div className="vr"></div>
                <Link to="/account" className="nav-options">ACCOUNT</Link>
            </nav>
            <Routes>
                <Route path="/company" element={<Details/>}/>
                <Route path="/:id" element={<Details/>}/>
            </Routes>
            <div className="heading-lg">NIFTY 50</div>
            <div className="hr-lg"></div>
            <div className="main">
                <div className="info">{ param.id.toUpperCase() }</div>
                <div className="chart-preview"><Chart searchId={2} searchName='Bse'/></div>
            </div>
            <div className="nav nav-sub">
                <Link to={`${pageURL}`} className="nav-options active">OVERVIEW</Link>
                <Link to={`/chart`} className="nav-options">CHART</Link>
                <Link to={`${pageURL}?mystocks`} className="nav-options">MY STOCKS</Link>
            </div>
            <div className="overview">
                <div className="table-items">
                    <div className="th">Open</div><div className="td">17867.50</div>
                </div>
                <div className="table-items">
                    <div className="th">High</div><div className="td">17867.50</div>
                </div>
                <div className="table-items">
                    <div className="th">Low</div><div className="td">17867.50</div>
                </div>
                <div className="table-items">
                    <div className="th">Close</div><div className="td">17867.50</div>
                </div>
                <div className="table-items">
                    <div className="th">Adjusted Close</div><div className="td">17867.50</div>
                </div>
                <div className="table-items">
                    <div className="th">Volume</div><div className="td">17867.50</div>
                </div>
            </div>
        </>

    )
}

export default App