import { gql, useLazyQuery, useQuery } from "@apollo/client"

const GET_EMPLOYMENT_TYPES_QUERY = gql`
    query GetEmploymentTypes {
        employmentTypes {
            alias
            name
            _id
        }
    }

`


const useGetEmploymentTypes = () => {
    const { data, ...queryResult } = useQuery(GET_EMPLOYMENT_TYPES_QUERY, {
        notifyOnNetworkStatusChange: true
    })

    return {
        employmentTypes: data?.employmentTypes,
        queryResult
    }
}

export const useLazyGetEmploymentTypes = () => {
    const [getData, queryResult] = useLazyQuery(GET_EMPLOYMENT_TYPES_QUERY, {
        notifyOnNetworkStatusChange: true
    })

    const getEmploymentTypes = async () => {
        const { data } = await getData()
        
        const employmentTypes = data?.employmentTypes
        return employmentTypes
    }

    return {
        getEmploymentTypes,
        queryResult
    }
}

export default useGetEmploymentTypes