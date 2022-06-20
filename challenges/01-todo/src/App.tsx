import { Header } from './components/Header';
import { Form } from './components/Form';
import { Todos } from './components/Todos';
import { tasks } from './data/task-mock';

import styles from './App.module.css';

export const App = () => {
  return (
    <>
      <Header />

      <Form />

      <div className={styles.container}>
        <Todos tasks={tasks} />{' '}
      </div>
    </>
  );
};
