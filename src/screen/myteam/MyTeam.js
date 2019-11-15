import React from 'react';
import TeamCard from './TeamCard'

const MyTeam = ({ teamList, dispatch }) => {

    const handleDelete = (deletedId) => {
        const index = teamList.findIndex(((item) => item.id === deletedId))
        if (index > -1) {
            teamList.splice(index , 1)
            dispatch({ type: 'DELETE_CHARACTER_TO_TEAM', payload: teamList });
        }
    }

    return (
        <div className='tc pr5 ma0 w-30 relative' style={{ overflowY: 'auto', scrollBehavior: 'smooth', border: '3px hidden black', height: '80vh', top: 145 }}>
                <h2 className='f6 f2-ns'>My Team</h2>
                {teamList.map((element) => {
                    return <TeamCard key={element.id} teamDetails={element} onDelete={(e) => handleDelete(element.id)} />
                })}
        </div>
    )
}

export default MyTeam;