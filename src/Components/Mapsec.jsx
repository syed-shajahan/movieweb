import React, { useEffect, useState } from 'react'
import ModalComponent from './ModalComponent'
import { Form, FormControl } from 'react-bootstrap'
import Nofound from './Nofound'
import Saddy from '../assets/img/saddy.jpg'
import Cardsbone from './Cardsbone'
import Gotimg from './Gotimg'

const Mapsec = () => {
  const [modalData, SetModaldata] = useState([])
  const [data, SetData] = useState([])
  const [modalShow, setModalShow] = React.useState(false)
  const [query, setQuery] = useState('')
  const [isLoding, setIsLoding] = useState(false)

  const [loadMore, setLoadMore] = useState(8)

  useEffect(() => {
    setIsLoding(true)
    fetch(
      'https://api.themoviedb.org/3/trending/all/day?api_key=7b6d93da90c725dd57c0b15ad689e502',
    )
      .then((res) => {
        return res.json()
      })
      .then((secres) => {
        SetData(secres.results)
        setIsLoding(false)
      })
  }, [])

  const handleImageClick = (gotdata) => {
    SetModaldata(gotdata)
    setModalShow(true)
  }

  const searchDataMovies = async (e) => {
    e.preventDefault()
    setQuery(e.target.value)
    try {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=bcc4ff10c2939665232d75d8bf0ec093&query=${query}`
      const data = await fetch(url)
      const response = await data.json()
      SetData(response.results)
    } catch (e) {
      console.log(e, 'no found')
    }
  }

  const handleLoad = () => {
    setLoadMore(loadMore + 4)
  }

  return (
    <>
      <div>
        <div
          style={{
            maxWidth: '800px',
            width: '90%',
            margin: ' 20px auto',
            position: 'sticky',
            top: '0px ',
            zIndex: '9999',
            overflow: 'hidden',
            borderRadius: '25px',
          }}
        >
          <Form
            inline
            className="d-flex jsutofy-content-center align-items-center"
          >
            <FormControl
              type="text"
              placeholder="Search for Movies & TV Shows"
              className="mr-sm-2"
              value={query}
              onChange={searchDataMovies}
            />
          </Form>
        </div>

        {/* { search bar starts here } */}

        <div className="container-fluid py-3">
          <h3 className="mb-4 text-light">
            <span
              style={{ fontSize: '14px', color: '#eee', fontWeight: '400' }}
            >
              Showing result for:
            </span>{' '}
            {query}
          </h3>
          <div className="row">
            {isLoding ? (
              <Cardsbone cards={12} title="helloL" />
            ) : (
              <>
                {data.length > 0 ? (
                  data?.slice(0, loadMore).map((gotdata) => {
                    console.log(gotdata)
                    return (
                      <div className="col-xl-3 col-lg-4  col-md-6 col-sm-12">
                        <div
                          className="w-100 wrap_bx"
                          key={gotdata.id}
                          onClick={() => handleImageClick(gotdata)}
                        >
                          <div className="img-fluid">

                            {gotdata.poster_path ? (
                           <img
                           src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${gotdata.poster_path}}`}
                           alt=""
                         />
                            ) : (
                              <img src={Saddy} alt="" />
                            )}
                          </div>
                          <b className="titletxt">
                            {gotdata.title} {gotdata.name}
                          </b>
                          <p className="overviewtext">{gotdata.overview}</p>
                        </div>
                      </div>
                    )
                  })
                ) : (
                  <Nofound />
                )}
              </>
            )}
          </div>
          {data.length > loadMore ? (
            <button
              style={{
                backgroundColor: '#fff',
                color: '#000',
                padding: '15px 30px',
                maxWidth: '200px',
                textAlign: 'center',
                margin: '0px auto 20px',
                display: 'block',
                borderRadius: '25px',
                border: 'none',
                outline: 'none',
              }}
              onClick={handleLoad}
            >
              Load more
            </button>
          ) : (
            <p
              style={{
                color: '#fff',
                textAlign: 'center',
                margin: '20px 0px',
              }}
            >
              You will scroll for life, I think.
            </p>
          )}
        </div>
      </div>

      <ModalComponent
        show={modalShow}
        getModalData={modalData}
        onHide={() => setModalShow(false)}
      />
    </>
  )
}

export default Mapsec
