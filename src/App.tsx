import { useState } from 'react'
import Header from './components/Header'
import TransactionList from './components/TransactionList'
import TransferPage from './components/TransferPage'
import BottomNav from './components/BottomNav'
import { TRANSACTIONS } from './data'

export default function App() {
  const [tab, setTab] = useState('home')

  return (
    <div className="flex flex-col h-full bg-[#F5F7FB]">
      {tab === 'home' ? (
        <>
          <div className="h-[30px] shrink-0" style={{ background: 'linear-gradient(135deg, #3E8BFF 0%, #64A3FF 100%)' }} />
          <Header />
          <div className="flex-1 overflow-hidden bg-white rounded-t-[20px] relative z-10 -mt-5 shadow-sheet">
            <TransactionList transactions={TRANSACTIONS} />
          </div>
        </>
      ) : (
        <div className="flex-1 overflow-hidden">
          <TransferPage />
        </div>
      )}

      <BottomNav activeTab={tab} onNavigate={setTab} />
    </div>
  )
}
