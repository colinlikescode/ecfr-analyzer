// Department data interface
export interface DepartmentData {
  name: string;
  wordCount: string;
  subAgencies: number;
  yearData?: {
    "2023": { month: "March"; wordCount: string };
    "2024": { month: "March"; wordCount: string };
    "2025": { month: "March"; wordCount: string };
  };
}

// Mock department data
export const departmentData: DepartmentData[] = [
  {
    name: "Department of Treasury",
    wordCount: "15,120,000",
    subAgencies: 13,
    yearData: {
      "2023": { month: "March", wordCount: "14,950,000" },
      "2024": { month: "March", wordCount: "15,120,000" },
      "2025": { month: "March", wordCount: "15,360,000" },
    },
  },
  {
    name: "Department of Agriculture",
    wordCount: "13,570,000",
    subAgencies: 28,
    yearData: {
      "2023": { month: "March", wordCount: "13,230,000" },
      "2024": { month: "March", wordCount: "13,570,000" },
      "2025": { month: "March", wordCount: "13,840,000" },
    },
  },
  {
    name: "Department of Health and Human Services",
    wordCount: "7,870,000",
    subAgencies: 10,
  },
  {
    name: "Department of Transportation",
    wordCount: "5,680,000",
    subAgencies: 12,
  },
  {
    name: "Department of Homeland Security",
    wordCount: "4,940,000",
    subAgencies: 10,
  },
  {
    name: "Department of Interior",
    wordCount: "4,410,000",
    subAgencies: 15,
  },
  {
    name: "Department of Labor",
    wordCount: "4,310,000",
    subAgencies: 12,
  },
  {
    name: "Department of Commerce",
    wordCount: "3,890,000",
    subAgencies: 15,
  },
  {
    name: "Department of Defense",
    wordCount: "3,360,000",
    subAgencies: 6,
  },
  {
    name: "Department of Education",
    wordCount: "2,945,321",
    subAgencies: 8,
  },
  {
    name: "Department of Energy",
    wordCount: "2,763,582",
    subAgencies: 9,
  },
  {
    name: "Department of Justice",
    wordCount: "3,521,459",
    subAgencies: 11,
  },
  {
    name: "Department of State",
    wordCount: "2,145,789",
    subAgencies: 7,
  },
  {
    name: "Department of Veterans Affairs",
    wordCount: "4,752,136",
    subAgencies: 5,
  },
  {
    name: "Environmental Protection Agency",
    wordCount: "1,896,425",
    subAgencies: 0,
  },
  {
    name: "Federal Communications Commission",
    wordCount: "1,235,648",
    subAgencies: 0,
  },
  {
    name: "Federal Trade Commission",
    wordCount: "957,321",
    subAgencies: 3,
  },
  {
    name: "National Aeronautics and Space Administration",
    wordCount: "2,687,541",
    subAgencies: 4,
  },
  {
    name: "National Science Foundation",
    wordCount: "1,124,875",
    subAgencies: 0,
  },
  {
    name: "Nuclear Regulatory Commission",
    wordCount: "856,214",
    subAgencies: 2,
    yearData: {
      "2023": { month: "March", wordCount: "840,532" },
      "2024": { month: "March", wordCount: "856,214" },
      "2025": { month: "March", wordCount: "873,190" },
    },
  },
  {
    name: "Small Business Administration",
    wordCount: "762,145",
    subAgencies: 3,
    yearData: {
      "2023": { month: "March", wordCount: "751,830" },
      "2024": { month: "March", wordCount: "762,145" },
      "2025": { month: "March", wordCount: "777,388" },
    },
  },
  {
    name: "Social Security Administration",
    wordCount: "1,943,762",
    subAgencies: 0,
    yearData: {
      "2023": { month: "March", wordCount: "1,910,228" },
      "2024": { month: "March", wordCount: "1,943,762" },
      "2025": { month: "March", wordCount: "1,982,637" },
    },
  },
  {
    name: "United States Agency for International Development",
    wordCount: "1,254,789",
    subAgencies: 5,
    yearData: {
      "2023": { month: "March", wordCount: "1,230,145" },
      "2024": { month: "March", wordCount: "1,254,789" },
      "2025": { month: "March", wordCount: "1,279,885" },
    },
  },
  {
    name: "Consumer Financial Protection Bureau",
    wordCount: "742,156",
    subAgencies: 0,
  },
  {
    name: "Office of Personnel Management",
    wordCount: "678,912",
    subAgencies: 2,
  },
  {
    name: "Federal Housing Finance Agency",
    wordCount: "521,478",
    subAgencies: 1,
  },
  {
    name: "National Archives and Records Administration",
    wordCount: "875,326",
    subAgencies: 0,
  },
  {
    name: "Peace Corps",
    wordCount: "324,175",
    subAgencies: 0,
  },
  {
    name: "Federal Election Commission",
    wordCount: "412,963",
    subAgencies: 0,
  },
  {
    name: "Federal Reserve System",
    wordCount: "3,245,619",
    subAgencies: 12,
  },
  {
    name: "General Services Administration",
    wordCount: "2,156,478",
    subAgencies: 8,
  },
  {
    name: "Equal Employment Opportunity Commission",
    wordCount: "524,368",
    subAgencies: 0,
  },
  {
    name: "Federal Maritime Commission",
    wordCount: "327,854",
    subAgencies: 0,
  },
  {
    name: "National Labor Relations Board",
    wordCount: "658,741",
    subAgencies: 2,
  },
  {
    name: "Securities and Exchange Commission",
    wordCount: "1,897,423",
    subAgencies: 5,
  },
  {
    name: "Commodity Futures Trading Commission",
    wordCount: "748,965",
    subAgencies: 0,
  },
  {
    name: "National Endowment for the Arts",
    wordCount: "214,569",
    subAgencies: 0,
  },
  {
    name: "National Endowment for the Humanities",
    wordCount: "228,456",
    subAgencies: 0,
  },
  {
    name: "Office of the Director of National Intelligence",
    wordCount: "1,423,785",
    subAgencies: 17,
  },
  {
    name: "Export-Import Bank of the United States",
    wordCount: "387,562",
    subAgencies: 0,
  },
  {
    name: "Federal Deposit Insurance Corporation",
    wordCount: "1,245,789",
    subAgencies: 3,
  },
  {
    name: "Farm Credit Administration",
    wordCount: "365,214",
    subAgencies: 0,
  },
  {
    name: "Overseas Private Investment Corporation",
    wordCount: "412,658",
    subAgencies: 0,
  },
  {
    name: "Pension Benefit Guaranty Corporation",
    wordCount: "567,123",
    subAgencies: 2,
  },
  {
    name: "Railroad Retirement Board",
    wordCount: "325,478",
    subAgencies: 0,
  },
  {
    name: "Selective Service System",
    wordCount: "156,784",
    subAgencies: 0,
  },
  {
    name: "Tennessee Valley Authority",
    wordCount: "754,326",
    subAgencies: 0,
  },
  {
    name: "Trade and Development Agency",
    wordCount: "247,895",
    subAgencies: 0,
  },
  {
    name: "United States Holocaust Memorial Museum",
    wordCount: "312,458",
    subAgencies: 0,
  },
  {
    name: "United States Postal Service",
    wordCount: "3,564,127",
    subAgencies: 0,
  },
];
