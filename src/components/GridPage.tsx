import { IconHelp, IconUser } from './Icons'

const services = [
  { label: 'جونیور' },
  { label: 'قیض' },
  { label: 'اینترنت' },
  { label: 'شارژ' },
  { label: 'خدمات خودرو' },
  { label: 'چک صیادی' },
  { label: 'پرداخت خودکار' },
  { label: 'وام' },
  { label: 'حساب وکالتی' },
  { label: 'ذخ' },
  { label: 'برگشت پول' },
  { label: 'دعوت دوستان', badge: 'پی نهایت' },
  { label: 'بلکلاب' },
]

function ServiceIcon({ index }: { index: number }) {
  // Ponytail: placeholder SVGs — user replaces with real images
  const icons = [
    // جونیور
    <><circle cx="16" cy="12" r="6" fill="none" stroke="#3E8BFF" strokeWidth="1.5"/><path d="M10 20c0-3.3 2.7-6 6-6s6 2.7 6 6" fill="none" stroke="#3E8BFF" strokeWidth="1.5"/><circle cx="14" cy="11" r="0.8" fill="#E8924A"/><circle cx="18" cy="11" r="0.8" fill="#E8924A"/></>,
    // قیض
    <><rect x="9" y="6" width="14" height="18" rx="2" fill="none" stroke="#3E8BFF" strokeWidth="1.5"/><line x1="12" y1="10" x2="20" y2="10" stroke="#E8C84A" strokeWidth="1.2"/><line x1="12" y1="13" x2="20" y2="13" stroke="#E8C84A" strokeWidth="1.2"/><line x1="12" y1="16" x2="17" y2="16" stroke="#E8C84A" strokeWidth="1.2"/></>,
    // اینترنت
    <><circle cx="16" cy="16" r="9" fill="none" stroke="#3E8BFF" strokeWidth="1.5"/><ellipse cx="16" cy="16" rx="4" ry="9" fill="none" stroke="#3E8BFF" strokeWidth="1.2"/><line x1="7" y1="16" x2="25" y2="16" stroke="#3E8BFF" strokeWidth="1.2"/><path d="M8.5 11h15M8.5 21h15" fill="none" stroke="#3E8BFF" strokeWidth="1"/></>,
    // شارژ
    <><rect x="11" y="5" width="10" height="22" rx="2" fill="none" stroke="#3E8BFF" strokeWidth="1.5"/><line x1="13" y1="9" x2="19" y2="9" stroke="#3E8BFF" strokeWidth="1.2"/><line x1="13" y1="23" x2="19" y2="23" stroke="#3E8BFF" strokeWidth="1.2"/><text x="16" y="17" textAnchor="middle" fill="#3E8BFF" fontSize="6" fontWeight="bold">4G</text></>,
    // خدمات خودرو
    <><circle cx="11" cy="19" r="3" fill="none" stroke="#3E8BFF" strokeWidth="1.5"/><circle cx="21" cy="19" r="3" fill="none" stroke="#3E8BFF" strokeWidth="1.5"/><path d="M6 19h-1l2-5h14l2 5h-1" fill="none" stroke="#3E8BFF" strokeWidth="1.5"/><path d="M8 14l2-4h8l2 4" fill="none" stroke="#3E8BFF" strokeWidth="1.5"/></>,
    // چک صیادی
    <><rect x="9" y="6" width="14" height="18" rx="2" fill="none" stroke="#3E8BFF" strokeWidth="1.5"/><line x1="12" y1="10" x2="20" y2="10" stroke="#3E8BFF" strokeWidth="1.2"/><line x1="12" y1="14" x2="20" y2="14" stroke="#3E8BFF" strokeWidth="1.2"/><text x="13" y="19" fill="#3E8BFF" fontSize="5">لهل</text></>,
    // پرداخت خودکار
    <><rect x="8" y="8" width="16" height="14" rx="1" fill="none" stroke="#3E8BFF" strokeWidth="1.5"/><rect x="12" y="11" width="8" height="3" rx="0.5" fill="#E8C84A" stroke="#E8C84A" strokeWidth="0.5"/><rect x="11" y="16" width="6" height="2" rx="0.5" fill="#E85A5A" stroke="#E85A5A" strokeWidth="0.5"/></>,
    // وام
    <><path d="M16 6l2 4h4l-3 3 1 4-4-2-4 2 1-4-3-3h4z" fill="none" stroke="#3E8BFF" strokeWidth="1.5"/><path d="M11 20c0-2.8 2.2-5 5-5s5 2.2 5 5" fill="none" stroke="#3E8BFF" strokeWidth="1.2"/></>,
    // حساب وکالتی
    <><rect x="9" y="6" width="14" height="18" rx="2" fill="none" stroke="#3E8BFF" strokeWidth="1.5"/><rect x="13" y="14" width="6" height="5" rx="1" fill="none" stroke="#E85A5A" strokeWidth="1.2"/><circle cx="16" cy="16.5" r="1" fill="#E85A5A"/></>,
    // ذخ
    <><circle cx="16" cy="16" r="9" fill="none" stroke="#3E8BFF" strokeWidth="1.5"/><path d="M12 20l4-8 4 8" fill="none" stroke="#3E8BFF" strokeWidth="1.5"/></>,
    // برگشت پول
    <><rect x="8" y="10" width="16" height="12" rx="2" fill="none" stroke="#3E8BFF" strokeWidth="1.5"/><path d="M20 16l-4 0" stroke="#22C55E" strokeWidth="1.5"/><polyline points="18 13 20 16 18 19" fill="none" stroke="#22C55E" strokeWidth="1.5"/></>,
    // دعوت دوستان
    <><rect x="8" y="8" width="16" height="14" rx="2" fill="none" stroke="#3E8BFF" strokeWidth="1.5"/><rect x="12" y="12" width="6" height="4" rx="0.5" fill="#E8C8A0" stroke="none"/><circle cx="21" cy="10" r="3" fill="#3E8BFF" stroke="none"/><text x="21" y="11.5" textAnchor="middle" fill="white" fontSize="4" fontWeight="bold">۹</text></>,
    // بلکلاب
    <><polygon points="16,5 22,10 22,18 16,23 10,18 10,10" fill="none" stroke="#3E8BFF" strokeWidth="1.5"/><text x="16" y="15.5" textAnchor="middle" fill="#3E8BFF" fontSize="8" fontWeight="bold">۶</text></>,
  ]
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      {icons[index] ?? icons[0]}
    </svg>
  )
}

