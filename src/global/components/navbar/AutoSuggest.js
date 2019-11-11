import React, { useState } from 'react';
import Autosuggest from 'react-autosuggest';
import './Style.css'

const MarvelAutoComplete = ({ autoSuggestList, onKeyPress }) => {

    const [value, setValue] = useState('')
    const [suggestions, setSuggestions] = useState([])

    //include special characters
    function escapeRegexCharacters(str) {
        return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    //get suggestions basd on user matched user input
    function getSuggestions(value) {
        const escapedValue = escapeRegexCharacters(value.trim());

        if (escapedValue === '') {
            return [];
        }

        return autoSuggestList.filter(list => list.name.toLowerCase().includes(escapedValue.toLowerCase()));
    }

    function getSuggestionValue(suggestion) {
        return suggestion.name;
    }

    function renderSuggestion(suggestion) {
        return (
            <span>{suggestion.name}</span>
        );
    }

    //get input text value from user input
    const onChange = (event, { newValue, method }) => {
        setValue(newValue)
    };

    const onSuggestionsFetchRequested = ({ value }) => {
        setSuggestions(getSuggestions(value));
    };

    const onSuggestionsClearRequested = () => {
        setSuggestions([]);
    };

    const inputProps = {
        placeholder: 'Search',
        value,
        onChange: onChange
    }

    return (
        <div onKeyPress={onKeyPress}>
            <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                onSuggestionsClearRequested={onSuggestionsClearRequested}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                inputProps={inputProps}
            />
        </div>
    );
}

export default MarvelAutoComplete