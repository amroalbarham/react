import React from 'react';
import HornedBeast from './HornedBeast';
import Form from 'react-bootstrap/Form';
import { CardColumns } from 'react-bootstrap';


class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }
    updateHorns = (event) => {
        event.preventDefault();
        let value = event.target.value;
        this.props.filterPc(value);

    }
    render() {
        return (
            <div>
                <Form>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Example select</Form.Label>
                        <Form.Control as="select" custom onChange={this.updateHorns}>
                            <option value='all'>all</option>
                            <option value='1'>one</option>
                            <option value='2'>two</option>
                            <option value='3'>three</option>
                            <option value='100'>wow</option>

                        </Form.Control>
                    </Form.Group>
                </Form>
                <CardColumns>
                    <div className='new'>

                        {this.props.newArr.map((item, index) => {
                            return (
                                <HornedBeast
                                    title={item.title}
                                    imageUrl={item.image_url}
                                    descreption={item.description}
                                    key={index}
                                    index={index}
                                    displayAniml={this.props.displayAniml}
                                />

                            )
                        })
                        }
                    </div>
                </CardColumns>
            </div>
        )
    }
}
export default Main;





