import {
  waitFor,
  screen,
  fireEvent,
  act,
	render,
} from '@testing-library/react';
import { default as userEvent } from '@testing-library/user-event';
import { mockApiServer } from '../testing/server';
import { User } from './user'




describe('User page', () => {
	let server

	beforeEach(() => {
		server = mockApiServer("test")
	})

	afterEach(() => {
		server.shutdown()
	})

	describe("shows a list of the user's subscriptions", () => {
		it("shows a sku for each subscription", async () => {
			// const user = server.create('user', 'withSubscriptions')
			// // const userId = server.schema.users.first().id
			// // console.log(userId)
			// render(<User />)
			// const sku = await screen.findByTestId('sku')
			// expect(sku).toBeInTheDocument()
		})
	})
})