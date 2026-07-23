export interface Transaction {
  id: string
  title: string
  date: string
  amount: string
  iconKey: 'transfer' | 'deposit'
  receipt?: { dest: { name: string; account: string; badge: boolean; blue: boolean }; amount: string }
}

export const BALANCE = '۸۵۰,۰۰۰,۰۰۰ ریال'

export const TRANSACTIONS: Transaction[] = [
  { id: '21', title: 'انتقال به سپرده', date: 'چهارشنبه ۱ مرداد ۱۴۰۵ ۱۰:۳۰', amount: '۳,۲۰۰,۰۰۰ ریال', iconKey: 'transfer' },
  { id: '20', title: 'دریافت پایا', date: 'سه‌شنبه ۳۱ تیر ۱۴۰۵ ۱۴:۲۰', amount: '۶,۸۰۰,۰۰۰ ریال', iconKey: 'deposit' },
  { id: '19', title: 'انتقال به سپرده', date: 'دوشنبه ۳۰ تیر ۱۴۰۵ ۰۹:۴۵', amount: '۲,۱۰۰,۰۰۰ ریال', iconKey: 'transfer' },
  { id: '18', title: 'خرید فروشگاهی', date: 'یکشنبه ۲۹ تیر ۱۴۰۵ ۱۸:۱۰', amount: '۴۵۰,۰۰۰ ریال', iconKey: 'transfer' },
  { id: '17', title: 'دریافت پایا', date: 'شنبه ۲۸ تیر ۱۴۰۵ ۱۱:۳۰', amount: '۱۱,۵۰۰,۰۰۰ ریال', iconKey: 'deposit' },
  { id: '16', title: 'انتقال به سپرده', date: 'جمعه ۲۷ تیر ۱۴۰۵ ۱۶:۰۰', amount: '۸۰۰,۰۰۰ ریال', iconKey: 'transfer' },
  { id: '15', title: 'انتقال به سپرده', date: 'جمعه ۲۶ تیر ۱۴۰۵ ۱۳:۴۵', amount: '۱۵,۰۰۰,۰۰۰ ریال', iconKey: 'transfer' },
  { id: '14', title: 'برداشت وجه', date: 'چهارشنبه ۲۴ تیر ۱۴۰۵ ۱۹:۱۸', amount: '۹۰۰,۰۰۰ ریال', iconKey: 'transfer' },
  { id: '13', title: 'انتقال به سپرده', date: 'سه‌شنبه ۲۳ تیر ۱۴۰۵ ۱۰:۰۲', amount: '۷,۱۰۰,۰۰۰ ریال', iconKey: 'transfer' },
  { id: '12', title: 'دریافت پایا', date: 'یکشنبه ۲۱ تیر ۱۴۰۵ ۲۳:۵۰', amount: '۳,۲۴۰,۰۰۰ ریال', iconKey: 'deposit' },
  { id: '11', title: 'انتقال به سپرده', date: 'شنبه ۲۰ تیر ۱۴۰۵ ۱۷:۰۵', amount: '۱,۸۰۰,۰۰۰ ریال', iconKey: 'transfer' },
  { id: '10', title: 'انتقال به سپرده', date: 'جمعه ۱۹ تیر ۱۴۰۵ ۱۴:۱۵', amount: '۴۵۰,۰۰۰ ریال', iconKey: 'transfer' },
  { id: '9', title: 'دریافت پایا', date: 'چهارشنبه ۱۷ تیر ۱۴۰۵ ۰۸:۳۰', amount: '۳,۷۵۰,۰۰۰ ریال', iconKey: 'deposit' },
  { id: '8', title: 'انتقال به سپرده', date: 'سه‌شنبه ۱۶ تیر ۱۴۰۵ ۲۲:۱۰', amount: '۵,۰۰۰,۰۰۰ ریال', iconKey: 'transfer' },
  { id: '7', title: 'پرداخت قبض', date: 'یکشنبه ۱۴ تیر ۱۴۰۵ ۱۶:۲۲', amount: '۶۲۰,۰۰۰ ریال', iconKey: 'transfer' },
  { id: '6', title: 'انتقال به سپرده', date: 'شنبه ۱۳ تیر ۱۴۰۵ ۱۱:۴۰', amount: '۳۰۰,۰۰۰ ریال', iconKey: 'transfer' },
  { id: '5', title: 'دریافت پایا', date: 'پنجشنبه ۱۱ تیر ۱۴۰۵ ۲۱:۰۵', amount: '۱۲,۵۰۰,۰۰۰ ریال', iconKey: 'deposit' },
  { id: '4', title: 'انتقال به سپرده', date: 'چهارشنبه ۱۰ تیر ۱۴۰۵ ۰۹:۱۵', amount: '۲,۴۰۰,۰۰۰ ریال', iconKey: 'transfer' },
  { id: '3', title: 'خرید فروشگاهی', date: 'دوشنبه ۸ تیر ۱۴۰۵ ۱۵:۳۰', amount: '۸۵۰,۰۰۰ ریال', iconKey: 'transfer' },
  { id: '2', title: 'دریافت پایا', date: 'یکشنبه ۷ تیر ۱۴۰۵ ۱۸:۴۶', amount: '۴,۰۲۰,۰۰۰ ریال', iconKey: 'deposit' },
  { id: '1', title: 'انتقال به سپرده', date: 'شنبه ۶ تیر ۱۴۰۵ ۱۲:۲۰', amount: '۱,۵۰۰,۰۰۰ ریال', iconKey: 'transfer' },
]
