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

        var drawingDate = new Date(data.drawings[0].drawing_date);

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
              <span key={key.promotion_name} className="Promo_header_link">
                {data.promotion_name}
              </span>
              <p>{data.summary}</p>
              <p>
                Next Drawing Date:{" "}
                {new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                }).format(drawingDate)}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default PromotionList;
