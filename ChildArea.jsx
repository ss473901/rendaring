import { memo } from "react";

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki"
};

export const ChildArea = memo((props) => {
  const { open, onClickClose } = props;

  const date = [...Array(2000).keys()];
  date.forEach(() => {
    console.log("ChildAreaがレンダリングされた");
  });

  return (
    <>
      {open ? (
        <div style={style}>
          <p>コンポーネント</p>
          <button onClick={onClickClose}>閉じる</button>
        </div>
      ) : null}
    </>
  );
});
