import  * as React from 'react';

interface HelloProps { compiler: string; framework: string; }


const TsTestCom = (props: HelloProps) => {
    return (
        <h1>
            Hello from {props.compiler} and {props.framework}!
        </h1>
    );
};

export default TsTestCom;