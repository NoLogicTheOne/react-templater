import React from 'react';
import './Template.css';

const Template = ({template, onChange, generateTable, import_area}) => {
	let onButtonClick = (e) => {
		e.preventDefault()
		generateTable(import_area, template)
	}
	return (
		<div className="templater__template">
			<input className="templater__template_input"
				   value={template}
				   onChange={e => onChange(e.target.value)}
				   />
	    	<span className="templater__template_length">
	    		{template
	    			.replace(/#/g, "")
	    			.replace(/(!|\?|\.)$/, "")
					.trim()
	    			.length
	    		}
	    	</span>
	    	<input type="submit" 
	    		   value="MIX"
	    		   onClick={onButtonClick}
	    	       className="templater__template_mix"/>
		</div>
	);
  
}

export default Template;