const dataLength = 100000;

const pushAndReverse = (): number[] => {
    const arr: number[] = [];
    for (let i = 0; i < dataLength; i++) {
      arr.push(i);
    }
    arr.reverse();
  
    return arr;
  };
  
  const unShifting = (): number[] => {
    const arr: number[] = [];
    for (let i = 0; i < dataLength; i++) {
      arr.unshift(i);
    }
    return arr;
  };
  
  function measureTimeToExecute(fn: () => any): number {
    const start = performance.now();
    fn();
    const end = performance.now();
    return end - start;
  }
  
  function repeatExecute(cb: () => number, label: string): number {
    const results: number[] = [];
    console.time(label);
    for (let i = 0; i < 100; i++) {
      const result = cb();
      results.push(result);
    }
    console.timeEnd(label);
  
    return results.reduce((accu, curr) => accu + curr) / 100;
  }
  
  const unShiftingRes = repeatExecute(
    () => measureTimeToExecute(unShifting),
    'unshifting: '
  );
  console.log(unShiftingRes);
  
  const pushandReverseRes = repeatExecute(
    () => measureTimeToExecute(pushAndReverse),
    'push & reverse: '
  );
  console.log(pushandReverseRes);
  