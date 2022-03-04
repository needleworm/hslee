import React, {Component} from 'react';
import './books.css';


class Books extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  drawBooks(){
    var bookSection1 = <div className="singleBookContainer">
      <img src="https://cdn.jsdelivr.net/gh/needleworm/hslee/src/images/books/covers/1.jpg" alt="book6" className="bookCoverImage"/>
      <h5>실전 민사소송법 (그림)</h5>
      <p className="bookDescription">2020.05. BOOKK(부크크)</p>
      <ul className="list-inline">
        <li><a href="https://www.aladin.co.kr/shop/wproduct.aspx?ISBN=K572639625&start=pnaver_02" target="_blank"  rel="noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/needleworm/hslee/src/images/books/stores/aladdin.png" className="bookStoreIcon" alt="aladin"/></a></li>
        <li><a href="http://pod.kyobobook.co.kr/podBook/podBookDetailView.ink?ejkGb=KOR&barcode=1400000377208" target="_blank"  rel="noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/needleworm/hslee/src/images/books/stores/kyobo.png" className="bookStoreIcon" alt="kyobo"/></a></li>
        <li><a href="https://book.naver.com/bookdb/book_detail.nhn?bid=16357665" target="_blank"  rel="noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/needleworm/hslee/src/images/books/stores/naver.png" className="bookStoreIcon" alt="naver"/></a></li>
        <li><a href="http://www.yes24.com/Product/Goods/90250538" target="_blank"  rel="noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/needleworm/hslee/src/images/books/stores/yes24.png" className="bookStoreIcon" alt="yes24"/></a></li>
      </ul>
    </div>
    
    var bookSection2 = <div className="singleBookContainer">
      <img src="https://cdn.jsdelivr.net/gh/needleworm/hslee/src/images/books/covers/2.jpg" alt="book10" className="bookCoverImage"/>
      <h5><a href="https://needleworm.github.io/101" target="_blank"  rel="noreferrer">
          101가지 컴퓨터 활용팁 <i className="fas fa-external-link-alt"></i>
        </a>
        </h5>
      <p className="bookDescription">2021.07. 생능출판사</p>
      <ul className="list-inline">
        <li><a href="https://www.aladin.co.kr/shop/wproduct.aspx?ISBN=897050494X&start=pnaver_02" target="_blank"  rel="noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/needleworm/hslee/src/images/books/stores/aladdin.png" className="bookStoreIcon" alt="aladin"/></a></li>
        <li><a href="http://www.kyobobook.co.kr/product/detailViewKor.laf?mallGb=KOR&ejkGb=KOR&linkClass=&barcode=9788970504940" target="_blank"  rel="noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/needleworm/hslee/src/images/books/stores/kyobo.png" className="bookStoreIcon" alt="kyobo"/></a></li>
        <li><a href="https://book.naver.com/bookdb/book_detail.nhn?bid=20739091" target="_blank"  rel="noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/needleworm/hslee/src/images/books/stores/naver.png" className="bookStoreIcon" alt="naver"/></a></li>
        <li><a href="http://www.yes24.com/Product/Goods/102593399" target="_blank"  rel="noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/needleworm/hslee/src/images/books/stores/yes24.png" className="bookStoreIcon" alt="yes24"/></a></li>
      </ul>
    </div>
    
    var bookSection3 = <div className="singleBookContainer">
      <img src="https://cdn.jsdelivr.net/gh/needleworm/hslee/src/images/books/covers/3.jpeg" alt="book11" className="bookCoverImage"/>
      <h5>Cheesecake Vol.1</h5>
      <p className="bookDescription">2021.10. BOOKK (부크크)</p>
      <ul className="list-inline">
        <li><a href="http://aladin.kr/p/l4o7A" target="_blank"  rel="noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/needleworm/hslee/src/images/books/stores/aladdin.png" className="bookStoreIcon" alt="aladin"/></a></li>
        <li><a href="https://book.naver.com/bookdb/book_detail.nhn?bid=21295784" target="_blank"  rel="noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/needleworm/hslee/src/images/books/stores/naver.png" className="bookStoreIcon" alt="naver"/></a></li>
        <li><a href="http://www.yes24.com/Product/Goods/105138391" target="_blank"  rel="noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/needleworm/hslee/src/images/books/stores/yes24.png" className="bookStoreIcon" alt="yes24"/></a></li>
      </ul>
    </div>

    
    var bookSection4 = <div className="singleBookContainer">
      <img src="https://cdn.jsdelivr.net/gh/needleworm/hslee/src/images/books/covers/4.jpg" alt="book8" className="bookCoverImage"/>
      <h5><a href="https://doi.org/10.979.11958612/00" target="_blank"  rel="noreferrer">
        오감 <i className="fas fa-external-link-alt"></i>
        </a>
        </h5>
      <p className="bookDescription">2016. 08. 도서출판 이온</p>
      <ul className="list-inline">
        <li><a href="https://doi.org/10.979.11958612/00" target="_blank"  rel="noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/needleworm/hslee/src/images/books/stores/seoji.png" className="bookStoreIcon" alt="aladin"/></a></li>
      </ul>
    </div>

    var bookSection5 = <div className="singleBookContainer">
      <img src="https://cdn.jsdelivr.net/gh/needleworm/hslee/src/images/books/covers/9.jpg" alt="book9" className="bookCoverImage"/>
      <h5><a href="https://doi.org/10.978.896489/5344" target="_blank"  rel="noreferrer">
          세무사 메이커, 2년 안에 세무사 합격하기 (감수) <i className="fas fa-external-link-alt"></i>
        </a>
        </h5>
      <p className="bookDescription">2015. 11. 생각나눔</p>
      <ul className="list-inline">
        <li><a href="https://doi.org/10.978.896489/5344" target="_blank"  rel="noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/needleworm/hslee/src/images/books/stores/seoji.png" className="bookStoreIcon" alt="kyobo"/></a></li>
        <li><a href="https://book.naver.com/bookdb/book_detail.nhn?bid=9820053" target="_blank"  rel="noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/needleworm/hslee/src/images/books/stores/naver.png" className="bookStoreIcon" alt="naver"/></a></li>
      </ul>
    </div>
    

    return(
      <div className="bookContainer">
        {bookSection2}
        {bookSection1}
        {bookSection3}
        {bookSection4}
        {bookSection5}
      </div>
    )
  }

  sectionTitle(){
    return(
      <div className="row">
        <div className="col-lg-12 text-center">
            <h2 className="section-heading subpageHeading">Books</h2>
        </div>
      </div>
    )
  }

  render() {
    return (
      <section id="books" className="animated bounceInDown">
          {this.sectionTitle()}
          {this.drawBooks()}
      </section>
    );
  }
}
  
export default Books;