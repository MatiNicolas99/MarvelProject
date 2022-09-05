import "./pagination.css"


export const Pagination = ({onNextPage,onPrevioustPage, page}) => {

  
  return (
    <div className="toggle">
      <input onClick={onPrevioustPage} type="radio" name="toggle" id="toggle-previous"/>
      <label className="label-previous" htmlFor="toggle-previous">Previous</label>
      <input type="radio" name="toggle" id="toggle-n"/>
      <label className="label-n" htmlFor="toggle-n">{page}</label>
      <input onClick={onNextPage} type="radio" name="toggle" id="toggle-next"/>
      <label className="label-next" htmlFor="toggle-next">Next</label>
  </div>
  )
}
