import axios from 'axios'

export const getMarksSheet = async (token, reqDTO) => {
  console.log('run')
  const { data } = await axios({
    url: `${import.meta.env.VITE_API_URL}/marks`,
    method: 'POST',
    data: reqDTO,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  return data
}
