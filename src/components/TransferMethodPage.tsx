import { IconHelp, IconBack } from './Icons'

const options = [
  { title: 'کارت به کارت', sub: 'بانک مقصد این روش انتقال را پشتیبانی نمی\u200Cکند.', active: false },
  { title: 'بین بانکی (پل)', sub: 'بانک مقصد این روش انتقال را پشتیبانی نمی\u200Cکند.', active: false },
  { title: 'بین بانکی (پایا)', sub: 'بانک مقصد این روش انتقال را پشتیبانی نمی\u200Cکند.', active: false },
  { title: 'بین بانکی (ساتنا)', sub: 'بانک مقصد این روش انتقال را پشتیبانی نمی\u200Cکند.', active: false },
  { title: 'بلو به بلو', sub: 'انتقال در لحظه | کارمزد: رایگان', active: true },
]

function ArrowLeft() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </svg>
  )
}

function CardIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <line x1="2" y1="10" x2="22" y2="10" />
    </svg>
  )
}

function BankIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 21h18M3 10h18M3 7l9-4 9 4M5 10v11M10 10v11M14 10v11M19 10v11" />
    </svg>
  )
}

function BloLogo() {
  return <span className="text-[24px] font-bold font-sans">ḃ</span>
}

const iconMap: Record<number, React.FC> = {
  0: CardIcon,
  1: BankIcon,
  2: BankIcon,
  3: BankIcon,
  4: BloLogo,
}

interface Props {
  onBack: () => void
  onConfirm: () => void
}

export default function TransferMethodPage({ onBack, onConfirm }: Props) {
  return (
    <div className="flex flex-col h-full bg-white p-5 my-10">
      <header className="flex items-center justify-between mb-[30px]">
        <div className="text-primary cursor-pointer" onClick={onBack}><IconBack /></div>

        <div className="text-[18px] font-bold text-[#2B3441]">انتقال</div>
        <div className="text-[#879FB1] cursor-pointer"><IconHelp /></div>

      </header>

      <div className="text-[16px] font-bold text-[#2B3441] mb-5 pr-[5px]">
        روش انتقال خود را انتخاب کنید
      </div>

      <div className="flex flex-col gap-[14px] flex-1 overflow-y-auto no-scrollbar pb-5">
        {options.map((opt, i) => {
          const Icon = iconMap[i]
          return (
            <div
              key={i}
              onClick={opt.active ? onConfirm : undefined}
              className={`flex items-center justify-between rounded-[14px] py-[0.5rem] px-[18px] bg-white transition-colors ${opt.active
                  ? 'border-[2px] border-[#4A90E2] shadow-[0_4px_12px_rgba(62,139,255,0.05)]'
                  : 'border-[2px] border-[#E4EBF2]'
                }`}
            >
              <div className={`flex items-center ${opt.active ? 'text-primary' : 'text-[#C2D1E0]'}`}>

                <Icon />
              </div>
              <div className="flex items-center gap-[15px] flex-grow justify-end">
                <div className="flex flex-col items-start gap-1 flex-grow pr-[15px]">
                  <span className={`text-[15px] font-bold ${opt.active ? 'text-[#4A90E2]' : 'text-[#C2D1E0]'}`}>
                    {opt.title}
                  </span>
                  <span className={`text-[12px] ${opt.active ? 'text-[#4A90E2]' : 'text-[#C2D1E0]'}`}>
                    {opt.sub}
                  </span>
                </div>
                <div className={`w-8 h-8 flex items-center justify-center ${opt.active ? 'text-primary' : 'text-[#C2D1E0]'}`}>
                  <ArrowLeft />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
