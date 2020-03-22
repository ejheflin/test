import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "./Payments";

class Header extends Component {
	renderContent() {
		switch (this.props.auth) {
			case null:
				return;
			case false:
				return (
					<li>
						<a href="/auth/google">Login With Google</a>
					</li>
				);
			default:
				return [
					<li key="1">
						<Payments />
					</li>,
					<li key="3" style={{ margin: "0 10px" }}>
						Credits: {this.props.auth.credits}
					</li>,
					<li key="2">
						<a href="/api/logout">Logout</a>
					</li>
				];
		}
	}

	render() {
		return (
			<nav>
				<div className="nav-wrapper">
					<Link
						to={this.props.auth ? "/surveys" : "/"}
						className="left brand-logo"
					>
						Emaily
					</Link>
					<ul className="right">{this.renderContent()}</ul>
				</div>
			</nav>
		);
	}
}

function mapStateToProps({ auth }) {
	return { auth };
}

export default connect(mapStateToProps)(Header);

// import React, { Component } from "react";
// import { connect } from "react-redux";
// import { Link } from "react-router-dom";
// import Payments from "./Payments";
// import Datepicker from "./Datepicker";

// class Header extends Component {
// 	renderContent() {
// 		switch (
// 			this.props.auth //decide what to render based on whether or not the user is logged in
// 		) {
// 			case null:
// 				return (
// 					<li>
// 						<a href="/auth/google">Login</a>
// 					</li>
// 				); //show nothing
// 			case false: // i am not logged in
// 				return (
// 					<li>
// 						<a href="/auth/google">Login</a>
// 					</li>
// 				);
// 			default:
// 				// i am already logged in
// 				return [
// 					<li key="5" style={{ margin: "0 auto" }}>
// 						<Datepicker />
// 					</li>,
// 					// <li key="4" style={{ margin: "0 auto" }}>
// 					// 	Today
// 					// </li>,
// 					// <li key="1">
// 					// 	<Payments />
// 					// </li>,
// 					// <li key="3" style={{ margin: "0 10px" }}>
// 					// 	Credits: {this.props.auth.credits}
// 					// </li>,
// 					<li key="2">
// 						<a href="/api/logout">Logout</a>
// 					</li>
// 				];
// 		}
// 	}

// 	render() {
// 		return (
// 			<nav>
// 				<div className="nav-wrapper">
// 					<Link
// 						to={this.props.auth ? "/surveys" : "/"} //tertiary expression if exists then else
// 						className="left brand-logo"
// 					>
// 						TRAIN
// 					</Link>
// 					<ul className="right">{this.renderContent()}</ul>
// 				</div>
// 			</nav>
// 		);
// 	}
// }

// function mapStateToProps({ auth }) {
// 	return { auth };
// }

// export default connect(mapStateToProps)(Header);
