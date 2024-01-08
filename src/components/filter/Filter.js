import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './filter.scss'
import { setActiveFilter } from '../../features/filters/filterSlice'

const Filter = () => {
    const activeTab = useSelector(state => state.filters.status)
    const dispatch = useDispatch()

    const handleActiveTab = (index) => {
        dispatch(setActiveFilter({ status: index }))
    }

    return (
        <div className='filters'>
            <div onClick={() => {handleActiveTab(0)}} className={`filter ${activeTab === 0 ? "active" : ""}`}>All</div>
            <div onClick={() => {handleActiveTab(1)}} className={`filter ${activeTab === 1 ? "active" : ""}`}>Undone</div>
            <div onClick={() => {handleActiveTab(2)}} className={`filter ${activeTab === 2 ? "active" : ""}`}>Done</div>
        </div>
    )
}

export default Filter