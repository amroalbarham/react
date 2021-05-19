import React from 'react';
import Header from './component/header';
import Footer from './component/footer';
import Main from './component/main';
import Data from './component/data.json';
import SelectedBeast from './component/SelectedBeast'


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false,
      selectedAnimal: {},
      listData: Data,

    }
  }

  handleShow = () => {
    this.setState({
      show: true,
    })

  }
  filterPc = (value) => {
    let filterArr = Data.filter(elemnt => {
      if (elemnt.horns == value) {
        return elemnt
      } else if (value == 'all') {
        return elemnt
      }
    })
    this.setState({
      listData: filterArr
    })
  }

  handleClose = () => {
    this.setState({
      show: false,
    })
  }
  displayAniml = (title) => {
    const selectedAnimal = Data.find(animle => {
      if (animle.title === title) {
        return animle;

      }
    })
    this.setState({
      show: true,
      selectedAnimal: selectedAnimal,

    })
  }


  render() {
    return (
      <div>
        <Header />
        <Main
          newArr={this.state.listData}
          handleShow={this.handleShow}
          displayAniml={this.displayAniml}
          filterPc={this.filterPc}
        />
        <SelectedBeast
          handleClose={this.handleClose}
          show={this.state.show}
          selectedAnimal={this.state.selectedAnimal}
        />
        <Footer />
      </div>
    )
  }
}




export default App;

