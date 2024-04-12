

import { TextField, FormControl, InputLabel, Input, FormHelperText, Box, Button } from '@mui/material'
import { KoinButton, WrapSection } from '../style/StyledComponents'
import { useState } from 'react'
import { useForm } from 'react-hook-form'




function Connexion (){


const { handleSubmit, register, } = useForm()





return (
    <WrapSection  >


<h2>Connexion</h2>



    <Box 
    component="form"
    sx={{
        '& > :not(style)': { m: 2, width: '25ch' },
      }}

    
    > 




<TextField 
          
          id="outlined-password-input"
          label="Email"
          type="email"
          autoComplete="current-password"
        />


<br />
<TextField 
          id="outlined-password-input"
          label="Mot de passe"
          type="password"
          autoComplete="current-password"
        />

<br />

        <KoinButton type='submit'> Se connecter</KoinButton>

    </Box>


</WrapSection>
    )
}



export default Connexion