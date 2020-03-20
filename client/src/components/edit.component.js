import React, { Component } from 'react';
import axios from 'axios';

export default class Edit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      object_name: '',
      data:''
    }
  }

  componentDidMount() {
      axios.get('http://localhost:4000/object/:id/'+this.props.match.params.id)
          .then(response => {
              this.setState({ 
                object_name: response.info.object_name,
                data: response.info.data });
          })
          .catch(function (error) {
              console.log(error);
          })
    }

  onChangeObjectName = (e) => {
    this.setState({
      object_name: e.target.value
    })  
  }

  onChangeData = (e) => {
    this.setState({
      data: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    const obj = {
      object_name: this.state.object_name,
      data: this.state.data
    };
    axios.post('http://localhost:4000/object/update/'+this.props.match.params.id, obj)
        .then(res => console.log(res.data));
    
    this.props.history.push('/index');
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3 align="center">Update Object</h3>
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
                      value={this.state.data}
                      onChange={this.onChangeGstNumber}
                      />
                </div>
                <div className="form-group">
                    <input type="submit" 
                      value="Update Object" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}