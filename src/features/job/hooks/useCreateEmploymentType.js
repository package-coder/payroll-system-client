import { gql, useMutation } from "@apollo/client"

const CREATE_EMPLOYMENT_TYPE_QUERY = gql`
    mutation CreateEmploymentType($employmentType: EmploymentTypeInput!) {
        createEmploymentType(employmentType: $employmentType) {
            _id
            name
            alias
        }
    }
`

const useCreateEmploymentType = () => {
    const [mutate, queryResult] = useMutation(CREATE_EMPLOYMENT_TYPE_QUERY)

    const createEmploymentType = async (params) => {
       const { data, ...queryResult } = await mutate({ 
            variables: {
                employmentType: params
            },
            refetchQueries: 'active'
        })

        const employmentType = data?.createEmploymentType
        return {
            employmentType,
            queryResult
        }
    }
    return {
        createEmploymentType,
        queryResult
    }
}

export default useCreateEmploymentType