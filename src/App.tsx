import { useState } from 'react'
import Header from './components/Header'
import TransactionList from './components/TransactionList'
import TransferPage from './components/TransferPage'
import TransferAmountPage from './components/TransferAmountPage'
import TransferMethodPage from './components/TransferMethodPage'
import TransferConfirmPage from './components/TransferConfirmPage'
import TransferReceiptPage from './components/TransferReceiptPage'
import BottomNav from './components/BottomNav'
import { TRANSACTIONS } from './data'

type Page = 'home' | 'transfer' | 'amount' | 'method' | 'confirm' | 'receipt'
type Dest = { name: string; account: string; badge: boolean; blue: boolean }

export default function App() {
  const [tab, setTab] = useState('home')
  const [page, setPage] = useState<Page>('home')
  const [selectedDest, setSelectedDest] = useState<Dest | null>(null)
  const [amount, setAmount] = useState('')

  const goHome = () => { setTab('home'); setPage('home'); setSelectedDest(null); setAmount('') }
  const goTransfer = () => { setTab('transfer'); setPage('transfer'); setSelectedDest(null); setAmount('') }
  const navigate = (t: string) => t === 'home' ? goHome() : goTransfer()

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
        <TransferConfirmPage dest={selectedDest} amount={amount} onBack={() => setPage('method')} onConfirm={() => setPage('receipt')} />
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

  return (
    <div className="flex flex-col h-full bg-[#F5F7FB]">
      {page === 'home' ? (
        <>
          <Header />
          <div className="flex-1 overflow-hidden bg-white rounded-t-[20px] relative z-10 -mt-5 shadow-sheet">
            <TransactionList transactions={TRANSACTIONS} />
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
