import React from 'react';

const Result = ({amount, total, term}) => {
    return (
        <div className="result">
            <h2>Results</h2>
            <p>Loan Amount: {amount}</p>
            <p>Total Amount: {total}</p>
            <p>Term: {term}</p>
            <p>Monthly Payment: {(total / term).toFixed(2)}</p>
        </div>
    )
}

export default Result;