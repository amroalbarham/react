import React from 'react';
import HornedBeast from './HornedBeast';
import Data from './data.json'
import {CardColumns} from 'react-bootstrap'


class Main extends React.Component {
    

    render() {
        return (
            <CardColumns>
            <div className='new'>
         
                {Data.map(item => {
                    return (
                        <HornedBeast
                            title={item.title}
                            imageUrl={item.image_url}
                            descreption={item.description}
                        />
                    ) })
                }



            </div>
            </CardColumns>
        )
    }
}
export default Main;
