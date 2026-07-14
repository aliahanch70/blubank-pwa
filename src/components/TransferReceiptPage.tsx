import { useEffect, useState } from 'react'
import { IconBack, IconHelp, IconShare, IconDownload } from './Icons'

const avatar = 'SC.webp'
const fa = (s: string) => s.replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[+d])
const faComma = (s: string) => fa(s.replace(/\B(?=(\d{3})+(?!\d))/g, ','))

const weekdays = ['یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه', 'شنبه']
const months = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند']

function toPersianDate(d: Date) {
  const p = new Intl.DateTimeFormat('fa-IR', { hour: '2-digit', minute: '2-digit', hour12: false }).format(d)
  const parts = new Intl.DateTimeFormat('fa-IR', { year: 'numeric', month: 'numeric', day: 'numeric' }).formatToParts(d)
  const get = (t: string) => parts.find(p => p.type === t)?.value ?? ''
  const mi = parseInt(get('month').replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d).toString())) - 1
  return `${p} ${weekdays[d.getDay()]}، ${get('day')} ${months[mi]} ${get('year')}`
}

interface Props {
  dest: { name: string; account: string; badge: boolean; blue: boolean }
  amount: string
  onBack: () => void
}

export default function TransferReceiptPage({ dest, amount, onBack }: Props) {
  const [date, setDate] = useState('')
  useEffect(() => setDate(toPersianDate(new Date())), [])

  const docNum = fa(String(Date.now()).slice(-10))

  return (
    // تغییر: h-screen و overflow-hidden برای جلوگیری از هرگونه اسکرول در کل صفحه
    <div className="flex flex-col h-screen max-h-screen bg-white p-5 overflow-hidden justify-between select-none">
      
      {/* Header */}
      <header className="flex items-center justify-between mb-4 shrink-0">
        <div className="text-primary cursor-pointer" onClick={onBack}><IconBack /></div>
        <div className="text-[18px] font-medium text-[#2B3441]">رسید</div>
        <div className="text-primary cursor-pointer"><IconHelp /></div>
      </header>

      {/* Recipient */}
      <section className="flex flex-col items-center text-center mb-3 shrink-0">
        <div className="relative mb-2">
          <div className="w-[75px] h-[75px] mobile-m:w-[85px] mobile-m:h-[85px] rounded-full bg-gradient-to-br from-[#E1EEFF] to-[#B2D6FF] flex items-center justify-center overflow-hidden">
            <img src={avatar} alt="" className="w-full h-full object-cover" />
          </div>
          {dest.badge && (
            <div className="absolute bottom-0.5 right-0.5 w-[22px] h-[22px] bg-primary rounded-full flex items-center justify-center text-white text-[11px] font-medium border-2 border-white">
              ب
            </div>
          )}
        </div>
        <h2 className="text-[16px] font-medium text-[#2B3441] mb-0.5">{dest.name}</h2>
        <p className="text-[12px] text-[#879FB1] direction-ltr">{dest.account}</p>
      </section>

      {/* Amount & Status */}
      <div className="text-center mb-3 shrink-0">
        <div className="text-[28px] mobile-m:text-[32px] font-medium text-[#2B3441]">{faComma(amount)} ریال</div>
        <div className="text-[13px] text-[#879FB1] mb-2">مبلغ انتقال</div>
        <div className="inline-flex items-center gap-1.5 bg-[#00A884] text-white px-[18px] py-1.5 rounded-[12px] text-[13px]">
          <div className="w-[20px] h-[20px] rounded-full flex items-center justify-center ml-1 bg-white text-[#00A884]">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          انتقال موفق
        </div>
      </div>

      <hr className="border-t-[2px] border-dashed border-[#D2DEE8] w-full mb-3 shrink-0" />

      {/* Receipt Details — تغییر: flex-1 اجازه می‌دهد در فضای باقی‌مانده فشرده یا باز شود */}
      <div className="flex flex-col w-full flex-1 justify-center min-h-0 py-1">
        {[
          ['زمان', date],
          ['انتقال دهنده', 'علی آهنچیان'],
          ['روش انتقال', 'بلو به بلو'],
          ['سپرده مبدا', 'IR ۴۹ ۰۵۶۰ ۶۱۱۸ ۲۸۰۰ ۵۵۲۶ ۳۶۷۸ ۰۱'],
          ['شماره سند', docNum],
        ].map(([label, value], i) => (
          <div key={i} className={`flex justify-between items-center py-2.5 mobile-m:py-3.5 ${i < 4 ? 'border-b border-[#F1F4F8]' : ''}`}>
            <span className="text-[13px] mobile-m:text-[14px] text-[#879FB1]">{label}</span>
            <span className={`text-[13px] mobile-m:text-[14px] font-medium text-[#2B3441] ${label === 'سپرده مبدا' ? 'direction-ltr text-[11px] mobile-m:text-[13px]' : ''}`}>{value}</span>
          </div>
        ))}
      </div>

      {/* Logo — تغییر: حذف mb-16 برای فیت شدن در صفحه */}
      <div className="flex flex-col items-center my-auto py-2 shrink-0">
        <div className="flex items-center gap-2">
          <div className="flex flex-col items-start">
            <span className="text-[18px] font-medium text-[#4A5568] font-sans leading-tight">Transfer</span>
            <span className="text-[12px] text-[#879FB1] font-sans">blubank.com</span>
          </div>
          <img src="/blo-icon.png" alt="" className="w-9" />
        </div>
      </div>

      {/* Bottom Buttons — تغییر: کاهش جزئی ارتفاع دکمه‌ها برای بالانس بهتر ظاهر صفحه */}
      <div className="flex gap-[12px] w-full pt-2 shrink-0">
        <button className="flex-1 h-[68px] bg-[#F0F5FC] text-primary border-none rounded-xl text-[14px] font-medium flex flex-col items-center justify-center gap-1.5 cursor-pointer">
          <IconShare size={18} />
          <span>اشتراک‌گذاری</span>
        </button>
        <button className="flex-1 h-[68px] bg-[#F0F5FC] text-primary border-none rounded-xl text-[14px] font-medium flex flex-col items-center justify-center gap-1.5 cursor-pointer">
          <IconDownload size={18} />
          <span>ذخیره در گالری</span>
        </button>
      </div>
    </div>
  )
}