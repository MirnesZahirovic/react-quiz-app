import classes from "./MoneyPyramid.module.css";

const data = [
  {
    number: 1,
    amount: 500,
  },
  {
    number: 2,
    amount: 1000,
  },
  {
    number: 3,
    amount: 2000,
  },
  {
    number: 4,
    amount: 3000,
  },
  {
    number: 5,
    amount: 5000,
  },
  {
    number: 6,
    amount: 7500,
  },
  {
    number: 7,
    amount: 10000,
  },
  {
    number: 8,
    amount: 15000,
  },
  {
    number: 9,
    amount: 25000,
  },
  {
    number: 10,
    amount: 50000,
  },
  {
    number: 11,
    amount: 75000,
  },
  {
    number: 12,
    amount: 150000,
  },
  {
    number: 13,
    amount: 250000,
  },
  {
    number: 14,
    amount: 500000,
  },
  {
    number: 15,
    amount: 1000000,
  },
].reverse();

function MoneyPyramid() {
  return (
    <div className={classes.moneyPyramid}>
      <ul className={classes.moneyList}>
        {data.map((amount) => (
          <li className={classes.moneyListItem} key={amount.number}>
            <span className={classes.number}>{amount.number}</span>{" "}
            <span className={classes.amount}>{amount.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MoneyPyramid;
