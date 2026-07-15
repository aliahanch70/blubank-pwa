import { useState } from 'react'
import { IconHelp, IconShare, IconScan, IconBack } from './Icons'
import CardLookupPage from './CardLookupPage'
import { getProfile, saveProfile, type Profile } from '../services/profileStorage'

const avatar = '/SC.webp'

const fa = (s: string) => s.replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[+d])
const formatSheba = (raw: string) => {
  const digits = raw.replace(/[^\d]/g, '')
  if (digits.length >= 2) {
    const spaced = digits.replace(/(\d{4})(?=\d)/g, '$1 ').trim()
    return `IR - ${fa(spaced.slice(2))}`
  }
  return fa(raw)
}

interface Props {
  onNavigate: (tab: string) => void
}

export default function ProfilePage({ onNavigate }: Props) {
  const [profile, setProfile] = useState<Profile>(getProfile)
  const [editing, setEditing] = useState(false)
  const [name, setName] = useState(profile.senderName)
  const [sheba, setSheba] = useState(profile.sheba)
  const [bal, setBal] = useState(profile.balance)
  const [viewLookup, setViewLookup] = useState(false)

  const save = () => {
    const p = { senderName: name.trim(), sheba: formatSheba(sheba), balance: bal.trim() }
    setProfile(p)
    saveProfile(p)
    setEditing(false)
  }

  if (viewLookup) {
    return (
      <div className="flex flex-col h-full bg-[#F5F7FB]">
        <CardLookupPage onBack={() => setViewLookup(false)} />
      </div>
    )
  }

  if (editing) {
    return (
      <div className="flex flex-col h-full bg-[#F5F7FB]">
        {/* Header */}
        <div className="flex items-center justify-between px-5 pt-4 pb-3 bg-white">
          <div className="text-primary cursor-pointer" onClick={() => setEditing(false)}><IconBack /></div>
          <div className="text-[16px] font-medium text-[#2B3441]">جزئیات حساب</div>
          <div className="w-6" />
        </div>

        <div className="flex-1 overflow-y-auto no-scrollbar px-5 pt-4 flex flex-col gap-4">
          {/* Sender name */}
          <div className="bg-white rounded-xl p-4">
            <label className="text-[13px] text-[#879FB1] mb-2 block">نام فرستنده</label>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              className="w-full text-[15px] text-[#2B3441] outline-none border-b border-[#D8DCE2] pb-2 focus:border-primary"
              dir="rtl"
            />
          </div>

          {/* SHEBA */}
          <div className="bg-white rounded-xl p-4">
            <label className="text-[13px] text-[#879FB1] mb-2 block">شماره شبا فرستنده</label>
            <input
              type="text"
              value={sheba}
              onChange={e => setSheba(e.target.value.replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[+d]))}
              className="w-full text-[15px] text-[#2B3441] outline-none border-b border-[#D8DCE2] pb-2 focus:border-primary direction-ltr text-left"
              dir="ltr"
            />
          </div>

          {/* Balance */}
          <div className="bg-white rounded-xl p-4">
            <label className="text-[13px] text-[#879FB1] mb-2 block">مبلغ اعتبار نمایشی (ریال)</label>
            <input
              type="text"
              value={bal}
              onChange={e => setBal(e.target.value.replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[+d]))}
              className="w-full text-[15px] text-[#2B3441] outline-none border-b border-[#D8DCE2] pb-2 focus:border-primary direction-ltr text-left"
              dir="ltr"
            />
          </div>

          <button
            onClick={save}
            disabled={!name.trim() || !sheba.trim()}
            className="w-full py-3 rounded-xl bg-primary text-white font-medium text-[15px] disabled:opacity-40 disabled:cursor-not-allowed mt-2"
          >
            ذخیره
          </button>
        </div>
      </div>
    )
  }

  const settings = [
    { label: 'استعلام کارت و شبا', sub: 'تشخیص بانک از شماره کارت/شبا', icon: '🔍', action: () => setViewLookup(true) },
    { label: 'جزئیات حساب', sub: 'اطلاعات بانکی و شخصی', icon: '👤', action: () => setEditing(true) },
    { label: 'امنیت و حریم خصوصی', sub: 'رمز عبور و تراکنش، اثر انگشت و ...', icon: '🛡', action: () => {} },
    { label: 'اطلاع رسانی', sub: 'تنظیمات نوتیفیکشن', icon: '🔔', action: () => {} },
    { label: 'نمایش بلوا', sub: 'حالت روز و شب', icon: '📱', action: () => {} },
    { label: 'به روز رسانی', sub: 'نسخه جدید', icon: '✏️', action: () => {} },
  ]

  return (
    <div className="flex flex-col h-full bg-[#F5F7FB]">
      {/* Top icons */}
      <div className="flex items-center justify-center gap-5 px-5 pt-4 pb-2 bg-white">
        <span className="text-primary cursor-pointer"><IconHelp size={22} /></span>
        <span className="text-primary cursor-pointer"><IconShare size={22} /></span>
        <span className="text-primary cursor-pointer"><IconScan size={22} /></span>
      </div>

      {/* Avatar + name */}
      <div className="flex flex-col items-center py-5 bg-white">
        <div className="w-[80px] h-[80px] rounded-full bg-gradient-to-br from-[#E1EEFF] to-[#B2D6FF] flex items-center justify-center overflow-hidden mb-3">
          <img src={avatar} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-[18px] font-medium text-primary">{profile.senderName}</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3E8BFF" strokeWidth="2.5"><polyline points="6 9 12 15 18 9" /></svg>
        </div>
        <span className="text-[13px] text-[#879FB1] mt-0.5">حساب شخصی</span>
      </div>

      {/* Divider */}
      <div className="flex justify-center py-2 bg-white">
        <div className="w-10 h-[3px] rounded-full bg-[#E0E0E0]" />
      </div>

      {/* Reward banner */}
      <div className="mx-5 mt-3 mb-1 bg-primary rounded-2xl p-4 flex items-center justify-between text-white relative overflow-hidden">
        <div className="text-right">
          <div className="text-[15px] font-medium mb-1">جوايز دوست داشتنی بلوكلاپ</div>
          <div className="text-[12px] opacity-80">فعاليت بيشتر، جايزه بيشتر!</div>
        </div>
        <div className="text-3xl">🏆</div>
        <div className="absolute left-3 top-1/2 -translate-y-1/2 opacity-30">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M15 18l-6-6 6-6" stroke="white" strokeWidth="2" fill="none" /></svg>
        </div>
      </div>

      {/* Settings list */}
      <div className="flex-1 overflow-y-auto no-scrollbar px-5 pt-4 pb-20 bg-white mt-2 rounded-t-2xl">
        <h3 className="text-[16px] font-medium text-[#2B3441] mb-3">تنظیمات</h3>
        {settings.map((s, i) => (
          <div
            key={i}
            className="flex items-center gap-3 py-4 cursor-pointer border-b border-[#F1F4F8]"
            onClick={s.action}
          >
            <div className="w-[44px] h-[44px] rounded-full bg-[#E8F0FE] flex items-center justify-center text-[20px] shrink-0">
              {s.icon}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[15px] font-medium text-[#2B3441]">{s.label}</div>
              <div className="text-[12px] text-[#879FB1]">{s.sub}</div>
            </div>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#879FB1" strokeWidth="2"><polyline points="15 18 9 12 15 6" /></svg>
          </div>
        ))}
      </div>
    </div>
  )
}
