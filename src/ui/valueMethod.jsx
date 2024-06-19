import React from 'react';
import './ValueMethod.css'; // Import CSS file for custom styles

export default function ValueMethod({ title, contents, icon }) {
	return (
		<div className="value-method border border-gray-200 shadow-lg rounded-lg p-6 text-center">
			<div className="icon-container bg-blue-400 mx-auto mb-4">{icon}</div>
			<h1 className="font-bold text-xl mb-2">{title}</h1>
			<p className="text-gray-600 px-4">{contents}</p>
		</div>
	);
}
