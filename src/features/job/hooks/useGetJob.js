import { gql, useQuery } from "@apollo/client"

const GET_JOB_QUERY = gql`
    query Job($id: ID!) {
        job(id: $id) {
            name
            alias
            _id
            salary
            department {
                name
            }
            employmentType {
                name
            }
            position {
                name
            }
        }
    }

`


const useGetJob = (id) => {
    const { data, ...queryResult } = useQuery(GET_JOB_QUERY, {
        notifyOnNetworkStatusChange: true,
        variables: {
            id: id,
        },
        skip: !id 
    })

    let job = data?.job
    job = {
        ...job,
        department: job?.department?.name,
        employmentType: job?.employmentType?.name,
        position: job?.position?.name,
    }

    return {
        job,
        queryResult
    }
}

export default useGetJob