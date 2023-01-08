import { useState } from 'react'
import axios from 'axios'

const useFetchUsers = (url: string) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState('')
  const [loaded, setLoaded] = useState(false)

  ;(async () => {
    try {
      const response = await axios.get(url)
      setData(response.data)
    } catch (error: any) {
      setError(error.message)
    } finally {
      setLoaded(true)
    }
  })()

  return { data, error, loaded }
}

export default useFetchUsers
