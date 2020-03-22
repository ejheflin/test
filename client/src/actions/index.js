import axios from "axios";
import { FETCH_USER } from "./types";
import { FETCH_WOD } from "./types";

export const fetchUser = () => async dispach => {
	const res = await axios.get("/api/current_user");
	dispach({ type: FETCH_USER, payload: res.data });
};

export const handleToken = token => async dispach => {
	const res = await axios.post("/api/stripe", token);

	dispach({ type: FETCH_USER, payload: res.data });
};

export const fetchWOD = () => async dispach => {
	const res = await axios.get("/api/wod");
	dispach({ type: FETCH_WOD, payload: res.data });
};

