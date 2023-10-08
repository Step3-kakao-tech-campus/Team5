import { rest } from "msw";
import {
  portfolioList1,
  portfolioList2,
  portfolioList3,
  portfolioDetail,
  sucess,
} from "./responseData";

async function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export const portfolioHandlers = [
  // /portfolios?page={page}
  rest.get("/portfolios", async (req, res, ctx) => {
    await sleep(500);
    const isAuthenticated = localStorage.getItem("token");
    const page = req.url.searchParams.get("page");
    if (!isAuthenticated) {
      return res(
        ctx.status(403),
        ctx.json({
          code: 403,
          message: "Not authorized",
        }),
      );
    }
    if (page === "1") {
      return res(ctx.status(200), ctx.json(portfolioList1));
    }
    if (page === "2") {
      return res(ctx.status(200), ctx.json(portfolioList2));
    }
    if (page === "3") {
      return res(ctx.status(200), ctx.json(portfolioList3));
    }
    return res(
      ctx.status(200),
      ctx.json({ success: true, response: [], error: null }),
    );
  }),

  // /portfolios/{portfolioId}
  rest.get("/portfolios/:portfolioId", async (req, res, ctx) => {
    await sleep(500);
    const isAuthenticated = localStorage.getItem("token");
    if (!isAuthenticated) {
      return res(
        ctx.status(403),
        ctx.json({
          code: 403,
          message: "Not authorized",
        }),
      );
    }
    return res(ctx.status(200), ctx.json(portfolioDetail));
  }),

  // /portfolios
  rest.post("/portfolios", async (req, res, ctx) => {
    await sleep(500);
    const isAuthenticated = localStorage.getItem("token");
    if (!isAuthenticated) {
      return res(
        ctx.status(403),
        ctx.json({
          code: 403,
          message: "Not authorized",
        }),
      );
    }
    return res(ctx.status(200), ctx.json(sucess));
  }),

  // /portfolios
  rest.put("/portfolios", async (req, res, ctx) => {
    await sleep(500);
    const isAuthenticated = localStorage.getItem("token");
    if (!isAuthenticated) {
      return res(
        ctx.status(403),
        ctx.json({
          code: 403,
          message: "Not authorized",
        }),
      );
    }
    return res(ctx.status(200), ctx.json(sucess));
  }),

  // /portfolios
  rest.delete("/portfolios", async (req, res, ctx) => {
    await sleep(500);
    const isAuthenticated = localStorage.getItem("token");
    if (!isAuthenticated) {
      return res(
        ctx.status(403),
        ctx.json({
          code: 403,
          message: "Not authorized",
        }),
      );
    }
    return res(ctx.status(200), ctx.json(sucess));
  }),
];
