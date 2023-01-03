import { gql, useQuery } from "@apollo/client"

const GET_USER_QUERY = gql`
    query GetUser($id: ID!) {
        user(id: $id) {
            firstName
            lastName
            email
            role
            _id
        }
    }

`


const useGetUser = (id) => {
    const { data, ...queryResult } = useQuery(GET_USER_QUERY, {
        notifyOnNetworkStatusChange: true,
        variables: {
            id: id,
        },
        skip: !id 
    })

    return {
        user: data?.user,
        queryResult
    }
}

export default useGetUser