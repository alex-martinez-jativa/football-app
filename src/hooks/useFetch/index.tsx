import * as React from "react";

interface IProps {
  callback: () => {};
}

interface State {
    data: 
}

const useFetch: React.FC<T> = ({ callback }): any => {
  const [data, setData] = React.useState<T | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<boolean>(false);

  React.useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await callback();
        setData(res);
        setLoading(false);
      } catch (err) {
        setError(true);
      }
    })();
  }, []);

  return { data, error, loading };
};

export default useFetch;
