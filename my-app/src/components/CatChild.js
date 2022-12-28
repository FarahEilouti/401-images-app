import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class CatChild extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            numOfPets : 0,
            numOfTunas: 0
        }
    }

    incrementNumOfPets = () => {
        this.setState({
            numOfPets : this.state.numOfPets+1
        })
    }

    takingTuna = () => {
        // increment numOfTunas by 1
        this.setState({
            numOfTunas : this.state.numOfTunas+1
        })
        // decrement totalNumOfTunas by 1 
        this.props.decremnt();
    }
    
    render() {
        return (
            <>
                {/* <h3>cat component</h3>
                <img src={this.props.imgPath} />
                <p>name : {this.props.name}</p>
                <p>Num of Pets: </p>
                <p>Num of Tunas: </p>
                <button>I need a tuna!</button> */}

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.imgPath} onClick={this.incrementNumOfPets}/>
                    <Card.Body>
                        <Card.Title>{this.props.name}</Card.Title>
                        <Card.Text>
                        <p>Num of Pets: {this.state.numOfPets}</p>
                        <p>Num of Tunas: {this.state.numOfTunas}</p>
                        </Card.Text>
                        <Button variant="primary" onClick={this.takingTuna}>I need a tuna!</Button>
                    </Card.Body>
                </Card>
            </>
        )
    }
}

export default CatChild;