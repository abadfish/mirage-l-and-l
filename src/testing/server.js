import { 
	createServer, 
	RestSerializer, 
	Factory, 
	Model,
	hasMany,
} from "miragejs"
import { faker } from '@faker-js/faker'

export function mockApiServer ({ environment = 'test' } = {}) {

  let server = createServer({
		environment: environment,
		serializers: {
      subscription: RestSerializer.extend({
        include: ['user'],
        embed: true,
      }),
    },

		models: {
			user: Model.extend({
				subscriptions: hasMany(),
			}),
			subscription: Model,
			product: Model
		},
		seeds(server) {
			server.create('product', {
				product_type: 'food',
				product_name: 'Coffee',
			})
			server.create('user', {
				id: faker.datatype.number(2),
				name: faker.name.firstName(),
				role: 'customer',
				// subscriptions: [server.create('subscription')],
			})
			server.create('user', {
				id: faker.datatype.number(2),
				name: faker.name.firstName(),
				role: 'customer',
				// subcriptions: [server.create('subscription')]
			})

			server.create('product')
			server.create('product')
    },
    factories: {
			subscription: Factory.extend({
				sku: faker.datatype.string(5),
			}),
			product: Factory.extend({
				product_name: faker.commerce.productName(),
				product_type: faker.commerce.productAdjective()
			})
		},
    
    routes() {  // routes is a hook from mirage
			this.namespace = 'api';

			this.get(`/users`, (schema, request) => {
				return schema.users.all()
			})

			this.get(`/subscriptions`, (schema, request) => {
				return schema.subscriptions.all()
			})

			this.get(`/users/:id`, (schema, request) => {
        return schema.users.find(request.params.id)
      })

			this.get(`/products`, (schema, request) => {
				return schema.products.all()
			})

    },
  })
	return server
}