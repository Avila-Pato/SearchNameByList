
import { useEffect, useState } from 'react'
import './App.css'
import { User,  } from './interface/interface'
import SearchBotton from './components/SearchBotton'

function App() {
  const [users, setUsers] = useState<User[]>([])
  const [filteredUsers, setfilteredUsers ]=  useState<User[]>([])

  useEffect(() => {
    const fetchRandomUsers = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/?results=10')
        const data = await response.json();
        setUsers(data.results)
      } catch (error) {
        console.log(`Error de fetch + ${error}`)
      }
    }
    fetchRandomUsers()
  }, [])


  // Filtrando personas

  const filterUser = (searchString: string) => {
    const filtered = users.filter((user) => 

      user.name.first.toLocaleLowerCase().includes(searchString.toLocaleLowerCase())
    )
    setfilteredUsers(filtered)
  }

  return (
    <main>
      <aside>
        <h1>Prueba</h1>
        <h2>Buscar nombres de lista</h2>
       <SearchBotton handleChange={filterUser} /> 
      </aside>

      <aside id='right'>
        <h2>Lista de nombres</h2>
        <ul>
          {
            filteredUsers.map((user: User, index) => (
              <div key={index}>
                <div>
                   {user.name.first} 
                </div>
              </div>
            ))
          }
        </ul>
      </aside>
    </main>
  )
}export default App
