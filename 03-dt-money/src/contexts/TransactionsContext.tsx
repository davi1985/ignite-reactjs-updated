import { createContext, ReactNode, useEffect, useState } from 'react'

interface Transaction {
  id: number
  description: string
  price: number
  type: 'income' | 'outcome'
  category: string
  createdAt: string
}

interface TransactionsContextType {
  transactions: Transaction[]
}

interface TransactionsProviderPros {
  children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionsContextType)

export function TransactionsProvider({ children }: TransactionsProviderPros) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  const getTransactions = async () => {
    const response = await fetch('http://localhost:3333/transactions')
    const data = await response.json()

    setTransactions(data)
  }

  useEffect(() => {
    getTransactions()
  }, [])

  return (
    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>
  )
}
