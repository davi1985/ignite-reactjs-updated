import { Trash, Circle, CheckCircle } from 'phosphor-react';
import styles from './styles.module.css';

import clipboard from '../../assets/clipboard.svg';
import { ITasks } from './types';

export const Todos = ({ tasks }: ITasks) => {
  const tasksFinalized = tasks.filter((task) => task.status === true);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.tasksCreated}>
          <span>Tarefas criadas</span>

          <span className={styles.quantity}>{tasks.length}</span>
        </div>

        <div className={styles.tasksDone}>
          <span>Concluídas</span>

          <span className={styles.quantity}>
            {tasksFinalized.length} de {tasks.length}
          </span>
        </div>
      </header>

      <div className={styles.tasks}>
        {!tasks && (
          <div className={styles.emptyTasks}>
            <img src={clipboard} alt="ícone de clipboard" />

            <p>Você ainda não tem tarefas cadastradas</p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        )}

        {tasks.map((task) => (
          <div className={styles.task} key={task.id}>
            <div className={styles.checkbox}>
              {task.status ? (
                <CheckCircle
                  size={20}
                  className={styles.checked}
                  weight="fill"
                />
              ) : (
                <Circle size={20} className={styles.unchecked} />
              )}
            </div>

            <span className={task.status ? styles.completed : ''}>
              {task.title}
            </span>

            <Trash size={20} />
          </div>
        ))}
      </div>
    </div>
  );
};
