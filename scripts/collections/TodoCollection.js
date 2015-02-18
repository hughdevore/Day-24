var TodoCollection = Backbone.Collection.extend({
	url: 'https://tiny-pizza-server.herokuapp.com/collections/HughList',
	model: TodoModel
});