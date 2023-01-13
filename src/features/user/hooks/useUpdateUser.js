import { gql, useMutation } from '@apollo/client'

const UPDATE_USER_QUERY = gql`
    mutation UpdateUser($id: ID!, $user: UpdateUserInput!) {
        updateUser(id: $id, user: $user) {
            _id
            email
            firstName
            lastName
            role
        }
    }
`

const useUpdateUser = () => {
  const [mutate, queryResult] = useMutation(UPDATE_USER_QUERY)

    const updateUser = async (id, user) => {
        const { data, ...rest  } = await mutate({
            variables: {
                id,
                user,
            },
        })

        return {
            user: data?.updateUser,
            queryResult: rest
        }
    }
    return {
        updateUser,
        queryResult
    }
}

export default useUpdateUser