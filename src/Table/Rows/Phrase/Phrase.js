import React from 'react';

import Word from "./Word/Word.js";

import './Phrase.css';

const Phrase = ({phrase, hash, remarkWord, onCheck}) => {
    
    const createWords = (phrase) => {
        return phrase.words.map((word, index) => (
            <Word key={index}
                  hash={hash}
                  template={phrase.based_template}
                  remarkWord={remarkWord}
                  {...word}/>
        ))
    }

    return (
  		<div className="templater__phrase"
           onClick={e => onCheck(hash)}>
        {createWords(phrase)}
  		</div>
    );
}

export default Phrase;