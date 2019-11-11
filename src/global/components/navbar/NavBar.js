import React from 'react';
import MarvelAPI from '../../../services/MarvelAPI'
import MarvelLogo from '../../../assets/images/marvel-logo.jpg'
import AutoSuggest from './AutoSuggest'

const NavBar = ({ autoSuggest, dispatch, setCurrentPage }) => {

    //fetch search bar input from MARVEL API
    const fetchfilteredCharacter = async (text) => {
        try {

            dispatch({ type: 'FILTER_CHARACTERS_REQUEST', payload: text })

            const data = await MarvelAPI.getCharacters({ nameStartsWith: text })
            const response = await data.json()

            const { results } = response.data

            dispatch({ type: 'FILTER_CHARACTERS_SUCCESS', characters: results })

        } catch (err) {
            dispatch({ type: 'LOAD_ALL_CHARACTERS_FAIL' })
            console.log(err)
        }
    }

    //create an array of chracter name on the MARVEL API results
    const suggestList = autoSuggest.map((element) => {
        return { name: element.name }
    })

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault()
            fetchfilteredCharacter(event.target.value)
            setCurrentPage(1)
        }
    }

    return (
        <header className='bg-black-90 fixed w-100 ph3 pv2 pv3-ns ph4-m ph5-l z-3' id='navbar'>
            <nav className='f6 fw6 tracked flex justify-between items-center flex-wrap '>
                <a href='https://www.marvel.com/' target='_blank' rel='noopener noreferrer'>
                    <img className='mw3 mw4-ns' src={MarvelLogo} alt={'React Marvel Catalog'}></img>
                </a>
                <div className='flex flex-wrap'>
                    <span className='flex f5 pa2 light-red'>
                        Data provided by Marvel. © 2019 MARVEL
                    </span>
                    <AutoSuggest autoSuggestList={suggestList} onKeyPress={(e) => handleKeyPress(e)} />
                </div>
            </nav>
        </header >
    )
}

export default NavBar;