var React=require('react');
require('./css/addtodo.css');
var AddItem=React.createClass({
  render:function(){
    return(
      <form id="add-todo" onSubmit={this.handleSubmit}>
      <input type="text" required ref="newitem"/>
      <input type="submit" value="Hit Me" />
      </form>
  );

},
handleSubmit:function(e){
  e.preventDefault();
  this.props.itemsubmit(this.refs.newitem.value);
}


});
module.exports=AddItem;
