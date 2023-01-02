import { gql, useMutation } from "@apollo/client"

const DETELE_DEPARTMENT_QUERY = gql`
    mutation EnableDepartment($id: ID!, $enabled: Boolean!) {
        enableDepartment(id: $id, enabled: $enabled) {
            _id
        }
    }
`

const useEnableDepartment = () => {
    const [mutate, queryResult] = useMutation(DETELE_DEPARTMENT_QUERY)

    const enableDepartment = async (id, enabled) => {
       const { data, ...queryResult } = await mutate({ 
            variables: {
                id,
                enabled
            },
        })

        const department = data?.enableDepartment
        return {
            department,
            queryResult
        }
    }
    return {
        enableDepartment,
        queryResult
    }
}

export default useEnableDepartment