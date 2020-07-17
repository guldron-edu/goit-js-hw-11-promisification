import task1 from './js/task1';
import task2 from './js/task2';
import task3 from './js/task3';

const refs = {
  task1: document.querySelector('#task1'),
  task2: document.querySelector('#task2'),
  task3: document.querySelector('#task3'),
};

refs.task1.addEventListener('click', task1);
refs.task2.addEventListener('click', task2);
refs.task3.addEventListener('click', task3);
