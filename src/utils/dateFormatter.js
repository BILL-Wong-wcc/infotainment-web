export const formatLocalDateTime = (type = 'date', currentLng) => {
  const now = new Date();
  
  let locale = currentLng;
  if (currentLng === 'zh-CN') locale = 'zh-CN';
  if (currentLng === 'zh-TW') locale = 'zh-TW';
  if (currentLng === 'en') locale = 'en-US';

  let options = {};
  
  if (type === 'date') {
    options = {
      year: 'numeric',
      month: 'short',
      day: '2-digit'
    };
  } else if (type === 'time') {
    options = {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    };
  }

  return new Intl.DateTimeFormat(locale, options).format(now);
};