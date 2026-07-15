import { IconBack, IconHelp, IconCalendarCheck } from './Icons'

const avatar = '/SC.webp'
const fa = (s: string) => s.replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[+d])
const faComma = (s: string) => fa(s.replace(/\B(?=(\d{3})+(?!\d))/g, ','))

function toTomanText(rials: number): string {
  const t = Math.floor(rials / 10)
  if (t === 0) return ''
  const fa3 = (n: number) => faComma(String(n))
  if (t < 1000) return `${fa3(t)} تومان`
  if (t < 1_000_000) {
    const h = Math.floor(t / 1000)
    const r = t % 1000
    return r ? `${fa3(h)} هزار و ${fa3(r)} تومان` : `${fa3(h)} هزار تومن`
  }
  const m = Math.floor(t / 1_000_000)
  const rest = t % 1_000_000
  const h = Math.floor(rest / 1000)
  const r = rest % 1000
  let s = `${fa3(m)} میلیون`
  if (h) s += ` و ${fa3(h)} هزار`
  if (r) s += ` و ${fa3(r)}`
  return s + ' تومان'
}

interface Props {
  dest: { name: string; account: string; badge: boolean; blue: boolean }
  amount: string
  onAmountChange: (v: string) => void
  onBack: () => void
  onContinue: () => void
}

export default function TransferAmountPage({ dest, amount, onAmountChange, onBack, onContinue }: Props) {
  const num = Number(amount)
  const active = num > 1
  const display = faComma(amount)
  const tomanText = toTomanText(num)

  return (
    // تغییر: تبدیل ارتفاع به min-h-screen یا h-screen برای چیدمان درست دکمه در پایین صفحه
    <div className="flex flex-col min-h-screen bg-white p-5 pb-8  mt-10">
      {/* Header */}
      <header className="flex items-center justify-between mb-[30px]">
        <div className="text-primary cursor-pointer" onClick={onBack}>
          <IconBack />
        </div>
        <div className="text-[18px] font-bold text-[#2B3441]">انتقال</div>
        <div className="text-[#879FB1] cursor-pointer">
          <IconHelp />
        </div>
      </header>

      {/* Recipient */}
      <section className="flex flex-col items-center text-center mb-[35px]">
        <div className="relative mb-3">
          <div className="w-[85px] h-[85px] rounded-full bg-gradient-to-br from-[#E1EEFF] to-[#B2D6FF] flex items-center justify-center overflow-hidden">
            <img src={avatar} alt="" className="w-full h-full object-cover" />
          </div>
          {dest.badge && (
            <div className="absolute bottom-0.5 left-0.5 w-[30px] h-[30px] rounded-full overflow-hidden border-2 border-white">
              <img src="/Hb.webp" alt="" className="w-full h-full object-cover" />
            </div>
          )}
        </div>
        <h2 className="text-[17px] font-bold text-[#2B3441] mb-1.5">{dest.name}</h2>
        <p className="text-[13px] text-[#879FB1] direction-ltr">{dest.account}</p>
      </section>
      {/* Amount input */}
      <div className="flex items-center border-2 border-[#5499FF] rounded-xl h-[58px] px-4 bg-[#e9e9e9] relative">
        <input
          type="tel"
          value={display}
          onChange={e => onAmountChange(e.target.value.replace(/[^0-۰-۹۱-۹]/g, '').replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d).toString()))}
          placeholder="مبلغ انتقال"
          className="flex-1 border-none outline-none text-[24px] font-medium text-[#2b3441] text-center bg-transparent placeholder:text-center placeholder:text-[15px] placeholder:font-bold placeholder:text-[#5f717e]"
        />
        <div className="text-[15px] text-[#879FB1] font-bold border-r border-[#E2E8F0] pr-3 mr-1.5 shrink-0">
          ریال
        </div>
      </div>

      {/* Toman equivalent */}
      {tomanText && (
        <div className="text-center text-[13px] text-[#879FB1] mt-2 mb-4">{tomanText}</div>
      )}

      {/* Footer — حالا به صورت داینامیک با کلاس mt-auto با کیبورد بالا و پایین می‌رود */}
      <div className="mt-auto flex flex-col items-center gap-5 pt-3 bg-white w-full">
        <div className="flex items-center gap-2 text-[#879FB1] text-[15px] font-medium cursor-pointer">
          <span>انتقال خودکار</span>
          <IconCalendarCheck />
        </div>
        <button
          disabled={!active}
          onClick={active ? onContinue : undefined}
          className={`w-full h-[52px] mb-16  rounded-[14px] text-[16px] font-bold flex items-center justify-center transition-colors ${active
              ? 'bg-[#3E8BFF] text-white cursor-pointer'
              : 'bg-[#C2D1E0] text-white cursor-not-allowed'
            }`}
        >
          ادامه
        </button>
      </div>
    </div>
  )
}