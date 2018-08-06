import React from 'react';
import './Block6.css';
import Form from './Form.js'

export default function Block6 () {
    return (
      <div className= "block6">
      <a name="block6"></a>
      	<div className= "row">
      		<div className = "col-sm-4">
      		<h1 className="required_notification">Контакты</h1>
      		<Form />
	        	<a href="#top">Наверх</a>
	        </div>
	    </div>
       </div>
    );
  }
