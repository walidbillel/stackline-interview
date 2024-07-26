const formatDate = (date: string) => {
  const dateObj = new Date(date);

  const month = dateObj.getMonth() + 1;
  const day = dateObj.getDate();
  const year = dateObj.getFullYear().toString().slice(-2);

  return `${month}-${day}-${year}`;
};

export default formatDate;
