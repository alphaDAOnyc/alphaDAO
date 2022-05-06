import { useEffect, useState } from 'react'
import { contractList } from '../fetch'

export interface ContactRecord {
  companyName: string
  email: number
  firstName: string
  inquiryType: string
  jobName: string
  lastName: string
  message: string
  phoneNumber: string
}
export function useContactRecordList() {
  const [loading, setLoading] = useState<boolean>(false)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [total, setTotal] = useState<number>(0)
  const [page, setPage] = useState<number>(0)
  const pageSize = 10
  const [result, setResult] = useState<ContactRecord[]>([])

  useEffect(() => {
    ;(async () => {
      setLoading(true)
      try {
        const res = (await contractList(currentPage, pageSize)) as any
        setLoading(false)
        const data = res
        if (!data) {
          setResult([])
          return
        }
        setTotal(data.totalCount)
        setPage(Math.round(data.totalCount / pageSize))
        const list = data.data
        setResult(list)
      } catch (error) {
        setResult([])
        setLoading(false)
        console.error('useContactRecordList', error)
      }
    })()
  }, [currentPage])

  return {
    loading: loading,
    page: {
      setCurrentPage,
      currentPage,
      total,
      page,
      pageSize,
    },
    result,
  }
}
