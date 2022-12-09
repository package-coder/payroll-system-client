import { useQuery, gql } from '@apollo/client'

const GET_USERS_QUERY = gql`
    query GetUser {
        users {
            _id
            email
            lastName
            firstName
            role
        }
    }
`

const useGetUsers = () => {
  const { data, ...queryResult } = useQuery(GET_USERS_QUERY)
  return { 
        users: data?.users,
        queryResult
   }
}

export default useGetUsers