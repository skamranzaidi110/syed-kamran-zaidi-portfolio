export type Project = {
  slug: string;
  title: string;
  category: "Power BI" | "Data Analysis" | "Machine Learning";
  summary: string;
  tools: string[];
  year: string;
  overview: string;
  approach: string[];
  outcome: string;
  metrics: { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    slug: "app-store-category-analysis",
    title: "Popular App Categories on Google Play",
    category: "Data Analysis",
    summary:
      "An exploratory analysis of the Google Play Store catalogue to find which app categories draw the most installs, ratings, and revenue potential.",
    tools: ["Python", "Pandas", "EDA", "Power BI"],
    year: "2023",
    overview:
      "The Play Store dataset mixes free and paid apps across dozens of categories with inconsistent formatting — install counts as text, ratings with missing values, and pricing in mixed currencies. The goal was to clean this into a dataset that could answer a simple business question: where should a new app be positioned to have the best odds of visibility?",
    approach: [
      "Cleaned and normalized install counts, price fields, and category labels using Pandas.",
      "Ran exploratory analysis across category, rating, and install-count distributions to isolate outliers and duplicate listings.",
      "Segmented free versus paid apps by category to compare install volume against monetization potential.",
      "Built summary visuals to communicate category-level opportunity to a non-technical audience.",
    ],
    outcome:
      "Surfaced a small set of categories with high install volume but comparatively low competition — the kind of gap a new entrant could target rather than competing head-on with saturated categories.",
    metrics: [
      { label: "Records cleaned", value: "10K+" },
      { label: "Categories compared", value: "30+" },
    ],
  },
  {
    slug: "chinook-music-store-optimization",
    title: "Chinook Music Store Optimization",
    category: "Data Analysis",
    summary:
      "SQL-driven analysis of the Chinook sales database to find which genres, artists, and markets were quietly driving — or dragging — profitability.",
    tools: ["SQL", "Query Optimization", "Power BI"],
    year: "2023",
    overview:
      "Chinook is a relational sample database modelling a digital media store: customers, invoices, tracks, and genres spread across a normalized schema. Rather than treat it as a toy dataset, this project approached it the way a real store's finance team would — asking where margin was actually being made.",
    approach: [
      "Wrote and tuned multi-table SQL queries joining invoices, tracks, genres, and customer geography.",
      "Identified top and bottom performing genres and artists by revenue per invoice line, not just raw volume.",
      "Analyzed customer purchase patterns by country to flag underserved markets.",
      "Translated query output into a small set of recommendations a store manager could act on directly.",
    ],
    outcome:
      "Identified specific genre and market combinations generating disproportionate revenue per transaction, along with catalogue segments that were high-volume but low-margin.",
    metrics: [
      { label: "Tables joined", value: "7" },
      { label: "Markets analyzed", value: "24" },
    ],
  },
  {
    slug: "exchange-rate-storytelling",
    title: "Storytelling Data Visualization on Exchange Rates",
    category: "Power BI",
    summary:
      "A narrative-driven dashboard tracking currency exchange rate movement over time, built to make a volatile dataset legible to a general audience.",
    tools: ["Power BI", "DAX", "Time Intelligence"],
    year: "2023",
    overview:
      "Exchange rate data is dense and technical by default — long time series, small percentage moves, and terminology that means little outside finance. The brief here was self-set: take that raw series and design a dashboard that explains the story in the numbers rather than just displaying them.",
    approach: [
      "Built DAX time-intelligence measures for period-over-period and rolling-average rate movement.",
      "Designed a visual sequence — trend, volatility, and turning points — rather than a single dense chart.",
      "Used annotation and color deliberately to mark the periods that mattered instead of decorating every point.",
    ],
    outcome:
      "Produced a dashboard that a non-analyst reader could follow top to bottom and come away understanding not just what the rate did, but when and why it mattered.",
    metrics: [
      { label: "Years of data", value: "5" },
      { label: "DAX measures", value: "18" },
    ],
  },
  {
    slug: "t20-cricket-score-prediction",
    title: "T20 Cricket Score Prediction",
    category: "Machine Learning",
    summary:
      "A regression-based model that predicts a T20 innings' final score from in-match variables like overs bowled, wickets lost, and current run rate.",
    tools: ["Python", "Scikit-Learn", "Feature Engineering"],
    year: "2024",
    overview:
      "T20 scoring is nonlinear — the same run rate means something different at over 4 than at over 18. This project built a predictive model that could estimate a realistic final score at any point in an innings, the same judgment call commentators make on air, but grounded in historical match data.",
    approach: [
      "Engineered features capturing match phase, run rate trend, and wickets-in-hand rather than raw totals alone.",
      "Trained and compared regression models, validating against held-out innings data.",
      "Evaluated prediction error specifically in the death-overs phase, where variance is highest and predictions matter most.",
    ],
    outcome:
      "Delivered a model that tracked closely with actual final scores in the middle overs and meaningfully tightened prediction error versus a naive run-rate extrapolation.",
    metrics: [
      { label: "Matches modeled", value: "500+" },
      { label: "Features engineered", value: "12" },
    ],
  },
  {
    slug: "car-price-prediction-rfe",
    title: "Car Price Prediction with Linear Regression + RFE",
    category: "Machine Learning",
    summary:
      "A linear regression model for used-car pricing, with Recursive Feature Elimination used to cut a wide feature set down to what actually predicts price.",
    tools: ["Python", "Scikit-Learn", "RFE", "Linear Regression"],
    year: "2024",
    overview:
      "The raw dataset carried dozens of car attributes — engine specs, dimensions, trim details — many of them redundant or irrelevant to price. Rather than throw every feature at the model, the project treated feature selection as the core problem: what actually explains price, and what's just noise correlated with it?",
    approach: [
      "Built a baseline linear regression model across the full feature set to establish reference accuracy.",
      "Applied Recursive Feature Elimination to iteratively strip features and re-test model performance.",
      "Validated the reduced model against held-out data to confirm accuracy held after simplification.",
    ],
    outcome:
      "Cut the feature set substantially while maintaining prediction accuracy, producing a leaner, more interpretable model that made clear which specs actually drive used-car pricing.",
    metrics: [
      { label: "Features reduced", value: "~60%" },
      { label: "R² retained", value: "High" },
    ],
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);
