import { gql, useQuery } from "@apollo/client"

const GET_JOBS_QUERY = gql`
    query Jobs {
        jobs {
            name
            alias
            _id
            salary
            department {
                alias
            }
            employmentType {
                alias
            }
            position {
                alias
            }
        }
    }

`


const useGetJobs = () => {
    const { data, ...queryResult } = useQuery(GET_JOBS_QUERY, {
        notifyOnNetworkStatusChange: true
    })

    return {
        jobs: data?.jobs,
        queryResult
    }
}

export default useGetJobs