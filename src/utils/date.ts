export function formatJapaneseDate(dateStr: string): string {
  const date = new Date(dateStr);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  
  const numberToKanji = (num: number): string => {
    const kanjiNums = ['〇', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];
    if (num <= 10) return kanjiNums[num];
    if (num < 20) return `十${kanjiNums[num - 10]}`;
    const tens = Math.floor(num / 10);
    const ones = num % 10;
    return `${kanjiNums[tens]}十${ones === 0 ? '' : kanjiNums[ones]}`;
  };

  return `${numberToKanji(month)}月${numberToKanji(day)}日`;
}

export function formatDate(date: Date): string {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}
