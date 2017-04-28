var React=require('react');
var ReactDom=require('react-dom');
var ToDoItem=require('./ToDoItem');
var AddItem=require('./addItem');
var About=require('./about');
import {Router,Route,browserHistory,Link} from 'react-router';
require('./css/index.css');

var App=React.createClass({
  render:function(){
    return(
<Router history={browserHistory}>
<Route path={'/'} component={ReactComponent}></Route>
<Route  path={'/about' } component={About}></Route>
</Router>
    )

  }

});
module.exports=About;
//Create a Component
var ReactComponent=React.createClass({
  getInitialState:function(){
    return {
      todos:['wakeup','drink','eat'],
    //  age:30
    }//getInitialState

  },

  render:function(){
    var todos=this.state.todos;
    todos= todos.map(function(item,index){
       return (
         <ToDoItem item={item} key={index} childprop={this.parentclick}/>
       );
     }.bind(this));
    // var newAge=setTimeout(function(){
    //   this.setState({
    //     age:35
    //   })
    // }.bind(this),5000);

    return(

      <div>
 
      <div id="todos-list">
      <Link to={'/about'}>About</Link>
          <h1>Tasks</h1>
          <ul id="mylist">{todos}</ul>
          <AddItem itemsubmit={this.itemsubmitp}/>
      </div>
      </div>
    )
  }//render
  ,
  parentclick:function(item){
  var updatedtodos=  this.state.todos.filter(function(val,index){
      return item!=val;
    })
    this.setState(
      {
        todos:updatedtodos
      }
    );
  },
  itemsubmitp:function(item){
  var updatedtodos=  this.state.todos;
  updatedtodos.push(item);
    this.setState(
      {
        todos:updatedtodos
      }
    );
  }
});
//Create ToDoItem Component

var person={firstname:"Fayek",lastname:"Almir"};
//Put a Component Into HTML Page
ReactDom.render(<App />,document.getElementById('todo-wrapper'));
//ReactDom.render(<ReactComponent title="Pesrsons Info" person={person}/>,document.getElementById('todo-wrapper'));
