import styled from 'styled-components'
import Coin from './Coin'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { coins } from '../static/coins'
import BalanceChart from './BalanceChart'
import { useEffect, useState } from 'react'
import { FaFacebook, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa'
import { FaTwitter as XIcon } from 'react-icons/fa'

const Portfolio = ({ twTokens, sanityTokens, walletAddress }) => {
  const [walletBalance, setWalletBalance] = useState(0)
  const [sender] = useState(walletAddress)

  // Uncomment and implement balance fetching logic if needed
  // const getBalance = async activeTwToken => {
  //   const balance = await activeTwToken.balanceOf(sender)
  //   return parseInt(balance.displayValue)
  // }

  // useEffect(() => {
  //   const calculateTotalBalance = async () => {
  //     setWalletBalance(0)
  //     sanityTokens.map(async token => {
  //       const currentTwToken = twTokens.filter(
  //         twToken => twToken.address === token.contractAddress,
  //       )
  //       const balance = await getBalance(currentTwToken[0])
  //       setWalletBalance(prevState => prevState + balance * token.usdPrice)
  //     })
  //   }

  //   if (sanityTokens.length > 0 && twTokens.length > 0) {
  //     calculateTotalBalance()
  //   }
  // }, [twTokens, sanityTokens])

  // useEffect(() => {
  //   const existingScript = document.getElementById('tradingview-script')
  //   if (existingScript) {
  //     existingScript.remove() // Remove existing script if present
  //   }

  //   // Create and append the new script
  //   const script = document.createElement('script')
  //   script.id = 'tradingview-script'
  //   script.src = "https://s3.tradingview.com/external-embedding/embed-widget-screener.js"
  //   script.async = true
  //   script.innerHTML = JSON.stringify({
  //     width: "100%",
  //     height: "500",
  //     defaultColumn: "overview",
  //     screener_type: "crypto_mkt",
  //     displayCurrency: "BTC",
  //     colorTheme: "dark",
  //     locale: "en"
  //   })

  //   document.getElementById('tradingview-widget').appendChild(script)

  //   // Clean up script on unmount
  //   return () => {
  //     script.remove()
  //   }
  // }, [])

  return (
    <Wrapper>
      <Content>
        <Chart>
          <div>
            <Balance>
              <BalanceTitle>Portfolio balance</BalanceTitle>
              <BalanceValue>
                {'$'}
                {walletBalance.toLocaleString('US')}
              </BalanceValue>
            </Balance>
          </div>
          <BalanceChart />
        </Chart>
        <PortfolioTable>
          <TableItem>
            <Title>Welcome to the Community</Title>
            <p>Stay connected and engage with us on our social media platforms! Following us on social media not only keeps you updated with the latest news and trends but also provides exclusive insights, tips, and interactive content tailored just for you.</p>
            <br></br>
            <br></br>
            <br></br>

            {/* <TradingViewWidget id="tradingview-widget" /> */}

            <SocialMediaLinks>
              <a href="https://x.com/SurujKalita7" target="_blank" rel="noopener noreferrer">
                <XIcon />
                <span>X</span>
              </a>
              {/* <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
                <span>Facebook</span>
              </a> */}
              <a href="https://www.linkedin.com/in/surujkalita/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
                <span>LinkedIn</span>
              </a>
              <a href="https://www.instagram.com/___p_l_a_y____/" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
                <span>Instagram</span>
              </a>
              <a href="https://www.youtube.com/@suruj0001" target="_blank" rel="noopener noreferrer">
                <FaYoutube />
                <span>YouTube</span>
              </a>
            </SocialMediaLinks>
          </TableItem>
          <Divider />
          <Table>
            <TableItem>
              {/* <TableRow>
                <div style={{ flex: 3 }}>Name</div>
                <div style={{ flex: 2 }}>Balance</div>
                <div style={{ flex: 1 }}>Price</div>
                <div style={{ flex: 1 }}>Allocation</div>
                <div style={{ flex: 0, color: '#0a0b0d' }}>
                  <BsThreeDotsVertical />
                </div>
              </TableRow> */}
              <div></div>
            </TableItem>
            <Divider />
            {/* <div>
              {coins.map(coin => (
                <div key={coin.name}>
                  <Coin coin={coin} />
                  <Divider />
                </div>
              ))}
            </div> */}
          </Table>
        </PortfolioTable>
      </Content>
    </Wrapper>
  )
}

export default Portfolio

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  height: 100%;
`

const Content = styled.div`
  width: 100%;
  max-width: 1000px;
  padding: 2rem 1rem;
`

const Chart = styled.div`
  border: 1px solid #282b2f;
  padding: 1rem 2rem;
`

const Balance = styled.div``

const BalanceTitle = styled.div`
  color: #8a919e;
  font-size: 0.9rem;
`

const BalanceValue = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0.5rem 0;
`

const PortfolioTable = styled.div`
  margin-top: 1rem;
  border: 1px solid #282b2f;
`

const Table = styled.div`
  width: 100%;
`

const TableItem = styled.div`
  padding: 1rem 2rem;
`

const Divider = styled.div`
  border-bottom: 1px solid #282b2f;
`

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
`

const SocialMediaLinks = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 2rem; /* Added top margin */
  a {
    color: #8a919e;
    font-size: 1.8rem;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 1rem;
    &:hover {
      color: #3773f5;
    }
    span {
      font-size: 1rem;
    }
  }
`

const TradingViewWidget = styled.div`
  width: 100%; /* Ensure widget takes full width of container */
  height: 500px; /* Adjust the height as needed */
  margin-top: 2rem; /* Add margin to separate from content above */
`
