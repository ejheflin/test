import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Fab from "@material-ui/core/Fab";
import Icon from "@material-ui/core/Icon";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import WodList from "./Wods/WodList";

const mongoose = require("mongoose");

const useStyles = makeStyles(theme => ({
	root: {
		flexDirection: "column",
		alignItems: "center",
		width: "100%"
	},
	heading: {
		fontSize: theme.typography.pxToRem(15),
		flexBasis: "33.33%",
		flexShrink: 0
	},
	secondaryHeading: {
		fontSize: theme.typography.pxToRem(15),
		color: theme.palette.text.secondary
	},
	buttongrid: {
		display: "flex",
		width: "100%",
		flexDirection: "column",
		alignItems: "center",
		"& > *": {
			margin: theme.spacing(0)
		}
	},
	CompleteButton: {
		justifyContent: "center",
		position: "absolute",
		width: "100%",
		alignItems: "center",
		bottom: 65,
		margin: "0 auto",
		textAlign: "center"
	}
}));

export default function ControlledExpansionPanels() {
	const classes = useStyles();
	const [expanded, setExpanded] = React.useState(false);
	const handleChange = panel => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	return <div>test</div>;
}
// 	return (
// 		<div className={classes.root}>
// 			<h5>Foundation</h5>
// 			<ExpansionPanel
// 				expanded={expanded === "panel1"}
// 				onChange={handleChange("panel1")}
// 			>
// 				<ExpansionPanelSummary
// 					expandIcon={<ExpandMoreIcon />}
// 					aria-controls="panel1bh-content"
// 					id="panel1bh-header"
// 				>
// 					<Typography className={classes.heading}>
// 						Bench Press
// 					</Typography>
// 					<Typography className={classes.secondaryHeading}>
// 						5x5 @ 235lbs
// 					</Typography>
// 				</ExpansionPanelSummary>
// 				<ExpansionPanelDetails>
// 					<div className={classes.buttongrid}>
// 						<ButtonGroup
// 							size="large"
// 							color="primary"
// 							aria-label="outlined primary button group"
// 						>
// 							<Button>Set: 1</Button>
// 							<Button>R: 5</Button>
// 							<Button>W: 235</Button>
// 							<Button>X</Button>
// 						</ButtonGroup>
// 						<ButtonGroup
// 							size="large"
// 							color="primary"
// 							aria-label="outlined primary button group"
// 						>
// 							<Button>set: 2</Button>
// 							<Button>r: 5</Button>
// 							<Button>w: 235</Button>
// 							<Button>X</Button>
// 						</ButtonGroup>
// 						<ButtonGroup
// 							size="large"
// 							color="primary"
// 							aria-label="outlined primary button group"
// 						>
// 							<Button>set: 3</Button>
// 							<Button>r: 5</Button>
// 							<Button>w: 235</Button>
// 							<Button>X</Button>
// 						</ButtonGroup>
// 						<ButtonGroup
// 							size="large"
// 							color="primary"
// 							aria-label="outlined primary button group"
// 						>
// 							<Button>set: 4</Button>
// 							<Button>r: 5</Button>
// 							<Button>w: 235</Button>
// 							<Button>X</Button>
// 						</ButtonGroup>
// 						<ButtonGroup
// 							size="large"
// 							color="primary"
// 							aria-label="outlined primary button group"
// 						>
// 							<Button>set: 5</Button>
// 							<Button>r: 5</Button>
// 							<Button>w: 235</Button>
// 							<Button>X</Button>
// 						</ButtonGroup>
// 					</div>
// 				</ExpansionPanelDetails>
// 			</ExpansionPanel>
// 			<ExpansionPanel
// 				expanded={expanded === "panel2"}
// 				onChange={handleChange("panel2")}
// 			>
// 				<ExpansionPanelSummary
// 					expandIcon={<ExpandMoreIcon />}
// 					aria-controls="panel2bh-content"
// 					id="panel2bh-header"
// 				>
// 					<Typography className={classes.heading}>
// 						Incline Press
// 					</Typography>
// 					<Typography className={classes.secondaryHeading}>
// 						4x10 @ 70lbs
// 					</Typography>
// 				</ExpansionPanelSummary>
// 				<ExpansionPanelDetails>
// 					<div className={classes.buttongrid}>
// 						<ButtonGroup
// 							size="large"
// 							color="primary"
// 							aria-label="outlined primary button group"
// 						>
// 							<Button>Set: 1</Button>
// 							<Button>R: 10</Button>
// 							<Button>W: 70</Button>
// 						</ButtonGroup>
// 						<ButtonGroup
// 							size="large"
// 							color="primary"
// 							aria-label="outlined primary button group"
// 						>
// 							<Button>set: 2</Button>
// 							<Button>r: 10</Button>
// 							<Button>w: 70</Button>
// 						</ButtonGroup>
// 						<ButtonGroup
// 							size="large"
// 							color="primary"
// 							aria-label="outlined primary button group"
// 						>
// 							<Button>set: 3</Button>
// 							<Button>r: 10</Button>
// 							<Button>w: 70</Button>
// 						</ButtonGroup>
// 						<ButtonGroup
// 							size="large"
// 							color="primary"
// 							aria-label="outlined primary button group"
// 						>
// 							<Button>set: 4</Button>
// 							<Button>r: 10</Button>
// 							<Button>w: 70</Button>
// 						</ButtonGroup>
// 						<ButtonGroup
// 							size="large"
// 							color="primary"
// 							aria-label="outlined primary button group"
// 						></ButtonGroup>
// 					</div>
// 				</ExpansionPanelDetails>
// 			</ExpansionPanel>
// 			<ExpansionPanel
// 				expanded={expanded === "panel3"}
// 				onChange={handleChange("panel3")}
// 			>
// 				<ExpansionPanelSummary
// 					expandIcon={<ExpandMoreIcon />}
// 					aria-controls="panel3bh-content"
// 					id="panel3bh-header"
// 				>
// 					<Typography className={classes.heading}>DB Fly</Typography>
// 					<Typography className={classes.secondaryHeading}>
// 						4x10 @ 45lbs
// 					</Typography>
// 				</ExpansionPanelSummary>
// 				<ExpansionPanelDetails>
// 					<div className={classes.buttongrid}>
// 						<ButtonGroup
// 							size="large"
// 							color="primary"
// 							aria-label="outlined primary button group"
// 						>
// 							<Button>Set: 1</Button>
// 							<Button>R: 10</Button>
// 							<Button>W: 45</Button>
// 						</ButtonGroup>
// 						<ButtonGroup
// 							size="large"
// 							color="primary"
// 							aria-label="outlined primary button group"
// 						>
// 							<Button>set: 2</Button>
// 							<Button>r: 10</Button>
// 							<Button>w: 45</Button>
// 						</ButtonGroup>
// 						<ButtonGroup
// 							size="large"
// 							color="primary"
// 							aria-label="outlined primary button group"
// 						>
// 							<Button>set: 3</Button>
// 							<Button>r: 10</Button>
// 							<Button>w: 45</Button>
// 						</ButtonGroup>
// 						<ButtonGroup
// 							size="large"
// 							color="primary"
// 							aria-label="outlined primary button group"
// 						>
// 							<Button>set: 4</Button>
// 							<Button>r: 10</Button>
// 							<Button>w: 45</Button>
// 						</ButtonGroup>
// 						<ButtonGroup
// 							size="large"
// 							color="primary"
// 							aria-label="outlined primary button group"
// 						></ButtonGroup>
// 					</div>
// 				</ExpansionPanelDetails>
// 			</ExpansionPanel>
// 			<ExpansionPanel
// 				expanded={expanded === "panel4"}
// 				onChange={handleChange("panel4")}
// 			>
// 				<ExpansionPanelSummary
// 					expandIcon={<ExpandMoreIcon />}
// 					aria-controls="panel4bh-content"
// 					id="panel4bh-header"
// 				>
// 					<Typography className={classes.heading}>Pushups</Typography>
// 					<Typography className={classes.secondaryHeading}>
// 						4x15 @ BW
// 					</Typography>
// 				</ExpansionPanelSummary>
// 				<ExpansionPanelDetails>
// 					<div className={classes.buttongrid}>
// 						<ButtonGroup
// 							size="large"
// 							color="primary"
// 							aria-label="outlined primary button group"
// 						>
// 							<Button>Set: 1</Button>
// 							<Button>R: 15</Button>
// 							<Button>W: BW</Button>
// 						</ButtonGroup>
// 						<ButtonGroup
// 							size="large"
// 							color="primary"
// 							aria-label="outlined primary button group"
// 						>
// 							<Button>set: 2</Button>
// 							<Button>r: 15</Button>
// 							<Button>w: BW</Button>
// 						</ButtonGroup>
// 						<ButtonGroup
// 							size="large"
// 							color="primary"
// 							aria-label="outlined primary button group"
// 						>
// 							<Button>set: 3</Button>
// 							<Button>r: 15</Button>
// 							<Button>w: BW</Button>
// 						</ButtonGroup>
// 						<ButtonGroup
// 							size="large"
// 							color="primary"
// 							aria-label="outlined primary button group"
// 						>
// 							<Button>set: 4</Button>
// 							<Button>r: 15</Button>
// 							<Button>w: BW</Button>
// 						</ButtonGroup>
// 						<ButtonGroup
// 							size="large"
// 							color="primary"
// 							aria-label="outlined primary button group"
// 						></ButtonGroup>
// 					</div>
// 				</ExpansionPanelDetails>
// 			</ExpansionPanel>
// 			<div className={classes.CompleteButton}>
// 				<Fab color="secondary" variant="extended">
// 					Workout Complete
// 				</Fab>
// 			</div>
// 		</div>
// 	);
// }

// import React from "react";

// const Landing = () => {
// 	return (
// 		// <div style={{ textAlign: "center" }}>
// 		// 	<h1>DYEL!</h1>
// 		// 	Do you even lift?
// 		// </div>

// 		<ul class="collapsible">
// 			<li>
// 				<div class="collapsible-header">
// 					<i class="material-icons">filter_drama</i>First
// 				</div>
// 				<div class="collapsible-body">
// 					<span>Lorem ipsum dolor sit amet.</span>
// 				</div>
// 			</li>
// 			<li>
// 				<div class="collapsible-header">
// 					<i class="material-icons">place</i>Second
// 				</div>
// 				<div class="collapsible-body">
// 					<span>Lorem ipsum dolor sit amet.</span>
// 				</div>
// 			</li>
// 			<li>
// 				<div class="collapsible-header">
// 					<i class="material-icons">whatshot</i>Third
// 				</div>
// 				<div class="collapsible-body">
// 					<span>Lorem ipsum dolor sit amet.</span>
// 				</div>
// 			</li>
// 		</ul>
// 	);
// };

// export default Landing;
