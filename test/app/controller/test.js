{
  _readableState: ReadableState {
    objectMode: false,
    highWaterMark: 16384,
    buffer: BufferList {
      head: null,
      tail: null,
      length: 0
    },
    length: 0,
    pipes: null,
    pipesCount: 0,
    flowing: null,
    ended: true,
    endEmitted: false,
    reading: false,
    sync: true,
    needReadable: false,
    emittedReadable: true,
    readableListening: false,
    resumeScheduled: false,
    defaultEncoding: 'utf8',
    ranOut: false,
    awaitDrain: 0,
    readingMore: true,
    decoder: null,
    encoding: null
  },
  readable: true,
  domain: null,
  _events: {},
  _eventsCount: 0,
  _maxListeners: undefined,
  socket: Socket {
    connecting: false,
    _hadError: false,
    _handle: TCP {
      bytesRead: 484,
      _externalStream: {},
      fd: -1,
      reading: true,
      owner: [Circular],
      onread: [Function: onread],
      onconnection: null,
      writeQueueSize: 0
    },
    _parent: null,
    _host: null,
    _readableState: ReadableState {
      objectMode: false,
      highWaterMark: 16384,
      buffer: [Object],
      length: 0,
      pipes: null,
      pipesCount: 0,
      flowing: true,
      ended: false,
      endEmitted: false,
      reading: true,
      sync: false,
      needReadable: true,
      emittedReadable: false,
      readableListening: false,
      resumeScheduled: false,
      defaultEncoding: 'utf8',
      ranOut: false,
      awaitDrain: 0,
      readingMore: false,
      decoder: null,
      encoding: null
    },
    readable: true,
    domain: null,
    _events: {
      end: [Object],
      finish: [Function: onSocketFinish],
      _socketEnd: [Function: onSocketEnd],
      drain: [Object],
      timeout: [Function],
      error: [Object],
      close: [Object],
      data: [Function: socketOnData],
      resume: [Function: onSocketResume],
      pause: [Function: onSocketPause]
    },
    _eventsCount: 10,
    _maxListeners: undefined,
    _writableState: WritableState {
      objectMode: false,
      highWaterMark: 16384,
      needDrain: false,
      ending: false,
      ended: false,
      finished: false,
      decodeStrings: false,
      defaultEncoding: 'utf8',
      length: 0,
      writing: false,
      corked: 0,
      sync: true,
      bufferProcessing: false,
      onwrite: [Function],
      writecb: null,
      writelen: 0,
      bufferedRequest: null,
      lastBufferedRequest: null,
      pendingcb: 0,
      prefinished: false,
      errorEmitted: false,
      bufferedRequestCount: 0,
      corkedRequestsFree: [Object]
    },
    writable: true,
    allowHalfOpen: true,
    destroyed: false,
    _bytesDispatched: 0,
    _sockname: null,
    _pendingData: null,
    _pendingEncoding: '',
    server: Server {
      domain: null,
      _events: [Object],
      _eventsCount: 2,
      _maxListeners: undefined,
      _connections: 1,
      _handle: [Object],
      _usingSlaves: false,
      _slaves: [],
      _unref: false,
      allowHalfOpen: true,
      pauseOnConnect: false,
      httpAllowHalfOpen: false,
      timeout: 120000,
      _pendingResponseData: 0,
      _connectionKey: '4:null:7001'
    },
    _server: Server {
      domain: null,
      _events: [Object],
      _eventsCount: 2,
      _maxListeners: undefined,
      _connections: 1,
      _handle: [Object],
      _usingSlaves: false,
      _slaves: [],
      _unref: false,
      allowHalfOpen: true,
      pauseOnConnect: false,
      httpAllowHalfOpen: false,
      timeout: 120000,
      _pendingResponseData: 0,
      _connectionKey: '4:null:7001'
    },
    _idleTimeout: 120000,
    _idleNext: TimersList {
      _idleNext: [Circular],
      _idlePrev: [Circular],
      _timer: [Object],
      _unrefed: true,
      msecs: 120000
    },
    _idlePrev: TimersList {
      _idleNext: [Circular],
      _idlePrev: [Circular],
      _timer: [Object],
      _unrefed: true,
      msecs: 120000
    },
    _idleStart: 22499,
    parser: HTTPParser {
      '0': [Function: parserOnHeaders],
      '1': [Function: parserOnHeadersComplete],
      '2': [Function: parserOnBody],
      '3': [Function: parserOnMessageComplete],
      '4': [Function: onParserExecute],
      _headers: [],
      _url: '',
      _consumed: true,
      socket: [Circular],
      incoming: [Circular],
      outgoing: null,
      maxHeaderPairs: 2000,
      onIncoming: [Function: parserOnIncoming]
    },
    on: [Function: socketOnWrap],
    _paused: false,
    read: [Function],
    _consuming: true,
    _httpMessage: ServerResponse {
      domain: null,
      _events: [Object],
      _eventsCount: 2,
      _maxListeners: undefined,
      output: [],
      outputEncodings: [],
      outputCallbacks: [],
      outputSize: 0,
      writable: true,
      _last: false,
      chunkedEncoding: false,
      shouldKeepAlive: true,
      useChunkedEncodingByDefault: true,
      sendDate: true,
      _removedHeader: {},
      _contentLength: null,
      _hasBody: true,
      _trailer: '',
      finished: false,
      _headerSent: false,
      socket: [Circular],
      connection: [Circular],
      _header: null,
      _headers: null,
      _headerNames: {},
      _onPendingData: [Function: updateOutgoingData],
      statusCode: 404,
      __onFinished: [Object]
    }
  },
  connection: Socket {
    connecting: false,
    _hadError: false,
    _handle: TCP {
      bytesRead: 484,
      _externalStream: {},
      fd: -1,
      reading: true,
      owner: [Circular],
      onread: [Function: onread],
      onconnection: null,
      writeQueueSize: 0
    },
    _parent: null,
    _host: null,
    _readableState: ReadableState {
      objectMode: false,
      highWaterMark: 16384,
      buffer: [Object],
      length: 0,
      pipes: null,
      pipesCount: 0,
      flowing: true,
      ended: false,
      endEmitted: false,
      reading: true,
      sync: false,
      needReadable: true,
      emittedReadable: false,
      readableListening: false,
      resumeScheduled: false,
      defaultEncoding: 'utf8',
      ranOut: false,
      awaitDrain: 0,
      readingMore: false,
      decoder: null,
      encoding: null
    },
    readable: true,
    domain: null,
    _events: {
      end: [Object],
      finish: [Function: onSocketFinish],
      _socketEnd: [Function: onSocketEnd],
      drain: [Object],
      timeout: [Function],
      error: [Object],
      close: [Object],
      data: [Function: socketOnData],
      resume: [Function: onSocketResume],
      pause: [Function: onSocketPause]
    },
    _eventsCount: 10,
    _maxListeners: undefined,
    _writableState: WritableState {
      objectMode: false,
      highWaterMark: 16384,
      needDrain: false,
      ending: false,
      ended: false,
      finished: false,
      decodeStrings: false,
      defaultEncoding: 'utf8',
      length: 0,
      writing: false,
      corked: 0,
      sync: true,
      bufferProcessing: false,
      onwrite: [Function],
      writecb: null,
      writelen: 0,
      bufferedRequest: null,
      lastBufferedRequest: null,
      pendingcb: 0,
      prefinished: false,
      errorEmitted: false,
      bufferedRequestCount: 0,
      corkedRequestsFree: [Object]
    },
    writable: true,
    allowHalfOpen: true,
    destroyed: false,
    _bytesDispatched: 0,
    _sockname: null,
    _pendingData: null,
    _pendingEncoding: '',
    server: Server {
      domain: null,
      _events: [Object],
      _eventsCount: 2,
      _maxListeners: undefined,
      _connections: 1,
      _handle: [Object],
      _usingSlaves: false,
      _slaves: [],
      _unref: false,
      allowHalfOpen: true,
      pauseOnConnect: false,
      httpAllowHalfOpen: false,
      timeout: 120000,
      _pendingResponseData: 0,
      _connectionKey: '4:null:7001'
    },
    _server: Server {
      domain: null,
      _events: [Object],
      _eventsCount: 2,
      _maxListeners: undefined,
      _connections: 1,
      _handle: [Object],
      _usingSlaves: false,
      _slaves: [],
      _unref: false,
      allowHalfOpen: true,
      pauseOnConnect: false,
      httpAllowHalfOpen: false,
      timeout: 120000,
      _pendingResponseData: 0,
      _connectionKey: '4:null:7001'
    },
    _idleTimeout: 120000,
    _idleNext: TimersList {
      _idleNext: [Circular],
      _idlePrev: [Circular],
      _timer: [Object],
      _unrefed: true,
      msecs: 120000
    },
    _idlePrev: TimersList {
      _idleNext: [Circular],
      _idlePrev: [Circular],
      _timer: [Object],
      _unrefed: true,
      msecs: 120000
    },
    _idleStart: 22499,
    parser: HTTPParser {
      '0': [Function: parserOnHeaders],
      '1': [Function: parserOnHeadersComplete],
      '2': [Function: parserOnBody],
      '3': [Function: parserOnMessageComplete],
      '4': [Function: onParserExecute],
      _headers: [],
      _url: '',
      _consumed: true,
      socket: [Circular],
      incoming: [Circular],
      outgoing: null,
      maxHeaderPairs: 2000,
      onIncoming: [Function: parserOnIncoming]
    },
    on: [Function: socketOnWrap],
    _paused: false,
    read: [Function],
    _consuming: true,
    _httpMessage: ServerResponse {
      domain: null,
      _events: [Object],
      _eventsCount: 2,
      _maxListeners: undefined,
      output: [],
      outputEncodings: [],
      outputCallbacks: [],
      outputSize: 0,
      writable: true,
      _last: false,
      chunkedEncoding: false,
      shouldKeepAlive: true,
      useChunkedEncodingByDefault: true,
      sendDate: true,
      _removedHeader: {},
      _contentLength: null,
      _hasBody: true,
      _trailer: '',
      finished: false,
      _headerSent: false,
      socket: [Circular],
      connection: [Circular],
      _header: null,
      _headers: null,
      _headerNames: {},
      _onPendingData: [Function: updateOutgoingData],
      statusCode: 404,
      __onFinished: [Object]
    }
  },
  httpVersionMajor: 1,
  httpVersionMinor: 1,
  httpVersion: '1.1',
  complete: true,
  headers: {
    host: '127.0.0.1:7001',
    connection: 'keep-alive',
    'cache-control': 'max-age=0',
    'upgrade-insecure-requests': '1',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36',
    accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
    'accept-encoding': 'gzip, deflate, br',
    'accept-language': 'zh-CN,zh;q=0.8',
    cookie: 'csrfToken=ZK5bIyCz0oQXpHICSLzPaqWe'
  },
  rawHeaders: ['Host',
    '127.0.0.1:7001',
    'Connection',
    'keep-alive',
    'Cache-Control',
    'max-age=0',
    'Upgrade-Insecure-Requests',
    '1',
    'User-Agent',
    'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36',
    'Accept',
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
    'Accept-Encoding',
    'gzip, deflate, br',
    'Accept-Language',
    'zh-CN,zh;q=0.8',
    'Cookie',
    'csrfToken=ZK5bIyCz0oQXpHICSLzPaqWe'
  ],
  trailers: {},
  rawTrailers: [],
  upgrade: false,
  url: '/api/authrule/list?aa=sf&gdsag=as',
  method: 'GET',
  statusCode: null,
  statusMessage: null,
  client: Socket {
    connecting: false,
    _hadError: false,
    _handle: TCP {
      bytesRead: 484,
      _externalStream: {},
      fd: -1,
      reading: true,
      owner: [Circular],
      onread: [Function: onread],
      onconnection: null,
      writeQueueSize: 0
    },
    _parent: null,
    _host: null,
    _readableState: ReadableState {
      objectMode: false,
      highWaterMark: 16384,
      buffer: [Object],
      length: 0,
      pipes: null,
      pipesCount: 0,
      flowing: true,
      ended: false,
      endEmitted: false,
      reading: true,
      sync: false,
      needReadable: true,
      emittedReadable: false,
      readableListening: false,
      resumeScheduled: false,
      defaultEncoding: 'utf8',
      ranOut: false,
      awaitDrain: 0,
      readingMore: false,
      decoder: null,
      encoding: null
    },
    readable: true,
    domain: null,
    _events: {
      end: [Object],
      finish: [Function: onSocketFinish],
      _socketEnd: [Function: onSocketEnd],
      drain: [Object],
      timeout: [Function],
      error: [Object],
      close: [Object],
      data: [Function: socketOnData],
      resume: [Function: onSocketResume],
      pause: [Function: onSocketPause]
    },
    _eventsCount: 10,
    _maxListeners: undefined,
    _writableState: WritableState {
      objectMode: false,
      highWaterMark: 16384,
      needDrain: false,
      ending: false,
      ended: false,
      finished: false,
      decodeStrings: false,
      defaultEncoding: 'utf8',
      length: 0,
      writing: false,
      corked: 0,
      sync: true,
      bufferProcessing: false,
      onwrite: [Function],
      writecb: null,
      writelen: 0,
      bufferedRequest: null,
      lastBufferedRequest: null,
      pendingcb: 0,
      prefinished: false,
      errorEmitted: false,
      bufferedRequestCount: 0,
      corkedRequestsFree: [Object]
    },
    writable: true,
    allowHalfOpen: true,
    destroyed: false,
    _bytesDispatched: 0,
    _sockname: null,
    _pendingData: null,
    _pendingEncoding: '',
    server: Server {
      domain: null,
      _events: [Object],
      _eventsCount: 2,
      _maxListeners: undefined,
      _connections: 1,
      _handle: [Object],
      _usingSlaves: false,
      _slaves: [],
      _unref: false,
      allowHalfOpen: true,
      pauseOnConnect: false,
      httpAllowHalfOpen: false,
      timeout: 120000,
      _pendingResponseData: 0,
      _connectionKey: '4:null:7001'
    },
    _server: Server {
      domain: null,
      _events: [Object],
      _eventsCount: 2,
      _maxListeners: undefined,
      _connections: 1,
      _handle: [Object],
      _usingSlaves: false,
      _slaves: [],
      _unref: false,
      allowHalfOpen: true,
      pauseOnConnect: false,
      httpAllowHalfOpen: false,
      timeout: 120000,
      _pendingResponseData: 0,
      _connectionKey: '4:null:7001'
    },
    _idleTimeout: 120000,
    _idleNext: TimersList {
      _idleNext: [Circular],
      _idlePrev: [Circular],
      _timer: [Object],
      _unrefed: true,
      msecs: 120000
    },
    _idlePrev: TimersList {
      _idleNext: [Circular],
      _idlePrev: [Circular],
      _timer: [Object],
      _unrefed: true,
      msecs: 120000
    },
    _idleStart: 22499,
    parser: HTTPParser {
      '0': [Function: parserOnHeaders],
      '1': [Function: parserOnHeadersComplete],
      '2': [Function: parserOnBody],
      '3': [Function: parserOnMessageComplete],
      '4': [Function: onParserExecute],
      _headers: [],
      _url: '',
      _consumed: true,
      socket: [Circular],
      incoming: [Circular],
      outgoing: null,
      maxHeaderPairs: 2000,
      onIncoming: [Function: parserOnIncoming]
    },
    on: [Function: socketOnWrap],
    _paused: false,
    read: [Function],
    _consuming: true,
    _httpMessage: ServerResponse {
      domain: null,
      _events: [Object],
      _eventsCount: 2,
      _maxListeners: undefined,
      output: [],
      outputEncodings: [],
      outputCallbacks: [],
      outputSize: 0,
      writable: true,
      _last: false,
      chunkedEncoding: false,
      shouldKeepAlive: true,
      useChunkedEncodingByDefault: true,
      sendDate: true,
      _removedHeader: {},
      _contentLength: null,
      _hasBody: true,
      _trailer: '',
      finished: false,
      _headerSent: false,
      socket: [Circular],
      connection: [Circular],
      _header: null,
      _headers: null,
      _headerNames: {},
      _onPendingData: [Function: updateOutgoingData],
      statusCode: 404,
      __onFinished: [Object]
    }
  },
  _consuming: false,
  _dumped: false,
  _parsedUrl: Url {
    protocol: null,
    slashes: null,
    auth: null,
    host: null,
    port: null,
    hostname: null,
    hash: null,
    search: '?aa=sf&gdsag=as',
    query: 'aa=sf&gdsag=as',
    pathname: '/api/authrule/list',
    path: '/api/authrule/list?aa=sf&gdsag=as',
    href: '/api/authrule/list?aa=sf&gdsag=as',
    _raw: '/api/authrule/list?aa=sf&gdsag=as'
  }
}
