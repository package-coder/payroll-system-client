import { gql, useMutation } from '@apollo/client'

const LOGIN_QUERY = gql`
    mutation LoginUser($email: String!, $password: String!) {
        loginUser(email: $email, password: $password) {
            id
        }
    }
`

const useLogin = () => {
  const [mutate, queryResult] = useMutation(LOGIN_QUERY)

  const loginUser = async (email, password) => {
    const { data, ...rest } = await mutate({
      variables: {
        email,
        password
      },
      refetchQueries: 'active'
    })

    const user = data?.loginUser
    return {
      user,
      queryResult: rest
    }
  }

  return {
    loginUser,
    queryResult
  }
}

export default useLogin