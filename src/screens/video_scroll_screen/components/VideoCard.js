import "./VideoCard.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import {
  BagPlusFill,
  HeartFill,
  BagCheckFill,
  ArrowUpRightSquareFill,
  ChatRightTextFill,
  CartFill,
  BookmarkFill,
} from "react-bootstrap-icons";
import { Offcanvas, Modal } from "react-bootstrap";
import { useState } from "react";
import ShareModal from "./ShareModal";
import Comments from "./Comments";

function VideoCard({ color, display }) {
  const [showComments, setShowComments] = useState(false);
  const [showShare, setShowShare] = useState(false);
  let iconSize = "35";

  function handleShowComments() {
    setShowComments(true);
  }

  function handleHideComments() {
    setShowComments(false);
  }

  function handleShowShare() {
    setShowShare(true);
  }

  function handleHideShare() {
    setShowShare(false);
  }

  return (
    <>
      <div
        className="card"
        style={{ backgroundColor: color, display: display }}
      >
        <div className="icons-column">
          <div>
            <HeartFill className="icon" size={iconSize} />
          </div>
          <div>
            <ChatRightTextFill
              className="icon"
              size={iconSize}
              onClick={handleShowComments}
            />
          </div>
          <div>
            <BookmarkFill className="icon" size={iconSize} />
          </div>
          <div>
            <a href="https://www.google.com/" target="_blank">
              <CartFill className="icon" size={iconSize} />
            </a>
          </div>
          <div>
            <ArrowUpRightSquareFill
              className="icon"
              size={iconSize}
              onClick={handleShowShare}
            />
          </div>
        </div>
        <Comments show={showComments} onHide={handleHideComments} />
        <ShareModal show={showShare} onHide={handleHideShare} />
      </div>
    </>
  );
}

export default VideoCard;
