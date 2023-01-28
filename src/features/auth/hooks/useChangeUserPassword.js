import { gql, useMutation } from "@apollo/client";


const UPDATE_PASSWORD_QUERY = gql`
    mutation UpdateUserPassword($accessToken: String!, $password: ChangePasswordType!) {
      updateUserPassword(accessToken: $accessToken, password: $password)
    }
`

const useChangeUserPassword = () => {
    const [mutate, { data, ...queryResult }] = useMutation(UPDATE_PASSWORD_QUERY)
  
    const changeUserPassword = async (
        accessToken, 
        password, 
        newPassword,
        confirmNewPassword
      ) => {
      const { data, ...rest } = await mutate({
        variables: {
          accessToken, 
          password: {
            password, 
            newPassword,
            confirmNewPassword
          }
        },
      })
  
      const info = data?.updateUserPassword
      return {
        info,
        queryResult: rest
      }
    }
  
    const info = data?.updateUserPassword
  
    return {
      changeUserPassword,
      info,
      queryResult
    }
}
  
export default useChangeUserPassword
  
