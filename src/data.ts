export interface Transaction {
  id: string
  title: string
  date: string
  amount: string
  iconKey: 'transfer' | 'deposit'
}

export const BALANCE = '۸۵۰,۰۰۰,۰۰۰ ریال'

export const TRANSACTIONS: Transaction[] = [
  { id: '1', title: 'انتقال به سپرده', date: 'یکشنبه ۲۴ اردیبهشت ۱۴۰۲ ۱۸:۴۶', amount: '۳۰۰,۰۰۰ ریال', iconKey: 'transfer' },
  { id: '2', title: 'انتقال به سپرده', date: 'یکشنبه ۲۴ اردیبهشت ۱۴۰۲ ۱۸:۴۶', amount: '۳۰۰,۰۰۰ ریال', iconKey: 'deposit' },
  { id: '3', title: 'انتقال به سپرده', date: 'یکشنبه ۲۴ اردیبهشت ۱۴۰۲ ۱۸:۴۶', amount: '۳۰۰,۰۰۰ ریال', iconKey: 'transfer' },
  { id: '4', title: 'انتقال به سپرده', date: 'یکشنبه ۲۴ اردیبهشت ۱۴۰۲ ۱۸:۴۶', amount: '۳۰۰,۰۰۰ ریال', iconKey: 'transfer' },
  { id: '5', title: 'انتقال به سپرده', date: 'یکشنبه ۲۴ اردیبهشت ۱۴۰۲ ۱۸:۴۶', amount: '۳۰۰,۰۰۰ ریال', iconKey: 'deposit' },
  { id: '6', title: 'انتقال به سپرده', date: 'یکشنبه ۲۴ اردیبهشت ۱۴۰۲ ۱۸:۴۶', amount: '۳۰۰,۰۰۰ ریال', iconKey: 'transfer' },
]
