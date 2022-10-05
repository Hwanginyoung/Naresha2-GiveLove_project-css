import React from "react";
import "./DonateGoods.css";

import Donateheader from "../components/Donateheader";
import Inventory from "./Inventory";
import CollectionMethod from "./CollectionMethod";

function DonateGoods() {
  return (
    <>
        <Donateheader />
        <div id="donategoods">
          <div id="userinfo">
            <div id="text">기부자 정보</div>
            <div class="info">
              <div>기부자명 </div>
              <input></input> 
            </div> 
            <div class="info">
              <div>생년월일 </div>
              <input placeholder="ex) 19980101"></input> 
            </div>
            <div class="info">
              <div>전화번호 </div>
              <input placeholder="ex) 01012345678"></input> 
              <p id="numtext">‘-’ 를 제외한 숫자만 입력해 주세요.</p>
            </div>
          </div>
          
          <div id="donation">
            <div id="text">물품 기증</div>
            <p class="exp">기부할 물품 목록(1개 이상)</p>
            <Inventory />
            <p class="exp">수거방법</p>
            <CollectionMethod />
            <p class="exp">주소</p>
            
          </div>
          <button>기부하기</button>
        </div>
    </>
  );
}

export default DonateGoods;