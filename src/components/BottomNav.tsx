import { IconShield, IconTransferNav, IconGrid, IconCard, IconUser } from './Icons'

const navItems = [
  { key: 'home', label: 'خانه', icon: IconShield },
  { key: 'transfer', label: 'انتقال', icon: IconTransferNav },
  { key: 'grid', label: 'فهرست', icon: IconGrid },
  { key: 'card', label: 'کارت', icon: IconCard },
  { key: 'profile', label: 'پروفایل', icon: IconUser },
] as const

interface Props {
  activeTab: string
  onNavigate: (tab: string) => void
}

export default function BottomNav({ activeTab, onNavigate }: Props) {
  return (
    <nav
      className="fixed bottom-0 left-0 right-0 bg-white flex flex-col z-50 border-t border-[#EEEEEE]"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      role="navigation"
      aria-label="منوی پایین"
    >
      <div className="h-[60px] flex items-center justify-around w-full">
      {navItems.map(({ key, label, icon: Icon }) => {
        const active = activeTab === key
        return (
          <button
            key={key}
            onClick={() => onNavigate(key)}
            className={`flex flex-col items-center gap-0.5 cursor-pointer transition-transform active:scale-90 ${
              active ? 'text-primary' : 'text-[#818E96]'
            }`}
            aria-label={label}
            aria-current={active ? 'page' : undefined}
          >
            <Icon size={label === 'فهرست' ? 26 : 24} />
          </button>
        )
      })}
      </div>
    </nav>
  )
}
