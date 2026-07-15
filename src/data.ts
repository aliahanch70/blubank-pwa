export interface Transaction {
  id: string
  title: string
  date: string
  amount: string
  iconKey: 'transfer' | 'deposit'
  receipt?: { dest: { name: string; account: string; badge: boolean; blue: boolean }; amount: string }
}

export const BALANCE = '۸۵۰,۰۰۰,۰۰۰ ریال'

export const TRANSACTIONS: Transaction[] = [  { id: '15', title: 'انتقال به سپرده', date: 'جمعه ۲۶ تیر ۱۴۰۵ ۱۳:۴۵', amount: '۱۵,۰۰۰,۰۰۰ ریال', iconKey: 'transfer' },
  { id: '14', title: 'برداشت وجه', date: 'چهارشنبه ۲۴ تیر ۱۴۰۵ ۱۹:۱۸', amount: '۹۰۰,۰۰۰ ریال', iconKey: 'transfer' },
  { id: '13', title: 'انتقال به سپرده', date: 'سه‌شنبه ۲۳ تیر ۱۴۰۵ ۱۰:۰۲', amount: '۷,۱۰۰,۰۰۰ ریال', iconKey: 'transfer' },
  { id: '12', title: 'دریافت پایا', date: 'یکشنبه ۲۱ تیر ۱۴۰۵ ۲۳:۵۰', amount: '۳,۲۴۰,۰۰۰ ریال', iconKey: 'deposit' },
  { id: '11', title: 'کارت به کارت خروجی', date: 'شنبه ۲۰ تیر ۱۴۰۵ ۱۷:۰۵', amount: '۱,۸۰۰,۰۰۰ ریال', iconKey: 'transfer' },
  { id: '10', title: 'انتقال به سپرده', date: 'جمعه ۱۹ تیر ۱۴۰۵ ۱۴:۱۵', amount: '۴۵۰,۰۰۰ ریال', iconKey: 'transfer' },
  { id: '9', title: 'دریافت پایا', date: 'چهارشنبه ۱۷ تیر ۱۴۰۵ ۰۸:۳۰', amount: '۳,۷۵۰,۰۰۰ ریال', iconKey: 'deposit' },
  { id: '8', title: 'انتقال به سپرده', date: 'سه‌شنبه ۱۶ تیر ۱۴۰۵ ۲۲:۱۰', amount: '۵,۰۰۰,۰۰۰ ریال', iconKey: 'transfer' },
  { id: '7', title: 'پرداخت قبض', date: 'یکشنبه ۱۴ تیر ۱۴۰۵ ۱۶:۲۲', amount: '۶۲۰,۰۰۰ ریال', iconKey: 'transfer' },
  { id: '6', title: 'انتقال به سپرده', date: 'شنبه ۱۳ تیر ۱۴۰۵ ۱۱:۴۰', amount: '۳۰۰,۰۰۰ ریال', iconKey: 'transfer' },
  { id: '5', title: 'کارت به کارت ورودی', date: 'پنجشنبه ۱۱ تیر ۱۴۰۵ ۲۱:۰۵', amount: '۱۲,۵۰۰,۰۰۰ ریال', iconKey: 'deposit' },
  { id: '4', title: 'انتقال به سپرده', date: 'چهارشنبه ۱۰ تیر ۱۴۰۵ ۰۹:۱۵', amount: '۲,۴۰۰,۰۰۰ ریال', iconKey: 'transfer' },
  { id: '3', title: 'خرید فروشگاهی', date: 'دوشنبه ۸ تیر ۱۴۰۵ ۱۵:۳۰', amount: '۸۵۰,۰۰۰ ریال', iconKey: 'transfer' },
  { id: '2', title: 'دریافت پایا', date: 'یکشنبه ۷ تیر ۱۴۰۵ ۱۸:۴۶', amount: '۴,۰۲۰,۰۰۰ ریال', iconKey: 'deposit' },

  { id: '1', title: 'انتقال به سپرده', date: 'شنبه ۶ تیر ۱۴۰۵ ۱۲:۲۰', amount: '۱,۵۰۰,۰۰۰ ریال', iconKey: 'transfer' }
]
