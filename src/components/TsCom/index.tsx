import React, { useState } from 'react';
import styles from './index.module.less';

interface HelloProps {
  compiler: string;
  framework: string;
}

const TsCom: React.FC<HelloProps> = function (props) {
  const a = 1;
  const b: number = a;
  const [number, setNumber] = useState(0);
  return (
    <div>
      <h1>TS测试</h1>
      <p>热重载测试</p>
      <button onClick={() => setNumber(number + 1)}>click me</button>
      <p>number:{number}</p>
      <p className={styles['test']}>
        Hello from {props.compiler} and {props.framework}!
      </p>
    </div>
  );
};

export default TsCom;
