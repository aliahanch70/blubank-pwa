import { useState, useEffect } from 'react'
import DashboardPage from './components/DashboardPage'
import TransferPage from './components/TransferPage'
import TransferAmountPage from './components/TransferAmountPage'
import TransferMethodPage from './components/TransferMethodPage'
import TransferConfirmPage from './components/TransferConfirmPage'
import TransferReceiptPage from './components/TransferReceiptPage'
import GridPage from './components/GridPage'
import CardPage from './components/CardPage'
import ProfilePage from './components/ProfilePage'
import BottomNav from './components/BottomNav'
import DotLoading from './components/DotLoading'
import { TRANSACTIONS, type Transaction } from './data'
import { getTransactions, saveTransaction } from './services/transactionStorage'
import { getProfile, type Profile } from './services/profileStorage'

type Page = 'home' | 'transfer' | 'amount' | 'method' | 'confirm' | 'loading' | 'receipt' | 'viewReceipt'
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
  const [method, setMethod] = useState('')

  const [dests, setDests] = useState<Dest[]>([
    { name: 'رضا دیانت خواه', account: 'IR - ۷۰ ۰۵۶۰ ۶۱۱۸ ۲۸۰۰ ۶۹۰۱ ۳۶۹۰ ۰۱', badge: true, blue: true },
    { name: 'کاج سبز سپهر آذین', account: '۶۲۲۱ ۰۶۱۲ ۵۹۹۵ ۲۱۰۱', badge: false, blue: false },
    { name: 'محمد داداش خواه', account: 'IR - ۵۲ ۰۵۶۰ ۶۱۱۸ ۲۸۰۰ ۵۱۷۳ ۵۵۷۶ ۰۱', badge: true, blue: true },
    { name: 'لادن اسدی', account: '۶۰۳۷ ۶۹۸۱ ۳۵۴۲ ۴۴۹۲', badge: false, blue: false },
    { name: 'یحیی برگردشتمیانی', account: 'IR - ۹۵ ۰۵۶۰ ۶۱۱۸ ۲۸۰۰ ۵۴۹۹ ۹۴۶۵ ۰۱', badge: true, blue: true },
    { name: 'برزگرد', account: 'IR - ۱۲ ۳۴۵۶ ۷۸۹۰ ۱۲۳۴ ۵۶۷۸ ۹۰۱۲ ۳۴', badge: true, blue: true },
    { name: 'مهدی ابوالحسنی', account: '۵۰۲۲ ۲۹۱۰ ۴۴۳۲ ۵۵۶۱', badge: false, blue: false },
  ])
  const [txns, setTxns] = useState<Transaction[]>([])
  const [loading, setLoading] = useState(false)
  const [showReceipt, setShowReceipt] = useState(false)
  const [viewTx, setViewTx] = useState<Transaction | null>(null)
  const [profile, setProfile] = useState<Profile>(getProfile)

  // Reload profile when tab switches to profile (user might have just saved)
  useEffect(() => { setProfile(getProfile()) }, [tab])

  useEffect(() => {
    const stored = getTransactions()
    if (stored.length > 0) {
      const ids = new Set(stored.map(t => t.id))
      const seeds = TRANSACTIONS.filter(t => !ids.has(t.id))
      setTxns([...stored, ...seeds])
    } else {
      setTxns(TRANSACTIONS)
    }
  }, [])

  const resetFlow = () => { setSelectedDest(null); setAmount(''); setMethod(''); setLoading(false); setShowReceipt(false); setViewTx(null) }
  const goHome = () => { setTab('home'); setPage('home'); resetFlow() }
  const goTransfer = () => { setTab('transfer'); setPage('transfer'); resetFlow() }
  const navigate = (t: string) => {
    if (t === 'home') goHome()
    else if (t === 'grid') { setTab('grid'); setPage('home'); resetFlow() }
    else if (t === 'card') { setTab('card'); setPage('home'); resetFlow() }
    else if (t === 'profile') { setTab('profile'); setPage('home'); resetFlow() }
    else goTransfer()
  }

  const confirmToReceipt = () => {
    if (selectedDest && amount) {
      const fa = (s: string) => s.replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[+d])
      const faComma = (s: string) => fa(s.replace(/\B(?=(\d{3})+(?!\d))/g, ','))
      const tx: Transaction = {
        id: String(Date.now()),
        title: 'انتقال به سپرده',
        date: nowFa(),
        amount: `${faComma(amount)} ریال`,
        iconKey: 'transfer',
        receipt: { dest: selectedDest, amount },
      }
      setTxns(prev => [tx, ...prev])
      saveTransaction(tx)
    }
    setPage('loading')
    setLoading(true)
    setTimeout(() => { setLoading(false); setPage('receipt'); setShowReceipt(true) }, 2000)
  }

  const viewReceipt = (tx: Transaction) => {
    if (!tx.receipt) return
    setViewTx(tx)
    setPage('viewReceipt')
  }

  const senderInfo = { name: profile.senderName, sheba: profile.sheba }

  // Loading overlay
  if (page === 'loading') {
    return (
      <div className="flex flex-col h-full bg-white items-center justify-center">
        <DotLoading />
      </div>
    )
  }

  if (page === 'receipt' && selectedDest) {
    return (
      <div className={`flex flex-col h-full bg-white ${showReceipt ? 'slide-in-left' : ''}`}>
        <TransferReceiptPage dest={selectedDest} amount={amount} method={method} sender={senderInfo} txDate="" onBack={goHome} />
      </div>
    )
  }

  if (page === 'viewReceipt' && viewTx?.receipt) {
    return (
      <div className="flex flex-col h-full bg-white slide-in-left">
        <TransferReceiptPage dest={viewTx.receipt.dest} amount={viewTx.receipt.amount} method="" sender={senderInfo} txDate={viewTx.date} onBack={goHome} />
      </div>
    )
  }

  if (page === 'confirm' && selectedDest) {
    return (
      <div className="flex flex-col h-full bg-white slide-in-left">
        <TransferConfirmPage dest={selectedDest} amount={amount} onBack={() => setPage('method')} onConfirm={confirmToReceipt} />
      </div>
    )
  }

  if (page === 'method') {
    return (
      <div className="flex flex-col h-full bg-white slide-in-left">
        <TransferMethodPage dest={selectedDest!} onBack={() => setPage('amount')} onConfirm={(m) => { setMethod(m); setPage('confirm') }} />
      </div>
    )
  }

  if (page === 'amount' && selectedDest) {
    return (
      <div className="flex flex-col h-full bg-white slide-in-left">
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

  if (tab === 'profile' && page === 'home') {
    return (
      <div className="flex flex-col h-full bg-white">
        <ProfilePage onNavigate={navigate} />
        <BottomNav activeTab={tab} onNavigate={navigate} />
      </div>
    )
  }

  return (
    <div className="flex flex-col h-full bg-[#F5F7FB]">
      {page === 'home' ? (
        <>
          <div className="flex-1 overflow-hidden bg-white rounded-t-[20px] relative z-10 -mt-5 shadow-sheet">
            <DashboardPage transactions={txns} balance={profile.balance} onTxClick={viewReceipt} />
          </div>
        </>
      ) : (
        <div className="flex-1 overflow-hidden">
          <TransferPage dests={dests} onDestsChange={setDests} onSelect={d => { setSelectedDest(d); setPage('amount') }} />
        </div>
      )}

      <BottomNav activeTab={tab} onNavigate={navigate} />
    </div>
  )
}
