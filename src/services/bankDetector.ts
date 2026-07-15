export interface BankInfo {
  name: string
  short: string
  color: string
  logo: string
  iconKey?: string
}

const BIN_RANGES: [number, number, BankInfo][] = [
  // blue bank (بلو بانک)
  [621986, 621986, { name: ' بلو بانک', iconKey: 'ir-blu', short: 'بلو', color: '#1565C0', logo: '🔵' }],
  // Eqtesad Novin (اقتصاد نوین)
  [627412, 627412, { name: 'بانک اقتصاد نوین', iconKey: 'ir-eghtesad-novin', short: 'اقتصاد', color: '#1A5DAB', logo: '🔵' }],
  // Saderat (صادرات)
  [603769, 603799, { name: 'بانک صادرات', iconKey: 'ir-saderat', short: 'صادرات', color: '#006B3F', logo: '🟢' }],
  // Tejarat (تجارت)
  [627353, 627353, { name: 'بانک تجارت', iconKey: 'ir-tejarat', short: 'تجارت', color: '#00529B', logo: '🔷' }],
  // Mellat (ملت)
  [610433, 610433, { name: 'بانک ملت', iconKey: 'ir-mellat', short: 'ملت', color: '#D32F2F', logo: '🔴' }],
  // Sepah (سپه)
  [589210, 589210, { name: 'بانک سپه', iconKey: 'ir-sepah', short: 'سپه', color: '#1565C0', logo: '🔷' }],
  // Karafarin (کارآفرین)
  [627488, 627488, { name: 'بانک کارآفرین', iconKey: 'ir-karafarin', short: 'کارآفرین', color: '#00838F', logo: '🔵' }],
  // Pasargad (پاسارگاد)
  [502229, 502229, { name: 'بانک پاسارگاد', iconKey: 'ir-pasargad', short: 'پاسارگاد', color: '#FF6F00', logo: '🟠' }],
  // Sarmayeh (سرمایه)
  [621986, 621986, { name: 'بانک سرمایه', iconKey: 'ir-parsian', short: 'سرمایه', color: '#6A1B9A', logo: '🟣' }],
  // Parsian (پارسیان)
  [622106, 622106, { name: 'بانک پارسیان', iconKey: 'ir-parsian', short: 'پارسیان', color: '#00796B', logo: '🟢' }],
  // City (شهر)
  [502806, 502806, { name: 'بانک شهر', iconKey: 'ir-shahr', short: 'شهر', color: '#0277BD', logo: '🔵' }],
  // Refah (رفاه)
  [606373, 606373, { name: 'بانک رفاه', iconKey: 'ir-refah', short: 'رفاه', color: '#283593', logo: '🔷' }],
  // Tourism (گردشگری)
  [628135, 628135, { name: 'بانک گردشگری', iconKey: 'ir-gardeshgari', short: 'گردشگری', color: '#00695C', logo: '🟢' }],
  // Development (توسعه)
  [627648, 627648, { name: 'بانک توسعه', iconKey: 'unknown', short: 'توسعه', color: '#4527A0', logo: '🟣' }],
  // Ansar (انصار)
  [627381, 627381, { name: 'بانک انصار', iconKey: 'unknown', short: 'انصار', color: '#1B5E20', logo: '🟢' }],
  // Ayandeh (آینده)
  [627689, 627689, { name: 'بانک آینده', iconKey: 'ir-blu', short: 'آینده', color: '#BF360C', logo: '🟠' }],
  // Iran Zemin (ایران زمین)
  [627961, 627961, { name: 'بانک ایران زمین', iconKey: 'ir-iranzamin', short: 'ایران زمین', color: '#0D47A1', logo: '🔵' }],
  // Day Bank (دی)
  [505785, 505785, { name: 'بانک دی', iconKey: 'ir-day', short: 'دی', color: '#01579B', logo: '🔵' }],
  // Maskan (مسکن)
  [627434, 627434, { name: 'بانک مسکن', iconKey: 'ir-maskan', short: 'مسکن', color: '#006064', logo: '🔵' }],
  // Gardeshgari (گردشگری)
  [505416, 505416, { name: 'بانک گردشگری', iconKey: 'ir-gardeshgari', short: 'گردشگری', color: '#00695C', logo: '🟢' }],
  // Mehr (مهر)
  [621920, 621920, { name: 'بانک مهر', iconKey: 'ir-mehr', short: 'مهر', color: '#880E4F', logo: '🔴' }],
  // Keshavarzi (کشاورزی)
  [622499, 622499, { name: 'بانک کشاورزی', iconKey: 'ir-keshavarzi', short: 'کشاورزی', color: '#2E7D32', logo: '🟢' }],
  // Sanat Madan (صنعت و معدن)
  [627862, 627862, { name: 'بانک صنعت و معدن', iconKey: 'ir-sanat-madan', short: 'صنعت', color: '#37474F', logo: '⬛' }],
  // Post Bank (پست بانک)
  [628329, 628329, { name: 'پست بانک', iconKey: 'ir-post-bank', short: 'پست بانک', color: '#C62828', logo: '🔴' }],
  // Tose'e (توسعه تعاون)
  [627799, 627799, { name: 'بانک توسعه تعاون', iconKey: 'ir-tose-taawon', short: 'تعاون', color: '#004D40', logo: '🟢' }],
  // Hekmat (حکمت)
  [621081, 621081, { name: 'بانک حکمت', iconKey: 'unknown', short: 'حکمت', color: '#1A237E', logo: '🔷' }],
  // Sina (سینا)
  [639370, 639370, { name: 'بانک سینا', iconKey: 'ir-sina', short: 'سینا', color: '#00695C', logo: '🟢' }],
  // Mehr Iran (مهر ایران)
  [627953, 627953, { name: 'بانک مهر ایران', iconKey: 'ir-mehr', short: 'مهر', color: '#880E4F', logo: '🔴' }],
  // Shahr (شهر) extended
  [504172, 504172, { name: 'بانک شهر', iconKey: 'ir-shahr', short: 'شهر', color: '#0277BD', logo: '🔵' }],
  // Middle East (خاورمیانه)
  [622125, 622125, { name: 'بانک خاورمیانه', iconKey: 'unknown', short: 'خاورمیانه', color: '#00695C', logo: '🟢' }],
  // Saman (سامان)
  [621993, 621993, { name: 'بانک سامان', iconKey: 'ir-saman', short: 'سامان', color: '#1565C0', logo: '🔵' }],
  // Khavarmianeh (خاورمیانه)
  [627659, 627659, { name: 'بانک خاورمیانه', iconKey: 'unknown', short: 'خاورمیانه', color: '#00695C', logo: '🟢' }],
]

