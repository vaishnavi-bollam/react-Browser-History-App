import {Component} from 'react'
import './index.css'
import HistoryItem from '../HistoryListItems/index'

class HistoryContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchInput: '',
      updatedArrayResults: props.historyList,
    }
  }

  onSearchInput = event => {
    const {historyList} = this.props
    const {searchInput, updatedArrayResults} = this.state
    const givenInputValue = event.target.value
    const resultSearchValues = historyList.filter(eachSearchItem =>
      eachSearchItem.title
        .toLowerCase()
        .includes(givenInputValue.toLowerCase()),
    )
    console.log(resultSearchValues)
    this.setState({
      searchInput: givenInputValue,
      updatedArrayResults: resultSearchValues,
    })
  }

  deleteButtonClicked = uniqueId => {
    const {searchInput, updatedArrayResults} = this.state
    const deleteItemsFilter = updatedArrayResults.filter(
      eachDeleteItem => eachDeleteItem.id !== uniqueId,
    )
    this.setState({updatedArrayResults: deleteItemsFilter})
  }

  render() {
    const {updatedArrayResults} = this.state
    const itemsFilter = () => {
      if (updatedArrayResults.length !== 0) {
        return (
          <ul>
            {updatedArrayResults.map(eachHistory => (
              <HistoryItem
                historyListItems={eachHistory}
                deleteButtonClicked={this.deleteButtonClicked}
                key={eachHistory.id}
              />
            ))}
          </ul>
        )
      }
      return <p>There is no history to show</p>
    }

    return (
      <div>
        <div className="top-container">
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
              alt="app logo"
            />
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png "
              alt="search"
            />
            <input
              placeholder="search history"
              onChange={this.onSearchInput}
              type="search"
            />
          </div>
        </div>
        <div>{itemsFilter()}</div>
      </div>
    )
  }
}

export default HistoryContainer
