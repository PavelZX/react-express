import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';

export default class Index extends Component {

  constructor(props) {
      super(props);
      this.state = {object: []};
    }
    componentDidMount(){
      axios.get('http://localhost:4000/object')
        .then(response => {
          this.setState({ object: response.info });
        })
        .catch(function (error) {
          console.log(error);
        })
    }
    tabRow(){
      return this.state.object.map(function(object, i){
          return <TableRow obj={object} key={i} />;
      });
    }

    render() {
      return (
        <div>
          <h3 align="center">Object List</h3>
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>Object</th>
                <th>Data</th>
                <th colSpan="2">Action</th>
              </tr>
            </thead>
            <tbody>
              { this.tabRow() }
            </tbody>
          </table>
        </div>
      );
    }
  }