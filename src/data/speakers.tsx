import RyanWyatt from '../assets/img/Ryan Wyatt.jpg'
import TommasoSandretto from '../assets/img/Tommaso Sandretto.jpg'
import ChrisGonsalves from '../assets/img/Chris Gonsalves.jpg'
import AndrewDugree from '../assets/img/Andrew Dugree.jpg'
import RichardKim from '../assets/img/Richard Kim.jpg'
import BatisSamadian from '../assets/img/Batis Samadian.jpg'
import EvanFeng from '../assets/img/Evan Feng.jpg'
import CiaraSun from '../assets/img/Ciara-Sun.jpg'

export interface SpeakerInfo {
  name: string
  desc: string
  avatar: string
}

export const speakerList: SpeakerInfo[] = [
  { name: 'Ryan Wyatt', desc: 'CEO of Polygon Studios', avatar: RyanWyatt.src },
  { name: 'Tommaso Sandretto', desc: 'Partner & Director of Research at CoinFund', avatar: TommasoSandretto.src },
  { name: 'Chris Gonsalves', desc: 'CEO, IG: @cgny_ Community Gaming', avatar: ChrisGonsalves.src },
  { name: 'Andrew Dugree', desc: 'Head of Crypto and Tokenization at Republic', avatar: AndrewDugree.src },
  { name: 'Richard Kim', desc: 'General Partner at Galaxy Interactive', avatar: RichardKim.src },
  { name: 'Batis Samadian', desc: 'Co-Founder of Saffron and Founder of SPACE', avatar: BatisSamadian.src },
  { name: 'Evan Feng', desc: 'Partner and the Director of Research at CoinFund', avatar: EvanFeng.src },
  { name: 'Ciara-Sun', desc: 'Chief Of Staff at Huobi Global', avatar: CiaraSun.src },
]
