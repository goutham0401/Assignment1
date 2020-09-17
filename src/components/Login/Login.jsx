import React, {Component } from 'react'
// import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box';
import './Login.css'
class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email:'',
             password:''
        }
    }
    submit()
    {
        console.log(this.state)
        fetch("http://localhost:8000/accounts?q=" + this.state.email).then((data)=>{
            data.json().then((resp)=>{
                console.warn("resp",resp)
            })
        })
    }
    
    render(){
        

        return (
            <div>
                <Box display="flex" justifyContent="center" m={1} p={1}>
                <div>
                <form noValidate autoComplete="off">
                    <div>
                    <TextField id="outlined-basic"
                            label="Email"
                            variant="outlined"
                            type='email'
                            name='email'
                            onChange={(e) => this.setState({ email: e.target.value })} />
                    </div>
                    <div>
                    <TextField id="outlined-basic"
                            label="Password"
                            variant="outlined"
                            type='password'
                            name='password'
                            onChange={(e) => this.setState({ password: e.target.value })} />
                    </div>
                   <div><Button variant="contained" color="primary" onClick={()=>{this.submit()}}>Submit</Button></div>
                </form>
                </div>
                </Box>
            </div>
        )
    }
    
}

export default Login
