import { useQuery, gql } from '@apollo/client'

const GET_USERS_QUERY = gql`
    query GetUsers {
        users {
            _id
            email
            lastName
            firstName
            role
            enabled
        }
    }
`

const useGetUsers = () => {
  const { data, ...queryResult } = useQuery(GET_USERS_QUERY, {
    notifyOnNetworkStatusChange: true
  })
  

  return { 
    users: data?.users,
    queryResult
   }
}

export default useGetUsers