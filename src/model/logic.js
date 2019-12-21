/*tested*/
export const templateChanger = (data, value) => {
  return {...data, template: value}
}

/*tested*/
export const onKeywordsInputChanger = (data, keyword) => {
  let newKeys = data.keywords.keys.map(key => 
    key.value === keyword 
      ? {...key, checked: !key.checked}
      : {...key} 
  );

  let newKeywords = {...data.keywords, keys: newKeys}

  return {...data, keywords: newKeywords}
}

/*probably it useless, cause my wife reject it future*/
export const onKeywordsStateChanger = (data) => {
  return {
    ...data, 
    keywords: {
      ...data.keywords, 
      isList: !data.keywords.isList}
  }
}


/*tested*/
export const pasteKeywordInTemplate = (keyword, template, max = 35) => {
  let result = template
    .replace(/#.*#/i, keyword)
    .trim();

  return (result.length > max) ? template.replace(/#/g, "") : result;
}

export const getMarked = (word, phrase) => {
  return phrase.split(" ").contains(word);
}

export const createPhrase = (keyword, template) => {
  let words = pasteKeywordInTemplate(keyword, template)
    .split(" ")
    .map(word => ({word, marked: getMarked(word, keyword)}) );
  

  return {
    "hash": Date.now(),
    keyword,
    words,
    light: 30,
    length: 35
  }
}

export const pastePhraseInTable = (data, keyword, template) => {
  return{
    ...data,
    phrases: data.phrases.push(createPhrase(keyword, template))
  } 
}
