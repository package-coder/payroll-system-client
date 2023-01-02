import { gql, useMutation } from "@apollo/client"

const ENABLE_JOB_QUERY = gql`
    mutation EnableJob($id: ID!, $enabled: Boolean!) {
        enableJob(id: $id, enabled: $enabled) {
            _id
        }
    }
`

const useEnableJob = () => {
    const [mutate, queryResult] = useMutation(ENABLE_JOB_QUERY)

    const enableJob = async (id, enabled) => {
       const { data, ...queryResult } = await mutate({ 
            variables: {
                id,
                enabled
            },
        })

        const job = data?.enableJob
        return {
            job,
            queryResult
        }
    }
    return {
        enableJob,
        queryResult
    }
}

export default useEnableJob