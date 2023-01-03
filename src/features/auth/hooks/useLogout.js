import { gql, useLazyQuery } from '@apollo/client'

const LOGOUT_QUERY = gql`
    query LogoutUser {
        logoutUser {
            _id
        }
    }
`

const useLogout = () => {
  const [logout, { data, ...queryResult }] = useLazyQuery(LOGOUT_QUERY)

  const logoutUser = async () => {
    const { data, ...queryResult } = await logout()

    const user = data?.logoutUser
    return {
      user,
      queryResult: queryResult
    }
  }

  const user = data?.logoutUser

  return {
    user,
    logoutUser,
    queryResult
  }
}

export default useLogout