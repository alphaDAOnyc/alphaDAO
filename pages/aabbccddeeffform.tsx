import { Box, Typography } from '@mui/material'
import React, { useMemo } from 'react'
import { CommonContainer } from '../src/components/Styled'
import Table from '../src/components/Table'
import { useContactRecordList } from '../src/hooks'
import Pagination from '../src/components/Pagination'

const headers = [
  'Inquiry Type',
  'First Name',
  'Last Name',
  'Job Name',
  'Company Name',
  'email',
  'phoneNumber',
  'message',
]

export default function Aabbccform() {
  const { loading, page, result } = useContactRecordList()

  const rows = useMemo(
    () =>
      result.map((item) => [
        item.inquiryType,
        item.firstName,
        item.lastName,
        item.jobName,
        item.companyName,
        item.email,
        item.phoneNumber,
        item.message,
      ]),
    [result]
  )

  return (
    <CommonContainer maxWidth={'1920px'} sx={{ padding: '30px' }}>
      <Typography variant="h2">Contact list</Typography>
      {loading && (
        <Box
          display={'flex'}
          justifyContent="center"
          alignItems={'center'}
          sx={{
            padding: '50px 0',
          }}
        >
          Loading
        </Box>
      )}
      {!loading && (
        <>
          <Table stickyHeader stickyHeaderBg="#fff" maxHeight={'500px'} header={headers} rows={rows}></Table>
          <Box sx={{ margin: '15px' }}>
            <Pagination page={page.currentPage} count={page.page} setPage={page.setCurrentPage}></Pagination>
          </Box>
        </>
      )}
    </CommonContainer>
  )
}
