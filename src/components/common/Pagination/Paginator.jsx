import React, {useState} from 'react';
import stl from './Pagination.module.css';
import cn from 'classnames'

const Paginator = ({totalUsersCount, pageSize, onPageChanged, currentPage }) => {
    const PORTION_SIZE = 10;
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let portionCount = Math.ceil(pagesCount / PORTION_SIZE)
    let pages =[];
    const [portionNum, setPortionNum] = useState(1);
    let leftPortionPageNum = (portionNum - 1) * PORTION_SIZE + 1;
    let rightPortionPageNum = portionNum * PORTION_SIZE;
// ------------------------pagesCount--------
    for (let i=1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div className = {stl.pages}>
            {portionNum > 1 && <button onClick = {() => setPortionNum(portionNum - 1)}>Prev</button>}
            {pages
                .filter(p => p >= leftPortionPageNum && p <= rightPortionPageNum && p <= pagesCount)
                .map(p => {
                return <span key = {p}
                             onClick = {(e) => {onPageChanged(p)}}
                             className = {cn({[stl.activePage]: currentPage === p},  stl.page)}>{p}</span>})
            }
            {portionNum < portionCount && <button onClick = {() => setPortionNum(portionNum + 1)}>Next</button>}
        </div>
        )

}

export default Paginator