/** @format */
import activeimg from "../../../assets/Dashboard/dashboard/active.svg";
import ai from "../../../assets/Dashboard/dashboard/ai.svg";
import time from "../../../assets/Dashboard/dashboard/time.svg";
import contact from "../../../assets/Dashboard/dashboard/contact.svg";
import score from "../../../assets/Dashboard/dashboard/score.svg";
import convo from "../../../assets/Dashboard/intelligence/roi/convo.svg";
import cost from "../../../assets/Dashboard/intelligence/roi/cost.svg";
import agent_svg from "../../../assets/Dashboard/intelligence/roi/agent.svg";
import agent from "../../../assets/Dashboard/dashboard/agent.svg";

import gain from "../../../assets/Dashboard/intelligence/roi/gain.svg";
import rate from "../../../assets/Dashboard/intelligence/agent/agent.svg";
import confidence from "../../../assets/Dashboard/intelligence/agent/confidence.svg";
import negative from "../../../assets/Dashboard/intelligence/customer/negative.svg";
import low from "../../../assets/Dashboard/intelligence/customer/low.svg";
import { useContext } from "react";
import { ReportContext } from "../../../contexts/Context";
import { useNavigate, useSearchParams } from "react-router-dom";
import Health from "./Health/Health";
import CustomerSatisfaction from "./CustomerSatisfaction/CustomerSatisfaction";
import ROI from "./ROI/ROI";
import Performance from "./Performance/Performance";

