import { FaUser } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import {FaSearch} from "react-icons/fa";
import {FaUserCircle} from "react-icons/fa";

function New(){
    const style = {
        color: '#000',
        fontSize: '500px'
    };

    return (
        <>
        <FaUser style={style} /><br />
        <FaHome style={style} /><br />
        <FaUserCircle style={style} /><br />
        
        <FaSearch style={style} />
        </>
    );
}
export default New;
