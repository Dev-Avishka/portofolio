import React, { useEffect, useRef, useState } from "react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import "./style.css";

const Video = ({ path }) => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        videoRef.current.pause();
      } else if (visible) {
        videoRef.current.play();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [visible]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          videoRef.current.play();
        } else {
          setVisible(false);
          videoRef.current.pause();
        }
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current.parentNode);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current.parentNode);
      }
    };
  }, []);

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
    videoRef.current.muted = !isMuted;
  };

  return (
    <div className={`video-container ${visible ? "visible" : "hidden"}`}>
      <video
        ref={videoRef}
        autoPlay
        loop
        className="video"
        muted={isMuted}
      >
        <source src={path} type="video/mp4" />
      </video>
      <button className="mute-button" onClick={toggleMute}>
        {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
      </button>
    </div>
  );
};

export default Video;
