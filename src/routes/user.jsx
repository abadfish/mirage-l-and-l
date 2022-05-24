/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import styled from 'styled-components'

export const User = ({user, error}) => {


	console.log(user)
	const displaySubs = user?.subscriptions?.map(sub => (
		<p data-testid='sku' key={sub.sku}>{sub.sku}: {sub.product.product_type} - {sub.product.product_name}</p>
	),)
	
	return (
		<Subs>
			<h2>Active Subscriptions for {user?.name}</h2>
			{ displaySubs }
		</Subs>
	)
}

const Subs = styled.main `
	display: flex;
	flex-direction: column;
	align-items: center;
`
