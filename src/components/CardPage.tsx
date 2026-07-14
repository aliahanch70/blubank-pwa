import { IconHelp, IconUser } from './Icons'

const settings = [
  { title: 'مسدودسازی موقت', desc: 'بلوکارت را به صورت موقت غیرفعال کنید', icon: '❄', color: '#3E8BFF', toggle: true },
  { title: 'تنظیمات امنیتی', desc: 'تغییر و دریافت مجدد رمز بلوکارت', icon: '🛡', color: '#3E8BFF' },
  { title: 'تغییر بلواکارت', desc: 'میتوانید بلواکارت جدید سفارش دهید', icon: '💳', color: '#3E8BFF' },
  { title: 'غیر فعال کردن', desc: 'مسدودسازی بلواکارت در صورت مفقودی و ...', icon: '🚫', color: '#EF4444' },
]

const navIcons = [
  { key: 'settings', active: false },
  { key: 'card', active: true },
  { key: 'grid', active: false },
  { key: 'transfer', active: false },
  { key: 'home', active: false },
]

interface Props {
  onNavigate: (tab: string) => void
}

export default function CardPage({ onNavigate }: Props) {
  return (
    <div className="flex flex-col h-full bg-white">
      {/* Top bar */}
      <div className="flex items-center justify-between px-5 py-3">
        <div className="text-[#879FB1]"><IconHelp size={22} /></div>
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#E1EEFF] to-[#B2D6FF] flex items-center justify-center text-primary">
          <IconUser size={18} />
        </div>
      </div>

      {/* Banner */}
      <div className="mx-5 mb-4 h-[100px] rounded-2xl bg-gradient-to-br from-[#5BA3FF] to-[#3E8BFF] flex flex-col items-center justify-center">
        <span className="text-white text-[28px] font-bold font-sans tracking-tight">blu</span>
        <span className="text-white text-[13px] opacity-90">bank, but lovely</span>
      </div>

      {/* Bottom sheet */}
      <div className="flex-1 bg-white rounded-t-[20px] shadow-[0_-6px_20px_rgba(0,0,0,0.08)] -mt-2 relative z-10 overflow-hidden">
        {/* Handle */}
        <div className="flex justify-center pt-2.5 pb-3">
          <div className="w-10 h-1 rounded-full bg-[#D2DEE8]" />
        </div>

        {/* Action buttons */}
        <div className="flex gap-3 px-5 mb-5">
          <button className="flex-1 h-[52px] bg-[#EFF5FC] rounded-2xl flex items-center justify-center gap-2 text-primary text-[13px] font-medium cursor-pointer">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/></svg>
            رمز دوم پیوا
          </button>
          <button className="flex-1 h-[52px] bg-[#EFF5FC] rounded-2xl flex items-center justify-center gap-2 text-primary text-[13px] font-medium cursor-pointer">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
            شماره کارت و شبا
          </button>
        </div>

        {/* Section title */}
        <div className="px-5 mb-3">
          <span className="text-[16px] font-bold text-[#2B3441]">تنظیمات</span>
        </div>

        {/* Settings list */}
        <div className="overflow-y-auto no-scrollbar pb-4">
          {settings.map((s, i) => (
            <div key={i} className="flex items-center gap-3 px-5 py-4 cursor-pointer">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                style={{ backgroundColor: s.color + '18' }}
              >
                <span className="text-[16px]">{s.icon}</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[14px] font-medium text-[#2B3441]">{s.title}</div>
                <div className="text-[12px] text-[#879FB1] mt-0.5 leading-snug">{s.desc}</div>
              </div>
              {s.toggle ? (
                <div className="w-11 h-6 rounded-full bg-[#D2DEE8] relative shrink-0">
                  <div className="absolute top-0.5 right-0.5 w-5 h-5 rounded-full bg-white shadow" />
                </div>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D2DEE8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><polyline points="15 18 9 12 15 6"/></svg>
              )}
            </div>
          ))}
        </div>
      </div>

      
    </div>
  )
}
