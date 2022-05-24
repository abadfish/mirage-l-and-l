/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Users } from './routes/users'
import { User } from './routes/user'

const App = () => {

	const [users, setUsers] = useState([])
	const [error, setError] = useState('')
	const [userId, setUserId] = useState(null)
	const [user, setUser] = useState({})
	console.log('users: ', users)

	const getUser = () => {
		fetch(`/api/users/${userId}`)
			.then((res) => res.json())
			.then((data) => setUser(data.user))
			.catch((error) => setError('Error fetching user', error));
	}


	console.log(users)
	const getUsers = () => {
		fetch('/api/users')
			.then((res) => res.json())
			.then((data) => setUsers(data.users))
			.catch((error) => setError('Error fetching users', error));
	}

	const getProducts = () => {
		fetch('/api/products')
			.then((res) => res.json())
			.then((data) => console.log(data))
			.catch((error) => setError('Error fetching products', error));
	}

	useEffect(() => {
		getUsers()
		getProducts()
	},[])

	useEffect(() => {
		getUser()
	}, [userId])

  return (
    <div>
      <Header>
				<h1>Mirage Demo</h1>
      </Header>

			<Users users={users} error={error} setUserId={setUserId} />
			<h1></h1>
			{ userId && <User user={user} error={error}/>}
			
    </div>
  );
}

export default App;

const Header = styled.header `
	text-align: center;
	background-color: slategray;
	height: 50px;
	line-height: 50px;
	h1 {
		margin-top: 0;
	}
`