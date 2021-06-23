import useSWR from "swr";

let globalCount = 0;

export function useCounter() {
  const { data, mutate } = useSWR("state", () => globalCount);

  return {
    count: data || 0,
    mutate: (count: number) => {
      globalCount = count;
      mutate();
    }
  };
}

export function DisplayCounter() {
  const { count } = useCounter();

  return <div>display count: {count}</div>;
}

function Counter() {
  const { count, mutate } = useCounter();

  const handleInc = () => mutate(count + 1);
  const handleDec = () => mutate(count - 1);

  return (
    <div>
      <div>count: {count}</div>
      <div>
        <button onClick={handleInc}>증가</button>
        <button onClick={handleDec}>감소</button>
      </div>
    </div>
  );
}

export default Counter;
