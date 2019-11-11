import React from 'react';
import TeamCard from './TeamCard'

const MyTeam = ({ teamList, dispatch }) => {

    const handleDelete = (deletedId) => {
        const index = teamList.findIndex(((item) => item.id === deletedId))
        if (index > -1) {
            const newTeam = teamList.slice().filter((i) => i.id !== deletedId)
            dispatch({ type: 'DELETE_CHARACTER_TO_TEAM', payload: newTeam });
        }
    }

    return (
        <div className='tc pt6 pt6-ns pr5 ma0 w-30' style={{ overflowY: 'auto', scrollBehavior: 'smooth', border: '3px hidden black', height: '80vh' }}>
                <h2 className='f6 f2-ns'>My Team</h2>
                {teamList.map((element) => {
                    return <TeamCard key={element.id} teamDetails={element} onDelete={(e) => handleDelete(e)} />
                })}
        </div>
    )
}

export default MyTeam;