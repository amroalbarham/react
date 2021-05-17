import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'



class HornedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numberOfpets: 0,
        }
    }
    increaseNumberofclicks = () => {
        this.setState({

            numberOfpets: this.state.numberOfpets + 1,
        })
    }
    render() {
        return (
            
            // <h2>{this.props.title}</h2> <img onClick={this.increaseNumberofclicks} src={this.props.imageUrl} alt={this.props.title} title={this.props.title} /> <p>this number {this.state.numberOfpets}</p> <p>{this.props.descreption}</p>
            <div> 

                <Card style={{ width: '18rem' }}>
                    <Card.Img   variant="top" src={this.props.imageUrl} />
                    <Card.Body>
                        <Card.Title>title={this.props.title}</Card.Title>
                        <Card.Text>
                        {this.props.descreption}
                        </Card.Text>
                        <Button onClick={this.increaseNumberofclicks} variant="primary">😸 Vote {this.state.numberOfpets}  </Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
export default HornedBeast;