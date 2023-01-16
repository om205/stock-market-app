import { Routes, Route, Link } from "react-router-dom";
import Details from "./Details/Details";
import { useState, useEffect } from "react";


const App = () => {
    const [pageURL, setPageURL] = useState('')
    useEffect(() => {
        let url = window.location.pathname
        if(url === '/') url = ''
        setPageURL(url)
    })
    return (
        <>
            <nav className="nav nav-main">
                <Link to="/nse" className="nav-options active">NSE</Link><div className="vr"></div>
                <Link to="/bse" className="nav-options">Future</Link><div className="vr"></div>
                <Link to="/company" className="nav-options">Options</Link>
            </nav>
            <Routes>
                <Route path="/company" element={<Details/>}/>
                <Route path="/:id" element={<Details/>}/>
            </Routes>
            <div className="heading-lg">NIFTY 50</div>
            <div className="hr-lg"></div>
            <div className="main">
                <div className="info"></div>
                <div className="chart"></div>
            </div>
            <div className="nav nav-sub">
                <Link to={`${pageURL}/overview`} className="nav-options active">OVERVIEW</Link>
                <Link to={`${pageURL}/chart`} className="nav-options">CHART</Link>
                <Link to={`${pageURL}/technicals`} className="nav-options">TECHNICALS</Link>
            </div>
            <div className="overview">
                <div className="table-items">
                    <div className="th">Open</div><div className="td">17867.50</div>
                </div>
                <div className="table-items">
                    <div className="th">Open</div><div className="td">17867.50</div>
                </div>
                <div className="table-items">
                    <div className="th">Open</div><div className="td">17867.50</div>
                </div>
                <div className="table-items">
                    <div className="th">Open</div><div className="td">17867.50</div>
                </div>
                <div className="table-items">
                    <div className="th">Open</div><div className="td">17867.50</div>
                </div>
                <div className="table-items">
                    <div className="th">Open</div><div className="td">17867.50</div>
                </div>
            </div>
        </>

    )
}

export default App