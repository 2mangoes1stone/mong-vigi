import React from 'react'
import { Redirect } from 'react-router-dom'
import SignInForm from '../components/SignInForm'

const SigninPage = ({
  token,
  onSignin
}) => (
    <div>
    {
      !!token ? (
        <Redirect to='/movies' />
      ) : (
        <div>
          <SignInForm onSignIn={ onSignin} token={ token } />
        </div>
      )
    }
    </div>
  )

export default SigninPage
