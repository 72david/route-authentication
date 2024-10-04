import { Button, Grid2, Stack, TextField } from '@mui/material'
import { useContext } from 'react'
import userContext from './UserContext'
import { Navigate, useNavigate } from 'react-router-dom'


const Login = () => {

  const {setIsLogin,isLogin}=useContext(userContext)

  // const isLogin=sessionStorage.getItem('isLogin')
 console.log(isLogin);

  if(isLogin) return <Navigate to="/home" />

  return (
    <Grid2 display={'flex'} height={'100vh'} alignItems={'center'} justifyContent={'center'}>
      <Stack gap={5} width={300} px={3} py={5} boxShadow={1} borderRadius={2} >
        <TextField size='small' id="username" label="User Name" variant="outlined" />
        <TextField size='small' type='password' id="password" label="Password" variant="outlined" />
        <Button onClick={()=>{
          sessionStorage.setItem('isLogin',true);
          setIsLogin(true)
        }} size='small' variant='contained' color="primary">Login</Button>
      </Stack>
    </Grid2>
  )
}

export default Login