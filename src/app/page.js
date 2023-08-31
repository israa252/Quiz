import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
  <main>
    <div className='Container'>
      <h1 >Quiz App</h1> 
      <Link href="/quiz">
        <button> Start Quiz</button>
      </Link>
    </div>

  </main>

  )
}
