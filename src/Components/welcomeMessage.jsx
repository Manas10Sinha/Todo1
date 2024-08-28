import styles from "./welcomeMessage.module.css";
const WelcomeMessage = ({ todoItems }) => {
  return (
    <>
      {todoItems.length === 0 ? (
        <h3 className={styles.text}>Write ✎Todo</h3>
      ) : null}
    </>
  );
};

export default WelcomeMessage;
