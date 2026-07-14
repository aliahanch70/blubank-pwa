import { useState } from 'react'
import DashboardPage from './components/DashboardPage'
import TransferPage from './components/TransferPage'
import TransferAmountPage from './components/TransferAmountPage'
import TransferMethodPage from './components/TransferMethodPage'
import TransferConfirmPage from './components/TransferConfirmPage'
import TransferReceiptPage from './components/TransferReceiptPage'
import GridPage from './components/GridPage'
import CardPage from './components/CardPage'
import BottomNav from './components/BottomNav'
import { TRANSACTIONS, type Transaction } from './data'

type Page = 'home' | 'transfer' | 'amount' | 'method' | 'confirm' | 'receipt'
type Dest = { name: string; account: string; badge: boolean; blue: boolean }

const weekdays = ['یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه', 'شنبه']
const months = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند']
function nowFa() {
  const d = new Date()
  const p = new Intl.DateTimeFormat('fa-IR', { hour: '2-digit', minute: '2-digit', hour12: false }).format(d)
  const parts = new Intl.DateTimeFormat('fa-IR', { year: 'numeric', month: 'numeric', day: 'numeric' }).formatToParts(d)
  const get = (t: string) => parts.find(p => p.type === t)?.value ?? ''
  const mi = parseInt(get('month').replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d).toString())) - 1
  return `${weekdays[d.getDay()]} ${get('day')} ${months[mi]} ${get('year')} ${p}`
}

export default function App() {
  const [tab, setTab] = useState('home')
  const [page, setPage] = useState<Page>('home')
  const [selectedDest, setSelectedDest] = useState<Dest | null>(null)
  const [amount, setAmount] = useState('')
  const [txns, setTxns] = useState<Transaction[]>(TRANSACTIONS)

  const goHome = () => { setTab('home'); setPage('home'); setSelectedDest(null); setAmount('') }
  const goTransfer = () => { setTab('transfer'); setPage('transfer'); setSelectedDest(null); setAmount('') }
  const navigate = (t: string) => {
    if (t === 'home') goHome()
    else if (t === 'grid') { setTab('grid'); setPage('home'); setSelectedDest(null); setAmount('') }
    else if (t === 'card') { setTab('card'); setPage('home'); setSelectedDest(null); setAmount('') }
    else goTransfer()
  }

  const confirmToReceipt = () => {
    if (selectedDest && amount) {
      const fa = (s: string) => s.replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[+d])
      const faComma = (s: string) => fa(s.replace(/\B(?=(\d{3})+(?!\d))/g, ','))
      setTxns(prev => [{ id: String(Date.now()), title: `انتقال به ${selectedDest.name}`, date: nowFa(), amount: `${faComma(amount)} ریال`, iconKey: 'transfer' }, ...prev])
    }
    setPage('receipt')
  }

  if (page === 'receipt' && selectedDest) {
    return (
      <div className="flex flex-col h-full bg-white">
        <TransferReceiptPage dest={selectedDest} amount={amount} onBack={goHome} />
      </div>
    )
  }

  if (page === 'confirm' && selectedDest) {
    return (
      <div className="flex flex-col h-full bg-white">
        <TransferConfirmPage dest={selectedDest} amount={amount} onBack={() => setPage('method')} onConfirm={confirmToReceipt} />
      </div>
    )
  }

  if (page === 'method') {
    return (
      <div className="flex flex-col h-full bg-white">
        <TransferMethodPage onBack={() => setPage('amount')} onConfirm={() => setPage('confirm')} />
      </div>
    )
  }

  if (page === 'amount' && selectedDest) {
    return (
      <div className="flex flex-col h-full bg-white">
        <TransferAmountPage
          dest={selectedDest}
          amount={amount}
          onAmountChange={setAmount}
          onBack={() => setPage('transfer')}
          onContinue={() => setPage('method')}
        />
      </div>
    )
  }

  if (tab === 'grid' && page === 'home') {
    return (
      <div className="flex flex-col h-full bg-white">
        <GridPage onNavigate={navigate} />
        <BottomNav activeTab={tab} onNavigate={navigate} />

      </div>
    )
  }

  if (tab === 'card' && page === 'home') {
    return (
      <div className="flex flex-col h-full bg-white">
        <CardPage onNavigate={navigate} />
        <BottomNav activeTab={tab} onNavigate={navigate} />

      </div>
    )
  }

  return (
    <div className="flex flex-col h-full bg-[#F5F7FB]">
      {page === 'home' ? (
        <>
          <div className="flex-1 overflow-hidden bg-white rounded-t-[20px] relative z-10 -mt-5 shadow-sheet">
            <DashboardPage transactions={txns} />
          </div>
        </>
      ) : (
        <div className="flex-1 overflow-hidden">
          <TransferPage onSelect={d => { setSelectedDest(d); setPage('amount') }} />
        </div>
      )}

      <BottomNav activeTab={tab} onNavigate={navigate} />
    </div>
  )
}
