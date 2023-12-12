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
        <img src={logoUrl} />
        <h3>{title}</h3>
        <p>{domainUrl}</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png "
          onClick={ondeleteClick}
        />
      </li>
    </div>
  )
}

export default HistoryItem
