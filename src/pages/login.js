import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import PropTypes from 'prop-types'
// import axios from 'axios'

// import logo from '../images/icon.png'

// MUI stuff
import Grid from '@material-ui/core/Grid'
import Textfield from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const styles = {
    form: {
        textAlign: 'center'
    },
    image: {
        margin: '20px auto 20px auto'
    },
    logo: {
        width: 50,
        height: 50
    },
    pageTitle: {
        margin: '10px auto 10px auto'
    },
    textField: {
        margin: '10px auto 10px auto'
    },
    button: {
        marginTop: 20
    }
}


export class login extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: '',
            loading: false,
            errors: {}
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.setState = ({
            loading: true
        })
        const userData = {
            email: this.state.email,
            password: this.state.password
        }
        // axios
        //     .post('https://us-central1-tokker.cloudfunctions.net/api/login', userData)
        //     .then(res => {
        //         console.log(res.data)
        //         this.setState({
        //             loading: false
        //         })
        //         this.props.history.push('/')
        //     })
        //     .catch(err => {
        //         console.log(err.response.data)
        //         this.setState({
        //             errors: err.response.data,
        //             loading: false
        //         })
        //     })
    }

    render() {

        const { classes } = this.props
        const { errors, loading } = this.state

        return (
            <Grid container className={classes.form}>
                <Grid item sm/>
                <Grid item sm>
                    {/* <img src={logo} alt="tokker-logo" className={`${classes.image} ${classes.logo}`}/> */}
                    <Typography variant="h3" className={classes.pageTitle}>
                        Login
                    </Typography>
                    <form noValidate onSubmit={this.handleSubmit}>
                        <Textfield 
                        id="email" 
                        name="email" 
                        type="email" 
                        label="Email" 
                        className={classes.textField}
                        helperText={errors.email}
                        error={errors.email ? true : false} 
                        value={this.state.email} 
                        onChange={this.handleChange} 
                        fullWidth />

                        <Textfield 
                        id="password" 
                        name="password" 
                        type="password" 
                        label="Password" 
                        className={classes.textField}
                        helperText={errors.password}
                        error={errors.password ? true : false}  
                        value={this.state.password}
                        onChange={this.handleChange} 
                        fullWidth />
                        
                        <Button type="submit" variant="contained" color="primary" className={classes.button} >
                            Login
                        </Button>
                    </form>
                </Grid>
                <Grid item sm/>
            </Grid>
        )
    }
}

login.propTypes = {
    classes : PropTypes.object.isRequired
}

export default withStyles(styles)(login)