import React from 'react'
import '../../assets/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { library, } from '@fortawesome/fontawesome-svg-core'
import { faFacebook, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { ProgressBar, Table } from 'react-bootstrap';
import TokenImg from '../../assets/images/token.png'

const Token: React.FC = () => {
  return (
    <>
      <div className="trendingDiv_top">
        {/* <h1 className='token_H1'>Trending</h1> */}
        <ul>
          <li className='token_H1'>Trending</li>
          <li><span style={{color:'#000'}}>#1</span> demo</li>
          <li><span style={{color:'#000'}}>#2</span>  demo</li>
          <li><span style={{color:'#000'}}>#3</span>  demo</li>
          <li><span style={{color:'#000'}}>#4</span>  demo</li>
          <li><span style={{color:'#000'}}>#5</span>  demo</li>
          <li><span style={{color:'#000'}}>#6</span>  demo</li>
          <li><span style={{color:'#000'}}>#7</span>  demo</li>
          <li><span style={{color:'#000'}}>#8</span>  demo</li>
          <li><span style={{color:'#000'}}>#9</span>  demo</li>
          <li><span style={{color:'#000'}}>#10</span> demo</li>
        </ul>
      </div>

      {/* Main section of Trending Component */}
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="tokenDetails_left">
              <div className="tokenBrief_Div">
                <div className="tokenImag">
                  <img src={TokenImg} alt="" />
                </div>
                <div className='tokenBrief'>
                  <div className="token_head">
                    <h2>MY Token</h2>
                    <a className='green' href="/">KYC</a>
                    <a className='blue' href="/">Audit</a>
                    <div className='tokenStatus'>Upcoming</div>
                  </div>
                  <div className="socialIcons my-2">
                    <FontAwesomeIcon icon={faTwitter} />
                    <FontAwesomeIcon icon={faGithub} />
                    <FontAwesomeIcon icon={faFacebook} />
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tempore blanditiis rerum vel illo culpa obcaecati dolores harum totam sapiente inventore officia neque quae nesciunt, a cupiditate, soluta tenetur omnis.</p>

                </div>

              </div>
              <div className="tokenDetails_table">
                <Table responsive="sm" style={{ fontSize: '14px' }}>
                  <tbody style={{ lineHeight: '1.5' }}>
                    <tr className='custom_tr'>
                      <td>Presale Address</td>
                      <td className='text-end'>My Token</td>
                    </tr>
                    <tr className='custom_tr'>
                      <td>Token Name</td>
                      <td className='text-end'>My Token</td>
                    </tr>
                    <tr className='custom_tr'>
                      <td>Token Symbol</td>
                      <td className='text-end'>My Token</td>
                    </tr>
                    <tr className='custom_tr'>
                      <td>Token Decimals</td>
                      <td className='text-end'>My Token</td>
                    </tr>
                    <tr className='custom_tr'>
                      <td>Token Address</td>
                      <td className='text-end'>My Token</td>
                    </tr>
                    <tr className='custom_tr'>
                      <td>Total Supply</td>
                      <td className='text-end'>My Token</td>
                    </tr>
                    <tr className='custom_tr'>
                      <td>Tokens For Presale</td>
                      <td className='text-end'>My Token</td>
                    </tr>
                    <tr className='custom_tr'>
                      <td>Tokens For Liquidity</td>
                      <td className='text-end'>My Token</td>
                    </tr>
                    <tr className='custom_tr'>
                      <td>Presale Rate</td>
                      <td className='text-end'>My Token</td>
                    </tr>
                    <tr className='custom_tr'>
                      <td>Listing Rate</td>
                      <td className='text-end'>My Token</td>
                    </tr>
                    <tr className='custom_tr'>
                      <td>Initial Market Cap (estimate)</td>
                      <td className='text-end'>My Token</td>
                    </tr>
                    <tr className='custom_tr'>
                      <td>Soft Cap</td>
                      <td className='text-end'>My Token</td>
                    </tr>
                    <tr className='custom_tr'>
                      <td>Hard Cap</td>
                      <td className='text-end'>My Token</td>
                    </tr>
                    <tr className='custom_tr'>
                      <td>Unsold Tokens</td>
                      <td className='text-end'>My Token</td>
                    </tr>
                    <tr className='custom_tr'>
                      <td>Presale Start Time</td>
                      <td className='text-end'>My Token</td>
                    </tr>
                    <tr className='custom_tr'>
                      <td>Presale End Time</td>
                      <td className='text-end'>My Token</td>
                    </tr>
                    <tr className='custom_tr'>
                      <td>Listing On</td>
                      <td className='text-end'>My Token</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>

            <div className="token_Metrics">
              <h2>Token Metrics</h2>
              <hr />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="preSale_timeDiv">
              <div className='preSale_warning'>Make sure the website is SeamlessSwap!</div>
              <div className='preSale_txt'>Presale Starts In</div>
              <div className="preSale_time">
                <div className="day">08</div>
                <div className="hour">12</div>
                <div className="min">20</div>
                <div className="sec">24</div>
              </div>
              <ProgressBar className='preSale_Progress' now={0} />
              <div className='preSale_progressValue'>
                <span>0 BNB</span>
                <span>600 BNB</span>
              </div>
              <h6 className='preSale_amountTxt'>Amount</h6>
              <input type="number" className='preSale_input' placeholder='0'/>
              <button type='button' className='preSale_btn'><FontAwesomeIcon icon={faCheck}/> Buy</button>
            </div>
            <div className="tokenDetails_right">
              <div className="token_statusDetails">
                <Table responsive="sm" style={{ fontSize: '14px' }}>
                  <tbody style={{ lineHeight: '1.5' }}>
                    <tr className='custom_tr'>
                      <td>Status</td>
                      <td className='text-end' style={{color: '#8f80ba'}}>incoming</td>
                    </tr>
                    <tr className='custom_tr'>
                      <td>Sale type</td>
                      <td className='text-end' style={{color: '#8f80ba'}}>Whitelist Only</td>
                    </tr>
                    <tr className='custom_tr'>
                      <td>Minimum Buy</td>
                      <td className='text-end'>0.1 BNB</td>
                    </tr>
                    <tr className='custom_tr'>
                      <td>Maximum Buy</td>
                      <td className='text-end'>0.5 BNB</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
export default Token