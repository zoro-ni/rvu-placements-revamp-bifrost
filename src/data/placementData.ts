export type OutcomeStatus = 'approximate' | 'more-than' | 'exact'

export type Outcome = {
  value: string
  label: string
  note: string
  status: OutcomeStatus
  numericValue?: number
  prefix?: string
  suffix?: string
}

export type School = {
  name: string
  shortName: string
  eligibleStudents: number
  capability: string
  programmes: string[]
}

export const outcomes: Outcome[] = [
  { value: '425', label: 'offers', note: 'approximately 425 offers were facilitated in 2025-26', status: 'approximate', numericValue: 425 },
  { value: '250+', label: 'recruiting organisations', note: 'across MNCs, GCCs, technology, consulting, finance and startups', status: 'more-than', numericValue: 250, suffix: '+' },
  { value: '₹43.5L', label: 'highest annual compensation', note: 'offered by Aviatrix in the 2025-26 cycle', status: 'exact', numericValue: 43.5, prefix: '₹', suffix: 'L' },
  { value: '~25%', label: 'placed students with multiple offers', note: 'approximately one in four placed students received multiple employment offers', status: 'approximate', numericValue: 25, prefix: '~', suffix: '%' },
]

export const schools: School[] = [
  {
    name: 'School of Computer Science & Engineering',
    shortName: 'SoCSE',
    eligibleStudents: 737,
    capability: 'Computing, engineering and technical problem-solving.',
    programmes: ['B.Tech. (Hons.) - 547', 'B.Sc. (Hons.) - 172', 'M.Tech. - 18'],
  },
  {
    name: 'School of Economics & Business',
    shortName: 'SoEB',
    eligibleStudents: 529,
    capability: 'Business, economics, commerce and management.',
    programmes: ['B.Sc. (Hons.) Economics - 4', 'M.Sc. Economics - 16', 'BBA (Hons.) - 162', 'B.Com. (Hons.) - 170', 'MBA - 177'],
  },
  {
    name: 'School of Design & Innovation',
    shortName: 'SDI',
    eligibleStudents: 157,
    capability: 'Design, innovation and making.',
    programmes: ['B.Des. (Hons.) - 123', 'M.Des. - 34'],
  },
  {
    name: 'School of Law',
    shortName: 'SoL',
    eligibleStudents: 105,
    capability: 'Law, cyber law, criminology and forensic sciences.',
    programmes: ['B.Sc. (Hons.) - Criminology, Cyber Law and Forensic Sciences - 70', 'LL.M. - 35'],
  },
  {
    name: 'School of Liberal Arts & Sciences',
    shortName: 'SoLAS',
    eligibleStudents: 59,
    capability: 'Psychology, environmental science and politics.',
    programmes: ['B.Sc. (Hons.) - Psychology - 30', 'B.Sc. (Hons.) - Environmental Science - 2', 'B.A. (Hons.) - Politics and International Relations - 4', 'M.Sc. - Psychology - 23'],
  },
  {
    name: 'School of Film, Media & Creative Arts',
    shortName: 'SoFMCA',
    eligibleStudents: 4,
    capability: 'Film, media and creative practice.',
    programmes: ['B.Sc. (Hons.) - Filmmaking - 4'],
  },
]

export const salaryBands = [
  { label: 'Below ₹10L', count: '80-90', width: 88, note: 'Approximate number of offers in this band.' },
  { label: '₹10-20L', count: '40-50', width: 50, note: 'Approximate number of offers in this band.' },
  { label: '₹20-33L', count: '~20', width: 28, note: 'Approximate number of offers in this band.' },
]
