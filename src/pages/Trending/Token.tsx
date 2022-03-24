import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../../assets/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactPaginate from 'react-paginate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { library, } from '@fortawesome/fontawesome-svg-core'
// import { faFacebook, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faChartLine, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import { Table } from 'react-bootstrap';

import img1 from '../../assets/images/seamless_icon/Bitgert.png'
import img2 from '../../assets/images/seamless_icon/BUNNY.png'
import img3 from '../../assets/images/seamless_icon/CryptoMines.png'
import img4 from '../../assets/images/seamless_icon/Galeon.webp'
import img5 from '../../assets/images/seamless_icon/HobbsNetworkToken.jpeg'
import img6 from '../../assets/images/seamless_icon/Libero_Financial.jpg'
import img7 from '../../assets/images/seamless_icon/Darwinia_Network.png'
import img8 from '../../assets/images/seamless_icon/SAFEMOON.png'
import img9 from '../../assets/images/seamless_icon/Safuu.png'
import img10 from '../../assets/images/seamless_icon/Titano.png'




const Token: React.FC = () => {
  const [loading, setLoading] = useState(true)
  const [pooAPI, setPooAPI] = useState([])
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 5

  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img1, img2]

  // ================================================= GET API Start =====================================================
  useEffect(() => {


    // setInterval(() => {
      const config = {
        headers: {
          "Content-Type": "application/json"
        }

      }

      axios.get("https://anandisha.com/seamless/admin/api/getCoin", config).then(res => {
        setLoading(false)
         console.log("res data", res.data.data)

         
         setPooAPI(res.data.data)
      
      }).catch(err => {
        console.log("err", err)
      })
     
    // }, 5000)

  }, [])

 
  let tokens
  
  if(pooAPI === undefined || pooAPI === null){
      tokens = []
     
  }else{
     tokens = Object.values(pooAPI);
  }
 
  

  // ================================================= GET API End =====================================================

  // ===============Get Current token================

 
  useEffect(() => {
  const endOffset = itemOffset + itemsPerPage;

  const currentTokens:any = tokens.slice(itemOffset, endOffset)
  

  setCurrentItems(currentTokens);
  // console.log("currentTokens", currentTokens)
 
  setPageCount(Math.ceil(tokens.length / itemsPerPage));
  
}, [itemOffset, tokens]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % tokens.length;
    setItemOffset(newOffset);
    
  }


  return (
    <>
      <div className="trendingDiv_top d-none">
        {/* <h1 className='token_H1'>Trending</h1> */}
        <ul>
          <li className='token_H1'>Trending</li>
          <li><span style={{ color: '#f6d775' }}>#1</span> demo</li>
          <li><span style={{ color: '#f6d775' }}>#2</span>  demo</li>
          <li><span style={{ color: '#f6d775' }}>#3</span>  demo</li>
          <li><span style={{ color: '#f6d775' }}>#4</span>  demo</li>
          <li><span style={{ color: '#f6d775' }}>#5</span>  demo</li>
          <li><span style={{ color: '#f6d775' }}>#6</span>  demo</li>
          <li><span style={{ color: '#f6d775' }}>#7</span>  demo</li>
          <li><span style={{ color: '#f6d775' }}>#8</span>  demo</li>
          <li><span style={{ color: '#f6d775' }}>#9</span>  demo</li>
          <li><span style={{ color: '#f6d775' }}>#10</span> demo</li>
        </ul>
      </div>

      {/* Main section of Trending Component */}
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="trendingList_Div">
              <div className="trendingList_Head mb-4">
                <h1><FontAwesomeIcon icon={faChartLine} /> Trending List</h1>

              </div>
              <div className="trendingList_table">
                <Table responsive="sm" style={{ fontSize: '14px', color: "#ffc600" }}>
                  <thead>
                    <tr>
                      <th style={{width: "50px" }}><span style={{visibility: "hidden" }}>.</span></th>
                      <th scope="col" style={{width: "50px" }}># </th>
                      <th scope="col" style={{ paddingLeft: "47px", width: "200px" }}>Name</th>
                      <th scope="col" style={{width: "250px" }}>Price (USD)</th>
                      <th className='mob-display' scope="col" style={{width: "200px"}}>Total Supply</th>
                      <th className='mob-display' scope="col" style={{width: "200px"}}>Market Cap</th>
                      {/* <th scope="col">Volume(24h)</th>
                      <th scope="col">Last 7 Days</th> */}
                    </tr>
                  </thead>
                  <tbody>
                    {loading ?
                      <tr className='loader text-center'>

                        <td colSpan={6}><FontAwesomeIcon icon={faSpinner} className="spinner" /></td>
                      </tr>
                      :
                     
                          currentItems.map(({ id, name, quote, max_supply, total_supply }: any, index) => {
                            return (
                              <tr key={id}>
                                <td><span style={{ display: "none" }}>.</span><FontAwesomeIcon icon={faStar} /></td>
                                <td>{index + itemOffset + 1}</td>
                                <td className='d-flex'>
                                  <img src={images[index]} alt="img" className='token_img img-fluid' />
                                  <p className='name'>{name}</p>
                                </td>
                                <td>{quote.USD.price}</td>
                                <td className='mob-display'>{max_supply === null ? total_supply : max_supply} </td>
                                <td className='mob-display'>{quote.USD.fully_diluted_market_cap}</td>
                              </tr>
                            )
                          })
                   
                    
                    }


                  </tbody>
                </Table>
               
              </div>
              <div className="paginate">
              <ReactPaginate
                  breakLabel="..."
                  nextLabel=" >>"
                  onPageChange={handlePageClick}
                  pageRangeDisplayed={3}
                  marginPagesDisplayed={2}
                  pageCount={pageCount}
                  previousLabel="<< "
                  containerClassName='pagination justify-content-end'
                  pageClassName='page-item'
                  pageLinkClassName='page-link'
                  previousClassName='page-item'
                  previousLinkClassName='page-link'
                  nextClassName='page-item'
                  nextLinkClassName='page-link'
                  breakClassName='page-item'
                  breakLinkClassName='page-link'
                  activeClassName='active'
                  
                />
                </div>
            </div>
          </div>
        </div>
      </div>

     
    </>
  )
}
export default Token