const IBAN_BANKS: [string, BankInfo][] = [
  ['010', { name: 'مرکزی', iconKey: 'ir-markazi', short: 'مرکزی', color: '#37474F', logo: '🏦' }],
  ['011', { name: 'صنعت و معدن', short: 'صنعت', color: '#37474F', logo: '⬛' }],
  ['012', { name: 'ملت', short: 'ملت', color: '#D32F2F', logo: '🔴' }],
  ['013', { name: 'سپه', short: 'سپه', color: '#1565C0', logo: '🔷' }],
  ['014', { name: '-msk', short: 'مسکن', color: '#006064', logo: '🔵' }],
  ['015', { name: 'کشاورزی', short: 'کشاورزی', color: '#2E7D32', logo: '🟢' }],
  ['016', { name: 'مسکن', short: 'مسکن', color: '#006064', logo: '🔵' }],
  ['017', { name: 'پاسارگاد', short: 'پاسارگاد', color: '#FF6F00', logo: '🟠' }],
  ['018', { name: 'تجارت', short: 'تجارت', color: '#00529B', logo: '🔷' }],
  ['019', { name: 'رفاه', short: 'رفاه', color: '#283593', logo: '🔷' }],
  ['020', { name: 'سامان', short: 'سامان', color: '#1565C0', logo: '🔵' }],
  ['021', { name: 'پارسیان', short: 'پارسیان', color: '#00796B', logo: '🟢' }],
  ['022', { name: 'پست بانک', iconKey: 'ir-post-bank', short: 'پست بانک', color: '#C62828', logo: '🔴' }],
  ['023', { name: 'صادرات', short: 'صادرات', color: '#006B3F', logo: '🟢' }],
  ['024', { name: 'آینده', short: 'آینده', color: '#BF360C', logo: '🟠' }],
  ['025', { name: 'سینا', short: 'سینا', color: '#00695C', logo: '🟢' }],
  ['026', { name: 'سده', short: 'سده', color: '#E42313', logo: '🔴' }],
  ['027', { name: 'مهر اقتصاد', short: 'مهر', color: '#880E4F', logo: '🔴' }],
  ['028', { name: 'ایران زمین', short: 'ایران زمین', color: '#0D47A1', logo: '🔵' }],
  ['029', { name: 'خاورمیانه', short: 'خاورمیانه', color: '#00695C', logo: '🟢' }],
  ['030', { name: 'شهر', short: 'شهر', color: '#0277BD', logo: '🔵' }],
  ['031', { name: 'اقتصاد نوین', short: 'اقتصاد', color: '#1A5DAB', logo: '🔵' }],
  ['032', { name: 'دی', short: 'دی', color: '#01579B', logo: '🔵' }],
  ['033', { name: 'گردشگری', short: 'گردشگری', color: '#00695C', logo: '🟢' }],
  ['034', { name: 'کارآفرین', short: 'کارآفرین', color: '#00838F', logo: '🔵' }],
  ['035', { name: 'انصار', short: 'انصار', color: '#1B5E20', logo: '🟢' }],
  ['036', { name: 'توسعه', short: 'توسعه', color: '#4527A0', logo: '🟣' }],
  ['037', { name: 'سرمایه', short: 'سرمایه', color: '#6A1B9A', logo: '🟣' }],
  ['038', { name: 'حکمت', short: 'حکمت', color: '#1A237E', logo: '🔷' }],
  ['039', { name: 'توسعه تعاون', short: 'تعاون', color: '#004D40', logo: '🟢' }],
  ['051', { name: 'توسعه', short: 'توسعه', color: '#4527A0', logo: '🟣' }],
  ['055', { name: 'اقتصاد', short: 'اقتصاد', color: '#1A5DAB', logo: '🔵' }],
  ['056', { name: 'مهر ایران', short: 'مهر', color: '#880E4F', logo: '🔴' }],
  ['058', { name: 'سینا', short: 'سینا', color: '#00695C', logo: '🟢' }],
  ['059', { name: 'مسکن', short: 'مسکن', color: '#006064', logo: '🔵' }],
  ['060', { name: 'رفاه', short: 'رفاه', color: '#283593', logo: '🔷' }],
  ['061', { name: 'صادرات', short: 'صادرات', color: '#006B3F', logo: '🟢' }],
  ['062', { name: 'کشاورزی', short: 'کشاورزی', color: '#2E7D32', logo: '🟢' }],
  ['063', { name: 'مسکن', short: 'مسکن', color: '#006064', logo: '🔵' }],
  ['064', { name: 'پاسارگاد', short: 'پاسارگاد', color: '#FF6F00', logo: '🟠' }],
  ['065', { name: 'پست بانک', iconKey: 'ir-post-bank', short: 'پست بانک', color: '#C62828', logo: '🔴' }],
  ['066', { name: 'سپه', short: 'سپه', color: '#1565C0', logo: '🔷' }],
  ['067', { name: 'تجارت', short: 'تجارت', color: '#00529B', logo: '🔷' }],
  ['068', { name: 'ملت', short: 'ملت', color: '#D32F2F', logo: '🔴' }],
  ['069', { name: 'مرکزی', iconKey: 'ir-markazi', short: 'مرکزی', color: '#37474F', logo: '🏦' }],
]

