import RyanWyatt from '../assets/img/Ryan Wyatt.jpg'
import TommasoSandretto from '../assets/img/Tommaso Sandretto.jpg'
import ChrisGonsalves from '../assets/img/Chris Gonsalves.jpg'
import AndrewDugree from '../assets/img/Andrew Dugree.jpg'
import RichardKim from '../assets/img/Richard Kim.jpg'
import BatisSamadian from '../assets/img/Batis Samadian.jpg'
import EvanFeng from '../assets/img/Evan Feng.jpg'
import CiaraSun from '../assets/img/Ciara-Sun.jpg'

export interface SpeakerInfoItem {
  name: string
  item: string[]
}
export interface SpeakerInfo {
  name: string
  desc: string
  avatar: string
  link?: string
  content: SpeakerInfoItem[]
}

export const speakerList: SpeakerInfo[] = [
  {
    name: 'Ryan Wyatt',
    desc: 'CEO of Polygon Studios',
    avatar: RyanWyatt.src,
    link: 'https://www.linkedin.com/in/ryancwyatt/',
    content: [
      {
        name: 'CEO of Polygon Studios',
        item: [
          `Wyatt is a New York Times Best Selling Author, was named to Forbes 30 under 30, The Hollywood Reporter's 35 Rising Executives 35 and Under, Fortune's 40 under 40 lists, and nominated for a Shorty Award in the Gaming category. Wyatt led and created the Gaming vertical at YouTube for seven years before coming over as the CEO of Polygon Studios. Polygon Studios is the arm of Polygon responsible for all developers across web2 and web3 focused on leveraging and building dApps around NFTs spanning Gaming, Music, News, Sports, Fashion, and Entertainment. Polygon aims to be the world-leading chain for developers to build on.`,
        ],
      },
      { name: 'Potential Talk/Breakout Session', item: ['The great web 2→ web 3 migration in the gaming industry'] },
    ],
  },
  {
    name: 'Tommaso Sandretto',
    desc: 'Partner & Director of Research at CoinFund',
    avatar: TommasoSandretto.src,
    link: 'https://www.linkedin.com/in/tommaso-sandretto-b675349/',
    content: [
      {
        name: `Partner & Director of Research at CoinFund`,
        item: [
          `Tommaso Sandretto is Chief Revenue and Chief Investment Officer of Blockchain Creative Labs (BCL), FOX Entertainment’s Web3 studio, which provides content creators, IP owners and brands end-to-end Web3 solutions to build, launch, manage and sell Non-Fungible Token (NFT) and fungible token content experiences directly to their fanbase and audiences.`,
          `As BCL’s Chief Revenue Officer, Tommaso oversees and creates alignment between all of the company’s teams that affect revenue generation to ensure effectiveness and maximize profitability. Furthermore, as Chief Investment Officer, he is responsible for setting BCL’s investment strategy, vet business opportunities and manage portfolio companies.`,
          `Last year, BCL launched the digital marketplace “The MaskVerse” for FOX’s hit singing competition program, THE MASKED SINGER, and is currently preparing to launch a dedicated digital marketplace for KRAPOPOLIS, marking the first animated series to be curated entirely on the blockchain. Additionally, BCL and WWE recently unveiled “WWE Moonsault,” an NFT marketplace for licensed digital WWE tokens and collectibles.  BCL also is partnering with the new United States Football League (USFL) on an innovative NFT marketplace that will mint and sell official digital tokens for the League, its teams, players and coaches.`,
          `Prior to BCL, Tommaso was CEO at Sole Resorts, where he doubled the company’s property portfolio and led the pandemic emergency and turn around. He also co-founded SF- Partner, a New York-based lending platform with more than $650 million in transaction volume. Sandretto began his career as an M&A investment banker at Citibank.`,
        ],
      },
      {
        name: 'Potential Talk/Breakout Session',
        item: [
          `How are big entertainment companies looking to break into the metaverse/NFT space? 
`,
        ],
      },
    ],
  },
  {
    name: 'Chris Gonsalves',
    desc: 'CEO, IG: @cgny_ Community Gaming',
    avatar: ChrisGonsalves.src,
    link: 'https://www.linkedin.com/in/esports/',
    content: [
      {
        name: `CEO, IG: @cgny_ Community Gaming`,
        item: [
          `Prior to founding Community Gaming, Chris was a business analyst at ConsenSys, helping shape the company’s blockchain gaming investment strategies and fueling his desire to support the growing gaming community through the Play2Earn movement. Now, as the CEO of Community Gaming, Chris aims to revolutionize the esports industry by creating the easiest to use competition platform, facilitating automated player payouts that leverage blockchain payment tech. Chris has hosted over 250 gaming events and led Community Gaming into becoming the largest esports events company in New York City.`,
        ],
      },
      { name: `Potential Talk/Breakout Session`, item: [`How is Play2earn mechanics evolving within the space?`] },
    ],
  },
  {
    name: 'Andrew Durgee',
    desc: 'Head of Crypto and Tokenization at Republic',
    avatar: AndrewDugree.src,
    link: 'https://www.linkedin.com/in/andrew-durgee-b9367018/',
    content: [
      {
        name: `Head of Crypto and Tokenization at Republic`,
        item: [
          `Managing Director, Republic – Andrew entered crypto in early 2010, pioneering early blockchain technology plays including an industry first multi signature wallet repository. Andrew studied Management Engineering at Worcester Polytechnic Institute and is a highly skilled executive with over 12 years of experience. Andrew was previously a Partner at a leading blockchain advisory group, TLDR.`,
        ],
      },
    ],
  },
  {
    name: 'Richard Kim',
    desc: 'General Partner at Galaxy Interactive',
    avatar: RichardKim.src,
    link: 'https://www.linkedin.com/in/richardkimgalaxy/',
    content: [
      {
        name: `General Partner at Galaxy Interactive`,
        item: [
          `Richard Kim is a General Partner at Galaxy Interactive and a Managing Director at Galaxy Digital. His experience spans investing, trading, law, finance, management and strategy. He joined Galaxy Digital as COO in May 2018, before joining Galaxy Interactive in Dec 2018. Prior to joining Galaxy Digital, he was the COO of Global Foreign Exchange and Emerging Markets Trading at Goldman Sachs from 2015-18. From 2012-15, he worked at J.P. Morgan, where he was the Co-COO of Global Foreign Exchange and Emerging Markets Trading, and prior to that was the COO of J.P. Morgan's electronic trading franchise for FX/EM. From 2010 to 2012, he worked as a derivatives and regulation attorney at J.P. Morgan. From 2007-10, he worked as an attorney in Cleary Gottlieb’s financial products and markets group. He also served as an adjunct professor at New York Law School. He earned his J.D. from Columbia Law School in 2007 and studied philosophy and economics at the University of Washington, from which he graduated magna cum laude and Phi Beta Kappa in 2004 at the age of 18.`,
        ],
      },
    ],
  },
  {
    name: 'Batis Samadian',
    desc: 'Co-Founder of Saffron and Founder of SPACE',
    avatar: BatisSamadian.src,
    link: 'https://www.linkedin.com/in/batissamadian/',
    content: [
      {
        name: `Co-Founder of Saffron and Founder of SPACE`,
        item: [
          `Batis Samadian is the founder of SPACE, a commerce virtual world startup. He has recently been backed by Tier 1 Funds like Coinfund, Polygon, Dapper Labs, Digital Currency Group, Animoca, Hof Capital, Alameda Research and many more. `,
        ],
      },
    ],
  },
  {
    name: 'Evan Feng',
    desc: 'Partner and the Director of Research at CoinFund',
    avatar: EvanFeng.src,
    link: 'https://www.linkedin.com/in/evan-feng/',
    content: [
      {
        name: `Partner and the Director of Research at CoinFund`,
        item: [
          `Evan Feng is currently a Partner and the Director of Research at CoinFund, a top-tier web3-native investment management firm headquartered in New York and Miami. His responsibilities include hiring, training, and managing the investment analyst team and personally identifying, diligencing, and executing equity and token investments for the venture and liquid investing strategies at the firm in order to generate top-quartile returns. Prior to joining CoinFund, he served in fundamental investment research roles at Citadel’s flagship Global Equities division and subsequently Point72’s Discretionary Equities business.  In this capacity, he covered public equities in the Technology, Media and Telecom universe including AT&T, Disney and Comcast. Mr. Feng started his Wall Street career at Barclays in the Leveraged Finance team within the Investment Banking Division. He is a graduate of New York University Stern School of Business. `,
        ],
      },
    ],
  },
  {
    name: 'Ciara-Sun',
    desc: 'Chief Of Staff at Huobi Global',
    avatar: CiaraSun.src,
    link: 'https://www.linkedin.com/in/ciara-sun-565a585b/',
    content: [
      {
        name: `Chief Of Staff at Huobi Global`,
        item: [
          `Ciara Sun, Financial Analysis MBA, has rich work experiences in financial analysis, strategic consulting and corporate management experiences in Boston Consulting Group, Deloitte Consulting and Ernst & Young. She Collaborated with Banking and Capital Markets group for 15 major banks, performed investment analytics to support clients withbillion dollars of AUM, including hedge funds, private equity firms, and investment management corporations. She co-founded and served as former COO of US Multidimensional Network Technology Co.Ltd. She won the Championship for 2018 Blockchain Consensys without borders competition.`,
        ],
      },
    ],
  },
]

export function getSpeakerByName(name: any) {
  return speakerList.find((item) => item.name === name)
}
