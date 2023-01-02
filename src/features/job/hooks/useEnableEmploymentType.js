import { gql, useMutation } from "@apollo/client"

const ENABLE_EMPLOYMENT_TYPE_QUERY = gql`
    mutation EnableEmploymentType($id: ID!, $enabled: Boolean!) {
        enableEmploymentType(id: $id, enabled: $enabled) {
            _id
        }
    }
`

const useEnableEmploymentType = () => {
    const [mutate, queryResult] = useMutation(ENABLE_EMPLOYMENT_TYPE_QUERY)

    const enableEmploymentType = async (id, enabled) => {
       const { data, ...queryResult } = await mutate({ 
            variables: {
                id,
                enabled
            },
        })

        const employmentType = data?.enableEmploymentType
        return {
            employmentType,
            queryResult
        }
    }
    return {
        enableEmploymentType,
        queryResult
    }
}

export default useEnableEmploymentType