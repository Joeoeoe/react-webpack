import React from 'react';
import styles from './index.module.css';

interface HelloProps { compiler: string; framework: string; }

const TsTestCom: React.FC<HelloProps> = (props: HelloProps) => {
  const a = 1;
  const b: number = a;
  console.log(a, b);
  return (
    <h1 className={styles['test']}>
      Hello from {props.compiler} and {props.framework}!
    </h1>
  );
};

export default TsTestCom;
