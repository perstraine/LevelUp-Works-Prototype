import cardStyles from "../styles/ContentScrollCard.module.css";

export default function ContentScrollCard(props) {
  return (
    <div className={cardStyles.contentBackground}>
      <div className={cardStyles.contentContainer}>{props.children}</div>
    </div>
  );
}
