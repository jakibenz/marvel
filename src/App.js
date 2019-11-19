import React, { Fragment, useEffect, useState, useReducer } from 'react';
import HeroScreen from './screen/characterscreen/HeroScreen'
import NavBar from './global/components/navbar/NavBar'
import ModalDetails from './global/components/modal/ModalDetails'
import MarvelAPI from './services/MarvelAPI'
import reducer from './reducer/Reducer'
import { initialState } from './reducer/InitialState'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  //React States
  const [marvelData, dispatch] = useReducer(reducer, initialState);
  const [currentPage, setCurrentPage] = useState(1);
  const [modalShow, setModalShow] = useState(false);

  const { characters, character } = marvelData

  //Mount characters fetched from MARVEL API and set the states
  useEffect(() => {
    const getMarvelCharacters = async () => {
      try {
        dispatch({ type: 'LOAD_ALL_CHARACTERS_REQUEST' })

        const data = await MarvelAPI.getCharacters()
        const response = await data.json()

        const { results } = response.data
        dispatch({ type: 'LOAD_ALL_CHARACTERS_SUCCESS', characters: results })

      } catch (err) {
        dispatch({ type: 'LOAD_ALL_CHARACTERS_FAIL' })
        console.log(err)
      }
    }
    getMarvelCharacters();
  }, [dispatch])

  const handleModalClose = () => {
    dispatch({ type: 'CLOSE_CHARACTER_MODAL' })
    setModalShow(false)
  }

  //save My Team to sessionStorage whenever it changes to retain data.
  useEffect(() => {
    sessionStorage.setItem('MyTeam', JSON.stringify(characters.myteam));
  }, [characters.myteam, characters.myteam.length]);

  return (
    <Fragment>
      <NavBar
        autoSuggest={characters.items}
        dispatch={dispatch}
        setCurrentPage={setCurrentPage}
      />
      <HeroScreen
        characters={characters}
        setModal={setModalShow}
        dispatch={dispatch}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <ModalDetails
        show={modalShow}
        onHide={() => handleModalClose()}
        details={character.current}
        isComicsLoaded={character.isComicsLoaded}
        dispatch={dispatch}
        info={character}
        myTeam={characters.myteam}
      />
    </Fragment>
  );
}

export default App;
