// TODO
// var App = () => (
//   <div>Some cliche salutation</div>
// );
// var List = (props) => {
  
//   var onListItemClick = (event) => {
//     console.log(event);
//   };

//   // var onListItemClick = (event) => {
//   //   console.log('I got clicked');
//   // };

//   return (
//     <ul>
//       <li onClick={onListItemClick}> {props.items[0]} </li>
//       <li onClick={onListItemClick}> {props.items[1]} </li>
//       <li onClick={onListItemClick}> {props.items[2]} </li>
//     </ul>
//   );
// };


// var GroceryList = () => (
//   <div>
//     <h1> My grocery list </h1>
//     <List items={['Steak', 'Potatoes', 'Cheese']} />
//   </div>
// );

// ReactDOM.render(<App />, document.getElementById("actual-dom-element-where-I-want-to-render-my-component"));


class ListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      done: false
    };
  }

  onListItemHover(){
    this.setState({
      done: !this.state.done
    });
  }


  render() {
    var style = {
      fontWeight: this.state.done ? 'bold' : 'normal'
    }


    return (
      <li style={style} onClick={this.onListItemHover.bind(this)}> {this.props.item} </li>
    );
  }
};

var List = (props) => (
  <ul>
    {props.items.map(item => 
      <ListItem item={item} />
    )}
  </ul>
);


var GroceryList = (props) => (
  <div> 
    <h1> Groceries </h1>
    <List items={['streamers', 'balloons', 'funfetti']} />
  </div>
);

ReactDOM.render(<GroceryList />, document.getElementById("app"));








