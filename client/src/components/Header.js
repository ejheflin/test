import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "./Payments";

class Header extends Component {
	renderContent() {
		switch (
			this.props.auth //decide what to render based on whether or not the user is logged in
		) {
			case null:
				return; //show nothing
			case false: // i am not logged in
				return (
					<li>
						<a href="/auth/google">Login with Google</a>
					</li>
				);
			default:
				// i am already logged in
				return [
					<li key="1">
						<Payments />
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
						to={this.props.auth ? "/surveys" : "/"} //tertiary expression if exists then else
						className="left brand-logo"
					>
						DYEL
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
