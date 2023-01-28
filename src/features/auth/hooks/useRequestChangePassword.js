import { gql, useMutation } from '@apollo/client'

const REQUEST_QUERY = gql`
    mutation RequestChangePassword($email: String!) {
        requestChangePassword(email: $email){
            link
            messageId
        }
    }
`

const useRequestChangePassword = () => {
  const [mutate, { data, ...queryResult }] = useMutation(REQUEST_QUERY)

  const request = async (email) => {
    const { data, ...rest } = await mutate({
      variables: {
        email,
      },
    })

    const info = data?.requestChangePassword
    return {
      info,
      queryResult: rest
    }
  }

  const info = data?.requestChangePassword

  return {
    request,
    info,
    queryResult
  }
}

export default useRequestChangePassword