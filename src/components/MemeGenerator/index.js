import {Component} from 'react'
import {Text, Container} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here
class MemeGenerator extends Component {
  state = {
    imageUrl: '',
    topText: '',
    bottomText: '',
    fontSize: fontSizesOptionsList[0].displayText,
    isValuesGiven: false,
  }

  onChangeImageUrl = event => {
    this.setState({imageUrl: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topText: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  onChangeFontSize = event => {
    this.setState({fontSize: event.target.value})
  }

  onClickGenerate = event => {
    event.preventDefault()
    this.setState({
      isValuesGiven: true,
    })
  }

  render() {
    const {imageUrl, topText, bottomText, fontSize, isValuesGiven} = this.state
    return (
      <>
        <form onSubmit={this.onClickGenerate}>
          <h1>Meme Generator</h1>
          <div>
            <label htmlFor="imageUrl">Image URL</label>
            <input
              type="text"
              value={imageUrl}
              id="imageUrl"
              placeholder="Enter the Image URL"
              onChange={this.onChangeImageUrl}
            />
          </div>
          <div>
            <label htmlFor="topText">Top Text</label>
            <input
              type="text"
              value={topText}
              id="topText"
              placeholder="Enter the Top Text"
              onChange={this.onChangeTopText}
            />
          </div>
          <div>
            <label htmlFor="bottomText">Bottom Text</label>
            <input
              type="text"
              value={bottomText}
              id="bottomText"
              placeholder="Enter the Bottom Text"
              onChange={this.onChangeBottomText}
            />
          </div>
          <div>
            <label htmlFor="fontSize">Font Size</label>
            <select id="fontSize" onChange={this.onChangeFontSize}>
              {fontSizesOptionsList.map(each => (
                <option key={each.optionId} value={each.displayText}>
                  {each.displayText}
                </option>
              ))}
            </select>
          </div>
          <button type="submit">Generate</button>
        </form>
        {isValuesGiven && (
          <Container bgImage={imageUrl} data-testid="meme">
            <Text fontSize={fontSize}>{topText}</Text>
            <Text fontSize={fontSize}>{bottomText}</Text>
          </Container>
        )}
      </>
    )
  }
}

export default MemeGenerator
