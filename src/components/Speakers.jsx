import React from 'react'
import "../styles/speakers.css"

const Speakers = () => {
  return (
    <section className='speakers' id='speakers'>
        <div className="speakers__title__container">
            <h1 className="title__speakers">Спікери</h1>
        </div>
        <div className="speakers__container">
            <div className="speakers__content__img">
                <div className="speakers__img1 speakers__img"></div>
                <div className="speakers__txt">
                    <h3>Ярослав Виклюк</h3>
                    <h4>Доктор технічних наук, професор кафедри СШІ</h4>
                </div>
            </div>
            <div className="speakers__content__txt">
                <div className="speakers__txt__end">
                    <h3>Засоба Євген</h3>
                    <h4>CTO at Somatic</h4>
                </div>
                <div className="speakers__img2 speakers__img"></div>
                <div className="speakers__txt__adaptive">
                    <h3>Засоба Євген</h3>
                    <h4>CTO at Somatic</h4>
                </div>
            </div>
            <div className="speakers__content__img">
                <div className="speakers__img3 speakers__img"></div>
                <div className="speakers__txt">
                    <h3>Анастасія Артушевська</h3>
                    <h4>Lead Editor DOU</h4>
                </div>
            </div>
            <div className="speakers__content__txt">
                <div className="speakers__txt__end">
                    <h3>Сивоконь Олексій</h3>
                    <h4>Principal Applied Scientist, Microsoft</h4>
                </div>
                <div className="speakers__img4 speakers__img"></div>
                <div className="speakers__txt__adaptive">
                    <h3>Сивоконь Олексій</h3>
                    <h4>Principal Applied Scientist, <br /> Microsoft</h4>
                </div>
            </div>
            <div className="speakers__content__img">
                <div className="speakers__img5 speakers__img"></div>
                <div className="speakers__txt">
                    <h3>Шаховська Христина</h3>
                    <h4>Data Scientist, N-iX</h4>
                </div>
            </div>
            <div className="speakers__content__txt">
                <div className="speakers__txt__end">
                    <h3>Шамуратов Олексій </h3>
                    <h4>Data engineer, Brainstack</h4>
                </div>
                <div className="speakers__img6 speakers__img"></div>
                <div className="speakers__txt__adaptive">
                    <h3>Шамуратов Олексій </h3>
                    <h4>Data engineer, Brainstack</h4>
                </div>
            </div>
            <div className="speakers__content__img">
                <div className="speakers__img7 speakers__img"></div>
                <div className="speakers__txt">
                    <h3>Мартьянов Дмитро</h3>
                    <h4>COO at Pecode OU</h4>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Speakers
