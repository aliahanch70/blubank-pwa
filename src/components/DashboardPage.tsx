import { useState, useEffect } from 'react'
import { 
  IconHelp, 
  IconBell, 
  IconSearch, 
  IconDropdown, 
  IconEye, 
  IconReport, 
  IconPulse, 
  IconPlusFilled,
  IconTransfer,
  IconDeposit
} from './Icons'

export interface Transaction {
  id: string
  title: string
  date: string
  amount: string
  iconKey: 'transfer' | 'deposit'
}

const transactionIconMap = {
  transfer: IconTransfer,
  deposit: IconDeposit,
} as const

interface Props {
  transactions: Transaction[]
}

export default function DashboardPage({ transactions }: Props) {
  const [showBalance, setShowBalance] = useState(true)
  const [isLoading, setIsLoading] = useState(true) // تعریف وضعیت لودینگ برای لیست

  // معکوس کردن لیست برای نمایش از جدیدترین به قدیمی‌ترین
  const reversedTransactions = [...transactions].reverse()

  useEffect(() => {
    // پیدا کردن تگ متا و تغییر رنگ آن به آبی
    const metaThemeColor = document.querySelector('meta[name="theme-color"]')
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', '#003073')
    }

    // شبیه‌سازی لود شدن تراکنش‌ها (مثلاً بعد از ۱.۵ ثانیه)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="flex flex-col h-screen max-h-screen bg-white overflow-hidden select-none" dir="rtl">
      
      {/* ================= هدر آبی‌رنگ با گرادینت بالا (ثابت و بدون پالس) ================= */}
      <header 
        className="relative w-full text-white shrink-0 pt-10" 
        style={{ background: 'linear-gradient(2deg, rgb(3 50 121) 0%, rgb(29 107 221) 100%)' }}
      >
        {/* ردیف آیکون‌های بالایی */}
        <div className="flex items-center justify-between px-5 pt-4 pb-0">
          <div className="header-icon"></div>
          
          <div className="flex items-center gap-[15px]">
            <div className="header-icon cursor-pointer opacity-90 hover:opacity-100">
              <IconSearch />
            </div>
            <div className="header-icon cursor-pointer opacity-90 hover:opacity-100">
              <IconBell />
            </div>
            <div className="header-icon cursor-pointer opacity-90 hover:opacity-100">
              <IconHelp />
            </div>
          </div>
        </div>

        {/* بخش نمایش موجودی */}
        <div className="mt-6 mb-6 text-center">
          <div className="text-[32px] font-bold leading-none mb-3 transition-all duration-200">
            {showBalance ? '۱۵,۰۲۲,۰۰۰ ریال' : '• • • • •'}
          </div>
          <div className="flex items-center justify-center gap-2 text-[14px] opacity-80">
            <div className="cursor-pointer p-1" onClick={() => setShowBalance(!showBalance)}>
              <IconEye />
            </div>
            <div>موجودی</div>
            <div className="cursor-pointer">
              <IconDropdown />
            </div>
          </div>
        </div>

        {/* دکمه‌های دسترسی سریع پایین هدر */}
        <div className="flex justify-around items-start text-center px-4 pb-8">
          <div className="flex flex-col items-center cursor-pointer group">
            <div className="w-[62px] h-[62px] rounded-full flex items-center justify-center mb-2 bg-white text-[#1D6BDD] transition-transform group-hover:scale-105">
              <IconPlusFilled size={24} />
            </div>
            <span className="text-[13px] font-medium opacity-90">شارژ حساب</span>
          </div>

          <div className="flex flex-col items-center cursor-pointer group">
            <div className="w-[62px] h-[62px] rounded-full flex items-center justify-center mb-2 bg-white/15 text-white transition-transform group-hover:scale-105">
              <IconPulse size={28} />
            </div>
            <span className="text-[13px] font-medium opacity-90">باکس</span>
          </div>

          <div className="flex flex-col items-center cursor-pointer group">
            <div className="w-[62px] h-[62px] rounded-full flex items-center justify-center mb-2 bg-white/15 text-white transition-transform group-hover:scale-105">
              <IconReport size={28} />
            </div>
            <span className="text-[13px] font-medium opacity-90">گزارش مالی</span>
          </div>
        </div>
      </header>

      {/* ================= بخش لیست تراکنش‌ها ================= */}
      <div className="flex-1 overflow-y-auto no-scrollbar bg-white rounded-t-[24px] -mt-4 relative z-10 shadow-[0_-8px_20px_rgba(0,0,0,0.05)]">
        
        {/* نوار طوسی‌رنگ بالای لیست (Handle bar) */}
        <div className="flex justify-center pt-3 pb-1">
          <div className="w-10 h-1 rounded-full bg-[#E0E0E0]" />
        </div>

        {/* لیست اصلی تراکنش‌ها */}
        <div className="px-5">
          {isLoading ? (
            /* ================= اسکلتون لودینگ فقط برای بخش لیست تراکنش‌ها ================= */
            <div className="animate-pulse flex flex-col gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center justify-between py-[16px] ">
                  <div className="flex items-center gap-[15px] flex-grow">
                    {/* دایره آیکون فرضی */}
                    <div className="w-[46px] h-[46px] rounded-full bg-[#c0c0c0] shrink-0" />
                    {/* خطوط متن فرضی */}
                    <div className="flex flex-col items-start gap-2">
                      <div className="w-28 h-4 rounded bg-[#c0c0c0]" />
                      <div className="w-16 h-3 rounded bg-[#c0c0c0]" />
                    </div>
                  </div>
                  {/* باکس مبلغ فرضی */}
                  <div className="w-20 h-5 rounded bg-[#c0c0c0] shrink-0" />
                </div>
              ))}
            </div>
          ) : (
            /* ================= نمایش لیست واقعی تراکنش‌ها پس از بارگذاری ================= */
            reversedTransactions.map((tx) => {
              const Icon = transactionIconMap[tx.iconKey]
              const isDeposit = tx.iconKey === 'deposit'

              return (
                <div
                  key={tx.id}
                  className="flex items-center justify-between py-[16px] "
                >
                  {/* بخش راست: آیکون و جزئیات */}
                  <div className="flex items-center gap-[15px] flex-grow">
                    {/* دایره آیکون */}
                    <div 
                      className={`flex-shrink-0 w-[46px] h-[46px] rounded-full flex items-center justify-center transition-colors ${
                        isDeposit 
                          ? 'bg-[#E6F6F2] text-[#00A884]' 
                          : 'bg-[#F1F3F7] text-[#879FB1]'
                      }`}
                    >
                      <Icon size={20} />
                    </div>

                    {/* متون تراکنش */}
                    <div className="flex flex-col items-start text-right">
                      <div className="text-[15px] font-medium text-[#2B3441] mb-0.5">
                        {tx.title}
                      </div>
                      <div className="text-[12px] text-[#879FB1] font-normal">
                        {tx.date}
                      </div>
                    </div>
                  </div>

                  {/* بخش چپ: مبلغ */}
                  <div 
                    className={`text-[16px]  whitespace-nowrap flex-shrink-0 direction-ltr transition-colors ${
                      isDeposit ? 'bg-[#c8ede9]' : 'text-[#2B3441]'
                    }`}
                  >
                    {showBalance ? tx.amount : '• • • • •'}
                  </div>
                </div>
              )
            })
          )}

          {/* فاصله انتهایی برای اسکرول راحت‌تر */}
          <div className="h-20" />
        </div>
      </div>

    </div>
  )
}