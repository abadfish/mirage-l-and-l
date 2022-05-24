import {
  screen,
	render,
} from '@testing-library/react';
import { mockApiServer } from '../testing/server';
import { Users } from './users'




describe('User page', () => {

	describe("shows a list of the user's subscriptions", () => {
		it("shows a name for each user", async () => {
			let server = mockApiServer()
			await render(<Users />)
			const users = await screen.findByTestId('users')
			expect(users).toBeInTheDocument()
			server.shutdown()
		})
	})
})