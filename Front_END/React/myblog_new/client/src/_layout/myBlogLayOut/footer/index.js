import { FooterWrapper, FooterTamplate, Footertxt, FooterRight } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";

const LayOutFooter = () => {
  return (
    <>
      <FooterWrapper>
        <FooterTamplate>
          <Footertxt>
            <p>
              Justin Hong
              <br />
              (우) 000000 서울시 용산구 이태원
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              010.1234.1234
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              jutn2007@gmail.com
              <br />
              <br />
              Copyright 2022. KJH@, Ltd, All rights reserved.
            </p>
          </Footertxt>
          <FooterRight>
            <ul>
              <li>
                Go ! <span> KSY SNS</span>
              </li>
              <li>
                {" "}
                {/* fa-instagram => faInstagram */}
                <FontAwesomeIcon icon={faInstagram} />
              </li>
              <li>
                <FontAwesomeIcon icon={faYoutube} />
              </li>
            </ul>
          </FooterRight>
        </FooterTamplate>
      </FooterWrapper>
    </>
  );
};
export default LayOutFooter;
