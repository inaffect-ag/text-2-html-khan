export default input => {
  switch (input) {
    case 'Zeichne ein Rechteck mit 1px Rand':
      this.setState({generatedStyles: {
          border: '1px solid white',
          width: '200px',
          height: '100px'
        }})
      break
    case 'Zeichne ein Rechteck mit 200px Breite und 300px Höhe':
      this.setState({generatedStyles: {
          width: '200px',
          height: '300px',
          backgroundColor: 'white'
        }})
      break
    case 'Zeichne ein Rechteck mit 1px Rand und 200px Breite und 300px Höhe':
      this.setState({generatedStyles: {
          border: '1px solid white',
          width: '200px',
          height: '300px'
        }})
      break
    case 'Zeichne ein Rechteck mit Hintergrundfarbe Rot':
      this.setState({generatedStyles: {
          width: '200px',
          height: '100px',
          backgroundColor: 'red'
        }})
      break
    case 'Zeichne ein Rechteck mit Hintergrundfarbe Rot':
      this.setState({generatedStyles: {
          width: '200px',
          height: '100px',
          backgroundColor: 'red'
        }})
      break
    default:
  }
}