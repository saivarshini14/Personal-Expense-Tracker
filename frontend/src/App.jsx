
import { useEffect, useState } from 'react'
import './App.css'

const API = 'http://localhost:8080/api/expenses'

function App() {
  const [expenses, setExpenses] = useState([])
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')
  const [category, setCategory] = useState('')
  const [date, setDate] = useState('')
  const [filter, setFilter] = useState('All')
  const [editId, setEditId] = useState(null)
  const [message, setMessage] = useState('')

  const loadExpenses = async () => {
    try {
      const response = await fetch(API)
      if (!response.ok) throw new Error()
      const data = await response.json()
      setExpenses(data)
    } catch {
      setMessage('Could not connect to backend. Check if it is running.')
    }
  }

  useEffect(() => {
    loadExpenses()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!title.trim() || !amount || Number(amount) <= 0 ||
        !category || !date) {
      setMessage('Please enter valid details in all fields.')
      return
    }

    const expense = {
      title,
      amount: Number(amount),
      category,
      date
    }

    try {
      const response = await fetch(
        editId ? `${API}/${editId}` : API,
        {
          method: editId ? 'PUT' : 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(expense)
        }
      )

      if (!response.ok) throw new Error()

      setMessage(editId ? 'Expense updated!' : 'Expense added!')
      setTitle('')
      setAmount('')
      setCategory('')
      setDate('')
      setEditId(null)
      loadExpenses()
    } catch {
      setMessage('Unable to save expense.')
    }
  }

  const handleEdit = (expense) => {
    setEditId(expense.id)
    setTitle(expense.title)
    setAmount(expense.amount)
    setCategory(expense.category)
    setDate(expense.date)
    setMessage('')
  }

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this expense?')) return

    try {
      const response = await fetch(`${API}/${id}`, {
        method: 'DELETE'
      })

      if (!response.ok) throw new Error()

      setMessage('Expense deleted!')
      loadExpenses()
    } catch {
      setMessage('Unable to delete expense.')
    }
  }

  const filteredExpenses = filter === 'All'
    ? expenses
    : expenses.filter(e => e.category === filter)

  const total = expenses.reduce(
    (sum, e) => sum + Number(e.amount), 0
  )

  return (
    <div className="app">
      <header>
        <h1>Expense Tracker</h1>
        <p>Manage your daily expenses easily</p>
      </header>

      <main>
        <section className="summary">
          <h2>Total Expenses</h2>
          <h1>₹{total.toFixed(2)}</h1>
        </section>

        <section className="expense-form">
          <h2>{editId ? 'Edit Expense' : 'Add New Expense'}</h2>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Expense title"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />

            <input
              type="number"
              placeholder="Amount"
              value={amount}
              onChange={e => setAmount(e.target.value)}
            />

            <select
              value={category}
              onChange={e => setCategory(e.target.value)}
            >
              <option value="">Select Category</option>
              <option>Food</option>
              <option>Travel</option>
              <option>Shopping</option>
              <option>Other</option>
            </select>

            <input
              type="date"
              value={date}
              onChange={e => setDate(e.target.value)}
            />

            <button type="submit">
              {editId ? 'Update Expense' : 'Add Expense'}
            </button>

            {editId && (
              <button type="button" onClick={() => {
                setEditId(null)
                setTitle('')
                setAmount('')
                setCategory('')
                setDate('')
              }}>
                Cancel
              </button>
            )}
          </form>

          {message && <p>{message}</p>}
        </section>

        <section className="expense-list">
          <h2>Recent Expenses</h2>

          <select
            value={filter}
            onChange={e => setFilter(e.target.value)}
          >
            <option>All</option>
            <option>Food</option>
            <option>Travel</option>
            <option>Shopping</option>
            <option>Other</option>
          </select>

          {filteredExpenses.length === 0 ? (
            <p>No expenses found.</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Amount</th>
                  <th>Category</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredExpenses.map(expense => (
                  <tr key={expense.id}>
                    <td>{expense.title}</td>
                    <td>₹{Number(expense.amount).toFixed(2)}</td>
                    <td>{expense.category}</td>
                    <td>{expense.date}</td>
                    <td>
                      <button onClick={() => handleEdit(expense)}>
                        Edit
                      </button>
                      {' '}
                      <button onClick={() => handleDelete(expense.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </section>
      </main>
    </div>
  )
}

export default App
