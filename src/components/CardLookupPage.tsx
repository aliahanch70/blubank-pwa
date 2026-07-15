import { useState } from 'react'
import { IconBack } from './Icons'
import { IranianBank } from 'iranian-bank-logo-react'
import {
  detectBankFromCard,
  detectBankFromIban,
  formatCardNumber,
  formatIban,
  type BankInfo,
} from '../services/bankDetector'

// ponytail: Luhn check for card number validation
function luhnCheck(num: string): boolean {
  const digits = num.replace(/\D/g, '')
  if (digits.length !== 16) return false
  let sum = 0
  for (let i = digits.length - 1, j = 0; i >= 0; i--, j++) {
    let d = parseInt(digits[i])
    if (j % 2 === 0) { d *= 2; if (d > 9) d -= 9 }
    sum += d
  }
  return sum % 10 === 0
}

// Persian digits helper
const fa = (s: string) => s.replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[+d])

interface Props {
  onBack: () => void
}

export default function CardLookupPage({ onBack }: Props) {
  const [cardInput, setCardInput] = useState('')
  const [ibanInput, setIbanInput] = useState('')
  const [cardBank, setCardBank] = useState<BankInfo | null>(null)
  const [cardValid, setCardValid] = useState<boolean | null>(null)
  const [ibanBank, setIbanBank] = useState<BankInfo | null>(null)
  const [tab, setTab] = useState<'card' | 'iban'>('card')

  const handleCardChange = (val: string) => {
    const raw = val.replace(/\D/g, '').replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d).toString()).slice(0, 16)
    setCardInput(formatCardNumber(raw))
    const bank = detectBankFromCard(raw)
    setCardBank(bank)
    setCardValid(raw.length === 16 ? luhnCheck(raw) : null)
  }

  const handleIbanChange = (val: string) => {
    // Convert Persian to Latin first
    const cleaned = val.replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d).toString())
    setIbanInput(formatIban(cleaned))
    const bank = detectBankFromIban(cleaned)
    setIbanBank(bank)
  }

  const BankCard = ({ bank, label }: { bank: BankInfo; label: string }) => (
    <div className="bg-white rounded-2xl p-5 mt-4 shadow-sm border border-[#F1F4F8] animate-slide-up">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-[56px] h-[56px] rounded-2xl overflow-hidden shrink-0">
          <IranianBank name={bank.iconKey} size={56} />
        </div>
        <div>
          <div className="text-[16px] font-medium text-[#2B3441]">{bank.name}</div>
          <div className="text-[13px] text-[#879FB1]">{label}</div>
        </div>
      </div>
      <div className="bg-[#F5F7FB] rounded-xl p-3 flex items-center gap-3">
        <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center text-[20px]"
          style={{ background: bank.color + '15' }}>
          {bank.logo}
        </div>
        <div className="flex-1">
          <div className="text-[13px] text-[#879FB1]">نام اختصاری</div>
          <div className="text-[14px] font-medium text-[#2B3441]">{bank.short}</div>
        </div>
        <div className="flex-1">
          <div className="text-[13px] text-[#879FB1]">رنگ برند</div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full" style={{ background: bank.color }} />
            <span className="text-[13px] text-[#2B3441] font-mono">{bank.color}</span>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="flex flex-col h-full bg-[#F5F7FB]">
      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-4 pb-3 bg-white">
        <div className="text-primary cursor-pointer" onClick={onBack}><IconBack /></div>
        <div className="text-[16px] font-medium text-[#2B3441]">استعلام کارت و شبا</div>
        <div className="w-6" />
      </div>

      {/* Tabs */}
      <div className="flex mx-5 mt-4 bg-white rounded-xl p-1 shadow-sm">
        <button
          onClick={() => setTab('card')}
          className={`flex-1 py-2.5 rounded-lg text-[14px] font-medium transition-all ${
            tab === 'card' ? 'bg-primary text-white' : 'text-[#879FB1]'
          }`}
        >
          شماره کارت
        </button>
        <button
          onClick={() => setTab('iban')}
          className={`flex-1 py-2.5 rounded-lg text-[14px] font-medium transition-all ${
            tab === 'iban' ? 'bg-primary text-white' : 'text-[#879FB1]'
          }`}
        >
          شماره شبا
        </button>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar px-5 pb-8">
        {tab === 'card' ? (
          <>
            {/* Card input */}
            <div className="bg-white rounded-2xl p-5 mt-4 shadow-sm">
              <label className="text-[13px] text-[#879FB1] mb-2 block">شماره کارت بانکی (۱۶ رقم)</label>
              <input
                type="text"
                value={cardInput}
                onChange={e => handleCardChange(e.target.value)}
                placeholder="۶۱۰۴ ۳۳۷۸ ..."
                className="w-full text-[18px] font-mono text-[#2B3441] outline-none border-b border-[#D8DCE2] pb-3 focus:border-primary direction-ltr text-left tracking-wider"
                dir="ltr"
                maxLength={19}
              />
              {/* Progress dots */}
              <div className="flex gap-1.5 mt-3 justify-center">
                {[0,1,2,3].map(g => {
                  const filled = cardInput.replace(/\s/g,'').length >= (g+1)*4
                  return (
                    <div key={g} className={`h-1.5 rounded-full flex-1 transition-all ${
                      filled ? 'bg-primary' : 'bg-[#E0E0E0]'
                    }`} />
                  )
                })}
              </div>
            </div>

            {/* Results */}
            {cardBank && (
              <BankCard bank={cardBank} label="بانک تشخیص داده شده از شماره کارت" />
            )}
            {!cardBank && cardInput.replace(/\s/g,'').length >= 6 && (
              <div className="bg-white rounded-2xl p-5 mt-4 shadow-sm text-center">
                <div className="text-[32px] mb-2">❓</div>
                <div className="text-[14px] text-[#879FB1]">بانک مربوطه شناسایی نشد</div>
                <div className="text-[12px] text-[#879FB1] mt-1">لطفاً شماره کارت را بررسی کنید</div>
              </div>
            )}
            {cardValid === false && (
              <div className="bg-[#FFF3F0] rounded-xl p-3 mt-3 text-center">
                <span className="text-[13px] text-[#D32F2F]">شماره کارت نامعتبر است (خطای Luhn)</span>
              </div>
            )}
            {cardValid === true && (
              <div className="bg-[#F0FFF4] rounded-xl p-3 mt-3 text-center">
                <span className="text-[13px] text-[#00A884]">✓ شماره کارت معتبر است</span>
              </div>
            )}

            {/* Info box */}
            <div className="bg-[#F0F5FC] rounded-xl p-4 mt-4">
              <div className="text-[13px] font-medium text-primary mb-2">نحوه شناسایی</div>
              <div className="text-[12px] text-[#879FB1] leading-5">
                ۶ رقم اول شماره کارت (BIN) تعیین‌کننده بانک صادرکننده است. این اطلاعات از دیتابیس بانک‌های ایرانی استخراج شده است.
                <br />
                برای استعلام نام صاحب کارت نیاز به اتصال به درگاه پرداخت بانکی است.
              </div>
            </div>
          </>
        ) : (
          <>
            {/* IBAN input */}
            <div className="bg-white rounded-2xl p-5 mt-4 shadow-sm">
              <label className="text-[13px] text-[#879FB1] mb-2 block">شماره شبا (IR + ۲۴ رقم)</label>
              <input
                type="text"
                value={ibanInput}
                onChange={e => handleIbanChange(e.target.value)}
                placeholder="IR 0000 0000 ..."
                className="w-full text-[18px] font-mono text-[#2B3441] outline-none border-b border-[#D8DCE2] pb-3 focus:border-primary direction-ltr text-left tracking-wider"
                dir="ltr"
                maxLength={30}
              />
            </div>

            {/* Results */}
            {ibanBank && (
              <BankCard bank={ibanBank} label="بانک تشخیص داده شده از شماره شبا" />
            )}

            {/* IBAN format info */}
            <div className="bg-[#F0F5FC] rounded-xl p-4 mt-4">
              <div className="text-[13px] font-medium text-primary mb-2">ساختار شبا ایران</div>
              <div className="text-[12px] text-[#879FB1] leading-5 direction-ltr text-left">
                IR + 2 check digits + 3 bank code + account number
                <br />
                IR 12 345 67890123456789012345
                <br />
                <span className="text-[#879FB1]">bank code = digits 4-6 after IR prefix</span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
