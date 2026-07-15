import type { Transaction } from '../data'

const KEY = 'blubank_transactions'

export function getTransactions(): Transaction[] {
  try {
    const raw = localStorage.getItem(KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

export function saveTransaction(tx: Transaction): void {
  const list = getTransactions()
  list.unshift(tx) // ponytail: prepend, newest first
  localStorage.setItem(KEY, JSON.stringify(list))
}

export function clearAll(): void {
  localStorage.removeItem(KEY)
}
