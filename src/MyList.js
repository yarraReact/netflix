import React, { useEffect } from "react";
import { connect } from "react-redux";
import Tile from "./Tile";
import "./MyList.css";
import { addToRecommendations } from "./store/reducers/Recommendations";
import { removeFromMyList, requestSucceeded } from "./store/reducers/MyList";
import mockData from "./mockData";

const MyList = ({ myList, _addToMyRecommendations, _requestSucceeded }) => {
  useEffect(() => {
    const payload = setTimeout(() => {
      _requestSucceeded(mockData);
    }, 5000);
  
  }, []);
  return (
    <div className="section-container">
      <div className="section-title">My List</div>
      {!myList.length && (
        <div className="section-sub-title">
          Please select from recommendation list to add to your list.
        </div>
      )}
      {myList.map(info => (
        <Tile
          info={info}
          buttonText={"REMOVE"}
          onClick={_addToMyRecommendations}
        />
      ))}
    </div>
  );
};

export default connect(
  ({ myList }) => ({ myList }),
  dispatch => ({
    _addToMyRecommendations: payload => {
      dispatch(addToRecommendations(payload));
      dispatch(removeFromMyList(payload));
    },
    _requestSucceeded: payload => dispatch(requestSucceeded(payload))
  })
)(MyList);
