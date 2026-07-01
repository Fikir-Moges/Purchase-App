//import { Button } from "react-bootstrap";
import "../../App.css";
//import Button from "./Button.tsx";
 const card = ( { children }: React.PropsWithChildren) => {
    return (
        
        <div className="card" >
        <button />
            <section>{children}</section>
        </div>
    );
};

export default card;