import React from "react";
import { testData } from "../js/webdevtest-data";
import fortune from "../images/fortune.jpg";
import mmadness from "../images/mmadness.jpg";
import mmmillionaire from "../images/mmmillionaire.jpg";

function PromotionList() {
  return (
    <div className="promo_container">
      {testData.promotion_objects.map((data, key) => {
        let image = "";
        switch (data.promo_image_url) {
          case "images/fortune.jpg":
            image = fortune;
            break;
          case "images/mmadness.jpg":
            image = mmadness;
            break;
          case "images/mmmillionaire.jpg":
            image = mmmillionaire;
            break;
          default:
            break;
        }

        return (
          <div>
            <div>
              <img
                className="promo_img"
                key={data.promo_image_url}
                alt={"../" + data.promo_image_url}
                src={image}
              />
            </div>
            <div className="promo_inner_container">
              <span key={key.promotion_name} className="promo_header_link">
                <a href={"/" + data.promo}>{data.promotion_name}</a>
              </span>
              <p>{data.summary}</p>
              <div>
                <span>Next Drawing Date: </span>
                {data.drawings.map((date) => {
                  var drawingDate = new Date(date.drawing_date);
                  return (
                    <div>
                      <p key={date.drawing_date}>
                        {new Intl.DateTimeFormat("en-US", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "2-digit",
                        }).format(drawingDate)}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default PromotionList;
