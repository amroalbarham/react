import React from 'react';
import HornedBeast from './HornedBeast';

import { CardColumns } from 'react-bootstrap'


class Main extends React.Component {


    render() {
        return (
            <CardColumns>
                <div className='new'>

                    {this.props.Data.map((item, index) => {
                        return (
                            <HornedBeast
                                title={item.title}
                                imageUrl={item.image_url}
                                descreption={item.description}
                                key={index}
                                displayAniml={this.props.displayAniml}
                            />

                        )
                    })
                    }
                </div>
            </CardColumns>
        )
    }
}
export default Main;





