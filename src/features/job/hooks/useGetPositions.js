import { gql, useLazyQuery, useQuery } from "@apollo/client"


const GET_POSITIONS_QUERY = gql`
    query GetPositions {
        positions {
           _id
          name
          alias
          enabled
        }
    }

`

const useGetPositions = () => {
  const { data, ...queryResult } = useQuery(GET_POSITIONS_QUERY, {
    notifyOnNetworkStatusChange: true
  })

  return {
    positions: data?.positions,
    queryResult
  }
}

export const useLazyGetPositions = () => {
  const [getData, queryResult] = useLazyQuery(GET_POSITIONS_QUERY, {
      notifyOnNetworkStatusChange: true,
  })

  const getPositions = async () => {
      const { data } = await getData()
      
      const positions = data?.positions
      return positions
  }

  return {
      getPositions,
      queryResult
  }
}

export default useGetPositions