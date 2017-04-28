var React=require('react');
require('./css/todo.css');
var ToDoItem=React.createClass({
  render:function(){
    return(
      <li>
<div className="todo-item">
      <span className="item-name">  {this.props.item}</span>
        <span className="item-remove" onClick={this.childclick}> X </span>
</div>
      </li>
    )

  },
  childclick:function(){
    this.props.childprop(this.props.item);
  }
});
module.exports=ToDoItem;
