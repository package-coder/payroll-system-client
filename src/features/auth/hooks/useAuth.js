import { gql, useQuery } from '@apollo/client'
import React from 'react'

const GET_AUTH_QUERY = gql`
    query LoggedUser {
        loggedUser {
            _id
            email
            role
            firstName
            lastName
        }
    }
`

const useAuth = () => {
    const { data, ...queryResult } = useQuery(GET_AUTH_QUERY, {
        notifyOnNetworkStatusChange: true
    })

    return {
        user: data?.loggedUser,
        queryResult
    }
}

export default useAuth