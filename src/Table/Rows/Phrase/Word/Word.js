import React from 'react';
import './Word.css';

const Word = ({word, marker, remarkWord, hash, template}) => {
    // let _span;

    const createText = () => {
    	return marker 
    		? (<b>{word} </b>) 
    		: (<span>{word} </span>)
    }

    const onContextMenu = (e) => {
        e.preventDefault();
        remarkWord(hash, word, template);
    }

    return (
		<span className="templater__word"
              onContextMenu={onContextMenu}>
			{createText()}
		</span>
    );
}

// Word.defaultProps = {
//     	word: "default word",
//     	marker: true
//     }

export default Word;