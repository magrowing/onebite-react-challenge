/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useState } from 'react';

type OrderProps = {
  menu: string;
  address: string;
  request: string;
};

const nullOrder: OrderProps = {
  menu: '',
  address: '',
  request: '',
};

const OrderEditor = () => {
  const menuSelect = useRef<HTMLSelectElement>(null);
  const addressInput = useRef<HTMLInputElement>(null);
  const requestTextarea = useRef<HTMLTextAreaElement>(null);

  const [order, setOrder] = useState<OrderProps>(nullOrder);

  const handleChange = (e: React.ChangeEvent<any>) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };

  const onSubmit = () => {
    if (!order.menu) {
      menuSelect.current?.focus();
      return;
    }

    if (!order.address) {
      addressInput.current?.focus();
      return;
    }

    if (!order.request) {
      requestTextarea.current?.focus();
      return;
    }

    alert(
      `주문이 완료되었습니다.\n 메뉴 : ${order.menu}\n 주소 : ${order.address}\n 요청사항 : ${order.request}`
    );

    setOrder(nullOrder);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <h2>배달의민족 주문</h2>
      <div>
        <div style={{ marginBottom: 5, fontSize: 14 }}>메뉴 선택</div>
        <select
          ref={menuSelect}
          style={{ width: 300, padding: 5 }}
          name="menu"
          value={order.menu}
          onChange={handleChange}
        >
          <option value={''}>메뉴를 선택해주세요.</option>
          <option value={'족발'}>족발</option>
          <option value={'떡볶이'}>떡볶이</option>
          <option value={'아이스크림'}>아이스크림</option>
          <option value={'샐러드'}>샐러드</option>
        </select>
      </div>
      <div>
        <div style={{ marginBottom: 5, fontSize: 14 }}>배달 주소</div>
        <input
          ref={addressInput}
          style={{ width: 300, padding: 5 }}
          placeholder="주소) 서울특별시 xx동 .."
          name="address"
          value={order.address}
          onChange={handleChange}
        />
      </div>
      <div>
        <div style={{ marginBottom: 5, fontSize: 14 }}>배달 요청사항</div>
        <textarea
          ref={requestTextarea}
          style={{ width: 300, padding: 5 }}
          placeholder="배달 요청사항을 써 주세요..."
          name="request"
          value={order.request}
          onChange={handleChange}
        />
      </div>
      <div>
        <button onClick={onSubmit} style={{ width: 300, padding: 5 }}>
          주문 완료
        </button>
      </div>
    </div>
  );
};

export default OrderEditor;
