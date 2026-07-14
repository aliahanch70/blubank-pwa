import { IconHelp, IconCalendar, IconSearch } from './Icons'

const avatar = '/SC.webp'
const  avatar2= '/D2.webp'

interface Dest { name: string; account: string; badge: boolean; blue: boolean }

const destinations: Dest[] = [
  { name: 'رضا دیانت خواه', account: 'IR - ۷۰ ۰۵۶۰ ۶۱۱۸ ۲۸۰۰ ۶۹۰۱ ۳۶۹۰ ۰۱', badge: true, blue: true },
  { name: 'کاج سبز سپهر آذین', account: '۶۲۲۱ ۰۶۱۲ ۵۹۹۵ ۲۱۰۱', badge: false, blue: false },
  { name: 'محمد داداش خواه', account: 'IR - ۵۲ ۰۵۶۰ ۶۱۱۸ ۲۸۰۰ ۵۱۷۳ ۵۵۷۶ ۰۱', badge: true, blue: true },
  { name: 'لادن اسدی', account: '۶۰۳۷ ۶۹۸۱ ۳۵۴۲ ۴۴۹۲', badge: false, blue: false },
  { name: 'یحیی برگردشتمیانی', account: 'IR - ۹۵ ۰۵۶۰ ۶۱۱۸ ۲۸۰۰ ۵۴۹۹ ۹۴۶۵ ۰۱', badge: true, blue: true },
  { name: 'برزگرد', account: 'IR - ۱۲ ۳۴۵۶ ۷۸۹۰ ۱۲۳۴ ۵۶۷۸ ۹۰۱۲ ۳۴', badge: true, blue: true },
  { name: 'مهدی ابوالحسنی', account: '۵۰۲۲ ۲۹۱۰ ۴۴۳۲ ۵۵۶۱', badge: false, blue: false },
]

export default function TransferPage({ onSelect }: { onSelect: (d: Dest) => void }) {
  return (
    <div className="flex flex-col  h-full bg-white">
      {/* Header */}
      <div className="flex items-center flex-row-reverse justify-between px-5 pt-4 pb-3 bg-white">
        <div className="flex items-center gap-[18px] text-primary">
          <span className="cursor-pointer"><IconHelp /></span>
          <span className="cursor-pointer"><IconCalendar /></span>
          <span className="cursor-pointer"><IconSearch /></span>
        </div>
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#E1EEFF] to-[#C4DEFF] border border-[#A3CFFF] flex items-center justify-center overflow-hidden">
          <img src={avatar} alt="" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* مخاطبین section header */}
      <div className="flex justify-between items-center px-5 pt-3 pb-2">
        <h4 className="text-[16px] font-medium text-[#2B3441]">مخاطبین</h4>
        <span className="text-[14px] text-primary font-medium cursor-pointer">مشاهده همه</span>
      </div>

      {/* Main contact card */}
      <div className="px-5 pb-5">
        <div className="flex items-center gap-[15px]">
          <div className="relative">
            <div className="w-[65px] h-[65px] rounded-full bg-gradient-to-br from-[#E1EEFF] to-[#B2D6FF] flex items-center justify-center overflow-hidden">
              <img src={avatar} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-0 left-0 w-[22px] h-[22px] bg-primary rounded-full overflow-hidden ">
              <img src="/Hb.webp" alt="" className="w-full h-full object-cover" />
            </div>
          </div>
          <div>
            <h3 className="text-[17px] font-medium text-[#2B3441] mb-1">برزگرد</h3>
            <p className="text-[14px] text-[#879FB1]">۰۹۱۲۶۸۷۸۶۹۱</p>
          </div>
        </div>
      </div>

      {/* Scrollable destinations */}
      <div className="flex-1 overflow-y-auto no-scrollbar px-5 pb-[120px]">
        <div className="flex justify-between items-center pb-3">
          <h4 className="text-[16px] font-medium text-[#2B3441]">مقصدها</h4>
        </div>

        {destinations.map((dest, i) => (
          <div key={i} className="flex items-center gap-[15px] py-4 cursor-pointer" onClick={() => onSelect(dest)}>
            <div className="relative">
              <div className={`w-[52px] h-[52px] rounded-full flex items-center justify-center flex-shrink-0 ${
                dest.blue
                  ? 'bg-gradient-to-br from-[#E1EEFF] to-[#C4DEFF]'
                  : 'bg-gradient-to-br from-[#F0F2F5] to-[#D8DCE2]'
              }`}>
                {dest.blue ? (
                  <img src={avatar} alt="" className="w-full h-full object-cover rounded-full" />
                ) : (
                   <img src={avatar2} alt="" className="w-full h-full object-cover rounded-full" />
                )}
              </div>
              {dest.badge && (
                <div className={`absolute bottom-0 left-0 w-[22px] h-[22px] rounded-full overflow-hidden   ${
                  dest.blue ? 'bg-primary' : 'bg-[#879FB1]'
                }`}>
                  <img src="/Hb.webp" alt="" className="w-full h-full object-cover" />
                </div>
              )}
            </div>
            <div className="flex flex-col gap-1 flex-grow min-w-0">
              <h4 className="text-[15px] font-medium text-[#2B3441]">{dest.name}</h4>
              <p className="text-[13px] text-[#879FB1] text-right direction-ltr truncate">{dest.account}</p>
            </div>
          </div>
        ))}
      </div>

      {/* FAB */}
      <div className="fixed bottom-[80px] left-1/2 -translate-x-1/2 bg-primary text-white px-7 py-3 rounded-full flex items-center gap-2  cursor-pointer font-medium text-[15px] z-40"
        
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
        <span>انتقال جدید</span>
      </div>
    </div>
  )
}
