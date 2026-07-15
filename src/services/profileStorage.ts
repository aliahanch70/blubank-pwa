export interface Profile {
  senderName: string
  sheba: string
  balance: string
}

const KEY = 'blubank_profile'

const DEFAULTS: Profile = {
  senderName: 'علی آهنچیان',
  sheba: 'IR - ۴۹ ۰۵۶۰ ۶۱۱۸ ۲۸۰۰ ۵۵۲۶ ۳۶۷۸ ۰۱',
  balance: '۳۱,۲۲۱,۳۹۸',
}

export function getProfile(): Profile {
  try {
    const raw = localStorage.getItem(KEY)
    return raw ? { ...DEFAULTS, ...JSON.parse(raw) } : DEFAULTS
  } catch {
    return DEFAULTS
  }
}

export function saveProfile(p: Profile): void {
  localStorage.setItem(KEY, JSON.stringify(p))
}
