import styles from "./EventHostingPage.module.css";
const EventHostingPage = () => {
  return (
    <div className={styles.eventHostingPage}>
      <img className={styles.groupIcon} alt="" src="/group.svg" />
      <div className={styles.whisper2023}>© Whisper 2023</div>
      <div className={styles.whisperParent}>
        <div className={styles.whisper}>Whisper</div>
        <div className={styles.dashboard}>Dashboard</div>
        <div className={styles.frameParent}>
          <div className={styles.hostWrapper}>
            <div className={styles.whisper}>Host</div>
          </div>
          <div className={styles.hostWrapper}>
            <div className={styles.whisper}>bsrihurh3i567384</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventHostingPage;
