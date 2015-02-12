var TodoView = Backbone.View.extend({

	initialize: function(newTodo) {

		_.bindAll(
			this,
			'onListClick',
			'onModelChanged'
		);

		
		var todoTemplate = _.template($('#my-list').html());
		this.$todo = $(todoTemplate(this.model.attributes));
		this.$checkBox = $(this.$todo.find('.check-box'));

		this.$checkBox.on('click', this.onListClick);
		this.model.on('change: completed', this.onModelChanged);
	},

	onListClick: function() {

		if(this.model.get('completed')) {
			this.model.set({
				completed: false
			});
		} else {
			this.model.set({
				completed: true
			})
		}
	},

	onModelChanged: function() {
		console.log(this.$todo);
		this.$todo.toggleClass('todo-check-box-clicked')
	}

});