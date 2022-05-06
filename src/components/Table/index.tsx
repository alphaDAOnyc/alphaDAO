import {
  TableContainer,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Box,
  Typography,
  styled,
  Table,
} from '@mui/material'
import { useIsSMDown } from '../../theme'

const Profile = styled('div')(`
  display: flex;
  align-items: center;
`)

export const TableProfileImg = styled('div', {
  shouldForwardProp: () => true,
})(({ url }: { url?: string }) => ({
  height: '24px',
  width: '24px',
  borderRadius: '50%',
  objectFit: 'cover',
  marginRight: '8px',
  background: `#000000 ${url ? `url(${url})` : ''}`,
}))

export function OwnerCell({ url, name }: { url?: string; name: string }) {
  return (
    <Profile>
      <TableProfileImg url={url} />
      {name}
    </Profile>
  )
}

const StyledTableContainer = styled(TableContainer)(
  ({
    sidePadding,
    rootPadding,
    stickyHeader,
    maxHeight,
  }: {
    sidePadding?: string
    rootPadding?: string
    stickyHeader?: boolean
    maxHeight?: string
  }) => ({
    // borderRadius: '40px',
    display: stickyHeader ? 'block' : 'table',
    paddingBottom: maxHeight ? 15 : 0,
    maxHeight: maxHeight || '',
    '& .MuiTableCell-root': {
      fontSize: '16px',
      // borderBottom: 'none',
      fontWeight: 400,
      padding: rootPadding || '14px 20px',
      '& svg': {
        marginRight: 8,
      },
      '&:first-child': {
        paddingLeft: sidePadding || 50,
      },
      '&:last-child': {
        paddingRight: sidePadding || 50,
      },
    },
    '& table': {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: '0 8px',
    },
  })
)

const StyledTableHead = styled(TableHead)(
  ({ sidePadding, rootPadding }: { sidePadding?: string; rootPadding?: string }) => ({
    borderRadius: 8,
    overflow: 'hidden',
    '& .MuiTableCell-root': {
      background: 'rgba(255, 255, 255, 0.08)',
      padding: rootPadding || '12px 20px',
      fontSize: '12px',
      fontWeight: 500,
      color: 'rgba(0, 0, 0, 0.5)',
      borderBottom: 'none',
      '&:first-child': {
        paddingLeft: sidePadding || 50,
        borderTopLeftRadius: 8,
      },
      '&:last-child': {
        paddingRight: sidePadding || 50,
        borderTopRightRadius: 8,
      },
    },
  })
)

const StyledTableRow = styled(TableRow)({
  height: 50,
  '& .MuiTableCell-root': {
    borderTop: '1px solid rgba(66, 63, 71, 0.1)',
    '&:first-child': {
      borderLeft: '1px solid rgba(66, 63, 71, 0.1)',
      borderRadius: '16px 0 0 16px',
    },
    '&:last-child': {
      borderRight: '1px solid rgba(66, 63, 71, 0.1)',
      borderRadius: '0 16px 16px 0',
    },
  },
  '&:hover': {
    backgroundColor: '1px solid rgba(66, 63, 71, 0.1)',
  },
})

const Card = styled('div')({
  backgroundColor: 'rgba(255, 255, 255, 0.08)',
  borderRadius: '30px',
  padding: '24px',
  '& div': {
    width: '100%',
  },
  border: '1px solid rgba(66, 63, 71, 0.1)',
})

const CardRow = styled('div')(`
  display: flex;
  justify-content: space-between;
  grid-template-columns: auto 100%;
  > div:first-child {
    white-space: nowrap;
  }
  > div:last-child {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`)

export default function CTable({
  header,
  rows,
  sidePadding,
  rootPadding,
  stickyHeader,
  stickyHeaderBg,
  maxHeight,
}: {
  sidePadding?: string
  header: string[]
  rows: (string | number | JSX.Element)[][]
  rootPadding?: string
  stickyHeader?: boolean
  stickyHeaderBg?: string
  maxHeight?: string
}) {
  const matches = useIsSMDown()

  return (
    <>
      {matches ? (
        <Box display="flex" flexDirection="column" gap="10px">
          {rows.map((data, index) => (
            <Card key={index}>
              <Box display="flex" flexDirection="column" gap="20px">
                {header.map((headerString, index) => (
                  <CardRow key={index}>
                    <Typography variant="inherit" sx={{ opacity: 0.5 }}>
                      {headerString}
                    </Typography>
                    <Typography style={{ color: '#000' }}> {data[index] ?? null}</Typography>
                  </CardRow>
                ))}
              </Box>
            </Card>
          ))}
        </Box>
      ) : (
        <StyledTableContainer
          sidePadding={sidePadding}
          rootPadding={rootPadding}
          maxHeight={maxHeight}
          stickyHeader={stickyHeader}
          className="overflowClass"
          style={{ paddingRight: stickyHeader ? 10 : 0 }}
        >
          <Table stickyHeader={stickyHeader}>
            <StyledTableHead sidePadding={sidePadding} rootPadding={rootPadding}>
              <TableRow>
                {header.map((string, idx) => (
                  <TableCell
                    key={idx}
                    style={{
                      backgroundColor: stickyHeaderBg || 'transparent',
                    }}
                  >
                    {string}
                  </TableCell>
                ))}
              </TableRow>
            </StyledTableHead>

            <TableBody>
              {rows.map((row, idx) => (
                <StyledTableRow key={row[0].toString() + idx}>
                  {row.map((data, idx) => (
                    <TableCell key={idx}>{data}</TableCell>
                  ))}
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </StyledTableContainer>
      )}
    </>
  )
}
