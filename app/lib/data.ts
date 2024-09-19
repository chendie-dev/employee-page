import { sql } from '@vercel/postgres'
import { revalidatePath } from 'next/cache'
import { Employee } from './type'
export async function fetchEployeeById(id: string) {
  try {
    const data = await sql<Employee>`
      SELECT *
      FROM employees
      WHERE id = ${id};
    `
    return data.rows[0]
  } catch (error) {
    console.error('Database Error:', error)
    throw new Error('Failed to fetch employee.')
  }
}
export async function updateEployeeById(
  id: string,
  employeeInfomation: Record<string, any>
) {
  try {
    await sql<Employee>`
      UPDATE employees
      SET employeeInformation = ${JSON.stringify(employeeInfomation)}
      WHERE id = ${id};
    `
    //清除客户端缓存并重新发请求
    revalidatePath('/')
  } catch (error) {
    console.error('Database Error:', error)
    throw new Error('Failed to update employee.')
  }
}
