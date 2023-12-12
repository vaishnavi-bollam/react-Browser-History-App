import './index.css'

const HistoryItem = props => {
  const {historyListItems, deleteButtonClicked} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyListItems
  const ondeleteClick = () => {
    deleteButtonClicked(id)
  }
  return (
    <div>
      <li className="items-container">
        <p>{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" />
        <p>{title}</p>
        <p>{domainUrl}</p>
        <button data-testid="delete" type="button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png "
            onClick={ondeleteClick}
            alt="delete"
          />
        </button>
      </li>
    </div>
  )
}

export default HistoryItem