const safeMetricValue = (value) => {
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (typeof value === "string" && value.trim() !== "")
    return Number(value) || 0;
  if (Array.isArray(value)) return value.length;
  return 0;
};
export default function Reports() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const typeParam = searchParams.get("type");
  const active = typeParam || "health";

  const {
    totalConversations,
    resolved,
    responseTime,
    Csat,
    liveAgentResolved,
    contacts,
  } = useContext(ReportContext);
  const list = [
    {
      svg: activeimg,
      text: "Total conversations",
      number: safeMetricValue(totalConversations.value),
      increase: `↑ ${safeMetricValue(totalConversations.percentChange)}% vs last week`,
    },
    {
      svg: ai,
      text: "Closed tickets",
      number: `${safeMetricValue(liveAgentResolved.percent)}%`,
      increase: `↑ ${safeMetricValue(liveAgentResolved.percentChange)}% vs last week`,
    },
    {
      svg: ai,
      text: "Resolved by AI",
      number: `${safeMetricValue(resolved.percent)}%`,
      increase: `↑ ${safeMetricValue(resolved.percentChange)}% vs last week`,
    },
    {
      svg: score,
      text: "SLA compliance",
      number: `${safeMetricValue(Csat.value)}/${safeMetricValue(Csat.scale)}`,
      increase: `↑ ${safeMetricValue(Csat.delta)}% vs last week`,
    },
    {
      svg: time,
      text: "Avg. resolution time",
      number: `${responseTime.seconds}s`,
      increase: `↑ faster by ${safeMetricValue.deltaSeconds}s`,
    },
    {
      svg: contact,
      text: "New contacts",
      number: safeMetricValue(contacts.value),
      increase: `↑ ${safeMetricValue(contacts.percentChange)}% vs last week`,
    },
  ];

  const customer_list = [
    {
      svg: score,
      text: "Overall CSAT",
      number: `${safeMetricValue(Csat.value)}/${safeMetricValue(Csat.scale)}`,
      increase: `↑ ${safeMetricValue(Csat.delta)}% vs last week`,
    },
    {
      svg: confidence,
      text: "Positive Sentiment",
      number: `${safeMetricValue(liveAgentResolved.percent)}%`,
      increase: `↑ ${safeMetricValue(totalConversations.percentChange)}% vs last week`,
    },
    {
      svg: negative,
      text: "Neutral Sentiment",
      number: `${safeMetricValue(liveAgentResolved.percent)}%`,
      increase: `↑ ${safeMetricValue(liveAgentResolved.percentChange)}% vs last week`,
    },
    {
      svg: low,
      text: "Low CSAT alerts",
      number: `${safeMetricValue(Csat.value)}/${safeMetricValue(Csat.scale)}`,
      increase: `↑ ${safeMetricValue(Csat.delta)}% vs last week`,
    },
  ];

  const agent_list = [
    {
      svg: rate,
      text: "AI resolution rate",
      // number: `${safeMetricValue(Csat.value)}/${safeMetricValue(Csat.scale)}`,
      number: "90%",
      increase: `↑ ${safeMetricValue(Csat.delta)}% vs last week`,
    },
    {
      svg: confidence,
      text: "Avg. AI confidence",
      number: `${safeMetricValue(liveAgentResolved.percent)}%`,
      increase: `↑ ${safeMetricValue(totalConversations.percentChange)}% vs last week`,
    },
    {
      svg: agent,
      text: "Live agent utilisation",
      number: `${safeMetricValue(liveAgentResolved.percent)}%`,
      increase: `↑ ${safeMetricValue(liveAgentResolved.percentChange)}% vs last week`,
    },
    {
      svg: score,
      text: "AI vs Live agent CSAT",
      // number: `${safeMetricValue(Csat.value)}/${safeMetricValue(Csat.scale)}`,
      number: "4.8 vs 4.0",
    },
  ];

  const cost_list = [
    {
      svg: convo,
      text: "Cost per conversation (est.)",
      // number: `${safeMetricValue(Csat.value)}/${safeMetricValue(Csat.scale)}`,
      number: "₦180",
    },
    {
      svg: cost,
      text: "AI cost savings (est.)",
      // number: `${safeMetricValue(liveAgentResolved.percent)}%`,
      number: "₦2,840,000",
      increase: `↑ ${safeMetricValue(totalConversations.percentChange)}% vs last week`,
    },
    {
      svg: agent_svg,
      text: "Agent hours freed by AI",
      // number: `${safeMetricValue(liveAgentResolved.percent)}%`,
      number: "1,286 hrs",
      increase: `↑ ${safeMetricValue(liveAgentResolved.percentChange)}% vs last week`,
    },
    {
      svg: gain,
      text: "Productivity gain from AI co-pilot",
      // number: `${safeMetricValue(Csat.value)}/${safeMetricValue(Csat.scale)}`,
      number: "+34%",
    },
  ];

  return (
    <div className="flex flex-col  gap-y-10 pl-6 mt-5 lg:h-140 2xl:h-190 overflow-scroll no-scrollbar w-auto pr-6">
      <div className="flex items-center justify-between">
        <div className="p-1 border border-light-grey rounded-xl w-fit flex items-center gap-x-3 pr-5">
          {" "}
          <span
            className={
              active === "health"
                ? "cursor-pointer bg-pink border text-bg border-pink px-3 py-1.5 rounded-lg"
                : "cursor-pointer text-black font-normal px-3 py-1.5"
            }
            onClick={() => navigate("/intelligence")}
          >
            Operational Health
          </span>
          <span
            className={
              active === "customer_satisfaction"
                ? "cursor-pointer bg-pink border text-bg border-pink px-3 py-1.5 rounded-lg"
                : "cursor-pointer text-black font-normal px-3 py-1.5"
            }
            onClick={() => navigate("/intelligence?type=customer_satisfaction")}
          >
            Customer Satisfaction
          </span>
          <span
            className={
              active === "performance"
                ? "cursor-pointer bg-pink border text-bg border-pink px-3 py-1.5 rounded-lg"
                : "cursor-pointer text-black font-normal px-3 py-1.5"
            }
            onClick={() => navigate("/intelligence?type=performance")}
          >
            AI & Agent Performance
          </span>
          <span
            className={
              active === "cost_roi"
                ? "cursor-pointer bg-pink border text-bg border-pink px-3 py-1.5 rounded-lg"
                : "cursor-pointer text-black font-normal px-3 py-1.5"
            }
            onClick={() => navigate("/intelligence?type=cost_roi")}
          >
            Cost & ROI
          </span>
        </div>
        {/*Details */}
        <div className="flex relative items-center gap-x-5">
          {/*dropdown for all channels */}
          <div className="flex items-center gap-x-2 border border-light-grey py-1.5 px-3 rounded-lg shadow-sm">
            <span className="text-light-black text-sm font-semibold">
              All Channels{" "}
            </span>
            <svg
              cursor={"pointer"}
              width="24"
              height="24"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.5">
                <path
                  d="M4 6L8 10L12 6"
                  stroke="currentColor"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          </div>
          {/*dropdown for all time */}
          <div className="flex items-center gap-x-2 border border-light-grey py-1.5 px-3 rounded-lg shadow-sm">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.6665 0.833008C7.12674 0.833008 7.49984 1.2061 7.49984 1.66634V2.49967H12.4998V1.66634C12.4998 1.2061 12.8729 0.833008 13.3332 0.833008C13.7934 0.833008 14.1665 1.2061 14.1665 1.66634V2.49967H14.9998C16.8408 2.49967 18.3332 3.99206 18.3332 5.83301V14.9997C18.3332 16.8406 16.8408 18.333 14.9998 18.333H4.99984C3.15889 18.333 1.6665 16.8406 1.6665 14.9997V5.83301C1.6665 3.99206 3.15889 2.49967 4.99984 2.49967H5.83317V1.66634C5.83317 1.2061 6.20627 0.833008 6.6665 0.833008ZM12.4998 4.16634C12.4998 4.62658 12.8729 4.99967 13.3332 4.99967C13.7934 4.99967 14.1665 4.62658 14.1665 4.16634H14.9998C15.9203 4.16634 16.6665 4.91253 16.6665 5.83301V6.24967H3.33317V5.83301C3.33317 4.91253 4.07936 4.16634 4.99984 4.16634H5.83317C5.83317 4.62658 6.20627 4.99967 6.6665 4.99967C7.12674 4.99967 7.49984 4.62658 7.49984 4.16634H12.4998ZM16.6665 7.91634H3.33317V14.9997C3.33317 15.9201 4.07936 16.6663 4.99984 16.6663H14.9998C15.9203 16.6663 16.6665 15.9201 16.6665 14.9997V7.91634Z"
                fill="#2B2B2B"
                fillOpacity="0.8"
              />
            </svg>
            <span className="text-light-black text-sm font-semibold">
              All time{" "}
            </span>
            <svg
              cursor={"pointer"}
              width="24"
              height="24"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.5">
                <path
                  d="M4 6L8 10L12 6"
                  stroke="currentColor"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          </div>

          {/*Download CSV button */}
          <button className="flex items-center gap-x-2 rounded-lg  border border-light-grey text-black text-sm font-semibold py-2.5 px-3 cursor-pointer hover:opacity-50">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.3333 14.1667L9.99996 17.5L6.66663 14.1667M9.99996 17.5V10M16.6666 13.9524C17.6845 13.1117 18.3333 11.8399 18.3333 10.4167C18.3333 7.88536 16.2813 5.83333 13.75 5.83333C13.5679 5.83333 13.3975 5.73833 13.3051 5.58145C12.2183 3.73736 10.212 2.5 7.91663 2.5C4.46485 2.5 1.66663 5.29822 1.66663 8.75C1.66663 10.4718 2.36283 12.0309 3.48908 13.1613"
                stroke="currentColor"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Download CSV
          </button>
        </div>
      </div>

      <>
        {active === "health" && <Health list={list} />}
        {active === "customer_satisfaction" && (
          <CustomerSatisfaction list={customer_list} />
        )}
        {active === "performance" && <Performance list={agent_list} />}
        {active === "cost_roi" && <ROI list={cost_list} />}
      </>
    </div>
  );
}
