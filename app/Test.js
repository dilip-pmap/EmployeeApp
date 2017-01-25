import React, {Component} from 'react';
class Test extends Component {

render () {

  // object
    let myList = [
      { name: 'abc', age: 50 },
      { name: 'xyz', age: 40, hobby: 'cricket'},
      { hobby: 'football'}
    ];


// getting all header keys
    let col = [];
    for (let i = 0; i < myList.length; i++) {
      for (let key in myList[i]) {
        if (col.indexOf(key) === -1) {
          col.push(key);
        }
      }
    }

// we need to push all header keys in th tag
    let headers = [];
    col.forEach( item => {
      headers.push(<th key={`item_header${item}`}>
        {item}&nbsp;</th>
    )
    });

    let rows= [];
    for (let i = 0; i < myList.length; i++) {
      rows.push(<tr key={`${i}`}></tr>);
        col.forEach( item => {
          rows.push(<td key={`item_row_${myList[i][item]}`}>
            {myList[i][item] ? myList[i][item] : null}</td>
          )
      });
  }

return (
  <div>
    <table>
    <tr> {headers}</tr>
    {rows}
    </table>
  </div>
);
}

}


export default Test
