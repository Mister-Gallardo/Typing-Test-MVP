export default function Debounce(func: (newVal: string) => void, delay: number) {
    let id: number;
    return (newVal: string) => {
      clearTimeout(id);
      id = setTimeout(() => func(newVal), delay);
    };
  }