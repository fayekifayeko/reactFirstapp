var React=require('react');
import {Link} from 'react-router';
var About=React.createClass({
  render:function(){
    return(
      <div>
      <Link to={'/'}>Home</Link>
  <h1> About The App</h1>
  </div>
    )

  }

});
module.exports=About;
