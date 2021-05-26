function dateformat (timestamp, lang) {
  const DATE_UNITS = {
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1
  }
  if(!timestamp) return 'you must pass a date as an argument'

  if(!lang) lang = 'en'
    
  const getSecDiff = time => (Date.now() - time) / 1000
  
  const getUnitAndValueDate = (secondsElapsed) => {
    for (const [unit, secondsInUnit] of Object.entries(DATE_UNITS)) {
      if (secondsElapsed >= secondsInUnit || unit === 'seconds'){
        const value = Math.floor(secondsElapsed / secondsInUnit) * -1
        return { value, unit }
      }
    }
  }
  
  const rtf = new Intl.RelativeTimeFormat(lang);
  
  const time = +(new Date(timestamp))
  
  const secondsElapsed = getSecDiff(time);
  const {value, unit} = getUnitAndValueDate(secondsElapsed)
  
  const dateformatStr = rtf.format(value, unit)
  return dateformatStr
}

module.exports.dateformat = dateformat