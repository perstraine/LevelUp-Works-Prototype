export default function logIt(logtitle, info, dump) {

  logtitle = logtitle ?? '[COMPONENT LOG]'
  info = info ?? ''
  dump = dump ?? ''
    
  const defaultStyle = 'background:#222; color:#bada55';
  const debugStyle = 'background:Blue; color:orange';
  let style = defaultStyle;


  (logtitle === 'debug') ? style = debugStyle : style = defaultStyle
  
  console.log(`%c ${logtitle}`, style, `${info} ${dump}`) 

}

/*  Refactor - implement winston

const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple(),
  }));
}
*/