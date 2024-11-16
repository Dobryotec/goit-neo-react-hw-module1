import { TransactionDataProps } from '../TransactionHistory/TransactionHistory';

import { firstLetterToUpperCase } from '../../utils/firstLetterToUpperCase';

import css from './Transaction.module.css';

export const Transaction: React.FC<TransactionDataProps> = ({ type, amount, currency }) => {
  return (
    <>
      <td className={css['transaction-td']}>{firstLetterToUpperCase(type)}</td>
      <td className={css['transaction-td']}>{amount}</td>
      <td className={css['transaction-td']}>{currency}</td>
    </>
  );
};
