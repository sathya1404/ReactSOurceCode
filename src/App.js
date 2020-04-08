import React, { Component } from 'react';

import Demo from './components/Demo'
import Toolbar from './components/Toolbar/Toolbar'
import SideDrawer from './components/SideDrawer/SideDrawer'
import Backdrop from './components/Backdrop/Backdrop'

class App extends Component {
  state = {
    sideDrawerOpen: false,
  }

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    })
  }

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false })
  }

  render() {
    let backdrop
    let sideDrawer

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
      sideDrawer = <SideDrawer />
    }
    return (
      <div style={{ height: '100%' }}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <sideDrawer show={this.state.sidedrawerOpen} />
        {backdrop}
        <Demo />
        <main style={{ marginTop: '64px' }}>
          <p>This is the page content!</p>
        </main>
      </div>
    )
  }
}

export default App
