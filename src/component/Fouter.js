
import { useContext } from "react" 
import { UserInformationContext } from "../context/UserContext"






const Fouter = () => {

const { copyright, descriptif } = useContext(UserInformationContext)
return (

    <div className="fouter">


<p>  <strong> { descriptif }</strong></p>
<p>
{ copyright }
</p>

</div>
)



}

export default Fouter