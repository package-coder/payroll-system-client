import { gql, useMutation } from "@apollo/client"

const CREATE_DEPARTMENT_QUERY = gql`
    mutation CreateDepartment($department: DepartmentInput!) {
        createDepartment(department: $department) {
            _id
            name
            alias
        }
    }
`

const useCreateDepartment = () => {
    const [mutate, queryResult] = useMutation(CREATE_DEPARTMENT_QUERY)

    const createDepartment = async (params) => {
       const { data, ...queryResult } = await mutate({ 
            variables: {
                department: params
            },
            refetchQueries: 'active'
        })

        const department = data?.createDepartment
        return {
            department,
            queryResult
        }
    }
    return {
        createDepartment,
        queryResult
    }
}

export default useCreateDepartment