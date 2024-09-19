import { fetchEployeeById, updateEployeeById } from './lib/data'

export default async function Home() {
  const data1 = await updateEployeeById(
    'e40bca81-b8b4-416a-8ce8-7c7e60432a51',
    { name: 'chendie', age: 17, department: 'Engineering' }
  )

  console.log(data1)
  const data = await fetchEployeeById('e40bca81-b8b4-416a-8ce8-7c7e60432a51')
  console.log('查询内容', data)
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        hahahahh
      </main>
    </div>
  )
}
