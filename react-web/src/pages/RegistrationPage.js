import React from 'react'
import RegistrationForm from '../components/Registrationform'

const RegistrationPage = ({
  token,
  onRegistration
}) => (
    <div>
    {
      !!token ? (
        'Welcome'
      ) : (
        <div>
          <RegistrationForm onRegistration={ onRegistration } />
        </div>
      )
    }
    </div>
  )

export default RegistrationPage
