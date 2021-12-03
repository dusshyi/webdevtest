import React, { Fragment } from "react";
import { testData } from "../js/webdevtest-data";
import { useParams } from "react-router-dom";
import fortune from "../images/fortune.jpg";
import mmadness from "../images/mmadness.jpg";
import mmmillionaire from "../images/mmmillionaire.jpg";

function PromotionDetails() {
  let { promo } = useParams();
  let detailData = testData.promotion_objects.filter((e) => e.promo === promo);
  return (
    <div>
      {detailData.map((data, key) => {
        let nextEntryDeadline = new Date(data.drawings[0].entry_deadline);
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
            <div className="promo_detail_desktop_container">
              <div>
                <img
                  className="promo_img"
                  key={data.promo_image_url}
                  alt={"../" + data.promo_image_url}
                  src={image}
                />
              </div>
              <div className="promo_detail_desktop_container">
                <span key={key.promotion_name} className="promo_detail_header">
                  {data.promotion_name}
                </span>
                <div style={{ clear: "both" }} />
                <span className="promo_detail_left_text">{data.summary}</span>
                <div style={{ clear: "both" }} />
                <span className="promo_detail_sub_title">Drawing Schedule</span>
                <div style={{ clear: "both" }} />
                <table className="table_detail">
                  <tr>
                    <th>PRIZE</th>
                    <th>ENTRY DEADLINE</th>
                    <th>DRAWING DATE</th>
                  </tr>
                  {data.drawings.map((drawings) => {
                    var entryDeadline = new Date(drawings.entry_deadline);
                    var drawingDate = new Date(drawings.drawing_date);
                    return (
                      <tr>
                        <td>{drawings.prize}</td>
                        <td>
                          {new Intl.DateTimeFormat("en-US", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "2-digit",
                          }).format(entryDeadline)}
                        </td>
                        <td>
                          {new Intl.DateTimeFormat("en-US", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "2-digit",
                          }).format(drawingDate)}
                        </td>
                      </tr>
                    );
                  })}
                </table>
                <div style={{ clear: "both" }} />
                <span className="promo_detail_left_text">
                  {data.entry_info}
                </span>
                <div style={{ clear: "both" }} />
                <span className="promo_detail_sub_title">
                  Your Total Tickets Entered: {data.entries.length}
                </span>
                <div style={{ clear: "both" }} />
                <span className="promo_detail_center_text">
                  All entries are locked in at the time they are submitted and
                  cannot be deleted.
                </span>
                <div style={{ clear: "both" }} />
                <table className="table_detail">
                  <tr>
                    <th>ENTRY NUMBER</th>
                    <th>DATE</th>
                  </tr>
                  {data.entries.map((entries) => {
                    var entryDate = new Date(entries.date);
                    return (
                      <tr>
                        <td>{entries.entry_number}</td>
                        <td>
                          {new Intl.DateTimeFormat("en-US", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "2-digit",
                          }).format(entryDate)}
                        </td>
                      </tr>
                    );
                  })}
                </table>
              </div>
            </div>
            <div className="promo_detail_mobile_container">
              <span className="promo_detail_deadline_text">
                The Next Entry Deadline is <br />
                {new Intl.DateTimeFormat("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "2-digit",
                }).format(nextEntryDeadline)}
                !
              </span>
              <img
                className="promo_img"
                key={data.promo_image_url}
                alt={"../" + data.promo_image_url}
                src={image}
              />
              <span className="promo_detail_mobile_left_text">
                {data.summary}
              </span>
              <span className="promo_detail_mobile_sub_title">
                Drawing Schedule
              </span>
              <table className="table_detail_mobile">
                {data.drawings.map((drawings) => {
                  var entryDeadline = new Date(drawings.entry_deadline);
                  var drawingDate = new Date(drawings.drawing_date);
                  return (
                    <>
                      <tr>
                        <td className="table_detail_mobile_header">PRIZE</td>
                        <td>{drawings.prize}</td>
                      </tr>
                      <tr>
                        <td className="table_detail_mobile_header">
                          ENTRY DEADLINE
                        </td>
                        <td>
                          {new Intl.DateTimeFormat("en-US", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "2-digit",
                          }).format(entryDeadline)}
                        </td>
                      </tr>
                      <tr>
                        <td className="table_detail_mobile_header">
                          DRAWING DATE
                        </td>
                        <td>
                          {new Intl.DateTimeFormat("en-US", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "2-digit",
                          }).format(drawingDate)}
                        </td>
                      </tr>
                    </>
                  );
                })}
              </table>
              <span className="promo_detail_mobile_left_text">
                {data.entry_info}
              </span>
              <span className="promo_detail_mobile_sub_title">
                Your Total Tickets Entered: {data.entries.length}
              </span>
              <span className="promo_detail_center_text">
                All entries are locked in at the time they are submitted and
                cannot be deleted.
              </span>
              <table className="table_detail_mobile">
                {data.entries.map((entries) => {
                  var entryDate = new Date(entries.date);
                  return (
                    <>
                      <tr>
                        <td className="table_detail_mobile_header">
                          ENTRY NUMBER
                        </td>
                        <td>{entries.entry_number}</td>
                      </tr>
                      <tr>
                        <td className="table_detail_mobile_header">DATE</td>
                        <td>
                          {new Intl.DateTimeFormat("en-US", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "2-digit",
                          }).format(entryDate)}
                        </td>
                      </tr>
                    </>
                  );
                })}
              </table>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default PromotionDetails;
