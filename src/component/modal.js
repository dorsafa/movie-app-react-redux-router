import { Modal } from 'antd';
import React from 'react'
import './modal.css'
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
import { Card } from 'react-bootstrap'
import 'antd/dist/antd.css'
import { connect } from 'react-redux';
import { addMovieCard } from '../action/action'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      movieName: '',
      movieImg: '',
      movieYear: '',
      rating: '',
      id: '',
      description: '',
    }
  }

  handleInputChange = (e) => {
    let target = e.target;
    this.setState({
      [target.name]: target.value,
    });
  }


  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
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
        <Modal
          title="Add movie"
          visible={this.state.visible}
          onOk={() => { this.props.handleAdd(this.state, this.state.id ); this.handleOk(); this.setState({id:Date.now()}) }}
          onCancel={this.handleCancel}
        >
          <div className='form'>
           
            <h6>Image : </h6>
            <input type='text' placeholder='Enter image source' name='movieImg' value={this.state.movieImg} onChange={(e) => this.handleInputChange(e)} />
            <h6>Movie name : </h6>
            <input type='text' name='movieName' placeholder='Movie name' value={this.state.movieName} onChange={(e) => this.handleInputChange(e)} />
            <h6> Rating :</h6>
            <Rater total={5} rating={Number(this.state.rating)} onRate={(e) => this.setState({ rating: e.rating })} />
            <h6>Year : </h6>
            <input type='text' placeholder='2020' name='movieYear' value={this.state.movieYear} onChange={(e) => this.handleInputChange(e)} />
            <h6>Description :</h6>
            <textarea name='description' placeholder='Enter description' value={this.state.description} onChange={(e) => this.handleInputChange(e)} />


          </div>



        </Modal>
        <Card style={{ width: '18rem' }} onClick={this.showModal} className='movieCard' bg="light">
          <Card.Img variant="center" src='http://minecraft.smashzap.de/img/rp/fadenkreuz.png' />
        </Card>
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
    handleAdd: (payload) => dispatch(addMovieCard(payload))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(App)