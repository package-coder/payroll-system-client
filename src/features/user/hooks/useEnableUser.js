import { gql, useMutation } from "@apollo/client"

const ENABLE_USER_QUERY = gql`
    mutation EnableUser($id: ID!, $enabled: Boolean!) {
        enableUser(id: $id, enabled: $enabled) {
            _id
        }
    }
`

const useEnableUser = () => {
    const [mutate, queryResult] = useMutation(ENABLE_USER_QUERY)

    const enableUser = async (id, enabled) => {
       const { data, ...queryResult } = await mutate({ 
            variables: {
                id,
                enabled
            },
        })

        const user = data?.enableUser
        return {
            user,
            queryResult
        }
    }
    return {
        enableUser,
        queryResult
    }
}

export default useEnableUser