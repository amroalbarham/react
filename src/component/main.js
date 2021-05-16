import React from 'react';
import HornedBeast from './HornedBeast';


class Main extends React.Component{
    render(){
        return(
            <div>
              
              <HornedBeast title={'green ball'}  />
             
             <HornedBeast  imageUrl={'https://stillmed.olympics.com/media/Images/OlympicOrg/News/2017/05/03/tennis-thumbnail.jpg?interpolation=lanczos-none&resize=300:300' } alt={'roger '} />
             <h4>
             <HornedBeast descreption={'tennis'} />
           </h4> 
           <h2>
              <HornedBeast title={'tennis love'}  />
             </h2> 
            <HornedBeast  imageUrl={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFUcCxdct5L2nFJTJmbKKJgyrLkNV2ufnvJw&usqp=CAU' } alt={'roger'}/>
             <h4>
             <HornedBeast descreption={'tennis'} />
           </h4> 
           </div> 
        )
    }
}
export default Main;
