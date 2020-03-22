import React, { Component } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const Example = () => {
	const [startDate, setStartDate] = React.useState(new Date());
	const ExampleCustomInput = ({ value, onClick }) => (
		<button className="btn" onClick={onClick}>
			{value}
		</button>
	);
	return (
		<DatePicker
			selected={startDate}
			onChange={date => setStartDate(date)}
			customInput={<ExampleCustomInput />}
			withPortal
		/>
	);
};

export default Example;

