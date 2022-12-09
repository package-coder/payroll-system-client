import { gql, useMutation } from '@apollo/client'

const LOGIN_QUERY = gql`
    mutation LoginUser($username: String!, $password: String!) {
        loginUser(username: $username, password: $password) {
            _id
            username
        }
    }
`

const useLogin = () => {
  const [userLogin, ...rest] = useMutation(LOGIN_QUERY)

  return {
    userLogin,
    ...rest
  }
}

export default useLogin