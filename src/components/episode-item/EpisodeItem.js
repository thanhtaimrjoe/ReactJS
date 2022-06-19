import React from "react";

function EpisodeItem(props) {
  var { episode } = props;
  return (
    <div className="col mb-3">
      <div class="card" style={{ width: "15rem" }}>
        <img src={episode.image} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{episode.name}</h5>
          <p class="card-text">Price: {episode.price}$</p>
          <button type="button" class="btn btn-primary">
            Edit episode
          </button>
        </div>
      </div>
    </div>
  );
}

export default EpisodeItem;
