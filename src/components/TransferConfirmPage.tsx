import { IconBack, IconHelp, IconDropdown } from './Icons'
import { IranianBank } from 'iranian-bank-logo-react'
import { detectBankFromCard } from '../services/bankDetector'

const avatar = '/SC.webp'
const avatar2 = '/D2.webp'
const blue = 'Hb.webp'
const fa = (s: string) => s.replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[+d])
const faComma = (s: string) => fa(s.replace(/\B(?=(\d{3})+(?!\d))/g, ','))

interface Props {
  dest: { name: string; account: string; badge: boolean; blue: boolean }
  amount: string
  onBack: () => void
  onConfirm: () => void
}

export default function TransferConfirmPage({ dest, amount, onBack, onConfirm }: Props) {
  return (
    <div className="flex flex-col h-full bg-white p-5 select-none" dir="rtl  mt-10">
      {/* Header — اصلاح موقعیت دکمه بازگشت به سمت چپ */}
      <header className="flex items-center justify-between mb-[25px] mt-10">
        <div className="text-primary cursor-pointer" onClick={onBack}>
          <IconBack />
        </div>
        <div className="text-[18px] font-bold text-[#2B3441]">انتقال</div>
        <div className="text-[#879FB1] cursor-pointer">
          <IconHelp />
        </div>
      </header>

      {/* Recipient */}
      <section className="flex flex-col items-center text-center mb-[25px]">
        <div className="relative mb-3">
          <div className="w-[85px] h-[85px] rounded-full bg-gradient-to-br from-[#E1EEFF] to-[#B2D6FF] flex items-center justify-center overflow-hidden">
            {dest.blue ? (
              <img src={avatar} alt="" className="w-full h-full object-cover" />
            ) : (() => {
              const bank = detectBankFromCard(dest.account)
              return bank ? (
                <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                  <img src={avatar2} alt="" className="w-full h-full object-cover rounded-full" />
                  <div className="absolute bottom-0.5 left-0.5 w-[24px] h-[24px] rounded-full overflow-hidden border-2 border-white bg-white">
                    <IranianBank name={bank.iconKey?? null} size={24} className="w-full h-full object-cover" />
                  </div>
                </div>
              ) : (
                <img src={avatar2} alt="" className="w-full h-full object-cover rounded-full" />
              )
            })()}
          </div>
          {dest.badge && (
            <div className="absolute bottom-0.5 left-0.5 w-[30px] h-[30px] rounded-full overflow-hidden">
              <img src="/Hb.webp" alt="" className="w-full h-full object-cover" />
            </div>
          )}
        </div>
        <h2 className="text-[17px] font-bold text-[#2B3441] mb-1.5">{dest.name}</h2>
        <p className="text-[13px] text-[#879FB1] direction-ltr">{dest.account}</p>
      </section>

      {/* Amount */}
      <div className="text-center mb-[30px]">
        <div className="text-[32px] font-bold text-[#2B3441] mb-0.5">{faComma(amount)} ریال</div>
        <div className="text-[14px] text-[#879FB1]">مبلغ انتقال</div>
      </div>

      {/* Divider */}
      <div className="h-px bg-[#F1F4F8] w-full mb-[25px]" />

      {/* Source account */}
      <section className="flex flex-col gap-2.5 w-full " >
        <span className="text-[15px] font-bold text-[#2B3441] pr-[2px]">انتقال از</span>

        {/* تغییر: کلاس direction-ltr از این دیو حذف شد تا چیدمان راست‌به‌چپ (RTL) به درستی اعمال شود */}
        <div style={{direction:'ltr'}} className="flex items-center justify-between bg-[#EFF5FC] rounded-[18px] p-4 cursor-pointer h-[76px] w-full">

          {/* ۱. آیکون درپ‌داون در سمت چپ */}
          <div className="text-[#3E8BFF] flex items-center justify-center pl-1">
            <IconDropdown size={22} />
          </div>

          {/* ۲. بخش متن‌ها در وسط متمایل به راست */}
          <div className="flex flex-col items-end gap-0.5 flex-1 pr-4">
            <span className="text-[16px] font-bold text-[#2B3441]">حساب بلو</span>
            <span className="text-[13px] text-[#5A7184] font-medium">
              قابل برداشت: ۳۱,۲۲۱,۳۹۸ ریال
            </span>
          </div>

          {/* ۳. لوگوی رسمی و اختصاصی بلو در سمت راست */}
          <div className="w-[48px] h-[48px] shrink-0 rounded-full flex items-center justify-center">
                        <img src={blue} alt="" className="w-full h-full object-cover" />

          </div>

        </div>
      </section>

      {/* Footer button */}
      <div className="mt-auto pb-2.5 mb-10">
        <button
          onClick={onConfirm}
          className="w-full h-[52px] bg-[#3E8BFF] text-white border-none rounded-[14px] text-[16px] font-bold flex items-center justify-center cursor-pointer"
          style={{ boxShadow: '0 4px 12px rgba(62,139,255,0.2)' }}
        >
          تایید و ادامه
        </button>
      </div>
    </div>
  )
}