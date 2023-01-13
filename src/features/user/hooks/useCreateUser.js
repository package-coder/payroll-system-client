import { gql, useMutation } from '@apollo/client'

const CREATE_USER_QUERY = gql`
    mutation CreateUser($user: UserInput!) {
        createUser(user: $user) {
            _id
            email
            firstName
            lastName
            role
        }
    }
`

const useCreateUser = () => {
  const [mutate, queryResult] = useMutation(CREATE_USER_QUERY)

    const createUser = async (params) => {
        const { data, ...rest  } = await mutate({
            variables: {
                user: params
            },
            refetchQueries: ['GetUsers']
        })

        const user = data?.createUser
        return {
            user,
            queryResult: rest
        }
    }
    return {
        createUser,
        queryResult
    }
}

export default useCreateUser