import "./DeskTopFive.scss";

import LeftSide from "../../components/LeftSide/LeftSide";
import Middle from "../../components/Middle/Middle";
import RightSide from "../../components/RightSide/RightSide";
import TextArea from "../../components/TextArea/TextArea";
import Add from "../../CommonComponents/Adds/Add";
import Videos from "../../components/Videos/Videos";
import FlexAdd from "../../CommonComponents/FlexAdd/FlexAdd";
import LiveBtn from "../../CommonComponents/LiveBtn/LiveBtn";
import Direaction from "../../components/Direaction/Direaction";
import { FaTelegramPlane } from "react-icons/fa";
import Marque from "../../components/Marque/Marque";
// assest
import Chatango from "../../components/Chatango/Chatango";

const DeskTopFive = () => {
  return (
    <>
      <div className="deskfive">
        <Chatango />
        <div class="mobile-marque">
          <Marque />
        </div>

        <div className="deskfive-middle">
          <div className="deskfive-middle-left">
            <LeftSide>
              <Add size="large" />
              <Add size="small" />
              <Add size="large" />
              <TextArea />
              <Add size="small" />
              <TextArea />
            </LeftSide>
          </div>
          <div className="deskfive-middle-middle">
            <Middle>
              <div className="deskone-chaticon-mobile">
                <div className="only-for-mobile">
                  <div className="chat-icon">
                    <FaTelegramPlane />
                  </div>
                </div>
              </div>
              <center>
                <Direaction next="Channel" />
              </center>
              <div className="display-non-adds">
                <FlexAdd />
              </div>
              <div className="deskfive-middle-middle-content">
                <div className="deskfive-middle-middle-content-headings">
                  <p>Now Playing</p>
                  <h2>Sky Sports</h2>
                  <LiveBtn text="Live" />
                </div>

                <div className="deskfive-middle-middle-content-video">
                  <Videos link="https://www.youtube.com/embed/nLxmuh6wCVY" />

                  <div className="deskfive-server">
                    <button> Server 1</button>
                    <button> Server 2</button>
                    <button> Server 3</button>
                    <button> Server 4</button>
                  </div>
                </div>

                <div className="deskfive-middle-middle-content-btngird">
                  <button className="channel-btns">Sky Sports 1</button>
                  <button className="channel-btns">Sky Sports 1</button>
                  <button className="channel-btns">Sky Sports 1</button>
                  <button className="channel-btns">Sky Sports 1</button>
                  <button className="channel-btns">Sky Sports 1</button>
                  <button className="channel-btns">Sky Sports 1</button>
                  <button className="channel-btns">Sky Sports 1</button>
                  <button className="channel-btns">Sky Sports 1</button>
                </div>

                <div className="deskfive-middle-middle-content-adds">
                  <FlexAdd />
                </div>
                <div className="display-non-adds">
                  <FlexAdd />
                </div>
              </div>
            </Middle>
          </div>
          <div className="deskfive-middle-right">
            <RightSide>
              <div className="only-for-desktop">
                <div className="only-for-desktop-chat-icon">
                  <FaTelegramPlane />
                </div>
              </div>
              <Add size="full" />
              <Add size="full" />
              <Add size="full" />
              <Add size="full" />
            </RightSide>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeskTopFive;
