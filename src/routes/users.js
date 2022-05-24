import React from 'react'
import styled from 'styled-components'


export const Users = ({users, error, setUserId}) => {

	const listUsers = users?.map((user, i) => (
		<div key={i}>
			<p>{user.name} <button onClick={() => setUserId(user.id)}>View User</button></p>
		</div>
	))
	if (users) {
		return (
			<Main data-testid="users">
				{ listUsers }
			</Main>
		)
	}
	return (
		<div>Loading.....</div>
	)
}

const Main = styled.main `
	margin: 1rem;
	display: flex;
	flex-direction: column;
	align-items: center;

`
