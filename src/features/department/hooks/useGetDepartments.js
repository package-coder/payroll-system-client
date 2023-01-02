import { gql, useLazyQuery, useQuery } from "@apollo/client";

const GET_DEPARTMENTS_QUERY = gql`
    query GetDepartments {
        departments {
            _id
            name
            alias
            enabled
        }
    }
`


const useGetDepartments = () => {
    const { data, ...queryResult } = useQuery(GET_DEPARTMENTS_QUERY, {
        notifyOnNetworkStatusChange: true
    })

    return {
        departments: data?.departments,
        queryResult
    }
}


export const useLazyGetDepartments = () => {
    const [getData, queryResult] = useLazyQuery(GET_DEPARTMENTS_QUERY, {
        notifyOnNetworkStatusChange: true
    })

    const getDepartments = async () => {
        const { data } = await getData()
        
        const departments = data?.departments
        return departments
    }

    return {
        getDepartments,
        queryResult
    }
}

export default useGetDepartments