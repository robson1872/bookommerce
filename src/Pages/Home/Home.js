import React ,{useState} from 'react'

import Nav from '../../Components/Nav/Nav'
import Card from '../../Components/Card/Card'
import Modal from '../../Components/Modal/Modal'

function Home() {
  const [isModalOpen, setModalOpen] = useState(false)
  function openModal(){
    setModalOpen(true)
    }

    function closeModal(){
        setModalOpen(false)
    }
  return (
    <>
    <Nav openModal = {openModal}/>

    <section className= "input-section">
        <form>
            <h1>Pesquisar livros</h1>
            <div className='form-inputs'>
                <input type = "text" placeholder="Pesquisar por nome do livro"/>
                <input type = "number" min = "0" placeholder="Preço máximo"/>
            </div>
        </form>
    </section>
    
    <section className= "products-section">
        <div className='products-container'>
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    </section>
        {isModalOpen ? <Modal closeModal = {closeModal}/> : null}
    </>
  )
}

export default Home