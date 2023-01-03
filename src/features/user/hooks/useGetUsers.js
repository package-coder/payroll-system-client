import { useQuery, gql } from '@apollo/client'

const GET_USERS_QUERY = gql`
    query GetUsers($queryOption: QueryOption) {
        users(queryOption: $queryOption) {
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