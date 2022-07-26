
export const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = date.getMonth() < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
  const day = date.getDate() < 10 ? `0${date.getDate() + 1}` : date.getDate() + 1
  console.log(day);
  
  return `${year}.${month}.${day}` 
}
