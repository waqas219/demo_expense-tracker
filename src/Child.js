import React, { useContext, useState } from 'react';
import transContext from './TransContext';


function Parent() {
    let { transactions, addTransaction  } = useContext(transContext);

    let [newDesc, setDesc] = useState("");
    let [newAmount, setAmount] = useState(0);

    const handleAddition = (event) => {
        event.preventDefault();
        if (Number(newAmount) === 0) {
            alert("Please enter correct value")
            return false;
        }
        addTransaction({
            amount: Number(newAmount),
            desc: newDesc
        })
        setDesc('');
        setAmount(0);
    }

    const getIncome = () => {
        let income = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount > 0) {
                income += transactions[i].amount;
            }

        }
        return income;
    }
    const getExpense = () => {
        let expense = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount < 0) {
                expense += transactions[i].amount;
            }
        }
        return expense;
    }
    return (

        <div className="container">

            <h1 className="text-center">Expense Tracker</h1>
            <h2>Your Balance <br /> ${getIncome() + getExpense()}</h2>
            <hr />
            <div className="expense-container">
                <h3>Income <br /> ${getIncome()}</h3>
                <h3>Expense <br /> ${getExpense()}</h3>
            </div>
            <hr />
            <h2>History</h2>
            <ul className="transaction-list">
                {transactions.map((transObj, ind) => {
                    return (
                        <li key={ind}>
                            <span>{transObj.desc}</span>
                            <span>${transObj.amount}</span>
                        </li>
                    )

                })}
            </ul>

            <hr />
            <h2>Add new Transaction</h2>
            <hr />
            <form className="transaction-form" onSubmit={handleAddition}>
                <label>
                    Enter description <br />
                    <input type="text" value={newDesc} placeholder="Description" onChange={(ev) => setDesc(ev.target.value)} required />
                </label>
                <br />
                <label>
                    Enter Amount <br />
                    <input type="number" value={newAmount} placeholder="Amount" onChange={(ev) => setAmount(ev.target.value)} required />
                </label>
                <br />
                <input type="submit" value="Add Transaction" />
            </form>
        </div>
    )
}

export default Parent;