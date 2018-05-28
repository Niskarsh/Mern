








fetch("/user/a/show").then(
    (res)=>{
      res = res.json();
      res.then((todos)=>{
        // console.log(todos)
        // this.setState.todos=a;
        var a=JSON.parse(todos);
        this.setState({
          todo : a
        });
        console.log(this.state.todo)
        
      // console.log(res)
      // this.todos.setState=this.state.todos;
      
    })
  }
  ,()=>{}
  ).catch((error)=>{
    alert(error);
  });