import React from "react";
import { choice1, choice2, choice3, choice4 } from "../assets/img";

const Card2 = () => {
  return (
    <div className="reason-container">
      <h2 className="reason-title">
        <span role="img" aria-label="thumbs-up">
          👍
        </span>{" "}
        현대해상을 선택해야 하는 이유
      </h2>
      <ul className="reason-list">
        <li className="reason-item">
          <img src={choice1} alt="출생부터 성장단계 보장" />
          <p>
            출생부터 성장단계별 <br />
            주요위험에 대한 집중 보장
          </p>
        </li>
        <li className="reason-item">
          <img src={choice2} alt="3대 질병 수술 보장" />
          <p>
            3대 질병은 물론 <br />
            120대 질병수술 보장
          </p>
        </li>
        <li className="reason-item">
          <img src={choice3} alt="태아 및 자녀 보장" />
          <p>
            태아 및 자녀 보장은 물론 <br />
            산모와 부양자까지 보장
          </p>
        </li>
        <li className="reason-item">
          <img src={choice4} alt="납입 면제료" />
          <p>
            보장보험료 납입면제로 <br />
            보험료 부담 감소
          </p>
        </li>
      </ul>
      <div className="reason-footer">
        ※ 위 내용은 요약된 내용이므로, 가입 전에 반드시 현대해상 해당 상품의
        약관 및 설명서를 확인하시기 바랍니다.
      </div>
    </div>
  );
};

export default Card2;
