

import { TextField, FormControl, InputLabel, Input, FormHelperText, Box, Button } from '@mui/material'
import { ErrorField, KoinButton, WrapSection } from '../style/StyledComponents'
import { useState } from 'react'
import { useForm } from 'react-hook-form'




function Inscription (){
    const [email, setImail] = useState(null)
    const [pseudo, setPseudo] = useState(null)
    const [mdp, setMdp] = useState(null)

    const { handleSubmit, register, formState: {errors} } = useForm()


//data en param de OnSubmit fourni par useForm va contenir tous les valeurs des champs du formulaire cliqué
//cette fonction OnSubmit sera en paramtere de la fonction handleSubmit
//et à la fin handleSubmit va etre éxucté lorqu'on submit le formulaire  onSubmit={handleSubmit(OnSubmit)}
function OnSubmit(data){
   console.log(data)
    }




return (
    <WrapSection  >


<h2>Inscription</h2>



    <Box 
    
    component="form"
    sx={{
        '& > :not(style)': { m: 2, width: '25ch' },
      }}

      onSubmit={handleSubmit(OnSubmit)}
    > 

<TextField 

id="pseudo" 
label="Pseudo" 
variant="outlined"
{...register("pseudo", { required:true })}
/>
{ errors.pseudo && <ErrorField>Le pseudo est requis</ErrorField> }



<br />
<TextField 
          id="email"
          label="Email"
          type="email"
          autoComplete="current-email"
          {...register("email", { required:true })}
        />

{/* errors permet de gerer les erreurs */}
{ errors.email && <ErrorField>L'email est requis</ErrorField> }
<br />
<TextField 
          id="password"
          label="Mot de passe"
          type="password"
          autoComplete="current-password"
          {...register("password", { required:true })}
        />
{ errors.password && <ErrorField>Le mot de passe  est requis</ErrorField> }
<br />

        <KoinButton type='submit'> S'inscrire</KoinButton>

    </Box>


</WrapSection>
    )
}



export default Inscription