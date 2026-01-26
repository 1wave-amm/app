import { A as B, y as N, z as P, C as R, D as T, F, G as O, J as j, K as b, L as q, M as $, N as D, O as H, P as U, Q as k, j as W, R as V, S as G, h as S, V as v, W as K, B as C, X as J, Y as Q, Z as z, _ as X, $ as I, a0 as Y, a1 as Z, a2 as M, a3 as ee, a4 as E, a5 as te, i as se, s as ne, a6 as ae, a7 as re, a8 as oe, a9 as ie, aa as ce } from "./embeddable-entry-DYHIgI6c.js";
function me(t, e) {
  if (t.length !== e.length)
    throw new B({
      expectedLength: t.length,
      givenLength: e.length
    });
  const o = [];
  for (let i = 0; i < t.length; i++) {
    const u = t[i], c = e[i];
    o.push(_(u, c));
  }
  return N(o);
}
function _(t, e, o = !1) {
  if (t === "address") {
    const a = e;
    if (!P(a))
      throw new R({ address: a });
    return T(a.toLowerCase(), {
      size: o ? 32 : null
    });
  }
  if (t === "string")
    return F(e);
  if (t === "bytes")
    return e;
  if (t === "bool")
    return T(O(e), { size: o ? 32 : 1 });
  const i = t.match(j);
  if (i) {
    const [a, s, d = "256"] = i, l = Number.parseInt(d, 10) / 8;
    return b(e, {
      size: o ? 32 : l,
      signed: s === "int"
    });
  }
  const u = t.match(q);
  if (u) {
    const [a, s] = u;
    if (Number.parseInt(s, 10) !== (e.length - 2) / 2)
      throw new $({
        expectedSize: Number.parseInt(s, 10),
        givenSize: (e.length - 2) / 2
      });
    return T(e, { dir: "right", size: o ? 32 : null });
  }
  const c = t.match(D);
  if (c && Array.isArray(e)) {
    const [a, s] = c, d = [];
    for (let l = 0; l < e.length; l++)
      d.push(_(s, e[l], !0));
    return d.length === 0 ? "0x" : N(d);
  }
  throw new H(t);
}
function ue(t) {
  const { source: e } = t, o = /* @__PURE__ */ new Map(), i = new U(8192), u = /* @__PURE__ */ new Map(), c = ({ address: a, chainId: s }) => `${a}.${s}`;
  return {
    async consume({ address: a, chainId: s, client: d }) {
      const l = c({ address: a, chainId: s }), n = this.get({ address: a, chainId: s, client: d });
      this.increment({ address: a, chainId: s });
      const y = await n;
      return await e.set({ address: a, chainId: s }, y), i.set(l, y), y;
    },
    async increment({ address: a, chainId: s }) {
      const d = c({ address: a, chainId: s }), l = o.get(d) ?? 0;
      o.set(d, l + 1);
    },
    async get({ address: a, chainId: s, client: d }) {
      const l = c({ address: a, chainId: s });
      let n = u.get(l);
      return n || (n = (async () => {
        try {
          const p = await e.get({ address: a, chainId: s, client: d }), r = i.get(l) ?? 0;
          return r > 0 && p <= r ? r + 1 : (i.delete(l), p);
        } finally {
          this.reset({ address: a, chainId: s });
        }
      })(), u.set(l, n)), (o.get(l) ?? 0) + await n;
    },
    reset({ address: a, chainId: s }) {
      const d = c({ address: a, chainId: s });
      o.delete(d), u.delete(d);
    }
  };
}
function de() {
  return {
    async get(t) {
      const { address: e, client: o } = t;
      return k(o, {
        address: e,
        blockTag: "pending"
      });
    },
    set() {
    }
  };
}
const we = /* @__PURE__ */ ue({
  source: de()
}), le = "0x6492649264926492649264926492649264926492649264926492649264926492", ye = "0x0000000000000000000000000000000000000000000000000000000000000000";
function be(t) {
  const { address: e, data: o, signature: i, to: u = "hex" } = t, c = N([
    W([{ type: "address" }, { type: "bytes" }, { type: "bytes" }], [e, o, i]),
    le
  ]);
  return u === "hex" ? c : V(c);
}
const A = "0x5792579257925792579257925792579257925792579257925792579257925792", L = b(0, {
  size: 32
});
async function xe(t, e) {
  const { account: o = t.account, capabilities: i, chain: u = t.chain, experimental_fallback: c, experimental_fallbackDelay: a = 32, forceAtomic: s = !1, id: d, version: l = "2.0.0" } = e, n = o ? v(o) : null, y = e.calls.map((p) => {
    const r = p, g = r.abi ? G({
      abi: r.abi,
      functionName: r.functionName,
      args: r.args
    }) : r.data;
    return {
      data: r.dataSuffix && g ? S([g, r.dataSuffix]) : g,
      to: r.to,
      value: r.value ? b(r.value) : void 0
    };
  });
  try {
    const p = await t.request({
      method: "wallet_sendCalls",
      params: [
        {
          atomicRequired: s,
          calls: y,
          capabilities: i,
          chainId: b(u.id),
          from: n == null ? void 0 : n.address,
          id: d,
          version: l
        }
      ]
    }, { retryCount: 0 });
    return typeof p == "string" ? { id: p } : p;
  } catch (p) {
    const r = p;
    if (c && (r.name === "MethodNotFoundRpcError" || r.name === "MethodNotSupportedRpcError" || r.name === "UnknownRpcError" || r.details.toLowerCase().includes("does not exist / is not available") || r.details.toLowerCase().includes("missing or invalid. request()") || r.details.toLowerCase().includes("did not match any variant of untagged enum") || r.details.toLowerCase().includes("account upgraded to unsupported contract") || r.details.toLowerCase().includes("eip-7702 not supported") || r.details.toLowerCase().includes("unsupported wc_ method") || // magic.link
    r.details.toLowerCase().includes("feature toggled misconfigured") || // Trust Wallet
    r.details.toLowerCase().includes("jsonrpcengine: response has no error or result for request"))) {
      if (i && Object.values(i).some((w) => !w.optional)) {
        const w = "non-optional `capabilities` are not supported on fallback to `eth_sendTransaction`.";
        throw new K(new C(w, {
          details: w
        }));
      }
      if (s && y.length > 1) {
        const h = "`forceAtomic` is not supported on fallback to `eth_sendTransaction`.";
        throw new J(new C(h, {
          details: h
        }));
      }
      const g = [];
      for (const h of y) {
        const w = Q(t, {
          account: n,
          chain: u,
          data: h.data,
          to: h.to,
          value: h.value ? z(h.value) : void 0
        });
        g.push(w), a > 0 && await new Promise((x) => setTimeout(x, a));
      }
      const m = await Promise.allSettled(g);
      if (m.every((h) => h.status === "rejected"))
        throw m[0].reason;
      const f = m.map((h) => h.status === "fulfilled" ? h.value : L);
      return {
        id: S([
          ...f,
          b(u.id, { size: 32 }),
          A
        ])
      };
    }
    throw X(p, {
      ...e,
      account: n,
      chain: e.chain
    });
  }
}
async function fe(t, e) {
  async function o(n) {
    if (n.endsWith(A.slice(2))) {
      const p = Z(M(n, -64, -32)), r = M(n, 0, -64).slice(2).match(/.{1,64}/g), g = await Promise.all(r.map((f) => L.slice(2) !== f ? t.request({
        method: "eth_getTransactionReceipt",
        params: [`0x${f}`]
      }, { dedupe: !0 }) : void 0)), m = g.some((f) => f === null) ? 100 : g.every((f) => (f == null ? void 0 : f.status) === "0x1") ? 200 : g.every((f) => (f == null ? void 0 : f.status) === "0x0") ? 500 : 600;
      return {
        atomic: !1,
        chainId: I(p),
        receipts: g.filter(Boolean),
        status: m,
        version: "2.0.0"
      };
    }
    return t.request({
      method: "wallet_getCallsStatus",
      params: [n]
    });
  }
  const { atomic: i = !1, chainId: u, receipts: c, version: a = "2.0.0", ...s } = await o(e.id), [d, l] = (() => {
    const n = s.status;
    return n >= 100 && n < 200 ? ["pending", n] : n >= 200 && n < 300 ? ["success", n] : n >= 300 && n < 700 ? ["failure", n] : n === "CONFIRMED" ? ["success", 200] : n === "PENDING" ? ["pending", 100] : [void 0, n];
  })();
  return {
    ...s,
    atomic: i,
    // @ts-expect-error: for backwards compatibility
    chainId: u ? I(u) : void 0,
    receipts: (c == null ? void 0 : c.map((n) => ({
      ...n,
      blockNumber: z(n.blockNumber),
      gasUsed: z(n.gasUsed),
      status: Y[n.status]
    }))) ?? [],
    statusCode: l,
    status: d,
    version: a
  };
}
async function Ce(t, e) {
  var d;
  const { account: o = t.account, chainId: i, nonce: u } = e;
  if (!o)
    throw new ee({
      docsPath: "/docs/eip7702/prepareAuthorization"
    });
  const c = v(o), a = (() => {
    if (e.executor)
      return e.executor === "self" ? e.executor : v(e.executor);
  })(), s = {
    address: e.contractAddress ?? e.address,
    chainId: i,
    nonce: u
  };
  return typeof s.chainId > "u" && (s.chainId = ((d = t.chain) == null ? void 0 : d.id) ?? await E(t, te, "getChainId")({})), typeof s.nonce > "u" && (s.nonce = await E(t, k, "getTransactionCount")({
    address: c.address,
    blockTag: "pending"
  }), (a === "self" || a != null && a.address && se(a.address, c.address)) && (s.nonce += 1)), s;
}
class pe extends C {
  constructor(e) {
    super(`Call bundle failed with status: ${e.statusCode}`, {
      name: "BundleFailedError"
    }), Object.defineProperty(this, "result", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.result = e;
  }
}
async function Te(t, e) {
  const {
    id: o,
    pollingInterval: i = t.pollingInterval,
    status: u = ({ statusCode: m }) => m === 200 || m >= 300,
    retryCount: c = 4,
    retryDelay: a = ({ count: m }) => ~~(1 << m) * 200,
    // exponential backoff
    timeout: s = 6e4,
    throwOnFailure: d = !1
  } = e, l = ne(["waitForCallsStatus", t.uid, o]), { promise: n, resolve: y, reject: p } = ae();
  let r;
  const g = re(l, { resolve: y, reject: p }, (m) => {
    const f = oe(async () => {
      const h = (w) => {
        clearTimeout(r), f(), w(), g();
      };
      try {
        const w = await ie(async () => {
          const x = await E(t, fe, "getCallsStatus")({ id: o });
          if (d && x.status === "failure")
            throw new pe(x);
          return x;
        }, {
          retryCount: c,
          delay: a
        });
        if (!u(w))
          return;
        h(() => m.resolve(w));
      } catch (w) {
        h(() => m.reject(w));
      }
    }, {
      interval: i,
      emitOnBegin: !0
    });
    return f;
  });
  return r = s ? setTimeout(() => {
    g(), clearTimeout(r), p(new he({ id: o }));
  }, s) : void 0, await n;
}
class he extends C {
  constructor({ id: e }) {
    super(`Timed out while waiting for call bundle with id "${e}" to be confirmed.`, { name: "WaitForCallsStatusTimeoutError" });
  }
}
function ve(t) {
  const { r: e, s: o } = ce.Signature.fromCompact(t.slice(2, 130)), i = +`0x${t.slice(130)}`, [u, c] = (() => {
    if (i === 0 || i === 1)
      return [void 0, i];
    if (i === 27)
      return [BigInt(i), 0];
    if (i === 28)
      return [BigInt(i), 1];
    throw new Error("Invalid yParityOrV value");
  })();
  return typeof u < "u" ? {
    r: b(e, { size: 32 }),
    s: b(o, { size: 32 }),
    v: u,
    yParity: c
  } : {
    r: b(e, { size: 32 }),
    s: b(o, { size: 32 }),
    yParity: c
  };
}
export {
  pe as B,
  he as W,
  ve as a,
  le as b,
  ue as c,
  xe as d,
  me as e,
  fe as g,
  we as n,
  Ce as p,
  be as s,
  Te as w,
  ye as z
};
