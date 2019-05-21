import React from 'react';
import './App.css';
// import setUserInput from './helpers/setUserInput'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userInput: '',
      generatedStyles: {},
      content: '',
      keywords: {
        'Rechteck': {width: '200px', height: '100px'},
        '1px Rand': {border: '1px solid white', },
        '200px Breite': {width: '200px'},
        '300px Höhe': {height: '300px'},
        'Hintergrundfarbe Rot': {backgroundColor: 'red'},
        'Hintergrundfarbe Blau': {backgroundColor: 'blue'},
        'Randfarbe Schwarz': {border: '1px solid black'},
        'Quadrat': {width: '200px', height: '200px'},
        'Text': this.setState({content: 'Ich bin ein Rechteck'}),
        'Lato': {fontFamily: 'Lato'},
        'Roboto': {fontFamily: 'Roboto'},
        'bold': {fontWeight: 'bold'},
        'Dreieck': {height: '600px', width: '400px', backgroundImage: `url(https://www.inaffect.net/assets/images/portfolio/portfolio_2-2_yoojis.jpg)`},
        'Bild': null
      }
    }
  }

  iterateOverUserInput = () => {
    const input = this.state.userInput

    if (input in this.state.keywords) {
      console.log('this.state.keywords[input]', this.state.keywords[input])
      this.setState({generatedStyles: this.state.keywords[input]})
      const stylesObject = {...this.state.generatedStyles}
    }
  }

  setUserInput = () => {
    const input = this.state.userInput
    switch (input) {
      case 'Zeichne ein Rechteck mit 1px Rand':
        this.setState({
          generatedStyles: {
            border: '1px solid white',
            width: '200px',
            height: '100px'
          }
        })
        break
      case 'Zeichne ein Rechteck mit 200px Breite und 300px Höhe':
        this.setState({
          generatedStyles: {
            width: '200px',
            height: '300px',
            backgroundColor: 'white'
          }
        })
        break
      case 'Zeichne ein Rechteck mit 1px Rand und 200px Breite und 300px Höhe':
        this.setState({
          generatedStyles: {
            border: '1px solid white',
            width: '200px',
            height: '300px'
          }
        })
        break
      case 'Zeichne ein Rechteck mit Hintergrundfarbe Rot':
        this.setState({
          generatedStyles: {
            width: '200px',
            height: '100px',
            backgroundColor: 'red'
          }
        })
        break
      case 'Zeichne ein Rechteck mit Hintergrundfarbe Blau und 200px Breite und 300px Höhe und 1px Rand':
        this.setState({
          generatedStyles: {
            backgroundColor: 'blue',
            width: '200px',
            height: '300px',
            border: '1px solid white'
          }
        })
        break
      case 'Zeichne ein Rechteck mit Hintergrundfarbe Blau und 200px Breite und 300px Höhe und 1px Rand und der Randfarbe Schwarz':
        this.setState({
          generatedStyles: {
            backgroundColor: 'blue',
            width: '200px',
            height: '300px',
            border: '1px solid black'
          }
        })
        break
      case 'Zeichne ein Quadrat mit 200px Breite':
        this.setState({
          generatedStyles: {
            width: '200px',
            height: '200px',
            border: '1px solid white'
          }
        })
        break
      case 'Zeichne ein Rechteck mit dem Text "Ich bin ein Rechteck"':
        this.setState({
          generatedStyles: {
            width: '200px',
            height: '100px',
            border: '1px solid white',
            color: 'white'
          },
          content: 'Ich bin ein Rechteck'
        })
        break
      case 'Zeichne ein Rechteck mit dem Text "Ich bin ein Rechteck" und der Schriftart "Lato"':
        this.setState({
          generatedStyles: {
            width: '200px',
            height: '100px',
            border: '1px solid white',
            content: 'Ich bin ein Rechteck',
            fontFamily: 'Lato',
            color: 'white'
          },
          content: 'Ich bin ein Rechteck'
        })
        break
      case 'Zeichne ein Rechteck mit dem Text "Ich bin ein Rechteck" und der Schriftart "Roboto" und der Schriftgrösse 12px und dem Schriftgewicht bold':
        this.setState({
          generatedStyles: {
            width: '200px',
            height: '100px',
            border: '1px solid white',
            content: 'Ich bin ein Rechteck',
            font: 'bold 15px Roboto',
            color: 'white'
          },
          content: 'Ich bin ein Rechteck'
        })
        break
      case 'Zeichne ein Dreieck mit 200px Breite und 300px Höhe':
        this.setState({
          generatedStyles: {
            width: '0',
            height: '0',
            borderLeft: '100px solid transparent',
            borderRight: '100px solid transparent',
            borderBottom: '300px solid white'
          }
        })
        break
      case 'Zeichne ein Bild mit dem Inhalt':
        const imageSrc = 'https://www.inaffect.net/assets/images/portfolio/portfolio_2-2_yoojis.jpg'
        this.setState({
          generatedStyles: {
            height: '600px',
            width: '400px',
            backgroundImage: `url(${imageSrc})`
          }
        })
        break
    }
  }

  clearUserInput = () => {
    this.setState({generatedStyles: {}, content: ''})
  }

  
  handleOnChange = event => {
    this.setState({userInput: event.target.value})
  }

  render() {
    // console.log('this.iterateOverUserInput', this.iterateOverUserInput())
    const {generatedStyles, content} = this.state
    return (
      <div className="App">
        <input className="input-field" type="text" onChange={this.handleOnChange}/>
        <br/>
        {/*<button className="generation-button" onClick={this.setUserInput}>Generieren</button>*/}
        <button className="generation-button" onClick={this.setUserInput }>Generieren</button>
        <br/>
        <button className="generation-button" onClick={this.clearUserInput}>Reset</button>
        <br/>
        <div className="drawing" style={generatedStyles}>{content}</div>
      </div>
    )
  }
}

export default App;
