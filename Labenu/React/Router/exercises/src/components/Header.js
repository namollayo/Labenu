import { useNavigate } from "react-router-dom";
import { goToHome, goToProfile, goToProduct} from "../routes/coordinator";

export function Header() {
    const navigate = useNavigate()
    return(<>
        <button onClick={()=>{goToHome(navigate)}}>Home</button>
      <button onClick={()=>{goToProfile(navigate,"Gabi")}}>Profile</button>
      <button onClick={()=>{goToProduct(navigate,"Pikachu")}}>Product</button>
      </>
    )
}