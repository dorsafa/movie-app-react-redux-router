import React from 'react'
import { Modal, Button } from 'antd';
import  Rater  from 'react-rater'
import 'react-rater/lib/react-rater.css'
import './modal.css'
import { editCard } from '../action/action'
import { connect } from 'react-redux'

class App extends React.Component {
  state = {
    visible: false,
    editedMovie: {
      movieName: '',
      movieImg: '',
      movieYear: '',
      rating: '',
      description: '',
    }

  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleInputChange = (e) => {
    let target = e.target;
    this.setState({
      editedMovie: {
        [target.name]: target.value,
      }
    });
  }

  handleOk = e => {
    e.preventDefault();
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div>
        <Button onClick={this.showModal}>
          Edit
        </Button>
        <Modal
          title="Edit the movie information"
          visible={this.state.visible}
          onOk={(e) => { this.props.handleEdit(this.props.id, this.state.editedMovie); this.handleOk(e) }}
          onCancel={this.handleCancel}
        >
          <div className='form'>
            <h6>Image : </h6>
            <input type='text' placeholder='Enter image source' name='movieImg' value={this.state.editedMovie.movieImg} onChange={(e) => this.handleInputChange(e)} />
            
            <h6>Movie name : </h6>
            <input type='text' name='movieName' placeholder='Movie name' value={this.state.editedMovie.movieName} onChange={(e) => this.handleInputChange(e)} />
            
            <h6>Rating :</h6> 
            <Rater total={5} rating={this.state.rating} onRate={(e) => this.setState({ rating: e.rating })} />
            
            <h6>Year : </h6>
            <input type='text' placeholder='2020' name='movieYear' value={this.state.editedMovie.movieYear} onChange={(e) => this.handleInputChange(e)} />
            
            <h6>Description :</h6>
            <textarea name='description' placeholder='Enter description' value={this.state.editedMovie.description} onChange={(e) => this.handleInputChange(e)} />

          </div>
        </Modal>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    movieList: state
  }
}


const mapDispatchToProps = dispatch => {
  return ({
    handleEdit: (id, editedMovie) => dispatch(editCard(id, editedMovie))
  })
}
export default connect(mapStateToProps, mapDispatchToProps)(App)