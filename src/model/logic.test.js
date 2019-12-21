import * as F from "./logic.js";

describe("data connected", ()=> {
	it("is", ()=> {
		expect(typeof F.data).toEqual("object")
	})

	it("has keywords", ()=> {
		expect(typeof F.data.keywords).toEqual("object")
	})
})

describe("_phraseExecute", ()=> {
	const {_phraseExecute} = F;

	it("is function", () => {
		expect(typeof _phraseExecute).toEqual("function")
	})

	it("can change Hash", () => {
		let d = createTestedData();
		d = _phraseExecute(d, "#phrase1", (phrase) => ({...phrase, hash: 22}) );

		expect(d.phrases[0].hash).toEqual(22);
	})

	it("can delete", () => {
		let d = createTestedData();
		d = _phraseExecute(d, "#phrase1", (phrase) => null);

		expect(d.phrases).toEqual([]);
	})
})

describe("remarker", () => {
	const {remarker} = F;

	it("is function", () => {
		expect(typeof remarker).toEqual("function");
	})
	
	it("can change marker", () => {
		let d = createTestedData();
		d = remarker(d, "#phrase1", "this");

		expect(d.phrases[0]
			    .words[0]
			    .marker).toEqual(true);
	})
})

describe("templateChanger", () => {
	const {templateChanger} = F;

	it("can change template", () => {
		let d = createTestedData();

		d = templateChanger(d, "new value");

		expect(d.template).toEqual("new value"); 
	})
})

describe("onKeywordsInputChanger", () => {
	const {onKeywordsInputChanger} = F;

	it("can checked", () => {
		let d = createTestedData();

		d = onKeywordsInputChanger(d, "not bold");

		let expected = false;

		expect(d.keywords.keys[0].checked).toEqual(expected);
	})
})

describe("pasteKeywordInTemplate", () => {
	const {pasteKeywordInTemplate} = F;

	it("correct paste short phrase", () => {
		let expected     = "it is not bold";
		let testingValue = pasteKeywordInTemplate("not", "it is #realy# bold");

		expect(testingValue).toEqual(expected);
	})

	it("correct paste long phrase", () => {
		let expected     = "it is not bold";
		let testingValue = pasteKeywordInTemplate("not".repeat(18), "it is #not# bold", 35);

		expect(testingValue).toEqual(expected);
	})
})



const createTestedData = () => {
	return {
	  template: "this text #realy bold#",
	  keywords: {
	    isList: true,
	    keys: [
	      {
	        checked: true,
	        value: "not bold" 
	      },
	      {
	        checked: false,
	        value: "realy bold"
	      }
	    ]
	  },
	  phrases: [
	    {
	      hash: "#phrase1",
	      keyword: "not bold",
	      words: [
	        {
	          word: "this",
	          marker: false
	        },
	        {
	          word: "text",
	          marker: true
	        },
	        {
	          word: "not",
	          marker: true
	        },
	        {
	          word: "bold",
	          marker: true
	        }, {}
	      ],
	      light: "50%",
	      length: 30
	    },
	  ]
	}
}