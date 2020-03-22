import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchWOD } from "../../actions";

class WodList extends Component {
	componentDidMount() {
		this.props.fetchWOD();
	}

	render() {
		return <div>WodList</div>;
	}
}

function mapStateToProps({ wod }) {
	return { wod }; //comes from state defined in wodReducer
}

export default connect(mapStateToProps, { fetchWOD })(WodList);
