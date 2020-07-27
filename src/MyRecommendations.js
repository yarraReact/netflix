import React from "react";
import { connect } from "react-redux";
import Tile from "./Tile";
import "./MyList.css";
import { addToMyList } from "./store/reducers/MyList";
import {removeFromRecommendations} from './store/reducers/Recommendations'

const MyRecommendations = ({ recommendations, _addToMyList }) => {
  return (
    <div className="section-container">
      <div className="section-title">My Recommendations</div>
      {recommendations.map(info => (
        <Tile info={info} buttonText={"ADD"} onClick={_addToMyList} />
      ))}
    </div>
  );
};

export default connect(
  ({ recommendations }) => ({ recommendations }),
  dispatch => ({
    _addToMyList: payload => {
      dispatch(addToMyList(payload));
      dispatch(removeFromRecommendations(payload));
    }
  })
)(MyRecommendations);
