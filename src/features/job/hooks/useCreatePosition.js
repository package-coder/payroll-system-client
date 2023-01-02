import { gql, useMutation } from "@apollo/client"

const CREATE_POSITION_QUERY = gql`
    mutation CreatePosition($position: PositionInput!) {
        createPosition(position: $position) {
            _id
            name
            alias
        }
    }
`

const useCreatePosition = () => {
    const [mutate, queryResult] = useMutation(CREATE_POSITION_QUERY)

    const createPosition = async (params) => {
       const { data, ...queryResult } = await mutate({ 
            variables: {
                position: params
            },
            refetchQueries: ['GetPositions']
        })

        const position = data?.createPosition
        return {
            position,
            queryResult
        }
    }
    return {
        createPosition,
        queryResult
    }
}

export default useCreatePosition