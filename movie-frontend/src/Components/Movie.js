import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

import MovieService from '../Services/Movie_service'

class Movie extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movie: props.movie,
            theater: props.theater,
            filmDate: props.filmDate,
            movieDetails: undefined
        }
    }

    componentDidMount() {
        this.setState({
            movieDetails: MovieService.getMovieDetails(this.state.movie.id)
        });
    }

    render() {
        const { movie, movieDetails, theater, filmDate } = this.state;
        console.log(movieDetails);
        return (
            <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={"images/" + movie.imageName} alt="movie-photo" />
                <Card.Body>
                    <Card.Title>{movie.filmName}</Card.Title>
                </Card.Body>
                    {/* <Link to={'/bookingPage/' + movie.id}>
                        <Button variant="primary" >Book</Button>{' '}
                    </Link> */}
                    <Link to={{
                        pathname: '/bookingPage',
                        state: {
                            movie: movie,
                            theater: theater,
                            filmDate: filmDate
                        }
                    }}><Button>Book</Button></Link>
            </Card>


            </div>
        )
    }
}


export default Movie;
