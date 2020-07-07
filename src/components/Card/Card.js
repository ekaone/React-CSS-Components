import React from "react";
import "./styles.css";

export default function Card() {
  return (
    <>
      <div className="cards-list">
        <div className="card 1">
          <div className="card_image">
            {" "}
            <img src="https://i.redd.it/b3esnz5ra34y.jpg" alt="#" />{" "}
          </div>
          <div className="card_title title-white">
            <p>Card Title</p>
          </div>
        </div>

        <div className="card 2">
          <div className="card_image">
            <img
              src="https://cdn.blackmilkclothing.com/media/wysiwyg/Wallpapers/PhoneWallpapers_FloralCoral.jpg"
              alt="#"
            />
          </div>
          <div className="card_title title-white">
            <p>Card Title</p>
          </div>
        </div>

        <div className="card 3">
          <div className="card_image">
            <img
              src="https://media.giphy.com/media/10SvWCbt1ytWCc/giphy.gif"
              alt="#"
            />
          </div>
          <div className="card_title">
            <p>Card Title</p>
          </div>
        </div>

        <div className="card 4">
          <div className="card_image">
            <img
              src="https://media.giphy.com/media/LwIyvaNcnzsD6/giphy.gif"
              alt="#"
            />
          </div>
          <div className="card_title title-black">
            <p>Card Title</p>
          </div>
        </div>
      </div>
    </>
  );
}
