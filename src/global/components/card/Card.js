import React from 'react';

const Card = ({ charDetails, onPress }) => {

    const overlay = {
        position: 'absolute',
        flex: 1,
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        zIndex: 1,
        borderRadius: 8,
        backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.9))'
    }
    const textContainer = {
        position: 'absolute',
        zIndex: 3,
        bottom: 0,
        left: 0,
    }

    const { name, thumbnail } = charDetails

    const image = `${thumbnail.path}.${thumbnail.extension}`

    const handleMouseDown = (event) => {
        event.preventDefault();
    }

    return (
        <div className='mh3'>
            <button
                className='dib bn br3 outline-transparent ma2 pa3 shadow-3 h5 w5 cover items-center grow'
                style={{ backgroundImage: `url(${image})` }}
                onMouseDown={handleMouseDown}
                onClick={onPress}
            >
                <div style={overlay}>
                    <div className='f6 f4-l ma3 moon-gray' style={textContainer}>
                        {name}
                    </div>
                </div>
            </button>
        </div>
    )
}
export default Card