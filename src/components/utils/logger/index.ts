/* eslint-disable no-console */
import format from 'date-fns/format';

const DATE_TIME = format(new Date(), 'yyyy-MM-dd HH:MM:ss');

class Logger {
  static trace = console.trace.bind(window.console, `TRACE - ${DATE_TIME} -`);

  static info = console.info.bind(window.console, `INFO - ${DATE_TIME} -`);

  static debug = console.debug.bind(window.console, `DEBUG - ${DATE_TIME} -`);

  static warn = console.warn.bind(window.console, `WARN - ${DATE_TIME} -`);

  static error = console.error.bind(window.console, `ERROR - ${DATE_TIME} -`);
}

export { Logger };
