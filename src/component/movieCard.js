import React from 'react'
import { Card } from 'react-bootstrap'
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
import './movieCard.css'
import { connect } from 'react-redux'
import { removeMovieCard } from '../action/action'
import Modal from './editModal'
import { Button } from 'antd';
import { Link } from 'react-router-dom'




function MovieCard(props) {
    return (

        <Card style={{ width: '18rem' }} className='movieCard' >
            <Card.Img variant="top" src={props.list.movieImg} />
            <Card.Body>
                <Rater total={5} rating={Number(props.list.rating)} interactive={false} />
                <Card.Title>{props.list.movieName}</Card.Title>
                <Card.Subtitle>{props.list.movieYear}</Card.Subtitle>
                {console.log('props.list.id ', props.list.id)}
               <Link  to={'/description/${props.list.id}'}>
                   
               <div className='buttonDescription'>
                    <Button>Description</Button>
                </div>
               </Link>
               
                <div className='buttonDeleteEdit' >
                    <Modal id={props.list.id} movie={props.list} />
                    <Button onClick={(e) => { e.preventDefault(); props.handleRemove(props.list.id) }}>Delete</Button>
                </div>

            </Card.Body>
        </Card>
    )


}
const mapStateToProps = state => {
    return {
        movieList: state
    }
}


const mapDispatchToProps = dispatch => {
    return ({
        handleRemove: (id) => dispatch(removeMovieCard(id)),
    })
}
export default connect(mapStateToProps, mapDispatchToProps)(MovieCard)