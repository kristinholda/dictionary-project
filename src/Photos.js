import React from "react";

export default function Photos(props) {
  console.log(props.photos);
  if (props.photos) {
    return (
      <div className="Photos">
        <section>
          {props.photos.map(function (photo, index) {
            return <img src={photo.src.landscape} key={index} />;
          })}
        </section>
      </div>
    );
  } else {
    return null;
  }
}
