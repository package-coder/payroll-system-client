import { gql, useMutation } from "@apollo/client"

const ENABLE_POSITION_QUERY = gql`
    mutation EnablePosition($id: ID!, $enabled: Boolean!) {
        enablePosition(id: $id, enabled: $enabled) {
            _id
        }
    }
`

const useEnablePosition = () => {
    const [mutate, queryResult] = useMutation(ENABLE_POSITION_QUERY)

    const enablePosition = async (id, enabled) => {
       const { data, ...queryResult } = await mutate({ 
            variables: {
                id,
                enabled
            },
        })

        const position = data?.enablePosition
        return {
            position,
            queryResult
        }
    }
    return {
        enablePosition,
        queryResult
    }
}

export default useEnablePosition