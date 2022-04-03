class ShoppingItem extends React.Component {
    render() {
      console.log("rendering");
      return <div>Elemento di nome: {this.props.elementName}</div>
    }
  }
  
  class ShoppingList extends React.Component {
  
      renderList(items) {
        return (
        <div>
          {
            items.map(
            (element) => <ShoppingItem elementName={element}></ShoppingItem>
            )
            }
        </div>)
        }
      
      render() {
          return (
              <div> Primo componente React, si autoaggirona 
                <ul>
                <li>
                    {this.renderList(["pane","pasta","condorelli"])}
                </li>
                </ul>
              </div>
          );
      }
  }