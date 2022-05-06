import { Alert, Box, Link, MenuItem, TextField, Typography } from '@mui/material'
import React, { useCallback, useMemo, useState } from 'react'
import Button from './Button/Button'
import { CommonContainer } from './Styled'
import { contactCommit } from '../fetch/index'
import Logo from '../assets/svg/logo.svg'
import tgImg from '../assets/svg/tg1.svg'
import { useIsSMDown } from '../theme'

const currencies = [
  {
    value: 'Sponsor Inquiry',
    label: 'Sponsor Inquiry',
  },
  {
    value: 'Speaker Submission',
    label: 'Speaker Submission',
  },
  {
    value: 'General Inquiry',
    label: 'General Inquiry',
  },
]

export interface FromData {
  inquiryType: string
  firstName: string
  lastName: string
  jobName: string
  companyName: string
  email: string
  phoneNumber: string
  message: string
}

export default function Footer() {
  const isSm = useIsSMDown()
  const textStyle = {
    '&.MuiTextField-root': {
      marginTop: '6px',
      // '& .MuiSelect-select': {
      //   fontFamily: 'Apple SD Gothic Neo',
      // },
      '& .MuiInputLabel-root': {
        color: 'rgba(255,255,255, 0.5)',
        fontSize: isSm ? 18 : 21,
        fontFamily: 'Apple SD Gothic Neo',
      },
      '& .MuiInput-root': {
        '&:before': {
          borderColor: '#fff !important',
        },
        '&:after': {
          borderColor: '#fff',
        },
        '&.Mui-error:after': {
          borderColor: '#d32f2f',
        },
      },
      '& .MuiInput-input': {
        height: isSm ? 28 : 32,
        fontSize: isSm ? 18 : 21,
        color: '#fff',
      },
      '& .MuiSvgIcon-root': {
        color: '#fff',
      },
      '& .MuiSelect-select': {
        lineHeight: isSm ? '30px' : '32px',
      },
    },
  }
  const [requestResult, setRequestResult] = useState<{
    success: undefined | boolean
    msg: string
    ing: boolean
  }>({
    success: undefined,
    msg: '',
    ing: false,
  })
  const [formData, setFormData] = useState<FromData>({
    inquiryType: '',
    firstName: '',
    lastName: '',
    jobName: '',
    companyName: '',
    email: '',
    phoneNumber: '',
    message: '',
  })
  const [showError, setShowError] = useState(false)
  {
  }

  const handleDataChange = useCallback(
    (tag: string, value: string) => {
      setFormData({ ...formData, [tag]: value })
    },
    [formData]
  )

  const handleChange = useCallback(
    (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      handleDataChange(name, event.target.value)
    },
    [handleDataChange]
  )

  const errorData = useMemo(
    () => ({
      inquiryType: !formData.inquiryType.trim(),
      firstName: !formData.firstName.trim(),
      email:
        !formData.email.trim() ||
        !new RegExp(/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/).test(formData.email),
    }),
    [formData.email, formData.firstName, formData.inquiryType]
  )

  const commit = useCallback(() => {
    if (Object.values(errorData).reduce((a, b) => a || b)) {
      setShowError(true)
      return
    }
    setRequestResult({
      success: undefined,
      msg: '',
      ing: true,
    })
    contactCommit(formData)
      .then((res) => {
        console.log(res)
        setRequestResult({
          success: true,
          msg: 'Commit success',
          ing: false,
        })
        setFormData({
          inquiryType: '',
          firstName: '',
          lastName: '',
          jobName: '',
          companyName: '',
          email: '',
          phoneNumber: '',
          message: '',
        })
        setShowError(false)
      })
      .catch((e) => {
        setRequestResult({
          success: false,
          msg: e || 'Commit failed',
          ing: false,
        })
      })
  }, [errorData, formData])

  return (
    <Box
      sx={{
        background: 'linear-gradient(226.72deg, #9482FE -5.64%, #21549B 97.55%)',
        padding: { sm: '85px 0 73px', xs: '50px 0 80px' },
      }}
    >
      <CommonContainer>
        <Typography variant="h3" fontSize={isSm ? 32 : 72} lineHeight={isSm ? '38px' : '86px'} color="#FFFFFF">
          Contact
        </Typography>
        <Box
          sx={{
            padding: { xs: '0 8%', sm: '0 80px 0 0' },
          }}
        >
          <Box
            sx={{
              display: isSm ? 'block' : 'grid',
              gridTemplateColumns: '1fr 1fr',
              gridColumnGap: '133px',
            }}
          >
            <TextField
              sx={textStyle}
              select
              fullWidth
              label="Select Inquiry Type…"
              value={formData.inquiryType}
              required
              onChange={handleChange('inquiryType')}
              variant="standard"
              error={showError && errorData.inquiryType}
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <span></span>
            <TextField
              sx={textStyle}
              fullWidth
              label="First Name"
              value={formData.firstName}
              onChange={handleChange('firstName')}
              error={showError && errorData.firstName}
              required
              variant="standard"
            />
            <TextField
              sx={textStyle}
              fullWidth
              value={formData.lastName}
              label="Last Name"
              onChange={handleChange('lastName')}
              variant="standard"
            />
            <TextField
              sx={textStyle}
              fullWidth
              label="Job Name"
              value={formData.jobName}
              onChange={handleChange('jobName')}
              variant="standard"
            />
            <TextField
              sx={textStyle}
              fullWidth
              label="Company Name"
              value={formData.companyName}
              onChange={handleChange('companyName')}
              variant="standard"
            />
            <TextField
              sx={textStyle}
              fullWidth
              label="Email"
              value={formData.email}
              error={showError && errorData.email}
              onChange={handleChange('email')}
              required
              variant="standard"
            />
            <TextField
              sx={textStyle}
              fullWidth
              label="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange('phoneNumber')}
              variant="standard"
            />
          </Box>

          <TextField
            sx={textStyle}
            value={formData.message}
            fullWidth
            label="Message"
            onChange={handleChange('message')}
            variant="standard"
          />
          <Box mt={'10px'}>
            {requestResult.success === true && <Alert severity="success">{requestResult.msg}</Alert>}
            {requestResult.success === false && <Alert severity="error">{requestResult.msg}</Alert>}
          </Box>
          <Box mt={isSm ? '42px' : '46px'} mb={isSm ? '42px' : '60px'} display={'flex'} flexDirection={'row-reverse'}>
            <Button
              width={isSm ? 100 : 170}
              height={isSm ? 30 : 60}
              onClick={commit}
              disabled={requestResult.ing}
              color="#fff"
              fontSize={isSm ? 18 : 36}
              backgroundColor="linear-gradient(46.72deg, rgba(255, 255, 255, 0.352628) 2.45%, #837BF0 105.64%)"
            >
              Submit
            </Button>
          </Box>
        </Box>
      </CommonContainer>
      <CommonContainer maxWidth={'1300px'}>
        <Box display={'flex'} justifyContent="space-between" flexWrap={'wrap'} alignItems={'center'}>
          <Box display={'grid'} gap={isSm ? '6px' : '20px'}>
            <Box display={'flex'} gap={isSm ? '16px' : '60px'} alignItems={'center'}>
              <Link underline="none" href="https://twitter.com/0xAlphaDAO" target={'_blank'}>
                <img
                  style={{ width: isSm ? 20 : 35 }}
                  src={
                    'data:image/png;base64,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'
                  }
                  alt=""
                />
              </Link>
              <Link underline="none" href="https://t.me/FeltGood" target={'_blank'}>
                <img alt="" style={{ width: isSm ? 20 : 35 }} src={tgImg.src} />
              </Link>
            </Box>

            <Typography
              variant="h4"
              color={'#fff'}
              fontSize={{ xs: 14, sm: 32 }}
              lineHeight={{ xs: '20px', sm: '38px' }}
            >
              galaxypolygon.com
            </Typography>
          </Box>
          <img src={Logo.src} style={{ width: isSm ? 40 : 73 }} alt="" />
        </Box>
      </CommonContainer>
    </Box>
  )
}
