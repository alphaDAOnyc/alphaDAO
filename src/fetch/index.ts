import { FromData } from '../components/Footer'

export function contactCommit(data: FromData) {
  const myInit = {
    method: 'POST',
    mode: 'cors' as RequestMode,
    body: JSON.stringify(data),
    headers: { 'content-type': 'application/json', accept: 'application/json' },
  }

  return new Promise((resolve, reject) => {
    fetch('https://testapi.daoframe.com/alphaDAO/contact', myInit)
      .then((response) => {
        if (response.status !== 200) {
          console.error(response)
          reject('server error')
        }
        return response.json()
      })
      .then((response) => {
        if (response.code === 0) {
          resolve('ok')
        } else reject(response.msg)
      })
      .catch((e) => {
        console.error(e)
        reject('server error')
      })
  })
}