// Detect bank from card BIN (first 6 digits)
export function detectBankFromCard(cardNumber: string): BankInfo | null {
  const digits = cardNumber.replace(/\D/g, '')
  if (digits.length < 6) return null
  const bin = parseInt(digits.slice(0, 6))
  for (const [min, max, bank] of BIN_RANGES) {
    if (bin >= min && bin <= max) return bank
  }
  return null
}

// Detect bank from IBAN
export function detectBankFromIban(iban: string): BankInfo | null {
  // IR format: IR + 2 check digits + 3 bank code + rest
  const digits = iban.replace(/\D/g, '')
  if (digits.length < 5) return null
  const bankCode = digits.slice(4, 7)
  const match = IBAN_BANKS.find(([code]) => code === bankCode)
  return match ? match[1] : null
}

// Validate IBAN format
export function validateIban(iban: string): { valid: boolean; bank: BankInfo | null; error?: string } {
  const digits = iban.replace(/\D/g, '')
  if (!iban.toUpperCase().startsWith('IR')) return { valid: false, bank: null, error: 'شبا باید با IR شروع شود' }
  if (digits.length < 12) return { valid: false, bank: null, error: 'شماره شبا ناقص است' }
  const bank = detectBankFromIban(iban)
  return { valid: true, bank }
}

// Format card number with spaces (4-digit groups)
export function formatCardNumber(raw: string): string {
  const digits = raw.replace(/\D/g, '').slice(0, 16)
  return digits.replace(/(\d{4})(?=\d)/g, '$1 ')
}

// Format IBAN with spaces
export function formatIban(raw: string): string {
  const clean = raw.replace(/\s/g, '')
  const prefix = clean.slice(0, 2)
  const digits = clean.slice(2).replace(/\D/g, '')
  const spaced = digits.replace(/(\d{4})(?=\d)/g, '$1 ')
  return prefix.toUpperCase() + ' ' + spaced
}
