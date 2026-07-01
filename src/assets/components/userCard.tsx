import 'bootstrap/dist/css/bootstrap.min.css';
import '../message.css';



type UserCardProps = {
    name: string;
    role: 'admin' | 'user';
    verified: boolean;
  }; 




const UserCard = ({ name, role, verified }: UserCardProps) => {
const greeduser=(username: string)=>{
    alert('Hello  {username}');

};

    return (
        <div className="card">
<h2 className="card-g">{name}  </h2>
<p>{role}</p>
{verified && <span>✔️</span>}
<button onClick={()=>{
    greeduser(name);
}}>   
 SHOW USRE INFOR</button>



        </div>
    );

};
export default UserCard;