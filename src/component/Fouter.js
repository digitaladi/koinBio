
import { useContext } from "react" 
import { UserInformationContext } from "../context/UserContext"






const Fouter = () => {

const { username, descriptif } = useContext(UserInformationContext)
return (

    <div className="fouter">

<h3>
username: { username }
</h3>
<p>  <strong> Le descriptif:  </strong>{ descriptif }</p>
</div>
)



}

export default Fouter