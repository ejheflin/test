import { FETCH_WOD } from "../actions/types";
export default function(state = null, action) {
	switch (action.type) {
		case FETCH_WOD:
			return action.payload || false;
		default:
			return state;
	}
}
