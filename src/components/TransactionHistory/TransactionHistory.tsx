import { Transaction } from '../Transaction/Transaction';

import css from './TransactionHistory.module.css';

export type TransactionDataProps = {
  id: string;
  type: string;
  amount: string;
  currency: string;
};

type TransactionsDataProps = {
  items: TransactionDataProps[];
};

export const TransactionHistory: React.FC<TransactionsDataProps> = ({ items }) => {
  return (
    <table className={css['transactions-table']}>
      <thead className={css['transactions-head']}>
        <tr>
          <th className={css['transactions-th']}>Type</th>
          <th className={css['transactions-th']}>Amount</th>
          <th className={css['transactions-th']}>Currency</th>
        </tr>
      </thead>
      <tbody className={css['transactions-body']}>
        {items.map(({ id, type, amount, currency }) => (
          <tr className={css.transaction} key={id}>
            <Transaction type={type} amount={amount} currency={currency} id={id} />
          </tr>
        ))}
      </tbody>
    </table>
  );
};
