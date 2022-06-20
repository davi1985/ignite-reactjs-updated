import styles from './styles.module.css';

import { PlusCircle } from 'phosphor-react';

export const Form = () => {
  return (
    <form className={styles.form}>
      <input
        type="text"
        className={styles.input}
        placeholder="Adicione uma nova tarefa"
      />

      <button type="submit">
        Criar
        <PlusCircle size={20} />
      </button>
    </form>
  );
};
