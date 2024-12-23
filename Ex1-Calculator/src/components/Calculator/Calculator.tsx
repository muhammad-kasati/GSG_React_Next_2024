import React, { useState } from 'react';
import Display from '../Display';
import './Calculator.css';

const Calculator: React.FC = () => {
    const [input, setInput] = useState<string>('');
    const [result, setResult] = useState<string>('');

    const handleButtonClick = (value: string) => {
        if (value === '=') {
            try {
                setResult(eval(input).toString());
            } catch {
                setResult('Error');
            }
        } else if (value === 'C') {
            setInput('');
            setResult('');
        } else if (value === '←') {
            setInput((prev) => prev.slice(0, -1));
        } else {
            setInput((prev) => prev + value);
        }
    };

    const buttons = [
        '7', '8', '9', '/',
        '4', '5', '6', '*',
        '1', '2', '3', '-',
        '0', '.', '=', '+',
        'C', '←',
    ];

    return (
        <div className="calculator">
            <Display value={result || input || '0'} />
            <div className="buttons">
                {buttons.map((btn) => (
                    <button
                        key={btn}
                        onClick={() => handleButtonClick(btn)}
                        className="button"
                    >
                        {btn}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Calculator;
