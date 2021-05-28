import './paginator.scss';
import {ProductContext} from '../../context/productContext';
import {useContext, useState} from 'react';

function Paginator() {
  const {page, getPage, getNextPage, getPreviousPage} = useContext(ProductContext);
  const [pageSet, setPageSet] = useState(1);

  const getPages = (pSet) => {
    let p = [];
    for(let i = (pSet-1)*10; i < pSet*10; i++) {
      p.push(i+1);
    }
    return p;
  }

  const handleClick = (event) => {
    if (event.target.dataset.id) {
      getPage(event.target.dataset.id)
    }
  }

  const getNextSetOfPages = () => {
    setPageSet(pageSet + 1);
  }

  const getPrevSetOfPages = (event) => {
    setPageSet(pageSet - 1);
  }

  return(
    <div className="paginator">
      <button onClick={getPreviousPage} disabled={page === 1}>Previous</button>
      <div className="pages" onClick={handleClick}>
        <button key={-1} onClick={getPrevSetOfPages} className="pages" disabled={pageSet === 1}>...</button>
        {
          getPages(pageSet).map(pageNo => (
            <button key={pageNo} data-id={pageNo} className="pages">{pageNo}</button>
          ))
        }
        <button key={-2} onClick={getNextSetOfPages} className="pages">...</button>
      </div>
      <button onClick={getNextPage}>Next</button>
    </div>
  )
}

export default Paginator;