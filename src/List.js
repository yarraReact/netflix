import React, { useEffect } from "react";
import { connect } from "react-redux";
import ListTemplate from "./ListTemplate";
import {
  removeFromMyList,
  requestSucceeded,
  addToMyList,
} from "./store/reducers/MyList";
import {
  removeFromRecommendations,
  addToRecommendations,
} from "./store/reducers/Recommendations";
import mockData from "./mockData.json";

const Lists = ({
  myList,
  _addToMyRecommendations,
  recommendations,
  _addToMyList,
  _requestSucceeded,
}) => {
  useEffect(() => {
    async function fetchData(){
        const request= await new Promise((resolve)=> resolve(mockData))
        _requestSucceeded(request)
    }
    fetchData()
 }, []);
  return (
    <React.Fragment>
      <ListTemplate
        title={"My List"}
        data={myList}
        tileText={"REMOVE"}
        onClick={_addToMyRecommendations}
        subTitle={"Please select from recommendation list to add to your list."}
      />
      <ListTemplate
        title={"My Recommendations"}
        data={recommendations}
        tileText={"ADD"}
        onClick={_addToMyList}
        subTitle={
          "Please remove from your list to add to your recommendations list."
        }
      />
    </React.Fragment>
  );
};
export default connect(
  ({ myList, recommendations }) => ({ myList, recommendations }),
  (dispatch) => ({
    _addToMyRecommendations: (payload) => {
      dispatch(addToRecommendations(payload));
      dispatch(removeFromMyList(payload));
    },
    _addToMyList: (payload) => {
      dispatch(addToMyList(payload));
      dispatch(removeFromRecommendations(payload));
    },
    _requestSucceeded: (payload) => dispatch(requestSucceeded(payload)),
  })
)(Lists);
