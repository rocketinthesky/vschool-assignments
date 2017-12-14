import axios from "axios";

export function getQualityList() {
    return dispatch => {
        axios.get("/quality")
            .then(response => {
                dispatch({
                    type: "GET_QUALITY_LIST",
                    data: response.data
                });
            });
    }
}

export function addQuality(quality) {
    return dispatch => {
        axios.post("/quality", quality)
            .then(response => {
                dispatch({
                    type: "ADD_QUALITY",
                    data: response.data
                });
            });
    }
}

export function deleteQuality(id) {
    return dispatch => {
        axios.delete(`/quality/${id}`)
            .then(response => {
                dispatch({
                    type: "DELETE_QUALITY",
                    data: response.data
                });
            });
    }
}

export default function reducer(prevState = [], action) {
    switch (action.type) {
        case "GET_QUALITY_LIST":
            return action.data;
        case "ADD_QUALITY":
            return [...prevState, action.data];
        case "DELETE_QUALITY":
            return prevState.filter(item => item._id !== action.data._id);
        default:
            return prevState;
    }
}
