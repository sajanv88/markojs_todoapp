export default class Home {
    onCreate(){
        this.state = {
            showDialog: false,
            formInvalid: false,
            todos: [{
                id: Date.now(),
                title: 'Default todo title',
                description: 'Hey there!'
            }]
        }
    }
    handleClick(event) {
      this.state.showDialog = true;
    }
    handleFormSubmit({target}) {
        const { title, description } = target;
        if(!title.value?.trim() || !description.value?.trim() ) {
            this.state.formInvalid = true;
            setTimeout(() => {
                this.state.formInvalid = false;
            },1000);
            return;
        }
        const newTodo = {
            id: Date.now(),
            title: title.value,
            description: description.value
        };
        this.state.todos = [...this.state.todos, newTodo];
        this.state.showDialog = false;
    }
    handleDelete({id}) {
        const filter = this.state.todos.filter(todo => todo.id !== id);
        this.state.todos = [...filter];
      
    }
    handleDialogClose({close}) {
        this.state.showDialog = !close;
    }
  }