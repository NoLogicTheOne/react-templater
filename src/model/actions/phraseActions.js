import * as types from "../constants/ActionTypes.js"

export function remarkWord(hash, word, based_template) {
	return {
		type: types.REMARK_WORD,
		hash,
		word,
		based_template
	}
}

export function fillImport(value) {
	return{
		type: types.FILL_IMPORT,
		value
	}
}

export function editTemplate(value) {
	return {
		type: types.EDIT_TEMPLATE,
		value
	}
}

export function keywordChange(hash, value, based_template, phrases) {
	return {
		type: types.KEYWORD_CHANGE,
		hash,
		value,
		based_template,
		phrases
	}
}

export function generateTable(input_area, based_template){
	return {
		type: types.GENERATE_TABLE,
		input_area,
		based_template
	}
}

export function colorPhrase(phrases, hash){
	return {
		type: types.COLOR_PHRASE,
		hash,
		phrases
	}
}

export function deleteExport(phrases){
	return {
		type: types.DELETE_EXPORT,
		phrases
	}
} 

export function reverseKeyword(phrases, hash){
	return {
		type: types.REVERSE_KEYWORD,
		phrases,
		hash
	}
}