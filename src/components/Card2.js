import React from 'react';
import { choice1, choice2, choice3, choice4 } from '../assets/img';

const Card2 = () => {
  return (
    <div className="reason-container">
      <h2 className="reason-title">
        <span role="img" aria-label="thumbs-up">
          💰
        </span>{' '}
        <br />
        엄마! 아빠! 이왕 모아주실거면 <br />
        달러로 모아주세요~
      </h2>
      <span className="reason-why">달러보험의 장점은 무엇일까요?</span>
      <ul className="reason-list">
        <li className="reason-item">
          <img src={choice1} alt="출생부터 성장단계 보장" />
          <p>
            글로벌하게 통용되는 화폐로 <br />
            미래 자금을 안전하게 모아주세요.
          </p>
        </li>
        <li className="reason-item">
          <img src={choice2} alt="3대 질병 수술 보장" />
          <p>
            달러의 가치를 고려할 때 <br />
            환율 수익도 기대할 수 있습니다.
          </p>
        </li>
        <li className="reason-item">
          <img src={choice3} alt="태아 및 자녀 보장" />
          <p>
            해외 유학이나 이주 계획이 있다면, <br />
            달러는 큰 도움이 될 것입니다.
          </p>
        </li>
        <li className="reason-item">
          <img src={choice4} alt="납입 면제료" />
          <p>
            달러는 안정적으로 <br />
            상속/증여 할 수 있는 좋은 방법입니다.
          </p>
        </li>
      </ul>
      <div className="reason-footer">
        ※ 위 내용은 요약된 내용이므로, 가입 전에 반드시 <br />
        메트라이프 해당 상품의 약관 및 설명서를 확인하시기 바랍니다.
      </div>
    </div>
  );
};

export default Card2;
