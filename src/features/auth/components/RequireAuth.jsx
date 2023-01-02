import React from 'react'
import { Navigate, Outlet } from 'react-router'
import useAuth from '../hooks/useAuth'
import PropTypes from 'prop-types'

const RequireAuth = (props) => {
    const { allowedRoles } = props
    const { 
        user, 
        queryResult: { 
            loading, 
            error 
        } 
    } = useAuth()

    if(loading) return 'Loading...'
    if(!user || error) 
        return <Navigate to='/login' replace/>
    if(allowedRoles && allowedRoles.some(allowedRole => user.role == allowedRole))
        return <Navigate to='/error/404' replace/>
    return <Outlet />
}

RequireAuth.propTypes = {
    allowedRoles: PropTypes.arrayOf(PropTypes.string.isRequired),
}

export default RequireAuth