var TodoModel = Backbone.Model.extend({
	urlRoot: 'https://tiny-pizza-server.herokuapp.com/collections/HughList',
	defaults: {
		todo: null,
		completed: false,
		user: null,
		password: null
	}
});