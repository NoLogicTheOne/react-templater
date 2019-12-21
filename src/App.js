import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {connect} from 'react-redux'

import Template from "./Template/Template.js";
import Table from "./Table/Table.js";
import Keywords from "./Keywords/Keywords.js";

import * as AC from "./model/actions/phraseActions.js"

class App extends Component {

  render() {
    let {data, //state object
         remarkWord, //bolding words
         fillImport, //fill import_area
         onKeywordChange, //edit keywords in phrases
         generateTable, //click the Mix button
         colorPhrase, //click checkbox in rows
         deleteExport, //delete all exported from table
         reverseKeyword, //reverse keyword in a phrase
         onTemplateChange} = this.props

    return (
      <div className="App" scrolling="no">
        <Keywords onInputChange={fillImport}
                  import_area={data.import_area}/>
        <Template template={data.template}
                  import_area={data.import_area}
                  generateTable={generateTable}
                  onChange={onTemplateChange} />
        <Table
          remarkWord={remarkWord}
          onKeywordChange={onKeywordChange}
          onCheck={colorPhrase}
          reverseKeyword={reverseKeyword}
          phrases={data.phrases}/>
        <textarea
          rows="20"
          onChange={e=>e}
          value={data.export_area}
        />
        <input type="submit" 
               value="EXCLUDE"
               onSubmit={e => e.preventDefault()}
               className="templater__cleaner"
               onClick={deleteExport}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state
})

const mergeProps = (stateProps, dispatchProps) => {
  let {data} = stateProps
  let {dispatch} = dispatchProps

  return {
    data,
    onTemplateChange: (value) => {
      dispatch(AC.editTemplate(value))
    },
    remarkWord: (hash, word, based_template) => {
      dispatch(AC.remarkWord(hash, word, based_template))
    },
    onKeywordChange: (hash, value, b_template) => {
      const { phrases } = data
      dispatch(AC.keywordChange(hash, value, b_template, phrases))
    },
    fillImport: (value) => {
      dispatch(AC.fillImport(value))
    },
    generateTable: (input_area, template) => {
      dispatch(AC.generateTable(input_area, template))
    },
    colorPhrase: (hash) => {
      dispatch(AC.colorPhrase(data.phrases, hash))
    },
    deleteExport: () => {
      dispatch(AC.deleteExport(data.phrases))
    },
    reverseKeyword: (hash) => {
      dispatch(AC.reverseKeyword(data.phrases, hash))
    }
  }
}

export default connect(
  mapStateToProps, 
  null,
  mergeProps)(App);

