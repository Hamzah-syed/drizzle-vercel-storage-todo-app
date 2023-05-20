import Image from 'next/image'
import TodoList from '@/components/TodoList'
import AddTodo from '@/components/AddTodo'

export default function Home() {
  return (
    <main className='bg-gradient-to-tr from-primary to-secondary h-screen
   flex justify-center items-center'>
      <div className='px-6 py-8 rounded-xl bg-gradient-to-br from-[#D9D9D9]/50 to-[#D9D9D9]/60  backdrop-blur-xl w-full max-w-md'>
        {/* Todo List */}
        {/* @ts-ignore */}
        <TodoList />
        {/* Add Todo */}
        <AddTodo />

        {/* Bar */}
        <div className='w-1/2 h-1.5 bg-black/80 rounded mx-auto mt-6'></div>
      </div>
    </main>
  )
}
