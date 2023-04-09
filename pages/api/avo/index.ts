import { NextApiRequest, NextApiResponse } from 'next'
import DataBase from '@database'

const allAvos = async (req: NextApiRequest, res: NextApiResponse) => {
  const database = new DataBase()
  const allEntries = await database.getAll()
  const length = allEntries.length
  res.status(200).json({ data: allEntries, length })
}

export default allAvos
