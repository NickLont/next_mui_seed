import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import useForm from 'lib/useForm'
import { useState } from 'react'
import axios from 'axios'
import Router from 'next/router'
import useUser from '../lib/useUser'
import fetchJson from '../lib/fetchJson'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}))

const Login = () => {
  const classes = useStyles()
  const [error, setError] = useState(null)
  const { inputs, handleChange } = useForm({
    username: ''
  })
  const { mutateUser } = useUser({
    redirectTo: '/profile',
    redirectIfFound: true
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await mutateUser(
        fetchJson('/api/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(inputs)
        })
      )
    } catch (error) {
      console.error('An unexpected error happened:', error)
      setError(error.data.message)
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Log in using you GitHub account
        </Typography>
        <Typography component="h1" variant="h6">
          (Or mine: NickLont)
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            value={inputs.username}
            onChange={handleChange}
          />
          {error && (
            <Typography component="h1" variant="body1" color="error">
              {error}
            </Typography>
          )}
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}>
            Sign In
          </Button>
        </form>
      </div>
    </Container>
  )
}

export default Login
