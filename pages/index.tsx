import type { NextPage } from 'next'
import { Box } from '@mui/material'
import Lista from '../src/components/Lista/lista'
import { Professor } from '../src/@types/professor'

const Home: NextPage = () => {
  const professores: Professor[] = [
    {
      id: 1,
      nome: "professor 1",
      foto: "https://github.com/thiagoback.png",
      descricao: "Desc prof",
      valorhora: 200
    },
    {
      id: 2,
      nome: "professor 2",
      foto: "https://github.com/thiagoback.png",
      descricao: "Desc pro13f",
      valorhora: 200
    },
    {
      id: 3,
      nome: "professor 3",
      foto: "https://github.com/thiagoback.png",
      descricao: "Desc prof asd",
      valorhora: 200
    }
  ]

  return (
    <Box sx={{ backgroundColor: 'secondary.main'}}>
      <Lista professores={professores}></Lista>
    </Box>
  )
}

export default Home
