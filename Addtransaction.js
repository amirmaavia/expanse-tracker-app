import React from 'react'

 function Addtransaction() {
    return (
        <div>
            <h3>Add new transaction</h3>
            <form className="transaction-form">
                
                    <label for="text">Text
                    <br />
                    <input type="text" placeholder="Enter text..." required />
                    </label>
                   
                
               
                    <label for="amount">Amount
                    <br />
                    (nagetive-expense , Positive-income)
                    <br />
                    <input type="number" placeholder="Enter amount"  required />
                
                    </label>
                    <button>Add Transaction</button>

                
            </form>
        </div>
    )
}
export default Addtransaction