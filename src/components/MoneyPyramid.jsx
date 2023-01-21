import classes from "./MoneyPyramid.module.css";

const moneyLevels = [
  { number: "01", amount: 100 },
  { number: "02", amount: 200 },
  { number: "03", amount: 300 },
  { number: "04", amount: 500 },
  { number: "05", amount: 1000 },
  { number: "06", amount: 2000 },
  { number: "07", amount: 4000 },
  { number: "08", amount: 8000 },
  { number: "09", amount: 16000 },
  { number: "10", amount: 32000 },
  { number: "11", amount: 64000 },
  { number: "12", amount: 125000 },
  { number: "13", amount: 250000 },
  { number: "14", amount: 500000 },
  { number: "15", amount: 1000000 },
].reverse();

const MoneyPyramid = ({ aq }) => {
  return (
    <div className={classes.moneyPyramid}>
      <ul className={classes.moneyList}>
        {moneyLevels.map((level) => (
          <li
            key={level.number}
            className={
              aq + 1 === +level.number
                ? `${classes.listItem} ${classes.active}`
                : classes.listItem
            }
          >
            <span className={classes.qn}>{level.number}</span>
            <span className={classes.amount}>
              {level.amount.toLocaleString()} €
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoneyPyramid;