interface Props {
  onNavigate: (tab: string) => void
}

export default function GridPage({ onNavigate }: Props) {
  return (
    <div className="flex flex-col h-full bg-white">
      {/* Top bar */}
      <div className="flex items-center justify-between px-5 py-3">
        <div className="flex items-center gap-3">
          <div className="text-[#879FB1]"><IconHelp size={22} /></div>
          <div className="text-[#879FB1]">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>
            </svg>
          </div>
        </div>
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#E1EEFF] to-[#B2D6FF] flex items-center justify-center text-primary">
          <IconUser size={18} />
        </div>
      </div>

      {/* Banner placeholder */}
      <div className="mx-5 mb-5 h-[120px] rounded-2xl bg-gradient-to-l from-[#F87171] to-[#FDA4AF] flex items-center justify-center overflow-hidden relative">
        <div className="text-white text-center pr-6 z-10">
          <div className="text-[16px] font-bold mb-1">با این وکالت خودرو وارد کنید</div>
          <div className="text-[12px] opacity-90">ساخت حساب وکالتی برای خودروهای وارداتی</div>
        </div>
        <div className="absolute left-4 bottom-3 flex gap-1">
          {[0,1,2,3,4].map(i => (
            <div key={i} className={`w-1.5 h-1.5 rounded-full ${i === 0 ? 'bg-white' : 'bg-white/40'}`} />
          ))}
        </div>
      </div>

      {/* Service grid */}
      <div className="flex-1 overflow-y-auto no-scrollbar px-5 pb-5">
        <div className="grid grid-cols-4 gap-y-6 gap-x-2">
          {services.map((s, i) => (
            <div key={i} className="flex flex-col items-center gap-2 relative cursor-pointer">
              <div className="w-14 h-14 rounded-full bg-[#EFF5FC] flex items-center justify-center">
                <ServiceIcon index={i} />
              </div>
              {s.badge && (
                <div className="absolute top-0 right-0 bg-[#3E8BFF] text-white text-[7px] px-1.5 py-0.5 rounded-full font-medium">
                  {s.badge}
                </div>
              )}
              <span className="text-[11px] text-[#2B3441] text-center leading-tight">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom nav — matches screenshot */}
      
    </div>
  )
}
