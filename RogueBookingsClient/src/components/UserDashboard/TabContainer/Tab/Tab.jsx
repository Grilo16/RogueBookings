import { Link } from "react-router-dom";

function Tab({tabName}){
    return(
        <>
            <div><Link to={`/dashboard/${tabName}`}>{tabName}</Link></div>
        </>
    )
};

export default Tab;