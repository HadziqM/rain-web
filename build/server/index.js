"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key2 of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key2) && key2 !== except)
        __defProp(to, key2, { get: () => from[key2], enumerable: !(desc = __getOwnPropDesc(from, key2)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/undici/lib/core/symbols.js
var require_symbols = __commonJS({
  "node_modules/undici/lib/core/symbols.js"(exports, module2) {
    init_shims();
    module2.exports = {
      kClose: Symbol("close"),
      kDestroy: Symbol("destroy"),
      kDispatch: Symbol("dispatch"),
      kUrl: Symbol("url"),
      kWriting: Symbol("writing"),
      kResuming: Symbol("resuming"),
      kQueue: Symbol("queue"),
      kConnect: Symbol("connect"),
      kConnecting: Symbol("connecting"),
      kHeadersList: Symbol("headers list"),
      kKeepAliveDefaultTimeout: Symbol("default keep alive timeout"),
      kKeepAliveMaxTimeout: Symbol("max keep alive timeout"),
      kKeepAliveTimeoutThreshold: Symbol("keep alive timeout threshold"),
      kKeepAliveTimeoutValue: Symbol("keep alive timeout"),
      kKeepAlive: Symbol("keep alive"),
      kHeadersTimeout: Symbol("headers timeout"),
      kBodyTimeout: Symbol("body timeout"),
      kServerName: Symbol("server name"),
      kLocalAddress: Symbol("local address"),
      kHost: Symbol("host"),
      kNoRef: Symbol("no ref"),
      kBodyUsed: Symbol("used"),
      kRunning: Symbol("running"),
      kBlocking: Symbol("blocking"),
      kPending: Symbol("pending"),
      kSize: Symbol("size"),
      kBusy: Symbol("busy"),
      kQueued: Symbol("queued"),
      kFree: Symbol("free"),
      kConnected: Symbol("connected"),
      kClosed: Symbol("closed"),
      kNeedDrain: Symbol("need drain"),
      kReset: Symbol("reset"),
      kDestroyed: Symbol.for("nodejs.stream.destroyed"),
      kMaxHeadersSize: Symbol("max headers size"),
      kRunningIdx: Symbol("running index"),
      kPendingIdx: Symbol("pending index"),
      kError: Symbol("error"),
      kClients: Symbol("clients"),
      kClient: Symbol("client"),
      kParser: Symbol("parser"),
      kOnDestroyed: Symbol("destroy callbacks"),
      kPipelining: Symbol("pipelinig"),
      kSocket: Symbol("socket"),
      kHostHeader: Symbol("host header"),
      kConnector: Symbol("connector"),
      kStrictContentLength: Symbol("strict content length"),
      kMaxRedirections: Symbol("maxRedirections"),
      kMaxRequests: Symbol("maxRequestsPerClient"),
      kProxy: Symbol("proxy agent options"),
      kCounter: Symbol("socket request counter"),
      kInterceptors: Symbol("dispatch interceptors"),
      kMaxResponseSize: Symbol("max response size")
    };
  }
});

// node_modules/undici/lib/core/errors.js
var require_errors = __commonJS({
  "node_modules/undici/lib/core/errors.js"(exports, module2) {
    "use strict";
    init_shims();
    var UndiciError = class extends Error {
      constructor(message) {
        super(message);
        this.name = "UndiciError";
        this.code = "UND_ERR";
      }
    };
    var ConnectTimeoutError = class extends UndiciError {
      constructor(message) {
        super(message);
        Error.captureStackTrace(this, ConnectTimeoutError);
        this.name = "ConnectTimeoutError";
        this.message = message || "Connect Timeout Error";
        this.code = "UND_ERR_CONNECT_TIMEOUT";
      }
    };
    var HeadersTimeoutError = class extends UndiciError {
      constructor(message) {
        super(message);
        Error.captureStackTrace(this, HeadersTimeoutError);
        this.name = "HeadersTimeoutError";
        this.message = message || "Headers Timeout Error";
        this.code = "UND_ERR_HEADERS_TIMEOUT";
      }
    };
    var HeadersOverflowError = class extends UndiciError {
      constructor(message) {
        super(message);
        Error.captureStackTrace(this, HeadersOverflowError);
        this.name = "HeadersOverflowError";
        this.message = message || "Headers Overflow Error";
        this.code = "UND_ERR_HEADERS_OVERFLOW";
      }
    };
    var BodyTimeoutError = class extends UndiciError {
      constructor(message) {
        super(message);
        Error.captureStackTrace(this, BodyTimeoutError);
        this.name = "BodyTimeoutError";
        this.message = message || "Body Timeout Error";
        this.code = "UND_ERR_BODY_TIMEOUT";
      }
    };
    var ResponseStatusCodeError = class extends UndiciError {
      constructor(message, statusCode, headers, body) {
        super(message);
        Error.captureStackTrace(this, ResponseStatusCodeError);
        this.name = "ResponseStatusCodeError";
        this.message = message || "Response Status Code Error";
        this.code = "UND_ERR_RESPONSE_STATUS_CODE";
        this.body = body;
        this.status = statusCode;
        this.statusCode = statusCode;
        this.headers = headers;
      }
    };
    var InvalidArgumentError = class extends UndiciError {
      constructor(message) {
        super(message);
        Error.captureStackTrace(this, InvalidArgumentError);
        this.name = "InvalidArgumentError";
        this.message = message || "Invalid Argument Error";
        this.code = "UND_ERR_INVALID_ARG";
      }
    };
    var InvalidReturnValueError = class extends UndiciError {
      constructor(message) {
        super(message);
        Error.captureStackTrace(this, InvalidReturnValueError);
        this.name = "InvalidReturnValueError";
        this.message = message || "Invalid Return Value Error";
        this.code = "UND_ERR_INVALID_RETURN_VALUE";
      }
    };
    var RequestAbortedError = class extends UndiciError {
      constructor(message) {
        super(message);
        Error.captureStackTrace(this, RequestAbortedError);
        this.name = "AbortError";
        this.message = message || "Request aborted";
        this.code = "UND_ERR_ABORTED";
      }
    };
    var InformationalError = class extends UndiciError {
      constructor(message) {
        super(message);
        Error.captureStackTrace(this, InformationalError);
        this.name = "InformationalError";
        this.message = message || "Request information";
        this.code = "UND_ERR_INFO";
      }
    };
    var RequestContentLengthMismatchError = class extends UndiciError {
      constructor(message) {
        super(message);
        Error.captureStackTrace(this, RequestContentLengthMismatchError);
        this.name = "RequestContentLengthMismatchError";
        this.message = message || "Request body length does not match content-length header";
        this.code = "UND_ERR_REQ_CONTENT_LENGTH_MISMATCH";
      }
    };
    var ResponseContentLengthMismatchError = class extends UndiciError {
      constructor(message) {
        super(message);
        Error.captureStackTrace(this, ResponseContentLengthMismatchError);
        this.name = "ResponseContentLengthMismatchError";
        this.message = message || "Response body length does not match content-length header";
        this.code = "UND_ERR_RES_CONTENT_LENGTH_MISMATCH";
      }
    };
    var ClientDestroyedError = class extends UndiciError {
      constructor(message) {
        super(message);
        Error.captureStackTrace(this, ClientDestroyedError);
        this.name = "ClientDestroyedError";
        this.message = message || "The client is destroyed";
        this.code = "UND_ERR_DESTROYED";
      }
    };
    var ClientClosedError = class extends UndiciError {
      constructor(message) {
        super(message);
        Error.captureStackTrace(this, ClientClosedError);
        this.name = "ClientClosedError";
        this.message = message || "The client is closed";
        this.code = "UND_ERR_CLOSED";
      }
    };
    var SocketError = class extends UndiciError {
      constructor(message, socket) {
        super(message);
        Error.captureStackTrace(this, SocketError);
        this.name = "SocketError";
        this.message = message || "Socket error";
        this.code = "UND_ERR_SOCKET";
        this.socket = socket;
      }
    };
    var NotSupportedError = class extends UndiciError {
      constructor(message) {
        super(message);
        Error.captureStackTrace(this, NotSupportedError);
        this.name = "NotSupportedError";
        this.message = message || "Not supported error";
        this.code = "UND_ERR_NOT_SUPPORTED";
      }
    };
    var BalancedPoolMissingUpstreamError = class extends UndiciError {
      constructor(message) {
        super(message);
        Error.captureStackTrace(this, NotSupportedError);
        this.name = "MissingUpstreamError";
        this.message = message || "No upstream has been added to the BalancedPool";
        this.code = "UND_ERR_BPL_MISSING_UPSTREAM";
      }
    };
    var HTTPParserError = class extends Error {
      constructor(message, code, data) {
        super(message);
        Error.captureStackTrace(this, HTTPParserError);
        this.name = "HTTPParserError";
        this.code = code ? `HPE_${code}` : void 0;
        this.data = data ? data.toString() : void 0;
      }
    };
    var ResponseExceededMaxSizeError = class extends UndiciError {
      constructor(message) {
        super(message);
        Error.captureStackTrace(this, ResponseExceededMaxSizeError);
        this.name = "ResponseExceededMaxSizeError";
        this.message = message || "Response content exceeded max size";
        this.code = "UND_ERR_RES_EXCEEDED_MAX_SIZE";
      }
    };
    module2.exports = {
      HTTPParserError,
      UndiciError,
      HeadersTimeoutError,
      HeadersOverflowError,
      BodyTimeoutError,
      RequestContentLengthMismatchError,
      ConnectTimeoutError,
      ResponseStatusCodeError,
      InvalidArgumentError,
      InvalidReturnValueError,
      RequestAbortedError,
      ClientDestroyedError,
      ClientClosedError,
      InformationalError,
      SocketError,
      NotSupportedError,
      ResponseContentLengthMismatchError,
      BalancedPoolMissingUpstreamError,
      ResponseExceededMaxSizeError
    };
  }
});

// node_modules/undici/lib/core/util.js
var require_util = __commonJS({
  "node_modules/undici/lib/core/util.js"(exports, module2) {
    "use strict";
    init_shims();
    var assert = require("assert");
    var { kDestroyed, kBodyUsed } = require_symbols();
    var { IncomingMessage } = require("http");
    var stream = require("stream");
    var net = require("net");
    var { InvalidArgumentError } = require_errors();
    var { Blob: Blob2 } = require("buffer");
    var nodeUtil = require("util");
    var { stringify: stringify2 } = require("querystring");
    var [nodeMajor, nodeMinor] = process.versions.node.split(".").map((v) => Number(v));
    function nop() {
    }
    function isStream(obj) {
      return obj && typeof obj.pipe === "function";
    }
    function isBlobLike(object) {
      return Blob2 && object instanceof Blob2 || object && typeof object === "object" && (typeof object.stream === "function" || typeof object.arrayBuffer === "function") && /^(Blob|File)$/.test(object[Symbol.toStringTag]);
    }
    function buildURL(url, queryParams) {
      if (url.includes("?") || url.includes("#")) {
        throw new Error('Query params cannot be passed when url already contains "?" or "#".');
      }
      const stringified = stringify2(queryParams);
      if (stringified) {
        url += "?" + stringified;
      }
      return url;
    }
    function parseURL(url) {
      if (typeof url === "string") {
        url = new URL(url);
      }
      if (!url || typeof url !== "object") {
        throw new InvalidArgumentError("invalid url");
      }
      if (url.port != null && url.port !== "" && !Number.isFinite(parseInt(url.port))) {
        throw new InvalidArgumentError("invalid port");
      }
      if (url.path != null && typeof url.path !== "string") {
        throw new InvalidArgumentError("invalid path");
      }
      if (url.pathname != null && typeof url.pathname !== "string") {
        throw new InvalidArgumentError("invalid pathname");
      }
      if (url.hostname != null && typeof url.hostname !== "string") {
        throw new InvalidArgumentError("invalid hostname");
      }
      if (url.origin != null && typeof url.origin !== "string") {
        throw new InvalidArgumentError("invalid origin");
      }
      if (!/^https?:/.test(url.origin || url.protocol)) {
        throw new InvalidArgumentError("invalid protocol");
      }
      if (!(url instanceof URL)) {
        const port = url.port != null ? url.port : url.protocol === "https:" ? 443 : 80;
        let origin = url.origin != null ? url.origin : `${url.protocol}//${url.hostname}:${port}`;
        let path = url.path != null ? url.path : `${url.pathname || ""}${url.search || ""}`;
        if (origin.endsWith("/")) {
          origin = origin.substring(0, origin.length - 1);
        }
        if (path && !path.startsWith("/")) {
          path = `/${path}`;
        }
        url = new URL(origin + path);
      }
      return url;
    }
    function parseOrigin(url) {
      url = parseURL(url);
      if (url.pathname !== "/" || url.search || url.hash) {
        throw new InvalidArgumentError("invalid url");
      }
      return url;
    }
    function getHostname(host) {
      if (host[0] === "[") {
        const idx2 = host.indexOf("]");
        assert(idx2 !== -1);
        return host.substr(1, idx2 - 1);
      }
      const idx = host.indexOf(":");
      if (idx === -1)
        return host;
      return host.substr(0, idx);
    }
    function getServerName(host) {
      if (!host) {
        return null;
      }
      assert.strictEqual(typeof host, "string");
      const servername = getHostname(host);
      if (net.isIP(servername)) {
        return "";
      }
      return servername;
    }
    function deepClone(obj) {
      return JSON.parse(JSON.stringify(obj));
    }
    function isAsyncIterable(obj) {
      return !!(obj != null && typeof obj[Symbol.asyncIterator] === "function");
    }
    function isIterable(obj) {
      return !!(obj != null && (typeof obj[Symbol.iterator] === "function" || typeof obj[Symbol.asyncIterator] === "function"));
    }
    function bodyLength(body) {
      if (body == null) {
        return 0;
      } else if (isStream(body)) {
        const state = body._readableState;
        return state && state.ended === true && Number.isFinite(state.length) ? state.length : null;
      } else if (isBlobLike(body)) {
        return body.size != null ? body.size : null;
      } else if (isBuffer(body)) {
        return body.byteLength;
      }
      return null;
    }
    function isDestroyed(stream2) {
      return !stream2 || !!(stream2.destroyed || stream2[kDestroyed]);
    }
    function isReadableAborted(stream2) {
      const state = stream2 && stream2._readableState;
      return isDestroyed(stream2) && state && !state.endEmitted;
    }
    function destroy(stream2, err) {
      if (!isStream(stream2) || isDestroyed(stream2)) {
        return;
      }
      if (typeof stream2.destroy === "function") {
        if (Object.getPrototypeOf(stream2).constructor === IncomingMessage) {
          stream2.socket = null;
        }
        stream2.destroy(err);
      } else if (err) {
        process.nextTick((stream3, err2) => {
          stream3.emit("error", err2);
        }, stream2, err);
      }
      if (stream2.destroyed !== true) {
        stream2[kDestroyed] = true;
      }
    }
    var KEEPALIVE_TIMEOUT_EXPR = /timeout=(\d+)/;
    function parseKeepAliveTimeout(val) {
      const m2 = val.toString().match(KEEPALIVE_TIMEOUT_EXPR);
      return m2 ? parseInt(m2[1], 10) * 1e3 : null;
    }
    function parseHeaders(headers, obj = {}) {
      for (let i3 = 0; i3 < headers.length; i3 += 2) {
        const key2 = headers[i3].toString().toLowerCase();
        let val = obj[key2];
        const encoding = key2.length === 19 && key2 === "content-disposition" ? "latin1" : "utf8";
        if (!val) {
          if (Array.isArray(headers[i3 + 1])) {
            obj[key2] = headers[i3 + 1];
          } else {
            obj[key2] = headers[i3 + 1].toString(encoding);
          }
        } else {
          if (!Array.isArray(val)) {
            val = [val];
            obj[key2] = val;
          }
          val.push(headers[i3 + 1].toString(encoding));
        }
      }
      return obj;
    }
    function parseRawHeaders(headers) {
      const ret = [];
      for (let n2 = 0; n2 < headers.length; n2 += 2) {
        const key2 = headers[n2 + 0].toString();
        const encoding = key2.length === 19 && key2.toLowerCase() === "content-disposition" ? "latin1" : "utf8";
        const val = headers[n2 + 1].toString(encoding);
        ret.push(key2, val);
      }
      return ret;
    }
    function isBuffer(buffer2) {
      return buffer2 instanceof Uint8Array || Buffer.isBuffer(buffer2);
    }
    function validateHandler(handler2, method, upgrade) {
      if (!handler2 || typeof handler2 !== "object") {
        throw new InvalidArgumentError("handler must be an object");
      }
      if (typeof handler2.onConnect !== "function") {
        throw new InvalidArgumentError("invalid onConnect method");
      }
      if (typeof handler2.onError !== "function") {
        throw new InvalidArgumentError("invalid onError method");
      }
      if (typeof handler2.onBodySent !== "function" && handler2.onBodySent !== void 0) {
        throw new InvalidArgumentError("invalid onBodySent method");
      }
      if (upgrade || method === "CONNECT") {
        if (typeof handler2.onUpgrade !== "function") {
          throw new InvalidArgumentError("invalid onUpgrade method");
        }
      } else {
        if (typeof handler2.onHeaders !== "function") {
          throw new InvalidArgumentError("invalid onHeaders method");
        }
        if (typeof handler2.onData !== "function") {
          throw new InvalidArgumentError("invalid onData method");
        }
        if (typeof handler2.onComplete !== "function") {
          throw new InvalidArgumentError("invalid onComplete method");
        }
      }
    }
    function isDisturbed(body) {
      return !!(body && (stream.isDisturbed ? stream.isDisturbed(body) || body[kBodyUsed] : body[kBodyUsed] || body.readableDidRead || body._readableState && body._readableState.dataEmitted || isReadableAborted(body)));
    }
    function isErrored(body) {
      return !!(body && (stream.isErrored ? stream.isErrored(body) : /state: 'errored'/.test(
        nodeUtil.inspect(body)
      )));
    }
    function isReadable(body) {
      return !!(body && (stream.isReadable ? stream.isReadable(body) : /state: 'readable'/.test(
        nodeUtil.inspect(body)
      )));
    }
    function getSocketInfo(socket) {
      return {
        localAddress: socket.localAddress,
        localPort: socket.localPort,
        remoteAddress: socket.remoteAddress,
        remotePort: socket.remotePort,
        remoteFamily: socket.remoteFamily,
        timeout: socket.timeout,
        bytesWritten: socket.bytesWritten,
        bytesRead: socket.bytesRead
      };
    }
    var ReadableStream3;
    function ReadableStreamFrom(iterable) {
      if (!ReadableStream3) {
        ReadableStream3 = require("stream/web").ReadableStream;
      }
      if (ReadableStream3.from) {
        return ReadableStream3.from(iterable);
      }
      let iterator;
      return new ReadableStream3(
        {
          async start() {
            iterator = iterable[Symbol.asyncIterator]();
          },
          async pull(controller) {
            const { done, value } = await iterator.next();
            if (done) {
              queueMicrotask(() => {
                controller.close();
              });
            } else {
              const buf = Buffer.isBuffer(value) ? value : Buffer.from(value);
              controller.enqueue(new Uint8Array(buf));
            }
            return controller.desiredSize > 0;
          },
          async cancel(reason) {
            await iterator.return();
          }
        },
        0
      );
    }
    function isFormDataLike(chunk) {
      return chunk && chunk.constructor && chunk.constructor.name === "FormData" && typeof chunk === "object" && (typeof chunk.append === "function" && typeof chunk.delete === "function" && typeof chunk.get === "function" && typeof chunk.getAll === "function" && typeof chunk.has === "function" && typeof chunk.set === "function" && typeof chunk.entries === "function" && typeof chunk.keys === "function" && typeof chunk.values === "function" && typeof chunk.forEach === "function");
    }
    var kEnumerableProperty = /* @__PURE__ */ Object.create(null);
    kEnumerableProperty.enumerable = true;
    module2.exports = {
      kEnumerableProperty,
      nop,
      isDisturbed,
      isErrored,
      isReadable,
      toUSVString: nodeUtil.toUSVString || ((val) => `${val}`),
      isReadableAborted,
      isBlobLike,
      parseOrigin,
      parseURL,
      getServerName,
      isStream,
      isIterable,
      isAsyncIterable,
      isDestroyed,
      parseRawHeaders,
      parseHeaders,
      parseKeepAliveTimeout,
      destroy,
      bodyLength,
      deepClone,
      ReadableStreamFrom,
      isBuffer,
      validateHandler,
      getSocketInfo,
      isFormDataLike,
      buildURL,
      nodeMajor,
      nodeMinor,
      nodeHasAutoSelectFamily: nodeMajor > 18 || nodeMajor === 18 && nodeMinor >= 13
    };
  }
});

// node_modules/undici/lib/timers.js
var require_timers = __commonJS({
  "node_modules/undici/lib/timers.js"(exports, module2) {
    "use strict";
    init_shims();
    var fastNow = Date.now();
    var fastNowTimeout;
    var fastTimers = [];
    function onTimeout() {
      fastNow = Date.now();
      let len = fastTimers.length;
      let idx = 0;
      while (idx < len) {
        const timer = fastTimers[idx];
        if (timer.expires && fastNow >= timer.expires) {
          timer.expires = 0;
          timer.callback(timer.opaque);
        }
        if (timer.expires === 0) {
          timer.active = false;
          if (idx !== len - 1) {
            fastTimers[idx] = fastTimers.pop();
          } else {
            fastTimers.pop();
          }
          len -= 1;
        } else {
          idx += 1;
        }
      }
      if (fastTimers.length > 0) {
        refreshTimeout();
      }
    }
    function refreshTimeout() {
      if (fastNowTimeout && fastNowTimeout.refresh) {
        fastNowTimeout.refresh();
      } else {
        clearTimeout(fastNowTimeout);
        fastNowTimeout = setTimeout(onTimeout, 1e3);
        if (fastNowTimeout.unref) {
          fastNowTimeout.unref();
        }
      }
    }
    var Timeout = class {
      constructor(callback, delay, opaque) {
        this.callback = callback;
        this.delay = delay;
        this.opaque = opaque;
        this.expires = 0;
        this.active = false;
        this.refresh();
      }
      refresh() {
        if (!this.active) {
          this.active = true;
          fastTimers.push(this);
          if (!fastNowTimeout || fastTimers.length === 1) {
            refreshTimeout();
            fastNow = Date.now();
          }
        }
        this.expires = fastNow + this.delay;
      }
      clear() {
        this.expires = 0;
      }
    };
    module2.exports = {
      setTimeout(callback, delay, opaque) {
        return new Timeout(callback, delay, opaque);
      },
      clearTimeout(timeout) {
        if (timeout && timeout.clear) {
          timeout.clear();
        }
      }
    };
  }
});

// node_modules/busboy/lib/utils.js
var require_utils = __commonJS({
  "node_modules/busboy/lib/utils.js"(exports, module2) {
    "use strict";
    init_shims();
    function parseContentType(str) {
      if (str.length === 0)
        return;
      const params = /* @__PURE__ */ Object.create(null);
      let i3 = 0;
      for (; i3 < str.length; ++i3) {
        const code = str.charCodeAt(i3);
        if (TOKEN[code] !== 1) {
          if (code !== 47 || i3 === 0)
            return;
          break;
        }
      }
      if (i3 === str.length)
        return;
      const type = str.slice(0, i3).toLowerCase();
      const subtypeStart = ++i3;
      for (; i3 < str.length; ++i3) {
        const code = str.charCodeAt(i3);
        if (TOKEN[code] !== 1) {
          if (i3 === subtypeStart)
            return;
          if (parseContentTypeParams(str, i3, params) === void 0)
            return;
          break;
        }
      }
      if (i3 === subtypeStart)
        return;
      const subtype = str.slice(subtypeStart, i3).toLowerCase();
      return { type, subtype, params };
    }
    function parseContentTypeParams(str, i3, params) {
      while (i3 < str.length) {
        for (; i3 < str.length; ++i3) {
          const code = str.charCodeAt(i3);
          if (code !== 32 && code !== 9)
            break;
        }
        if (i3 === str.length)
          break;
        if (str.charCodeAt(i3++) !== 59)
          return;
        for (; i3 < str.length; ++i3) {
          const code = str.charCodeAt(i3);
          if (code !== 32 && code !== 9)
            break;
        }
        if (i3 === str.length)
          return;
        let name;
        const nameStart = i3;
        for (; i3 < str.length; ++i3) {
          const code = str.charCodeAt(i3);
          if (TOKEN[code] !== 1) {
            if (code !== 61)
              return;
            break;
          }
        }
        if (i3 === str.length)
          return;
        name = str.slice(nameStart, i3);
        ++i3;
        if (i3 === str.length)
          return;
        let value = "";
        let valueStart;
        if (str.charCodeAt(i3) === 34) {
          valueStart = ++i3;
          let escaping = false;
          for (; i3 < str.length; ++i3) {
            const code = str.charCodeAt(i3);
            if (code === 92) {
              if (escaping) {
                valueStart = i3;
                escaping = false;
              } else {
                value += str.slice(valueStart, i3);
                escaping = true;
              }
              continue;
            }
            if (code === 34) {
              if (escaping) {
                valueStart = i3;
                escaping = false;
                continue;
              }
              value += str.slice(valueStart, i3);
              break;
            }
            if (escaping) {
              valueStart = i3 - 1;
              escaping = false;
            }
            if (QDTEXT[code] !== 1)
              return;
          }
          if (i3 === str.length)
            return;
          ++i3;
        } else {
          valueStart = i3;
          for (; i3 < str.length; ++i3) {
            const code = str.charCodeAt(i3);
            if (TOKEN[code] !== 1) {
              if (i3 === valueStart)
                return;
              break;
            }
          }
          value = str.slice(valueStart, i3);
        }
        name = name.toLowerCase();
        if (params[name] === void 0)
          params[name] = value;
      }
      return params;
    }
    function parseDisposition(str, defDecoder) {
      if (str.length === 0)
        return;
      const params = /* @__PURE__ */ Object.create(null);
      let i3 = 0;
      for (; i3 < str.length; ++i3) {
        const code = str.charCodeAt(i3);
        if (TOKEN[code] !== 1) {
          if (parseDispositionParams(str, i3, params, defDecoder) === void 0)
            return;
          break;
        }
      }
      const type = str.slice(0, i3).toLowerCase();
      return { type, params };
    }
    function parseDispositionParams(str, i3, params, defDecoder) {
      while (i3 < str.length) {
        for (; i3 < str.length; ++i3) {
          const code = str.charCodeAt(i3);
          if (code !== 32 && code !== 9)
            break;
        }
        if (i3 === str.length)
          break;
        if (str.charCodeAt(i3++) !== 59)
          return;
        for (; i3 < str.length; ++i3) {
          const code = str.charCodeAt(i3);
          if (code !== 32 && code !== 9)
            break;
        }
        if (i3 === str.length)
          return;
        let name;
        const nameStart = i3;
        for (; i3 < str.length; ++i3) {
          const code = str.charCodeAt(i3);
          if (TOKEN[code] !== 1) {
            if (code === 61)
              break;
            return;
          }
        }
        if (i3 === str.length)
          return;
        let value = "";
        let valueStart;
        let charset;
        name = str.slice(nameStart, i3);
        if (name.charCodeAt(name.length - 1) === 42) {
          const charsetStart = ++i3;
          for (; i3 < str.length; ++i3) {
            const code = str.charCodeAt(i3);
            if (CHARSET[code] !== 1) {
              if (code !== 39)
                return;
              break;
            }
          }
          if (i3 === str.length)
            return;
          charset = str.slice(charsetStart, i3);
          ++i3;
          for (; i3 < str.length; ++i3) {
            const code = str.charCodeAt(i3);
            if (code === 39)
              break;
          }
          if (i3 === str.length)
            return;
          ++i3;
          if (i3 === str.length)
            return;
          valueStart = i3;
          let encode2 = 0;
          for (; i3 < str.length; ++i3) {
            const code = str.charCodeAt(i3);
            if (EXTENDED_VALUE[code] !== 1) {
              if (code === 37) {
                let hexUpper;
                let hexLower;
                if (i3 + 2 < str.length && (hexUpper = HEX_VALUES[str.charCodeAt(i3 + 1)]) !== -1 && (hexLower = HEX_VALUES[str.charCodeAt(i3 + 2)]) !== -1) {
                  const byteVal = (hexUpper << 4) + hexLower;
                  value += str.slice(valueStart, i3);
                  value += String.fromCharCode(byteVal);
                  i3 += 2;
                  valueStart = i3 + 1;
                  if (byteVal >= 128)
                    encode2 = 2;
                  else if (encode2 === 0)
                    encode2 = 1;
                  continue;
                }
                return;
              }
              break;
            }
          }
          value += str.slice(valueStart, i3);
          value = convertToUTF8(value, charset, encode2);
          if (value === void 0)
            return;
        } else {
          ++i3;
          if (i3 === str.length)
            return;
          if (str.charCodeAt(i3) === 34) {
            valueStart = ++i3;
            let escaping = false;
            for (; i3 < str.length; ++i3) {
              const code = str.charCodeAt(i3);
              if (code === 92) {
                if (escaping) {
                  valueStart = i3;
                  escaping = false;
                } else {
                  value += str.slice(valueStart, i3);
                  escaping = true;
                }
                continue;
              }
              if (code === 34) {
                if (escaping) {
                  valueStart = i3;
                  escaping = false;
                  continue;
                }
                value += str.slice(valueStart, i3);
                break;
              }
              if (escaping) {
                valueStart = i3 - 1;
                escaping = false;
              }
              if (QDTEXT[code] !== 1)
                return;
            }
            if (i3 === str.length)
              return;
            ++i3;
          } else {
            valueStart = i3;
            for (; i3 < str.length; ++i3) {
              const code = str.charCodeAt(i3);
              if (TOKEN[code] !== 1) {
                if (i3 === valueStart)
                  return;
                break;
              }
            }
            value = str.slice(valueStart, i3);
          }
          value = defDecoder(value, 2);
          if (value === void 0)
            return;
        }
        name = name.toLowerCase();
        if (params[name] === void 0)
          params[name] = value;
      }
      return params;
    }
    function getDecoder(charset) {
      let lc;
      while (true) {
        switch (charset) {
          case "utf-8":
          case "utf8":
            return decoders.utf8;
          case "latin1":
          case "ascii":
          case "us-ascii":
          case "iso-8859-1":
          case "iso8859-1":
          case "iso88591":
          case "iso_8859-1":
          case "windows-1252":
          case "iso_8859-1:1987":
          case "cp1252":
          case "x-cp1252":
            return decoders.latin1;
          case "utf16le":
          case "utf-16le":
          case "ucs2":
          case "ucs-2":
            return decoders.utf16le;
          case "base64":
            return decoders.base64;
          default:
            if (lc === void 0) {
              lc = true;
              charset = charset.toLowerCase();
              continue;
            }
            return decoders.other.bind(charset);
        }
      }
    }
    var decoders = {
      utf8: (data, hint) => {
        if (data.length === 0)
          return "";
        if (typeof data === "string") {
          if (hint < 2)
            return data;
          data = Buffer.from(data, "latin1");
        }
        return data.utf8Slice(0, data.length);
      },
      latin1: (data, hint) => {
        if (data.length === 0)
          return "";
        if (typeof data === "string")
          return data;
        return data.latin1Slice(0, data.length);
      },
      utf16le: (data, hint) => {
        if (data.length === 0)
          return "";
        if (typeof data === "string")
          data = Buffer.from(data, "latin1");
        return data.ucs2Slice(0, data.length);
      },
      base64: (data, hint) => {
        if (data.length === 0)
          return "";
        if (typeof data === "string")
          data = Buffer.from(data, "latin1");
        return data.base64Slice(0, data.length);
      },
      other: (data, hint) => {
        if (data.length === 0)
          return "";
        if (typeof data === "string")
          data = Buffer.from(data, "latin1");
        try {
          const decoder = new TextDecoder(exports);
          return decoder.decode(data);
        } catch {
        }
      }
    };
    function convertToUTF8(data, charset, hint) {
      const decode = getDecoder(charset);
      if (decode)
        return decode(data, hint);
    }
    function basename(path) {
      if (typeof path !== "string")
        return "";
      for (let i3 = path.length - 1; i3 >= 0; --i3) {
        switch (path.charCodeAt(i3)) {
          case 47:
          case 92:
            path = path.slice(i3 + 1);
            return path === ".." || path === "." ? "" : path;
        }
      }
      return path === ".." || path === "." ? "" : path;
    }
    var TOKEN = [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      1,
      1,
      0,
      1,
      1,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      1,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ];
    var QDTEXT = [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1
    ];
    var CHARSET = [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      1,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ];
    var EXTENDED_VALUE = [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      1,
      1,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      1,
      1,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      1,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ];
    var HEX_VALUES = [
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      10,
      11,
      12,
      13,
      14,
      15,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      10,
      11,
      12,
      13,
      14,
      15,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1
    ];
    module2.exports = {
      basename,
      convertToUTF8,
      getDecoder,
      parseContentType,
      parseDisposition
    };
  }
});

// node_modules/streamsearch/lib/sbmh.js
var require_sbmh = __commonJS({
  "node_modules/streamsearch/lib/sbmh.js"(exports, module2) {
    "use strict";
    init_shims();
    function memcmp(buf1, pos1, buf2, pos2, num) {
      for (let i3 = 0; i3 < num; ++i3) {
        if (buf1[pos1 + i3] !== buf2[pos2 + i3])
          return false;
      }
      return true;
    }
    var SBMH = class {
      constructor(needle, cb) {
        if (typeof cb !== "function")
          throw new Error("Missing match callback");
        if (typeof needle === "string")
          needle = Buffer.from(needle);
        else if (!Buffer.isBuffer(needle))
          throw new Error(`Expected Buffer for needle, got ${typeof needle}`);
        const needleLen = needle.length;
        this.maxMatches = Infinity;
        this.matches = 0;
        this._cb = cb;
        this._lookbehindSize = 0;
        this._needle = needle;
        this._bufPos = 0;
        this._lookbehind = Buffer.allocUnsafe(needleLen);
        this._occ = [
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen,
          needleLen
        ];
        if (needleLen > 1) {
          for (let i3 = 0; i3 < needleLen - 1; ++i3)
            this._occ[needle[i3]] = needleLen - 1 - i3;
        }
      }
      reset() {
        this.matches = 0;
        this._lookbehindSize = 0;
        this._bufPos = 0;
      }
      push(chunk, pos) {
        let result;
        if (!Buffer.isBuffer(chunk))
          chunk = Buffer.from(chunk, "latin1");
        const chunkLen = chunk.length;
        this._bufPos = pos || 0;
        while (result !== chunkLen && this.matches < this.maxMatches)
          result = feed(this, chunk);
        return result;
      }
      destroy() {
        const lbSize = this._lookbehindSize;
        if (lbSize)
          this._cb(false, this._lookbehind, 0, lbSize, false);
        this.reset();
      }
    };
    function feed(self, data) {
      const len = data.length;
      const needle = self._needle;
      const needleLen = needle.length;
      let pos = -self._lookbehindSize;
      const lastNeedleCharPos = needleLen - 1;
      const lastNeedleChar = needle[lastNeedleCharPos];
      const end = len - needleLen;
      const occ = self._occ;
      const lookbehind = self._lookbehind;
      if (pos < 0) {
        while (pos < 0 && pos <= end) {
          const nextPos = pos + lastNeedleCharPos;
          const ch = nextPos < 0 ? lookbehind[self._lookbehindSize + nextPos] : data[nextPos];
          if (ch === lastNeedleChar && matchNeedle(self, data, pos, lastNeedleCharPos)) {
            self._lookbehindSize = 0;
            ++self.matches;
            if (pos > -self._lookbehindSize)
              self._cb(true, lookbehind, 0, self._lookbehindSize + pos, false);
            else
              self._cb(true, void 0, 0, 0, true);
            return self._bufPos = pos + needleLen;
          }
          pos += occ[ch];
        }
        while (pos < 0 && !matchNeedle(self, data, pos, len - pos))
          ++pos;
        if (pos < 0) {
          const bytesToCutOff = self._lookbehindSize + pos;
          if (bytesToCutOff > 0) {
            self._cb(false, lookbehind, 0, bytesToCutOff, false);
          }
          self._lookbehindSize -= bytesToCutOff;
          lookbehind.copy(lookbehind, 0, bytesToCutOff, self._lookbehindSize);
          lookbehind.set(data, self._lookbehindSize);
          self._lookbehindSize += len;
          self._bufPos = len;
          return len;
        }
        self._cb(false, lookbehind, 0, self._lookbehindSize, false);
        self._lookbehindSize = 0;
      }
      pos += self._bufPos;
      const firstNeedleChar = needle[0];
      while (pos <= end) {
        const ch = data[pos + lastNeedleCharPos];
        if (ch === lastNeedleChar && data[pos] === firstNeedleChar && memcmp(needle, 0, data, pos, lastNeedleCharPos)) {
          ++self.matches;
          if (pos > 0)
            self._cb(true, data, self._bufPos, pos, true);
          else
            self._cb(true, void 0, 0, 0, true);
          return self._bufPos = pos + needleLen;
        }
        pos += occ[ch];
      }
      while (pos < len) {
        if (data[pos] !== firstNeedleChar || !memcmp(data, pos, needle, 0, len - pos)) {
          ++pos;
          continue;
        }
        data.copy(lookbehind, 0, pos, len);
        self._lookbehindSize = len - pos;
        break;
      }
      if (pos > 0)
        self._cb(false, data, self._bufPos, pos < len ? pos : len, true);
      self._bufPos = len;
      return len;
    }
    function matchNeedle(self, data, pos, len) {
      const lb = self._lookbehind;
      const lbSize = self._lookbehindSize;
      const needle = self._needle;
      for (let i3 = 0; i3 < len; ++i3, ++pos) {
        const ch = pos < 0 ? lb[lbSize + pos] : data[pos];
        if (ch !== needle[i3])
          return false;
      }
      return true;
    }
    module2.exports = SBMH;
  }
});

// node_modules/busboy/lib/types/multipart.js
var require_multipart = __commonJS({
  "node_modules/busboy/lib/types/multipart.js"(exports, module2) {
    "use strict";
    init_shims();
    var { Readable, Writable } = require("stream");
    var StreamSearch = require_sbmh();
    var {
      basename,
      convertToUTF8,
      getDecoder,
      parseContentType,
      parseDisposition
    } = require_utils();
    var BUF_CRLF = Buffer.from("\r\n");
    var BUF_CR = Buffer.from("\r");
    var BUF_DASH = Buffer.from("-");
    function noop3() {
    }
    var MAX_HEADER_PAIRS = 2e3;
    var MAX_HEADER_SIZE = 16 * 1024;
    var HPARSER_NAME = 0;
    var HPARSER_PRE_OWS = 1;
    var HPARSER_VALUE = 2;
    var HeaderParser = class {
      constructor(cb) {
        this.header = /* @__PURE__ */ Object.create(null);
        this.pairCount = 0;
        this.byteCount = 0;
        this.state = HPARSER_NAME;
        this.name = "";
        this.value = "";
        this.crlf = 0;
        this.cb = cb;
      }
      reset() {
        this.header = /* @__PURE__ */ Object.create(null);
        this.pairCount = 0;
        this.byteCount = 0;
        this.state = HPARSER_NAME;
        this.name = "";
        this.value = "";
        this.crlf = 0;
      }
      push(chunk, pos, end) {
        let start2 = pos;
        while (pos < end) {
          switch (this.state) {
            case HPARSER_NAME: {
              let done = false;
              for (; pos < end; ++pos) {
                if (this.byteCount === MAX_HEADER_SIZE)
                  return -1;
                ++this.byteCount;
                const code = chunk[pos];
                if (TOKEN[code] !== 1) {
                  if (code !== 58)
                    return -1;
                  this.name += chunk.latin1Slice(start2, pos);
                  if (this.name.length === 0)
                    return -1;
                  ++pos;
                  done = true;
                  this.state = HPARSER_PRE_OWS;
                  break;
                }
              }
              if (!done) {
                this.name += chunk.latin1Slice(start2, pos);
                break;
              }
            }
            case HPARSER_PRE_OWS: {
              let done = false;
              for (; pos < end; ++pos) {
                if (this.byteCount === MAX_HEADER_SIZE)
                  return -1;
                ++this.byteCount;
                const code = chunk[pos];
                if (code !== 32 && code !== 9) {
                  start2 = pos;
                  done = true;
                  this.state = HPARSER_VALUE;
                  break;
                }
              }
              if (!done)
                break;
            }
            case HPARSER_VALUE:
              switch (this.crlf) {
                case 0:
                  for (; pos < end; ++pos) {
                    if (this.byteCount === MAX_HEADER_SIZE)
                      return -1;
                    ++this.byteCount;
                    const code = chunk[pos];
                    if (FIELD_VCHAR[code] !== 1) {
                      if (code !== 13)
                        return -1;
                      ++this.crlf;
                      break;
                    }
                  }
                  this.value += chunk.latin1Slice(start2, pos++);
                  break;
                case 1:
                  if (this.byteCount === MAX_HEADER_SIZE)
                    return -1;
                  ++this.byteCount;
                  if (chunk[pos++] !== 10)
                    return -1;
                  ++this.crlf;
                  break;
                case 2: {
                  if (this.byteCount === MAX_HEADER_SIZE)
                    return -1;
                  ++this.byteCount;
                  const code = chunk[pos];
                  if (code === 32 || code === 9) {
                    start2 = pos;
                    this.crlf = 0;
                  } else {
                    if (++this.pairCount < MAX_HEADER_PAIRS) {
                      this.name = this.name.toLowerCase();
                      if (this.header[this.name] === void 0)
                        this.header[this.name] = [this.value];
                      else
                        this.header[this.name].push(this.value);
                    }
                    if (code === 13) {
                      ++this.crlf;
                      ++pos;
                    } else {
                      start2 = pos;
                      this.crlf = 0;
                      this.state = HPARSER_NAME;
                      this.name = "";
                      this.value = "";
                    }
                  }
                  break;
                }
                case 3: {
                  if (this.byteCount === MAX_HEADER_SIZE)
                    return -1;
                  ++this.byteCount;
                  if (chunk[pos++] !== 10)
                    return -1;
                  const header = this.header;
                  this.reset();
                  this.cb(header);
                  return pos;
                }
              }
              break;
          }
        }
        return pos;
      }
    };
    var FileStream = class extends Readable {
      constructor(opts, owner) {
        super(opts);
        this.truncated = false;
        this._readcb = null;
        this.once("end", () => {
          this._read();
          if (--owner._fileEndsLeft === 0 && owner._finalcb) {
            const cb = owner._finalcb;
            owner._finalcb = null;
            process.nextTick(cb);
          }
        });
      }
      _read(n2) {
        const cb = this._readcb;
        if (cb) {
          this._readcb = null;
          cb();
        }
      }
    };
    var ignoreData = {
      push: (chunk, pos) => {
      },
      destroy: () => {
      }
    };
    function callAndUnsetCb(self, err) {
      const cb = self._writecb;
      self._writecb = null;
      if (err)
        self.destroy(err);
      else if (cb)
        cb();
    }
    function nullDecoder(val, hint) {
      return val;
    }
    var Multipart = class extends Writable {
      constructor(cfg) {
        const streamOpts = {
          autoDestroy: true,
          emitClose: true,
          highWaterMark: typeof cfg.highWaterMark === "number" ? cfg.highWaterMark : void 0
        };
        super(streamOpts);
        if (!cfg.conType.params || typeof cfg.conType.params.boundary !== "string")
          throw new Error("Multipart: Boundary not found");
        const boundary = cfg.conType.params.boundary;
        const paramDecoder = typeof cfg.defParamCharset === "string" && cfg.defParamCharset ? getDecoder(cfg.defParamCharset) : nullDecoder;
        const defCharset = cfg.defCharset || "utf8";
        const preservePath = cfg.preservePath;
        const fileOpts = {
          autoDestroy: true,
          emitClose: true,
          highWaterMark: typeof cfg.fileHwm === "number" ? cfg.fileHwm : void 0
        };
        const limits = cfg.limits;
        const fieldSizeLimit = limits && typeof limits.fieldSize === "number" ? limits.fieldSize : 1 * 1024 * 1024;
        const fileSizeLimit = limits && typeof limits.fileSize === "number" ? limits.fileSize : Infinity;
        const filesLimit = limits && typeof limits.files === "number" ? limits.files : Infinity;
        const fieldsLimit = limits && typeof limits.fields === "number" ? limits.fields : Infinity;
        const partsLimit = limits && typeof limits.parts === "number" ? limits.parts : Infinity;
        let parts = -1;
        let fields = 0;
        let files = 0;
        let skipPart = false;
        this._fileEndsLeft = 0;
        this._fileStream = void 0;
        this._complete = false;
        let fileSize = 0;
        let field;
        let fieldSize = 0;
        let partCharset;
        let partEncoding;
        let partType;
        let partName;
        let partTruncated = false;
        let hitFilesLimit = false;
        let hitFieldsLimit = false;
        this._hparser = null;
        const hparser = new HeaderParser((header) => {
          this._hparser = null;
          skipPart = false;
          partType = "text/plain";
          partCharset = defCharset;
          partEncoding = "7bit";
          partName = void 0;
          partTruncated = false;
          let filename;
          if (!header["content-disposition"]) {
            skipPart = true;
            return;
          }
          const disp = parseDisposition(
            header["content-disposition"][0],
            paramDecoder
          );
          if (!disp || disp.type !== "form-data") {
            skipPart = true;
            return;
          }
          if (disp.params) {
            if (disp.params.name)
              partName = disp.params.name;
            if (disp.params["filename*"])
              filename = disp.params["filename*"];
            else if (disp.params.filename)
              filename = disp.params.filename;
            if (filename !== void 0 && !preservePath)
              filename = basename(filename);
          }
          if (header["content-type"]) {
            const conType = parseContentType(header["content-type"][0]);
            if (conType) {
              partType = `${conType.type}/${conType.subtype}`;
              if (conType.params && typeof conType.params.charset === "string")
                partCharset = conType.params.charset.toLowerCase();
            }
          }
          if (header["content-transfer-encoding"])
            partEncoding = header["content-transfer-encoding"][0].toLowerCase();
          if (partType === "application/octet-stream" || filename !== void 0) {
            if (files === filesLimit) {
              if (!hitFilesLimit) {
                hitFilesLimit = true;
                this.emit("filesLimit");
              }
              skipPart = true;
              return;
            }
            ++files;
            if (this.listenerCount("file") === 0) {
              skipPart = true;
              return;
            }
            fileSize = 0;
            this._fileStream = new FileStream(fileOpts, this);
            ++this._fileEndsLeft;
            this.emit(
              "file",
              partName,
              this._fileStream,
              {
                filename,
                encoding: partEncoding,
                mimeType: partType
              }
            );
          } else {
            if (fields === fieldsLimit) {
              if (!hitFieldsLimit) {
                hitFieldsLimit = true;
                this.emit("fieldsLimit");
              }
              skipPart = true;
              return;
            }
            ++fields;
            if (this.listenerCount("field") === 0) {
              skipPart = true;
              return;
            }
            field = [];
            fieldSize = 0;
          }
        });
        let matchPostBoundary = 0;
        const ssCb = (isMatch, data, start2, end, isDataSafe) => {
          retrydata:
            while (data) {
              if (this._hparser !== null) {
                const ret = this._hparser.push(data, start2, end);
                if (ret === -1) {
                  this._hparser = null;
                  hparser.reset();
                  this.emit("error", new Error("Malformed part header"));
                  break;
                }
                start2 = ret;
              }
              if (start2 === end)
                break;
              if (matchPostBoundary !== 0) {
                if (matchPostBoundary === 1) {
                  switch (data[start2]) {
                    case 45:
                      matchPostBoundary = 2;
                      ++start2;
                      break;
                    case 13:
                      matchPostBoundary = 3;
                      ++start2;
                      break;
                    default:
                      matchPostBoundary = 0;
                  }
                  if (start2 === end)
                    return;
                }
                if (matchPostBoundary === 2) {
                  matchPostBoundary = 0;
                  if (data[start2] === 45) {
                    this._complete = true;
                    this._bparser = ignoreData;
                    return;
                  }
                  const writecb = this._writecb;
                  this._writecb = noop3;
                  ssCb(false, BUF_DASH, 0, 1, false);
                  this._writecb = writecb;
                } else if (matchPostBoundary === 3) {
                  matchPostBoundary = 0;
                  if (data[start2] === 10) {
                    ++start2;
                    if (parts >= partsLimit)
                      break;
                    this._hparser = hparser;
                    if (start2 === end)
                      break;
                    continue retrydata;
                  } else {
                    const writecb = this._writecb;
                    this._writecb = noop3;
                    ssCb(false, BUF_CR, 0, 1, false);
                    this._writecb = writecb;
                  }
                }
              }
              if (!skipPart) {
                if (this._fileStream) {
                  let chunk;
                  const actualLen = Math.min(end - start2, fileSizeLimit - fileSize);
                  if (!isDataSafe) {
                    chunk = Buffer.allocUnsafe(actualLen);
                    data.copy(chunk, 0, start2, start2 + actualLen);
                  } else {
                    chunk = data.slice(start2, start2 + actualLen);
                  }
                  fileSize += chunk.length;
                  if (fileSize === fileSizeLimit) {
                    if (chunk.length > 0)
                      this._fileStream.push(chunk);
                    this._fileStream.emit("limit");
                    this._fileStream.truncated = true;
                    skipPart = true;
                  } else if (!this._fileStream.push(chunk)) {
                    if (this._writecb)
                      this._fileStream._readcb = this._writecb;
                    this._writecb = null;
                  }
                } else if (field !== void 0) {
                  let chunk;
                  const actualLen = Math.min(
                    end - start2,
                    fieldSizeLimit - fieldSize
                  );
                  if (!isDataSafe) {
                    chunk = Buffer.allocUnsafe(actualLen);
                    data.copy(chunk, 0, start2, start2 + actualLen);
                  } else {
                    chunk = data.slice(start2, start2 + actualLen);
                  }
                  fieldSize += actualLen;
                  field.push(chunk);
                  if (fieldSize === fieldSizeLimit) {
                    skipPart = true;
                    partTruncated = true;
                  }
                }
              }
              break;
            }
          if (isMatch) {
            matchPostBoundary = 1;
            if (this._fileStream) {
              this._fileStream.push(null);
              this._fileStream = null;
            } else if (field !== void 0) {
              let data2;
              switch (field.length) {
                case 0:
                  data2 = "";
                  break;
                case 1:
                  data2 = convertToUTF8(field[0], partCharset, 0);
                  break;
                default:
                  data2 = convertToUTF8(
                    Buffer.concat(field, fieldSize),
                    partCharset,
                    0
                  );
              }
              field = void 0;
              fieldSize = 0;
              this.emit(
                "field",
                partName,
                data2,
                {
                  nameTruncated: false,
                  valueTruncated: partTruncated,
                  encoding: partEncoding,
                  mimeType: partType
                }
              );
            }
            if (++parts === partsLimit)
              this.emit("partsLimit");
          }
        };
        this._bparser = new StreamSearch(`\r
--${boundary}`, ssCb);
        this._writecb = null;
        this._finalcb = null;
        this.write(BUF_CRLF);
      }
      static detect(conType) {
        return conType.type === "multipart" && conType.subtype === "form-data";
      }
      _write(chunk, enc, cb) {
        this._writecb = cb;
        this._bparser.push(chunk, 0);
        if (this._writecb)
          callAndUnsetCb(this);
      }
      _destroy(err, cb) {
        this._hparser = null;
        this._bparser = ignoreData;
        if (!err)
          err = checkEndState(this);
        const fileStream = this._fileStream;
        if (fileStream) {
          this._fileStream = null;
          fileStream.destroy(err);
        }
        cb(err);
      }
      _final(cb) {
        this._bparser.destroy();
        if (!this._complete)
          return cb(new Error("Unexpected end of form"));
        if (this._fileEndsLeft)
          this._finalcb = finalcb.bind(null, this, cb);
        else
          finalcb(this, cb);
      }
    };
    function finalcb(self, cb, err) {
      if (err)
        return cb(err);
      err = checkEndState(self);
      cb(err);
    }
    function checkEndState(self) {
      if (self._hparser)
        return new Error("Malformed part header");
      const fileStream = self._fileStream;
      if (fileStream) {
        self._fileStream = null;
        fileStream.destroy(new Error("Unexpected end of file"));
      }
      if (!self._complete)
        return new Error("Unexpected end of form");
    }
    var TOKEN = [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      1,
      1,
      0,
      1,
      1,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      1,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ];
    var FIELD_VCHAR = [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1
    ];
    module2.exports = Multipart;
  }
});

// node_modules/busboy/lib/types/urlencoded.js
var require_urlencoded = __commonJS({
  "node_modules/busboy/lib/types/urlencoded.js"(exports, module2) {
    "use strict";
    init_shims();
    var { Writable } = require("stream");
    var { getDecoder } = require_utils();
    var URLEncoded = class extends Writable {
      constructor(cfg) {
        const streamOpts = {
          autoDestroy: true,
          emitClose: true,
          highWaterMark: typeof cfg.highWaterMark === "number" ? cfg.highWaterMark : void 0
        };
        super(streamOpts);
        let charset = cfg.defCharset || "utf8";
        if (cfg.conType.params && typeof cfg.conType.params.charset === "string")
          charset = cfg.conType.params.charset;
        this.charset = charset;
        const limits = cfg.limits;
        this.fieldSizeLimit = limits && typeof limits.fieldSize === "number" ? limits.fieldSize : 1 * 1024 * 1024;
        this.fieldsLimit = limits && typeof limits.fields === "number" ? limits.fields : Infinity;
        this.fieldNameSizeLimit = limits && typeof limits.fieldNameSize === "number" ? limits.fieldNameSize : 100;
        this._inKey = true;
        this._keyTrunc = false;
        this._valTrunc = false;
        this._bytesKey = 0;
        this._bytesVal = 0;
        this._fields = 0;
        this._key = "";
        this._val = "";
        this._byte = -2;
        this._lastPos = 0;
        this._encode = 0;
        this._decoder = getDecoder(charset);
      }
      static detect(conType) {
        return conType.type === "application" && conType.subtype === "x-www-form-urlencoded";
      }
      _write(chunk, enc, cb) {
        if (this._fields >= this.fieldsLimit)
          return cb();
        let i3 = 0;
        const len = chunk.length;
        this._lastPos = 0;
        if (this._byte !== -2) {
          i3 = readPctEnc(this, chunk, i3, len);
          if (i3 === -1)
            return cb(new Error("Malformed urlencoded form"));
          if (i3 >= len)
            return cb();
          if (this._inKey)
            ++this._bytesKey;
          else
            ++this._bytesVal;
        }
        main:
          while (i3 < len) {
            if (this._inKey) {
              i3 = skipKeyBytes(this, chunk, i3, len);
              while (i3 < len) {
                switch (chunk[i3]) {
                  case 61:
                    if (this._lastPos < i3)
                      this._key += chunk.latin1Slice(this._lastPos, i3);
                    this._lastPos = ++i3;
                    this._key = this._decoder(this._key, this._encode);
                    this._encode = 0;
                    this._inKey = false;
                    continue main;
                  case 38:
                    if (this._lastPos < i3)
                      this._key += chunk.latin1Slice(this._lastPos, i3);
                    this._lastPos = ++i3;
                    this._key = this._decoder(this._key, this._encode);
                    this._encode = 0;
                    if (this._bytesKey > 0) {
                      this.emit(
                        "field",
                        this._key,
                        "",
                        {
                          nameTruncated: this._keyTrunc,
                          valueTruncated: false,
                          encoding: this.charset,
                          mimeType: "text/plain"
                        }
                      );
                    }
                    this._key = "";
                    this._val = "";
                    this._keyTrunc = false;
                    this._valTrunc = false;
                    this._bytesKey = 0;
                    this._bytesVal = 0;
                    if (++this._fields >= this.fieldsLimit) {
                      this.emit("fieldsLimit");
                      return cb();
                    }
                    continue;
                  case 43:
                    if (this._lastPos < i3)
                      this._key += chunk.latin1Slice(this._lastPos, i3);
                    this._key += " ";
                    this._lastPos = i3 + 1;
                    break;
                  case 37:
                    if (this._encode === 0)
                      this._encode = 1;
                    if (this._lastPos < i3)
                      this._key += chunk.latin1Slice(this._lastPos, i3);
                    this._lastPos = i3 + 1;
                    this._byte = -1;
                    i3 = readPctEnc(this, chunk, i3 + 1, len);
                    if (i3 === -1)
                      return cb(new Error("Malformed urlencoded form"));
                    if (i3 >= len)
                      return cb();
                    ++this._bytesKey;
                    i3 = skipKeyBytes(this, chunk, i3, len);
                    continue;
                }
                ++i3;
                ++this._bytesKey;
                i3 = skipKeyBytes(this, chunk, i3, len);
              }
              if (this._lastPos < i3)
                this._key += chunk.latin1Slice(this._lastPos, i3);
            } else {
              i3 = skipValBytes(this, chunk, i3, len);
              while (i3 < len) {
                switch (chunk[i3]) {
                  case 38:
                    if (this._lastPos < i3)
                      this._val += chunk.latin1Slice(this._lastPos, i3);
                    this._lastPos = ++i3;
                    this._inKey = true;
                    this._val = this._decoder(this._val, this._encode);
                    this._encode = 0;
                    if (this._bytesKey > 0 || this._bytesVal > 0) {
                      this.emit(
                        "field",
                        this._key,
                        this._val,
                        {
                          nameTruncated: this._keyTrunc,
                          valueTruncated: this._valTrunc,
                          encoding: this.charset,
                          mimeType: "text/plain"
                        }
                      );
                    }
                    this._key = "";
                    this._val = "";
                    this._keyTrunc = false;
                    this._valTrunc = false;
                    this._bytesKey = 0;
                    this._bytesVal = 0;
                    if (++this._fields >= this.fieldsLimit) {
                      this.emit("fieldsLimit");
                      return cb();
                    }
                    continue main;
                  case 43:
                    if (this._lastPos < i3)
                      this._val += chunk.latin1Slice(this._lastPos, i3);
                    this._val += " ";
                    this._lastPos = i3 + 1;
                    break;
                  case 37:
                    if (this._encode === 0)
                      this._encode = 1;
                    if (this._lastPos < i3)
                      this._val += chunk.latin1Slice(this._lastPos, i3);
                    this._lastPos = i3 + 1;
                    this._byte = -1;
                    i3 = readPctEnc(this, chunk, i3 + 1, len);
                    if (i3 === -1)
                      return cb(new Error("Malformed urlencoded form"));
                    if (i3 >= len)
                      return cb();
                    ++this._bytesVal;
                    i3 = skipValBytes(this, chunk, i3, len);
                    continue;
                }
                ++i3;
                ++this._bytesVal;
                i3 = skipValBytes(this, chunk, i3, len);
              }
              if (this._lastPos < i3)
                this._val += chunk.latin1Slice(this._lastPos, i3);
            }
          }
        cb();
      }
      _final(cb) {
        if (this._byte !== -2)
          return cb(new Error("Malformed urlencoded form"));
        if (!this._inKey || this._bytesKey > 0 || this._bytesVal > 0) {
          if (this._inKey)
            this._key = this._decoder(this._key, this._encode);
          else
            this._val = this._decoder(this._val, this._encode);
          this.emit(
            "field",
            this._key,
            this._val,
            {
              nameTruncated: this._keyTrunc,
              valueTruncated: this._valTrunc,
              encoding: this.charset,
              mimeType: "text/plain"
            }
          );
        }
        cb();
      }
    };
    function readPctEnc(self, chunk, pos, len) {
      if (pos >= len)
        return len;
      if (self._byte === -1) {
        const hexUpper = HEX_VALUES[chunk[pos++]];
        if (hexUpper === -1)
          return -1;
        if (hexUpper >= 8)
          self._encode = 2;
        if (pos < len) {
          const hexLower = HEX_VALUES[chunk[pos++]];
          if (hexLower === -1)
            return -1;
          if (self._inKey)
            self._key += String.fromCharCode((hexUpper << 4) + hexLower);
          else
            self._val += String.fromCharCode((hexUpper << 4) + hexLower);
          self._byte = -2;
          self._lastPos = pos;
        } else {
          self._byte = hexUpper;
        }
      } else {
        const hexLower = HEX_VALUES[chunk[pos++]];
        if (hexLower === -1)
          return -1;
        if (self._inKey)
          self._key += String.fromCharCode((self._byte << 4) + hexLower);
        else
          self._val += String.fromCharCode((self._byte << 4) + hexLower);
        self._byte = -2;
        self._lastPos = pos;
      }
      return pos;
    }
    function skipKeyBytes(self, chunk, pos, len) {
      if (self._bytesKey > self.fieldNameSizeLimit) {
        if (!self._keyTrunc) {
          if (self._lastPos < pos)
            self._key += chunk.latin1Slice(self._lastPos, pos - 1);
        }
        self._keyTrunc = true;
        for (; pos < len; ++pos) {
          const code = chunk[pos];
          if (code === 61 || code === 38)
            break;
          ++self._bytesKey;
        }
        self._lastPos = pos;
      }
      return pos;
    }
    function skipValBytes(self, chunk, pos, len) {
      if (self._bytesVal > self.fieldSizeLimit) {
        if (!self._valTrunc) {
          if (self._lastPos < pos)
            self._val += chunk.latin1Slice(self._lastPos, pos - 1);
        }
        self._valTrunc = true;
        for (; pos < len; ++pos) {
          if (chunk[pos] === 38)
            break;
          ++self._bytesVal;
        }
        self._lastPos = pos;
      }
      return pos;
    }
    var HEX_VALUES = [
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      10,
      11,
      12,
      13,
      14,
      15,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      10,
      11,
      12,
      13,
      14,
      15,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1
    ];
    module2.exports = URLEncoded;
  }
});

// node_modules/busboy/lib/index.js
var require_lib = __commonJS({
  "node_modules/busboy/lib/index.js"(exports, module2) {
    "use strict";
    init_shims();
    var { parseContentType } = require_utils();
    function getInstance(cfg) {
      const headers = cfg.headers;
      const conType = parseContentType(headers["content-type"]);
      if (!conType)
        throw new Error("Malformed content type");
      for (const type of TYPES) {
        const matched = type.detect(conType);
        if (!matched)
          continue;
        const instanceCfg = {
          limits: cfg.limits,
          headers,
          conType,
          highWaterMark: void 0,
          fileHwm: void 0,
          defCharset: void 0,
          defParamCharset: void 0,
          preservePath: false
        };
        if (cfg.highWaterMark)
          instanceCfg.highWaterMark = cfg.highWaterMark;
        if (cfg.fileHwm)
          instanceCfg.fileHwm = cfg.fileHwm;
        instanceCfg.defCharset = cfg.defCharset;
        instanceCfg.defParamCharset = cfg.defParamCharset;
        instanceCfg.preservePath = cfg.preservePath;
        return new type(instanceCfg);
      }
      throw new Error(`Unsupported content type: ${headers["content-type"]}`);
    }
    var TYPES = [
      require_multipart(),
      require_urlencoded()
    ].filter(function(typemod) {
      return typeof typemod.detect === "function";
    });
    module2.exports = (cfg) => {
      if (typeof cfg !== "object" || cfg === null)
        cfg = {};
      if (typeof cfg.headers !== "object" || cfg.headers === null || typeof cfg.headers["content-type"] !== "string") {
        throw new Error("Missing Content-Type");
      }
      return getInstance(cfg);
    };
  }
});

// node_modules/undici/lib/fetch/constants.js
var require_constants = __commonJS({
  "node_modules/undici/lib/fetch/constants.js"(exports, module2) {
    "use strict";
    init_shims();
    var { MessageChannel, receiveMessageOnPort } = require("worker_threads");
    var corsSafeListedMethods = ["GET", "HEAD", "POST"];
    var nullBodyStatus = [101, 204, 205, 304];
    var redirectStatus = [301, 302, 303, 307, 308];
    var badPorts = [
      "1",
      "7",
      "9",
      "11",
      "13",
      "15",
      "17",
      "19",
      "20",
      "21",
      "22",
      "23",
      "25",
      "37",
      "42",
      "43",
      "53",
      "69",
      "77",
      "79",
      "87",
      "95",
      "101",
      "102",
      "103",
      "104",
      "109",
      "110",
      "111",
      "113",
      "115",
      "117",
      "119",
      "123",
      "135",
      "137",
      "139",
      "143",
      "161",
      "179",
      "389",
      "427",
      "465",
      "512",
      "513",
      "514",
      "515",
      "526",
      "530",
      "531",
      "532",
      "540",
      "548",
      "554",
      "556",
      "563",
      "587",
      "601",
      "636",
      "989",
      "990",
      "993",
      "995",
      "1719",
      "1720",
      "1723",
      "2049",
      "3659",
      "4045",
      "5060",
      "5061",
      "6000",
      "6566",
      "6665",
      "6666",
      "6667",
      "6668",
      "6669",
      "6697",
      "10080"
    ];
    var referrerPolicy = [
      "",
      "no-referrer",
      "no-referrer-when-downgrade",
      "same-origin",
      "origin",
      "strict-origin",
      "origin-when-cross-origin",
      "strict-origin-when-cross-origin",
      "unsafe-url"
    ];
    var requestRedirect = ["follow", "manual", "error"];
    var safeMethods = ["GET", "HEAD", "OPTIONS", "TRACE"];
    var requestMode = ["navigate", "same-origin", "no-cors", "cors"];
    var requestCredentials = ["omit", "same-origin", "include"];
    var requestCache = [
      "default",
      "no-store",
      "reload",
      "no-cache",
      "force-cache",
      "only-if-cached"
    ];
    var requestBodyHeader = [
      "content-encoding",
      "content-language",
      "content-location",
      "content-type"
    ];
    var requestDuplex = [
      "half"
    ];
    var forbiddenMethods = ["CONNECT", "TRACE", "TRACK"];
    var subresource = [
      "audio",
      "audioworklet",
      "font",
      "image",
      "manifest",
      "paintworklet",
      "script",
      "style",
      "track",
      "video",
      "xslt",
      ""
    ];
    var DOMException = globalThis.DOMException ?? (() => {
      try {
        atob("~");
      } catch (err) {
        return Object.getPrototypeOf(err).constructor;
      }
    })();
    var channel;
    var structuredClone = globalThis.structuredClone ?? // https://github.com/nodejs/node/blob/b27ae24dcc4251bad726d9d84baf678d1f707fed/lib/internal/structured_clone.js
    // structuredClone was added in v17.0.0, but fetch supports v16.8
    function structuredClone2(value, options2 = void 0) {
      if (arguments.length === 0) {
        throw new TypeError("missing argument");
      }
      if (!channel) {
        channel = new MessageChannel();
      }
      channel.port1.unref();
      channel.port2.unref();
      channel.port1.postMessage(value, options2 == null ? void 0 : options2.transfer);
      return receiveMessageOnPort(channel.port2).message;
    };
    module2.exports = {
      DOMException,
      structuredClone,
      subresource,
      forbiddenMethods,
      requestBodyHeader,
      referrerPolicy,
      requestRedirect,
      requestMode,
      requestCredentials,
      requestCache,
      redirectStatus,
      corsSafeListedMethods,
      nullBodyStatus,
      safeMethods,
      badPorts,
      requestDuplex
    };
  }
});

// node_modules/undici/lib/fetch/util.js
var require_util2 = __commonJS({
  "node_modules/undici/lib/fetch/util.js"(exports, module2) {
    "use strict";
    init_shims();
    var { redirectStatus, badPorts, referrerPolicy: referrerPolicyTokens } = require_constants();
    var { performance: performance2 } = require("perf_hooks");
    var { isBlobLike, toUSVString, ReadableStreamFrom } = require_util();
    var assert = require("assert");
    var { isUint8Array } = require("util/types");
    var crypto3;
    try {
      crypto3 = require("crypto");
    } catch {
    }
    function responseURL(response) {
      const urlList = response.urlList;
      const length = urlList.length;
      return length === 0 ? null : urlList[length - 1].toString();
    }
    function responseLocationURL(response, requestFragment) {
      if (!redirectStatus.includes(response.status)) {
        return null;
      }
      let location2 = response.headersList.get("location");
      location2 = location2 ? new URL(location2, responseURL(response)) : null;
      if (location2 && !location2.hash) {
        location2.hash = requestFragment;
      }
      return location2;
    }
    function requestCurrentURL(request) {
      return request.urlList[request.urlList.length - 1];
    }
    function requestBadPort(request) {
      const url = requestCurrentURL(request);
      if (/^https?:/.test(url.protocol) && badPorts.includes(url.port)) {
        return "blocked";
      }
      return "allowed";
    }
    function isErrorLike(object) {
      var _a, _b;
      return object instanceof Error || (((_a = object == null ? void 0 : object.constructor) == null ? void 0 : _a.name) === "Error" || ((_b = object == null ? void 0 : object.constructor) == null ? void 0 : _b.name) === "DOMException");
    }
    function isValidReasonPhrase(statusText) {
      for (let i3 = 0; i3 < statusText.length; ++i3) {
        const c = statusText.charCodeAt(i3);
        if (!(c === 9 || // HTAB
        c >= 32 && c <= 126 || // SP / VCHAR
        c >= 128 && c <= 255)) {
          return false;
        }
      }
      return true;
    }
    function isTokenChar(c) {
      return !(c >= 127 || c <= 32 || c === "(" || c === ")" || c === "<" || c === ">" || c === "@" || c === "," || c === ";" || c === ":" || c === "\\" || c === '"' || c === "/" || c === "[" || c === "]" || c === "?" || c === "=" || c === "{" || c === "}");
    }
    function isValidHTTPToken(characters) {
      if (!characters || typeof characters !== "string") {
        return false;
      }
      for (let i3 = 0; i3 < characters.length; ++i3) {
        const c = characters.charCodeAt(i3);
        if (c > 127 || !isTokenChar(c)) {
          return false;
        }
      }
      return true;
    }
    function isValidHeaderName(potentialValue) {
      if (potentialValue.length === 0) {
        return false;
      }
      return isValidHTTPToken(potentialValue);
    }
    function isValidHeaderValue(potentialValue) {
      if (potentialValue.startsWith("	") || potentialValue.startsWith(" ") || potentialValue.endsWith("	") || potentialValue.endsWith(" ")) {
        return false;
      }
      if (potentialValue.includes("\0") || potentialValue.includes("\r") || potentialValue.includes("\n")) {
        return false;
      }
      return true;
    }
    function setRequestReferrerPolicyOnRedirect(request, actualResponse) {
      const { headersList } = actualResponse;
      const policyHeader = (headersList.get("referrer-policy") ?? "").split(",");
      let policy = "";
      if (policyHeader.length > 0) {
        for (let i3 = policyHeader.length; i3 !== 0; i3--) {
          const token = policyHeader[i3 - 1].trim();
          if (referrerPolicyTokens.includes(token)) {
            policy = token;
            break;
          }
        }
      }
      if (policy !== "") {
        request.referrerPolicy = policy;
      }
    }
    function crossOriginResourcePolicyCheck() {
      return "allowed";
    }
    function corsCheck() {
      return "success";
    }
    function TAOCheck() {
      return "success";
    }
    function appendFetchMetadata(httpRequest) {
      let header = null;
      header = httpRequest.mode;
      httpRequest.headersList.set("sec-fetch-mode", header);
    }
    function appendRequestOriginHeader(request) {
      let serializedOrigin = request.origin;
      if (request.responseTainting === "cors" || request.mode === "websocket") {
        if (serializedOrigin) {
          request.headersList.append("Origin", serializedOrigin);
        }
      } else if (request.method !== "GET" && request.method !== "HEAD") {
        switch (request.referrerPolicy) {
          case "no-referrer":
            serializedOrigin = null;
            break;
          case "no-referrer-when-downgrade":
          case "strict-origin":
          case "strict-origin-when-cross-origin":
            if (/^https:/.test(request.origin) && !/^https:/.test(requestCurrentURL(request))) {
              serializedOrigin = null;
            }
            break;
          case "same-origin":
            if (!sameOrigin(request, requestCurrentURL(request))) {
              serializedOrigin = null;
            }
            break;
          default:
        }
        if (serializedOrigin) {
          request.headersList.append("Origin", serializedOrigin);
        }
      }
    }
    function coarsenedSharedCurrentTime(crossOriginIsolatedCapability) {
      return performance2.now();
    }
    function createOpaqueTimingInfo(timingInfo) {
      return {
        startTime: timingInfo.startTime ?? 0,
        redirectStartTime: 0,
        redirectEndTime: 0,
        postRedirectStartTime: timingInfo.startTime ?? 0,
        finalServiceWorkerStartTime: 0,
        finalNetworkResponseStartTime: 0,
        finalNetworkRequestStartTime: 0,
        endTime: 0,
        encodedBodySize: 0,
        decodedBodySize: 0,
        finalConnectionTimingInfo: null
      };
    }
    function makePolicyContainer() {
      return {};
    }
    function clonePolicyContainer() {
      return {};
    }
    function determineRequestsReferrer(request) {
      var _a, _b, _c, _d, _e, _f;
      const policy = request.referrerPolicy;
      if (policy == null || policy === "" || policy === "no-referrer") {
        return "no-referrer";
      }
      const environment = request.client;
      let referrerSource = null;
      if (request.referrer === "client") {
        if (((_c = (_b = (_a = request.client) == null ? void 0 : _a.globalObject) == null ? void 0 : _b.constructor) == null ? void 0 : _c.name) === "Window") {
          const origin = ((_d = environment.globalObject.self) == null ? void 0 : _d.origin) ?? ((_e = environment.globalObject.location) == null ? void 0 : _e.origin);
          if (origin == null || origin === "null")
            return "no-referrer";
          referrerSource = new URL(environment.globalObject.location.href);
        } else {
          if (((_f = environment == null ? void 0 : environment.globalObject) == null ? void 0 : _f.location) == null) {
            return "no-referrer";
          }
          referrerSource = new URL(environment.globalObject.location.href);
        }
      } else if (request.referrer instanceof URL) {
        referrerSource = request.referrer;
      } else {
        return "no-referrer";
      }
      const urlProtocol = referrerSource.protocol;
      if (urlProtocol === "about:" || urlProtocol === "data:" || urlProtocol === "blob:") {
        return "no-referrer";
      }
      let temp;
      let referrerOrigin;
      const referrerUrl = (temp = stripURLForReferrer(referrerSource)).length > 4096 ? referrerOrigin = stripURLForReferrer(referrerSource, true) : temp;
      const areSameOrigin = sameOrigin(request, referrerUrl);
      const isNonPotentiallyTrustWorthy = isURLPotentiallyTrustworthy(referrerUrl) && !isURLPotentiallyTrustworthy(request.url);
      switch (policy) {
        case "origin":
          return referrerOrigin != null ? referrerOrigin : stripURLForReferrer(referrerSource, true);
        case "unsafe-url":
          return referrerUrl;
        case "same-origin":
          return areSameOrigin ? referrerOrigin : "no-referrer";
        case "origin-when-cross-origin":
          return areSameOrigin ? referrerUrl : referrerOrigin;
        case "strict-origin-when-cross-origin":
          if (areSameOrigin)
            return referrerOrigin;
        case "strict-origin":
        case "no-referrer-when-downgrade":
        default:
          return isNonPotentiallyTrustWorthy ? "no-referrer" : referrerOrigin;
      }
      function stripURLForReferrer(url, originOnly = false) {
        const urlObject = new URL(url.href);
        urlObject.username = "";
        urlObject.password = "";
        urlObject.hash = "";
        return originOnly ? urlObject.origin : urlObject.href;
      }
    }
    function isURLPotentiallyTrustworthy(url) {
      if (!(url instanceof URL)) {
        return false;
      }
      if (url.href === "about:blank" || url.href === "about:srcdoc") {
        return true;
      }
      if (url.protocol === "data:")
        return true;
      if (url.protocol === "file:")
        return true;
      return isOriginPotentiallyTrustworthy(url.origin);
      function isOriginPotentiallyTrustworthy(origin) {
        if (origin == null || origin === "null")
          return false;
        const originAsURL = new URL(origin);
        if (originAsURL.protocol === "https:" || originAsURL.protocol === "wss:") {
          return true;
        }
        if (/^127(?:\.[0-9]+){0,2}\.[0-9]+$|^\[(?:0*:)*?:?0*1\]$/.test(originAsURL.hostname) || (originAsURL.hostname === "localhost" || originAsURL.hostname.includes("localhost.")) || originAsURL.hostname.endsWith(".localhost")) {
          return true;
        }
        return false;
      }
    }
    function bytesMatch(bytes, metadataList) {
      if (crypto3 === void 0) {
        return true;
      }
      const parsedMetadata = parseMetadata(metadataList);
      if (parsedMetadata === "no metadata") {
        return true;
      }
      if (parsedMetadata.length === 0) {
        return true;
      }
      const list = parsedMetadata.sort((c, d) => d.algo.localeCompare(c.algo));
      const strongest = list[0].algo;
      const metadata = list.filter((item) => item.algo === strongest);
      for (const item of metadata) {
        const algorithm = item.algo;
        const expectedValue = item.hash;
        const actualValue = crypto3.createHash(algorithm).update(bytes).digest("base64");
        if (actualValue === expectedValue) {
          return true;
        }
      }
      return false;
    }
    var parseHashWithOptions = /((?<algo>sha256|sha384|sha512)-(?<hash>[A-z0-9+/]{1}.*={0,2}))( +[\x21-\x7e]?)?/i;
    function parseMetadata(metadata) {
      const result = [];
      let empty = true;
      const supportedHashes = crypto3.getHashes();
      for (const token of metadata.split(" ")) {
        empty = false;
        const parsedToken = parseHashWithOptions.exec(token);
        if (parsedToken === null || parsedToken.groups === void 0) {
          continue;
        }
        const algorithm = parsedToken.groups.algo;
        if (supportedHashes.includes(algorithm.toLowerCase())) {
          result.push(parsedToken.groups);
        }
      }
      if (empty === true) {
        return "no metadata";
      }
      return result;
    }
    function tryUpgradeRequestToAPotentiallyTrustworthyURL(request) {
    }
    function sameOrigin(A, B) {
      if (A.protocol === B.protocol && A.hostname === B.hostname && A.port === B.port) {
        return true;
      }
      return false;
    }
    function createDeferredPromise() {
      let res;
      let rej;
      const promise = new Promise((resolve, reject) => {
        res = resolve;
        rej = reject;
      });
      return { promise, resolve: res, reject: rej };
    }
    function isAborted(fetchParams) {
      return fetchParams.controller.state === "aborted";
    }
    function isCancelled(fetchParams) {
      return fetchParams.controller.state === "aborted" || fetchParams.controller.state === "terminated";
    }
    function normalizeMethod(method) {
      return /^(DELETE|GET|HEAD|OPTIONS|POST|PUT)$/i.test(method) ? method.toUpperCase() : method;
    }
    function serializeJavascriptValueToJSONString(value) {
      const result = JSON.stringify(value);
      if (result === void 0) {
        throw new TypeError("Value is not JSON serializable");
      }
      assert(typeof result === "string");
      return result;
    }
    var esIteratorPrototype = Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]()));
    function makeIterator(iterator, name, kind) {
      const object = {
        index: 0,
        kind,
        target: iterator
      };
      const i3 = {
        next() {
          if (Object.getPrototypeOf(this) !== i3) {
            throw new TypeError(
              `'next' called on an object that does not implement interface ${name} Iterator.`
            );
          }
          const { index: index11, kind: kind2, target } = object;
          const values = target();
          const len = values.length;
          if (index11 >= len) {
            return { value: void 0, done: true };
          }
          const pair = values[index11];
          object.index = index11 + 1;
          return iteratorResult(pair, kind2);
        },
        // The class string of an iterator prototype object for a given interface is the
        // result of concatenating the identifier of the interface and the string " Iterator".
        [Symbol.toStringTag]: `${name} Iterator`
      };
      Object.setPrototypeOf(i3, esIteratorPrototype);
      return Object.setPrototypeOf({}, i3);
    }
    function iteratorResult(pair, kind) {
      let result;
      switch (kind) {
        case "key": {
          result = pair[0];
          break;
        }
        case "value": {
          result = pair[1];
          break;
        }
        case "key+value": {
          result = pair;
          break;
        }
      }
      return { value: result, done: false };
    }
    function fullyReadBody(body, processBody, processBodyError) {
      const successSteps = (bytes) => queueMicrotask(() => processBody(bytes));
      const errorSteps = (error2) => queueMicrotask(() => processBodyError(error2));
      let reader;
      try {
        reader = body.stream.getReader();
      } catch (e3) {
        errorSteps(e3);
        return;
      }
      readAllBytes(reader, successSteps, errorSteps);
    }
    var ReadableStream3 = globalThis.ReadableStream;
    function isReadableStreamLike(stream) {
      if (!ReadableStream3) {
        ReadableStream3 = require("stream/web").ReadableStream;
      }
      return stream instanceof ReadableStream3 || stream[Symbol.toStringTag] === "ReadableStream" && typeof stream.tee === "function";
    }
    var MAXIMUM_ARGUMENT_LENGTH = 65535;
    function isomorphicDecode(input) {
      if (input.length < MAXIMUM_ARGUMENT_LENGTH) {
        return String.fromCharCode(...input);
      }
      return input.reduce((previous, current) => previous + String.fromCharCode(current), "");
    }
    function readableStreamClose(controller) {
      try {
        controller.close();
      } catch (err) {
        if (!err.message.includes("Controller is already closed")) {
          throw err;
        }
      }
    }
    function isomorphicEncode(input) {
      for (let i3 = 0; i3 < input.length; i3++) {
        assert(input.charCodeAt(i3) <= 255);
      }
      return input;
    }
    async function readAllBytes(reader, successSteps, failureSteps) {
      const bytes = [];
      let byteLength = 0;
      while (true) {
        let done;
        let chunk;
        try {
          ({ done, value: chunk } = await reader.read());
        } catch (e3) {
          failureSteps(e3);
          return;
        }
        if (done) {
          successSteps(Buffer.concat(bytes, byteLength));
          return;
        }
        if (!isUint8Array(chunk)) {
          failureSteps(new TypeError("Received non-Uint8Array chunk"));
          return;
        }
        bytes.push(chunk);
        byteLength += chunk.length;
      }
    }
    var hasOwn = Object.hasOwn || ((dict, key2) => Object.prototype.hasOwnProperty.call(dict, key2));
    module2.exports = {
      isAborted,
      isCancelled,
      createDeferredPromise,
      ReadableStreamFrom,
      toUSVString,
      tryUpgradeRequestToAPotentiallyTrustworthyURL,
      coarsenedSharedCurrentTime,
      determineRequestsReferrer,
      makePolicyContainer,
      clonePolicyContainer,
      appendFetchMetadata,
      appendRequestOriginHeader,
      TAOCheck,
      corsCheck,
      crossOriginResourcePolicyCheck,
      createOpaqueTimingInfo,
      setRequestReferrerPolicyOnRedirect,
      isValidHTTPToken,
      requestBadPort,
      requestCurrentURL,
      responseURL,
      responseLocationURL,
      isBlobLike,
      isURLPotentiallyTrustworthy,
      isValidReasonPhrase,
      sameOrigin,
      normalizeMethod,
      serializeJavascriptValueToJSONString,
      makeIterator,
      isValidHeaderName,
      isValidHeaderValue,
      hasOwn,
      isErrorLike,
      fullyReadBody,
      bytesMatch,
      isReadableStreamLike,
      readableStreamClose,
      isomorphicEncode,
      isomorphicDecode
    };
  }
});

// node_modules/undici/lib/fetch/symbols.js
var require_symbols2 = __commonJS({
  "node_modules/undici/lib/fetch/symbols.js"(exports, module2) {
    "use strict";
    init_shims();
    module2.exports = {
      kUrl: Symbol("url"),
      kHeaders: Symbol("headers"),
      kSignal: Symbol("signal"),
      kState: Symbol("state"),
      kGuard: Symbol("guard"),
      kRealm: Symbol("realm"),
      kHeadersCaseInsensitive: Symbol("headers case insensitive")
    };
  }
});

// node_modules/undici/lib/fetch/webidl.js
var require_webidl = __commonJS({
  "node_modules/undici/lib/fetch/webidl.js"(exports, module2) {
    "use strict";
    init_shims();
    var { types } = require("util");
    var { hasOwn, toUSVString } = require_util2();
    var webidl = {};
    webidl.converters = {};
    webidl.util = {};
    webidl.errors = {};
    webidl.errors.exception = function(message) {
      return new TypeError(`${message.header}: ${message.message}`);
    };
    webidl.errors.conversionFailed = function(context) {
      const plural = context.types.length === 1 ? "" : " one of";
      const message = `${context.argument} could not be converted to${plural}: ${context.types.join(", ")}.`;
      return webidl.errors.exception({
        header: context.prefix,
        message
      });
    };
    webidl.errors.invalidArgument = function(context) {
      return webidl.errors.exception({
        header: context.prefix,
        message: `"${context.value}" is an invalid ${context.type}.`
      });
    };
    webidl.brandCheck = function(V, I, opts = void 0) {
      if ((opts == null ? void 0 : opts.strict) !== false && !(V instanceof I)) {
        throw new TypeError("Illegal invocation");
      } else {
        return (V == null ? void 0 : V[Symbol.toStringTag]) === I.prototype[Symbol.toStringTag];
      }
    };
    webidl.argumentLengthCheck = function({ length }, min, ctx) {
      if (length < min) {
        throw webidl.errors.exception({
          message: `${min} argument${min !== 1 ? "s" : ""} required, but${length ? " only" : ""} ${length} found.`,
          ...ctx
        });
      }
    };
    webidl.util.Type = function(V) {
      switch (typeof V) {
        case "undefined":
          return "Undefined";
        case "boolean":
          return "Boolean";
        case "string":
          return "String";
        case "symbol":
          return "Symbol";
        case "number":
          return "Number";
        case "bigint":
          return "BigInt";
        case "function":
        case "object": {
          if (V === null) {
            return "Null";
          }
          return "Object";
        }
      }
    };
    webidl.util.ConvertToInt = function(V, bitLength, signedness, opts = {}) {
      let upperBound;
      let lowerBound;
      if (bitLength === 64) {
        upperBound = Math.pow(2, 53) - 1;
        if (signedness === "unsigned") {
          lowerBound = 0;
        } else {
          lowerBound = Math.pow(-2, 53) + 1;
        }
      } else if (signedness === "unsigned") {
        lowerBound = 0;
        upperBound = Math.pow(2, bitLength) - 1;
      } else {
        lowerBound = Math.pow(-2, bitLength) - 1;
        upperBound = Math.pow(2, bitLength - 1) - 1;
      }
      let x = Number(V);
      if (x === 0) {
        x = 0;
      }
      if (opts.enforceRange === true) {
        if (Number.isNaN(x) || x === Number.POSITIVE_INFINITY || x === Number.NEGATIVE_INFINITY) {
          throw webidl.errors.exception({
            header: "Integer conversion",
            message: `Could not convert ${V} to an integer.`
          });
        }
        x = webidl.util.IntegerPart(x);
        if (x < lowerBound || x > upperBound) {
          throw webidl.errors.exception({
            header: "Integer conversion",
            message: `Value must be between ${lowerBound}-${upperBound}, got ${x}.`
          });
        }
        return x;
      }
      if (!Number.isNaN(x) && opts.clamp === true) {
        x = Math.min(Math.max(x, lowerBound), upperBound);
        if (Math.floor(x) % 2 === 0) {
          x = Math.floor(x);
        } else {
          x = Math.ceil(x);
        }
        return x;
      }
      if (Number.isNaN(x) || x === 0 && Object.is(0, x) || x === Number.POSITIVE_INFINITY || x === Number.NEGATIVE_INFINITY) {
        return 0;
      }
      x = webidl.util.IntegerPart(x);
      x = x % Math.pow(2, bitLength);
      if (signedness === "signed" && x >= Math.pow(2, bitLength) - 1) {
        return x - Math.pow(2, bitLength);
      }
      return x;
    };
    webidl.util.IntegerPart = function(n2) {
      const r2 = Math.floor(Math.abs(n2));
      if (n2 < 0) {
        return -1 * r2;
      }
      return r2;
    };
    webidl.sequenceConverter = function(converter) {
      return (V) => {
        var _a;
        if (webidl.util.Type(V) !== "Object") {
          throw webidl.errors.exception({
            header: "Sequence",
            message: `Value of type ${webidl.util.Type(V)} is not an Object.`
          });
        }
        const method = (_a = V == null ? void 0 : V[Symbol.iterator]) == null ? void 0 : _a.call(V);
        const seq = [];
        if (method === void 0 || typeof method.next !== "function") {
          throw webidl.errors.exception({
            header: "Sequence",
            message: "Object is not an iterator."
          });
        }
        while (true) {
          const { done, value } = method.next();
          if (done) {
            break;
          }
          seq.push(converter(value));
        }
        return seq;
      };
    };
    webidl.recordConverter = function(keyConverter, valueConverter) {
      return (O) => {
        if (webidl.util.Type(O) !== "Object") {
          throw webidl.errors.exception({
            header: "Record",
            message: `Value of type ${webidl.util.Type(O)} is not an Object.`
          });
        }
        const result = {};
        if (!types.isProxy(O)) {
          const keys2 = Object.keys(O);
          for (const key2 of keys2) {
            const typedKey = keyConverter(key2);
            const typedValue = valueConverter(O[key2]);
            result[typedKey] = typedValue;
          }
          return result;
        }
        const keys = Reflect.ownKeys(O);
        for (const key2 of keys) {
          const desc = Reflect.getOwnPropertyDescriptor(O, key2);
          if (desc == null ? void 0 : desc.enumerable) {
            const typedKey = keyConverter(key2);
            const typedValue = valueConverter(O[key2]);
            result[typedKey] = typedValue;
          }
        }
        return result;
      };
    };
    webidl.interfaceConverter = function(i3) {
      return (V, opts = {}) => {
        if (opts.strict !== false && !(V instanceof i3)) {
          throw webidl.errors.exception({
            header: i3.name,
            message: `Expected ${V} to be an instance of ${i3.name}.`
          });
        }
        return V;
      };
    };
    webidl.dictionaryConverter = function(converters) {
      return (dictionary) => {
        const type = webidl.util.Type(dictionary);
        const dict = {};
        if (type === "Null" || type === "Undefined") {
          return dict;
        } else if (type !== "Object") {
          throw webidl.errors.exception({
            header: "Dictionary",
            message: `Expected ${dictionary} to be one of: Null, Undefined, Object.`
          });
        }
        for (const options2 of converters) {
          const { key: key2, defaultValue, required, converter } = options2;
          if (required === true) {
            if (!hasOwn(dictionary, key2)) {
              throw webidl.errors.exception({
                header: "Dictionary",
                message: `Missing required key "${key2}".`
              });
            }
          }
          let value = dictionary[key2];
          const hasDefault = hasOwn(options2, "defaultValue");
          if (hasDefault && value !== null) {
            value = value ?? defaultValue;
          }
          if (required || hasDefault || value !== void 0) {
            value = converter(value);
            if (options2.allowedValues && !options2.allowedValues.includes(value)) {
              throw webidl.errors.exception({
                header: "Dictionary",
                message: `${value} is not an accepted type. Expected one of ${options2.allowedValues.join(", ")}.`
              });
            }
            dict[key2] = value;
          }
        }
        return dict;
      };
    };
    webidl.nullableConverter = function(converter) {
      return (V) => {
        if (V === null) {
          return V;
        }
        return converter(V);
      };
    };
    webidl.converters.DOMString = function(V, opts = {}) {
      if (V === null && opts.legacyNullToEmptyString) {
        return "";
      }
      if (typeof V === "symbol") {
        throw new TypeError("Could not convert argument of type symbol to string.");
      }
      return String(V);
    };
    webidl.converters.ByteString = function(V) {
      const x = webidl.converters.DOMString(V);
      for (let index11 = 0; index11 < x.length; index11++) {
        const charCode = x.charCodeAt(index11);
        if (charCode > 255) {
          throw new TypeError(
            `Cannot convert argument to a ByteString because the character at index ${index11} has a value of ${charCode} which is greater than 255.`
          );
        }
      }
      return x;
    };
    webidl.converters.USVString = toUSVString;
    webidl.converters.boolean = function(V) {
      const x = Boolean(V);
      return x;
    };
    webidl.converters.any = function(V) {
      return V;
    };
    webidl.converters["long long"] = function(V) {
      const x = webidl.util.ConvertToInt(V, 64, "signed");
      return x;
    };
    webidl.converters["unsigned long long"] = function(V) {
      const x = webidl.util.ConvertToInt(V, 64, "unsigned");
      return x;
    };
    webidl.converters["unsigned long"] = function(V) {
      const x = webidl.util.ConvertToInt(V, 32, "unsigned");
      return x;
    };
    webidl.converters["unsigned short"] = function(V, opts) {
      const x = webidl.util.ConvertToInt(V, 16, "unsigned", opts);
      return x;
    };
    webidl.converters.ArrayBuffer = function(V, opts = {}) {
      if (webidl.util.Type(V) !== "Object" || !types.isAnyArrayBuffer(V)) {
        throw webidl.errors.conversionFailed({
          prefix: `${V}`,
          argument: `${V}`,
          types: ["ArrayBuffer"]
        });
      }
      if (opts.allowShared === false && types.isSharedArrayBuffer(V)) {
        throw webidl.errors.exception({
          header: "ArrayBuffer",
          message: "SharedArrayBuffer is not allowed."
        });
      }
      return V;
    };
    webidl.converters.TypedArray = function(V, T, opts = {}) {
      if (webidl.util.Type(V) !== "Object" || !types.isTypedArray(V) || V.constructor.name !== T.name) {
        throw webidl.errors.conversionFailed({
          prefix: `${T.name}`,
          argument: `${V}`,
          types: [T.name]
        });
      }
      if (opts.allowShared === false && types.isSharedArrayBuffer(V.buffer)) {
        throw webidl.errors.exception({
          header: "ArrayBuffer",
          message: "SharedArrayBuffer is not allowed."
        });
      }
      return V;
    };
    webidl.converters.DataView = function(V, opts = {}) {
      if (webidl.util.Type(V) !== "Object" || !types.isDataView(V)) {
        throw webidl.errors.exception({
          header: "DataView",
          message: "Object is not a DataView."
        });
      }
      if (opts.allowShared === false && types.isSharedArrayBuffer(V.buffer)) {
        throw webidl.errors.exception({
          header: "ArrayBuffer",
          message: "SharedArrayBuffer is not allowed."
        });
      }
      return V;
    };
    webidl.converters.BufferSource = function(V, opts = {}) {
      if (types.isAnyArrayBuffer(V)) {
        return webidl.converters.ArrayBuffer(V, opts);
      }
      if (types.isTypedArray(V)) {
        return webidl.converters.TypedArray(V, V.constructor);
      }
      if (types.isDataView(V)) {
        return webidl.converters.DataView(V, opts);
      }
      throw new TypeError(`Could not convert ${V} to a BufferSource.`);
    };
    webidl.converters["sequence<ByteString>"] = webidl.sequenceConverter(
      webidl.converters.ByteString
    );
    webidl.converters["sequence<sequence<ByteString>>"] = webidl.sequenceConverter(
      webidl.converters["sequence<ByteString>"]
    );
    webidl.converters["record<ByteString, ByteString>"] = webidl.recordConverter(
      webidl.converters.ByteString,
      webidl.converters.ByteString
    );
    module2.exports = {
      webidl
    };
  }
});

// node_modules/undici/lib/fetch/dataURL.js
var require_dataURL = __commonJS({
  "node_modules/undici/lib/fetch/dataURL.js"(exports, module2) {
    init_shims();
    var assert = require("assert");
    var { atob: atob2 } = require("buffer");
    var { format } = require("url");
    var { isValidHTTPToken, isomorphicDecode } = require_util2();
    var encoder3 = new TextEncoder();
    var HTTP_TOKEN_CODEPOINTS = /^[!#$%&'*+-.^_|~A-z0-9]+$/;
    var HTTP_WHITESPACE_REGEX = /(\u000A|\u000D|\u0009|\u0020)/;
    var HTTP_QUOTED_STRING_TOKENS = /^(\u0009|\x{0020}-\x{007E}|\x{0080}-\x{00FF})+$/;
    function dataURLProcessor(dataURL) {
      assert(dataURL.protocol === "data:");
      let input = URLSerializer(dataURL, true);
      input = input.slice(5);
      const position = { position: 0 };
      let mimeType = collectASequenceOfCodePointsFast(
        ",",
        input,
        position
      );
      const mimeTypeLength = mimeType.length;
      mimeType = mimeType.replace(/^(\u0020)+|(\u0020)+$/g, "");
      if (position.position >= input.length) {
        return "failure";
      }
      position.position++;
      const encodedBody = input.slice(mimeTypeLength + 1);
      let body = stringPercentDecode(encodedBody);
      if (/;(\u0020){0,}base64$/i.test(mimeType)) {
        const stringBody = isomorphicDecode(body);
        body = forgivingBase64(stringBody);
        if (body === "failure") {
          return "failure";
        }
        mimeType = mimeType.slice(0, -6);
        mimeType = mimeType.replace(/(\u0020)+$/, "");
        mimeType = mimeType.slice(0, -1);
      }
      if (mimeType.startsWith(";")) {
        mimeType = "text/plain" + mimeType;
      }
      let mimeTypeRecord = parseMIMEType(mimeType);
      if (mimeTypeRecord === "failure") {
        mimeTypeRecord = parseMIMEType("text/plain;charset=US-ASCII");
      }
      return { mimeType: mimeTypeRecord, body };
    }
    function URLSerializer(url, excludeFragment = false) {
      return format(url, { fragment: !excludeFragment });
    }
    function collectASequenceOfCodePoints(condition, input, position) {
      let result = "";
      while (position.position < input.length && condition(input[position.position])) {
        result += input[position.position];
        position.position++;
      }
      return result;
    }
    function collectASequenceOfCodePointsFast(char, input, position) {
      const idx = input.indexOf(char, position.position);
      const start2 = position.position;
      if (idx === -1) {
        position.position = input.length;
        return input.slice(start2);
      }
      position.position = idx;
      return input.slice(start2, position.position);
    }
    function stringPercentDecode(input) {
      const bytes = encoder3.encode(input);
      return percentDecode(bytes);
    }
    function percentDecode(input) {
      const output = [];
      for (let i3 = 0; i3 < input.length; i3++) {
        const byte = input[i3];
        if (byte !== 37) {
          output.push(byte);
        } else if (byte === 37 && !/^[0-9A-Fa-f]{2}$/i.test(String.fromCharCode(input[i3 + 1], input[i3 + 2]))) {
          output.push(37);
        } else {
          const nextTwoBytes = String.fromCharCode(input[i3 + 1], input[i3 + 2]);
          const bytePoint = Number.parseInt(nextTwoBytes, 16);
          output.push(bytePoint);
          i3 += 2;
        }
      }
      return Uint8Array.from(output);
    }
    function parseMIMEType(input) {
      input = input.trim();
      const position = { position: 0 };
      const type = collectASequenceOfCodePointsFast(
        "/",
        input,
        position
      );
      if (type.length === 0 || !HTTP_TOKEN_CODEPOINTS.test(type)) {
        return "failure";
      }
      if (position.position > input.length) {
        return "failure";
      }
      position.position++;
      let subtype = collectASequenceOfCodePointsFast(
        ";",
        input,
        position
      );
      subtype = subtype.trimEnd();
      if (subtype.length === 0 || !HTTP_TOKEN_CODEPOINTS.test(subtype)) {
        return "failure";
      }
      const mimeType = {
        type: type.toLowerCase(),
        subtype: subtype.toLowerCase(),
        /** @type {Map<string, string>} */
        parameters: /* @__PURE__ */ new Map(),
        // https://mimesniff.spec.whatwg.org/#mime-type-essence
        essence: `${type}/${subtype}`
      };
      while (position.position < input.length) {
        position.position++;
        collectASequenceOfCodePoints(
          // https://fetch.spec.whatwg.org/#http-whitespace
          (char) => HTTP_WHITESPACE_REGEX.test(char),
          input,
          position
        );
        let parameterName = collectASequenceOfCodePoints(
          (char) => char !== ";" && char !== "=",
          input,
          position
        );
        parameterName = parameterName.toLowerCase();
        if (position.position < input.length) {
          if (input[position.position] === ";") {
            continue;
          }
          position.position++;
        }
        if (position.position > input.length) {
          break;
        }
        let parameterValue = null;
        if (input[position.position] === '"') {
          parameterValue = collectAnHTTPQuotedString(input, position, true);
          collectASequenceOfCodePointsFast(
            ";",
            input,
            position
          );
        } else {
          parameterValue = collectASequenceOfCodePointsFast(
            ";",
            input,
            position
          );
          parameterValue = parameterValue.trimEnd();
          if (parameterValue.length === 0) {
            continue;
          }
        }
        if (parameterName.length !== 0 && HTTP_TOKEN_CODEPOINTS.test(parameterName) && !HTTP_QUOTED_STRING_TOKENS.test(parameterValue) && !mimeType.parameters.has(parameterName)) {
          mimeType.parameters.set(parameterName, parameterValue);
        }
      }
      return mimeType;
    }
    function forgivingBase64(data) {
      data = data.replace(/[\u0009\u000A\u000C\u000D\u0020]/g, "");
      if (data.length % 4 === 0) {
        data = data.replace(/=?=$/, "");
      }
      if (data.length % 4 === 1) {
        return "failure";
      }
      if (/[^+/0-9A-Za-z]/.test(data)) {
        return "failure";
      }
      const binary = atob2(data);
      const bytes = new Uint8Array(binary.length);
      for (let byte = 0; byte < binary.length; byte++) {
        bytes[byte] = binary.charCodeAt(byte);
      }
      return bytes;
    }
    function collectAnHTTPQuotedString(input, position, extractValue) {
      const positionStart = position.position;
      let value = "";
      assert(input[position.position] === '"');
      position.position++;
      while (true) {
        value += collectASequenceOfCodePoints(
          (char) => char !== '"' && char !== "\\",
          input,
          position
        );
        if (position.position >= input.length) {
          break;
        }
        const quoteOrBackslash = input[position.position];
        position.position++;
        if (quoteOrBackslash === "\\") {
          if (position.position >= input.length) {
            value += "\\";
            break;
          }
          value += input[position.position];
          position.position++;
        } else {
          assert(quoteOrBackslash === '"');
          break;
        }
      }
      if (extractValue) {
        return value;
      }
      return input.slice(positionStart, position.position);
    }
    function serializeAMimeType(mimeType) {
      assert(mimeType !== "failure");
      const { type, subtype, parameters } = mimeType;
      let serialization = `${type}/${subtype}`;
      for (let [name, value] of parameters.entries()) {
        serialization += ";";
        serialization += name;
        serialization += "=";
        if (!isValidHTTPToken(value)) {
          value = value.replace(/(\\|")/g, "\\$1");
          value = '"' + value;
          value += '"';
        }
        serialization += value;
      }
      return serialization;
    }
    module2.exports = {
      dataURLProcessor,
      URLSerializer,
      collectASequenceOfCodePoints,
      collectASequenceOfCodePointsFast,
      stringPercentDecode,
      parseMIMEType,
      collectAnHTTPQuotedString,
      serializeAMimeType
    };
  }
});

// node_modules/undici/lib/fetch/file.js
var require_file = __commonJS({
  "node_modules/undici/lib/fetch/file.js"(exports, module2) {
    "use strict";
    init_shims();
    var { Blob: Blob2, File: NativeFile } = require("buffer");
    var { types } = require("util");
    var { kState } = require_symbols2();
    var { isBlobLike } = require_util2();
    var { webidl } = require_webidl();
    var { parseMIMEType, serializeAMimeType } = require_dataURL();
    var { kEnumerableProperty } = require_util();
    var File2 = class extends Blob2 {
      constructor(fileBits, fileName, options2 = {}) {
        webidl.argumentLengthCheck(arguments, 2, { header: "File constructor" });
        fileBits = webidl.converters["sequence<BlobPart>"](fileBits);
        fileName = webidl.converters.USVString(fileName);
        options2 = webidl.converters.FilePropertyBag(options2);
        const n2 = fileName;
        let t2 = options2.type;
        let d;
        substep: {
          if (t2) {
            t2 = parseMIMEType(t2);
            if (t2 === "failure") {
              t2 = "";
              break substep;
            }
            t2 = serializeAMimeType(t2).toLowerCase();
          }
          d = options2.lastModified;
        }
        super(processBlobParts(fileBits, options2), { type: t2 });
        this[kState] = {
          name: n2,
          lastModified: d,
          type: t2
        };
      }
      get name() {
        webidl.brandCheck(this, File2);
        return this[kState].name;
      }
      get lastModified() {
        webidl.brandCheck(this, File2);
        return this[kState].lastModified;
      }
      get type() {
        webidl.brandCheck(this, File2);
        return this[kState].type;
      }
    };
    var FileLike = class {
      constructor(blobLike, fileName, options2 = {}) {
        const n2 = fileName;
        const t2 = options2.type;
        const d = options2.lastModified ?? Date.now();
        this[kState] = {
          blobLike,
          name: n2,
          type: t2,
          lastModified: d
        };
      }
      stream(...args) {
        webidl.brandCheck(this, FileLike);
        return this[kState].blobLike.stream(...args);
      }
      arrayBuffer(...args) {
        webidl.brandCheck(this, FileLike);
        return this[kState].blobLike.arrayBuffer(...args);
      }
      slice(...args) {
        webidl.brandCheck(this, FileLike);
        return this[kState].blobLike.slice(...args);
      }
      text(...args) {
        webidl.brandCheck(this, FileLike);
        return this[kState].blobLike.text(...args);
      }
      get size() {
        webidl.brandCheck(this, FileLike);
        return this[kState].blobLike.size;
      }
      get type() {
        webidl.brandCheck(this, FileLike);
        return this[kState].blobLike.type;
      }
      get name() {
        webidl.brandCheck(this, FileLike);
        return this[kState].name;
      }
      get lastModified() {
        webidl.brandCheck(this, FileLike);
        return this[kState].lastModified;
      }
      get [Symbol.toStringTag]() {
        return "File";
      }
    };
    Object.defineProperties(File2.prototype, {
      [Symbol.toStringTag]: {
        value: "File",
        configurable: true
      },
      name: kEnumerableProperty,
      lastModified: kEnumerableProperty
    });
    webidl.converters.Blob = webidl.interfaceConverter(Blob2);
    webidl.converters.BlobPart = function(V, opts) {
      if (webidl.util.Type(V) === "Object") {
        if (isBlobLike(V)) {
          return webidl.converters.Blob(V, { strict: false });
        }
        if (ArrayBuffer.isView(V) || types.isAnyArrayBuffer(V)) {
          return webidl.converters.BufferSource(V, opts);
        }
      }
      return webidl.converters.USVString(V, opts);
    };
    webidl.converters["sequence<BlobPart>"] = webidl.sequenceConverter(
      webidl.converters.BlobPart
    );
    webidl.converters.FilePropertyBag = webidl.dictionaryConverter([
      {
        key: "lastModified",
        converter: webidl.converters["long long"],
        get defaultValue() {
          return Date.now();
        }
      },
      {
        key: "type",
        converter: webidl.converters.DOMString,
        defaultValue: ""
      },
      {
        key: "endings",
        converter: (value) => {
          value = webidl.converters.DOMString(value);
          value = value.toLowerCase();
          if (value !== "native") {
            value = "transparent";
          }
          return value;
        },
        defaultValue: "transparent"
      }
    ]);
    function processBlobParts(parts, options2) {
      const bytes = [];
      for (const element of parts) {
        if (typeof element === "string") {
          let s5 = element;
          if (options2.endings === "native") {
            s5 = convertLineEndingsNative(s5);
          }
          bytes.push(new TextEncoder().encode(s5));
        } else if (types.isAnyArrayBuffer(element) || types.isTypedArray(element)) {
          if (!element.buffer) {
            bytes.push(new Uint8Array(element));
          } else {
            bytes.push(
              new Uint8Array(element.buffer, element.byteOffset, element.byteLength)
            );
          }
        } else if (isBlobLike(element)) {
          bytes.push(element);
        }
      }
      return bytes;
    }
    function convertLineEndingsNative(s5) {
      let nativeLineEnding = "\n";
      if (process.platform === "win32") {
        nativeLineEnding = "\r\n";
      }
      return s5.replace(/\r?\n/g, nativeLineEnding);
    }
    function isFileLike(object) {
      return NativeFile && object instanceof NativeFile || object instanceof File2 || object && (typeof object.stream === "function" || typeof object.arrayBuffer === "function") && object[Symbol.toStringTag] === "File";
    }
    module2.exports = { File: File2, FileLike, isFileLike };
  }
});

// node_modules/undici/lib/fetch/formdata.js
var require_formdata = __commonJS({
  "node_modules/undici/lib/fetch/formdata.js"(exports, module2) {
    "use strict";
    init_shims();
    var { isBlobLike, toUSVString, makeIterator } = require_util2();
    var { kState } = require_symbols2();
    var { File: UndiciFile2, FileLike, isFileLike } = require_file();
    var { webidl } = require_webidl();
    var { Blob: Blob2, File: NativeFile } = require("buffer");
    var File2 = NativeFile ?? UndiciFile2;
    var FormData2 = class {
      constructor(form) {
        if (form !== void 0) {
          throw webidl.errors.conversionFailed({
            prefix: "FormData constructor",
            argument: "Argument 1",
            types: ["undefined"]
          });
        }
        this[kState] = [];
      }
      append(name, value, filename = void 0) {
        webidl.brandCheck(this, FormData2);
        webidl.argumentLengthCheck(arguments, 2, { header: "FormData.append" });
        if (arguments.length === 3 && !isBlobLike(value)) {
          throw new TypeError(
            "Failed to execute 'append' on 'FormData': parameter 2 is not of type 'Blob'"
          );
        }
        name = webidl.converters.USVString(name);
        value = isBlobLike(value) ? webidl.converters.Blob(value, { strict: false }) : webidl.converters.USVString(value);
        filename = arguments.length === 3 ? webidl.converters.USVString(filename) : void 0;
        const entry = makeEntry(name, value, filename);
        this[kState].push(entry);
      }
      delete(name) {
        webidl.brandCheck(this, FormData2);
        webidl.argumentLengthCheck(arguments, 1, { header: "FormData.delete" });
        name = webidl.converters.USVString(name);
        const next = [];
        for (const entry of this[kState]) {
          if (entry.name !== name) {
            next.push(entry);
          }
        }
        this[kState] = next;
      }
      get(name) {
        webidl.brandCheck(this, FormData2);
        webidl.argumentLengthCheck(arguments, 1, { header: "FormData.get" });
        name = webidl.converters.USVString(name);
        const idx = this[kState].findIndex((entry) => entry.name === name);
        if (idx === -1) {
          return null;
        }
        return this[kState][idx].value;
      }
      getAll(name) {
        webidl.brandCheck(this, FormData2);
        webidl.argumentLengthCheck(arguments, 1, { header: "FormData.getAll" });
        name = webidl.converters.USVString(name);
        return this[kState].filter((entry) => entry.name === name).map((entry) => entry.value);
      }
      has(name) {
        webidl.brandCheck(this, FormData2);
        webidl.argumentLengthCheck(arguments, 1, { header: "FormData.has" });
        name = webidl.converters.USVString(name);
        return this[kState].findIndex((entry) => entry.name === name) !== -1;
      }
      set(name, value, filename = void 0) {
        webidl.brandCheck(this, FormData2);
        webidl.argumentLengthCheck(arguments, 2, { header: "FormData.set" });
        if (arguments.length === 3 && !isBlobLike(value)) {
          throw new TypeError(
            "Failed to execute 'set' on 'FormData': parameter 2 is not of type 'Blob'"
          );
        }
        name = webidl.converters.USVString(name);
        value = isBlobLike(value) ? webidl.converters.Blob(value, { strict: false }) : webidl.converters.USVString(value);
        filename = arguments.length === 3 ? toUSVString(filename) : void 0;
        const entry = makeEntry(name, value, filename);
        const idx = this[kState].findIndex((entry2) => entry2.name === name);
        if (idx !== -1) {
          this[kState] = [
            ...this[kState].slice(0, idx),
            entry,
            ...this[kState].slice(idx + 1).filter((entry2) => entry2.name !== name)
          ];
        } else {
          this[kState].push(entry);
        }
      }
      entries() {
        webidl.brandCheck(this, FormData2);
        return makeIterator(
          () => this[kState].map((pair) => [pair.name, pair.value]),
          "FormData",
          "key+value"
        );
      }
      keys() {
        webidl.brandCheck(this, FormData2);
        return makeIterator(
          () => this[kState].map((pair) => [pair.name, pair.value]),
          "FormData",
          "key"
        );
      }
      values() {
        webidl.brandCheck(this, FormData2);
        return makeIterator(
          () => this[kState].map((pair) => [pair.name, pair.value]),
          "FormData",
          "value"
        );
      }
      /**
       * @param {(value: string, key: string, self: FormData) => void} callbackFn
       * @param {unknown} thisArg
       */
      forEach(callbackFn, thisArg = globalThis) {
        webidl.brandCheck(this, FormData2);
        webidl.argumentLengthCheck(arguments, 1, { header: "FormData.forEach" });
        if (typeof callbackFn !== "function") {
          throw new TypeError(
            "Failed to execute 'forEach' on 'FormData': parameter 1 is not of type 'Function'."
          );
        }
        for (const [key2, value] of this) {
          callbackFn.apply(thisArg, [value, key2, this]);
        }
      }
    };
    FormData2.prototype[Symbol.iterator] = FormData2.prototype.entries;
    Object.defineProperties(FormData2.prototype, {
      [Symbol.toStringTag]: {
        value: "FormData",
        configurable: true
      }
    });
    function makeEntry(name, value, filename) {
      name = Buffer.from(name).toString("utf8");
      if (typeof value === "string") {
        value = Buffer.from(value).toString("utf8");
      } else {
        if (!isFileLike(value)) {
          value = value instanceof Blob2 ? new File2([value], "blob", { type: value.type }) : new FileLike(value, "blob", { type: value.type });
        }
        if (filename !== void 0) {
          const options2 = {
            type: value.type,
            lastModified: value.lastModified
          };
          value = NativeFile && value instanceof NativeFile || value instanceof UndiciFile2 ? new File2([value], filename, options2) : new FileLike(value, filename, options2);
        }
      }
      return { name, value };
    }
    module2.exports = { FormData: FormData2 };
  }
});

// node_modules/undici/lib/fetch/body.js
var require_body = __commonJS({
  "node_modules/undici/lib/fetch/body.js"(exports, module2) {
    "use strict";
    init_shims();
    var Busboy = require_lib();
    var util = require_util();
    var {
      ReadableStreamFrom,
      isBlobLike,
      isReadableStreamLike,
      readableStreamClose,
      createDeferredPromise,
      fullyReadBody
    } = require_util2();
    var { FormData: FormData2 } = require_formdata();
    var { kState } = require_symbols2();
    var { webidl } = require_webidl();
    var { DOMException, structuredClone } = require_constants();
    var { Blob: Blob2, File: NativeFile } = require("buffer");
    var { kBodyUsed } = require_symbols();
    var assert = require("assert");
    var { isErrored } = require_util();
    var { isUint8Array, isArrayBuffer } = require("util/types");
    var { File: UndiciFile2 } = require_file();
    var { parseMIMEType, serializeAMimeType } = require_dataURL();
    var ReadableStream3 = globalThis.ReadableStream;
    var File2 = NativeFile ?? UndiciFile2;
    function extractBody(object, keepalive = false) {
      if (!ReadableStream3) {
        ReadableStream3 = require("stream/web").ReadableStream;
      }
      let stream = null;
      if (object instanceof ReadableStream3) {
        stream = object;
      } else if (isBlobLike(object)) {
        stream = object.stream();
      } else {
        stream = new ReadableStream3({
          async pull(controller) {
            controller.enqueue(
              typeof source === "string" ? new TextEncoder().encode(source) : source
            );
            queueMicrotask(() => readableStreamClose(controller));
          },
          start() {
          },
          type: void 0
        });
      }
      assert(isReadableStreamLike(stream));
      let action = null;
      let source = null;
      let length = null;
      let type = null;
      if (typeof object === "string") {
        source = object;
        type = "text/plain;charset=UTF-8";
      } else if (object instanceof URLSearchParams) {
        source = object.toString();
        type = "application/x-www-form-urlencoded;charset=UTF-8";
      } else if (isArrayBuffer(object)) {
        source = new Uint8Array(object.slice());
      } else if (ArrayBuffer.isView(object)) {
        source = new Uint8Array(object.buffer.slice(object.byteOffset, object.byteOffset + object.byteLength));
      } else if (util.isFormDataLike(object)) {
        const boundary = `----formdata-undici-${Math.random()}`.replace(".", "").slice(0, 32);
        const prefix = `--${boundary}\r
Content-Disposition: form-data`;
        const escape2 = (str) => str.replace(/\n/g, "%0A").replace(/\r/g, "%0D").replace(/"/g, "%22");
        const normalizeLinefeeds = (value) => value.replace(/\r?\n|\r/g, "\r\n");
        const enc = new TextEncoder();
        const blobParts = [];
        const rn = new Uint8Array([13, 10]);
        length = 0;
        for (const [name, value] of object) {
          if (typeof value === "string") {
            const chunk2 = enc.encode(prefix + `; name="${escape2(normalizeLinefeeds(name))}"\r
\r
${normalizeLinefeeds(value)}\r
`);
            blobParts.push(chunk2);
            length += chunk2.byteLength;
          } else {
            const chunk2 = enc.encode(`${prefix}; name="${escape2(normalizeLinefeeds(name))}"` + (value.name ? `; filename="${escape2(value.name)}"` : "") + `\r
Content-Type: ${value.type || "application/octet-stream"}\r
\r
`);
            blobParts.push(chunk2, value, rn);
            length += chunk2.byteLength + value.size + rn.byteLength;
          }
        }
        const chunk = enc.encode(`--${boundary}--`);
        blobParts.push(chunk);
        length += chunk.byteLength;
        source = object;
        action = async function* () {
          for (const part of blobParts) {
            if (part.stream) {
              yield* part.stream();
            } else {
              yield part;
            }
          }
        };
        type = "multipart/form-data; boundary=" + boundary;
      } else if (isBlobLike(object)) {
        source = object;
        length = object.size;
        if (object.type) {
          type = object.type;
        }
      } else if (typeof object[Symbol.asyncIterator] === "function") {
        if (keepalive) {
          throw new TypeError("keepalive");
        }
        if (util.isDisturbed(object) || object.locked) {
          throw new TypeError(
            "Response body object should not be disturbed or locked"
          );
        }
        stream = object instanceof ReadableStream3 ? object : ReadableStreamFrom(object);
      }
      if (typeof source === "string" || util.isBuffer(source)) {
        length = Buffer.byteLength(source);
      }
      if (action != null) {
        let iterator;
        stream = new ReadableStream3({
          async start() {
            iterator = action(object)[Symbol.asyncIterator]();
          },
          async pull(controller) {
            const { value, done } = await iterator.next();
            if (done) {
              queueMicrotask(() => {
                controller.close();
              });
            } else {
              if (!isErrored(stream)) {
                controller.enqueue(new Uint8Array(value));
              }
            }
            return controller.desiredSize > 0;
          },
          async cancel(reason) {
            await iterator.return();
          },
          type: void 0
        });
      }
      const body = { stream, source, length };
      return [body, type];
    }
    function safelyExtractBody(object, keepalive = false) {
      if (!ReadableStream3) {
        ReadableStream3 = require("stream/web").ReadableStream;
      }
      if (object instanceof ReadableStream3) {
        assert(!util.isDisturbed(object), "The body has already been consumed.");
        assert(!object.locked, "The stream is locked.");
      }
      return extractBody(object, keepalive);
    }
    function cloneBody(body) {
      const [out1, out2] = body.stream.tee();
      const out2Clone = structuredClone(out2, { transfer: [out2] });
      const [, finalClone] = out2Clone.tee();
      body.stream = out1;
      return {
        stream: finalClone,
        length: body.length,
        source: body.source
      };
    }
    async function* consumeBody(body) {
      if (body) {
        if (isUint8Array(body)) {
          yield body;
        } else {
          const stream = body.stream;
          if (util.isDisturbed(stream)) {
            throw new TypeError("The body has already been consumed.");
          }
          if (stream.locked) {
            throw new TypeError("The stream is locked.");
          }
          stream[kBodyUsed] = true;
          yield* stream;
        }
      }
    }
    function throwIfAborted(state) {
      if (state.aborted) {
        throw new DOMException("The operation was aborted.", "AbortError");
      }
    }
    function bodyMixinMethods(instance) {
      const methods = {
        blob() {
          return specConsumeBody(this, (bytes) => {
            let mimeType = bodyMimeType(this);
            if (mimeType === "failure") {
              mimeType = "";
            } else if (mimeType) {
              mimeType = serializeAMimeType(mimeType);
            }
            return new Blob2([bytes], { type: mimeType });
          }, instance);
        },
        arrayBuffer() {
          return specConsumeBody(this, (bytes) => {
            return new Uint8Array(bytes).buffer;
          }, instance);
        },
        text() {
          return specConsumeBody(this, utf8DecodeBytes, instance);
        },
        json() {
          return specConsumeBody(this, parseJSONFromBytes, instance);
        },
        async formData() {
          webidl.brandCheck(this, instance);
          throwIfAborted(this[kState]);
          const contentType = this.headers.get("Content-Type");
          if (/multipart\/form-data/.test(contentType)) {
            const headers = {};
            for (const [key2, value] of this.headers)
              headers[key2.toLowerCase()] = value;
            const responseFormData = new FormData2();
            let busboy;
            try {
              busboy = Busboy({
                headers,
                defParamCharset: "utf8"
              });
            } catch (err) {
              throw new DOMException(`${err}`, "AbortError");
            }
            busboy.on("field", (name, value) => {
              responseFormData.append(name, value);
            });
            busboy.on("file", (name, value, info) => {
              const { filename, encoding, mimeType } = info;
              const chunks = [];
              if (encoding === "base64" || encoding.toLowerCase() === "base64") {
                let base64chunk = "";
                value.on("data", (chunk) => {
                  base64chunk += chunk.toString().replace(/[\r\n]/gm, "");
                  const end = base64chunk.length - base64chunk.length % 4;
                  chunks.push(Buffer.from(base64chunk.slice(0, end), "base64"));
                  base64chunk = base64chunk.slice(end);
                });
                value.on("end", () => {
                  chunks.push(Buffer.from(base64chunk, "base64"));
                  responseFormData.append(name, new File2(chunks, filename, { type: mimeType }));
                });
              } else {
                value.on("data", (chunk) => {
                  chunks.push(chunk);
                });
                value.on("end", () => {
                  responseFormData.append(name, new File2(chunks, filename, { type: mimeType }));
                });
              }
            });
            const busboyResolve = new Promise((resolve, reject) => {
              busboy.on("finish", resolve);
              busboy.on("error", (err) => reject(new TypeError(err)));
            });
            if (this.body !== null)
              for await (const chunk of consumeBody(this[kState].body))
                busboy.write(chunk);
            busboy.end();
            await busboyResolve;
            return responseFormData;
          } else if (/application\/x-www-form-urlencoded/.test(contentType)) {
            let entries;
            try {
              let text2 = "";
              const textDecoder = new TextDecoder("utf-8", { ignoreBOM: true });
              for await (const chunk of consumeBody(this[kState].body)) {
                if (!isUint8Array(chunk)) {
                  throw new TypeError("Expected Uint8Array chunk");
                }
                text2 += textDecoder.decode(chunk, { stream: true });
              }
              text2 += textDecoder.decode();
              entries = new URLSearchParams(text2);
            } catch (err) {
              throw Object.assign(new TypeError(), { cause: err });
            }
            const formData = new FormData2();
            for (const [name, value] of entries) {
              formData.append(name, value);
            }
            return formData;
          } else {
            await Promise.resolve();
            throwIfAborted(this[kState]);
            throw webidl.errors.exception({
              header: `${instance.name}.formData`,
              message: "Could not parse content as FormData."
            });
          }
        }
      };
      return methods;
    }
    function mixinBody(prototype) {
      Object.assign(prototype.prototype, bodyMixinMethods(prototype));
    }
    async function specConsumeBody(object, convertBytesToJSValue, instance) {
      webidl.brandCheck(object, instance);
      throwIfAborted(object[kState]);
      if (bodyUnusable(object[kState].body)) {
        throw new TypeError("Body is unusable");
      }
      const promise = createDeferredPromise();
      const errorSteps = (error2) => promise.reject(error2);
      const successSteps = (data) => {
        try {
          promise.resolve(convertBytesToJSValue(data));
        } catch (e3) {
          errorSteps(e3);
        }
      };
      if (object[kState].body == null) {
        successSteps(new Uint8Array());
        return promise.promise;
      }
      fullyReadBody(object[kState].body, successSteps, errorSteps);
      return promise.promise;
    }
    function bodyUnusable(body) {
      return body != null && (body.stream.locked || util.isDisturbed(body.stream));
    }
    function utf8DecodeBytes(buffer2) {
      if (buffer2.length === 0) {
        return "";
      }
      if (buffer2[0] === 239 && buffer2[1] === 187 && buffer2[2] === 191) {
        buffer2 = buffer2.subarray(3);
      }
      const output = new TextDecoder().decode(buffer2);
      return output;
    }
    function parseJSONFromBytes(bytes) {
      return JSON.parse(utf8DecodeBytes(bytes));
    }
    function bodyMimeType(object) {
      const { headersList } = object[kState];
      const contentType = headersList.get("content-type");
      if (contentType === null) {
        return "failure";
      }
      return parseMIMEType(contentType);
    }
    module2.exports = {
      extractBody,
      safelyExtractBody,
      cloneBody,
      mixinBody
    };
  }
});

// node_modules/undici/lib/core/request.js
var require_request = __commonJS({
  "node_modules/undici/lib/core/request.js"(exports, module2) {
    "use strict";
    init_shims();
    var {
      InvalidArgumentError,
      NotSupportedError
    } = require_errors();
    var assert = require("assert");
    var util = require_util();
    var tokenRegExp = /^[\^_`a-zA-Z\-0-9!#$%&'*+.|~]+$/;
    var headerCharRegex = /[^\t\x20-\x7e\x80-\xff]/;
    var invalidPathRegex = /[^\u0021-\u00ff]/;
    var kHandler = Symbol("handler");
    var channels = {};
    var extractBody;
    try {
      const diagnosticsChannel = require("diagnostics_channel");
      channels.create = diagnosticsChannel.channel("undici:request:create");
      channels.bodySent = diagnosticsChannel.channel("undici:request:bodySent");
      channels.headers = diagnosticsChannel.channel("undici:request:headers");
      channels.trailers = diagnosticsChannel.channel("undici:request:trailers");
      channels.error = diagnosticsChannel.channel("undici:request:error");
    } catch {
      channels.create = { hasSubscribers: false };
      channels.bodySent = { hasSubscribers: false };
      channels.headers = { hasSubscribers: false };
      channels.trailers = { hasSubscribers: false };
      channels.error = { hasSubscribers: false };
    }
    var Request3 = class {
      constructor(origin, {
        path,
        method,
        body,
        headers,
        query,
        idempotent,
        blocking,
        upgrade,
        headersTimeout,
        bodyTimeout,
        reset: reset2,
        throwOnError
      }, handler2) {
        if (typeof path !== "string") {
          throw new InvalidArgumentError("path must be a string");
        } else if (path[0] !== "/" && !(path.startsWith("http://") || path.startsWith("https://")) && method !== "CONNECT") {
          throw new InvalidArgumentError("path must be an absolute URL or start with a slash");
        } else if (invalidPathRegex.exec(path) !== null) {
          throw new InvalidArgumentError("invalid request path");
        }
        if (typeof method !== "string") {
          throw new InvalidArgumentError("method must be a string");
        } else if (tokenRegExp.exec(method) === null) {
          throw new InvalidArgumentError("invalid request method");
        }
        if (upgrade && typeof upgrade !== "string") {
          throw new InvalidArgumentError("upgrade must be a string");
        }
        if (headersTimeout != null && (!Number.isFinite(headersTimeout) || headersTimeout < 0)) {
          throw new InvalidArgumentError("invalid headersTimeout");
        }
        if (bodyTimeout != null && (!Number.isFinite(bodyTimeout) || bodyTimeout < 0)) {
          throw new InvalidArgumentError("invalid bodyTimeout");
        }
        if (reset2 != null && typeof reset2 !== "boolean") {
          throw new InvalidArgumentError("invalid reset");
        }
        this.headersTimeout = headersTimeout;
        this.bodyTimeout = bodyTimeout;
        this.throwOnError = throwOnError === true;
        this.method = method;
        if (body == null) {
          this.body = null;
        } else if (util.isStream(body)) {
          this.body = body;
        } else if (util.isBuffer(body)) {
          this.body = body.byteLength ? body : null;
        } else if (ArrayBuffer.isView(body)) {
          this.body = body.buffer.byteLength ? Buffer.from(body.buffer, body.byteOffset, body.byteLength) : null;
        } else if (body instanceof ArrayBuffer) {
          this.body = body.byteLength ? Buffer.from(body) : null;
        } else if (typeof body === "string") {
          this.body = body.length ? Buffer.from(body) : null;
        } else if (util.isFormDataLike(body) || util.isIterable(body) || util.isBlobLike(body)) {
          this.body = body;
        } else {
          throw new InvalidArgumentError("body must be a string, a Buffer, a Readable stream, an iterable, or an async iterable");
        }
        this.completed = false;
        this.aborted = false;
        this.upgrade = upgrade || null;
        this.path = query ? util.buildURL(path, query) : path;
        this.origin = origin;
        this.idempotent = idempotent == null ? method === "HEAD" || method === "GET" : idempotent;
        this.blocking = blocking == null ? false : blocking;
        this.reset = reset2 == null ? null : reset2;
        this.host = null;
        this.contentLength = null;
        this.contentType = null;
        this.headers = "";
        if (Array.isArray(headers)) {
          if (headers.length % 2 !== 0) {
            throw new InvalidArgumentError("headers array must be even");
          }
          for (let i3 = 0; i3 < headers.length; i3 += 2) {
            processHeader(this, headers[i3], headers[i3 + 1]);
          }
        } else if (headers && typeof headers === "object") {
          const keys = Object.keys(headers);
          for (let i3 = 0; i3 < keys.length; i3++) {
            const key2 = keys[i3];
            processHeader(this, key2, headers[key2]);
          }
        } else if (headers != null) {
          throw new InvalidArgumentError("headers must be an object or an array");
        }
        if (util.isFormDataLike(this.body)) {
          if (util.nodeMajor < 16 || util.nodeMajor === 16 && util.nodeMinor < 8) {
            throw new InvalidArgumentError("Form-Data bodies are only supported in node v16.8 and newer.");
          }
          if (!extractBody) {
            extractBody = require_body().extractBody;
          }
          const [bodyStream, contentType] = extractBody(body);
          if (this.contentType == null) {
            this.contentType = contentType;
            this.headers += `content-type: ${contentType}\r
`;
          }
          this.body = bodyStream.stream;
        } else if (util.isBlobLike(body) && this.contentType == null && body.type) {
          this.contentType = body.type;
          this.headers += `content-type: ${body.type}\r
`;
        }
        util.validateHandler(handler2, method, upgrade);
        this.servername = util.getServerName(this.host);
        this[kHandler] = handler2;
        if (channels.create.hasSubscribers) {
          channels.create.publish({ request: this });
        }
      }
      onBodySent(chunk) {
        if (this[kHandler].onBodySent) {
          try {
            this[kHandler].onBodySent(chunk);
          } catch (err) {
            this.onError(err);
          }
        }
      }
      onRequestSent() {
        if (channels.bodySent.hasSubscribers) {
          channels.bodySent.publish({ request: this });
        }
      }
      onConnect(abort) {
        assert(!this.aborted);
        assert(!this.completed);
        return this[kHandler].onConnect(abort);
      }
      onHeaders(statusCode, headers, resume, statusText) {
        assert(!this.aborted);
        assert(!this.completed);
        if (channels.headers.hasSubscribers) {
          channels.headers.publish({ request: this, response: { statusCode, headers, statusText } });
        }
        return this[kHandler].onHeaders(statusCode, headers, resume, statusText);
      }
      onData(chunk) {
        assert(!this.aborted);
        assert(!this.completed);
        return this[kHandler].onData(chunk);
      }
      onUpgrade(statusCode, headers, socket) {
        assert(!this.aborted);
        assert(!this.completed);
        return this[kHandler].onUpgrade(statusCode, headers, socket);
      }
      onComplete(trailers) {
        assert(!this.aborted);
        this.completed = true;
        if (channels.trailers.hasSubscribers) {
          channels.trailers.publish({ request: this, trailers });
        }
        return this[kHandler].onComplete(trailers);
      }
      onError(error2) {
        if (channels.error.hasSubscribers) {
          channels.error.publish({ request: this, error: error2 });
        }
        if (this.aborted) {
          return;
        }
        this.aborted = true;
        return this[kHandler].onError(error2);
      }
      addHeader(key2, value) {
        processHeader(this, key2, value);
        return this;
      }
    };
    function processHeaderValue(key2, val) {
      if (val && typeof val === "object") {
        throw new InvalidArgumentError(`invalid ${key2} header`);
      }
      val = val != null ? `${val}` : "";
      if (headerCharRegex.exec(val) !== null) {
        throw new InvalidArgumentError(`invalid ${key2} header`);
      }
      return `${key2}: ${val}\r
`;
    }
    function processHeader(request, key2, val) {
      if (val && (typeof val === "object" && !Array.isArray(val))) {
        throw new InvalidArgumentError(`invalid ${key2} header`);
      } else if (val === void 0) {
        return;
      }
      if (request.host === null && key2.length === 4 && key2.toLowerCase() === "host") {
        if (headerCharRegex.exec(val) !== null) {
          throw new InvalidArgumentError(`invalid ${key2} header`);
        }
        request.host = val;
      } else if (request.contentLength === null && key2.length === 14 && key2.toLowerCase() === "content-length") {
        request.contentLength = parseInt(val, 10);
        if (!Number.isFinite(request.contentLength)) {
          throw new InvalidArgumentError("invalid content-length header");
        }
      } else if (request.contentType === null && key2.length === 12 && key2.toLowerCase() === "content-type") {
        request.contentType = val;
        request.headers += processHeaderValue(key2, val);
      } else if (key2.length === 17 && key2.toLowerCase() === "transfer-encoding") {
        throw new InvalidArgumentError("invalid transfer-encoding header");
      } else if (key2.length === 10 && key2.toLowerCase() === "connection") {
        const value = typeof val === "string" ? val.toLowerCase() : null;
        if (value !== "close" && value !== "keep-alive") {
          throw new InvalidArgumentError("invalid connection header");
        } else if (value === "close") {
          request.reset = true;
        }
      } else if (key2.length === 10 && key2.toLowerCase() === "keep-alive") {
        throw new InvalidArgumentError("invalid keep-alive header");
      } else if (key2.length === 7 && key2.toLowerCase() === "upgrade") {
        throw new InvalidArgumentError("invalid upgrade header");
      } else if (key2.length === 6 && key2.toLowerCase() === "expect") {
        throw new NotSupportedError("expect header not supported");
      } else if (tokenRegExp.exec(key2) === null) {
        throw new InvalidArgumentError("invalid header key");
      } else {
        if (Array.isArray(val)) {
          for (let i3 = 0; i3 < val.length; i3++) {
            request.headers += processHeaderValue(key2, val[i3]);
          }
        } else {
          request.headers += processHeaderValue(key2, val);
        }
      }
    }
    module2.exports = Request3;
  }
});

// node_modules/undici/lib/dispatcher.js
var require_dispatcher = __commonJS({
  "node_modules/undici/lib/dispatcher.js"(exports, module2) {
    "use strict";
    init_shims();
    var EventEmitter = require("events");
    var Dispatcher = class extends EventEmitter {
      dispatch() {
        throw new Error("not implemented");
      }
      close() {
        throw new Error("not implemented");
      }
      destroy() {
        throw new Error("not implemented");
      }
    };
    module2.exports = Dispatcher;
  }
});

// node_modules/undici/lib/dispatcher-base.js
var require_dispatcher_base = __commonJS({
  "node_modules/undici/lib/dispatcher-base.js"(exports, module2) {
    "use strict";
    init_shims();
    var Dispatcher = require_dispatcher();
    var {
      ClientDestroyedError,
      ClientClosedError,
      InvalidArgumentError
    } = require_errors();
    var { kDestroy, kClose, kDispatch, kInterceptors } = require_symbols();
    var kDestroyed = Symbol("destroyed");
    var kClosed = Symbol("closed");
    var kOnDestroyed = Symbol("onDestroyed");
    var kOnClosed = Symbol("onClosed");
    var kInterceptedDispatch = Symbol("Intercepted Dispatch");
    var DispatcherBase = class extends Dispatcher {
      constructor() {
        super();
        this[kDestroyed] = false;
        this[kOnDestroyed] = [];
        this[kClosed] = false;
        this[kOnClosed] = [];
      }
      get destroyed() {
        return this[kDestroyed];
      }
      get closed() {
        return this[kClosed];
      }
      get interceptors() {
        return this[kInterceptors];
      }
      set interceptors(newInterceptors) {
        if (newInterceptors) {
          for (let i3 = newInterceptors.length - 1; i3 >= 0; i3--) {
            const interceptor = this[kInterceptors][i3];
            if (typeof interceptor !== "function") {
              throw new InvalidArgumentError("interceptor must be an function");
            }
          }
        }
        this[kInterceptors] = newInterceptors;
      }
      close(callback) {
        if (callback === void 0) {
          return new Promise((resolve, reject) => {
            this.close((err, data) => {
              return err ? reject(err) : resolve(data);
            });
          });
        }
        if (typeof callback !== "function") {
          throw new InvalidArgumentError("invalid callback");
        }
        if (this[kDestroyed]) {
          queueMicrotask(() => callback(new ClientDestroyedError(), null));
          return;
        }
        if (this[kClosed]) {
          if (this[kOnClosed]) {
            this[kOnClosed].push(callback);
          } else {
            queueMicrotask(() => callback(null, null));
          }
          return;
        }
        this[kClosed] = true;
        this[kOnClosed].push(callback);
        const onClosed = () => {
          const callbacks = this[kOnClosed];
          this[kOnClosed] = null;
          for (let i3 = 0; i3 < callbacks.length; i3++) {
            callbacks[i3](null, null);
          }
        };
        this[kClose]().then(() => this.destroy()).then(() => {
          queueMicrotask(onClosed);
        });
      }
      destroy(err, callback) {
        if (typeof err === "function") {
          callback = err;
          err = null;
        }
        if (callback === void 0) {
          return new Promise((resolve, reject) => {
            this.destroy(err, (err2, data) => {
              return err2 ? (
                /* istanbul ignore next: should never error */
                reject(err2)
              ) : resolve(data);
            });
          });
        }
        if (typeof callback !== "function") {
          throw new InvalidArgumentError("invalid callback");
        }
        if (this[kDestroyed]) {
          if (this[kOnDestroyed]) {
            this[kOnDestroyed].push(callback);
          } else {
            queueMicrotask(() => callback(null, null));
          }
          return;
        }
        if (!err) {
          err = new ClientDestroyedError();
        }
        this[kDestroyed] = true;
        this[kOnDestroyed].push(callback);
        const onDestroyed = () => {
          const callbacks = this[kOnDestroyed];
          this[kOnDestroyed] = null;
          for (let i3 = 0; i3 < callbacks.length; i3++) {
            callbacks[i3](null, null);
          }
        };
        this[kDestroy](err).then(() => {
          queueMicrotask(onDestroyed);
        });
      }
      [kInterceptedDispatch](opts, handler2) {
        if (!this[kInterceptors] || this[kInterceptors].length === 0) {
          this[kInterceptedDispatch] = this[kDispatch];
          return this[kDispatch](opts, handler2);
        }
        let dispatch = this[kDispatch].bind(this);
        for (let i3 = this[kInterceptors].length - 1; i3 >= 0; i3--) {
          dispatch = this[kInterceptors][i3](dispatch);
        }
        this[kInterceptedDispatch] = dispatch;
        return dispatch(opts, handler2);
      }
      dispatch(opts, handler2) {
        if (!handler2 || typeof handler2 !== "object") {
          throw new InvalidArgumentError("handler must be an object");
        }
        try {
          if (!opts || typeof opts !== "object") {
            throw new InvalidArgumentError("opts must be an object.");
          }
          if (this[kDestroyed]) {
            throw new ClientDestroyedError();
          }
          if (this[kClosed]) {
            throw new ClientClosedError();
          }
          return this[kInterceptedDispatch](opts, handler2);
        } catch (err) {
          if (typeof handler2.onError !== "function") {
            throw new InvalidArgumentError("invalid onError method");
          }
          handler2.onError(err);
          return false;
        }
      }
    };
    module2.exports = DispatcherBase;
  }
});

// node_modules/undici/lib/core/connect.js
var require_connect = __commonJS({
  "node_modules/undici/lib/core/connect.js"(exports, module2) {
    "use strict";
    init_shims();
    var net = require("net");
    var assert = require("assert");
    var util = require_util();
    var { InvalidArgumentError, ConnectTimeoutError } = require_errors();
    var tls;
    var SessionCache;
    if (global.FinalizationRegistry) {
      SessionCache = class WeakSessionCache {
        constructor(maxCachedSessions) {
          this._maxCachedSessions = maxCachedSessions;
          this._sessionCache = /* @__PURE__ */ new Map();
          this._sessionRegistry = new global.FinalizationRegistry((key2) => {
            if (this._sessionCache.size < this._maxCachedSessions) {
              return;
            }
            const ref = this._sessionCache.get(key2);
            if (ref !== void 0 && ref.deref() === void 0) {
              this._sessionCache.delete(key2);
            }
          });
        }
        get(sessionKey) {
          const ref = this._sessionCache.get(sessionKey);
          return ref ? ref.deref() : null;
        }
        set(sessionKey, session) {
          if (this._maxCachedSessions === 0) {
            return;
          }
          this._sessionCache.set(sessionKey, new WeakRef(session));
          this._sessionRegistry.register(session, sessionKey);
        }
      };
    } else {
      SessionCache = class SimpleSessionCache {
        constructor(maxCachedSessions) {
          this._maxCachedSessions = maxCachedSessions;
          this._sessionCache = /* @__PURE__ */ new Map();
        }
        get(sessionKey) {
          return this._sessionCache.get(sessionKey);
        }
        set(sessionKey, session) {
          if (this._maxCachedSessions === 0) {
            return;
          }
          if (this._sessionCache.size >= this._maxCachedSessions) {
            const { value: oldestKey } = this._sessionCache.keys().next();
            this._sessionCache.delete(oldestKey);
          }
          this._sessionCache.set(sessionKey, session);
        }
      };
    }
    function buildConnector({ maxCachedSessions, socketPath, timeout, ...opts }) {
      if (maxCachedSessions != null && (!Number.isInteger(maxCachedSessions) || maxCachedSessions < 0)) {
        throw new InvalidArgumentError("maxCachedSessions must be a positive integer or zero");
      }
      const options2 = { path: socketPath, ...opts };
      const sessionCache = new SessionCache(maxCachedSessions == null ? 100 : maxCachedSessions);
      timeout = timeout == null ? 1e4 : timeout;
      return function connect({ hostname, host, protocol, port, servername, localAddress, httpSocket }, callback) {
        let socket;
        if (protocol === "https:") {
          if (!tls) {
            tls = require("tls");
          }
          servername = servername || options2.servername || util.getServerName(host) || null;
          const sessionKey = servername || hostname;
          const session = sessionCache.get(sessionKey) || null;
          assert(sessionKey);
          socket = tls.connect({
            highWaterMark: 16384,
            // TLS in node can't have bigger HWM anyway...
            ...options2,
            servername,
            session,
            localAddress,
            socket: httpSocket,
            // upgrade socket connection
            port: port || 443,
            host: hostname
          });
          socket.on("session", function(session2) {
            sessionCache.set(sessionKey, session2);
          });
        } else {
          assert(!httpSocket, "httpSocket can only be sent on TLS update");
          socket = net.connect({
            highWaterMark: 64 * 1024,
            // Same as nodejs fs streams.
            ...options2,
            localAddress,
            port: port || 80,
            host: hostname
          });
        }
        if (options2.keepAlive == null || options2.keepAlive) {
          const keepAliveInitialDelay = options2.keepAliveInitialDelay === void 0 ? 6e4 : options2.keepAliveInitialDelay;
          socket.setKeepAlive(true, keepAliveInitialDelay);
        }
        const cancelTimeout = setupTimeout(() => onConnectTimeout(socket), timeout);
        socket.setNoDelay(true).once(protocol === "https:" ? "secureConnect" : "connect", function() {
          cancelTimeout();
          if (callback) {
            const cb = callback;
            callback = null;
            cb(null, this);
          }
        }).on("error", function(err) {
          cancelTimeout();
          if (callback) {
            const cb = callback;
            callback = null;
            cb(err);
          }
        });
        return socket;
      };
    }
    function setupTimeout(onConnectTimeout2, timeout) {
      if (!timeout) {
        return () => {
        };
      }
      let s1 = null;
      let s22 = null;
      const timeoutId = setTimeout(() => {
        s1 = setImmediate(() => {
          if (process.platform === "win32") {
            s22 = setImmediate(() => onConnectTimeout2());
          } else {
            onConnectTimeout2();
          }
        });
      }, timeout);
      return () => {
        clearTimeout(timeoutId);
        clearImmediate(s1);
        clearImmediate(s22);
      };
    }
    function onConnectTimeout(socket) {
      util.destroy(socket, new ConnectTimeoutError());
    }
    module2.exports = buildConnector;
  }
});

// node_modules/undici/lib/llhttp/utils.js
var require_utils2 = __commonJS({
  "node_modules/undici/lib/llhttp/utils.js"(exports) {
    "use strict";
    init_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.enumToMap = void 0;
    function enumToMap(obj) {
      const res = {};
      Object.keys(obj).forEach((key2) => {
        const value = obj[key2];
        if (typeof value === "number") {
          res[key2] = value;
        }
      });
      return res;
    }
    exports.enumToMap = enumToMap;
  }
});

// node_modules/undici/lib/llhttp/constants.js
var require_constants2 = __commonJS({
  "node_modules/undici/lib/llhttp/constants.js"(exports) {
    "use strict";
    init_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SPECIAL_HEADERS = exports.HEADER_STATE = exports.MINOR = exports.MAJOR = exports.CONNECTION_TOKEN_CHARS = exports.HEADER_CHARS = exports.TOKEN = exports.STRICT_TOKEN = exports.HEX = exports.URL_CHAR = exports.STRICT_URL_CHAR = exports.USERINFO_CHARS = exports.MARK = exports.ALPHANUM = exports.NUM = exports.HEX_MAP = exports.NUM_MAP = exports.ALPHA = exports.FINISH = exports.H_METHOD_MAP = exports.METHOD_MAP = exports.METHODS_RTSP = exports.METHODS_ICE = exports.METHODS_HTTP = exports.METHODS = exports.LENIENT_FLAGS = exports.FLAGS = exports.TYPE = exports.ERROR = void 0;
    var utils_1 = require_utils2();
    var ERROR;
    (function(ERROR2) {
      ERROR2[ERROR2["OK"] = 0] = "OK";
      ERROR2[ERROR2["INTERNAL"] = 1] = "INTERNAL";
      ERROR2[ERROR2["STRICT"] = 2] = "STRICT";
      ERROR2[ERROR2["LF_EXPECTED"] = 3] = "LF_EXPECTED";
      ERROR2[ERROR2["UNEXPECTED_CONTENT_LENGTH"] = 4] = "UNEXPECTED_CONTENT_LENGTH";
      ERROR2[ERROR2["CLOSED_CONNECTION"] = 5] = "CLOSED_CONNECTION";
      ERROR2[ERROR2["INVALID_METHOD"] = 6] = "INVALID_METHOD";
      ERROR2[ERROR2["INVALID_URL"] = 7] = "INVALID_URL";
      ERROR2[ERROR2["INVALID_CONSTANT"] = 8] = "INVALID_CONSTANT";
      ERROR2[ERROR2["INVALID_VERSION"] = 9] = "INVALID_VERSION";
      ERROR2[ERROR2["INVALID_HEADER_TOKEN"] = 10] = "INVALID_HEADER_TOKEN";
      ERROR2[ERROR2["INVALID_CONTENT_LENGTH"] = 11] = "INVALID_CONTENT_LENGTH";
      ERROR2[ERROR2["INVALID_CHUNK_SIZE"] = 12] = "INVALID_CHUNK_SIZE";
      ERROR2[ERROR2["INVALID_STATUS"] = 13] = "INVALID_STATUS";
      ERROR2[ERROR2["INVALID_EOF_STATE"] = 14] = "INVALID_EOF_STATE";
      ERROR2[ERROR2["INVALID_TRANSFER_ENCODING"] = 15] = "INVALID_TRANSFER_ENCODING";
      ERROR2[ERROR2["CB_MESSAGE_BEGIN"] = 16] = "CB_MESSAGE_BEGIN";
      ERROR2[ERROR2["CB_HEADERS_COMPLETE"] = 17] = "CB_HEADERS_COMPLETE";
      ERROR2[ERROR2["CB_MESSAGE_COMPLETE"] = 18] = "CB_MESSAGE_COMPLETE";
      ERROR2[ERROR2["CB_CHUNK_HEADER"] = 19] = "CB_CHUNK_HEADER";
      ERROR2[ERROR2["CB_CHUNK_COMPLETE"] = 20] = "CB_CHUNK_COMPLETE";
      ERROR2[ERROR2["PAUSED"] = 21] = "PAUSED";
      ERROR2[ERROR2["PAUSED_UPGRADE"] = 22] = "PAUSED_UPGRADE";
      ERROR2[ERROR2["PAUSED_H2_UPGRADE"] = 23] = "PAUSED_H2_UPGRADE";
      ERROR2[ERROR2["USER"] = 24] = "USER";
    })(ERROR = exports.ERROR || (exports.ERROR = {}));
    var TYPE;
    (function(TYPE2) {
      TYPE2[TYPE2["BOTH"] = 0] = "BOTH";
      TYPE2[TYPE2["REQUEST"] = 1] = "REQUEST";
      TYPE2[TYPE2["RESPONSE"] = 2] = "RESPONSE";
    })(TYPE = exports.TYPE || (exports.TYPE = {}));
    var FLAGS;
    (function(FLAGS2) {
      FLAGS2[FLAGS2["CONNECTION_KEEP_ALIVE"] = 1] = "CONNECTION_KEEP_ALIVE";
      FLAGS2[FLAGS2["CONNECTION_CLOSE"] = 2] = "CONNECTION_CLOSE";
      FLAGS2[FLAGS2["CONNECTION_UPGRADE"] = 4] = "CONNECTION_UPGRADE";
      FLAGS2[FLAGS2["CHUNKED"] = 8] = "CHUNKED";
      FLAGS2[FLAGS2["UPGRADE"] = 16] = "UPGRADE";
      FLAGS2[FLAGS2["CONTENT_LENGTH"] = 32] = "CONTENT_LENGTH";
      FLAGS2[FLAGS2["SKIPBODY"] = 64] = "SKIPBODY";
      FLAGS2[FLAGS2["TRAILING"] = 128] = "TRAILING";
      FLAGS2[FLAGS2["TRANSFER_ENCODING"] = 512] = "TRANSFER_ENCODING";
    })(FLAGS = exports.FLAGS || (exports.FLAGS = {}));
    var LENIENT_FLAGS;
    (function(LENIENT_FLAGS2) {
      LENIENT_FLAGS2[LENIENT_FLAGS2["HEADERS"] = 1] = "HEADERS";
      LENIENT_FLAGS2[LENIENT_FLAGS2["CHUNKED_LENGTH"] = 2] = "CHUNKED_LENGTH";
      LENIENT_FLAGS2[LENIENT_FLAGS2["KEEP_ALIVE"] = 4] = "KEEP_ALIVE";
    })(LENIENT_FLAGS = exports.LENIENT_FLAGS || (exports.LENIENT_FLAGS = {}));
    var METHODS;
    (function(METHODS2) {
      METHODS2[METHODS2["DELETE"] = 0] = "DELETE";
      METHODS2[METHODS2["GET"] = 1] = "GET";
      METHODS2[METHODS2["HEAD"] = 2] = "HEAD";
      METHODS2[METHODS2["POST"] = 3] = "POST";
      METHODS2[METHODS2["PUT"] = 4] = "PUT";
      METHODS2[METHODS2["CONNECT"] = 5] = "CONNECT";
      METHODS2[METHODS2["OPTIONS"] = 6] = "OPTIONS";
      METHODS2[METHODS2["TRACE"] = 7] = "TRACE";
      METHODS2[METHODS2["COPY"] = 8] = "COPY";
      METHODS2[METHODS2["LOCK"] = 9] = "LOCK";
      METHODS2[METHODS2["MKCOL"] = 10] = "MKCOL";
      METHODS2[METHODS2["MOVE"] = 11] = "MOVE";
      METHODS2[METHODS2["PROPFIND"] = 12] = "PROPFIND";
      METHODS2[METHODS2["PROPPATCH"] = 13] = "PROPPATCH";
      METHODS2[METHODS2["SEARCH"] = 14] = "SEARCH";
      METHODS2[METHODS2["UNLOCK"] = 15] = "UNLOCK";
      METHODS2[METHODS2["BIND"] = 16] = "BIND";
      METHODS2[METHODS2["REBIND"] = 17] = "REBIND";
      METHODS2[METHODS2["UNBIND"] = 18] = "UNBIND";
      METHODS2[METHODS2["ACL"] = 19] = "ACL";
      METHODS2[METHODS2["REPORT"] = 20] = "REPORT";
      METHODS2[METHODS2["MKACTIVITY"] = 21] = "MKACTIVITY";
      METHODS2[METHODS2["CHECKOUT"] = 22] = "CHECKOUT";
      METHODS2[METHODS2["MERGE"] = 23] = "MERGE";
      METHODS2[METHODS2["M-SEARCH"] = 24] = "M-SEARCH";
      METHODS2[METHODS2["NOTIFY"] = 25] = "NOTIFY";
      METHODS2[METHODS2["SUBSCRIBE"] = 26] = "SUBSCRIBE";
      METHODS2[METHODS2["UNSUBSCRIBE"] = 27] = "UNSUBSCRIBE";
      METHODS2[METHODS2["PATCH"] = 28] = "PATCH";
      METHODS2[METHODS2["PURGE"] = 29] = "PURGE";
      METHODS2[METHODS2["MKCALENDAR"] = 30] = "MKCALENDAR";
      METHODS2[METHODS2["LINK"] = 31] = "LINK";
      METHODS2[METHODS2["UNLINK"] = 32] = "UNLINK";
      METHODS2[METHODS2["SOURCE"] = 33] = "SOURCE";
      METHODS2[METHODS2["PRI"] = 34] = "PRI";
      METHODS2[METHODS2["DESCRIBE"] = 35] = "DESCRIBE";
      METHODS2[METHODS2["ANNOUNCE"] = 36] = "ANNOUNCE";
      METHODS2[METHODS2["SETUP"] = 37] = "SETUP";
      METHODS2[METHODS2["PLAY"] = 38] = "PLAY";
      METHODS2[METHODS2["PAUSE"] = 39] = "PAUSE";
      METHODS2[METHODS2["TEARDOWN"] = 40] = "TEARDOWN";
      METHODS2[METHODS2["GET_PARAMETER"] = 41] = "GET_PARAMETER";
      METHODS2[METHODS2["SET_PARAMETER"] = 42] = "SET_PARAMETER";
      METHODS2[METHODS2["REDIRECT"] = 43] = "REDIRECT";
      METHODS2[METHODS2["RECORD"] = 44] = "RECORD";
      METHODS2[METHODS2["FLUSH"] = 45] = "FLUSH";
    })(METHODS = exports.METHODS || (exports.METHODS = {}));
    exports.METHODS_HTTP = [
      METHODS.DELETE,
      METHODS.GET,
      METHODS.HEAD,
      METHODS.POST,
      METHODS.PUT,
      METHODS.CONNECT,
      METHODS.OPTIONS,
      METHODS.TRACE,
      METHODS.COPY,
      METHODS.LOCK,
      METHODS.MKCOL,
      METHODS.MOVE,
      METHODS.PROPFIND,
      METHODS.PROPPATCH,
      METHODS.SEARCH,
      METHODS.UNLOCK,
      METHODS.BIND,
      METHODS.REBIND,
      METHODS.UNBIND,
      METHODS.ACL,
      METHODS.REPORT,
      METHODS.MKACTIVITY,
      METHODS.CHECKOUT,
      METHODS.MERGE,
      METHODS["M-SEARCH"],
      METHODS.NOTIFY,
      METHODS.SUBSCRIBE,
      METHODS.UNSUBSCRIBE,
      METHODS.PATCH,
      METHODS.PURGE,
      METHODS.MKCALENDAR,
      METHODS.LINK,
      METHODS.UNLINK,
      METHODS.PRI,
      // TODO(indutny): should we allow it with HTTP?
      METHODS.SOURCE
    ];
    exports.METHODS_ICE = [
      METHODS.SOURCE
    ];
    exports.METHODS_RTSP = [
      METHODS.OPTIONS,
      METHODS.DESCRIBE,
      METHODS.ANNOUNCE,
      METHODS.SETUP,
      METHODS.PLAY,
      METHODS.PAUSE,
      METHODS.TEARDOWN,
      METHODS.GET_PARAMETER,
      METHODS.SET_PARAMETER,
      METHODS.REDIRECT,
      METHODS.RECORD,
      METHODS.FLUSH,
      // For AirPlay
      METHODS.GET,
      METHODS.POST
    ];
    exports.METHOD_MAP = utils_1.enumToMap(METHODS);
    exports.H_METHOD_MAP = {};
    Object.keys(exports.METHOD_MAP).forEach((key2) => {
      if (/^H/.test(key2)) {
        exports.H_METHOD_MAP[key2] = exports.METHOD_MAP[key2];
      }
    });
    var FINISH;
    (function(FINISH2) {
      FINISH2[FINISH2["SAFE"] = 0] = "SAFE";
      FINISH2[FINISH2["SAFE_WITH_CB"] = 1] = "SAFE_WITH_CB";
      FINISH2[FINISH2["UNSAFE"] = 2] = "UNSAFE";
    })(FINISH = exports.FINISH || (exports.FINISH = {}));
    exports.ALPHA = [];
    for (let i3 = "A".charCodeAt(0); i3 <= "Z".charCodeAt(0); i3++) {
      exports.ALPHA.push(String.fromCharCode(i3));
      exports.ALPHA.push(String.fromCharCode(i3 + 32));
    }
    exports.NUM_MAP = {
      0: 0,
      1: 1,
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      6: 6,
      7: 7,
      8: 8,
      9: 9
    };
    exports.HEX_MAP = {
      0: 0,
      1: 1,
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      6: 6,
      7: 7,
      8: 8,
      9: 9,
      A: 10,
      B: 11,
      C: 12,
      D: 13,
      E: 14,
      F: 15,
      a: 10,
      b: 11,
      c: 12,
      d: 13,
      e: 14,
      f: 15
    };
    exports.NUM = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9"
    ];
    exports.ALPHANUM = exports.ALPHA.concat(exports.NUM);
    exports.MARK = ["-", "_", ".", "!", "~", "*", "'", "(", ")"];
    exports.USERINFO_CHARS = exports.ALPHANUM.concat(exports.MARK).concat(["%", ";", ":", "&", "=", "+", "$", ","]);
    exports.STRICT_URL_CHAR = [
      "!",
      '"',
      "$",
      "%",
      "&",
      "'",
      "(",
      ")",
      "*",
      "+",
      ",",
      "-",
      ".",
      "/",
      ":",
      ";",
      "<",
      "=",
      ">",
      "@",
      "[",
      "\\",
      "]",
      "^",
      "_",
      "`",
      "{",
      "|",
      "}",
      "~"
    ].concat(exports.ALPHANUM);
    exports.URL_CHAR = exports.STRICT_URL_CHAR.concat(["	", "\f"]);
    for (let i3 = 128; i3 <= 255; i3++) {
      exports.URL_CHAR.push(i3);
    }
    exports.HEX = exports.NUM.concat(["a", "b", "c", "d", "e", "f", "A", "B", "C", "D", "E", "F"]);
    exports.STRICT_TOKEN = [
      "!",
      "#",
      "$",
      "%",
      "&",
      "'",
      "*",
      "+",
      "-",
      ".",
      "^",
      "_",
      "`",
      "|",
      "~"
    ].concat(exports.ALPHANUM);
    exports.TOKEN = exports.STRICT_TOKEN.concat([" "]);
    exports.HEADER_CHARS = ["	"];
    for (let i3 = 32; i3 <= 255; i3++) {
      if (i3 !== 127) {
        exports.HEADER_CHARS.push(i3);
      }
    }
    exports.CONNECTION_TOKEN_CHARS = exports.HEADER_CHARS.filter((c) => c !== 44);
    exports.MAJOR = exports.NUM_MAP;
    exports.MINOR = exports.MAJOR;
    var HEADER_STATE;
    (function(HEADER_STATE2) {
      HEADER_STATE2[HEADER_STATE2["GENERAL"] = 0] = "GENERAL";
      HEADER_STATE2[HEADER_STATE2["CONNECTION"] = 1] = "CONNECTION";
      HEADER_STATE2[HEADER_STATE2["CONTENT_LENGTH"] = 2] = "CONTENT_LENGTH";
      HEADER_STATE2[HEADER_STATE2["TRANSFER_ENCODING"] = 3] = "TRANSFER_ENCODING";
      HEADER_STATE2[HEADER_STATE2["UPGRADE"] = 4] = "UPGRADE";
      HEADER_STATE2[HEADER_STATE2["CONNECTION_KEEP_ALIVE"] = 5] = "CONNECTION_KEEP_ALIVE";
      HEADER_STATE2[HEADER_STATE2["CONNECTION_CLOSE"] = 6] = "CONNECTION_CLOSE";
      HEADER_STATE2[HEADER_STATE2["CONNECTION_UPGRADE"] = 7] = "CONNECTION_UPGRADE";
      HEADER_STATE2[HEADER_STATE2["TRANSFER_ENCODING_CHUNKED"] = 8] = "TRANSFER_ENCODING_CHUNKED";
    })(HEADER_STATE = exports.HEADER_STATE || (exports.HEADER_STATE = {}));
    exports.SPECIAL_HEADERS = {
      "connection": HEADER_STATE.CONNECTION,
      "content-length": HEADER_STATE.CONTENT_LENGTH,
      "proxy-connection": HEADER_STATE.CONNECTION,
      "transfer-encoding": HEADER_STATE.TRANSFER_ENCODING,
      "upgrade": HEADER_STATE.UPGRADE
    };
  }
});

// node_modules/undici/lib/handler/RedirectHandler.js
var require_RedirectHandler = __commonJS({
  "node_modules/undici/lib/handler/RedirectHandler.js"(exports, module2) {
    "use strict";
    init_shims();
    var util = require_util();
    var { kBodyUsed } = require_symbols();
    var assert = require("assert");
    var { InvalidArgumentError } = require_errors();
    var EE = require("events");
    var redirectableStatusCodes = [300, 301, 302, 303, 307, 308];
    var kBody = Symbol("body");
    var BodyAsyncIterable = class {
      constructor(body) {
        this[kBody] = body;
        this[kBodyUsed] = false;
      }
      async *[Symbol.asyncIterator]() {
        assert(!this[kBodyUsed], "disturbed");
        this[kBodyUsed] = true;
        yield* this[kBody];
      }
    };
    var RedirectHandler = class {
      constructor(dispatch, maxRedirections, opts, handler2) {
        if (maxRedirections != null && (!Number.isInteger(maxRedirections) || maxRedirections < 0)) {
          throw new InvalidArgumentError("maxRedirections must be a positive number");
        }
        util.validateHandler(handler2, opts.method, opts.upgrade);
        this.dispatch = dispatch;
        this.location = null;
        this.abort = null;
        this.opts = { ...opts, maxRedirections: 0 };
        this.maxRedirections = maxRedirections;
        this.handler = handler2;
        this.history = [];
        if (util.isStream(this.opts.body)) {
          if (util.bodyLength(this.opts.body) === 0) {
            this.opts.body.on("data", function() {
              assert(false);
            });
          }
          if (typeof this.opts.body.readableDidRead !== "boolean") {
            this.opts.body[kBodyUsed] = false;
            EE.prototype.on.call(this.opts.body, "data", function() {
              this[kBodyUsed] = true;
            });
          }
        } else if (this.opts.body && typeof this.opts.body.pipeTo === "function") {
          this.opts.body = new BodyAsyncIterable(this.opts.body);
        } else if (this.opts.body && typeof this.opts.body !== "string" && !ArrayBuffer.isView(this.opts.body) && util.isIterable(this.opts.body)) {
          this.opts.body = new BodyAsyncIterable(this.opts.body);
        }
      }
      onConnect(abort) {
        this.abort = abort;
        this.handler.onConnect(abort, { history: this.history });
      }
      onUpgrade(statusCode, headers, socket) {
        this.handler.onUpgrade(statusCode, headers, socket);
      }
      onError(error2) {
        this.handler.onError(error2);
      }
      onHeaders(statusCode, headers, resume, statusText) {
        this.location = this.history.length >= this.maxRedirections || util.isDisturbed(this.opts.body) ? null : parseLocation(statusCode, headers);
        if (this.opts.origin) {
          this.history.push(new URL(this.opts.path, this.opts.origin));
        }
        if (!this.location) {
          return this.handler.onHeaders(statusCode, headers, resume, statusText);
        }
        const { origin, pathname, search } = util.parseURL(new URL(this.location, this.opts.origin && new URL(this.opts.path, this.opts.origin)));
        const path = search ? `${pathname}${search}` : pathname;
        this.opts.headers = cleanRequestHeaders(this.opts.headers, statusCode === 303, this.opts.origin !== origin);
        this.opts.path = path;
        this.opts.origin = origin;
        this.opts.maxRedirections = 0;
        this.opts.query = null;
        if (statusCode === 303 && this.opts.method !== "HEAD") {
          this.opts.method = "GET";
          this.opts.body = null;
        }
      }
      onData(chunk) {
        if (this.location) {
        } else {
          return this.handler.onData(chunk);
        }
      }
      onComplete(trailers) {
        if (this.location) {
          this.location = null;
          this.abort = null;
          this.dispatch(this.opts, this);
        } else {
          this.handler.onComplete(trailers);
        }
      }
      onBodySent(chunk) {
        if (this.handler.onBodySent) {
          this.handler.onBodySent(chunk);
        }
      }
    };
    function parseLocation(statusCode, headers) {
      if (redirectableStatusCodes.indexOf(statusCode) === -1) {
        return null;
      }
      for (let i3 = 0; i3 < headers.length; i3 += 2) {
        if (headers[i3].toString().toLowerCase() === "location") {
          return headers[i3 + 1];
        }
      }
    }
    function shouldRemoveHeader(header, removeContent, unknownOrigin) {
      return header.length === 4 && header.toString().toLowerCase() === "host" || removeContent && header.toString().toLowerCase().indexOf("content-") === 0 || unknownOrigin && header.length === 13 && header.toString().toLowerCase() === "authorization" || unknownOrigin && header.length === 6 && header.toString().toLowerCase() === "cookie";
    }
    function cleanRequestHeaders(headers, removeContent, unknownOrigin) {
      const ret = [];
      if (Array.isArray(headers)) {
        for (let i3 = 0; i3 < headers.length; i3 += 2) {
          if (!shouldRemoveHeader(headers[i3], removeContent, unknownOrigin)) {
            ret.push(headers[i3], headers[i3 + 1]);
          }
        }
      } else if (headers && typeof headers === "object") {
        for (const key2 of Object.keys(headers)) {
          if (!shouldRemoveHeader(key2, removeContent, unknownOrigin)) {
            ret.push(key2, headers[key2]);
          }
        }
      } else {
        assert(headers == null, "headers must be an object or an array");
      }
      return ret;
    }
    module2.exports = RedirectHandler;
  }
});

// node_modules/undici/lib/interceptor/redirectInterceptor.js
var require_redirectInterceptor = __commonJS({
  "node_modules/undici/lib/interceptor/redirectInterceptor.js"(exports, module2) {
    "use strict";
    init_shims();
    var RedirectHandler = require_RedirectHandler();
    function createRedirectInterceptor({ maxRedirections: defaultMaxRedirections }) {
      return (dispatch) => {
        return function Intercept(opts, handler2) {
          const { maxRedirections = defaultMaxRedirections } = opts;
          if (!maxRedirections) {
            return dispatch(opts, handler2);
          }
          const redirectHandler = new RedirectHandler(dispatch, maxRedirections, opts, handler2);
          opts = { ...opts, maxRedirections: 0 };
          return dispatch(opts, redirectHandler);
        };
      };
    }
    module2.exports = createRedirectInterceptor;
  }
});

// node_modules/undici/lib/llhttp/llhttp.wasm.js
var require_llhttp_wasm = __commonJS({
  "node_modules/undici/lib/llhttp/llhttp.wasm.js"(exports, module2) {
    init_shims();
    module2.exports = "AGFzbQEAAAABMAhgAX8Bf2ADf39/AX9gBH9/f38Bf2AAAGADf39/AGABfwBgAn9/AGAGf39/f39/AALLAQgDZW52GHdhc21fb25faGVhZGVyc19jb21wbGV0ZQACA2VudhV3YXNtX29uX21lc3NhZ2VfYmVnaW4AAANlbnYLd2FzbV9vbl91cmwAAQNlbnYOd2FzbV9vbl9zdGF0dXMAAQNlbnYUd2FzbV9vbl9oZWFkZXJfZmllbGQAAQNlbnYUd2FzbV9vbl9oZWFkZXJfdmFsdWUAAQNlbnYMd2FzbV9vbl9ib2R5AAEDZW52GHdhc21fb25fbWVzc2FnZV9jb21wbGV0ZQAAA0ZFAwMEAAAFAAAAAAAABQEFAAUFBQAABgAAAAAGBgYGAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQABAAABAQcAAAUFAAMBBAUBcAESEgUDAQACBggBfwFBgNQECwfRBSIGbWVtb3J5AgALX2luaXRpYWxpemUACRlfX2luZGlyZWN0X2Z1bmN0aW9uX3RhYmxlAQALbGxodHRwX2luaXQAChhsbGh0dHBfc2hvdWxkX2tlZXBfYWxpdmUAQQxsbGh0dHBfYWxsb2MADAZtYWxsb2MARgtsbGh0dHBfZnJlZQANBGZyZWUASA9sbGh0dHBfZ2V0X3R5cGUADhVsbGh0dHBfZ2V0X2h0dHBfbWFqb3IADxVsbGh0dHBfZ2V0X2h0dHBfbWlub3IAEBFsbGh0dHBfZ2V0X21ldGhvZAARFmxsaHR0cF9nZXRfc3RhdHVzX2NvZGUAEhJsbGh0dHBfZ2V0X3VwZ3JhZGUAEwxsbGh0dHBfcmVzZXQAFA5sbGh0dHBfZXhlY3V0ZQAVFGxsaHR0cF9zZXR0aW5nc19pbml0ABYNbGxodHRwX2ZpbmlzaAAXDGxsaHR0cF9wYXVzZQAYDWxsaHR0cF9yZXN1bWUAGRtsbGh0dHBfcmVzdW1lX2FmdGVyX3VwZ3JhZGUAGhBsbGh0dHBfZ2V0X2Vycm5vABsXbGxodHRwX2dldF9lcnJvcl9yZWFzb24AHBdsbGh0dHBfc2V0X2Vycm9yX3JlYXNvbgAdFGxsaHR0cF9nZXRfZXJyb3JfcG9zAB4RbGxodHRwX2Vycm5vX25hbWUAHxJsbGh0dHBfbWV0aG9kX25hbWUAIBJs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EGpCADcDACAAQQhqQgA3AwAgAEHdATYCHEEAC3sBAX8CQCAAKAIMIgMNAAJAIAAoAgRFDQAgACABNgIECwJAIAAgASACEMSAgIAAIgMNACAAKAIMDwsgACADNgIcQQAhAyAAKAIEIgFFDQAgACABIAIgACgCCBGBgICAAAAiAUUNACAAIAI2AhQgACABNgIMIAEhAwsgAwvc9wEDKH8DfgV/I4CAgIAAQRBrIgMkgICAgAAgASEEIAEhBSABIQYgASEHIAEhCCABIQkgASEKIAEhCyABIQwgASENIAEhDiABIQ8gASEQIAEhESABIRIgASETIAEhFCABIRUgASEWIAEhFyABIRggASEZIAEhGiABIRsgASEcIAEhHSABIR4gASEfIAEhICABISEgASEiIAEhIyABISQgASElIAEhJiABIScgASEoIAEhKQJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQCAAKAIcIipBf2oO3QHaAQHZAQIDBAUGBwgJCgsMDQ7YAQ8Q1wEREtYBExQVFhcYGRob4AHfARwdHtUBHyAhIiMkJdQBJicoKSorLNMB0gEtLtEB0AEvMDEyMzQ1Njc4OTo7PD0+P0BBQkNERUbbAUdISUrPAc4B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AQtBwQEhKgsDQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJA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UGoON+cB5gEBAgMEBQYHCAAAAAAAAAAJCgsMDQ4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8QERITFAALQR4hKgzEAwtCAiErDOUBC0IDISsM5AELQgQhKwzjAQtCBSErDOIBC0IGISsM4QELQgchKwzgAQtCCCErDN8BC0IJISsM3gELQgohKwzdAQtCCyErDNwBC0IMISsM2wELQg0hKwzaAQtCDiErDNkBC0IPISsM2AELQgohKwzXAQtCCyErDNYBC0IMISsM1QELQg0hKwzUAQtCDiErDNMBC0IPISsM0gELQgAhKwJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAgKi0AAEFQag435QHkAQABAgMEBQYH5gHmAeYB5gHmAeYB5gEICQoLDA3mAeYB5gHmAeYB5gHmAeYB5gHmAeYB5gHmAeYB5gHmAeYB5gHmAeYB5gHmAeYB5gHmAeYBDg8QERIT5gELQgIhKwzkAQtCAyErDOMBC0IEISsM4gELQgUhKwzhAQtCBiErDOABC0IHISsM3wELQgghKwzeAQtCCSErDN0BC0IKISsM3AELQgshKwzbAQtCDCErDNoBC0INISsM2QELQg4hKwzYAQtCDyErDNcBC0IKISsM1gELQgshKwzVAQtCDCErDNQBC0INISsM0wELQg4hKwzSAQtCDyErDNEBCyAAQgAgACkDICIrIAIgASIqa60iLH0iLSAtICtWGzcDICArICxWIi5FDdIBQR8hKgzHAwsCQCABIgEgAkYNACAAQYmAgIAANgIIIAAgATYCBCABIQFBJCEqDK4DC0EgISoMxgMLIAAgASIqIAIQvoCAgABBf2oOBbYBAMsCAdEB0gELQREhKgyrAwsgAEEBOgAvICohAQzCAwsgASIBIAJHDdIBQSQhKgzCAwsgASInIAJHDR5BxgAhKgzBAwsgACABIgEgAhCygICAACIqDdQBIAEhAQy1AQsgASIqIAJHDSZB0AAhKgy/AwsCQCABIgEgAkcNAEEoISoMvwMLIABBADYCBCAAQYyAgIAANgIIIAAgASABELGAgIAAIioN0wEgASEBDNgBCwJAIAEiKiACRw0AQSkhKgy+AwsgKi0AACIBQSBGDRQgAUEJRw3TASAqQQFqIQEMFQsCQCABIgEgAkYNACABQQFq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AUEBaiEBIARBAWoiBCACRw0ACyAAICo2AgBBgwEhKgzoAgtBACEqIABBADYCACAuIDJrQQNqIQEMygELAkAgASIqIAJHDQBBhAEhKgznAgsgAiAqayAAKAIAIi5qITIgKiEEIC4hAQJAA0AgBC0AACABQYPPgIAAai0AAEcNzAEgAUEERg0BIAFBAWohASAEQQFqIgQgAkcNAAsgACAyNgIAQYQBISoM5wILIABBADYCACAqIC5rQQVqIQFBIyEqDMkBCwJAIAEiBCACRw0AQYUBISoM5gILAkACQCAELQAAQbR/ag4IAMwBzAHMAcwBzAHMAQHMAQsgBEEBaiEBQe8AISoMzQILIARBAWohAUHwACEqDMwCCwJAIAEiBCACRw0AQYYBISoM5QILIAQtAABBxQBHDckBIARBAWohAQyKAgsCQCABIiogAkcNAEGHASEqDOQCCyACICprIAAoAgAiLmohMiAqIQQgLiEBAkADQCAELQAAIAFBiM+AgABqLQAARw3JASABQQNGDQEgAUEBaiEBIARBAWoiBCACRw0ACyAAIDI2AgBBhwEhKgzkAgsgAEEANgIAICogLmtBBGohAUEtISoMxgELAkAgASIqIAJHDQBBiAEhKgzjAgsgAiAqayAAKAIAIi5qITIgKiEEIC4hAQJAA0AgBC0AACABQdDPgIAAai0AAEcNyAEgAUEIRg0BIAFBAWohASAEQQFqIgQgAkcNAAsgACAyNgIAQYgBISoM4wILIABBADYCACAqIC5rQQlqIQFBKSEqDMUBCwJAIAEiASACRw0AQYkBISoM4gILQQEhKiABLQAAQd8ARw3EASABQQFqIQEMiAILAkAgASIqIAJHDQBBigEhKgzhAgsgAiAqayAAKAIAIi5qITIgKiEEIC4hAQNAIAQtAAAgAUGMz4CAAGotAABHDcUBIAFBAUYNtwIgAUEBaiEBIARBAWoiBCACRw0ACyAAIDI2AgBBigEhKgzgAgsCQCABIiogAkcNAEGLASEqDOACCyACICprIAAoAgAiLmohMiAqIQQgLiEBAkADQCAELQAAIAFBjs+AgABqLQAARw3FASABQQJGDQEgAUEBaiEBIARBAWoiBCACRw0ACyAAIDI2AgBBiwEhKgzgAgsgAEEANgIAICogLmtBA2ohAUECISoMwgELAkAgASIqIAJHDQBB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AABBt39qDgcBrgGuAa4BrgGuAQCuAQsgBEEBaiEEQY4BISoMrwILIARBAWohAUEiISoMqgELAkAgDiACRw0AQaQBISoMxwILIAIgDmsgACgCACIqaiEuIA4hBCAqIQECQANAIAQtAAAgAUHAz4CAAGotAABHDawBIAFBAUYNASABQQFqIQEgBEEBaiIEIAJHDQALIAAgLjYCAEGkASEqDMcCCyAAQQA2AgAgDiAqa0ECaiEBQR0hKgypAQsCQCAEIAJHDQBBpQEhKgzGAgsCQAJAIAQtAABBrn9qDgMArAEBrAELIARBAWohDkGQASEqDK0CCyAEQQFqIQFBBCEqDKgBCwJAIAQgAkcNAEGmASEqDMUCCwJAAkACQAJAAkAgBC0AAEG/f2oOFQCuAa4BrgGuAa4BrgGuAa4BrgGuAQGuAa4BAq4BrgEDrgGuAQSuAQsgBEEBaiEEQYgBISoMrwILIARBAWohCkGJASEqDK4CCyAEQQFqIQtBigEhKgytAgsgBEEBaiEEQY8BISoMrAILIARBAWohBEGRASEqDKsCCwJAIA8gAkcNAEGnASEqDMQCCyACIA9rIAAoAgAiKmohLiAPIQQgKiEBAkADQCAELQAAIAFB7c+AgABqLQAARw2pASABQQJGDQEgAUEBaiEBIARBAWoiBCACRw0ACyAAIC42AgBBpwEhKgzEAgsgAEEANgIAIA8gKmtBA2ohAUERISoMpgELAkAgECACRw0AQagBISoMwwILIAIgEGsgACgCACIqaiEuIBAhBCAqIQECQANAIAQtAAAgAUHCz4CAAGotAABHDagBIAFBAkYNASABQQFqIQEgBEEBaiIEIAJHDQALIAAgLjYCAEGoASEqDMMCCyAAQQA2AgAgECAqa0EDaiEBQSwhKgylAQsCQCARIAJHDQBBqQEhKgzCAgsgAiARayAAKAIAIipqIS4gESEEICohAQJAA0AgBC0AACABQcXPgIAAai0AAEcNpwEgAUEERg0BIAFBAWohASAEQQFqIgQgAkcNAAsgACAuNgIAQakBISoMwgILIABBADYCACARICprQQVqIQFBKyEqDKQBCwJAIBIgAkcNAEGqASEqDMECCyACIBJrIAAoAgAiKmohLiASIQQgKiEBAkADQCAELQAAIAFBys+AgABqLQAARw2mASABQQJGDQEgAUEBaiEB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8s+AgABqLQAARw2WASABQQFGDQEgAUEBaiEBIARBAWoiBCACRw0ACyAAIC42AgBBugEhKgyxAgsgAEEANgIAIBsgKmtBAmohAUEPISoMkwELAkAgBCACRw0AQbsBISoMsAILAkACQCAELQAAQbd/ag4HAJYBlgGWAZYBlgEBlgELIARBAWohGkGlASEqDJcCCyAEQQFqIRtBpgEhKgyWAgsCQCAcIAJHDQBBvAEhKgyvAgsgAiAcayAAKAIAIipqIS4gHCEEICohAQJAA0AgBC0AACABQfTPgIAAai0AAEcNlAEgAUEHRg0BIAFBAWohASAEQQFqIgQgAkcNAAsgACAuNgIAQbwBISoMrwILIABBADYCACAcICprQQhqIQFBGyEqDJEBCwJAIAQgAkcNAEG9ASEqDK4CCwJAAkACQCAELQAAQb5/ag4SAJUBlQGVAZUBlQGVAZUBlQGVAQGVAZUBlQGVAZUBlQEClQELIARBAWohGUGkASEqDJYCCyAEQQFqIQRBpwEhKgyVAgsgBEEBaiEcQagBISoMlAILAkAgBCACRw0AQb4BISoMrQILIAQtAABBzgBHDZEBIARBAWohBAzWAQsCQCAEIAJHDQBBvwEhKgysAgsCQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQCAELQAAQb9/ag4VAAECA6ABBAUGoAGgAaABBwgJCgugAQwNDg+gAQsgBEEBaiEBQegAISoMoQILIARBAWohAUHpACEqDKACCyAEQQFqIQFB7gAhKgyfAgsgBEEBaiEBQfIAISoMngILIARBAWohAUHzACEqDJ0CCyAEQQFqIQFB9gAhKgycAgsgBEEBaiEBQfcAISoMmwILIARBAWohAUH6ACEqDJoCCyAEQQFqIQRBgwEhKgyZAgsgBEEBaiEGQYQBISoMmAILIARBAWohB0GFASEqDJcCCyAEQQFqIQRBkgEhKgyWAgsgBEEBaiEEQZgBISoMlQILIARBAWohBEGgASEqDJQCCyAEQQFqIQRBowEhKgyTAgsgBEEBaiEEQaoBISoMkgILAkAgBCACRg0AIABBkICAgAA2AgggACAENgIEQasBISoMkgILQcABISoMqgILIAAgHSACEKqAgIAAIgENjwEgHSEBDF4LAkAgHiACRg0AIB5BAWohHQyRAQtBwgEhKgyoAgsD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NgIUIABB2o2AgAA2AhAgAEEUNgIMQQAhKgyNAgsgACgCBCEyIABBADYCBCAqICunaiIvIQEgACAyICogLyAuGyIqELWAgIAAIi5FDZMBIABBBzYCHCAAICo2AhQgACAuNgIMQQAhKgyMAgsgACAALwEwQYABcjsBMCABIQELQSohKgzxAQsgKkEVRg3ZASAAQQA2AhwgACABNgIUIABBg4yAgAA2AhAgAEETNgIMQQAhKgyJAgsgKkEVRg3XASAAQQA2AhwgACABNgIUIABBmo+AgAA2AhAgAEEiNgIMQQAhKgyIAgsgACgCBCEqIABBADYCBAJAIAAgKiABELeAgIAAIioNACABQQFqIQEMkwELIABBDDYCHCAAICo2AgwgACABQQFqNgIUQQAhKgyHAgsgKkEVRg3UASAAQQA2AhwgACABNgIUIABBmo+AgAA2AhAgAEEiNgIMQQAhKgyGAgsgACgCBCEqIABBADYCBAJAIAAgKiABELeAgIAAIioNACABQQFqIQEMkgELIABBDTYCHCAAICo2AgwgACABQQFqNgIUQQAhKgyFAgsgKkEVRg3RASAAQQA2AhwgACABNgIUIABBxoyAgAA2AhAgAEEjNgIMQQAhKgyEAgsgACgCBCEqIABBADYCBAJAIAAgKiABELmAgIAAIioNACABQQFqIQEMkQELIABBDjYCHCAAICo2AgwgACABQQFqNgIUQQAhKgyDAgsgAEEANgIcIAAgATYCFCAAQcCVgIAANgIQIABBAjYCDEEAISoMggILICpBFUYNzQEgAEEANgIcIAAgATYCFCAAQcaMgIAANgIQIABBIzYCDEEAISoMgQILIABBEDYCHCAAIAE2AhQgACAqNgIMQQAhKgyAAgsgACgCBCEEIABBADYCBAJAIAAgBCABELmAgIAAIgQNACABQQFqIQEM+AELIABBETYCHCAAIAQ2AgwgACABQQFqNgIUQQAhKgz/AQsgKkEVRg3JASAAQQA2AhwgACABNgIUIABBxoyAgAA2AhAgAEEjNgIMQQAhKgz+AQsgACgCBCEqIABBADYCBAJAIAAgKiABELmAgIAAIioNACABQQFqIQEMjgELIABBEzYCHCAAICo2AgwgACABQQFqNgIUQQAhKgz9AQsgACgCBCEEIABBADYCBAJAIAAgBCABELmAgIAAIgQNACAB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AkAgAC0AKUEjTw0AIAEhAQxcCyAAQQA2AhwgACABNgIUIABB04mAgAA2AhAgAEEINgIMQQAhKgy8AQsgAEEANgIAC0EAISogAEEANgIcIAAgATYCFCAAQZCzgIAANgIQIABBCDYCDAy6AQsgAEEANgIAIDIgL2tBA2ohAQJAIAAtAClBIUcNACABIQEMWQsgAEEANgIcIAAgATYCFCAAQZuKgIAANgIQIABBCDYCDEEAISoMuQELIABBADYCACAyIC9rQQRqIQECQCAALQApIipBXWpBC08NACABIQEMWAsCQCAqQQZLDQBBASAqdEHKAHFFDQAgASEBDFgLQQAhKiAAQQA2AhwgACABNgIUIABB94mAgAA2AhAgAEEINgIMDLgBCyAqQRVGDXUgAEEANgIcIAAgATYCFCAAQbmNgIAANgIQIABBGjYCDEEAISoMtwELIAAoAgQhKiAAQQA2AgQCQCAAICogARCngICAACIqDQAgASEBDFcLIABB5QA2AhwgACABNgIUIAAgKjYCDEEAISoMtgELIAAoAgQhKiAAQQA2AgQCQCAAICogARCngICAACIqDQAgASEBDE8LIABB0gA2AhwgACABNgIUIAAgKjYCDEEAISoMtQELIAAoAgQhKiAAQQA2AgQCQCAAICogARCngICAACIqDQAgASEBDE8LIABB0wA2AhwgACABNgIUIAAgKjYCDEEAISoMtAELIAAoAgQhKiAAQQA2AgQCQCAAICogARCngICAACIqDQAgASEBDFQLIABB5QA2AhwgACABNgIUIAAgKjYCDEEAISoMswELIABBADYCHCAAIAE2AhQgAEHGioCAADYCECAAQQc2AgxBACEqDLIBCyAAKAIEISogAEEANgIEAkAgACAqIAEQp4CAgAAiKg0AIAEhAQxLCyAAQdIANgIcIAAgATYCFCAAICo2AgxBACEqDLEBCyAAKAIEISogAEEANgIEAkAgACAqIAEQp4CAgAAiKg0AIAEhAQxLCyAAQdMANgIcIAAgATYCFCAAICo2AgxBACEqDLABCyAAKAIEISogAEEANgIEAkAgACAqIAEQp4CAgAAiKg0AIAEhAQxQCyAAQeUANgIcIAAgATYCFCAAICo2AgxBACEqDK8BCyAAQQA2AhwgACABNgIUIABB3IiAgAA2AhAgAEEHNgIMQQAhKgyuAQsgKkE/Rw0BIAFBAWohAQtBBSEqDJMBC0EAISogAEEANgIcIAAgATYCFCAAQf2SgIAANgIQIABBBzYCDAyrAQsgACgCBCEqIABBADYCBAJAIAAgKiABEKeAgIAAIioNACABIQEMRAsgAEHSADYCHCAAIAE2AhQgACAqNgIMQQAhKgyqAQsgACgCBCEqIABBADYCBAJAIAAgKiABEKeAgIAAIioNACABIQEMRAsgAEHTADYCHCAAIAE2AhQgACAqNgIMQQAhKgypAQsgACgCBCEqIABBADYCBAJAIAAgKiABEKeAgIAAIioNACABIQEMSQsgAEHlADYCHCAAIAE2AhQgACAqNgIMQQAhKgyoAQsgACgCBCEBIABBADYCBAJAIAAgASAuEKeAgIAAIgENACAuIQEMQQsgAEHSADYCHCAAIC42AhQgACABNgIMQQAhKgynAQsgACgCBCEBIABBADYCBAJAIAAgASAuEKeAgIAAIgENACAuIQEMQQsgAEHTADYCHCAAIC42AhQgACABNgIMQQAhKgymAQsgACgCBCEBIABBADYCBAJAIAAgASAuEKeAgIAAIgENACAuIQEMRgsgAEHlADYCHCAAIC42AhQgACABNgIMQQAhKgylAQsgAEEANgIcIAAgLjYCFCAAQcOPgIAANgIQIABBBzYCDEEAISoMpAELIABBADYCHCAAIAE2AhQgAEHDj4CAADYCECAAQQc2AgxBACEqDKMBC0EAISogAEEANgIcIAAgLjYCFCAAQYycgIAANgIQIABBBzYCDAyiAQsgAEEANgIcIAAgLjYCFCAAQYycgIAANgIQIABBBzYCDEEAISoMoQELIABBADYCHCAAIC42AhQgAEH+kYCAADYCECAAQQc2AgxBACEqDKABCyAAQQA2AhwgACABNgIUIABBjpuAgAA2AhAgAEEGNgIMQQAhKgyfAQsgKkEVRg1bIABBADYCHCAAIAE2AhQgAEHMjoCAADYCECAAQSA2AgxBACEqDJ4BCyAAQQA2AgAgKiAua0EGaiEBQSQhKgsgACAqOgApIAAoAgQhKiAAQQA2AgQgACAqIAEQq4CAgAAiKg1YIAEhAQxBCyAAQQA2AgALQQAhKiAAQQA2AhwgACAENgIUIABB8ZuAgAA2AhAgAEEGNgIMDJoBCyABQRVGDVQgAEEANgIcIAAgHTYCFCAAQfCMgIAANgIQIABBGzYCDEEAISoMmQELIAAoAgQhHSAAQQA2AgQgACAdICoQqYCAgAAiHQ0BICpBAWohHQtBrQEhKgx+CyAAQcEBNgIcIAAgHTYCDCAAICpBAWo2AhRBACEqDJYBCyAAKAIEIR4gAEEANgIEIAAgHiAqEKmAgIAAIh4NASAqQQFqIR4LQa4BISoMewsgAEHCATYCHCAAIB42AgwgACAqQQFqNgIUQQAhKgyTAQsgAEEANgIcIAAgHzYCFCAAQZeLgIAANgIQIABBDTYCDEEAISoMkgELIABBADYCHCAAICA2AhQgAEHjkICAADYCECAAQQk2AgxBACEqDJEBCyAAQQA2AhwgACAgNgIUIABBlI2AgAA2AhAgAEEhNgIMQQAhKgyQAQtBASEvQQAhMkEAIS5BASEqCyAAICo6ACsgIUEBaiEgAkACQCAALQAtQRBxDQACQAJAAkAgAC0AKg4DAQACBAsgL0UNAwwCCyAuDQEMAgsgMkUNAQsgACgCBCEqIABBADYCBCAAICogIBCtgICAACIqRQ1AIABByQE2AhwgACAgNgIUIAAgKjYCDEEAISoMjwELIAAoAgQhASAAQQA2AgQgACABICAQrYCAgAAiAUUNeSAAQcoBNgIcIAAgIDYCFCAAIAE2AgxBACEqDI4BCyAAKAIEIQEgAEEANgIEIAAgASAhEK2AgIAAIgFFDXcgAEHLATYCHCAAICE2AhQgACABNgIMQQAhKgyNAQsgACgCBCEBIABBADYCBCAAIAEgIhCtgICAACIBRQ11IABBzQE2AhwgACAiNgIUIAAgATYCDEEAISoMjAELQQEhKgsgACAqOgAqICNBAWohIgw9CyAAKAIEIQEgAEEANgIEIAAgASAjEK2AgIAAIgFFDXEgAEHPATYCHCAAICM2AhQgACABNgIMQQAhKgyJAQsgAEEANgIcIAAgIzYCFCAAQZCzgIAANgIQIABBCDYCDCAAQQA2AgBBACEqDIgBCyABQRVGDUEgAEEANgIcIAAgJDYCFCAAQcyOgIAANgIQIABBIDYCDEEAISoMhwELIABBADYCACAAQYEEOwEoIAAoAgQhKiAAQQA2AgQgACAqICUgJGtBAmoiJBCrgICAACIqRQ06IABB0wE2AhwgACAkNgIUIAAgKjYCDEEAISoMhgELIABBADYCAAtBACEqIABBADYCHCAAIAQ2AhQgAEHYm4CAADYCECAAQQg2AgwMhAELIABBADYCACAAKAIEISogAEEANgIEIAAgKiAmICNrQQNqIiMQq4CAgAAiKg0BQcYBISoMagsgAEECOgAoDFcLIABB1QE2AhwgACAjNgIUIAAgKjYCDEEAISoMgQELICpBFUYNOSAAQQA2AhwgACAENgIUIABBpIyAgAA2AhAgAEEQNgIMQQAhKgyAAQsgAC0ANEEBRw02IAAgBCACELyAgIAAIipFDTYgKkEVRw03IABB3AE2AhwgACAENgIUIABB1ZaAgAA2AhAgAEEVNgIMQQAhKgx/C0EAISogAEEANgIcIABBr4uAgAA2AhAgAEECNgIMIAAgLkEBajYCFAx+C0EAISoMZAtBAiEqDGMLQQ0hKgxiC0EPISoMYQtBJSEqDGALQRMhKgxfC0EVISoMXgtBFiEqDF0LQRchKgxcC0EYISoMWwtBGSEqDFoLQRohKgxZC0EbISoMWAtBHCEqDFcLQR0hKgxWC0EfISoMVQtBISEqDFQLQSMhKgxTC0HGACEqDFILQS4hKgxRC0EvISoMUAtBOyEqDE8LQT0hKgxOC0HIACEqDE0LQckAISoMTAtBywAhKgxLC0HMACEqDEoLQc4AISoMSQtBzwAhKgxIC0HRACEqDEcLQdUAISoMRgtB2AAhKgxFC0HZACEqDEQLQdsAISoMQwtB5AAhKgxCC0HlACEqDEELQfEAISoMQAtB9AAhKgw/C0GNASEqDD4LQZcBISoMPQtBqQEhKgw8C0GsASEqDDsLQcABISoMOgtBuQEhKgw5C0GvASEqDDgLQbEBISoMNwtBsgEhKgw2C0G0ASEqDDULQbUBISoMNAtBtgEhKgwzC0G6ASEqDDILQb0BISoMMQtBvwEhKgwwC0HBASEqDC8LIABBADYCHCAAIAQ2AhQgAEHpi4CAADYCECAAQR82AgxBACEqDEcLIABB2wE2AhwgACAENgIUIABB+paAgAA2AhAgAEEVNgIMQQAhKgxGCyAAQfgANgIcIAAgJDYCFCAAQcqYgIAANgIQIABBFTYCDEEAISoMRQsgAEHRADYCHCAAIB02AhQgAEGwl4CAADYCECAAQRU2AgxBACEqDEQLIABB+QA2AhwgACABNgIUIAAgKjYCDEEAISoMQwsgAEH4ADYCHCAAIAE2AhQgAEHKmICAADYCECAAQRU2AgxBACEqDEILIABB5AA2AhwgACABNgIUIABB45eAgAA2AhAgAEEVNgIMQQAhKgxBCyAAQdcANgIcIAAgATYCFCAAQcmXgIAANgIQIABBFTYCDEEAISoMQAsgAEEANgIcIAAgATYCFCAAQbmNgIAANgIQIABBGjYCDEEAISoMPwsgAEHCADYCHCAAIAE2AhQgAEHjmICAADYCECAAQRU2AgxBACEqDD4LIABBADYCBCAAICkgKRCxgICAACIBRQ0BIABBOjYCHCAAIAE2AgwgACApQQFqNgIUQQAhKgw9CyAAKAIEIQQgAEEANgIEAkAgACAEIAEQsYCAgAAiBEUNACAAQTs2AhwgACAENgIMIAAgAUEBajYCFEEAISoMPQsgAUEBaiEBDCwLIClBAWohAQwsCyAAQQA2AhwgACApNgIUIABB5JKAgAA2AhAgAEEENgIMQQAhKgw6CyAAQTY2AhwgACABNgIUIAAgBDYCDEEAISoMOQsgAEEuNgIcIAAgKDYCFCAAIAE2AgxBACEqDDgLIABB0AA2AhwgACABNgIUIABBkZiAgAA2AhAgAEEVNgIMQQAhKgw3CyAnQQFqIQEMKwsgAEEVNgIcIAAgATYCFCAAQYKZgIAANgIQIABBFTYCDEEAISoMNQsgAEEbNgIcIAAgATYCFCAAQZGXgIAANgIQIABBFTYCDEEAISoMNAsgAEEPNgIcIAAgATYCFCAAQZGXgIAANgIQIABBFTYCDEEAISoMMwsgAEELNgIcIAAgATYCFCAAQZGXgIAANgIQIABBFTYCDEEAISoMMgsgAEEaNgIcIAAgATYCFCAAQYKZgIAANgIQIABBFTYCDEEAISoMMQsgAEELNgIcIAAgATYCFCAAQYKZgIAANgIQIABBFTYCDEEAISoMMAsgAEEKNgIcIAAgATYCFCAAQeSWgIAANgIQIABBFTYCDEEAISoMLwsgAEEeNgIcIAAgATYCFCAAQfmXgIAANgIQIABBFTYCDEEAISoMLgsgAEEANgIcIAAgKjYCFCAAQdqNgIAANgIQIABBFDYCDEEAISoMLQsgAEEENgIcIAAgATYCFCAAQbCYgIAANgIQIABBFTYCDEEAISoMLAsgAEEANgIAIAQgLmtBBWohIwtBuAEhKgwRCyAAQQA2AgAgKiAua0ECaiEBQfUAISoMEAsgASEBAkAgAC0AKUEFRw0AQeMAISoMEAtB4gAhKgwPC0EAISogAEEANgIcIABB5JGAgAA2AhAgAEEHNgIMIAAgLkEBajYCFAwnCyAAQQA2AgAgMiAva0ECaiEBQcAAISoMDQsgASEBC0E4ISoMCwsCQCABIikgAkYNAANAAkAgKS0AAEGAvoCAAGotAAAiAUEBRg0AIAFBAkcNAyApQQFqIQEMBAsgKUEBaiIpIAJHDQALQT4hKgwkC0E+ISoMIwsgAEEAOgAsICkhAQwBC0ELISoMCAtBOiEqDAcLIAFBAWohAUEtISoMBgtBKCEqDAULIABBADYCACAvIDBrQQRqIQFBBiEqCyAAICo6ACwgASEBQQwhKgwDCyAAQQA2AgAgMiAva0EHaiEBQQohKgwCCyAAQQA2AgALIABBADoALCAnIQFBCSEqDAALC0EAISogAEEANgIcIAAgIzYCFCAAQc2QgIAANgIQIABBCTYCDAwXC0EAISogAEEANgIcIAAgIjYCFCAAQemKgIAANgIQIABBCTYCDAwWC0EAISogAEEANgIcIAAgITYCFCAAQbeQgIAANgIQIABBCTYCDAwVC0EAISogAEEANgIcIAAgIDYCFCAAQZyRgIAANgIQIABBCTYCDAwUC0EAISogAEEANgIcIAAgATYCFCAAQc2QgIAANgIQIABBCTYCDAwTC0EAISogAEEANgIcIAAgATYCFCAAQemKgIAANgIQIABBCTYCDAwSC0EAISogAEEANgIcIAAgATYCFCAAQbeQgIAANgIQIABBCTYCDAwRC0EAISogAEEANgIcIAAgATYCFCAAQZyRgIAANgIQIABBCTYCDAwQC0EAISogAEEANgIcIAAgATYCFCAAQZeVgIAANgIQIABBDzYCDAwPC0EAISogAEEANgIcIAAgATYCFCAAQZeVgIAANgIQIABBDzYCDAwOC0EAISogAEEANgIcIAAgATYCFCAAQcCSgIAANgIQIABBCzYCDAwNC0EAISogAEEANgIcIAAgATYCFCAAQZWJgIAANgIQIABBCzYCDAwMC0EAISogAEEANgIcIAAgATYCFCAAQeGPgIAANgIQIABBCjYCDAwLC0EAISogAEEANgIcIAAgATYCFCAAQfuPgIAANgIQIABBCjYCDAwKC0EA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AAAABQAAAAAAAAAAAAAABgAAAAcAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABJbnZhbGlkIGNoYXIgaW4gdXJsIHF1ZXJ5AFNwYW4gY2FsbGJhY2sgZXJyb3IgaW4gb25fYm9keQBDb250ZW50LUxlbmd0aCBvdmVyZmxvdwBDaHVuayBzaXplIG92ZXJmbG93AFJlc3BvbnNlIG92ZXJmbG93AEludmFsaWQgbWV0aG9kIGZvciBIVFRQL3gueCByZXF1ZXN0AEludmFsaWQgbWV0aG9kIGZvciBSVFNQL3gueCByZXF1ZXN0AEV4cGVjdGVkIFNPVVJDRSBtZXRob2QgZm9yIElDRS94LnggcmVxdWVzdABJbnZhbGlkIGNoYXIgaW4gdXJsIGZyYWdtZW50IHN0YXJ0AEV4cGVjdGVkIGRvdABTcGFuIGNhbGxiYWNrIGVycm9yIGluIG9uX3N0YXR1cwBJbnZhbGlkIHJlc3BvbnNlIHN0YXR1cwBJbnZhbGlkIGNoYXJhY3RlciBpbiBjaHVuayBleHRlbnNpb25zAFVzZXIgY2FsbGJhY2sgZXJyb3IAYG9uX3Jlc2V0YCBjYWxsYmFjayBlcnJvcgBgb25fY2h1bmtfaGVhZGVyYCBjYWxsYmFjayBlcnJvcgBgb25fbWVzc2FnZV9iZWdpbmAgY2FsbGJhY2sgZXJyb3IAYG9uX2NodW5rX2V4dGVuc2lvbl92YWx1ZWAgY2FsbGJhY2sgZXJyb3IAYG9uX3N0YXR1c19jb21wbGV0ZWAgY2FsbGJhY2sgZXJyb3IAYG9uX3ZlcnNpb25fY29tcGxldGVgIGNhbGxiYWNrIGVycm9yAGBvbl91cmxfY29tcGxldGVgIGNhbGxiYWNrIGVycm9yAGBvbl9jaHVua19jb21wbGV0ZWAgY2FsbGJhY2sgZXJyb3IAYG9uX2hlYWRlcl92YWx1ZV9jb21wbGV0ZWAgY2FsbGJhY2sgZXJyb3IAYG9uX21lc3NhZ2VfY29tcGxldGVgIGNhbGxiYWNrIGVycm9yAGBvbl9tZXRob2RfY29tcGxldGVgIGNhbGxiYWNrIGVycm9yAGBvbl9oZWFkZXJfZmllbGRfY29tcGxldGVgIGNhbGxiYWNrIGVycm9yAGBvbl9jaHVua19leHRlbnNpb25fbmFtZWAgY2FsbGJhY2sgZXJyb3IAVW5leHBlY3RlZCBjaGFyIGluIHVybCBzZXJ2ZXIASW52YWxpZCBoZWFkZXIgdmFsdWUgY2hhcgBJbnZhbGlkIGhlYWRlciBmaWVsZCBjaGFyAFNwYW4gY2FsbGJhY2sgZXJyb3IgaW4gb25fdmVyc2lvbgBJbnZhbGlkIG1pbm9yIHZlcnNpb24ASW52YWxpZCBtYWpvciB2ZXJzaW9uAEV4cGVjdGVkIHNwYWNlIGFmdGVyIHZlcnNpb24ARXhwZWN0ZWQgQ1JMRiBhZnRlciB2ZXJzaW9uAEludmFsaWQgSFRUUCB2ZXJzaW9uAEludmFsaWQgaGVhZGVyIHRva2VuAFNwYW4gY2FsbGJhY2sgZXJyb3IgaW4gb25fdXJsAEludmFsaWQgY2hhcmFjdGVycyBpbiB1cmwAVW5leHBlY3RlZCBzdGFydCBjaGFyIGluIHVybABEb3VibGUgQCBpbiB1cmwARW1wdHkgQ29udGVudC1MZW5ndGgASW52YWxpZCBjaGFyYWN0ZXIgaW4gQ29udGVudC1MZW5ndGgARHVwbGljYXRlIENvbnRlbnQtTGVuZ3RoAEludmFsaWQgY2hhciBpbiB1cmwgcGF0aABDb250ZW50LUxlbmd0aCBjYW4ndCBiZSBwcmVzZW50IHdpdGggVHJhbnNmZXItRW5jb2RpbmcASW52YWxpZCBjaGFyYWN0ZXIgaW4gY2h1bmsgc2l6ZQBTcGFuIGNhbGxiYWNrIGVycm9yIGluIG9uX2hlYWRlcl92YWx1ZQBTcGFuIGNhbGxiYWNrIGVycm9yIGluIG9uX2NodW5rX2V4dGVuc2lvbl92YWx1ZQBJbnZhbGlkIGNoYXJhY3RlciBpbiBjaHVuayBleHRlbnNpb25zIHZhbHVlAE1pc3NpbmcgZXhwZWN0ZWQgTEYgYWZ0ZXIgaGVhZGVyIHZhbHVlAEludmFsaWQgYFRyYW5zZmVyLUVuY29kaW5nYCBoZWFkZXIgdmFsdWUASW52YWxpZCBjaGFyYWN0ZXIgaW4gY2h1bmsgZXh0ZW5zaW9ucyBxdW90ZSB2YWx1ZQBJbnZhbGlkIGNoYXJhY3RlciBpbiBjaHVuayBleHRlbnNpb25zIHF1b3RlZCB2YWx1ZQBQYXVzZWQgYnkgb25faGVhZGVyc19jb21wbGV0ZQBJbnZhbGlkIEVPRiBzdGF0ZQBvbl9yZXNldCBwYXVzZQBvbl9jaHVua19oZWFkZXIgcGF1c2UAb25fbWVzc2FnZV9iZWdpbiBwYXVzZQBvbl9jaHVua19leHRlbnNpb25fdmFsdWUgcGF1c2UAb25fc3RhdHVzX2NvbXBsZXRlIHBhdXNlAG9uX3ZlcnNpb25fY29tcGxldGUgcGF1c2UAb25fdXJsX2NvbXBsZXRlIHBhdXNlAG9uX2NodW5rX2NvbXBsZXRlIHBhdXNlAG9uX2hlYWRlcl92YWx1ZV9jb21wbGV0ZSBwYXVzZQBvbl9tZXNzYWdlX2NvbXBsZXRlIHBhdXNlAG9uX21ldGhvZF9jb21wbGV0ZSBwYXVzZQBvbl9oZWFkZXJfZmllbGRfY29tcGxldGUgcGF1c2UAb25fY2h1bmtfZXh0ZW5zaW9uX25hbWUgcGF1c2UAVW5leHBlY3RlZCBzcGFjZSBhZnRlciBzdGFydCBsaW5lAFNwYW4gY2FsbGJhY2sgZXJyb3IgaW4gb25fY2h1bmtfZXh0ZW5zaW9uX25hbWUASW52YWxpZCBjaGFyYWN0ZXIgaW4gY2h1bmsgZXh0ZW5zaW9ucyBuYW1lAFBhdXNlIG9uIENPTk5FQ1QvVXBncmFkZQBQYXVzZSBvbiBQUkkvVXBncmFkZQBFeHBlY3RlZCBIVFRQLzIgQ29ubmVjdGlvbiBQcmVmYWNlAFNwYW4gY2FsbGJhY2sgZXJyb3IgaW4gb25fbWV0aG9kAEV4cGVjdGVkIHNwYWNlIGFmdGVyIG1ldGhvZABTcGFuIGNhbGxiYWNrIGVycm9yIGluIG9uX2hlYWRlcl9maWVsZABQYXVzZWQASW52YWxpZCB3b3JkIGVuY291bnRlcmVkAEludmFsaWQgbWV0aG9kIGVuY291bnRlcmVkAFVuZXhwZWN0ZWQgY2hhciBpbiB1cmwgc2NoZW1hAFJlcXVlc3QgaGFzIGludmFsaWQgYFRyYW5zZmVyLUVuY29kaW5nYABTV0lUQ0hfUFJPWFkAVVNFX1BST1hZAE1LQUNUSVZJVFkAVU5QUk9DRVNTQUJMRV9FTlRJVFkAQ09QWQBNT1ZFRF9QRVJNQU5FTlRMWQBUT09fRUFSTFkATk9USUZZAEZBSUxFRF9ERVBFTkRFTkNZAEJBRF9HQVRFV0FZAFBMQVkAUFVUAENIRUNLT1VUAEdBVEVXQVlfVElNRU9VVABSRVFVRVNUX1RJTUVPVVQATkVUV09SS19DT05ORUNUX1RJTUVPVVQAQ09OTkVDVElPTl9USU1FT1VUAExPR0lOX1RJTUVPVVQATkVUV09SS19SRUFEX1RJTUVPVVQAUE9TVABNSVNESVJFQ1RFRF9SRVFVRVNUAENMSUVOVF9DTE9TRURfUkVRVUVTVABDTElFTlRfQ0xPU0VEX0xPQURfQkFMQU5DRURfUkVRVUVTVABCQURfUkVRVUVTVABIVFRQX1JFUVVFU1RfU0VOVF9UT19IVFRQU19QT1JUAFJFUE9SVABJTV9BX1RFQVBPVABSRVNFVF9DT05URU5UAE5PX0NPTlRFTlQAUEFSVElBTF9DT05URU5UAEhQRV9JTlZBTElEX0NPTlNUQU5UAEhQRV9DQl9SRVNFVABHRVQASFBFX1NUUklDVABDT05GTElDVABURU1QT1JBUllfUkVESVJFQ1QAUEVSTUFORU5UX1JFRElSRUNUAENPTk5FQ1QATVVMVElfU1RBVFVTAEhQRV9JTlZBTElEX1NUQVRVUwBUT09fTUFOWV9SRVFVRVNUUwBFQVJMWV9ISU5UUwBVTkFWQUlMQUJMRV9GT1JfTEVHQUxfUkVBU09OUwBPUFRJT05TAFNXSVRDSElOR19QUk9UT0NPTFMAVkFSSUFOVF9BTFNPX05FR09USUFURVMATVVMVElQTEVfQ0hPSUNFUwBJTlRFUk5BTF9TRVJWRVJfRVJST1IAV0VCX1NFUlZFUl9VTktOT1dOX0VSUk9SAFJBSUxHVU5fRVJST1IASURFTlRJVFlfUFJPVklERVJfQVVUSEVOVElDQVRJT05fRVJST1IAU1NMX0NFUlRJRklDQVRFX0VSUk9SAElOVkFMSURfWF9GT1JXQVJERURfRk9SAFNFVF9QQVJBTUVURVIAR0VUX1BBUkFNRVRFUgBIUEVfVVNFUgBTRUVfT1RIRVIASFBFX0NCX0NIVU5LX0hFQURFUgBNS0NBTEVOREFSAFNFVFVQAFdFQl9TRVJWRVJfSVNfRE9XTgBURUFSRE9XTgBIUEVfQ0xPU0VEX0NPTk5FQ1RJT04ASEVVUklTVElDX0VYUElSQVRJT04ARElTQ09OTkVDVEVEX09QRVJBVElPTgBOT05fQVVUSE9SSVRBVElWRV9JTkZPUk1BVElPTgBIUEVfSU5WQUxJRF9WRVJTSU9OAEhQRV9DQl9NRVNTQUdFX0JFR0lOAFNJVEVfSVNfRlJPWkVOAEhQRV9JTlZBTElEX0hFQURFUl9UT0tFTgBJTlZBTElEX1RPS0VOAEZPUkJJRERFTgBFTkhBTkNFX1lPVVJfQ0FMTQBIUEVfSU5WQUxJRF9VUkwAQkxPQ0tFRF9CWV9QQVJFTlRBTF9DT05UUk9MAE1LQ09MAEFDTABIUEVfSU5URVJOQUwAUkVRVUVTVF9IRUFERVJfRklFTERTX1RPT19MQVJHRV9VTk9GRklDSUFMAEhQRV9PSwBVTkxJTksAVU5MT0NLAFBSSQBSRVRSWV9XSVRIAEhQRV9JTlZBTElEX0NPTlRFTlRfTEVOR1RIAEhQRV9VTkVYUEVDVEVEX0NPTlRFTlRfTEVOR1RIAEZMVVNIAFBST1BQQVRDSABNLVNFQVJDSABVUklfVE9PX0xPTkcAUFJPQ0VTU0lORwBNSVNDRUxMQU5FT1VTX1BFUlNJU1RFTlRfV0FSTklORwBNSVNDRUxMQU5FT1VTX1dBUk5JTkcASFBFX0lOVkFMSURfVFJBTlNGRVJfRU5DT0RJTkcARXhwZWN0ZWQgQ1JMRgBIUEVfSU5WQUxJRF9DSFVOS19TSVpFAE1PVkUAQ09OVElOVUUASFBFX0NCX1NUQVRVU19DT01QTEVURQBIUEVfQ0JfSEVBREVSU19DT01QTEVURQBIUEVfQ0JfVkVSU0lPTl9DT01QTEVURQBIUEVfQ0JfVVJMX0NPTVBMRVRFAEhQRV9DQl9DSFVOS19DT01QTEVURQBIUEVfQ0JfSEVBREVSX1ZBTFVFX0NPTVBMRVRFAEhQRV9DQl9DSFVOS19FWFRFTlNJT05fVkFMVUVfQ09NUExFVEUASFBFX0NCX0NIVU5LX0VYVEVOU0lPTl9OQU1FX0NPTVBMRVRFAEhQRV9DQl9NRVNTQUdFX0NPTVBMRVRFAEhQRV9DQl9NRVRIT0RfQ09NUExFVEUASFBFX0NCX0hFQURFUl9GSUVMRF9DT01QTEVURQBERUxFVEUASFBFX0lOVkFMSURfRU9GX1NUQVRFAElOVkFMSURfU1NMX0NFUlRJRklDQVRFAFBBVVNFAE5PX1JFU1BPTlNFAFVOU1VQUE9SVEVEX01FRElBX1RZUEUAR09ORQBOT1RfQUNDRVBUQUJMRQBTRVJWSUNFX1VOQVZBSUxBQkxFAFJBTkdFX05PVF9TQVRJU0ZJQUJMRQBPUklHSU5fSVNfVU5SRUFDSEFCTEUAUkVTUE9OU0VfSVNfU1RBTEUAUFVSR0UATUVSR0UAUkVRVUVTVF9IRUFERVJfRklFTERTX1RPT19MQVJHRQBSRVFVRVNUX0hFQURFUl9UT09fTEFSR0UAUEFZTE9BRF9UT09fTEFSR0UASU5TVUZGSUNJRU5UX1NUT1JBR0UASFBFX1BBVVNFRF9VUEdSQURFAEhQRV9QQVVTRURfSDJfVVBHUkFERQBTT1VSQ0UAQU5OT1VOQ0UAVFJBQ0UASFBFX1VORVhQRUNURURfU1BBQ0UAREVTQ1JJQkUAVU5TVUJTQ1JJQkUAUkVDT1JEAEhQRV9JTlZBTElEX01FVEhPRABOT1RfRk9VTkQAUFJPUEZJTkQAVU5CSU5EAFJFQklORABVTkFVVEhPUklaRUQATUVUSE9EX05PVF9BTExPV0VEAEhUVFBfVkVSU0lPTl9OT1RfU1VQUE9SVEVEAEFMUkVBRFlfUkVQT1JURUQAQUNDRVBURUQATk9UX0lNUExFTUVOVEVEAExPT1BfREVURUNURUQASFBFX0NSX0VYUEVDVEVEAEhQRV9MRl9FWFBFQ1RFRABDUkVBVEVEAElNX1VTRUQASFBFX1BBVVNFRABUSU1FT1VUX09DQ1VSRUQAUEFZTUVOVF9SRVFVSVJFRABQUkVDT05ESVRJT05fUkVRVUlSRUQAUFJPWFlfQVVUSEVOVElDQVRJT05fUkVRVUlSRUQATkVUV09SS19BVVRIRU5USUNBVElPTl9SRVFVSVJFRABMRU5HVEhfUkVRVUlSRUQAU1NMX0NFUlRJRklDQVRFX1JFUVVJUkVEAFVQR1JBREVfUkVRVUlSRUQAUEFHRV9FWFBJUkVEAFBSRUNPTkRJVElPTl9GQUlMRUQARVhQRUNUQVRJT05fRkFJTEVEAFJFVkFMSURBVElPTl9GQUlMRUQAU1NMX0hBTkRTSEFLRV9GQUlMRUQATE9DS0VEAFRSQU5TRk9STUFUSU9OX0FQUExJRUQATk9UX01PRElGSUVEAE5PVF9FWFRFTkRFRABCQU5EV0lEVEhfTElNSVRfRVhDRUVERUQAU0lURV9JU19PVkVSTE9BREVEAEhFQUQARXhwZWN0ZWQgSFRUUC8AAF4TAAAmEwAAMBAAAPAXAACdEwAAFRIAADkXAADwEgAAChAAAHUSAACtEgAAghMAAE8UAAB/EAAAoBUAACMUAACJEgAAixQAAE0VAADUEQAAzxQAABAYAADJFgAA3BYAAMERAADgFwAAuxQAAHQUAAB8FQAA5RQAAAgXAAAfEAAAZRUAAKMUAAAoFQAAAhUAAJkVAAAsEAAAixkAAE8PAADUDgAAahAAAM4QAAACFwAAiQ4AAG4TAAAcEwAAZhQAAFYXAADBEwAAzRMAAGwTAABoFwAAZhcAAF8XAAAiEwAAzg8AAGkOAADYDgAAYxYAAMsTAACqDgAAKBcAACYXAADFEwAAXRYAAOgRAABnEwAAZRMAAPIWAABzEwAAHRcAAPkWAADzEQAAzw4AAM4VAAAMEgAAsxEAAKURAABhEAAAMhcAALsTAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQECAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAACAwICAgICAAACAgACAgACAgICAgICAgICAAQAAAAAAAICAgICAgICAgICAgICAgICAgICAgICAgICAAAAAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAAgACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAgACAgICAgAAAgIAAgIAAgICAgICAgICAgADAAQAAAACAgICAgICAgICAgICAgICAgICAgICAgICAgAAAAICAgICAgICAgICAgICAgICAgICAgICAgICAgICAAIAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGxvc2VlZXAtYWxpdmUAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQECAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAWNodW5rZWQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAAEBAQEBAAABAQABAQABAQEBAQEBAQEBAAAAAAAAAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAAAAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZWN0aW9uZW50LWxlbmd0aG9ucm94eS1jb25uZWN0aW9uAAAAAAAAAAAAAAAAAAAAcmFuc2Zlci1lbmNvZGluZ3BncmFkZQ0KDQoNClNNDQoNClRUUC9DRS9UU1AvAAAAAAAAAAAAAAAAAQIAAQMAAAAAAAAAAAAAAAAAAAAAAAAEAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQAAAAAAAAAAAAECAAEDAAAAAAAAAAAAAAAAAAAAAAAABAEBBQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAAAAAAAAAAABAAABAAAAAAAAAAAAAAAAAAAAAAAAAAABAQABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAAAAAAAAAAAAAAEAAAIAAAAAAAAAAAAAAAAAAAAAAAADBAAABAQEBAQEBAQEBAQFBAQEBAQEBAQEBAQEAAQABgcEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQABAAEAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMAAAAAAAADAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAQAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAACAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAAAAAAAAAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATk9VTkNFRUNLT1VUTkVDVEVURUNSSUJFTFVTSEVURUFEU0VBUkNIUkdFQ1RJVklUWUxFTkRBUlZFT1RJRllQVElPTlNDSFNFQVlTVEFUQ0hHRU9SRElSRUNUT1JUUkNIUEFSQU1FVEVSVVJDRUJTQ1JJQkVBUkRPV05BQ0VJTkROS0NLVUJTQ1JJQkVIVFRQL0FEVFAv";
  }
});

// node_modules/undici/lib/llhttp/llhttp_simd.wasm.js
var require_llhttp_simd_wasm = __commonJS({
  "node_modules/undici/lib/llhttp/llhttp_simd.wasm.js"(exports, module2) {
    init_shims();
    module2.exports = "AGFzbQEAAAABMAhgAX8Bf2ADf39/AX9gBH9/f38Bf2AAAGADf39/AGABfwBgAn9/AGAGf39/f39/AALLAQgDZW52GHdhc21fb25faGVhZGVyc19jb21wbGV0ZQACA2VudhV3YXNtX29uX21lc3NhZ2VfYmVnaW4AAANlbnYLd2FzbV9vbl91cmwAAQNlbnYOd2FzbV9vbl9zdGF0dXMAAQNlbnYUd2FzbV9vbl9oZWFkZXJfZmllbGQAAQNlbnYUd2FzbV9vbl9oZWFkZXJfdmFsdWUAAQNlbnYMd2FzbV9vbl9ib2R5AAEDZW52GHdhc21fb25fbWVzc2FnZV9jb21wbGV0ZQAAA0ZFAwMEAAAFAAAAAAAABQEFAAUFBQAABgAAAAAGBgYGAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQABAAABAQcAAAUFAAMBBAUBcAESEgUDAQACBggBfwFBgNQECwfRBSIGbWVtb3J5AgALX2luaXRpYWxpemUACRlfX2luZGlyZWN0X2Z1bmN0aW9uX3RhYmxlAQALbGxodHRwX2luaXQAChhsbGh0dHBfc2hvdWxkX2tlZXBfYWxpdmUAQQxsbGh0dHBfYWxsb2MADAZtYWxsb2MARgtsbGh0dHBfZnJlZQANBGZyZWUASA9sbGh0dHBfZ2V0X3R5cGUADhVsbGh0dHBfZ2V0X2h0dHBfbWFqb3IADxVsbGh0dHBfZ2V0X2h0dHBfbWlub3IAEBFsbGh0dHBfZ2V0X21ldGhvZAARFmxsaHR0cF9nZXRfc3RhdHVzX2NvZGUAEhJsbGh0dHBfZ2V0X3VwZ3JhZGUAEwxsbGh0dHBfcmVzZXQAFA5sbGh0dHBfZXhlY3V0ZQAVFGxsaHR0cF9zZXR0aW5nc19pbml0ABYNbGxodHRwX2ZpbmlzaAAXDGxsaHR0cF9wYXVzZQAYDWxsaHR0cF9yZXN1bWUAGRtsbGh0dHBfcmVzdW1lX2FmdGVyX3VwZ3JhZGUAGhBsbGh0dHBfZ2V0X2Vycm5vABsXbGxodHRwX2dldF9lcnJvcl9yZWFzb24AHBdsbGh0dHBfc2V0X2Vycm9yX3JlYXNvbgAdFGxsaHR0cF9nZXRfZXJyb3JfcG9zAB4RbGxodHRwX2Vycm5vX25hbWUAHxJsbGh0dHBfbWV0aG9kX25hbWUAIBJsbGh0dHBfc3RhdHVzX25hbWUAIRpsbGh0dHBfc2V0X2xlbmllbnRfaGVhZGVycwAiIWxsaHR0cF9zZXRfbGVuaWVudF9jaHVua2VkX2xlbmd0aAAjHWxsaHR0cF9zZXRfbGVuaWVudF9rZWVwX2FsaXZlACQkbGxodHRwX3NldF9sZW5pZW50X3RyYW5zZmVyX2VuY29kaW5nACUYbGxodHRwX21lc3NhZ2VfbmVlZHNfZW9mAD8JFwEAQQELEQECAwQFCwYHNTk3MS8tJyspCsnkAkUCAAsIABCIgICAAAsZACAAEMKAgIAAGiAAIAI2AjggACABOgAoCxwAIAAgAC8BMiAALQAuIAAQwYCAgAAQgICAgAALKgEBf0HAABDGgICAACIBEMKAgIAAGiABQYCIgIAANgI4IAEgADoAKCABCwoAIAAQyICAgAALBwAgAC0AKAsHACAALQAqCwcAIAAtACsLBwAgAC0AKQsHACAALwEyCwcAIAAtAC4LRQEEfyAAKAIYIQEgAC0ALSECIAAtACghAyAAKAI4IQQgABDCgICAABogACAENgI4IAAgAzoAKCAAIAI6AC0gACABNgIYCxEAIAAgASABIAJqEMOAgIAACxAAIABBAEHcABDMgICAABoLZwEBf0EAIQECQCAAKAIMDQACQAJAAkACQCAALQAvDgMBAAMCCyAAKAI4IgFFDQAgASgCLCIBRQ0AIAAgARGAgICAAAAiAQ0DC0EADwsQy4CAgAAACyAAQcOWgIAANgIQQQ4hAQsgAQseAAJAIAAoAgwNACAAQdGbgIAANgIQIABBFTYCDAsLFgACQCAAKAIMQRVHDQAgAEEANgIMCwsWAAJAIAAoAgxBFkcNACAAQQA2AgwLCwcAIAAoAgwLBwAgACgCEAsJACAAIAE2AhALBwAgACgCFAsiAAJAIABBJEkNABDLgICAAAALIABBAnRBoLOAgABqKAIACyIAAkAgAEEuSQ0AEMuAgIAAAAsgAEECdEGwtICAAGooAgAL7gsBAX9B66iAgAAhAQJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAIABBnH9qDvQDY2IAAWFhYWFhYQIDBAVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhBgcICQoLDA0OD2FhYWFhEGFhYWFhYWFhYWFhEWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYRITFBUWFxgZGhthYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhHB0eHyAhIiMkJSYnKCkqKywtLi8wMTIzNDU2YTc4OTphYWFhYWFhYTthYWE8YWFhYT0+P2FhYWFhYWFhQGFhQWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYUJDREVGR0hJSktMTU5PUFFSU2FhYWFhYWFhVFVWV1hZWlthXF1hYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFeYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhX2BhC0Hhp4CAAA8LQaShgIAADwtBy6yAgAAPC0H+sYCAAA8LQcCkgIAADwtBq6SAgAAPC0GNqICAAA8LQeKmgIAADwtBgLCAgAAPC0G5r4CAAA8LQdekgIAADwtB75+AgAAPC0Hhn4CAAA8LQfqfgIAADwtB8qCAgAAPC0Gor4CAAA8LQa6ygIAADwtBiLCAgAAPC0Hsp4CAAA8LQYKigIAADwtBjp2AgAAPC0HQroCAAA8LQcqjgIAADwtBxbKAgAAPC0HfnICAAA8LQdKcgIAADwtBxKCAgAAPC0HXoICAAA8LQaKfgIAADwtB7a6AgAAPC0GrsICAAA8LQdSlgIAADwtBzK6AgAAPC0H6roCAAA8LQfyrgIAADwtB0rCAgAAPC0HxnYCAAA8LQbuggIAADwtB96uAgAAPC0GQsYCAAA8LQdexgIAADwtBoq2AgAAPC0HUp4CAAA8LQeCrgIAADwtBn6yAgAAPC0HrsYCAAA8LQdWfgIAADwtByrGAgAAPC0HepYCAAA8LQdSegIAADwtB9JyAgAAPC0GnsoCAAA8LQbGdgIAADwtBoJ2AgAAPC0G5sYCAAA8LQbywgIAADwtBkqGAgAAPC0GzpoCAAA8LQemsgIAADwtBrJ6AgAAPC0HUq4CAAA8LQfemgIAADwtBgKaAgAAPC0GwoYCAAA8LQf6egIAADwtBjaOAgAAPC0GJrYCAAA8LQfeigIAADwtBoLGAgAAPC0Gun4CAAA8LQcalgIAADwtB6J6AgAAPC0GTooCAAA8LQcKvgIAADwtBw52AgAAPC0GLrICAAA8LQeGdgIAADwtBja+AgAAPC0HqoYCAAA8LQbStgIAADwtB0q+AgAAPC0HfsoCAAA8LQdKygIAADwtB8LCAgAAPC0GpooCAAA8LQfmjgIAADwtBmZ6AgAAPC0G1rICAAA8LQZuwgIAADwtBkrKAgAAPC0G2q4CAAA8LQcKigIAADwtB+LKAgAAPC0GepYCAAA8LQdCigIAADwtBup6AgAAPC0GBnoCAAA8LEMuAgIAAAAtB1qGAgAAhAQsgAQsWACAAIAAtAC1B/gFxIAFBAEdyOgAtCxkAIAAgAC0ALUH9AXEgAUEAR0EBdHI6AC0LGQAgACAALQAtQfsBcSABQQBHQQJ0cjoALQsZACAAIAAtAC1B9wFxIAFBAEdBA3RyOgAtCy4BAn9BACEDAkAgACgCOCIERQ0AIAQoAgAiBEUNACAAIAQRgICAgAAAIQMLIAMLSQECf0EAIQMCQCAAKAI4IgRFDQAgBCgCBCIERQ0AIAAgASACIAFrIAQRgYCAgAAAIgNBf0cNACAAQcaRgIAANgIQQRghAwsgAwsuAQJ/QQAhAwJAIAAoAjgiBEUNACAEKAIwIgRFDQAgACAEEYCAgIAAACEDCyADC0kBAn9BACEDAkAgACgCOCIERQ0AIAQoAggiBEUNACAAIAEgAiABayAEEYGAgIAAACIDQX9HDQAgAEH2ioCAADYCEEEYIQMLIAMLLgECf0EAIQMCQCAAKAI4IgRFDQAgBCgCNCIERQ0AIAAgBBGAgICAAAAhAwsgAwtJAQJ/QQAhAwJAIAAoAjgiBEUNACAEKAIMIgRFDQAgACABIAIgAWsgBBGBgICAAAAiA0F/Rw0AIABB7ZqAgAA2AhBBGCEDCyADCy4BAn9BACEDAkAgACgCOCIERQ0AIAQoAjgiBEUNACAAIAQRgICAgAAAIQMLIAMLSQECf0EAIQMCQCAAKAI4IgRFDQAgBCgCECIERQ0AIAAgASACIAFrIAQRgYCAgAAAIgNBf0cNACAAQZWQgIAANgIQQRghAwsgAwsuAQJ/QQAhAwJAIAAoAjgiBEUNACAEKAI8IgRFDQAgACAEEYCAgIAAACEDCyADC0kBAn9BACEDAkAgACgCOCIERQ0AIAQoAhQiBEUNACAAIAEgAiABayAEEYGAgIAAACIDQX9HDQAgAEGqm4CAADYCEEEYIQMLIAMLLgECf0EAIQMCQCAAKAI4IgRFDQAgBCgCQCIERQ0AIAAgBBGAgICAAAAhAwsgAwtJAQJ/QQAhAwJAIAAoAjgiBEUNACAEKAIYIgRFDQAgACABIAIgAWsgBBGBgICAAAAiA0F/Rw0AIABB7ZOAgAA2AhBBGCEDCyADCy4BAn9BACEDAkAgACgCOCIERQ0AIAQoAkQiBEUNACAAIAQRgICAgAAAIQMLIAMLLgECf0EAIQMCQCAAKAI4IgRFDQAgBCgCJCIERQ0AIAAgBBGAgICAAAAhAwsgAwsuAQJ/QQAhAwJAIAAoAjgiBEUNACAEKAIsIgRFDQAgACAEEYCAgIAAACEDCyADC0kBAn9BACEDAkAgACgCOCIERQ0AIAQoAigiBEUNACAAIAEgAiABayAEEYGAgIAAACIDQX9HDQAgAEH2iICAADYCEEEYIQMLIAMLLgECf0EAIQMCQCAAKAI4IgRFDQAgBCgCUCIERQ0AIAAgBBGAgICAAAAhAwsgAwtJAQJ/QQAhAwJAIAAoAjgiBEUNACAEKAIcIgRFDQAgACABIAIgAWsgBBGBgICAAAAiA0F/Rw0AIABBwpmAgAA2AhBBGCEDCyADCy4BAn9BACEDAkAgACgCOCIERQ0AIAQoAkgiBEUNACAAIAQRgICAgAAAIQMLIAMLSQECf0EAIQMCQCAAKAI4IgRFDQAgBCgCICIERQ0AIAAgASACIAFrIAQRgYCAgAAAIgNBf0cNACAAQZSUgIAANgIQQRghAwsgAwsuAQJ/QQAhAwJAIAAoAjgiBEUNACAEKAJMIgRFDQAgACAEEYCAgIAAACEDCyADCy4BAn9BACEDAkAgACgCOCIERQ0AIAQoAlQiBEUNACAAIAQRgICAgAAAIQMLIAMLLgECf0EAIQMCQCAAKAI4IgRFDQAgBCgCWCIERQ0AIAAgBBGAgICAAAAhAwsgAwtFAQF/AkACQCAALwEwQRRxQRRHDQBBASEDIAAtAChBAUYNASAALwEyQeUARiEDDAELIAAtAClBBUYhAwsgACADOgAuQQAL8gEBA39BASEDAkAgAC8BMCIEQQhxDQAgACkDIEIAUiEDCwJAAkAgAC0ALkUNAEEBIQUgAC0AKUEFRg0BQQEhBSAEQcAAcUUgA3FBAUcNAQtBACEFIARBwABxDQBBAiEFIARBCHENAAJAIARBgARxRQ0AAkAgAC0AKEEBRw0AIAAtAC1BCnENAEEFDwtBBA8LAkAgBEEgcQ0AAkAgAC0AKEEBRg0AIAAvATIiAEGcf2pB5ABJDQAgAEHMAUYNACAAQbACRg0AQQQhBSAEQYgEcUGABEYNAiAEQShxRQ0CC0EADwtBAEEDIAApAyBQGyEFCyAFC10BAn9BACEBAkAgAC0AKEEBRg0AIAAvATIiAkGcf2pB5ABJDQAgAkHMAUYNACACQbACRg0AIAAvATAiAEHAAHENAEEBIQEgAEGIBHFBgARGDQAgAEEocUUhAQsgAQuiAQEDfwJAAkACQCAALQAqRQ0AIAAtACtFDQBBACEDIAAvATAiBEECcUUNAQwCC0EAIQMgAC8BMCIEQQFxRQ0BC0EBIQMgAC0AKEEBRg0AIAAvATIiBUGcf2pB5ABJDQAgBUHMAUYNACAFQbACRg0AIARBwABxDQBBACEDIARBiARxQYAERg0AIARBKHFBAEchAwsgAEEAOwEwIABBADoALyADC5QBAQJ/AkACQAJAIAAtACpFDQAgAC0AK0UNAEEAIQEgAC8BMCICQQJxRQ0BDAILQQAhASAALwEwIgJBAXFFDQELQQEhASAALQAoQQFGDQAgAC8BMiIAQZx/akHkAEkNACAAQcwBRg0AIABBsAJGDQAgAkHAAHENAEEAIQEgAkGIBHFBgARGDQAgAkEocUEARyEBCyABC0kBAXsgAEEQav0MAAAAAAAAAAAAAAAAAAAAACIB/QsDACAAIAH9CwMAIABBMGogAf0LAwAgAEEgaiAB/QsDACAAQd0BNgIcQQALewEBfwJAIAAoAgwiAw0AAkAgACgCBEUNACAAIAE2AgQLAkAgACABIAIQxICAgAAiAw0AIAAoAgwPCyAAIAM2AhxBACEDIAAoAgQiAUUNACAAIAEgAiAAKAIIEYGAgIAAACIBRQ0AIAAgAjYCFCAAIAE2AgwgASEDCyADC9z3AQMofwN+BX8jgICAgABBEGsiAySAgICAACABIQQgASEFIAEhBiABIQcgASEIIAEhCSABIQogASELIAEhDCABIQ0gASEOIAEhDyABIRAgASERIAEhEiABIRMgASEUIAEhFSABIRYgASEXIAEhGCABIRkgASEaIAEhGyABIRwgASEdIAEhHiABIR8gASEgIAEhISABISIgASEjIAEhJCABISUgASEmIAEhJyABISggASEpAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAIAAoAhwiKkF/ag7dAdoBAdkBAgMEBQYHCAkKCwwNDtgBDxDXARES1gETFBUWFxgZGhvgAd8BHB0e1QEfICEiIyQl1AEmJygpKiss0wHSAS0u0QHQAS8wMTIzNDU2Nzg5Ojs8PT4/QEFCQ0RFRtsBR0hJSs8BzgFLzQFMzAFNTk9QUVJTVFVW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AkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJA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AAAAAAAAAAkKCwwNDgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADxAREhMUAAtBHiEqDMQDC0ICISsM5QELQgMhKwzkAQtCBCErDOMBC0IFISsM4gELQgYhKwzhAQtCByErDOABC0IIISsM3wELQgkhKwzeAQtCCiErDN0BC0ILISsM3AELQgwhKwzbAQtCDSErDNoBC0IOISsM2QELQg8hKwzYAQtCCiErDNcBC0ILISsM1gELQgwhKwzVAQtCDSErDNQBC0IOISsM0wELQg8hKwzSAQtCACErAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQCAqLQAAQVBqDjflAeQBAAECAwQFBgfmAeYB5gHmAeYB5gHmAQgJCgsMDeYB5gHmAeYB5gHmAeYB5gHmAeYB5gHmAeYB5gHmAeYB5gHmAeYB5gHmAeYB5gHmAeYB5gEODxAREhPmAQtCAiErDOQBC0IDISsM4wELQgQhKwziAQtCBSErDOEBC0IGISsM4AELQgchKwzfAQtCCCErDN4BC0IJISsM3QELQgohKwzcAQtCCyErDNsBC0IMISsM2gELQg0hKwzZAQtCDiErDNgBC0IPISsM1wELQgohKwzWAQtCCyErDNUBC0IMISsM1AELQg0hKwzTAQtCDiErDNIBC0IPISsM0QELIABCACAAKQMgIisgAiABIiprrSIsfSItIC0gK1YbNwMgICsgLFYiLkUN0gFBHyEqDMcDCwJAIAEiASACRg0AIABBiYCAgAA2AgggACABNgIEIAEhAUEkISoMrgMLQSAhKgzGAwsgACABIiogAhC+gICAAEF/ag4FtgEAywIB0QHSAQtBESEqDKsDCyAAQQE6AC8gKiEBDMIDCyABIgEgAkcN0gFBJCEqDMIDCyABIicgAkcNHkHGACEqDMEDCyAAIAEiASACELKAgIAAIioN1AEgASEBDLUBCyABIiogAkcNJkHQACEqDL8DCwJAIAEiASACRw0AQSghKgy/AwsgAEEANgIEIABBjICAgAA2AgggACABIAEQsYCAgAAiKg3TASABIQEM2AELAkAgASIqIAJHDQBBKSEqDL4DCyAqLQAAIgFBIEYNFCABQQlHDdMBICpBAWohAQwVCwJAIAEiASACRg0AIAFBAWohAQwXC0EqISoMvAMLAkAg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DQALIAAgKjYCAEGDASEqDOgCC0EAISogAEEANgIAIC4gMmtBA2ohAQzKAQsCQCABIiogAkcNAEGEASEqDOcCCyACICprIAAoAgAiLmohMiAqIQQgLiEBAkADQCAELQAAIAFBg8+AgABqLQAARw3MASABQQRGDQEgAUEBaiEBIARBAWoiBCACRw0ACyAAIDI2AgBBhAEhKgznAgsgAEEANgIAICogLmtBBWohAUEjISoMyQELAkAgASIEIAJHDQBBhQEhKgzmAgsCQAJAIAQtAABBtH9qDggAzAHMAcwBzAHMAcwBAcwBCyAEQQFqIQFB7wAhKgzNAgsgBEEBaiEBQfAAISoMzAILAkAgASIEIAJHDQBBhgEhKgzlAgsgBC0AAEHFAEcNyQEgBEEBaiEBDIoCCwJAIAEiKiACRw0AQYcBISoM5AILIAIgKmsgACgCACIuaiEyICohBCAuIQECQANAIAQtAAAgAUGIz4CAAGotAABHDckBIAFBA0YNASABQQFqIQEgBEEBaiIEIAJHDQALIAAgMjYCAEGHASEqDOQCCyAAQQA2AgAgKiAua0EEaiEBQS0hKgzGAQsCQCABIiogAkcNAEGIASEqDOMCCyACICprIAAoAgAiLmohMiAqIQQgLiEBAkADQCAELQAAIAFB0M+AgABqLQAARw3IASABQQhGDQEgAUEBaiEBIARBAWoiBCACRw0ACyAAIDI2AgBBiAEhKgzjAgsgAEEANgIAICogLmtBCWohAUEpISoMxQELAkAgASIBIAJHDQBBiQEhKgziAgtBASEqIAEtAABB3wBHDcQBIAFBAWohAQyIAgsCQCABIiogAkcNAEGKASEqDOECCyACICprIAAoAgAiLmohMiAqIQQgLiEBA0AgBC0AACABQYzPgIAAai0AAEcNxQEgAUEBRg23AiABQQFqIQEgBEEBaiIEIAJHDQALIAAgMjYCAEGKASEqDOACCwJAIAEiKiACRw0AQYsBISoM4AILIAIgKmsgACgCACIuaiEyICohBCAuIQECQANAIAQtAAAgAUGOz4CAAGotAABHDcUBIAFBAkYNASABQQFqIQEgBEEBaiIEIAJHDQALIAAgMjYCAEGLASEqDOACCyAAQQA2AgAgKiAua0EDaiEBQQIhKgzCAQsCQCABIiogAkcNAEGMASEqDN8CCyACICprIAAoAgAiLmohMiAqIQQgLiEBAkADQCAELQAAIAFB8M+AgABqLQAARw3EASABQQFGDQEgAUEBaiEBIARBAWoiBCACRw0ACyAAIDI2AgBBjAEhKgzfAgsgAEEANgIAICogLmtBAmohAUEfISoMwQELAkAgASIqIAJHDQBBjQEhKgzeAgsgAiAqayAAKAIAIi5qITIgKiEEIC4hAQJAA0AgBC0AACABQfLPgIAAai0AAEcNwwEgAUEBRg0BIAFBAWohASAEQQFqIgQgAkcNAAsgACAyNgIAQY0BISoM3gILIABBADYCACAqIC5rQQJqIQFBCSEqDMABCwJAIAEiBCACRw0AQY4BISoM3QILAkACQCAELQAAQbd/ag4HAMMBwwHDAcMBwwEBwwELIARBAWohAUH4ACEqDMQCCyAEQQFqIQFB+QAhKgzDAgsCQCABIiogAkcNAEGPASEqDNwCCyACICprIAAoAgAiLmohMiAqIQQgLiEBAkADQCAELQAAIAFBkc+AgABqLQAARw3BASABQQVGDQEgAUEBaiEBIARBAWoiBCACRw0ACyAAIDI2AgBBjwEhKgzcAgsgAEEANgIAICogLmtBBmohAUEYISoMvgELAkAgASIqIAJHDQBBkAEhKgzbAgsgAiAqayAAKAIAIi5qITIgKiEEIC4hAQJAA0AgBC0AACABQZfPgIAAai0AAEcNwAEgAUECRg0BIAFBAWohASAEQQFqIgQgAkcNAAsgACAyNgIAQZABISoM2wILIABBADYCACAqIC5rQQNqIQFBFyEqDL0BCwJAIAEiKiACRw0AQZEBISoM2gILIAIgKmsgACgCACIuaiEyICohBCAuIQECQANAIAQtAAAgAUGaz4CAAGotAABHDb8BIAFBBkYNASABQQFqIQEgBEEBaiIEIAJHDQALIAAgMjYCAEGRASEqDNoCCyAAQQA2AgAgKiAua0EHaiEBQRUhKgy8AQsCQCABIiogAkcNAEGSASEqDNkCCyACICprIAAoAgAiLmohMiAqIQQgLiEBAkADQCAELQAAIAFBoc+AgABqLQAARw2+ASABQQVGDQEgAUEBaiEBIARBAWoiBCACRw0ACyAAIDI2AgBBkgEhKgzZAgsgAEEANgIAICogLmtBBmohAUEeISoMuwELAkAgASIEIAJHDQBBkwEhKgzYAgsgBC0AAEHMAEcN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LjYCAEGqASEqDMECCyAAQQA2AgAgEiAqa0EDaiEBQRQhKgyjAQsCQCAEIAJHDQBBqwEhKgzAAgsCQAJAAkACQCAELQAAQb5/ag4PAAECqAGoAagBqAGoAagBqAGoAagBqAGoAQOoAQsgBEEBaiEPQZMBISoMqQILIARBAWohEEGUASEqDKgCCyAEQQFqIRFBlQEhKgynAgsgBEEBaiESQZYBISoMpgILAkAgBCACRw0AQawBISoMvwILIAQtAABBxQBHDaMBIARBAWohBAznAQsCQCATIAJHDQBBrQEhKgy+AgsgAiATayAAKAIAIipqIS4gEyEEICohAQJAA0AgBC0AACABQc3PgIAAai0AAEcNowEgAUECRg0BIAFBAWohASAEQQFqIgQgAkcNAAsgACAuNgIAQa0BISoMvgILIABBADYCACATICprQQNqIQFBDiEqDKABCwJAIAQgAkcNAEGuASEqDL0CCyAELQAAQdAARw2hASAEQQFqIQFBJSEqDJ8BCwJAIBQgAkcNAEGvASEqDLwCCyACIBRrIAAoAgAiKmohLiAUIQQgKiEBAkADQCAELQAAIAFB0M+AgABqLQAARw2hASABQQhGDQEgAUEBaiEBIARBAWoiBCACRw0ACyAAIC42AgBBrwEhKgy8AgsgAEEANgIAIBQgKmtBCWohAUEqISoMngELAkAgBCACRw0AQbABISoMuwILAkACQCAELQAAQat/ag4LAKEBoQGhAaEBoQGhAaEBoQGhAQGhAQsgBEEBaiEEQZoBISoMogILIARBAWohFEGbASEqDKECCwJAIAQgAkcNAEGxASEqDLoCCwJAAkAgBC0AAEG/f2oOFACgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEBoAELIARBAWohE0GZASEqDKECCyAEQQFqIQRBnAEhKgygAgsCQCAVIAJHDQBBsgEhKgy5AgsgAiAVayAAKAIAIipqIS4gFSEEICohAQJAA0AgBC0AACABQdnPgIAAai0AAEcNngEgAUEDRg0BIAFBAWohASAEQQFqIgQgAkcNAAsgACAuNgIAQbIBISoMuQILIABBADYCACAVICprQQRqIQFBISEqDJsBCwJAIBYgAkcNAEGzASEqDLgCCyACIBZrIAAoAgAiKmohLiAWIQQgKiEBAkADQCAELQAAIAFB3c+AgABqLQAARw2dASABQQZGDQEgAUEBaiEBIARBAWoiBCACRw0ACyAAIC42AgBBswEhKgy4AgsgAEEANgIAIBYgKmtBB2ohAUEaISoMmgELAkAgBCACRw0AQbQBISoMtwILAkACQAJAIAQtAABBu39qDhEAngGeAZ4BngGeAZ4BngGeAZ4BAZ4BngGeAZ4BngECngELIARBAWohBEGdASEqDJ8CCyAEQQFqIRVBngEhKgyeAgsgBEEBaiEWQZ8BISoMnQILAkAgFyACRw0AQbUBISoMtgILIAIgF2sgACgCACIqaiEuIBchBCAqIQECQANAIAQtAAAgAUHkz4CAAGotAABHDZsBIAFBBUYNASABQQFqIQEgBEEBaiIEIAJHDQALIAAgLjYCAEG1ASEqDLYCCyAAQQA2AgAgFyAqa0EGaiEBQSghKgyYAQsCQCAYIAJHDQBBtgEhKgy1AgsgAiAYayAAKAIAIipqIS4gGCEEICohAQJAA0AgBC0AACABQerPgIAAai0AAEcNmgEgAUECRg0BIAFBAWohASAEQQFqIgQgAkcNAAsgACAuNgIAQbYBISoMtQILIABBADYCACAYICprQQNqIQFBByEqDJcBCwJAIAQgAkcNAEG3ASEqDLQCCwJAAkAgBC0AAEG7f2oODgCaAZoBmgGaAZoBmgGaAZoBmgGaAZoBmgEBmgELIARBAWohF0GhASEqDJsCCyAEQQFqIRhBogEhKgyaAgsCQCAZIAJHDQBBuAEhKgyzAgsgAiAZayAAKAIAIipqIS4gGSEEICohAQJAA0AgBC0AACABQe3PgIAAai0AAEcNmAEgAUECRg0BIAFBAWohASAEQQFqIgQgAkcNAAsgACAuNgIAQbgBISoMswILIABBADYCACAZICprQQNqIQFBEiEqDJUBCwJAIBogAkcNAEG5ASEqDLICCyACIBprIAAoAgAiKmohLiAaIQQgKiEBAkADQCAELQAAIAFB8M+AgABqLQAARw2XASABQQFGDQEgAUEBaiEBIARBAWoiBCACRw0ACyAAIC42AgBBuQEhKgyyAgsgAEEANgIAIBogKmtBAmohAUEgISoMlAELAkAgGyACRw0AQboBISoMsQILIAIgG2sgACgCACIqaiEuIBshBCAqIQECQANAIAQtAAAgAUHyz4CAAGotAABHDZYBIAFB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DM4BCyAAQQA2AhwgACABNgIUIABBoJmAgAA2AhAgAEEeNgIMQQAhKgzNAQsgAUEBaiEBCyAAQYASOwEqIAAgASACEKiAgIAAIioNASABIQELQccAISoMsQELICpBFUcNiQEgAEHRADYCHCAAIAE2AhQgAEHjl4CAADYCECAAQRU2AgxBACEqDMkBCyAAKAIEISogAEEANgIEAkAgACAqIAEQp4CAgAAiKg0AIAEhAQxiCyAAQdIANgIcIAAgATYCFCAAICo2AgxBACEqDMgBCyAAQQA2AhwgACAuNgIUIABBwaiAgAA2AhAgAEEHNgIMIABBADYCAEEAISoMxwELIAAoAgQhKiAAQQA2AgQCQCAAICogARCngICAACIqDQAgASEBDGELIABB0wA2AhwgACABNgIUIAAgKjYCDEEAISoMxgELQQAhKiAAQQA2AhwgACABNgIUIABBgJGAgAA2AhAgAEEJNgIMDMUBCyAqQRVGDYMBIABBADYCHCAAIAE2AhQgAEGUjYCAADYCECAAQSE2AgxBACEqDMQBC0EBIS9BACEyQQAhLkEBISoLIAAgKjoAKyABQQFqIQECQAJAIAAtAC1BEHENAAJAAkACQCAALQAqDgMBAAIECyAvRQ0DDAILIC4NAQwCCyAyRQ0BCyAAKAIEISogAEEANgIEAkAgACAqIAEQrYCAgAAiKg0AIAEhAQxgCyAAQdgANgIcIAAgATYCFCAAICo2AgxBACEqDMMBCyAAKAIEIQQgAEEANgIEAkAgACAEIAEQrYCAgAAiBA0AIAEhAQyyAQsgAEHZADYCHCAAIAE2AhQgACAENgIMQQAhKgzCAQsgACgCBCEEIABBADYCBAJAIAAgBCABEK2AgIAAIgQNACABIQEMsAELIABB2gA2AhwgACABNgIUIAAgBDYCDEEAISoMwQELIAAoAgQhBCAAQQA2AgQCQCAAIAQgARCtgICAACIEDQAgASEBDK4BCyAAQdwANgIcIAAgATYCFCAAIAQ2AgxBACEqDMABC0EBISoLIAAgKjoAKiABQQFqIQEMXAsgACgCBCEEIABBADYCBAJAIAAgBCABEK2AgIAAIgQNACABIQEMqgELIABB3gA2AhwgACABNgIUIAAgBDYCDEEAISoMvQELIABBADYCACAyIC9rQQRqIQECQCAALQApQSNPDQAgASEBDFwLIABBADYCHCAAIAE2AhQgAEHTiYCAADYCECAAQQg2AgxBACEqDLwBCyAAQQA2AgALQQAhKiAAQQA2AhwgACABNgIUIABBkLOAgAA2AhAgAEEINgIMDLoBCyAAQQA2AgAgMiAva0EDaiEBAkAgAC0AKUEhRw0AIAEhAQxZCyAAQQA2AhwgACABNgIUIABBm4qAgAA2AhAgAEEINgIMQQAhKgy5AQsgAEEANgIAIDIgL2tBBGohAQJAIAAtACkiKkFdakELTw0AIAEhAQxYCwJAICpBBksNAEEBICp0QcoAcUUNACABIQEMWAtBACEqIABBADYCHCAAIAE2AhQgAEH3iYCAADYCECAAQQg2AgwMuAELICpBFUYNdSAAQQA2AhwgACABNgIUIABBuY2AgAA2AhAgAEEaNgIMQQAhKgy3AQsgACgCBCEqIABBADYCBAJAIAAgKiABEKeAgIAAIioNACABIQEMVwsgAEHlADYCHCAAIAE2AhQgACAqNgIMQQAhKgy2AQsgACgCBCEqIABBADYCBAJAIAAgKiABEKeAgIAAIioNACABIQEMTwsgAEHSADYCHCAAIAE2AhQgACAqNgIMQQAhKgy1AQsgACgCBCEqIABBADYCBAJAIAAgKiABEKeAgIAAIioNACABIQEMTwsgAEHTADYCHCAAIAE2AhQgACAqNgIMQQAhKgy0AQsgACgCBCEqIABBADYCBAJAIAAgKiABEKeAgIAAIioNACABIQEMVAsgAEHlADYCHCAAIAE2AhQgACAqNgIMQQAhKgyzAQsgAEEANgIcIAAgATYCFCAAQcaKgIAANgIQIABBBzYCDEEAISoMsgELIAAoAgQhKiAAQQA2AgQCQCAAICogARCngICAACIqDQAgASEBDEsLIABB0gA2AhwgACABNgIUIAAgKjYCDEEAISoMsQELIAAoAgQhKiAAQQA2AgQCQCAAICogARCngICAACIqDQAgASEBDEsLIABB0wA2AhwgACABNgIUIAAgKjYCDEEAISoMsAELIAAoAgQhKiAAQQA2AgQCQCAAICogARCngICAACIqDQAgASEBDFALIABB5QA2AhwgACABNgIUIAAgKjYCDEEAISoMrwELIABBADYCHCAAIAE2AhQgAEHciICAADYCECAAQQc2AgxBACEqDK4BCyAqQT9HDQEgAUEBaiEB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AAAABwAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEludmFsaWQgY2hhciBpbiB1cmwgcXVlcnkAU3BhbiBjYWxsYmFjayBlcnJvciBpbiBvbl9ib2R5AENvbnRlbnQtTGVuZ3RoIG92ZXJmbG93AENodW5rIHNpemUgb3ZlcmZsb3cAUmVzcG9uc2Ugb3ZlcmZsb3cASW52YWxpZCBtZXRob2QgZm9yIEhUVFAveC54IHJlcXVlc3QASW52YWxpZCBtZXRob2QgZm9yIFJUU1AveC54IHJlcXVlc3QARXhwZWN0ZWQgU09VUkNFIG1ldGhvZCBmb3IgSUNFL3gueCByZXF1ZXN0AEludmFsaWQgY2hhciBpbiB1cmwgZnJhZ21lbnQgc3RhcnQARXhwZWN0ZWQgZG90AFNwYW4gY2FsbGJhY2sgZXJyb3IgaW4gb25fc3RhdHVzAEludmFsaWQgcmVzcG9uc2Ugc3RhdHVzAEludmFsaWQgY2hhcmFjdGVyIGluIGNodW5rIGV4dGVuc2lvbnMAVXNlciBjYWxsYmFjayBlcnJvcgBgb25fcmVzZXRgIGNhbGxiYWNrIGVycm9yAGBvbl9jaHVua19oZWFkZXJgIGNhbGxiYWNrIGVycm9yAGBvbl9tZXNzYWdlX2JlZ2luYCBjYWxsYmFjayBlcnJvcgBgb25fY2h1bmtfZXh0ZW5zaW9uX3ZhbHVlYCBjYWxsYmFjayBlcnJvcgBgb25fc3RhdHVzX2NvbXBsZXRlYCBjYWxsYmFjayBlcnJvcgBgb25fdmVyc2lvbl9jb21wbGV0ZWAgY2FsbGJhY2sgZXJyb3IAYG9uX3VybF9jb21wbGV0ZWAgY2FsbGJhY2sgZXJyb3IAYG9uX2NodW5rX2NvbXBsZXRlYCBjYWxsYmFjayBlcnJvcgBgb25faGVhZGVyX3ZhbHVlX2NvbXBsZXRlYCBjYWxsYmFjayBlcnJvcgBgb25fbWVzc2FnZV9jb21wbGV0ZWAgY2FsbGJhY2sgZXJyb3IAYG9uX21ldGhvZF9jb21wbGV0ZWAgY2FsbGJhY2sgZXJyb3IAYG9uX2hlYWRlcl9maWVsZF9jb21wbGV0ZWAgY2FsbGJhY2sgZXJyb3IAYG9uX2NodW5rX2V4dGVuc2lvbl9uYW1lYCBjYWxsYmFjayBlcnJvcgBVbmV4cGVjdGVkIGNoYXIgaW4gdXJsIHNlcnZlcgBJbnZhbGlkIGhlYWRlciB2YWx1ZSBjaGFyAEludmFsaWQgaGVhZGVyIGZpZWxkIGNoYXIAU3BhbiBjYWxsYmFjayBlcnJvciBpbiBvbl92ZXJzaW9uAEludmFsaWQgbWlub3IgdmVyc2lvbgBJbnZhbGlkIG1ham9yIHZlcnNpb24ARXhwZWN0ZWQgc3BhY2UgYWZ0ZXIgdmVyc2lvbgBFeHBlY3RlZCBDUkxGIGFmdGVyIHZlcnNpb24ASW52YWxpZCBIVFRQIHZlcnNpb24ASW52YWxpZCBoZWFkZXIgdG9rZW4AU3BhbiBjYWxsYmFjayBlcnJvciBpbiBvbl91cmwASW52YWxpZCBjaGFyYWN0ZXJzIGluIHVybABVbmV4cGVjdGVkIHN0YXJ0IGNoYXIgaW4gdXJsAERvdWJsZSBAIGluIHVybABFbXB0eSBDb250ZW50LUxlbmd0aABJbnZhbGlkIGNoYXJhY3RlciBpbiBDb250ZW50LUxlbmd0aABEdXBsaWNhdGUgQ29udGVudC1MZW5ndGgASW52YWxpZCBjaGFyIGluIHVybCBwYXRoAENvbnRlbnQtTGVuZ3RoIGNhbid0IGJlIHByZXNlbnQgd2l0aCBUcmFuc2Zlci1FbmNvZGluZwBJbnZhbGlkIGNoYXJhY3RlciBpbiBjaHVuayBzaXplAFNwYW4gY2FsbGJhY2sgZXJyb3IgaW4gb25faGVhZGVyX3ZhbHVlAFNwYW4gY2FsbGJhY2sgZXJyb3IgaW4gb25fY2h1bmtfZXh0ZW5zaW9uX3ZhbHVlAEludmFsaWQgY2hhcmFjdGVyIGluIGNodW5rIGV4dGVuc2lvbnMgdmFsdWUATWlzc2luZyBleHBlY3RlZCBMRiBhZnRlciBoZWFkZXIgdmFsdWUASW52YWxpZCBgVHJhbnNmZXItRW5jb2RpbmdgIGhlYWRlciB2YWx1ZQBJbnZhbGlkIGNoYXJhY3RlciBpbiBjaHVuayBleHRlbnNpb25zIHF1b3RlIHZhbHVlAEludmFsaWQgY2hhcmFjdGVyIGluIGNodW5rIGV4dGVuc2lvbnMgcXVvdGVkIHZhbHVlAFBhdXNlZCBieSBvbl9oZWFkZXJzX2NvbXBsZXRlAEludmFsaWQgRU9GIHN0YXRlAG9uX3Jlc2V0IHBhdXNlAG9uX2NodW5rX2hlYWRlciBwYXVzZQBvbl9tZXNzYWdlX2JlZ2luIHBhdXNlAG9uX2NodW5rX2V4dGVuc2lvbl92YWx1ZSBwYXVzZQBvbl9zdGF0dXNfY29tcGxldGUgcGF1c2UAb25fdmVyc2lvbl9jb21wbGV0ZSBwYXVzZQBvbl91cmxfY29tcGxldGUgcGF1c2UAb25fY2h1bmtfY29tcGxldGUgcGF1c2UAb25faGVhZGVyX3ZhbHVlX2NvbXBsZXRlIHBhdXNlAG9uX21lc3NhZ2VfY29tcGxldGUgcGF1c2UAb25fbWV0aG9kX2NvbXBsZXRlIHBhdXNlAG9uX2hlYWRlcl9maWVsZF9jb21wbGV0ZSBwYXVzZQBvbl9jaHVua19leHRlbnNpb25fbmFtZSBwYXVzZQBVbmV4cGVjdGVkIHNwYWNlIGFmdGVyIHN0YXJ0IGxpbmUAU3BhbiBjYWxsYmFjayBlcnJvciBpbiBvbl9jaHVua19leHRlbnNpb25fbmFtZQBJbnZhbGlkIGNoYXJhY3RlciBpbiBjaHVuayBleHRlbnNpb25zIG5hbWUAUGF1c2Ugb24gQ09OTkVDVC9VcGdyYWRlAFBhdXNlIG9uIFBSSS9VcGdyYWRlAEV4cGVjdGVkIEhUVFAvMiBDb25uZWN0aW9uIFByZWZhY2UAU3BhbiBjYWxsYmFjayBlcnJvciBpbiBvbl9tZXRob2QARXhwZWN0ZWQgc3BhY2UgYWZ0ZXIgbWV0aG9kAFNwYW4gY2FsbGJhY2sgZXJyb3IgaW4gb25faGVhZGVyX2ZpZWxkAFBhdXNlZABJbnZhbGlkIHdvcmQgZW5jb3VudGVyZWQASW52YWxpZCBtZXRob2QgZW5jb3VudGVyZWQAVW5leHBlY3RlZCBjaGFyIGluIHVybCBzY2hlbWEAUmVxdWVzdCBoYXMgaW52YWxpZCBgVHJhbnNmZXItRW5jb2RpbmdgAFNXSVRDSF9QUk9YWQBVU0VfUFJPWFkATUtBQ1RJVklUWQBVTlBST0NFU1NBQkxFX0VOVElUWQBDT1BZAE1PVkVEX1BFUk1BTkVOVExZAFRPT19FQVJMWQBOT1RJRlkARkFJTEVEX0RFUEVOREVOQ1kAQkFEX0dBVEVXQVkAUExBWQBQVVQAQ0hFQ0tPVVQAR0FURVdBWV9USU1FT1VUAFJFUVVFU1RfVElNRU9VVABORVRXT1JLX0NPTk5FQ1RfVElNRU9VVABDT05ORUNUSU9OX1RJTUVPVVQATE9HSU5fVElNRU9VVABORVRXT1JLX1JFQURfVElNRU9VVABQT1NUAE1JU0RJUkVDVEVEX1JFUVVFU1QAQ0xJRU5UX0NMT1NFRF9SRVFVRVNUAENMSUVOVF9DTE9TRURfTE9BRF9CQUxBTkNFRF9SRVFVRVNUAEJBRF9SRVFVRVNUAEhUVFBfUkVRVUVTVF9TRU5UX1RPX0hUVFBTX1BPUlQAUkVQT1JUAElNX0FfVEVBUE9UAFJFU0VUX0NPTlRFTlQATk9fQ09OVEVOVABQQVJUSUFMX0NPTlRFTlQASFBFX0lOVkFMSURfQ09OU1RBTlQASFBFX0NCX1JFU0VUAEdFVABIUEVfU1RSSUNUAENPTkZMSUNUAFRFTVBPUkFSWV9SRURJUkVDVABQRVJNQU5FTlRfUkVESVJFQ1QAQ09OTkVDVABNVUxUSV9TVEFUVVMASFBFX0lOVkFMSURfU1RBVFVTAFRPT19NQU5ZX1JFUVVFU1RTAEVBUkxZX0hJTlRTAFVOQVZBSUxBQkxFX0ZPUl9MRUdBTF9SRUFTT05TAE9QVElPTlMAU1dJVENISU5HX1BST1RPQ09MUwBWQVJJQU5UX0FMU09fTkVHT1RJQVRFUwBNVUxUSVBMRV9DSE9JQ0VTAElOVEVSTkFMX1NFUlZFUl9FUlJPUgBXRUJfU0VSVkVSX1VOS05PV05fRVJST1IAUkFJTEdVTl9FUlJPUgBJREVOVElUWV9QUk9WSURFUl9BVVRIRU5USUNBVElPTl9FUlJPUgBTU0xfQ0VSVElGSUNBVEVfRVJST1IASU5WQUxJRF9YX0ZPUldBUkRFRF9GT1IAU0VUX1BBUkFNRVRFUgBHRVRfUEFSQU1FVEVSAEhQRV9VU0VSAFNFRV9PVEhFUgBIUEVfQ0JfQ0hVTktfSEVBREVSAE1LQ0FMRU5EQVIAU0VUVVAAV0VCX1NFUlZFUl9JU19ET1dOAFRFQVJET1dOAEhQRV9DTE9TRURfQ09OTkVDVElPTgBIRVVSSVNUSUNfRVhQSVJBVElPTgBESVNDT05ORUNURURfT1BFUkFUSU9OAE5PTl9BVVRIT1JJVEFUSVZFX0lORk9STUFUSU9OAEhQRV9JTlZBTElEX1ZFUlNJT04ASFBFX0NCX01FU1NBR0VfQkVHSU4AU0lURV9JU19GUk9aRU4ASFBFX0lOVkFMSURfSEVBREVSX1RPS0VOAElOVkFMSURfVE9LRU4ARk9SQklEREVOAEVOSEFOQ0VfWU9VUl9DQUxNAEhQRV9JTlZBTElEX1VSTABCTE9DS0VEX0JZX1BBUkVOVEFMX0NPTlRST0wATUtDT0wAQUNMAEhQRV9JTlRFUk5BTABSRVFVRVNUX0hFQURFUl9GSUVMRFNfVE9PX0xBUkdFX1VOT0ZGSUNJQUwASFBFX09LAFVOTElOSwBVTkxPQ0sAUFJJAFJFVFJZX1dJVEgASFBFX0lOVkFMSURfQ09OVEVOVF9MRU5HVEgASFBFX1VORVhQRUNURURfQ09OVEVOVF9MRU5HVEgARkxVU0gAUFJPUFBBVENIAE0tU0VBUkNIAFVSSV9UT09fTE9ORwBQUk9DRVNTSU5HAE1JU0NFTExBTkVPVVNfUEVSU0lTVEVOVF9XQVJOSU5HAE1JU0NFTExBTkVPVVNfV0FSTklORwBIUEVfSU5WQUxJRF9UUkFOU0ZFUl9FTkNPRElORwBFeHBlY3RlZCBDUkxGAEhQRV9JTlZBTElEX0NIVU5LX1NJWkUATU9WRQBDT05USU5VRQBIUEVfQ0JfU1RBVFVTX0NPTVBMRVRFAEhQRV9DQl9IRUFERVJTX0NPTVBMRVRFAEhQRV9DQl9WRVJTSU9OX0NPTVBMRVRFAEhQRV9DQl9VUkxfQ09NUExFVEUASFBFX0NCX0NIVU5LX0NPTVBMRVRFAEhQRV9DQl9IRUFERVJfVkFMVUVfQ09NUExFVEUASFBFX0NCX0NIVU5LX0VYVEVOU0lPTl9WQUxVRV9DT01QTEVURQBIUEVfQ0JfQ0hVTktfRVhURU5TSU9OX05BTUVfQ09NUExFVEUASFBFX0NCX01FU1NBR0VfQ09NUExFVEUASFBFX0NCX01FVEhPRF9DT01QTEVURQBIUEVfQ0JfSEVBREVSX0ZJRUxEX0NPTVBMRVRFAERFTEVURQBIUEVfSU5WQUxJRF9FT0ZfU1RBVEUASU5WQUxJRF9TU0xfQ0VSVElGSUNBVEUAUEFVU0UATk9fUkVTUE9OU0UAVU5TVVBQT1JURURfTUVESUFfVFlQRQBHT05FAE5PVF9BQ0NFUFRBQkxFAFNFUlZJQ0VfVU5BVkFJTEFCTEUAUkFOR0VfTk9UX1NBVElTRklBQkxFAE9SSUdJTl9JU19VTlJFQUNIQUJMRQBSRVNQT05TRV9JU19TVEFMRQBQVVJHRQBNRVJHRQBSRVFVRVNUX0hFQURFUl9GSUVMRFNfVE9PX0xBUkdFAFJFUVVFU1RfSEVBREVSX1RPT19MQVJHRQBQQVlMT0FEX1RPT19MQVJHRQBJTlNVRkZJQ0lFTlRfU1RPUkFHRQBIUEVfUEFVU0VEX1VQR1JBREUASFBFX1BBVVNFRF9IMl9VUEdSQURFAFNPVVJDRQBBTk5PVU5DRQBUUkFDRQBIUEVfVU5FWFBFQ1RFRF9TUEFDRQBERVNDUklCRQBVTlNVQlNDUklCRQBSRUNPUkQASFBFX0lOVkFMSURfTUVUSE9EAE5PVF9GT1VORABQUk9QRklORABVTkJJTkQAUkVCSU5EAFVOQVVUSE9SSVpFRABNRVRIT0RfTk9UX0FMTE9XRUQASFRUUF9WRVJTSU9OX05PVF9TVVBQT1JURUQAQUxSRUFEWV9SRVBPUlRFRABBQ0NFUFRFRABOT1RfSU1QTEVNRU5URUQATE9PUF9ERVRFQ1RFRABIUEVfQ1JfRVhQRUNURUQASFBFX0xGX0VYUEVDVEVEAENSRUFURUQASU1fVVNFRABIUEVfUEFVU0VEAFRJTUVPVVRfT0NDVVJFRABQQVlNRU5UX1JFUVVJUkVEAFBSRUNPTkRJVElPTl9SRVFVSVJFRABQUk9YWV9BVVRIRU5USUNBVElPTl9SRVFVSVJFRABORVRXT1JLX0FVVEhFTlRJQ0FUSU9OX1JFUVVJUkVEAExFTkdUSF9SRVFVSVJFRABTU0xfQ0VSVElGSUNBVEVfUkVRVUlSRUQAVVBHUkFERV9SRVFVSVJFRABQQUdFX0VYUElSRUQAUFJFQ09ORElUSU9OX0ZBSUxFRABFWFBFQ1RBVElPTl9GQUlMRUQAUkVWQUxJREFUSU9OX0ZBSUxFRABTU0xfSEFORFNIQUtFX0ZBSUxFRABMT0NLRUQAVFJBTlNGT1JNQVRJT05fQVBQTElFRABOT1RfTU9ESUZJRUQATk9UX0VYVEVOREVEAEJBTkRXSURUSF9MSU1JVF9FWENFRURFRABTSVRFX0lTX09WRVJMT0FERUQASEVBRABFeHBlY3RlZCBIVFRQLwAAXhMAACYTAAAwEAAA8BcAAJ0TAAAVEgAAORcAAPASAAAKEAAAdRIAAK0SAACCEwAATxQAAH8QAACgFQAAIxQAAIkSAACLFAAATRUAANQRAADPFAAAEBgAAMkWAADcFgAAwREAAOAXAAC7FAAAdBQAAHwVAADlFAAACBcAAB8QAABlFQAAoxQAACgVAAACFQAAmRUAACwQAACLGQAATw8AANQOAABqEAAAzhAAAAIXAACJDgAAbhMAABwTAABmFAAAVhcAAMETAADNEwAAbBMAAGgXAABmFwAAXxcAACITAADODwAAaQ4AANgOAABjFgAAyxMAAKoOAAAoFwAAJhcAAMUTAABdFgAA6BEAAGcTAABlEwAA8hYAAHMTAAAdFwAA+RYAAPMRAADPDgAAzhUAAAwSAACzEQAApREAAGEQAAAyFwAAuxMAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQIBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAIDAgICAgIAAAICAAICAAICAgICAgICAgIABAAAAAAAAgICAgICAgICAgICAgICAgICAgICAgICAgIAAAACAgICAgICAgICAgICAgICAgICAgICAgICAgICAgACAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAACAAICAgICAAACAgACAgACAgICAgICAgICAAMABAAAAAICAgICAgICAgICAgICAgICAgICAgICAgICAAAAAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAAgACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAbG9zZWVlcC1hbGl2ZQAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQEBAQEBAQEBAQIBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBY2h1bmtlZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEAAQEBAQEAAAEBAAEBAAEBAQEBAQEBAQEAAAAAAAAAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQABAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABlY3Rpb25lbnQtbGVuZ3Rob25yb3h5LWNvbm5lY3Rpb24AAAAAAAAAAAAAAAAAAAByYW5zZmVyLWVuY29kaW5ncGdyYWRlDQoNCg0KU00NCg0KVFRQL0NFL1RTUC8AAAAAAAAAAAAAAAABAgABAwAAAAAAAAAAAAAAAAAAAAAAAAQBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAAAAAAAAAAAAAQIAAQMAAAAAAAAAAAAAAAAAAAAAAAAEAQEFAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQAAAAAAAAAAAAEAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAAAAAAAAAAAAAQAAAgAAAAAAAAAAAAAAAAAAAAAAAAMEAAAEBAQEBAQEBAQEBAUEBAQEBAQEBAQEBAQABAAGBwQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAAEAAQABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAEAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAADAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwAAAAAAAAMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAIAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMAAAAAAAADAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABOT1VOQ0VFQ0tPVVRORUNURVRFQ1JJQkVMVVNIRVRFQURTRUFSQ0hSR0VDVElWSVRZTEVOREFSVkVPVElGWVBUSU9OU0NIU0VBWVNUQVRDSEdFT1JESVJFQ1RPUlRSQ0hQQVJBTUVURVJVUkNFQlNDUklCRUFSRE9XTkFDRUlORE5LQ0tVQlNDUklCRUhUVFAvQURUUC8=";
  }
});

// node_modules/undici/lib/client.js
var require_client = __commonJS({
  "node_modules/undici/lib/client.js"(exports, module2) {
    "use strict";
    init_shims();
    var assert = require("assert");
    var net = require("net");
    var util = require_util();
    var timers = require_timers();
    var Request3 = require_request();
    var DispatcherBase = require_dispatcher_base();
    var {
      RequestContentLengthMismatchError,
      ResponseContentLengthMismatchError,
      InvalidArgumentError,
      RequestAbortedError,
      HeadersTimeoutError,
      HeadersOverflowError,
      SocketError,
      InformationalError,
      BodyTimeoutError,
      HTTPParserError,
      ResponseExceededMaxSizeError
    } = require_errors();
    var buildConnector = require_connect();
    var {
      kUrl,
      kReset,
      kServerName,
      kClient,
      kBusy,
      kParser,
      kConnect,
      kBlocking,
      kResuming,
      kRunning,
      kPending,
      kSize,
      kWriting,
      kQueue,
      kConnected,
      kConnecting,
      kNeedDrain,
      kNoRef,
      kKeepAliveDefaultTimeout,
      kHostHeader,
      kPendingIdx,
      kRunningIdx,
      kError,
      kPipelining,
      kSocket,
      kKeepAliveTimeoutValue,
      kMaxHeadersSize,
      kKeepAliveMaxTimeout,
      kKeepAliveTimeoutThreshold,
      kHeadersTimeout,
      kBodyTimeout,
      kStrictContentLength,
      kConnector,
      kMaxRedirections,
      kMaxRequests,
      kCounter,
      kClose,
      kDestroy,
      kDispatch,
      kInterceptors,
      kLocalAddress,
      kMaxResponseSize
    } = require_symbols();
    var FastBuffer = Buffer[Symbol.species];
    var kClosedResolve = Symbol("kClosedResolve");
    var channels = {};
    try {
      const diagnosticsChannel = require("diagnostics_channel");
      channels.sendHeaders = diagnosticsChannel.channel("undici:client:sendHeaders");
      channels.beforeConnect = diagnosticsChannel.channel("undici:client:beforeConnect");
      channels.connectError = diagnosticsChannel.channel("undici:client:connectError");
      channels.connected = diagnosticsChannel.channel("undici:client:connected");
    } catch {
      channels.sendHeaders = { hasSubscribers: false };
      channels.beforeConnect = { hasSubscribers: false };
      channels.connectError = { hasSubscribers: false };
      channels.connected = { hasSubscribers: false };
    }
    var Client = class extends DispatcherBase {
      constructor(url, {
        interceptors,
        maxHeaderSize,
        headersTimeout,
        socketTimeout,
        requestTimeout,
        connectTimeout,
        bodyTimeout,
        idleTimeout,
        keepAlive,
        keepAliveTimeout,
        maxKeepAliveTimeout,
        keepAliveMaxTimeout,
        keepAliveTimeoutThreshold,
        socketPath,
        pipelining,
        tls,
        strictContentLength,
        maxCachedSessions,
        maxRedirections,
        connect: connect2,
        maxRequestsPerClient,
        localAddress,
        maxResponseSize,
        autoSelectFamily,
        autoSelectFamilyAttemptTimeout
      } = {}) {
        super();
        if (keepAlive !== void 0) {
          throw new InvalidArgumentError("unsupported keepAlive, use pipelining=0 instead");
        }
        if (socketTimeout !== void 0) {
          throw new InvalidArgumentError("unsupported socketTimeout, use headersTimeout & bodyTimeout instead");
        }
        if (requestTimeout !== void 0) {
          throw new InvalidArgumentError("unsupported requestTimeout, use headersTimeout & bodyTimeout instead");
        }
        if (idleTimeout !== void 0) {
          throw new InvalidArgumentError("unsupported idleTimeout, use keepAliveTimeout instead");
        }
        if (maxKeepAliveTimeout !== void 0) {
          throw new InvalidArgumentError("unsupported maxKeepAliveTimeout, use keepAliveMaxTimeout instead");
        }
        if (maxHeaderSize != null && !Number.isFinite(maxHeaderSize)) {
          throw new InvalidArgumentError("invalid maxHeaderSize");
        }
        if (socketPath != null && typeof socketPath !== "string") {
          throw new InvalidArgumentError("invalid socketPath");
        }
        if (connectTimeout != null && (!Number.isFinite(connectTimeout) || connectTimeout < 0)) {
          throw new InvalidArgumentError("invalid connectTimeout");
        }
        if (keepAliveTimeout != null && (!Number.isFinite(keepAliveTimeout) || keepAliveTimeout <= 0)) {
          throw new InvalidArgumentError("invalid keepAliveTimeout");
        }
        if (keepAliveMaxTimeout != null && (!Number.isFinite(keepAliveMaxTimeout) || keepAliveMaxTimeout <= 0)) {
          throw new InvalidArgumentError("invalid keepAliveMaxTimeout");
        }
        if (keepAliveTimeoutThreshold != null && !Number.isFinite(keepAliveTimeoutThreshold)) {
          throw new InvalidArgumentError("invalid keepAliveTimeoutThreshold");
        }
        if (headersTimeout != null && (!Number.isInteger(headersTimeout) || headersTimeout < 0)) {
          throw new InvalidArgumentError("headersTimeout must be a positive integer or zero");
        }
        if (bodyTimeout != null && (!Number.isInteger(bodyTimeout) || bodyTimeout < 0)) {
          throw new InvalidArgumentError("bodyTimeout must be a positive integer or zero");
        }
        if (connect2 != null && typeof connect2 !== "function" && typeof connect2 !== "object") {
          throw new InvalidArgumentError("connect must be a function or an object");
        }
        if (maxRedirections != null && (!Number.isInteger(maxRedirections) || maxRedirections < 0)) {
          throw new InvalidArgumentError("maxRedirections must be a positive number");
        }
        if (maxRequestsPerClient != null && (!Number.isInteger(maxRequestsPerClient) || maxRequestsPerClient < 0)) {
          throw new InvalidArgumentError("maxRequestsPerClient must be a positive number");
        }
        if (localAddress != null && (typeof localAddress !== "string" || net.isIP(localAddress) === 0)) {
          throw new InvalidArgumentError("localAddress must be valid string IP address");
        }
        if (maxResponseSize != null && (!Number.isInteger(maxResponseSize) || maxResponseSize < -1)) {
          throw new InvalidArgumentError("maxResponseSize must be a positive number");
        }
        if (autoSelectFamilyAttemptTimeout != null && (!Number.isInteger(autoSelectFamilyAttemptTimeout) || autoSelectFamilyAttemptTimeout < -1)) {
          throw new InvalidArgumentError("autoSelectFamilyAttemptTimeout must be a positive number");
        }
        if (typeof connect2 !== "function") {
          connect2 = buildConnector({
            ...tls,
            maxCachedSessions,
            socketPath,
            timeout: connectTimeout,
            ...util.nodeHasAutoSelectFamily && autoSelectFamily ? { autoSelectFamily, autoSelectFamilyAttemptTimeout } : void 0,
            ...connect2
          });
        }
        this[kInterceptors] = interceptors && interceptors.Client && Array.isArray(interceptors.Client) ? interceptors.Client : [createRedirectInterceptor({ maxRedirections })];
        this[kUrl] = util.parseOrigin(url);
        this[kConnector] = connect2;
        this[kSocket] = null;
        this[kPipelining] = pipelining != null ? pipelining : 1;
        this[kMaxHeadersSize] = maxHeaderSize || 16384;
        this[kKeepAliveDefaultTimeout] = keepAliveTimeout == null ? 4e3 : keepAliveTimeout;
        this[kKeepAliveMaxTimeout] = keepAliveMaxTimeout == null ? 6e5 : keepAliveMaxTimeout;
        this[kKeepAliveTimeoutThreshold] = keepAliveTimeoutThreshold == null ? 1e3 : keepAliveTimeoutThreshold;
        this[kKeepAliveTimeoutValue] = this[kKeepAliveDefaultTimeout];
        this[kServerName] = null;
        this[kLocalAddress] = localAddress != null ? localAddress : null;
        this[kResuming] = 0;
        this[kNeedDrain] = 0;
        this[kHostHeader] = `host: ${this[kUrl].hostname}${this[kUrl].port ? `:${this[kUrl].port}` : ""}\r
`;
        this[kBodyTimeout] = bodyTimeout != null ? bodyTimeout : 3e5;
        this[kHeadersTimeout] = headersTimeout != null ? headersTimeout : 3e5;
        this[kStrictContentLength] = strictContentLength == null ? true : strictContentLength;
        this[kMaxRedirections] = maxRedirections;
        this[kMaxRequests] = maxRequestsPerClient;
        this[kClosedResolve] = null;
        this[kMaxResponseSize] = maxResponseSize > -1 ? maxResponseSize : -1;
        this[kQueue] = [];
        this[kRunningIdx] = 0;
        this[kPendingIdx] = 0;
      }
      get pipelining() {
        return this[kPipelining];
      }
      set pipelining(value) {
        this[kPipelining] = value;
        resume(this, true);
      }
      get [kPending]() {
        return this[kQueue].length - this[kPendingIdx];
      }
      get [kRunning]() {
        return this[kPendingIdx] - this[kRunningIdx];
      }
      get [kSize]() {
        return this[kQueue].length - this[kRunningIdx];
      }
      get [kConnected]() {
        return !!this[kSocket] && !this[kConnecting] && !this[kSocket].destroyed;
      }
      get [kBusy]() {
        const socket = this[kSocket];
        return socket && (socket[kReset] || socket[kWriting] || socket[kBlocking]) || this[kSize] >= (this[kPipelining] || 1) || this[kPending] > 0;
      }
      /* istanbul ignore: only used for test */
      [kConnect](cb) {
        connect(this);
        this.once("connect", cb);
      }
      [kDispatch](opts, handler2) {
        const origin = opts.origin || this[kUrl].origin;
        const request = new Request3(origin, opts, handler2);
        this[kQueue].push(request);
        if (this[kResuming]) {
        } else if (util.bodyLength(request.body) == null && util.isIterable(request.body)) {
          this[kResuming] = 1;
          process.nextTick(resume, this);
        } else {
          resume(this, true);
        }
        if (this[kResuming] && this[kNeedDrain] !== 2 && this[kBusy]) {
          this[kNeedDrain] = 2;
        }
        return this[kNeedDrain] < 2;
      }
      async [kClose]() {
        return new Promise((resolve) => {
          if (!this[kSize]) {
            this.destroy(resolve);
          } else {
            this[kClosedResolve] = resolve;
          }
        });
      }
      async [kDestroy](err) {
        return new Promise((resolve) => {
          const requests = this[kQueue].splice(this[kPendingIdx]);
          for (let i3 = 0; i3 < requests.length; i3++) {
            const request = requests[i3];
            errorRequest(this, request, err);
          }
          const callback = () => {
            if (this[kClosedResolve]) {
              this[kClosedResolve]();
              this[kClosedResolve] = null;
            }
            resolve();
          };
          if (!this[kSocket]) {
            queueMicrotask(callback);
          } else {
            util.destroy(this[kSocket].on("close", callback), err);
          }
          resume(this);
        });
      }
    };
    var constants = require_constants2();
    var createRedirectInterceptor = require_redirectInterceptor();
    var EMPTY_BUF = Buffer.alloc(0);
    async function lazyllhttp() {
      const llhttpWasmData = process.env.JEST_WORKER_ID ? require_llhttp_wasm() : void 0;
      let mod;
      try {
        mod = await WebAssembly.compile(Buffer.from(require_llhttp_simd_wasm(), "base64"));
      } catch (e3) {
        mod = await WebAssembly.compile(Buffer.from(llhttpWasmData || require_llhttp_wasm(), "base64"));
      }
      return await WebAssembly.instantiate(mod, {
        env: {
          /* eslint-disable camelcase */
          wasm_on_url: (p4, at, len) => {
            return 0;
          },
          wasm_on_status: (p4, at, len) => {
            assert.strictEqual(currentParser.ptr, p4);
            const start2 = at - currentBufferPtr + currentBufferRef.byteOffset;
            return currentParser.onStatus(new FastBuffer(currentBufferRef.buffer, start2, len)) || 0;
          },
          wasm_on_message_begin: (p4) => {
            assert.strictEqual(currentParser.ptr, p4);
            return currentParser.onMessageBegin() || 0;
          },
          wasm_on_header_field: (p4, at, len) => {
            assert.strictEqual(currentParser.ptr, p4);
            const start2 = at - currentBufferPtr + currentBufferRef.byteOffset;
            return currentParser.onHeaderField(new FastBuffer(currentBufferRef.buffer, start2, len)) || 0;
          },
          wasm_on_header_value: (p4, at, len) => {
            assert.strictEqual(currentParser.ptr, p4);
            const start2 = at - currentBufferPtr + currentBufferRef.byteOffset;
            return currentParser.onHeaderValue(new FastBuffer(currentBufferRef.buffer, start2, len)) || 0;
          },
          wasm_on_headers_complete: (p4, statusCode, upgrade, shouldKeepAlive) => {
            assert.strictEqual(currentParser.ptr, p4);
            return currentParser.onHeadersComplete(statusCode, Boolean(upgrade), Boolean(shouldKeepAlive)) || 0;
          },
          wasm_on_body: (p4, at, len) => {
            assert.strictEqual(currentParser.ptr, p4);
            const start2 = at - currentBufferPtr + currentBufferRef.byteOffset;
            return currentParser.onBody(new FastBuffer(currentBufferRef.buffer, start2, len)) || 0;
          },
          wasm_on_message_complete: (p4) => {
            assert.strictEqual(currentParser.ptr, p4);
            return currentParser.onMessageComplete() || 0;
          }
          /* eslint-enable camelcase */
        }
      });
    }
    var llhttpInstance = null;
    var llhttpPromise = lazyllhttp();
    llhttpPromise.catch();
    var currentParser = null;
    var currentBufferRef = null;
    var currentBufferSize = 0;
    var currentBufferPtr = null;
    var TIMEOUT_HEADERS = 1;
    var TIMEOUT_BODY = 2;
    var TIMEOUT_IDLE = 3;
    var Parser = class {
      constructor(client, socket, { exports: exports2 }) {
        assert(Number.isFinite(client[kMaxHeadersSize]) && client[kMaxHeadersSize] > 0);
        this.llhttp = exports2;
        this.ptr = this.llhttp.llhttp_alloc(constants.TYPE.RESPONSE);
        this.client = client;
        this.socket = socket;
        this.timeout = null;
        this.timeoutValue = null;
        this.timeoutType = null;
        this.statusCode = null;
        this.statusText = "";
        this.upgrade = false;
        this.headers = [];
        this.headersSize = 0;
        this.headersMaxSize = client[kMaxHeadersSize];
        this.shouldKeepAlive = false;
        this.paused = false;
        this.resume = this.resume.bind(this);
        this.bytesRead = 0;
        this.keepAlive = "";
        this.contentLength = "";
        this.connection = "";
        this.maxResponseSize = client[kMaxResponseSize];
      }
      setTimeout(value, type) {
        this.timeoutType = type;
        if (value !== this.timeoutValue) {
          timers.clearTimeout(this.timeout);
          if (value) {
            this.timeout = timers.setTimeout(onParserTimeout, value, this);
            if (this.timeout.unref) {
              this.timeout.unref();
            }
          } else {
            this.timeout = null;
          }
          this.timeoutValue = value;
        } else if (this.timeout) {
          if (this.timeout.refresh) {
            this.timeout.refresh();
          }
        }
      }
      resume() {
        if (this.socket.destroyed || !this.paused) {
          return;
        }
        assert(this.ptr != null);
        assert(currentParser == null);
        this.llhttp.llhttp_resume(this.ptr);
        assert(this.timeoutType === TIMEOUT_BODY);
        if (this.timeout) {
          if (this.timeout.refresh) {
            this.timeout.refresh();
          }
        }
        this.paused = false;
        this.execute(this.socket.read() || EMPTY_BUF);
        this.readMore();
      }
      readMore() {
        while (!this.paused && this.ptr) {
          const chunk = this.socket.read();
          if (chunk === null) {
            break;
          }
          this.execute(chunk);
        }
      }
      execute(data) {
        assert(this.ptr != null);
        assert(currentParser == null);
        assert(!this.paused);
        const { socket, llhttp } = this;
        if (data.length > currentBufferSize) {
          if (currentBufferPtr) {
            llhttp.free(currentBufferPtr);
          }
          currentBufferSize = Math.ceil(data.length / 4096) * 4096;
          currentBufferPtr = llhttp.malloc(currentBufferSize);
        }
        new Uint8Array(llhttp.memory.buffer, currentBufferPtr, currentBufferSize).set(data);
        try {
          let ret;
          try {
            currentBufferRef = data;
            currentParser = this;
            ret = llhttp.llhttp_execute(this.ptr, currentBufferPtr, data.length);
          } catch (err) {
            throw err;
          } finally {
            currentParser = null;
            currentBufferRef = null;
          }
          const offset = llhttp.llhttp_get_error_pos(this.ptr) - currentBufferPtr;
          if (ret === constants.ERROR.PAUSED_UPGRADE) {
            this.onUpgrade(data.slice(offset));
          } else if (ret === constants.ERROR.PAUSED) {
            this.paused = true;
            socket.unshift(data.slice(offset));
          } else if (ret !== constants.ERROR.OK) {
            const ptr = llhttp.llhttp_get_error_reason(this.ptr);
            let message = "";
            if (ptr) {
              const len = new Uint8Array(llhttp.memory.buffer, ptr).indexOf(0);
              message = Buffer.from(llhttp.memory.buffer, ptr, len).toString();
            }
            throw new HTTPParserError(message, constants.ERROR[ret], data.slice(offset));
          }
        } catch (err) {
          util.destroy(socket, err);
        }
      }
      destroy() {
        assert(this.ptr != null);
        assert(currentParser == null);
        this.llhttp.llhttp_free(this.ptr);
        this.ptr = null;
        timers.clearTimeout(this.timeout);
        this.timeout = null;
        this.timeoutValue = null;
        this.timeoutType = null;
        this.paused = false;
      }
      onStatus(buf) {
        this.statusText = buf.toString();
      }
      onMessageBegin() {
        const { socket, client } = this;
        if (socket.destroyed) {
          return -1;
        }
        const request = client[kQueue][client[kRunningIdx]];
        if (!request) {
          return -1;
        }
      }
      onHeaderField(buf) {
        const len = this.headers.length;
        if ((len & 1) === 0) {
          this.headers.push(buf);
        } else {
          this.headers[len - 1] = Buffer.concat([this.headers[len - 1], buf]);
        }
        this.trackHeader(buf.length);
      }
      onHeaderValue(buf) {
        let len = this.headers.length;
        if ((len & 1) === 1) {
          this.headers.push(buf);
          len += 1;
        } else {
          this.headers[len - 1] = Buffer.concat([this.headers[len - 1], buf]);
        }
        const key2 = this.headers[len - 2];
        if (key2.length === 10 && key2.toString().toLowerCase() === "keep-alive") {
          this.keepAlive += buf.toString();
        } else if (key2.length === 10 && key2.toString().toLowerCase() === "connection") {
          this.connection += buf.toString();
        } else if (key2.length === 14 && key2.toString().toLowerCase() === "content-length") {
          this.contentLength += buf.toString();
        }
        this.trackHeader(buf.length);
      }
      trackHeader(len) {
        this.headersSize += len;
        if (this.headersSize >= this.headersMaxSize) {
          util.destroy(this.socket, new HeadersOverflowError());
        }
      }
      onUpgrade(head) {
        const { upgrade, client, socket, headers, statusCode } = this;
        assert(upgrade);
        const request = client[kQueue][client[kRunningIdx]];
        assert(request);
        assert(!socket.destroyed);
        assert(socket === client[kSocket]);
        assert(!this.paused);
        assert(request.upgrade || request.method === "CONNECT");
        this.statusCode = null;
        this.statusText = "";
        this.shouldKeepAlive = null;
        assert(this.headers.length % 2 === 0);
        this.headers = [];
        this.headersSize = 0;
        socket.unshift(head);
        socket[kParser].destroy();
        socket[kParser] = null;
        socket[kClient] = null;
        socket[kError] = null;
        socket.removeListener("error", onSocketError).removeListener("readable", onSocketReadable).removeListener("end", onSocketEnd).removeListener("close", onSocketClose);
        client[kSocket] = null;
        client[kQueue][client[kRunningIdx]++] = null;
        client.emit("disconnect", client[kUrl], [client], new InformationalError("upgrade"));
        try {
          request.onUpgrade(statusCode, headers, socket);
        } catch (err) {
          util.destroy(socket, err);
        }
        resume(client);
      }
      onHeadersComplete(statusCode, upgrade, shouldKeepAlive) {
        const { client, socket, headers, statusText } = this;
        if (socket.destroyed) {
          return -1;
        }
        const request = client[kQueue][client[kRunningIdx]];
        if (!request) {
          return -1;
        }
        assert(!this.upgrade);
        assert(this.statusCode < 200);
        if (statusCode === 100) {
          util.destroy(socket, new SocketError("bad response", util.getSocketInfo(socket)));
          return -1;
        }
        if (upgrade && !request.upgrade) {
          util.destroy(socket, new SocketError("bad upgrade", util.getSocketInfo(socket)));
          return -1;
        }
        assert.strictEqual(this.timeoutType, TIMEOUT_HEADERS);
        this.statusCode = statusCode;
        this.shouldKeepAlive = shouldKeepAlive || // Override llhttp value which does not allow keepAlive for HEAD.
        request.method === "HEAD" && !socket[kReset] && this.connection.toLowerCase() === "keep-alive";
        if (this.statusCode >= 200) {
          const bodyTimeout = request.bodyTimeout != null ? request.bodyTimeout : client[kBodyTimeout];
          this.setTimeout(bodyTimeout, TIMEOUT_BODY);
        } else if (this.timeout) {
          if (this.timeout.refresh) {
            this.timeout.refresh();
          }
        }
        if (request.method === "CONNECT") {
          assert(client[kRunning] === 1);
          this.upgrade = true;
          return 2;
        }
        if (upgrade) {
          assert(client[kRunning] === 1);
          this.upgrade = true;
          return 2;
        }
        assert(this.headers.length % 2 === 0);
        this.headers = [];
        this.headersSize = 0;
        if (this.shouldKeepAlive && client[kPipelining]) {
          const keepAliveTimeout = this.keepAlive ? util.parseKeepAliveTimeout(this.keepAlive) : null;
          if (keepAliveTimeout != null) {
            const timeout = Math.min(
              keepAliveTimeout - client[kKeepAliveTimeoutThreshold],
              client[kKeepAliveMaxTimeout]
            );
            if (timeout <= 0) {
              socket[kReset] = true;
            } else {
              client[kKeepAliveTimeoutValue] = timeout;
            }
          } else {
            client[kKeepAliveTimeoutValue] = client[kKeepAliveDefaultTimeout];
          }
        } else {
          socket[kReset] = true;
        }
        let pause;
        try {
          pause = request.onHeaders(statusCode, headers, this.resume, statusText) === false;
        } catch (err) {
          util.destroy(socket, err);
          return -1;
        }
        if (request.method === "HEAD") {
          return 1;
        }
        if (statusCode < 200) {
          return 1;
        }
        if (socket[kBlocking]) {
          socket[kBlocking] = false;
          resume(client);
        }
        return pause ? constants.ERROR.PAUSED : 0;
      }
      onBody(buf) {
        const { client, socket, statusCode, maxResponseSize } = this;
        if (socket.destroyed) {
          return -1;
        }
        const request = client[kQueue][client[kRunningIdx]];
        assert(request);
        assert.strictEqual(this.timeoutType, TIMEOUT_BODY);
        if (this.timeout) {
          if (this.timeout.refresh) {
            this.timeout.refresh();
          }
        }
        assert(statusCode >= 200);
        if (maxResponseSize > -1 && this.bytesRead + buf.length > maxResponseSize) {
          util.destroy(socket, new ResponseExceededMaxSizeError());
          return -1;
        }
        this.bytesRead += buf.length;
        try {
          if (request.onData(buf) === false) {
            return constants.ERROR.PAUSED;
          }
        } catch (err) {
          util.destroy(socket, err);
          return -1;
        }
      }
      onMessageComplete() {
        const { client, socket, statusCode, upgrade, headers, contentLength, bytesRead, shouldKeepAlive } = this;
        if (socket.destroyed && (!statusCode || shouldKeepAlive)) {
          return -1;
        }
        if (upgrade) {
          return;
        }
        const request = client[kQueue][client[kRunningIdx]];
        assert(request);
        assert(statusCode >= 100);
        this.statusCode = null;
        this.statusText = "";
        this.bytesRead = 0;
        this.contentLength = "";
        this.keepAlive = "";
        this.connection = "";
        assert(this.headers.length % 2 === 0);
        this.headers = [];
        this.headersSize = 0;
        if (statusCode < 200) {
          return;
        }
        if (request.method !== "HEAD" && contentLength && bytesRead !== parseInt(contentLength, 10)) {
          util.destroy(socket, new ResponseContentLengthMismatchError());
          return -1;
        }
        try {
          request.onComplete(headers);
        } catch (err) {
          errorRequest(client, request, err);
        }
        client[kQueue][client[kRunningIdx]++] = null;
        if (socket[kWriting]) {
          assert.strictEqual(client[kRunning], 0);
          util.destroy(socket, new InformationalError("reset"));
          return constants.ERROR.PAUSED;
        } else if (!shouldKeepAlive) {
          util.destroy(socket, new InformationalError("reset"));
          return constants.ERROR.PAUSED;
        } else if (socket[kReset] && client[kRunning] === 0) {
          util.destroy(socket, new InformationalError("reset"));
          return constants.ERROR.PAUSED;
        } else if (client[kPipelining] === 1) {
          setImmediate(resume, client);
        } else {
          resume(client);
        }
      }
    };
    function onParserTimeout(parser) {
      const { socket, timeoutType, client } = parser;
      if (timeoutType === TIMEOUT_HEADERS) {
        if (!socket[kWriting] || socket.writableNeedDrain || client[kRunning] > 1) {
          assert(!parser.paused, "cannot be paused while waiting for headers");
          util.destroy(socket, new HeadersTimeoutError());
        }
      } else if (timeoutType === TIMEOUT_BODY) {
        if (!parser.paused) {
          util.destroy(socket, new BodyTimeoutError());
        }
      } else if (timeoutType === TIMEOUT_IDLE) {
        assert(client[kRunning] === 0 && client[kKeepAliveTimeoutValue]);
        util.destroy(socket, new InformationalError("socket idle timeout"));
      }
    }
    function onSocketReadable() {
      const { [kParser]: parser } = this;
      parser.readMore();
    }
    function onSocketError(err) {
      const { [kParser]: parser } = this;
      assert(err.code !== "ERR_TLS_CERT_ALTNAME_INVALID");
      if (err.code === "ECONNRESET" && parser.statusCode && !parser.shouldKeepAlive) {
        parser.onMessageComplete();
        return;
      }
      this[kError] = err;
      onError(this[kClient], err);
    }
    function onError(client, err) {
      if (client[kRunning] === 0 && err.code !== "UND_ERR_INFO" && err.code !== "UND_ERR_SOCKET") {
        assert(client[kPendingIdx] === client[kRunningIdx]);
        const requests = client[kQueue].splice(client[kRunningIdx]);
        for (let i3 = 0; i3 < requests.length; i3++) {
          const request = requests[i3];
          errorRequest(client, request, err);
        }
        assert(client[kSize] === 0);
      }
    }
    function onSocketEnd() {
      const { [kParser]: parser } = this;
      if (parser.statusCode && !parser.shouldKeepAlive) {
        parser.onMessageComplete();
        return;
      }
      util.destroy(this, new SocketError("other side closed", util.getSocketInfo(this)));
    }
    function onSocketClose() {
      const { [kClient]: client } = this;
      if (!this[kError] && this[kParser].statusCode && !this[kParser].shouldKeepAlive) {
        this[kParser].onMessageComplete();
      }
      this[kParser].destroy();
      this[kParser] = null;
      const err = this[kError] || new SocketError("closed", util.getSocketInfo(this));
      client[kSocket] = null;
      if (client.destroyed) {
        assert(client[kPending] === 0);
        const requests = client[kQueue].splice(client[kRunningIdx]);
        for (let i3 = 0; i3 < requests.length; i3++) {
          const request = requests[i3];
          errorRequest(client, request, err);
        }
      } else if (client[kRunning] > 0 && err.code !== "UND_ERR_INFO") {
        const request = client[kQueue][client[kRunningIdx]];
        client[kQueue][client[kRunningIdx]++] = null;
        errorRequest(client, request, err);
      }
      client[kPendingIdx] = client[kRunningIdx];
      assert(client[kRunning] === 0);
      client.emit("disconnect", client[kUrl], [client], err);
      resume(client);
    }
    async function connect(client) {
      assert(!client[kConnecting]);
      assert(!client[kSocket]);
      let { host, hostname, protocol, port } = client[kUrl];
      if (hostname[0] === "[") {
        const idx = hostname.indexOf("]");
        assert(idx !== -1);
        const ip = hostname.substr(1, idx - 1);
        assert(net.isIP(ip));
        hostname = ip;
      }
      client[kConnecting] = true;
      if (channels.beforeConnect.hasSubscribers) {
        channels.beforeConnect.publish({
          connectParams: {
            host,
            hostname,
            protocol,
            port,
            servername: client[kServerName],
            localAddress: client[kLocalAddress]
          },
          connector: client[kConnector]
        });
      }
      try {
        const socket = await new Promise((resolve, reject) => {
          client[kConnector]({
            host,
            hostname,
            protocol,
            port,
            servername: client[kServerName],
            localAddress: client[kLocalAddress]
          }, (err, socket2) => {
            if (err) {
              reject(err);
            } else {
              resolve(socket2);
            }
          });
        });
        if (!llhttpInstance) {
          llhttpInstance = await llhttpPromise;
          llhttpPromise = null;
        }
        client[kConnecting] = false;
        assert(socket);
        socket[kNoRef] = false;
        socket[kWriting] = false;
        socket[kReset] = false;
        socket[kBlocking] = false;
        socket[kError] = null;
        socket[kParser] = new Parser(client, socket, llhttpInstance);
        socket[kClient] = client;
        socket[kCounter] = 0;
        socket[kMaxRequests] = client[kMaxRequests];
        socket.on("error", onSocketError).on("readable", onSocketReadable).on("end", onSocketEnd).on("close", onSocketClose);
        client[kSocket] = socket;
        if (channels.connected.hasSubscribers) {
          channels.connected.publish({
            connectParams: {
              host,
              hostname,
              protocol,
              port,
              servername: client[kServerName],
              localAddress: client[kLocalAddress]
            },
            connector: client[kConnector],
            socket
          });
        }
        client.emit("connect", client[kUrl], [client]);
      } catch (err) {
        client[kConnecting] = false;
        if (channels.connectError.hasSubscribers) {
          channels.connectError.publish({
            connectParams: {
              host,
              hostname,
              protocol,
              port,
              servername: client[kServerName],
              localAddress: client[kLocalAddress]
            },
            connector: client[kConnector],
            error: err
          });
        }
        if (err.code === "ERR_TLS_CERT_ALTNAME_INVALID") {
          assert(client[kRunning] === 0);
          while (client[kPending] > 0 && client[kQueue][client[kPendingIdx]].servername === client[kServerName]) {
            const request = client[kQueue][client[kPendingIdx]++];
            errorRequest(client, request, err);
          }
        } else {
          onError(client, err);
        }
        client.emit("connectionError", client[kUrl], [client], err);
      }
      resume(client);
    }
    function emitDrain(client) {
      client[kNeedDrain] = 0;
      client.emit("drain", client[kUrl], [client]);
    }
    function resume(client, sync) {
      if (client[kResuming] === 2) {
        return;
      }
      client[kResuming] = 2;
      _resume(client, sync);
      client[kResuming] = 0;
      if (client[kRunningIdx] > 256) {
        client[kQueue].splice(0, client[kRunningIdx]);
        client[kPendingIdx] -= client[kRunningIdx];
        client[kRunningIdx] = 0;
      }
    }
    function _resume(client, sync) {
      while (true) {
        if (client.destroyed) {
          assert(client[kPending] === 0);
          return;
        }
        if (client.closed && !client[kSize]) {
          client.destroy();
          return;
        }
        const socket = client[kSocket];
        if (socket && !socket.destroyed) {
          if (client[kSize] === 0) {
            if (!socket[kNoRef] && socket.unref) {
              socket.unref();
              socket[kNoRef] = true;
            }
          } else if (socket[kNoRef] && socket.ref) {
            socket.ref();
            socket[kNoRef] = false;
          }
          if (client[kSize] === 0) {
            if (socket[kParser].timeoutType !== TIMEOUT_IDLE) {
              socket[kParser].setTimeout(client[kKeepAliveTimeoutValue], TIMEOUT_IDLE);
            }
          } else if (client[kRunning] > 0 && socket[kParser].statusCode < 200) {
            if (socket[kParser].timeoutType !== TIMEOUT_HEADERS) {
              const request2 = client[kQueue][client[kRunningIdx]];
              const headersTimeout = request2.headersTimeout != null ? request2.headersTimeout : client[kHeadersTimeout];
              socket[kParser].setTimeout(headersTimeout, TIMEOUT_HEADERS);
            }
          }
        }
        if (client[kBusy]) {
          client[kNeedDrain] = 2;
        } else if (client[kNeedDrain] === 2) {
          if (sync) {
            client[kNeedDrain] = 1;
            process.nextTick(emitDrain, client);
          } else {
            emitDrain(client);
          }
          continue;
        }
        if (client[kPending] === 0) {
          return;
        }
        if (client[kRunning] >= (client[kPipelining] || 1)) {
          return;
        }
        const request = client[kQueue][client[kPendingIdx]];
        if (client[kUrl].protocol === "https:" && client[kServerName] !== request.servername) {
          if (client[kRunning] > 0) {
            return;
          }
          client[kServerName] = request.servername;
          if (socket && socket.servername !== request.servername) {
            util.destroy(socket, new InformationalError("servername changed"));
            return;
          }
        }
        if (client[kConnecting]) {
          return;
        }
        if (!socket) {
          connect(client);
          return;
        }
        if (socket.destroyed || socket[kWriting] || socket[kReset] || socket[kBlocking]) {
          return;
        }
        if (client[kRunning] > 0 && !request.idempotent) {
          return;
        }
        if (client[kRunning] > 0 && (request.upgrade || request.method === "CONNECT")) {
          return;
        }
        if (util.isStream(request.body) && util.bodyLength(request.body) === 0) {
          request.body.on(
            "data",
            /* istanbul ignore next */
            function() {
              assert(false);
            }
          ).on("error", function(err) {
            errorRequest(client, request, err);
          }).on("end", function() {
            util.destroy(this);
          });
          request.body = null;
        }
        if (client[kRunning] > 0 && (util.isStream(request.body) || util.isAsyncIterable(request.body))) {
          return;
        }
        if (!request.aborted && write(client, request)) {
          client[kPendingIdx]++;
        } else {
          client[kQueue].splice(client[kPendingIdx], 1);
        }
      }
    }
    function write(client, request) {
      const { body, method, path, host, upgrade, headers, blocking, reset: reset2 } = request;
      const expectsPayload = method === "PUT" || method === "POST" || method === "PATCH";
      if (body && typeof body.read === "function") {
        body.read(0);
      }
      let contentLength = util.bodyLength(body);
      if (contentLength === null) {
        contentLength = request.contentLength;
      }
      if (contentLength === 0 && !expectsPayload) {
        contentLength = null;
      }
      if (request.contentLength !== null && request.contentLength !== contentLength) {
        if (client[kStrictContentLength]) {
          errorRequest(client, request, new RequestContentLengthMismatchError());
          return false;
        }
        process.emitWarning(new RequestContentLengthMismatchError());
      }
      const socket = client[kSocket];
      try {
        request.onConnect((err) => {
          if (request.aborted || request.completed) {
            return;
          }
          errorRequest(client, request, err || new RequestAbortedError());
          util.destroy(socket, new InformationalError("aborted"));
        });
      } catch (err) {
        errorRequest(client, request, err);
      }
      if (request.aborted) {
        return false;
      }
      if (method === "HEAD") {
        socket[kReset] = true;
      }
      if (upgrade || method === "CONNECT") {
        socket[kReset] = true;
      }
      if (reset2 != null) {
        socket[kReset] = reset2;
      }
      if (client[kMaxRequests] && socket[kCounter]++ >= client[kMaxRequests]) {
        socket[kReset] = true;
      }
      if (blocking) {
        socket[kBlocking] = true;
      }
      let header = `${method} ${path} HTTP/1.1\r
`;
      if (typeof host === "string") {
        header += `host: ${host}\r
`;
      } else {
        header += client[kHostHeader];
      }
      if (upgrade) {
        header += `connection: upgrade\r
upgrade: ${upgrade}\r
`;
      } else if (client[kPipelining] && !socket[kReset]) {
        header += "connection: keep-alive\r\n";
      } else {
        header += "connection: close\r\n";
      }
      if (headers) {
        header += headers;
      }
      if (channels.sendHeaders.hasSubscribers) {
        channels.sendHeaders.publish({ request, headers: header, socket });
      }
      if (!body) {
        if (contentLength === 0) {
          socket.write(`${header}content-length: 0\r
\r
`, "ascii");
        } else {
          assert(contentLength === null, "no body must not have content length");
          socket.write(`${header}\r
`, "ascii");
        }
        request.onRequestSent();
      } else if (util.isBuffer(body)) {
        assert(contentLength === body.byteLength, "buffer body must have content length");
        socket.cork();
        socket.write(`${header}content-length: ${contentLength}\r
\r
`, "ascii");
        socket.write(body);
        socket.uncork();
        request.onBodySent(body);
        request.onRequestSent();
        if (!expectsPayload) {
          socket[kReset] = true;
        }
      } else if (util.isBlobLike(body)) {
        if (typeof body.stream === "function") {
          writeIterable({ body: body.stream(), client, request, socket, contentLength, header, expectsPayload });
        } else {
          writeBlob({ body, client, request, socket, contentLength, header, expectsPayload });
        }
      } else if (util.isStream(body)) {
        writeStream({ body, client, request, socket, contentLength, header, expectsPayload });
      } else if (util.isIterable(body)) {
        writeIterable({ body, client, request, socket, contentLength, header, expectsPayload });
      } else {
        assert(false);
      }
      return true;
    }
    function writeStream({ body, client, request, socket, contentLength, header, expectsPayload }) {
      assert(contentLength !== 0 || client[kRunning] === 0, "stream body cannot be pipelined");
      let finished = false;
      const writer = new AsyncWriter({ socket, request, contentLength, client, expectsPayload, header });
      const onData = function(chunk) {
        try {
          assert(!finished);
          if (!writer.write(chunk) && this.pause) {
            this.pause();
          }
        } catch (err) {
          util.destroy(this, err);
        }
      };
      const onDrain = function() {
        assert(!finished);
        if (body.resume) {
          body.resume();
        }
      };
      const onAbort = function() {
        onFinished(new RequestAbortedError());
      };
      const onFinished = function(err) {
        if (finished) {
          return;
        }
        finished = true;
        assert(socket.destroyed || socket[kWriting] && client[kRunning] <= 1);
        socket.off("drain", onDrain).off("error", onFinished);
        body.removeListener("data", onData).removeListener("end", onFinished).removeListener("error", onFinished).removeListener("close", onAbort);
        if (!err) {
          try {
            writer.end();
          } catch (er) {
            err = er;
          }
        }
        writer.destroy(err);
        if (err && (err.code !== "UND_ERR_INFO" || err.message !== "reset")) {
          util.destroy(body, err);
        } else {
          util.destroy(body);
        }
      };
      body.on("data", onData).on("end", onFinished).on("error", onFinished).on("close", onAbort);
      if (body.resume) {
        body.resume();
      }
      socket.on("drain", onDrain).on("error", onFinished);
    }
    async function writeBlob({ body, client, request, socket, contentLength, header, expectsPayload }) {
      assert(contentLength === body.size, "blob body must have content length");
      try {
        if (contentLength != null && contentLength !== body.size) {
          throw new RequestContentLengthMismatchError();
        }
        const buffer2 = Buffer.from(await body.arrayBuffer());
        socket.cork();
        socket.write(`${header}content-length: ${contentLength}\r
\r
`, "ascii");
        socket.write(buffer2);
        socket.uncork();
        request.onBodySent(buffer2);
        request.onRequestSent();
        if (!expectsPayload) {
          socket[kReset] = true;
        }
        resume(client);
      } catch (err) {
        util.destroy(socket, err);
      }
    }
    async function writeIterable({ body, client, request, socket, contentLength, header, expectsPayload }) {
      assert(contentLength !== 0 || client[kRunning] === 0, "iterator body cannot be pipelined");
      let callback = null;
      function onDrain() {
        if (callback) {
          const cb = callback;
          callback = null;
          cb();
        }
      }
      const waitForDrain = () => new Promise((resolve, reject) => {
        assert(callback === null);
        if (socket[kError]) {
          reject(socket[kError]);
        } else {
          callback = resolve;
        }
      });
      socket.on("close", onDrain).on("drain", onDrain);
      const writer = new AsyncWriter({ socket, request, contentLength, client, expectsPayload, header });
      try {
        for await (const chunk of body) {
          if (socket[kError]) {
            throw socket[kError];
          }
          if (!writer.write(chunk)) {
            await waitForDrain();
          }
        }
        writer.end();
      } catch (err) {
        writer.destroy(err);
      } finally {
        socket.off("close", onDrain).off("drain", onDrain);
      }
    }
    var AsyncWriter = class {
      constructor({ socket, request, contentLength, client, expectsPayload, header }) {
        this.socket = socket;
        this.request = request;
        this.contentLength = contentLength;
        this.client = client;
        this.bytesWritten = 0;
        this.expectsPayload = expectsPayload;
        this.header = header;
        socket[kWriting] = true;
      }
      write(chunk) {
        const { socket, request, contentLength, client, bytesWritten, expectsPayload, header } = this;
        if (socket[kError]) {
          throw socket[kError];
        }
        if (socket.destroyed) {
          return false;
        }
        const len = Buffer.byteLength(chunk);
        if (!len) {
          return true;
        }
        if (contentLength !== null && bytesWritten + len > contentLength) {
          if (client[kStrictContentLength]) {
            throw new RequestContentLengthMismatchError();
          }
          process.emitWarning(new RequestContentLengthMismatchError());
        }
        if (bytesWritten === 0) {
          if (!expectsPayload) {
            socket[kReset] = true;
          }
          if (contentLength === null) {
            socket.write(`${header}transfer-encoding: chunked\r
`, "ascii");
          } else {
            socket.write(`${header}content-length: ${contentLength}\r
\r
`, "ascii");
          }
        }
        if (contentLength === null) {
          socket.write(`\r
${len.toString(16)}\r
`, "ascii");
        }
        this.bytesWritten += len;
        const ret = socket.write(chunk);
        request.onBodySent(chunk);
        if (!ret) {
          if (socket[kParser].timeout && socket[kParser].timeoutType === TIMEOUT_HEADERS) {
            if (socket[kParser].timeout.refresh) {
              socket[kParser].timeout.refresh();
            }
          }
        }
        return ret;
      }
      end() {
        const { socket, contentLength, client, bytesWritten, expectsPayload, header, request } = this;
        request.onRequestSent();
        socket[kWriting] = false;
        if (socket[kError]) {
          throw socket[kError];
        }
        if (socket.destroyed) {
          return;
        }
        if (bytesWritten === 0) {
          if (expectsPayload) {
            socket.write(`${header}content-length: 0\r
\r
`, "ascii");
          } else {
            socket.write(`${header}\r
`, "ascii");
          }
        } else if (contentLength === null) {
          socket.write("\r\n0\r\n\r\n", "ascii");
        }
        if (contentLength !== null && bytesWritten !== contentLength) {
          if (client[kStrictContentLength]) {
            throw new RequestContentLengthMismatchError();
          } else {
            process.emitWarning(new RequestContentLengthMismatchError());
          }
        }
        if (socket[kParser].timeout && socket[kParser].timeoutType === TIMEOUT_HEADERS) {
          if (socket[kParser].timeout.refresh) {
            socket[kParser].timeout.refresh();
          }
        }
        resume(client);
      }
      destroy(err) {
        const { socket, client } = this;
        socket[kWriting] = false;
        if (err) {
          assert(client[kRunning] <= 1, "pipeline should only contain this request");
          util.destroy(socket, err);
        }
      }
    };
    function errorRequest(client, request, err) {
      try {
        request.onError(err);
        assert(request.aborted);
      } catch (err2) {
        client.emit("error", err2);
      }
    }
    module2.exports = Client;
  }
});

// node_modules/undici/lib/node/fixed-queue.js
var require_fixed_queue = __commonJS({
  "node_modules/undici/lib/node/fixed-queue.js"(exports, module2) {
    "use strict";
    init_shims();
    var kSize = 2048;
    var kMask = kSize - 1;
    var FixedCircularBuffer = class {
      constructor() {
        this.bottom = 0;
        this.top = 0;
        this.list = new Array(kSize);
        this.next = null;
      }
      isEmpty() {
        return this.top === this.bottom;
      }
      isFull() {
        return (this.top + 1 & kMask) === this.bottom;
      }
      push(data) {
        this.list[this.top] = data;
        this.top = this.top + 1 & kMask;
      }
      shift() {
        const nextItem = this.list[this.bottom];
        if (nextItem === void 0)
          return null;
        this.list[this.bottom] = void 0;
        this.bottom = this.bottom + 1 & kMask;
        return nextItem;
      }
    };
    module2.exports = class FixedQueue {
      constructor() {
        this.head = this.tail = new FixedCircularBuffer();
      }
      isEmpty() {
        return this.head.isEmpty();
      }
      push(data) {
        if (this.head.isFull()) {
          this.head = this.head.next = new FixedCircularBuffer();
        }
        this.head.push(data);
      }
      shift() {
        const tail = this.tail;
        const next = tail.shift();
        if (tail.isEmpty() && tail.next !== null) {
          this.tail = tail.next;
        }
        return next;
      }
    };
  }
});

// node_modules/undici/lib/pool-stats.js
var require_pool_stats = __commonJS({
  "node_modules/undici/lib/pool-stats.js"(exports, module2) {
    init_shims();
    var { kFree, kConnected, kPending, kQueued, kRunning, kSize } = require_symbols();
    var kPool = Symbol("pool");
    var PoolStats = class {
      constructor(pool) {
        this[kPool] = pool;
      }
      get connected() {
        return this[kPool][kConnected];
      }
      get free() {
        return this[kPool][kFree];
      }
      get pending() {
        return this[kPool][kPending];
      }
      get queued() {
        return this[kPool][kQueued];
      }
      get running() {
        return this[kPool][kRunning];
      }
      get size() {
        return this[kPool][kSize];
      }
    };
    module2.exports = PoolStats;
  }
});

// node_modules/undici/lib/pool-base.js
var require_pool_base = __commonJS({
  "node_modules/undici/lib/pool-base.js"(exports, module2) {
    "use strict";
    init_shims();
    var DispatcherBase = require_dispatcher_base();
    var FixedQueue = require_fixed_queue();
    var { kConnected, kSize, kRunning, kPending, kQueued, kBusy, kFree, kUrl, kClose, kDestroy, kDispatch } = require_symbols();
    var PoolStats = require_pool_stats();
    var kClients = Symbol("clients");
    var kNeedDrain = Symbol("needDrain");
    var kQueue = Symbol("queue");
    var kClosedResolve = Symbol("closed resolve");
    var kOnDrain = Symbol("onDrain");
    var kOnConnect = Symbol("onConnect");
    var kOnDisconnect = Symbol("onDisconnect");
    var kOnConnectionError = Symbol("onConnectionError");
    var kGetDispatcher = Symbol("get dispatcher");
    var kAddClient = Symbol("add client");
    var kRemoveClient = Symbol("remove client");
    var kStats = Symbol("stats");
    var PoolBase = class extends DispatcherBase {
      constructor() {
        super();
        this[kQueue] = new FixedQueue();
        this[kClients] = [];
        this[kQueued] = 0;
        const pool = this;
        this[kOnDrain] = function onDrain(origin, targets) {
          const queue = pool[kQueue];
          let needDrain = false;
          while (!needDrain) {
            const item = queue.shift();
            if (!item) {
              break;
            }
            pool[kQueued]--;
            needDrain = !this.dispatch(item.opts, item.handler);
          }
          this[kNeedDrain] = needDrain;
          if (!this[kNeedDrain] && pool[kNeedDrain]) {
            pool[kNeedDrain] = false;
            pool.emit("drain", origin, [pool, ...targets]);
          }
          if (pool[kClosedResolve] && queue.isEmpty()) {
            Promise.all(pool[kClients].map((c) => c.close())).then(pool[kClosedResolve]);
          }
        };
        this[kOnConnect] = (origin, targets) => {
          pool.emit("connect", origin, [pool, ...targets]);
        };
        this[kOnDisconnect] = (origin, targets, err) => {
          pool.emit("disconnect", origin, [pool, ...targets], err);
        };
        this[kOnConnectionError] = (origin, targets, err) => {
          pool.emit("connectionError", origin, [pool, ...targets], err);
        };
        this[kStats] = new PoolStats(this);
      }
      get [kBusy]() {
        return this[kNeedDrain];
      }
      get [kConnected]() {
        return this[kClients].filter((client) => client[kConnected]).length;
      }
      get [kFree]() {
        return this[kClients].filter((client) => client[kConnected] && !client[kNeedDrain]).length;
      }
      get [kPending]() {
        let ret = this[kQueued];
        for (const { [kPending]: pending } of this[kClients]) {
          ret += pending;
        }
        return ret;
      }
      get [kRunning]() {
        let ret = 0;
        for (const { [kRunning]: running } of this[kClients]) {
          ret += running;
        }
        return ret;
      }
      get [kSize]() {
        let ret = this[kQueued];
        for (const { [kSize]: size } of this[kClients]) {
          ret += size;
        }
        return ret;
      }
      get stats() {
        return this[kStats];
      }
      async [kClose]() {
        if (this[kQueue].isEmpty()) {
          return Promise.all(this[kClients].map((c) => c.close()));
        } else {
          return new Promise((resolve) => {
            this[kClosedResolve] = resolve;
          });
        }
      }
      async [kDestroy](err) {
        while (true) {
          const item = this[kQueue].shift();
          if (!item) {
            break;
          }
          item.handler.onError(err);
        }
        return Promise.all(this[kClients].map((c) => c.destroy(err)));
      }
      [kDispatch](opts, handler2) {
        const dispatcher = this[kGetDispatcher]();
        if (!dispatcher) {
          this[kNeedDrain] = true;
          this[kQueue].push({ opts, handler: handler2 });
          this[kQueued]++;
        } else if (!dispatcher.dispatch(opts, handler2)) {
          dispatcher[kNeedDrain] = true;
          this[kNeedDrain] = !this[kGetDispatcher]();
        }
        return !this[kNeedDrain];
      }
      [kAddClient](client) {
        client.on("drain", this[kOnDrain]).on("connect", this[kOnConnect]).on("disconnect", this[kOnDisconnect]).on("connectionError", this[kOnConnectionError]);
        this[kClients].push(client);
        if (this[kNeedDrain]) {
          process.nextTick(() => {
            if (this[kNeedDrain]) {
              this[kOnDrain](client[kUrl], [this, client]);
            }
          });
        }
        return this;
      }
      [kRemoveClient](client) {
        client.close(() => {
          const idx = this[kClients].indexOf(client);
          if (idx !== -1) {
            this[kClients].splice(idx, 1);
          }
        });
        this[kNeedDrain] = this[kClients].some((dispatcher) => !dispatcher[kNeedDrain] && dispatcher.closed !== true && dispatcher.destroyed !== true);
      }
    };
    module2.exports = {
      PoolBase,
      kClients,
      kNeedDrain,
      kAddClient,
      kRemoveClient,
      kGetDispatcher
    };
  }
});

// node_modules/undici/lib/pool.js
var require_pool = __commonJS({
  "node_modules/undici/lib/pool.js"(exports, module2) {
    "use strict";
    init_shims();
    var {
      PoolBase,
      kClients,
      kNeedDrain,
      kAddClient,
      kGetDispatcher
    } = require_pool_base();
    var Client = require_client();
    var {
      InvalidArgumentError
    } = require_errors();
    var util = require_util();
    var { kUrl, kInterceptors } = require_symbols();
    var buildConnector = require_connect();
    var kOptions = Symbol("options");
    var kConnections = Symbol("connections");
    var kFactory = Symbol("factory");
    function defaultFactory(origin, opts) {
      return new Client(origin, opts);
    }
    var Pool = class extends PoolBase {
      constructor(origin, {
        connections,
        factory = defaultFactory,
        connect,
        connectTimeout,
        tls,
        maxCachedSessions,
        socketPath,
        autoSelectFamily,
        autoSelectFamilyAttemptTimeout,
        ...options2
      } = {}) {
        super();
        if (connections != null && (!Number.isFinite(connections) || connections < 0)) {
          throw new InvalidArgumentError("invalid connections");
        }
        if (typeof factory !== "function") {
          throw new InvalidArgumentError("factory must be a function.");
        }
        if (connect != null && typeof connect !== "function" && typeof connect !== "object") {
          throw new InvalidArgumentError("connect must be a function or an object");
        }
        if (typeof connect !== "function") {
          connect = buildConnector({
            ...tls,
            maxCachedSessions,
            socketPath,
            timeout: connectTimeout == null ? 1e4 : connectTimeout,
            ...util.nodeHasAutoSelectFamily && autoSelectFamily ? { autoSelectFamily, autoSelectFamilyAttemptTimeout } : void 0,
            ...connect
          });
        }
        this[kInterceptors] = options2.interceptors && options2.interceptors.Pool && Array.isArray(options2.interceptors.Pool) ? options2.interceptors.Pool : [];
        this[kConnections] = connections || null;
        this[kUrl] = util.parseOrigin(origin);
        this[kOptions] = { ...util.deepClone(options2), connect };
        this[kOptions].interceptors = options2.interceptors ? { ...options2.interceptors } : void 0;
        this[kFactory] = factory;
      }
      [kGetDispatcher]() {
        let dispatcher = this[kClients].find((dispatcher2) => !dispatcher2[kNeedDrain]);
        if (dispatcher) {
          return dispatcher;
        }
        if (!this[kConnections] || this[kClients].length < this[kConnections]) {
          dispatcher = this[kFactory](this[kUrl], this[kOptions]);
          this[kAddClient](dispatcher);
        }
        return dispatcher;
      }
    };
    module2.exports = Pool;
  }
});

// node_modules/undici/lib/balanced-pool.js
var require_balanced_pool = __commonJS({
  "node_modules/undici/lib/balanced-pool.js"(exports, module2) {
    "use strict";
    init_shims();
    var {
      BalancedPoolMissingUpstreamError,
      InvalidArgumentError
    } = require_errors();
    var {
      PoolBase,
      kClients,
      kNeedDrain,
      kAddClient,
      kRemoveClient,
      kGetDispatcher
    } = require_pool_base();
    var Pool = require_pool();
    var { kUrl, kInterceptors } = require_symbols();
    var { parseOrigin } = require_util();
    var kFactory = Symbol("factory");
    var kOptions = Symbol("options");
    var kGreatestCommonDivisor = Symbol("kGreatestCommonDivisor");
    var kCurrentWeight = Symbol("kCurrentWeight");
    var kIndex = Symbol("kIndex");
    var kWeight = Symbol("kWeight");
    var kMaxWeightPerServer = Symbol("kMaxWeightPerServer");
    var kErrorPenalty = Symbol("kErrorPenalty");
    function getGreatestCommonDivisor(a, b) {
      if (b === 0)
        return a;
      return getGreatestCommonDivisor(b, a % b);
    }
    function defaultFactory(origin, opts) {
      return new Pool(origin, opts);
    }
    var BalancedPool = class extends PoolBase {
      constructor(upstreams = [], { factory = defaultFactory, ...opts } = {}) {
        super();
        this[kOptions] = opts;
        this[kIndex] = -1;
        this[kCurrentWeight] = 0;
        this[kMaxWeightPerServer] = this[kOptions].maxWeightPerServer || 100;
        this[kErrorPenalty] = this[kOptions].errorPenalty || 15;
        if (!Array.isArray(upstreams)) {
          upstreams = [upstreams];
        }
        if (typeof factory !== "function") {
          throw new InvalidArgumentError("factory must be a function.");
        }
        this[kInterceptors] = opts.interceptors && opts.interceptors.BalancedPool && Array.isArray(opts.interceptors.BalancedPool) ? opts.interceptors.BalancedPool : [];
        this[kFactory] = factory;
        for (const upstream of upstreams) {
          this.addUpstream(upstream);
        }
        this._updateBalancedPoolStats();
      }
      addUpstream(upstream) {
        const upstreamOrigin = parseOrigin(upstream).origin;
        if (this[kClients].find((pool2) => pool2[kUrl].origin === upstreamOrigin && pool2.closed !== true && pool2.destroyed !== true)) {
          return this;
        }
        const pool = this[kFactory](upstreamOrigin, Object.assign({}, this[kOptions]));
        this[kAddClient](pool);
        pool.on("connect", () => {
          pool[kWeight] = Math.min(this[kMaxWeightPerServer], pool[kWeight] + this[kErrorPenalty]);
        });
        pool.on("connectionError", () => {
          pool[kWeight] = Math.max(1, pool[kWeight] - this[kErrorPenalty]);
          this._updateBalancedPoolStats();
        });
        pool.on("disconnect", (...args) => {
          const err = args[2];
          if (err && err.code === "UND_ERR_SOCKET") {
            pool[kWeight] = Math.max(1, pool[kWeight] - this[kErrorPenalty]);
            this._updateBalancedPoolStats();
          }
        });
        for (const client of this[kClients]) {
          client[kWeight] = this[kMaxWeightPerServer];
        }
        this._updateBalancedPoolStats();
        return this;
      }
      _updateBalancedPoolStats() {
        this[kGreatestCommonDivisor] = this[kClients].map((p4) => p4[kWeight]).reduce(getGreatestCommonDivisor, 0);
      }
      removeUpstream(upstream) {
        const upstreamOrigin = parseOrigin(upstream).origin;
        const pool = this[kClients].find((pool2) => pool2[kUrl].origin === upstreamOrigin && pool2.closed !== true && pool2.destroyed !== true);
        if (pool) {
          this[kRemoveClient](pool);
        }
        return this;
      }
      get upstreams() {
        return this[kClients].filter((dispatcher) => dispatcher.closed !== true && dispatcher.destroyed !== true).map((p4) => p4[kUrl].origin);
      }
      [kGetDispatcher]() {
        if (this[kClients].length === 0) {
          throw new BalancedPoolMissingUpstreamError();
        }
        const dispatcher = this[kClients].find((dispatcher2) => !dispatcher2[kNeedDrain] && dispatcher2.closed !== true && dispatcher2.destroyed !== true);
        if (!dispatcher) {
          return;
        }
        const allClientsBusy = this[kClients].map((pool) => pool[kNeedDrain]).reduce((a, b) => a && b, true);
        if (allClientsBusy) {
          return;
        }
        let counter = 0;
        let maxWeightIndex = this[kClients].findIndex((pool) => !pool[kNeedDrain]);
        while (counter++ < this[kClients].length) {
          this[kIndex] = (this[kIndex] + 1) % this[kClients].length;
          const pool = this[kClients][this[kIndex]];
          if (pool[kWeight] > this[kClients][maxWeightIndex][kWeight] && !pool[kNeedDrain]) {
            maxWeightIndex = this[kIndex];
          }
          if (this[kIndex] === 0) {
            this[kCurrentWeight] = this[kCurrentWeight] - this[kGreatestCommonDivisor];
            if (this[kCurrentWeight] <= 0) {
              this[kCurrentWeight] = this[kMaxWeightPerServer];
            }
          }
          if (pool[kWeight] >= this[kCurrentWeight] && !pool[kNeedDrain]) {
            return pool;
          }
        }
        this[kCurrentWeight] = this[kClients][maxWeightIndex][kWeight];
        this[kIndex] = maxWeightIndex;
        return this[kClients][maxWeightIndex];
      }
    };
    module2.exports = BalancedPool;
  }
});

// node_modules/undici/lib/compat/dispatcher-weakref.js
var require_dispatcher_weakref = __commonJS({
  "node_modules/undici/lib/compat/dispatcher-weakref.js"(exports, module2) {
    "use strict";
    init_shims();
    var { kConnected, kSize } = require_symbols();
    var CompatWeakRef = class {
      constructor(value) {
        this.value = value;
      }
      deref() {
        return this.value[kConnected] === 0 && this.value[kSize] === 0 ? void 0 : this.value;
      }
    };
    var CompatFinalizer = class {
      constructor(finalizer) {
        this.finalizer = finalizer;
      }
      register(dispatcher, key2) {
        dispatcher.on("disconnect", () => {
          if (dispatcher[kConnected] === 0 && dispatcher[kSize] === 0) {
            this.finalizer(key2);
          }
        });
      }
    };
    module2.exports = function() {
      return {
        WeakRef: global.WeakRef || CompatWeakRef,
        FinalizationRegistry: global.FinalizationRegistry || CompatFinalizer
      };
    };
  }
});

// node_modules/undici/lib/agent.js
var require_agent = __commonJS({
  "node_modules/undici/lib/agent.js"(exports, module2) {
    "use strict";
    init_shims();
    var { InvalidArgumentError } = require_errors();
    var { kClients, kRunning, kClose, kDestroy, kDispatch, kInterceptors } = require_symbols();
    var DispatcherBase = require_dispatcher_base();
    var Pool = require_pool();
    var Client = require_client();
    var util = require_util();
    var createRedirectInterceptor = require_redirectInterceptor();
    var { WeakRef: WeakRef2, FinalizationRegistry } = require_dispatcher_weakref()();
    var kOnConnect = Symbol("onConnect");
    var kOnDisconnect = Symbol("onDisconnect");
    var kOnConnectionError = Symbol("onConnectionError");
    var kMaxRedirections = Symbol("maxRedirections");
    var kOnDrain = Symbol("onDrain");
    var kFactory = Symbol("factory");
    var kFinalizer = Symbol("finalizer");
    var kOptions = Symbol("options");
    function defaultFactory(origin, opts) {
      return opts && opts.connections === 1 ? new Client(origin, opts) : new Pool(origin, opts);
    }
    var Agent = class extends DispatcherBase {
      constructor({ factory = defaultFactory, maxRedirections = 0, connect, ...options2 } = {}) {
        super();
        if (typeof factory !== "function") {
          throw new InvalidArgumentError("factory must be a function.");
        }
        if (connect != null && typeof connect !== "function" && typeof connect !== "object") {
          throw new InvalidArgumentError("connect must be a function or an object");
        }
        if (!Number.isInteger(maxRedirections) || maxRedirections < 0) {
          throw new InvalidArgumentError("maxRedirections must be a positive number");
        }
        if (connect && typeof connect !== "function") {
          connect = { ...connect };
        }
        this[kInterceptors] = options2.interceptors && options2.interceptors.Agent && Array.isArray(options2.interceptors.Agent) ? options2.interceptors.Agent : [createRedirectInterceptor({ maxRedirections })];
        this[kOptions] = { ...util.deepClone(options2), connect };
        this[kOptions].interceptors = options2.interceptors ? { ...options2.interceptors } : void 0;
        this[kMaxRedirections] = maxRedirections;
        this[kFactory] = factory;
        this[kClients] = /* @__PURE__ */ new Map();
        this[kFinalizer] = new FinalizationRegistry(
          /* istanbul ignore next: gc is undeterministic */
          (key2) => {
            const ref = this[kClients].get(key2);
            if (ref !== void 0 && ref.deref() === void 0) {
              this[kClients].delete(key2);
            }
          }
        );
        const agent = this;
        this[kOnDrain] = (origin, targets) => {
          agent.emit("drain", origin, [agent, ...targets]);
        };
        this[kOnConnect] = (origin, targets) => {
          agent.emit("connect", origin, [agent, ...targets]);
        };
        this[kOnDisconnect] = (origin, targets, err) => {
          agent.emit("disconnect", origin, [agent, ...targets], err);
        };
        this[kOnConnectionError] = (origin, targets, err) => {
          agent.emit("connectionError", origin, [agent, ...targets], err);
        };
      }
      get [kRunning]() {
        let ret = 0;
        for (const ref of this[kClients].values()) {
          const client = ref.deref();
          if (client) {
            ret += client[kRunning];
          }
        }
        return ret;
      }
      [kDispatch](opts, handler2) {
        let key2;
        if (opts.origin && (typeof opts.origin === "string" || opts.origin instanceof URL)) {
          key2 = String(opts.origin);
        } else {
          throw new InvalidArgumentError("opts.origin must be a non-empty string or URL.");
        }
        const ref = this[kClients].get(key2);
        let dispatcher = ref ? ref.deref() : null;
        if (!dispatcher) {
          dispatcher = this[kFactory](opts.origin, this[kOptions]).on("drain", this[kOnDrain]).on("connect", this[kOnConnect]).on("disconnect", this[kOnDisconnect]).on("connectionError", this[kOnConnectionError]);
          this[kClients].set(key2, new WeakRef2(dispatcher));
          this[kFinalizer].register(dispatcher, key2);
        }
        return dispatcher.dispatch(opts, handler2);
      }
      async [kClose]() {
        const closePromises = [];
        for (const ref of this[kClients].values()) {
          const client = ref.deref();
          if (client) {
            closePromises.push(client.close());
          }
        }
        await Promise.all(closePromises);
      }
      async [kDestroy](err) {
        const destroyPromises = [];
        for (const ref of this[kClients].values()) {
          const client = ref.deref();
          if (client) {
            destroyPromises.push(client.destroy(err));
          }
        }
        await Promise.all(destroyPromises);
      }
    };
    module2.exports = Agent;
  }
});

// node_modules/undici/lib/api/readable.js
var require_readable = __commonJS({
  "node_modules/undici/lib/api/readable.js"(exports, module2) {
    "use strict";
    init_shims();
    var assert = require("assert");
    var { Readable } = require("stream");
    var { RequestAbortedError, NotSupportedError } = require_errors();
    var util = require_util();
    var { ReadableStreamFrom, toUSVString } = require_util();
    var Blob2;
    var kConsume = Symbol("kConsume");
    var kReading = Symbol("kReading");
    var kBody = Symbol("kBody");
    var kAbort = Symbol("abort");
    var kContentType = Symbol("kContentType");
    module2.exports = class BodyReadable extends Readable {
      constructor(resume, abort, contentType = "") {
        super({
          autoDestroy: true,
          read: resume,
          highWaterMark: 64 * 1024
          // Same as nodejs fs streams.
        });
        this._readableState.dataEmitted = false;
        this[kAbort] = abort;
        this[kConsume] = null;
        this[kBody] = null;
        this[kContentType] = contentType;
        this[kReading] = false;
      }
      destroy(err) {
        if (this.destroyed) {
          return this;
        }
        if (!err && !this._readableState.endEmitted) {
          err = new RequestAbortedError();
        }
        if (err) {
          this[kAbort]();
        }
        return super.destroy(err);
      }
      emit(ev, ...args) {
        if (ev === "data") {
          this._readableState.dataEmitted = true;
        } else if (ev === "error") {
          this._readableState.errorEmitted = true;
        }
        return super.emit(ev, ...args);
      }
      on(ev, ...args) {
        if (ev === "data" || ev === "readable") {
          this[kReading] = true;
        }
        return super.on(ev, ...args);
      }
      addListener(ev, ...args) {
        return this.on(ev, ...args);
      }
      off(ev, ...args) {
        const ret = super.off(ev, ...args);
        if (ev === "data" || ev === "readable") {
          this[kReading] = this.listenerCount("data") > 0 || this.listenerCount("readable") > 0;
        }
        return ret;
      }
      removeListener(ev, ...args) {
        return this.off(ev, ...args);
      }
      push(chunk) {
        if (this[kConsume] && chunk !== null && this.readableLength === 0) {
          consumePush(this[kConsume], chunk);
          return this[kReading] ? super.push(chunk) : true;
        }
        return super.push(chunk);
      }
      // https://fetch.spec.whatwg.org/#dom-body-text
      async text() {
        return consume(this, "text");
      }
      // https://fetch.spec.whatwg.org/#dom-body-json
      async json() {
        return consume(this, "json");
      }
      // https://fetch.spec.whatwg.org/#dom-body-blob
      async blob() {
        return consume(this, "blob");
      }
      // https://fetch.spec.whatwg.org/#dom-body-arraybuffer
      async arrayBuffer() {
        return consume(this, "arrayBuffer");
      }
      // https://fetch.spec.whatwg.org/#dom-body-formdata
      async formData() {
        throw new NotSupportedError();
      }
      // https://fetch.spec.whatwg.org/#dom-body-bodyused
      get bodyUsed() {
        return util.isDisturbed(this);
      }
      // https://fetch.spec.whatwg.org/#dom-body-body
      get body() {
        if (!this[kBody]) {
          this[kBody] = ReadableStreamFrom(this);
          if (this[kConsume]) {
            this[kBody].getReader();
            assert(this[kBody].locked);
          }
        }
        return this[kBody];
      }
      async dump(opts) {
        let limit = opts && Number.isFinite(opts.limit) ? opts.limit : 262144;
        try {
          for await (const chunk of this) {
            limit -= Buffer.byteLength(chunk);
            if (limit < 0) {
              return;
            }
          }
        } catch {
        }
      }
    };
    function isLocked(self) {
      return self[kBody] && self[kBody].locked === true || self[kConsume];
    }
    function isUnusable(self) {
      return util.isDisturbed(self) || isLocked(self);
    }
    async function consume(stream, type) {
      if (isUnusable(stream)) {
        throw new TypeError("unusable");
      }
      assert(!stream[kConsume]);
      return new Promise((resolve, reject) => {
        stream[kConsume] = {
          type,
          stream,
          resolve,
          reject,
          length: 0,
          body: []
        };
        stream.on("error", function(err) {
          consumeFinish(this[kConsume], err);
        }).on("close", function() {
          if (this[kConsume].body !== null) {
            consumeFinish(this[kConsume], new RequestAbortedError());
          }
        });
        process.nextTick(consumeStart, stream[kConsume]);
      });
    }
    function consumeStart(consume2) {
      if (consume2.body === null) {
        return;
      }
      const { _readableState: state } = consume2.stream;
      for (const chunk of state.buffer) {
        consumePush(consume2, chunk);
      }
      if (state.endEmitted) {
        consumeEnd(this[kConsume]);
      } else {
        consume2.stream.on("end", function() {
          consumeEnd(this[kConsume]);
        });
      }
      consume2.stream.resume();
      while (consume2.stream.read() != null) {
      }
    }
    function consumeEnd(consume2) {
      const { type, body, resolve, stream, length } = consume2;
      try {
        if (type === "text") {
          resolve(toUSVString(Buffer.concat(body)));
        } else if (type === "json") {
          resolve(JSON.parse(Buffer.concat(body)));
        } else if (type === "arrayBuffer") {
          const dst = new Uint8Array(length);
          let pos = 0;
          for (const buf of body) {
            dst.set(buf, pos);
            pos += buf.byteLength;
          }
          resolve(dst);
        } else if (type === "blob") {
          if (!Blob2) {
            Blob2 = require("buffer").Blob;
          }
          resolve(new Blob2(body, { type: stream[kContentType] }));
        }
        consumeFinish(consume2);
      } catch (err) {
        stream.destroy(err);
      }
    }
    function consumePush(consume2, chunk) {
      consume2.length += chunk.length;
      consume2.body.push(chunk);
    }
    function consumeFinish(consume2, err) {
      if (consume2.body === null) {
        return;
      }
      if (err) {
        consume2.reject(err);
      } else {
        consume2.resolve();
      }
      consume2.type = null;
      consume2.stream = null;
      consume2.resolve = null;
      consume2.reject = null;
      consume2.length = 0;
      consume2.body = null;
    }
  }
});

// node_modules/undici/lib/api/abort-signal.js
var require_abort_signal = __commonJS({
  "node_modules/undici/lib/api/abort-signal.js"(exports, module2) {
    init_shims();
    var { RequestAbortedError } = require_errors();
    var kListener = Symbol("kListener");
    var kSignal = Symbol("kSignal");
    function abort(self) {
      if (self.abort) {
        self.abort();
      } else {
        self.onError(new RequestAbortedError());
      }
    }
    function addSignal(self, signal) {
      self[kSignal] = null;
      self[kListener] = null;
      if (!signal) {
        return;
      }
      if (signal.aborted) {
        abort(self);
        return;
      }
      self[kSignal] = signal;
      self[kListener] = () => {
        abort(self);
      };
      if ("addEventListener" in self[kSignal]) {
        self[kSignal].addEventListener("abort", self[kListener]);
      } else {
        self[kSignal].addListener("abort", self[kListener]);
      }
    }
    function removeSignal(self) {
      if (!self[kSignal]) {
        return;
      }
      if ("removeEventListener" in self[kSignal]) {
        self[kSignal].removeEventListener("abort", self[kListener]);
      } else {
        self[kSignal].removeListener("abort", self[kListener]);
      }
      self[kSignal] = null;
      self[kListener] = null;
    }
    module2.exports = {
      addSignal,
      removeSignal
    };
  }
});

// node_modules/undici/lib/api/api-request.js
var require_api_request = __commonJS({
  "node_modules/undici/lib/api/api-request.js"(exports, module2) {
    "use strict";
    init_shims();
    var Readable = require_readable();
    var {
      InvalidArgumentError,
      RequestAbortedError,
      ResponseStatusCodeError
    } = require_errors();
    var util = require_util();
    var { AsyncResource } = require("async_hooks");
    var { addSignal, removeSignal } = require_abort_signal();
    var RequestHandler = class extends AsyncResource {
      constructor(opts, callback) {
        if (!opts || typeof opts !== "object") {
          throw new InvalidArgumentError("invalid opts");
        }
        const { signal, method, opaque, body, onInfo, responseHeaders, throwOnError } = opts;
        try {
          if (typeof callback !== "function") {
            throw new InvalidArgumentError("invalid callback");
          }
          if (signal && typeof signal.on !== "function" && typeof signal.addEventListener !== "function") {
            throw new InvalidArgumentError("signal must be an EventEmitter or EventTarget");
          }
          if (method === "CONNECT") {
            throw new InvalidArgumentError("invalid method");
          }
          if (onInfo && typeof onInfo !== "function") {
            throw new InvalidArgumentError("invalid onInfo callback");
          }
          super("UNDICI_REQUEST");
        } catch (err) {
          if (util.isStream(body)) {
            util.destroy(body.on("error", util.nop), err);
          }
          throw err;
        }
        this.responseHeaders = responseHeaders || null;
        this.opaque = opaque || null;
        this.callback = callback;
        this.res = null;
        this.abort = null;
        this.body = body;
        this.trailers = {};
        this.context = null;
        this.onInfo = onInfo || null;
        this.throwOnError = throwOnError;
        if (util.isStream(body)) {
          body.on("error", (err) => {
            this.onError(err);
          });
        }
        addSignal(this, signal);
      }
      onConnect(abort, context) {
        if (!this.callback) {
          throw new RequestAbortedError();
        }
        this.abort = abort;
        this.context = context;
      }
      onHeaders(statusCode, rawHeaders, resume, statusMessage) {
        const { callback, opaque, abort, context } = this;
        if (statusCode < 200) {
          if (this.onInfo) {
            const headers2 = this.responseHeaders === "raw" ? util.parseRawHeaders(rawHeaders) : util.parseHeaders(rawHeaders);
            this.onInfo({ statusCode, headers: headers2 });
          }
          return;
        }
        const parsedHeaders = util.parseHeaders(rawHeaders);
        const contentType = parsedHeaders["content-type"];
        const body = new Readable(resume, abort, contentType);
        this.callback = null;
        this.res = body;
        const headers = this.responseHeaders === "raw" ? util.parseRawHeaders(rawHeaders) : util.parseHeaders(rawHeaders);
        if (callback !== null) {
          if (this.throwOnError && statusCode >= 400) {
            this.runInAsyncScope(
              getResolveErrorBodyCallback,
              null,
              { callback, body, contentType, statusCode, statusMessage, headers }
            );
            return;
          }
          this.runInAsyncScope(callback, null, null, {
            statusCode,
            headers,
            trailers: this.trailers,
            opaque,
            body,
            context
          });
        }
      }
      onData(chunk) {
        const { res } = this;
        return res.push(chunk);
      }
      onComplete(trailers) {
        const { res } = this;
        removeSignal(this);
        util.parseHeaders(trailers, this.trailers);
        res.push(null);
      }
      onError(err) {
        const { res, callback, body, opaque } = this;
        removeSignal(this);
        if (callback) {
          this.callback = null;
          queueMicrotask(() => {
            this.runInAsyncScope(callback, null, err, { opaque });
          });
        }
        if (res) {
          this.res = null;
          queueMicrotask(() => {
            util.destroy(res, err);
          });
        }
        if (body) {
          this.body = null;
          util.destroy(body, err);
        }
      }
    };
    async function getResolveErrorBodyCallback({ callback, body, contentType, statusCode, statusMessage, headers }) {
      if (statusCode === 204 || !contentType) {
        body.dump();
        process.nextTick(callback, new ResponseStatusCodeError(`Response status code ${statusCode}${statusMessage ? `: ${statusMessage}` : ""}`, statusCode, headers));
        return;
      }
      try {
        if (contentType.startsWith("application/json")) {
          const payload = await body.json();
          process.nextTick(callback, new ResponseStatusCodeError(`Response status code ${statusCode}${statusMessage ? `: ${statusMessage}` : ""}`, statusCode, headers, payload));
          return;
        }
        if (contentType.startsWith("text/")) {
          const payload = await body.text();
          process.nextTick(callback, new ResponseStatusCodeError(`Response status code ${statusCode}${statusMessage ? `: ${statusMessage}` : ""}`, statusCode, headers, payload));
          return;
        }
      } catch (err) {
      }
      body.dump();
      process.nextTick(callback, new ResponseStatusCodeError(`Response status code ${statusCode}${statusMessage ? `: ${statusMessage}` : ""}`, statusCode, headers));
    }
    function request(opts, callback) {
      if (callback === void 0) {
        return new Promise((resolve, reject) => {
          request.call(this, opts, (err, data) => {
            return err ? reject(err) : resolve(data);
          });
        });
      }
      try {
        this.dispatch(opts, new RequestHandler(opts, callback));
      } catch (err) {
        if (typeof callback !== "function") {
          throw err;
        }
        const opaque = opts && opts.opaque;
        queueMicrotask(() => callback(err, { opaque }));
      }
    }
    module2.exports = request;
  }
});

// node_modules/undici/lib/api/api-stream.js
var require_api_stream = __commonJS({
  "node_modules/undici/lib/api/api-stream.js"(exports, module2) {
    "use strict";
    init_shims();
    var { finished } = require("stream");
    var {
      InvalidArgumentError,
      InvalidReturnValueError,
      RequestAbortedError
    } = require_errors();
    var util = require_util();
    var { AsyncResource } = require("async_hooks");
    var { addSignal, removeSignal } = require_abort_signal();
    var StreamHandler = class extends AsyncResource {
      constructor(opts, factory, callback) {
        if (!opts || typeof opts !== "object") {
          throw new InvalidArgumentError("invalid opts");
        }
        const { signal, method, opaque, body, onInfo, responseHeaders } = opts;
        try {
          if (typeof callback !== "function") {
            throw new InvalidArgumentError("invalid callback");
          }
          if (typeof factory !== "function") {
            throw new InvalidArgumentError("invalid factory");
          }
          if (signal && typeof signal.on !== "function" && typeof signal.addEventListener !== "function") {
            throw new InvalidArgumentError("signal must be an EventEmitter or EventTarget");
          }
          if (method === "CONNECT") {
            throw new InvalidArgumentError("invalid method");
          }
          if (onInfo && typeof onInfo !== "function") {
            throw new InvalidArgumentError("invalid onInfo callback");
          }
          super("UNDICI_STREAM");
        } catch (err) {
          if (util.isStream(body)) {
            util.destroy(body.on("error", util.nop), err);
          }
          throw err;
        }
        this.responseHeaders = responseHeaders || null;
        this.opaque = opaque || null;
        this.factory = factory;
        this.callback = callback;
        this.res = null;
        this.abort = null;
        this.context = null;
        this.trailers = null;
        this.body = body;
        this.onInfo = onInfo || null;
        if (util.isStream(body)) {
          body.on("error", (err) => {
            this.onError(err);
          });
        }
        addSignal(this, signal);
      }
      onConnect(abort, context) {
        if (!this.callback) {
          throw new RequestAbortedError();
        }
        this.abort = abort;
        this.context = context;
      }
      onHeaders(statusCode, rawHeaders, resume) {
        const { factory, opaque, context } = this;
        if (statusCode < 200) {
          if (this.onInfo) {
            const headers2 = this.responseHeaders === "raw" ? util.parseRawHeaders(rawHeaders) : util.parseHeaders(rawHeaders);
            this.onInfo({ statusCode, headers: headers2 });
          }
          return;
        }
        this.factory = null;
        const headers = this.responseHeaders === "raw" ? util.parseRawHeaders(rawHeaders) : util.parseHeaders(rawHeaders);
        const res = this.runInAsyncScope(factory, null, {
          statusCode,
          headers,
          opaque,
          context
        });
        if (!res || typeof res.write !== "function" || typeof res.end !== "function" || typeof res.on !== "function") {
          throw new InvalidReturnValueError("expected Writable");
        }
        res.on("drain", resume);
        finished(res, { readable: false }, (err) => {
          const { callback, res: res2, opaque: opaque2, trailers, abort } = this;
          this.res = null;
          if (err || !res2.readable) {
            util.destroy(res2, err);
          }
          this.callback = null;
          this.runInAsyncScope(callback, null, err || null, { opaque: opaque2, trailers });
          if (err) {
            abort();
          }
        });
        this.res = res;
        const needDrain = res.writableNeedDrain !== void 0 ? res.writableNeedDrain : res._writableState && res._writableState.needDrain;
        return needDrain !== true;
      }
      onData(chunk) {
        const { res } = this;
        return res.write(chunk);
      }
      onComplete(trailers) {
        const { res } = this;
        removeSignal(this);
        this.trailers = util.parseHeaders(trailers);
        res.end();
      }
      onError(err) {
        const { res, callback, opaque, body } = this;
        removeSignal(this);
        this.factory = null;
        if (res) {
          this.res = null;
          util.destroy(res, err);
        } else if (callback) {
          this.callback = null;
          queueMicrotask(() => {
            this.runInAsyncScope(callback, null, err, { opaque });
          });
        }
        if (body) {
          this.body = null;
          util.destroy(body, err);
        }
      }
    };
    function stream(opts, factory, callback) {
      if (callback === void 0) {
        return new Promise((resolve, reject) => {
          stream.call(this, opts, factory, (err, data) => {
            return err ? reject(err) : resolve(data);
          });
        });
      }
      try {
        this.dispatch(opts, new StreamHandler(opts, factory, callback));
      } catch (err) {
        if (typeof callback !== "function") {
          throw err;
        }
        const opaque = opts && opts.opaque;
        queueMicrotask(() => callback(err, { opaque }));
      }
    }
    module2.exports = stream;
  }
});

// node_modules/undici/lib/api/api-pipeline.js
var require_api_pipeline = __commonJS({
  "node_modules/undici/lib/api/api-pipeline.js"(exports, module2) {
    "use strict";
    init_shims();
    var {
      Readable,
      Duplex,
      PassThrough
    } = require("stream");
    var {
      InvalidArgumentError,
      InvalidReturnValueError,
      RequestAbortedError
    } = require_errors();
    var util = require_util();
    var { AsyncResource } = require("async_hooks");
    var { addSignal, removeSignal } = require_abort_signal();
    var assert = require("assert");
    var kResume = Symbol("resume");
    var PipelineRequest = class extends Readable {
      constructor() {
        super({ autoDestroy: true });
        this[kResume] = null;
      }
      _read() {
        const { [kResume]: resume } = this;
        if (resume) {
          this[kResume] = null;
          resume();
        }
      }
      _destroy(err, callback) {
        this._read();
        callback(err);
      }
    };
    var PipelineResponse = class extends Readable {
      constructor(resume) {
        super({ autoDestroy: true });
        this[kResume] = resume;
      }
      _read() {
        this[kResume]();
      }
      _destroy(err, callback) {
        if (!err && !this._readableState.endEmitted) {
          err = new RequestAbortedError();
        }
        callback(err);
      }
    };
    var PipelineHandler = class extends AsyncResource {
      constructor(opts, handler2) {
        if (!opts || typeof opts !== "object") {
          throw new InvalidArgumentError("invalid opts");
        }
        if (typeof handler2 !== "function") {
          throw new InvalidArgumentError("invalid handler");
        }
        const { signal, method, opaque, onInfo, responseHeaders } = opts;
        if (signal && typeof signal.on !== "function" && typeof signal.addEventListener !== "function") {
          throw new InvalidArgumentError("signal must be an EventEmitter or EventTarget");
        }
        if (method === "CONNECT") {
          throw new InvalidArgumentError("invalid method");
        }
        if (onInfo && typeof onInfo !== "function") {
          throw new InvalidArgumentError("invalid onInfo callback");
        }
        super("UNDICI_PIPELINE");
        this.opaque = opaque || null;
        this.responseHeaders = responseHeaders || null;
        this.handler = handler2;
        this.abort = null;
        this.context = null;
        this.onInfo = onInfo || null;
        this.req = new PipelineRequest().on("error", util.nop);
        this.ret = new Duplex({
          readableObjectMode: opts.objectMode,
          autoDestroy: true,
          read: () => {
            const { body } = this;
            if (body && body.resume) {
              body.resume();
            }
          },
          write: (chunk, encoding, callback) => {
            const { req } = this;
            if (req.push(chunk, encoding) || req._readableState.destroyed) {
              callback();
            } else {
              req[kResume] = callback;
            }
          },
          destroy: (err, callback) => {
            const { body, req, res, ret, abort } = this;
            if (!err && !ret._readableState.endEmitted) {
              err = new RequestAbortedError();
            }
            if (abort && err) {
              abort();
            }
            util.destroy(body, err);
            util.destroy(req, err);
            util.destroy(res, err);
            removeSignal(this);
            callback(err);
          }
        }).on("prefinish", () => {
          const { req } = this;
          req.push(null);
        });
        this.res = null;
        addSignal(this, signal);
      }
      onConnect(abort, context) {
        const { ret, res } = this;
        assert(!res, "pipeline cannot be retried");
        if (ret.destroyed) {
          throw new RequestAbortedError();
        }
        this.abort = abort;
        this.context = context;
      }
      onHeaders(statusCode, rawHeaders, resume) {
        const { opaque, handler: handler2, context } = this;
        if (statusCode < 200) {
          if (this.onInfo) {
            const headers = this.responseHeaders === "raw" ? util.parseRawHeaders(rawHeaders) : util.parseHeaders(rawHeaders);
            this.onInfo({ statusCode, headers });
          }
          return;
        }
        this.res = new PipelineResponse(resume);
        let body;
        try {
          this.handler = null;
          const headers = this.responseHeaders === "raw" ? util.parseRawHeaders(rawHeaders) : util.parseHeaders(rawHeaders);
          body = this.runInAsyncScope(handler2, null, {
            statusCode,
            headers,
            opaque,
            body: this.res,
            context
          });
        } catch (err) {
          this.res.on("error", util.nop);
          throw err;
        }
        if (!body || typeof body.on !== "function") {
          throw new InvalidReturnValueError("expected Readable");
        }
        body.on("data", (chunk) => {
          const { ret, body: body2 } = this;
          if (!ret.push(chunk) && body2.pause) {
            body2.pause();
          }
        }).on("error", (err) => {
          const { ret } = this;
          util.destroy(ret, err);
        }).on("end", () => {
          const { ret } = this;
          ret.push(null);
        }).on("close", () => {
          const { ret } = this;
          if (!ret._readableState.ended) {
            util.destroy(ret, new RequestAbortedError());
          }
        });
        this.body = body;
      }
      onData(chunk) {
        const { res } = this;
        return res.push(chunk);
      }
      onComplete(trailers) {
        const { res } = this;
        res.push(null);
      }
      onError(err) {
        const { ret } = this;
        this.handler = null;
        util.destroy(ret, err);
      }
    };
    function pipeline(opts, handler2) {
      try {
        const pipelineHandler = new PipelineHandler(opts, handler2);
        this.dispatch({ ...opts, body: pipelineHandler.req }, pipelineHandler);
        return pipelineHandler.ret;
      } catch (err) {
        return new PassThrough().destroy(err);
      }
    }
    module2.exports = pipeline;
  }
});

// node_modules/undici/lib/api/api-upgrade.js
var require_api_upgrade = __commonJS({
  "node_modules/undici/lib/api/api-upgrade.js"(exports, module2) {
    "use strict";
    init_shims();
    var { InvalidArgumentError, RequestAbortedError, SocketError } = require_errors();
    var { AsyncResource } = require("async_hooks");
    var util = require_util();
    var { addSignal, removeSignal } = require_abort_signal();
    var assert = require("assert");
    var UpgradeHandler = class extends AsyncResource {
      constructor(opts, callback) {
        if (!opts || typeof opts !== "object") {
          throw new InvalidArgumentError("invalid opts");
        }
        if (typeof callback !== "function") {
          throw new InvalidArgumentError("invalid callback");
        }
        const { signal, opaque, responseHeaders } = opts;
        if (signal && typeof signal.on !== "function" && typeof signal.addEventListener !== "function") {
          throw new InvalidArgumentError("signal must be an EventEmitter or EventTarget");
        }
        super("UNDICI_UPGRADE");
        this.responseHeaders = responseHeaders || null;
        this.opaque = opaque || null;
        this.callback = callback;
        this.abort = null;
        this.context = null;
        addSignal(this, signal);
      }
      onConnect(abort, context) {
        if (!this.callback) {
          throw new RequestAbortedError();
        }
        this.abort = abort;
        this.context = null;
      }
      onHeaders() {
        throw new SocketError("bad upgrade", null);
      }
      onUpgrade(statusCode, rawHeaders, socket) {
        const { callback, opaque, context } = this;
        assert.strictEqual(statusCode, 101);
        removeSignal(this);
        this.callback = null;
        const headers = this.responseHeaders === "raw" ? util.parseRawHeaders(rawHeaders) : util.parseHeaders(rawHeaders);
        this.runInAsyncScope(callback, null, null, {
          headers,
          socket,
          opaque,
          context
        });
      }
      onError(err) {
        const { callback, opaque } = this;
        removeSignal(this);
        if (callback) {
          this.callback = null;
          queueMicrotask(() => {
            this.runInAsyncScope(callback, null, err, { opaque });
          });
        }
      }
    };
    function upgrade(opts, callback) {
      if (callback === void 0) {
        return new Promise((resolve, reject) => {
          upgrade.call(this, opts, (err, data) => {
            return err ? reject(err) : resolve(data);
          });
        });
      }
      try {
        const upgradeHandler = new UpgradeHandler(opts, callback);
        this.dispatch({
          ...opts,
          method: opts.method || "GET",
          upgrade: opts.protocol || "Websocket"
        }, upgradeHandler);
      } catch (err) {
        if (typeof callback !== "function") {
          throw err;
        }
        const opaque = opts && opts.opaque;
        queueMicrotask(() => callback(err, { opaque }));
      }
    }
    module2.exports = upgrade;
  }
});

// node_modules/undici/lib/api/api-connect.js
var require_api_connect = __commonJS({
  "node_modules/undici/lib/api/api-connect.js"(exports, module2) {
    "use strict";
    init_shims();
    var { InvalidArgumentError, RequestAbortedError, SocketError } = require_errors();
    var { AsyncResource } = require("async_hooks");
    var util = require_util();
    var { addSignal, removeSignal } = require_abort_signal();
    var ConnectHandler = class extends AsyncResource {
      constructor(opts, callback) {
        if (!opts || typeof opts !== "object") {
          throw new InvalidArgumentError("invalid opts");
        }
        if (typeof callback !== "function") {
          throw new InvalidArgumentError("invalid callback");
        }
        const { signal, opaque, responseHeaders } = opts;
        if (signal && typeof signal.on !== "function" && typeof signal.addEventListener !== "function") {
          throw new InvalidArgumentError("signal must be an EventEmitter or EventTarget");
        }
        super("UNDICI_CONNECT");
        this.opaque = opaque || null;
        this.responseHeaders = responseHeaders || null;
        this.callback = callback;
        this.abort = null;
        addSignal(this, signal);
      }
      onConnect(abort, context) {
        if (!this.callback) {
          throw new RequestAbortedError();
        }
        this.abort = abort;
        this.context = context;
      }
      onHeaders() {
        throw new SocketError("bad connect", null);
      }
      onUpgrade(statusCode, rawHeaders, socket) {
        const { callback, opaque, context } = this;
        removeSignal(this);
        this.callback = null;
        const headers = this.responseHeaders === "raw" ? util.parseRawHeaders(rawHeaders) : util.parseHeaders(rawHeaders);
        this.runInAsyncScope(callback, null, null, {
          statusCode,
          headers,
          socket,
          opaque,
          context
        });
      }
      onError(err) {
        const { callback, opaque } = this;
        removeSignal(this);
        if (callback) {
          this.callback = null;
          queueMicrotask(() => {
            this.runInAsyncScope(callback, null, err, { opaque });
          });
        }
      }
    };
    function connect(opts, callback) {
      if (callback === void 0) {
        return new Promise((resolve, reject) => {
          connect.call(this, opts, (err, data) => {
            return err ? reject(err) : resolve(data);
          });
        });
      }
      try {
        const connectHandler = new ConnectHandler(opts, callback);
        this.dispatch({ ...opts, method: "CONNECT" }, connectHandler);
      } catch (err) {
        if (typeof callback !== "function") {
          throw err;
        }
        const opaque = opts && opts.opaque;
        queueMicrotask(() => callback(err, { opaque }));
      }
    }
    module2.exports = connect;
  }
});

// node_modules/undici/lib/api/index.js
var require_api = __commonJS({
  "node_modules/undici/lib/api/index.js"(exports, module2) {
    "use strict";
    init_shims();
    module2.exports.request = require_api_request();
    module2.exports.stream = require_api_stream();
    module2.exports.pipeline = require_api_pipeline();
    module2.exports.upgrade = require_api_upgrade();
    module2.exports.connect = require_api_connect();
  }
});

// node_modules/undici/lib/mock/mock-errors.js
var require_mock_errors = __commonJS({
  "node_modules/undici/lib/mock/mock-errors.js"(exports, module2) {
    "use strict";
    init_shims();
    var { UndiciError } = require_errors();
    var MockNotMatchedError = class extends UndiciError {
      constructor(message) {
        super(message);
        Error.captureStackTrace(this, MockNotMatchedError);
        this.name = "MockNotMatchedError";
        this.message = message || "The request does not match any registered mock dispatches";
        this.code = "UND_MOCK_ERR_MOCK_NOT_MATCHED";
      }
    };
    module2.exports = {
      MockNotMatchedError
    };
  }
});

// node_modules/undici/lib/mock/mock-symbols.js
var require_mock_symbols = __commonJS({
  "node_modules/undici/lib/mock/mock-symbols.js"(exports, module2) {
    "use strict";
    init_shims();
    module2.exports = {
      kAgent: Symbol("agent"),
      kOptions: Symbol("options"),
      kFactory: Symbol("factory"),
      kDispatches: Symbol("dispatches"),
      kDispatchKey: Symbol("dispatch key"),
      kDefaultHeaders: Symbol("default headers"),
      kDefaultTrailers: Symbol("default trailers"),
      kContentLength: Symbol("content length"),
      kMockAgent: Symbol("mock agent"),
      kMockAgentSet: Symbol("mock agent set"),
      kMockAgentGet: Symbol("mock agent get"),
      kMockDispatch: Symbol("mock dispatch"),
      kClose: Symbol("close"),
      kOriginalClose: Symbol("original agent close"),
      kOrigin: Symbol("origin"),
      kIsMockActive: Symbol("is mock active"),
      kNetConnect: Symbol("net connect"),
      kGetNetConnect: Symbol("get net connect"),
      kConnected: Symbol("connected")
    };
  }
});

// node_modules/undici/lib/mock/mock-utils.js
var require_mock_utils = __commonJS({
  "node_modules/undici/lib/mock/mock-utils.js"(exports, module2) {
    "use strict";
    init_shims();
    var { MockNotMatchedError } = require_mock_errors();
    var {
      kDispatches,
      kMockAgent,
      kOriginalDispatch,
      kOrigin,
      kGetNetConnect
    } = require_mock_symbols();
    var { buildURL, nop } = require_util();
    var { STATUS_CODES } = require("http");
    var {
      types: {
        isPromise
      }
    } = require("util");
    function matchValue(match2, value) {
      if (typeof match2 === "string") {
        return match2 === value;
      }
      if (match2 instanceof RegExp) {
        return match2.test(value);
      }
      if (typeof match2 === "function") {
        return match2(value) === true;
      }
      return false;
    }
    function lowerCaseEntries(headers) {
      return Object.fromEntries(
        Object.entries(headers).map(([headerName, headerValue]) => {
          return [headerName.toLocaleLowerCase(), headerValue];
        })
      );
    }
    function getHeaderByName(headers, key2) {
      if (Array.isArray(headers)) {
        for (let i3 = 0; i3 < headers.length; i3 += 2) {
          if (headers[i3].toLocaleLowerCase() === key2.toLocaleLowerCase()) {
            return headers[i3 + 1];
          }
        }
        return void 0;
      } else if (typeof headers.get === "function") {
        return headers.get(key2);
      } else {
        return lowerCaseEntries(headers)[key2.toLocaleLowerCase()];
      }
    }
    function buildHeadersFromArray(headers) {
      const clone = headers.slice();
      const entries = [];
      for (let index11 = 0; index11 < clone.length; index11 += 2) {
        entries.push([clone[index11], clone[index11 + 1]]);
      }
      return Object.fromEntries(entries);
    }
    function matchHeaders(mockDispatch2, headers) {
      if (typeof mockDispatch2.headers === "function") {
        if (Array.isArray(headers)) {
          headers = buildHeadersFromArray(headers);
        }
        return mockDispatch2.headers(headers ? lowerCaseEntries(headers) : {});
      }
      if (typeof mockDispatch2.headers === "undefined") {
        return true;
      }
      if (typeof headers !== "object" || typeof mockDispatch2.headers !== "object") {
        return false;
      }
      for (const [matchHeaderName, matchHeaderValue] of Object.entries(mockDispatch2.headers)) {
        const headerValue = getHeaderByName(headers, matchHeaderName);
        if (!matchValue(matchHeaderValue, headerValue)) {
          return false;
        }
      }
      return true;
    }
    function safeUrl(path) {
      if (typeof path !== "string") {
        return path;
      }
      const pathSegments = path.split("?");
      if (pathSegments.length !== 2) {
        return path;
      }
      const qp = new URLSearchParams(pathSegments.pop());
      qp.sort();
      return [...pathSegments, qp.toString()].join("?");
    }
    function matchKey(mockDispatch2, { path, method, body, headers }) {
      const pathMatch = matchValue(mockDispatch2.path, path);
      const methodMatch = matchValue(mockDispatch2.method, method);
      const bodyMatch = typeof mockDispatch2.body !== "undefined" ? matchValue(mockDispatch2.body, body) : true;
      const headersMatch = matchHeaders(mockDispatch2, headers);
      return pathMatch && methodMatch && bodyMatch && headersMatch;
    }
    function getResponseData(data) {
      if (Buffer.isBuffer(data)) {
        return data;
      } else if (typeof data === "object") {
        return JSON.stringify(data);
      } else {
        return data.toString();
      }
    }
    function getMockDispatch(mockDispatches, key2) {
      const basePath = key2.query ? buildURL(key2.path, key2.query) : key2.path;
      const resolvedPath = typeof basePath === "string" ? safeUrl(basePath) : basePath;
      let matchedMockDispatches = mockDispatches.filter(({ consumed }) => !consumed).filter(({ path }) => matchValue(safeUrl(path), resolvedPath));
      if (matchedMockDispatches.length === 0) {
        throw new MockNotMatchedError(`Mock dispatch not matched for path '${resolvedPath}'`);
      }
      matchedMockDispatches = matchedMockDispatches.filter(({ method }) => matchValue(method, key2.method));
      if (matchedMockDispatches.length === 0) {
        throw new MockNotMatchedError(`Mock dispatch not matched for method '${key2.method}'`);
      }
      matchedMockDispatches = matchedMockDispatches.filter(({ body }) => typeof body !== "undefined" ? matchValue(body, key2.body) : true);
      if (matchedMockDispatches.length === 0) {
        throw new MockNotMatchedError(`Mock dispatch not matched for body '${key2.body}'`);
      }
      matchedMockDispatches = matchedMockDispatches.filter((mockDispatch2) => matchHeaders(mockDispatch2, key2.headers));
      if (matchedMockDispatches.length === 0) {
        throw new MockNotMatchedError(`Mock dispatch not matched for headers '${typeof key2.headers === "object" ? JSON.stringify(key2.headers) : key2.headers}'`);
      }
      return matchedMockDispatches[0];
    }
    function addMockDispatch(mockDispatches, key2, data) {
      const baseData = { timesInvoked: 0, times: 1, persist: false, consumed: false };
      const replyData = typeof data === "function" ? { callback: data } : { ...data };
      const newMockDispatch = { ...baseData, ...key2, pending: true, data: { error: null, ...replyData } };
      mockDispatches.push(newMockDispatch);
      return newMockDispatch;
    }
    function deleteMockDispatch(mockDispatches, key2) {
      const index11 = mockDispatches.findIndex((dispatch) => {
        if (!dispatch.consumed) {
          return false;
        }
        return matchKey(dispatch, key2);
      });
      if (index11 !== -1) {
        mockDispatches.splice(index11, 1);
      }
    }
    function buildKey(opts) {
      const { path, method, body, headers, query } = opts;
      return {
        path,
        method,
        body,
        headers,
        query
      };
    }
    function generateKeyValues(data) {
      return Object.entries(data).reduce((keyValuePairs, [key2, value]) => [
        ...keyValuePairs,
        Buffer.from(`${key2}`),
        Array.isArray(value) ? value.map((x) => Buffer.from(`${x}`)) : Buffer.from(`${value}`)
      ], []);
    }
    function getStatusText(statusCode) {
      return STATUS_CODES[statusCode] || "unknown";
    }
    async function getResponse(body) {
      const buffers = [];
      for await (const data of body) {
        buffers.push(data);
      }
      return Buffer.concat(buffers).toString("utf8");
    }
    function mockDispatch(opts, handler2) {
      const key2 = buildKey(opts);
      const mockDispatch2 = getMockDispatch(this[kDispatches], key2);
      mockDispatch2.timesInvoked++;
      if (mockDispatch2.data.callback) {
        mockDispatch2.data = { ...mockDispatch2.data, ...mockDispatch2.data.callback(opts) };
      }
      const { data: { statusCode, data, headers, trailers, error: error2 }, delay, persist } = mockDispatch2;
      const { timesInvoked, times } = mockDispatch2;
      mockDispatch2.consumed = !persist && timesInvoked >= times;
      mockDispatch2.pending = timesInvoked < times;
      if (error2 !== null) {
        deleteMockDispatch(this[kDispatches], key2);
        handler2.onError(error2);
        return true;
      }
      if (typeof delay === "number" && delay > 0) {
        setTimeout(() => {
          handleReply(this[kDispatches]);
        }, delay);
      } else {
        handleReply(this[kDispatches]);
      }
      function handleReply(mockDispatches, _data = data) {
        const optsHeaders = Array.isArray(opts.headers) ? buildHeadersFromArray(opts.headers) : opts.headers;
        const body = typeof _data === "function" ? _data({ ...opts, headers: optsHeaders }) : _data;
        if (isPromise(body)) {
          body.then((newData) => handleReply(mockDispatches, newData));
          return;
        }
        const responseData = getResponseData(body);
        const responseHeaders = generateKeyValues(headers);
        const responseTrailers = generateKeyValues(trailers);
        handler2.abort = nop;
        handler2.onHeaders(statusCode, responseHeaders, resume, getStatusText(statusCode));
        handler2.onData(Buffer.from(responseData));
        handler2.onComplete(responseTrailers);
        deleteMockDispatch(mockDispatches, key2);
      }
      function resume() {
      }
      return true;
    }
    function buildMockDispatch() {
      const agent = this[kMockAgent];
      const origin = this[kOrigin];
      const originalDispatch = this[kOriginalDispatch];
      return function dispatch(opts, handler2) {
        if (agent.isMockActive) {
          try {
            mockDispatch.call(this, opts, handler2);
          } catch (error2) {
            if (error2 instanceof MockNotMatchedError) {
              const netConnect = agent[kGetNetConnect]();
              if (netConnect === false) {
                throw new MockNotMatchedError(`${error2.message}: subsequent request to origin ${origin} was not allowed (net.connect disabled)`);
              }
              if (checkNetConnect(netConnect, origin)) {
                originalDispatch.call(this, opts, handler2);
              } else {
                throw new MockNotMatchedError(`${error2.message}: subsequent request to origin ${origin} was not allowed (net.connect is not enabled for this origin)`);
              }
            } else {
              throw error2;
            }
          }
        } else {
          originalDispatch.call(this, opts, handler2);
        }
      };
    }
    function checkNetConnect(netConnect, origin) {
      const url = new URL(origin);
      if (netConnect === true) {
        return true;
      } else if (Array.isArray(netConnect) && netConnect.some((matcher) => matchValue(matcher, url.host))) {
        return true;
      }
      return false;
    }
    function buildMockOptions(opts) {
      if (opts) {
        const { agent, ...mockOptions } = opts;
        return mockOptions;
      }
    }
    module2.exports = {
      getResponseData,
      getMockDispatch,
      addMockDispatch,
      deleteMockDispatch,
      buildKey,
      generateKeyValues,
      matchValue,
      getResponse,
      getStatusText,
      mockDispatch,
      buildMockDispatch,
      checkNetConnect,
      buildMockOptions,
      getHeaderByName
    };
  }
});

// node_modules/undici/lib/mock/mock-interceptor.js
var require_mock_interceptor = __commonJS({
  "node_modules/undici/lib/mock/mock-interceptor.js"(exports, module2) {
    "use strict";
    init_shims();
    var { getResponseData, buildKey, addMockDispatch } = require_mock_utils();
    var {
      kDispatches,
      kDispatchKey,
      kDefaultHeaders,
      kDefaultTrailers,
      kContentLength,
      kMockDispatch
    } = require_mock_symbols();
    var { InvalidArgumentError } = require_errors();
    var { buildURL } = require_util();
    var MockScope = class {
      constructor(mockDispatch) {
        this[kMockDispatch] = mockDispatch;
      }
      /**
       * Delay a reply by a set amount in ms.
       */
      delay(waitInMs) {
        if (typeof waitInMs !== "number" || !Number.isInteger(waitInMs) || waitInMs <= 0) {
          throw new InvalidArgumentError("waitInMs must be a valid integer > 0");
        }
        this[kMockDispatch].delay = waitInMs;
        return this;
      }
      /**
       * For a defined reply, never mark as consumed.
       */
      persist() {
        this[kMockDispatch].persist = true;
        return this;
      }
      /**
       * Allow one to define a reply for a set amount of matching requests.
       */
      times(repeatTimes) {
        if (typeof repeatTimes !== "number" || !Number.isInteger(repeatTimes) || repeatTimes <= 0) {
          throw new InvalidArgumentError("repeatTimes must be a valid integer > 0");
        }
        this[kMockDispatch].times = repeatTimes;
        return this;
      }
    };
    var MockInterceptor = class {
      constructor(opts, mockDispatches) {
        if (typeof opts !== "object") {
          throw new InvalidArgumentError("opts must be an object");
        }
        if (typeof opts.path === "undefined") {
          throw new InvalidArgumentError("opts.path must be defined");
        }
        if (typeof opts.method === "undefined") {
          opts.method = "GET";
        }
        if (typeof opts.path === "string") {
          if (opts.query) {
            opts.path = buildURL(opts.path, opts.query);
          } else {
            const parsedURL = new URL(opts.path, "data://");
            opts.path = parsedURL.pathname + parsedURL.search;
          }
        }
        if (typeof opts.method === "string") {
          opts.method = opts.method.toUpperCase();
        }
        this[kDispatchKey] = buildKey(opts);
        this[kDispatches] = mockDispatches;
        this[kDefaultHeaders] = {};
        this[kDefaultTrailers] = {};
        this[kContentLength] = false;
      }
      createMockScopeDispatchData(statusCode, data, responseOptions = {}) {
        const responseData = getResponseData(data);
        const contentLength = this[kContentLength] ? { "content-length": responseData.length } : {};
        const headers = { ...this[kDefaultHeaders], ...contentLength, ...responseOptions.headers };
        const trailers = { ...this[kDefaultTrailers], ...responseOptions.trailers };
        return { statusCode, data, headers, trailers };
      }
      validateReplyParameters(statusCode, data, responseOptions) {
        if (typeof statusCode === "undefined") {
          throw new InvalidArgumentError("statusCode must be defined");
        }
        if (typeof data === "undefined") {
          throw new InvalidArgumentError("data must be defined");
        }
        if (typeof responseOptions !== "object") {
          throw new InvalidArgumentError("responseOptions must be an object");
        }
      }
      /**
       * Mock an undici request with a defined reply.
       */
      reply(replyData) {
        if (typeof replyData === "function") {
          const wrappedDefaultsCallback = (opts) => {
            const resolvedData = replyData(opts);
            if (typeof resolvedData !== "object") {
              throw new InvalidArgumentError("reply options callback must return an object");
            }
            const { statusCode: statusCode2, data: data2 = "", responseOptions: responseOptions2 = {} } = resolvedData;
            this.validateReplyParameters(statusCode2, data2, responseOptions2);
            return {
              ...this.createMockScopeDispatchData(statusCode2, data2, responseOptions2)
            };
          };
          const newMockDispatch2 = addMockDispatch(this[kDispatches], this[kDispatchKey], wrappedDefaultsCallback);
          return new MockScope(newMockDispatch2);
        }
        const [statusCode, data = "", responseOptions = {}] = [...arguments];
        this.validateReplyParameters(statusCode, data, responseOptions);
        const dispatchData = this.createMockScopeDispatchData(statusCode, data, responseOptions);
        const newMockDispatch = addMockDispatch(this[kDispatches], this[kDispatchKey], dispatchData);
        return new MockScope(newMockDispatch);
      }
      /**
       * Mock an undici request with a defined error.
       */
      replyWithError(error2) {
        if (typeof error2 === "undefined") {
          throw new InvalidArgumentError("error must be defined");
        }
        const newMockDispatch = addMockDispatch(this[kDispatches], this[kDispatchKey], { error: error2 });
        return new MockScope(newMockDispatch);
      }
      /**
       * Set default reply headers on the interceptor for subsequent replies
       */
      defaultReplyHeaders(headers) {
        if (typeof headers === "undefined") {
          throw new InvalidArgumentError("headers must be defined");
        }
        this[kDefaultHeaders] = headers;
        return this;
      }
      /**
       * Set default reply trailers on the interceptor for subsequent replies
       */
      defaultReplyTrailers(trailers) {
        if (typeof trailers === "undefined") {
          throw new InvalidArgumentError("trailers must be defined");
        }
        this[kDefaultTrailers] = trailers;
        return this;
      }
      /**
       * Set reply content length header for replies on the interceptor
       */
      replyContentLength() {
        this[kContentLength] = true;
        return this;
      }
    };
    module2.exports.MockInterceptor = MockInterceptor;
    module2.exports.MockScope = MockScope;
  }
});

// node_modules/undici/lib/mock/mock-client.js
var require_mock_client = __commonJS({
  "node_modules/undici/lib/mock/mock-client.js"(exports, module2) {
    "use strict";
    init_shims();
    var { promisify } = require("util");
    var Client = require_client();
    var { buildMockDispatch } = require_mock_utils();
    var {
      kDispatches,
      kMockAgent,
      kClose,
      kOriginalClose,
      kOrigin,
      kOriginalDispatch,
      kConnected
    } = require_mock_symbols();
    var { MockInterceptor } = require_mock_interceptor();
    var Symbols = require_symbols();
    var { InvalidArgumentError } = require_errors();
    var MockClient = class extends Client {
      constructor(origin, opts) {
        super(origin, opts);
        if (!opts || !opts.agent || typeof opts.agent.dispatch !== "function") {
          throw new InvalidArgumentError("Argument opts.agent must implement Agent");
        }
        this[kMockAgent] = opts.agent;
        this[kOrigin] = origin;
        this[kDispatches] = [];
        this[kConnected] = 1;
        this[kOriginalDispatch] = this.dispatch;
        this[kOriginalClose] = this.close.bind(this);
        this.dispatch = buildMockDispatch.call(this);
        this.close = this[kClose];
      }
      get [Symbols.kConnected]() {
        return this[kConnected];
      }
      /**
       * Sets up the base interceptor for mocking replies from undici.
       */
      intercept(opts) {
        return new MockInterceptor(opts, this[kDispatches]);
      }
      async [kClose]() {
        await promisify(this[kOriginalClose])();
        this[kConnected] = 0;
        this[kMockAgent][Symbols.kClients].delete(this[kOrigin]);
      }
    };
    module2.exports = MockClient;
  }
});

// node_modules/undici/lib/mock/mock-pool.js
var require_mock_pool = __commonJS({
  "node_modules/undici/lib/mock/mock-pool.js"(exports, module2) {
    "use strict";
    init_shims();
    var { promisify } = require("util");
    var Pool = require_pool();
    var { buildMockDispatch } = require_mock_utils();
    var {
      kDispatches,
      kMockAgent,
      kClose,
      kOriginalClose,
      kOrigin,
      kOriginalDispatch,
      kConnected
    } = require_mock_symbols();
    var { MockInterceptor } = require_mock_interceptor();
    var Symbols = require_symbols();
    var { InvalidArgumentError } = require_errors();
    var MockPool = class extends Pool {
      constructor(origin, opts) {
        super(origin, opts);
        if (!opts || !opts.agent || typeof opts.agent.dispatch !== "function") {
          throw new InvalidArgumentError("Argument opts.agent must implement Agent");
        }
        this[kMockAgent] = opts.agent;
        this[kOrigin] = origin;
        this[kDispatches] = [];
        this[kConnected] = 1;
        this[kOriginalDispatch] = this.dispatch;
        this[kOriginalClose] = this.close.bind(this);
        this.dispatch = buildMockDispatch.call(this);
        this.close = this[kClose];
      }
      get [Symbols.kConnected]() {
        return this[kConnected];
      }
      /**
       * Sets up the base interceptor for mocking replies from undici.
       */
      intercept(opts) {
        return new MockInterceptor(opts, this[kDispatches]);
      }
      async [kClose]() {
        await promisify(this[kOriginalClose])();
        this[kConnected] = 0;
        this[kMockAgent][Symbols.kClients].delete(this[kOrigin]);
      }
    };
    module2.exports = MockPool;
  }
});

// node_modules/undici/lib/mock/pluralizer.js
var require_pluralizer = __commonJS({
  "node_modules/undici/lib/mock/pluralizer.js"(exports, module2) {
    "use strict";
    init_shims();
    var singulars = {
      pronoun: "it",
      is: "is",
      was: "was",
      this: "this"
    };
    var plurals = {
      pronoun: "they",
      is: "are",
      was: "were",
      this: "these"
    };
    module2.exports = class Pluralizer {
      constructor(singular, plural) {
        this.singular = singular;
        this.plural = plural;
      }
      pluralize(count) {
        const one = count === 1;
        const keys = one ? singulars : plurals;
        const noun = one ? this.singular : this.plural;
        return { ...keys, count, noun };
      }
    };
  }
});

// node_modules/undici/lib/mock/pending-interceptors-formatter.js
var require_pending_interceptors_formatter = __commonJS({
  "node_modules/undici/lib/mock/pending-interceptors-formatter.js"(exports, module2) {
    "use strict";
    init_shims();
    var { Transform } = require("stream");
    var { Console } = require("console");
    module2.exports = class PendingInterceptorsFormatter {
      constructor({ disableColors } = {}) {
        this.transform = new Transform({
          transform(chunk, _enc, cb) {
            cb(null, chunk);
          }
        });
        this.logger = new Console({
          stdout: this.transform,
          inspectOptions: {
            colors: !disableColors && !process.env.CI
          }
        });
      }
      format(pendingInterceptors) {
        const withPrettyHeaders = pendingInterceptors.map(
          ({ method, path, data: { statusCode }, persist, times, timesInvoked, origin }) => ({
            Method: method,
            Origin: origin,
            Path: path,
            "Status code": statusCode,
            Persistent: persist ? "\u2705" : "\u274C",
            Invocations: timesInvoked,
            Remaining: persist ? Infinity : times - timesInvoked
          })
        );
        this.logger.table(withPrettyHeaders);
        return this.transform.read().toString();
      }
    };
  }
});

// node_modules/undici/lib/mock/mock-agent.js
var require_mock_agent = __commonJS({
  "node_modules/undici/lib/mock/mock-agent.js"(exports, module2) {
    "use strict";
    init_shims();
    var { kClients } = require_symbols();
    var Agent = require_agent();
    var {
      kAgent,
      kMockAgentSet,
      kMockAgentGet,
      kDispatches,
      kIsMockActive,
      kNetConnect,
      kGetNetConnect,
      kOptions,
      kFactory
    } = require_mock_symbols();
    var MockClient = require_mock_client();
    var MockPool = require_mock_pool();
    var { matchValue, buildMockOptions } = require_mock_utils();
    var { InvalidArgumentError, UndiciError } = require_errors();
    var Dispatcher = require_dispatcher();
    var Pluralizer = require_pluralizer();
    var PendingInterceptorsFormatter = require_pending_interceptors_formatter();
    var FakeWeakRef = class {
      constructor(value) {
        this.value = value;
      }
      deref() {
        return this.value;
      }
    };
    var MockAgent = class extends Dispatcher {
      constructor(opts) {
        super(opts);
        this[kNetConnect] = true;
        this[kIsMockActive] = true;
        if (opts && opts.agent && typeof opts.agent.dispatch !== "function") {
          throw new InvalidArgumentError("Argument opts.agent must implement Agent");
        }
        const agent = opts && opts.agent ? opts.agent : new Agent(opts);
        this[kAgent] = agent;
        this[kClients] = agent[kClients];
        this[kOptions] = buildMockOptions(opts);
      }
      get(origin) {
        let dispatcher = this[kMockAgentGet](origin);
        if (!dispatcher) {
          dispatcher = this[kFactory](origin);
          this[kMockAgentSet](origin, dispatcher);
        }
        return dispatcher;
      }
      dispatch(opts, handler2) {
        this.get(opts.origin);
        return this[kAgent].dispatch(opts, handler2);
      }
      async close() {
        await this[kAgent].close();
        this[kClients].clear();
      }
      deactivate() {
        this[kIsMockActive] = false;
      }
      activate() {
        this[kIsMockActive] = true;
      }
      enableNetConnect(matcher) {
        if (typeof matcher === "string" || typeof matcher === "function" || matcher instanceof RegExp) {
          if (Array.isArray(this[kNetConnect])) {
            this[kNetConnect].push(matcher);
          } else {
            this[kNetConnect] = [matcher];
          }
        } else if (typeof matcher === "undefined") {
          this[kNetConnect] = true;
        } else {
          throw new InvalidArgumentError("Unsupported matcher. Must be one of String|Function|RegExp.");
        }
      }
      disableNetConnect() {
        this[kNetConnect] = false;
      }
      // This is required to bypass issues caused by using global symbols - see:
      // https://github.com/nodejs/undici/issues/1447
      get isMockActive() {
        return this[kIsMockActive];
      }
      [kMockAgentSet](origin, dispatcher) {
        this[kClients].set(origin, new FakeWeakRef(dispatcher));
      }
      [kFactory](origin) {
        const mockOptions = Object.assign({ agent: this }, this[kOptions]);
        return this[kOptions] && this[kOptions].connections === 1 ? new MockClient(origin, mockOptions) : new MockPool(origin, mockOptions);
      }
      [kMockAgentGet](origin) {
        const ref = this[kClients].get(origin);
        if (ref) {
          return ref.deref();
        }
        if (typeof origin !== "string") {
          const dispatcher = this[kFactory]("http://localhost:9999");
          this[kMockAgentSet](origin, dispatcher);
          return dispatcher;
        }
        for (const [keyMatcher, nonExplicitRef] of Array.from(this[kClients])) {
          const nonExplicitDispatcher = nonExplicitRef.deref();
          if (nonExplicitDispatcher && typeof keyMatcher !== "string" && matchValue(keyMatcher, origin)) {
            const dispatcher = this[kFactory](origin);
            this[kMockAgentSet](origin, dispatcher);
            dispatcher[kDispatches] = nonExplicitDispatcher[kDispatches];
            return dispatcher;
          }
        }
      }
      [kGetNetConnect]() {
        return this[kNetConnect];
      }
      pendingInterceptors() {
        const mockAgentClients = this[kClients];
        return Array.from(mockAgentClients.entries()).flatMap(([origin, scope]) => scope.deref()[kDispatches].map((dispatch) => ({ ...dispatch, origin }))).filter(({ pending }) => pending);
      }
      assertNoPendingInterceptors({ pendingInterceptorsFormatter = new PendingInterceptorsFormatter() } = {}) {
        const pending = this.pendingInterceptors();
        if (pending.length === 0) {
          return;
        }
        const pluralizer = new Pluralizer("interceptor", "interceptors").pluralize(pending.length);
        throw new UndiciError(`
${pluralizer.count} ${pluralizer.noun} ${pluralizer.is} pending:

${pendingInterceptorsFormatter.format(pending)}
`.trim());
      }
    };
    module2.exports = MockAgent;
  }
});

// node_modules/undici/lib/proxy-agent.js
var require_proxy_agent = __commonJS({
  "node_modules/undici/lib/proxy-agent.js"(exports, module2) {
    "use strict";
    init_shims();
    var { kProxy, kClose, kDestroy, kInterceptors } = require_symbols();
    var { URL: URL2 } = require("url");
    var Agent = require_agent();
    var Client = require_client();
    var DispatcherBase = require_dispatcher_base();
    var { InvalidArgumentError, RequestAbortedError } = require_errors();
    var buildConnector = require_connect();
    var kAgent = Symbol("proxy agent");
    var kClient = Symbol("proxy client");
    var kProxyHeaders = Symbol("proxy headers");
    var kRequestTls = Symbol("request tls settings");
    var kProxyTls = Symbol("proxy tls settings");
    var kConnectEndpoint = Symbol("connect endpoint function");
    function defaultProtocolPort(protocol) {
      return protocol === "https:" ? 443 : 80;
    }
    function buildProxyOptions(opts) {
      if (typeof opts === "string") {
        opts = { uri: opts };
      }
      if (!opts || !opts.uri) {
        throw new InvalidArgumentError("Proxy opts.uri is mandatory");
      }
      return {
        uri: opts.uri,
        protocol: opts.protocol || "https"
      };
    }
    var ProxyAgent = class extends DispatcherBase {
      constructor(opts) {
        super(opts);
        this[kProxy] = buildProxyOptions(opts);
        this[kAgent] = new Agent(opts);
        this[kInterceptors] = opts.interceptors && opts.interceptors.ProxyAgent && Array.isArray(opts.interceptors.ProxyAgent) ? opts.interceptors.ProxyAgent : [];
        if (typeof opts === "string") {
          opts = { uri: opts };
        }
        if (!opts || !opts.uri) {
          throw new InvalidArgumentError("Proxy opts.uri is mandatory");
        }
        this[kRequestTls] = opts.requestTls;
        this[kProxyTls] = opts.proxyTls;
        this[kProxyHeaders] = opts.headers || {};
        if (opts.auth && opts.token) {
          throw new InvalidArgumentError("opts.auth cannot be used in combination with opts.token");
        } else if (opts.auth) {
          this[kProxyHeaders]["proxy-authorization"] = `Basic ${opts.auth}`;
        } else if (opts.token) {
          this[kProxyHeaders]["proxy-authorization"] = opts.token;
        }
        const resolvedUrl = new URL2(opts.uri);
        const { origin, port, host } = resolvedUrl;
        const connect = buildConnector({ ...opts.proxyTls });
        this[kConnectEndpoint] = buildConnector({ ...opts.requestTls });
        this[kClient] = new Client(resolvedUrl, { connect });
        this[kAgent] = new Agent({
          ...opts,
          connect: async (opts2, callback) => {
            let requestedHost = opts2.host;
            if (!opts2.port) {
              requestedHost += `:${defaultProtocolPort(opts2.protocol)}`;
            }
            try {
              const { socket, statusCode } = await this[kClient].connect({
                origin,
                port,
                path: requestedHost,
                signal: opts2.signal,
                headers: {
                  ...this[kProxyHeaders],
                  host
                }
              });
              if (statusCode !== 200) {
                socket.on("error", () => {
                }).destroy();
                callback(new RequestAbortedError("Proxy response !== 200 when HTTP Tunneling"));
              }
              if (opts2.protocol !== "https:") {
                callback(null, socket);
                return;
              }
              let servername;
              if (this[kRequestTls]) {
                servername = this[kRequestTls].servername;
              } else {
                servername = opts2.servername;
              }
              this[kConnectEndpoint]({ ...opts2, servername, httpSocket: socket }, callback);
            } catch (err) {
              callback(err);
            }
          }
        });
      }
      dispatch(opts, handler2) {
        const { host } = new URL2(opts.origin);
        const headers = buildHeaders(opts.headers);
        throwIfProxyAuthIsSent(headers);
        return this[kAgent].dispatch(
          {
            ...opts,
            headers: {
              ...headers,
              host
            }
          },
          handler2
        );
      }
      async [kClose]() {
        await this[kAgent].close();
        await this[kClient].close();
      }
      async [kDestroy]() {
        await this[kAgent].destroy();
        await this[kClient].destroy();
      }
    };
    function buildHeaders(headers) {
      if (Array.isArray(headers)) {
        const headersPair = {};
        for (let i3 = 0; i3 < headers.length; i3 += 2) {
          headersPair[headers[i3]] = headers[i3 + 1];
        }
        return headersPair;
      }
      return headers;
    }
    function throwIfProxyAuthIsSent(headers) {
      const existProxyAuth = headers && Object.keys(headers).find((key2) => key2.toLowerCase() === "proxy-authorization");
      if (existProxyAuth) {
        throw new InvalidArgumentError("Proxy-Authorization should be sent in ProxyAgent constructor");
      }
    }
    module2.exports = ProxyAgent;
  }
});

// node_modules/undici/lib/global.js
var require_global = __commonJS({
  "node_modules/undici/lib/global.js"(exports, module2) {
    "use strict";
    init_shims();
    var globalDispatcher = Symbol.for("undici.globalDispatcher.1");
    var { InvalidArgumentError } = require_errors();
    var Agent = require_agent();
    if (getGlobalDispatcher() === void 0) {
      setGlobalDispatcher(new Agent());
    }
    function setGlobalDispatcher(agent) {
      if (!agent || typeof agent.dispatch !== "function") {
        throw new InvalidArgumentError("Argument agent must implement Agent");
      }
      Object.defineProperty(globalThis, globalDispatcher, {
        value: agent,
        writable: true,
        enumerable: false,
        configurable: false
      });
    }
    function getGlobalDispatcher() {
      return globalThis[globalDispatcher];
    }
    module2.exports = {
      setGlobalDispatcher,
      getGlobalDispatcher
    };
  }
});

// node_modules/undici/lib/handler/DecoratorHandler.js
var require_DecoratorHandler = __commonJS({
  "node_modules/undici/lib/handler/DecoratorHandler.js"(exports, module2) {
    "use strict";
    init_shims();
    module2.exports = class DecoratorHandler {
      constructor(handler2) {
        this.handler = handler2;
      }
      onConnect(...args) {
        return this.handler.onConnect(...args);
      }
      onError(...args) {
        return this.handler.onError(...args);
      }
      onUpgrade(...args) {
        return this.handler.onUpgrade(...args);
      }
      onHeaders(...args) {
        return this.handler.onHeaders(...args);
      }
      onData(...args) {
        return this.handler.onData(...args);
      }
      onComplete(...args) {
        return this.handler.onComplete(...args);
      }
      onBodySent(...args) {
        return this.handler.onBodySent(...args);
      }
    };
  }
});

// node_modules/undici/lib/fetch/headers.js
var require_headers = __commonJS({
  "node_modules/undici/lib/fetch/headers.js"(exports, module2) {
    "use strict";
    init_shims();
    var { kHeadersList } = require_symbols();
    var { kGuard, kHeadersCaseInsensitive } = require_symbols2();
    var { kEnumerableProperty } = require_util();
    var {
      makeIterator,
      isValidHeaderName,
      isValidHeaderValue
    } = require_util2();
    var { webidl } = require_webidl();
    var assert = require("assert");
    var kHeadersMap = Symbol("headers map");
    var kHeadersSortedMap = Symbol("headers map sorted");
    function headerValueNormalize(potentialValue) {
      let i3 = potentialValue.length;
      while (/[\r\n\t ]/.test(potentialValue.charAt(--i3)))
        ;
      return potentialValue.slice(0, i3 + 1).replace(/^[\r\n\t ]+/, "");
    }
    function fill(headers, object) {
      if (Array.isArray(object)) {
        for (const header of object) {
          if (header.length !== 2) {
            throw webidl.errors.exception({
              header: "Headers constructor",
              message: `expected name/value pair to be length 2, found ${header.length}.`
            });
          }
          headers.append(header[0], header[1]);
        }
      } else if (typeof object === "object" && object !== null) {
        for (const [key2, value] of Object.entries(object)) {
          headers.append(key2, value);
        }
      } else {
        throw webidl.errors.conversionFailed({
          prefix: "Headers constructor",
          argument: "Argument 1",
          types: ["sequence<sequence<ByteString>>", "record<ByteString, ByteString>"]
        });
      }
    }
    var HeadersList = class {
      /** @type {[string, string][]|null} */
      cookies = null;
      constructor(init3) {
        if (init3 instanceof HeadersList) {
          this[kHeadersMap] = new Map(init3[kHeadersMap]);
          this[kHeadersSortedMap] = init3[kHeadersSortedMap];
          this.cookies = init3.cookies;
        } else {
          this[kHeadersMap] = new Map(init3);
          this[kHeadersSortedMap] = null;
        }
      }
      // https://fetch.spec.whatwg.org/#header-list-contains
      contains(name) {
        name = name.toLowerCase();
        return this[kHeadersMap].has(name);
      }
      clear() {
        this[kHeadersMap].clear();
        this[kHeadersSortedMap] = null;
      }
      // https://fetch.spec.whatwg.org/#concept-header-list-append
      append(name, value) {
        this[kHeadersSortedMap] = null;
        const lowercaseName = name.toLowerCase();
        const exists = this[kHeadersMap].get(lowercaseName);
        if (exists) {
          const delimiter = lowercaseName === "cookie" ? "; " : ", ";
          this[kHeadersMap].set(lowercaseName, {
            name: exists.name,
            value: `${exists.value}${delimiter}${value}`
          });
        } else {
          this[kHeadersMap].set(lowercaseName, { name, value });
        }
        if (lowercaseName === "set-cookie") {
          this.cookies ??= [];
          this.cookies.push(value);
        }
      }
      // https://fetch.spec.whatwg.org/#concept-header-list-set
      set(name, value) {
        this[kHeadersSortedMap] = null;
        const lowercaseName = name.toLowerCase();
        if (lowercaseName === "set-cookie") {
          this.cookies = [value];
        }
        return this[kHeadersMap].set(lowercaseName, { name, value });
      }
      // https://fetch.spec.whatwg.org/#concept-header-list-delete
      delete(name) {
        this[kHeadersSortedMap] = null;
        name = name.toLowerCase();
        if (name === "set-cookie") {
          this.cookies = null;
        }
        return this[kHeadersMap].delete(name);
      }
      // https://fetch.spec.whatwg.org/#concept-header-list-get
      get(name) {
        var _a;
        if (!this.contains(name)) {
          return null;
        }
        return ((_a = this[kHeadersMap].get(name.toLowerCase())) == null ? void 0 : _a.value) ?? null;
      }
      *[Symbol.iterator]() {
        for (const [name, { value }] of this[kHeadersMap]) {
          yield [name, value];
        }
      }
      get [kHeadersCaseInsensitive]() {
        const flatList = [];
        for (const { name, value } of this[kHeadersMap].values()) {
          flatList.push(name, value);
        }
        return flatList;
      }
    };
    var Headers3 = class {
      constructor(init3 = void 0) {
        this[kHeadersList] = new HeadersList();
        this[kGuard] = "none";
        if (init3 !== void 0) {
          init3 = webidl.converters.HeadersInit(init3);
          fill(this, init3);
        }
      }
      // https://fetch.spec.whatwg.org/#dom-headers-append
      append(name, value) {
        webidl.brandCheck(this, Headers3);
        webidl.argumentLengthCheck(arguments, 2, { header: "Headers.append" });
        name = webidl.converters.ByteString(name);
        value = webidl.converters.ByteString(value);
        value = headerValueNormalize(value);
        if (!isValidHeaderName(name)) {
          throw webidl.errors.invalidArgument({
            prefix: "Headers.append",
            value: name,
            type: "header name"
          });
        } else if (!isValidHeaderValue(value)) {
          throw webidl.errors.invalidArgument({
            prefix: "Headers.append",
            value,
            type: "header value"
          });
        }
        if (this[kGuard] === "immutable") {
          throw new TypeError("immutable");
        } else if (this[kGuard] === "request-no-cors") {
        }
        return this[kHeadersList].append(name, value);
      }
      // https://fetch.spec.whatwg.org/#dom-headers-delete
      delete(name) {
        webidl.brandCheck(this, Headers3);
        webidl.argumentLengthCheck(arguments, 1, { header: "Headers.delete" });
        name = webidl.converters.ByteString(name);
        if (!isValidHeaderName(name)) {
          throw webidl.errors.invalidArgument({
            prefix: "Headers.delete",
            value: name,
            type: "header name"
          });
        }
        if (this[kGuard] === "immutable") {
          throw new TypeError("immutable");
        } else if (this[kGuard] === "request-no-cors") {
        }
        if (!this[kHeadersList].contains(name)) {
          return;
        }
        return this[kHeadersList].delete(name);
      }
      // https://fetch.spec.whatwg.org/#dom-headers-get
      get(name) {
        webidl.brandCheck(this, Headers3);
        webidl.argumentLengthCheck(arguments, 1, { header: "Headers.get" });
        name = webidl.converters.ByteString(name);
        if (!isValidHeaderName(name)) {
          throw webidl.errors.invalidArgument({
            prefix: "Headers.get",
            value: name,
            type: "header name"
          });
        }
        return this[kHeadersList].get(name);
      }
      // https://fetch.spec.whatwg.org/#dom-headers-has
      has(name) {
        webidl.brandCheck(this, Headers3);
        webidl.argumentLengthCheck(arguments, 1, { header: "Headers.has" });
        name = webidl.converters.ByteString(name);
        if (!isValidHeaderName(name)) {
          throw webidl.errors.invalidArgument({
            prefix: "Headers.has",
            value: name,
            type: "header name"
          });
        }
        return this[kHeadersList].contains(name);
      }
      // https://fetch.spec.whatwg.org/#dom-headers-set
      set(name, value) {
        webidl.brandCheck(this, Headers3);
        webidl.argumentLengthCheck(arguments, 2, { header: "Headers.set" });
        name = webidl.converters.ByteString(name);
        value = webidl.converters.ByteString(value);
        value = headerValueNormalize(value);
        if (!isValidHeaderName(name)) {
          throw webidl.errors.invalidArgument({
            prefix: "Headers.set",
            value: name,
            type: "header name"
          });
        } else if (!isValidHeaderValue(value)) {
          throw webidl.errors.invalidArgument({
            prefix: "Headers.set",
            value,
            type: "header value"
          });
        }
        if (this[kGuard] === "immutable") {
          throw new TypeError("immutable");
        } else if (this[kGuard] === "request-no-cors") {
        }
        return this[kHeadersList].set(name, value);
      }
      // https://fetch.spec.whatwg.org/#dom-headers-getsetcookie
      getSetCookie() {
        webidl.brandCheck(this, Headers3);
        const list = this[kHeadersList].cookies;
        if (list) {
          return [...list];
        }
        return [];
      }
      // https://fetch.spec.whatwg.org/#concept-header-list-sort-and-combine
      get [kHeadersSortedMap]() {
        if (this[kHeadersList][kHeadersSortedMap]) {
          return this[kHeadersList][kHeadersSortedMap];
        }
        const headers = [];
        const names = [...this[kHeadersList]].sort((a, b) => a[0] < b[0] ? -1 : 1);
        const cookies = this[kHeadersList].cookies;
        for (const [name, value] of names) {
          if (name === "set-cookie") {
            for (const value2 of cookies) {
              headers.push([name, value2]);
            }
          } else {
            assert(value !== null);
            headers.push([name, value]);
          }
        }
        this[kHeadersList][kHeadersSortedMap] = headers;
        return headers;
      }
      keys() {
        webidl.brandCheck(this, Headers3);
        return makeIterator(
          () => [...this[kHeadersSortedMap].values()],
          "Headers",
          "key"
        );
      }
      values() {
        webidl.brandCheck(this, Headers3);
        return makeIterator(
          () => [...this[kHeadersSortedMap].values()],
          "Headers",
          "value"
        );
      }
      entries() {
        webidl.brandCheck(this, Headers3);
        return makeIterator(
          () => [...this[kHeadersSortedMap].values()],
          "Headers",
          "key+value"
        );
      }
      /**
       * @param {(value: string, key: string, self: Headers) => void} callbackFn
       * @param {unknown} thisArg
       */
      forEach(callbackFn, thisArg = globalThis) {
        webidl.brandCheck(this, Headers3);
        webidl.argumentLengthCheck(arguments, 1, { header: "Headers.forEach" });
        if (typeof callbackFn !== "function") {
          throw new TypeError(
            "Failed to execute 'forEach' on 'Headers': parameter 1 is not of type 'Function'."
          );
        }
        for (const [key2, value] of this) {
          callbackFn.apply(thisArg, [value, key2, this]);
        }
      }
      [Symbol.for("nodejs.util.inspect.custom")]() {
        webidl.brandCheck(this, Headers3);
        return this[kHeadersList];
      }
    };
    Headers3.prototype[Symbol.iterator] = Headers3.prototype.entries;
    Object.defineProperties(Headers3.prototype, {
      append: kEnumerableProperty,
      delete: kEnumerableProperty,
      get: kEnumerableProperty,
      has: kEnumerableProperty,
      set: kEnumerableProperty,
      keys: kEnumerableProperty,
      values: kEnumerableProperty,
      entries: kEnumerableProperty,
      forEach: kEnumerableProperty,
      [Symbol.iterator]: { enumerable: false },
      [Symbol.toStringTag]: {
        value: "Headers",
        configurable: true
      }
    });
    webidl.converters.HeadersInit = function(V) {
      if (webidl.util.Type(V) === "Object") {
        if (V[Symbol.iterator]) {
          return webidl.converters["sequence<sequence<ByteString>>"](V);
        }
        return webidl.converters["record<ByteString, ByteString>"](V);
      }
      throw webidl.errors.conversionFailed({
        prefix: "Headers constructor",
        argument: "Argument 1",
        types: ["sequence<sequence<ByteString>>", "record<ByteString, ByteString>"]
      });
    };
    module2.exports = {
      fill,
      Headers: Headers3,
      HeadersList
    };
  }
});

// node_modules/undici/lib/fetch/global.js
var require_global2 = __commonJS({
  "node_modules/undici/lib/fetch/global.js"(exports, module2) {
    "use strict";
    init_shims();
    var globalOrigin = Symbol.for("undici.globalOrigin.1");
    function getGlobalOrigin() {
      return globalThis[globalOrigin];
    }
    function setGlobalOrigin(newOrigin) {
      if (newOrigin !== void 0 && typeof newOrigin !== "string" && !(newOrigin instanceof URL)) {
        throw new Error("Invalid base url");
      }
      if (newOrigin === void 0) {
        Object.defineProperty(globalThis, globalOrigin, {
          value: void 0,
          writable: true,
          enumerable: false,
          configurable: false
        });
        return;
      }
      const parsedURL = new URL(newOrigin);
      if (parsedURL.protocol !== "http:" && parsedURL.protocol !== "https:") {
        throw new TypeError(`Only http & https urls are allowed, received ${parsedURL.protocol}`);
      }
      Object.defineProperty(globalThis, globalOrigin, {
        value: parsedURL,
        writable: true,
        enumerable: false,
        configurable: false
      });
    }
    module2.exports = {
      getGlobalOrigin,
      setGlobalOrigin
    };
  }
});

// node_modules/undici/lib/fetch/response.js
var require_response = __commonJS({
  "node_modules/undici/lib/fetch/response.js"(exports, module2) {
    "use strict";
    init_shims();
    var { Headers: Headers3, HeadersList, fill } = require_headers();
    var { extractBody, cloneBody, mixinBody } = require_body();
    var util = require_util();
    var { kEnumerableProperty } = util;
    var {
      isValidReasonPhrase,
      isCancelled,
      isAborted,
      isBlobLike,
      serializeJavascriptValueToJSONString,
      isErrorLike,
      isomorphicEncode
    } = require_util2();
    var {
      redirectStatus,
      nullBodyStatus,
      DOMException
    } = require_constants();
    var { kState, kHeaders, kGuard, kRealm } = require_symbols2();
    var { webidl } = require_webidl();
    var { FormData: FormData2 } = require_formdata();
    var { getGlobalOrigin } = require_global2();
    var { URLSerializer } = require_dataURL();
    var { kHeadersList } = require_symbols();
    var assert = require("assert");
    var { types } = require("util");
    var ReadableStream3 = globalThis.ReadableStream || require("stream/web").ReadableStream;
    var Response3 = class {
      // Creates network error Response.
      static error() {
        const relevantRealm = { settingsObject: {} };
        const responseObject = new Response3();
        responseObject[kState] = makeNetworkError();
        responseObject[kRealm] = relevantRealm;
        responseObject[kHeaders][kHeadersList] = responseObject[kState].headersList;
        responseObject[kHeaders][kGuard] = "immutable";
        responseObject[kHeaders][kRealm] = relevantRealm;
        return responseObject;
      }
      // https://fetch.spec.whatwg.org/#dom-response-json
      static json(data = void 0, init3 = {}) {
        webidl.argumentLengthCheck(arguments, 1, { header: "Response.json" });
        if (init3 !== null) {
          init3 = webidl.converters.ResponseInit(init3);
        }
        const bytes = new TextEncoder("utf-8").encode(
          serializeJavascriptValueToJSONString(data)
        );
        const body = extractBody(bytes);
        const relevantRealm = { settingsObject: {} };
        const responseObject = new Response3();
        responseObject[kRealm] = relevantRealm;
        responseObject[kHeaders][kGuard] = "response";
        responseObject[kHeaders][kRealm] = relevantRealm;
        initializeResponse(responseObject, init3, { body: body[0], type: "application/json" });
        return responseObject;
      }
      // Creates a redirect Response that redirects to url with status status.
      static redirect(url, status = 302) {
        const relevantRealm = { settingsObject: {} };
        webidl.argumentLengthCheck(arguments, 1, { header: "Response.redirect" });
        url = webidl.converters.USVString(url);
        status = webidl.converters["unsigned short"](status);
        let parsedURL;
        try {
          parsedURL = new URL(url, getGlobalOrigin());
        } catch (err) {
          throw Object.assign(new TypeError("Failed to parse URL from " + url), {
            cause: err
          });
        }
        if (!redirectStatus.includes(status)) {
          throw new RangeError("Invalid status code " + status);
        }
        const responseObject = new Response3();
        responseObject[kRealm] = relevantRealm;
        responseObject[kHeaders][kGuard] = "immutable";
        responseObject[kHeaders][kRealm] = relevantRealm;
        responseObject[kState].status = status;
        const value = isomorphicEncode(URLSerializer(parsedURL));
        responseObject[kState].headersList.append("location", value);
        return responseObject;
      }
      // https://fetch.spec.whatwg.org/#dom-response
      constructor(body = null, init3 = {}) {
        if (body !== null) {
          body = webidl.converters.BodyInit(body);
        }
        init3 = webidl.converters.ResponseInit(init3);
        this[kRealm] = { settingsObject: {} };
        this[kState] = makeResponse({});
        this[kHeaders] = new Headers3();
        this[kHeaders][kGuard] = "response";
        this[kHeaders][kHeadersList] = this[kState].headersList;
        this[kHeaders][kRealm] = this[kRealm];
        let bodyWithType = null;
        if (body != null) {
          const [extractedBody, type] = extractBody(body);
          bodyWithType = { body: extractedBody, type };
        }
        initializeResponse(this, init3, bodyWithType);
      }
      // Returns response’s type, e.g., "cors".
      get type() {
        webidl.brandCheck(this, Response3);
        return this[kState].type;
      }
      // Returns response’s URL, if it has one; otherwise the empty string.
      get url() {
        webidl.brandCheck(this, Response3);
        const urlList = this[kState].urlList;
        const url = urlList[urlList.length - 1] ?? null;
        if (url === null) {
          return "";
        }
        return URLSerializer(url, true);
      }
      // Returns whether response was obtained through a redirect.
      get redirected() {
        webidl.brandCheck(this, Response3);
        return this[kState].urlList.length > 1;
      }
      // Returns response’s status.
      get status() {
        webidl.brandCheck(this, Response3);
        return this[kState].status;
      }
      // Returns whether response’s status is an ok status.
      get ok() {
        webidl.brandCheck(this, Response3);
        return this[kState].status >= 200 && this[kState].status <= 299;
      }
      // Returns response’s status message.
      get statusText() {
        webidl.brandCheck(this, Response3);
        return this[kState].statusText;
      }
      // Returns response’s headers as Headers.
      get headers() {
        webidl.brandCheck(this, Response3);
        return this[kHeaders];
      }
      get body() {
        webidl.brandCheck(this, Response3);
        return this[kState].body ? this[kState].body.stream : null;
      }
      get bodyUsed() {
        webidl.brandCheck(this, Response3);
        return !!this[kState].body && util.isDisturbed(this[kState].body.stream);
      }
      // Returns a clone of response.
      clone() {
        webidl.brandCheck(this, Response3);
        if (this.bodyUsed || this.body && this.body.locked) {
          throw webidl.errors.exception({
            header: "Response.clone",
            message: "Body has already been consumed."
          });
        }
        const clonedResponse = cloneResponse(this[kState]);
        const clonedResponseObject = new Response3();
        clonedResponseObject[kState] = clonedResponse;
        clonedResponseObject[kRealm] = this[kRealm];
        clonedResponseObject[kHeaders][kHeadersList] = clonedResponse.headersList;
        clonedResponseObject[kHeaders][kGuard] = this[kHeaders][kGuard];
        clonedResponseObject[kHeaders][kRealm] = this[kHeaders][kRealm];
        return clonedResponseObject;
      }
    };
    mixinBody(Response3);
    Object.defineProperties(Response3.prototype, {
      type: kEnumerableProperty,
      url: kEnumerableProperty,
      status: kEnumerableProperty,
      ok: kEnumerableProperty,
      redirected: kEnumerableProperty,
      statusText: kEnumerableProperty,
      headers: kEnumerableProperty,
      clone: kEnumerableProperty,
      body: kEnumerableProperty,
      bodyUsed: kEnumerableProperty,
      [Symbol.toStringTag]: {
        value: "Response",
        configurable: true
      }
    });
    Object.defineProperties(Response3, {
      json: kEnumerableProperty,
      redirect: kEnumerableProperty,
      error: kEnumerableProperty
    });
    function cloneResponse(response) {
      if (response.internalResponse) {
        return filterResponse(
          cloneResponse(response.internalResponse),
          response.type
        );
      }
      const newResponse = makeResponse({ ...response, body: null });
      if (response.body != null) {
        newResponse.body = cloneBody(response.body);
      }
      return newResponse;
    }
    function makeResponse(init3) {
      return {
        aborted: false,
        rangeRequested: false,
        timingAllowPassed: false,
        requestIncludesCredentials: false,
        type: "default",
        status: 200,
        timingInfo: null,
        cacheState: "",
        statusText: "",
        ...init3,
        headersList: init3.headersList ? new HeadersList(init3.headersList) : new HeadersList(),
        urlList: init3.urlList ? [...init3.urlList] : []
      };
    }
    function makeNetworkError(reason) {
      const isError = isErrorLike(reason);
      return makeResponse({
        type: "error",
        status: 0,
        error: isError ? reason : new Error(reason ? String(reason) : reason, {
          cause: isError ? reason : void 0
        }),
        aborted: reason && reason.name === "AbortError"
      });
    }
    function makeFilteredResponse(response, state) {
      state = {
        internalResponse: response,
        ...state
      };
      return new Proxy(response, {
        get(target, p4) {
          return p4 in state ? state[p4] : target[p4];
        },
        set(target, p4, value) {
          assert(!(p4 in state));
          target[p4] = value;
          return true;
        }
      });
    }
    function filterResponse(response, type) {
      if (type === "basic") {
        return makeFilteredResponse(response, {
          type: "basic",
          headersList: response.headersList
        });
      } else if (type === "cors") {
        return makeFilteredResponse(response, {
          type: "cors",
          headersList: response.headersList
        });
      } else if (type === "opaque") {
        return makeFilteredResponse(response, {
          type: "opaque",
          urlList: Object.freeze([]),
          status: 0,
          statusText: "",
          body: null
        });
      } else if (type === "opaqueredirect") {
        return makeFilteredResponse(response, {
          type: "opaqueredirect",
          status: 0,
          statusText: "",
          headersList: [],
          body: null
        });
      } else {
        assert(false);
      }
    }
    function makeAppropriateNetworkError(fetchParams) {
      assert(isCancelled(fetchParams));
      return isAborted(fetchParams) ? makeNetworkError(new DOMException("The operation was aborted.", "AbortError")) : makeNetworkError("Request was cancelled.");
    }
    function initializeResponse(response, init3, body) {
      if (init3.status !== null && (init3.status < 200 || init3.status > 599)) {
        throw new RangeError('init["status"] must be in the range of 200 to 599, inclusive.');
      }
      if ("statusText" in init3 && init3.statusText != null) {
        if (!isValidReasonPhrase(String(init3.statusText))) {
          throw new TypeError("Invalid statusText");
        }
      }
      if ("status" in init3 && init3.status != null) {
        response[kState].status = init3.status;
      }
      if ("statusText" in init3 && init3.statusText != null) {
        response[kState].statusText = init3.statusText;
      }
      if ("headers" in init3 && init3.headers != null) {
        fill(response[kState].headersList, init3.headers);
      }
      if (body) {
        if (nullBodyStatus.includes(response.status)) {
          throw webidl.errors.exception({
            header: "Response constructor",
            message: "Invalid response status code " + response.status
          });
        }
        response[kState].body = body.body;
        if (body.type != null && !response[kState].headersList.contains("Content-Type")) {
          response[kState].headersList.append("content-type", body.type);
        }
      }
    }
    webidl.converters.ReadableStream = webidl.interfaceConverter(
      ReadableStream3
    );
    webidl.converters.FormData = webidl.interfaceConverter(
      FormData2
    );
    webidl.converters.URLSearchParams = webidl.interfaceConverter(
      URLSearchParams
    );
    webidl.converters.XMLHttpRequestBodyInit = function(V) {
      if (typeof V === "string") {
        return webidl.converters.USVString(V);
      }
      if (isBlobLike(V)) {
        return webidl.converters.Blob(V, { strict: false });
      }
      if (types.isAnyArrayBuffer(V) || types.isTypedArray(V) || types.isDataView(V)) {
        return webidl.converters.BufferSource(V);
      }
      if (util.isFormDataLike(V)) {
        return webidl.converters.FormData(V, { strict: false });
      }
      if (V instanceof URLSearchParams) {
        return webidl.converters.URLSearchParams(V);
      }
      return webidl.converters.DOMString(V);
    };
    webidl.converters.BodyInit = function(V) {
      if (V instanceof ReadableStream3) {
        return webidl.converters.ReadableStream(V);
      }
      if (V == null ? void 0 : V[Symbol.asyncIterator]) {
        return V;
      }
      return webidl.converters.XMLHttpRequestBodyInit(V);
    };
    webidl.converters.ResponseInit = webidl.dictionaryConverter([
      {
        key: "status",
        converter: webidl.converters["unsigned short"],
        defaultValue: 200
      },
      {
        key: "statusText",
        converter: webidl.converters.ByteString,
        defaultValue: ""
      },
      {
        key: "headers",
        converter: webidl.converters.HeadersInit
      }
    ]);
    module2.exports = {
      makeNetworkError,
      makeResponse,
      makeAppropriateNetworkError,
      filterResponse,
      Response: Response3
    };
  }
});

// node_modules/undici/lib/fetch/request.js
var require_request2 = __commonJS({
  "node_modules/undici/lib/fetch/request.js"(exports, module2) {
    "use strict";
    init_shims();
    var { extractBody, mixinBody, cloneBody } = require_body();
    var { Headers: Headers3, fill: fillHeaders, HeadersList } = require_headers();
    var { FinalizationRegistry } = require_dispatcher_weakref()();
    var util = require_util();
    var {
      isValidHTTPToken,
      sameOrigin,
      normalizeMethod
    } = require_util2();
    var {
      forbiddenMethods,
      corsSafeListedMethods,
      referrerPolicy,
      requestRedirect,
      requestMode,
      requestCredentials,
      requestCache,
      requestDuplex
    } = require_constants();
    var { kEnumerableProperty } = util;
    var { kHeaders, kSignal, kState, kGuard, kRealm } = require_symbols2();
    var { webidl } = require_webidl();
    var { getGlobalOrigin } = require_global2();
    var { URLSerializer } = require_dataURL();
    var { kHeadersList } = require_symbols();
    var assert = require("assert");
    var { setMaxListeners, getEventListeners, defaultMaxListeners } = require("events");
    var TransformStream2 = globalThis.TransformStream;
    var kInit = Symbol("init");
    var requestFinalizer = new FinalizationRegistry(({ signal, abort }) => {
      signal.removeEventListener("abort", abort);
    });
    var Request3 = class {
      // https://fetch.spec.whatwg.org/#dom-request
      constructor(input, init3 = {}) {
        var _a, _b;
        if (input === kInit) {
          return;
        }
        webidl.argumentLengthCheck(arguments, 1, { header: "Request constructor" });
        input = webidl.converters.RequestInfo(input);
        init3 = webidl.converters.RequestInit(init3);
        this[kRealm] = {
          settingsObject: {
            baseUrl: getGlobalOrigin()
          }
        };
        let request = null;
        let fallbackMode = null;
        const baseUrl = this[kRealm].settingsObject.baseUrl;
        let signal = null;
        if (typeof input === "string") {
          let parsedURL;
          try {
            parsedURL = new URL(input, baseUrl);
          } catch (err) {
            throw new TypeError("Failed to parse URL from " + input, { cause: err });
          }
          if (parsedURL.username || parsedURL.password) {
            throw new TypeError(
              "Request cannot be constructed from a URL that includes credentials: " + input
            );
          }
          request = makeRequest({ urlList: [parsedURL] });
          fallbackMode = "cors";
        } else {
          assert(input instanceof Request3);
          request = input[kState];
          signal = input[kSignal];
        }
        const origin = this[kRealm].settingsObject.origin;
        let window2 = "client";
        if (((_b = (_a = request.window) == null ? void 0 : _a.constructor) == null ? void 0 : _b.name) === "EnvironmentSettingsObject" && sameOrigin(request.window, origin)) {
          window2 = request.window;
        }
        if (init3.window !== void 0 && init3.window != null) {
          throw new TypeError(`'window' option '${window2}' must be null`);
        }
        if (init3.window !== void 0) {
          window2 = "no-window";
        }
        request = makeRequest({
          // URL request’s URL.
          // undici implementation note: this is set as the first item in request's urlList in makeRequest
          // method request’s method.
          method: request.method,
          // header list A copy of request’s header list.
          // undici implementation note: headersList is cloned in makeRequest
          headersList: request.headersList,
          // unsafe-request flag Set.
          unsafeRequest: request.unsafeRequest,
          // client This’s relevant settings object.
          client: this[kRealm].settingsObject,
          // window window.
          window: window2,
          // priority request’s priority.
          priority: request.priority,
          // origin request’s origin. The propagation of the origin is only significant for navigation requests
          // being handled by a service worker. In this scenario a request can have an origin that is different
          // from the current client.
          origin: request.origin,
          // referrer request’s referrer.
          referrer: request.referrer,
          // referrer policy request’s referrer policy.
          referrerPolicy: request.referrerPolicy,
          // mode request’s mode.
          mode: request.mode,
          // credentials mode request’s credentials mode.
          credentials: request.credentials,
          // cache mode request’s cache mode.
          cache: request.cache,
          // redirect mode request’s redirect mode.
          redirect: request.redirect,
          // integrity metadata request’s integrity metadata.
          integrity: request.integrity,
          // keepalive request’s keepalive.
          keepalive: request.keepalive,
          // reload-navigation flag request’s reload-navigation flag.
          reloadNavigation: request.reloadNavigation,
          // history-navigation flag request’s history-navigation flag.
          historyNavigation: request.historyNavigation,
          // URL list A clone of request’s URL list.
          urlList: [...request.urlList]
        });
        if (Object.keys(init3).length > 0) {
          if (request.mode === "navigate") {
            request.mode = "same-origin";
          }
          request.reloadNavigation = false;
          request.historyNavigation = false;
          request.origin = "client";
          request.referrer = "client";
          request.referrerPolicy = "";
          request.url = request.urlList[request.urlList.length - 1];
          request.urlList = [request.url];
        }
        if (init3.referrer !== void 0) {
          const referrer = init3.referrer;
          if (referrer === "") {
            request.referrer = "no-referrer";
          } else {
            let parsedReferrer;
            try {
              parsedReferrer = new URL(referrer, baseUrl);
            } catch (err) {
              throw new TypeError(`Referrer "${referrer}" is not a valid URL.`, { cause: err });
            }
            request.referrer = parsedReferrer;
          }
        }
        if (init3.referrerPolicy !== void 0) {
          request.referrerPolicy = init3.referrerPolicy;
        }
        let mode;
        if (init3.mode !== void 0) {
          mode = init3.mode;
        } else {
          mode = fallbackMode;
        }
        if (mode === "navigate") {
          throw webidl.errors.exception({
            header: "Request constructor",
            message: "invalid request mode navigate."
          });
        }
        if (mode != null) {
          request.mode = mode;
        }
        if (init3.credentials !== void 0) {
          request.credentials = init3.credentials;
        }
        if (init3.cache !== void 0) {
          request.cache = init3.cache;
        }
        if (request.cache === "only-if-cached" && request.mode !== "same-origin") {
          throw new TypeError(
            "'only-if-cached' can be set only with 'same-origin' mode"
          );
        }
        if (init3.redirect !== void 0) {
          request.redirect = init3.redirect;
        }
        if (init3.integrity !== void 0 && init3.integrity != null) {
          request.integrity = String(init3.integrity);
        }
        if (init3.keepalive !== void 0) {
          request.keepalive = Boolean(init3.keepalive);
        }
        if (init3.method !== void 0) {
          let method = init3.method;
          if (!isValidHTTPToken(init3.method)) {
            throw TypeError(`'${init3.method}' is not a valid HTTP method.`);
          }
          if (forbiddenMethods.indexOf(method.toUpperCase()) !== -1) {
            throw TypeError(`'${init3.method}' HTTP method is unsupported.`);
          }
          method = normalizeMethod(init3.method);
          request.method = method;
        }
        if (init3.signal !== void 0) {
          signal = init3.signal;
        }
        this[kState] = request;
        const ac = new AbortController();
        this[kSignal] = ac.signal;
        this[kSignal][kRealm] = this[kRealm];
        if (signal != null) {
          if (!signal || typeof signal.aborted !== "boolean" || typeof signal.addEventListener !== "function") {
            throw new TypeError(
              "Failed to construct 'Request': member signal is not of type AbortSignal."
            );
          }
          if (signal.aborted) {
            ac.abort(signal.reason);
          } else {
            const acRef = new WeakRef(ac);
            const abort = function() {
              var _a2;
              (_a2 = acRef.deref()) == null ? void 0 : _a2.abort(this.reason);
            };
            if (getEventListeners(signal, "abort").length >= defaultMaxListeners) {
              setMaxListeners(100, signal);
            }
            signal.addEventListener("abort", abort, { once: true });
            requestFinalizer.register(this, { signal, abort });
          }
        }
        this[kHeaders] = new Headers3();
        this[kHeaders][kHeadersList] = request.headersList;
        this[kHeaders][kGuard] = "request";
        this[kHeaders][kRealm] = this[kRealm];
        if (mode === "no-cors") {
          if (!corsSafeListedMethods.includes(request.method)) {
            throw new TypeError(
              `'${request.method} is unsupported in no-cors mode.`
            );
          }
          this[kHeaders][kGuard] = "request-no-cors";
        }
        if (Object.keys(init3).length !== 0) {
          let headers = new Headers3(this[kHeaders]);
          if (init3.headers !== void 0) {
            headers = init3.headers;
          }
          this[kHeaders][kHeadersList].clear();
          if (headers.constructor.name === "Headers") {
            for (const [key2, val] of headers) {
              this[kHeaders].append(key2, val);
            }
          } else {
            fillHeaders(this[kHeaders], headers);
          }
        }
        const inputBody = input instanceof Request3 ? input[kState].body : null;
        if ((init3.body !== void 0 && init3.body != null || inputBody != null) && (request.method === "GET" || request.method === "HEAD")) {
          throw new TypeError("Request with GET/HEAD method cannot have body.");
        }
        let initBody = null;
        if (init3.body !== void 0 && init3.body != null) {
          const [extractedBody, contentType] = extractBody(
            init3.body,
            request.keepalive
          );
          initBody = extractedBody;
          if (contentType && !this[kHeaders][kHeadersList].contains("content-type")) {
            this[kHeaders].append("content-type", contentType);
          }
        }
        const inputOrInitBody = initBody ?? inputBody;
        if (inputOrInitBody != null && inputOrInitBody.source == null) {
          if (initBody != null && init3.duplex == null) {
            throw new TypeError("RequestInit: duplex option is required when sending a body.");
          }
          if (request.mode !== "same-origin" && request.mode !== "cors") {
            throw new TypeError(
              'If request is made from ReadableStream, mode should be "same-origin" or "cors"'
            );
          }
          request.useCORSPreflightFlag = true;
        }
        let finalBody = inputOrInitBody;
        if (initBody == null && inputBody != null) {
          if (util.isDisturbed(inputBody.stream) || inputBody.stream.locked) {
            throw new TypeError(
              "Cannot construct a Request with a Request object that has already been used."
            );
          }
          if (!TransformStream2) {
            TransformStream2 = require("stream/web").TransformStream;
          }
          const identityTransform = new TransformStream2();
          inputBody.stream.pipeThrough(identityTransform);
          finalBody = {
            source: inputBody.source,
            length: inputBody.length,
            stream: identityTransform.readable
          };
        }
        this[kState].body = finalBody;
      }
      // Returns request’s HTTP method, which is "GET" by default.
      get method() {
        webidl.brandCheck(this, Request3);
        return this[kState].method;
      }
      // Returns the URL of request as a string.
      get url() {
        webidl.brandCheck(this, Request3);
        return URLSerializer(this[kState].url);
      }
      // Returns a Headers object consisting of the headers associated with request.
      // Note that headers added in the network layer by the user agent will not
      // be accounted for in this object, e.g., the "Host" header.
      get headers() {
        webidl.brandCheck(this, Request3);
        return this[kHeaders];
      }
      // Returns the kind of resource requested by request, e.g., "document"
      // or "script".
      get destination() {
        webidl.brandCheck(this, Request3);
        return this[kState].destination;
      }
      // Returns the referrer of request. Its value can be a same-origin URL if
      // explicitly set in init, the empty string to indicate no referrer, and
      // "about:client" when defaulting to the global’s default. This is used
      // during fetching to determine the value of the `Referer` header of the
      // request being made.
      get referrer() {
        webidl.brandCheck(this, Request3);
        if (this[kState].referrer === "no-referrer") {
          return "";
        }
        if (this[kState].referrer === "client") {
          return "about:client";
        }
        return this[kState].referrer.toString();
      }
      // Returns the referrer policy associated with request.
      // This is used during fetching to compute the value of the request’s
      // referrer.
      get referrerPolicy() {
        webidl.brandCheck(this, Request3);
        return this[kState].referrerPolicy;
      }
      // Returns the mode associated with request, which is a string indicating
      // whether the request will use CORS, or will be restricted to same-origin
      // URLs.
      get mode() {
        webidl.brandCheck(this, Request3);
        return this[kState].mode;
      }
      // Returns the credentials mode associated with request,
      // which is a string indicating whether credentials will be sent with the
      // request always, never, or only when sent to a same-origin URL.
      get credentials() {
        return this[kState].credentials;
      }
      // Returns the cache mode associated with request,
      // which is a string indicating how the request will
      // interact with the browser’s cache when fetching.
      get cache() {
        webidl.brandCheck(this, Request3);
        return this[kState].cache;
      }
      // Returns the redirect mode associated with request,
      // which is a string indicating how redirects for the
      // request will be handled during fetching. A request
      // will follow redirects by default.
      get redirect() {
        webidl.brandCheck(this, Request3);
        return this[kState].redirect;
      }
      // Returns request’s subresource integrity metadata, which is a
      // cryptographic hash of the resource being fetched. Its value
      // consists of multiple hashes separated by whitespace. [SRI]
      get integrity() {
        webidl.brandCheck(this, Request3);
        return this[kState].integrity;
      }
      // Returns a boolean indicating whether or not request can outlive the
      // global in which it was created.
      get keepalive() {
        webidl.brandCheck(this, Request3);
        return this[kState].keepalive;
      }
      // Returns a boolean indicating whether or not request is for a reload
      // navigation.
      get isReloadNavigation() {
        webidl.brandCheck(this, Request3);
        return this[kState].reloadNavigation;
      }
      // Returns a boolean indicating whether or not request is for a history
      // navigation (a.k.a. back-foward navigation).
      get isHistoryNavigation() {
        webidl.brandCheck(this, Request3);
        return this[kState].historyNavigation;
      }
      // Returns the signal associated with request, which is an AbortSignal
      // object indicating whether or not request has been aborted, and its
      // abort event handler.
      get signal() {
        webidl.brandCheck(this, Request3);
        return this[kSignal];
      }
      get body() {
        webidl.brandCheck(this, Request3);
        return this[kState].body ? this[kState].body.stream : null;
      }
      get bodyUsed() {
        webidl.brandCheck(this, Request3);
        return !!this[kState].body && util.isDisturbed(this[kState].body.stream);
      }
      get duplex() {
        webidl.brandCheck(this, Request3);
        return "half";
      }
      // Returns a clone of request.
      clone() {
        var _a;
        webidl.brandCheck(this, Request3);
        if (this.bodyUsed || ((_a = this.body) == null ? void 0 : _a.locked)) {
          throw new TypeError("unusable");
        }
        const clonedRequest = cloneRequest(this[kState]);
        const clonedRequestObject = new Request3(kInit);
        clonedRequestObject[kState] = clonedRequest;
        clonedRequestObject[kRealm] = this[kRealm];
        clonedRequestObject[kHeaders] = new Headers3();
        clonedRequestObject[kHeaders][kHeadersList] = clonedRequest.headersList;
        clonedRequestObject[kHeaders][kGuard] = this[kHeaders][kGuard];
        clonedRequestObject[kHeaders][kRealm] = this[kHeaders][kRealm];
        const ac = new AbortController();
        if (this.signal.aborted) {
          ac.abort(this.signal.reason);
        } else {
          this.signal.addEventListener(
            "abort",
            () => {
              ac.abort(this.signal.reason);
            },
            { once: true }
          );
        }
        clonedRequestObject[kSignal] = ac.signal;
        return clonedRequestObject;
      }
    };
    mixinBody(Request3);
    function makeRequest(init3) {
      const request = {
        method: "GET",
        localURLsOnly: false,
        unsafeRequest: false,
        body: null,
        client: null,
        reservedClient: null,
        replacesClientId: "",
        window: "client",
        keepalive: false,
        serviceWorkers: "all",
        initiator: "",
        destination: "",
        priority: null,
        origin: "client",
        policyContainer: "client",
        referrer: "client",
        referrerPolicy: "",
        mode: "no-cors",
        useCORSPreflightFlag: false,
        credentials: "same-origin",
        useCredentials: false,
        cache: "default",
        redirect: "follow",
        integrity: "",
        cryptoGraphicsNonceMetadata: "",
        parserMetadata: "",
        reloadNavigation: false,
        historyNavigation: false,
        userActivation: false,
        taintedOrigin: false,
        redirectCount: 0,
        responseTainting: "basic",
        preventNoCacheCacheControlHeaderModification: false,
        done: false,
        timingAllowFailed: false,
        ...init3,
        headersList: init3.headersList ? new HeadersList(init3.headersList) : new HeadersList()
      };
      request.url = request.urlList[0];
      return request;
    }
    function cloneRequest(request) {
      const newRequest = makeRequest({ ...request, body: null });
      if (request.body != null) {
        newRequest.body = cloneBody(request.body);
      }
      return newRequest;
    }
    Object.defineProperties(Request3.prototype, {
      method: kEnumerableProperty,
      url: kEnumerableProperty,
      headers: kEnumerableProperty,
      redirect: kEnumerableProperty,
      clone: kEnumerableProperty,
      signal: kEnumerableProperty,
      duplex: kEnumerableProperty,
      destination: kEnumerableProperty,
      body: kEnumerableProperty,
      bodyUsed: kEnumerableProperty,
      isHistoryNavigation: kEnumerableProperty,
      isReloadNavigation: kEnumerableProperty,
      keepalive: kEnumerableProperty,
      integrity: kEnumerableProperty,
      cache: kEnumerableProperty,
      credentials: kEnumerableProperty,
      attribute: kEnumerableProperty,
      referrerPolicy: kEnumerableProperty,
      referrer: kEnumerableProperty,
      mode: kEnumerableProperty,
      [Symbol.toStringTag]: {
        value: "Request",
        configurable: true
      }
    });
    webidl.converters.Request = webidl.interfaceConverter(
      Request3
    );
    webidl.converters.RequestInfo = function(V) {
      if (typeof V === "string") {
        return webidl.converters.USVString(V);
      }
      if (V instanceof Request3) {
        return webidl.converters.Request(V);
      }
      return webidl.converters.USVString(V);
    };
    webidl.converters.AbortSignal = webidl.interfaceConverter(
      AbortSignal
    );
    webidl.converters.RequestInit = webidl.dictionaryConverter([
      {
        key: "method",
        converter: webidl.converters.ByteString
      },
      {
        key: "headers",
        converter: webidl.converters.HeadersInit
      },
      {
        key: "body",
        converter: webidl.nullableConverter(
          webidl.converters.BodyInit
        )
      },
      {
        key: "referrer",
        converter: webidl.converters.USVString
      },
      {
        key: "referrerPolicy",
        converter: webidl.converters.DOMString,
        // https://w3c.github.io/webappsec-referrer-policy/#referrer-policy
        allowedValues: referrerPolicy
      },
      {
        key: "mode",
        converter: webidl.converters.DOMString,
        // https://fetch.spec.whatwg.org/#concept-request-mode
        allowedValues: requestMode
      },
      {
        key: "credentials",
        converter: webidl.converters.DOMString,
        // https://fetch.spec.whatwg.org/#requestcredentials
        allowedValues: requestCredentials
      },
      {
        key: "cache",
        converter: webidl.converters.DOMString,
        // https://fetch.spec.whatwg.org/#requestcache
        allowedValues: requestCache
      },
      {
        key: "redirect",
        converter: webidl.converters.DOMString,
        // https://fetch.spec.whatwg.org/#requestredirect
        allowedValues: requestRedirect
      },
      {
        key: "integrity",
        converter: webidl.converters.DOMString
      },
      {
        key: "keepalive",
        converter: webidl.converters.boolean
      },
      {
        key: "signal",
        converter: webidl.nullableConverter(
          (signal) => webidl.converters.AbortSignal(
            signal,
            { strict: false }
          )
        )
      },
      {
        key: "window",
        converter: webidl.converters.any
      },
      {
        key: "duplex",
        converter: webidl.converters.DOMString,
        allowedValues: requestDuplex
      }
    ]);
    module2.exports = { Request: Request3, makeRequest };
  }
});

// node_modules/undici/lib/fetch/index.js
var require_fetch = __commonJS({
  "node_modules/undici/lib/fetch/index.js"(exports, module2) {
    "use strict";
    init_shims();
    var {
      Response: Response3,
      makeNetworkError,
      makeAppropriateNetworkError,
      filterResponse,
      makeResponse
    } = require_response();
    var { Headers: Headers3 } = require_headers();
    var { Request: Request3, makeRequest } = require_request2();
    var zlib = require("zlib");
    var {
      bytesMatch,
      makePolicyContainer,
      clonePolicyContainer,
      requestBadPort,
      TAOCheck,
      appendRequestOriginHeader,
      responseLocationURL,
      requestCurrentURL,
      setRequestReferrerPolicyOnRedirect,
      tryUpgradeRequestToAPotentiallyTrustworthyURL,
      createOpaqueTimingInfo,
      appendFetchMetadata,
      corsCheck,
      crossOriginResourcePolicyCheck,
      determineRequestsReferrer,
      coarsenedSharedCurrentTime,
      createDeferredPromise,
      isBlobLike,
      sameOrigin,
      isCancelled,
      isAborted,
      isErrorLike,
      fullyReadBody,
      readableStreamClose,
      isomorphicEncode
    } = require_util2();
    var { kState, kHeaders, kGuard, kRealm, kHeadersCaseInsensitive } = require_symbols2();
    var assert = require("assert");
    var { safelyExtractBody } = require_body();
    var {
      redirectStatus,
      nullBodyStatus,
      safeMethods,
      requestBodyHeader,
      subresource,
      DOMException
    } = require_constants();
    var { kHeadersList } = require_symbols();
    var EE = require("events");
    var { Readable, pipeline } = require("stream");
    var { isErrored, isReadable, nodeMajor, nodeMinor } = require_util();
    var { dataURLProcessor, serializeAMimeType } = require_dataURL();
    var { TransformStream: TransformStream2 } = require("stream/web");
    var { getGlobalDispatcher } = require_global();
    var { webidl } = require_webidl();
    var { STATUS_CODES } = require("http");
    var resolveObjectURL;
    var ReadableStream3 = globalThis.ReadableStream;
    var Fetch = class extends EE {
      constructor(dispatcher) {
        super();
        this.dispatcher = dispatcher;
        this.connection = null;
        this.dump = false;
        this.state = "ongoing";
        this.setMaxListeners(21);
      }
      terminate(reason) {
        var _a;
        if (this.state !== "ongoing") {
          return;
        }
        this.state = "terminated";
        (_a = this.connection) == null ? void 0 : _a.destroy(reason);
        this.emit("terminated", reason);
      }
      // https://fetch.spec.whatwg.org/#fetch-controller-abort
      abort(error2) {
        var _a;
        if (this.state !== "ongoing") {
          return;
        }
        this.state = "aborted";
        if (!error2) {
          error2 = new DOMException("The operation was aborted.", "AbortError");
        }
        this.serializedAbortReason = error2;
        (_a = this.connection) == null ? void 0 : _a.destroy(error2);
        this.emit("terminated", error2);
      }
    };
    async function fetch3(input, init3 = {}) {
      var _a;
      webidl.argumentLengthCheck(arguments, 1, { header: "globalThis.fetch" });
      const p4 = createDeferredPromise();
      let requestObject;
      try {
        requestObject = new Request3(input, init3);
      } catch (e3) {
        p4.reject(e3);
        return p4.promise;
      }
      const request = requestObject[kState];
      if (requestObject.signal.aborted) {
        abortFetch(p4, request, null, requestObject.signal.reason);
        return p4.promise;
      }
      const globalObject = request.client.globalObject;
      if (((_a = globalObject == null ? void 0 : globalObject.constructor) == null ? void 0 : _a.name) === "ServiceWorkerGlobalScope") {
        request.serviceWorkers = "none";
      }
      let responseObject = null;
      const relevantRealm = null;
      let locallyAborted = false;
      let controller = null;
      requestObject.signal.addEventListener(
        "abort",
        () => {
          locallyAborted = true;
          abortFetch(p4, request, responseObject, requestObject.signal.reason);
          if (controller != null) {
            controller.abort();
          }
        },
        { once: true }
      );
      const handleFetchDone = (response) => finalizeAndReportTiming(response, "fetch");
      const processResponse = (response) => {
        if (locallyAborted) {
          return;
        }
        if (response.aborted) {
          abortFetch(p4, request, responseObject, controller.serializedAbortReason);
          return;
        }
        if (response.type === "error") {
          p4.reject(
            Object.assign(new TypeError("fetch failed"), { cause: response.error })
          );
          return;
        }
        responseObject = new Response3();
        responseObject[kState] = response;
        responseObject[kRealm] = relevantRealm;
        responseObject[kHeaders][kHeadersList] = response.headersList;
        responseObject[kHeaders][kGuard] = "immutable";
        responseObject[kHeaders][kRealm] = relevantRealm;
        p4.resolve(responseObject);
      };
      controller = fetching({
        request,
        processResponseEndOfBody: handleFetchDone,
        processResponse,
        dispatcher: init3.dispatcher ?? getGlobalDispatcher()
        // undici
      });
      return p4.promise;
    }
    function finalizeAndReportTiming(response, initiatorType = "other") {
      var _a;
      if (response.type === "error" && response.aborted) {
        return;
      }
      if (!((_a = response.urlList) == null ? void 0 : _a.length)) {
        return;
      }
      const originalURL = response.urlList[0];
      let timingInfo = response.timingInfo;
      let cacheState = response.cacheState;
      if (!/^https?:/.test(originalURL.protocol)) {
        return;
      }
      if (timingInfo === null) {
        return;
      }
      if (!timingInfo.timingAllowPassed) {
        timingInfo = createOpaqueTimingInfo({
          startTime: timingInfo.startTime
        });
        cacheState = "";
      }
      response.timingInfo.endTime = coarsenedSharedCurrentTime();
      response.timingInfo = timingInfo;
      markResourceTiming(
        timingInfo,
        originalURL,
        initiatorType,
        globalThis,
        cacheState
      );
    }
    function markResourceTiming(timingInfo, originalURL, initiatorType, globalThis2, cacheState) {
      if (nodeMajor >= 18 && nodeMinor >= 2) {
        performance.markResourceTiming(timingInfo, originalURL, initiatorType, globalThis2, cacheState);
      }
    }
    function abortFetch(p4, request, responseObject, error2) {
      var _a, _b;
      if (!error2) {
        error2 = new DOMException("The operation was aborted.", "AbortError");
      }
      p4.reject(error2);
      if (request.body != null && isReadable((_a = request.body) == null ? void 0 : _a.stream)) {
        request.body.stream.cancel(error2).catch((err) => {
          if (err.code === "ERR_INVALID_STATE") {
            return;
          }
          throw err;
        });
      }
      if (responseObject == null) {
        return;
      }
      const response = responseObject[kState];
      if (response.body != null && isReadable((_b = response.body) == null ? void 0 : _b.stream)) {
        response.body.stream.cancel(error2).catch((err) => {
          if (err.code === "ERR_INVALID_STATE") {
            return;
          }
          throw err;
        });
      }
    }
    function fetching({
      request,
      processRequestBodyChunkLength,
      processRequestEndOfBody,
      processResponse,
      processResponseEndOfBody,
      processResponseConsumeBody,
      useParallelQueue = false,
      dispatcher
      // undici
    }) {
      var _a, _b, _c, _d;
      let taskDestination = null;
      let crossOriginIsolatedCapability = false;
      if (request.client != null) {
        taskDestination = request.client.globalObject;
        crossOriginIsolatedCapability = request.client.crossOriginIsolatedCapability;
      }
      const currenTime = coarsenedSharedCurrentTime(crossOriginIsolatedCapability);
      const timingInfo = createOpaqueTimingInfo({
        startTime: currenTime
      });
      const fetchParams = {
        controller: new Fetch(dispatcher),
        request,
        timingInfo,
        processRequestBodyChunkLength,
        processRequestEndOfBody,
        processResponse,
        processResponseConsumeBody,
        processResponseEndOfBody,
        taskDestination,
        crossOriginIsolatedCapability
      };
      assert(!request.body || request.body.stream);
      if (request.window === "client") {
        request.window = ((_c = (_b = (_a = request.client) == null ? void 0 : _a.globalObject) == null ? void 0 : _b.constructor) == null ? void 0 : _c.name) === "Window" ? request.client : "no-window";
      }
      if (request.origin === "client") {
        request.origin = (_d = request.client) == null ? void 0 : _d.origin;
      }
      if (request.policyContainer === "client") {
        if (request.client != null) {
          request.policyContainer = clonePolicyContainer(
            request.client.policyContainer
          );
        } else {
          request.policyContainer = makePolicyContainer();
        }
      }
      if (!request.headersList.contains("accept")) {
        const value = "*/*";
        request.headersList.append("accept", value);
      }
      if (!request.headersList.contains("accept-language")) {
        request.headersList.append("accept-language", "*");
      }
      if (request.priority === null) {
      }
      if (subresource.includes(request.destination)) {
      }
      mainFetch(fetchParams).catch((err) => {
        fetchParams.controller.terminate(err);
      });
      return fetchParams.controller;
    }
    async function mainFetch(fetchParams, recursive = false) {
      const request = fetchParams.request;
      let response = null;
      if (request.localURLsOnly && !/^(about|blob|data):/.test(requestCurrentURL(request).protocol)) {
        response = makeNetworkError("local URLs only");
      }
      tryUpgradeRequestToAPotentiallyTrustworthyURL(request);
      if (requestBadPort(request) === "blocked") {
        response = makeNetworkError("bad port");
      }
      if (request.referrerPolicy === "") {
        request.referrerPolicy = request.policyContainer.referrerPolicy;
      }
      if (request.referrer !== "no-referrer") {
        request.referrer = determineRequestsReferrer(request);
      }
      if (response === null) {
        response = await (async () => {
          const currentURL = requestCurrentURL(request);
          if (
            // - request’s current URL’s origin is same origin with request’s origin,
            //   and request’s response tainting is "basic"
            sameOrigin(currentURL, request.url) && request.responseTainting === "basic" || // request’s current URL’s scheme is "data"
            currentURL.protocol === "data:" || // - request’s mode is "navigate" or "websocket"
            (request.mode === "navigate" || request.mode === "websocket")
          ) {
            request.responseTainting = "basic";
            return await schemeFetch(fetchParams);
          }
          if (request.mode === "same-origin") {
            return makeNetworkError('request mode cannot be "same-origin"');
          }
          if (request.mode === "no-cors") {
            if (request.redirect !== "follow") {
              return makeNetworkError(
                'redirect mode cannot be "follow" for "no-cors" request'
              );
            }
            request.responseTainting = "opaque";
            return await schemeFetch(fetchParams);
          }
          if (!/^https?:/.test(requestCurrentURL(request).protocol)) {
            return makeNetworkError("URL scheme must be a HTTP(S) scheme");
          }
          request.responseTainting = "cors";
          return await httpFetch(fetchParams);
        })();
      }
      if (recursive) {
        return response;
      }
      if (response.status !== 0 && !response.internalResponse) {
        if (request.responseTainting === "cors") {
        }
        if (request.responseTainting === "basic") {
          response = filterResponse(response, "basic");
        } else if (request.responseTainting === "cors") {
          response = filterResponse(response, "cors");
        } else if (request.responseTainting === "opaque") {
          response = filterResponse(response, "opaque");
        } else {
          assert(false);
        }
      }
      let internalResponse = response.status === 0 ? response : response.internalResponse;
      if (internalResponse.urlList.length === 0) {
        internalResponse.urlList.push(...request.urlList);
      }
      if (!request.timingAllowFailed) {
        response.timingAllowPassed = true;
      }
      if (response.type === "opaque" && internalResponse.status === 206 && internalResponse.rangeRequested && !request.headers.contains("range")) {
        response = internalResponse = makeNetworkError();
      }
      if (response.status !== 0 && (request.method === "HEAD" || request.method === "CONNECT" || nullBodyStatus.includes(internalResponse.status))) {
        internalResponse.body = null;
        fetchParams.controller.dump = true;
      }
      if (request.integrity) {
        const processBodyError = (reason) => fetchFinale(fetchParams, makeNetworkError(reason));
        if (request.responseTainting === "opaque" || response.body == null) {
          processBodyError(response.error);
          return;
        }
        const processBody = (bytes) => {
          if (!bytesMatch(bytes, request.integrity)) {
            processBodyError("integrity mismatch");
            return;
          }
          response.body = safelyExtractBody(bytes)[0];
          fetchFinale(fetchParams, response);
        };
        await fullyReadBody(response.body, processBody, processBodyError);
      } else {
        fetchFinale(fetchParams, response);
      }
    }
    async function schemeFetch(fetchParams) {
      if (isCancelled(fetchParams) && fetchParams.request.redirectCount === 0) {
        return makeAppropriateNetworkError(fetchParams);
      }
      const { request } = fetchParams;
      const { protocol: scheme } = requestCurrentURL(request);
      switch (scheme) {
        case "about:": {
          return makeNetworkError("about scheme is not supported");
        }
        case "blob:": {
          if (!resolveObjectURL) {
            resolveObjectURL = require("buffer").resolveObjectURL;
          }
          const blobURLEntry = requestCurrentURL(request);
          if (blobURLEntry.search.length !== 0) {
            return makeNetworkError("NetworkError when attempting to fetch resource.");
          }
          const blobURLEntryObject = resolveObjectURL(blobURLEntry.toString());
          if (request.method !== "GET" || !isBlobLike(blobURLEntryObject)) {
            return makeNetworkError("invalid method");
          }
          const bodyWithType = safelyExtractBody(blobURLEntryObject);
          const body = bodyWithType[0];
          const length = isomorphicEncode(`${body.length}`);
          const type = bodyWithType[1] ?? "";
          const response = makeResponse({
            statusText: "OK",
            headersList: [
              ["content-length", { name: "Content-Length", value: length }],
              ["content-type", { name: "Content-Type", value: type }]
            ]
          });
          response.body = body;
          return response;
        }
        case "data:": {
          const currentURL = requestCurrentURL(request);
          const dataURLStruct = dataURLProcessor(currentURL);
          if (dataURLStruct === "failure") {
            return makeNetworkError("failed to fetch the data URL");
          }
          const mimeType = serializeAMimeType(dataURLStruct.mimeType);
          return makeResponse({
            statusText: "OK",
            headersList: [
              ["content-type", { name: "Content-Type", value: mimeType }]
            ],
            body: safelyExtractBody(dataURLStruct.body)[0]
          });
        }
        case "file:": {
          return makeNetworkError("not implemented... yet...");
        }
        case "http:":
        case "https:": {
          return await httpFetch(fetchParams).catch((err) => makeNetworkError(err));
        }
        default: {
          return makeNetworkError("unknown scheme");
        }
      }
    }
    function finalizeResponse(fetchParams, response) {
      fetchParams.request.done = true;
      if (fetchParams.processResponseDone != null) {
        queueMicrotask(() => fetchParams.processResponseDone(response));
      }
    }
    async function fetchFinale(fetchParams, response) {
      if (response.type === "error") {
        response.urlList = [fetchParams.request.urlList[0]];
        response.timingInfo = createOpaqueTimingInfo({
          startTime: fetchParams.timingInfo.startTime
        });
      }
      const processResponseEndOfBody = () => {
        fetchParams.request.done = true;
        if (fetchParams.processResponseEndOfBody != null) {
          queueMicrotask(() => fetchParams.processResponseEndOfBody(response));
        }
      };
      if (fetchParams.processResponse != null) {
        queueMicrotask(() => fetchParams.processResponse(response));
      }
      if (response.body == null) {
        processResponseEndOfBody();
      } else {
        const identityTransformAlgorithm = (chunk, controller) => {
          controller.enqueue(chunk);
        };
        const transformStream = new TransformStream2({
          start() {
          },
          transform: identityTransformAlgorithm,
          flush: processResponseEndOfBody
        }, {
          size() {
            return 1;
          }
        }, {
          size() {
            return 1;
          }
        });
        response.body = { stream: response.body.stream.pipeThrough(transformStream) };
      }
      if (fetchParams.processResponseConsumeBody != null) {
        const processBody = (nullOrBytes) => fetchParams.processResponseConsumeBody(response, nullOrBytes);
        const processBodyError = (failure) => fetchParams.processResponseConsumeBody(response, failure);
        if (response.body == null) {
          queueMicrotask(() => processBody(null));
        } else {
          await fullyReadBody(response.body, processBody, processBodyError);
        }
      }
    }
    async function httpFetch(fetchParams) {
      const request = fetchParams.request;
      let response = null;
      let actualResponse = null;
      const timingInfo = fetchParams.timingInfo;
      if (request.serviceWorkers === "all") {
      }
      if (response === null) {
        if (request.redirect === "follow") {
          request.serviceWorkers = "none";
        }
        actualResponse = response = await httpNetworkOrCacheFetch(fetchParams);
        if (request.responseTainting === "cors" && corsCheck(request, response) === "failure") {
          return makeNetworkError("cors failure");
        }
        if (TAOCheck(request, response) === "failure") {
          request.timingAllowFailed = true;
        }
      }
      if ((request.responseTainting === "opaque" || response.type === "opaque") && crossOriginResourcePolicyCheck(
        request.origin,
        request.client,
        request.destination,
        actualResponse
      ) === "blocked") {
        return makeNetworkError("blocked");
      }
      if (redirectStatus.includes(actualResponse.status)) {
        if (request.redirect !== "manual") {
          fetchParams.controller.connection.destroy();
        }
        if (request.redirect === "error") {
          response = makeNetworkError("unexpected redirect");
        } else if (request.redirect === "manual") {
          response = actualResponse;
        } else if (request.redirect === "follow") {
          response = await httpRedirectFetch(fetchParams, response);
        } else {
          assert(false);
        }
      }
      response.timingInfo = timingInfo;
      return response;
    }
    async function httpRedirectFetch(fetchParams, response) {
      const request = fetchParams.request;
      const actualResponse = response.internalResponse ? response.internalResponse : response;
      let locationURL;
      try {
        locationURL = responseLocationURL(
          actualResponse,
          requestCurrentURL(request).hash
        );
        if (locationURL == null) {
          return response;
        }
      } catch (err) {
        return makeNetworkError(err);
      }
      if (!/^https?:/.test(locationURL.protocol)) {
        return makeNetworkError("URL scheme must be a HTTP(S) scheme");
      }
      if (request.redirectCount === 20) {
        return makeNetworkError("redirect count exceeded");
      }
      request.redirectCount += 1;
      if (request.mode === "cors" && (locationURL.username || locationURL.password) && !sameOrigin(request, locationURL)) {
        return makeNetworkError('cross origin not allowed for request mode "cors"');
      }
      if (request.responseTainting === "cors" && (locationURL.username || locationURL.password)) {
        return makeNetworkError(
          'URL cannot contain credentials for request mode "cors"'
        );
      }
      if (actualResponse.status !== 303 && request.body != null && request.body.source == null) {
        return makeNetworkError();
      }
      if ([301, 302].includes(actualResponse.status) && request.method === "POST" || actualResponse.status === 303 && !["GET", "HEAD"].includes(request.method)) {
        request.method = "GET";
        request.body = null;
        for (const headerName of requestBodyHeader) {
          request.headersList.delete(headerName);
        }
      }
      if (!sameOrigin(requestCurrentURL(request), locationURL)) {
        request.headersList.delete("authorization");
      }
      if (request.body != null) {
        assert(request.body.source);
        request.body = safelyExtractBody(request.body.source)[0];
      }
      const timingInfo = fetchParams.timingInfo;
      timingInfo.redirectEndTime = timingInfo.postRedirectStartTime = coarsenedSharedCurrentTime(fetchParams.crossOriginIsolatedCapability);
      if (timingInfo.redirectStartTime === 0) {
        timingInfo.redirectStartTime = timingInfo.startTime;
      }
      request.urlList.push(locationURL);
      setRequestReferrerPolicyOnRedirect(request, actualResponse);
      return mainFetch(fetchParams, true);
    }
    async function httpNetworkOrCacheFetch(fetchParams, isAuthenticationFetch = false, isNewConnectionFetch = false) {
      const request = fetchParams.request;
      let httpFetchParams = null;
      let httpRequest = null;
      let response = null;
      const httpCache = null;
      const revalidatingFlag = false;
      if (request.window === "no-window" && request.redirect === "error") {
        httpFetchParams = fetchParams;
        httpRequest = request;
      } else {
        httpRequest = makeRequest(request);
        httpFetchParams = { ...fetchParams };
        httpFetchParams.request = httpRequest;
      }
      const includeCredentials = request.credentials === "include" || request.credentials === "same-origin" && request.responseTainting === "basic";
      const contentLength = httpRequest.body ? httpRequest.body.length : null;
      let contentLengthHeaderValue = null;
      if (httpRequest.body == null && ["POST", "PUT"].includes(httpRequest.method)) {
        contentLengthHeaderValue = "0";
      }
      if (contentLength != null) {
        contentLengthHeaderValue = isomorphicEncode(`${contentLength}`);
      }
      if (contentLengthHeaderValue != null) {
        httpRequest.headersList.append("content-length", contentLengthHeaderValue);
      }
      if (contentLength != null && httpRequest.keepalive) {
      }
      if (httpRequest.referrer instanceof URL) {
        httpRequest.headersList.append("referer", isomorphicEncode(httpRequest.referrer.href));
      }
      appendRequestOriginHeader(httpRequest);
      appendFetchMetadata(httpRequest);
      if (!httpRequest.headersList.contains("user-agent")) {
        httpRequest.headersList.append("user-agent", "undici");
      }
      if (httpRequest.cache === "default" && (httpRequest.headersList.contains("if-modified-since") || httpRequest.headersList.contains("if-none-match") || httpRequest.headersList.contains("if-unmodified-since") || httpRequest.headersList.contains("if-match") || httpRequest.headersList.contains("if-range"))) {
        httpRequest.cache = "no-store";
      }
      if (httpRequest.cache === "no-cache" && !httpRequest.preventNoCacheCacheControlHeaderModification && !httpRequest.headersList.contains("cache-control")) {
        httpRequest.headersList.append("cache-control", "max-age=0");
      }
      if (httpRequest.cache === "no-store" || httpRequest.cache === "reload") {
        if (!httpRequest.headersList.contains("pragma")) {
          httpRequest.headersList.append("pragma", "no-cache");
        }
        if (!httpRequest.headersList.contains("cache-control")) {
          httpRequest.headersList.append("cache-control", "no-cache");
        }
      }
      if (httpRequest.headersList.contains("range")) {
        httpRequest.headersList.append("accept-encoding", "identity");
      }
      if (!httpRequest.headersList.contains("accept-encoding")) {
        if (/^https:/.test(requestCurrentURL(httpRequest).protocol)) {
          httpRequest.headersList.append("accept-encoding", "br, gzip, deflate");
        } else {
          httpRequest.headersList.append("accept-encoding", "gzip, deflate");
        }
      }
      if (includeCredentials) {
      }
      if (httpCache == null) {
        httpRequest.cache = "no-store";
      }
      if (httpRequest.mode !== "no-store" && httpRequest.mode !== "reload") {
      }
      if (response == null) {
        if (httpRequest.mode === "only-if-cached") {
          return makeNetworkError("only if cached");
        }
        const forwardResponse = await httpNetworkFetch(
          httpFetchParams,
          includeCredentials,
          isNewConnectionFetch
        );
        if (!safeMethods.includes(httpRequest.method) && forwardResponse.status >= 200 && forwardResponse.status <= 399) {
        }
        if (revalidatingFlag && forwardResponse.status === 304) {
        }
        if (response == null) {
          response = forwardResponse;
        }
      }
      response.urlList = [...httpRequest.urlList];
      if (httpRequest.headersList.contains("range")) {
        response.rangeRequested = true;
      }
      response.requestIncludesCredentials = includeCredentials;
      if (response.status === 407) {
        if (request.window === "no-window") {
          return makeNetworkError();
        }
        if (isCancelled(fetchParams)) {
          return makeAppropriateNetworkError(fetchParams);
        }
        return makeNetworkError("proxy authentication required");
      }
      if (
        // response’s status is 421
        response.status === 421 && // isNewConnectionFetch is false
        !isNewConnectionFetch && // request’s body is null, or request’s body is non-null and request’s body’s source is non-null
        (request.body == null || request.body.source != null)
      ) {
        if (isCancelled(fetchParams)) {
          return makeAppropriateNetworkError(fetchParams);
        }
        fetchParams.controller.connection.destroy();
        response = await httpNetworkOrCacheFetch(
          fetchParams,
          isAuthenticationFetch,
          true
        );
      }
      if (isAuthenticationFetch) {
      }
      return response;
    }
    async function httpNetworkFetch(fetchParams, includeCredentials = false, forceNewConnection = false) {
      assert(!fetchParams.controller.connection || fetchParams.controller.connection.destroyed);
      fetchParams.controller.connection = {
        abort: null,
        destroyed: false,
        destroy(err) {
          var _a;
          if (!this.destroyed) {
            this.destroyed = true;
            (_a = this.abort) == null ? void 0 : _a.call(this, err ?? new DOMException("The operation was aborted.", "AbortError"));
          }
        }
      };
      const request = fetchParams.request;
      let response = null;
      const timingInfo = fetchParams.timingInfo;
      const httpCache = null;
      if (httpCache == null) {
        request.cache = "no-store";
      }
      const newConnection = forceNewConnection ? "yes" : "no";
      if (request.mode === "websocket") {
      } else {
      }
      let requestBody = null;
      if (request.body == null && fetchParams.processRequestEndOfBody) {
        queueMicrotask(() => fetchParams.processRequestEndOfBody());
      } else if (request.body != null) {
        const processBodyChunk = async function* (bytes) {
          var _a;
          if (isCancelled(fetchParams)) {
            return;
          }
          yield bytes;
          (_a = fetchParams.processRequestBodyChunkLength) == null ? void 0 : _a.call(fetchParams, bytes.byteLength);
        };
        const processEndOfBody = () => {
          if (isCancelled(fetchParams)) {
            return;
          }
          if (fetchParams.processRequestEndOfBody) {
            fetchParams.processRequestEndOfBody();
          }
        };
        const processBodyError = (e3) => {
          if (isCancelled(fetchParams)) {
            return;
          }
          if (e3.name === "AbortError") {
            fetchParams.controller.abort();
          } else {
            fetchParams.controller.terminate(e3);
          }
        };
        requestBody = async function* () {
          try {
            for await (const bytes of request.body.stream) {
              yield* processBodyChunk(bytes);
            }
            processEndOfBody();
          } catch (err) {
            processBodyError(err);
          }
        }();
      }
      try {
        const { body, status, statusText, headersList, socket } = await dispatch({ body: requestBody });
        if (socket) {
          response = makeResponse({ status, statusText, headersList, socket });
        } else {
          const iterator = body[Symbol.asyncIterator]();
          fetchParams.controller.next = () => iterator.next();
          response = makeResponse({ status, statusText, headersList });
        }
      } catch (err) {
        if (err.name === "AbortError") {
          fetchParams.controller.connection.destroy();
          return makeAppropriateNetworkError(fetchParams);
        }
        return makeNetworkError(err);
      }
      const pullAlgorithm = () => {
        fetchParams.controller.resume();
      };
      const cancelAlgorithm = (reason) => {
        fetchParams.controller.abort(reason);
      };
      if (!ReadableStream3) {
        ReadableStream3 = require("stream/web").ReadableStream;
      }
      const stream = new ReadableStream3(
        {
          async start(controller) {
            fetchParams.controller.controller = controller;
          },
          async pull(controller) {
            await pullAlgorithm(controller);
          },
          async cancel(reason) {
            await cancelAlgorithm(reason);
          }
        },
        {
          highWaterMark: 0,
          size() {
            return 1;
          }
        }
      );
      response.body = { stream };
      fetchParams.controller.on("terminated", onAborted);
      fetchParams.controller.resume = async () => {
        while (true) {
          let bytes;
          try {
            const { done, value } = await fetchParams.controller.next();
            if (isAborted(fetchParams)) {
              break;
            }
            bytes = done ? void 0 : value;
          } catch (err) {
            if (fetchParams.controller.ended && !timingInfo.encodedBodySize) {
              bytes = void 0;
            } else {
              bytes = err;
            }
          }
          if (bytes === void 0) {
            readableStreamClose(fetchParams.controller.controller);
            finalizeResponse(fetchParams, response);
            return;
          }
          timingInfo.decodedBodySize += (bytes == null ? void 0 : bytes.byteLength) ?? 0;
          if (isErrorLike(bytes)) {
            fetchParams.controller.terminate(bytes);
            return;
          }
          fetchParams.controller.controller.enqueue(new Uint8Array(bytes));
          if (isErrored(stream)) {
            fetchParams.controller.terminate();
            return;
          }
          if (!fetchParams.controller.controller.desiredSize) {
            return;
          }
        }
      };
      function onAborted(reason) {
        if (isAborted(fetchParams)) {
          response.aborted = true;
          if (isReadable(stream)) {
            fetchParams.controller.controller.error(
              fetchParams.controller.serializedAbortReason
            );
          }
        } else {
          if (isReadable(stream)) {
            fetchParams.controller.controller.error(new TypeError("terminated", {
              cause: isErrorLike(reason) ? reason : void 0
            }));
          }
        }
        fetchParams.controller.connection.destroy();
      }
      return response;
      async function dispatch({ body }) {
        const url = requestCurrentURL(request);
        const agent = fetchParams.controller.dispatcher;
        return new Promise((resolve, reject) => agent.dispatch(
          {
            path: url.pathname + url.search,
            origin: url.origin,
            method: request.method,
            body: fetchParams.controller.dispatcher.isMockActive ? request.body && request.body.source : body,
            headers: request.headersList[kHeadersCaseInsensitive],
            maxRedirections: 0,
            upgrade: request.mode === "websocket" ? "websocket" : void 0
          },
          {
            body: null,
            abort: null,
            onConnect(abort) {
              const { connection } = fetchParams.controller;
              if (connection.destroyed) {
                abort(new DOMException("The operation was aborted.", "AbortError"));
              } else {
                fetchParams.controller.on("terminated", abort);
                this.abort = connection.abort = abort;
              }
            },
            onHeaders(status, headersList, resume, statusText) {
              if (status < 200) {
                return;
              }
              let codings = [];
              let location2 = "";
              const headers = new Headers3();
              for (let n2 = 0; n2 < headersList.length; n2 += 2) {
                const key2 = headersList[n2 + 0].toString("latin1");
                const val = headersList[n2 + 1].toString("latin1");
                if (key2.toLowerCase() === "content-encoding") {
                  codings = val.split(",").map((x) => x.trim());
                } else if (key2.toLowerCase() === "location") {
                  location2 = val;
                }
                headers.append(key2, val);
              }
              this.body = new Readable({ read: resume });
              const decoders = [];
              const willFollow = request.redirect === "follow" && location2 && redirectStatus.includes(status);
              if (request.method !== "HEAD" && request.method !== "CONNECT" && !nullBodyStatus.includes(status) && !willFollow) {
                for (const coding of codings) {
                  if (/(x-)?gzip/.test(coding)) {
                    decoders.push(zlib.createGunzip());
                  } else if (/(x-)?deflate/.test(coding)) {
                    decoders.push(zlib.createInflate());
                  } else if (coding === "br") {
                    decoders.push(zlib.createBrotliDecompress());
                  } else {
                    decoders.length = 0;
                    break;
                  }
                }
              }
              resolve({
                status,
                statusText,
                headersList: headers[kHeadersList],
                body: decoders.length ? pipeline(this.body, ...decoders, () => {
                }) : this.body.on("error", () => {
                })
              });
              return true;
            },
            onData(chunk) {
              if (fetchParams.controller.dump) {
                return;
              }
              const bytes = chunk;
              timingInfo.encodedBodySize += bytes.byteLength;
              return this.body.push(bytes);
            },
            onComplete() {
              if (this.abort) {
                fetchParams.controller.off("terminated", this.abort);
              }
              fetchParams.controller.ended = true;
              this.body.push(null);
            },
            onError(error2) {
              var _a;
              if (this.abort) {
                fetchParams.controller.off("terminated", this.abort);
              }
              (_a = this.body) == null ? void 0 : _a.destroy(error2);
              fetchParams.controller.terminate(error2);
              reject(error2);
            },
            onUpgrade(status, headersList, socket) {
              if (status !== 101) {
                return;
              }
              const headers = new Headers3();
              for (let n2 = 0; n2 < headersList.length; n2 += 2) {
                const key2 = headersList[n2 + 0].toString("latin1");
                const val = headersList[n2 + 1].toString("latin1");
                headers.append(key2, val);
              }
              resolve({
                status,
                statusText: STATUS_CODES[status],
                headersList: headers[kHeadersList],
                socket
              });
              return true;
            }
          }
        ));
      }
    }
    module2.exports = {
      fetch: fetch3,
      Fetch,
      fetching,
      finalizeAndReportTiming
    };
  }
});

// node_modules/undici/lib/fileapi/symbols.js
var require_symbols3 = __commonJS({
  "node_modules/undici/lib/fileapi/symbols.js"(exports, module2) {
    "use strict";
    init_shims();
    module2.exports = {
      kState: Symbol("FileReader state"),
      kResult: Symbol("FileReader result"),
      kError: Symbol("FileReader error"),
      kLastProgressEventFired: Symbol("FileReader last progress event fired timestamp"),
      kEvents: Symbol("FileReader events"),
      kAborted: Symbol("FileReader aborted")
    };
  }
});

// node_modules/undici/lib/fileapi/progressevent.js
var require_progressevent = __commonJS({
  "node_modules/undici/lib/fileapi/progressevent.js"(exports, module2) {
    "use strict";
    init_shims();
    var { webidl } = require_webidl();
    var kState = Symbol("ProgressEvent state");
    var ProgressEvent = class extends Event {
      constructor(type, eventInitDict = {}) {
        type = webidl.converters.DOMString(type);
        eventInitDict = webidl.converters.ProgressEventInit(eventInitDict ?? {});
        super(type, eventInitDict);
        this[kState] = {
          lengthComputable: eventInitDict.lengthComputable,
          loaded: eventInitDict.loaded,
          total: eventInitDict.total
        };
      }
      get lengthComputable() {
        webidl.brandCheck(this, ProgressEvent);
        return this[kState].lengthComputable;
      }
      get loaded() {
        webidl.brandCheck(this, ProgressEvent);
        return this[kState].loaded;
      }
      get total() {
        webidl.brandCheck(this, ProgressEvent);
        return this[kState].total;
      }
    };
    webidl.converters.ProgressEventInit = webidl.dictionaryConverter([
      {
        key: "lengthComputable",
        converter: webidl.converters.boolean,
        defaultValue: false
      },
      {
        key: "loaded",
        converter: webidl.converters["unsigned long long"],
        defaultValue: 0
      },
      {
        key: "total",
        converter: webidl.converters["unsigned long long"],
        defaultValue: 0
      },
      {
        key: "bubbles",
        converter: webidl.converters.boolean,
        defaultValue: false
      },
      {
        key: "cancelable",
        converter: webidl.converters.boolean,
        defaultValue: false
      },
      {
        key: "composed",
        converter: webidl.converters.boolean,
        defaultValue: false
      }
    ]);
    module2.exports = {
      ProgressEvent
    };
  }
});

// node_modules/undici/lib/fileapi/encoding.js
var require_encoding = __commonJS({
  "node_modules/undici/lib/fileapi/encoding.js"(exports, module2) {
    "use strict";
    init_shims();
    function getEncoding(label) {
      switch (label.trim().toLowerCase()) {
        case "unicode-1-1-utf-8":
        case "unicode11utf8":
        case "unicode20utf8":
        case "utf-8":
        case "utf8":
        case "x-unicode20utf8":
          return "UTF-8";
        case "866":
        case "cp866":
        case "csibm866":
        case "ibm866":
          return "IBM866";
        case "csisolatin2":
        case "iso-8859-2":
        case "iso-ir-101":
        case "iso8859-2":
        case "iso88592":
        case "iso_8859-2":
        case "iso_8859-2:1987":
        case "l2":
        case "latin2":
          return "ISO-8859-2";
        case "csisolatin3":
        case "iso-8859-3":
        case "iso-ir-109":
        case "iso8859-3":
        case "iso88593":
        case "iso_8859-3":
        case "iso_8859-3:1988":
        case "l3":
        case "latin3":
          return "ISO-8859-3";
        case "csisolatin4":
        case "iso-8859-4":
        case "iso-ir-110":
        case "iso8859-4":
        case "iso88594":
        case "iso_8859-4":
        case "iso_8859-4:1988":
        case "l4":
        case "latin4":
          return "ISO-8859-4";
        case "csisolatincyrillic":
        case "cyrillic":
        case "iso-8859-5":
        case "iso-ir-144":
        case "iso8859-5":
        case "iso88595":
        case "iso_8859-5":
        case "iso_8859-5:1988":
          return "ISO-8859-5";
        case "arabic":
        case "asmo-708":
        case "csiso88596e":
        case "csiso88596i":
        case "csisolatinarabic":
        case "ecma-114":
        case "iso-8859-6":
        case "iso-8859-6-e":
        case "iso-8859-6-i":
        case "iso-ir-127":
        case "iso8859-6":
        case "iso88596":
        case "iso_8859-6":
        case "iso_8859-6:1987":
          return "ISO-8859-6";
        case "csisolatingreek":
        case "ecma-118":
        case "elot_928":
        case "greek":
        case "greek8":
        case "iso-8859-7":
        case "iso-ir-126":
        case "iso8859-7":
        case "iso88597":
        case "iso_8859-7":
        case "iso_8859-7:1987":
        case "sun_eu_greek":
          return "ISO-8859-7";
        case "csiso88598e":
        case "csisolatinhebrew":
        case "hebrew":
        case "iso-8859-8":
        case "iso-8859-8-e":
        case "iso-ir-138":
        case "iso8859-8":
        case "iso88598":
        case "iso_8859-8":
        case "iso_8859-8:1988":
        case "visual":
          return "ISO-8859-8";
        case "csiso88598i":
        case "iso-8859-8-i":
        case "logical":
          return "ISO-8859-8-I";
        case "csisolatin6":
        case "iso-8859-10":
        case "iso-ir-157":
        case "iso8859-10":
        case "iso885910":
        case "l6":
        case "latin6":
          return "ISO-8859-10";
        case "iso-8859-13":
        case "iso8859-13":
        case "iso885913":
          return "ISO-8859-13";
        case "iso-8859-14":
        case "iso8859-14":
        case "iso885914":
          return "ISO-8859-14";
        case "csisolatin9":
        case "iso-8859-15":
        case "iso8859-15":
        case "iso885915":
        case "iso_8859-15":
        case "l9":
          return "ISO-8859-15";
        case "iso-8859-16":
          return "ISO-8859-16";
        case "cskoi8r":
        case "koi":
        case "koi8":
        case "koi8-r":
        case "koi8_r":
          return "KOI8-R";
        case "koi8-ru":
        case "koi8-u":
          return "KOI8-U";
        case "csmacintosh":
        case "mac":
        case "macintosh":
        case "x-mac-roman":
          return "macintosh";
        case "iso-8859-11":
        case "iso8859-11":
        case "iso885911":
        case "tis-620":
        case "windows-874":
          return "windows-874";
        case "cp1250":
        case "windows-1250":
        case "x-cp1250":
          return "windows-1250";
        case "cp1251":
        case "windows-1251":
        case "x-cp1251":
          return "windows-1251";
        case "ansi_x3.4-1968":
        case "ascii":
        case "cp1252":
        case "cp819":
        case "csisolatin1":
        case "ibm819":
        case "iso-8859-1":
        case "iso-ir-100":
        case "iso8859-1":
        case "iso88591":
        case "iso_8859-1":
        case "iso_8859-1:1987":
        case "l1":
        case "latin1":
        case "us-ascii":
        case "windows-1252":
        case "x-cp1252":
          return "windows-1252";
        case "cp1253":
        case "windows-1253":
        case "x-cp1253":
          return "windows-1253";
        case "cp1254":
        case "csisolatin5":
        case "iso-8859-9":
        case "iso-ir-148":
        case "iso8859-9":
        case "iso88599":
        case "iso_8859-9":
        case "iso_8859-9:1989":
        case "l5":
        case "latin5":
        case "windows-1254":
        case "x-cp1254":
          return "windows-1254";
        case "cp1255":
        case "windows-1255":
        case "x-cp1255":
          return "windows-1255";
        case "cp1256":
        case "windows-1256":
        case "x-cp1256":
          return "windows-1256";
        case "cp1257":
        case "windows-1257":
        case "x-cp1257":
          return "windows-1257";
        case "cp1258":
        case "windows-1258":
        case "x-cp1258":
          return "windows-1258";
        case "x-mac-cyrillic":
        case "x-mac-ukrainian":
          return "x-mac-cyrillic";
        case "chinese":
        case "csgb2312":
        case "csiso58gb231280":
        case "gb2312":
        case "gb_2312":
        case "gb_2312-80":
        case "gbk":
        case "iso-ir-58":
        case "x-gbk":
          return "GBK";
        case "gb18030":
          return "gb18030";
        case "big5":
        case "big5-hkscs":
        case "cn-big5":
        case "csbig5":
        case "x-x-big5":
          return "Big5";
        case "cseucpkdfmtjapanese":
        case "euc-jp":
        case "x-euc-jp":
          return "EUC-JP";
        case "csiso2022jp":
        case "iso-2022-jp":
          return "ISO-2022-JP";
        case "csshiftjis":
        case "ms932":
        case "ms_kanji":
        case "shift-jis":
        case "shift_jis":
        case "sjis":
        case "windows-31j":
        case "x-sjis":
          return "Shift_JIS";
        case "cseuckr":
        case "csksc56011987":
        case "euc-kr":
        case "iso-ir-149":
        case "korean":
        case "ks_c_5601-1987":
        case "ks_c_5601-1989":
        case "ksc5601":
        case "ksc_5601":
        case "windows-949":
          return "EUC-KR";
        case "csiso2022kr":
        case "hz-gb-2312":
        case "iso-2022-cn":
        case "iso-2022-cn-ext":
        case "iso-2022-kr":
        case "replacement":
          return "replacement";
        case "unicodefffe":
        case "utf-16be":
          return "UTF-16BE";
        case "csunicode":
        case "iso-10646-ucs-2":
        case "ucs-2":
        case "unicode":
        case "unicodefeff":
        case "utf-16":
        case "utf-16le":
          return "UTF-16LE";
        case "x-user-defined":
          return "x-user-defined";
        default:
          return "failure";
      }
    }
    module2.exports = {
      getEncoding
    };
  }
});

// node_modules/undici/lib/fileapi/util.js
var require_util3 = __commonJS({
  "node_modules/undici/lib/fileapi/util.js"(exports, module2) {
    "use strict";
    init_shims();
    var {
      kState,
      kError,
      kResult,
      kAborted,
      kLastProgressEventFired
    } = require_symbols3();
    var { ProgressEvent } = require_progressevent();
    var { getEncoding } = require_encoding();
    var { DOMException } = require_constants();
    var { serializeAMimeType, parseMIMEType } = require_dataURL();
    var { types } = require("util");
    var { StringDecoder } = require("string_decoder");
    var { btoa } = require("buffer");
    var staticPropertyDescriptors = {
      enumerable: true,
      writable: false,
      configurable: false
    };
    function readOperation(fr, blob, type, encodingName) {
      if (fr[kState] === "loading") {
        throw new DOMException("Invalid state", "InvalidStateError");
      }
      fr[kState] = "loading";
      fr[kResult] = null;
      fr[kError] = null;
      const stream = blob.stream();
      const reader = stream.getReader();
      const bytes = [];
      let chunkPromise = reader.read();
      let isFirstChunk = true;
      (async () => {
        while (!fr[kAborted]) {
          try {
            const { done, value } = await chunkPromise;
            if (isFirstChunk && !fr[kAborted]) {
              queueMicrotask(() => {
                fireAProgressEvent("loadstart", fr);
              });
            }
            isFirstChunk = false;
            if (!done && types.isUint8Array(value)) {
              bytes.push(value);
              if ((fr[kLastProgressEventFired] === void 0 || Date.now() - fr[kLastProgressEventFired] >= 50) && !fr[kAborted]) {
                fr[kLastProgressEventFired] = Date.now();
                queueMicrotask(() => {
                  fireAProgressEvent("progress", fr);
                });
              }
              chunkPromise = reader.read();
            } else if (done) {
              queueMicrotask(() => {
                fr[kState] = "done";
                try {
                  const result = packageData(bytes, type, blob.type, encodingName);
                  if (fr[kAborted]) {
                    return;
                  }
                  fr[kResult] = result;
                  fireAProgressEvent("load", fr);
                } catch (error2) {
                  fr[kError] = error2;
                  fireAProgressEvent("error", fr);
                }
                if (fr[kState] !== "loading") {
                  fireAProgressEvent("loadend", fr);
                }
              });
              break;
            }
          } catch (error2) {
            if (fr[kAborted]) {
              return;
            }
            queueMicrotask(() => {
              fr[kState] = "done";
              fr[kError] = error2;
              fireAProgressEvent("error", fr);
              if (fr[kState] !== "loading") {
                fireAProgressEvent("loadend", fr);
              }
            });
            break;
          }
        }
      })();
    }
    function fireAProgressEvent(e3, reader) {
      const event = new ProgressEvent(e3, {
        bubbles: false,
        cancelable: false
      });
      reader.dispatchEvent(event);
    }
    function packageData(bytes, type, mimeType, encodingName) {
      switch (type) {
        case "DataURL": {
          let dataURL = "data:";
          const parsed = parseMIMEType(mimeType || "application/octet-stream");
          if (parsed !== "failure") {
            dataURL += serializeAMimeType(parsed);
          }
          dataURL += ";base64,";
          const decoder = new StringDecoder("latin1");
          for (const chunk of bytes) {
            dataURL += btoa(decoder.write(chunk));
          }
          dataURL += btoa(decoder.end());
          return dataURL;
        }
        case "Text": {
          let encoding = "failure";
          if (encodingName) {
            encoding = getEncoding(encodingName);
          }
          if (encoding === "failure" && mimeType) {
            const type2 = parseMIMEType(mimeType);
            if (type2 !== "failure") {
              encoding = getEncoding(type2.parameters.get("charset"));
            }
          }
          if (encoding === "failure") {
            encoding = "UTF-8";
          }
          return decode(bytes, encoding);
        }
        case "ArrayBuffer": {
          const sequence = combineByteSequences(bytes);
          return sequence.buffer;
        }
        case "BinaryString": {
          let binaryString = "";
          const decoder = new StringDecoder("latin1");
          for (const chunk of bytes) {
            binaryString += decoder.write(chunk);
          }
          binaryString += decoder.end();
          return binaryString;
        }
      }
    }
    function decode(ioQueue, encoding) {
      const bytes = combineByteSequences(ioQueue);
      const BOMEncoding = BOMSniffing(bytes);
      let slice = 0;
      if (BOMEncoding !== null) {
        encoding = BOMEncoding;
        slice = BOMEncoding === "UTF-8" ? 3 : 2;
      }
      const sliced = bytes.slice(slice);
      return new TextDecoder(encoding).decode(sliced);
    }
    function BOMSniffing(ioQueue) {
      const [a, b, c] = ioQueue;
      if (a === 239 && b === 187 && c === 191) {
        return "UTF-8";
      } else if (a === 254 && b === 255) {
        return "UTF-16BE";
      } else if (a === 255 && b === 254) {
        return "UTF-16LE";
      }
      return null;
    }
    function combineByteSequences(sequences) {
      const size = sequences.reduce((a, b) => {
        return a + b.byteLength;
      }, 0);
      let offset = 0;
      return sequences.reduce((a, b) => {
        a.set(b, offset);
        offset += b.byteLength;
        return a;
      }, new Uint8Array(size));
    }
    module2.exports = {
      staticPropertyDescriptors,
      readOperation,
      fireAProgressEvent
    };
  }
});

// node_modules/undici/lib/fileapi/filereader.js
var require_filereader = __commonJS({
  "node_modules/undici/lib/fileapi/filereader.js"(exports, module2) {
    "use strict";
    init_shims();
    var {
      staticPropertyDescriptors,
      readOperation,
      fireAProgressEvent
    } = require_util3();
    var {
      kState,
      kError,
      kResult,
      kEvents,
      kAborted
    } = require_symbols3();
    var { webidl } = require_webidl();
    var { kEnumerableProperty } = require_util();
    var FileReader = class extends EventTarget {
      constructor() {
        super();
        this[kState] = "empty";
        this[kResult] = null;
        this[kError] = null;
        this[kEvents] = {
          loadend: null,
          error: null,
          abort: null,
          load: null,
          progress: null,
          loadstart: null
        };
      }
      /**
       * @see https://w3c.github.io/FileAPI/#dfn-readAsArrayBuffer
       * @param {import('buffer').Blob} blob
       */
      readAsArrayBuffer(blob) {
        webidl.brandCheck(this, FileReader);
        webidl.argumentLengthCheck(arguments, 1, { header: "FileReader.readAsArrayBuffer" });
        blob = webidl.converters.Blob(blob, { strict: false });
        readOperation(this, blob, "ArrayBuffer");
      }
      /**
       * @see https://w3c.github.io/FileAPI/#readAsBinaryString
       * @param {import('buffer').Blob} blob
       */
      readAsBinaryString(blob) {
        webidl.brandCheck(this, FileReader);
        webidl.argumentLengthCheck(arguments, 1, { header: "FileReader.readAsBinaryString" });
        blob = webidl.converters.Blob(blob, { strict: false });
        readOperation(this, blob, "BinaryString");
      }
      /**
       * @see https://w3c.github.io/FileAPI/#readAsDataText
       * @param {import('buffer').Blob} blob
       * @param {string?} encoding
       */
      readAsText(blob, encoding = void 0) {
        webidl.brandCheck(this, FileReader);
        webidl.argumentLengthCheck(arguments, 1, { header: "FileReader.readAsText" });
        blob = webidl.converters.Blob(blob, { strict: false });
        if (encoding !== void 0) {
          encoding = webidl.converters.DOMString(encoding);
        }
        readOperation(this, blob, "Text", encoding);
      }
      /**
       * @see https://w3c.github.io/FileAPI/#dfn-readAsDataURL
       * @param {import('buffer').Blob} blob
       */
      readAsDataURL(blob) {
        webidl.brandCheck(this, FileReader);
        webidl.argumentLengthCheck(arguments, 1, { header: "FileReader.readAsDataURL" });
        blob = webidl.converters.Blob(blob, { strict: false });
        readOperation(this, blob, "DataURL");
      }
      /**
       * @see https://w3c.github.io/FileAPI/#dfn-abort
       */
      abort() {
        if (this[kState] === "empty" || this[kState] === "done") {
          this[kResult] = null;
          return;
        }
        if (this[kState] === "loading") {
          this[kState] = "done";
          this[kResult] = null;
        }
        this[kAborted] = true;
        fireAProgressEvent("abort", this);
        if (this[kState] !== "loading") {
          fireAProgressEvent("loadend", this);
        }
      }
      /**
       * @see https://w3c.github.io/FileAPI/#dom-filereader-readystate
       */
      get readyState() {
        webidl.brandCheck(this, FileReader);
        switch (this[kState]) {
          case "empty":
            return this.EMPTY;
          case "loading":
            return this.LOADING;
          case "done":
            return this.DONE;
        }
      }
      /**
       * @see https://w3c.github.io/FileAPI/#dom-filereader-result
       */
      get result() {
        webidl.brandCheck(this, FileReader);
        return this[kResult];
      }
      /**
       * @see https://w3c.github.io/FileAPI/#dom-filereader-error
       */
      get error() {
        webidl.brandCheck(this, FileReader);
        return this[kError];
      }
      get onloadend() {
        webidl.brandCheck(this, FileReader);
        return this[kEvents].loadend;
      }
      set onloadend(fn) {
        webidl.brandCheck(this, FileReader);
        if (this[kEvents].loadend) {
          this.removeEventListener("loadend", this[kEvents].loadend);
        }
        if (typeof fn === "function") {
          this[kEvents].loadend = fn;
          this.addEventListener("loadend", fn);
        } else {
          this[kEvents].loadend = null;
        }
      }
      get onerror() {
        webidl.brandCheck(this, FileReader);
        return this[kEvents].error;
      }
      set onerror(fn) {
        webidl.brandCheck(this, FileReader);
        if (this[kEvents].error) {
          this.removeEventListener("error", this[kEvents].error);
        }
        if (typeof fn === "function") {
          this[kEvents].error = fn;
          this.addEventListener("error", fn);
        } else {
          this[kEvents].error = null;
        }
      }
      get onloadstart() {
        webidl.brandCheck(this, FileReader);
        return this[kEvents].loadstart;
      }
      set onloadstart(fn) {
        webidl.brandCheck(this, FileReader);
        if (this[kEvents].loadstart) {
          this.removeEventListener("loadstart", this[kEvents].loadstart);
        }
        if (typeof fn === "function") {
          this[kEvents].loadstart = fn;
          this.addEventListener("loadstart", fn);
        } else {
          this[kEvents].loadstart = null;
        }
      }
      get onprogress() {
        webidl.brandCheck(this, FileReader);
        return this[kEvents].progress;
      }
      set onprogress(fn) {
        webidl.brandCheck(this, FileReader);
        if (this[kEvents].progress) {
          this.removeEventListener("progress", this[kEvents].progress);
        }
        if (typeof fn === "function") {
          this[kEvents].progress = fn;
          this.addEventListener("progress", fn);
        } else {
          this[kEvents].progress = null;
        }
      }
      get onload() {
        webidl.brandCheck(this, FileReader);
        return this[kEvents].load;
      }
      set onload(fn) {
        webidl.brandCheck(this, FileReader);
        if (this[kEvents].load) {
          this.removeEventListener("load", this[kEvents].load);
        }
        if (typeof fn === "function") {
          this[kEvents].load = fn;
          this.addEventListener("load", fn);
        } else {
          this[kEvents].load = null;
        }
      }
      get onabort() {
        webidl.brandCheck(this, FileReader);
        return this[kEvents].abort;
      }
      set onabort(fn) {
        webidl.brandCheck(this, FileReader);
        if (this[kEvents].abort) {
          this.removeEventListener("abort", this[kEvents].abort);
        }
        if (typeof fn === "function") {
          this[kEvents].abort = fn;
          this.addEventListener("abort", fn);
        } else {
          this[kEvents].abort = null;
        }
      }
    };
    FileReader.EMPTY = FileReader.prototype.EMPTY = 0;
    FileReader.LOADING = FileReader.prototype.LOADING = 1;
    FileReader.DONE = FileReader.prototype.DONE = 2;
    Object.defineProperties(FileReader.prototype, {
      EMPTY: staticPropertyDescriptors,
      LOADING: staticPropertyDescriptors,
      DONE: staticPropertyDescriptors,
      readAsArrayBuffer: kEnumerableProperty,
      readAsBinaryString: kEnumerableProperty,
      readAsText: kEnumerableProperty,
      readAsDataURL: kEnumerableProperty,
      abort: kEnumerableProperty,
      readyState: kEnumerableProperty,
      result: kEnumerableProperty,
      error: kEnumerableProperty,
      onloadstart: kEnumerableProperty,
      onprogress: kEnumerableProperty,
      onload: kEnumerableProperty,
      onabort: kEnumerableProperty,
      onerror: kEnumerableProperty,
      onloadend: kEnumerableProperty,
      [Symbol.toStringTag]: {
        value: "FileReader",
        writable: false,
        enumerable: false,
        configurable: true
      }
    });
    Object.defineProperties(FileReader, {
      EMPTY: staticPropertyDescriptors,
      LOADING: staticPropertyDescriptors,
      DONE: staticPropertyDescriptors
    });
    module2.exports = {
      FileReader
    };
  }
});

// node_modules/undici/lib/cookies/constants.js
var require_constants3 = __commonJS({
  "node_modules/undici/lib/cookies/constants.js"(exports, module2) {
    "use strict";
    init_shims();
    var maxAttributeValueSize = 1024;
    var maxNameValuePairSize = 4096;
    module2.exports = {
      maxAttributeValueSize,
      maxNameValuePairSize
    };
  }
});

// node_modules/undici/lib/cookies/util.js
var require_util4 = __commonJS({
  "node_modules/undici/lib/cookies/util.js"(exports, module2) {
    "use strict";
    init_shims();
    var assert = require("assert");
    var { kHeadersList } = require_symbols();
    function isCTLExcludingHtab(value) {
      if (value.length === 0) {
        return false;
      }
      for (const char of value) {
        const code = char.charCodeAt(0);
        if (code >= 0 || code <= 8 || (code >= 10 || code <= 31) || code === 127) {
          return false;
        }
      }
    }
    function validateCookieName(name) {
      for (const char of name) {
        const code = char.charCodeAt(0);
        if (code <= 32 || code > 127 || char === "(" || char === ")" || char === ">" || char === "<" || char === "@" || char === "," || char === ";" || char === ":" || char === "\\" || char === '"' || char === "/" || char === "[" || char === "]" || char === "?" || char === "=" || char === "{" || char === "}") {
          throw new Error("Invalid cookie name");
        }
      }
    }
    function validateCookieValue(value) {
      for (const char of value) {
        const code = char.charCodeAt(0);
        if (code < 33 || // exclude CTLs (0-31)
        code === 34 || code === 44 || code === 59 || code === 92 || code > 126) {
          throw new Error("Invalid header value");
        }
      }
    }
    function validateCookiePath(path) {
      for (const char of path) {
        const code = char.charCodeAt(0);
        if (code < 33 || char === ";") {
          throw new Error("Invalid cookie path");
        }
      }
    }
    function validateCookieDomain(domain) {
      if (domain.startsWith("-") || domain.endsWith(".") || domain.endsWith("-")) {
        throw new Error("Invalid cookie domain");
      }
    }
    function toIMFDate(date) {
      if (typeof date === "number") {
        date = new Date(date);
      }
      const days = [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat"
      ];
      const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ];
      const dayName = days[date.getUTCDay()];
      const day = date.getUTCDate().toString().padStart(2, "0");
      const month = months[date.getUTCMonth()];
      const year = date.getUTCFullYear();
      const hour = date.getUTCHours().toString().padStart(2, "0");
      const minute = date.getUTCMinutes().toString().padStart(2, "0");
      const second = date.getUTCSeconds().toString().padStart(2, "0");
      return `${dayName}, ${day} ${month} ${year} ${hour}:${minute}:${second} GMT`;
    }
    function validateCookieMaxAge(maxAge) {
      if (maxAge < 0) {
        throw new Error("Invalid cookie max-age");
      }
    }
    function stringify2(cookie) {
      if (cookie.name.length === 0) {
        return null;
      }
      validateCookieName(cookie.name);
      validateCookieValue(cookie.value);
      const out = [`${cookie.name}=${cookie.value}`];
      if (cookie.name.startsWith("__Secure-")) {
        cookie.secure = true;
      }
      if (cookie.name.startsWith("__Host-")) {
        cookie.secure = true;
        cookie.domain = null;
        cookie.path = "/";
      }
      if (cookie.secure) {
        out.push("Secure");
      }
      if (cookie.httpOnly) {
        out.push("HttpOnly");
      }
      if (typeof cookie.maxAge === "number") {
        validateCookieMaxAge(cookie.maxAge);
        out.push(`Max-Age=${cookie.maxAge}`);
      }
      if (cookie.domain) {
        validateCookieDomain(cookie.domain);
        out.push(`Domain=${cookie.domain}`);
      }
      if (cookie.path) {
        validateCookiePath(cookie.path);
        out.push(`Path=${cookie.path}`);
      }
      if (cookie.expires && cookie.expires.toString() !== "Invalid Date") {
        out.push(`Expires=${toIMFDate(cookie.expires)}`);
      }
      if (cookie.sameSite) {
        out.push(`SameSite=${cookie.sameSite}`);
      }
      for (const part of cookie.unparsed) {
        if (!part.includes("=")) {
          throw new Error("Invalid unparsed");
        }
        const [key2, ...value] = part.split("=");
        out.push(`${key2.trim()}=${value.join("=")}`);
      }
      return out.join("; ");
    }
    var kHeadersListNode;
    function getHeadersList(headers) {
      if (headers[kHeadersList]) {
        return headers[kHeadersList];
      }
      if (!kHeadersListNode) {
        kHeadersListNode = Object.getOwnPropertySymbols(headers).find(
          (symbol) => symbol.description === "headers list"
        );
        assert(kHeadersListNode, "Headers cannot be parsed");
      }
      const headersList = headers[kHeadersListNode];
      assert(headersList);
      return headersList;
    }
    module2.exports = {
      isCTLExcludingHtab,
      stringify: stringify2,
      getHeadersList
    };
  }
});

// node_modules/undici/lib/cookies/parse.js
var require_parse = __commonJS({
  "node_modules/undici/lib/cookies/parse.js"(exports, module2) {
    "use strict";
    init_shims();
    var { maxNameValuePairSize, maxAttributeValueSize } = require_constants3();
    var { isCTLExcludingHtab } = require_util4();
    var { collectASequenceOfCodePointsFast } = require_dataURL();
    var assert = require("assert");
    function parseSetCookie(header) {
      if (isCTLExcludingHtab(header)) {
        return null;
      }
      let nameValuePair = "";
      let unparsedAttributes = "";
      let name = "";
      let value = "";
      if (header.includes(";")) {
        const position = { position: 0 };
        nameValuePair = collectASequenceOfCodePointsFast(";", header, position);
        unparsedAttributes = header.slice(position.position);
      } else {
        nameValuePair = header;
      }
      if (!nameValuePair.includes("=")) {
        value = nameValuePair;
      } else {
        const position = { position: 0 };
        name = collectASequenceOfCodePointsFast(
          "=",
          nameValuePair,
          position
        );
        value = nameValuePair.slice(position.position + 1);
      }
      name = name.trim();
      value = value.trim();
      if (name.length + value.length > maxNameValuePairSize) {
        return null;
      }
      return {
        name,
        value,
        ...parseUnparsedAttributes(unparsedAttributes)
      };
    }
    function parseUnparsedAttributes(unparsedAttributes, cookieAttributeList = {}) {
      if (unparsedAttributes.length === 0) {
        return cookieAttributeList;
      }
      assert(unparsedAttributes[0] === ";");
      unparsedAttributes = unparsedAttributes.slice(1);
      let cookieAv = "";
      if (unparsedAttributes.includes(";")) {
        cookieAv = collectASequenceOfCodePointsFast(
          ";",
          unparsedAttributes,
          { position: 0 }
        );
        unparsedAttributes = unparsedAttributes.slice(cookieAv.length);
      } else {
        cookieAv = unparsedAttributes;
        unparsedAttributes = "";
      }
      let attributeName = "";
      let attributeValue = "";
      if (cookieAv.includes("=")) {
        const position = { position: 0 };
        attributeName = collectASequenceOfCodePointsFast(
          "=",
          cookieAv,
          position
        );
        attributeValue = cookieAv.slice(position.position + 1);
      } else {
        attributeName = cookieAv;
      }
      attributeName = attributeName.trim();
      attributeValue = attributeValue.trim();
      if (attributeValue.length > maxAttributeValueSize) {
        return parseUnparsedAttributes(unparsedAttributes, cookieAttributeList);
      }
      const attributeNameLowercase = attributeName.toLowerCase();
      if (attributeNameLowercase === "expires") {
        const expiryTime = new Date(attributeValue);
        cookieAttributeList.expires = expiryTime;
      } else if (attributeNameLowercase === "max-age") {
        const charCode = attributeValue.charCodeAt(0);
        if ((charCode < 48 || charCode > 57) && attributeValue[0] !== "-") {
          return parseUnparsedAttributes(unparsedAttributes, cookieAttributeList);
        }
        if (!/^\d+$/.test(attributeValue)) {
          return parseUnparsedAttributes(unparsedAttributes, cookieAttributeList);
        }
        const deltaSeconds = Number(attributeValue);
        cookieAttributeList.maxAge = deltaSeconds;
      } else if (attributeNameLowercase === "domain") {
        let cookieDomain = attributeValue;
        if (cookieDomain[0] === ".") {
          cookieDomain = cookieDomain.slice(1);
        }
        cookieDomain = cookieDomain.toLowerCase();
        cookieAttributeList.domain = cookieDomain;
      } else if (attributeNameLowercase === "path") {
        let cookiePath = "";
        if (attributeValue.length === 0 || attributeValue[0] !== "/") {
          cookiePath = "/";
        } else {
          cookiePath = attributeValue;
        }
        cookieAttributeList.path = cookiePath;
      } else if (attributeNameLowercase === "secure") {
        cookieAttributeList.secure = true;
      } else if (attributeNameLowercase === "httponly") {
        cookieAttributeList.httpOnly = true;
      } else if (attributeNameLowercase === "samesite") {
        let enforcement = "Default";
        const attributeValueLowercase = attributeValue.toLowerCase();
        if (attributeValueLowercase.includes("none")) {
          enforcement = "None";
        }
        if (attributeValueLowercase.includes("strict")) {
          enforcement = "Strict";
        }
        if (attributeValueLowercase.includes("lax")) {
          enforcement = "Lax";
        }
        cookieAttributeList.sameSite = enforcement;
      } else {
        cookieAttributeList.unparsed ??= [];
        cookieAttributeList.unparsed.push(`${attributeName}=${attributeValue}`);
      }
      return parseUnparsedAttributes(unparsedAttributes, cookieAttributeList);
    }
    module2.exports = {
      parseSetCookie,
      parseUnparsedAttributes
    };
  }
});

// node_modules/undici/lib/cookies/index.js
var require_cookies = __commonJS({
  "node_modules/undici/lib/cookies/index.js"(exports, module2) {
    "use strict";
    init_shims();
    var { parseSetCookie } = require_parse();
    var { stringify: stringify2, getHeadersList } = require_util4();
    var { webidl } = require_webidl();
    var { Headers: Headers3 } = require_headers();
    function getCookies(headers) {
      webidl.argumentLengthCheck(arguments, 1, { header: "getCookies" });
      webidl.brandCheck(headers, Headers3, { strict: false });
      const cookie = headers.get("cookie");
      const out = {};
      if (!cookie) {
        return out;
      }
      for (const piece of cookie.split(";")) {
        const [name, ...value] = piece.split("=");
        out[name.trim()] = value.join("=");
      }
      return out;
    }
    function deleteCookie(headers, name, attributes) {
      webidl.argumentLengthCheck(arguments, 2, { header: "deleteCookie" });
      webidl.brandCheck(headers, Headers3, { strict: false });
      name = webidl.converters.DOMString(name);
      attributes = webidl.converters.DeleteCookieAttributes(attributes);
      setCookie(headers, {
        name,
        value: "",
        expires: new Date(0),
        ...attributes
      });
    }
    function getSetCookies(headers) {
      webidl.argumentLengthCheck(arguments, 1, { header: "getSetCookies" });
      webidl.brandCheck(headers, Headers3, { strict: false });
      const cookies = getHeadersList(headers).cookies;
      if (!cookies) {
        return [];
      }
      return cookies.map((pair) => parseSetCookie(Array.isArray(pair) ? pair[1] : pair));
    }
    function setCookie(headers, cookie) {
      webidl.argumentLengthCheck(arguments, 2, { header: "setCookie" });
      webidl.brandCheck(headers, Headers3, { strict: false });
      cookie = webidl.converters.Cookie(cookie);
      const str = stringify2(cookie);
      if (str) {
        headers.append("Set-Cookie", stringify2(cookie));
      }
    }
    webidl.converters.DeleteCookieAttributes = webidl.dictionaryConverter([
      {
        converter: webidl.nullableConverter(webidl.converters.DOMString),
        key: "path",
        defaultValue: null
      },
      {
        converter: webidl.nullableConverter(webidl.converters.DOMString),
        key: "domain",
        defaultValue: null
      }
    ]);
    webidl.converters.Cookie = webidl.dictionaryConverter([
      {
        converter: webidl.converters.DOMString,
        key: "name"
      },
      {
        converter: webidl.converters.DOMString,
        key: "value"
      },
      {
        converter: webidl.nullableConverter((value) => {
          if (typeof value === "number") {
            return webidl.converters["unsigned long long"](value);
          }
          return new Date(value);
        }),
        key: "expires",
        defaultValue: null
      },
      {
        converter: webidl.nullableConverter(webidl.converters["long long"]),
        key: "maxAge",
        defaultValue: null
      },
      {
        converter: webidl.nullableConverter(webidl.converters.DOMString),
        key: "domain",
        defaultValue: null
      },
      {
        converter: webidl.nullableConverter(webidl.converters.DOMString),
        key: "path",
        defaultValue: null
      },
      {
        converter: webidl.nullableConverter(webidl.converters.boolean),
        key: "secure",
        defaultValue: null
      },
      {
        converter: webidl.nullableConverter(webidl.converters.boolean),
        key: "httpOnly",
        defaultValue: null
      },
      {
        converter: webidl.converters.USVString,
        key: "sameSite",
        allowedValues: ["Strict", "Lax", "None"]
      },
      {
        converter: webidl.sequenceConverter(webidl.converters.DOMString),
        key: "unparsed",
        defaultValue: []
      }
    ]);
    module2.exports = {
      getCookies,
      deleteCookie,
      getSetCookies,
      setCookie
    };
  }
});

// node_modules/undici/lib/websocket/constants.js
var require_constants4 = __commonJS({
  "node_modules/undici/lib/websocket/constants.js"(exports, module2) {
    "use strict";
    init_shims();
    var uid = "258EAFA5-E914-47DA-95CA-C5AB0DC85B11";
    var staticPropertyDescriptors = {
      enumerable: true,
      writable: false,
      configurable: false
    };
    var states = {
      CONNECTING: 0,
      OPEN: 1,
      CLOSING: 2,
      CLOSED: 3
    };
    var opcodes = {
      CONTINUATION: 0,
      TEXT: 1,
      BINARY: 2,
      CLOSE: 8,
      PING: 9,
      PONG: 10
    };
    var maxUnsigned16Bit = 2 ** 16 - 1;
    var parserStates = {
      INFO: 0,
      PAYLOADLENGTH_16: 2,
      PAYLOADLENGTH_64: 3,
      READ_DATA: 4
    };
    var emptyBuffer = Buffer.allocUnsafe(0);
    module2.exports = {
      uid,
      staticPropertyDescriptors,
      states,
      opcodes,
      maxUnsigned16Bit,
      parserStates,
      emptyBuffer
    };
  }
});

// node_modules/undici/lib/websocket/symbols.js
var require_symbols4 = __commonJS({
  "node_modules/undici/lib/websocket/symbols.js"(exports, module2) {
    "use strict";
    init_shims();
    module2.exports = {
      kWebSocketURL: Symbol("url"),
      kReadyState: Symbol("ready state"),
      kController: Symbol("controller"),
      kResponse: Symbol("response"),
      kExtensions: Symbol("extensions"),
      kProtocol: Symbol("protocol"),
      kBinaryType: Symbol("binary type"),
      kClosingFrame: Symbol("closing frame"),
      kSentClose: Symbol("sent close"),
      kReceivedClose: Symbol("received close"),
      kByteParser: Symbol("byte parser")
    };
  }
});

// node_modules/undici/lib/websocket/events.js
var require_events = __commonJS({
  "node_modules/undici/lib/websocket/events.js"(exports, module2) {
    "use strict";
    init_shims();
    var { webidl } = require_webidl();
    var { kEnumerableProperty } = require_util();
    var { MessagePort } = require("worker_threads");
    var MessageEvent = class extends Event {
      #eventInit;
      constructor(type, eventInitDict = {}) {
        webidl.argumentLengthCheck(arguments, 1, { header: "MessageEvent constructor" });
        type = webidl.converters.DOMString(type);
        eventInitDict = webidl.converters.MessageEventInit(eventInitDict);
        super(type, eventInitDict);
        this.#eventInit = eventInitDict;
      }
      get data() {
        webidl.brandCheck(this, MessageEvent);
        return this.#eventInit.data;
      }
      get origin() {
        webidl.brandCheck(this, MessageEvent);
        return this.#eventInit.origin;
      }
      get lastEventId() {
        webidl.brandCheck(this, MessageEvent);
        return this.#eventInit.lastEventId;
      }
      get source() {
        webidl.brandCheck(this, MessageEvent);
        return this.#eventInit.source;
      }
      get ports() {
        webidl.brandCheck(this, MessageEvent);
        if (!Object.isFrozen(this.#eventInit.ports)) {
          Object.freeze(this.#eventInit.ports);
        }
        return this.#eventInit.ports;
      }
      initMessageEvent(type, bubbles = false, cancelable = false, data = null, origin = "", lastEventId = "", source = null, ports = []) {
        webidl.brandCheck(this, MessageEvent);
        webidl.argumentLengthCheck(arguments, 1, { header: "MessageEvent.initMessageEvent" });
        return new MessageEvent(type, {
          bubbles,
          cancelable,
          data,
          origin,
          lastEventId,
          source,
          ports
        });
      }
    };
    var CloseEvent = class extends Event {
      #eventInit;
      constructor(type, eventInitDict = {}) {
        webidl.argumentLengthCheck(arguments, 1, { header: "CloseEvent constructor" });
        type = webidl.converters.DOMString(type);
        eventInitDict = webidl.converters.CloseEventInit(eventInitDict);
        super(type, eventInitDict);
        this.#eventInit = eventInitDict;
      }
      get wasClean() {
        webidl.brandCheck(this, CloseEvent);
        return this.#eventInit.wasClean;
      }
      get code() {
        webidl.brandCheck(this, CloseEvent);
        return this.#eventInit.code;
      }
      get reason() {
        webidl.brandCheck(this, CloseEvent);
        return this.#eventInit.reason;
      }
    };
    var ErrorEvent = class extends Event {
      #eventInit;
      constructor(type, eventInitDict) {
        webidl.argumentLengthCheck(arguments, 1, { header: "ErrorEvent constructor" });
        super(type, eventInitDict);
        type = webidl.converters.DOMString(type);
        eventInitDict = webidl.converters.ErrorEventInit(eventInitDict ?? {});
        this.#eventInit = eventInitDict;
      }
      get message() {
        webidl.brandCheck(this, ErrorEvent);
        return this.#eventInit.message;
      }
      get filename() {
        webidl.brandCheck(this, ErrorEvent);
        return this.#eventInit.filename;
      }
      get lineno() {
        webidl.brandCheck(this, ErrorEvent);
        return this.#eventInit.lineno;
      }
      get colno() {
        webidl.brandCheck(this, ErrorEvent);
        return this.#eventInit.colno;
      }
      get error() {
        webidl.brandCheck(this, ErrorEvent);
        return this.#eventInit.error;
      }
    };
    Object.defineProperties(MessageEvent.prototype, {
      [Symbol.toStringTag]: {
        value: "MessageEvent",
        configurable: true
      },
      data: kEnumerableProperty,
      origin: kEnumerableProperty,
      lastEventId: kEnumerableProperty,
      source: kEnumerableProperty,
      ports: kEnumerableProperty,
      initMessageEvent: kEnumerableProperty
    });
    Object.defineProperties(CloseEvent.prototype, {
      [Symbol.toStringTag]: {
        value: "CloseEvent",
        configurable: true
      },
      reason: kEnumerableProperty,
      code: kEnumerableProperty,
      wasClean: kEnumerableProperty
    });
    Object.defineProperties(ErrorEvent.prototype, {
      [Symbol.toStringTag]: {
        value: "ErrorEvent",
        configurable: true
      },
      message: kEnumerableProperty,
      filename: kEnumerableProperty,
      lineno: kEnumerableProperty,
      colno: kEnumerableProperty,
      error: kEnumerableProperty
    });
    webidl.converters.MessagePort = webidl.interfaceConverter(MessagePort);
    webidl.converters["sequence<MessagePort>"] = webidl.sequenceConverter(
      webidl.converters.MessagePort
    );
    var eventInit = [
      {
        key: "bubbles",
        converter: webidl.converters.boolean,
        defaultValue: false
      },
      {
        key: "cancelable",
        converter: webidl.converters.boolean,
        defaultValue: false
      },
      {
        key: "composed",
        converter: webidl.converters.boolean,
        defaultValue: false
      }
    ];
    webidl.converters.MessageEventInit = webidl.dictionaryConverter([
      ...eventInit,
      {
        key: "data",
        converter: webidl.converters.any,
        defaultValue: null
      },
      {
        key: "origin",
        converter: webidl.converters.USVString,
        defaultValue: ""
      },
      {
        key: "lastEventId",
        converter: webidl.converters.DOMString,
        defaultValue: ""
      },
      {
        key: "source",
        // Node doesn't implement WindowProxy or ServiceWorker, so the only
        // valid value for source is a MessagePort.
        converter: webidl.nullableConverter(webidl.converters.MessagePort),
        defaultValue: null
      },
      {
        key: "ports",
        converter: webidl.converters["sequence<MessagePort>"],
        get defaultValue() {
          return [];
        }
      }
    ]);
    webidl.converters.CloseEventInit = webidl.dictionaryConverter([
      ...eventInit,
      {
        key: "wasClean",
        converter: webidl.converters.boolean,
        defaultValue: false
      },
      {
        key: "code",
        converter: webidl.converters["unsigned short"],
        defaultValue: 0
      },
      {
        key: "reason",
        converter: webidl.converters.USVString,
        defaultValue: ""
      }
    ]);
    webidl.converters.ErrorEventInit = webidl.dictionaryConverter([
      ...eventInit,
      {
        key: "message",
        converter: webidl.converters.DOMString,
        defaultValue: ""
      },
      {
        key: "filename",
        converter: webidl.converters.USVString,
        defaultValue: ""
      },
      {
        key: "lineno",
        converter: webidl.converters["unsigned long"],
        defaultValue: 0
      },
      {
        key: "colno",
        converter: webidl.converters["unsigned long"],
        defaultValue: 0
      },
      {
        key: "error",
        converter: webidl.converters.any
      }
    ]);
    module2.exports = {
      MessageEvent,
      CloseEvent,
      ErrorEvent
    };
  }
});

// node_modules/undici/lib/websocket/util.js
var require_util5 = __commonJS({
  "node_modules/undici/lib/websocket/util.js"(exports, module2) {
    "use strict";
    init_shims();
    var { kReadyState, kController, kResponse, kBinaryType, kWebSocketURL } = require_symbols4();
    var { states, opcodes } = require_constants4();
    var { MessageEvent, ErrorEvent } = require_events();
    function isEstablished(ws) {
      return ws[kReadyState] === states.OPEN;
    }
    function isClosing(ws) {
      return ws[kReadyState] === states.CLOSING;
    }
    function isClosed(ws) {
      return ws[kReadyState] === states.CLOSED;
    }
    function fireEvent(e3, target, eventConstructor = Event, eventInitDict) {
      const event = new eventConstructor(e3, eventInitDict);
      target.dispatchEvent(event);
    }
    function websocketMessageReceived(ws, type, data) {
      if (ws[kReadyState] !== states.OPEN) {
        return;
      }
      let dataForEvent;
      if (type === opcodes.TEXT) {
        try {
          dataForEvent = new TextDecoder("utf-8", { fatal: true }).decode(data);
        } catch {
          failWebsocketConnection(ws, "Received invalid UTF-8 in text frame.");
          return;
        }
      } else if (type === opcodes.BINARY) {
        if (ws[kBinaryType] === "blob") {
          dataForEvent = new Blob([data]);
        } else {
          dataForEvent = new Uint8Array(data).buffer;
        }
      }
      fireEvent("message", ws, MessageEvent, {
        origin: ws[kWebSocketURL].origin,
        data: dataForEvent
      });
    }
    function isValidSubprotocol(protocol) {
      if (protocol.length === 0) {
        return false;
      }
      for (const char of protocol) {
        const code = char.charCodeAt(0);
        if (code < 33 || code > 126 || char === "(" || char === ")" || char === "<" || char === ">" || char === "@" || char === "," || char === ";" || char === ":" || char === "\\" || char === '"' || char === "/" || char === "[" || char === "]" || char === "?" || char === "=" || char === "{" || char === "}" || code === 32 || // SP
        code === 9) {
          return false;
        }
      }
      return true;
    }
    function isValidStatusCode(code) {
      if (code >= 1e3 && code < 1015) {
        return code !== 1004 && // reserved
        code !== 1005 && // "MUST NOT be set as a status code"
        code !== 1006;
      }
      return code >= 3e3 && code <= 4999;
    }
    function failWebsocketConnection(ws, reason) {
      const { [kController]: controller, [kResponse]: response } = ws;
      controller.abort();
      if ((response == null ? void 0 : response.socket) && !response.socket.destroyed) {
        response.socket.destroy();
      }
      if (reason) {
        fireEvent("error", ws, ErrorEvent, {
          error: new Error(reason)
        });
      }
    }
    module2.exports = {
      isEstablished,
      isClosing,
      isClosed,
      fireEvent,
      isValidSubprotocol,
      isValidStatusCode,
      failWebsocketConnection,
      websocketMessageReceived
    };
  }
});

// node_modules/undici/lib/websocket/frame.js
var require_frame = __commonJS({
  "node_modules/undici/lib/websocket/frame.js"(exports, module2) {
    "use strict";
    init_shims();
    var { randomBytes } = require("crypto");
    var { maxUnsigned16Bit } = require_constants4();
    var WebsocketFrameSend = class {
      /**
       * @param {Buffer|undefined} data
       */
      constructor(data) {
        this.frameData = data;
        this.maskKey = randomBytes(4);
      }
      createFrame(opcode) {
        var _a;
        const bodyLength = ((_a = this.frameData) == null ? void 0 : _a.byteLength) ?? 0;
        let payloadLength = bodyLength;
        let offset = 6;
        if (bodyLength > maxUnsigned16Bit) {
          offset += 8;
          payloadLength = 127;
        } else if (bodyLength > 125) {
          offset += 2;
          payloadLength = 126;
        }
        const buffer2 = Buffer.allocUnsafe(bodyLength + offset);
        buffer2[0] = buffer2[1] = 0;
        buffer2[0] |= 128;
        buffer2[0] = (buffer2[0] & 240) + opcode;
        buffer2[offset - 4] = this.maskKey[0];
        buffer2[offset - 3] = this.maskKey[1];
        buffer2[offset - 2] = this.maskKey[2];
        buffer2[offset - 1] = this.maskKey[3];
        buffer2[1] = payloadLength;
        if (payloadLength === 126) {
          new DataView(buffer2.buffer).setUint16(2, bodyLength);
        } else if (payloadLength === 127) {
          buffer2[2] = buffer2[3] = 0;
          buffer2.writeUIntBE(bodyLength, 4, 6);
        }
        buffer2[1] |= 128;
        for (let i3 = 0; i3 < bodyLength; i3++) {
          buffer2[offset + i3] = this.frameData[i3] ^ this.maskKey[i3 % 4];
        }
        return buffer2;
      }
    };
    module2.exports = {
      WebsocketFrameSend
    };
  }
});

// node_modules/undici/lib/websocket/receiver.js
var require_receiver = __commonJS({
  "node_modules/undici/lib/websocket/receiver.js"(exports, module2) {
    "use strict";
    init_shims();
    var { Writable } = require("stream");
    var diagnosticsChannel = require("diagnostics_channel");
    var { parserStates, opcodes, states, emptyBuffer } = require_constants4();
    var { kReadyState, kSentClose, kResponse, kReceivedClose } = require_symbols4();
    var { isValidStatusCode, failWebsocketConnection, websocketMessageReceived } = require_util5();
    var { WebsocketFrameSend } = require_frame();
    var channels = {};
    channels.ping = diagnosticsChannel.channel("undici:websocket:ping");
    channels.pong = diagnosticsChannel.channel("undici:websocket:pong");
    var ByteParser = class extends Writable {
      #buffers = [];
      #byteOffset = 0;
      #state = parserStates.INFO;
      #info = {};
      #fragments = [];
      constructor(ws) {
        super();
        this.ws = ws;
      }
      /**
       * @param {Buffer} chunk
       * @param {() => void} callback
       */
      _write(chunk, _, callback) {
        this.#buffers.push(chunk);
        this.#byteOffset += chunk.length;
        this.run(callback);
      }
      /**
       * Runs whenever a new chunk is received.
       * Callback is called whenever there are no more chunks buffering,
       * or not enough bytes are buffered to parse.
       */
      run(callback) {
        while (true) {
          if (this.#state === parserStates.INFO) {
            if (this.#byteOffset < 2) {
              return callback();
            }
            const buffer2 = this.consume(2);
            this.#info.fin = (buffer2[0] & 128) !== 0;
            this.#info.opcode = buffer2[0] & 15;
            this.#info.originalOpcode ??= this.#info.opcode;
            this.#info.fragmented = !this.#info.fin && this.#info.opcode !== opcodes.CONTINUATION;
            if (this.#info.fragmented && this.#info.opcode !== opcodes.BINARY && this.#info.opcode !== opcodes.TEXT) {
              failWebsocketConnection(this.ws, "Invalid frame type was fragmented.");
              return;
            }
            const payloadLength = buffer2[1] & 127;
            if (payloadLength <= 125) {
              this.#info.payloadLength = payloadLength;
              this.#state = parserStates.READ_DATA;
            } else if (payloadLength === 126) {
              this.#state = parserStates.PAYLOADLENGTH_16;
            } else if (payloadLength === 127) {
              this.#state = parserStates.PAYLOADLENGTH_64;
            }
            if (this.#info.fragmented && payloadLength > 125) {
              failWebsocketConnection(this.ws, "Fragmented frame exceeded 125 bytes.");
              return;
            } else if ((this.#info.opcode === opcodes.PING || this.#info.opcode === opcodes.PONG || this.#info.opcode === opcodes.CLOSE) && payloadLength > 125) {
              failWebsocketConnection(this.ws, "Payload length for control frame exceeded 125 bytes.");
              return;
            } else if (this.#info.opcode === opcodes.CLOSE) {
              if (payloadLength === 1) {
                failWebsocketConnection(this.ws, "Received close frame with a 1-byte body.");
                return;
              }
              const body = this.consume(payloadLength);
              this.#info.closeInfo = this.parseCloseBody(false, body);
              if (!this.ws[kSentClose]) {
                const body2 = Buffer.allocUnsafe(2);
                body2.writeUInt16BE(this.#info.closeInfo.code, 0);
                const closeFrame = new WebsocketFrameSend(body2);
                this.ws[kResponse].socket.write(
                  closeFrame.createFrame(opcodes.CLOSE),
                  (err) => {
                    if (!err) {
                      this.ws[kSentClose] = true;
                    }
                  }
                );
              }
              this.ws[kReadyState] = states.CLOSING;
              this.ws[kReceivedClose] = true;
              this.end();
              return;
            } else if (this.#info.opcode === opcodes.PING) {
              const body = this.consume(payloadLength);
              if (!this.ws[kReceivedClose]) {
                const frame = new WebsocketFrameSend(body);
                this.ws[kResponse].socket.write(frame.createFrame(opcodes.PONG));
                if (channels.ping.hasSubscribers) {
                  channels.ping.publish({
                    payload: body
                  });
                }
              }
              this.#state = parserStates.INFO;
              if (this.#byteOffset > 0) {
                continue;
              } else {
                callback();
                return;
              }
            } else if (this.#info.opcode === opcodes.PONG) {
              const body = this.consume(payloadLength);
              if (channels.pong.hasSubscribers) {
                channels.pong.publish({
                  payload: body
                });
              }
              if (this.#byteOffset > 0) {
                continue;
              } else {
                callback();
                return;
              }
            }
          } else if (this.#state === parserStates.PAYLOADLENGTH_16) {
            if (this.#byteOffset < 2) {
              return callback();
            }
            const buffer2 = this.consume(2);
            this.#info.payloadLength = buffer2.readUInt16BE(0);
            this.#state = parserStates.READ_DATA;
          } else if (this.#state === parserStates.PAYLOADLENGTH_64) {
            if (this.#byteOffset < 8) {
              return callback();
            }
            const buffer2 = this.consume(8);
            const upper = buffer2.readUInt32BE(0);
            if (upper > 2 ** 31 - 1) {
              failWebsocketConnection(this.ws, "Received payload length > 2^31 bytes.");
              return;
            }
            const lower = buffer2.readUInt32BE(4);
            this.#info.payloadLength = (upper << 8) + lower;
            this.#state = parserStates.READ_DATA;
          } else if (this.#state === parserStates.READ_DATA) {
            if (this.#byteOffset < this.#info.payloadLength) {
              return callback();
            } else if (this.#byteOffset >= this.#info.payloadLength) {
              const body = this.consume(this.#info.payloadLength);
              this.#fragments.push(body);
              if (!this.#info.fragmented || this.#info.fin && this.#info.opcode === opcodes.CONTINUATION) {
                const fullMessage = Buffer.concat(this.#fragments);
                websocketMessageReceived(this.ws, this.#info.originalOpcode, fullMessage);
                this.#info = {};
                this.#fragments.length = 0;
              }
              this.#state = parserStates.INFO;
            }
          }
          if (this.#byteOffset > 0) {
            continue;
          } else {
            callback();
            break;
          }
        }
      }
      /**
       * Take n bytes from the buffered Buffers
       * @param {number} n
       * @returns {Buffer|null}
       */
      consume(n2) {
        if (n2 > this.#byteOffset) {
          return null;
        } else if (n2 === 0) {
          return emptyBuffer;
        }
        if (this.#buffers[0].length === n2) {
          this.#byteOffset -= this.#buffers[0].length;
          return this.#buffers.shift();
        }
        const buffer2 = Buffer.allocUnsafe(n2);
        let offset = 0;
        while (offset !== n2) {
          const next = this.#buffers[0];
          const { length } = next;
          if (length + offset === n2) {
            buffer2.set(this.#buffers.shift(), offset);
            break;
          } else if (length + offset > n2) {
            buffer2.set(next.subarray(0, n2 - offset), offset);
            this.#buffers[0] = next.subarray(n2 - offset);
            break;
          } else {
            buffer2.set(this.#buffers.shift(), offset);
            offset += next.length;
          }
        }
        this.#byteOffset -= n2;
        return buffer2;
      }
      parseCloseBody(onlyCode, data) {
        let code;
        if (data.length >= 2) {
          code = data.readUInt16BE(0);
        }
        if (onlyCode) {
          if (!isValidStatusCode(code)) {
            return null;
          }
          return { code };
        }
        let reason = data.subarray(2);
        if (reason[0] === 239 && reason[1] === 187 && reason[2] === 191) {
          reason = reason.subarray(3);
        }
        if (code !== void 0 && !isValidStatusCode(code)) {
          return null;
        }
        try {
          reason = new TextDecoder("utf-8", { fatal: true }).decode(reason);
        } catch {
          return null;
        }
        return { code, reason };
      }
      get closingInfo() {
        return this.#info.closeInfo;
      }
    };
    module2.exports = {
      ByteParser
    };
  }
});

// node_modules/undici/lib/websocket/connection.js
var require_connection = __commonJS({
  "node_modules/undici/lib/websocket/connection.js"(exports, module2) {
    "use strict";
    init_shims();
    var { randomBytes, createHash } = require("crypto");
    var diagnosticsChannel = require("diagnostics_channel");
    var { uid, states } = require_constants4();
    var {
      kReadyState,
      kResponse,
      kExtensions,
      kProtocol,
      kSentClose,
      kByteParser,
      kReceivedClose
    } = require_symbols4();
    var { fireEvent, failWebsocketConnection } = require_util5();
    var { CloseEvent } = require_events();
    var { ByteParser } = require_receiver();
    var { makeRequest } = require_request2();
    var { fetching } = require_fetch();
    var { getGlobalDispatcher } = require_undici();
    var channels = {};
    channels.open = diagnosticsChannel.channel("undici:websocket:open");
    channels.close = diagnosticsChannel.channel("undici:websocket:close");
    channels.socketError = diagnosticsChannel.channel("undici:websocket:socket_error");
    function establishWebSocketConnection(url, protocols, ws) {
      const requestURL = url;
      requestURL.protocol = url.protocol === "ws:" ? "http:" : "https:";
      const request = makeRequest({
        urlList: [requestURL],
        serviceWorkers: "none",
        referrer: "no-referrer",
        mode: "websocket",
        credentials: "include",
        cache: "no-store",
        redirect: "error"
      });
      const keyValue = randomBytes(16).toString("base64");
      request.headersList.append("sec-websocket-key", keyValue);
      request.headersList.append("sec-websocket-version", "13");
      for (const protocol of protocols) {
        request.headersList.append("sec-websocket-protocol", protocol);
      }
      const permessageDeflate = "";
      const controller = fetching({
        request,
        useParallelQueue: true,
        dispatcher: getGlobalDispatcher(),
        processResponse(response) {
          var _a, _b;
          if (response.type === "error" || response.status !== 101) {
            failWebsocketConnection(ws, "Received network error or non-101 status code.");
            return;
          }
          if (protocols.length !== 0 && !response.headersList.get("Sec-WebSocket-Protocol")) {
            failWebsocketConnection(ws, "Server did not respond with sent protocols.");
            return;
          }
          if (((_a = response.headersList.get("Upgrade")) == null ? void 0 : _a.toLowerCase()) !== "websocket") {
            failWebsocketConnection(ws, 'Server did not set Upgrade header to "websocket".');
            return;
          }
          if (((_b = response.headersList.get("Connection")) == null ? void 0 : _b.toLowerCase()) !== "upgrade") {
            failWebsocketConnection(ws, 'Server did not set Connection header to "upgrade".');
            return;
          }
          const secWSAccept = response.headersList.get("Sec-WebSocket-Accept");
          const digest = createHash("sha1").update(keyValue + uid).digest("base64");
          if (secWSAccept !== digest) {
            failWebsocketConnection(ws, "Incorrect hash received in Sec-WebSocket-Accept header.");
            return;
          }
          const secExtension = response.headersList.get("Sec-WebSocket-Extensions");
          if (secExtension !== null && secExtension !== permessageDeflate) {
            failWebsocketConnection(ws, "Received different permessage-deflate than the one set.");
            return;
          }
          const secProtocol = response.headersList.get("Sec-WebSocket-Protocol");
          if (secProtocol !== null && secProtocol !== request.headersList.get("Sec-WebSocket-Protocol")) {
            failWebsocketConnection(ws, "Protocol was not set in the opening handshake.");
            return;
          }
          ws[kResponse] = response;
          const parser = new ByteParser(ws);
          response.socket.ws = ws;
          ws[kByteParser] = parser;
          whenConnectionEstablished(ws);
          response.socket.on("data", onSocketData);
          response.socket.on("close", onSocketClose);
          response.socket.on("error", onSocketError);
          parser.on("drain", onParserDrain);
        }
      });
      return controller;
    }
    function whenConnectionEstablished(ws) {
      const { [kResponse]: response } = ws;
      ws[kReadyState] = states.OPEN;
      const extensions = response.headersList.get("sec-websocket-extensions");
      if (extensions !== null) {
        ws[kExtensions] = extensions;
      }
      const protocol = response.headersList.get("sec-websocket-protocol");
      if (protocol !== null) {
        ws[kProtocol] = protocol;
      }
      fireEvent("open", ws);
      if (channels.open.hasSubscribers) {
        channels.open.publish({
          address: response.socket.address(),
          protocol,
          extensions
        });
      }
    }
    function onSocketData(chunk) {
      if (!this.ws[kByteParser].write(chunk)) {
        this.pause();
      }
    }
    function onParserDrain() {
      this.ws[kResponse].socket.resume();
    }
    function onSocketClose() {
      const { ws } = this;
      const wasClean = ws[kSentClose] && ws[kReceivedClose];
      let code = 1005;
      let reason = "";
      const result = ws[kByteParser].closingInfo;
      if (result) {
        code = result.code ?? 1005;
        reason = result.reason;
      } else if (!ws[kSentClose]) {
        code = 1006;
      }
      ws[kReadyState] = states.CLOSED;
      fireEvent("close", ws, CloseEvent, {
        wasClean,
        code,
        reason
      });
      if (channels.close.hasSubscribers) {
        channels.close.publish({
          websocket: ws,
          code,
          reason
        });
      }
    }
    function onSocketError(error2) {
      const { ws } = this;
      ws[kReadyState] = states.CLOSING;
      if (channels.socketError.hasSubscribers) {
        channels.socketError.publish(error2);
      }
      this.destroy();
    }
    module2.exports = {
      establishWebSocketConnection
    };
  }
});

// node_modules/undici/lib/websocket/websocket.js
var require_websocket = __commonJS({
  "node_modules/undici/lib/websocket/websocket.js"(exports, module2) {
    "use strict";
    init_shims();
    var { webidl } = require_webidl();
    var { DOMException } = require_constants();
    var { URLSerializer } = require_dataURL();
    var { staticPropertyDescriptors, states, opcodes, emptyBuffer } = require_constants4();
    var {
      kWebSocketURL,
      kReadyState,
      kController,
      kExtensions,
      kProtocol,
      kBinaryType,
      kResponse,
      kSentClose
    } = require_symbols4();
    var { isEstablished, isClosing, isValidSubprotocol, failWebsocketConnection } = require_util5();
    var { establishWebSocketConnection } = require_connection();
    var { WebsocketFrameSend } = require_frame();
    var { kEnumerableProperty, isBlobLike } = require_util();
    var { types } = require("util");
    var experimentalWarned = false;
    var WebSocket = class extends EventTarget {
      #events = {
        open: null,
        error: null,
        close: null,
        message: null
      };
      #bufferedAmount = 0;
      /**
       * @param {string} url
       * @param {string|string[]} protocols
       */
      constructor(url, protocols = []) {
        super();
        webidl.argumentLengthCheck(arguments, 1, { header: "WebSocket constructor" });
        if (!experimentalWarned) {
          experimentalWarned = true;
          process.emitWarning("WebSockets are experimental, expect them to change at any time.", {
            code: "UNDICI-WS"
          });
        }
        url = webidl.converters.USVString(url);
        protocols = webidl.converters["DOMString or sequence<DOMString>"](protocols);
        let urlRecord;
        try {
          urlRecord = new URL(url);
        } catch (e3) {
          throw new DOMException(e3, "SyntaxError");
        }
        if (urlRecord.protocol !== "ws:" && urlRecord.protocol !== "wss:") {
          throw new DOMException(
            `Expected a ws: or wss: protocol, got ${urlRecord.protocol}`,
            "SyntaxError"
          );
        }
        if (urlRecord.hash) {
          throw new DOMException("Got fragment", "SyntaxError");
        }
        if (typeof protocols === "string") {
          protocols = [protocols];
        }
        if (protocols.length !== new Set(protocols.map((p4) => p4.toLowerCase())).size) {
          throw new DOMException("Invalid Sec-WebSocket-Protocol value", "SyntaxError");
        }
        if (protocols.length > 0 && !protocols.every((p4) => isValidSubprotocol(p4))) {
          throw new DOMException("Invalid Sec-WebSocket-Protocol value", "SyntaxError");
        }
        this[kWebSocketURL] = urlRecord;
        this[kController] = establishWebSocketConnection(urlRecord, protocols, this);
        this[kReadyState] = WebSocket.CONNECTING;
        this[kExtensions] = "";
        this[kProtocol] = "";
        this[kBinaryType] = "blob";
      }
      /**
       * @see https://websockets.spec.whatwg.org/#dom-websocket-close
       * @param {number|undefined} code
       * @param {string|undefined} reason
       */
      close(code = void 0, reason = void 0) {
        webidl.brandCheck(this, WebSocket);
        if (code !== void 0) {
          code = webidl.converters["unsigned short"](code, { clamp: true });
        }
        if (reason !== void 0) {
          reason = webidl.converters.USVString(reason);
        }
        if (code !== void 0) {
          if (code !== 1e3 && (code < 3e3 || code > 4999)) {
            throw new DOMException("invalid code", "InvalidAccessError");
          }
        }
        let reasonByteLength = 0;
        if (reason !== void 0) {
          reasonByteLength = Buffer.byteLength(reason);
          if (reasonByteLength > 123) {
            throw new DOMException(
              `Reason must be less than 123 bytes; received ${reasonByteLength}`,
              "SyntaxError"
            );
          }
        }
        if (this[kReadyState] === WebSocket.CLOSING || this[kReadyState] === WebSocket.CLOSED) {
        } else if (!isEstablished(this)) {
          failWebsocketConnection(this, "Connection was closed before it was established.");
          this[kReadyState] = WebSocket.CLOSING;
        } else if (!isClosing(this)) {
          const frame = new WebsocketFrameSend();
          if (code !== void 0 && reason === void 0) {
            frame.frameData = Buffer.allocUnsafe(2);
            frame.frameData.writeUInt16BE(code, 0);
          } else if (code !== void 0 && reason !== void 0) {
            frame.frameData = Buffer.allocUnsafe(2 + reasonByteLength);
            frame.frameData.writeUInt16BE(code, 0);
            frame.frameData.write(reason, 2, "utf-8");
          } else {
            frame.frameData = emptyBuffer;
          }
          const socket = this[kResponse].socket;
          socket.write(frame.createFrame(opcodes.CLOSE), (err) => {
            if (!err) {
              this[kSentClose] = true;
            }
          });
          this[kReadyState] = states.CLOSING;
        } else {
          this[kReadyState] = WebSocket.CLOSING;
        }
      }
      /**
       * @see https://websockets.spec.whatwg.org/#dom-websocket-send
       * @param {NodeJS.TypedArray|ArrayBuffer|Blob|string} data
       */
      send(data) {
        webidl.brandCheck(this, WebSocket);
        webidl.argumentLengthCheck(arguments, 1, { header: "WebSocket.send" });
        data = webidl.converters.WebSocketSendData(data);
        if (this[kReadyState] === WebSocket.CONNECTING) {
          throw new DOMException("Sent before connected.", "InvalidStateError");
        }
        if (!isEstablished(this) || isClosing(this)) {
          return;
        }
        const socket = this[kResponse].socket;
        if (typeof data === "string") {
          const value = Buffer.from(data);
          const frame = new WebsocketFrameSend(value);
          const buffer2 = frame.createFrame(opcodes.TEXT);
          this.#bufferedAmount += value.byteLength;
          socket.write(buffer2, () => {
            this.#bufferedAmount -= value.byteLength;
          });
        } else if (types.isArrayBuffer(data)) {
          const value = Buffer.from(data);
          const frame = new WebsocketFrameSend(value);
          const buffer2 = frame.createFrame(opcodes.BINARY);
          this.#bufferedAmount += value.byteLength;
          socket.write(buffer2, () => {
            this.#bufferedAmount -= value.byteLength;
          });
        } else if (ArrayBuffer.isView(data)) {
          const ab = Buffer.from(data, data.byteOffset, data.byteLength);
          const frame = new WebsocketFrameSend(ab);
          const buffer2 = frame.createFrame(opcodes.BINARY);
          this.#bufferedAmount += ab.byteLength;
          socket.write(buffer2, () => {
            this.#bufferedAmount -= ab.byteLength;
          });
        } else if (isBlobLike(data)) {
          const frame = new WebsocketFrameSend();
          data.arrayBuffer().then((ab) => {
            const value = Buffer.from(ab);
            frame.frameData = value;
            const buffer2 = frame.createFrame(opcodes.BINARY);
            this.#bufferedAmount += value.byteLength;
            socket.write(buffer2, () => {
              this.#bufferedAmount -= value.byteLength;
            });
          });
        }
      }
      get readyState() {
        webidl.brandCheck(this, WebSocket);
        return this[kReadyState];
      }
      get bufferedAmount() {
        webidl.brandCheck(this, WebSocket);
        return this.#bufferedAmount;
      }
      get url() {
        webidl.brandCheck(this, WebSocket);
        return URLSerializer(this[kWebSocketURL]);
      }
      get extensions() {
        webidl.brandCheck(this, WebSocket);
        return this[kExtensions];
      }
      get protocol() {
        webidl.brandCheck(this, WebSocket);
        return this[kProtocol];
      }
      get onopen() {
        webidl.brandCheck(this, WebSocket);
        return this.#events.open;
      }
      set onopen(fn) {
        webidl.brandCheck(this, WebSocket);
        if (this.#events.open) {
          this.removeEventListener("open", this.#events.open);
        }
        if (typeof fn === "function") {
          this.#events.open = fn;
          this.addEventListener("open", fn);
        } else {
          this.#events.open = null;
        }
      }
      get onerror() {
        webidl.brandCheck(this, WebSocket);
        return this.#events.error;
      }
      set onerror(fn) {
        webidl.brandCheck(this, WebSocket);
        if (this.#events.error) {
          this.removeEventListener("error", this.#events.error);
        }
        if (typeof fn === "function") {
          this.#events.error = fn;
          this.addEventListener("error", fn);
        } else {
          this.#events.error = null;
        }
      }
      get onclose() {
        webidl.brandCheck(this, WebSocket);
        return this.#events.close;
      }
      set onclose(fn) {
        webidl.brandCheck(this, WebSocket);
        if (this.#events.close) {
          this.removeEventListener("close", this.#events.close);
        }
        if (typeof fn === "function") {
          this.#events.close = fn;
          this.addEventListener("close", fn);
        } else {
          this.#events.close = null;
        }
      }
      get onmessage() {
        webidl.brandCheck(this, WebSocket);
        return this.#events.message;
      }
      set onmessage(fn) {
        webidl.brandCheck(this, WebSocket);
        if (this.#events.message) {
          this.removeEventListener("message", this.#events.message);
        }
        if (typeof fn === "function") {
          this.#events.message = fn;
          this.addEventListener("message", fn);
        } else {
          this.#events.message = null;
        }
      }
      get binaryType() {
        webidl.brandCheck(this, WebSocket);
        return this[kBinaryType];
      }
      set binaryType(type) {
        webidl.brandCheck(this, WebSocket);
        if (type !== "blob" && type !== "arraybuffer") {
          this[kBinaryType] = "blob";
        } else {
          this[kBinaryType] = type;
        }
      }
    };
    WebSocket.CONNECTING = WebSocket.prototype.CONNECTING = states.CONNECTING;
    WebSocket.OPEN = WebSocket.prototype.OPEN = states.OPEN;
    WebSocket.CLOSING = WebSocket.prototype.CLOSING = states.CLOSING;
    WebSocket.CLOSED = WebSocket.prototype.CLOSED = states.CLOSED;
    Object.defineProperties(WebSocket.prototype, {
      CONNECTING: staticPropertyDescriptors,
      OPEN: staticPropertyDescriptors,
      CLOSING: staticPropertyDescriptors,
      CLOSED: staticPropertyDescriptors,
      url: kEnumerableProperty,
      readyState: kEnumerableProperty,
      bufferedAmount: kEnumerableProperty,
      onopen: kEnumerableProperty,
      onerror: kEnumerableProperty,
      onclose: kEnumerableProperty,
      close: kEnumerableProperty,
      onmessage: kEnumerableProperty,
      binaryType: kEnumerableProperty,
      send: kEnumerableProperty,
      extensions: kEnumerableProperty,
      protocol: kEnumerableProperty,
      [Symbol.toStringTag]: {
        value: "WebSocket",
        writable: false,
        enumerable: false,
        configurable: true
      }
    });
    Object.defineProperties(WebSocket, {
      CONNECTING: staticPropertyDescriptors,
      OPEN: staticPropertyDescriptors,
      CLOSING: staticPropertyDescriptors,
      CLOSED: staticPropertyDescriptors
    });
    webidl.converters["sequence<DOMString>"] = webidl.sequenceConverter(
      webidl.converters.DOMString
    );
    webidl.converters["DOMString or sequence<DOMString>"] = function(V) {
      if (webidl.util.Type(V) === "Object" && Symbol.iterator in V) {
        return webidl.converters["sequence<DOMString>"](V);
      }
      return webidl.converters.DOMString(V);
    };
    webidl.converters.WebSocketSendData = function(V) {
      if (webidl.util.Type(V) === "Object") {
        if (isBlobLike(V)) {
          return webidl.converters.Blob(V, { strict: false });
        }
        if (ArrayBuffer.isView(V) || types.isAnyArrayBuffer(V)) {
          return webidl.converters.BufferSource(V);
        }
      }
      return webidl.converters.USVString(V);
    };
    module2.exports = {
      WebSocket
    };
  }
});

// node_modules/undici/index.js
var require_undici = __commonJS({
  "node_modules/undici/index.js"(exports, module2) {
    "use strict";
    init_shims();
    var Client = require_client();
    var Dispatcher = require_dispatcher();
    var errors = require_errors();
    var Pool = require_pool();
    var BalancedPool = require_balanced_pool();
    var Agent = require_agent();
    var util = require_util();
    var { InvalidArgumentError } = errors;
    var api = require_api();
    var buildConnector = require_connect();
    var MockClient = require_mock_client();
    var MockAgent = require_mock_agent();
    var MockPool = require_mock_pool();
    var mockErrors = require_mock_errors();
    var ProxyAgent = require_proxy_agent();
    var { getGlobalDispatcher, setGlobalDispatcher } = require_global();
    var DecoratorHandler = require_DecoratorHandler();
    var RedirectHandler = require_RedirectHandler();
    var createRedirectInterceptor = require_redirectInterceptor();
    var hasCrypto;
    try {
      require("crypto");
      hasCrypto = true;
    } catch {
      hasCrypto = false;
    }
    Object.assign(Dispatcher.prototype, api);
    module2.exports.Dispatcher = Dispatcher;
    module2.exports.Client = Client;
    module2.exports.Pool = Pool;
    module2.exports.BalancedPool = BalancedPool;
    module2.exports.Agent = Agent;
    module2.exports.ProxyAgent = ProxyAgent;
    module2.exports.DecoratorHandler = DecoratorHandler;
    module2.exports.RedirectHandler = RedirectHandler;
    module2.exports.createRedirectInterceptor = createRedirectInterceptor;
    module2.exports.buildConnector = buildConnector;
    module2.exports.errors = errors;
    function makeDispatcher(fn) {
      return (url, opts, handler2) => {
        if (typeof opts === "function") {
          handler2 = opts;
          opts = null;
        }
        if (!url || typeof url !== "string" && typeof url !== "object" && !(url instanceof URL)) {
          throw new InvalidArgumentError("invalid url");
        }
        if (opts != null && typeof opts !== "object") {
          throw new InvalidArgumentError("invalid opts");
        }
        if (opts && opts.path != null) {
          if (typeof opts.path !== "string") {
            throw new InvalidArgumentError("invalid opts.path");
          }
          let path = opts.path;
          if (!opts.path.startsWith("/")) {
            path = `/${path}`;
          }
          url = new URL(util.parseOrigin(url).origin + path);
        } else {
          if (!opts) {
            opts = typeof url === "object" ? url : {};
          }
          url = util.parseURL(url);
        }
        const { agent, dispatcher = getGlobalDispatcher() } = opts;
        if (agent) {
          throw new InvalidArgumentError("unsupported opts.agent. Did you mean opts.client?");
        }
        return fn.call(dispatcher, {
          ...opts,
          origin: url.origin,
          path: url.search ? `${url.pathname}${url.search}` : url.pathname,
          method: opts.method || (opts.body ? "PUT" : "GET")
        }, handler2);
      };
    }
    module2.exports.setGlobalDispatcher = setGlobalDispatcher;
    module2.exports.getGlobalDispatcher = getGlobalDispatcher;
    if (util.nodeMajor > 16 || util.nodeMajor === 16 && util.nodeMinor >= 8) {
      let fetchImpl = null;
      module2.exports.fetch = async function fetch3(resource) {
        if (!fetchImpl) {
          fetchImpl = require_fetch().fetch;
        }
        try {
          return await fetchImpl(...arguments);
        } catch (err) {
          Error.captureStackTrace(err, this);
          throw err;
        }
      };
      module2.exports.Headers = require_headers().Headers;
      module2.exports.Response = require_response().Response;
      module2.exports.Request = require_request2().Request;
      module2.exports.FormData = require_formdata().FormData;
      module2.exports.File = require_file().File;
      module2.exports.FileReader = require_filereader().FileReader;
      const { setGlobalOrigin, getGlobalOrigin } = require_global2();
      module2.exports.setGlobalOrigin = setGlobalOrigin;
      module2.exports.getGlobalOrigin = getGlobalOrigin;
    }
    if (util.nodeMajor >= 16) {
      const { deleteCookie, getCookies, getSetCookies, setCookie } = require_cookies();
      module2.exports.deleteCookie = deleteCookie;
      module2.exports.getCookies = getCookies;
      module2.exports.getSetCookies = getSetCookies;
      module2.exports.setCookie = setCookie;
      const { parseMIMEType, serializeAMimeType } = require_dataURL();
      module2.exports.parseMIMEType = parseMIMEType;
      module2.exports.serializeAMimeType = serializeAMimeType;
    }
    if (util.nodeMajor >= 18 && hasCrypto) {
      const { WebSocket } = require_websocket();
      module2.exports.WebSocket = WebSocket;
    }
    module2.exports.request = makeDispatcher(api.request);
    module2.exports.stream = makeDispatcher(api.stream);
    module2.exports.pipeline = makeDispatcher(api.pipeline);
    module2.exports.connect = makeDispatcher(api.connect);
    module2.exports.upgrade = makeDispatcher(api.upgrade);
    module2.exports.MockClient = MockClient;
    module2.exports.MockPool = MockPool;
    module2.exports.MockAgent = MockAgent;
    module2.exports.mockErrors = mockErrors;
  }
});

// node_modules/@sveltejs/kit/src/exports/node/polyfills.js
function installPolyfills() {
  for (const name in globals) {
    Object.defineProperty(globalThis, name, {
      enumerable: true,
      configurable: true,
      writable: true,
      value: globals[name]
    });
  }
}
var import_web, import_node_buffer, import_node_crypto, import_undici, File, globals;
var init_polyfills = __esm({
  "node_modules/@sveltejs/kit/src/exports/node/polyfills.js"() {
    init_shims();
    import_web = require("node:stream/web");
    import_node_buffer = __toESM(require("node:buffer"), 1);
    import_node_crypto = require("node:crypto");
    import_undici = __toESM(require_undici(), 1);
    File = import_node_buffer.default.File ?? import_undici.File;
    globals = {
      crypto: import_node_crypto.webcrypto,
      fetch: import_undici.fetch,
      Response: import_undici.Response,
      Request: import_undici.Request,
      Headers: import_undici.Headers,
      ReadableStream: import_web.ReadableStream,
      TransformStream: import_web.TransformStream,
      WritableStream: import_web.WritableStream,
      FormData: import_undici.FormData,
      File
    };
  }
});

// build/server/shims.js
var init_shims = __esm({
  "build/server/shims.js"() {
    "use strict";
    init_polyfills();
    installPolyfills();
  }
});

// build/chunks/index2.js
function noop() {
}
function run(fn) {
  return fn();
}
function blank_object() {
  return /* @__PURE__ */ Object.create(null);
}
function run_all(fns) {
  fns.forEach(run);
}
function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || (a && typeof a === "object" || typeof a === "function");
}
function subscribe(store, ...callbacks) {
  if (store == null) {
    return noop;
  }
  const unsub = store.subscribe(...callbacks);
  return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}
function get_store_value(store) {
  let value;
  subscribe(store, (_) => value = _)();
  return value;
}
function set_current_component(component11) {
  current_component = component11;
}
function get_current_component() {
  if (!current_component)
    throw new Error("Function called outside component initialization");
  return current_component;
}
function setContext(key2, context) {
  get_current_component().$$.context.set(key2, context);
  return context;
}
function getContext(key2) {
  return get_current_component().$$.context.get(key2);
}
function escape(value, is_attr = false) {
  const str = String(value);
  const pattern2 = is_attr ? ATTR_REGEX : CONTENT_REGEX;
  pattern2.lastIndex = 0;
  let escaped2 = "";
  let last = 0;
  while (pattern2.test(str)) {
    const i3 = pattern2.lastIndex - 1;
    const ch = str[i3];
    escaped2 += str.substring(last, i3) + (ch === "&" ? "&amp;" : ch === '"' ? "&quot;" : "&lt;");
    last = i3 + 1;
  }
  return escaped2 + str.substring(last);
}
function each(items, fn) {
  let str = "";
  for (let i3 = 0; i3 < items.length; i3 += 1) {
    str += fn(items[i3], i3);
  }
  return str;
}
function validate_component(component11, name) {
  if (!component11 || !component11.$$render) {
    if (name === "svelte:component")
      name += " this={...}";
    throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules. Otherwise you may need to fix a <${name}>.`);
  }
  return component11;
}
function create_ssr_component(fn) {
  function $$render(result, props, bindings, slots, context) {
    const parent_component = current_component;
    const $$ = {
      on_destroy,
      context: new Map(context || (parent_component ? parent_component.$$.context : [])),
      // these will be immediately discarded
      on_mount: [],
      before_update: [],
      after_update: [],
      callbacks: blank_object()
    };
    set_current_component({ $$ });
    const html = fn(result, props, bindings, slots);
    set_current_component(parent_component);
    return html;
  }
  return {
    render: (props = {}, { $$slots = {}, context = /* @__PURE__ */ new Map() } = {}) => {
      on_destroy = [];
      const result = { title: "", head: "", css: /* @__PURE__ */ new Set() };
      const html = $$render(result, props, {}, $$slots, context);
      run_all(on_destroy);
      return {
        html,
        css: {
          code: Array.from(result.css).map((css2) => css2.code).join("\n"),
          map: null
          // TODO
        },
        head: result.title + result.head
      };
    },
    $$render
  };
}
function add_attribute(name, value, boolean) {
  if (value == null || boolean && !value)
    return "";
  const assignment = boolean && value === true ? "" : `="${escape(value, true)}"`;
  return ` ${name}${assignment}`;
}
var current_component, ATTR_REGEX, CONTENT_REGEX, missing_component, on_destroy;
var init_index2 = __esm({
  "build/chunks/index2.js"() {
    "use strict";
    init_shims();
    Promise.resolve();
    ATTR_REGEX = /[&"]/g;
    CONTENT_REGEX = /[&<]/g;
    missing_component = {
      $$render: () => ""
    };
  }
});

// node_modules/typesafe-i18n/runtime/esm/parser/src/basic.mjs
var removeEmptyValues, trimAllValues, parseArgumentPart, isBasicPluralPart, parsePluralPart, REGEX_SWITCH_CASE, parseCases, REGEX_BRACKETS_SPLIT, removeOuterBrackets, parseRawText;
var init_basic = __esm({
  "node_modules/typesafe-i18n/runtime/esm/parser/src/basic.mjs"() {
    init_shims();
    removeEmptyValues = (object) => Object.fromEntries(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      Object.entries(object).map(([key2, value]) => key2 !== "i" && value && value != "0" && [key2, value]).filter(Boolean)
    );
    trimAllValues = (part) => Object.fromEntries(Object.keys(part).map((key2) => {
      const val = part[key2];
      return [
        key2,
        Array.isArray(val) ? val.map((v) => v === null || v === void 0 ? void 0 : v.trim()) : val === !!val ? val : val === null || val === void 0 ? void 0 : val.trim()
      ];
    }));
    parseArgumentPart = (text2) => {
      const [keyPart = "", ...formatterKeys] = text2.split("|");
      const [keyWithoutType = "", type] = keyPart.split(":");
      const [key2, isOptional] = keyWithoutType.split("?");
      return { k: key2, i: type, n: isOptional === "", f: formatterKeys };
    };
    isBasicPluralPart = (part) => !!(part.o || part.r);
    parsePluralPart = (content, lastAccessor) => {
      let [key2, values] = content.split(":");
      if (!values) {
        values = key2;
        key2 = lastAccessor;
      }
      const entries = values.split("|");
      const [zero, one, two, few, many, rest] = entries;
      const nrOfEntries = entries.filter((entry) => entry !== void 0).length;
      if (nrOfEntries === 1) {
        return { k: key2, r: zero };
      }
      if (nrOfEntries === 2) {
        return { k: key2, o: zero, r: one };
      }
      if (nrOfEntries === 3) {
        return { k: key2, z: zero, o: one, r: two };
      }
      return { k: key2, z: zero, o: one, t: two, f: few, m: many, r: rest };
    };
    REGEX_SWITCH_CASE = /^\{.*\}$/;
    parseCases = (text2) => Object.fromEntries(removeOuterBrackets(text2).split(",").map((part) => part.split(":")).reduce((accumulator, entry) => {
      if (entry.length === 2) {
        return [...accumulator, entry.map((entry2) => entry2.trim())];
      }
      ;
      accumulator[accumulator.length - 1][1] += "," + entry[0];
      return accumulator;
    }, []));
    REGEX_BRACKETS_SPLIT = /(\{(?:[^{}]+|\{(?:[^{}]+)*\})*\})/g;
    removeOuterBrackets = (text2) => text2.substring(1, text2.length - 1);
    parseRawText = (rawText, optimize = true, firstKey = "", lastKey = "") => rawText.split(REGEX_BRACKETS_SPLIT).map((part) => {
      if (!part.match(REGEX_BRACKETS_SPLIT)) {
        return part;
      }
      const content = removeOuterBrackets(part);
      if (content.startsWith("{")) {
        return parsePluralPart(removeOuterBrackets(content), lastKey);
      }
      const parsedPart = parseArgumentPart(content);
      lastKey = parsedPart.k || lastKey;
      !firstKey && (firstKey = lastKey);
      return parsedPart;
    }).map((part) => {
      if (typeof part === "string")
        return part;
      if (!part.k)
        part.k = firstKey || "0";
      const trimmed = trimAllValues(part);
      return optimize ? removeEmptyValues(trimmed) : trimmed;
    });
  }
});

// node_modules/typesafe-i18n/runtime/esm/runtime/src/core.mjs
var applyFormatters, getPlural, REGEX_PLURAL_VALUE_INJECTION, applyArguments, translate;
var init_core = __esm({
  "node_modules/typesafe-i18n/runtime/esm/runtime/src/core.mjs"() {
    init_shims();
    init_basic();
    applyFormatters = (formatters, formatterKeys, initialValue) => formatterKeys.reduce((value, formatterKey) => {
      var _a, _b;
      return (_b = formatterKey.match(REGEX_SWITCH_CASE) ? ((cases) => {
        var _a2;
        return (_a2 = cases[value]) !== null && _a2 !== void 0 ? _a2 : cases["*"];
      })(parseCases(formatterKey)) : (_a = formatters[formatterKey]) === null || _a === void 0 ? void 0 : _a.call(formatters, value)) !== null && _b !== void 0 ? _b : value;
    }, initialValue);
    getPlural = (pluralRules, { z, o: o3, t: t2, f, m: m2, r: r2 }, value) => {
      switch (z && value == 0 ? "zero" : pluralRules.select(value)) {
        case "zero":
          return z;
        case "one":
          return o3;
        case "two":
          return t2;
        case "few":
          return f;
        case "many":
          return m2;
        default:
          return r2;
      }
    };
    REGEX_PLURAL_VALUE_INJECTION = /\?\?/g;
    applyArguments = (textParts, pluralRules, formatters, args) => textParts.map((part) => {
      if (typeof part === "string") {
        return part;
      }
      const { k: key2 = "0", f: formatterKeys = [] } = part;
      const value = args[key2];
      if (isBasicPluralPart(part)) {
        return ((typeof value === "boolean" ? value ? part.o : part.r : getPlural(pluralRules, part, value)) || "").replace(REGEX_PLURAL_VALUE_INJECTION, value);
      }
      const formattedValue = formatterKeys.length ? applyFormatters(formatters, formatterKeys, value) : value;
      return ("" + (formattedValue !== null && formattedValue !== void 0 ? formattedValue : "")).trim();
    }).join("");
    translate = (textParts, pluralRules, formatters, args) => {
      const firstArg = args[0];
      const isObject = firstArg && typeof firstArg === "object" && firstArg.constructor === Object;
      const transformedArgs = args.length === 1 && isObject ? firstArg : args;
      return applyArguments(textParts, pluralRules, formatters, transformedArgs);
    };
  }
});

// node_modules/typesafe-i18n/runtime/esm/runtime/src/util.string.mjs
var getPartsFromString;
var init_util_string = __esm({
  "node_modules/typesafe-i18n/runtime/esm/runtime/src/util.string.mjs"() {
    init_shims();
    init_basic();
    init_core();
    getPartsFromString = (cache, text2) => cache[text2] || (cache[text2] = parseRawText(text2));
  }
});

// node_modules/typesafe-i18n/runtime/esm/runtime/src/util.object.mjs
function i18nObject(locale2, translations, formatters = {}) {
  return createProxy(translations, getTranslateInstance(locale2, formatters));
}
var getTranslateInstance, wrap, createProxy;
var init_util_object = __esm({
  "node_modules/typesafe-i18n/runtime/esm/runtime/src/util.object.mjs"() {
    init_shims();
    init_core();
    init_util_string();
    getTranslateInstance = (locale2, formatters) => {
      const cache = {};
      const pluralRules = new Intl.PluralRules(locale2);
      return (text2, ...args) => translate(getPartsFromString(cache, text2), pluralRules, formatters, args);
    };
    wrap = (proxyObject = {}, translateFn) => typeof proxyObject === "string" ? translateFn.bind(null, proxyObject) : Object.assign(Object.defineProperty(() => "", "name", { writable: true }), proxyObject);
    createProxy = (proxyObject, translateFn) => new Proxy(wrap(proxyObject, translateFn), {
      get: (target, key2) => {
        if (key2 === Symbol.iterator)
          return [][Symbol.iterator].bind(Object.values(target).map((entry) => wrap(entry, translateFn)));
        return createProxy(target[key2], translateFn);
      }
    });
  }
});

// node_modules/typesafe-i18n/runtime/esm/runtime/src/util.instance.mjs
var i18n;
var init_util_instance = __esm({
  "node_modules/typesafe-i18n/runtime/esm/runtime/src/util.instance.mjs"() {
    init_shims();
    init_util_object();
    i18n = (translations, formatters) => {
      const cache = {};
      return new Proxy({}, {
        get: (_target, locale2) => cache[locale2] || (cache[locale2] = i18nObject(locale2, translations[locale2], formatters[locale2]))
      });
    };
  }
});

// node_modules/typesafe-i18n/runtime/esm/runtime/src/index.mjs
var init_src = __esm({
  "node_modules/typesafe-i18n/runtime/esm/runtime/src/index.mjs"() {
    init_shims();
    init_core();
    init_util_instance();
    init_util_object();
    init_util_string();
  }
});

// node_modules/typesafe-i18n/detectors/detect.mjs
var p, n, Nr, l;
var init_detect = __esm({
  "node_modules/typesafe-i18n/detectors/detect.mjs"() {
    init_shims();
    p = (e3) => !!e3;
    n = (e3) => Array.from(new Set(e3));
    Nr = (e3, o3, ...s5) => {
      for (let i3 of s5) {
        let t2 = l(o3, i3);
        if (t2)
          return t2;
      }
      return e3;
    };
    l = (e3, o3) => {
      let s5 = o3().map((r2) => r2.toLowerCase()), i3 = n(s5.flatMap((r2) => [r2, r2.split("-")[0]])), t2 = e3.map((r2) => r2.toLowerCase());
      return i3.map((r2) => {
        let c = t2.findIndex((x) => x === r2);
        return c >= 0 && e3[c];
      }).find(p);
    };
  }
});

// node_modules/typesafe-i18n/detectors/detectors/browser/document-cookie.mjs
var m, s, p2;
var init_document_cookie = __esm({
  "node_modules/typesafe-i18n/detectors/detectors/browser/document-cookie.mjs"() {
    init_shims();
    m = (t2, c) => {
      var r2;
      let e3 = (r2 = t2 == null ? void 0 : t2.split(";").map((o3) => o3.trim()).find((o3) => o3.startsWith(c))) == null ? void 0 : r2.split("=")[1];
      return e3 ? [e3] : [];
    };
    s = (t2 = "lang") => () => m(document == null ? void 0 : document.cookie, t2);
    p2 = s();
  }
});

// node_modules/typesafe-i18n/detectors/detectors/browser/html-lang-attribute.mjs
var init_html_lang_attribute = __esm({
  "node_modules/typesafe-i18n/detectors/detectors/browser/html-lang-attribute.mjs"() {
    init_shims();
  }
});

// node_modules/typesafe-i18n/detectors/detectors/browser/localstorage-detector.mjs
var e, o, ue;
var init_localstorage_detector = __esm({
  "node_modules/typesafe-i18n/detectors/detectors/browser/localstorage-detector.mjs"() {
    init_shims();
    e = (r2) => !!r2;
    o = (r2 = "lang") => () => {
      var t2;
      return [(t2 = window == null ? void 0 : window.localStorage) == null ? void 0 : t2.getItem(r2)].filter(e);
    };
    ue = o();
  }
});

// node_modules/typesafe-i18n/detectors/detectors/browser/navigator.mjs
var init_navigator = __esm({
  "node_modules/typesafe-i18n/detectors/detectors/browser/navigator.mjs"() {
    init_shims();
  }
});

// node_modules/typesafe-i18n/detectors/detectors/browser/query-string.mjs
var i, s2;
var init_query_string = __esm({
  "node_modules/typesafe-i18n/detectors/detectors/browser/query-string.mjs"() {
    init_shims();
    i = (o3 = "lang") => () => {
      var e3, r2;
      let t2 = (r2 = (e3 = location == null ? void 0 : location.search) == null ? void 0 : e3.slice(1).split("&").find((c) => c.startsWith(o3))) == null ? void 0 : r2.split("=")[1];
      return t2 ? [t2] : [];
    };
    s2 = i();
  }
});

// node_modules/typesafe-i18n/detectors/detectors/browser/sessionstorage-detector.mjs
var r, o2, ur;
var init_sessionstorage_detector = __esm({
  "node_modules/typesafe-i18n/detectors/detectors/browser/sessionstorage-detector.mjs"() {
    init_shims();
    r = (e3) => !!e3;
    o2 = (e3 = "lang") => () => {
      var t2;
      return [(t2 = window == null ? void 0 : window.sessionStorage) == null ? void 0 : t2.getItem(e3)].filter(r);
    };
    ur = o2();
  }
});

// node_modules/typesafe-i18n/detectors/detectors/server/accept-language-header.mjs
var t, i2, Pr;
var init_accept_language_header = __esm({
  "node_modules/typesafe-i18n/detectors/detectors/server/accept-language-header.mjs"() {
    init_shims();
    t = (r2) => r2 !== "";
    i2 = /;|,/;
    Pr = ({ headers: r2 }, s5 = "accept-language") => () => {
      var o3;
      return ((o3 = r2.get(s5)) == null ? void 0 : o3.split(i2).filter((e3) => !e3.startsWith("q")).map((e3) => e3.trim()).filter((e3) => e3 !== "*").filter(t)) || [];
    };
  }
});

// node_modules/typesafe-i18n/detectors/detectors/server/request-cookies.mjs
var init_request_cookies = __esm({
  "node_modules/typesafe-i18n/detectors/detectors/server/request-cookies.mjs"() {
    init_shims();
  }
});

// node_modules/typesafe-i18n/detectors/detectors/server/request-hostname.mjs
var init_request_hostname = __esm({
  "node_modules/typesafe-i18n/detectors/detectors/server/request-hostname.mjs"() {
    init_shims();
  }
});

// node_modules/typesafe-i18n/detectors/detectors/server/request-parameters.mjs
var init_request_parameters = __esm({
  "node_modules/typesafe-i18n/detectors/detectors/server/request-parameters.mjs"() {
    init_shims();
  }
});

// node_modules/typesafe-i18n/detectors/index.mjs
var init_detectors = __esm({
  "node_modules/typesafe-i18n/detectors/index.mjs"() {
    init_shims();
    init_detect();
    init_document_cookie();
    init_html_lang_attribute();
    init_localstorage_detector();
    init_navigator();
    init_query_string();
    init_sessionstorage_detector();
    init_accept_language_header();
    init_request_cookies();
    init_request_hostname();
    init_request_parameters();
  }
});

// build/chunks/i18n-util.js
var baseLocale, locales, isLocale, loadedLocales, loadedFormatters, i18n2, detectLocale;
var init_i18n_util = __esm({
  "build/chunks/i18n-util.js"() {
    "use strict";
    init_shims();
    init_src();
    init_detectors();
    baseLocale = "en";
    locales = [
      "en",
      "ja"
    ];
    isLocale = (locale2) => locales.includes(locale2);
    loadedLocales = {};
    loadedFormatters = {};
    i18n2 = () => i18n(loadedLocales, loadedFormatters);
    detectLocale = (...detectors) => Nr(baseLocale, locales, ...detectors);
  }
});

// build/chunks/formatters.js
var initFormatters;
var init_formatters = __esm({
  "build/chunks/formatters.js"() {
    "use strict";
    init_shims();
    initFormatters = (locale2) => {
      const formatters = {
        // add your formatter functions here
      };
      return formatters;
    };
  }
});

// build/chunks/index3.js
var index3_exports = {};
__export(index3_exports, {
  default: () => en
});
var en;
var init_index3 = __esm({
  "build/chunks/index3.js"() {
    "use strict";
    init_shims();
    en = {
      // ランドスケープモードテキスト
      landscape_mode: "Please view the page in portrait mode.",
      // エラーページ
      E404: {
        title: "404 Not Found | Rain Server",
        h1: "404 Not Found",
        inner_text1: "The requested page was not found due to the following reasons.",
        error_cause: {
          cause1: "The page file does not exist.",
          cause2: "The page has been moved or deleted.",
          cause3: "The URL was not correct or has been updated."
        },
        inner_text2: "If you have any problems with our website, please contact the Rain Team.",
        btn_name: "Return to Home",
        footer_text: "Rain Server is not affiliated with Capcom Co., Ltd. or any of its subsidiaries. <br>This project is based on the cooperation of numerous volunteers, and no revenue of any sort is generated through this project."
      },
      register: {
        register_title: "Rain Server Account Creation",
        email_label: "Email",
        username_label: "Username",
        password_label: "Password",
        register_button: "Sign Up",
        already: "The user already exists."
      },
      // ヘッダー言語設定
      header: {
        now_lang: "English",
        lang_sel: {
          ja: {
            main_name: "\u65E5\u672C\u8A9E",
            sub_name: "Japanese"
          },
          en: {
            main_name: "English",
            sub_name: "English"
          }
        }
      },
      // サイドメニュー
      side_menu: {
        signup: {
          title: "Sign Up",
          contents: {
            discord: "Sign-up Procedure (Discord)",
            membersite: "Sign-up Procedure (Member Site)"
          }
        },
        begin: {
          title: "Starting the Game",
          contents: {
            start: "How to Start the Game",
            menu: "Title Menu",
            character: "Character Creation",
            manage: "Managing Characters",
            world: "World Selection",
            tutorial: "Tutorial",
            multiple: "Multiple Launch",
            quit: "Quit the Game"
          }
        },
        server: {
          title: "Discord Features",
          contents: {
            bounty: "Bounty System",
            gacha: "Gacha System",
            market: "Marketplace",
            command: "Slash Command"
          }
        },
        event: {
          title: "In-Game Event",
          contents: {
            road: "Hunting Road",
            diva: "Battle of Diva Defence: True Story",
            gslaying: "Great Slaying Quest",
            huntfest: "Hunting Festival",
            skycorridor: "Sky Corridor Exploring Records(Abolition)",
            voyage: "Pallone Grand Voyage(Abolition)",
            anarchy: "Battlecry in the Anarchy(Abolition)",
            ascendant: "Honor of the Ascendant(Abolition)"
          }
        }
      },
      // 動的ルート対象外記事
      articles: {
        description: "Official Online Manual of Monster Hunter Frontier for Rain Server.",
        keywords: "monster hunter frontier, monster hunter, online manual, mhf, online game",
        home: {
          head_title: "MHF Online Manual",
          title: "Home",
          news_title: "Update History",
          news_date: "January 1, 2099",
          news_text: 'Online Manual is available now!<br>Detailed differences from the former official online manual and updates can be found from "More."',
          news_more: "More",
          // 注目のコンテンツ
          featured_title: "Featured Contents",
          featured_contents: {
            first: {
              maindir: "entry/",
              // スラッシュ（ / ）が最後に必要
              subdir: "acccreate/",
              // スラッシュ（ / ）が最後に必要
              alt: "first",
              text: 'Before playing on the "Rain Server,"<br>what is the first thing to do?'
            },
            utahime: {
              maindir: "",
              subdir: "",
              alt: "utahime",
              text: 'Repel the oncoming threat!<br>For more information on the "Battle of Diva Defence: True Story," click here.'
            },
            ravi: {
              maindir: "",
              subdir: "",
              alt: "raviente",
              text: 'I want to challenge "Berserk Raviente"!'
            },
            /*tenrou: {
                maindir: '',
                subdir: '',
                alt: 'sky corridor',
                text: 'Investigate the unknown tower!<br>For more information on the "Sky Corridor Exploring Records," click here.',
            },*/
            festival: {
              maindir: "",
              subdir: "",
              alt: "\u72E9\u4EBA\u796D",
              text: 'Work together as your team to achive the trials!<br />For more information on the "Hunting Festival," click here.'
            },
            road: {
              maindir: "",
              subdir: "",
              alt: "road",
              text: 'What is the "Hunting Road," the endless of hunting?'
            },
            return: {
              maindir: "",
              subdir: "",
              alt: "return ward",
              text: `Did you come back for the first time in ages? Then let's go to "Return Ward"!`
            }
          },
          // 外部リンク
          extlink_title: "External Links",
          extlink_contents: {
            beginner_guide: {
              title: "Beginner Guide",
              alt: "beginner",
              target: "_blank",
              rel: "noopener noreferrer",
              href: "https://www.youtube.com/watch?v=okHtSD1pkwc",
              img_chara: "extlink_beginner_chara"
            },
            faq: {
              title: "FAQ",
              alt: "faq",
              target: "",
              rel: "",
              href: "discord://discord.com/channels/937230168223789066/1040529566298550292",
              img_chara: "extlink_faq_chara"
            }
          }
        }
      },
      // フッター
      footer: {
        rain_officialsite: {
          title: "Rain Server Official Site",
          href: "",
          alt: "official-site"
        },
        rain_discord: {
          title: "Rain Server Official Discord",
          href: "https://discord.gg/TcpkpUpeGw",
          alt: "official-discord"
        },
        pewpewdojo_server: {
          title: "PewPewDojo Official Discord<br>[Contributors]",
          href: "https://discord.gg/Wpc7Cus9rb",
          alt: "pewpewdojo"
        }
      },
      footer_note: "*Due to the layout, the landscape mode is restricted in this website.<br><br>*Rain Server is not affiliated with Capcom Co., Ltd. or any of its subsidiaries. This project is based on the cooperation of numerous volunteers, and no revenue of any sort is generated through this project.",
      // ボトムナビゲーション
      bottom_nav: {
        side_menu: {
          svg_path: '<path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 4h6v6h-6z" /><path d="M14 4h6v6h-6z" /><path d="M4 14h6v6h-6z" /><path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />',
          text: "Menu"
        },
        language_selectArea: {
          svg_path: '<path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M3.6 9l16.8 0" /><path d="M3.6 15l16.8 0" /><path d="M11.5 3a17 17 0 0 0 0 18" /><path d="M12.5 3a17 17 0 0 1 0 18" />',
          text: "Language"
        }
      }
    };
  }
});

// build/chunks/index4.js
var index4_exports = {};
__export(index4_exports, {
  default: () => ja
});
var ja;
var init_index4 = __esm({
  "build/chunks/index4.js"() {
    "use strict";
    init_shims();
    ja = {
      // ランドスケープモードテキスト
      landscape_mode: "\u7AEF\u672B\u3092\u7E26\u5411\u304D\u306B\u3057\u3066\u95B2\u89A7\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
      // エラーページ
      E404: {
        title: "\u304A\u63A2\u3057\u306E\u30DA\u30FC\u30B8\u304C\u5B58\u5728\u3057\u307E\u305B\u3093 | Rain Server",
        h1: "\u304A\u63A2\u3057\u306E\u30DA\u30FC\u30B8\u304C\u5B58\u5728\u3057\u307E\u305B\u3093",
        inner_text1: "\u304A\u63A2\u3057\u306E\u30DA\u30FC\u30B8\u306F\u3001\u6B21\u306E\u3088\u3046\u306A\u539F\u56E0\u306B\u3088\u308A\u3054\u89A7\u306B\u306A\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u305B\u3093\u3002",
        error_cause: {
          cause1: "\u30DA\u30FC\u30B8\u30D5\u30A1\u30A4\u30EB\u304C\u5B58\u5728\u3057\u306A\u3044\u3002",
          cause2: "\u30DA\u30FC\u30B8\u304C\u79FB\u52D5\u3001\u307E\u305F\u306F\u524A\u9664\u3055\u308C\u3066\u3044\u308B\u3002",
          cause3: "URL\u306B\u8AA4\u308A\u304C\u3042\u308B\u3001\u3082\u3057\u304F\u306F\u66F4\u65B0\u3055\u308C\u3066\u3044\u308B\u3002"
        },
        inner_text2: "Web\u30B5\u30A4\u30C8\u306B\u95A2\u3057\u3066\u4E0D\u5177\u5408\u304C\u3042\u308B\u5834\u5408\u306F\u3001Rain\u30C1\u30FC\u30E0\u307E\u3067\u3054\u9023\u7D61\u304F\u3060\u3055\u3044\u3002",
        btn_name: "\u30C8\u30C3\u30D7\u30DA\u30FC\u30B8\u3078\u623B\u308B",
        footer_text: "Rain\u30B5\u30FC\u30D0\u30FC\u306F\u3001\u682A\u5F0F\u4F1A\u793E\u30AB\u30D7\u30B3\u30F3\u307E\u305F\u306F\u305D\u306E\u5B50\u4F1A\u793E\u3068\u306F\u4E00\u5207\u95A2\u4FC2\u3042\u308A\u307E\u305B\u3093\u3002<br>\u5F53\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306F\u591A\u6570\u306E\u30DC\u30E9\u30F3\u30C6\u30A3\u30A2\u306B\u3088\u308B\u5354\u529B\u306E\u4E0B\u3067\u6210\u308A\u7ACB\u3063\u3066\u304A\u308A\u3001\u3044\u304B\u306A\u308B\u53CE\u76CA\u3082\u767A\u751F\u3044\u305F\u3057\u307E\u305B\u3093\u3002"
      },
      // 会員登録ページ
      register: {
        register_title: "Rain \u30B5\u30FC\u30D0\u30FC \u30A2\u30AB\u30A6\u30F3\u30C8\u4F5C\u6210",
        email_label: "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9",
        username_label: "\u30E6\u30FC\u30B6\u30FC\u540D",
        password_label: "\u30D1\u30B9\u30EF\u30FC\u30C9",
        register_button: "\u767B\u9332\u3059\u308B",
        already: "\u65E2\u306B\u5B58\u5728\u3059\u308B\u30E6\u30FC\u30B6\u30FC\u3067\u3059\u3002"
      },
      // ヘッダー言語設定
      header: {
        now_lang: "\u65E5\u672C\u8A9E",
        lang_sel: {
          ja: {
            main_name: "\u65E5\u672C\u8A9E",
            sub_name: "\u65E5\u672C\u8A9E"
          },
          en: {
            main_name: "English",
            sub_name: "\u82F1\u8A9E"
          }
        }
      },
      // サイドメニュー
      side_menu: {
        signup: {
          title: "\u4F1A\u54E1\u767B\u9332",
          contents: {
            discord: "\u4F1A\u54E1\u767B\u9332\u624B\u9806\uFF08Discord\uFF09",
            membersite: "\u4F1A\u54E1\u767B\u9332\u624B\u9806\uFF08\u30E1\u30F3\u30D0\u30FC\u30B5\u30A4\u30C8\uFF09"
          }
        },
        begin: {
          title: "\u30B2\u30FC\u30E0\u3092\u59CB\u3081\u308B\u307E\u3067",
          contents: {
            start: "\u30B2\u30FC\u30E0\u306E\u59CB\u3081\u65B9",
            menu: "\u30E1\u30CB\u30E5\u30FC\u753B\u9762",
            character: "\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u30AF\u30EA\u30A8\u30A4\u30B7\u30E7\u30F3",
            manage: "\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u306E\u8FFD\u52A0\u30FB\u524A\u9664",
            world: "\u30EF\u30FC\u30EB\u30C9\u3092\u9078\u307C\u3046",
            tutorial: "\u30C1\u30E5\u30FC\u30C8\u30EA\u30A2\u30EB",
            multiple: "\u30B2\u30FC\u30E0\u306E\u591A\u91CD\u8D77\u52D5",
            quit: "\u30B2\u30FC\u30E0\u306E\u7D42\u4E86"
          }
        },
        server: {
          title: "Discord\u5185\u5404\u7A2E\u6A5F\u80FD",
          contents: {
            bounty: "\u30D0\u30A6\u30F3\u30C6\u30A3\u30B7\u30B9\u30C6\u30E0",
            gacha: "\u30AC\u30C1\u30E3\u30B7\u30B9\u30C6\u30E0",
            market: "\u30DE\u30FC\u30B1\u30C3\u30C8\u30D7\u30EC\u30A4\u30B9",
            command: "\u30B9\u30E9\u30C3\u30B7\u30E5\u30B3\u30DE\u30F3\u30C9"
          }
        },
        event: {
          title: "\u30B2\u30FC\u30E0\u5185\u30A4\u30D9\u30F3\u30C8",
          contents: {
            road: "\u72E9\u7149\u9053",
            diva: "\u6B4C\u59EB\u72E9\u885B\u6226\u30FB\u771F\u8AAC",
            gslaying: "\u5927\u8A0E\u4F10\u30AF\u30A8\u30B9\u30C8",
            huntfest: "\u72E9\u4EBA\u796D",
            skycorridor: "\u5929\u5ECA\u9060\u5F81\u9332\uFF08\u5EC3\u6B62\uFF09",
            voyage: "\u30D1\u30ED\u30FC\u30CD\u5927\u822A\u796D\uFF08\u5EC3\u6B62\uFF09",
            anarchy: "\u6975\u9650\u5F81\u4F10\u6226\uFF08\u5EC3\u6B62\uFF09",
            ascendant: "\u81F3\u5929\u5F81\u4F10\u6226\uFF08\u5EC3\u6B62\uFF09"
          }
        }
      },
      // 動的ルート対象外記事
      articles: {
        description: "Rain Server\u7248\u30E2\u30F3\u30B9\u30BF\u30FC\u30CF\u30F3\u30BF\u30FC\u30D5\u30ED\u30F3\u30C6\u30A3\u30A2\u306E\u516C\u5F0F\u30AA\u30F3\u30E9\u30A4\u30F3\u30DE\u30CB\u30E5\u30A2\u30EB",
        keywords: "\u30E2\u30F3\u30B9\u30BF\u30FC\u30CF\u30F3\u30BF\u30FC \u30D5\u30ED\u30F3\u30C6\u30A3\u30A2, \u30E2\u30F3\u30B9\u30BF\u30FC\u30CF\u30F3\u30BF\u30FC, \u30E2\u30F3\u30CF\u30F3, \u30AA\u30F3\u30E9\u30A4\u30F3\u30DE\u30CB\u30E5\u30A2\u30EB, mhf, monster hunter frontier, \u30AA\u30F3\u30E9\u30A4\u30F3\u30B2\u30FC\u30E0",
        home: {
          head_title: "MHF \u30AA\u30F3\u30E9\u30A4\u30F3\u30DE\u30CB\u30E5\u30A2\u30EB",
          title: "\u30C8\u30C3\u30D7\u30DA\u30FC\u30B8",
          news_title: "\u66F4\u65B0\u5C65\u6B74",
          news_date: "2099\u5E741\u67081\u65E5",
          news_text: "\u30AA\u30F3\u30E9\u30A4\u30F3\u30DE\u30CB\u30E5\u30A2\u30EB\u3092\u958B\u8A2D\u3044\u305F\u3057\u307E\u3057\u305F\u3002<br>\u65E7\u516C\u5F0F\u30AA\u30F3\u30E9\u30A4\u30F3\u30DE\u30CB\u30E5\u30A2\u30EB\u3068\u306E\u8A73\u3057\u3044\u76F8\u9055\u70B9\u53CA\u3073\u66F4\u65B0\u5185\u5BB9\u306F\u300C\u8A73\u7D30\u3092\u898B\u308B\u300D\u3088\u308A\u3054\u78BA\u8A8D\u3044\u305F\u3060\u3051\u307E\u3059\u3002",
          news_more: "\u8A73\u7D30\u3092\u898B\u308B",
          // 注目のコンテンツ
          featured_title: "\u6CE8\u76EE\u306E\u30B3\u30F3\u30C6\u30F3\u30C4",
          featured_contents: {
            first: {
              maindir: "entry/",
              // スラッシュ（ / ）が最後に必要
              subdir: "acccreate/",
              // スラッシュ（ / ）が最後に必要
              alt: "\u521D\u3081\u306B",
              text: "Rain\u30B5\u30FC\u30D0\u30FC\u306F\u521D\u3081\u3066\u3067\u3059\u304C\u3001<br />\u307E\u305A\u306F\u4F55\u3092\u3059\u308C\u3070\uFF1F"
            },
            utahime: {
              maindir: "",
              subdir: "",
              alt: "\u6B4C\u59EB\u72E9\u885B\u6226",
              text: "\u30E1\u30BC\u30DD\u30EB\u30BF\u3078\u8FEB\u308B\u8105\u5A01\u3092\u9000\u3051\u3088\uFF01<br />\uFF62\u6B4C\u59EB\u72E9\u885B\u6226\u30FB\u771F\u8AAC\uFF63\u306E\u8A73\u7D30\u306F\u3053\u3061\u3089"
            },
            ravi: {
              maindir: "",
              subdir: "",
              alt: "\u30E9\u30F4\u30A3\u30A8\u30F3\u30C6",
              text: "\uFF62\u30E9\u30F4\u30A3\u30A8\u30F3\u30C6 \u731B\u72C2\u671F\uFF63\u306B<br />\u6311\u307F\u305F\u3044\uFF01"
            },
            /*tenrou: {
                maindir: '',
                subdir: '',
                alt: '天廊遠征録',
                text: '天穿つ謎の巨塔を調査せよ！<br />｢天廊遠征録｣の詳細はこちら',
            },*/
            festival: {
              maindir: "",
              subdir: "",
              alt: "\u72E9\u4EBA\u796D",
              text: "\u30C1\u30FC\u30E0\u3067\u5354\u529B\u3057\u3066\u3001\u8A66\u7DF4\u3092\u9054\u6210\u305B\u3088\uFF01<br />\uFF62\u72E9\u4EBA\u796D\uFF63\u306E\u8A73\u7D30\u306F\u3053\u3061\u3089"
            },
            road: {
              maindir: "",
              subdir: "",
              alt: "\u72E9\u7149\u9053",
              text: "\u7D42\u308F\u308A\u306A\u304D\u72E9\u308A\u306E\u9053<br />\uFF62\u72E9\u7149\u9053\uFF63\u3068\u306F\uFF1F"
            },
            return: {
              maindir: "",
              subdir: "",
              alt: "\u5FA9\u5E30\u533A",
              text: "\u4E45\u3057\u3076\u308A\u306B\u5FA9\u5E30\u3057\u305F<br />\u30CF\u30F3\u30BF\u30FC\u3055\u3093\u3078<br />\uFF62\u5FA9\u5E30\u533A\uFF63\u3092\u3054\u7D39\u4ECB\uFF01"
            }
          },
          // 外部リンク
          extlink_title: "\u5916\u90E8\u30EA\u30F3\u30AF",
          extlink_contents: {
            beginner_guide: {
              title: "\u521D\u5FC3\u8005\u30AC\u30A4\u30C9",
              alt: "\u521D\u5FC3\u8005",
              target: "",
              rel: "",
              href: "discord://discord.com/channels/937230168223789066/1034385867764150332",
              img_chara: "extlink_beginner_chara"
            },
            faq: {
              title: "\u3088\u304F\u3042\u308B\u8CEA\u554F",
              alt: "\u3088\u304F\u3042\u308B\u8CEA\u554F",
              target: "",
              rel: "",
              href: "discord://discord.com/channels/937230168223789066/1040529566298550292",
              img_chara: "extlink_faq_chara"
            }
          }
        }
      },
      // フッター
      footer: {
        rain_officialsite: {
          title: "Rain\u30B5\u30FC\u30D0\u30FC\u516C\u5F0F\u30B5\u30A4\u30C8",
          href: "",
          alt: "\u516C\u5F0F\u30B5\u30A4\u30C8"
        },
        rain_discord: {
          title: "Rain\u30B5\u30FC\u30D0\u30FC\u516C\u5F0FDiscord",
          href: "https://discord.gg/TcpkpUpeGw",
          alt: "\u516C\u5F0F\u30C7\u30A3\u30B9\u30B3"
        },
        pewpewdojo_server: {
          title: "PewPewDojo\u516C\u5F0FDiscord<br>\u3010\u30D1\u30FC\u30C8\u30CA\u30FC\u30B7\u30C3\u30D7\u3011",
          href: "https://discord.gg/Wpc7Cus9rb",
          alt: "pewpewdojo"
        }
      },
      footer_note: "\u203B\u30EC\u30A4\u30A2\u30A6\u30C8\u306E\u95A2\u4FC2\u4E0A\u3001\u672C\u30B5\u30A4\u30C8\u5185\u3067\u306F\u6A2A\u753B\u9762\u304C\u5236\u9650\u3055\u308C\u307E\u3059\u3002\u4E88\u3081\u3054\u4E86\u627F\u304F\u3060\u3055\u3044\u3002<br><br>\u203BRain\u30B5\u30FC\u30D0\u30FC\u306F\u3001\u682A\u5F0F\u4F1A\u793E\u30AB\u30D7\u30B3\u30F3\u307E\u305F\u306F\u305D\u306E\u5B50\u4F1A\u793E\u3068\u306F\u4E00\u5207\u95A2\u4FC2\u3042\u308A\u307E\u305B\u3093\u3002\u5F53\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306F\u591A\u6570\u306E\u30DC\u30E9\u30F3\u30C6\u30A3\u30A2\u306B\u3088\u308B\u5354\u529B\u306E\u4E0B\u3067\u6210\u308A\u7ACB\u3063\u3066\u304A\u308A\u3001\u3044\u304B\u306A\u308B\u53CE\u76CA\u3082\u767A\u751F\u3044\u305F\u3057\u307E\u305B\u3093\u3002",
      // ボトムナビゲーション
      bottom_nav: {
        side_menu: {
          svg_path: '<path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 4h6v6h-6z" /><path d="M14 4h6v6h-6z" /><path d="M4 14h6v6h-6z" /><path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />',
          text: "\u30E1\u30CB\u30E5\u30FC"
        },
        language_selectArea: {
          svg_path: '<path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M3.6 9l16.8 0" /><path d="M3.6 15l16.8 0" /><path d="M11.5 3a17 17 0 0 0 0 18" /><path d="M12.5 3a17 17 0 0 1 0 18" />',
          text: "\u8A00\u8A9E\u9078\u629E"
        }
      }
    };
  }
});

// build/chunks/hooks.server.js
var hooks_server_exports = {};
__export(hooks_server_exports, {
  handle: () => handle
});
var localeTranslations, loadLocale, loadAllLocales, loadFormatters, L, handle, getPreferredLocale;
var init_hooks_server = __esm({
  "build/chunks/hooks.server.js"() {
    "use strict";
    init_shims();
    init_i18n_util();
    init_formatters();
    init_index3();
    init_index4();
    init_detectors();
    localeTranslations = {
      en,
      ja
    };
    loadLocale = (locale2) => {
      if (loadedLocales[locale2])
        return;
      loadedLocales[locale2] = localeTranslations[locale2];
      loadFormatters(locale2);
    };
    loadAllLocales = () => locales.forEach(loadLocale);
    loadFormatters = (locale2) => void (loadedFormatters[locale2] = initFormatters());
    loadAllLocales();
    L = i18n2();
    handle = async ({ event, resolve }) => {
      const [, lang] = event.url.pathname.split("/");
      if (!lang) {
        const locale22 = getPreferredLocale(event);
        return new Response(null, {
          status: 302,
          headers: { Location: `/${locale22}/manual` }
        });
      }
      const locale2 = isLocale(lang) ? lang : getPreferredLocale(event);
      const LL2 = L[locale2];
      event.locals.locale = locale2;
      event.locals.LL = LL2;
      return resolve(event, {
        transformPageChunk: ({ html }) => html.replace("%lang%", locale2)
      });
    };
    getPreferredLocale = ({ request }) => {
      const acceptLanguageDetector = Pr(request);
      return detectLocale(acceptLanguageDetector);
    };
  }
});

// build/chunks/index.js
function error(status, message) {
  if (isNaN(status) || status < 400 || status > 599) {
    throw new Error(`HTTP error status codes must be between 400 and 599 \u2014 ${status} is invalid`);
  }
  return new HttpError(status, message);
}
function json(data, init3) {
  const body = JSON.stringify(data);
  const headers = new Headers(init3 == null ? void 0 : init3.headers);
  if (!headers.has("content-length")) {
    headers.set("content-length", encoder.encode(body).byteLength.toString());
  }
  if (!headers.has("content-type")) {
    headers.set("content-type", "application/json");
  }
  return new Response(body, {
    ...init3,
    headers
  });
}
function text(body, init3) {
  const headers = new Headers(init3 == null ? void 0 : init3.headers);
  if (!headers.has("content-length")) {
    headers.set("content-length", encoder.encode(body).byteLength.toString());
  }
  return new Response(body, {
    ...init3,
    headers
  });
}
var HttpError, Redirect, ActionFailure, encoder;
var init_chunks = __esm({
  "build/chunks/index.js"() {
    "use strict";
    init_shims();
    HttpError = class HttpError2 {
      /**
       * @param {number} status
       * @param {{message: string} extends App.Error ? (App.Error | string | undefined) : App.Error} body
       */
      constructor(status, body) {
        this.status = status;
        if (typeof body === "string") {
          this.body = { message: body };
        } else if (body) {
          this.body = body;
        } else {
          this.body = { message: `Error: ${status}` };
        }
      }
      toString() {
        return JSON.stringify(this.body);
      }
    };
    Redirect = class Redirect2 {
      /**
       * @param {300 | 301 | 302 | 303 | 304 | 305 | 306 | 307 | 308} status
       * @param {string} location
       */
      constructor(status, location2) {
        this.status = status;
        this.location = location2;
      }
    };
    ActionFailure = class ActionFailure2 {
      /**
       * @param {number} status
       * @param {T} [data]
       */
      constructor(status, data) {
        this.status = status;
        this.data = data;
      }
    };
    encoder = new TextEncoder();
  }
});

// node_modules/cookie/index.js
var require_cookie = __commonJS({
  "node_modules/cookie/index.js"(exports) {
    "use strict";
    init_shims();
    exports.parse = parse3;
    exports.serialize = serialize2;
    var __toString = Object.prototype.toString;
    var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
    function parse3(str, options2) {
      if (typeof str !== "string") {
        throw new TypeError("argument str must be a string");
      }
      var obj = {};
      var opt = options2 || {};
      var dec = opt.decode || decode;
      var index11 = 0;
      while (index11 < str.length) {
        var eqIdx = str.indexOf("=", index11);
        if (eqIdx === -1) {
          break;
        }
        var endIdx = str.indexOf(";", index11);
        if (endIdx === -1) {
          endIdx = str.length;
        } else if (endIdx < eqIdx) {
          index11 = str.lastIndexOf(";", eqIdx - 1) + 1;
          continue;
        }
        var key2 = str.slice(index11, eqIdx).trim();
        if (void 0 === obj[key2]) {
          var val = str.slice(eqIdx + 1, endIdx).trim();
          if (val.charCodeAt(0) === 34) {
            val = val.slice(1, -1);
          }
          obj[key2] = tryDecode(val, dec);
        }
        index11 = endIdx + 1;
      }
      return obj;
    }
    function serialize2(name, val, options2) {
      var opt = options2 || {};
      var enc = opt.encode || encode2;
      if (typeof enc !== "function") {
        throw new TypeError("option encode is invalid");
      }
      if (!fieldContentRegExp.test(name)) {
        throw new TypeError("argument name is invalid");
      }
      var value = enc(val);
      if (value && !fieldContentRegExp.test(value)) {
        throw new TypeError("argument val is invalid");
      }
      var str = name + "=" + value;
      if (null != opt.maxAge) {
        var maxAge = opt.maxAge - 0;
        if (isNaN(maxAge) || !isFinite(maxAge)) {
          throw new TypeError("option maxAge is invalid");
        }
        str += "; Max-Age=" + Math.floor(maxAge);
      }
      if (opt.domain) {
        if (!fieldContentRegExp.test(opt.domain)) {
          throw new TypeError("option domain is invalid");
        }
        str += "; Domain=" + opt.domain;
      }
      if (opt.path) {
        if (!fieldContentRegExp.test(opt.path)) {
          throw new TypeError("option path is invalid");
        }
        str += "; Path=" + opt.path;
      }
      if (opt.expires) {
        var expires = opt.expires;
        if (!isDate(expires) || isNaN(expires.valueOf())) {
          throw new TypeError("option expires is invalid");
        }
        str += "; Expires=" + expires.toUTCString();
      }
      if (opt.httpOnly) {
        str += "; HttpOnly";
      }
      if (opt.secure) {
        str += "; Secure";
      }
      if (opt.priority) {
        var priority = typeof opt.priority === "string" ? opt.priority.toLowerCase() : opt.priority;
        switch (priority) {
          case "low":
            str += "; Priority=Low";
            break;
          case "medium":
            str += "; Priority=Medium";
            break;
          case "high":
            str += "; Priority=High";
            break;
          default:
            throw new TypeError("option priority is invalid");
        }
      }
      if (opt.sameSite) {
        var sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
        switch (sameSite) {
          case true:
            str += "; SameSite=Strict";
            break;
          case "lax":
            str += "; SameSite=Lax";
            break;
          case "strict":
            str += "; SameSite=Strict";
            break;
          case "none":
            str += "; SameSite=None";
            break;
          default:
            throw new TypeError("option sameSite is invalid");
        }
      }
      return str;
    }
    function decode(str) {
      return str.indexOf("%") !== -1 ? decodeURIComponent(str) : str;
    }
    function encode2(val) {
      return encodeURIComponent(val);
    }
    function isDate(val) {
      return __toString.call(val) === "[object Date]" || val instanceof Date;
    }
    function tryDecode(str, decode2) {
      try {
        return decode2(str);
      } catch (e3) {
        return str;
      }
    }
  }
});

// node_modules/set-cookie-parser/lib/set-cookie.js
var require_set_cookie = __commonJS({
  "node_modules/set-cookie-parser/lib/set-cookie.js"(exports, module2) {
    "use strict";
    init_shims();
    var defaultParseOptions = {
      decodeValues: true,
      map: false,
      silent: false
    };
    function isNonEmptyString(str) {
      return typeof str === "string" && !!str.trim();
    }
    function parseString2(setCookieValue, options2) {
      var parts = setCookieValue.split(";").filter(isNonEmptyString);
      var nameValuePairStr = parts.shift();
      var parsed = parseNameValuePair(nameValuePairStr);
      var name = parsed.name;
      var value = parsed.value;
      options2 = options2 ? Object.assign({}, defaultParseOptions, options2) : defaultParseOptions;
      try {
        value = options2.decodeValues ? decodeURIComponent(value) : value;
      } catch (e3) {
        console.error(
          "set-cookie-parser encountered an error while decoding a cookie with value '" + value + "'. Set options.decodeValues to false to disable this feature.",
          e3
        );
      }
      var cookie = {
        name,
        value
      };
      parts.forEach(function(part) {
        var sides = part.split("=");
        var key2 = sides.shift().trimLeft().toLowerCase();
        var value2 = sides.join("=");
        if (key2 === "expires") {
          cookie.expires = new Date(value2);
        } else if (key2 === "max-age") {
          cookie.maxAge = parseInt(value2, 10);
        } else if (key2 === "secure") {
          cookie.secure = true;
        } else if (key2 === "httponly") {
          cookie.httpOnly = true;
        } else if (key2 === "samesite") {
          cookie.sameSite = value2;
        } else {
          cookie[key2] = value2;
        }
      });
      return cookie;
    }
    function parseNameValuePair(nameValuePairStr) {
      var name = "";
      var value = "";
      var nameValueArr = nameValuePairStr.split("=");
      if (nameValueArr.length > 1) {
        name = nameValueArr.shift();
        value = nameValueArr.join("=");
      } else {
        value = nameValuePairStr;
      }
      return { name, value };
    }
    function parse3(input, options2) {
      options2 = options2 ? Object.assign({}, defaultParseOptions, options2) : defaultParseOptions;
      if (!input) {
        if (!options2.map) {
          return [];
        } else {
          return {};
        }
      }
      if (input.headers && input.headers["set-cookie"]) {
        input = input.headers["set-cookie"];
      } else if (input.headers) {
        var sch = input.headers[Object.keys(input.headers).find(function(key2) {
          return key2.toLowerCase() === "set-cookie";
        })];
        if (!sch && input.headers.cookie && !options2.silent) {
          console.warn(
            "Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."
          );
        }
        input = sch;
      }
      if (!Array.isArray(input)) {
        input = [input];
      }
      options2 = options2 ? Object.assign({}, defaultParseOptions, options2) : defaultParseOptions;
      if (!options2.map) {
        return input.filter(isNonEmptyString).map(function(str) {
          return parseString2(str, options2);
        });
      } else {
        var cookies = {};
        return input.filter(isNonEmptyString).reduce(function(cookies2, str) {
          var cookie = parseString2(str, options2);
          cookies2[cookie.name] = cookie;
          return cookies2;
        }, cookies);
      }
    }
    function splitCookiesString2(cookiesString) {
      if (Array.isArray(cookiesString)) {
        return cookiesString;
      }
      if (typeof cookiesString !== "string") {
        return [];
      }
      var cookiesStrings = [];
      var pos = 0;
      var start2;
      var ch;
      var lastComma;
      var nextStart;
      var cookiesSeparatorFound;
      function skipWhitespace() {
        while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
          pos += 1;
        }
        return pos < cookiesString.length;
      }
      function notSpecialChar() {
        ch = cookiesString.charAt(pos);
        return ch !== "=" && ch !== ";" && ch !== ",";
      }
      while (pos < cookiesString.length) {
        start2 = pos;
        cookiesSeparatorFound = false;
        while (skipWhitespace()) {
          ch = cookiesString.charAt(pos);
          if (ch === ",") {
            lastComma = pos;
            pos += 1;
            skipWhitespace();
            nextStart = pos;
            while (pos < cookiesString.length && notSpecialChar()) {
              pos += 1;
            }
            if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
              cookiesSeparatorFound = true;
              pos = nextStart;
              cookiesStrings.push(cookiesString.substring(start2, lastComma));
              start2 = pos;
            } else {
              pos = lastComma + 1;
            }
          } else {
            pos += 1;
          }
        }
        if (!cookiesSeparatorFound || pos >= cookiesString.length) {
          cookiesStrings.push(cookiesString.substring(start2, cookiesString.length));
        }
      }
      return cookiesStrings;
    }
    module2.exports = parse3;
    module2.exports.parse = parse3;
    module2.exports.parseString = parseString2;
    module2.exports.splitCookiesString = splitCookiesString2;
  }
});

// build/chunks/i18n-util.async.js
var localeTranslationLoaders, updateDictionary, importLocaleAsync, loadLocaleAsync, loadFormatters2;
var init_i18n_util_async = __esm({
  "build/chunks/i18n-util.async.js"() {
    "use strict";
    init_shims();
    init_formatters();
    init_i18n_util();
    localeTranslationLoaders = {
      en: () => Promise.resolve().then(() => (init_index3(), index3_exports)),
      ja: () => Promise.resolve().then(() => (init_index4(), index4_exports))
    };
    updateDictionary = (locale2, dictionary) => loadedLocales[locale2] = { ...loadedLocales[locale2], ...dictionary };
    importLocaleAsync = async (locale2) => (await localeTranslationLoaders[locale2]()).default;
    loadLocaleAsync = async (locale2) => {
      updateDictionary(locale2, await importLocaleAsync(locale2));
      loadFormatters2(locale2);
    };
    loadFormatters2 = (locale2) => void (loadedFormatters[locale2] = initFormatters());
  }
});

// node_modules/svelte/internal/index.mjs
function noop2() {
}
function run2(fn) {
  return fn();
}
function run_all2(fns) {
  fns.forEach(run2);
}
function is_function(thing) {
  return typeof thing === "function";
}
function safe_not_equal2(a, b) {
  return a != a ? b == b : a !== b || (a && typeof a === "object" || typeof a === "function");
}
function is_empty(obj) {
  return Object.keys(obj).length === 0;
}
function subscribe2(store, ...callbacks) {
  if (store == null) {
    return noop2;
  }
  const unsub = store.subscribe(...callbacks);
  return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}
function destroy_component(component11, detaching) {
  const $$ = component11.$$;
  if ($$.fragment !== null) {
    run_all2($$.on_destroy);
    $$.fragment && $$.fragment.d(detaching);
    $$.on_destroy = $$.fragment = null;
    $$.ctx = [];
  }
}
var resolved_promise, globals2, SvelteElement;
var init_internal = __esm({
  "node_modules/svelte/internal/index.mjs"() {
    init_shims();
    resolved_promise = Promise.resolve();
    globals2 = typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : global;
    if (typeof HTMLElement === "function") {
      SvelteElement = class extends HTMLElement {
        constructor() {
          super();
          this.attachShadow({ mode: "open" });
        }
        connectedCallback() {
          const { on_mount } = this.$$;
          this.$$.on_disconnect = on_mount.map(run2).filter(is_function);
          for (const key2 in this.$$.slotted) {
            this.appendChild(this.$$.slotted[key2]);
          }
        }
        attributeChangedCallback(attr, _oldValue, newValue) {
          this[attr] = newValue;
        }
        disconnectedCallback() {
          run_all2(this.$$.on_disconnect);
        }
        $destroy() {
          destroy_component(this, 1);
          this.$destroy = noop2;
        }
        $on(type, callback) {
          if (!is_function(callback)) {
            return noop2;
          }
          const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
          callbacks.push(callback);
          return () => {
            const index11 = callbacks.indexOf(callback);
            if (index11 !== -1)
              callbacks.splice(index11, 1);
          };
        }
        $set($$props) {
          if (this.$$set && !is_empty($$props)) {
            this.$$.skip_bound = true;
            this.$$set($$props);
            this.$$.skip_bound = false;
          }
        }
      };
    }
  }
});

// node_modules/svelte/store/index.mjs
function readable2(value, start2) {
  return {
    subscribe: writable2(value, start2).subscribe
  };
}
function writable2(value, start2 = noop2) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if (safe_not_equal2(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue2.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue2.push(subscriber, value);
        }
        if (run_queue) {
          for (let i3 = 0; i3 < subscriber_queue2.length; i3 += 2) {
            subscriber_queue2[i3][0](subscriber_queue2[i3 + 1]);
          }
          subscriber_queue2.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe3(run3, invalidate = noop2) {
    const subscriber = [run3, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start2(set) || noop2;
    }
    run3(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe3 };
}
function derived(stores, fn, initial_value) {
  const single = !Array.isArray(stores);
  const stores_array = single ? [stores] : stores;
  const auto = fn.length < 2;
  return readable2(initial_value, (set) => {
    let inited = false;
    const values = [];
    let pending = 0;
    let cleanup = noop2;
    const sync = () => {
      if (pending) {
        return;
      }
      cleanup();
      const result = fn(single ? values[0] : values, set);
      if (auto) {
        set(result);
      } else {
        cleanup = is_function(result) ? result : noop2;
      }
    };
    const unsubscribers = stores_array.map((store, i3) => subscribe2(store, (value) => {
      values[i3] = value;
      pending &= ~(1 << i3);
      if (inited) {
        sync();
      }
    }, () => {
      pending |= 1 << i3;
    }));
    inited = true;
    sync();
    return function stop() {
      run_all2(unsubscribers);
      cleanup();
    };
  });
}
var subscriber_queue2;
var init_store = __esm({
  "node_modules/svelte/store/index.mjs"() {
    init_shims();
    init_internal();
    init_internal();
    subscriber_queue2 = [];
  }
});

// node_modules/typesafe-i18n/svelte/index.mjs
function i18nObject2(locale2, translations, formatters = {}) {
  return createProxy2(translations, getTranslateInstance2(locale2, formatters));
}
var getFallbackProxy, removeEmptyValues2, trimAllValues2, parseArgumentPart2, isBasicPluralPart2, parsePluralPart2, REGEX_SWITCH_CASE2, parseCases2, REGEX_BRACKETS_SPLIT2, removeOuterBrackets2, parseRawText2, applyFormatters2, getPlural2, REGEX_PLURAL_VALUE_INJECTION2, applyArguments2, translate2, getPartsFromString2, getTranslateInstance2, wrap2, createProxy2, initI18nSvelte;
var init_svelte = __esm({
  "node_modules/typesafe-i18n/svelte/index.mjs"() {
    init_shims();
    init_store();
    getFallbackProxy = () => new Proxy(Object.assign(() => "", {}), {
      get: (_target, key2) => key2 === "length" ? 0 : getFallbackProxy()
    });
    removeEmptyValues2 = (object) => Object.fromEntries(
      Object.entries(object).map(([key2, value]) => key2 !== "i" && value && value != "0" && [key2, value]).filter(Boolean)
    );
    trimAllValues2 = (part) => Object.fromEntries(
      Object.keys(part).map((key2) => {
        const val = part[key2];
        return [
          key2,
          Array.isArray(val) ? val.map((v) => v == null ? void 0 : v.trim()) : val === !!val ? val : val == null ? void 0 : val.trim()
        ];
      })
    );
    parseArgumentPart2 = (text2) => {
      const [keyPart = "", ...formatterKeys] = text2.split("|");
      const [keyWithoutType = "", type] = keyPart.split(":");
      const [key2, isOptional] = keyWithoutType.split("?");
      return { k: key2, i: type, n: isOptional === "", f: formatterKeys };
    };
    isBasicPluralPart2 = (part) => !!(part.o || part.r);
    parsePluralPart2 = (content, lastAccessor) => {
      let [key2, values] = content.split(":");
      if (!values) {
        values = key2;
        key2 = lastAccessor;
      }
      const entries = values.split("|");
      const [zero, one, two, few, many, rest] = entries;
      const nrOfEntries = entries.filter((entry) => entry !== void 0).length;
      if (nrOfEntries === 1) {
        return { k: key2, r: zero };
      }
      if (nrOfEntries === 2) {
        return { k: key2, o: zero, r: one };
      }
      if (nrOfEntries === 3) {
        return { k: key2, z: zero, o: one, r: two };
      }
      return { k: key2, z: zero, o: one, t: two, f: few, m: many, r: rest };
    };
    REGEX_SWITCH_CASE2 = /^\{.*\}$/;
    parseCases2 = (text2) => Object.fromEntries(
      removeOuterBrackets2(text2).split(",").map((part) => part.split(":")).reduce((accumulator, entry) => {
        if (entry.length === 2) {
          return [...accumulator, entry.map((entry2) => entry2.trim())];
        }
        ;
        accumulator[accumulator.length - 1][1] += "," + entry[0];
        return accumulator;
      }, [])
    );
    REGEX_BRACKETS_SPLIT2 = /(\{(?:[^{}]+|\{(?:[^{}]+)*\})*\})/g;
    removeOuterBrackets2 = (text2) => text2.substring(1, text2.length - 1);
    parseRawText2 = (rawText, optimize = true, firstKey = "", lastKey = "") => rawText.split(REGEX_BRACKETS_SPLIT2).map((part) => {
      if (!part.match(REGEX_BRACKETS_SPLIT2)) {
        return part;
      }
      const content = removeOuterBrackets2(part);
      if (content.startsWith("{")) {
        return parsePluralPart2(removeOuterBrackets2(content), lastKey);
      }
      const parsedPart = parseArgumentPart2(content);
      lastKey = parsedPart.k || lastKey;
      !firstKey && (firstKey = lastKey);
      return parsedPart;
    }).map((part) => {
      if (typeof part === "string")
        return part;
      if (!part.k)
        part.k = firstKey || "0";
      const trimmed = trimAllValues2(part);
      return optimize ? removeEmptyValues2(trimmed) : trimmed;
    });
    applyFormatters2 = (formatters, formatterKeys, initialValue) => formatterKeys.reduce(
      (value, formatterKey) => {
        var _a, _b;
        return (_b = formatterKey.match(REGEX_SWITCH_CASE2) ? ((cases) => {
          var _a2;
          return (_a2 = cases[value]) != null ? _a2 : cases["*"];
        })(parseCases2(formatterKey)) : (_a = formatters[formatterKey]) == null ? void 0 : _a.call(formatters, value)) != null ? _b : value;
      },
      initialValue
    );
    getPlural2 = (pluralRules, { z, o: o3, t: t2, f, m: m2, r: r2 }, value) => {
      switch (z && value == 0 ? "zero" : pluralRules.select(value)) {
        case "zero":
          return z;
        case "one":
          return o3;
        case "two":
          return t2;
        case "few":
          return f;
        case "many":
          return m2;
        default:
          return r2;
      }
    };
    REGEX_PLURAL_VALUE_INJECTION2 = /\?\?/g;
    applyArguments2 = (textParts, pluralRules, formatters, args) => textParts.map((part) => {
      if (typeof part === "string") {
        return part;
      }
      const { k: key2 = "0", f: formatterKeys = [] } = part;
      const value = args[key2];
      if (isBasicPluralPart2(part)) {
        return ((typeof value === "boolean" ? value ? part.o : part.r : getPlural2(pluralRules, part, value)) || "").replace(REGEX_PLURAL_VALUE_INJECTION2, value);
      }
      const formattedValue = formatterKeys.length ? applyFormatters2(formatters, formatterKeys, value) : value;
      return ("" + (formattedValue != null ? formattedValue : "")).trim();
    }).join("");
    translate2 = (textParts, pluralRules, formatters, args) => {
      const firstArg = args[0];
      const isObject = firstArg && typeof firstArg === "object" && firstArg.constructor === Object;
      const transformedArgs = args.length === 1 && isObject ? firstArg : args;
      return applyArguments2(textParts, pluralRules, formatters, transformedArgs);
    };
    getPartsFromString2 = (cache, text2) => cache[text2] || (cache[text2] = parseRawText2(text2));
    getTranslateInstance2 = (locale2, formatters) => {
      const cache = {};
      const pluralRules = new Intl.PluralRules(locale2);
      return (text2, ...args) => translate2(getPartsFromString2(cache, text2), pluralRules, formatters, args);
    };
    wrap2 = (proxyObject = {}, translateFn) => typeof proxyObject === "string" ? translateFn.bind(null, proxyObject) : Object.assign(
      Object.defineProperty(() => "", "name", { writable: true }),
      proxyObject
    );
    createProxy2 = (proxyObject, translateFn) => new Proxy(wrap2(proxyObject, translateFn), {
      get: (target, key2) => {
        if (key2 === Symbol.iterator)
          return [][Symbol.iterator].bind(Object.values(target).map((entry) => wrap2(entry, translateFn)));
        return createProxy2(target[key2], translateFn);
      }
    });
    initI18nSvelte = (translations, formatters = {}) => {
      const _locale = writable2();
      const _LL = writable2(getFallbackProxy());
      const locale2 = derived(_locale, (newLocale, set) => set(newLocale));
      const LL2 = new Proxy({}, {
        get: (_target, key2) => key2 === "subscribe" ? _LL.subscribe : _LL[key2]
      });
      const setLocale2 = (newLocale) => {
        _locale.set(newLocale);
        _LL.set(i18nObject2(newLocale, translations[newLocale], formatters[newLocale]));
      };
      return {
        locale: locale2,
        LL: LL2,
        setLocale: setLocale2
      };
    };
  }
});

// build/chunks/i18n-svelte.js
var locale, LL, setLocale;
var init_i18n_svelte = __esm({
  "build/chunks/i18n-svelte.js"() {
    "use strict";
    init_shims();
    init_svelte();
    init_i18n_util();
    ({ locale, LL, setLocale } = initI18nSvelte(loadedLocales, loadedFormatters));
  }
});

// build/entries/pages/_layout.ts.js
var layout_ts_exports = {};
__export(layout_ts_exports, {
  load: () => load
});
var load;
var init_layout_ts = __esm({
  "build/entries/pages/_layout.ts.js"() {
    "use strict";
    init_shims();
    init_i18n_util_async();
    init_i18n_svelte();
    init_index2();
    load = async ({ data: { locale: locale2 } }) => {
      await loadLocaleAsync(locale2);
      setLocale(locale2);
      get_store_value(LL);
      return { locale: locale2 };
    };
  }
});

// build/entries/pages/_layout.server.ts.js
var layout_server_ts_exports = {};
__export(layout_server_ts_exports, {
  load: () => load2
});
var load2;
var init_layout_server_ts = __esm({
  "build/entries/pages/_layout.server.ts.js"() {
    "use strict";
    init_shims();
    load2 = ({ locals: { locale: locale2, LL: LL2 } }) => {
      return { locale: locale2 };
    };
  }
});

// build/entries/fallbacks/layout.svelte.js
var layout_svelte_exports = {};
__export(layout_svelte_exports, {
  default: () => Layout
});
var Layout;
var init_layout_svelte = __esm({
  "build/entries/fallbacks/layout.svelte.js"() {
    "use strict";
    init_shims();
    init_index2();
    Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `${slots.default ? slots.default({}) : ``}`;
    });
  }
});

// build/nodes/0.js
var __exports = {};
__export(__exports, {
  component: () => component,
  file: () => file,
  fonts: () => fonts,
  imports: () => imports,
  index: () => index,
  server: () => layout_server_ts_exports,
  server_id: () => server_id,
  stylesheets: () => stylesheets,
  universal: () => layout_ts_exports,
  universal_id: () => universal_id
});
var index, component, file, universal_id, server_id, imports, stylesheets, fonts;
var init__ = __esm({
  "build/nodes/0.js"() {
    "use strict";
    init_shims();
    init_layout_ts();
    init_layout_server_ts();
    index = 0;
    component = async () => (await Promise.resolve().then(() => (init_layout_svelte(), layout_svelte_exports))).default;
    file = "_app/immutable/entry/layout.svelte.7b79511f.js";
    universal_id = "src/routes/+layout.ts";
    server_id = "src/routes/+layout.server.ts";
    imports = ["_app/immutable/entry/layout.svelte.7b79511f.js", "_app/immutable/chunks/index.1abc9ca4.js", "_app/immutable/entry/_layout.ts.dd88e7e6.js", "_app/immutable/chunks/i18n-util.async.a46a0428.js", "_app/immutable/chunks/preload-helper.41c905a7.js", "_app/immutable/chunks/i18n-util.b0b8c982.js", "_app/immutable/chunks/i18n-svelte.02567117.js", "_app/immutable/chunks/index.58d4b228.js", "_app/immutable/chunks/index.1abc9ca4.js", "_app/immutable/chunks/_layout.9741fb57.js"];
    stylesheets = [];
    fonts = [];
  }
});

// build/chunks/Alternate.js
var getStores, page, replaceLocaleInUrl, Alternate;
var init_Alternate = __esm({
  "build/chunks/Alternate.js"() {
    "use strict";
    init_shims();
    init_index2();
    init_i18n_util();
    getStores = () => {
      const stores = getContext("__svelte__");
      return {
        page: {
          subscribe: stores.page.subscribe
        },
        navigating: {
          subscribe: stores.navigating.subscribe
        },
        updated: stores.updated
      };
    };
    page = {
      /** @param {(value: any) => void} fn */
      subscribe(fn) {
        const store = getStores().page;
        return store.subscribe(fn);
      }
    };
    replaceLocaleInUrl = (url, locale2, full = false) => {
      const [, , ...rest] = url.pathname.split("/");
      const new_pathname = `/${[locale2, ...rest].join("/")}`;
      if (!full) {
        return `${new_pathname}${url.search}`;
      }
      const newUrl = new URL(url.toString());
      newUrl.pathname = new_pathname;
      return newUrl.toString();
    };
    Alternate = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $page, $$unsubscribe_page;
      $$unsubscribe_page = subscribe(page, (value) => $page = value);
      $$unsubscribe_page();
      return `${each(locales, (l2) => {
        return `<link rel="${"alternate"}"${add_attribute("hreflang", l2, 0)}${add_attribute("href", `${replaceLocaleInUrl($page.url, l2, true)}`, 0)}>`;
      })}
<link rel="${"alternate"}" hreflang="${"x-default"}"${add_attribute("href", `${replaceLocaleInUrl($page.url, baseLocale, true)}`, 0)}>`;
    });
  }
});

// build/entries/pages/_error.svelte.js
var error_svelte_exports = {};
__export(error_svelte_exports, {
  default: () => Error2
});
var css, Error2;
var init_error_svelte = __esm({
  "build/entries/pages/_error.svelte.js"() {
    "use strict";
    init_shims();
    init_index2();
    init_i18n_svelte();
    init_Alternate();
    css = {
      code: '@charset "UTF-8";@media(min-width: 900px){.main_inner_error.svelte-1nx6n0s.svelte-1nx6n0s{display:flex;flex-direction:column;justify-content:center;align-items:center;min-height:100vh;overflow-x:hidden;padding:calc(1% + 100px) 0 calc(1% + 100px)}.main_inner_error.svelte-1nx6n0s .ouch_cat.svelte-1nx6n0s{width:25%;background-size:100%}.main_inner_error.svelte-1nx6n0s .error_h1.svelte-1nx6n0s{position:relative;font-size:3rem;font-weight:600;padding:3.7% 2% 0.5%}.main_inner_error.svelte-1nx6n0s .error_h1.svelte-1nx6n0s:lang(en){font-size:3.5rem}.main_inner_error.svelte-1nx6n0s .error_h1.svelte-1nx6n0s::before{content:"";position:absolute;top:0;left:50%;transform:translateX(-50%);-webkit-transform:translateX(-50%);-moz-transform:translateX(-50%);-ms-transform:translateX(-50%);-o-transform:translateX(-50%);bottom:0;top:auto;width:120%;height:3px;margin:0 auto;text-align:center;background-image:-webkit-linear-gradient(left, transparent, #000 25%, #000 75%, transparent);background-image:linear-gradient(to right, transparent, #000 25%, #000 75%, transparent);background-position:center;background-repeat:no-repeat}.main_inner_error.svelte-1nx6n0s .inner_text.svelte-1nx6n0s{text-align:center;font-size:1.8rem;padding:3% 0 3%}.main_inner_error.svelte-1nx6n0s .inner_text.svelte-1nx6n0s:lang(en){font-size:1.8rem}.main_inner_error.svelte-1nx6n0s .inner_text .error_cause.svelte-1nx6n0s{margin:2em 0;position:relative;padding:0.5em 1.5em;border-top:solid 2px black;border-bottom:solid 2px black;list-style:inside}.main_inner_error.svelte-1nx6n0s .inner_text .error_cause.svelte-1nx6n0s:before{content:"";position:absolute;top:-10px;width:2px;height:-webkit-calc(100% + 20px);height:calc(100% + 20px);background-color:black;left:10px}.main_inner_error.svelte-1nx6n0s .inner_text .error_cause.svelte-1nx6n0s:after{content:"";position:absolute;top:-10px;width:2px;height:-webkit-calc(100% + 20px);height:calc(100% + 20px);background-color:black;right:10px}.main_inner_error.svelte-1nx6n0s .inner_text .error_cause li.svelte-1nx6n0s{text-align:start}.main_inner_error.svelte-1nx6n0s .btn.svelte-1nx6n0s{padding:0.8% 4%;border:2px solid #17c3b2;position:relative;overflow:hidden;border-radius:60px;background-color:#17c3b2;text-align:center;font-size:1.7rem;filter:drop-shadow(0 0 0.3rem rgba(0, 0, 0, 0.6));-webkit-filter:drop-shadow(0 0 0.3rem rgba(0, 0, 0, 0.6));transition:0.3s;z-index:1;color:white;font-weight:bold}.main_inner_error.svelte-1nx6n0s .btn.svelte-1nx6n0s:lang(en){font-size:2.2rem;padding:0.6% 3%}.main_inner_error.svelte-1nx6n0s .btn.svelte-1nx6n0s::before{content:"";width:0;height:500%;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%) rotate(45deg);-webkit-transform:translate(-50%, -50%) rotate(45deg);-moz-transform:translate(-50%, -50%) rotate(45deg);-ms-transform:translate(-50%, -50%) rotate(45deg);-o-transform:translate(-50%, -50%) rotate(45deg);background:white;transition:0.5s ease;display:block;z-index:-1}.main_inner_error.svelte-1nx6n0s .btn.svelte-1nx6n0s:hover::before{width:105%}.main_inner_error.svelte-1nx6n0s .btn.svelte-1nx6n0s:hover{color:#17c3b2}footer.svelte-1nx6n0s.svelte-1nx6n0s{display:block;position:relative;background:#000}footer.svelte-1nx6n0s.svelte-1nx6n0s::before{display:block;content:"";position:absolute;top:0;width:100%;height:0.2vw;background:rgb(190, 193, 195)}footer.svelte-1nx6n0s .error_footer.svelte-1nx6n0s{display:flex;align-items:center;justify-content:space-between;padding:1% 1.5%}footer.svelte-1nx6n0s .error_footer .footer_logo.svelte-1nx6n0s{width:150px}footer.svelte-1nx6n0s .error_footer .footer_text.svelte-1nx6n0s{color:white;font-size:1.1rem;text-align:end}footer.svelte-1nx6n0s .error_footer .footer_text.svelte-1nx6n0s:lang(en){font-size:1.2rem}}@media(max-width: 899px){.main_inner_error.svelte-1nx6n0s.svelte-1nx6n0s{display:flex;flex-direction:column;justify-content:center;align-items:center;min-height:100vh;overflow-x:hidden;padding:calc(1% + 50px) 5% calc(1% + 50px)}}@media(max-width: 899px) and (orientation: landscape){.main_inner_error.svelte-1nx6n0s.svelte-1nx6n0s{padding:calc(1% + 50px) 0 calc(1% + 50px)}}@media(max-width: 899px){.main_inner_error.svelte-1nx6n0s .ouch_cat.svelte-1nx6n0s{width:75%;background-size:100%}}@media(max-width: 899px) and (orientation: landscape){.main_inner_error.svelte-1nx6n0s .ouch_cat.svelte-1nx6n0s{width:60%}}@media(max-width: 899px){.main_inner_error.svelte-1nx6n0s .error_h1.svelte-1nx6n0s{position:relative;font-size:2rem;font-weight:600;padding:10% 2% 2%}.main_inner_error.svelte-1nx6n0s .error_h1.svelte-1nx6n0s:lang(en){font-size:2.5rem}}@media(max-width: 899px) and (orientation: landscape){.main_inner_error.svelte-1nx6n0s .error_h1.svelte-1nx6n0s{font-size:2.5rem}.main_inner_error.svelte-1nx6n0s .error_h1.svelte-1nx6n0s:lang(en){font-size:3rem}}@media(max-width: 899px){.main_inner_error.svelte-1nx6n0s .error_h1.svelte-1nx6n0s::before{content:"";position:absolute;top:0;left:50%;transform:translateX(-50%);-webkit-transform:translateX(-50%);-moz-transform:translateX(-50%);-ms-transform:translateX(-50%);-o-transform:translateX(-50%);bottom:0;top:auto;width:120%;height:3px;margin:0 auto;text-align:center;background-image:-webkit-linear-gradient(left, transparent, #000 25%, #000 75%, transparent);background-image:linear-gradient(to right, transparent, #000 25%, #000 75%, transparent);background-position:center;background-repeat:no-repeat}}@media(max-width: 899px){.main_inner_error.svelte-1nx6n0s .inner_text.svelte-1nx6n0s{text-align:center;font-size:1.4rem;padding:15% 0}.main_inner_error.svelte-1nx6n0s .inner_text.svelte-1nx6n0s:lang(en){font-size:1.4rem}}@media(max-width: 899px) and (orientation: landscape){.main_inner_error.svelte-1nx6n0s .inner_text.svelte-1nx6n0s{padding:8%}}@media(max-width: 899px){.main_inner_error.svelte-1nx6n0s .inner_text .error_cause.svelte-1nx6n0s{margin:10% 0;position:relative;padding:3% 7%;border-top:solid 2px black;border-bottom:solid 2px black;list-style:inside}.main_inner_error.svelte-1nx6n0s .inner_text .error_cause.svelte-1nx6n0s:before{content:"";position:absolute;top:-10px;width:2px;height:-webkit-calc(100% + 20px);height:calc(100% + 20px);background-color:black;left:10px}.main_inner_error.svelte-1nx6n0s .inner_text .error_cause.svelte-1nx6n0s:after{content:"";position:absolute;top:-10px;width:2px;height:-webkit-calc(100% + 20px);height:calc(100% + 20px);background-color:black;right:10px}.main_inner_error.svelte-1nx6n0s .inner_text .error_cause li.svelte-1nx6n0s{text-align:start}}@media(max-width: 899px){.main_inner_error.svelte-1nx6n0s .btn.svelte-1nx6n0s{padding:3% 8.5%;margin-bottom:4%;border:2px solid #17c3b2;position:relative;border-radius:60px;background-color:#17c3b2;text-align:center;font-size:1.5rem;filter:drop-shadow(0 0 0.3rem rgba(0, 0, 0, 0.6));-webkit-filter:drop-shadow(0 0 0.3rem rgba(0, 0, 0, 0.6));z-index:1;color:white;font-weight:bold}.main_inner_error.svelte-1nx6n0s .btn.svelte-1nx6n0s:lang(en){font-size:1.6rem}.main_inner_error.svelte-1nx6n0s .btn.svelte-1nx6n0s:hover{background-color:white;color:#17c3b2}}@media(max-width: 899px) and (orientation: landscape){.main_inner_error.svelte-1nx6n0s .btn.svelte-1nx6n0s{padding:2% 6%}}@media(max-width: 899px){footer.svelte-1nx6n0s.svelte-1nx6n0s{display:block;position:relative;background:#000}footer.svelte-1nx6n0s.svelte-1nx6n0s::before{display:block;content:"";position:absolute;top:0;width:100%;height:4px;background:rgb(190, 193, 195)}footer.svelte-1nx6n0s .error_footer.svelte-1nx6n0s{display:flex;flex-direction:column;align-items:center;padding:3% 2%}footer.svelte-1nx6n0s .error_footer .footer_logo.svelte-1nx6n0s{width:130px}}@media(max-width: 899px) and (orientation: landscape){footer.svelte-1nx6n0s .error_footer .footer_logo.svelte-1nx6n0s{width:150px}}@media(max-width: 899px){footer.svelte-1nx6n0s .error_footer .footer_text.svelte-1nx6n0s{color:white;font-size:1.1rem;text-align:center;padding-top:3%}footer.svelte-1nx6n0s .error_footer .footer_text.svelte-1nx6n0s:lang(en){font-size:1.2rem}}.svelte-1nx6n0s.svelte-1nx6n0s,.svelte-1nx6n0s.svelte-1nx6n0s::before,.svelte-1nx6n0s.svelte-1nx6n0s::after{margin:0;padding:0;box-sizing:border-box}.svelte-1nx6n0s.svelte-1nx6n0s:where([hidden]:not([hidden=until-found])){display:none !important}.svelte-1nx6n0s.svelte-1nx6n0s:where(html){-webkit-text-size-adjust:none;color-scheme:dark light}@supports not (min-block-size: 100dvb){.svelte-1nx6n0s.svelte-1nx6n0s:where(html){block-size:100%}}@media(prefers-reduced-motion: no-preference){.svelte-1nx6n0s.svelte-1nx6n0s:where(html:focus-within){scroll-behavior:smooth}}.svelte-1nx6n0s.svelte-1nx6n0s:where(body){block-size:100%;block-size:100dvb;line-height:1.5;font-family:system-ui, sans-serif;-webkit-font-smoothing:antialiased}.svelte-1nx6n0s.svelte-1nx6n0s:where(input, button, textarea, select){font:inherit;color:inherit}.svelte-1nx6n0s.svelte-1nx6n0s:where(textarea){resize:vertical;resize:block}.svelte-1nx6n0s.svelte-1nx6n0s:where(button, label, select, summary, [role=button], [role=option]){cursor:pointer}.svelte-1nx6n0s.svelte-1nx6n0s:where(:disabled){cursor:not-allowed}.svelte-1nx6n0s.svelte-1nx6n0s:where(label:has(> input:disabled), label:has(+ input:disabled)){cursor:not-allowed}.svelte-1nx6n0s.svelte-1nx6n0s:where(button){border-style:solid}.svelte-1nx6n0s.svelte-1nx6n0s:where(a){text-underline-offset:0.2ex}.svelte-1nx6n0s.svelte-1nx6n0s:where(ul, ol){list-style:none}.svelte-1nx6n0s.svelte-1nx6n0s:where(img, svg, video, canvas, audio, iframe, embed, object){display:block}.svelte-1nx6n0s.svelte-1nx6n0s:where(img, picture, svg){max-inline-size:100%;block-size:auto}.svelte-1nx6n0s.svelte-1nx6n0s:where(p, h1, h2, h3, h4, h5, h6){overflow-wrap:break-word}.svelte-1nx6n0s.svelte-1nx6n0s:where(h1, h2, h3){line-height:calc(1em + 0.5rem)}.svelte-1nx6n0s.svelte-1nx6n0s:where(hr){border:none;border-block-start:1px solid;color:inherit;block-size:0;overflow:visible}.svelte-1nx6n0s.svelte-1nx6n0s:where(:focus-visible){outline:2px solid var(--focus-color, Highlight);outline-offset:2px}.svelte-1nx6n0s.svelte-1nx6n0s:where(.visually-hidden:not(:focus, :active, :focus-within, .not-visually-hidden)){clip-path:inset(50%) !important;height:1px !important;width:1px !important;overflow:hidden !important;position:absolute !important;white-space:nowrap !important;border:0 !important}img.svelte-1nx6n0s.svelte-1nx6n0s{width:100%;height:auto;pointer-events:none}button.svelte-1nx6n0s.svelte-1nx6n0s{background-color:transparent;border:none;cursor:pointer;outline:none;padding:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}img.svelte-1nx6n0s.svelte-1nx6n0s,button.svelte-1nx6n0s.svelte-1nx6n0s{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}h1.svelte-1nx6n0s.svelte-1nx6n0s{font-family:"Noto Serif JP", serif}h1.svelte-1nx6n0s.svelte-1nx6n0s:lang(en){font-family:"Noto Serif", serif}.error_wrapper.svelte-1nx6n0s.svelte-1nx6n0s{width:100%;overflow:hidden;background:#fef5e6;user-select:none}',
      map: null
    };
    Error2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $LL, $$unsubscribe_LL;
      $$unsubscribe_LL = subscribe(LL, (value) => $LL = value);
      let { data } = $$props;
      setLocale(data.locale);
      if ($$props.data === void 0 && $$bindings.data && data !== void 0)
        $$bindings.data(data);
      $$result.css.add(css);
      $$unsubscribe_LL();
      return `${$$result.head += `<!-- HEAD_svelte-1fgxvrn_START -->${$$result.title = `<title>${escape($LL.E404["title"]())}</title>`, ""}<meta name="${"robots"}" content="${"noindex,nofollow"}" class="${"svelte-1nx6n0s"}"><meta name="${"description"}"${add_attribute("content", $LL.articles["description"](), 0)} class="${"svelte-1nx6n0s"}"><meta name="${"keywords"}"${add_attribute("content", $LL.articles["keywords"](), 0)} class="${"svelte-1nx6n0s"}"><!-- ogp --><meta property="${"og:url"}" content="${"https://online-manual.rain-server.workers.dev/"}" class="${"svelte-1nx6n0s"}"><meta property="${"og:type"}" content="${"website"}" class="${"svelte-1nx6n0s"}"><meta property="${"og:description"}"${add_attribute("content", $LL.articles["description"](), 0)} class="${"svelte-1nx6n0s"}"><meta property="${"og:site_name"}" content="${"Rain Server"}" class="${"svelte-1nx6n0s"}"><meta property="${"og:image"}" content="${"https://online-manual.rain-server.workers.dev/img/common/sns_share.webp"}" class="${"svelte-1nx6n0s"}"><!-- twitter --><meta name="${"twitter:card"}" content="${"summary_large_image"}" class="${"svelte-1nx6n0s"}"><!-- favicon --><link rel="${"icon"}" href="${"/img/common/rain_favicon.ico?v=1"}" class="${"svelte-1nx6n0s"}"><link rel="${"apple-touch-icon"}" sizes="${"180x180"}" href="${"/img/common/rain_apple_icon.png?v=1"}" class="${"svelte-1nx6n0s"}"><link rel="${"manifest"}" href="${"/manifest.webmanifest?v=1"}" class="${"svelte-1nx6n0s"}"><!-- mobile --><meta name="${"viewport"}" content="${"width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"}" class="${"svelte-1nx6n0s"}"><meta name="${"format-detection"}" content="${"telephone=no"}" class="${"svelte-1nx6n0s"}"><meta name="${"apple-mobile-web-app-status-bar-style"}" content="${"black"}" class="${"svelte-1nx6n0s"}"><meta name="${"apple-mobile-web-app-capable"}" content="${"yes"}" class="${"svelte-1nx6n0s"}"><!-- alternate -->${validate_component(Alternate, "Alternate").$$render($$result, {}, {}, {})}<!-- font --><link rel="${"preconnect"}" href="${"https://fonts.googleapis.com"}" crossorigin="${"true"}" class="${"svelte-1nx6n0s"}"><link rel="${"preconnect"}" href="${"https://fonts.gstatic.com"}" crossorigin="${"true"}" class="${"svelte-1nx6n0s"}">${data.locale === "ja" ? `<link rel="${"preload"}" as="${"style"}" href="${"https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700;900&family=Noto+Serif+JP:wght@400;500;700&display=swap"}" class="${"svelte-1nx6n0s"}">
        <link rel="${"stylesheet"}" href="${"https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700;900&family=Noto+Serif+JP:wght@400;500;700&display=swap"}" class="${"svelte-1nx6n0s"}">` : `<link rel="${"preload"}" as="${"style"}" href="${"https://fonts.googleapis.com/css2?family=Noto+Serif:wght@400;700&family=Open+Sans:wght@400;700;800&family=Roboto:wght@400;700;900&display=swap"}" class="${"svelte-1nx6n0s"}">
        <link rel="${"stylesheet"}" href="${"https://fonts.googleapis.com/css2?family=Noto+Serif:wght@400;700&family=Open+Sans:wght@400;700;800&family=Roboto:wght@400;700;900&display=swap"}" class="${"svelte-1nx6n0s"}">`}<!-- HEAD_svelte-1fgxvrn_END -->`, ""}

<div class="${"error_wrapper svelte-1nx6n0s"}"><main class="${"main_inner_error svelte-1nx6n0s"}"><p class="${"ouch_cat svelte-1nx6n0s"}"><img src="${"/img/common/ouch_cat.webp"}" alt="${""}" class="${"svelte-1nx6n0s"}"></p>
        <h1 class="${"error_h1 svelte-1nx6n0s"}">${escape($LL.E404["h1"]())}</h1>
        <div class="${"inner_text svelte-1nx6n0s"}"><p class="${"svelte-1nx6n0s"}">${escape($LL.E404["inner_text1"]())}</p>
            <ul class="${"error_cause svelte-1nx6n0s"}">${each(Object.entries($LL.E404["error_cause"]), ([number, cause]) => {
        return `<li class="${"svelte-1nx6n0s"}">${escape(cause())}</li>`;
      })}</ul>
            <p class="${"svelte-1nx6n0s"}">${escape($LL.E404["inner_text2"]())}</p></div>
        <button class="${"btn svelte-1nx6n0s"}">${escape($LL.E404["btn_name"]())}</button></main>
    <footer class="${"svelte-1nx6n0s"}"><section class="${"error_footer svelte-1nx6n0s"}"><img class="${"footer_logo svelte-1nx6n0s"}" src="${"/img/common/rain_textlogo.webp"}" alt="${"rain_textlogo"}">
            <p class="${"footer_text svelte-1nx6n0s"}"><!-- HTML_TAG_START -->${$LL.E404["footer_text"]()}<!-- HTML_TAG_END --></p></section></footer></div>

<!-- svelte-ignore css-unused-selector -->`;
    });
  }
});

// build/nodes/1.js
var __exports2 = {};
__export(__exports2, {
  component: () => component2,
  file: () => file2,
  fonts: () => fonts2,
  imports: () => imports2,
  index: () => index2,
  stylesheets: () => stylesheets2
});
var index2, component2, file2, imports2, stylesheets2, fonts2;
var init__2 = __esm({
  "build/nodes/1.js"() {
    "use strict";
    init_shims();
    index2 = 1;
    component2 = async () => (await Promise.resolve().then(() => (init_error_svelte(), error_svelte_exports))).default;
    file2 = "_app/immutable/entry/_error.svelte.f12893f0.js";
    imports2 = ["_app/immutable/entry/_error.svelte.f12893f0.js", "_app/immutable/chunks/index.1abc9ca4.js", "_app/immutable/chunks/i18n-svelte.02567117.js", "_app/immutable/chunks/index.58d4b228.js", "_app/immutable/chunks/i18n-util.b0b8c982.js", "_app/immutable/chunks/Alternate.5c066878.js", "_app/immutable/chunks/singletons.a54971d9.js"];
    stylesheets2 = ["_app/immutable/assets/_error.8305d270.css"];
    fonts2 = [];
  }
});

// build/entries/pages/_lang_lang_/(manual)/manual/_layout.ts.js
var layout_ts_exports2 = {};
__export(layout_ts_exports2, {
  load: () => load3
});
var load3;
var init_layout_ts2 = __esm({
  "build/entries/pages/_lang_lang_/(manual)/manual/_layout.ts.js"() {
    "use strict";
    init_shims();
    init_i18n_util_async();
    init_i18n_svelte();
    init_index2();
    load3 = async ({ data: { locale: locale2 } }) => {
      await loadLocaleAsync(locale2);
      setLocale(locale2);
      get_store_value(LL);
      return { locale: locale2 };
    };
  }
});

// build/entries/pages/_lang_lang_/(manual)/manual/_layout.server.ts.js
var layout_server_ts_exports2 = {};
__export(layout_server_ts_exports2, {
  load: () => load4
});
var load4;
var init_layout_server_ts2 = __esm({
  "build/entries/pages/_lang_lang_/(manual)/manual/_layout.server.ts.js"() {
    "use strict";
    init_shims();
    load4 = ({ locals: { locale: locale2, LL: LL2 } }) => {
      return { locale: locale2 };
    };
  }
});

// build/entries/pages/_lang_lang_/(manual)/manual/_layout.svelte.js
var layout_svelte_exports2 = {};
__export(layout_svelte_exports2, {
  default: () => Layout2
});
var LangSelectArea, ManualHeader, BottomNav, LandscapeMode, ManualFooter, Layout2;
var init_layout_svelte2 = __esm({
  "build/entries/pages/_lang_lang_/(manual)/manual/_layout.svelte.js"() {
    "use strict";
    init_shims();
    init_index2();
    init_i18n_svelte();
    init_Alternate();
    LangSelectArea = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $LL, $$unsubscribe_LL;
      let $locale, $$unsubscribe_locale;
      $$unsubscribe_LL = subscribe(LL, (value) => $LL = value);
      $$unsubscribe_locale = subscribe(locale, (value) => $locale = value);
      $$unsubscribe_LL();
      $$unsubscribe_locale();
      return `<dl class="${"language_selectArea_list"}">${each(Object.entries($LL.header["lang_sel"]), ([lang_code, { main_name, sub_name }]) => {
        return `<button class="${["LANG language_names", lang_code === $locale ? "lang_selected" : ""].join(" ").trim()}"><span class="${"language_mainName"}">${escape(main_name())}</span>
            <span class="${"language_subName"}">${escape(sub_name())}</span>
        </button>`;
      })}</dl>`;
    });
    ManualHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $$unsubscribe_locale;
      let $LL, $$unsubscribe_LL;
      $$unsubscribe_locale = subscribe(locale, (value) => value);
      $$unsubscribe_LL = subscribe(LL, (value) => $LL = value);
      $$unsubscribe_locale();
      $$unsubscribe_LL();
      return `<div class="${"header_inner"}"><!-- svelte-ignore a11y-label-has-associated-control -->
    <label class="${"header_platform"}"></label>
    <p class="${"header_logo"}"><button class="${"header_logo_button"}"></button></p>
    <aside class="${"header_language"}"><ul><button class="${"header_language_selector"}"><p><span class="${"current_language"}">${escape($LL.header["now_lang"]())}</span></p></button>
            <li class="${"lang_sel_judge"}"><ul class="${"language_selectArea slidable_on_mobile"}">${validate_component(LangSelectArea, "LangSelectArea").$$render($$result, {}, {}, {})}</ul></li></ul></aside></div>`;
    });
    BottomNav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $LL, $$unsubscribe_LL;
      $$unsubscribe_LL = subscribe(LL, (value) => $LL = value);
      $$unsubscribe_LL();
      return `<ul>${each(Object.entries($LL.bottom_nav), ([id, { svg_path, text: text2 }]) => {
        return `<!-- svelte-ignore a11y-click-events-have-key-events -->
        <li${add_attribute("id", id, 0)} class="${"btm_nav_item"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"icon icon-tabler icon-tabler-category"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}" stroke-width="${"2"}" stroke="${"currentColor"}" fill="${"none"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"><!-- HTML_TAG_START -->${svg_path()}<!-- HTML_TAG_END --></svg>
            ${escape(text2())}
        </li>`;
      })}</ul>`;
    });
    LandscapeMode = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let landscape;
      let $LL, $$unsubscribe_LL;
      $$unsubscribe_LL = subscribe(LL, (value) => $LL = value);
      let innerWidth = 0;
      let innerHeight = 0;
      landscape = innerWidth > innerHeight;
      $$unsubscribe_LL();
      return `

<div class="${["landscape_mode", landscape ? "detected" : ""].join(" ").trim()}"><span class="${"rotate_text"}">${escape($LL.landscape_mode())}</span>
    <img src="${"/img/common/landscape/rotate_device.webp"}" alt="${"rotate"}" class="${"rotate_device"}">
    <div class="${"now_waiting"}"><img src="${"/img/common/landscape/now_waiting_N1.webp"}" alt="${"N"}">
        <img src="${"/img/common/landscape/now_waiting_O.webp"}" alt="${"O"}">
        <img src="${"/img/common/landscape/now_waiting_W1.webp"}" alt="${"W"}">
        <img src="${"/img/common/landscape/now_waiting_W2.webp"}" alt="${"W"}">
        <img src="${"/img/common/landscape/now_waiting_A.webp"}" alt="${"A"}">
        <img src="${"/img/common/landscape/now_waiting_I1.webp"}" alt="${"I"}">
        <img src="${"/img/common/landscape/now_waiting_T.webp"}" alt="${"T"}">
        <img src="${"/img/common/landscape/now_waiting_I2.webp"}" alt="${"I"}">
        <img src="${"/img/common/landscape/now_waiting_N2.webp"}" alt="${"N"}">
        <img src="${"/img/common/landscape/now_waiting_G.webp"}" alt="${"G"}"></div></div>`;
    });
    ManualFooter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $LL, $$unsubscribe_LL;
      $$unsubscribe_LL = subscribe(LL, (value) => $LL = value);
      $$unsubscribe_LL();
      return `<section class="${"footer_link"}"><ul class="${"footer_link_list"}">${each(Object.entries($LL.footer), ([img_src, { title, href, alt }]) => {
        return `<li><a${add_attribute("href", href(), 0)} class="${"footer_list_items"}"><figure class="${"footer_list_img"}"><img src="${"/img/common/footer/" + escape(img_src, true) + "_icon.webp"}"${add_attribute("alt", alt(), 0)}></figure>
                    <p class="${"footer_list_title"}"><!-- HTML_TAG_START -->${title()}<!-- HTML_TAG_END -->
                    </p></a>
            </li>`;
      })}</ul>
    <div class="${"footer_note"}"><p><!-- HTML_TAG_START -->${$LL.footer_note()}<!-- HTML_TAG_END --></p></div></section>`;
    });
    Layout2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $LL, $$unsubscribe_LL;
      $$unsubscribe_LL = subscribe(LL, (value) => $LL = value);
      let { data } = $$props;
      setLocale(data.locale);
      if ($$props.data === void 0 && $$bindings.data && data !== void 0)
        $$bindings.data(data);
      $$unsubscribe_LL();
      return `<header><!-- header -->
    ${validate_component(ManualHeader, "ManualHeader").$$render($$result, {}, {}, {})}</header>

<!-- side_menu + article = page.svelte -->
${slots.default ? slots.default({}) : ``}

<!-- scroll to top button for PC -->
<button id="${"scroll_to_top"}"></button>

<!-- bottom_navigation -->
<nav class="${"bottom_navigations"}">${validate_component(BottomNav, "BottomNav").$$render($$result, {}, {}, {})}</nav>

<!-- landscape_mode_overlay -->
${validate_component(LandscapeMode, "LandscapeMode").$$render($$result, {}, {}, {})}

<footer><!-- footer -->
    ${validate_component(ManualFooter, "ManualFooter").$$render($$result, {}, {}, {})}</footer>

${$$result.head += `<!-- HEAD_svelte-1vtljo0_START --><!-- ogp --><meta property="${"og:url"}" content="${"https://online-manual.rain-server.workers.dev/"}"><meta property="${"og:type"}" content="${"website"}"><meta property="${"og:description"}"${add_attribute("content", $LL.articles["description"](), 0)}><meta property="${"og:site_name"}" content="${"Rain Server"}"><meta property="${"og:image"}" content="${"https://online-manual.rain-server.workers.dev/img/common/sns_share.webp"}"><!-- twitter --><meta name="${"twitter:card"}" content="${"summary_large_image"}"><!-- favicon --><link rel="${"icon"}" href="${"/img/common/rain_favicon.ico?v=1"}"><link rel="${"apple-touch-icon"}" sizes="${"180x180"}" href="${"/img/common/rain_apple_icon.png?v=1"}"><link rel="${"manifest"}" href="${"/manifest.webmanifest?v=1"}"><!-- mobile --><meta name="${"viewport"}" content="${"width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"}"><meta name="${"format-detection"}" content="${"telephone=no"}"><meta name="${"apple-mobile-web-app-status-bar-style"}" content="${"black"}"><meta name="${"apple-mobile-web-app-capable"}" content="${"yes"}"><!-- alternate -->${validate_component(Alternate, "Alternate").$$render($$result, {}, {}, {})}<!-- font --><link rel="${"preconnect"}" href="${"https://fonts.googleapis.com"}" crossorigin="${"true"}"><link rel="${"preconnect"}" href="${"https://fonts.gstatic.com"}" crossorigin="${"true"}">${data.locale === "ja" ? `<link rel="${"preload"}" as="${"style"}" href="${"https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700;900&family=Noto+Serif+JP:wght@400;500;700&display=swap"}">
        <link rel="${"stylesheet"}" href="${"https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700;900&family=Noto+Serif+JP:wght@400;500;700&display=swap"}">` : `<link rel="${"preload"}" as="${"style"}" href="${"https://fonts.googleapis.com/css2?family=Noto+Serif:wght@400;700&family=Open+Sans:wght@400;700;800&family=Roboto:wght@400;700;900&display=swap"}">
        <link rel="${"stylesheet"}" href="${"https://fonts.googleapis.com/css2?family=Noto+Serif:wght@400;700&family=Open+Sans:wght@400;700;800&family=Roboto:wght@400;700;900&display=swap"}">`}<!-- HEAD_svelte-1vtljo0_END -->`, ""}`;
    });
  }
});

// build/nodes/2.js
var __exports3 = {};
__export(__exports3, {
  component: () => component3,
  file: () => file3,
  fonts: () => fonts3,
  imports: () => imports3,
  index: () => index3,
  server: () => layout_server_ts_exports2,
  server_id: () => server_id2,
  stylesheets: () => stylesheets3,
  universal: () => layout_ts_exports2,
  universal_id: () => universal_id2
});
var index3, component3, file3, universal_id2, server_id2, imports3, stylesheets3, fonts3;
var init__3 = __esm({
  "build/nodes/2.js"() {
    "use strict";
    init_shims();
    init_layout_ts2();
    init_layout_server_ts2();
    index3 = 2;
    component3 = async () => (await Promise.resolve().then(() => (init_layout_svelte2(), layout_svelte_exports2))).default;
    file3 = "_app/immutable/entry/_lang_lang_-(manual)-manual-layout.svelte.4a24966a.js";
    universal_id2 = "src/routes/[lang=lang]/(manual)/manual/+layout.ts";
    server_id2 = "src/routes/[lang=lang]/(manual)/manual/+layout.server.ts";
    imports3 = ["_app/immutable/entry/_lang_lang_-(manual)-manual-layout.svelte.4a24966a.js", "_app/immutable/chunks/index.1abc9ca4.js", "_app/immutable/chunks/i18n-svelte.02567117.js", "_app/immutable/chunks/index.58d4b228.js", "_app/immutable/chunks/i18n-util.b0b8c982.js", "_app/immutable/chunks/main.6ab22d63.js", "_app/immutable/chunks/Alternate.5c066878.js", "_app/immutable/chunks/singletons.a54971d9.js", "_app/immutable/entry/_lang_lang_-(manual)-manual-layout.ts.dd88e7e6.js", "_app/immutable/chunks/i18n-util.async.a46a0428.js", "_app/immutable/chunks/preload-helper.41c905a7.js", "_app/immutable/chunks/i18n-util.b0b8c982.js", "_app/immutable/chunks/i18n-svelte.02567117.js", "_app/immutable/chunks/index.58d4b228.js", "_app/immutable/chunks/index.1abc9ca4.js", "_app/immutable/chunks/_layout.f43c3b4e.js"];
    stylesheets3 = ["_app/immutable/assets/_layout.5d35af57.css"];
    fonts3 = [];
  }
});

// build/entries/pages/_lang_lang_/(member)/member/_layout.svelte.js
var layout_svelte_exports3 = {};
__export(layout_svelte_exports3, {
  default: () => Layout3
});
var Layout3;
var init_layout_svelte3 = __esm({
  "build/entries/pages/_lang_lang_/(member)/member/_layout.svelte.js"() {
    "use strict";
    init_shims();
    init_index2();
    Layout3 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `<h3>\u30E1\u30F3\u30D0\u30FC\u30B5\u30A4\u30C8\u4E88\u5B9A\u5730</h3>

${slots.default ? slots.default({}) : ``}`;
    });
  }
});

// build/nodes/3.js
var __exports4 = {};
__export(__exports4, {
  component: () => component4,
  file: () => file4,
  fonts: () => fonts4,
  imports: () => imports4,
  index: () => index4,
  stylesheets: () => stylesheets4
});
var index4, component4, file4, imports4, stylesheets4, fonts4;
var init__4 = __esm({
  "build/nodes/3.js"() {
    "use strict";
    init_shims();
    index4 = 3;
    component4 = async () => (await Promise.resolve().then(() => (init_layout_svelte3(), layout_svelte_exports3))).default;
    file4 = "_app/immutable/entry/_lang_lang_-(member)-member-layout.svelte.1d5cc5b5.js";
    imports4 = ["_app/immutable/entry/_lang_lang_-(member)-member-layout.svelte.1d5cc5b5.js", "_app/immutable/chunks/index.1abc9ca4.js"];
    stylesheets4 = [];
    fonts4 = [];
  }
});

// build/entries/pages/_lang_lang_/(officialsite)/_layout.svelte.js
var layout_svelte_exports4 = {};
__export(layout_svelte_exports4, {
  default: () => Layout4
});
var Layout4;
var init_layout_svelte4 = __esm({
  "build/entries/pages/_lang_lang_/(officialsite)/_layout.svelte.js"() {
    "use strict";
    init_shims();
    init_index2();
    Layout4 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `<h3>\u516C\u5F0F\u30B5\u30A4\u30C8\u4E88\u5B9A\u5730</h3>

${slots.default ? slots.default({}) : ``}`;
    });
  }
});

// build/nodes/4.js
var __exports5 = {};
__export(__exports5, {
  component: () => component5,
  file: () => file5,
  fonts: () => fonts5,
  imports: () => imports5,
  index: () => index5,
  stylesheets: () => stylesheets5
});
var index5, component5, file5, imports5, stylesheets5, fonts5;
var init__5 = __esm({
  "build/nodes/4.js"() {
    "use strict";
    init_shims();
    index5 = 4;
    component5 = async () => (await Promise.resolve().then(() => (init_layout_svelte4(), layout_svelte_exports4))).default;
    file5 = "_app/immutable/entry/_lang_lang_-(officialsite)-layout.svelte.569892ce.js";
    imports5 = ["_app/immutable/entry/_lang_lang_-(officialsite)-layout.svelte.569892ce.js", "_app/immutable/chunks/index.1abc9ca4.js"];
    stylesheets5 = [];
    fonts5 = [];
  }
});

// build/entries/pages/_lang_lang_/(manual)/manual/_page.server.ts.js
var page_server_ts_exports = {};
__export(page_server_ts_exports, {
  load: () => load5
});
var load5;
var init_page_server_ts = __esm({
  "build/entries/pages/_lang_lang_/(manual)/manual/_page.server.ts.js"() {
    "use strict";
    init_shims();
    load5 = async () => {
      const r2 = Math.floor(Math.random() * 4) + 1;
      return {
        r: r2
      };
    };
  }
});

// build/chunks/Menu.js
var Menu;
var init_Menu = __esm({
  "build/chunks/Menu.js"() {
    "use strict";
    init_shims();
    init_index2();
    init_i18n_svelte();
    Menu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $LL, $$unsubscribe_LL;
      let $$unsubscribe_locale;
      $$unsubscribe_LL = subscribe(LL, (value) => $LL = value);
      $$unsubscribe_locale = subscribe(locale, (value) => value);
      let path1;
      let path2;
      $$unsubscribe_LL();
      $$unsubscribe_locale();
      return `<ul class="${"categories"}">${each(Object.entries($LL.side_menu), ([maindir, { title, contents }]) => {
        return `<li class="${"category"}"><button${add_attribute("id", maindir, 0)} class="${["category_title", path1 === maindir ? "open" : ""].join(" ").trim()}"><span class="${"mark"}"></span>
                ${escape(title())}</button>
            <ul class="${"sub_categories"}"><li class="${"sub_categories_list"}">${each(Object.entries(contents), ([subdir, content]) => {
          return `<button class="${["sub_category", path2 === subdir ? "tab_active" : ""].join(" ").trim()}">${escape(content())}
                        </button>`;
        })}
                </li></ul>
        </li>`;
      })}</ul>`;
    });
  }
});

// build/entries/pages/_lang_lang_/(manual)/manual/_page.svelte.js
var page_svelte_exports = {};
__export(page_svelte_exports, {
  default: () => Page
});
var Home, Page;
var init_page_svelte = __esm({
  "build/entries/pages/_lang_lang_/(manual)/manual/_page.svelte.js"() {
    "use strict";
    init_shims();
    init_index2();
    init_Menu();
    init_i18n_svelte();
    Home = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $LL, $$unsubscribe_LL;
      let $locale, $$unsubscribe_locale;
      $$unsubscribe_LL = subscribe(LL, (value) => $LL = value);
      $$unsubscribe_locale = subscribe(locale, (value) => $locale = value);
      $$unsubscribe_LL();
      $$unsubscribe_locale();
      return `<h1>${escape($LL.articles["home"].title())}</h1>

<section class="${"news"}"><h2 class="${"news_title"}">${escape($LL.articles["home"].news_title())}</h2>
    <div class="${"news_content"}"><ul class="${"content_list"}"><li class="${"news_date"}"><span>${escape($LL.articles["home"].news_date())}</span></li>
            <li class="${"news_text"}"><!-- HTML_TAG_START -->${$LL.articles["home"].news_text()}<!-- HTML_TAG_END --></li></ul>
        <button class="${"news_more"}"><span>\u25B2</span>
            ${escape($LL.articles["home"].news_more())}</button></div></section>

<section class="${"featured"}"><h2>${escape($LL.articles["home"].featured_title())}</h2>
    <ul class="${"featured_list"}">${each(Object.entries($LL.articles["home"].featured_contents), ([item, { maindir, subdir, alt, text: text2 }]) => {
        return `<li><button><dl class="${"featured_items"}"><dt class="${"featured_img " + escape(item, true)}"><img src="${"/img/" + escape($locale, true) + "/featured/featured_" + escape(item, true) + "_chara.webp"}"${add_attribute("alt", alt(), 0)}>
                        </dt><dd class="${"featured_text"}"><!-- HTML_TAG_START -->${text2()}<!-- HTML_TAG_END --></dd></dl></button>
            </li>`;
      })}</ul></section>

<section class="${"extlink"}"><h2>${escape($LL.articles["home"].extlink_title())}</h2>
    <ul class="${"extlink_list"}">${each(Object.entries($LL.articles["home"].extlink_contents), ([item, { title, alt, target, rel, href, img_chara }]) => {
        return `<li class="${"extlink_items"}"><a${add_attribute("href", href(), 0)} class="${"extlink_items_link " + escape(item, true)}"${add_attribute("target", target(), 0)}${add_attribute("rel", rel(), 0)}><figure class="${"extlink_frame"}"><img src="${"/img/common/extlink/extlink_frame.webp"}" alt="${""}"></figure>
                    <div class="${"extlink_text_adj"}"><div class="${"extlink_text_content"}"><p class="${"extlink_text_title"}">${escape(title())}</p>
                        </div></div>
                    <figure class="${"extlink_chara"}"><img src="${"/img/common/extlink/" + escape(img_chara(), true) + ".webp"}"${add_attribute("alt", alt(), 0)}>
                    </figure></a>
            </li>`;
      })}</ul></section>`;
    });
    Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $LL, $$unsubscribe_LL;
      $$unsubscribe_LL = subscribe(LL, (value) => $LL = value);
      let { data } = $$props;
      const rad = data.r;
      if ($$props.data === void 0 && $$bindings.data && data !== void 0)
        $$bindings.data(data);
      $$unsubscribe_LL();
      return `${$$result.head += `<!-- HEAD_svelte-loo7fd_START -->${$$result.title = `<title>${escape($LL.articles["home"].head_title())}</title>`, ""}<meta name="${"description"}"${add_attribute("content", $LL.articles["description"](), 0)}><meta name="${"keywords"}"${add_attribute("content", $LL.articles["keywords"](), 0)}><meta property="${"og:title"}"${add_attribute("content", $LL.articles["home"].head_title(), 0)}><!-- HEAD_svelte-loo7fd_END -->`, ""}

<div class="${"top_images"}"><picture><source srcset="${"/img/common/bg" + escape(rad, true) + "_sp.webp"}" media="${"(max-width: 899px)"}" type="${"image/webp"}">
        <img class="${"top_img"}" src="${"/img/common/bg" + escape(rad, true) + ".webp"}" alt="${"top_pc"}"></picture></div>

<div class="${"bg"}"><main class="${"main_inner"}"><nav class="${"side_menu slidable_on_mobile"}"><!-- side_menu -->
            ${validate_component(Menu, "Menu").$$render($$result, {}, {}, {})}</nav>

        <article class="${"contents"}"><button>\u2192Go Workspace\u2190</button>
            <!-- article -->
            ${validate_component(Home, "Home").$$render($$result, {}, {}, {})}</article></main></div>`;
    });
  }
});

// build/nodes/5.js
var __exports6 = {};
__export(__exports6, {
  component: () => component6,
  file: () => file6,
  fonts: () => fonts6,
  imports: () => imports6,
  index: () => index6,
  server: () => page_server_ts_exports,
  server_id: () => server_id3,
  stylesheets: () => stylesheets6
});
var index6, component6, file6, server_id3, imports6, stylesheets6, fonts6;
var init__6 = __esm({
  "build/nodes/5.js"() {
    "use strict";
    init_shims();
    init_page_server_ts();
    index6 = 5;
    component6 = async () => (await Promise.resolve().then(() => (init_page_svelte(), page_svelte_exports))).default;
    file6 = "_app/immutable/entry/_lang_lang_-(manual)-manual-page.svelte.a3669167.js";
    server_id3 = "src/routes/[lang=lang]/(manual)/manual/+page.server.ts";
    imports6 = ["_app/immutable/entry/_lang_lang_-(manual)-manual-page.svelte.a3669167.js", "_app/immutable/chunks/index.1abc9ca4.js", "_app/immutable/chunks/Menu.bf9262fe.js", "_app/immutable/chunks/i18n-svelte.02567117.js", "_app/immutable/chunks/index.58d4b228.js", "_app/immutable/chunks/i18n-util.b0b8c982.js", "_app/immutable/chunks/main.6ab22d63.js"];
    stylesheets6 = [];
    fonts6 = [];
  }
});

// build/entries/pages/_lang_lang_/(manual)/manual/workspace/_page.svelte.js
var page_svelte_exports2 = {};
__export(page_svelte_exports2, {
  default: () => Page2
});
var Page2;
var init_page_svelte2 = __esm({
  "build/entries/pages/_lang_lang_/(manual)/manual/workspace/_page.svelte.js"() {
    "use strict";
    init_shims();
    init_index2();
    init_Menu();
    Page2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `${$$result.head += `<!-- HEAD_svelte-1qvvz74_START -->${$$result.title = `<title>Workspace</title>`, ""}<!-- HEAD_svelte-1qvvz74_END -->`, ""}

<div class="${"bg"}"><main class="${"main_inner"}"><nav class="${"side_menu slidable_on_mobile"}"><!-- side_menu -->
            ${validate_component(Menu, "Menu").$$render($$result, {}, {}, {})}</nav>

        <article class="${"contents"}"><!-- article --></article></main></div>`;
    });
  }
});

// build/nodes/6.js
var __exports7 = {};
__export(__exports7, {
  component: () => component7,
  file: () => file7,
  fonts: () => fonts7,
  imports: () => imports7,
  index: () => index7,
  stylesheets: () => stylesheets7
});
var index7, component7, file7, imports7, stylesheets7, fonts7;
var init__7 = __esm({
  "build/nodes/6.js"() {
    "use strict";
    init_shims();
    index7 = 6;
    component7 = async () => (await Promise.resolve().then(() => (init_page_svelte2(), page_svelte_exports2))).default;
    file7 = "_app/immutable/entry/_lang_lang_-(manual)-manual-workspace-page.svelte.f836f4bf.js";
    imports7 = ["_app/immutable/entry/_lang_lang_-(manual)-manual-workspace-page.svelte.f836f4bf.js", "_app/immutable/chunks/index.1abc9ca4.js", "_app/immutable/chunks/Menu.bf9262fe.js", "_app/immutable/chunks/i18n-svelte.02567117.js", "_app/immutable/chunks/index.58d4b228.js", "_app/immutable/chunks/i18n-util.b0b8c982.js", "_app/immutable/chunks/main.6ab22d63.js"];
    stylesheets7 = [];
    fonts7 = [];
  }
});

// build/entries/pages/_lang_lang_/(manual)/manual/_maindir_/_subdir_/_page.server.ts.js
var page_server_ts_exports2 = {};
__export(page_server_ts_exports2, {
  load: () => load6
});
var discord, start, default_title_ja, default_title_en, articles, load6;
var init_page_server_ts2 = __esm({
  "build/entries/pages/_lang_lang_/(manual)/manual/_maindir_/_subdir_/_page.server.ts.js"() {
    "use strict";
    init_shims();
    init_chunks();
    discord = {
      ja: '<div class="table_contents" data-title="\u30B3\u30F3\u30C6\u30F3\u30C4"><ul><li><a class="scroll" data-target="signup_discord">\u516C\u5F0FDiscord\u306B\u3066\u4F1A\u54E1\u767B\u9332</a></ul></div><div class="article_memo" data-title="COMMENT"><p class="inner_text">\u300C\u30E2\u30F3\u30B9\u30BF\u30FC\u30CF\u30F3\u30BF\u30FC \u30D5\u30ED\u30F3\u30C6\u30A3\u30A2 \u30AA\u30F3\u30E9\u30A4\u30F3\u300D\u3092\u30D7\u30EC\u30A4\u3059\u308B\u305F\u3081\u306B\u306F\u3001Rain\u30B5\u30FC\u30D0\u30FC\u3078\u306E\u4F1A\u54E1\u767B\u9332\u304C\u5FC5\u8981\u3068\u306A\u308A\u307E\u3059\u3002\u767B\u9332\u753B\u9762\u306B\u3066\u8A2D\u5B9A\u3057\u305F\u300C\u30E6\u30FC\u30B6\u30FC\u540D\u300D\u53CA\u3073\u300C\u30D1\u30B9\u30EF\u30FC\u30C9\u300D\u3092\u30B2\u30FC\u30E0\u30E9\u30F3\u30C1\u30E3\u30FC\u3078\u5165\u529B\u3057\u3066\u30ED\u30B0\u30A4\u30F3\u3059\u308B\u3053\u3068\u3067\u3001\u30B2\u30FC\u30E0\u3092\u30D7\u30EC\u30A4\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u3053\u3053\u3067\u306F\u3001\u516C\u5F0FDiscord\u5185\u3067\u306E\u4F1A\u54E1\u767B\u9332\u624B\u9806\u306B\u3064\u3044\u3066\u8AAC\u660E\u3057\u307E\u3059\u3002</div><section id="signup_discord"><h2>\u516C\u5F0FDiscord\u306B\u3066\u4F1A\u54E1\u767B\u9332</h2><ul><li class="center_box"><p class="center_box_text">\uFF081\uFF09\u300Cbot-commands\u300D\u30C1\u30E3\u30F3\u30CD\u30EB\u5185\u306B\u3042\u308B\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30A4\u30B9\u3088\u308A\u3001Register\u30DC\u30BF\u30F3\u3092\u62BC\u3057\u307E\u3059\u3002<p class="center_box_img"><img src="/img/ja/articles/signup/discord/discord_1.png" alt="discord_1"><li class="center_box"><p class="center_box_text">\uFF082\uFF09\u4EE5\u4E0B\u306E\u3088\u3046\u306A\u30A6\u30A3\u30F3\u30C9\u30A6\u304C\u8868\u793A\u3055\u308C\u305F\u3089\u3001\u300CUsername\u300D\u53CA\u3073\u300CPassword\u300D\u6B04\u306B\u305D\u308C\u305E\u308C\u81EA\u8EAB\u306E\u8A2D\u5B9A\u3057\u305F\u3044\u5024\u3092\u5165\u529B\u3057\u3066\u3001\u9001\u4FE1\u30DC\u30BF\u30F3\u3092\u62BC\u3057\u3066\u304F\u3060\u3055\u3044\u3002<br>\u9001\u4FE1\u304C\u5B8C\u4E86\u3059\u308B\u3068\u3001\u300Caccount successfully created\u300D\u3068\u3044\u3046\u30E1\u30C3\u30BB\u30FC\u30B8\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002<p class="center_box_img"><img src="/img/ja/articles/signup/discord/discord_2_1.png" alt="discord_2_1"><p class="center_box_img"><img src="/img/ja/articles/signup/discord/discord_2_2.png" alt="discord_2_2"><li class="center_box"><p class="center_box_text">\uFF083\uFF09/card \u30B3\u30DE\u30F3\u30C9\u4F7F\u7528\u5F8C\u3001\u7A7A\u306E\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002<br>Use\u30DC\u30BF\u30F3\u3092\u62BC\u3057\u3066\u3001\u4F7F\u7528\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u3092\u78BA\u5B9A\u3055\u305B\u308B\u3068\u3001\u300Csuccessfully switch main character\u300D\u3068\u3044\u3046\u30E1\u30C3\u30BB\u30FC\u30B8\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002<br>\u3053\u308C\u306B\u3066\u4F1A\u54E1\u767B\u9332\u306F\u5B8C\u4E86\u3068\u306A\u308A\u307E\u3059\u3002<p class="center_box_img"><img src="/img/ja/articles/signup/discord/discord_3_1.png" alt="discord_3_1"><p class="center_box_img"><img src="/img/ja/articles/signup/discord/discord_3_2.png" alt="discord_3_2"></ul></section>',
      en: '<div class="table_contents" data-title="Contents"><ul><li><a class="scroll" data-target="signup_discord">Sign Up in the Official Discord</a></ul></div><div class="article_memo" data-title="COMMENT"><p class="inner_text">In order to play "Monster Hunter Frontier Online," you need to sign up for the Rain Server first. You can play the game by entering the "Username" and "Password," which you set on the registration screen, into the game launcher and logging in. This section describes sign-up procedure in the official Discord.</div><section id="signup_discord"><h2>Sign Up in the Official Discord</h2><ul><li class="center_box"><p class="center_box_text">\uFF081\uFF09On the interface in the "bot-commands" channel, press "Register" button.<p class="center_box_img"><img src="/img/en/articles/signup/discord/discord_1.png" alt="discord_1"><li class="center_box"><p class="center_box_text">\uFF082\uFF09When the following window appears, enter the values you want to set in the "Username" and "Password" fields respectively, then press "Submit" button.<br>When submitting is completed, you can see the message "account successfully created."<p class="center_box_img"><img src="/img/en/articles/signup/discord/discord_2_1.png" alt="discord_2_1"><p class="center_box_img"><img src="/img/en/articles/signup/discord/discord_2_2.png" alt="discord_2_2"><li class="center_box"><p class="center_box_text">\uFF083\uFF09After using /card, slash command, an empty character is displayed.<br>When you press "Use" button to confirm the character to be used, you can see the message "successfully switch main character."<br>Signing up for Rain is now completed.<p class="center_box_img"><img src="/img/en/articles/signup/discord/discord_3_1.png" alt="discord_3_1"><p class="center_box_img"><img src="/img/en/articles/signup/discord/discord_3_2.png" alt="discord_3_2"></ul></section>'
    };
    start = {
      ja: "<p>\u3053\u308C\u306F\u30B2\u30FC\u30E0\u306E\u59CB\u3081\u65B9\u30B3\u30F3\u30C6\u30F3\u30C4\u3067\u3059\u3002</p>",
      en: '<p>This is a "Start" content.</p>'
    };
    default_title_ja = "MHF \u30AA\u30F3\u30E9\u30A4\u30F3\u30DE\u30CB\u30E5\u30A2\u30EB";
    default_title_en = "MHF Online Manual";
    articles = [
      {
        // 会員登録手順（Discord）
        lang: "ja",
        maindir: "signup",
        subdir: "discord",
        head_title: `\u4F1A\u54E1\u767B\u9332\u624B\u9806\uFF08Discord\uFF09| ${default_title_ja}`,
        title: "\u4F1A\u54E1\u767B\u9332\u624B\u9806\uFF08Discord\uFF09",
        content: discord.ja
      },
      {
        // Sign-up Procedure (Discord)
        lang: "en",
        maindir: "signup",
        subdir: "discord",
        head_title: `Sign-up Procedure (Discord) | ${default_title_en}`,
        title: "Sign-up Procedure (Discord)",
        content: discord.en
      },
      /*     {
              // 会員登録手順（メンバーサイト）
              lang: 'ja',
              maindir: 'signup',
              subdir: 'membersite',
              head_title: `会員登録手順（メンバーサイト）| ${default_title_ja}`,
              title: '会員登録手順（メンバーサイト）',
              content: membersite.ja,
          }, */
      /*     {
              // Sign-up Procedure (Member Site)
              lang: 'en',
              maindir: 'signup',
              subdir: 'membersite',
              head_title: `Sign-up Procedure (Member Site) | ${default_title_en}`,
              title: 'Sign-up Procedure (Member Site)',
              content: membersite.en,
          }, */
      {
        // ゲームの始め方（日本語）
        lang: "ja",
        maindir: "begin",
        subdir: "start",
        head_title: `\u30B2\u30FC\u30E0\u306E\u59CB\u3081\u65B9 | ${default_title_ja}`,
        title: "\u30B2\u30FC\u30E0\u306E\u59CB\u3081\u65B9",
        content: start.ja
      },
      {
        // How to Start the Game
        lang: "en",
        maindir: "begin",
        subdir: "start",
        head_title: `How to Start the Game | ${default_title_en}`,
        title: "How to Start the Game",
        content: start.en
      }
    ];
    load6 = async ({ params }) => {
      const article = articles.find((article2) => article2.lang === params.lang && article2.maindir === params.maindir && article2.subdir === params.subdir);
      return {
        article
      };
    };
  }
});

// build/entries/pages/_lang_lang_/(manual)/manual/_maindir_/_subdir_/_page.svelte.js
var page_svelte_exports3 = {};
__export(page_svelte_exports3, {
  default: () => Page3
});
var Page3;
var init_page_svelte3 = __esm({
  "build/entries/pages/_lang_lang_/(manual)/manual/_maindir_/_subdir_/_page.svelte.js"() {
    "use strict";
    init_shims();
    init_index2();
    init_Menu();
    init_i18n_svelte();
    Page3 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $LL, $$unsubscribe_LL;
      $$unsubscribe_LL = subscribe(LL, (value) => $LL = value);
      let { data } = $$props;
      const { article } = data;
      if ($$props.data === void 0 && $$bindings.data && data !== void 0)
        $$bindings.data(data);
      $$unsubscribe_LL();
      return `<div class="${"bg"}"><main class="${"main_inner"}"><!-- side_menu -->
        <nav class="${"side_menu slidable_on_mobile"}">${validate_component(Menu, "Menu").$$render($$result, {}, {}, {})}</nav>

        <!-- article -->
        <article class="${"contents"}"><h1>${escape(article == null ? void 0 : article.title)}</h1>
            <!-- HTML_TAG_START -->${article == null ? void 0 : article.content}<!-- HTML_TAG_END --></article></main></div>

${$$result.head += `<!-- HEAD_svelte-1d0wz4h_START -->${$$result.title = `<title>${escape(article == null ? void 0 : article.head_title)}</title>`, ""}<meta name="${"description"}"${add_attribute("content", $LL.articles["description"](), 0)}><meta name="${"keywords"}"${add_attribute("content", $LL.articles["keywords"](), 0)}><meta property="${"og:title"}"${add_attribute("content", article == null ? void 0 : article.head_title, 0)}><!-- HEAD_svelte-1d0wz4h_END -->`, ""}`;
    });
  }
});

// build/nodes/7.js
var __exports8 = {};
__export(__exports8, {
  component: () => component8,
  file: () => file8,
  fonts: () => fonts8,
  imports: () => imports8,
  index: () => index8,
  server: () => page_server_ts_exports2,
  server_id: () => server_id4,
  stylesheets: () => stylesheets8
});
var index8, component8, file8, server_id4, imports8, stylesheets8, fonts8;
var init__8 = __esm({
  "build/nodes/7.js"() {
    "use strict";
    init_shims();
    init_page_server_ts2();
    index8 = 7;
    component8 = async () => (await Promise.resolve().then(() => (init_page_svelte3(), page_svelte_exports3))).default;
    file8 = "_app/immutable/entry/_lang_lang_-(manual)-manual-_maindir_-_subdir_-page.svelte.bd89d92d.js";
    server_id4 = "src/routes/[lang=lang]/(manual)/manual/[maindir]/[subdir]/+page.server.ts";
    imports8 = ["_app/immutable/entry/_lang_lang_-(manual)-manual-_maindir_-_subdir_-page.svelte.bd89d92d.js", "_app/immutable/chunks/index.1abc9ca4.js", "_app/immutable/chunks/Menu.bf9262fe.js", "_app/immutable/chunks/i18n-svelte.02567117.js", "_app/immutable/chunks/index.58d4b228.js", "_app/immutable/chunks/i18n-util.b0b8c982.js", "_app/immutable/chunks/main.6ab22d63.js"];
    stylesheets8 = [];
    fonts8 = [];
  }
});

// build/entries/pages/_lang_lang_/(member)/member/_page.svelte.js
var page_svelte_exports4 = {};
__export(page_svelte_exports4, {
  default: () => Page4
});
var Page4;
var init_page_svelte4 = __esm({
  "build/entries/pages/_lang_lang_/(member)/member/_page.svelte.js"() {
    "use strict";
    init_shims();
    init_index2();
    Page4 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `<p>\u30E1\u30F3\u30D0\u30FC\u30B5\u30A4\u30C8\u4E88\u5B9A\u5730</p>`;
    });
  }
});

// build/nodes/8.js
var __exports9 = {};
__export(__exports9, {
  component: () => component9,
  file: () => file9,
  fonts: () => fonts9,
  imports: () => imports9,
  index: () => index9,
  stylesheets: () => stylesheets9
});
var index9, component9, file9, imports9, stylesheets9, fonts9;
var init__9 = __esm({
  "build/nodes/8.js"() {
    "use strict";
    init_shims();
    index9 = 8;
    component9 = async () => (await Promise.resolve().then(() => (init_page_svelte4(), page_svelte_exports4))).default;
    file9 = "_app/immutable/entry/_lang_lang_-(member)-member-page.svelte.df08f0c0.js";
    imports9 = ["_app/immutable/entry/_lang_lang_-(member)-member-page.svelte.df08f0c0.js", "_app/immutable/chunks/index.1abc9ca4.js"];
    stylesheets9 = [];
    fonts9 = [];
  }
});

// build/entries/pages/_lang_lang_/(officialsite)/_page.svelte.js
var page_svelte_exports5 = {};
__export(page_svelte_exports5, {
  default: () => Page5
});
var Page5;
var init_page_svelte5 = __esm({
  "build/entries/pages/_lang_lang_/(officialsite)/_page.svelte.js"() {
    "use strict";
    init_shims();
    init_index2();
    Page5 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `<p>\u516C\u5F0F\u30B5\u30A4\u30C8\u4E88\u5B9A\u5730</p>`;
    });
  }
});

// build/nodes/9.js
var __exports10 = {};
__export(__exports10, {
  component: () => component10,
  file: () => file10,
  fonts: () => fonts10,
  imports: () => imports10,
  index: () => index10,
  stylesheets: () => stylesheets10
});
var index10, component10, file10, imports10, stylesheets10, fonts10;
var init__10 = __esm({
  "build/nodes/9.js"() {
    "use strict";
    init_shims();
    index10 = 9;
    component10 = async () => (await Promise.resolve().then(() => (init_page_svelte5(), page_svelte_exports5))).default;
    file10 = "_app/immutable/entry/_lang_lang_-(officialsite)-page.svelte.b567c26f.js";
    imports10 = ["_app/immutable/entry/_lang_lang_-(officialsite)-page.svelte.b567c26f.js", "_app/immutable/chunks/index.1abc9ca4.js"];
    stylesheets10 = [];
    fonts10 = [];
  }
});

// build/entries/endpoints/api/email/_server.ts.js
var server_ts_exports = {};
__export(server_ts_exports, {
  POST: () => POST
});
var POST;
var init_server_ts = __esm({
  "build/entries/endpoints/api/email/_server.ts.js"() {
    "use strict";
    init_shims();
    init_chunks();
    POST = async (event) => {
      const data = await event.request.formData();
      const username = data.get("username");
      const email = data.get("email");
      console.log(username, email);
      return json({
        success: true
      });
    };
  }
});

// build/entries/matchers/lang.js
var lang_exports = {};
__export(lang_exports, {
  match: () => match
});
var match;
var init_lang = __esm({
  "build/entries/matchers/lang.js"() {
    "use strict";
    init_shims();
    init_i18n_util();
    match = (param) => {
      return isLocale(param);
    };
  }
});

// build/server/_index.js
var index_exports = {};
__export(index_exports, {
  handler: () => handler
});
module.exports = __toCommonJS(index_exports);
init_shims();
init_shims();

// build/index.js
init_shims();

// build/chunks/internal.js
init_shims();
init_index2();
var base = "";
var assets = base;
var initial = { base, assets };
function reset() {
  base = initial.base;
  assets = initial.assets;
}
var public_env = {};
function set_public_env(environment) {
  public_env = environment;
}
function afterUpdate() {
}
var Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { stores } = $$props;
  let { page: page2 } = $$props;
  let { constructors } = $$props;
  let { components = [] } = $$props;
  let { form } = $$props;
  let { data_0 = null } = $$props;
  let { data_1 = null } = $$props;
  let { data_2 = null } = $$props;
  {
    setContext("__svelte__", stores);
  }
  afterUpdate(stores.page.notify);
  if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0)
    $$bindings.stores(stores);
  if ($$props.page === void 0 && $$bindings.page && page2 !== void 0)
    $$bindings.page(page2);
  if ($$props.constructors === void 0 && $$bindings.constructors && constructors !== void 0)
    $$bindings.constructors(constructors);
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  if ($$props.data_0 === void 0 && $$bindings.data_0 && data_0 !== void 0)
    $$bindings.data_0(data_0);
  if ($$props.data_1 === void 0 && $$bindings.data_1 && data_1 !== void 0)
    $$bindings.data_1(data_1);
  if ($$props.data_2 === void 0 && $$bindings.data_2 && data_2 !== void 0)
    $$bindings.data_2(data_2);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      stores.page.set(page2);
    }
    $$rendered = `<!-- This file is generated by @sveltejs/kit \u2014 do not edit it! -->


${constructors[1] ? `${validate_component(constructors[0] || missing_component, "svelte:component").$$render(
      $$result,
      { data: data_0, this: components[0] },
      {
        this: ($$value) => {
          components[0] = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${constructors[2] ? `${validate_component(constructors[1] || missing_component, "svelte:component").$$render(
            $$result,
            { data: data_1, this: components[1] },
            {
              this: ($$value) => {
                components[1] = $$value;
                $$settled = false;
              }
            },
            {
              default: () => {
                return `${validate_component(constructors[2] || missing_component, "svelte:component").$$render(
                  $$result,
                  { data: data_2, form, this: components[2] },
                  {
                    this: ($$value) => {
                      components[2] = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}`;
              }
            }
          )}` : `${validate_component(constructors[1] || missing_component, "svelte:component").$$render(
            $$result,
            { data: data_1, form, this: components[1] },
            {
              this: ($$value) => {
                components[1] = $$value;
                $$settled = false;
              }
            },
            {}
          )}`}`;
        }
      }
    )}` : `${validate_component(constructors[0] || missing_component, "svelte:component").$$render(
      $$result,
      { data: data_0, form, this: components[0] },
      {
        this: ($$value) => {
          components[0] = $$value;
          $$settled = false;
        }
      },
      {}
    )}`}

${``}`;
  } while (!$$settled);
  return $$rendered;
});
var options = {
  app_template_contains_nonce: false,
  csp: { "mode": "auto", "directives": { "upgrade-insecure-requests": false, "block-all-mixed-content": false }, "reportOnly": { "upgrade-insecure-requests": false, "block-all-mixed-content": false } },
  csrf_check_origin: true,
  embedded: false,
  env_public_prefix: "PUBLIC_",
  hooks: null,
  // added lazily, via `get_hooks`
  preload_strategy: "modulepreload",
  root: Root,
  service_worker: false,
  templates: {
    app: ({ head, body, assets: assets2, nonce, env }) => '<!DOCTYPE html>\r\n\r\n<html lang="%lang%">\r\n    <head prefex="og: https://ogp.me/ns#">\r\n        <meta charset="UTF-8" />\r\n        ' + head + '\r\n    </head>\r\n\r\n    <body data-sveltekit-preload-data="hover">\r\n        <div class="wrapper">\r\n            ' + body + "\r\n        </div>\r\n    </body>\r\n</html>\r\n",
    error: ({ status, message }) => '<!DOCTYPE html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<title>' + message + `</title>

		<style>
			body {
				font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
					Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100vh;
			}

			.error {
				display: flex;
				align-items: center;
				max-width: 32rem;
				margin: 0 1rem;
			}

			.status {
				font-weight: 200;
				font-size: 3rem;
				line-height: 1;
				position: relative;
				top: -0.05rem;
			}

			.message {
				border-left: 1px solid #ccc;
				padding: 0 0 0 1rem;
				margin: 0 0 0 1rem;
				min-height: 2.5rem;
				display: flex;
				align-items: center;
			}

			.message h1 {
				font-weight: 400;
				font-size: 1em;
				margin: 0;
			}
		</style>
	</head>
	<body>
		<div class="error">
			<span class="status">` + status + '</span>\n			<div class="message">\n				<h1>' + message + "</h1>\n			</div>\n		</div>\n	</body>\n</html>\n"
  },
  version_hash: "1cqcei8"
};
function get_hooks() {
  return Promise.resolve().then(() => (init_hooks_server(), hooks_server_exports));
}

// build/index.js
init_chunks();

// node_modules/devalue/index.js
init_shims();

// node_modules/devalue/src/uneval.js
init_shims();

// node_modules/devalue/src/utils.js
init_shims();
var escaped = {
  "<": "\\u003C",
  ">": "\\u003E",
  "/": "\\u002F",
  "\\": "\\\\",
  "\b": "\\b",
  "\f": "\\f",
  "\n": "\\n",
  "\r": "\\r",
  "	": "\\t",
  "\0": "\\u0000",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var DevalueError = class extends Error {
  /**
   * @param {string} message
   * @param {string[]} keys
   */
  constructor(message, keys) {
    super(message);
    this.name = "DevalueError";
    this.path = keys.join("");
  }
};
function is_primitive(thing) {
  return Object(thing) !== thing;
}
var object_proto_names = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function is_plain_object(thing) {
  const proto = Object.getPrototypeOf(thing);
  return proto === Object.prototype || proto === null || Object.getOwnPropertyNames(proto).sort().join("\0") === object_proto_names;
}
function get_type(thing) {
  return Object.prototype.toString.call(thing).slice(8, -1);
}
function stringify_string(str) {
  let result = '"';
  for (let i3 = 0; i3 < str.length; i3 += 1) {
    const char = str.charAt(i3);
    const code = char.charCodeAt(0);
    if (char === '"') {
      result += '\\"';
    } else if (char in escaped) {
      result += escaped[char];
    } else if (code <= 31) {
      result += `\\u${code.toString(16).toUpperCase().padStart(4, "0")}`;
    } else if (code >= 55296 && code <= 57343) {
      const next = str.charCodeAt(i3 + 1);
      if (code <= 56319 && next >= 56320 && next <= 57343) {
        result += char + str[++i3];
      } else {
        result += `\\u${code.toString(16).toUpperCase()}`;
      }
    } else {
      result += char;
    }
  }
  result += '"';
  return result;
}

// node_modules/devalue/src/uneval.js
var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$";
var unsafe_chars = /[<>\b\f\n\r\t\0\u2028\u2029]/g;
var reserved = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
function uneval(value, replacer) {
  const counts = /* @__PURE__ */ new Map();
  const keys = [];
  const custom = /* @__PURE__ */ new Map();
  function walk(thing) {
    if (typeof thing === "function") {
      throw new DevalueError(`Cannot stringify a function`, keys);
    }
    if (!is_primitive(thing)) {
      if (counts.has(thing)) {
        counts.set(thing, counts.get(thing) + 1);
        return;
      }
      counts.set(thing, 1);
      if (replacer) {
        const str2 = replacer(thing);
        if (typeof str2 === "string") {
          custom.set(thing, str2);
          return;
        }
      }
      const type = get_type(thing);
      switch (type) {
        case "Number":
        case "BigInt":
        case "String":
        case "Boolean":
        case "Date":
        case "RegExp":
          return;
        case "Array":
          thing.forEach((value2, i3) => {
            keys.push(`[${i3}]`);
            walk(value2);
            keys.pop();
          });
          break;
        case "Set":
          Array.from(thing).forEach(walk);
          break;
        case "Map":
          for (const [key2, value2] of thing) {
            keys.push(
              `.get(${is_primitive(key2) ? stringify_primitive(key2) : "..."})`
            );
            walk(value2);
            keys.pop();
          }
          break;
        default:
          if (!is_plain_object(thing)) {
            throw new DevalueError(
              `Cannot stringify arbitrary non-POJOs`,
              keys
            );
          }
          if (Object.getOwnPropertySymbols(thing).length > 0) {
            throw new DevalueError(
              `Cannot stringify POJOs with symbolic keys`,
              keys
            );
          }
          for (const key2 in thing) {
            keys.push(`.${key2}`);
            walk(thing[key2]);
            keys.pop();
          }
      }
    }
  }
  walk(value);
  const names = /* @__PURE__ */ new Map();
  Array.from(counts).filter((entry) => entry[1] > 1).sort((a, b) => b[1] - a[1]).forEach((entry, i3) => {
    names.set(entry[0], get_name(i3));
  });
  function stringify2(thing) {
    if (names.has(thing)) {
      return names.get(thing);
    }
    if (is_primitive(thing)) {
      return stringify_primitive(thing);
    }
    if (custom.has(thing)) {
      return custom.get(thing);
    }
    const type = get_type(thing);
    switch (type) {
      case "Number":
      case "String":
      case "Boolean":
        return `Object(${stringify2(thing.valueOf())})`;
      case "RegExp":
        return `new RegExp(${stringify_string(thing.source)}, "${thing.flags}")`;
      case "Date":
        return `new Date(${thing.getTime()})`;
      case "Array":
        const members = (
          /** @type {any[]} */
          thing.map(
            (v, i3) => i3 in thing ? stringify2(v) : ""
          )
        );
        const tail = thing.length === 0 || thing.length - 1 in thing ? "" : ",";
        return `[${members.join(",")}${tail}]`;
      case "Set":
      case "Map":
        return `new ${type}([${Array.from(thing).map(stringify2).join(",")}])`;
      default:
        const obj = `{${Object.keys(thing).map((key2) => `${safe_key(key2)}:${stringify2(thing[key2])}`).join(",")}}`;
        const proto = Object.getPrototypeOf(thing);
        if (proto === null) {
          return Object.keys(thing).length > 0 ? `Object.assign(Object.create(null),${obj})` : `Object.create(null)`;
        }
        return obj;
    }
  }
  const str = stringify2(value);
  if (names.size) {
    const params = [];
    const statements = [];
    const values = [];
    names.forEach((name, thing) => {
      params.push(name);
      if (custom.has(thing)) {
        values.push(
          /** @type {string} */
          custom.get(thing)
        );
        return;
      }
      if (is_primitive(thing)) {
        values.push(stringify_primitive(thing));
        return;
      }
      const type = get_type(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
          values.push(`Object(${stringify2(thing.valueOf())})`);
          break;
        case "RegExp":
          values.push(thing.toString());
          break;
        case "Date":
          values.push(`new Date(${thing.getTime()})`);
          break;
        case "Array":
          values.push(`Array(${thing.length})`);
          thing.forEach((v, i3) => {
            statements.push(`${name}[${i3}]=${stringify2(v)}`);
          });
          break;
        case "Set":
          values.push(`new Set`);
          statements.push(
            `${name}.${Array.from(thing).map((v) => `add(${stringify2(v)})`).join(".")}`
          );
          break;
        case "Map":
          values.push(`new Map`);
          statements.push(
            `${name}.${Array.from(thing).map(([k, v]) => `set(${stringify2(k)}, ${stringify2(v)})`).join(".")}`
          );
          break;
        default:
          values.push(
            Object.getPrototypeOf(thing) === null ? "Object.create(null)" : "{}"
          );
          Object.keys(thing).forEach((key2) => {
            statements.push(
              `${name}${safe_prop(key2)}=${stringify2(thing[key2])}`
            );
          });
      }
    });
    statements.push(`return ${str}`);
    return `(function(${params.join(",")}){${statements.join(
      ";"
    )}}(${values.join(",")}))`;
  } else {
    return str;
  }
}
function get_name(num) {
  let name = "";
  do {
    name = chars[num % chars.length] + name;
    num = ~~(num / chars.length) - 1;
  } while (num >= 0);
  return reserved.test(name) ? `${name}0` : name;
}
function escape_unsafe_char(c) {
  return escaped[c] || c;
}
function escape_unsafe_chars(str) {
  return str.replace(unsafe_chars, escape_unsafe_char);
}
function safe_key(key2) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key2) ? key2 : escape_unsafe_chars(JSON.stringify(key2));
}
function safe_prop(key2) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key2) ? `.${key2}` : `[${escape_unsafe_chars(JSON.stringify(key2))}]`;
}
function stringify_primitive(thing) {
  if (typeof thing === "string")
    return stringify_string(thing);
  if (thing === void 0)
    return "void 0";
  if (thing === 0 && 1 / thing < 0)
    return "-0";
  const str = String(thing);
  if (typeof thing === "number")
    return str.replace(/^(-)?0\./, "$1.");
  if (typeof thing === "bigint")
    return thing + "n";
  return str;
}

// node_modules/devalue/src/parse.js
init_shims();

// node_modules/devalue/src/constants.js
init_shims();
var UNDEFINED = -1;
var HOLE = -2;
var NAN = -3;
var POSITIVE_INFINITY = -4;
var NEGATIVE_INFINITY = -5;
var NEGATIVE_ZERO = -6;

// node_modules/devalue/src/stringify.js
init_shims();
function stringify(value, reducers) {
  const stringified = [];
  const indexes = /* @__PURE__ */ new Map();
  const custom = [];
  for (const key2 in reducers) {
    custom.push({ key: key2, fn: reducers[key2] });
  }
  const keys = [];
  let p4 = 0;
  function flatten(thing) {
    if (typeof thing === "function") {
      throw new DevalueError(`Cannot stringify a function`, keys);
    }
    if (indexes.has(thing))
      return indexes.get(thing);
    if (thing === void 0)
      return UNDEFINED;
    if (Number.isNaN(thing))
      return NAN;
    if (thing === Infinity)
      return POSITIVE_INFINITY;
    if (thing === -Infinity)
      return NEGATIVE_INFINITY;
    if (thing === 0 && 1 / thing < 0)
      return NEGATIVE_ZERO;
    const index12 = p4++;
    indexes.set(thing, index12);
    for (const { key: key2, fn } of custom) {
      const value2 = fn(thing);
      if (value2) {
        stringified[index12] = `["${key2}",${flatten(value2)}]`;
        return index12;
      }
    }
    let str = "";
    if (is_primitive(thing)) {
      str = stringify_primitive2(thing);
    } else {
      const type = get_type(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
          str = `["Object",${stringify_primitive2(thing)}]`;
          break;
        case "BigInt":
          str = `["BigInt",${thing}]`;
          break;
        case "Date":
          str = `["Date","${thing.toISOString()}"]`;
          break;
        case "RegExp":
          const { source, flags } = thing;
          str = flags ? `["RegExp",${stringify_string(source)},"${flags}"]` : `["RegExp",${stringify_string(source)}]`;
          break;
        case "Array":
          str = "[";
          for (let i3 = 0; i3 < thing.length; i3 += 1) {
            if (i3 > 0)
              str += ",";
            if (i3 in thing) {
              keys.push(`[${i3}]`);
              str += flatten(thing[i3]);
              keys.pop();
            } else {
              str += HOLE;
            }
          }
          str += "]";
          break;
        case "Set":
          str = '["Set"';
          for (const value2 of thing) {
            str += `,${flatten(value2)}`;
          }
          str += "]";
          break;
        case "Map":
          str = '["Map"';
          for (const [key2, value2] of thing) {
            keys.push(
              `.get(${is_primitive(key2) ? stringify_primitive2(key2) : "..."})`
            );
            str += `,${flatten(key2)},${flatten(value2)}`;
          }
          str += "]";
          break;
        default:
          if (!is_plain_object(thing)) {
            throw new DevalueError(
              `Cannot stringify arbitrary non-POJOs`,
              keys
            );
          }
          if (Object.getOwnPropertySymbols(thing).length > 0) {
            throw new DevalueError(
              `Cannot stringify POJOs with symbolic keys`,
              keys
            );
          }
          if (Object.getPrototypeOf(thing) === null) {
            str = '["null"';
            for (const key2 in thing) {
              keys.push(`.${key2}`);
              str += `,${stringify_string(key2)},${flatten(thing[key2])}`;
              keys.pop();
            }
            str += "]";
          } else {
            str = "{";
            let started = false;
            for (const key2 in thing) {
              if (started)
                str += ",";
              started = true;
              keys.push(`.${key2}`);
              str += `${stringify_string(key2)}:${flatten(thing[key2])}`;
              keys.pop();
            }
            str += "}";
          }
      }
    }
    stringified[index12] = str;
    return index12;
  }
  const index11 = flatten(value);
  if (index11 < 0)
    return `${index11}`;
  return `[${stringified.join(",")}]`;
}
function stringify_primitive2(thing) {
  const type = typeof thing;
  if (type === "string")
    return stringify_string(thing);
  if (thing instanceof String)
    return stringify_string(thing.toString());
  if (thing === void 0)
    return UNDEFINED.toString();
  if (thing === 0 && 1 / thing < 0)
    return NEGATIVE_ZERO.toString();
  if (type === "bigint")
    return `["BigInt","${thing}"]`;
  return String(thing);
}

// build/index.js
init_index2();
var import_cookie = __toESM(require_cookie(), 1);
var set_cookie_parser = __toESM(require_set_cookie(), 1);
var DEV = false;
function negotiate(accept, types) {
  const parts = [];
  accept.split(",").forEach((str, i3) => {
    const match2 = /([^/]+)\/([^;]+)(?:;q=([0-9.]+))?/.exec(str);
    if (match2) {
      const [, type, subtype, q = "1"] = match2;
      parts.push({ type, subtype, q: +q, i: i3 });
    }
  });
  parts.sort((a, b) => {
    if (a.q !== b.q) {
      return b.q - a.q;
    }
    if (a.subtype === "*" !== (b.subtype === "*")) {
      return a.subtype === "*" ? 1 : -1;
    }
    if (a.type === "*" !== (b.type === "*")) {
      return a.type === "*" ? 1 : -1;
    }
    return a.i - b.i;
  });
  let accepted;
  let min_priority = Infinity;
  for (const mimetype of types) {
    const [type, subtype] = mimetype.split("/");
    const priority = parts.findIndex(
      (part) => (part.type === type || part.type === "*") && (part.subtype === subtype || part.subtype === "*")
    );
    if (priority !== -1 && priority < min_priority) {
      accepted = mimetype;
      min_priority = priority;
    }
  }
  return accepted;
}
function is_content_type(request, ...types) {
  var _a;
  const type = ((_a = request.headers.get("content-type")) == null ? void 0 : _a.split(";", 1)[0].trim()) ?? "";
  return types.includes(type);
}
function is_form_content_type(request) {
  return is_content_type(request, "application/x-www-form-urlencoded", "multipart/form-data");
}
function coalesce_to_error(err) {
  return err instanceof Error || err && /** @type {any} */
  err.name && /** @type {any} */
  err.message ? (
    /** @type {Error} */
    err
  ) : new Error(JSON.stringify(err));
}
function normalize_error(error2) {
  return (
    /** @type {Redirect | HttpError | Error} */
    error2
  );
}
function method_not_allowed(mod, method) {
  return text(`${method} method not allowed`, {
    status: 405,
    headers: {
      // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405
      // "The server must generate an Allow header field in a 405 status code response"
      allow: allowed_methods(mod).join(", ")
    }
  });
}
function allowed_methods(mod) {
  const allowed = [];
  for (const method in ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"]) {
    if (method in mod)
      allowed.push(method);
  }
  if (mod.GET || mod.HEAD)
    allowed.push("HEAD");
  return allowed;
}
function static_error_page(options2, status, message) {
  return text(options2.templates.error({ status, message }), {
    headers: { "content-type": "text/html; charset=utf-8" },
    status
  });
}
async function handle_fatal_error(event, options2, error2) {
  error2 = error2 instanceof HttpError ? error2 : coalesce_to_error(error2);
  const status = error2 instanceof HttpError ? error2.status : 500;
  const body = await handle_error_and_jsonify(event, options2, error2);
  const type = negotiate(event.request.headers.get("accept") || "text/html", [
    "application/json",
    "text/html"
  ]);
  if (event.isDataRequest || type === "application/json") {
    return json(body, {
      status
    });
  }
  return static_error_page(options2, status, body.message);
}
async function handle_error_and_jsonify(event, options2, error2) {
  if (error2 instanceof HttpError) {
    return error2.body;
  } else {
    return await options2.hooks.handleError({ error: error2, event }) ?? {
      message: event.route.id != null ? "Internal Error" : "Not Found"
    };
  }
}
function redirect_response(status, location2) {
  const response = new Response(void 0, {
    status,
    headers: { location: location2 }
  });
  return response;
}
function clarify_devalue_error(event, error2) {
  if (error2.path) {
    return `Data returned from \`load\` while rendering ${event.route.id} is not serializable: ${error2.message} (data${error2.path})`;
  }
  if (error2.path === "") {
    return `Data returned from \`load\` while rendering ${event.route.id} is not a plain object`;
  }
  return error2.message;
}
function stringify_uses(node) {
  var _a, _b, _c;
  const uses = [];
  if (node.uses && node.uses.dependencies.size > 0) {
    uses.push(`"dependencies":${JSON.stringify(Array.from(node.uses.dependencies))}`);
  }
  if (node.uses && node.uses.params.size > 0) {
    uses.push(`"params":${JSON.stringify(Array.from(node.uses.params))}`);
  }
  if ((_a = node.uses) == null ? void 0 : _a.parent)
    uses.push(`"parent":1`);
  if ((_b = node.uses) == null ? void 0 : _b.route)
    uses.push(`"route":1`);
  if ((_c = node.uses) == null ? void 0 : _c.url)
    uses.push(`"url":1`);
  return `"uses":{${uses.join(",")}}`;
}
async function render_endpoint(event, mod, state) {
  const method = (
    /** @type {import('types').HttpMethod} */
    event.request.method
  );
  let handler2 = mod[method];
  if (!handler2 && method === "HEAD") {
    handler2 = mod.GET;
  }
  if (!handler2) {
    return method_not_allowed(mod, method);
  }
  const prerender = mod.prerender ?? state.prerender_default;
  if (prerender && (mod.POST || mod.PATCH || mod.PUT || mod.DELETE)) {
    throw new Error("Cannot prerender endpoints that have mutative methods");
  }
  if (state.prerendering && !prerender) {
    if (state.depth > 0) {
      throw new Error(`${event.route.id} is not prerenderable`);
    } else {
      return new Response(void 0, { status: 204 });
    }
  }
  try {
    const response = await handler2(
      /** @type {import('types').RequestEvent<Record<string, any>>} */
      event
    );
    if (!(response instanceof Response)) {
      throw new Error(
        `Invalid response from route ${event.url.pathname}: handler should return a Response object`
      );
    }
    if (state.prerendering) {
      response.headers.set("x-sveltekit-prerender", String(prerender));
    }
    return response;
  } catch (e3) {
    if (e3 instanceof Redirect) {
      return new Response(void 0, {
        status: e3.status,
        headers: { location: e3.location }
      });
    }
    throw e3;
  }
}
function is_endpoint_request(event) {
  const { method, headers } = event.request;
  if (method === "PUT" || method === "PATCH" || method === "DELETE" || method === "OPTIONS") {
    return true;
  }
  if (method === "POST" && headers.get("x-sveltekit-action") === "true")
    return false;
  const accept = event.request.headers.get("accept") ?? "*/*";
  return negotiate(accept, ["*", "text/html"]) !== "text/html";
}
function compact(arr) {
  return arr.filter(
    /** @returns {val is NonNullable<T>} */
    (val) => val != null
  );
}
function normalize_path(path, trailing_slash) {
  if (path === "/" || trailing_slash === "ignore")
    return path;
  if (trailing_slash === "never") {
    return path.endsWith("/") ? path.slice(0, -1) : path;
  } else if (trailing_slash === "always" && !path.endsWith("/")) {
    return path + "/";
  }
  return path;
}
function decode_pathname(pathname) {
  return pathname.split("%25").map(decodeURI).join("%25");
}
function decode_params(params) {
  for (const key2 in params) {
    params[key2] = decodeURIComponent(params[key2]);
  }
  return params;
}
var tracked_url_properties = ["href", "pathname", "search", "searchParams", "toString", "toJSON"];
function make_trackable(url, callback) {
  const tracked = new URL(url);
  for (const property of tracked_url_properties) {
    let value = tracked[property];
    Object.defineProperty(tracked, property, {
      get() {
        callback();
        return value;
      },
      enumerable: true,
      configurable: true
    });
  }
  {
    tracked[Symbol.for("nodejs.util.inspect.custom")] = (depth, opts, inspect) => {
      return inspect(url, opts);
    };
  }
  disable_hash(tracked);
  return tracked;
}
function disable_hash(url) {
  Object.defineProperty(url, "hash", {
    get() {
      throw new Error(
        "Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead"
      );
    }
  });
}
function disable_search(url) {
  for (const property of ["search", "searchParams"]) {
    Object.defineProperty(url, property, {
      get() {
        throw new Error(`Cannot access url.${property} on a page with prerendering enabled`);
      }
    });
  }
}
var DATA_SUFFIX = "/__data.json";
function has_data_suffix(pathname) {
  return pathname.endsWith(DATA_SUFFIX);
}
function add_data_suffix(pathname) {
  return pathname.replace(/\/$/, "") + DATA_SUFFIX;
}
function strip_data_suffix(pathname) {
  return pathname.slice(0, -DATA_SUFFIX.length);
}
function is_action_json_request(event) {
  const accept = negotiate(event.request.headers.get("accept") ?? "*/*", [
    "application/json",
    "text/html"
  ]);
  return accept === "application/json" && event.request.method === "POST";
}
async function handle_action_json_request(event, options2, server2) {
  const actions = server2 == null ? void 0 : server2.actions;
  if (!actions) {
    const no_actions_error = error(405, "POST method not allowed. No actions exist for this page");
    return action_json(
      {
        type: "error",
        error: await handle_error_and_jsonify(event, options2, no_actions_error)
      },
      {
        status: no_actions_error.status,
        headers: {
          // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405
          // "The server must generate an Allow header field in a 405 status code response"
          allow: "GET"
        }
      }
    );
  }
  check_named_default_separate(actions);
  try {
    const data = await call_action(event, actions);
    if (false)
      ;
    if (data instanceof ActionFailure) {
      return action_json({
        type: "failure",
        status: data.status,
        // @ts-expect-error we assign a string to what is supposed to be an object. That's ok
        // because we don't use the object outside, and this way we have better code navigation
        // through knowing where the related interface is used.
        data: stringify_action_response(
          data.data,
          /** @type {string} */
          event.route.id
        )
      });
    } else {
      return action_json({
        type: "success",
        status: data ? 200 : 204,
        // @ts-expect-error see comment above
        data: stringify_action_response(
          data,
          /** @type {string} */
          event.route.id
        )
      });
    }
  } catch (e3) {
    const err = normalize_error(e3);
    if (err instanceof Redirect) {
      return action_json({
        type: "redirect",
        status: err.status,
        location: err.location
      });
    }
    return action_json(
      {
        type: "error",
        error: await handle_error_and_jsonify(event, options2, check_incorrect_fail_use(err))
      },
      {
        status: err instanceof HttpError ? err.status : 500
      }
    );
  }
}
function check_incorrect_fail_use(error2) {
  return error2 instanceof ActionFailure ? new Error(`Cannot "throw fail()". Use "return fail()"`) : error2;
}
function action_json(data, init22) {
  return json(data, init22);
}
function is_action_request(event) {
  return event.request.method === "POST";
}
async function handle_action_request(event, server2) {
  const actions = server2 == null ? void 0 : server2.actions;
  if (!actions) {
    event.setHeaders({
      // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405
      // "The server must generate an Allow header field in a 405 status code response"
      allow: "GET"
    });
    return {
      type: "error",
      error: error(405, "POST method not allowed. No actions exist for this page")
    };
  }
  check_named_default_separate(actions);
  try {
    const data = await call_action(event, actions);
    if (false)
      ;
    if (data instanceof ActionFailure) {
      return {
        type: "failure",
        status: data.status,
        data: data.data
      };
    } else {
      return {
        type: "success",
        status: 200,
        // @ts-expect-error this will be removed upon serialization, so `undefined` is the same as omission
        data
      };
    }
  } catch (e3) {
    const err = normalize_error(e3);
    if (err instanceof Redirect) {
      return {
        type: "redirect",
        status: err.status,
        location: err.location
      };
    }
    return {
      type: "error",
      error: check_incorrect_fail_use(err)
    };
  }
}
function check_named_default_separate(actions) {
  if (actions.default && Object.keys(actions).length > 1) {
    throw new Error(
      `When using named actions, the default action cannot be used. See the docs for more info: https://kit.svelte.dev/docs/form-actions#named-actions`
    );
  }
}
async function call_action(event, actions) {
  const url = new URL(event.request.url);
  let name = "default";
  for (const param of url.searchParams) {
    if (param[0].startsWith("/")) {
      name = param[0].slice(1);
      if (name === "default") {
        throw new Error('Cannot use reserved action name "default"');
      }
      break;
    }
  }
  const action = actions[name];
  if (!action) {
    throw new Error(`No action with name '${name}' found`);
  }
  if (!is_form_content_type(event.request)) {
    throw new Error(
      `Actions expect form-encoded data (received ${event.request.headers.get("content-type")}`
    );
  }
  return action(event);
}
function uneval_action_response(data, route_id) {
  return try_deserialize(data, uneval, route_id);
}
function stringify_action_response(data, route_id) {
  return try_deserialize(data, stringify, route_id);
}
function try_deserialize(data, fn, route_id) {
  try {
    return fn(data);
  } catch (e3) {
    const error2 = (
      /** @type {any} */
      e3
    );
    if ("path" in error2) {
      let message = `Data returned from action inside ${route_id} is not serializable: ${error2.message}`;
      if (error2.path !== "")
        message += ` (data.${error2.path})`;
      throw new Error(message);
    }
    throw error2;
  }
}
async function unwrap_promises(object) {
  var _a;
  for (const key2 in object) {
    if (typeof ((_a = object[key2]) == null ? void 0 : _a.then) === "function") {
      return Object.fromEntries(
        await Promise.all(Object.entries(object).map(async ([key3, value]) => [key3, await value]))
      );
    }
  }
  return object;
}
async function load_server_data({ event, state, node, parent }) {
  var _a;
  if (!(node == null ? void 0 : node.server))
    return null;
  const uses = {
    dependencies: /* @__PURE__ */ new Set(),
    params: /* @__PURE__ */ new Set(),
    parent: false,
    route: false,
    url: false
  };
  const url = make_trackable(event.url, () => {
    uses.url = true;
  });
  if (state.prerendering) {
    disable_search(url);
  }
  const result = await ((_a = node.server.load) == null ? void 0 : _a.call(null, {
    ...event,
    fetch: (info, init22) => {
      const url2 = new URL(info instanceof Request ? info.url : info, event.url);
      uses.dependencies.add(url2.href);
      return event.fetch(info, init22);
    },
    /** @param {string[]} deps */
    depends: (...deps) => {
      for (const dep of deps) {
        const { href } = new URL(dep, event.url);
        uses.dependencies.add(href);
      }
    },
    params: new Proxy(event.params, {
      get: (target, key2) => {
        uses.params.add(key2);
        return target[
          /** @type {string} */
          key2
        ];
      }
    }),
    parent: async () => {
      uses.parent = true;
      return parent();
    },
    route: new Proxy(event.route, {
      get: (target, key2) => {
        uses.route = true;
        return target[
          /** @type {'id'} */
          key2
        ];
      }
    }),
    url
  }));
  const data = result ? await unwrap_promises(result) : null;
  return {
    type: "data",
    data,
    uses,
    slash: node.server.trailingSlash
  };
}
async function load_data({
  event,
  fetched,
  node,
  parent,
  server_data_promise,
  state,
  resolve_opts,
  csr
}) {
  var _a;
  const server_data_node = await server_data_promise;
  if (!((_a = node == null ? void 0 : node.universal) == null ? void 0 : _a.load)) {
    return (server_data_node == null ? void 0 : server_data_node.data) ?? null;
  }
  const result = await node.universal.load.call(null, {
    url: event.url,
    params: event.params,
    data: (server_data_node == null ? void 0 : server_data_node.data) ?? null,
    route: event.route,
    fetch: create_universal_fetch(event, state, fetched, csr, resolve_opts),
    setHeaders: event.setHeaders,
    depends: () => {
    },
    parent
  });
  const data = result ? await unwrap_promises(result) : null;
  return data;
}
function create_universal_fetch(event, state, fetched, csr, resolve_opts) {
  return async (input, init22) => {
    const cloned_body = input instanceof Request && input.body ? input.clone().body : null;
    let response = await event.fetch(input, init22);
    const url = new URL(input instanceof Request ? input.url : input, event.url);
    const same_origin = url.origin === event.url.origin;
    let dependency;
    if (same_origin) {
      if (state.prerendering) {
        dependency = { response, body: null };
        state.prerendering.dependencies.set(url.pathname, dependency);
      }
    } else {
      const mode = input instanceof Request ? input.mode : (init22 == null ? void 0 : init22.mode) ?? "cors";
      if (mode === "no-cors") {
        response = new Response("", {
          status: response.status,
          statusText: response.statusText,
          headers: response.headers
        });
      } else {
        const acao = response.headers.get("access-control-allow-origin");
        if (!acao || acao !== event.url.origin && acao !== "*") {
          throw new Error(
            `CORS error: ${acao ? "Incorrect" : "No"} 'Access-Control-Allow-Origin' header is present on the requested resource`
          );
        }
      }
    }
    const proxy = new Proxy(response, {
      get(response2, key2, _receiver) {
        async function text2() {
          const body = await response2.text();
          if (!body || typeof body === "string") {
            const status_number = Number(response2.status);
            if (isNaN(status_number)) {
              throw new Error(
                `response.status is not a number. value: "${response2.status}" type: ${typeof response2.status}`
              );
            }
            fetched.push({
              url: same_origin ? url.href.slice(event.url.origin.length) : url.href,
              method: event.request.method,
              request_body: (
                /** @type {string | ArrayBufferView | undefined} */
                input instanceof Request && cloned_body ? await stream_to_string(cloned_body) : init22 == null ? void 0 : init22.body
              ),
              request_headers: init22 == null ? void 0 : init22.headers,
              response_body: body,
              response: response2
            });
          }
          if (dependency) {
            dependency.body = body;
          }
          return body;
        }
        if (key2 === "arrayBuffer") {
          return async () => {
            const buffer2 = await response2.arrayBuffer();
            if (dependency) {
              dependency.body = new Uint8Array(buffer2);
            }
            return buffer2;
          };
        }
        if (key2 === "text") {
          return text2;
        }
        if (key2 === "json") {
          return async () => {
            return JSON.parse(await text2());
          };
        }
        return Reflect.get(response2, key2, response2);
      }
    });
    if (csr) {
      const get = response.headers.get;
      response.headers.get = (key2) => {
        const lower = key2.toLowerCase();
        const value = get.call(response.headers, lower);
        if (value && !lower.startsWith("x-sveltekit-")) {
          const included = resolve_opts.filterSerializedResponseHeaders(lower, value);
          if (!included) {
            throw new Error(
              `Failed to get response header "${lower}" \u2014 it must be included by the \`filterSerializedResponseHeaders\` option: https://kit.svelte.dev/docs/hooks#server-hooks-handle (at ${event.route.id})`
            );
          }
        }
        return value;
      };
    }
    return proxy;
  };
}
async function stream_to_string(stream) {
  let result = "";
  const reader = stream.getReader();
  const decoder = new TextDecoder();
  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }
    result += decoder.decode(value);
  }
  return result;
}
var subscriber_queue = [];
function readable(value, start2) {
  return {
    subscribe: writable(value, start2).subscribe
  };
}
function writable(value, start2 = noop) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i3 = 0; i3 < subscriber_queue.length; i3 += 2) {
            subscriber_queue[i3][0](subscriber_queue[i3 + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe3(run3, invalidate = noop) {
    const subscriber = [run3, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start2(set) || noop;
    }
    run3(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe3 };
}
function hash(...values) {
  let hash2 = 5381;
  for (const value of values) {
    if (typeof value === "string") {
      let i3 = value.length;
      while (i3)
        hash2 = hash2 * 33 ^ value.charCodeAt(--i3);
    } else if (ArrayBuffer.isView(value)) {
      const buffer2 = new Uint8Array(value.buffer, value.byteOffset, value.byteLength);
      let i3 = buffer2.length;
      while (i3)
        hash2 = hash2 * 33 ^ buffer2[--i3];
    } else {
      throw new TypeError("value must be a string or TypedArray");
    }
  }
  return (hash2 >>> 0).toString(36);
}
var escape_html_attr_dict = {
  "&": "&amp;",
  '"': "&quot;"
};
var escape_html_attr_regex = new RegExp(
  // special characters
  `[${Object.keys(escape_html_attr_dict).join("")}]|[\\ud800-\\udbff](?![\\udc00-\\udfff])|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\udc00-\\udfff]`,
  "g"
);
function escape_html_attr(str) {
  const escaped_str = str.replace(escape_html_attr_regex, (match2) => {
    if (match2.length === 2) {
      return match2;
    }
    return escape_html_attr_dict[match2] ?? `&#${match2.charCodeAt(0)};`;
  });
  return `"${escaped_str}"`;
}
var replacements = {
  "<": "\\u003C",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var pattern = new RegExp(`[${Object.keys(replacements).join("")}]`, "g");
function serialize_data(fetched, filter, prerendering = false) {
  const headers = {};
  let cache_control = null;
  let age = null;
  let vary = false;
  for (const [key2, value] of fetched.response.headers) {
    if (filter(key2, value)) {
      headers[key2] = value;
    }
    if (key2 === "cache-control")
      cache_control = value;
    if (key2 === "age")
      age = value;
    if (key2 === "vary")
      vary = true;
  }
  const payload = {
    status: fetched.response.status,
    statusText: fetched.response.statusText,
    headers,
    body: fetched.response_body
  };
  const safe_payload = JSON.stringify(payload).replace(pattern, (match2) => replacements[match2]);
  const attrs = [
    'type="application/json"',
    "data-sveltekit-fetched",
    `data-url=${escape_html_attr(fetched.url)}`
  ];
  if (fetched.request_headers || fetched.request_body) {
    const values = [];
    if (fetched.request_headers) {
      values.push([...new Headers(fetched.request_headers)].join(","));
    }
    if (fetched.request_body) {
      values.push(fetched.request_body);
    }
    attrs.push(`data-hash="${hash(...values)}"`);
  }
  if (!prerendering && fetched.method === "GET" && cache_control && !vary) {
    const match2 = /s-maxage=(\d+)/g.exec(cache_control) ?? /max-age=(\d+)/g.exec(cache_control);
    if (match2) {
      const ttl = +match2[1] - +(age ?? "0");
      attrs.push(`data-ttl="${ttl}"`);
    }
  }
  return `<script ${attrs.join(" ")}>${safe_payload}</script>`;
}
var s4 = JSON.stringify;
var encoder$2 = new TextEncoder();
function sha256(data) {
  if (!key[0])
    precompute();
  const out = init.slice(0);
  const array2 = encode(data);
  for (let i3 = 0; i3 < array2.length; i3 += 16) {
    const w = array2.subarray(i3, i3 + 16);
    let tmp;
    let a;
    let b;
    let out0 = out[0];
    let out1 = out[1];
    let out2 = out[2];
    let out3 = out[3];
    let out4 = out[4];
    let out5 = out[5];
    let out6 = out[6];
    let out7 = out[7];
    for (let i22 = 0; i22 < 64; i22++) {
      if (i22 < 16) {
        tmp = w[i22];
      } else {
        a = w[i22 + 1 & 15];
        b = w[i22 + 14 & 15];
        tmp = w[i22 & 15] = (a >>> 7 ^ a >>> 18 ^ a >>> 3 ^ a << 25 ^ a << 14) + (b >>> 17 ^ b >>> 19 ^ b >>> 10 ^ b << 15 ^ b << 13) + w[i22 & 15] + w[i22 + 9 & 15] | 0;
      }
      tmp = tmp + out7 + (out4 >>> 6 ^ out4 >>> 11 ^ out4 >>> 25 ^ out4 << 26 ^ out4 << 21 ^ out4 << 7) + (out6 ^ out4 & (out5 ^ out6)) + key[i22];
      out7 = out6;
      out6 = out5;
      out5 = out4;
      out4 = out3 + tmp | 0;
      out3 = out2;
      out2 = out1;
      out1 = out0;
      out0 = tmp + (out1 & out2 ^ out3 & (out1 ^ out2)) + (out1 >>> 2 ^ out1 >>> 13 ^ out1 >>> 22 ^ out1 << 30 ^ out1 << 19 ^ out1 << 10) | 0;
    }
    out[0] = out[0] + out0 | 0;
    out[1] = out[1] + out1 | 0;
    out[2] = out[2] + out2 | 0;
    out[3] = out[3] + out3 | 0;
    out[4] = out[4] + out4 | 0;
    out[5] = out[5] + out5 | 0;
    out[6] = out[6] + out6 | 0;
    out[7] = out[7] + out7 | 0;
  }
  const bytes = new Uint8Array(out.buffer);
  reverse_endianness(bytes);
  return base64(bytes);
}
var init = new Uint32Array(8);
var key = new Uint32Array(64);
function precompute() {
  function frac(x) {
    return (x - Math.floor(x)) * 4294967296;
  }
  let prime = 2;
  for (let i3 = 0; i3 < 64; prime++) {
    let is_prime = true;
    for (let factor = 2; factor * factor <= prime; factor++) {
      if (prime % factor === 0) {
        is_prime = false;
        break;
      }
    }
    if (is_prime) {
      if (i3 < 8) {
        init[i3] = frac(prime ** (1 / 2));
      }
      key[i3] = frac(prime ** (1 / 3));
      i3++;
    }
  }
}
function reverse_endianness(bytes) {
  for (let i3 = 0; i3 < bytes.length; i3 += 4) {
    const a = bytes[i3 + 0];
    const b = bytes[i3 + 1];
    const c = bytes[i3 + 2];
    const d = bytes[i3 + 3];
    bytes[i3 + 0] = d;
    bytes[i3 + 1] = c;
    bytes[i3 + 2] = b;
    bytes[i3 + 3] = a;
  }
}
function encode(str) {
  const encoded = encoder$2.encode(str);
  const length = encoded.length * 8;
  const size = 512 * Math.ceil((length + 65) / 512);
  const bytes = new Uint8Array(size / 8);
  bytes.set(encoded);
  bytes[encoded.length] = 128;
  reverse_endianness(bytes);
  const words = new Uint32Array(bytes.buffer);
  words[words.length - 2] = Math.floor(length / 4294967296);
  words[words.length - 1] = length;
  return words;
}
var chars2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
function base64(bytes) {
  const l2 = bytes.length;
  let result = "";
  let i3;
  for (i3 = 2; i3 < l2; i3 += 3) {
    result += chars2[bytes[i3 - 2] >> 2];
    result += chars2[(bytes[i3 - 2] & 3) << 4 | bytes[i3 - 1] >> 4];
    result += chars2[(bytes[i3 - 1] & 15) << 2 | bytes[i3] >> 6];
    result += chars2[bytes[i3] & 63];
  }
  if (i3 === l2 + 1) {
    result += chars2[bytes[i3 - 2] >> 2];
    result += chars2[(bytes[i3 - 2] & 3) << 4];
    result += "==";
  }
  if (i3 === l2) {
    result += chars2[bytes[i3 - 2] >> 2];
    result += chars2[(bytes[i3 - 2] & 3) << 4 | bytes[i3 - 1] >> 4];
    result += chars2[(bytes[i3 - 1] & 15) << 2];
    result += "=";
  }
  return result;
}
var array = new Uint8Array(16);
function generate_nonce() {
  crypto.getRandomValues(array);
  return base64(array);
}
var quoted = /* @__PURE__ */ new Set([
  "self",
  "unsafe-eval",
  "unsafe-hashes",
  "unsafe-inline",
  "none",
  "strict-dynamic",
  "report-sample",
  "wasm-unsafe-eval",
  "script"
]);
var crypto_pattern = /^(nonce|sha\d\d\d)-/;
var BaseProvider = class {
  /** @type {boolean} */
  #use_hashes;
  /** @type {boolean} */
  #script_needs_csp;
  /** @type {boolean} */
  #style_needs_csp;
  /** @type {import('types').CspDirectives} */
  #directives;
  /** @type {import('types').Csp.Source[]} */
  #script_src;
  /** @type {import('types').Csp.Source[]} */
  #style_src;
  /** @type {string} */
  #nonce;
  /**
   * @param {boolean} use_hashes
   * @param {import('types').CspDirectives} directives
   * @param {string} nonce
   */
  constructor(use_hashes, directives, nonce) {
    this.#use_hashes = use_hashes;
    this.#directives = directives;
    const d = this.#directives;
    this.#script_src = [];
    this.#style_src = [];
    const effective_script_src = d["script-src"] || d["default-src"];
    const effective_style_src = d["style-src"] || d["default-src"];
    this.#script_needs_csp = !!effective_script_src && effective_script_src.filter((value) => value !== "unsafe-inline").length > 0;
    this.#style_needs_csp = !!effective_style_src && effective_style_src.filter((value) => value !== "unsafe-inline").length > 0;
    this.script_needs_nonce = this.#script_needs_csp && !this.#use_hashes;
    this.style_needs_nonce = this.#style_needs_csp && !this.#use_hashes;
    this.#nonce = nonce;
  }
  /** @param {string} content */
  add_script(content) {
    if (this.#script_needs_csp) {
      if (this.#use_hashes) {
        this.#script_src.push(`sha256-${sha256(content)}`);
      } else if (this.#script_src.length === 0) {
        this.#script_src.push(`nonce-${this.#nonce}`);
      }
    }
  }
  /** @param {string} content */
  add_style(content) {
    if (this.#style_needs_csp) {
      if (this.#use_hashes) {
        this.#style_src.push(`sha256-${sha256(content)}`);
      } else if (this.#style_src.length === 0) {
        this.#style_src.push(`nonce-${this.#nonce}`);
      }
    }
  }
  /**
   * @param {boolean} [is_meta]
   */
  get_header(is_meta = false) {
    const header = [];
    const directives = { ...this.#directives };
    if (this.#style_src.length > 0) {
      directives["style-src"] = [
        ...directives["style-src"] || directives["default-src"] || [],
        ...this.#style_src
      ];
    }
    if (this.#script_src.length > 0) {
      directives["script-src"] = [
        ...directives["script-src"] || directives["default-src"] || [],
        ...this.#script_src
      ];
    }
    for (const key2 in directives) {
      if (is_meta && (key2 === "frame-ancestors" || key2 === "report-uri" || key2 === "sandbox")) {
        continue;
      }
      const value = (
        /** @type {string[] | true} */
        directives[key2]
      );
      if (!value)
        continue;
      const directive = [key2];
      if (Array.isArray(value)) {
        value.forEach((value2) => {
          if (quoted.has(value2) || crypto_pattern.test(value2)) {
            directive.push(`'${value2}'`);
          } else {
            directive.push(value2);
          }
        });
      }
      header.push(directive.join(" "));
    }
    return header.join("; ");
  }
};
var CspProvider = class extends BaseProvider {
  get_meta() {
    const content = escape_html_attr(this.get_header(true));
    return `<meta http-equiv="content-security-policy" content=${content}>`;
  }
};
var CspReportOnlyProvider = class extends BaseProvider {
  /**
   * @param {boolean} use_hashes
   * @param {import('types').CspDirectives} directives
   * @param {string} nonce
   */
  constructor(use_hashes, directives, nonce) {
    var _a, _b;
    super(use_hashes, directives, nonce);
    if (Object.values(directives).filter((v) => !!v).length > 0) {
      const has_report_to = ((_a = directives["report-to"]) == null ? void 0 : _a.length) ?? 0 > 0;
      const has_report_uri = ((_b = directives["report-uri"]) == null ? void 0 : _b.length) ?? 0 > 0;
      if (!has_report_to && !has_report_uri) {
        throw Error(
          "`content-security-policy-report-only` must be specified with either the `report-to` or `report-uri` directives, or both"
        );
      }
    }
  }
};
var Csp = class {
  /** @readonly */
  nonce = generate_nonce();
  /** @type {CspProvider} */
  csp_provider;
  /** @type {CspReportOnlyProvider} */
  report_only_provider;
  /**
   * @param {import('./types').CspConfig} config
   * @param {import('./types').CspOpts} opts
   */
  constructor({ mode, directives, reportOnly }, { prerender }) {
    const use_hashes = mode === "hash" || mode === "auto" && prerender;
    this.csp_provider = new CspProvider(use_hashes, directives, this.nonce);
    this.report_only_provider = new CspReportOnlyProvider(use_hashes, reportOnly, this.nonce);
  }
  get script_needs_nonce() {
    return this.csp_provider.script_needs_nonce || this.report_only_provider.script_needs_nonce;
  }
  get style_needs_nonce() {
    return this.csp_provider.style_needs_nonce || this.report_only_provider.style_needs_nonce;
  }
  /** @param {string} content */
  add_script(content) {
    this.csp_provider.add_script(content);
    this.report_only_provider.add_script(content);
  }
  /** @param {string} content */
  add_style(content) {
    this.csp_provider.add_style(content);
    this.report_only_provider.add_style(content);
  }
};
function defer() {
  let fulfil;
  let reject;
  const promise = new Promise((f, r2) => {
    fulfil = f;
    reject = r2;
  });
  return { promise, fulfil, reject };
}
function create_async_iterator() {
  let deferred = defer();
  return {
    iterator: {
      [Symbol.asyncIterator]() {
        return {
          next: () => deferred.promise
        };
      }
    },
    push: (value) => {
      deferred.fulfil({ value, done: false });
      deferred = defer();
    },
    done: () => {
      deferred.fulfil({ done: true });
    }
  };
}
var SVELTE_KIT_ASSETS = "/_svelte_kit_assets";
var updated = {
  ...readable(false),
  check: () => false
};
var encoder$1 = new TextEncoder();
async function render_response({
  branch,
  fetched,
  options: options2,
  manifest: manifest2,
  state,
  page_config,
  status,
  error: error2 = null,
  event,
  resolve_opts,
  action_result
}) {
  var _a;
  if (state.prerendering) {
    if (options2.csp.mode === "nonce") {
      throw new Error('Cannot use prerendering if config.kit.csp.mode === "nonce"');
    }
    if (options2.app_template_contains_nonce) {
      throw new Error("Cannot use prerendering if page template contains %sveltekit.nonce%");
    }
  }
  const { client } = manifest2._;
  const modulepreloads = /* @__PURE__ */ new Set([...client.start.imports, ...client.app.imports]);
  const stylesheets11 = new Set(client.app.stylesheets);
  const fonts11 = new Set(client.app.fonts);
  const link_header_preloads = /* @__PURE__ */ new Set();
  const inline_styles = /* @__PURE__ */ new Map();
  let rendered;
  const form_value = (action_result == null ? void 0 : action_result.type) === "success" || (action_result == null ? void 0 : action_result.type) === "failure" ? action_result.data ?? null : null;
  let base$1 = base;
  let assets$1 = assets;
  let base_expression = s4(base);
  if (!((_a = state.prerendering) == null ? void 0 : _a.fallback)) {
    const segments = event.url.pathname.slice(base.length).split("/");
    if (segments.length === 1 && base !== "") {
      base$1 = `./${base.split("/").at(-1)}`;
      base_expression = `new URL(${s4(base$1)}, location).pathname`;
    } else {
      base$1 = segments.slice(2).map(() => "..").join("/") || ".";
      base_expression = `new URL(${s4(base$1)}, location).pathname.slice(0, -1)`;
    }
    if (!assets || assets[0] === "/" && assets !== SVELTE_KIT_ASSETS) {
      assets$1 = base$1;
    }
  }
  if (page_config.ssr) {
    const props = {
      stores: {
        page: writable(null),
        navigating: writable(null),
        updated
      },
      constructors: await Promise.all(branch.map(({ node }) => node.component())),
      form: form_value
    };
    let data2 = {};
    for (let i3 = 0; i3 < branch.length; i3 += 1) {
      data2 = { ...data2, ...branch[i3].data };
      props[`data_${i3}`] = data2;
    }
    props.page = {
      error: error2,
      params: (
        /** @type {Record<string, any>} */
        event.params
      ),
      route: event.route,
      status,
      url: event.url,
      data: data2,
      form: form_value
    };
    {
      try {
        rendered = options2.root.render(props);
      } finally {
        reset();
      }
    }
    for (const { node } of branch) {
      for (const url of node.imports)
        modulepreloads.add(url);
      for (const url of node.stylesheets)
        stylesheets11.add(url);
      for (const url of node.fonts)
        fonts11.add(url);
      if (node.inline_styles) {
        Object.entries(await node.inline_styles()).forEach(([k, v]) => inline_styles.set(k, v));
      }
    }
  } else {
    rendered = { head: "", html: "", css: { code: "", map: null } };
  }
  let head = "";
  let body = rendered.html;
  const csp = new Csp(options2.csp, {
    prerender: !!state.prerendering
  });
  const prefixed = (path) => {
    if (path.startsWith("/")) {
      return base + path;
    }
    return `${assets$1}/${path}`;
  };
  if (inline_styles.size > 0) {
    const content = Array.from(inline_styles.values()).join("\n");
    const attributes = [];
    if (csp.style_needs_nonce)
      attributes.push(` nonce="${csp.nonce}"`);
    csp.add_style(content);
    head += `
	<style${attributes.join("")}>${content}</style>`;
  }
  for (const dep of stylesheets11) {
    const path = prefixed(dep);
    const attributes = ['rel="stylesheet"'];
    if (inline_styles.has(dep)) {
      attributes.push("disabled", 'media="(max-width: 0)"');
    } else {
      if (resolve_opts.preload({ type: "css", path })) {
        const preload_atts = ['rel="preload"', 'as="style"'];
        link_header_preloads.add(`<${encodeURI(path)}>; ${preload_atts.join(";")}; nopush`);
      }
    }
    head += `
		<link href="${path}" ${attributes.join(" ")}>`;
  }
  for (const dep of fonts11) {
    const path = prefixed(dep);
    if (resolve_opts.preload({ type: "font", path })) {
      const ext = dep.slice(dep.lastIndexOf(".") + 1);
      const attributes = [
        'rel="preload"',
        'as="font"',
        `type="font/${ext}"`,
        `href="${path}"`,
        "crossorigin"
      ];
      head += `
		<link ${attributes.join(" ")}>`;
    }
  }
  const global2 = `__sveltekit_${options2.version_hash}`;
  const { data, chunks } = get_data(
    event,
    options2,
    branch.map((b) => b.server_data),
    global2
  );
  if (page_config.ssr && page_config.csr) {
    body += `
			${fetched.map(
      (item) => serialize_data(item, resolve_opts.filterSerializedResponseHeaders, !!state.prerendering)
    ).join("\n			")}`;
  }
  if (page_config.csr) {
    const included_modulepreloads = Array.from(modulepreloads, (dep) => prefixed(dep)).filter(
      (path) => resolve_opts.preload({ type: "js", path })
    );
    for (const path of included_modulepreloads) {
      link_header_preloads.add(`<${encodeURI(path)}>; rel="modulepreload"; nopush`);
      if (options2.preload_strategy !== "modulepreload") {
        head += `
		<link rel="preload" as="script" crossorigin="anonymous" href="${path}">`;
      } else if (state.prerendering) {
        head += `
		<link rel="modulepreload" href="${path}">`;
      }
    }
    const blocks = [];
    const properties = [
      `env: ${s4(public_env)}`,
      assets && `assets: ${s4(assets)}`,
      `base: ${base_expression}`,
      `element: document.currentScript.parentElement`
    ].filter(Boolean);
    if (chunks) {
      blocks.push(`const deferred = new Map();`);
      properties.push(`defer: (id) => new Promise((fulfil, reject) => {
							deferred.set(id, { fulfil, reject });
						})`);
      properties.push(`resolve: ({ id, data, error }) => {
							const { fulfil, reject } = deferred.get(id);
							deferred.delete(id);

							if (error) reject(error);
							else fulfil(data);
						}`);
    }
    blocks.push(`${global2} = {
						${properties.join(",\n						")}
					};`);
    const args = [`app`, `${global2}.element`];
    if (page_config.ssr) {
      const serialized = { form: "null", error: "null" };
      blocks.push(`const data = ${data};`);
      if (form_value) {
        serialized.form = uneval_action_response(
          form_value,
          /** @type {string} */
          event.route.id
        );
      }
      if (error2) {
        serialized.error = uneval(error2);
      }
      const hydrate = [
        `node_ids: [${branch.map(({ node }) => node.index).join(", ")}]`,
        `data`,
        `form: ${serialized.form}`,
        `error: ${serialized.error}`
      ];
      if (status !== 200) {
        hydrate.push(`status: ${status}`);
      }
      if (options2.embedded) {
        hydrate.push(`params: ${uneval(event.params)}`, `route: ${s4(event.route)}`);
      }
      args.push(`{
							${hydrate.join(",\n							")}
						}`);
    }
    blocks.push(`Promise.all([
						import(${s4(prefixed(client.start.file))}),
						import(${s4(prefixed(client.app.file))})
					]).then(([kit, app]) => {
						kit.start(${args.join(", ")});
					});`);
    if (options2.service_worker) {
      const opts = "";
      blocks.push(`if ('serviceWorker' in navigator) {
						addEventListener('load', function () {
							navigator.serviceWorker.register('${prefixed("service-worker.js")}'${opts});
						});
					}`);
    }
    const init_app = `
				{
					${blocks.join("\n\n					")}
				}
			`;
    csp.add_script(init_app);
    body += `
			<script${csp.script_needs_nonce ? ` nonce="${csp.nonce}"` : ""}>${init_app}</script>
		`;
  }
  const headers = new Headers({
    "x-sveltekit-page": "true",
    "content-type": "text/html"
  });
  if (state.prerendering) {
    const http_equiv = [];
    const csp_headers = csp.csp_provider.get_meta();
    if (csp_headers) {
      http_equiv.push(csp_headers);
    }
    if (state.prerendering.cache) {
      http_equiv.push(`<meta http-equiv="cache-control" content="${state.prerendering.cache}">`);
    }
    if (http_equiv.length > 0) {
      head = http_equiv.join("\n") + head;
    }
  } else {
    const csp_header = csp.csp_provider.get_header();
    if (csp_header) {
      headers.set("content-security-policy", csp_header);
    }
    const report_only_header = csp.report_only_provider.get_header();
    if (report_only_header) {
      headers.set("content-security-policy-report-only", report_only_header);
    }
    if (link_header_preloads.size) {
      headers.set("link", Array.from(link_header_preloads).join(", "));
    }
  }
  head += rendered.head;
  const html = options2.templates.app({
    head,
    body,
    assets: assets$1,
    nonce: (
      /** @type {string} */
      csp.nonce
    ),
    env: public_env
  });
  const transformed = await resolve_opts.transformPageChunk({
    html,
    done: true
  }) || "";
  if (!chunks) {
    headers.set("etag", `"${hash(transformed)}"`);
  }
  return !chunks ? text(transformed, {
    status,
    headers
  }) : new Response(
    new ReadableStream({
      async start(controller) {
        controller.enqueue(encoder$1.encode(transformed + "\n"));
        for await (const chunk of chunks) {
          controller.enqueue(encoder$1.encode(chunk));
        }
        controller.close();
      },
      type: "bytes"
    }),
    {
      headers: {
        "content-type": "text/html"
      }
    }
  );
}
function get_data(event, options2, nodes, global2) {
  let promise_id = 1;
  let count = 0;
  const { iterator, push, done } = create_async_iterator();
  function replacer(thing) {
    if (typeof (thing == null ? void 0 : thing.then) === "function") {
      const id = promise_id++;
      count += 1;
      thing.then(
        /** @param {any} data */
        (data) => ({ data })
      ).catch(
        /** @param {any} error */
        async (error2) => ({
          error: await handle_error_and_jsonify(event, options2, error2)
        })
      ).then(
        /**
         * @param {{data: any; error: any}} result
         */
        async ({ data, error: error2 }) => {
          count -= 1;
          let str;
          try {
            str = uneval({ id, data, error: error2 }, replacer);
          } catch (e3) {
            error2 = await handle_error_and_jsonify(
              event,
              options2,
              new Error(`Failed to serialize promise while rendering ${event.route.id}`)
            );
            data = void 0;
            str = uneval({ id, data, error: error2 }, replacer);
          }
          push(`<script>${global2}.resolve(${str})</script>
`);
          if (count === 0)
            done();
        }
      );
      return `${global2}.defer(${id})`;
    }
  }
  try {
    const strings = nodes.map((node) => {
      if (!node)
        return "null";
      return `{"type":"data","data":${uneval(node.data, replacer)},${stringify_uses(node)}${node.slash ? `,"slash":${JSON.stringify(node.slash)}` : ""}}`;
    });
    return {
      data: `[${strings.join(",")}]`,
      chunks: count > 0 ? iterator : null
    };
  } catch (e3) {
    throw new Error(clarify_devalue_error(
      event,
      /** @type {any} */
      e3
    ));
  }
}
function get_option(nodes, option) {
  return nodes.reduce(
    (value, node) => {
      var _a, _b;
      return (
        /** @type {any} TypeScript's too dumb to understand this */
        ((_a = node == null ? void 0 : node.universal) == null ? void 0 : _a[option]) ?? ((_b = node == null ? void 0 : node.server) == null ? void 0 : _b[option]) ?? value
      );
    },
    /** @type {Value | undefined} */
    void 0
  );
}
async function respond_with_error({
  event,
  options: options2,
  manifest: manifest2,
  state,
  status,
  error: error2,
  resolve_opts
}) {
  const fetched = [];
  try {
    const branch = [];
    const default_layout = await manifest2._.nodes[0]();
    const ssr = get_option([default_layout], "ssr") ?? true;
    const csr = get_option([default_layout], "csr") ?? true;
    if (ssr) {
      state.error = true;
      const server_data_promise = load_server_data({
        event,
        state,
        node: default_layout,
        parent: async () => ({})
      });
      const server_data = await server_data_promise;
      const data = await load_data({
        event,
        fetched,
        node: default_layout,
        parent: async () => ({}),
        resolve_opts,
        server_data_promise,
        state,
        csr
      });
      branch.push(
        {
          node: default_layout,
          server_data,
          data
        },
        {
          node: await manifest2._.nodes[1](),
          // 1 is always the root error
          data: null,
          server_data: null
        }
      );
    }
    return await render_response({
      options: options2,
      manifest: manifest2,
      state,
      page_config: {
        ssr,
        csr: get_option([default_layout], "csr") ?? true
      },
      status,
      error: await handle_error_and_jsonify(event, options2, error2),
      branch,
      fetched,
      event,
      resolve_opts
    });
  } catch (e3) {
    if (e3 instanceof Redirect) {
      return redirect_response(e3.status, e3.location);
    }
    return static_error_page(
      options2,
      e3 instanceof HttpError ? e3.status : 500,
      (await handle_error_and_jsonify(event, options2, e3)).message
    );
  }
}
function once(fn) {
  let done = false;
  let result;
  return () => {
    if (done)
      return result;
    done = true;
    return result = fn();
  };
}
var INVALIDATED_PARAM = "x-sveltekit-invalidated";
var encoder2 = new TextEncoder();
async function render_data(event, route, options2, manifest2, state, invalidated_data_nodes, trailing_slash) {
  if (!route.page) {
    return new Response(void 0, {
      status: 404
    });
  }
  try {
    const node_ids = [...route.page.layouts, route.page.leaf];
    const invalidated = invalidated_data_nodes ?? node_ids.map(() => true);
    let aborted = false;
    const url = new URL(event.url);
    url.pathname = normalize_path(url.pathname, trailing_slash);
    const new_event = { ...event, url };
    const functions = node_ids.map((n2, i3) => {
      return once(async () => {
        try {
          if (aborted) {
            return (
              /** @type {import('types').ServerDataSkippedNode} */
              {
                type: "skip"
              }
            );
          }
          const node = n2 == void 0 ? n2 : await manifest2._.nodes[n2]();
          return load_server_data({
            event: new_event,
            state,
            node,
            parent: async () => {
              const data2 = {};
              for (let j = 0; j < i3; j += 1) {
                const parent = (
                  /** @type {import('types').ServerDataNode | null} */
                  await functions[j]()
                );
                if (parent) {
                  Object.assign(data2, parent.data);
                }
              }
              return data2;
            }
          });
        } catch (e3) {
          aborted = true;
          throw e3;
        }
      });
    });
    const promises = functions.map(async (fn, i3) => {
      if (!invalidated[i3]) {
        return (
          /** @type {import('types').ServerDataSkippedNode} */
          {
            type: "skip"
          }
        );
      }
      return fn();
    });
    let length = promises.length;
    const nodes = await Promise.all(
      promises.map(
        (p4, i3) => p4.catch(async (error2) => {
          if (error2 instanceof Redirect) {
            throw error2;
          }
          length = Math.min(length, i3 + 1);
          return (
            /** @type {import('types').ServerErrorNode} */
            {
              type: "error",
              error: await handle_error_and_jsonify(event, options2, error2),
              status: error2 instanceof HttpError ? error2.status : void 0
            }
          );
        })
      )
    );
    const { data, chunks } = get_data_json(event, options2, nodes);
    if (!chunks) {
      return json_response(data);
    }
    return new Response(
      new ReadableStream({
        async start(controller) {
          controller.enqueue(encoder2.encode(data));
          for await (const chunk of chunks) {
            controller.enqueue(encoder2.encode(chunk));
          }
          controller.close();
        },
        type: "bytes"
      }),
      {
        headers: {
          // we use a proprietary content type to prevent buffering.
          // the `text` prefix makes it inspectable
          "content-type": "text/sveltekit-data",
          "cache-control": "private, no-store"
        }
      }
    );
  } catch (e3) {
    const error2 = normalize_error(e3);
    if (error2 instanceof Redirect) {
      return redirect_json_response(error2);
    } else {
      return json_response(await handle_error_and_jsonify(event, options2, error2), 500);
    }
  }
}
function json_response(json2, status = 200) {
  return text(typeof json2 === "string" ? json2 : JSON.stringify(json2), {
    status,
    headers: {
      "content-type": "application/json",
      "cache-control": "private, no-store"
    }
  });
}
function redirect_json_response(redirect) {
  return json_response({
    type: "redirect",
    location: redirect.location
  });
}
function get_data_json(event, options2, nodes) {
  let promise_id = 1;
  let count = 0;
  const { iterator, push, done } = create_async_iterator();
  const reducers = {
    /** @param {any} thing */
    Promise: (thing) => {
      if (typeof (thing == null ? void 0 : thing.then) === "function") {
        const id = promise_id++;
        count += 1;
        let key2 = "data";
        thing.catch(
          /** @param {any} e */
          async (e3) => {
            key2 = "error";
            return handle_error_and_jsonify(
              event,
              options2,
              /** @type {any} */
              e3
            );
          }
        ).then(
          /** @param {any} value */
          async (value) => {
            let str;
            try {
              str = stringify(value, reducers);
            } catch (e3) {
              const error2 = await handle_error_and_jsonify(
                event,
                options2,
                new Error(`Failed to serialize promise while rendering ${event.route.id}`)
              );
              key2 = "error";
              str = stringify(error2, reducers);
            }
            count -= 1;
            push(`{"type":"chunk","id":${id},"${key2}":${str}}
`);
            if (count === 0)
              done();
          }
        );
        return id;
      }
    }
  };
  try {
    const strings = nodes.map((node) => {
      if (!node)
        return "null";
      if (node.type === "error" || node.type === "skip") {
        return JSON.stringify(node);
      }
      return `{"type":"data","data":${stringify(node.data, reducers)},${stringify_uses(
        node
      )}${node.slash ? `,"slash":${JSON.stringify(node.slash)}` : ""}}`;
    });
    return {
      data: `{"type":"data","nodes":[${strings.join(",")}]}
`,
      chunks: count > 0 ? iterator : null
    };
  } catch (e3) {
    throw new Error(clarify_devalue_error(
      event,
      /** @type {any} */
      e3
    ));
  }
}
var MAX_DEPTH = 10;
async function render_page(event, page2, options2, manifest2, state, resolve_opts) {
  var _a;
  if (state.depth > MAX_DEPTH) {
    return text(`Not found: ${event.url.pathname}`, {
      status: 404
      // TODO in some cases this should be 500. not sure how to differentiate
    });
  }
  if (is_action_json_request(event)) {
    const node = await manifest2._.nodes[page2.leaf]();
    return handle_action_json_request(event, options2, node == null ? void 0 : node.server);
  }
  try {
    const nodes = await Promise.all([
      // we use == here rather than === because [undefined] serializes as "[null]"
      ...page2.layouts.map((n2) => n2 == void 0 ? n2 : manifest2._.nodes[n2]()),
      manifest2._.nodes[page2.leaf]()
    ]);
    const leaf_node = (
      /** @type {import('types').SSRNode} */
      nodes.at(-1)
    );
    let status = 200;
    let action_result = void 0;
    if (is_action_request(event)) {
      action_result = await handle_action_request(event, leaf_node.server);
      if ((action_result == null ? void 0 : action_result.type) === "redirect") {
        return redirect_response(action_result.status, action_result.location);
      }
      if ((action_result == null ? void 0 : action_result.type) === "error") {
        const error2 = action_result.error;
        status = error2 instanceof HttpError ? error2.status : 500;
      }
      if ((action_result == null ? void 0 : action_result.type) === "failure") {
        status = action_result.status;
      }
    }
    const should_prerender_data = nodes.some((node) => node == null ? void 0 : node.server);
    const data_pathname = add_data_suffix(event.url.pathname);
    const should_prerender = get_option(nodes, "prerender");
    if (should_prerender) {
      const mod = leaf_node.server;
      if (mod == null ? void 0 : mod.actions) {
        throw new Error("Cannot prerender pages with actions");
      }
    } else if (state.prerendering) {
      if (should_prerender !== false && get_option(nodes, "ssr") === false && !((_a = leaf_node.server) == null ? void 0 : _a.actions)) {
        return await render_response({
          branch: [],
          fetched: [],
          page_config: {
            ssr: false,
            csr: get_option(nodes, "csr") ?? true
          },
          status,
          error: null,
          event,
          options: options2,
          manifest: manifest2,
          state,
          resolve_opts
        });
      }
      return new Response(void 0, {
        status: 204
      });
    }
    state.prerender_default = should_prerender;
    const fetched = [];
    if (get_option(nodes, "ssr") === false) {
      return await render_response({
        branch: [],
        fetched,
        page_config: {
          ssr: false,
          csr: get_option(nodes, "csr") ?? true
        },
        status,
        error: null,
        event,
        options: options2,
        manifest: manifest2,
        state,
        resolve_opts
      });
    }
    let branch = [];
    let load_error = null;
    const server_promises = nodes.map((node, i3) => {
      if (load_error) {
        throw load_error;
      }
      return Promise.resolve().then(async () => {
        try {
          if (node === leaf_node && (action_result == null ? void 0 : action_result.type) === "error") {
            throw action_result.error;
          }
          return await load_server_data({
            event,
            state,
            node,
            parent: async () => {
              const data = {};
              for (let j = 0; j < i3; j += 1) {
                const parent = await server_promises[j];
                if (parent)
                  Object.assign(data, await parent.data);
              }
              return data;
            }
          });
        } catch (e3) {
          load_error = /** @type {Error} */
          e3;
          throw load_error;
        }
      });
    });
    const csr = get_option(nodes, "csr") ?? true;
    const load_promises = nodes.map((node, i3) => {
      if (load_error)
        throw load_error;
      return Promise.resolve().then(async () => {
        try {
          return await load_data({
            event,
            fetched,
            node,
            parent: async () => {
              const data = {};
              for (let j = 0; j < i3; j += 1) {
                Object.assign(data, await load_promises[j]);
              }
              return data;
            },
            resolve_opts,
            server_data_promise: server_promises[i3],
            state,
            csr
          });
        } catch (e3) {
          load_error = /** @type {Error} */
          e3;
          throw load_error;
        }
      });
    });
    for (const p4 of server_promises)
      p4.catch(() => {
      });
    for (const p4 of load_promises)
      p4.catch(() => {
      });
    for (let i3 = 0; i3 < nodes.length; i3 += 1) {
      const node = nodes[i3];
      if (node) {
        try {
          const server_data = await server_promises[i3];
          const data = await load_promises[i3];
          branch.push({ node, server_data, data });
        } catch (e3) {
          const err = normalize_error(e3);
          if (err instanceof Redirect) {
            if (state.prerendering && should_prerender_data) {
              const body = JSON.stringify({
                type: "redirect",
                location: err.location
              });
              state.prerendering.dependencies.set(data_pathname, {
                response: text(body),
                body
              });
            }
            return redirect_response(err.status, err.location);
          }
          const status2 = err instanceof HttpError ? err.status : 500;
          const error2 = await handle_error_and_jsonify(event, options2, err);
          while (i3--) {
            if (page2.errors[i3]) {
              const index11 = (
                /** @type {number} */
                page2.errors[i3]
              );
              const node2 = await manifest2._.nodes[index11]();
              let j = i3;
              while (!branch[j])
                j -= 1;
              return await render_response({
                event,
                options: options2,
                manifest: manifest2,
                state,
                resolve_opts,
                page_config: { ssr: true, csr: true },
                status: status2,
                error: error2,
                branch: compact(branch.slice(0, j + 1)).concat({
                  node: node2,
                  data: null,
                  server_data: null
                }),
                fetched
              });
            }
          }
          return static_error_page(options2, status2, error2.message);
        }
      } else {
        branch.push(null);
      }
    }
    if (state.prerendering && should_prerender_data) {
      let { data, chunks } = get_data_json(
        event,
        options2,
        branch.map((node) => node == null ? void 0 : node.server_data)
      );
      if (chunks) {
        for await (const chunk of chunks) {
          data += chunk;
        }
      }
      state.prerendering.dependencies.set(data_pathname, {
        response: text(data),
        body: data
      });
    }
    return await render_response({
      event,
      options: options2,
      manifest: manifest2,
      state,
      resolve_opts,
      page_config: {
        csr: get_option(nodes, "csr") ?? true,
        ssr: true
      },
      status,
      error: null,
      branch: compact(branch),
      action_result,
      fetched
    });
  } catch (e3) {
    return await respond_with_error({
      event,
      options: options2,
      manifest: manifest2,
      state,
      status: 500,
      error: e3,
      resolve_opts
    });
  }
}
function exec(match2, params, matchers) {
  const result = {};
  const values = match2.slice(1);
  let buffered = 0;
  for (let i3 = 0; i3 < params.length; i3 += 1) {
    const param = params[i3];
    const value = values[i3 - buffered];
    if (param.chained && param.rest && buffered) {
      result[param.name] = values.slice(i3 - buffered, i3 + 1).filter((s22) => s22).join("/");
      buffered = 0;
      continue;
    }
    if (value === void 0) {
      if (param.rest)
        result[param.name] = "";
      continue;
    }
    if (!param.matcher || matchers[param.matcher](value)) {
      result[param.name] = value;
      const next_param = params[i3 + 1];
      const next_value = values[i3 + 1];
      if (next_param && !next_param.rest && next_value) {
        buffered = 0;
      }
      continue;
    }
    if (param.optional && param.chained) {
      buffered++;
      continue;
    }
    return;
  }
  if (buffered)
    return;
  return result;
}
function get_cookies(request, url, trailing_slash) {
  const header = request.headers.get("cookie") ?? "";
  const initial_cookies = (0, import_cookie.parse)(header, { decode: (value) => value });
  const normalized_url = normalize_path(url.pathname, trailing_slash);
  const default_path = normalized_url.split("/").slice(0, -1).join("/") || "/";
  const new_cookies = {};
  const defaults = {
    httpOnly: true,
    sameSite: "lax",
    secure: url.hostname === "localhost" && url.protocol === "http:" ? false : true
  };
  const cookies = {
    // The JSDoc param annotations appearing below for get, set and delete
    // are necessary to expose the `cookie` library types to
    // typescript users. `@type {import('types').Cookies}` above is not
    // sufficient to do so.
    /**
     * @param {string} name
     * @param {import('cookie').CookieParseOptions} opts
     */
    get(name, opts) {
      const c = new_cookies[name];
      if (c && domain_matches(url.hostname, c.options.domain) && path_matches(url.pathname, c.options.path)) {
        return c.value;
      }
      const decoder = (opts == null ? void 0 : opts.decode) || decodeURIComponent;
      const req_cookies = (0, import_cookie.parse)(header, { decode: decoder });
      const cookie = req_cookies[name];
      {
        return cookie;
      }
    },
    /**
     * @param {import('cookie').CookieParseOptions} opts
     */
    getAll(opts) {
      const decoder = (opts == null ? void 0 : opts.decode) || decodeURIComponent;
      const cookies2 = (0, import_cookie.parse)(header, { decode: decoder });
      for (const c of Object.values(new_cookies)) {
        if (domain_matches(url.hostname, c.options.domain) && path_matches(url.pathname, c.options.path)) {
          cookies2[c.name] = c.value;
        }
      }
      return Object.entries(cookies2).map(([name, value]) => ({ name, value }));
    },
    /**
     * @param {string} name
     * @param {string} value
     * @param {import('cookie').CookieSerializeOptions} opts
     */
    set(name, value, opts = {}) {
      let path = opts.path ?? default_path;
      new_cookies[name] = {
        name,
        value,
        options: {
          ...defaults,
          ...opts,
          path
        }
      };
    },
    /**
     * @param {string} name
     * @param {import('cookie').CookieSerializeOptions} opts
     */
    delete(name, opts = {}) {
      cookies.set(name, "", {
        ...opts,
        maxAge: 0
      });
    },
    /**
     * @param {string} name
     * @param {string} value
     * @param {import('cookie').CookieSerializeOptions} opts
     */
    serialize(name, value, opts) {
      return (0, import_cookie.serialize)(name, value, {
        ...defaults,
        ...opts
      });
    }
  };
  function get_cookie_header(destination, header2) {
    const combined_cookies = {
      // cookies sent by the user agent have lowest precedence
      ...initial_cookies
    };
    for (const key2 in new_cookies) {
      const cookie = new_cookies[key2];
      if (!domain_matches(destination.hostname, cookie.options.domain))
        continue;
      if (!path_matches(destination.pathname, cookie.options.path))
        continue;
      const encoder22 = cookie.options.encode || encodeURIComponent;
      combined_cookies[cookie.name] = encoder22(cookie.value);
    }
    if (header2) {
      const parsed = (0, import_cookie.parse)(header2, { decode: (value) => value });
      for (const name in parsed) {
        combined_cookies[name] = parsed[name];
      }
    }
    return Object.entries(combined_cookies).map(([name, value]) => `${name}=${value}`).join("; ");
  }
  return { cookies, new_cookies, get_cookie_header };
}
function domain_matches(hostname, constraint) {
  if (!constraint)
    return true;
  const normalized = constraint[0] === "." ? constraint.slice(1) : constraint;
  if (hostname === normalized)
    return true;
  return hostname.endsWith("." + normalized);
}
function path_matches(path, constraint) {
  if (!constraint)
    return true;
  const normalized = constraint.endsWith("/") ? constraint.slice(0, -1) : constraint;
  if (path === normalized)
    return true;
  return path.startsWith(normalized + "/");
}
function add_cookies_to_headers(headers, cookies) {
  for (const new_cookie of cookies) {
    const { name, value, options: options2 } = new_cookie;
    headers.append("set-cookie", (0, import_cookie.serialize)(name, value, options2));
  }
}
function create_fetch({ event, options: options2, manifest: manifest2, state, get_cookie_header }) {
  return async (info, init22) => {
    const original_request = normalize_fetch_input(info, init22, event.url);
    const request_body = init22 == null ? void 0 : init22.body;
    let mode = (info instanceof Request ? info.mode : init22 == null ? void 0 : init22.mode) ?? "cors";
    let credentials = (info instanceof Request ? info.credentials : init22 == null ? void 0 : init22.credentials) ?? "same-origin";
    return await options2.hooks.handleFetch({
      event,
      request: original_request,
      fetch: async (info2, init3) => {
        const request = normalize_fetch_input(info2, init3, event.url);
        const url = new URL(request.url);
        if (!request.headers.has("origin")) {
          request.headers.set("origin", event.url.origin);
        }
        if (info2 !== original_request) {
          mode = (info2 instanceof Request ? info2.mode : init3 == null ? void 0 : init3.mode) ?? "cors";
          credentials = (info2 instanceof Request ? info2.credentials : init3 == null ? void 0 : init3.credentials) ?? "same-origin";
        }
        if ((request.method === "GET" || request.method === "HEAD") && (mode === "no-cors" && url.origin !== event.url.origin || url.origin === event.url.origin)) {
          request.headers.delete("origin");
        }
        if (url.origin !== event.url.origin) {
          if (`.${url.hostname}`.endsWith(`.${event.url.hostname}`) && credentials !== "omit") {
            const cookie = get_cookie_header(url, request.headers.get("cookie"));
            if (cookie)
              request.headers.set("cookie", cookie);
          }
          return fetch(request);
        }
        let response;
        const prefix = assets || base;
        const decoded = decodeURIComponent(url.pathname);
        const filename = (decoded.startsWith(prefix) ? decoded.slice(prefix.length) : decoded).slice(1);
        const filename_html = `${filename}/index.html`;
        const is_asset = manifest2.assets.has(filename);
        const is_asset_html = manifest2.assets.has(filename_html);
        if (is_asset || is_asset_html) {
          const file11 = is_asset ? filename : filename_html;
          if (state.read) {
            const type = is_asset ? manifest2.mimeTypes[filename.slice(filename.lastIndexOf("."))] : "text/html";
            return new Response(state.read(file11), {
              headers: type ? { "content-type": type } : {}
            });
          }
          return await fetch(request);
        }
        if (credentials !== "omit") {
          const cookie = get_cookie_header(url, request.headers.get("cookie"));
          if (cookie) {
            request.headers.set("cookie", cookie);
          }
          const authorization = event.request.headers.get("authorization");
          if (authorization && !request.headers.has("authorization")) {
            request.headers.set("authorization", authorization);
          }
        }
        if (request_body && typeof request_body !== "string" && !ArrayBuffer.isView(request_body)) {
          throw new Error("Request body must be a string or TypedArray");
        }
        if (!request.headers.has("accept")) {
          request.headers.set("accept", "*/*");
        }
        if (!request.headers.has("accept-language")) {
          request.headers.set(
            "accept-language",
            /** @type {string} */
            event.request.headers.get("accept-language")
          );
        }
        response = await respond(request, options2, manifest2, {
          ...state,
          depth: state.depth + 1
        });
        const set_cookie = response.headers.get("set-cookie");
        if (set_cookie) {
          for (const str of set_cookie_parser.splitCookiesString(set_cookie)) {
            const { name, value, ...options3 } = set_cookie_parser.parseString(str);
            event.cookies.set(
              name,
              value,
              /** @type {import('cookie').CookieSerializeOptions} */
              options3
            );
          }
        }
        return response;
      }
    });
  };
}
function normalize_fetch_input(info, init22, url) {
  if (info instanceof Request) {
    return info;
  }
  return new Request(typeof info === "string" ? new URL(info, url) : info, init22);
}
function validator(expected) {
  const set = new Set(expected);
  function validate(module2, file11) {
    if (!module2)
      return;
    for (const key2 in module2) {
      if (key2[0] === "_" || set.has(key2))
        continue;
      const hint = hint_for_supported_files(key2, file11 == null ? void 0 : file11.slice(file11.lastIndexOf("."))) ?? `valid exports are ${expected.join(", ")}, or anything with a '_' prefix`;
      throw new Error(`Invalid export '${key2}'${file11 ? ` in ${file11}` : ""} (${hint})`);
    }
  }
  return validate;
}
function hint_for_supported_files(key2, ext = ".js") {
  let supported_files = [];
  if (valid_common_exports.includes(key2)) {
    supported_files.push(`+page${ext}`);
  }
  if (valid_page_server_exports.includes(key2)) {
    supported_files.push(`+page.server${ext}`);
  }
  if (valid_server_exports.includes(key2)) {
    supported_files.push(`+server${ext}`);
  }
  if (supported_files.length > 0) {
    return `'${key2}' is a valid export in ${supported_files.join(` or `)}`;
  }
}
var valid_common_exports = ["load", "prerender", "csr", "ssr", "trailingSlash", "config"];
var valid_page_server_exports = [
  "load",
  "prerender",
  "csr",
  "ssr",
  "actions",
  "trailingSlash",
  "config"
];
var valid_server_exports = [
  "GET",
  "POST",
  "PATCH",
  "PUT",
  "DELETE",
  "OPTIONS",
  "prerender",
  "trailingSlash",
  "config"
];
var validate_common_exports = validator(valid_common_exports);
var validate_page_server_exports = validator(valid_page_server_exports);
var validate_server_exports = validator(valid_server_exports);
var default_transform = ({ html }) => html;
var default_filter = () => false;
var default_preload = ({ type }) => type === "js" || type === "css";
async function respond(request, options2, manifest2, state) {
  var _a, _b, _c, _d;
  let url = new URL(request.url);
  if (options2.csrf_check_origin) {
    const forbidden = request.method === "POST" && request.headers.get("origin") !== url.origin && is_form_content_type(request);
    if (forbidden) {
      const csrf_error = error(403, `Cross-site ${request.method} form submissions are forbidden`);
      if (request.headers.get("accept") === "application/json") {
        return json(csrf_error.body, { status: csrf_error.status });
      }
      return text(csrf_error.body.message, { status: csrf_error.status });
    }
  }
  let decoded;
  try {
    decoded = decode_pathname(url.pathname);
  } catch {
    return text("Malformed URI", { status: 400 });
  }
  let route = null;
  let params = {};
  if (base && !((_a = state.prerendering) == null ? void 0 : _a.fallback)) {
    if (!decoded.startsWith(base)) {
      return text("Not found", { status: 404 });
    }
    decoded = decoded.slice(base.length) || "/";
  }
  const is_data_request = has_data_suffix(decoded);
  let invalidated_data_nodes;
  if (is_data_request) {
    decoded = strip_data_suffix(decoded) || "/";
    url.pathname = strip_data_suffix(url.pathname) || "/";
    invalidated_data_nodes = (_b = url.searchParams.get(INVALIDATED_PARAM)) == null ? void 0 : _b.split("_").map(Boolean);
    url.searchParams.delete(INVALIDATED_PARAM);
  }
  if (!((_c = state.prerendering) == null ? void 0 : _c.fallback)) {
    const matchers = await manifest2._.matchers();
    for (const candidate of manifest2._.routes) {
      const match2 = candidate.pattern.exec(decoded);
      if (!match2)
        continue;
      const matched = exec(match2, candidate.params, matchers);
      if (matched) {
        route = candidate;
        params = decode_params(matched);
        break;
      }
    }
  }
  let trailing_slash = void 0;
  const headers = {};
  let cookies_to_add = {};
  const event = {
    // @ts-expect-error `cookies` and `fetch` need to be created after the `event` itself
    cookies: null,
    // @ts-expect-error
    fetch: null,
    getClientAddress: state.getClientAddress || (() => {
      throw new Error(
        `${"adapter-awscdk"} does not specify getClientAddress. Please raise an issue`
      );
    }),
    locals: {},
    params,
    platform: state.platform,
    request,
    route: { id: (route == null ? void 0 : route.id) ?? null },
    setHeaders: (new_headers) => {
      for (const key2 in new_headers) {
        const lower = key2.toLowerCase();
        const value = new_headers[key2];
        if (lower === "set-cookie") {
          throw new Error(
            `Use \`event.cookies.set(name, value, options)\` instead of \`event.setHeaders\` to set cookies`
          );
        } else if (lower in headers) {
          throw new Error(`"${key2}" header is already set`);
        } else {
          headers[lower] = value;
          if (state.prerendering && lower === "cache-control") {
            state.prerendering.cache = /** @type {string} */
            value;
          }
        }
      }
    },
    url,
    isDataRequest: is_data_request
  };
  let resolve_opts = {
    transformPageChunk: default_transform,
    filterSerializedResponseHeaders: default_filter,
    preload: default_preload
  };
  try {
    if (route && !is_data_request) {
      if (route.page) {
        const nodes = await Promise.all([
          // we use == here rather than === because [undefined] serializes as "[null]"
          ...route.page.layouts.map((n2) => n2 == void 0 ? n2 : manifest2._.nodes[n2]()),
          manifest2._.nodes[route.page.leaf]()
        ]);
        if (DEV)
          ;
        trailing_slash = get_option(nodes, "trailingSlash");
      } else if (route.endpoint) {
        const node = await route.endpoint();
        trailing_slash = node.trailingSlash;
        if (DEV)
          ;
      }
      const normalized = normalize_path(url.pathname, trailing_slash ?? "never");
      if (normalized !== url.pathname && !((_d = state.prerendering) == null ? void 0 : _d.fallback)) {
        return new Response(void 0, {
          status: 301,
          headers: {
            "x-sveltekit-normalize": "1",
            location: (
              // ensure paths starting with '//' are not treated as protocol-relative
              (normalized.startsWith("//") ? url.origin + normalized : normalized) + (url.search === "?" ? "" : url.search)
            )
          }
        });
      }
    }
    const { cookies, new_cookies, get_cookie_header } = get_cookies(
      request,
      url,
      trailing_slash ?? "never"
    );
    cookies_to_add = new_cookies;
    event.cookies = cookies;
    event.fetch = create_fetch({ event, options: options2, manifest: manifest2, state, get_cookie_header });
    if (state.prerendering && !state.prerendering.fallback)
      disable_search(url);
    const response = await options2.hooks.handle({
      event,
      resolve: (event2, opts) => resolve(event2, opts).then((response2) => {
        for (const key2 in headers) {
          const value = headers[key2];
          response2.headers.set(
            key2,
            /** @type {string} */
            value
          );
        }
        add_cookies_to_headers(response2.headers, Object.values(cookies_to_add));
        if (state.prerendering && event2.route.id !== null) {
          response2.headers.set("x-sveltekit-routeid", encodeURI(event2.route.id));
        }
        return response2;
      })
    });
    if (response.status === 200 && response.headers.has("etag")) {
      let if_none_match_value = request.headers.get("if-none-match");
      if (if_none_match_value == null ? void 0 : if_none_match_value.startsWith('W/"')) {
        if_none_match_value = if_none_match_value.substring(2);
      }
      const etag = (
        /** @type {string} */
        response.headers.get("etag")
      );
      if (if_none_match_value === etag) {
        const headers2 = new Headers({ etag });
        for (const key2 of [
          "cache-control",
          "content-location",
          "date",
          "expires",
          "vary",
          "set-cookie"
        ]) {
          const value = response.headers.get(key2);
          if (value)
            headers2.set(key2, value);
        }
        return new Response(void 0, {
          status: 304,
          headers: headers2
        });
      }
    }
    if (is_data_request && response.status >= 300 && response.status <= 308) {
      const location2 = response.headers.get("location");
      if (location2) {
        return redirect_json_response(new Redirect(
          /** @type {any} */
          response.status,
          location2
        ));
      }
    }
    return response;
  } catch (e3) {
    if (e3 instanceof Redirect) {
      const response = is_data_request ? redirect_json_response(e3) : redirect_response(e3.status, e3.location);
      add_cookies_to_headers(response.headers, Object.values(cookies_to_add));
      return response;
    }
    return await handle_fatal_error(event, options2, e3);
  }
  async function resolve(event2, opts) {
    var _a2;
    try {
      if (opts) {
        if ("ssr" in opts) {
          throw new Error(
            "ssr has been removed, set it in the appropriate +layout.js instead. See the PR for more information: https://github.com/sveltejs/kit/pull/6197"
          );
        }
        resolve_opts = {
          transformPageChunk: opts.transformPageChunk || default_transform,
          filterSerializedResponseHeaders: opts.filterSerializedResponseHeaders || default_filter,
          preload: opts.preload || default_preload
        };
      }
      if ((_a2 = state.prerendering) == null ? void 0 : _a2.fallback) {
        return await render_response({
          event: event2,
          options: options2,
          manifest: manifest2,
          state,
          page_config: { ssr: false, csr: true },
          status: 200,
          error: null,
          branch: [],
          fetched: [],
          resolve_opts
        });
      }
      if (route) {
        let response;
        if (is_data_request) {
          response = await render_data(
            event2,
            route,
            options2,
            manifest2,
            state,
            invalidated_data_nodes,
            trailing_slash ?? "never"
          );
        } else if (route.endpoint && (!route.page || is_endpoint_request(event2))) {
          response = await render_endpoint(event2, await route.endpoint(), state);
        } else if (route.page) {
          response = await render_page(event2, route.page, options2, manifest2, state, resolve_opts);
        } else {
          throw new Error("This should never happen");
        }
        return response;
      }
      if (state.error) {
        return text("Internal Server Error", {
          status: 500
        });
      }
      if (state.depth === 0) {
        return await respond_with_error({
          event: event2,
          options: options2,
          manifest: manifest2,
          state,
          status: 404,
          error: new Error(`Not found: ${event2.url.pathname}`),
          resolve_opts
        });
      }
      if (state.prerendering) {
        return text("not found", { status: 404 });
      }
      return await fetch(request);
    } catch (e3) {
      return await handle_fatal_error(event2, options2, e3);
    } finally {
      event2.cookies.set = () => {
        throw new Error("Cannot use `cookies.set(...)` after the response has been generated");
      };
      event2.setHeaders = () => {
        throw new Error("Cannot use `setHeaders(...)` after the response has been generated");
      };
    }
  }
}
var Server = class {
  /** @type {import('types').SSROptions} */
  #options;
  /** @type {import('types').SSRManifest} */
  #manifest;
  /** @param {import('types').SSRManifest} manifest */
  constructor(manifest2) {
    this.#options = options;
    this.#manifest = manifest2;
  }
  /**
   * @param {{
   *   env: Record<string, string>
   * }} opts
   */
  async init({ env }) {
    const entries = Object.entries(env);
    const prefix = this.#options.env_public_prefix;
    Object.fromEntries(entries.filter(([k]) => !k.startsWith(prefix)));
    const pub = Object.fromEntries(entries.filter(([k]) => k.startsWith(prefix)));
    set_public_env(pub);
    if (!this.#options.hooks) {
      const module2 = await get_hooks();
      this.#options.hooks = {
        handle: module2.handle || (({ event, resolve }) => resolve(event)),
        // @ts-expect-error
        handleError: module2.handleError || (({ error: error2 }) => console.error(error2 == null ? void 0 : error2.stack)),
        handleFetch: module2.handleFetch || (({ request, fetch: fetch22 }) => fetch22(request))
      };
    }
  }
  /**
   * @param {Request} request
   * @param {import('types').RequestOptions} options
   */
  async respond(request, options2) {
    if (!(request instanceof Request)) {
      throw new Error(
        "The first argument to server.respond must be a Request object. See https://github.com/sveltejs/kit/pull/3384 for details"
      );
    }
    return respond(request, this.#options, this.#manifest, {
      ...options2,
      error: false,
      depth: 0
    });
  }
};

// build/manifest.js
init_shims();
var manifest = {
  appDir: "_app",
  appPath: "_app",
  assets: /* @__PURE__ */ new Set(["img/common/backtotop_arrow.webp", "img/common/bg.webp", "img/common/bg1.webp", "img/common/bg1_sp.webp", "img/common/bg2.webp", "img/common/bg2_sp.webp", "img/common/bg3.webp", "img/common/bg3_sp.webp", "img/common/bg4.webp", "img/common/bg4_sp.webp", "img/common/bg_logo.webp", "img/common/bg_ribbon.webp", "img/common/body_bg.webp", "img/common/extlink/beginnermark.webp", "img/common/extlink/extlink_arrow.webp", "img/common/extlink/extlink_beginner_bg.webp", "img/common/extlink/extlink_beginner_chara.webp", "img/common/extlink/extlink_faq_bg.webp", "img/common/extlink/extlink_faq_chara.webp", "img/common/extlink/extlink_frame.webp", "img/common/extlink/faqmark.webp", "img/common/featured/featured_festival_bg.webp", "img/common/featured/featured_first_bg.webp", "img/common/featured/featured_items_arrow.webp", "img/common/featured/featured_ravi_bg.webp", "img/common/featured/featured_return_bg.webp", "img/common/featured/featured_road_bg.webp", "img/common/featured/featured_tenrou_bg.webp", "img/common/featured/featured_utahime_bg.webp", "img/common/footer/footer_bg.webp", "img/common/footer/footer_bg_sp.webp", "img/common/footer/footer_list_items_arrow.webp", "img/common/footer/pewpewdojo_server_icon.webp", "img/common/footer/rain_discord_icon.webp", "img/common/footer/rain_officialsite_icon.webp", "img/common/frame_lower.webp", "img/common/frame_upper.webp", "img/common/global.webp", "img/common/icon_192.png", "img/common/icon_512.png", "img/common/icon_paw.webp", "img/common/landscape/landscape_mode.jpg", "img/common/landscape/now_waiting_A.webp", "img/common/landscape/now_waiting_G.webp", "img/common/landscape/now_waiting_I1.webp", "img/common/landscape/now_waiting_I2.webp", "img/common/landscape/now_waiting_N1.webp", "img/common/landscape/now_waiting_N2.webp", "img/common/landscape/now_waiting_O.webp", "img/common/landscape/now_waiting_T.webp", "img/common/landscape/now_waiting_W1.webp", "img/common/landscape/now_waiting_W2.webp", "img/common/landscape/rotate_device.webp", "img/common/lang_arrow.webp", "img/common/manual_title.webp", "img/common/ouch_cat.webp", "img/common/platform_pc.webp", "img/common/platform_sp_landscape.webp", "img/common/platform_sp_portrait.webp", "img/common/rainserver_logo.webp", "img/common/rain_apple_icon.png", "img/common/rain_favicon.ico", "img/common/rain_footer_tempologo.jpg", "img/common/rain_textlogo.webp", "img/common/sns_share.webp", "img/common/subtitle_lower.webp", "img/common/subtitle_upper.webp", "img/common/title_frame.webp", "img/common/topimgsp\u306F500\xD7400.txt", "img/en/articles/signup/discord/discord_1.png", "img/en/articles/signup/discord/discord_2_1.png", "img/en/articles/signup/discord/discord_2_2.png", "img/en/articles/signup/discord/discord_3_1.png", "img/en/articles/signup/discord/discord_3_2.png", "img/en/featured/featured_festival_chara.webp", "img/en/featured/featured_first_chara.webp", "img/en/featured/featured_ravi_chara.webp", "img/en/featured/featured_return_chara.webp", "img/en/featured/featured_road_chara.webp", "img/en/featured/featured_tenrou_chara.webp", "img/en/featured/featured_utahime_chara.webp", "img/en/MHFZZ_logo.webp", "img/ja/articles/signup/discord/discord_1.png", "img/ja/articles/signup/discord/discord_2_1.png", "img/ja/articles/signup/discord/discord_2_2.png", "img/ja/articles/signup/discord/discord_3_1.png", "img/ja/articles/signup/discord/discord_3_2.png", "img/ja/featured/featured_festival_chara.webp", "img/ja/featured/featured_first_chara.webp", "img/ja/featured/featured_ravi_chara.webp", "img/ja/featured/featured_return_chara.webp", "img/ja/featured/featured_road_chara.webp", "img/ja/featured/featured_tenrou_chara.webp", "img/ja/featured/featured_utahime_chara.webp", "img/ja/MHFZZ_logo.webp", "js/main.ts", "manifest.webmanifest", "sass/common/_common.scss", "sass/common/_index.scss", "sass/common/_reset.scss", "sass/error/_index.scss", "sass/error/_pc.scss", "sass/error/_sp.scss", "sass/global/_index.scss", "sass/global/_mixins.scss", "sass/global/_variables.scss", "sass/global.scss", "sass/manual/_index.scss", "sass/manual/_pc.scss", "sass/manual/_sp.scss", "sass/style_error.scss", "sass/style_manual.scss"]),
  mimeTypes: { ".webp": "image/webp", ".png": "image/png", ".jpg": "image/jpeg", ".ico": "image/vnd.microsoft.icon", ".txt": "text/plain", ".ts": "video/mp2t", ".webmanifest": "application/manifest+json", ".scss": "text/x-scss" },
  _: {
    client: { "start": { "file": "_app/immutable/entry/start.a5be66be.js", "imports": ["_app/immutable/entry/start.a5be66be.js", "_app/immutable/chunks/index.1abc9ca4.js", "_app/immutable/chunks/singletons.a54971d9.js", "_app/immutable/chunks/index.58d4b228.js"], "stylesheets": [], "fonts": [] }, "app": { "file": "_app/immutable/entry/app.3fb8eb11.js", "imports": ["_app/immutable/entry/app.3fb8eb11.js", "_app/immutable/chunks/preload-helper.41c905a7.js", "_app/immutable/chunks/i18n-util.b0b8c982.js", "_app/immutable/chunks/index.1abc9ca4.js"], "stylesheets": [], "fonts": [] } },
    nodes: [
      () => Promise.resolve().then(() => (init__(), __exports)),
      () => Promise.resolve().then(() => (init__2(), __exports2)),
      () => Promise.resolve().then(() => (init__3(), __exports3)),
      () => Promise.resolve().then(() => (init__4(), __exports4)),
      () => Promise.resolve().then(() => (init__5(), __exports5)),
      () => Promise.resolve().then(() => (init__6(), __exports6)),
      () => Promise.resolve().then(() => (init__7(), __exports7)),
      () => Promise.resolve().then(() => (init__8(), __exports8)),
      () => Promise.resolve().then(() => (init__9(), __exports9)),
      () => Promise.resolve().then(() => (init__10(), __exports10))
    ],
    routes: [
      {
        id: "/api/email",
        pattern: /^\/api\/email\/?$/,
        params: [],
        page: null,
        endpoint: () => Promise.resolve().then(() => (init_server_ts(), server_ts_exports))
      },
      {
        id: "/[lang=lang]/(officialsite)",
        pattern: /^\/([^/]+?)\/?$/,
        params: [{ "name": "lang", "matcher": "lang", "optional": false, "rest": false, "chained": false }],
        page: { layouts: [0, 4], errors: [1, ,], leaf: 9 },
        endpoint: null
      },
      {
        id: "/[lang=lang]/(manual)/manual",
        pattern: /^\/([^/]+?)\/manual\/?$/,
        params: [{ "name": "lang", "matcher": "lang", "optional": false, "rest": false, "chained": false }],
        page: { layouts: [0, 2], errors: [1, ,], leaf: 5 },
        endpoint: null
      },
      {
        id: "/[lang=lang]/(manual)/manual/workspace",
        pattern: /^\/([^/]+?)\/manual\/workspace\/?$/,
        params: [{ "name": "lang", "matcher": "lang", "optional": false, "rest": false, "chained": false }],
        page: { layouts: [0, 2], errors: [1, ,], leaf: 6 },
        endpoint: null
      },
      {
        id: "/[lang=lang]/(manual)/manual/[maindir]/[subdir]",
        pattern: /^\/([^/]+?)\/manual\/([^/]+?)\/([^/]+?)\/?$/,
        params: [{ "name": "lang", "matcher": "lang", "optional": false, "rest": false, "chained": false }, { "name": "maindir", "optional": false, "rest": false, "chained": false }, { "name": "subdir", "optional": false, "rest": false, "chained": false }],
        page: { layouts: [0, 2], errors: [1, ,], leaf: 7 },
        endpoint: null
      },
      {
        id: "/[lang=lang]/(member)/member",
        pattern: /^\/([^/]+?)\/member\/?$/,
        params: [{ "name": "lang", "matcher": "lang", "optional": false, "rest": false, "chained": false }],
        page: { layouts: [0, 3], errors: [1, ,], leaf: 8 },
        endpoint: null
      }
    ],
    matchers: async () => {
      const { match: lang } = await Promise.resolve().then(() => (init_lang(), lang_exports));
      return { lang };
    }
  }
};

// build/server/_index.js
var server = new Server(manifest);
var init2 = server.init({ env: process.env });
async function handler(event) {
  var _a, _b;
  const { path, method } = (_a = getVersionRoute[event.version ?? "1.0"]) == null ? void 0 : _a.call(getVersionRoute, event);
  const queryString = (_b = getVersionQueryString[event.version ?? "1.0"]) == null ? void 0 : _b.call(getVersionQueryString, event);
  const { headers, body, isBase64Encoded } = event;
  const encoding = isBase64Encoded ? "base64" : headers && headers["content-encoding"] || "utf-8";
  const rawBody = typeof body === "string" ? Buffer.from(body, encoding) : body;
  headers.origin = process.env.ORIGIN ?? headers.origin ?? `https://${event.requestContext.domainName}`;
  const rawURL = `${headers.origin}${path}${queryString}`;
  await init2;
  const rendered = await server.respond(
    new Request(rawURL, {
      method,
      headers: new Headers(headers || {}),
      body: rawBody
    }),
    {
      getClientAddress() {
        return headers.get("x-forwarded-for");
      }
    }
  );
  if (rendered) {
    const resp = {
      headers: {
        "cache-control": "no-cache"
      },
      multiValueHeaders: {},
      body: await rendered.text(),
      statusCode: rendered.status
    };
    for (let k of rendered.headers.keys()) {
      const v = rendered.headers.get(k);
      if (v instanceof Array) {
        resp.multiValueHeaders[k] = v;
      } else {
        resp.headers[k] = v;
      }
    }
    return resp;
  }
  return {
    statusCode: 404,
    body: "Not found."
  };
}
var getVersionRoute = {
  "1.0": (event) => ({
    method: event.httpMethod,
    path: event.path
  }),
  "2.0": (event) => ({
    method: event.requestContext.http.method,
    path: event.requestContext.http.path
  })
};
var getVersionQueryString = {
  "1.0": (event) => parseQuery(event.multiValueQueryStringParameters),
  "2.0": (event) => event.rawQueryString && "?" + event.rawQueryString
};
function parseQuery(queryParams) {
  if (!queryParams)
    return "";
  let queryString = "?";
  for (let queryParamKey in queryParams) {
    for (let queryParamValue of queryParams[queryParamKey]) {
      if (queryString != "?") {
        queryString += "&";
      }
      queryString += `${queryParamKey}=${queryParamValue}`;
    }
  }
  return queryString;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
/*! Bundled license information:

undici/lib/fetch/body.js:
  (*! formdata-polyfill. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> *)

undici/lib/websocket/frame.js:
  (*! ws. MIT License. Einar Otto Stangvik <einaros@gmail.com> *)

cookie/index.js:
  (*!
   * cookie
   * Copyright(c) 2012-2014 Roman Shtylman
   * Copyright(c) 2015 Douglas Christopher Wilson
   * MIT Licensed
   *)
*/
