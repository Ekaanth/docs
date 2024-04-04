import React from "react";
import ReactYouTube from "react-youtube";
import styles from "./YouTube.module.css";

export default function YouTube({ videoId }: { videoId: string }) {
  return (
    <div className={styles.container}>
      <div className={styles.sizer}>
        <ReactYouTube
          videoId={videoId}
          opts={{
            width: '100%',
          }}
        />
      </div>
    </div>
  );
}
