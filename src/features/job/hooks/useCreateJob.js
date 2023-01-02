import { gql, useMutation } from "@apollo/client"

const CREATE_JOB_QUERY = gql`
    mutation CreateJob($job: JobInput!) {
        createJob(job: $job) {
            _id
            name
            alias
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

const useCreateJob = () => {
    const [mutate, queryResult] = useMutation(CREATE_JOB_QUERY)

    const createJob = async (params) => {
       const { data, ...queryResult } = await mutate({ 
            variables: {
                job: params
            },
            refetchQueries: ['GetJobs']
        })

        const job = data?.createJob
        return {
            job,
            queryResult
        }
    }
    return {
        createJob,
        queryResult
    }
}

export default useCreateJob