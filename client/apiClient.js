import request from 'superagent'

const rootUrl = '/api/v1'

export function getGardens () {
  return request.get(rootUrl + '/gardens')
    .then(res => {
      return res.body.gardens
    })
}