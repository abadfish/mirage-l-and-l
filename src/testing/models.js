import { Model, belongsTo, hasMany } from 'miragejs';

export const models = {
	user: Model.extend({
		subscriptions: hasMany(),
		todos: hasMany()
	}),
	subscription: Model.extend({
		user: belongsTo(),
		product: belongsTo()
	}),
	product: Model
}