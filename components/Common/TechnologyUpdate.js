import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
const ModalVideo = dynamic(() => import("react-modal-video"), {
  ssr: false,
});

const TechnologyUpdate = () => {
  const [isOpen, setIsOpen] = React.useState(true);
  const openModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="technology-area ptb-100 bg-color">
      <div className="container">
        <div className="row align-items-center choose-c">
          <div className="col-lg-6">
            <div className="choose-img">
              <img src="/images/choose-img1.jpg" alt="choose" />
              <div className="technology-video">
                <Link href="#play-video">
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      openModal();
                    }}
                    className="video-btn popup-youtube"
                  >
                    <i className="bx bx-play"></i>
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="technology-content">
              <h2>Updated Technology</h2>
              <p>
                You need to be sure there isn't anything embarrassing hidden in
                the middle of text. All the Lorem Ipsum generators on the
                Internet tend to repeat predefined chunks as necessary, making
                this the first true generator on the Internet. It uses a
                dictionary of over 200 Latin words, combined with.
              </p>

              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going There are many variations
                of passages of Lorem Ipsum available, but the.
              </p>

              <Link href="/contact-us">
                <a className="box-btn">Contact Us</a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* If you want to change the video need to update videoID */}
      <ModalVideo
        channel="youtube"
        isOpen={!isOpen}
        videoId="bk7McNUjWgw"
        onClose={() => setIsOpen(!isOpen)}
      />
    </div>
  );
};

export default TechnologyUpdate;
