var AppView = Backbone.View.extend({
	el: '#app-view',
	initialize: function() {

		_.bindAll(
			this,
			'onAddButtonClick',
			'onTodoAdded',
			'onSubmitButtonClick'
		);

		this.$addButton = $('#add-button');
		this.$myList = $('#my-list');
		this.$appendHere = $('#append-here');
		this.$submit = $('#submit-button')

		this.todo = new TodoCollection();
		
		this.$submit.on('click', this.onSubmitButtonClick);
		this.$addButton.on('click', this.onAddButtonClick);
		this.todo.on('add', this.onTodoAdded);

	},

	onAddButtonClick: function() {
		this.newTodo = new TodoModel();
		this.newTodo.set({
			todo: $('#text-box').val(),
			user: $('#user').val(),
			password: $('#password').val()
		});
		this.todo.add(this.newTodo);
		this.newTodo.save();
	},

	onTodoAdded: function(newTodo) {
		var newTodoView = new TodoView({model: newTodo});
		this.$appendHere.append(newTodoView.$todo);
	},

	onSubmitButtonClick: function(user) {
		user = $('#user').val();
		// this.todo.model.user;
		console.log(this);
		console.log(self.TodoCollection.TodoModel['user']);
		
		// if(user = self.todo({user}))
		// self.todo.fetch();


		// this.savedTodo =  this.model.get('user');
	
		// this.savedTodoView = this.savedTodo.fetch({
		// 	todo: ''
		// });
		// console.log(this.savedTodoView.todo);
		// this.$appendHere.append(this.savedTodoView);
	}
});