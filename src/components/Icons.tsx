/* ─── Header icons ─── */

export function IconHelp({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.6 }}>
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  )
}

export function IconBell({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  )
}

export function IconScan({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
    </svg>
  )
}

export function IconSearch({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  )
}

/* ─── Balance area ─── */

export function IconDropdown({ size = 12 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9l6 6 6-6" />
    </svg>
  )
}

export function IconEye({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    </svg>
  )
}

/* ─── Quick action icons ─── */

export function IconReport({ size = 30 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  )
}

export function IconPulse({ size = 30 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  )
}

export function IconPlusFilled({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 8H0V6H6V0H8V6H14V8H8V14H6V8Z" fill="#327CDF" />
    </svg>
  )
}

/* ─── Transaction icons ─── */

export function IconTransfer({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  )
}

export function IconDeposit({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="19" x2="12" y2="5" />
      <polyline points="5 12 12 19 19 12" />
    </svg>
  )
}

/* ─── Transfer page ─── */

export function IconCalendar({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  )
}

export function IconPersonFill({ size = 55 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5-4-8-4z" />
    </svg>
  )
}

/* ─── Bottom nav icons ─── */

export function IconShield({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M17.6009 22.5601H6.40094C4.58094 22.5601 2.92094 21.1601 2.62094 19.3701L1.29094 11.4001C1.07094 10.1601 1.68094 8.57007 2.67094 7.78007L9.60094 2.23007C10.9409 1.15007 13.0509 1.16007 14.4009 2.24007L21.3309 7.78007C22.3109 8.57007 22.9109 10.1601 22.7109 11.4001L21.3809 19.3601C21.0809 21.1301 19.3809 22.5601 17.6009 22.5601ZM11.9909 2.93007C11.4609 2.93007 10.9309 3.09007 10.5409 3.40007L3.61094 8.96007C3.05094 9.41007 2.65094 10.4501 2.77094 11.1601L4.10094 19.1201C4.28094 20.1701 5.33094 21.0601 6.40094 21.0601H17.6009C18.6709 21.0601 19.7209 20.1701 19.9009 19.1101L21.2309 11.1501C21.3409 10.4501 20.9409 9.39007 20.3909 8.95007L13.4609 3.41007C13.0609 3.09007 12.5209 2.93007 11.9909 2.93007Z"
        fill="#818E96"
      />
    </svg>
  )
}

export function IconTransferNav({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M17.2788 11.2C17.0888 11.2 16.8988 11.13 16.7488 10.98C16.4588 10.69 16.4588 10.21 16.7488 9.91995L19.9388 6.72995L16.7488 3.53995C16.4588 3.24995 16.4588 2.76995 16.7488 2.47995C17.0387 2.18995 17.5187 2.18995 17.8087 2.47995L21.5288 6.19998C21.6688 6.33998 21.7488 6.52995 21.7488 6.72995C21.7488 6.92995 21.6688 7.11998 21.5288 7.25998L17.8087 10.98C17.6587 11.12 17.4688 11.2 17.2788 11.2Z" fill="#818E96" />
      <path d="M21 7.47998H3C2.59 7.47998 2.25 7.13998 2.25 6.72998C2.25 6.31998 2.59 5.97998 3 5.97998H21C21.41 5.97998 21.75 6.31998 21.75 6.72998C21.75 7.13998 21.41 7.47998 21 7.47998Z" fill="#818E96" />
      <path d="M6.71997 21.75C6.52997 21.75 6.34 21.68 6.19 21.53L2.46997 17.81C2.32997 17.67 2.25 17.48 2.25 17.28C2.25 17.08 2.32997 16.89 2.46997 16.75L6.19 13.03C6.48 12.74 6.96 12.74 7.25 13.03C7.54 13.32 7.54 13.8 7.25 14.09L4.06 17.28L7.25 20.4699C7.54 20.7599 7.54 21.24 7.25 21.53C7.11 21.68 6.91997 21.75 6.71997 21.75Z" fill="#818E96" />
      <path d="M21 18.02H3C2.59 18.02 2.25 17.68 2.25 17.27C2.25 16.86 2.59 16.52 3 16.52H21C21.41 16.52 21.75 16.86 21.75 17.27C21.75 17.68 21.41 18.02 21 18.02Z" fill="#818E96" />
    </svg>
  )
}

export function IconGrid({ size = 26 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="6.8" height="6.8" rx="2" stroke="#879FB1" strokeWidth="2" />
      <rect x="14.2" y="3" width="6.8" height="6.8" rx="2" stroke="#879FB1" strokeWidth="2" />
      <rect x="14.2" y="14.2" width="6.8" height="6.8" rx="2" stroke="#879FB1" strokeWidth="2" />
      <rect x="3" y="14.2" width="6.8" height="6.8" rx="2" stroke="#879FB1" strokeWidth="2" />
      <circle cx="12" cy="12" r="1" fill="#879FB1" />
    </svg>
  )
}

export function IconCard({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <line x1="2" y1="10" x2="22" y2="10" />
    </svg>
  )
}

export function IconUser({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}
