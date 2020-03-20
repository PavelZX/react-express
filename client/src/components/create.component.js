import React, { Component } from 'react';
import axios from 'axios';

export default class Create extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person_name: '',
      object_name: '',
      object_gst_number:''
    }
  }
  onChangePersonName = (e) => {
    this.setState({
      person_name: e.target.value
    });
  }
  onChangeObjectName = (e) => {
    this.setState({
      object_name: e.target.value
    })  
  }
  onChangeGstNumber = (e) => {
    this.setState({
      object_gst_number: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    const obj = {
      person_name: this.state.person_name,
      object_name: this.state.object_name,
      object_gst_number: this.state.object_gst_number
    };
    axios.post('http://localhost:4000/object/add', obj)
        .then(res => console.log(res.data));
    
    this.setState({
      person_name: '',
      object_name: '',
      object_gst_number: ''
    })
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3 align="center">Add New Object</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Object Name: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.object_name}
                      onChange={this.onChangeObjectName}
                      />
                </div>
                <div className="form-group">
                    <label>Data: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.object_gst_number}
                      onChange={this.onChangeGstNumber}
                      />
                </div>
                <div className="form-group">
                    <input type="submit" 
                      value="Register Object" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}